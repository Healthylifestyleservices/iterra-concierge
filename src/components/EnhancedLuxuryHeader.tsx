import React from 'react';
import FlowerOfLife from './FlowerOfLife';

interface HeaderProps {
  title?: string;
}

export const EnhancedLuxuryHeader: React.FC<HeaderProps> = ({ 
  title = "iTERRA™ Lifestyle Concierge" 
}) => {
  return (
    <div className="relative z-10 pt-16 pb-12 overflow-hidden">
      {/* Spinning Sacred Geometry Background */}
      <div className="absolute inset-0 flex items-center justify-center">
        <FlowerOfLife />
      </div>

      {/* Gold Dust Sparkles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-gradient-to-r from-amber-200 to-yellow-100 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Shimmer Sheets */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer-slow" />
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-amber-100/10 to-transparent animate-shimmer-reverse" />
      </div>
      
      {/* Main Header */}
      <div className="relative z-20">
        <h1 className="
          text-center text-5xl md:text-7xl lg:text-8xl font-bold 
          bg-gradient-to-b from-white via-amber-50 to-amber-100
          bg-clip-text text-transparent
          tracking-wider leading-tight
          drop-shadow-[0_0_30px_rgba(255,255,255,0.4)]
          font-serif
          animate-glow-pulse
        ">
          iTERRA™
        </h1>
        
        <h2 className="
          text-center text-xl md:text-2xl lg:text-3xl font-light
          bg-gradient-to-b from-white via-amber-50 to-amber-100
          bg-clip-text text-transparent
          tracking-wide mt-2
          drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]
          font-serif
        ">
          Lifestyle Concierge
        </h2>
        
        {/* Elegant Underline */}
        <div className="mt-6 mx-auto w-48 h-0.5 bg-gradient-to-r from-transparent via-white/60 to-transparent" />
      </div>
    </div>
  );
};