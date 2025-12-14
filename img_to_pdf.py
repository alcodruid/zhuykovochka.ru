from PIL import Image
import os

input_file = "website_full.png"
output_file = "zhuykovochka_site.pdf"

if os.path.exists(input_file):
    # Open image
    image = Image.open(input_file)
    
    # Convert RGBA to RGB (PDF doesn't support transparency on root layer usually in simple conversion)
    if image.mode == 'RGBA':
        background = Image.new("RGB", image.size, (255, 255, 255))
        background.paste(image, mask=image.split()[3]) # 3 is the alpha channel
        image = background
    elif image.mode != 'RGB':
        image = image.convert('RGB')
        
    # Save as PDF
    image.save(output_file, "PDF", resolution=100.0)
    print(f"Successfully created {output_file}")
else:
    print(f"Input file {input_file} not found")
