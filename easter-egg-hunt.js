'use strict';

/* =====================================================
   Easter Egg Hunt — Core Logic
   =====================================================
   Usage:
     1. Add class="easter-egg" and data-egg-id="unique-id"
        to any <img> you want to be a clickable easter egg.
     2. Include this script (and easter-egg-hunt.css) on your page.

   Example:
     <img class="easter-egg" data-egg-id="egg-1"
          src="assets/images/easteregg.png" alt="Osterei">
   ===================================================== */


// LOOT_POOL is defined in lootpool.js — load that script before this one.

// Crack paths are CUMULATIVE — each stage array is a flat list of ALL paths
// to show up to that stage. renderCracks only draws newly added ones.
//
// Impact origin: (100, 92) — upper-center of the egg (SVG viewBox 0 0 200 220).
// Design: impact star first, then main fractures spread across the whole egg,
// with organic branching. w = stroke-width.
const CRACK_PATHS = [

  // ── Stage 0: first hit — impact star + one long downward fracture ──────
  // (7 paths; star appears first, main fracture draws last = bottom of list)
  [
    { d: 'M 100 92 L 98 77 L 102 67',        w: 1.2 }, // spike: up
    { d: 'M 100 92 L 113 83 L 121 74',       w: 1.1 }, // spike: upper-right
    { d: 'M 100 92 L 117 93 L 126 89',       w: 1.2 }, // spike: right
    { d: 'M 100 92 L 87 82 L 79 72',         w: 1.1 }, // spike: upper-left
    { d: 'M 100 92 L 82 91 L 73 86',         w: 1.2 }, // spike: left
    { d: 'M 100 92 L 87 103 L 81 113',       w: 1.0 }, // spike: lower-left
    // Main fracture — zig-zags down, deviation grows wider toward the base
    { d: 'M 100 92 L 95 103 L 106 113 L 97 124 L 109 134 L 98 146 L 112 156 L 101 167 L 115 177 L 106 188', w: 3.0 }
  ],

  // ── Stage 1: second hit — left-side fracture + branches ────────────────
  // (adds 5 paths; main left fracture drawn first so branches overlay it)
  [
    // — carry over stage 0 —
    { d: 'M 100 92 L 98 77 L 102 67',        w: 1.2 },
    { d: 'M 100 92 L 113 83 L 121 74',       w: 1.1 },
    { d: 'M 100 92 L 117 93 L 126 89',       w: 1.2 },
    { d: 'M 100 92 L 87 82 L 79 72',         w: 1.1 },
    { d: 'M 100 92 L 82 91 L 73 86',         w: 1.2 },
    { d: 'M 100 92 L 87 103 L 81 113',       w: 1.0 },
    { d: 'M 100 92 L 95 103 L 106 113 L 97 124 L 109 134 L 98 146 L 112 156 L 101 167 L 115 177 L 106 188', w: 3.0 },
    // — new for stage 1 —
    // Left-side fracture: arcs hard left, reaches near the egg edge
    { d: 'M 100 92 L 86 97 L 74 90 L 61 97 L 49 89 L 39 96 L 33 108', w: 2.6 },
    // Branch off left fracture (74,90) — goes upper-left
    { d: 'M 74 90 L 68 79 L 59 75 L 51 67',  w: 1.5 },
    // Branch off left fracture (61,97) — goes lower
    { d: 'M 61 97 L 54 107 L 46 104 L 39 113', w: 1.4 },
    // Branch off main fracture (106,113) — sweeps right
    { d: 'M 106 113 L 117 107 L 127 113 L 136 107 L 145 112 L 153 106', w: 1.6 },
    // Sub-branch off main fracture (98,146) — goes left
    { d: 'M 98 146 L 88 141 L 80 146 L 71 140', w: 1.3 }
  ],

  // ── Stage 2: third hit — upper-right fracture + micro-cracks ───────────
  // (adds 6 paths; major fracture first, then details)
  [
    // — carry over stages 0 + 1 —
    { d: 'M 100 92 L 98 77 L 102 67',        w: 1.2 },
    { d: 'M 100 92 L 113 83 L 121 74',       w: 1.1 },
    { d: 'M 100 92 L 117 93 L 126 89',       w: 1.2 },
    { d: 'M 100 92 L 87 82 L 79 72',         w: 1.1 },
    { d: 'M 100 92 L 82 91 L 73 86',         w: 1.2 },
    { d: 'M 100 92 L 87 103 L 81 113',       w: 1.0 },
    { d: 'M 100 92 L 95 103 L 106 113 L 97 124 L 109 134 L 98 146 L 112 156 L 101 167 L 115 177 L 106 188', w: 3.0 },
    { d: 'M 100 92 L 86 97 L 74 90 L 61 97 L 49 89 L 39 96 L 33 108', w: 2.6 },
    { d: 'M 74 90 L 68 79 L 59 75 L 51 67',  w: 1.5 },
    { d: 'M 61 97 L 54 107 L 46 104 L 39 113', w: 1.4 },
    { d: 'M 106 113 L 117 107 L 127 113 L 136 107 L 145 112 L 153 106', w: 1.6 },
    { d: 'M 98 146 L 88 141 L 80 146 L 71 140', w: 1.3 },
    // — new for stage 2 —
    // Upper-right fracture: arcs right, nearly reaches the far edge
    { d: 'M 100 92 L 111 85 L 122 90 L 133 83 L 143 89 L 153 82 L 163 89 L 168 101', w: 2.5 },
    // Branch off upper-right fracture (122,90) — drops down
    { d: 'M 122 90 L 128 102 L 121 114 L 129 126 L 122 138', w: 1.5 },
    // Extend the right sweep further
    { d: 'M 153 106 L 160 112 L 166 106 L 171 114', w: 1.2 },
    // Micro-crack at the very bottom of main fracture
    { d: 'M 106 188 L 115 192 L 109 202 L 118 208', w: 1.1 },
    // Micro-crack near impact: connects left spike to lower-left spike
    { d: 'M 82 91 L 87 100 L 82 110 L 87 119', w: 0.9 },
    // Micro-crack on lower-left branch
    { d: 'M 46 104 L 41 115 L 47 123 L 40 132', w: 1.0 }
  ]
];

const STORAGE_KEY = 'easterHunt_crackedEggs';
const SVG_NS      = 'http://www.w3.org/2000/svg';


// ── LocalStorage helpers ───────────────────────────────

function getCrackedEggs() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
  } catch {
    return [];
  }
}

function markEggCracked(eggId) {
  const cracked = getCrackedEggs();
  if (!cracked.includes(eggId)) {
    cracked.push(eggId);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cracked));
  }
}


// ── SVG crack lines ────────────────────────────────────

function renderCracks(svgEl, stageIndex) {
  const shadowGroup = svgEl.querySelector('.cracks-shadow-layer');
  const lineGroup   = svgEl.querySelector('.cracks-line-layer');

  const allPaths  = CRACK_PATHS[stageIndex];
  const prevCount = stageIndex > 0 ? CRACK_PATHS[stageIndex - 1].length : 0;
  const newPaths  = allPaths.slice(prevCount);

  // For each new path: append to both layers, then animate with stroke-dashoffset
  // so the crack visually "draws" itself across the egg.
  newPaths.forEach(({ d, w }, idx) => {
    const delay = idx * 38; // stagger each new line by 38 ms

    function makePath(stroke, strokeW) {
      const p = document.createElementNS(SVG_NS, 'path');
      p.setAttribute('d', d);
      p.setAttribute('stroke', stroke);
      p.setAttribute('stroke-width', String(strokeW));
      p.setAttribute('fill', 'none');
      p.setAttribute('stroke-linecap', 'round');
      p.setAttribute('stroke-linejoin', 'round');
      return p;
    }

    const shadow = makePath('rgba(215,190,155,0.48)', w + 2.5);
    const crack  = makePath('rgba(22,13,6,0.68)',     w);

    shadowGroup.appendChild(shadow);
    lineGroup.appendChild(crack);

    // Draw animation via stroke-dashoffset
    [shadow, crack].forEach(p => {
      const len = p.getTotalLength();
      p.style.strokeDasharray  = len;
      p.style.strokeDashoffset = len;
      setTimeout(() => {
        p.style.transition      = `stroke-dashoffset ${Math.max(0.13, len / 320)}s ease-out`;
        p.style.strokeDashoffset = 0;
      }, delay);
    });
  });
}


// ── Build modal HTML ───────────────────────────────────

function buildModal(imgSrc) {
  const sparkles = Array(8).fill('<span></span>').join('');

  return `
    <div class="egg-modal" role="dialog" aria-modal="true" aria-labelledby="eggModalTitle">

      <!-- ① Crack Phase -->
      <div class="modal-phase crack-phase">
        <h2 class="modal-title" id="eggModalTitle">Du hast ein Osterei gefunden!</h2>
        <p class="crack-hint">Klick auf das Ei und knack es auf!</p>
        <div class="crack-progress" aria-label="Fortschritt">
          <span class="pip" aria-hidden="true"></span>
          <span class="pip" aria-hidden="true"></span>
          <span class="pip" aria-hidden="true"></span>
        </div>
        <div class="egg-crack-container"
             role="button"
             tabindex="0"
             aria-label="Osterei aufknacken – klick mich!">
          <img class="egg-whole" src="${imgSrc}" alt="" draggable="false">
          <div class="egg-half egg-top">
            <img src="${imgSrc}" alt="" draggable="false">
          </div>
          <div class="egg-half egg-bottom">
            <img src="${imgSrc}" alt="" draggable="false">
          </div>
          <svg class="egg-cracks-svg"
               viewBox="0 0 200 220"
               xmlns="${SVG_NS}"
               aria-hidden="true">
            <g class="cracks-shadow-layer"></g>
            <g class="cracks-line-layer"></g>
          </svg>
          <div class="egg-sparkles" aria-hidden="true">${sparkles}</div>
        </div>
      </div>

      <!-- ② Fact / Quiz Phase -->
      <div class="modal-phase fact-phase" hidden>

        <!-- Fact view -->
        <div class="fact-view">
          <div class="egg-fact-card">
            <div class="fact-egg-icon" aria-hidden="true">🥚</div>
            <h3 class="fact-title"></h3>
            <p class="fact-text"></p>
          </div>
        </div>

        <!-- Quiz view (hidden until a quiz entry is drawn) -->
        <div class="quiz-view" hidden>
          <div class="egg-quiz-card">
            <div class="quiz-icon" aria-hidden="true">🤔</div>
            <p class="quiz-question"></p>
          </div>
          <div class="quiz-answers" role="group" aria-label="Antwortmöglichkeiten"></div>
          <div class="quiz-result" hidden aria-live="polite"></div>
        </div>

        <button class="egg-btn continue-btn" type="button">Weiter</button>
      </div>

      <!-- ③ Lottery Phase -->
      <div class="modal-phase lottery-phase" hidden>
        <div class="egg-lottery-card">
          <div class="lottery-icon" aria-hidden="true">🏆</div>
          <h3 class="lottery-title">Herzlichen Glückwunsch!</h3>
          <p class="lottery-text">
            Du nimmst jetzt automatisch an unserem großen Gewinnspiel teil!
            Unter allen Teilnehmern verlosen wir einen tollen Hauptpreis.
          </p>
          <p class="lottery-sub">Der Gewinner wird in Kürze bekannt gegeben.</p>
        </div>
        <button class="egg-btn egg-close-btn" type="button">Schließen</button>
      </div>

    </div>
  `;
}


// ── Phase transition helper ────────────────────────────

function switchPhase(fromEl, toEl) {
  fromEl.classList.add('phase-exit');
  setTimeout(() => {
    fromEl.hidden = true;
    fromEl.classList.remove('phase-exit');
    toEl.hidden = false;
  }, 290);
}


// ── Open modal ─────────────────────────────────────────

function openEggModal(eggEl, eggId) {
  const imgSrc = eggEl.src;
  const fact   = LOOT_POOL[Math.floor(Math.random() * LOOT_POOL.length)];

  // Build overlay + modal
  const overlay = document.createElement('div');
  overlay.className = 'egg-modal-overlay';
  overlay.innerHTML = buildModal(imgSrc);
  document.body.appendChild(overlay);
  document.body.classList.add('modal-open');

  // Trigger entrance animations (needs a reflow tick)
  requestAnimationFrame(() => {
    overlay.classList.add('active');
    overlay.querySelector('.egg-modal').classList.add('active');
  });

  // Cache DOM refs
  const crackPhase   = overlay.querySelector('.crack-phase');
  const factPhase    = overlay.querySelector('.fact-phase');
  const lotteryPhase = overlay.querySelector('.lottery-phase');
  const container    = overlay.querySelector('.egg-crack-container');
  const svgEl        = overlay.querySelector('.egg-cracks-svg');
  const pips         = overlay.querySelectorAll('.pip');

  let clicks   = 0;
  let breaking = false;

  // ── Crack interaction ──────────────────────────────
  function handleCrack() {
    if (breaking) return;

    clicks++;

    // Light up the next pip
    if (pips[clicks - 1]) pips[clicks - 1].classList.add('active');

    // Restart shake animation
    container.classList.remove('shake');
    void container.offsetWidth; // force reflow
    container.classList.add('shake');

    // Draw crack lines for this stage
    renderCracks(svgEl, clicks - 1);

    if (clicks >= 3) {
      breaking = true;
      container.removeEventListener('click',   handleCrack);
      container.removeEventListener('keydown', handleKeydown);

      // Small delay before breaking so the last crack is visible
      setTimeout(() => {
        container.classList.add('breaking');

        // After the halves have flown apart, reveal fact or quiz
        setTimeout(() => {
          switchPhase(crackPhase, factPhase);
          if (fact.type === 'quiz') {
            showQuiz(factPhase, fact);
          } else {
            showFactContent(factPhase, fact);
          }
        }, 900);
      }, 180);
    }
  }

  function handleKeydown(e) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleCrack();
    }
  }

  container.addEventListener('click',   handleCrack);
  container.addEventListener('keydown', handleKeydown);

  // ── Fact helpers ───────────────────────────────────
  function showFactContent(phase, entry) {
    phase.querySelector('.quiz-view').hidden  = true;
    phase.querySelector('.fact-view').hidden  = false;
    phase.querySelector('.fact-title').textContent = entry.title;
    phase.querySelector('.fact-text').textContent  = entry.fact;
    phase.querySelector('.continue-btn').hidden    = false;
  }

  function showQuiz(phase, entry) {
    phase.querySelector('.fact-view').hidden  = true;
    const quizView = phase.querySelector('.quiz-view');
    quizView.hidden = false;
    quizView.querySelector('.quiz-question').textContent = entry.question;

    const answersEl  = quizView.querySelector('.quiz-answers');
    const resultEl   = quizView.querySelector('.quiz-result');
    const continueBtn = phase.querySelector('.continue-btn');
    continueBtn.hidden = true; // revealed only after answering

    entry.answers.forEach((text, i) => {
      const btn = document.createElement('button');
      btn.type      = 'button';
      btn.className = 'quiz-answer-btn';
      btn.textContent = text;
      btn.addEventListener('click', () => {
        // Lock all buttons
        answersEl.querySelectorAll('.quiz-answer-btn').forEach((b, j) => {
          b.disabled = true;
          if (j === entry.correctIndex) b.classList.add('answer-correct');
          else if (j === i)             b.classList.add('answer-wrong');
        });

        // Show result message
        resultEl.hidden = false;
        if (i === entry.correctIndex) {
          resultEl.className   = 'quiz-result result-correct';
          resultEl.textContent = 'Richtig! 🎉';
        } else {
          resultEl.className   = 'quiz-result result-wrong';
          resultEl.innerHTML   =
            `Leider falsch! Die richtige Antwort war: <strong>${entry.answers[entry.correctIndex]}</strong>`;
        }

        continueBtn.hidden = false;
      });
      answersEl.appendChild(btn);
    });
  }

  // ── Continue → Lottery ────────────────────────────
  overlay.querySelector('.continue-btn').addEventListener('click', () => {
    switchPhase(factPhase, lotteryPhase);
  });

  // ── Close modal ───────────────────────────────────
  overlay.querySelector('.egg-close-btn').addEventListener('click', () => {
    closeModal(overlay, eggEl, eggId);
  });
}


// ── Close & persist ────────────────────────────────────

function closeModal(overlay, eggEl, eggId) {
  overlay.classList.remove('active');
  overlay.classList.add('fade-out');
  document.body.classList.remove('modal-open');

  markEggCracked(eggId);
  eggEl.remove();

  setTimeout(() => overlay.remove(), 320);
}


// ── Init on page load ──────────────────────────────────

const EGG_IMAGES = [
  'assets/images/easteregg.png',
  'assets/images/easteregg2.png',
  'assets/images/easteregg3.png',
  'assets/images/easteregg4.png',
  'assets/images/easteregg5.png',
  'assets/images/easteregg6.png',
];

function randomEggImage() {
  return EGG_IMAGES[Math.floor(Math.random() * EGG_IMAGES.length)];
}

function initEasterEggs() {
  const cracked = getCrackedEggs();

  document.querySelectorAll('.easter-egg[data-egg-id]').forEach(egg => {
    const id = egg.dataset.eggId;

    // Already cracked — remove silently
    if (cracked.includes(id)) {
      egg.remove();
      return;
    }

    egg.src = randomEggImage();
    egg.style.width = (50 + Math.floor(Math.random() * 71)) + 'px'; // 50–120 px

    egg.addEventListener('click', () => openEggModal(egg, id));
  });
}

document.addEventListener('DOMContentLoaded', initEasterEggs);
