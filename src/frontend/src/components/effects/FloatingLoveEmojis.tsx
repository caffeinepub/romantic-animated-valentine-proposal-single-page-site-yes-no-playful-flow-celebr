import { useEffect, useState } from 'react';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';

const EMOJIS = ['💕', '💖', '💗', '💓', '💝', '💘', '❤️', '💞'];

interface Emoji {
  id: number;
  emoji: string;
  x: number;
  duration: number;
}

export default function FloatingLoveEmojis() {
  const [emojis, setEmojis] = useState<Emoji[]>([]);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return;

    let id = 0;
    const interval = setInterval(() => {
      if (Math.random() > 0.7) {
        const newEmoji: Emoji = {
          id: id++,
          emoji: EMOJIS[Math.floor(Math.random() * EMOJIS.length)],
          x: Math.random() * 100,
          duration: 4 + Math.random() * 3
        };
        
        setEmojis((prev) => [...prev, newEmoji]);
        
        setTimeout(() => {
          setEmojis((prev) => prev.filter((e) => e.id !== newEmoji.id));
        }, newEmoji.duration * 1000);
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [prefersReducedMotion]);

  if (prefersReducedMotion) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[3] overflow-hidden">
      {emojis.map((emoji) => (
        <div
          key={emoji.id}
          className="absolute text-4xl animate-float-up"
          style={{
            left: `${emoji.x}%`,
            bottom: '-50px',
            animationDuration: `${emoji.duration}s`
          }}
        >
          {emoji.emoji}
        </div>
      ))}
    </div>
  );
}
