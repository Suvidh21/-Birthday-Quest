import os
import urllib.request
import time

# Image URLs that usually don't 404 (IMDB, static fansites)
characters = {
    "hagrid.jpg": "https://upload.wikimedia.org/wikipedia/en/1/10/RubeusHagrid.jpg",
    "hermione.jpg": "https://upload.wikimedia.org/wikipedia/en/d/d3/Hermione_Granger_poster.jpg",
    "snape.jpg": "https://upload.wikimedia.org/wikipedia/en/b/b9/OOTP_Snape.jpg",
    "ron.jpg": "https://upload.wikimedia.org/wikipedia/en/5/5e/Ron_Weasley_poster.jpg",
    "luna.jpg": "https://upload.wikimedia.org/wikipedia/en/c/c2/LunaLovegood.jpeg",
    "dobby.jpg": "https://upload.wikimedia.org/wikipedia/en/3/36/Dobby_%28Harry_Potter%29.png"
}

headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'}

for filename, url in characters.items():
    if os.path.exists(filename) and os.path.getsize(filename) > 0:
        continue
    print(f"Downloading {filename}...")
    try:
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req, timeout=10) as response, open(filename, 'wb') as out_file:
            out_file.write(response.read())
        print(f"Success: {filename}")
    except Exception as e:
        print(f"Failed to download {filename}: {e}")

try:
    import yt_dlp
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
    with yt_dlp.YoutubeDL(ydl_opts) as ydl:
        ydl.download(['https://www.youtube.com/watch?v=Htaj3o3JD8I'])
    print("Downloaded hedwig_theme.mp3 successfully.")
except ImportError:
    print("yt-dlp not installed for this python")
except Exception as e:
    print(f"yt-dlp failed: {e}")
