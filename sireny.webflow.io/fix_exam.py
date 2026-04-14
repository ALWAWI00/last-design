with open("exam.html", "r") as f:
    text = f.read()

# Swap vignette order
text = text.replace(
    '`<div class="vignette-stem">${q.stem}</div>\n         <div class="vignette-question">${q.stem2}</div>`;',
    '`<div class="vignette-question">${q.stem2}</div>\n         <div class="vignette-stem">${q.stem}</div>`;'
)

# Compact MCQ options
text = text.replace(
    'padding:14px 18px;',
    'padding:10px 16px;'
)
text = text.replace(
    'gap:14px;',
    'gap:12px;'
)
text = text.replace(
    '.mcq-prompt{font-size:13px;font-weight:600;color:#64748b;padding:0 4px;margin-bottom:2px;}',
    '.mcq-prompt{display:none;}'
)

# Make circles
text = text.replace(
    "border-radius:7px;font-family:'Outfit',sans-serif;font-weight:700;font-size:13px;color:#94a3b8;transition:all .2s;flex-shrink:0;}",
    "border-radius:50%;font-family:'Outfit',sans-serif;font-weight:800;font-size:14px;color:#cbd5e1;transition:all .2s;flex-shrink:0;}"
)

# Compact Vignette
text = text.replace(
    'padding:26px;border-radius:20px;',
    'padding:18px;border-radius:14px;'
)
text = text.replace(
    'padding:20px 24px;',
    'padding:14px 18px;'
)

# Insert HTML for Question Navigator Dropdown right after Header
NAV_HTML = """
<!-- ── QUESTION NAVIGATOR ── -->
<div class="nav-drawer" id="navDrawer" style="display:none; background:rgba(15,23,42,0.95); backdrop-filter:blur(24px); border-bottom:1px solid rgba(255,255,255,0.05); padding:24px 32px; position:absolute; top:72px; left:0; right:0; z-index:50; box-shadow:0 10px 40px rgba(0,0,0,0.5);">
    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:20px; max-width:960px; margin:0 auto 20px;">
        <h3 style="font-family:'Outfit',sans-serif; font-size:18px; font-weight:700; color:#fff;">Question Navigator</h3>
        <button id="closeNavBtn" class="icon-btn" style="color:#64748b; border:none; background:transparent; cursor:pointer;"><i data-lucide="x" style="width:20px;height:20px;"></i></button>
    </div>
    <div id="navGrid" style="display:flex; flex-wrap:wrap; gap:8px; max-width:960px; margin:0 auto;"></div>
</div>
"""
if "nav-drawer" not in text:
    text = text.replace("<!-- ── EXAM WORKSPACE ── -->", NAV_HTML + "\n<!-- ── EXAM WORKSPACE ── -->")

# Add a button to toggle navigator
if "id=\"toggleNavBtn\"" not in text:
    text = text.replace(
        '<div class="exam-title" id="exam-title">Internal Medicine: Smart Adaptive Session</div>',
        '<div class="exam-title" id="exam-title">Internal Medicine: Smart Adaptive Session</div>\n        <div class="sep"></div>\n        <button class="btn btn-outline" id="toggleNavBtn" style="font-size:11px;padding:6px 10px;color:#38bdf8;border-color:rgba(56,189,248,0.3);"><i data-lucide="layout-grid" style="width:13px;height:13px;"></i> Navigator</button>'
    )

# Update buildDock functionally
text = text.replace(
    "const dock = document.getElementById('navDock');",
    "const dock = document.getElementById('navGrid');\n    const oldDock = document.getElementById('navDock'); if(oldDock) oldDock.innerHTML = '';"
)
text = text.replace(
    "dock.children[state.current];",
    "(dock ? dock.children[state.current] : null);"
)

# JS bindings for navigator
JS_TOGLE = """
document.getElementById('toggleNavBtn').addEventListener('click', () => {
    const d = document.getElementById('navDrawer');
    d.style.display = d.style.display === 'none' ? 'block' : 'none';
});
document.getElementById('closeNavBtn').addEventListener('click', () => {
    document.getElementById('navDrawer').style.display = 'none';
});
"""
if "toggleNavBtn" not in text and "JS_TOGLE" not in text:
    text = text.replace("function finishExam() {", JS_TOGLE + "\nfunction finishExam() {")

# To prevent goTo from hiding the drawer every time, let's just let goTo keep it open or close it
text = text.replace(
    "setTimeout(() => {",
    "setTimeout(() => {\n        const d = document.getElementById('navDrawer');\n        if(d) d.style.display = 'none';\n"
)

with open("exam.html", "w") as f:
    f.write(text)

print("Fix applied")
