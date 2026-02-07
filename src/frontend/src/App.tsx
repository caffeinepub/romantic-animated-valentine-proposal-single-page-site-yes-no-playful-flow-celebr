import { useState, useCallback, useRef, useEffect } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import ProposalScene from './scenes/ProposalScene';
import CelebrationScene from './scenes/CelebrationScene';
import FloatingHeartsBackground from './components/effects/FloatingHeartsBackground';
import SparkleOverlay from './components/effects/SparkleOverlay';
import HeartConfetti from './components/effects/HeartConfetti';
import PointerHeartTrail from './components/effects/PointerHeartTrail';
import FloatingLoveEmojis from './components/effects/FloatingLoveEmojis';
import MusicControls from './components/audio/MusicControls';
import { usePrefersReducedMotion } from './hooks/usePrefersReducedMotion';

type Scene = 'proposal' | 'celebration';

function AppContent() {
  const [scene, setScene] = useState<Scene>('proposal');
  const [showConfetti, setShowConfetti] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();

  const handleYesClick = useCallback(() => {
    setShowConfetti(true);
    setIsTransitioning(true);
    
    setTimeout(() => {
      setScene('celebration');
      setIsTransitioning(false);
    }, 1500);
  }, []);

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-romantic-light via-romantic-medium to-romantic-deep">
      {/* Background layers */}
      <FloatingHeartsBackground />
      <SparkleOverlay />
      
      {/* Ambient effects */}
      {!prefersReducedMotion && (
        <>
          <PointerHeartTrail />
          <FloatingLoveEmojis />
        </>
      )}
      
      {/* Confetti effect */}
      {showConfetti && <HeartConfetti />}
      
      {/* Music controls */}
      <MusicControls />
      
      {/* Scene content */}
      <div className={`relative z-10 transition-opacity duration-1000 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
        {scene === 'proposal' && <ProposalScene onYesClick={handleYesClick} />}
        {scene === 'celebration' && <CelebrationScene />}
      </div>
    </div>
  );
}

export default function App() {
  return <AppContent />;
}
