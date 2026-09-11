# 🎂✨ Akshi's Hogwarts Birthday Quest

A magical, interactive Harry Potter-themed birthday experience for Akshi Chhangani (Bauni Badmash, Leader of Bauni Samajh).

## 🎮 Game Overview

An immersive treasure hunt through 6 iconic Hogwarts locations where players collect magical artifacts to unlock a special birthday surprise!

### Features:
- 🏰 6 beautifully designed Hogwarts scenes
- ⚡ 6 collectible magical artifacts
- 🧙‍♂️ Interactive character encounters (Hagrid, Dobby, Hermione, Snape, Luna, Ron)
- 🎵 Harry Potter theme music
- ✨ Magical wand cursor with sparkle effects
- 🎆 Fireworks celebration finale
- 📜 Personalized Gryffindor acceptance letter
- 📸 Photo gallery with memories

## 🚀 Quick Start

### Option 1: Run Locally

1. **Double-click `start_server.bat`**
2. **Open browser to:** `http://localhost:8000`
3. **Enjoy the quest!**

### Option 2: Manual Server Start

```bash
python -m http.server 8000
```

Then visit: `http://localhost:8000`

## 📁 Project Structure

```
├── index.html          # Main HTML structure
├── styles.css          # All styling and animations
├── script.js           # Game logic and interactions
├── config.js           # Personalization data
├── audio.js            # Sound effects and music engine
├── start_server.bat    # Easy server launcher
├── hedwig_theme.mp3    # Background music (optional)
└── [images]/           # Character photos and backgrounds
```

## 🎨 Scenes

1. **Hogwarts Courtyard** - Find the Golden Snitch ⚡
2. **The Great Hall** - Discover the Sorting Hat 🎩
3. **Restricted Library** - Locate the Marauder's Map 📜
4. **Potions Dungeon** - Collect Felix Felicis 🧪
5. **Astronomy Tower** - Retrieve the Elder Wand 🪄
6. **Gryffindor Common Room** - Find the Gryffindor Crest 🦁

## 🎯 How to Play

1. Start the quest from the welcome screen
2. Navigate between scenes using:
   - Mouse wheel scroll
   - Left/Right arrow keys  
   - Touch swipe (mobile)
   - Prev/Next buttons
3. Click on glowing items to collect artifacts
4. Interact with characters to hear their birthday wishes
5. Collect all 6 items to unlock the golden chest
6. Read the personalized acceptance letter
7. Launch fireworks to celebrate! 🎉

## 🎵 Music

The site uses actual Harry Potter theme music. If the MP3 file is missing, it will fallback to a synthesized version using Web Audio API.

To download the music file, run:
```bash
python download_music.py
```

## 🖼️ Missing Assets

If you need to download missing character images:
```bash
python download_assets_final.py
```

Currently missing:
- `snape.jpg` (using SVG fallback)
- `dobby.jpg` (using SVG fallback)

## 🔧 Customization

All personalization is in `config.js`:
- Recipient name and titles
- Birthday wishes
- Character dialogues
- Quest item descriptions
- Photo memories

## 📱 Browser Support

- ✅ Chrome/Edge (Recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Mobile browsers (with touch support)

## 🎨 Technologies Used

- Pure vanilla JavaScript (no frameworks!)
- HTML5 Canvas for particle effects
- Web Audio API for sound
- CSS3 animations and transitions
- Responsive design

## 📝 Notes

- Best viewed on desktop for full experience
- Mobile version includes touch/swipe navigation
- All sounds generated programmatically (typewriter clicks, spell effects)
- Photos can be expanded in lightbox view

## 🎁 Birthday: September 14, 2026

Made with ❤️ and a bit of magic for Akshi's special day!

---

**House:** Gryffindor 🦁  
**Theme:** Harry Potter / Hogwarts  
**Difficulty:** Easy (Family-friendly)
