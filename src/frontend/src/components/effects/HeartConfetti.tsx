import { useEffect, useRef } from 'react';

interface Confetti {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  rotation: number;
  rotationSpeed: number;
  color: string;
}

const COLORS = ['#ff1744', '#ff4081', '#ff6b9d', '#ffc1e3', '#ff80ab'];

export default function HeartConfetti() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const confetti: Confetti[] = Array.from({ length: 80 }, () => ({
      x: Math.random() * canvas.width,
      y: -20 - Math.random() * 100,
      vx: (Math.random() - 0.5) * 4,
      vy: Math.random() * 3 + 2,
      size: 10 + Math.random() * 15,
      rotation: Math.random() * Math.PI * 2,
      rotationSpeed: (Math.random() - 0.5) * 0.3,
      color: COLORS[Math.floor(Math.random() * COLORS.length)]
    }));

    const drawHeart = (conf: Confetti) => {
      ctx.save();
      ctx.translate(conf.x, conf.y);
      ctx.rotate(conf.rotation);
      ctx.fillStyle = conf.color;
      
      const size = conf.size;
      ctx.beginPath();
      const topCurveHeight = size * 0.3;
      ctx.moveTo(0, topCurveHeight);
      ctx.bezierCurveTo(0, 0, -size / 2, 0, -size / 2, topCurveHeight);
      ctx.bezierCurveTo(-size / 2, (size + topCurveHeight) / 2, 0, (size + topCurveHeight) / 1.2, 0, size);
      ctx.bezierCurveTo(0, (size + topCurveHeight) / 1.2, size / 2, (size + topCurveHeight) / 2, size / 2, topCurveHeight);
      ctx.bezierCurveTo(size / 2, 0, 0, 0, 0, topCurveHeight);
      ctx.closePath();
      ctx.fill();
      
      ctx.restore();
    };

    let frame = 0;
    const maxFrames = 180;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      confetti.forEach((conf) => {
        drawHeart(conf);

        conf.x += conf.vx;
        conf.y += conf.vy;
        conf.vy += 0.1; // gravity
        conf.rotation += conf.rotationSpeed;
      });

      frame++;

      if (frame < maxFrames) {
        requestAnimationFrame(animate);
      }
    };

    animate();
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-50"
    />
  );
}
