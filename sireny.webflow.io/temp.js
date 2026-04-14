lucide.createIcons();

/* ─────────── */
const QUESTION_BANK = [
  {
    id: 1, diff: 'easy', course: 'Internal Medicine', subject: 'Cardiology', format: 'Multiple Choice',
    stem: "A 60-year-old man presents with typical angina pectoris. Which of the following is the most appropriate initial medication to relieve his acute symptoms?",
    stem2: "Select the most appropriate initial medication:",
    options: ["Aspirin", "Sublingual Nitroglycerin", "Metoprolol", "Clopidogrel", "Atorvastatin"],
    correct: 1,
    hint: "Think about rapid vasodilation to reduce myocardial oxygen demand."
  },
  {
    id: 2, diff: 'medium', course: 'Internal Medicine', subject: 'Cardiology', format: 'Multiple Choice',
    stem: "A 45-year-old woman with a history of rheumatic fever presents with worsening exertional dyspnea and an opening snap followed by a late diastolic rumble at the apex.",
    stem2: "Which valvular abnormality is most likely present?",
    options: ["Mitral Regurgitation", "Aortic Stenosis", "Mitral Stenosis", "Tricuspid Regurgitation", "Aortic Regurgitation"],
    correct: 2,
    hint: "An 'opening snap' followed by a diastolic rumble is the classic auscultatory finding for this condition."
  },
  {
    id: 3, diff: 'hard', course: 'Internal Medicine', subject: 'Cardiology', format: 'Multiple Choice',
    stem: "A 75-year-old man is diagnosed with HFpEF (Heart Failure with preserved Ejection Fraction). His EF is 60%, and he has systemic hypertension and left ventricular hypertrophy.",
    stem2: "Which medication class has been most recently shown to reduce hospitalizations in this specific patient population according to recent guidelines?",
    options: ["Loop Diuretics", "SGLT2 Inhibitors", "Digoxin", "Calcium Channel Blockers", "Nitrates"],
    correct: 1,
    hint: "These drugs, originally developed for diabetes (ending in -gliflozin), have shown significant benefits in HFpEF."
  },
  {
    id: 4, diff: 'easy', course: 'Internal Medicine', subject: 'Cardiology', format: 'Multiple Choice',
    stem: "A 30-year-old tall, thin man with extremely long fingers (arachnodactyly) and a pectus excavatum experiences sudden tearing chest pain radiating to his back.",
    stem2: "What is the most likely diagnosis?",
    options: ["Pulmonary Embolism", "Acute Myocardial Infarction", "Aortic Dissection", "Pericarditis", "Pneumothorax"],
    correct: 2,
    hint: "Consider the patient's Marfanoid habitus and the classic 'tearing' pain radiating to the back."
  },
  {
    id: 5, diff: 'medium', course: 'Internal Medicine', subject: 'Cardiology', format: 'Multiple Choice',
    stem: "A patient presents with sharp, pleuritic chest pain that improves upon leaning forward. ECG reveals widespread ST elevation and PR depression.",
    stem2: "What is the first-line pharmacologic treatment for this condition?",
    options: ["Amiodarone", "Ibuprofen and Colchicine", "Nitroglycerin", "Epinephrine", "Aspirin 81mg"],
    correct: 1,
    hint: "The clinical presentation is classic for acute pericarditis. Anti-inflammatory drugs are the mainstay of therapy."
  },
  {
    id: 6, diff: 'hard', course: 'Internal Medicine', subject: 'Cardiology', format: 'Multiple Choice',
    stem: "A 55-year-old male with a history of COPD and long-standing untreated hypertension presents with signs of isolated right-sided heart failure (JVD, hepatomegaly, pedal edema).",
    stem2: "What is the most likely underlying pathophysiological mechanism for his condition (Cor Pulmonale)?",
    options: ["Left ventricular hypertrophy", "Pulmonary arterial hypertension due to hypoxic vasoconstriction", "Primary tricuspid valve disease", "Pericardial constriction", "Myocardial amyloid deposition"],
    correct: 1,
    hint: "Chronic hypoxia leads to pulmonary vessel constriction, increasing afterload on the right ventricle."
  },
  {
    id: 7, diff: 'easy', course: 'Internal Medicine', subject: 'Cardiology', format: 'Multiple Choice',
    stem: "On a standard 12-lead ECG, which leads are considered the 'inferior leads', typically looking at the inferior wall of the left ventricle?",
    stem2: "Select the correct combination:",
    options: ["V1, V2, V3, V4", "I, aVL, V5, V6", "II, III, aVF", "V1, aVR", "I, II, III"],
    correct: 2,
    hint: "These leads sit 'below' the heart anatomically and their ST elevations indicate an inferior MI (often right coronary artery)."
  },
  {
    id: 8, diff: 'medium', course: 'Internal Medicine', subject: 'Cardiology', format: 'Multiple Choice',
    stem: "A 65-year-old patient presents with syncope and an ECG demonstrating complete dissociation between P waves and QRS complexes. The ventricular rate is roughly 40 bpm.",
    stem2: "What is the definitive management for this rhythm?",
    options: ["IV Atropine", "Permanent Pacemaker Implantation", "Synchronized Cardioversion", "Beta-blocker therapy", "Observation"],
    correct: 1,
    hint: "Third-degree (complete) heart block often produces severe bradycardia that requires mechanical electrical pacing for definitive treatment."
  },
  {
    id: 9, diff: 'hard', course: 'Internal Medicine', subject: 'Cardiology', format: 'Multiple Choice',
    stem: "A 28-year-old competitive athlete collapses on the field. He has a family history of sudden cardiac death. Echocardiography reveals asymmetric septal hypertrophy.",
    stem2: "Which murmur description is most characteristic of his underlying disorder?",
    options: ["Diastolic decrescendo murmur best heard at the left sternal border", "Harsh systolic crescendo-decrescendo murmur that INCREASES with Valsalva maneuver", "Holosystolic murmur at the apex radiating to the axilla", "Late systolic murmur preceded by a mid-systolic click", "Continuous machine-like murmur at the upper left sternal border"],
    correct: 1,
    hint: "In Hypertrophic Cardiomyopathy (HCM), maneuvers that DECREASE preload (like Valsalva) INCREASE the outflow obstruction, thus making the murmur louder."
  },
  {
    id: 10, diff: 'medium', course: 'Internal Medicine', subject: 'Cardiology', format: 'Multiple Choice',
    stem: "A 50-year-old patient is started on an ACE inhibitor for hypertension. Two weeks later, routine lab work shows a significant increase in serum potassium and a moderate rise in serum creatinine.",
    stem2: "What is the physiological mechanism responsible for these laboratory changes?",
    options: ["Increased aldosterone secretion", "Efferent arteriole vasodilation reducing intraglomerular pressure", "Afferent arteriole vasoconstriction", "Direct nephrotoxic effect on proximal tubules", "Inhibition of ADH release"],
    correct: 1,
    hint: "ACE inhibitors block angiotensin II, an efferent arteriole vasoconstrictor. Losing this tone reduces GFR (increasing Cr) and reduces aldosterone (increasing K)."
  }
];

const urlparams = new URLSearchParams(window.location.search);
const SESSION_KEY = 'medifli_exam_state';

// Load or init state
let state = (() => {
    const saved = localStorage.getItem(SESSION_KEY);
    const course = urlparams.get('course') || 'Internal Medicine';
    const mode   = urlparams.get('mode')   || 'Smart Adaptive';
    const subject = urlparams.get('subject') || 'All Subjects';
    const diff    = urlparams.get('diff')    || 'Mixed';
    const qCount  = urlparams.get('q') === 'Endless' ? 40 : parseInt(urlparams.get('q')||'20', 10);

    if (saved) {
        const s = JSON.parse(saved);
        if (s.course === course && s.mode === mode && !s.finished) return s;
    }

    // FILTER THE STATIC BANK
    let pool = QUESTION_BANK.filter(q => q.course === course);
    if (subject !== 'All Subjects') {
        pool = pool.filter(q => q.subject === subject);
    }
    if (diff !== 'Mixed') {
        pool = pool.filter(q => q.diff === diff.toLowerCase());
    }

    // Dynamic generation function for convincing mock medical questions
    const dynamicGen = (idx) => {
        const dDiff = diff === 'Mixed' ? ['easy','medium','hard'][idx % 3] : diff.toLowerCase();
        const dSub = subject === 'All Subjects' ? ['Cardiology', 'Neurology', 'Pharmacology', 'Pathology', 'Anatomy', 'Biochem'][idx % 6] : subject;
        
        const scenarios = {
            'Cardiology': ['presents with acute substernal chest pain', 'exhibits severe exertional dyspnea', 'shows a wide-complex tachycardia on ECG', 'has a new mid-systolic click and late murmur'],
            'Neurology': ['presents with sudden onset right-sided weakness', 'complains of a classic resting tremor and bradykinesia', 'has ascending flaccid paralysis', 'presents with a thunderclap headache'],
            'Pharmacology': ['was recently started on a new anti-hypertensive', 'has an accidental overdose of acetaminophen', 'requires antibiotic escalation for MRSA', 'is experiencing statin-induced myopathy'],
            'Pathology': ['shows widespread granulomatous inflammation on biopsy', 'has a positive Philadelphia chromosome', 'demonstrates acute tubular necrosis', 'reveals coagulative necrosis in the myocardium'],
            'Anatomy': ['suffered a severe knee injury with excessive anterior translation of the tibia', 'has a lesion of the recurrent laryngeal nerve', 'presents with acute appendicitis', 'has severe ureteral colic'],
            'Biochem': ['has a severe deficiency of hexosaminidase A', 'presents with a distinct mousy odor (PKU)', 'shows toxic accumulation of very long chain fatty acids', 'is unable to convert pyruvate to acetyl-CoA'],
            'Internal Medicine': ['presents with unremitting fever and weight loss', 'has acute kidney injury superimposed on CKD', 'is diagnosed with severe asthma exacerbation', 'shows signs of septic shock'],
            'Pediatrics Basics': ['is a 4-month-old failing to thrive', 'presents with a barky cough and stridor', 'has a characteristic "slapped cheek" rash', 'is diagnosed with Kawasaki disease'],
            'Advanced Surgery': ['presents with acute abdomen', 'has a large incarcerated hernia', 'suffered a severe burn injury', 'requires emergent exploratory laparotomy'],
            'OBGYN Series': ['is a 28-week pregnant woman with severe pre-eclampsia', 'presents with ectopic pregnancy', 'has severe postpartum hemorrhage', 'is diagnosed with PCOS'],
            'Emergency Focus': ['is unresponsive after a motor vehicle accident', 'presents with a massive pulmonary embolism', 'has severe tension pneumothorax', 'is brought in for opioid overdose']
        };

        const symptomPool = scenarios[dSub] || scenarios[course] || ['presents with nonspecific symptoms', 'requires immediate medical attention', 'has abnormal laboratory findings', 'is unresponsive to initial therapy'];
        const symptom = symptomPool[idx % symptomPool.length];
        
        let diffText = "";
        if(dDiff === 'easy') diffText = "The diagnosis is clinically straightforward. ";
        else if(dDiff === 'hard') diffText = "Multiple confounding chronic conditions are present. Lab results are equivocal. ";
        else diffText = "The presentation requires careful differentiation from similar pathologies. ";

        return {
            id: 2000 + idx + Date.now(),
            diff: dDiff,
            course: course,
            subject: dSub,
            format: 'Multiple Choice',
            stem: `A ${30 + (idx * 7) % 50}-year-old patient ${symptom}. ${diffText}`,
            stem2: `Which of the following is the most appropriate next step in management or most likely diagnosis?`,
            options: [
                `Option A (Definitive intervention for ${dSub})`,
                `Option B (Conservative management strategy)`,
                `Option C (Specific diagnostic imaging or lab test)`,
                `Option D (Immediate specialist consultation)`,
                `Option E (Wait and observe)`
            ],
            correct: (idx % 5),
            hint: `In ${course} covering ${dSub}, consider the standard of care guidelines for this exact presentation.`
        };
    };

    // If pool is shorter than qCount, backfill with dynamically generated perfect mocks
    let finalQuestions = shuffleArray([...pool]);
    let reqCount = qCount;
    if (qCount === 40) reqCount = 40; // Endless handles 40 right now
    
    let genIndex = 0;
    while (finalQuestions.length < reqCount) {
        finalQuestions.push(dynamicGen(genIndex));
        genIndex++;
    }

    const actualCount = finalQuestions.length;
    const selectedQuestions = finalQuestions.slice(0, actualCount);

    // Add generated questions dynamically to the global bank so they can be reviewed later without breaking reference
    selectedQuestions.forEach(sq => {
        if (!QUESTION_BANK.find(qb => qb.id === sq.id)) {
            QUESTION_BANK.push(sq);
        }
    });

    const qIndices = selectedQuestions.map(q => QUESTION_BANK.indexOf(q));

    return {
        course, mode, subject, diff,
        qIndices,
        total:  actualCount,
        current: 0,
        answers: {},
        flags:   {},
        strikes: {},
        timeLeft: 60 * actualCount,
        paused: false,
        finished: false
    };
})();

saveState();

function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}
function saveState() { localStorage.setItem(SESSION_KEY, JSON.stringify(state)); }

/* ─────────────────────────────────────────
   TIMER ENGINE
────────────────────────────────────────── */
let timerInterval = null;
function formatTime(secs) {
    const h = Math.floor(secs / 3600).toString().padStart(2,'0');
    const m = Math.floor((secs % 3600)/60).toString().padStart(2,'0');
    const s = (secs % 60).toString().padStart(2,'0');
    return `${h}:${m}:${s}`;
}
function updateTimerDisplay() {
    const t = state.timeLeft;
    const el = document.getElementById('timerText');
    const dot = document.getElementById('timerDot');
    const wrap = document.getElementById('timerWrap');
    el.textContent = formatTime(t);
    document.getElementById('pauseTimerDisplay').textContent = formatTime(t);

    wrap.classList.remove('warning','danger');
    dot.classList.remove('warning','danger','paused');

    if (state.paused) { dot.classList.add('paused'); return; }
    const total = 60 * state.total;
    const pct = t / total;
    if (pct <= 0.10) { wrap.classList.add('danger'); dot.classList.add('danger'); }
    else if (pct <= 0.25) { wrap.classList.add('warning'); dot.classList.add('warning'); }
}
function startTimer() {
    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        if (state.paused || state.finished) return;
        state.timeLeft = Math.max(0, state.timeLeft - 1);
        updateTimerDisplay();
        saveState();
        if (state.timeLeft === 0) { clearInterval(timerInterval); finishExam(); }
    }, 1000);
}
startTimer();
updateTimerDisplay();

/* ─────────────────────────────────────────
   BUILD UI
────────────────────────────────────────── */
document.getElementById('exam-title').textContent = `${state.course}: ${state.mode}`;

function buildDock() {
    // 1. Update Progress Bar
    const pct = Math.round(((state.current + 1) / state.total) * 100);
    const progressFill = document.getElementById('progressFill');
    const progressPct = document.getElementById('progressPct');
    if(progressFill) progressFill.style.width = pct + '%';
    if(progressPct) progressPct.textContent = pct + '%';

    // 2. Populate Dropdown Grid
    const dock = document.getElementById('navGrid');
    if(dock) {
        dock.innerHTML = '';
        state.qIndices.forEach((qi, i) => {
            const div = document.createElement('div');
            let cls = 'dock-item ';
            if (i === state.current) cls += 'current';
            else if (state.flags[i]) cls += 'flagged';
            else if (state.answers[i] !== undefined) cls += 'answered';
            div.className = cls;
            div.textContent = i + 1;
            div.addEventListener('click', () => {
                goTo(i);
                closeDrawer();
            });
            dock.appendChild(div);
        });
    }
}

function renderQuestion() {
    const qi = state.qIndices[state.current];
    const q = QUESTION_BANK[qi];
    const total = state.total;

    // Header styled cleanly
    document.getElementById('qNumber').innerHTML = `Question ${state.current + 1} <span style="font-weight:500; font-size:13px; margin-left:6px; opacity:0.8; color:#94a3b8;">of ${total}</span>`;
    const badge = document.getElementById('qDiff');
    badge.className = 'q-badge';
    badge.textContent = 'MCQ';
    badge.style.background = 'rgba(255,255,255,0.05)';
    badge.style.border = '1px solid rgba(255,255,255,0.1)';
    badge.style.color = '#cbd5e1';

    // Flag button
    const flagBtn = document.getElementById('flagBtn');
    if(state.flags[state.current]) {
        flagBtn.style.color = '#fbbf24';
        flagBtn.innerHTML = `<i data-lucide="flag" style="width:16px;height:16px;"></i> Flagged`;
    } else {
        flagBtn.style.color = '#94a3b8';
        flagBtn.innerHTML = `<i data-lucide="flag" style="width:16px;height:16px;"></i> Flag for Review`;
    }

    // Next / Finish button
    const nextBtn = document.getElementById('nextBtn');
    if (state.current === state.total - 1) {
        nextBtn.className = 'btn-nav finish';
        nextBtn.innerHTML = 'Finish Exam <i data-lucide="check" style="width:15px;height:15px;"></i>';
    } else {
        nextBtn.className = 'btn-nav primary';
        nextBtn.innerHTML = 'Next <i data-lucide="arrow-right" style="width:15px;height:15px;"></i>';
    }

    // Vignette
    document.getElementById('vignetteBody').innerHTML =
        `<div class="vignette-question">${q.stem2}</div>
         <div class="vignette-stem">${q.stem}</div>`;

    // Hint
    document.getElementById('hintText').innerHTML = q.hint || 'Think carefully about the key clinical findings presented.';
    const hintBody = document.getElementById('hintBody');
    hintBody.classList.remove('open');
    document.getElementById('hintChevron').style.transform = '';

    // Options
    const pane = document.getElementById('mcqPane');
    pane.innerHTML = '<div class="mcq-prompt">Select the best answer:</div>';
    const letters = ['A','B','C','D','E'];
    q.options.forEach((opt, idx) => {
        const div = document.createElement('div');
        div.className = 'mcq-option';
        if ((state.strikes[state.current] || []).includes(idx)) div.classList.add('struck');
        if (state.answers[state.current] === idx) div.classList.add('selected');
        div.innerHTML = `
            <div class="key-bind">${letters[idx]}</div>
            <div class="mcq-text">${opt}</div>
            <button class="strike-toggle" title="Strike out"><i data-lucide="eye-off" style="width:15px;height:15px;"></i></button>`;
        div.addEventListener('click', () => selectOption(state.current, idx, div));
        div.querySelector('.strike-toggle').addEventListener('click', (e) => {
            e.stopPropagation();
            toggleStrike(state.current, idx, div);
        });
        pane.appendChild(div);
    });

    buildDock();
    lucide.createIcons();

    // Trigger Slide-In
    const main = document.querySelector('.exam-workspace');
    main.classList.remove('slide-in');
    void main.offsetWidth; // trigger reflow
    main.classList.add('slide-in');
}

/* ─────────────────────────────────────────
   NEURAL TYPING ENGINE
────────────────────────────────────────── */
let typingTimer = null;
function typeHint(text) {
    const el = document.getElementById('hintText');
    el.textContent = '';
    let i = 0;
    clearInterval(typingTimer);
    typingTimer = setInterval(() => {
        if (i < text.length) {
            el.textContent += text.charAt(i);
            i++;
        } else {
            clearInterval(typingTimer);
        }
    }, 15);
}

/* ─────────────────────────────────────────
   CONFETTI CANNON
────────────────────────────────────────── */
function launchConfetti() {
    const duration = 3 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 1000 };

    function randomInRange(min, max) {
        return Math.random() * (max - min) + min;
    }

    const interval = setInterval(function() {
        const timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
            return clearInterval(interval);
        }

        const particleCount = 50 * (timeLeft / duration);
        // since particles fall down, start a bit higher than random
        confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } }));
        confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } }));
    }, 250);
}

/* ─────────────────────────────────────────
   INTERACTIONS
────────────────────────────────────────── */
function selectOption(qIdx, optIdx, el) {
    if (el.classList.contains('struck')) return;
    const siblings = document.querySelectorAll('.mcq-option');
    siblings.forEach(s => s.classList.remove('selected'));
    
    el.classList.add('selected');
    el.classList.add('choice-pop');
    setTimeout(() => el.classList.remove('choice-pop'), 300);

    state.answers[qIdx] = optIdx;
    saveState();
    buildDock();
}

function toggleStrike(qIdx, optIdx, el) {
    const opt = el.closest ? el : el;
    opt.classList.toggle('struck');
    opt.classList.remove('selected');

    if (!state.strikes[qIdx]) state.strikes[qIdx] = [];
    const strikes = state.strikes[qIdx];
    const idx = strikes.indexOf(optIdx);
    if (idx === -1) strikes.push(optIdx);
    else strikes.splice(idx, 1);

    // If struck option was selected, deselect
    if (state.answers[qIdx] === optIdx && opt.classList.contains('struck')) {
        delete state.answers[qIdx];
    }
    saveState();
    buildDock();
}

function goTo(i) {
    const main = document.querySelector('.exam-workspace');
    main.classList.add('slide-out');
    
    setTimeout(() => {
        
        state.current = i;
        saveState();
        renderQuestion();
        main.classList.remove('slide-out');
    }, 200);
}

document.getElementById('prevBtn').addEventListener('click', () => {
    if (state.current > 0) goTo(state.current - 1);
});

document.getElementById('nextBtn').addEventListener('click', () => {
    if (state.current < state.total - 1) {
        goTo(state.current + 1);
    } else {
        finishExam();
    }
});

// Keyboard A-E + Arrow keys
window.addEventListener('keydown', (e) => {
    if (state.paused || state.finished) return;
    const key = e.key.toUpperCase();
    const letters = ['A','B','C','D','E'];
    if (letters.includes(key)) {
        const idx = letters.indexOf(key);
        const opts = document.querySelectorAll('.mcq-option');
        if (opts[idx]) selectOption(state.current, idx, opts[idx]);
    }
    if (e.key === 'ArrowRight' && state.current < state.total - 1) goTo(state.current + 1);
    if (e.key === 'ArrowLeft' && state.current > 0) goTo(state.current - 1);
    if (e.key === ' ') { e.preventDefault(); togglePause(); }
});

// Flag
document.getElementById('flagBtn').addEventListener('click', () => {
    state.flags[state.current] = !state.flags[state.current];
    const flagBtn = document.getElementById('flagBtn');
    if(state.flags[state.current]) {
        flagBtn.style.color = '#fbbf24';
        flagBtn.innerHTML = `<i data-lucide="flag" style="width:16px;height:16px;"></i> Flagged`;
    } else {
        flagBtn.style.color = '#94a3b8';
        flagBtn.innerHTML = `<i data-lucide="flag" style="width:16px;height:16px;"></i> Flag for Review`;
    }
    lucide.createIcons();
    saveState();
    buildDock();
});

// Hint toggle
document.getElementById('hintToggle').addEventListener('click', () => {
    const body = document.getElementById('hintBody');
    const chevron = document.getElementById('hintChevron');
    const open = body.classList.toggle('open');
    chevron.style.transform = open ? 'rotate(180deg)' : '';
    
    if (open) {
        const qi = state.qIndices[state.current];
        const q = QUESTION_BANK[qi];
        typeHint(q.hint || "Think carefully about the key clinical findings presented.");
    }
});

/* ─────────────────────────────────────────
   PAUSE / RESUME
────────────────────────────────────────── */
function togglePause() {
    state.paused = !state.paused;
    saveState();
    const overlay = document.getElementById('pauseOverlay');
    const pauseBtn = document.getElementById('pauseBtn');
    if (state.paused) {
        overlay.classList.add('active');
        pauseBtn.innerHTML = '<i data-lucide="play" style="width:14px;height:14px;"></i> Resume';
        lucide.createIcons();
    } else {
        overlay.classList.remove('active');
        pauseBtn.innerHTML = '<i data-lucide="pause" style="width:14px;height:14px;"></i> Pause';
        lucide.createIcons();
    }
    updateTimerDisplay();
}

document.getElementById('pauseBtn').addEventListener('click', togglePause);
document.getElementById('resumeBtn').addEventListener('click', togglePause);
document.getElementById('endBtn').addEventListener('click', () => {
    document.getElementById('endConfirmOverlay').classList.add('active');
});

document.getElementById('cancelEndBtn').addEventListener('click', () => {
    document.getElementById('endConfirmOverlay').classList.remove('active');
});

document.getElementById('confirmEndBtn').addEventListener('click', () => {
    document.getElementById('endConfirmOverlay').classList.remove('active');
    finishExam();
});

/* ─────────────────────────────────────────
   FINISH & RESULTS
────────────────────────────────────────── */

// Side Drawer Logic
const togBtn = document.getElementById('toggleNavBtn');
const clBtn = document.getElementById('closeNavBtn');
const sd = document.getElementById('sideDrawer');
const overlay = document.getElementById('drawerOverlay');

function openDrawer() {
    if(sd && overlay) {
        sd.classList.add('open');
        overlay.classList.add('open');
    }
}
function closeDrawer() {
    if(sd && overlay) {
        sd.classList.remove('open');
        overlay.classList.remove('open');
    }
}

if(togBtn) togBtn.addEventListener('click', openDrawer);
if(clBtn) clBtn.addEventListener('click', closeDrawer);
if(overlay) overlay.addEventListener('click', closeDrawer);

function finishExam() {
    clearInterval(timerInterval);
    state.paused = false;
    state.finished = true;
    saveState();

    const totalQ = state.total;
    let correct = 0, wrong = 0, skipped = 0;
    const timeUsedSecs = (60 * totalQ) - state.timeLeft;

    const reviewItems = [];
    state.qIndices.forEach((qi, i) => {
        const q = QUESTION_BANK[qi];
        const answered = state.answers[i];
        let verdict;
        if (answered === undefined) { skipped++; verdict = 'skipped'; }
        else if (answered === q.correct) { correct++; verdict = 'correct'; }
        else { wrong++; verdict = 'wrong'; }
        reviewItems.push({ q, answered, verdict, num: i + 1 });
    });

    const pct = Math.round((correct / totalQ) * 100);

    // Score display
    const bigScore = document.getElementById('bigScore');
    bigScore.textContent = pct + '%';
    bigScore.className = 'big-score ' + (pct >= 75 ? 'great' : pct >= 50 ? 'good' : 'needs-work');

    document.getElementById('scoreLabel').textContent = `${correct} of ${totalQ} correct`;
    document.getElementById('statCorrect').textContent = correct;
    document.getElementById('statWrong').textContent = wrong;
    document.getElementById('statSkipped').textContent = skipped;

    const hh = Math.floor(timeUsedSecs/3600).toString().padStart(2,'0');
    const mm = Math.floor((timeUsedSecs%3600)/60).toString().padStart(2,'0');
    const ss = (timeUsedSecs%60).toString().padStart(2,'0');
    document.getElementById('statTime').textContent = `${mm}:${ss}`;

    // Emoji & title
    document.getElementById('resultsEmoji').textContent = pct >= 75 ? '🏆' : pct >= 50 ? '📚' : '💡';
    document.getElementById('resultsTitle').textContent = pct >= 75 ? 'Excellent Work!' : pct >= 50 ? 'Good Effort!' : 'Keep Practicing!';

    // Improvement suggestions (smart)
    const improvements = [];
    const hardWrong = reviewItems.filter(r => r.q.diff === 'hard' && r.verdict !== 'correct');
    const easyWrong = reviewItems.filter(r => r.q.diff === 'easy' && r.verdict !== 'correct');
    const skippedList = reviewItems.filter(r => r.verdict === 'skipped');

    if (easyWrong.length > 0) improvements.push({ icon:'alert-triangle', cls:'red', title:'Review Foundational Concepts', body:`You missed ${easyWrong.length} easy question(s). These cover core concepts that are frequently tested. Go back to first-principles review on these topics.` });
    if (hardWrong.length > 0) improvements.push({ icon:'brain', cls:'yellow', title:'Targeted High-Yield Drilling', body:`${hardWrong.length} hard question(s) were missed. Consider using the Topic Drill mode to focus exclusively on these advanced concepts before the next session.` });
    if (skippedList.length > 0) improvements.push({ icon:'clock', cls:'blue', title:'Improve Time Management', body:`${skippedList.length} question(s) were left unanswered. Practice pacing — aim for 1.5 minutes per question. If unsure, make a best guess and flag it for review.` });
    if (pct >= 85) improvements.push({ icon:'trending-up', cls:'blue', title:'Ready to Level Up!', body:`You scored ${pct}% — outstanding. Consider increasing difficulty to "Hard only" or moving to the Speed Sprint mode to stress-test your retention.` });
    if (improvements.length === 0) improvements.push({ icon:'rotate-ccw', cls:'blue', title:'Consistent Review Is Key', body:'Keep a steady daily practice schedule. Spaced repetition is one of the most powerful tools for long-term medical knowledge retention.' });

    const impList = document.getElementById('improvementsList');
    impList.innerHTML = '';
    improvements.forEach(imp => {
        impList.innerHTML += `
            <div class="improvement-card">
                <div class="imp-icon ${imp.cls}"><i data-lucide="${imp.icon}"></i></div>
                <div class="imp-text"><h4>${imp.title}</h4><p>${imp.body}</p></div>
            </div>`;
    });

    // Review list
    const revList = document.getElementById('reviewList');
    revList.innerHTML = '';
    const letters = ['A','B','C','D','E'];
    reviewItems.forEach(item => {
        const { q, answered, verdict, num } = item;
        const answeredText = answered !== undefined ? `${letters[answered]}. ${q.options[answered]}` : 'Not answered';
        const correctText = `${letters[q.correct]}. ${q.options[q.correct]}`;
        revList.innerHTML += `
            <div class="review-q">
                <div class="review-q-header">
                    <div class="review-q-num">Q${num}</div>
                    <div class="review-verdict ${verdict}">${verdict.charAt(0).toUpperCase()+verdict.slice(1)}</div>
                </div>
                <div class="review-q-stem">${q.stem.substring(0, 120)}…</div>
                ${verdict !== 'correct' ? `<div class="review-answer wrong">Your answer: ${answeredText}</div>` : ''}
                <div class="review-answer correct" style="margin-top:6px;">Correct: ${correctText}</div>
            </div>`;
    });

    // Show results
    document.getElementById('resultsOverlay').classList.add('active');
    lucide.createIcons();
    
    // Confetti WOAH factor for high scores
    if (pct >= 75) {
        setTimeout(launchConfetti, 500);
    }

    // Clear localStorage so restarting creates fresh session
    localStorage.removeItem(SESSION_KEY);
}

/* ─────────────────────────────────────────
   INITIAL RENDER
────────────────────────────────────────── */
renderQuestion();

/* ─────────────────────────────────────────
   PS5 CINEMATIC BACKGROUND
────────────────────────────────────────── */
const canvas = document.getElementById('bg-canvas');
const ctx = canvas.getContext('2d');
let width, height;
function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
    ctx.fillStyle = '#030408'; ctx.fillRect(0,0,width,height);
}
window.addEventListener('resize', resize); resize();
let mouseX=width/2, mouseY=height/2, targetX=width/2, targetY=height/2;
window.addEventListener('mousemove', e=>{ targetX=e.clientX; targetY=e.clientY; });
const particles = [];
for(let i=0;i<220;i++){
    const z=Math.random(); let size=0;
    if(z<.15) size=Math.random()*18+12;
    else if(z<.6) size=Math.random()*3.5+1;
    else size=Math.random()*1.2+.4;
    particles.push({x:Math.random()*width,y:Math.random()*height,z,size,vx:(Math.random()-.5)*.1,vy:(Math.random()*-.2)-.05,wS:Math.random()*.012+.004,wA:Math.random()*Math.PI*2,wD:Math.random()*.25+.08,alpha:Math.random()*.45+.1});
}
particles.sort((a,b)=>b.z-a.z);
function draw(){
    ctx.fillStyle='#030408'; ctx.fillRect(0,0,width,height);
    mouseX+=(targetX-mouseX)*.03; mouseY+=(targetY-mouseY)*.03;
    const px=mouseX-width/2, py=mouseY-height/2;
    ctx.globalCompositeOperation='screen';
    const rg=ctx.createLinearGradient(0,0,width*.8,height*.8);
    rg.addColorStop(0,'rgba(56,189,248,.07)'); rg.addColorStop(.3,'rgba(79,70,229,.04)'); rg.addColorStop(1,'rgba(3,4,8,0)');
    ctx.fillStyle=rg; ctx.fillRect(0,0,width,height);
    particles.forEach(p=>{
        p.wA+=p.wS; p.x+=p.vx+Math.sin(p.wA)*p.wD; p.y+=p.vy;
        if(p.x<-150) p.x=width+150; if(p.x>width+150) p.x=-150;
        if(p.y<-150) p.y=height+150; if(p.y>height+150) p.y=-150;
        const fx=p.x-px*(1-p.z)*.07, fy=p.y-py*(1-p.z)*.07;
        const g=ctx.createRadialGradient(fx,fy,0,fx,fy,p.size);
        if(p.z<.15){g.addColorStop(0,`rgba(165,180,252,${p.alpha*.2})`);g.addColorStop(.5,`rgba(165,180,252,${p.alpha*.07})`);g.addColorStop(1,'rgba(165,180,252,0)');}
        else if(p.z<.6){g.addColorStop(0,`rgba(255,255,255,${p.alpha})`);g.addColorStop(.2,`rgba(165,180,252,${p.alpha*.8})`);g.addColorStop(1,'rgba(129,140,248,0)');}
        else{g.addColorStop(0,`rgba(226,232,240,${p.alpha*.45})`);g.addColorStop(1,'rgba(226,232,240,0)');}
        ctx.fillStyle=g; ctx.beginPath(); ctx.arc(fx,fy,p.size,0,Math.PI*2); ctx.fill();
    });
    ctx.globalCompositeOperation='source-over';
    requestAnimationFrame(draw);
}
draw();
</script>
</body>
