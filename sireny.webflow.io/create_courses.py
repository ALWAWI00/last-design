import re

with open("index.html", "r", encoding="utf-8") as f:
    html = f.read()

# 1. Strip everything inside main-content after <header class="top-header">...</header>
header_start = html.find('<header class="top-header">')
header_end = html.find('</header>') + len('</header>')

top_part = html[:header_end]
bottom_part = html[html.find('</main>'):]

# 2. Add BACK button in top-header
top_part = top_part.replace('<h1>DASHBOARD</h1>', '<h1>MY COURSES</h1>')
top_part = top_part.replace('<div class="page-title">', '<div style="display:flex; align-items:center; gap:24px;"><a href="index.html" class="utility-btn" style="text-decoration:none; color:#94a3b8;"><i data-lucide="chevron-left" style="width:20px;height:20px;"></i></a><div class="page-title">')
top_part = top_part.replace('</header>', '</div></header>') # close the flex wrapper

# 3. Build the Courses Body
courses_body = """
            <style>
                .course-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 24px; margin-bottom: 48px; }
                .course-card {
                    background: rgba(15, 20, 30, 0.6);
                    backdrop-filter: blur(24px);
                    -webkit-backdrop-filter: blur(24px);
                    border: 1px solid rgba(255, 255, 255, 0.08);
                    border-radius: 24px;
                    padding: 32px;
                    display: flex;
                    flex-direction: column;
                    transition: all 0.3s;
                    cursor: pointer;
                    text-decoration: none;
                    color: inherit;
                }
                .course-card:hover {
                    background: rgba(20, 25, 40, 0.85);
                    border-color: rgba(56, 189, 248, 0.3);
                    transform: translateY(-5px);
                    box-shadow: 0 15px 40px rgba(59, 130, 246, 0.15);
                }
                .course-icon {
                    width: 48px; height: 48px; border-radius: 14px;
                    display: flex; align-items: center; justify-content: center;
                    margin-bottom: 24px; color: #fff;
                }
                .cardiology { background: linear-gradient(135deg, #ef4444, #b91c1c); box-shadow: 0 4px 15px rgba(239, 68, 68, 0.4); }
                .neurology { background: linear-gradient(135deg, #3b82f6, #1d4ed8); box-shadow: 0 4px 15px rgba(59, 130, 246, 0.4); }
                .pharmacology { background: linear-gradient(135deg, #10b981, #047857); box-shadow: 0 4px 15px rgba(16, 185, 129, 0.4); }
                .anatomy { background: linear-gradient(135deg, #8b5cf6, #5b21b6); box-shadow: 0 4px 15px rgba(139, 92, 246, 0.4); }
                
                .course-card h3 { font-family: 'Outfit', sans-serif; font-size: 22px; font-weight: 700; margin-bottom: 8px; }
                .course-card p { color: var(--text-secondary); font-size: 13px; margin-bottom: 24px; line-height: 1.5;}
                
                .c-progress-track { width: 100%; height: 6px; background: rgba(255,255,255,0.05); border-radius: 8px; overflow: hidden; margin-bottom: 10px;}
                .c-progress-fill { height: 100%; border-radius: 8px; }
                .c-meta { display: flex; justify-content: space-between; font-size: 11px; font-weight: 600; color: #94a3b8; text-transform: uppercase; letter-spacing: 0.5px;}

                .section-label { font-family: 'Outfit', sans-serif; font-size: 20px; font-weight: 700; display:flex; align-items:center; gap:12px; margin-bottom:20px; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 16px;}
            </style>

            <div class="section-label"><i data-lucide="activity" style="color:#38bdf8;"></i> In Progress Courses</div>
            <div class="course-grid">
                <!-- Cardiology -->
                <a href="exam.html" class="course-card">
                    <div class="course-icon cardiology"><i data-lucide="heart-pulse"></i></div>
                    <h3>Cardiology Focus</h3>
                    <p>Advanced cardiovascular pathology, hemodynamics, and EKG interpretation.</p>
                    <div class="c-progress-track">
                        <div class="c-progress-fill" style="width: 85%; background: linear-gradient(90deg, #fca5a5, #ef4444); box-shadow: 0 0 10px rgba(239, 68, 68, 0.5);"></div>
                    </div>
                    <div class="c-meta"><span>85% Completed</span><span>12 Modules Left</span></div>
                </a>

                <!-- Neurology -->
                <a href="exam.html" class="course-card">
                    <div class="course-icon neurology"><i data-lucide="brain"></i></div>
                    <h3>Neurology Systems</h3>
                    <p>Central and peripheral nervous system dynamics and neuropathology.</p>
                    <div class="c-progress-track">
                        <div class="c-progress-fill" style="width: 60%; background: linear-gradient(90deg, #93c5fd, #3b82f6); box-shadow: 0 0 10px rgba(59, 130, 246, 0.5);"></div>
                    </div>
                    <div class="c-meta"><span>60% Completed</span><span>24 Modules Left</span></div>
                </a>

                <!-- Pharmacology -->
                <a href="exam.html" class="course-card">
                    <div class="course-icon pharmacology"><i data-lucide="pill"></i></div>
                    <h3>Pharmacology</h3>
                    <p>Drug mechanisms, pharmacokinetics, and clinical applications.</p>
                    <div class="c-progress-track">
                        <div class="c-progress-fill" style="width: 35%; background: linear-gradient(90deg, #6ee7b7, #10b981); box-shadow: 0 0 10px rgba(16, 185, 129, 0.5);"></div>
                    </div>
                    <div class="c-meta"><span>35% Completed</span><span>48 Modules Left</span></div>
                </a>
            </div>

            <div class="section-label" style="margin-top: 20px;"><i data-lucide="check-circle-2" style="color:#10b981;"></i> Completed Courses</div>
            <div class="course-grid">
                <!-- Anatomy Foundation -->
                <a href="#" class="course-card" style="opacity: 0.8; border: 1px solid rgba(16, 185, 129, 0.2);">
                    <div class="course-icon anatomy"><i data-lucide="bone"></i></div>
                    <h3>Anatomy Foundations</h3>
                    <p>Gross anatomy, musculature, and skeletal structural fundamentals.</p>
                    <div class="c-progress-track">
                        <div class="c-progress-fill" style="width: 100%; background: #10b981;"></div>
                    </div>
                    <div class="c-meta"><span style="color:#10b981;">100% Completed</span><span style="color:#10b981;"><i data-lucide="medal" style="width:14px;height:14px;"></i> Certificate Earned</span></div>
                </a>
            </div>
"""

# Update Navigation Sidebar to show courses as active
top_part = top_part.replace('<a href="index.html" class="nav-item active">', '<a href="index.html" class="nav-item">')
top_part = re.sub(
    r'<a href="#" class="nav-item">\s*<i data-lucide="book-open"[^>]*></i>\s*MY COURSES\s*</a>', 
    '<a href="courses.html" class="nav-item active">\n                    <i data-lucide="book-open" style="width:18px;height:18px;"></i>\n                    MY COURSES\n                </a>', 
    top_part
)

full_html = top_part + courses_body + bottom_part

with open("courses.html", "w", encoding="utf-8") as f:
    f.write(full_html)

# Also update index.html so its navigation links to courses
index_html = re.sub(
    r'<a href="#" class="nav-item">\s*<i data-lucide="book-open"[^>]*></i>\s*MY COURSES\s*</a>', 
    '<a href="courses.html" class="nav-item">\n                    <i data-lucide="book-open" style="width:18px;height:18px;"></i>\n                    MY COURSES\n                </a>', 
    html
)
with open("index.html", "w", encoding="utf-8") as f:
    f.write(index_html)
    
print("Successfully generated courses.html and updated routing.")
