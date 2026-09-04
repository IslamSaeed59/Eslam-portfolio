import React, { useEffect, useRef } from 'react';

const BackgroundNetwork = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let particlesArray = [];
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const mouse = {
      x: null,
      y: null,
      radius: 120
    };

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseout', handleMouseLeave);

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      init();
    };

    window.addEventListener('resize', handleResize);

    class Particle {
      constructor(x, y, directionX, directionY, size, color) {
        this.x = x;
        this.y = y;
        this.directionX = directionX;
        this.directionY = directionY;
        this.size = size;
        this.color = color;
      }
      
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color;
        ctx.fill();
      }
      
      update() {
        if (this.x > canvas.width || this.x < 0) {
          this.directionX = -this.directionX;
        }
        if (this.y > canvas.height || this.y < 0) {
          this.directionY = -this.directionY;
        }
        
        if (mouse.x !== null) {
          let dx = mouse.x - this.x;
          let dy = mouse.y - this.y;
          let distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < mouse.radius + this.size) {
            // Push particles away slightly
            if (mouse.x < this.x && this.x < canvas.width - this.size * 2) {
              this.x += 1;
            }
            if (mouse.x > this.x && this.x > this.size * 2) {
              this.x -= 1;
            }
            if (mouse.y < this.y && this.y < canvas.height - this.size * 2) {
              this.y += 1;
            }
            if (mouse.y > this.y && this.y > this.size * 2) {
              this.y -= 1;
            }
          }
        }
        
        this.x += this.directionX;
        this.y += this.directionY;
        this.draw();
      }
    }

    function init() {
      particlesArray = [];
      let numberOfParticles = (canvas.height * canvas.width) / 12000;
      for (let i = 0; i < numberOfParticles; i++) {
        let size = (Math.random() * 1.5) + 0.5;
        let x = (Math.random() * ((window.innerWidth - size * 2) - (size * 2)) + size * 2);
        let y = (Math.random() * ((window.innerHeight - size * 2) - (size * 2)) + size * 2);
        let directionX = (Math.random() * 0.5) - 0.25;
        let directionY = (Math.random() * 0.5) - 0.25;
        let color = 'rgba(0, 245, 212, 0.4)'; 
        particlesArray.push(new Particle(x, y, directionX, directionY, size, color));
      }
    }

    function connect() {
      let opacityValue = 1;
      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
          let distance = ((particlesArray[a].x - particlesArray[b].x) * (particlesArray[a].x - particlesArray[b].x)) + 
                         ((particlesArray[a].y - particlesArray[b].y) * (particlesArray[a].y - particlesArray[b].y));
          if (distance < 10000) {
            opacityValue = 1 - (distance / 10000);
            ctx.strokeStyle = `rgba(0, 245, 212, ${opacityValue * 0.15})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
            ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
            ctx.stroke();
          }
        }
        
        // Connect to mouse
        if (mouse.x !== null) {
          let mouseDist = ((particlesArray[a].x - mouse.x) * (particlesArray[a].x - mouse.x)) + 
                          ((particlesArray[a].y - mouse.y) * (particlesArray[a].y - mouse.y));
          if (mouseDist < 20000) {
            opacityValue = 1 - (mouseDist / 20000);
            ctx.strokeStyle = `rgba(0, 245, 212, ${opacityValue * 0.5})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.stroke();
          }
        }
      }
    }

    function animate() {
      requestAnimationFrame(animate);
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
      }
      connect();
    }

    init();
    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseout', handleMouseLeave);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed inset-0 pointer-events-none z-[-2] opacity-70"
    ></canvas>
  );
};

export default BackgroundNetwork;
