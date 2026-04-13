import { createClient } from '@sanity/client';

const SANITY_PROJECT_ID = 'z9la8qla';
const SANITY_DATASET = 'production';
const SANITY_API_TOKEN = process.env.SANITY_API_TOKEN;

if (!SANITY_API_TOKEN) {
  console.error('[v0] ERROR: SANITY_API_TOKEN environment variable is not set');
  process.exit(1);
}

const client = createClient({
  projectId: SANITY_PROJECT_ID,
  dataset: SANITY_DATASET,
  token: SANITY_API_TOKEN,
  apiVersion: '2024-01-01',
});

// Simple function to parse text from XML
function extractText(xml, tag) {
  const regex = new RegExp(`<${tag}[^>]*><!\\[CDATA\\[([^\\]]*(?:\\](?!\\]>)[^\\]]*)*)\\]\\]></${tag}>|<${tag}[^>]*>([^<]*)</${tag}>`);
  const match = xml.match(regex);
  return match ? (match[1] || match[2] || '') : '';
}

// Parse WordPress posts
const posts = [
  {
    title: 'West Palm Beach and Florida Fundraising Auctioneer',
    slug: 'west-palm-beach-and-florida-fundraising-auctioneer',
    date: '2023-02-06T15:30:33Z',
    content: `# Take your FUNDRAISING event to the Next Level

Ron and Debbie Hitzel, Founders of Impact Auctions, enjoy helping Non-Profit Organizations all over the United States reach their goals in Live & Silent Auctions which includes Virtual Events, Fund Appeals, Consignment Trips, Event Planning, and Emcee. Live Auctions for fundraising non-profit organizations are very popular because of the funds they raise in a short amount of time. Impact Auctions is offering a Free Consultation for your next charity fundraising event that will guarantee your organization to reach your goal and exceed it. Be ready to take your event to the next level with this talented team.

## Services Offered

- Event Planning Expert
- Live Auction Fundraising Auctioneer
- Bid Spotters
- Innovative theme and proven ideas that work
- Strategies to optimize silent auction
- Live auction expertise that maximizes funds
- Contemporary marketing advertising advice
- Helpful tips for training volunteers
- Live Auction consignment travel packages
- Utilizing "Fund-A-Need" as an essential tool
- FREE event consultation

Impact Auctions, Debbie Hitzel Event Coordinator, and Ron Hitzel, Licensed Charity Auctioneer, have traveled all over the United States as a husband and wife team helping thousands of organization's set record breaking profits in one night with less work for the volunteers and committee members.

Contact Debbie at 407.267.8988 for your free consultation.`,
    excerpt: 'Ron and Debbie Hitzel, Founders of Impact Auctions, enjoy helping Non-Profit Organizations all over the United States reach their goals in Live & Silent Auctions.'
  },
  {
    title: 'Impact Auctions Fundraising Auctioneers',
    slug: 'impact-auctions-fundraising-auctioneers',
    date: '2025-01-15T16:31:04Z',
    content: `# Meet our Team of Fundraising Auctioneers

## Impact Auctions Bio: Ron and Debbie Hitzel

Debbie and Ron Hitzel, Impact Auctions, reside in Waxhaw, North Carolina, and are a husband and wife team that have been in the fundraising business for over 15 years raising money for charitable causes close to their hearts. Our Auctioneer is a former US Navy Nuclear Submariner and has upgraded electrical power plants around the world. Ron speaks several languages after working in over 56 countries and thus brings his world travels to the stage! Debbie brings her expertise of teaching to the fundraising side of events.

## Stephen LaRaviere

**Owner/Auctioneer | Matthews Auctioneers**: Stephen LaRaviere is a third-generation auctioneer with 20 years of experience in the industry. As a Virginia state champion auctioneer and a two-time top 10 finalist at the International Auctioneers Competition, Stephen brings a wealth of expertise and a passion for excellence to every event. Specializing in benefit auctions, he is dedicated to helping nonprofits achieve their fundraising goals, making a positive impact on communities.

Stephen lives in Virginia with his wife Samantha and is a proud girl dad to his 3 daughters, Kinsley, Molly, and Merci. His commitment to family and community is at the heart of his work.

## Josh Loewensteiner, CAI, AUCTIONEER

Josh has been partnering with Impact Auctions since 2021 as both an auctioneer and as a ringman to help raise money. As Josh prides himself on his knowledge and creativity in taking the difficult task of asking donors to share their time, talents, and treasure with an organization and to make that tough task fun and rewarding. As the auctioneer, Josh likes to make auctions exciting, and often explodes with infectious enthusiasm!

Josh attended Reppert's Auction School in Auburn, IN in 2019, and has since won the Auctioneer's Association of NC Rookie Bid Calling Contest in 2020. He is the 2022 NC State Bid Calling Champion and he placed 2nd in the NC Tarheel Open Bid Calling Contest in January of 2022.

Josh completed the National Auctions Association (NAA) "Certified Auctioneer's Institute" course in 2023. This is a 3 year program which is the highest level of education offered by the NAA and is in the process of completing his Benefit Auction Specialist (BAS) designation as well. Josh was the 2024 CAI class recruiter and will be the Class Advisor for the CAI Graduating Class of 2027.

Josh and his wife Adina have two children, Ellie (10) and Nate (8) and have lived in Charlotte since 2005.

Let Impact Auctions help you with your next Fundraising event.`,
    excerpt: 'Meet the expert team of fundraising auctioneers at Impact Auctions. Learn about Ron & Debbie Hitzel, Stephen LaRaviere, and Josh Loewensteiner.'
  }
];

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

      const result = await client.createOrReplace(doc);
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
