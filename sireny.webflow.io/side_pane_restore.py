import re

with open("exam.html", "r", encoding="utf-8") as f:
    text = f.read()

# 1. Swap the dropdown CSS for Side panel CSS
css_old = r"/\* ── DROPDOWN NAVIGATOR ── \*/.*?\.nav-dropdown\.open\{transform:translateY\(0\);opacity:1;pointer-events:auto;\}"
css_new = """/* ── SIDE DRAWER NAVIGATOR ── */
        .drawer-overlay{position:fixed;inset:0;background:rgba(3,4,8,0.6);backdrop-filter:blur(4px);z-index:150;opacity:0;pointer-events:none;transition:opacity 0.3s;}
        .drawer-overlay.open{opacity:1;pointer-events:auto;}
        
        .side-drawer{position:fixed;top:0;right:0;bottom:0;width:340px;background:rgba(12,18,32,0.85);backdrop-filter:blur(24px);border-left:1px solid rgba(255,255,255,0.05);z-index:160;transform:translateX(100%);transition:transform 0.4s cubic-bezier(0.4,0,0.2,1);display:flex;flex-direction:column;box-shadow:-10px 0 40px rgba(0,0,0,0.5);}
        .side-drawer.open{transform:translateX(0);}
        .drawer-header{padding:24px 32px;border-bottom:1px solid rgba(255,255,255,0.05);display:flex;justify-content:space-between;align-items:center;flex-shrink:0;}
        .drawer-header h3{font-family:'Outfit',sans-serif;font-size:18px;font-weight:700;color:#fff;display:flex;align-items:center;gap:8px;}
        .drawer-body{padding:24px 32px;overflow-y:auto;flex:1;}"""
text = re.sub(css_old, css_new, text, flags=re.DOTALL)

# 2. Swap HTML
html_old = r"<!-- ── NAV DROPDOWN ── -->[\s\S]*?</div>\n</div>"
html_new = """<!-- ── SIDE NAV DRAWER ── -->
<div class="drawer-overlay" id="drawerOverlay"></div>
<aside class="side-drawer" id="sideDrawer">
    <div class="drawer-header">
        <h3><i data-lucide="layout-grid" style="width:18px;height:18px;color:#38bdf8;"></i> Navigator</h3>
        <button id="closeNavBtn" class="icon-btn" style="color:#94a3b8; border:none; background:transparent; cursor:pointer;"><i data-lucide="x" style="width:20px;height:20px;"></i></button>
    </div>
    <div class="drawer-body">
        <div id="navGrid" style="display:flex; flex-wrap:wrap; gap:10px;"></div>
    </div>
</aside>"""
text = re.sub(html_old, html_new, text)

# 3. Swap Javascript Toggles
js_old = r"// Dropdown Logic[\s\S]*?function finishExam\(\) \{"
js_new = """// Side Drawer Logic
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

function finishExam() {"""
text = re.sub(js_old, js_new, text)

# 4. Bind closeDrawer directly inside buildDock
bd_match = r"document\.getElementById\('navDrawer'\)\.classList\.remove\('open'\);"
bd_new = "closeDrawer();"
text = re.sub(bd_match, bd_new, text)

with open("exam.html", "w", encoding="utf-8") as f:
    f.write(text)

print("Side panel restored")
