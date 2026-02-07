import { useEffect, useRef } from 'react';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';

interface TrailHeart {
  x: number;
  y: number;
  size: number;
  opacity: number;
  life: number;
}

export default function PointerHeartTrail() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const heartsRef = useRef<TrailHeart[]>([]);
  const lastPositionRef = useRef({ x: 0, y: 0, time: 0 });
  const animationFrameRef = useRef<number | undefined>(undefined);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const handlePointerMove = (e: PointerEvent) => {
      const now = Date.now();
      const timeSinceLastHeart = now - lastPositionRef.current.time;
      
      if (timeSinceLastHeart > 50) {
        heartsRef.current.push({
          x: e.clientX,
          y: e.clientY,
          size: 8 + Math.random() * 8,
          opacity: 0.8,
          life: 1
        });
        lastPositionRef.current = { x: e.clientX, y: e.clientY, time: now };
      }
    };

    const drawHeart = (heart: TrailHeart) => {
      ctx.save();
      ctx.globalAlpha = heart.opacity * heart.life;
      ctx.fillStyle = '#ff4081';
      
      const size = heart.size;
      const x = heart.x;
      const y = heart.y;
      
      ctx.beginPath();
      const topCurveHeight = size * 0.3;
      ctx.moveTo(x, y + topCurveHeight);
      ctx.bezierCurveTo(x, y, x - size / 2, y, x - size / 2, y + topCurveHeight);
      ctx.bezierCurveTo(x - size / 2, y + (size + topCurveHeight) / 2, x, y + (size + topCurveHeight) / 1.2, x, y + size);
      ctx.bezierCurveTo(x, y + (size + topCurveHeight) / 1.2, x + size / 2, y + (size + topCurveHeight) / 2, x + size / 2, y + topCurveHeight);
      ctx.bezierCurveTo(x + size / 2, y, x, y, x, y + topCurveHeight);
      ctx.closePath();
      ctx.fill();
      
      ctx.restore();
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      heartsRef.current = heartsRef.current.filter((heart) => {
        drawHeart(heart);
        heart.life -= 0.02;
        heart.y -= 0.5;
        return heart.life > 0;
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener('pointermove', handlePointerMove);
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('pointermove', handlePointerMove);
      if (animationFrameRef.current !== undefined) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [prefersReducedMotion]);

  if (prefersReducedMotion) return null;

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[5]"
    />
  );
}
