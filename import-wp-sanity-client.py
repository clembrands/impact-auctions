import os
import json
import sys
from datetime import datetime

# Try to import sanity client
try:
    from sanity_client import Client
except ImportError:
    print("[v0] sanity-client not installed, installing...")
    os.system("pip install sanity")
    from sanity_client import Client

# Configuration
SANITY_PROJECT_ID = os.getenv('NEXT_PUBLIC_SANITY_PROJECT_ID', 'cw7uj2zl')
SANITY_DATASET = os.getenv('NEXT_PUBLIC_SANITY_DATASET', 'production')
SANITY_API_TOKEN = os.getenv('SANITY_API_TOKEN', '')

print(f"[v0] Project: {SANITY_PROJECT_ID}, Dataset: {SANITY_DATASET}")

# Initialize Sanity client
client = Client(
    project_id=SANITY_PROJECT_ID,
    dataset=SANITY_DATASET,
    token=SANITY_API_TOKEN,
    use_cdn=False
)

# Sample post data
posts_data = [
    {
        'id': 'wp-1',
        'title': 'West Palm Beach and Florida Fundraising Auctioneer',
        'slug': 'west-palm-beach-florida-fundraising-auctioneer',
        'content': 'Sample content from WordPress',
        'date': '2024-01-01T00:00:00Z'
    },
    {
        'id': 'wp-2', 
        'title': 'Impact Auctions Fundraising Auctioneers',
        'slug': 'impact-auctions-fundraising-auctioneers',
        'content': 'Another sample post',
        'date': '2024-01-01T00:00:00Z'
    }
]

print(f"[v0] Starting import of {len(posts_data)} posts...")

for post in posts_data:
    try:
        doc = {
            "_id": f"post-{post['id']}",
            "_type": "blogPost",
            "title": post['title'],
            "slug": {
                "_type": "slug",
                "current": post['slug']
            },
            "date": post['date'],
            "excerpt": post['content'][:200],
            "content": [
                {
                    "_type": "block",
                    "style": "normal",
                    "children": [
                        {
                            "_type": "span",
                            "text": post['content']
                        }
                    ]
                }
            ]
        }
        
        result = client.create(doc)
        print(f"[v0] ✓ Created: {post['title']}")
    except Exception as e:
        print(f"[v0] ✗ Error creating {post['title']}: {str(e)}")

print("[v0] Import complete!")
