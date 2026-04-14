import re

with open("exam.html", "r", encoding="utf-8") as f:
    text = f.read()

# 1. Revert CSS to Single Centered Column (The original state the user liked)
css_dual_pane = r"\.exam-workspace\{display:flex;flex-direction:row;height:calc\(100vh - 149px\);max-width:1440px;margin:0 auto;padding:24px 32px;gap:24px;position:relative;z-index:10;\}"
css_single_pane = ".exam-workspace{display:flex;flex-direction:column;max-width:960px;margin:0 auto;padding:40px 24px;gap:24px;position:relative;z-index:10;}"
text = re.sub(css_dual_pane, css_single_pane, text)

css_cols = r"\.left-col\{.*?\}\s*/\* Right Column Restored \*/\s*\.right-col\{.*?\}\s*\.mcq-pane\{.*?\}"
css_cols_clean = """        /* --- REVERTED SINGLE PANE --- */
        .vignette-pane{background:rgba(12,18,32,0.85);backdrop-filter:blur(24px);border:1px solid var(--border);border-radius:24px;display:flex;flex-direction:column;overflow:hidden;box-shadow:0 12px 40px rgba(0,0,0,.5);width:100%;}
        .mcq-pane{padding:0 36px;display:flex;flex-direction:column;gap:12px;margin-bottom:24px;}"""
text = re.sub(css_cols, css_cols_clean, text, flags=re.DOTALL)

# Revert Side Drawer CSS to Dropdown Navigator CSS
css_drawer = r"/\* ── NAV DRAWER ── \*/.*?\.drawer-body\{padding:24px 32px;overflow-y:auto;flex:1;\}"
css_dropdown = """/* ── DROPDOWN NAVIGATOR ── */
        .nav-dropdown{position:absolute;top:72px;left:0;right:0;background:rgba(15,23,42,0.98);backdrop-filter:blur(24px);border-bottom:1px solid rgba(255,255,255,0.05);padding:32px;z-index:150;box-shadow:0 10px 40px rgba(0,0,0,0.6);transform:translateY(-100%);transition:transform 0.3s cubic-bezier(0.4,0,0.2,1);display:flex;flex-direction:column;align-items:center;opacity:0;pointer-events:none;}
        .nav-dropdown.open{transform:translateY(0);opacity:1;pointer-events:auto;}"""
text = re.sub(css_drawer, css_dropdown, text, flags=re.DOTALL)

# 2. Revert DOM structure
DOM_OLD = r"<!-- ── EXAM WORKSPACE ── -->[\s\S]*?<!-- ── PAUSE OVERLAY ── -->"
DOM_NEW = """<!-- ── NAV DROPDOWN ── -->
<div class="nav-dropdown" id="navDrawer">
    <div style="display:flex; justify-content:space-between; align-items:center; width:100%; max-width:960px; margin-bottom:24px;">
        <h3 style="font-family:'Outfit',sans-serif; font-size:18px; font-weight:700; color:#fff; display:flex; align-items:center; gap:8px;"><i data-lucide="layout-grid" style="width:18px;height:18px;color:#38bdf8;"></i> Question Navigator</h3>
        <button id="closeNavBtn" class="icon-btn" style="color:#64748b; border:none; background:transparent; cursor:pointer;"><i data-lucide="x" style="width:20px;height:20px;"></i></button>
    </div>
    <div id="navGrid" style="display:flex; flex-wrap:wrap; gap:10px; width:100%; max-width:960px;"></div>
</div>

<!-- ── EXAM WORKSPACE ── -->
<main class="exam-workspace">
    <section class="vignette-pane">
        <!-- Re-located meta header back to top of single pane -->
        <div class="vignette-header" style="border-bottom:1px solid rgba(255,255,255,0.05); padding:20px 40px; display:flex; justify-content:space-between; align-items:center; background:rgba(0,0,0,0.2);">
            <div class="q-meta">
                <div class="q-number" id="qNumber">Question <span style="font-weight:500; font-size:14px; margin-left:6px; opacity:0.6;">of X</span></div>
                <div class="q-badge" id="qDiff">MCQ</div> <!-- RESTORED qDiff -->
            </div>
            <div class="q-actions">
                <button class="icon-btn" id="flagBtn" style="color:#94a3b8; font-size:14px; font-weight:700; display:flex; align-items:center; gap:8px; border:none; background:transparent; cursor:pointer;"><i data-lucide="flag" style="width:18px;height:18px;"></i> Flag for Review</button>
            </div>
        </div>

        <div class="vignette-body" id="vignetteBody" style="padding: 32px 40px;">
            <!-- Rendered by JS -->
        </div>

        <div class="mcq-pane" id="mcqPane">
            <!-- options injected by JS -->
        </div>

        <div style="padding: 0 40px 32px;">
            <div class="hint-drawer" id="hintDrawer">
                <div class="hint-toggle" id="hintToggle">
                    <div class="hint-toggle-left"><i data-lucide="lightbulb" style="width:16px;height:16px;"></i> Need a hint?</div>
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
    <button class="btn-nav secondary" id="prevBtn" style="background:transparent; border:none; font-size:15px; width:120px; justify-content:flex-start;"><i data-lucide="chevron-left" style="width:18px;height:18px;"></i> Previous</button>
    <div class="progress-wrap" style="flex:1; margin:0 32px; display:flex; align-items:center; gap:16px;">
        <div class="progress-track" style="height:6px; background:rgba(255,255,255,0.06); border-radius:10px; flex:1; overflow:hidden;"><div class="progress-fill" id="progressFill" style="height:100%; background:linear-gradient(90deg, #6366f1, #818cf8); width:0%; transition:width 0.4s;"></div></div>
        <span class="progress-pct" id="progressPct" style="font-size:12px; font-weight:800; color:#94a3b8; width:35px;">0%</span>
    </div>
    <div class="nav-controls" style="width:120px; justify-content:flex-end;">
        <button class="btn-nav primary" id="nextBtn" style="background:linear-gradient(135deg, #4f46e5, #3b82f6); color:white; border:none; padding:12px 24px; font-size:14px; border-radius:12px; height:46px;">Next <i data-lucide="chevron-right" style="width:16px;height:16px;"></i></button>
    </div>
</footer>

<!-- ── PAUSE OVERLAY ── -->"""
text = re.sub(DOM_OLD, DOM_NEW, text, flags=re.DOTALL)

# Add back Toggle Button (the dropdown toggle)
if "id=\"toggleNavBtn\"" not in text:
    text = text.replace(
        '<div class="exam-title" id="exam-title">Internal Medicine: Smart Adaptive Session</div>',
        '<div class="exam-title" id="exam-title">Internal Medicine: Smart Adaptive Session</div>\n        <div class="sep"></div>\n        <button class="btn btn-outline" id="toggleNavBtn" style="font-size:11px;padding:6px 10px;color:#38bdf8;border-color:rgba(56,189,248,0.3);"><i data-lucide="layout-grid" style="width:13px;height:13px;"></i> Navigator</button>'
    )

# 3. Rewrite Javascript missing bounds
BUILD_DOCK_REWRITE = """function buildDock() {
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
                document.getElementById('navDrawer').classList.remove('open');
            });
            dock.appendChild(div);
        });
    }
}"""
text = re.sub(r"function buildDock\(\) \{[\s\S]*?\}\n\}", BUILD_DOCK_REWRITE, text)

# Add Toggle Event Listeners cleanly right before finishExam
js_toggles = """
// Dropdown Logic
const togBtn = document.getElementById('toggleNavBtn');
const clBtn = document.getElementById('closeNavBtn');
const nd = document.getElementById('navDrawer');
if(togBtn && nd) {
    togBtn.addEventListener('click', () => {
        nd.classList.toggle('open');
    });
}
if(clBtn && nd) {
    clBtn.addEventListener('click', () => {
        nd.classList.remove('open');
    });
}

function finishExam() {"""
text = text.replace("function finishExam() {", js_toggles)

with open("exam.html", "w", encoding="utf-8") as f:
    f.write(text)

