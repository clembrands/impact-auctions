#!/usr/bin/env python3
import os
import subprocess

print("[v0] Finding xml files...")
result = subprocess.run(['find', '/home', '-name', '*.xml', '-type', 'f'], 
                       capture_output=True, text=True, timeout=10)
print(result.stdout)
print(result.stderr)

print("\n[v0] Finding wordpress-export specifically...")
result = subprocess.run(['find', '/home', '-name', 'wordpress-export*', '-type', 'f'], 
                       capture_output=True, text=True, timeout=10)
print(result.stdout)
print(result.stderr)

print("\n[v0] Checking /vercel path...")
if os.path.exists('/vercel'):
    print("ls -la /vercel:")
    result = subprocess.run(['ls', '-la', '/vercel'], capture_output=True, text=True)
    print(result.stdout)
