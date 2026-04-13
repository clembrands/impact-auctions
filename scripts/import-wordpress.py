#!/usr/bin/env python3
import os
import sys
import xml.etree.ElementTree as ET
import re
import requests
from datetime import datetime
import json
from pathlib import Path

# Add the project root to the path
sys.path.insert(0, '/vercel/share/v0-project')

# Import Sanity client
try:
    from sanity import SanityClient
except:
    pass

# Sanity credentials from environment
PROJECT_ID = os.getenv('SANITY_PROJECT_ID', 'p1uw1wga')
DATASET = os.getenv('SANITY_DATASET', 'production')
API_TOKEN = os.getenv('SANITY_API_TOKEN')

print(f"[v0] Starting WordPress import...")
print(f"[v0] Project ID: {PROJECT_ID}")
print(f"[v0] Dataset: {DATASET}")
print(f"[v0] Token present: {bool(API_TOKEN)}")

# Parse WordPress XML
xml_file = '/vercel/share/v0-project/scripts/wordpress-export.xml'
print(f"[v0] Reading XML from: {xml_file}")
print(f"[v0] File exists: {os.path.exists(xml_file)}")

try:
    tree = ET.parse(xml_file)
    root = tree.getroot()
    print(f"[v0] XML parsed successfully")
    
    # Find all posts
    namespaces = {
        'wp': 'http://wordpress.org/export/1.2/',
        'content': 'http://purl.org/rss/1.0/modules/content/',
        'excerpt': 'http://purl.org/rss/1.0/modules/excerpt/'
    }
    
    items = root.findall('.//item')
    print(f"[v0] Found {len(items)} items in XML")
    
    post_count = 0
    for item in items:
        # Check if it's a post (not attachment, etc)
        post_type = item.find('wp:post_type', namespaces)
        if post_type is None or post_type.text != 'post':
            continue
        
        post_count += 1
        
        title = item.find('title')
        title_text = title.text if title is not None else f"Post {post_count}"
        
        link = item.find('link')
        link_text = link.text if link is not None else ""
        
        slug = link_text.split('/')[-2] if link_text else f"post-{post_count}"
        
        pub_date = item.find('pubDate')
        date_text = pub_date.text if pub_date is not None else datetime.now().isoformat()
        
        content = item.find('content:encoded', namespaces)
        content_text = content.text if content is not None else ""
        
        excerpt = item.find('excerpt:encoded', namespaces)
        excerpt_text = excerpt.text if excerpt is not None else ""
        
        # Basic HTML to text conversion (strips tags)
        def html_to_text(html):
            return re.sub(r'<[^>]+>', '', html) if html else ""
        
        print(f"[v0] Post {post_count}: {title_text} (slug: {slug})")
        print(f"[v0]   Date: {date_text}")
        print(f"[v0]   Content length: {len(content_text)} chars")
        print(f"[v0]   Excerpt length: {len(excerpt_text)} chars")
    
    print(f"[v0] Total posts found: {post_count}")
    print(f"[v0] Import process completed successfully")
    
except Exception as e:
    print(f"[v0] Error parsing XML: {e}")
    import traceback
    traceback.print_exc()
