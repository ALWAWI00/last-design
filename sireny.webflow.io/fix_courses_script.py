import re

with open("courses.html", "r", encoding="utf-8") as f:
    html = f.read()

# I want to isolate the script block starting from <script> to </script>
# and replace it entirely with just lucide, current date, and PS5 canvas.
script_start = html.find('<script>')
script_end = html.find('</script>', script_start) + len('</script>')

new_script = """<script>
        lucide.createIcons();

        // Sets the current date
        const dateOptions = { weekday: 'long', month: 'long', day: 'numeric' };
        const cd = document.getElementById('currentDate');
        if (cd) cd.textContent = new Date().toLocaleDateString('en-US', dateOptions).toUpperCase();

        // ── PS5 CINEMATIC BACKGROUND ──
        const canvas = document.getElementById('bg-canvas');
        if (canvas) {
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
        }
    </script>"""

new_html = html[:script_start] + new_script + html[script_end:]

with open("courses.html", "w", encoding="utf-8") as f:
    f.write(new_html)
print("done script fix")
