import os
import yt_dlp
from duckduckgo_search import DDGS
import urllib.request
import time

# 1. Download Hedwig's Theme using yt-dlp
ydl_opts = {
    'format': 'bestaudio/best',
    'postprocessors': [{
        'key': 'FFmpegExtractAudio',
        'preferredcodec': 'mp3',
        'preferredquality': '192',
    }],
    'outtmpl': 'hedwig_theme.%(ext)s',
    'noplaylist': True,
    'quiet': False
}

print("Downloading Hedwig's Theme...")
try:
    with yt_dlp.YoutubeDL(ydl_opts) as ydl:
        ydl.download(['https://www.youtube.com/watch?v=Htaj3o3JD8I'])
    print("Downloaded hedwig_theme.mp3 successfully.")
except Exception as e:
    print(f"Failed to download audio: {e}")

# 2. Download Character Images using DuckDuckGo search
characters = {
    "hagrid.jpg": "Robbie Coltrane Hagrid face portrait movie",
    "hermione.jpg": "Emma Watson Hermione Granger face portrait movie",
    "snape.jpg": "Alan Rickman Severus Snape face portrait movie",
    "ron.jpg": "Rupert Grint Ron Weasley face portrait movie",
    "luna.jpg": "Evanna Lynch Luna Lovegood spectrespecs face portrait movie",
    "dobby.jpg": "Dobby the house elf face portrait movie"
}

headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'}

with DDGS() as ddgs:
    for filename, query in characters.items():
        if os.path.exists(filename) and os.path.getsize(filename) > 0:
            print(f"{filename} already exists. Skipping.")
            continue
            
        print(f"Searching for {filename}...")
        try:
            results = ddgs.images(query, max_results=3, size="Medium")
            for result in results:
                image_url = result.get("image")
                if image_url:
                    print(f"Downloading {image_url}...")
                    req = urllib.request.Request(image_url, headers=headers)
                    with urllib.request.urlopen(req, timeout=10) as response, open(filename, 'wb') as out_file:
                        out_file.write(response.read())
                    print(f"Success: {filename}")
                    time.sleep(1)
                    break
        except Exception as e:
            print(f"Failed to download {filename}: {e}")
