import React, { useRef, useEffect } from 'react';

const GalaxyBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    // Mouse interaction state
    let mouseX = width / 2;
    let mouseY = height / 2;

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);

    // Galaxy Configuration
    const starCount = 350;
    const nebulaCount = 18;
    
    // Deep cosmic palette
    const colors = [
      { r: 76, g: 29, b: 149 },  // Deep Purple
      { r: 124, g: 58, b: 237 }, // Violet
      { r: 219, g: 39, b: 119 }, // Pink
      { r: 15, g: 23, b: 42 },   // Dark Blue/Black base
    ];

    class Star {
      x: number;
      y: number;
      size: number;
      opacity: number;
      speed: number;
      originalX: number;
      originalY: number;
      parallaxFactor: number;
      
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.originalX = this.x;
        this.originalY = this.y;
        this.size = Math.random() * 1.8;
        this.opacity = Math.random();
        this.speed = Math.random() * 0.05;
        this.parallaxFactor = Math.random() * 0.05; // How much mouse affects this star
      }

      update() {
        // Twinkle effect
        this.opacity += (Math.random() - 0.5) * 0.05;
        if (this.opacity < 0) this.opacity = 0;
        if (this.opacity > 1) this.opacity = 1;
        
        // Subtle vertical drift
        this.originalY -= this.speed;
        if (this.originalY < 0) {
            this.originalY = height;
            this.originalX = Math.random() * width;
        }

        // Mouse Parallax Interaction
        // Calculate distance from center to mouse to determine shift amount
        const dx = (mouseX - width / 2) * this.parallaxFactor;
        const dy = (mouseY - height / 2) * this.parallaxFactor;

        this.x = this.originalX - dx;
        this.y = this.originalY - dy;
      }

      draw() {
        if (!ctx) return;
        ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    class Nebula {
      x: number;
      y: number;
      radius: number;
      color: { r: number, g: number, b: number };
      vx: number;
      vy: number;

      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.radius = Math.random() * 300 + 100;
        this.color = colors[Math.floor(Math.random() * (colors.length - 1))]; // Exclude dark base
        this.vx = (Math.random() - 0.5) * 0.2;
        this.vy = (Math.random() - 0.5) * 0.2;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        // Wrap around screen
        if (this.x < -this.radius) this.x = width + this.radius;
        if (this.x > width + this.radius) this.x = -this.radius;
        if (this.y < -this.radius) this.y = height + this.radius;
        if (this.y > height + this.radius) this.y = -this.radius;
      }

      draw() {
        if (!ctx) return;
        const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.radius);
        gradient.addColorStop(0, `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, 0.12)`);
        gradient.addColorStop(0.5, `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, 0.03)`);
        gradient.addColorStop(1, 'rgba(0,0,0,0)');
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const stars: Star[] = Array.from({ length: starCount }, () => new Star());
    const nebulas: Nebula[] = Array.from({ length: nebulaCount }, () => new Nebula());

    let animationId: number;

    const animate = () => {
      // Clear with trail effect
      ctx.fillStyle = '#0f0518'; 
      ctx.fillRect(0, 0, width, height);

      // Draw Nebula Clouds
      ctx.globalCompositeOperation = 'screen';
      nebulas.forEach(n => {
        n.update();
        n.draw();
      });

      // Draw Stars
      ctx.globalCompositeOperation = 'source-over';
      stars.forEach(s => {
        s.update();
        s.draw();
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none"
    />
  );
};

export default GalaxyBackground;