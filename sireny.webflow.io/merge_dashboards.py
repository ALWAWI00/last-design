import re

with open("index.html", "r", encoding="utf-8") as f:
    index_html = f.read()

with open("quiz.html", "r", encoding="utf-8") as f:
    quiz_html = f.read()

# 1. Extract CSS from quiz.html (Dashboard Global and below till end of style)
css_start = quiz_html.find("/* Dashboard Global */")
css_end = quiz_html.find("</style>")
quiz_css = quiz_html[css_start:css_end]

# Inject CSS into index.html
index_html = index_html.replace("</style>", "\n        " + quiz_css + "\n    </style>")

# 2. Extract HTML widgets from quiz.html
html_start = quiz_html.find('<section class="dashboard">')
html_end = quiz_html.find('</section>') + len('</section>')
quiz_widgets = quiz_html[html_start:html_end]

# Inject HTML into index.html replacing the entire "MY COURSES" section
my_courses_start = index_html.find('<!-- MY COURSES -->')
my_courses_end = index_html.find('</main>')
if my_courses_start != -1 and my_courses_end != -1:
    index_html = index_html[:my_courses_start] + quiz_widgets + "\n\n        " + index_html[my_courses_end:]

# 3. Extract JS from quiz.html
js_start = quiz_html.find('// Custom Select Logic')
js_end = quiz_html.find('// PS5-Style Cinematic Atmospherics')
quiz_js = quiz_html[js_start:js_end]

# Inject JS into index.html just before the PS5 Cinematic background logic
ps5_start = index_html.find('// ── PS5 CINEMATIC BACKGROUND ──')
if ps5_start != -1:
    index_html = index_html[:ps5_start] + quiz_js + "\n\n        " + index_html[ps5_start:]

with open("index.html", "w", encoding="utf-8") as f:
    f.write(index_html)

print("Merge completed successfully.")
