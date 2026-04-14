import re

with open("exam.html", "r", encoding="utf-8") as f:
    text = f.read()

# Make the buttons rock-solid with inline logic, in case event listeners dropped
btn_orig = r'<button class="btn btn-danger" id="endBtn"><i data-lucide="power" style="width:14px;height:14px;"></i> End Block</button>'
btn_fix = '<button class="btn btn-danger" id="endBtn" onclick="document.getElementById(\'endConfirmOverlay\').classList.add(\'active\')"><i data-lucide="power" style="width:14px;height:14px;"></i> End Block</button>'
text = text.replace(btn_orig, btn_fix)

cb_orig = r'<button class="btn btn-outline" id="cancelEndBtn"(.*?)>Cancel</button>'
cb_fix = r'<button class="btn btn-outline" id="cancelEndBtn"\1 onclick="document.getElementById(\'endConfirmOverlay\').classList.remove(\'active\')">Cancel</button>'
text = re.sub(cb_orig, cb_fix, text)

sb_orig = r'<button class="btn btn-danger" id="confirmEndBtn"(.*?)>Submit Exam</button>'
sb_fix = r'<button class="btn btn-danger" id="confirmEndBtn"\1 onclick="document.getElementById(\'endConfirmOverlay\').classList.remove(\'active\'); if(typeof finishExam===\'function\') finishExam();">Submit Exam</button>'
text = re.sub(sb_orig, sb_fix, text)

# Define launchConfetti safely
if "function launchConfetti()" not in text:
    text = text.replace("function finishExam() {", "function launchConfetti(){ console.log('Confetti!'); }\nfunction finishExam() {")

# Add a z-index 9999 to guarantee confirm overlay is unblockable
text = text.replace("z-index:250;display:flex", "z-index:9999;display:flex")

with open("exam.html", "w", encoding="utf-8") as f:
    f.write(text)

print("Button fixes deployed.")
