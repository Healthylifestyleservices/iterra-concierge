import React from 'react';

interface HeaderProps {
  title?: string;
}

export const iTerraLuxuryHeader: React.FC<HeaderProps> = ({ 
  title = "iTERRA™ Lifestyle Concierge" 
}) => {
  return (
    <div className="relative z-10 pt-12 pb-8">
      {/* Ambient Glow Background */}
      <div className="absolute inset-0 bg-gradient-radial from-amber-400/10 via-transparent to-transparent" />
      
      {/* Main Header */}
      <div className="relative">
        <h1 className="
          text-center text-4xl md:text-6xl lg:text-7xl font-bold 
          text-[#F5EBD8] tracking-wider leading-tight
          drop-shadow-[0_0_20px_rgba(255,224,138,0.3)]
          font-serif
        ">
          {title}
        </h1>
        
        {/* Subtle Underline */}
        <div className="mt-4 mx-auto w-32 h-0.5 bg-gradient-to-r from-transparent via-[#C5A880] to-transparent opacity-60" />
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-1 h-8 bg-gradient-to-b from-[#C5A880] to-transparent opacity-40" />
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-1 h-8 bg-gradient-to-t from-[#C5A880] to-transparent opacity-40" />
    </div>
  );
};