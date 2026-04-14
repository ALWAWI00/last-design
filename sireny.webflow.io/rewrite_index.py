index_content = """<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Medifli Dashboard</title>
    <!-- Fonts: Outfit and Inter -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Outfit:wght@400;500;600;700;800&display=swap" rel="stylesheet">
    <!-- Lucide Icons -->
    <script src="https://unpkg.com/lucide@latest"></script>
    <style>
        :root {
            --bg-dark: #030408;
            --surface-sidebar: rgba(12, 18, 32, 0.6);
            --surface-card: rgba(15, 23, 42, 0.4);
            --border: rgba(255, 255, 255, 0.05);
            --brand-blue: #3b82f6;
            --blue-gradient: linear-gradient(135deg, #1e3a8a, #0c1220);
            --text-primary: #f8fafc;
            --text-secondary: #94a3b8;
        }

        * { margin: 0; padding: 0; box-sizing: border-box; }
        
        body {
            font-family: 'Inter', sans-serif;
            background: var(--bg-dark);
            color: var(--text-primary);
            height: 100vh;
            overflow: hidden;
            display: flex;
        }

        /* Cinematic Background */
        #bg-canvas {
            position: fixed;
            top: 0; left: 0;
            width: 100vw; height: 100vh;
            z-index: 0;
            pointer-events: none;
        }

        /* Layout Architecture */
        .app-layout {
            display: flex;
            width: 100%; height: 100vh;
            z-index: 10;
        }

        /* ── SIDEBAR ── */
        .sidebar {
            width: 260px;
            background: rgba(12, 18, 32, 0.7);
            backdrop-filter: blur(24px);
            -webkit-backdrop-filter: blur(24px);
            border-right: 1px solid var(--border);
            display: flex;
            flex-direction: column;
            padding: 32px 24px;
            flex-shrink: 0;
        }

        .sidebar-brand {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 48px;
        }

        .brand-logo {
            display: flex;
            align-items: center;
            gap: 12px;
            font-family: 'Outfit', sans-serif;
            font-weight: 800;
            font-size: 20px;
            letter-spacing: 0.5px;
            text-shadow: 0 2px 10px rgba(56, 189, 248, 0.4);
        }

        .logo-icon {
            width: 32px; height: 32px;
            background: linear-gradient(135deg, #3b82f6, #2563eb);
            border-radius: 8px;
            display: flex; align-items: center; justify-content: center;
            color: #fff; font-size: 16px; font-weight: 800;
            box-shadow: 0 4px 15px rgba(37, 99, 235, 0.5);
        }

        .collapse-btn {
            background: rgba(255,255,255,0.03);
            border: 1px solid var(--border);
            color: var(--text-secondary);
            border-radius: 8px;
            width: 32px; height: 32px;
            display: flex; align-items: center; justify-content: center;
            cursor: pointer;
            transition: all 0.2s;
        }
        .collapse-btn:hover { background: rgba(255,255,255,0.08); color: #fff; }

        .nav-links {
            display: flex;
            flex-direction: column;
            gap: 8px;
        }

        .nav-item {
            display: flex;
            align-items: center;
            gap: 14px;
            padding: 14px 18px;
            border-radius: 12px;
            color: var(--text-secondary);
            text-decoration: none;
            font-size: 14px;
            font-weight: 500;
            transition: all 0.2s;
        }

        .nav-item:hover {
            color: #fff;
            background: rgba(255, 255, 255, 0.05);
        }

        .nav-item.active {
            background: linear-gradient(90deg, #3b82f6, #2563eb);
            color: #fff;
            box-shadow: 0 4px 20px rgba(37, 99, 235, 0.3);
            font-weight: 600;
            letter-spacing: 0.3px;
        }

        .sidebar-footer {
            margin-top: auto;
            border-top: 1px solid var(--border);
            padding-top: 24px;
        }

        /* ── MAIN CONTENT ── */
        .main-content {
            flex: 1;
            padding: 40px 60px;
            display: flex;
            flex-direction: column;
            overflow-y: auto;
        }

        /* HEADER */
        .top-header {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            margin-bottom: 50px;
        }

        .page-title h1 {
            font-family: 'Outfit', sans-serif;
            font-size: 44px;
            font-weight: 800;
            letter-spacing: -1px;
            color: #fff;
            margin-bottom: 4px;
        }

        .page-title p {
            color: #38bdf8;
            font-size: 11px;
            font-weight: 600;
            letter-spacing: 2px;
            text-transform: uppercase;
            opacity: 0.8;
        }

        .user-widget {
            display: flex;
            align-items: center;
            gap: 16px;
        }

        .utility-btn {
            background: rgba(255,255,255,0.03);
            border: 1px solid var(--border);
            color: #fbbf24;
            border-radius: 50%;
            width: 40px; height: 40px;
            display: flex; align-items: center; justify-content: center;
            cursor: pointer;
            transition: all 0.2s;
        }

        .profile-bug {
            display: flex;
            align-items: center;
            gap: 12px;
        }

        .avatar {
            width: 40px; height: 40px;
            background: linear-gradient(135deg, #6366f1, #4f46e5);
            border-radius: 50%;
            display: flex; align-items: center; justify-content: center;
            font-weight: 700;
            font-size: 14px;
        }

        .profile-info h4 {
            font-size: 14px;
            font-weight: 600;
        }
        .profile-info p {
            font-size: 12px;
            color: var(--text-secondary);
        }

        /* HERO SECTION */
        .welcome-text {
            font-family: 'Outfit', sans-serif;
            font-size: 28px;
            font-weight: 800;
            margin-bottom: 24px;
            display: flex;
            gap: 10px;
        }
        .welcome-text span {
            color: #3b82f6;
        }
        .date-text {
            font-size: 10px;
            color: var(--text-secondary);
            font-weight: 600;
            letter-spacing: 1px;
            margin-left: 10px;
            padding-top: 14px;
            text-transform: uppercase;
            font-family: 'Inter', sans-serif;
        }

        /* PRIMARY CARD */
        .hero-card {
            background: linear-gradient(135deg, #1e3a8a, rgba(12, 18, 32, 0.9));
            border-radius: 32px;
            padding: 48px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            border: 1px solid rgba(255,255,255,0.08);
            box-shadow: 0 40px 80px rgba(0,0,0,0.5), inset 0 0 40px rgba(59, 130, 246, 0.1);
            position: relative;
            overflow: hidden;
            margin-bottom: 40px;
        }

        .hero-text h2 {
            font-family: 'Outfit', sans-serif;
            font-size: 56px;
            font-weight: 800;
            line-height: 1.1;
            letter-spacing: -1.5px;
            margin-bottom: 20px;
            text-shadow: 0 10px 30px rgba(0,0,0,0.5);
        }

        .hero-text p {
            color: rgba(255, 255, 255, 0.7);
            font-size: 16px;
            line-height: 1.6;
            max-width: 380px;
            margin-bottom: 32px;
        }

        .btn-pill {
            background: #fff;
            color: #0f172a;
            padding: 14px 28px;
            border-radius: 100px;
            font-size: 12px;
            font-weight: 700;
            letter-spacing: 1px;
            text-transform: uppercase;
            border: none;
            cursor: pointer;
            transition: all 0.3s;
            display: inline-block;
            text-decoration: none;
        }
        .btn-pill:hover {
            transform: translateY(-2px);
            box-shadow: 0 10px 25px rgba(255,255,255,0.2);
        }

        /* INNER WIDGET CARD */
        .hero-action-widget {
            background: rgba(255, 255, 255, 0.05);
            backdrop-filter: blur(24px);
            -webkit-backdrop-filter: blur(24px);
            border: 1px solid rgba(255,255,255,0.1);
            border-radius: 24px;
            padding: 32px;
            width: 420px;
            transition: transform 0.3s;
            cursor: pointer;
            text-decoration: none;
            color: inherit;
        }
        .hero-action-widget:hover {
            transform: translateY(-5px);
            background: rgba(255, 255, 255, 0.08);
            border-color: rgba(255, 255, 255, 0.2);
        }

        .widget-tag {
            font-size: 11px;
            font-weight: 700;
            letter-spacing: 1px;
            text-transform: uppercase;
            display: flex;
            align-items: center;
            gap: 8px;
            margin-bottom: 16px;
        }
        
        .hero-action-widget h3 {
            font-family: 'Outfit', sans-serif;
            font-size: 24px;
            font-weight: 700;
            margin-bottom: 8px;
        }

        .hero-action-widget p {
            color: var(--text-secondary);
            font-size: 14px;
        }

        /* COURSES SECTION */
        .section-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 24px;
        }

        .section-header h3 {
            font-family: 'Outfit', sans-serif;
            font-size: 20px;
            display: flex;
            align-items: center;
            gap: 12px;
        }

        .courses-container {
            background: var(--surface-card);
            backdrop-filter: blur(24px);
            -webkit-backdrop-filter: blur(24px);
            border: 1px solid var(--border);
            border-radius: 32px;
            padding: 32px 40px;
            display: flex;
            flex-direction: column;
        }

        .icon-box {
            width: 40px; height: 40px;
            background: linear-gradient(135deg, #38bdf8, #2563eb);
            border-radius: 12px;
            display: flex; align-items: center; justify-content: center;
            box-shadow: 0 4px 15px rgba(37, 99, 235, 0.4);
        }

        .course-count {
            color: var(--text-secondary);
            font-size: 12px;
            font-weight: 500;
            letter-spacing: 1px;
            text-transform: uppercase;
            margin-top: 4px;
        }

        .view-all-btn {
            background: rgba(37, 99, 235, 0.1);
            border: 1px solid rgba(37, 99, 235, 0.3);
            color: #38bdf8;
            padding: 8px 16px;
            border-radius: 100px;
            font-size: 11px;
            font-weight: 700;
            letter-spacing: 1px;
            text-transform: uppercase;
            cursor: pointer;
            transition: all 0.2s;
        }
        .view-all-btn:hover {
            background: rgba(37, 99, 235, 0.2);
        }

    </style>
</head>
<body>

    <!-- PS5 Particle Background -->
    <canvas id="bg-canvas"></canvas>

    <div class="app-layout">
        <!-- ── SIDEBAR ── -->
        <aside class="sidebar">
            <div class="sidebar-brand">
                <div class="brand-logo">
                    <div class="logo-icon">M</div>
                    MEDIFLI
                </div>
                <button class="collapse-btn"><i data-lucide="chevron-left" style="width:18px;height:18px;"></i></button>
            </div>

            <nav class="nav-links">
                <a href="index.html" class="nav-item active">
                    <i data-lucide="layout-dashboard" style="width:18px;height:18px;"></i>
                    DASHBOARD
                </a>
                <a href="#" class="nav-item">
                    <i data-lucide="book-open" style="width:18px;height:18px;"></i>
                    MY COURSES
                </a>
                <a href="#" class="nav-item">
                    <i data-lucide="message-square" style="width:18px;height:18px;"></i>
                    MESSAGES
                </a>
                <a href="#" class="nav-item">
                    <i data-lucide="compass" style="width:18px;height:18px;"></i>
                    EXPLORE COURSES
                </a>
                <a href="quizzes.html" class="nav-item">
                    <i data-lucide="flask-conical" style="width:18px;height:18px;"></i>
                    QUIZZES
                </a>
            </nav>

            <div class="sidebar-footer">
                <a href="#" class="nav-item">
                    <i data-lucide="log-out" style="width:18px;height:18px;"></i>
                    LOGOUT
                </a>
            </div>
        </aside>

        <!-- ── MAIN CONTENT ── -->
        <main class="main-content">
            
            <header class="top-header">
                <div class="page-title">
                    <h1>DASHBOARD</h1>
                    <p>HIGH-FIDELITY LEARNING ENVIRONMENT</p>
                </div>
                
                <div class="user-widget">
                    <button class="utility-btn"><i data-lucide="sun" style="width:18px;height:18px;"></i></button>
                    <div class="profile-bug">
                        <div class="avatar">H</div>
                        <div class="profile-info">
                            <h4>Hussein Student</h4>
                            <p>hussein@student2024</p>
                        </div>
                    </div>
                </div>
            </header>

            <div class="welcome-text">
                WELCOME BACK, <span>HUSSEIN.</span> <div class="date-text" id="currentDate">TUESDAY, APRIL 14</div>
            </div>

            <!-- HERO CARD -->
            <div class="hero-card">
                <div class="hero-text">
                    <h2>Start<br>Learning.</h2>
                    <p>Explore our course catalog and start your medical education journey with highly focused, adaptive materials.</p>
                    <a href="quizzes.html" class="btn-pill">Explore Courses</a>
                </div>

                <a href="exam.html" class="hero-action-widget">
                    <div class="widget-tag"><i data-lucide="layers" style="width:14px;height:14px;color:#fbbf24;"></i> Start Learning</div>
                    <h3>Start your first lesson</h3>
                    <p>Pick a course from below to begin your journey and test your bounds.</p>
                </a>
            </div>

            <!-- MY COURSES -->
            <div class="courses-container">
                <div class="section-header" style="margin-bottom:0;">
                    <div style="display:flex; gap: 16px; align-items:center;">
                        <div class="icon-box"><i data-lucide="book-open" style="width:20px;height:20px;color:#fff;"></i></div>
                        <div>
                            <h3 style="margin-bottom:0; font-size:18px;">MY COURSES</h3>
                            <div class="course-count">0 Enrolled Courses</div>
                        </div>
                    </div>
                    <button class="view-all-btn">View All</button>
                </div>
            </div>

        </main>
    </div>

    <!-- Initialization Scripts -->
    <script>
        lucide.createIcons();

        // Sets the current date
        const dateOptions = { weekday: 'long', month: 'long', day: 'numeric' };
        document.getElementById('currentDate').textContent = new Date().toLocaleDateString('en-US', dateOptions).toUpperCase();

        // ── PS5 CINEMATIC BACKGROUND ──
        const canvas = document.getElementById('bg-canvas');
        const ctx = canvas.getContext('2d');
        let width, height;
        
        function resize() {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
            ctx.fillStyle = '#030408'; 
            ctx.fillRect(0,0,width,height);
        }
        window.addEventListener('resize', resize); 
        resize();
        
        let mouseX=width/2, mouseY=height/2, targetX=width/2, targetY=height/2;
        window.addEventListener('mousemove', e=>{ targetX=e.clientX; targetY=e.clientY; });
        
        const particles = [];
        for(let i=0; i<220; i++){
            const z=Math.random(); 
            let size=0;
            if(z<.15) size=Math.random()*18+12;
            else if(z<.6) size=Math.random()*3.5+1;
            else size=Math.random()*1.2+.4;
            particles.push({
                x: Math.random()*width, 
                y: Math.random()*height, 
                z, size, 
                vx:(Math.random()-.5)*.1, 
                vy:(Math.random()*-.2)-.05, 
                wS:Math.random()*.012+.004, 
                wA:Math.random()*Math.PI*2, 
                wD:Math.random()*.25+.08, 
                alpha:Math.random()*.45+.1
            });
        }
        particles.sort((a,b)=>b.z-a.z);
        
        function draw(){
            ctx.fillStyle='#030408'; 
            ctx.fillRect(0,0,width,height);
            
            mouseX+=(targetX-mouseX)*.03; 
            mouseY+=(targetY-mouseY)*.03;
            const px=mouseX-width/2, py=mouseY-height/2;
            
            ctx.globalCompositeOperation='screen';
            const rg=ctx.createLinearGradient(0,0,width*.8,height*.8);
            rg.addColorStop(0,'rgba(56,189,248,.07)'); 
            rg.addColorStop(.3,'rgba(79,70,229,.04)'); 
            rg.addColorStop(1,'rgba(3,4,8,0)');
            ctx.fillStyle=rg; 
            ctx.fillRect(0,0,width,height);
            
            particles.forEach(p=>{
                p.wA+=p.wS; 
                p.x+=p.vx+Math.sin(p.wA)*p.wD; 
                p.y+=p.vy;
                if(p.x<-150) p.x=width+150; 
                if(p.x>width+150) p.x=-150;
                if(p.y<-150) p.y=height+150; 
                if(p.y>height+150) p.y=-150;
                
                const fx=p.x-px*(1-p.z)*.07;
                const fy=p.y-py*(1-p.z)*.07;
                const g=ctx.createRadialGradient(fx,fy,0,fx,fy,p.size);
                
                if(p.z<.15){
                    g.addColorStop(0,`rgba(165,180,252,${p.alpha*.2})`);
                    g.addColorStop(.5,`rgba(165,180,252,${p.alpha*.07})`);
                    g.addColorStop(1,'rgba(165,180,252,0)');
                }
                else if(p.z<.6){
                    g.addColorStop(0,`rgba(255,255,255,${p.alpha})`);
                    g.addColorStop(.2,`rgba(165,180,252,${p.alpha*.8})`);
                    g.addColorStop(1,'rgba(129,140,248,0)');
                }
                else{
                    g.addColorStop(0,`rgba(226,232,240,${p.alpha*.45})`);
                    g.addColorStop(1,'rgba(226,232,240,0)');
                }
                ctx.fillStyle=g; 
                ctx.beginPath(); 
                ctx.arc(fx,fy,p.size,0,Math.PI*2); 
                ctx.fill();
            });
            
            ctx.globalCompositeOperation='source-over';
            requestAnimationFrame(draw);
        }
        draw();
    </script>
</body>
</html>
"""

with open("index.html", "w", encoding="utf-8") as f:
    f.write(index_content)

print("Dashboard rewrite complete.")
