from PIL import Image, ImageDraw, ImageFont
import os

def create_favicon():
    size = (64, 64)
    # Dark background like the site
    bg_color = (26, 26, 26) # #1a1a1a
    
    image = Image.new('RGBA', size, bg_color)
    draw = ImageDraw.Draw(image)
    
    # Try to load a font
    try:
        # Bold font for better visibility
        font = ImageFont.truetype("arialbd.ttf", 36)
    except IOError:
        font = ImageFont.load_default()
    
    text = "AZ"
    
    # Calculate text position to center it
    # Pillow's textbbox is better but let's stick to simple logic for compatibility if needed, 
    # but textbbox is standard now.
    try:
        bbox = draw.textbbox((0, 0), text, font=font)
        text_width = bbox[2] - bbox[0]
        text_height = bbox[3] - bbox[1]
    except AttributeError:
        # Fallback for older Pillow
        text_width, text_height = draw.textsize(text, font=font)
    
    x = (size[0] - text_width) / 2
    y = (size[1] - text_height) / 2 - 4 # Little offset
    
    # Draw 'A' in Cyan (#00E5FF -> 0, 229, 255)
    draw.text((x, y), "A", font=font, fill=(0, 229, 255))
    
    # Measure 'A' width to place 'Z'
    try:
        a_bbox = draw.textbbox((0, 0), "A", font=font)
        a_width = a_bbox[2] - a_bbox[0]
    except:
        a_width, _ = draw.textsize("A", font=font)
        
    # Draw 'Z' in Purple (#BD00FF -> 189, 0, 255) next to A
    # We need to correctly position Z. Simple approximation: x + a_width
    # But let's just draw "Z" relative to "A" to be safe. 
    # Actually, let's just draw them separately.
    
    draw.text((x + a_width, y), "Z", font=font, fill=(189, 0, 255))
    
    # Add a rounded border maybe? Or just keep it square/fill. 
    # Let's add a subtle bottom border
    draw.line((0, 60, 64, 60), fill=(0, 229, 255), width=2)
    
    output_file = "favicon.png"
    image.save(output_file)
    print(f"Favicon generated: {output_file}")

create_favicon()
