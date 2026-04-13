const { createClient } = require("@sanity/client");
const { XMLParser } = require("fast-xml-parser");
const { readFileSync } = require("fs");
const { resolve, dirname } = require("path");

const PROJECT_ID = "z9la8qla";
const DATASET = "production";
const API_VERSION = "2024-01-01";

const token = process.env.SANITY_API_TOKEN;
if (!token) {
  console.error("ERROR: SANITY_API_TOKEN environment variable is not set.");
  console.error("Add it in your project's Vars settings and try again.");
  process.exit(1);
}

const sanity = createClient({
  projectId: PROJECT_ID,
  dataset: DATASET,
  apiVersion: API_VERSION,
  token,
  useCdn: false,
});

// ─── HTML → Portable Text converter ──────────────────────────────────────────

function stripWpBlockComments(html) {
  return html.replace(/<!-- wp:[^>]*-->/g, "").replace(/<!-- \/wp:[^>]*-->/g, "");
}

function extractFirstImageUrl(html) {
  const match = html.match(/<img[^>]+src=["']([^"'?]+)/);
  return match ? match[1] : null;
}

function htmlToPortableText(html) {
  if (!html) return [];

  const cleaned = stripWpBlockComments(html);
  const blocks = [];

  const segments = cleaned
    .split(/(?=<(?:p|h[1-6]|figure|ul|ol|blockquote)[^>]*>)|(?<=<\/(?:p|h[1-6]|figure|ul|ol|blockquote)>)/g);

  for (const seg of segments) {
    const trimmed = seg.trim();
    if (!trimmed) continue;

    if (trimmed.includes("wp-block-jetpack-contact-form")) continue;

    const imgMatch = trimmed.match(/<img[^>]+src=["']([^"'?]+)[^>]*alt=["']([^"']*)/);
    if (imgMatch) continue;

    const headingMatch = trimmed.match(/<h([1-6])[^>]*>(.*?)<\/h[1-6]>/is);
    if (headingMatch) {
      const level = parseInt(headingMatch[1]);
      const style = level <= 2 ? "h2" : level === 3 ? "h3" : "h4";
      blocks.push({
        _type: "block",
        _key: randomKey(),
        style,
        children: [{ _type: "span", _key: randomKey(), text: stripTags(headingMatch[2]), marks: [] }],
        markDefs: [],
      });
      continue;
    }

    const bqMatch = trimmed.match(/<blockquote[^>]*>(.*?)<\/blockquote>/is);
    if (bqMatch) {
      blocks.push({
        _type: "block",
        _key: randomKey(),
        style: "blockquote",
        children: [{ _type: "span", _key: randomKey(), text: stripTags(bqMatch[1]), marks: [] }],
        markDefs: [],
      });
      continue;
    }

    const pMatch = trimmed.match(/<p[^>]*>(.*?)<\/p>/is);
    if (pMatch) {
      const inner = pMatch[1].trim();
      if (!inner || inner === "&nbsp;") continue;
      const { children, markDefs } = parseInlineHtml(inner);
      if (children.length > 0) {
        blocks.push({
          _type: "block",
          _key: randomKey(),
          style: "normal",
          children,
          markDefs,
        });
      }
      continue;
    }

    const bare = stripTags(trimmed).trim();
    if (bare && bare !== "&nbsp;" && !bare.includes("<!--")) {
      blocks.push({
        _type: "block",
        _key: randomKey(),
        style: "normal",
        children: [{ _type: "span", _key: randomKey(), text: bare, marks: [] }],
        markDefs: [],
      });
    }
  }

  return blocks;
}

function parseInlineHtml(html) {
  const markDefs = [];
  const children = [];

  let processed = html
    .replace(/<strong>(.*?)<\/strong>/gis, (_, t) => `__STRONG__${t}__/STRONG__`)
    .replace(/<b>(.*?)<\/b>/gis, (_, t) => `__STRONG__${t}__/STRONG__`)
    .replace(/<em>(.*?)<\/em>/gis, (_, t) => `__EM__${t}__/EM__`)
    .replace(/<i>(.*?)<\/i>/gis, (_, t) => `__EM__${t}__/EM__`);

  processed = processed.replace(/<a\s+href=["']([^"']+)["'][^>]*>(.*?)<\/a>/gis, (_, href, text) => {
    const key = randomKey();
    markDefs.push({ _key: key, _type: "link", href });
    return `__LINK:${key}__${text}__/LINK__`;
  });

  processed = processed.replace(/<[^>]+>/g, "");
  processed = processed.replace(/&amp;/g, "&").replace(/&nbsp;/g, " ").replace(/&lt;/g, "<").replace(/&gt;/g, ">");

  const tokens = processed.split(/(__(?:STRONG|EM|LINK:[^_]+)__|__\/(?:STRONG|EM|LINK)__)/);
  let activeBold = false;
  let activeItalic = false;
  let activeLinkKey = null;

  for (const token of tokens) {
    if (token === "__STRONG__") { activeBold = true; continue; }
    if (token === "__/STRONG__") { activeBold = false; continue; }
    if (token === "__EM__") { activeItalic = true; continue; }
    if (token === "__/EM__") { activeItalic = false; continue; }
    if (token === "__/LINK__") { activeLinkKey = null; continue; }
    const linkOpen = token.match(/^__LINK:([^_]+)__$/);
    if (linkOpen) { activeLinkKey = linkOpen[1]; continue; }

    if (!token) continue;

    const marks = [];
    if (activeBold) marks.push("strong");
    if (activeItalic) marks.push("em");
    if (activeLinkKey) marks.push(activeLinkKey);

    children.push({ _type: "span", _key: randomKey(), text: token, marks });
  }

  return { children, markDefs };
}

function stripTags(html) {
  return html
    .replace(/<[^>]+>/g, "")
    .replace(/&amp;/g, "&")
    .replace(/&nbsp;/g, " ")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .trim();
}

function randomKey() {
  return Math.random().toString(36).slice(2, 10);
}

// ─── Upload image from URL ────────────────────────────────────────────────────

async function uploadImageFromUrl(imageUrl) {
  try {
    const cleanUrl = imageUrl.split("?")[0];
    console.log(`  Uploading image: ${cleanUrl}`);

    const response = await fetch(cleanUrl);
    if (!response.ok) {
      console.warn(`  Could not fetch image (${response.status}): ${cleanUrl}`);
      return null;
    }

    const contentType = response.headers.get("content-type") || "image/jpeg";
    const buffer = Buffer.from(await response.arrayBuffer());
    const ext = contentType.includes("png") ? "png" : contentType.includes("gif") ? "gif" : "jpg";

    const asset = await sanity.assets.upload("image", buffer, {
      filename: `wp-import-${randomKey()}.${ext}`,
      contentType,
    });

    return { _type: "image", asset: { _type: "reference", _ref: asset._id } };
  } catch (err) {
    console.warn(`  Image upload failed: ${err.message}`);
    return null;
  }
}

// ─── Parse XML ────────────────────────────────────────────────────────────────

function parseXml(xmlPath) {
  const xml = readFileSync(xmlPath, "utf-8");
  const parser = new XMLParser({
    ignoreAttributes: false,
    attributeNamePrefix: "@_",
    cdataPropName: "__cdata",
    isArray: (name) => ["item", "category", "wp:postmeta"].includes(name),
  });
  const result = parser.parse(xml);
  return result?.rss?.channel?.item || [];
}

// ─── Main ─────────────────────────────────────────────────────────────────────

async function main() {
  const xmlPath = resolve(__dirname, "wordpress-export.xml");

  console.log("Parsing WordPress XML export...");
  const items = parseXml(xmlPath);

  const posts = items.filter((item) => {
    const type = item["wp:post_type"]?.__cdata || item["wp:post_type"];
    const status = item["wp:status"]?.__cdata || item["wp:status"];
    return type === "post" && status === "publish";
  });

  console.log(`Found ${posts.length} published posts to import.\n`);

  for (const item of posts) {
    const title = item.title?.__cdata || item.title || "Untitled";
    const slug = item["wp:post_name"]?.__cdata || item["wp:post_name"] || "";
    const rawDate = item["wp:post_date_gmt"]?.__cdata || item["wp:post_date_gmt"] || "";
    const date = rawDate ? rawDate.split(" ")[0] : new Date().toISOString().split("T")[0];
    const htmlContent = item["content:encoded"]?.__cdata || "";

    console.log(`Importing: "${title}"`);

    const existing = await sanity.fetch(
      `*[_type == "blogPost" && slug.current == $slug][0]._id`,
      { slug }
    );
    if (existing) {
      console.log(`  Skipping — already exists (${slug})\n`);
      continue;
    }

    let thumbnail = null;
    const firstImgUrl = extractFirstImageUrl(htmlContent);
    if (firstImgUrl) {
      thumbnail = await uploadImageFromUrl(firstImgUrl);
    }

    const content = htmlToPortableText(htmlContent);

    const firstParagraph = htmlContent.match(/<p[^>]*>(.*?)<\/p>/is)?.[1] || "";
    const excerpt = stripTags(firstParagraph).slice(0, 280) || "";

    const doc = {
      _type: "blogPost",
      title,
      slug: { _type: "slug", current: slug },
      date,
      excerpt: excerpt || undefined,
      content: content.length > 0 ? content : undefined,
      ...(thumbnail ? { thumbnail } : {}),
    };

    try {
      const created = await sanity.create(doc);
      console.log(`  Created: ${created._id}\n`);
    } catch (err) {
      console.error(`  ERROR creating "${title}": ${err.message}\n`);
    }
  }

  console.log("Import complete!");
}

main().catch((err) => {
  console.error("Fatal error:", err);
  process.exit(1);
});
