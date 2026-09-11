# Akshi's Hogwarts Birthday Quest - Deployment Guide

## Quick Deploy to GitHub

### Step 1: Initialize Git
```bash
cd "D:\Suvidh\college\New folder"
git init
git add .
git commit -m "Initial commit: Akshi's Hogwarts Birthday Quest"
```

### Step 2: Create GitHub Repository
1. Go to: https://github.com/new
2. Repository name: `akshi-birthday-quest`
3. Description: "A magical Harry Potter-themed birthday experience"
4. Set to **Public** (required for free GitHub Pages)
5. **DO NOT** initialize with README
6. Click "Create repository"

### Step 3: Push to GitHub
```bash
git branch -M main
git remote add origin https://github.com/Suvidh21/akshi-birthday-quest.git
git push -u origin main
```

### Step 4: Enable GitHub Pages
1. Go to repository Settings
2. Click "Pages" in the left sidebar
3. Under "Source", select "main" branch
4. Click "Save"
5. Wait 1-2 minutes

### Your Live Link:
```
https://suvidh21.github.io/akshi-birthday-quest/
```

---

## Manual Steps (Since automation is limited):

Please open Command Prompt and run these commands one by one:

```cmd
cd "D:\Suvidh\college\New folder"
git init
git add .
git commit -m "🎂 Initial commit: Hogwarts Birthday Quest for Akshi"
git branch -M main
git remote add origin https://github.com/Suvidh21/akshi-birthday-quest.git
git push -u origin main
```

When prompted for credentials:
- Username: `Suvidh21`
- Password: `overRev@22`

Then follow Step 4 above to enable GitHub Pages.
