import os
from dotenv import load_dotenv

load_dotenv()

GOOGLE_API_KEY = os.getenv("AQ.Ab8RN6KHhXMP_hMRwKfAB-sHP1xlKDzo3jP5XtsC2x601huYLw")

if not GOOGLE_API_KEY:
    raise ValueError(
        "GOOGLE_API_KEY não encontrada. "
        "Verifique o arquivo .env."
    )