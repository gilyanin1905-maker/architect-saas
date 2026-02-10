
import React, { useEffect, useRef } from 'react';

interface SpaceBackgroundProps {
  theme: 'dark' | 'light';
}

class GalaxyParticle {
  x: number;
  y: number;
  angle: number;
  dist: number;
  z: number;
  size: number;
  speed: number;
  opacity: number;
  baseColor: string;

  constructor(canvas: HTMLCanvasElement, isInitial = false, theme: 'dark' | 'light') {
    const w = canvas.width;
    const h = canvas.height;
    
    // Spread particles more evenly
    this.angle = Math.random() * Math.PI * 2;
    this.dist = Math.random() * (Math.max(w, h) * 0.7);
    this.z = isInitial ? Math.random() * 1000 : 1000;
    
    // Smaller particles look sharper and perform better
    this.size = Math.random() * 1.5; 
    this.speed = (0.0005 + Math.random() * 0.001); 
    this.opacity = Math.random() * 0.5 + 0.3;
    
    // Pre-calculate color based on theme to avoid logic in draw loop
    if (theme === 'light') {
        this.baseColor = this.size > 1.0 ? '#0088cc' : '#1e293b';
    } else {
        if (this.size > 1.2) this.baseColor = '#00f2ff';
        else if (this.size > 0.8) this.baseColor = '#7b2ff7';
        else this.baseColor = '#ffffff';
    }
    
    // Set initial X/Y
    this.x = 0;
    this.y = 0;
  }

  update(width: number, height: number, centerX: number, centerY: number) {
    this.angle += this.speed;
    this.z -= 2; // Fixed speed toward camera
    
    if (this.z <= 0) {
      this.z = 1000;
      this.angle = Math.random() * Math.PI * 2;
      this.dist = Math.random() * (Math.max(width, height) * 0.7);
    }

    const perspective = 600 / (this.z || 0.1); // Reduced FOV for performance
    const x3d = Math.cos(this.angle) * this.dist;
    const y3d = Math.sin(this.angle) * this.dist;

    this.x = centerX + x3d * perspective;
    this.y = centerY + y3d * perspective;
  }

  draw(ctx: CanvasRenderingContext2D, width: number, height: number) {
    // Bounds check
    if (this.x < -10 || this.x > width + 10 || this.y < -10 || this.y > height + 10) return;

    const perspective = 600 / (this.z || 0.1);
    const s = Math.max(0.1, this.size * perspective);
    const alpha = Math.min(1, (1000 - this.z) / 200) * this.opacity;

    ctx.globalAlpha = alpha;
    ctx.fillStyle = this.baseColor;
    
    ctx.beginPath();
    ctx.arc(this.x, this.y, s, 0, Math.PI * 2);
    ctx.fill();
  }
}

const SpaceBackground: React.FC<SpaceBackgroundProps> = ({ theme }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const themeRef = useRef(theme);

  useEffect(() => {
    themeRef.current = theme;
  }, [theme]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    // Alpha: false is a huge performance boost for browsers
    const ctx = canvas.getContext('2d', { alpha: false }); 
    if (!ctx) return;

    let animationFrameId: number;
    let particles: GalaxyParticle[] = [];
    
    // DRASTICALLY REDUCED PARTICLE COUNT
    // Mobile: 60 particles is enough for the effect without lag
    const isMobile = window.innerWidth < 768;
    const particleCount = isMobile ? 60 : 200; 

    const init = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push(new GalaxyParticle(canvas, true, themeRef.current));
      }
    };

    const draw = () => {
      const w = canvas.width;
      const h = canvas.height;
      const cx = w / 2;
      const cy = h / 2;
      const currentTheme = themeRef.current;

      // Clear Screen with Solid Color (Fastest)
      ctx.fillStyle = currentTheme === 'light' ? '#eef2f6' : '#02040a';
      ctx.fillRect(0, 0, w, h);

      // Simple Gradient Center (No heavy calculations per frame)
      const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, w * 0.7);
      if (currentTheme === 'light') {
          grad.addColorStop(0, 'rgba(255, 255, 255, 0.8)');
          grad.addColorStop(1, 'rgba(255, 255, 255, 0)');
      } else {
          grad.addColorStop(0, 'rgba(15, 20, 40, 1)'); 
          grad.addColorStop(1, 'rgba(2, 4, 10, 0)');
      }
      ctx.globalAlpha = 0.5; // Fixed alpha
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, w, h);

      // Draw Particles
      particles.forEach(p => {
        p.update(w, h, cx, cy);
        p.draw(ctx, w, h);
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    let resizeTimeout: ReturnType<typeof setTimeout>;
    const handleResize = () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(init, 300);
    }

    init();
    draw();

    window.addEventListener('resize', handleResize);
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Re-init on theme change handled internally via ref or reload

  return (
    <div className="absolute inset-0 z-0 pointer-events-none transition-colors duration-700 transform-gpu">
      <canvas ref={canvasRef} className="block w-full h-full" />
      {/* Static noise overlay instead of generated one for performance */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay"
        style={{ backgroundImage: `url('https://grainy-gradients.vercel.app/noise.svg')` }}
      ></div>
    </div>
  );
};

export default React.memo(SpaceBackground);
