# MindCalc 🧠 v2.0

**Interactive Mental Math Calculator** with step-by-step explanations.

> Calculate... and Understand | احسبها... وافهمها

## What's New in v2.0

### 🎨 Brand New Logo & Icons
- Custom designed brain + math symbols logo
- Full icon set: 72px, 96px, 128px, 144px, 152px, 192px, 384px, 512px
- Favicon support (16px, 32px, 48px)
- Maskable icons for adaptive shapes on Android

### 📱 True PWA Install Support
- **Chrome/Edge/Android**: Native install prompt with custom UI
- **iOS Safari**: Custom step-by-step install instructions modal
- **Samsung Internet**: Full install support
- Install success toast notification
- Smart detection: won't prompt if already installed

### 🖼️ App Store Screenshots
- Wide screenshot (1280x720) for desktop stores
- Narrow screenshot (720x1280) for mobile stores
- Shown in native install dialog on Android

## Features

- 🧮 Full calculator with +, −, ×, ÷, %
- 🧠 Step-by-step mental math explanations
- 🎨 Animated visual representations
- 🌐 Bilingual: Arabic & English (with RTL/LTR support)
- 🎯 Practice mode with 6 levels
- 📜 History with localStorage
- 🌙 Dark/Light mode
- ⌨️ Full keyboard support
- 📱 Responsive design
- ⬇️ Installable PWA (Add to Home Screen)

## File Structure

```
├── index.html              - Main HTML with PWA meta tags
├── style.css               - Styles with install prompt & iOS modal
├── app.js                  - All JavaScript logic + PWA install
├── sw.js                   - Service Worker for offline
├── manifest.json           - PWA manifest with screenshots
├── icon-72.png             - App icons (multiple sizes)
├── icon-96.png
├── icon-128.png
├── icon-144.png
├── icon-152.png
├── icon-192.png
├── icon-384.png
├── icon-512.png
├── favicon-16.png          - Favicon sizes
├── favicon-32.png
├── favicon-48.png
├── screenshot-wide.png     - Store screenshots
└── screenshot-narrow.png
```

## PWA Install Requirements Met

✅ HTTPS (required for production)  
✅ Valid manifest.json with all required fields  
✅ Icons: 192px + 512px (maskable)  
✅ Service Worker with fetch handler  
✅ Screenshots for install dialog  
✅ `prefer_related_applications: false`  
✅ `display: standalone`  

## How to Install

### Android (Chrome)
1. Open the app in Chrome
2. Tap **"Install"** when the prompt appears
3. Or tap menu (⋯) → **"Install app"**
4. App appears in app drawer like a native app!

### iOS (Safari)
1. Open the app in Safari
2. Tap the **Share** button ⬆️
3. Scroll down and tap **"Add to Home Screen"**
4. Tap **Add** in the top right

### Desktop (Chrome/Edge)
1. Open the app in browser
2. Click the **install icon** in the address bar
3. Or click menu → **"Install MindCalc"**

## Keyboard Shortcuts

| Key | Function |
|-----|----------|
| 0-9 | Numbers |
| + − × ÷ | Operations |
| Enter | = |
| Backspace | Delete |
| Escape | Clear All |
| . | Decimal |

## Deploy to GitHub Pages

1. Upload all files to your repo
2. Go to **Settings → Pages**
3. Select branch: `main`, folder: `/ (root)`
4. Your app will be live at `https://yourusername.github.io/MindCalc`

**Note**: PWA install only works over HTTPS. GitHub Pages provides this automatically.

## License

Open source for educational use.
