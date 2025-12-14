from PIL import Image
import os

def convert_to_webp(filename):
    if not os.path.exists(filename):
        print(f"File {filename} not found")
        return

    name, ext = os.path.splitext(filename)
    if ext.lower() in ['.png', '.jpg', '.jpeg']:
        img = Image.open(filename)
        output_name = f"{name}.webp"
        img.save(output_name, 'WEBP', quality=85)
        print(f"Converted {filename} to {output_name}")

convert_to_webp('cv_photo.png')
