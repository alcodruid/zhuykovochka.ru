try:
    from pypdf import PdfReader
except ImportError:
    try:
        import PyPDF2 as pypdf
        PdfReader = pypdf.PdfFileReader
    except ImportError:
        print("MISSING_LIB")
        exit(1)

try:
    reader = PdfReader("Для создания развернутого и привлекательного резюме.pdf")
    text = ""
    for page in reader.pages:
        text += page.extract_text() + "\n"
    print(text)
except Exception as e:
    print(f"Error: {e}")
