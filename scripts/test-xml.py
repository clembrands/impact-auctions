#!/usr/bin/env python3
import os
import json
from pathlib import Path

# Add the scripts directory to path to find the XML file
xml_path = Path(__file__).parent / "wordpress-export.xml"
print(f"Looking for XML at: {xml_path}")
print(f"File exists: {xml_path.exists()}")

if xml_path.exists():
    print(f"✓ Found WordPress export XML")
    # Just verify we can read it
    with open(xml_path, 'r', encoding='utf-8') as f:
        content = f.read(500)
        print(f"✓ Successfully read first 500 chars of XML")
        print(f"Content preview: {content[:200]}...")
else:
    print(f"✗ XML file not found at {xml_path}")
