import urllib.request
import yt_dlp
import os
from duckduckgo_search import DDGS
import time

headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/91.0'}

# 1. Download missing images using duckduckgo_search
missing = {
    "snape.jpg": "Severus Snape Harry Potter movie face",
    "dobby.jpg": "Dobby the house elf Harry Potter face movie"
}

print("Searching for missing images...")
with DDGS() as ddgs:
    for filename, query in missing.items():
        if os.path.exists(filename) and os.path.getsize(filename) > 0:
            continue
        try:
            results = ddgs.images(query, max_results=5)
            for res in results:
                url = res.get('image')
                print(f"Trying {url} for {filename}...")
                try:
                    req = urllib.request.Request(url, headers=headers)
                    with urllib.request.urlopen(req, timeout=5) as resp, open(filename, 'wb') as f:
                        f.write(resp.read())
                    print(f"Success: {filename}")
                    break
                except Exception as e:
                    print(f"Failed URL {url}: {e}")
        except Exception as e:
            print(f"Search failed for {filename}: {e}")

# 2. Download MP3
if not os.path.exists("hedwig_theme.mp3"):
    print("Downloading MP3...")
    ydl_opts = {
        'format': 'bestaudio/best',
        'postprocessors': [{
            'key': 'FFmpegExtractAudio',
            'preferredcodec': 'mp3',
            'preferredquality': '128',
        }],
        'outtmpl': 'hedwig_theme.%(ext)s',
        'quiet': False
    }
    
    videos = [
        'https://www.youtube.com/watch?v=wtHcakBw4EQ',
        'https://www.youtube.com/watch?v=FjI5nC_mB0s',
        'https://www.youtube.com/watch?v=b4O4F-kE0jU'
    ]
    
    for vid in videos:
        try:
            with yt_dlp.YoutubeDL(ydl_opts) as ydl:
                ydl.download([vid])
            print("Successfully downloaded hedwig_theme.mp3")
            break
        except Exception as e:
            print(f"Failed to download {vid}: {e}")

