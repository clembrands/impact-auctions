#!/usr/bin/env python3
import os
import subprocess

print(f"[v0] Current working directory: {os.getcwd()}")
print(f"[v0] Files in current directory:")
for f in os.listdir('.'):
    print(f"  - {f}")

print(f"\n[v0] Checking specific paths:")
paths = [
    '/vercel/share/v0-project/scripts/wordpress-export.xml',
    './wordpress-export.xml',
    '../scripts/wordpress-export.xml',
    './scripts/wordpress-export.xml',
]

for path in paths:
    exists = os.path.exists(path)
    print(f"  {path}: {exists}")

print(f"\n[v0] Directory contents of /vercel/share/v0-project/scripts/:")
try:
    for f in os.listdir('/vercel/share/v0-project/scripts/'):
        print(f"  - {f}")
except Exception as e:
    print(f"  Error: {e}")

result = subprocess.run(['find', '/vercel/share/v0-project', '-name', '*.xml'], capture_output=True, text=True)
print(f"\n[v0] XML files found in project:")
print(result.stdout)
