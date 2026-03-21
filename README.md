<div align="center">

# 🤟 SignSpeak

### Text to Sign Language Converter

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![License: MIT](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)
[![No Dependencies](https://img.shields.io/badge/Dependencies-None-brightgreen?style=for-the-badge)](package.json)

**A clean, fast, and beautiful web app that converts any text into American Sign Language (ASL) hand signs — instantly, offline, and with zero dependencies.**

[🚀 Quick Start](#-how-to-run) · [✨ Features](#-features) · [🖼️ Get Images](#%EF%B8%8F-where-to-get-sign-language-images) · [🔧 Customize](#-customization) · [🤝 Contributing](#-contributing)

</div>

---

## 📸 Preview

> The app renders each letter as an animated ASL sign card with a dark/light theme toggle, voice input, and one-click download.

| Dark Theme | Light Theme |
|:---:|:---:|
| Type a word → animated ASL cards appear instantly | Toggle ☀️ for a clean light mode |

---

## ✨ Features

| Feature | Detail |
|---|---|
| 🔡 Text → ASL Signs | Converts every letter A–Z into its ASL hand sign |
| 🔢 Number support | Digits 0–9 are fully supported |
| 🌗 Dark / Light theme | Persists across sessions via `localStorage` |
| 🎙️ Voice input | Speak instead of type — powered by the Web Speech API |
| 🔢 Character counter | Live 0/100 counter with a hard cap |
| ⬇️ Download output | Opens a print-ready window with all sign images |
| 🎞️ Animated cards | Each card fades in with a staggered delay |
| 📱 Mobile responsive | Works perfectly on phones and tablets |
| ⌨️ Keyboard shortcut | Press `Enter` to convert instantly |
| 🚫 No internet required | 100% offline after first load (no CDN, no API) |
| 🔁 Graceful fallback | If an image is missing, shows a styled letter instead |

---

## 📁 Project Structure

```
sign-language-converter/
│
├── index.html          ← Entry point — open this in any browser
├── css/
│   └── style.css       ← All styles: dark/light themes, animations, layout
├── js/
│   └── app.js          ← All logic: convert, voice, download, theme
├── images/             ← ASL sign images (a.png … z.png, 0.png … 9.png)
│   ├── a.png
│   ├── b.png
│   │   ... (a to z)
│   ├── 0.png
│   │   ... (0 to 9)
└── README.md
```

---

## 🚀 How to Run

### ⚡ Method 1 — Just open in browser *(Simplest)*

```
Double-click index.html → Opens in your browser → Done!
```

> This is all you need. No install, no build, no server.

---

### 🐍 Method 2 — Python local server *(Recommended)*

A local server avoids any browser restrictions on loading local image files.

```bash
cd sign-language-converter
python -m http.server 3000
# Open: http://localhost:3000
```

---

### 💻 Method 3 — VS Code Live Server

1. Install the **Live Server** extension in VS Code
2. Right-click `index.html` → **"Open with Live Server"**
3. Browser opens automatically and hot-reloads on every save

---

## 🖼️ Where to Get Sign Language Images

The `images/` folder must contain one PNG per letter/digit, named `a.png` … `z.png`.  
The app works without images too — it shows a styled fallback letter.

### ✅ Option 1 — Clean PNGs (Recommended)

```
https://github.com/evansenter/asl
```

Images live in the `asl/` folder, already named correctly. Download and paste into `images/`.

### 📊 Option 2 — Kaggle ASL Dataset

```
https://www.kaggle.com/datasets/grassknoted/asl-alphabet
```

Pick one image per letter from the training set, rename to `a.png` … `z.png`, and place in `images/`.

### 🔍 Option 3 — Google Images *(Quickest)*

Search: **"ASL alphabet A PNG transparent background"**  
Download 26 images, name them correctly (`a.png` … `z.png`), and drop them in `images/`.

> ⚡ **Pro tip:** The app works perfectly even without images — each missing image gracefully falls back to a large styled letter.

---

## 🔧 Customization

**Switch to ISL (Indian Sign Language)**  
Replace the images in `images/` with ISL hand sign images. The app automatically picks them up — no code change needed.

**Change image size**  
Open `css/style.css`, find `.sign-img-wrap`, and edit the `width` and `height` values.

**Increase character limit**  
In `index.html`, change `maxlength="100"` on the `<textarea>`.  
In `js/app.js`, update the `/100` label in the counter and the `slice(0, 100)` in the voice handler.

**Change animation speed**  
In `js/app.js`, adjust the `delay += 60` (letter cards) and `delay += 30` (space cards) values.

---

## 📱 Browser Compatibility

| Browser | Status | Voice Input |
|---|---|---|
| Chrome 90+ | ✅ Full support | ✅ Yes |
| Edge 90+ | ✅ Full support | ✅ Yes |
| Firefox 90+ | ✅ Full support | ⚠️ Limited |
| Safari 14+ | ✅ Full support | ⚠️ Limited |
| Mobile Chrome | ✅ Full support | ✅ Yes |
| Mobile Safari | ✅ Full support | ⚠️ Limited |

> Voice input uses the **Web Speech API**. Chrome and Edge offer the best experience.

---

## 📦 Tech Stack

| Layer | Technology |
|---|---|
| Markup | HTML5 (semantic) |
| Styling | CSS3 (custom properties, flexbox, grid, keyframes) |
| Logic | Vanilla JavaScript (ES6+) |
| Fonts | Google Fonts — Syne + DM Mono |
| APIs | Web Speech API (voice input) |
| Build tools | **None** |
| Dependencies | **None** |

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. **Fork** the repository
2. **Create** a feature branch: `git checkout -b feature/my-feature`
3. **Commit** your changes: `git commit -m 'Add my feature'`
4. **Push** to the branch: `git push origin feature/my-feature`
5. **Open a Pull Request**

Please keep PRs focused — one feature or fix per PR.

---

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

---

## 🎓 About

Minor Project — B.Tech Computer Science  
**Topic:** Text to Sign Language Converter (ASL)

---

<div align="center">

Made with ❤️ using vanilla HTML, CSS & JavaScript

⭐ **Star this repo if you find it useful!**

</div>
