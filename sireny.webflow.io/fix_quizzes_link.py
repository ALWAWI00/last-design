import re

with open("quizzes.html", "r", encoding="utf-8") as f:
    html = f.read()

html = re.sub(
    r'<a href="#" class="nav-item">\s*<i data-lucide="book-open"[^>]*></i>\s*MY COURSES\s*</a>', 
    '<a href="courses.html" class="nav-item">\n                    <i data-lucide="book-open" style="width:18px;height:18px;"></i>\n                    MY COURSES\n                </a>', 
    html
)
with open("quizzes.html", "w", encoding="utf-8") as f:
    f.write(html)
print("done quizzes")
