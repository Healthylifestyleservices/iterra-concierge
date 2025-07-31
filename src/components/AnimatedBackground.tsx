import React from 'react';
import ParticleBackground from './ParticleBackground';
import SacredGeometryOverlay from './SacredGeometryOverlay';

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden">
      {/* Base gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-amber-950/20 to-black" />
      
      {/* Particle system */}
      <ParticleBackground />
      
      {/* Sacred geometry overlay */}
      <SacredGeometryOverlay />
      
      {/* Floating orbs */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/5 w-32 h-32 bg-yellow-400/10 rounded-full blur-xl animate-float-slow" />
        <div className="absolute bottom-1/3 right-1/5 w-24 h-24 bg-amber-400/15 rounded-full blur-xl animate-float-medium" />
        <div className="absolute top-2/3 left-2/3 w-20 h-20 bg-orange-400/10 rounded-full blur-xl animate-float-fast" />
        <div className="absolute bottom-1/4 left-1/3 w-28 h-28 bg-yellow-300/8 rounded-full blur-xl animate-float-slow" />
      </div>
      
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 opacity-30 bg-gradient-to-t from-transparent via-amber-900/5 to-transparent" />
    </div>
  );
};

export default AnimatedBackground;