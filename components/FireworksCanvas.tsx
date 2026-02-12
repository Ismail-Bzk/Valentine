'use client';

import { useEffect, useRef } from 'react';

type Spark = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  ttl: number;
  size: number;
  color: string;
};

type FireworksCanvasProps = {
  active: boolean;
};

export function FireworksCanvas({ active }: FireworksCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (!active) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const sparks: Spark[] = [];
    let width = window.innerWidth;
    let height = window.innerHeight;
    let raf = 0;
    let interval = 0;

    const palette = ['#f5a9c4', '#ffe6a7', '#ffd1dc', '#fff4ce', '#ffb6cf'];

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

    const burst = (x: number, y: number) => {
      const count = 80;

      for (let i = 0; i < count; i += 1) {
        const angle = (Math.PI * 2 * i) / count;
        const speed = 1 + Math.random() * 3.8;
        sparks.push({
          x,
          y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          life: 0,
          ttl: 70 + Math.random() * 40,
          size: 1.2 + Math.random() * 2.5,
          color: palette[Math.floor(Math.random() * palette.length)],
        });
      }
    };

    const tick = () => {
      ctx.fillStyle = 'rgba(7, 2, 11, 0.2)';
      ctx.fillRect(0, 0, width, height);

      for (let i = sparks.length - 1; i >= 0; i -= 1) {
        const spark = sparks[i];
        spark.life += 1;
        spark.x += spark.vx;
        spark.y += spark.vy;
        spark.vx *= 0.99;
        spark.vy = spark.vy * 0.99 + 0.025;

        const alpha = Math.max(0, 1 - spark.life / spark.ttl);
        ctx.fillStyle = spark.color;
        ctx.globalAlpha = alpha;
        ctx.beginPath();
        ctx.arc(spark.x, spark.y, spark.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 1;

        if (spark.life >= spark.ttl) {
          sparks.splice(i, 1);
        }
      }

      raf = window.requestAnimationFrame(tick);
    };

    setSize();
    burst(width * 0.5, height * 0.4);
    interval = window.setInterval(() => {
      burst(width * (0.2 + Math.random() * 0.6), height * (0.2 + Math.random() * 0.35));
    }, 1200);

    window.addEventListener('resize', setSize);
    raf = window.requestAnimationFrame(tick);

    return () => {
      window.cancelAnimationFrame(raf);
      window.clearInterval(interval);
      window.removeEventListener('resize', setSize);
    };
  }, [active]);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0"
      aria-hidden="true"
    />
  );
}
