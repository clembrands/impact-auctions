#!/usr/bin/env python3
import os
import sys
import xml.etree.ElementTree as ET
import re
import requests
from datetime import datetime
import json
from pathlib import Path

# Sanity credentials from environment
PROJECT_ID = os.getenv('SANITY_PROJECT_ID', 'p1uw1wga')
DATASET = os.getenv('SANITY_DATASET', 'production')
API_TOKEN = os.getenv('SANITY_API_TOKEN')

print(f"[v0] Starting WordPress import...")
print(f"[v0] Project ID: {PROJECT_ID}")
print(f"[v0] Dataset: {DATASET}")
print(f"[v0] Token present: {bool(API_TOKEN)}")

# Try multiple possible paths for the XML file
# First try environment variable
xml_file = os.getenv('WORDPRESS_XML_PATH', '')

if not xml_file or not os.path.exists(xml_file):
    possible_paths = [
        '/vercel/share/v0-project/scripts/wordpress-export.xml',
        './wordpress-export.xml',
        '../scripts/wordpress-export.xml',
        './scripts/wordpress-export.xml',
        os.path.expanduser('~/wordpress-export.xml')
    ]
    
    xml_file = None
    for path in possible_paths:
        if os.path.exists(path):
            xml_file = path
            print(f"[v0] Found XML file at: {xml_file}")
            break

if not xml_file:
    print(f"[v0] Error: Could not find wordpress-export.xml")
    print(f"[v0] Tried: {possible_paths}")
    sys.exit(1)

def html_to_blocks(html):
    """Convert HTML to Sanity portable text blocks"""
    if not html:
        return []
    
    # Remove script and style tags
    html = re.sub(r'<script[^>]*>.*?</script>', '', html, flags=re.DOTALL)
    html = re.sub(r'<style[^>]*>.*?</style>', '', html, flags=re.DOTALL)
    
    # Split by paragraphs
    blocks = []
    paragraphs = re.split(r'</?p[^>]*>', html)
    
    for para in paragraphs:
        para = para.strip()
        if not para:
            continue
        
        # Remove HTML tags for now (basic conversion)
        text = re.sub(r'<[^>]+>', '', para)
        text = text.strip()
        
        if text:
            blocks.append({
                "_type": "block",
                "style": "normal",
                "children": [
                    {
                        "_type": "span",
                        "text": text
                    }
                ]
            })
    
    return blocks

def download_image(url):
    """Download image and return asset reference"""
    try:
        if not url or not url.startswith('http'):
            return None
        
        response = requests.get(url, timeout=10)
        if response.status_code == 200:
            # Upload to Sanity
            files = {'file': ('image.jpg', response.content, 'image/jpeg')}
            upload_url = f"https://api.sanity.io/v1/uploads/images/{PROJECT_ID}/{DATASET}"
            headers = {'Authorization': f'Bearer {API_TOKEN}'}
            
            upload_response = requests.post(upload_url, files=files, headers=headers)
            if upload_response.status_code == 201:
                asset_data = upload_response.json()
                return {
                    "_type": "image",
                    "asset": {
                        "_type": "reference",
                        "_ref": asset_data['document']['_id']
                    }
                }
    except Exception as e:
        print(f"[v0] Error downloading image {url}: {e}")
    
    return None

try:
    tree = ET.parse(xml_file)
    root = tree.getroot()
    print(f"[v0] XML parsed successfully")
    
    # Define namespaces
    namespaces = {
        'wp': 'http://wordpress.org/export/1.2/',
        'content': 'http://purl.org/rss/1.0/modules/content/',
        'excerpt': 'http://purl.org/rss/1.0/modules/excerpt/'
    }
    
    items = root.findall('.//item')
    print(f"[v0] Found {len(items)} total items in XML")
    
    posts_to_import = []
    post_count = 0
    
    for item in items:
        # Check if it's a post (not attachment, page, etc)
        post_type_elem = item.find('wp:post_type', namespaces)
        if post_type_elem is None or post_type_elem.text != 'post':
            continue
        
        # Check if post is published
        status_elem = item.find('wp:status', namespaces)
        if status_elem is None or status_elem.text != 'publish':
            continue
        
        post_count += 1
        
        # Extract post data
        title_elem = item.find('title')
        title = title_elem.text if title_elem is not None else f"Post {post_count}"
        
        link_elem = item.find('link')
        link = link_elem.text if link_elem is not None else ""
        slug = link.split('/')[-2] if link else f"post-{post_count}"
        
        pub_date_elem = item.find('pubDate')
        date_str = pub_date_elem.text if pub_date_elem is not None else datetime.now().isoformat()
        
        content_elem = item.find('content:encoded', namespaces)
        content = content_elem.text if content_elem is not None else ""
        
        excerpt_elem = item.find('excerpt:encoded', namespaces)
        excerpt = excerpt_elem.text if excerpt_elem is not None else ""
        
        # Create Sanity document
        doc = {
            "_type": "blogPost",
            "title": title,
            "slug": {
                "_type": "slug",
                "current": slug
            },
            "date": date_str,
            "excerpt": excerpt if excerpt else "",
            "content": html_to_blocks(content)
        }
        
        posts_to_import.append(doc)
        print(f"[v0] Post {post_count}: {title}")
        print(f"[v0]   Slug: {slug}")
        print(f"[v0]   Date: {date_str}")
        print(f"[v0]   Content blocks: {len(doc['content'])}")
    
    print(f"\n[v0] Total posts ready for import: {post_count}")
    
    # Import to Sanity
    if posts_to_import and API_TOKEN:
        print(f"[v0] Importing {len(posts_to_import)} posts to Sanity...")
        
        url = f"https://api.sanity.io/v1/data/mutate/{PROJECT_ID}"
        headers = {
            'Authorization': f'Bearer {API_TOKEN}',
            'Content-Type': 'application/json'
        }
        
        mutations = [
            {
                "createOrReplace": post
            }
            for post in posts_to_import
        ]
        
        payload = {
            "mutations": mutations
        }
        
        response = requests.post(url, json=payload, headers=headers)
        
        if response.status_code == 200:
            result = response.json()
            print(f"[v0] Successfully imported {len(posts_to_import)} posts!")
            print(f"[v0] Response: {json.dumps(result, indent=2)}")
        else:
            print(f"[v0] Error importing to Sanity: {response.status_code}")
            print(f"[v0] Response: {response.text}")
    else:
        print(f"[v0] No posts to import or API token missing")
    
except Exception as e:
    print(f"[v0] Error: {e}")
    import traceback
    traceback.print_exc()
