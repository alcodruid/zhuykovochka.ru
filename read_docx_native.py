import zipfile
import xml.etree.ElementTree as ET

docx_path = "Для создания развернутого и привлекательного резюме.docx"

try:
    with zipfile.ZipFile(docx_path) as z:
        xml_content = z.read('word/document.xml')
    
    root = ET.fromstring(xml_content)
    
    # XML namespace for Word
    ns = {'w': 'http://schemas.openxmlformats.org/wordprocessingml/2006/main'}
    
    text_content = []
    # Find all paragraph tags <w:p>
    for p in root.findall('.//w:p', ns):
        # Find all text runs <w:t> inside paragraphs
        texts = [node.text for node in p.findall('.//w:t', ns) if node.text]
        if texts:
            text_content.append(''.join(texts))
            
    print('\n'.join(text_content))

except Exception as e:
    print(f"Error: {e}")
