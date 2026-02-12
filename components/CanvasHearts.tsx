'use client';

import { useEffect, useRef } from 'react';

type Heart = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  life: number;
  ttl: number;
  rotation: number;
  spin: number;
  alpha: number;
};

type CanvasHeartsProps = {
  className?: string;
  mode?: 'ambient' | 'burst';
};

function drawHeart(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  size: number,
  rotation: number,
  alpha: number,
) {
  ctx.save();
  ctx.translate(x, y);
  ctx.rotate(rotation);
  ctx.scale(size, size);
  ctx.beginPath();
  ctx.moveTo(0, 0.3);
  ctx.bezierCurveTo(0, -0.3, -0.5, -0.3, -0.5, 0.1);
  ctx.bezierCurveTo(-0.5, 0.5, 0, 0.75, 0, 1);
  ctx.bezierCurveTo(0, 0.75, 0.5, 0.5, 0.5, 0.1);
  ctx.bezierCurveTo(0.5, -0.3, 0, -0.3, 0, 0.3);
  ctx.closePath();
  ctx.fillStyle = `rgba(245, 169, 196, ${alpha})`;
  ctx.fill();
  ctx.restore();
}

export function CanvasHearts({ className = '', mode = 'ambient' }: CanvasHeartsProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const hearts: Heart[] = [];
    let width = window.innerWidth;
    let height = window.innerHeight;
    let raf = 0;
    let burstInterval = 0;

    const setSize = () => {
      const dpr = window.devicePixelRatio || 1;
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const spawnAmbient = () => {
      hearts.push({
        x: Math.random() * width,
        y: height + 20,
        vx: (Math.random() - 0.5) * 0.5,
        vy: -(0.7 + Math.random() * 0.8),
        size: 8 + Math.random() * 10,
        life: 0,
        ttl: 280 + Math.random() * 120,
        rotation: Math.random() * Math.PI,
        spin: (Math.random() - 0.5) * 0.02,
        alpha: 0.2 + Math.random() * 0.35,
      });
    };

    const spawnBurst = (count: number) => {
      for (let i = 0; i < count; i += 1) {
        const angle = Math.random() * Math.PI * 2;
        const speed = 1.5 + Math.random() * 3.6;
        hearts.push({
          x: width / 2,
          y: height / 2,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          size: 10 + Math.random() * 14,
          life: 0,
          ttl: 90 + Math.random() * 70,
          rotation: angle,
          spin: (Math.random() - 0.5) * 0.08,
          alpha: 0.4 + Math.random() * 0.4,
        });
      }
    };

    const tick = () => {
      ctx.clearRect(0, 0, width, height);

      if (mode === 'ambient' && hearts.length < 35 && Math.random() > 0.55) {
        spawnAmbient();
      }

      for (let i = hearts.length - 1; i >= 0; i -= 1) {
        const heart = hearts[i];
        heart.life += 1;
        heart.x += heart.vx;
        heart.y += heart.vy;
        heart.rotation += heart.spin;

        if (mode === 'ambient') {
          heart.vx += Math.sin(heart.life * 0.03) * 0.002;
        } else {
          heart.vy += 0.03;
        }

        const lifeProgress = heart.life / heart.ttl;
        const alpha = Math.max(0, heart.alpha * (1 - lifeProgress));
        drawHeart(ctx, heart.x, heart.y, heart.size, heart.rotation, alpha);

        if (heart.life > heart.ttl) {
          hearts.splice(i, 1);
        }
      }

      raf = window.requestAnimationFrame(tick);
    };

    setSize();
    if (mode === 'burst') {
      spawnBurst(90);
      burstInterval = window.setInterval(() => spawnBurst(70), 2800);
    }

    window.addEventListener('resize', setSize);
    raf = window.requestAnimationFrame(tick);

    return () => {
      window.cancelAnimationFrame(raf);
      window.removeEventListener('resize', setSize);
      window.clearInterval(burstInterval);
    };
  }, [mode]);

  return (
    <canvas
      ref={canvasRef}
      className={`pointer-events-none absolute inset-0 ${className}`}
      aria-hidden="true"
    />
  );
}
