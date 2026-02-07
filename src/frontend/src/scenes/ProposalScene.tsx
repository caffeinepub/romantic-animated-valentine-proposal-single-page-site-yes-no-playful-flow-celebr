import { useState, useCallback, useRef } from 'react';
import { Button } from '@/components/ui/button';
import TeasingMessageToast from '@/components/TeasingMessageToast';
import HeartBurst from '@/components/effects/HeartBurst';

interface ProposalSceneProps {
  onYesClick: () => void;
}

const TEASING_MESSAGES = [
  "Wrong choice 😜",
  "Try again, my love ❤️",
  "Your heart knows the answer 💕",
  "You can't escape destiny 😌",
  "Come on, you know you want to 💖",
  "Don't be shy now 😊",
  "The answer is obvious 💗",
  "Your heart is saying yes 💓"
];

const GLOBAL_CLICK_MESSAGES = [
  "Nice try! But you need to click YES 💕",
  "The answer is right there 👆",
  "Only YES will work, my love 💖",
  "You know what to do 😘",
  "Click the glowing button 💗",
  "Your heart knows the way ❤️"
];

export default function ProposalScene({ onYesClick }: ProposalSceneProps) {
  const [noButtonStyle, setNoButtonStyle] = useState({ x: 0, y: 0, scale: 1, opacity: 1 });
  const [messageIndex, setMessageIndex] = useState(0);
  const [globalMessageIndex, setGlobalMessageIndex] = useState(0);
  const [showMessage, setShowMessage] = useState(false);
  const [showGlobalMessage, setShowGlobalMessage] = useState(false);
  const [heartBursts, setHeartBursts] = useState<Array<{ id: number; x: number; y: number }>>([]);
  const noButtonRef = useRef<HTMLButtonElement>(null);
  const yesButtonRef = useRef<HTMLButtonElement>(null);
  const sceneRef = useRef<HTMLDivElement>(null);
  const burstIdCounter = useRef(0);

  const handleNoClick = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    
    // Show teasing message
    setShowMessage(true);
    setMessageIndex((prev) => (prev + 1) % TEASING_MESSAGES.length);
    
    // Evasive behavior - move button randomly
    const maxX = window.innerWidth - 200;
    const maxY = window.innerHeight - 100;
    const randomX = Math.random() * maxX - maxX / 2;
    const randomY = Math.random() * maxY - maxY / 2;
    const randomScale = 0.7 + Math.random() * 0.5;
    
    setNoButtonStyle({
      x: randomX,
      y: randomY,
      scale: randomScale,
      opacity: Math.random() > 0.3 ? 1 : 0.3
    });
    
    setTimeout(() => setShowMessage(false), 3000);
  }, []);

  const handleGlobalClick = useCallback((e: React.MouseEvent) => {
    // Check if click is on YES button
    if (yesButtonRef.current?.contains(e.target as Node)) {
      return;
    }
    
    // Check if click is on NO button
    if (noButtonRef.current?.contains(e.target as Node)) {
      return;
    }
    
    // Show global message and heart burst
    setShowGlobalMessage(true);
    setGlobalMessageIndex((prev) => (prev + 1) % GLOBAL_CLICK_MESSAGES.length);
    
    const id = burstIdCounter.current++;
    setHeartBursts((prev) => [...prev, { id, x: e.clientX, y: e.clientY }]);
    
    setTimeout(() => setShowGlobalMessage(false), 2500);
    setTimeout(() => {
      setHeartBursts((prev) => prev.filter((burst) => burst.id !== id));
    }, 2000);
  }, []);

  return (
    <div 
      ref={sceneRef}
      className="relative flex min-h-screen items-center justify-center p-4"
      onClick={handleGlobalClick}
    >
      <div className="text-center space-y-8 max-w-2xl mx-auto pointer-events-none">
        {/* Main heading */}
        <h1 className="text-5xl md:text-7xl font-cursive text-romantic-text animate-float-gentle drop-shadow-romantic">
          Will you be my Valentine? ❤️
        </h1>
        
        {/* Subtext */}
        <p className="text-xl md:text-2xl font-body text-romantic-text-soft animate-fade-in-delayed">
          I choose you. Today, tomorrow, always.
        </p>
        
        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8 pointer-events-auto">
          {/* YES Button */}
          <Button
            ref={yesButtonRef}
            onClick={onYesClick}
            size="lg"
            className="text-2xl px-12 py-8 bg-romantic-primary hover:bg-romantic-primary-hover text-white font-bold rounded-full shadow-glow-romantic animate-pulse-glow transition-all duration-300 hover:scale-110"
          >
            YES 💖
          </Button>
          
          {/* NO Button */}
          <Button
            ref={noButtonRef}
            onClick={handleNoClick}
            variant="outline"
            size="lg"
            className="text-xl px-10 py-6 border-2 border-romantic-border text-romantic-text-muted rounded-full transition-all duration-300 hover:bg-romantic-secondary"
            style={{
              transform: `translate(${noButtonStyle.x}px, ${noButtonStyle.y}px) scale(${noButtonStyle.scale})`,
              opacity: noButtonStyle.opacity,
              transition: 'transform 0.5s ease-out, opacity 0.3s ease-out'
            }}
          >
            NO 💔
          </Button>
        </div>
      </div>
      
      {/* Teasing message toast */}
      {showMessage && (
        <TeasingMessageToast message={TEASING_MESSAGES[messageIndex]} />
      )}
      
      {/* Global click message */}
      {showGlobalMessage && (
        <TeasingMessageToast 
          message={GLOBAL_CLICK_MESSAGES[globalMessageIndex]} 
          position="top"
        />
      )}
      
      {/* Heart bursts */}
      {heartBursts.map((burst) => (
        <HeartBurst key={burst.id} x={burst.x} y={burst.y} />
      ))}
    </div>
  );
}
