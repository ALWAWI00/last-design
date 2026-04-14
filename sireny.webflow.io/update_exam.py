import re

with open('exam.html', 'r', encoding='utf-8') as f:
    text = f.read()

# 1. CSS Updates
css_old = r"""        .exam-workspace\{display:flex;height:calc\(100vh - 72px - 70px\);padding:24px 32px;gap:24px;position:relative;z-index:10;max-width:1440px;margin:0 auto;\}
        
        /\* Left: Vignette \*/
        .vignette-pane\{flex:6;background:rgba\(12,18,32,0\.75\);backdrop-filter:blur\(24px\);border:1px solid var\(--border\);border-radius:18px;display:flex;flex-direction:column;overflow:hidden;box-shadow:0 10px 40px rgba\(0,0,0,\.4\);transition:opacity \.3s;\}"""

css_new = """        .exam-workspace{display:flex;flex-direction:column;height:calc(100vh - 72px - 70px);padding:40px 24px;gap:32px;position:relative;z-index:10;max-width:960px;margin:0 auto;overflow-y:auto;scroll-behavior:smooth;}
        .exam-workspace::-webkit-scrollbar{width:0px;}
        
        /* Main Pane Container */
        .vignette-pane{background:rgba(12,18,32,0.85);backdrop-filter:blur(24px);border:1px solid var(--border);border-radius:24px;display:flex;flex-direction:column;overflow:hidden;box-shadow:0 12px 40px rgba(0,0,0,.5);transition:opacity .3s;width:100%;}"""

if re.search(css_old, text): text = re.sub(css_old, css_new, text)

css_mcq_old = r"""        /\* Right: MCQ \+ Hint \*/
        .right-col\{flex:4;display:flex;flex-direction:column;gap:24px;\}
        .mcq-pane\{background:rgba\(12,18,32,0\.75\);backdrop-filter:blur\(24px\);border:1px solid var\(--border\);border-radius:18px;padding:28px;display:flex;flex-direction:column;gap:12px;flex:1;overflow-y:auto;box-shadow:0 10px 40px rgba\(0,0,0,\.4\);\}
        .mcq-prompt\{font-size:15px;font-weight:700;color:#e2e8f0;margin-bottom:8px;\}
        .mcq-option\{
            display:flex;align-items:center;gap:14px;padding:14px 18px;
            background:rgba\(15,23,42,0\.6\);backdrop-filter:blur\(10px\);
            border:1\.5px solid rgba\(255,255,255,\.05\);border-radius:14px;
            cursor:pointer;transition:all \.22s cubic-bezier\(\.4,0,\.2,1\);position:relative;
        \}
        .mcq-option:hover\{background:rgba\(79,70,229,\.1\);border-color:rgba\(99,102,241,\.4\);transform:translateY\(-2px\);box-shadow:0 8px 20px rgba\(79,70,229,\.15\);\}
        .mcq-option.selected\{background:rgba\(99,102,241,\.18\);border-color:var\(--indigo\);box-shadow:0 6px 24px rgba\(99,102,241,\.25\);\}
        .mcq-option.selected \.key-bind\{background:var\(--indigo\);color:#fff;border-color:var\(--indigo-light\);\}
        .mcq-option.correct\{background:rgba\(16,185,129,\.15\);border-color:var\(--green\);pointer-events:none;\}
        .mcq-option.correct \.key-bind\{background:var\(--green\);color:#fff;border-color:#34d399;\}
        .mcq-option.wrong\{background:rgba\(239,68,68,\.12\);border-color:var\(--red\);pointer-events:none;\}
        .mcq-option.wrong \.key-bind\{background:var\(--red\);color:#fff;border-color:#f87171;\}
        .mcq-option.struck\{opacity:\.35;\}
        .mcq-option.struck \.mcq-text\{text-decoration:line-through;color:#64748b;\}
        .mcq-option.disabled\{pointer-events:none;\}

        .key-bind\{display:flex;align-items:center;justify-content:center;width:30px;height:30px;background:rgba\(255,255,255,\.05\);border:1px solid rgba\(255,255,255,\.1\);border-radius:7px;font-family:'Outfit',sans-serif;font-weight:700;font-size:13px;color:#94a3b8;transition:all \.2s;flex-shrink:0;\}"""

css_mcq_new = """        /* Unified Details: MCQ + Hint */
        .right-col{display:contents;} /* Let it merge without breaking */
        .mcq-pane{padding:0 36px 36px;display:flex;flex-direction:column;gap:14px;}
        .mcq-prompt{display:none;} /* Hidden for minimalist layout */
        .mcq-option{
            display:flex;align-items:center;gap:18px;padding:16px 22px;
            background:rgba(255,255,255,0.02);
            border:1.5px solid rgba(255,255,255,.05);border-radius:20px;
            cursor:pointer;transition:all .22s cubic-bezier(.4,0,.2,1);position:relative;
        }
        .mcq-option:hover{background:rgba(255,255,255,0.06);border-color:rgba(255,255,255,0.2);transform:translateY(-1px);}
        .mcq-option.selected{background:rgba(99,102,241,.12);border-color:var(--indigo-light);box-shadow:0 4px 20px rgba(99,102,241,.15);}
        .mcq-option.selected .key-bind{background:var(--indigo);color:#fff;border-color:var(--indigo-light);}
        .mcq-option.correct{background:rgba(16,185,129,.1);border-color:var(--green);pointer-events:none;}
        .mcq-option.correct .key-bind{background:var(--green);color:#fff;border-color:#34d399;}
        .mcq-option.wrong{background:rgba(239,68,68,.08);border-color:var(--red);pointer-events:none;}
        .mcq-option.wrong .key-bind{background:var(--red);color:#fff;border-color:#f87171;}
        .mcq-option.struck{opacity:.35;}
        .mcq-option.struck .mcq-text{text-decoration:line-through;color:#64748b;}
        .mcq-option.disabled{pointer-events:none;}

        .key-bind{display:flex;align-items:center;justify-content:center;width:34px;height:34px;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.12);border-radius:50%;font-family:'Outfit',sans-serif;font-weight:800;font-size:14px;color:#cbd5e1;transition:all .2s;flex-shrink:0;}"""

if re.search(css_mcq_old, text): text = re.sub(css_mcq_old, css_mcq_new, text)

# Progress Bar CSS
css_footer_old = r"""        /\* ── FOOTER ── \*/
        .exam-footer\{padding:13px 24px;background:rgba\(10,16,28,0\.7\);backdrop-filter:blur\(20px\);border-top:1px solid var\(--border\);display:flex;justify-content:space-between;align-items:center;z-index:10;flex-shrink:0;\}
        .nav-dock\{display:flex;gap:6px;overflow-x:auto;padding-bottom:2px;flex:1;margin-right:24px;\}
        .nav-dock::\-webkit-scrollbar\{height:3px;\}
        .nav-dock::\-webkit-scrollbar-thumb\{background:rgba\(255,255,255,\.08\);border-radius:10px;\}
        .dock-item\{width:30px;height:30px;border-radius:7px;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:700;cursor:pointer;transition:all \.2s;flex-shrink:0;border:1\.5px solid transparent;\}
        .dock-item.unanswered\{background:rgba\(255,255,255,\.04\);color:#64748b;\}
        .dock-item.unanswered:hover\{background:rgba\(255,255,255,\.09\);color:#e2e8f0;\}
        .dock-item.answered\{background:rgba\(99,102,241,\.18\);color:var\(--indigo-light\);border-color:rgba\(99,102,241,\.3\);\}
        .dock-item.flagged\{background:rgba\(251,191,36,\.1\);color:var\(--yellow\);border-color:rgba\(251,191,36,\.3\);\}
        .dock-item.current\{border-color:#fff;color:#fff;box-shadow:0 0 10px rgba\(255,255,255,\.2\);transform:scale\(1\.12\);\}

        .dock-controls\{display:flex;gap:10px;flex-shrink:0;}"""

css_footer_new = """        /* ── FOOTER ── */
        .exam-footer{padding:16px 40px;background:rgba(10,16,28,0.7);backdrop-filter:blur(20px);border-top:1px solid var(--border);display:flex;justify-content:space-between;align-items:center;z-index:10;flex-shrink:0;}
        .progress-wrap{display:flex;align-items:center;gap:16px;flex:1;max-width:400px;margin:0 auto;}
        .progress-track{height:6px;background:rgba(255,255,255,0.06);border-radius:10px;flex:1;overflow:hidden;}
        .progress-fill{height:100%;background:linear-gradient(90deg, #6366f1, #818cf8);border-radius:10px;width:0%;transition:width .4s cubic-bezier(.4,0,.2,1);}
        .progress-pct{font-size:12px;font-weight:800;color:#94a3b8;width:35px;}

        .dock-controls{display:flex;gap:10px;}
        .nav-left, .nav-right{display:flex;flex:1;}
        .nav-right{justify-content:flex-end;}"""
if re.search(css_footer_old, text): text = re.sub(css_footer_old, css_footer_new, text)

# 2. HTML Updates
html_main_old = r"""<!-- ── EXAM WORKSPACE ── -->
<main class="exam-workspace">

    <!-- Clinical Vignette -->
    <section class="vignette-pane">
        <div class="vignette-header">
            <div class="q-meta">
                <div class="q-number" id="qNumber">Question 1 of 20</div>
                <div class="q-badge medium" id="qDiff">Medium</div>
            </div>
            <div class="q-actions">
                <button class="btn btn-outline" id="calcBtn" style="font-size:11px;padding:5px 10px;"><i data-lucide="calculator" style="width:13px;height:13px;"></i> Calc</button>
                <button class="icon-btn" id="flagBtn" title="Flag this question"><i data-lucide="flag" style="width:16px;height:16px;"></i></button>
            </div>
        </div>
        <div class="vignette-body" id="vignetteBody">
            <!-- Filled dynamically by JS -->
        </div>
    </section>

    <!-- MCQ \+ Hint -->
    <section class="right-col">
        <div class="mcq-pane" id="mcqPane">
            <div class="mcq-prompt">Select the best answer:</div>
            <!-- options injected by JS -->
        </div>

        <!-- Hint Drawer -->
        <div class="hint-drawer" id="hintDrawer">
            <div class="hint-toggle" id="hintToggle">
                <div class="hint-toggle-left"><i data-lucide="lightbulb" style="width:15px;height:15px;"></i> Need a hint\?</div>
                <i data-lucide="chevron-down" class="hint-chevron" id="hintChevron"></i>
            </div>
            <div class="hint-body" id="hintBody">
                <p id="hintText">Loading hint…</p>
            </div>
        </div>
    </section>

</main>

<!-- ── FOOTER DOCK ── -->
<footer class="exam-footer">
    <div class="nav-dock" id="navDock"></div>
    <div class="dock-controls">
        <button class="btn-nav secondary" id="prevBtn"><i data-lucide="arrow-left" style="width:15px;height:15px;"></i> Previous</button>
        <button class="btn-nav primary" id="nextBtn">Next <i data-lucide="arrow-right" style="width:15px;height:15px;"></i></button>
    </div>
</footer>"""

html_main_new = """<!-- ── EXAM WORKSPACE ── -->
<main class="exam-workspace">
    <!-- Single Consolidated Vignette Pane -->
    <section class="vignette-pane">
        <div class="vignette-header" style="border-bottom: none; padding-bottom: 0;">
            <div class="q-meta">
                <div class="q-number" id="qNumber">Question 1 <span style="font-weight:500; font-size:13px; margin-left:4px; opacity:0.8; color:#94a3b8;">of 20</span></div>
                <div class="q-badge medium" id="qDiff">MCQ</div>
            </div>
            <div class="q-actions" style="display:flex; align-items:center; gap:10px;">
                <button class="btn" id="flagBtn" style="background:transparent; border:none; color:#94a3b8; font-size:14px; font-weight:600; display:flex; align-items:center; gap:6px; cursor:pointer;"><i data-lucide="flag" style="width:16px;height:16px;"></i> Flag for Review</button>
            </div>
        </div>
        
        <div class="vignette-body" id="vignetteBody">
            <!-- Filled dynamically by JS -->
        </div>

        <!-- MCQ + Hint merged into vignette flow -->
        <div class="mcq-pane" id="mcqPane">
            <!-- options injected by JS -->
        </div>

        <div style="padding: 0 36px 36px;">
            <div class="hint-drawer" id="hintDrawer">
                <div class="hint-toggle" id="hintToggle">
                    <div class="hint-toggle-left"><i data-lucide="lightbulb" style="width:15px;height:15px;"></i> Need a hint?</div>
                    <i data-lucide="chevron-down" class="hint-chevron" id="hintChevron"></i>
                </div>
                <div class="hint-body" id="hintBody">
                    <p id="hintText">Loading hint…</p>
                </div>
            </div>
        </div>
    </section>
</main>

<!-- ── FOOTER DOCK ── -->
<footer class="exam-footer">
    <div class="nav-left">
        <button class="btn-nav secondary" id="prevBtn" style="background:transparent; border:none; font-size:15px;"><i data-lucide="chevron-left" style="width:16px;height:16px;"></i> Previous</button>
    </div>
    
    <div class="progress-wrap">
        <div class="progress-track"><div class="progress-fill" id="progressFill"></div></div>
        <span class="progress-pct" id="progressPct">0%</span>
    </div>

    <div class="nav-right">
        <button class="btn-nav primary" id="nextBtn" style="background:linear-gradient(135deg, #4f46e5, #3b82f6); color:white; border:none; padding:12px 28px; font-size:14px; border-radius:12px;">Next <i data-lucide="chevron-right" style="width:16px;height:16px;"></i></button>
    </div>
</footer>"""

if re.search(html_main_old, text): text = re.sub(html_main_old, html_main_new, text)

# JS Updates
# update `buildDock()` completely to just update the progress bar.
js_builddock_old = r"""function buildDock\(\) \{
    const dock = document\.getElementById\('navDock'\);
    dock\.innerHTML = '';
    state.qIndices\.forEach\(\(qi, i\) => \{
        const div = document\.createElement\('div'\);
        let cls = 'dock-item ';
        if \(i === state\.current\) cls \+= 'current';
        else if \(state\.flags\[i\]\) cls \+= 'flagged';
        else if \(state\.answers\[i\] !== undefined\) cls \+= 'answered';
        else cls \+= 'unanswered';
        div\.className = cls;
        div\.textContent = i \+ 1;
        div\.addEventListener\('click', \(\) => goTo\(i\)\);
        dock\.appendChild\(div\);
    \}\);
    // scroll current into view
    const cur = dock\.children\[state\.current\];
    if \(cur\) cur\.scrollIntoView\(\{ inline: 'center', behavior: 'smooth' \}\);
\}"""

js_builddock_new = """function buildDock() {
    // Actually we just update progress UI now!
    const pct = Math.round(((state.current + 1) / state.total) * 100);
    const progressFill = document.getElementById('progressFill');
    const progressPct = document.getElementById('progressPct');
    
    if (progressFill) progressFill.style.width = pct + '%';
    if (progressPct) progressPct.textContent = pct + '%';
}"""

if re.search(js_builddock_old, text): text = re.sub(js_builddock_old, js_builddock_new, text)

js_flag_old = r"""    // Flag button
    const flagBtn = document.getElementById\('flagBtn'\);
    flagBtn\.className = 'icon-btn' \+ \(state\.flags\[state\.current\] \? ' flagged' : ''\);"""

js_flag_new = """    // Flag button
    const flagBtn = document.getElementById('flagBtn');
    if(state.flags[state.current]) {
        flagBtn.style.color = '#fbbf24';
        flagBtn.innerHTML = `<i data-lucide="flag" style="width:16px;height:16px;"></i> Flagged`;
    } else {
        flagBtn.style.color = '#94a3b8';
        flagBtn.innerHTML = `<i data-lucide="flag" style="width:16px;height:16px;"></i> Flag for Review`;
    }"""
if re.search(js_flag_old, text): text = re.sub(js_flag_old, js_flag_new, text)

js_qmeta_old = r"""    // Header
    document.getElementById\('qNumber'\).textContent = `Question \$\{state\.current \+ 1\} of \$\{total\}`;
    const badge = document.getElementById\('qDiff'\);
    badge\.className = 'q-badge ' \+ q\.diff;
    badge\.textContent = q\.diff\.charAt\(0\)\.toUpperCase\(\) \+ q\.diff\.slice\(1\);"""

js_qmeta_new = """    // Header styled cleanly
    document.getElementById('qNumber').innerHTML = `Question ${state.current + 1} <span style="font-weight:500; font-size:13px; margin-left:6px; opacity:0.8; color:#94a3b8;">of ${total}</span>`;
    const badge = document.getElementById('qDiff');
    badge.className = 'q-badge';
    badge.textContent = 'MCQ';
    badge.style.background = 'rgba(255,255,255,0.05)';
    badge.style.border = '1px solid rgba(255,255,255,0.1)';
    badge.style.color = '#cbd5e1';"""

if re.search(js_qmeta_old, text): text = re.sub(js_qmeta_old, js_qmeta_new, text)

js_flagbind_old = r"""// Flag
document.getElementById\('flagBtn'\).addEventListener\('click', \(\) => \{
    state\.flags\[state\.current\] = !state\.flags\[state\.current\];
    const flagBtn = document\.getElementById\('flagBtn'\);
    flagBtn\.className = 'icon-btn' \+ \(state\.flags\[state\.current\] \? ' flagged' : ''\);
    saveState\(\);
    buildDock\(\);
\}\);"""

js_flagbind_new = """// Flag
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
});"""

if re.search(js_flagbind_old, text): text = re.sub(js_flagbind_old, js_flagbind_new, text)

with open('exam.html', 'w', encoding='utf-8') as f:
    f.write(text)

print("Modifications applied.")
