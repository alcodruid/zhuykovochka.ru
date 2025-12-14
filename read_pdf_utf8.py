import sys
from pypdf import PdfReader

try:
    reader = PdfReader("Для создания развернутого и привлекательного резюме.pdf")
    text = ""
    for page in reader.pages:
        text += page.extract_text() + "\n"
    
    # Write to file with UTF-8 encoding
    with open("resume_content_utf8.txt", "w", encoding="utf-8") as f:
        f.write(text)
    
    print("Successfully extracted PDF content")
except Exception as e:
    print(f"Error: {e}")
