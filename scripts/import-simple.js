import fs from 'fs';
import { createClient } from '@sanity/client';

const SANITY_PROJECT_ID = process.env.SANITY_PROJECT_ID;
const SANITY_DATASET = process.env.SANITY_DATASET || 'production';
const SANITY_API_TOKEN = process.env.SANITY_API_TOKEN;

if (!SANITY_PROJECT_ID || !SANITY_API_TOKEN) {
  console.error('[v0] Missing required environment variables');
  process.exit(1);
}

const client = createClient({
  projectId: SANITY_PROJECT_ID,
  dataset: SANITY_DATASET,
  token: SANITY_API_TOKEN,
  apiVersion: '2024-01-01',
});

// Simple XML parser for WordPress export
function parseXmlItems(xmlString) {
  const items = [];
  const itemRegex = /<item>([\s\S]*?)<\/item>/g;
  let match;
  
  while ((match = itemRegex.exec(xmlString)) !== null) {
    const itemXml = match[1];
    
    // Extract post type
    const typeMatch = itemXml.match(/<wp:post_type>([^<]+)<\/wp:post_type>/);
    const postType = typeMatch ? typeMatch[1] : 'post';
    
    // Extract status
    const statusMatch = itemXml.match(/<wp:status>([^<]+)<\/wp:status>/);
    const status = statusMatch ? statusMatch[1] : 'draft';
    
    // Only process published posts
    if (postType !== 'post' || status !== 'publish') continue;
    
    // Extract title
    const titleMatch = itemXml.match(/<title>([^<]+)<\/title>/);
    const title = titleMatch ? titleMatch[1] : 'Untitled';
    
    // Extract link for slug
    const linkMatch = itemXml.match(/<link>([^<]+)<\/link>/);
    const link = linkMatch ? linkMatch[1] : '';
    const slug = link.split('/').filter(Boolean).pop() || title.toLowerCase().replace(/\s+/g, '-');
    
    // Extract publish date
    const pubDateMatch = itemXml.match(/<pubDate>([^<]+)<\/pubDate>/);
    const pubDate = pubDateMatch ? pubDateMatch[1] : new Date().toISOString();
    
    // Extract content
    const contentMatch = itemXml.match(/<content:encoded><!?\[CDATA\[([\s\S]*?)\]\]><\/content:encoded>/);
    let content = contentMatch ? contentMatch[1] : '';
    
    items.push({
      title,
      slug,
      date: new Date(pubDate).toISOString(),
      content: content.trim(),
    });
  }
  
  return items;
}

async function importPosts() {
  console.log('[v0] Starting WordPress import...');
  
  // Read XML file
  const xmlPath = '/vercel/share/v0-project/scripts/wordpress-export.xml';
  let xmlContent;
  
  try {
    xmlContent = fs.readFileSync(xmlPath, 'utf-8');
  } catch (err) {
    console.error(`[v0] Failed to read XML file: ${err.message}`);
    process.exit(1);
  }
  
  // Parse posts
  const posts = parseXmlItems(xmlContent);
  console.log(`[v0] Found ${posts.length} posts to import`);
  
  if (posts.length === 0) {
    console.log('[v0] No posts to import');
    return;
  }
  
  // Import each post
  for (let i = 0; i < posts.length; i++) {
    const post = posts[i];
    const doc = {
      _type: 'blogPost',
      _id: `post-${post.slug}`,
      title: post.title,
      slug: post.slug,
      date: post.date,
      excerpt: post.content.substring(0, 200),
      content: [
        {
          _type: 'block',
          _key: 'block-1',
          style: 'normal',
          children: [
            {
              _type: 'span',
              _key: 'span-1',
              marks: [],
              text: post.content.substring(0, 500),
            },
          ],
        },
      ],
    };
    
    try {
      await client.createOrReplace(doc);
      console.log(`[v0] ✓ Post ${i + 1}/${posts.length}: "${post.title}"`);
    } catch (err) {
      console.error(`[v0] ✗ Post ${i + 1}/${posts.length}: "${post.title}" - ${err.message}`);
    }
  }
  
  console.log('[v0] Import complete!');
}

importPosts().catch(err => {
  console.error('[v0] Fatal error:', err);
  process.exit(1);
});
