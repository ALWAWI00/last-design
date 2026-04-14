import re

with open("quizzes.html", "r", encoding="utf-8") as f:
    text = f.read()

# 1. Update the CSS for the sidebar to match index.html
css_old = r"/\* Sidebar Mirror \(From quiz.html\) \*/.*?/\* Main Workspace \*/"
css_new = """/* ── SIDEBAR ── */
        .sidebar {
            width: 260px;
            background: rgba(12, 18, 32, 0.7);
            backdrop-filter: blur(24px);
            -webkit-backdrop-filter: blur(24px);
            border-right: 1px solid var(--border-glass);
            display: flex;
            flex-direction: column;
            padding: 32px 24px;
            flex-shrink: 0;
            z-index: 10;
        }

        .sidebar-brand { display: flex; align-items: center; justify-content: space-between; margin-bottom: 48px; }
        .brand-logo { display: flex; align-items: center; gap: 12px; font-family: 'Outfit', sans-serif; font-weight: 800; font-size: 20px; letter-spacing: 0.5px; color:#fff; text-shadow: 0 2px 10px rgba(56, 189, 248, 0.4); text-decoration:none; }
        .logo-icon { width: 32px; height: 32px; background: linear-gradient(135deg, #3b82f6, #2563eb); border-radius: 8px; display: flex; align-items: center; justify-content: center; color: #fff; font-size: 16px; font-weight: 800; box-shadow: 0 4px 15px rgba(37, 99, 235, 0.5); }
        .collapse-btn { background: rgba(255,255,255,0.03); border: 1px solid var(--border-glass); color: var(--text-muted); border-radius: 8px; width: 32px; height: 32px; display: flex; align-items: center; justify-content: center; cursor: pointer; transition: all 0.2s; }
        .collapse-btn:hover { background: rgba(255,255,255,0.08); color: #fff; }

        .nav-links { display: flex; flex-direction: column; gap: 8px; flex:1;}
        .nav-item { display: flex; align-items: center; gap: 14px; padding: 14px 18px; border-radius: 12px; color: var(--text-muted); text-decoration: none; font-size: 14px; font-weight: 500; transition: all 0.2s; }
        .nav-item:hover { color: #fff; background: rgba(255, 255, 255, 0.05); }
        .nav-item.active { background: linear-gradient(90deg, #3b82f6, #2563eb); color: #fff; box-shadow: 0 4px 20px rgba(37, 99, 235, 0.3); font-weight: 600; letter-spacing: 0.3px; }
        .sidebar-footer { margin-top: auto; border-top: 1px solid var(--border-glass); padding-top: 24px; }

        /* Main Workspace */"""

text = re.sub(css_old, css_new, text, flags=re.DOTALL)

# 2. Update the HTML for the sidebar
html_old = r"<aside class=\"sidebar\">.*?</aside>"
html_new = """<aside class="sidebar">
        <div class="sidebar-brand">
            <a href="index.html" class="brand-logo">
                <div class="logo-icon">M</div>
                MEDIFLI
            </a>
            <button class="collapse-btn"><i data-lucide="chevron-left" style="width:18px;height:18px;"></i></button>
        </div>

        <nav class="nav-links">
            <a href="index.html" class="nav-item">
                <i data-lucide="layout-dashboard" style="width:18px;height:18px;"></i> DASHBOARD
            </a>
            <a href="#" class="nav-item">
                <i data-lucide="book-open" style="width:18px;height:18px;"></i> MY COURSES
            </a>
            <a href="#" class="nav-item">
                <i data-lucide="message-square" style="width:18px;height:18px;"></i> MESSAGES
            </a>
            <a href="#" class="nav-item">
                <i data-lucide="compass" style="width:18px;height:18px;"></i> EXPLORE COURSES
            </a>
            <a href="quizzes.html" class="nav-item active">
                <i data-lucide="flask-conical" style="width:18px;height:18px;"></i> QUIZZES
            </a>
        </nav>

        <div class="sidebar-footer">
            <a href="#" class="nav-item">
                <i data-lucide="log-out" style="width:18px;height:18px;"></i> LOGOUT
            </a>
        </div>
    </aside>"""

text = re.sub(html_old, html_new, text, flags=re.DOTALL)

with open("quizzes.html", "w", encoding="utf-8") as f:
    f.write(text)

