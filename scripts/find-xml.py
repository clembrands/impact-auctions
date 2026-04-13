import os
import sys

print("[v0] Project CWD:", os.getcwd())
print("[v0] Files accessible from CWD:")
for item in os.listdir('.')[:20]:
    print(f"  - {item}")

# Check if we can access the file from /tmp or home
print("[v0]\nChecking /tmp:")
if os.path.exists('/tmp'):
    for item in os.listdir('/tmp')[:10]:
        if 'xml' in item.lower() or 'wordpress' in item.lower():
            print(f"  - {item}")
