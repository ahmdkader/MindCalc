# MindCalc 🧠 v3.0

**Interactive Mental Math Calculator** with step-by-step explanations.

> Calculate... and Understand | احسبها... وافهمها

## What's New in v3.0

### 🧠 Mental Math Only
- Removed Visual Method tab — now shows explanation directly
- All steps appear at once when you tap "Explain the Method"
- Clean, focused mental math learning experience

### 📱 Separate Practice Page
- Practice mode is now a separate full page (not a section)
- Score always visible during practice
- "Next" button to move to next question after checking
- "Check" button disabled after answering, "Next" enabled
- Back button to return to calculator

### 📜 History Modal
- History is now a modal popup instead of a section
- Tap the 📜 icon in header to open
- Same click-to-load functionality

### ✨ Smart Calculator Behavior
- After calculating, pressing any number starts a NEW calculation
- Buttons have active/pressed visual feedback
- Clean reset between operations

### 🔧 Smart Number Decomposition
- Multiplication now decomposes the LARGER number automatically
- Example: `20 × 23` → decomposes 23 (not 20)
- Shows: `23 = 20 + 3`, then `20 × 20 = 400`, `20 × 3 = 60`

### 🎨 Brand New Logo & Icons
- Custom brain + math symbols logo
- Full icon set for all PWA requirements

### 📱 True PWA Install Support
- Chrome/Edge: Native install prompt
- iOS Safari: Custom install instructions modal
- Samsung Internet: Full support

## File Structure

```
├── index.html              - Main HTML
├── style.css               - All styles
├── app.js                  - All JavaScript logic
├── sw.js                   - Service Worker
├── manifest.json           - PWA manifest
├── icons/                  - App icons (all sizes)
└── screenshots/            - Store screenshots
```

## How to Install

### Android (Chrome)
1. Open in Chrome
2. Tap "Install" when prompted
3. Or ⋮ → "Install app"

### iOS (Safari)
1. Open in Safari
2. Tap Share ⬆️
3. "Add to Home Screen"
4. Tap "Add"

### Desktop (Chrome/Edge)
1. Click install icon in address bar
2. Or menu → "Install MindCalc"

## Deploy to GitHub Pages

1. Upload all files to repo
2. Settings → Pages
3. Branch: main, Folder: / (root)
4. Live at `https://yourusername.github.io/MindCalc`

**Note**: PWA install requires HTTPS. GitHub Pages provides this.

## License

Open source for educational use.
