with open("index.html", "r", encoding="utf-8") as f:
    html = f.read()

# Make the hero-action widget more robust
old_css = """        .hero-action-widget {
            background: rgba(255, 255, 255, 0.05);
            backdrop-filter: blur(24px);
            -webkit-backdrop-filter: blur(24px);
            border: 1px solid rgba(255,255,255,0.1);
            border-radius: 24px;
            padding: 32px;
            min-width: 380px; max-width: 420px; flex-shrink: 0;
            transition: transform 0.3s;
            cursor: pointer;
            text-decoration: none;
            color: inherit;
        }"""

new_css = """        .hero-action-widget {
            background: rgba(15, 20, 30, 0.7);
            backdrop-filter: blur(30px);
            -webkit-backdrop-filter: blur(30px);
            border: 1px solid rgba(255,255,255,0.1);
            border-radius: 24px;
            padding: 40px;
            min-width: 380px; max-width: 460px; flex: 1; flex-shrink: 0;
            transition: transform 0.3s, box-shadow 0.3s;
            cursor: pointer;
            text-decoration: none;
            color: inherit;
            display: flex;
            flex-direction: column;
            justify-content: center;
            box-shadow: 0 10px 40px rgba(0,0,0,0.4);
        }
        .hero-action-widget:hover {
            transform: translateY(-5px);
            background: rgba(20, 25, 40, 0.85);
            border-color: rgba(56, 189, 248, 0.3);
            box-shadow: 0 15px 50px rgba(59, 130, 246, 0.2);
        }"""
html = html.replace(old_css, new_css)

# Remove the inline styles since they are now in the class
old_inline = '<a href="exam.html" class="hero-action-widget" style="display:flex; flex-direction:column; justify-content:center;">'
new_inline = '<a href="exam.html" class="hero-action-widget">'
html = html.replace(old_inline, new_inline)

# Fix the internal elements of the widget for better spacing
html = html.replace('<h3 style="font-size: 20px; margin-bottom: 4px;">Internal Medicine</h3>', '<h3 style="font-size: 24px; margin-bottom: 8px;">Internal Medicine</h3>')
html = html.replace('<p style="margin-bottom: 16px; font-size: 13px;">Module: Cardiology Focus</p>', '<p style="margin-bottom: 24px; font-size: 14px; color: var(--text-secondary);">Module: Cardiology Focus</p>')

with open("index.html", "w", encoding="utf-8") as f:
    f.write(html)
print("done")
