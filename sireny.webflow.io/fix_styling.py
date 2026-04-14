with open("index.html", "r", encoding="utf-8") as f:
    html = f.read()

# Fix hero-action-widget size
html = html.replace("width: 420px;", "min-width: 380px; max-width: 420px; flex-shrink: 0;")

# Fix indigo colors to navy/royal blues
html = html.replace("#818cf8", "#60a5fa")  # light indigo to light blue
html = html.replace("#6366f1", "#3b82f6")  # indigo to brand blue
html = html.replace("#4f46e5", "#1e40af")  # dark indigo to dark blue
html = html.replace("rgba(99, 102, 241", "rgba(59, 130, 246") # rgba indigo to rgba blue
html = html.replace("rgba(129, 140, 248", "rgba(96, 165, 250") # rgba indigo light to rgba blue light
html = html.replace("rgba(79, 70, 229", "rgba(30, 64, 175") # rgba dark indigo to rgba dark blue

with open("index.html", "w", encoding="utf-8") as f:
    f.write(html)

with open("quizzes.html", "r", encoding="utf-8") as f:
    q_html = f.read()

q_html = q_html.replace("#6366f1", "#3b82f6")
q_html = q_html.replace("#4f46e5", "#1e40af")
q_html = q_html.replace("#818cf8", "#60a5fa")
q_html = q_html.replace("rgba(99, 102, 241", "rgba(59, 130, 246") 
q_html = q_html.replace("rgba(129, 140, 248", "rgba(96, 165, 250")
q_html = q_html.replace("rgba(79, 70, 229", "rgba(30, 64, 175")

with open("quizzes.html", "w", encoding="utf-8") as f:
    f.write(q_html)

print("Styling fixed.")
