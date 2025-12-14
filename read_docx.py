from docx import Document
import sys

try:
    doc = Document("Для создания развернутого и привлекательного резюме.docx")
    full_text = []
    for para in doc.paragraphs:
        full_text.append(para.text)
    print('\n'.join(full_text))
except Exception as e:
    print(f"Error reading docx: {e}")
