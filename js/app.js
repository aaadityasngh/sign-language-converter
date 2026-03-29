/* =============================================
   SignSpeak — app.js
   Text → ASL Sign Language Converter
   ============================================= */

// ─── DOM Elements ───────────────────────────────
const textInput   = document.getElementById('textInput');
const convertBtn  = document.getElementById('convertBtn');
const clearBtn    = document.getElementById('clearBtn');
const micBtn      = document.getElementById('micBtn');
const downloadBtn = document.getElementById('downloadBtn');
const signsGrid   = document.getElementById('signsGrid');
const signsSection= document.getElementById('signsSection');
const emptyState  = document.getElementById('emptyState');
const charNum     = document.getElementById('charNum');
const themeBtn    = document.getElementById('themeBtn');
const themeIcon   = document.getElementById('themeIcon');
const toast       = document.getElementById('toast');

// ─── Supported characters ───────────────────────
// All A–Z letters + digits 0–9 are handled.
// Images must be named: a.png, b.png, ... z.png, 0.png, 1.png ...
// Place them in:  images/
const SUPPORTED = 'abcdefghijklmnopqrstuvwxyz0123456789';

// ─── Phrase Dictionary ───────────────────────────
// Key   = what user types (lowercase)
// Value = image filename inside images/ folder (without .png)
// To add more: just add a new line here + put the image in images/
const PHRASES = {
  "hello"       : "hello",
  "i love you"  : "iloveyou",
  "thank you"   : "thankyou",
  "welcome"     : "welcome"
};

// ─── Image path builder ─────────────────────────
function getImagePath(char) {
  return `images/${char}.png`;
}

// ─── Render sign cards ──────────────────────────
function renderSigns(text) {
  signsGrid.innerHTML = '';

  if (!text.trim()) {
    signsSection.style.display = 'none';
    emptyState.style.display   = 'block';
    return;
  }

  const lower = text.toLowerCase();
  let delay   = 0;
  let i       = 0;

  // Phrases sorted longest-first so "thank you" matches before "thank"
  const sortedPhrases = Object.keys(PHRASES).sort((a, b) => b.length - a.length);

  while (i < lower.length) {
    const ch = lower[i];

    // Space → show separator card
    if (ch === ' ') {
      signsGrid.appendChild(createSpaceCard(delay));
      delay += 30;
      i++;
      continue;
    }

    // Try to match a known phrase starting at position i
    let matched = false;
    for (const phrase of sortedPhrases) {
      if (lower.startsWith(phrase, i)) {
        // Must end at a word boundary (space or end of string)
        const after = lower[i + phrase.length];
        if (after === undefined || after === ' ') {
          signsGrid.appendChild(createPhraseCard(phrase, PHRASES[phrase], delay));
          delay += 80;
          i += phrase.length;
          matched = true;
          break;
        }
      }
    }
    if (matched) continue;

    // Skip unsupported chars silently
    if (!SUPPORTED.includes(ch)) { i++; continue; }

    signsGrid.appendChild(createSignCard(ch, delay));
    delay += 60;
    i++;
  }

  signsSection.style.display = 'block';
  emptyState.style.display   = 'none';
}

// ─── Build a sign card DOM element ──────────────
function createSignCard(char, delay) {
  const card = document.createElement('div');
  card.className = 'sign-card';
  card.style.animationDelay = `${delay}ms`;

  // Image wrapper
  const imgWrap = document.createElement('div');
  imgWrap.className = 'sign-img-wrap';

  // Try to load image; fallback to letter
  const img = document.createElement('img');
  img.alt  = char.toUpperCase();
  img.src  = getImagePath(char);
  img.loading = 'lazy';

  img.onerror = function () {
    // Image not found → show styled fallback letter
    this.remove();
    const fb = document.createElement('span');
    fb.className   = 'sign-fallback';
    fb.textContent = char.toUpperCase();
    imgWrap.appendChild(fb);
  };

  imgWrap.appendChild(img);

  // Label
  const label = document.createElement('span');
  label.className   = 'sign-label';
  label.textContent = char.toUpperCase();

  card.appendChild(imgWrap);
  card.appendChild(label);
  return card;
}

// ─── Build a space card ──────────────────────────
function createSpaceCard(delay) {
  const card = document.createElement('div');
  card.className = 'sign-card space-card';
  card.style.animationDelay = `${delay}ms`;

  const imgWrap = document.createElement('div');
  imgWrap.className = 'sign-img-wrap';

  const icon = document.createElement('span');
  icon.className   = 'space-icon';
  icon.textContent = '⎵';

  imgWrap.appendChild(icon);

  const label = document.createElement('span');
  label.className   = 'sign-label';
  label.textContent = 'space';

  card.appendChild(imgWrap);
  card.appendChild(label);
  return card;
}

// ─── Build a phrase card ─────────────────────────
function createPhraseCard(phrase, imgFile, delay) {
  const card = document.createElement('div');
  card.className = 'sign-card phrase-card';
  card.style.animationDelay = `${delay}ms`;

  const imgWrap = document.createElement('div');
  imgWrap.className = 'sign-img-wrap phrase-wrap';

  const img = document.createElement('img');
  img.alt     = phrase;
  img.src     = `images/${imgFile}.png`;
  img.loading = 'lazy';

  img.onerror = function () {
    // Image not found → show emoji fallback
    this.remove();
    const fb = document.createElement('span');
    fb.className   = 'sign-fallback';
    fb.textContent = '🤟';
    imgWrap.appendChild(fb);
  };

  imgWrap.appendChild(img);

  const label = document.createElement('span');
  label.className   = 'sign-label phrase-label';
  label.textContent = phrase;  // shows full phrase text as label

  card.appendChild(imgWrap);
  card.appendChild(label);
  return card;
}

// ─── Convert Button ──────────────────────────────
convertBtn.addEventListener('click', () => {
  const val = textInput.value.trim();
  if (!val) {
    showToast('Please type something first!');
    return;
  }
  renderSigns(val);
});

// Also convert on Enter (Shift+Enter for newline)
textInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' && !e.shiftKey) {
    e.preventDefault();
    convertBtn.click();
  }
});

// ─── Character counter ───────────────────────────
textInput.addEventListener('input', () => {
  charNum.textContent = textInput.value.length;
});

// ─── Clear Button ────────────────────────────────
clearBtn.addEventListener('click', () => {
  textInput.value      = '';
  charNum.textContent  = '0';
  signsGrid.innerHTML  = '';
  signsSection.style.display = 'none';
  emptyState.style.display   = 'block';
  textInput.focus();
});

// ─── Theme Toggle ────────────────────────────────
let isDark = true;

themeBtn.addEventListener('click', () => {
  isDark = !isDark;
  document.body.classList.toggle('light', !isDark);
  themeIcon.textContent = isDark ? '☀️' : '🌙';
  localStorage.setItem('signspeakTheme', isDark ? 'dark' : 'light');
});

// Restore saved theme
(function initTheme() {
  const saved = localStorage.getItem('signspeakTheme');
  if (saved === 'light') {
    isDark = false;
    document.body.classList.add('light');
    themeIcon.textContent = '🌙';
  }
})();

// ─── Voice Input (Speech Recognition) ───────────
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
let recognition = null;
let isRecording  = false;

if (SpeechRecognition) {
  recognition = new SpeechRecognition();
  recognition.lang        = 'en-US';
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;

  recognition.onresult = (e) => {
    const transcript = e.results[0][0].transcript;
    textInput.value  = transcript.slice(0, 100);
    charNum.textContent = textInput.value.length;
    renderSigns(textInput.value);
    showToast('🎙️ Voice captured!');
  };

  recognition.onerror = () => {
    showToast('Mic error. Please try again.');
    stopRecording();
  };

  recognition.onend = () => {
    stopRecording();
  };

  micBtn.addEventListener('click', () => {
    if (isRecording) {
      recognition.stop();
    } else {
      recognition.start();
      isRecording = true;
      micBtn.classList.add('recording');
      micBtn.textContent = '⏹️';
      showToast('Listening...');
    }
  });
} else {
  // Browser does not support speech recognition
  micBtn.title = 'Voice input not supported in this browser';
  micBtn.style.opacity = '0.4';
  micBtn.style.cursor  = 'not-allowed';
}

function stopRecording() {
  isRecording = false;
  micBtn.classList.remove('recording');
  micBtn.textContent = '🎙️';
}

// ─── Download ────────────────────────────────────
// Capture the signs grid as a canvas using html2canvas (CDN)
downloadBtn.addEventListener('click', () => {
  const cards = signsGrid.querySelectorAll('.sign-card');
  if (!cards.length) {
    showToast('Nothing to download!');
    return;
  }

  // Simple: open a printable window
  const win = window.open('', '_blank');
  const imgs = [];

  cards.forEach(card => {
    const img = card.querySelector('img');
    const fb  = card.querySelector('.sign-fallback');
    const lbl = card.querySelector('.sign-label').textContent;

    if (img) {
      imgs.push(`<div style="text-align:center;display:inline-block;margin:8px">
        <img src="${img.src}" width="80" height="80" style="border-radius:10px;display:block"/>
        <div style="font-size:12px;margin-top:4px;font-family:monospace">${lbl}</div>
      </div>`);
    } else if (fb) {
      imgs.push(`<div style="text-align:center;display:inline-block;margin:8px">
        <div style="width:80px;height:80px;border-radius:10px;background:#1a1a2e;display:flex;align-items:center;justify-content:center;font-size:2rem;color:#00e5b0;font-family:monospace">${fb.textContent}</div>
        <div style="font-size:12px;margin-top:4px;font-family:monospace">${lbl}</div>
      </div>`);
    }
  });

  win.document.write(`
    <!DOCTYPE html><html><head><title>SignSpeak Export</title></head>
    <body style="background:#07080d;color:#f0f0f5;padding:24px;font-family:sans-serif">
      <h2 style="margin-bottom:20px">🤟 SignSpeak — ${textInput.value.toUpperCase()}</h2>
      <div>${imgs.join('')}</div>
      <script>window.print();<\/script>
    </body></html>
  `);
  win.document.close();

  showToast('📥 Download window opened!');
});

// ─── Toast notification ──────────────────────────
let toastTimer = null;

function showToast(msg) {
  toast.textContent = msg;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.classList.remove('show');
  }, 2500);
}
