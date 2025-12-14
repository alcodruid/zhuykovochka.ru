import os
import shutil

# Files to include in deployment
files_to_copy = [
    'index.html',
    'styles.css',
    'script.js',
    'i18n.js',
    'cv_photo.webp',
    'robots.txt',
    'sitemap.xml',
    'cv_russian.pdf',
    'cv_english.pdf',
    'resume_ru.txt',
    'resume_en.txt',
    'favicon.png',
    'README_DEPLOY.txt'
]

output_dir = 'dist'

if not os.path.exists(output_dir):
    os.makedirs(output_dir)

print("Preparing deployment files...")
for file in files_to_copy:
    if os.path.exists(file):
        try:
            shutil.copy(file, os.path.join(output_dir, file))
            print(f"Copied {file}")
        except Exception as e:
            print(f"ERROR copying {file}: {e}")
    else:
        print(f"WARNING: {file} not found!")

print(f"\nDeployment files are ready in '{output_dir}' folder.")
print("Upload the contents of 'dist' to your Beget 'public_html' folder.")
