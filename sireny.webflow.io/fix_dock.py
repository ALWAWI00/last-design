with open("exam.html", "r") as f:
    text = f.read()

# Restore CSS for the dock items
CSS_DOCK = """
        .dock-item{width:36px;height:36px;border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:700;cursor:pointer;transition:all .2s;flex-shrink:0;border:1.5px solid transparent;}
        .dock-item.unanswered{background:rgba(255,255,255,.04);color:#64748b;}
        .dock-item.unanswered:hover{background:rgba(255,255,255,.09);color:#e2e8f0;}
        .dock-item.answered{background:rgba(99,102,241,.18);color:var(--indigo-light);border-color:rgba(99,102,241,.3);}
        .dock-item.flagged{background:rgba(251,191,36,.1);color:var(--yellow);border-color:rgba(251,191,36,.3);}
        .dock-item.current{border-color:var(--indigo);color:var(--indigo);background:rgba(99,102,241,.1);transform:scale(1.1);}
"""

if ".dock-item{" not in text:
    text = text.replace("</style>", CSS_DOCK + "\n    </style>")

JS_BUILDDOCK_OLD = """function buildDock() {
    // Actually we just update progress UI now!
    const pct = Math.round(((state.current + 1) / state.total) * 100);
    const progressFill = document.getElementById('progressFill');
    const progressPct = document.getElementById('progressPct');
    
    if (progressFill) progressFill.style.width = pct + '%';
    if (progressPct) progressPct.textContent = pct + '%';
}"""

JS_BUILDDOCK_NEW = """function buildDock() {
    // 1. Update progress UI
    const pct = Math.round(((state.current + 1) / state.total) * 100);
    const progressFill = document.getElementById('progressFill');
    const progressPct = document.getElementById('progressPct');
    if (progressFill) progressFill.style.width = pct + '%';
    if (progressPct) progressPct.textContent = pct + '%';

    // 2. Build navigator grid inside navDrawer
    const dock = document.getElementById('navGrid');
    if(dock) {
        dock.innerHTML = '';
        state.qIndices.forEach((qi, i) => {
            const div = document.createElement('div');
            let cls = 'dock-item ';
            if (i === state.current) cls += 'current';
            else if (state.flags[i]) cls += 'flagged';
            else if (state.answers[i] !== undefined) cls += 'answered';
            else cls += 'unanswered';
            div.className = cls;
            div.textContent = i + 1;
            div.addEventListener('click', () => {
                goTo(i);
                document.getElementById('navDrawer').style.display = 'none';
            });
            dock.appendChild(div);
        });
    }
}"""

if "function buildDock()" in text:
    text = text.replace(JS_BUILDDOCK_OLD, JS_BUILDDOCK_NEW)

with open("exam.html", "w") as f:
    f.write(text)

