# 🤟 SignSpeak — Text to Sign Language Converter

A clean, fast, and beautiful web app that converts any text into **American Sign Language (ASL)** hand signs — no backend, no server, no dependencies.

---

## 📁 Project Structure

```
sign-language-converter/
│
├── index.html          ← Main page (open this in browser)
├── css/
│   └── style.css       ← All styles (dark/light theme)
├── js/
│   └── app.js          ← All logic (convert, voice, download)
├── images/             ← ⚠️  PUT YOUR SIGN IMAGES HERE
│   ├── a.png
│   ├── b.png
│   ├── c.png
│   │   ... (a to z)
│   ├── 0.png
│   ├── 1.png
│   │   ... (0 to 9)
└── README.md
```

---

## 🖼️ Where to Get Sign Language Images

### Option 1 — Best (Clean PNG images, recommended)
Download from this GitHub repo:
```
https://github.com/evansenter/asl
```
Images are in the `asl/` folder named `a.png`, `b.png`, etc.
Download them and paste into your `images/` folder.

### Option 2 — Kaggle Dataset
```
https://www.kaggle.com/datasets/grassknoted/asl-alphabet
```
Pick one image per letter from the training folder.
Rename them to `a.png`, `b.png`, ... `z.png`.

### Option 3 — Google Images (Quickest)
Search: **"ASL alphabet A PNG transparent background"**
Download 26 images, name them correctly, put in `images/` folder.

> ⚡ Note: The app works even WITHOUT images — it shows the letter as a styled fallback. Add images to make it look like the real thing!

---

## 🚀 How to Run

### Method 1 — Just open in browser (Simplest)
```
Double-click index.html → Opens in browser → Done!
```

### Method 2 — Local server (Recommended, fixes any image loading issues)
```bash
# If you have Python installed:
cd sign-language-converter
python -m http.server 3000

# Then open: http://localhost:3000
```

### Method 3 — VS Code Live Server
1. Install "Live Server" extension in VS Code
2. Right-click `index.html` → "Open with Live Server"

---

## ✨ Features

| Feature | Status |
|---|---|
| Text → ASL Signs | ✅ |
| A–Z support | ✅ |
| 0–9 numbers | ✅ |
| Dark / Light theme | ✅ |
| Voice input (mic) | ✅ |
| Character counter | ✅ |
| Download output | ✅ |
| Animated cards | ✅ |
| Mobile responsive | ✅ |
| No internet required | ✅ |

---

## 📦 Dependencies

**None.** This is pure HTML + CSS + JavaScript.
No npm, no pip, no build tools required.

---

## 🔧 Customization

**Want to use ISL (Indian Sign Language) instead?**
Just replace the images in `images/` with ISL hand sign images.
The code will automatically use them.

**Want to change image size?**
In `css/style.css`, find `.sign-img-wrap` and change `width` and `height`.

---

## 📱 Browser Compatibility

| Browser | Works? |
|---|---|
| Chrome | ✅ Full (including voice) |
| Firefox | ✅ Full (voice may not work) |
| Edge | ✅ Full |
| Safari | ✅ (voice limited) |
| Mobile Chrome | ✅ |

---

## 🎓 Built For

Minor Project — B.Tech Computer Science  
Topic: Text to Sign Language Converter (ASL)

---

Made with ❤️ using vanilla HTML, CSS, and JavaScript.
