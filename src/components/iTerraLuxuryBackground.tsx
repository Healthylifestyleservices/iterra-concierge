import React from 'react';

export const iTerraLuxuryBackground: React.FC = () => {
  return (
    <>
      {/* Volcanic Stone Underlay */}
      <div className="absolute inset-0 bg-[#0D0D0D] opacity-90" />
      
      {/* Subterranean Amber Glow */}
      <div className="absolute inset-0 bg-gradient-radial from-amber-400/20 via-transparent to-transparent" />
      
      {/* Additional Ambient Lighting */}
      <div className="absolute inset-0 bg-gradient-to-br from-stone-900/50 via-neutral-900/30 to-black/80" />
      
      {/* Brushed Metal Accents - Top */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#C5A880] to-transparent opacity-60" />
      
      {/* Brushed Metal Accents - Bottom */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#C5A880] to-transparent opacity-60" />
      
      {/* Side Accents */}
      <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-transparent via-[#C5A880]/40 to-transparent opacity-40" />
      <div className="absolute right-0 top-0 w-1 h-full bg-gradient-to-b from-transparent via-[#C5A880]/40 to-transparent opacity-40" />
      
      {/* Subtle Texture Overlay */}
      <div className="absolute inset-0 opacity-5 bg-gradient-to-br from-stone-400 via-transparent to-stone-600" />
    </>
  );
};