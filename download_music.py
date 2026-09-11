import yt_dlp
import os

# Download Hedwig's Theme as MP3
if not os.path.exists("hedwig_theme.mp3"):
    print("Downloading Harry Potter theme music...")
    ydl_opts = {
        'format': 'bestaudio/best',
        'postprocessors': [{
            'key': 'FFmpegExtractAudio',
            'preferredcodec': 'mp3',
            'preferredquality': '192',
        }],
        'outtmpl': 'hedwig_theme.%(ext)s',
        'quiet': False
    }

    # Official Hedwig's Theme
    videos = [
        'https://www.youtube.com/watch?v=wtHcakBw4EQ',  # Official soundtrack
        'https://www.youtube.com/watch?v=Htaj3o3JD8I',  # High quality version
        'https://www.youtube.com/watch?v=zCNHVMIYqiA',  # Alternative
    ]

    for vid in videos:
        try:
            with yt_dlp.YoutubeDL(ydl_opts) as ydl:
                ydl.download([vid])
            print("✅ Successfully downloaded hedwig_theme.mp3")
            break
        except Exception as e:
            print(f"❌ Failed to download {vid}: {e}")
            continue
else:
    print("✅ hedwig_theme.mp3 already exists!")
