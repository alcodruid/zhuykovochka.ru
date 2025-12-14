from fpdf import FPDF
import os

def create_pdf(text_file, pdf_file, font_path="C:\\Windows\\Fonts\\arial.ttf"):
    if not os.path.exists(text_file):
        print(f"Error: {text_file} not found")
        return

    pdf = FPDF()
    pdf.add_page()
    
    # Try to load a font that supports Cyrillic
    try:
        pdf.add_font('Arial', '', font_path, uni=True)
        pdf.set_font("Arial", size=11)
    except Exception as e:
        print(f"Warning: Could not load font {font_path}. Using default (might break Cyrillic). Error: {e}")
        pdf.set_font("Arial", size=11)

    with open(text_file, "r", encoding="utf-8") as f:
        for line in f:
            # Basic formatting interpretation
            line = line.strip()
            if not line:
                pdf.ln(5) # Empty line
                continue
            
            # Headers
            if line.isupper() and len(line) > 3 and not line.startswith("•"):
                pdf.set_font("Arial", style='', size=14)
                pdf.set_text_color(0, 229, 255) # Cyan color for headers like in site
                pdf.cell(0, 10, line, ln=True)
                pdf.set_text_color(0, 0, 0) # Reset
                pdf.set_font("Arial", size=11)
                # Draw line
                # pdf.line(10, pdf.get_y(), 200, pdf.get_y())
                # pdf.ln(2)
            elif line.startswith("----------------"):
                # Draw a graphical line instead of text dashes
                y = pdf.get_y()
                pdf.set_draw_color(189, 0, 255) # Purple line
                pdf.line(10, y, 200, y)
                pdf.ln(2)
                pdf.set_draw_color(0, 0, 0)
            elif line.startswith("•") or line.startswith("-"):
                # List items
                pdf.set_x(15)
                pdf.multi_cell(0, 6, line)
            else:
                # Normal text
                pdf.multi_cell(0, 6, line)

    pdf.output(pdf_file)
    print(f"Created {pdf_file}")

# Create Russian PDF
create_pdf("resume_ru.txt", "cv_russian.pdf")

# Create English PDF
create_pdf("resume_en.txt", "cv_english.pdf")
