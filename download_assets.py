import urllib.request
import os

assets = {
    "hagrid.jpg": "https://upload.wikimedia.org/wikipedia/en/6/6e/Rubeus_Hagrid.jpg",
    "hermione.jpg": "https://upload.wikimedia.org/wikipedia/en/d/d3/Hermione_Granger_poster.jpg",
    "snape.jpg": "https://upload.wikimedia.org/wikipedia/en/b/b9/OOTP_Snape.jpg",
    "ron.jpg": "https://upload.wikimedia.org/wikipedia/en/5/5e/Ron_Weasley_poster.jpg",
    "luna.jpg": "https://upload.wikimedia.org/wikipedia/en/c/c2/LunaLovegood.jpeg",
    "dobby.jpg": "https://upload.wikimedia.org/wikipedia/en/3/36/Dobby_%28Harry_Potter%29.png",
    "hedwig_theme.mp3": "https://archive.org/download/HarryPotterTheme_201711/Harry%20Potter%20Theme.mp3"
}

headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'}

for filename, url in assets.items():
    print(f"Downloading {filename}...")
    try:
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req) as response, open(filename, 'wb') as out_file:
            data = response.read()
            out_file.write(data)
        print(f"Success: {filename}")
    except Exception as e:
        print(f"Failed to download {filename}: {e}")

