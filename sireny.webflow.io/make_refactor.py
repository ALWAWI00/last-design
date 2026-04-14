import re

with open("exam.html", "r", encoding="utf-8") as f:
    text = f.read()

# 1. CSS Updates
css_replacements = [
    (
        r"\.exam-workspace\{display:flex;flex-direction:column;height:calc\(100vh - 149px\);padding:40px 24px;gap:32px;position:relative;z-index:10;max-width:960px;margin:0 auto;overflow-y:auto;scroll-behavior:smooth;\}",
        ".exam-workspace{display:flex;flex-direction:row;height:calc(100vh - 149px);max-width:1440px;margin:0 auto;padding:24px 32px;gap:24px;position:relative;z-index:10;}"
    ),
    (
        r"\.vignette-pane\{background:rgba\(12,18,32,0\.85\);backdrop-filter:blur\(24px\);border:1px solid var\(--border\);border-radius:24px;display:flex;flex-direction:column;overflow:hidden;box-shadow:0 12px 40px rgba\(0,0,0,\.5\);transition:opacity \.3s;width:100\%;\}",
        ".left-col{flex:5;display:flex;flex-direction:column;background:rgba(12,18,32,0.85);backdrop-filter:blur(24px);border:1px solid var(--border);border-radius:24px;overflow:hidden;box-shadow:0 12px 40px rgba(0,0,0,.5);}"
    ),
    (
        r"        /\* Main Pane Container \*/",
        "        /* ── DUAL PANE ARCHITECTURE ── */"
    ),
    (
        r"\.vignette-body\{padding:28px 36px;overflow-y:auto;flex:1;",
        ".vignette-body{padding:36px 40px;overflow-y:auto;flex:1;"
    ),
    (
        r"        /\* Unified Details: MCQ \+ Hint \*/\n        \.right-col\{display:contents;\} /\* Let it merge without breaking \*/",
        "        /* Right Column Restored */\n        .right-col{flex:5;display:flex;flex-direction:column;background:rgba(12,18,32,0.85);backdrop-filter:blur(24px);border:1px solid var(--border);border-radius:24px;overflow:hidden;box-shadow:0 12px 40px rgba(0,0,0,.5);}"
    ),
    (
        r"\.mcq-pane\{padding:0 36px 36px;display:flex;flex-direction:column;gap:14px;\}",
        ".mcq-pane{padding:32px 40px;display:flex;flex-direction:column;gap:12px;overflow-y:auto;flex:1;}"
    )
]

for o, n in css_replacements:
    text = re.sub(o, n, text, flags=re.DOTALL)

# 2. Add dock-item to footer CSS perfectly
footer_css_replacements = [
    (
        r"\.progress-wrap\{display:flex;align-items:center;gap:16px;flex:1;max-width:400px;margin:0 auto;\}[\s\S]*?\.nav-right\{justify-content:flex-end;\}",
        """.nav-dock{display:flex;gap:8px;overflow-x:auto;padding-bottom:4px;flex:1;margin:0 24px;align-items:center;}
        .nav-dock::-webkit-scrollbar{height:4px;}
        .nav-dock::-webkit-scrollbar-thumb{background:rgba(255,255,255,.08);border-radius:10px;}
        .dock-item{width:36px;height:36px;border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:800;cursor:pointer;transition:all .2s;flex-shrink:0;border:1.5px solid transparent;background:rgba(255,255,255,0.03);color:#64748b;}
        .dock-item:hover{background:rgba(255,255,255,0.08);color:#e2e8f0;}
        .dock-item.current{background:linear-gradient(135deg,#6366f1,#818cf8);color:#fff;border-color:rgba(99,102,241,0.5);transform:scale(1.1);box-shadow:0 4px 15px rgba(99,102,241,0.4);}
        .dock-item.answered{background:rgba(16,185,129,0.15);color:#34d399;border-color:rgba(16,185,129,0.3);}
        .dock-item.flagged{background:rgba(251,191,36,0.15);color:#fbbf24;border-color:rgba(251,191,36,0.3);}
        .nav-controls{display:flex;gap:12px;flex-shrink:0;}"""
    )
]
for o, n in footer_css_replacements:
    text = re.sub(o, n, text, flags=re.DOTALL)

# 3. Restructure HTML DOM
DOM_OLD = r"<!-- ── EXAM WORKSPACE ── -->[\s\S]*?<!-- ── PAUSE OVERLAY ── -->"
DOM_NEW = """<!-- ── EXAM WORKSPACE ── -->
<main class="exam-workspace">

    <!-- Left Column: Vignette -->
    <section class="left-col">
        <div class="vignette-body" id="vignetteBody">
            <!-- Rendered by JS: question top, stem bottom -->
        </div>
    </section>

    <!-- Right Column: Control & Options -->
    <section class="right-col">
        <!-- Re-located meta header to the top of interaction pane -->
        <div class="vignette-header" style="border-bottom:1px solid rgba(255,255,255,0.05); padding:18px 40px; background:rgba(0,0,0,0.2);">
            <div class="q-meta">
                <div class="q-number" id="qNumber">Question 1 <span style="font-weight:500; font-size:14px; margin-left:6px; opacity:0.6;">of X</span></div>
            </div>
            <div class="q-actions">
                <button class="icon-btn" id="flagBtn" style="color:#94a3b8; font-size:14px; font-weight:700; display:flex; align-items:center; gap:8px; border:none; background:transparent; cursor:pointer;"><i data-lucide="flag" style="width:18px;height:18px;"></i> Flag for Review</button>
            </div>
        </div>

        <div class="mcq-pane" id="mcqPane">
            <!-- options injected by JS -->
        </div>

        <div style="padding: 0 40px 32px; flex-shrink:0;">
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
    <div class="nav-dock" id="navDock"></div>
    <div class="nav-controls" style="width:120px; justify-content:flex-end;">
        <button class="btn-nav primary" id="nextBtn" style="background:linear-gradient(135deg, #4f46e5, #3b82f6); color:white; border:none; padding:12px 24px; font-size:14px; border-radius:12px; height:46px;">Next <i data-lucide="chevron-right" style="width:16px;height:16px;"></i></button>
    </div>
</footer>

<!-- ── PAUSE OVERLAY ── -->"""

text = re.sub(DOM_OLD, DOM_NEW, text, flags=re.DOTALL)

# 4. Clean JS Top Header (remove Navigator button toggle)
toggle_btn_match = r"        <div class=\"sep\"></div>\s*<button class=\"btn btn-outline\" id=\"toggleNavBtn\"[\s\S]*?>.*?Navigator</button>"
text = re.sub(toggle_btn_match, "", text)

# 5. Clean JS Functions (destroy openDrawer, closeDrawer)
js_drawer_logic = r"function openDrawer[\s\S]*?if \(overlayEl\) overlayEl\.addEventListener\('click', closeDrawer\);\n\n"
text = re.sub(js_drawer_logic, "", text)

# 6. Correct buildDock Javascript 
build_dock_old = r"function buildDock\(\) \{[\s\S]*?   \}\n\}"
build_dock_new = """function buildDock() {
    const dock = document.getElementById('navDock');
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
            div.addEventListener('click', () => goTo(i));
            dock.appendChild(div);
        });
        
        // Scroll current neatly into view
        const cur = dock.children[state.current];
        if (cur) cur.scrollIntoView({ inline: 'center', behavior: 'smooth' });
    }
}"""
text = re.sub(build_dock_old, build_dock_new, text)

# Remove any lingering "closeDrawer()" references in javascript execution blocks
text = text.replace("closeDrawer();\n", "")

with open("exam.html", "w", encoding="utf-8") as f:
    f.write(text)

print("Architecture deployed successfully!")
