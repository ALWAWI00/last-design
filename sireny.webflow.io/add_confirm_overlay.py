import re

with open("exam.html", "r", encoding="utf-8") as f:
    text = f.read()

# 1. Add CSS for confirm-overlay
css_anchor = r"\.pause-overlay\.active\{opacity:1;pointer-events:auto;\}"
css_confirm = """
        .confirm-overlay{position:fixed;inset:0;background:rgba(3,4,8,0.85);backdrop-filter:blur(24px);z-index:250;display:flex;align-items:center;justify-content:center;opacity:0;pointer-events:none;transition:all 0.4s cubic-bezier(0.4,0,0.2,1);}
        .confirm-overlay.active{opacity:1;pointer-events:auto;}
        .confirm-card{background:rgba(15,23,42,0.6);border:1px solid rgba(255,255,255,0.08);padding:48px 56px;border-radius:24px;text-align:center;max-width:480px;box-shadow:0 30px 60px rgba(0,0,0,0.6);transform:scale(0.95) translateY(20px);transition:all 0.4s cubic-bezier(0.4,0,0.2,1);}
        .confirm-overlay.active .confirm-card{transform:scale(1) translateY(0);}
        .confirm-icon{width:72px;height:72px;background:rgba(239,68,68,0.1);border-radius:50%;display:flex;align-items:center;justify-content:center;color:#f87171;font-size:32px;margin:0 auto 24px;border:1px solid rgba(239,68,68,0.3);}
        .confirm-card h2{font-family:'Outfit',sans-serif;font-size:28px;font-weight:700;color:#fff;margin-bottom:12px;letter-spacing:-0.5px;}
        .confirm-card p{color:#94a3b8;font-size:16px;line-height:1.6;margin-bottom:32px;}
        .confirm-actions{display:flex;gap:16px;justify-content:center;}
"""
text = re.sub(css_anchor, css_anchor + "\n" + css_confirm, text)

# 2. Add HTML for confirm-overlay right under PAUSE OVERLAY
html_anchor = "<!-- ── PAUSE OVERLAY ── -->"
html_confirm = """<!-- ── END CONFIRM OVERLAY ── -->
<div class="confirm-overlay" id="endConfirmOverlay">
    <div class="confirm-card">
        <div class="confirm-icon"><i data-lucide="alert-triangle" style="width:36px;height:36px;"></i></div>
        <h2>End Block Now?</h2>
        <p>You are about to permanently submit your exam session. Any unanswered questions will be marked as incorrect.</p>
        <div class="confirm-actions">
            <button class="btn btn-outline" id="cancelEndBtn" style="flex:1; padding:16px; font-size:16px; border-radius:12px;">Cancel</button>
            <button class="btn btn-danger" id="confirmEndBtn" style="flex:1; padding:16px; font-size:16px; border-radius:12px;">Submit Exam</button>
        </div>
    </div>
</div>

"""
text = text.replace(html_anchor, html_confirm + html_anchor)

# 3. Modify JS for endBtn
js_old = r"document\.getElementById\('endBtn'\)\.addEventListener\('click', \(\) => \{\n\s*if \(confirm\('End the block now\? Your answers will be submitted as-is\.'\)\) finishExam\(\);\n\}\);"
js_new = """document.getElementById('endBtn').addEventListener('click', () => {
    document.getElementById('endConfirmOverlay').classList.add('active');
});

document.getElementById('cancelEndBtn').addEventListener('click', () => {
    document.getElementById('endConfirmOverlay').classList.remove('active');
});

document.getElementById('confirmEndBtn').addEventListener('click', () => {
    document.getElementById('endConfirmOverlay').classList.remove('active');
    finishExam();
});"""
text = re.sub(js_old, js_new, text)

with open("exam.html", "w", encoding="utf-8") as f:
    f.write(text)

