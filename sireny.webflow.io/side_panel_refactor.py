with open("exam.html", "r") as f:
    text = f.read()

# 1. Update Workspace Constraints CSS
css_workspace_old = """        .exam-workspace{display:flex;flex-direction:column;height:calc(100vh - 72px - 70px);padding:40px 24px;gap:32px;position:relative;z-index:10;max-width:960px;margin:0 auto;overflow-y:auto;scroll-behavior:smooth;}"""
css_workspace_new = """        .exam-workspace{display:flex;flex-direction:column;height:calc(100vh - 149px);padding:40px 24px;gap:32px;position:relative;z-index:10;max-width:960px;margin:0 auto;overflow-y:auto;scroll-behavior:smooth;}"""
if css_workspace_old in text:
    text = text.replace(css_workspace_old, css_workspace_new)

# Add Drawer CSS
css_drawer = """
        /* ── NAV DRAWER ── */
        .drawer-overlay{position:fixed;inset:0;background:rgba(3,4,8,0.6);backdrop-filter:blur(4px);z-index:150;opacity:0;pointer-events:none;transition:opacity 0.3s;}
        .drawer-overlay.open{opacity:1;pointer-events:auto;}
        
        .side-drawer{position:fixed;top:0;right:0;bottom:0;width:340px;background:rgba(12,18,32,0.85);backdrop-filter:blur(24px);border-left:1px solid rgba(255,255,255,0.05);z-index:160;transform:translateX(100%);transition:transform 0.4s cubic-bezier(0.4,0,0.2,1);display:flex;flex-direction:column;box-shadow:-10px 0 40px rgba(0,0,0,0.5);}
        .side-drawer.open{transform:translateX(0);}
        .drawer-header{padding:24px 32px;border-bottom:1px solid rgba(255,255,255,0.05);display:flex;justify-content:space-between;align-items:center;flex-shrink:0;}
        .drawer-header h3{font-family:'Outfit',sans-serif;font-size:18px;font-weight:700;color:#fff;display:flex;align-items:center;gap:8px;}
        .drawer-body{padding:24px 32px;overflow-y:auto;flex:1;}
"""
if "/* ── NAV DRAWER ── */" not in text:
    text = text.replace("    </style>", css_drawer + "    </style>")

# Remove the old buggy HTML block from inside <main>
old_drawer_html = """<!-- ── QUESTION NAVIGATOR ── -->
<div class="nav-drawer" id="navDrawer" style="display:none; background:rgba(15,23,42,0.95); backdrop-filter:blur(24px); border-bottom:1px solid rgba(255,255,255,0.05); padding:24px 32px; position:absolute; top:72px; left:0; right:0; z-index:50; box-shadow:0 10px 40px rgba(0,0,0,0.5);">
    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:20px; max-width:960px; margin:0 auto 20px;">
        <h3 style="font-family:'Outfit',sans-serif; font-size:18px; font-weight:700; color:#fff;">Question Navigator</h3>
        <button id="closeNavBtn" class="icon-btn" style="color:#64748b; border:none; background:transparent; cursor:pointer;"><i data-lucide="x" style="width:20px;height:20px;"></i></button>
    </div>
    <div id="navGrid" style="display:flex; flex-wrap:wrap; gap:8px; max-width:960px; margin:0 auto;"></div>
</div>"""

if old_drawer_html in text:
    text = text.replace(old_drawer_html, "")

# Add the new immaculate drawer structure at the bottom of the body (before scripts)
new_drawer_html = """
<!-- ── SIDE NAV DRAWER ── -->
<div class="drawer-overlay" id="drawerOverlay"></div>
<aside class="side-drawer" id="sideDrawer">
    <div class="drawer-header">
        <h3><i data-lucide="layout-grid" style="width:18px;height:18px;color:#38bdf8;"></i> Navigator</h3>
        <button id="closeNavDrawer" class="icon-btn" style="color:#94a3b8; border:none; background:transparent; cursor:pointer;"><i data-lucide="x" style="width:20px;height:20px;"></i></button>
    </div>
    <div class="drawer-body">
        <div id="navGrid" style="display:flex; flex-wrap:wrap; gap:10px;"></div>
    </div>
</aside>
"""
if "<!-- ── SIDE NAV DRAWER ── -->" not in text:
    text = text.replace("<!-- ── PAUSE OVERLAY ── -->", new_drawer_html + "\n<!-- ── PAUSE OVERLAY ── -->")

# Update JS Toggle Logic safely
old_js_toggle = """document.getElementById('toggleNavBtn').addEventListener('click', () => {
    const d = document.getElementById('navDrawer');
    d.style.display = d.style.display === 'none' ? 'block' : 'none';
});
document.getElementById('closeNavBtn').addEventListener('click', () => {
    document.getElementById('navDrawer').style.display = 'none';
});"""

new_js_toggle = """function openDrawer() {
    document.getElementById('drawerOverlay').classList.add('open');
    document.getElementById('sideDrawer').classList.add('open');
}
function closeDrawer() {
    document.getElementById('drawerOverlay').classList.remove('open');
    document.getElementById('sideDrawer').classList.remove('open');
}

document.getElementById('toggleNavBtn').addEventListener('click', openDrawer);
document.getElementById('closeNavDrawer').addEventListener('click', closeDrawer);
document.getElementById('drawerOverlay').addEventListener('click', closeDrawer);
"""

if old_js_toggle in text:
    text = text.replace(old_js_toggle, new_js_toggle)

# Fix the goTo() closing logic
old_go_to = """setTimeout(() => {
        const d = document.getElementById('navDrawer');
        if(d) d.style.display = 'none';"""

new_go_to = """setTimeout(() => {
        closeDrawer();"""
if old_go_to in text:
    text = text.replace(old_go_to, new_go_to)

# Also fix the buildDock item click logic
old_builddock_close = "document.getElementById('navDrawer').style.display = 'none';"
new_builddock_close = "closeDrawer();"
if old_builddock_close in text:
    text = text.replace(old_builddock_close, new_builddock_close)

with open("exam.html", "w") as f:
    f.write(text)

print("Redesign script completed.")
