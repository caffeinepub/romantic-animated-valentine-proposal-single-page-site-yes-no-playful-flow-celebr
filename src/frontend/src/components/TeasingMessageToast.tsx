interface TeasingMessageToastProps {
  message: string;
  position?: 'center' | 'top';
}

export default function TeasingMessageToast({ message, position = 'center' }: TeasingMessageToastProps) {
  return (
    <div 
      className={`fixed left-1/2 -translate-x-1/2 z-50 pointer-events-none ${
        position === 'top' ? 'top-20' : 'top-1/3'
      }`}
    >
      <div className="bg-white/95 backdrop-blur-sm text-romantic-primary px-8 py-4 rounded-full shadow-2xl border-2 border-romantic-primary/30 animate-bounce-in">
        <p className="text-xl md:text-2xl font-bold text-center whitespace-nowrap">
          {message}
        </p>
      </div>
    </div>
  );
}
