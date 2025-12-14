import os
import sys
import time

print("STEP 1: Starting script...", flush=True)
print(f"CWD: {os.getcwd()}", flush=True)

test_files = [
    "Для создания развернутого и привлекательного резюме.docx",
    "Для создания развернутого и привлекательного резюме.pdf"
]

for filename in test_files:
    print(f"\nChecking: {filename}", flush=True)
    if os.path.exists(filename):
        print("  - File exists.", flush=True)
        try:
            size = os.path.getsize(filename)
            print(f"  - Size: {size} bytes", flush=True)
            
            print("  - Attempting to open...", flush=True)
            with open(filename, 'rb') as f:
                header = f.read(20)
                print(f"  - Success! Header: {header}", flush=True)
        except Exception as e:
            print(f"  - READ ERROR: {e}", flush=True)
    else:
        print("  - File NOT FOUND.", flush=True)

print("\nSTEP 2: Import test (standard libs)...", flush=True)
import zipfile
print("  - zipfile imported.", flush=True)

print("DONE.", flush=True)
