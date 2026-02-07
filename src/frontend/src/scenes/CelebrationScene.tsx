export default function CelebrationScene() {
  return (
    <div className="relative flex min-h-screen items-center justify-center p-4">
      <div className="text-center space-y-12 max-w-3xl mx-auto">
        {/* Top text */}
        <h1 className="text-4xl md:text-6xl font-cursive text-romantic-text animate-float-gentle drop-shadow-romantic">
          She said YES 💍❤️
        </h1>
        
        {/* Photo with glowing border */}
        <div className="flex justify-center animate-zoom-breathe">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-romantic-glow-1 via-romantic-glow-2 to-romantic-glow-3 blur-xl animate-pulse-glow-slow opacity-75"></div>
            <div className="relative rounded-full overflow-hidden border-4 border-white shadow-2xl w-64 h-64 md:w-80 md:h-80">
              <img 
                src="/assets/generated/valentine-photo-placeholder.dim_1024x1024.png" 
                alt="Our photo"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        
        {/* Bottom text */}
        <p className="text-3xl md:text-5xl font-cursive text-romantic-text animate-fade-in-delayed drop-shadow-romantic">
          My forever Valentine 💕
        </p>
      </div>
    </div>
  );
}
