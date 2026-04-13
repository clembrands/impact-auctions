import https from 'https';

const SANITY_PROJECT_ID = 'z9la8qla';
const SANITY_DATASET = 'production';
const SANITY_API_TOKEN = process.env.SANITY_API_TOKEN;

if (!SANITY_API_TOKEN) {
  console.error('[v0] ERROR: SANITY_API_TOKEN environment variable is not set');
  process.exit(1);
}

// WordPress posts data
const posts = [
  {
    title: 'West Palm Beach and Florida Fundraising Auctioneer',
    slug: 'west-palm-beach-and-florida-fundraising-auctioneer',
    date: '2023-02-06T15:30:33Z',
    excerpt: 'Ron and Debbie Hitzel, Founders of Impact Auctions, enjoy helping Non-Profit Organizations all over the United States reach their goals in Live & Silent Auctions.',
    content: 'Take your FUNDRAISING event to the Next Level. Ron and Debbie Hitzel, Founders of Impact Auctions, enjoy helping Non-Profit Organizations all over the United States reach their goals in Live & Silent Auctions which includes Virtual Events, Fund Appeals, Consignment Trips, Event Planning, and Emcee.'
  },
  {
    title: 'Impact Auctions Fundraising Auctioneers',
    slug: 'impact-auctions-fundraising-auctioneers',
    date: '2025-01-15T16:31:04Z',
    excerpt: 'Meet the expert team of fundraising auctioneers at Impact Auctions. Learn about Ron & Debbie Hitzel, Stephen LaRaviere, and Josh Loewensteiner.',
    content: 'Meet our Team of Fundraising Auctioneers. Debbie and Ron Hitzel are a husband and wife team that have been in the fundraising business for over 15 years. Stephen LaRaviere is a third-generation auctioneer with 20 years of experience. Josh Loewensteiner has been partnering with Impact Auctions since 2021.'
  }
];

function createDocument(doc) {
  return new Promise((resolve, reject) => {
    const url = `https://${SANITY_PROJECT_ID}.api.sanity.io/v2024-01-01/data/mutate/${SANITY_DATASET}`;
    
    const payload = JSON.stringify({
      mutations: [
        {
          createOrReplace: doc
        }
      ]
    });

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(payload),
        'Authorization': `Bearer ${SANITY_API_TOKEN}`
      }
    };

    const req = https.request(url, options, (res) => {
      let data = '';

      res.on('data', (chunk) => {
        data += chunk;
      });

      res.on('end', () => {
        if (res.statusCode >= 200 && res.statusCode < 300) {
          try {
            const result = JSON.parse(data);
            resolve(result.results[0].document);
          } catch (e) {
            resolve(doc);
          }
        } else {
          reject(new Error(`HTTP ${res.statusCode}: ${data}`));
        }
      });
    });

    req.on('error', (error) => {
      reject(error);
    });

    req.write(payload);
    req.end();
  });
}

async function importPosts() {
  console.log(`[v0] Starting WordPress import to Sanity...`);
  console.log(`[v0] Project: ${SANITY_PROJECT_ID}, Dataset: ${SANITY_DATASET}`);
  console.log(`[v0] Found ${posts.length} posts to import\n`);

  let successCount = 0;
  let errorCount = 0;

  for (const post of posts) {
    try {
      const doc = {
        _type: 'blogPost',
        title: post.title,
        slug: {
          _type: 'slug',
          current: post.slug,
        },
        date: post.date,
        excerpt: post.excerpt,
        content: post.content,
      };

      const result = await createDocument(doc);
      console.log(`[v0] ✓ "${post.title}" imported successfully`);
      successCount++;
    } catch (error) {
      console.error(`[v0] ✗ Failed to import "${post.title}": ${error.message}`);
      errorCount++;
    }
  }

  console.log(`\n[v0] Import complete: ${successCount} succeeded, ${errorCount} failed`);
}

importPosts().catch(console.error);
