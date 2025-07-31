import React from 'react';
import VelvetObsidianBackground from './VelvetObsidianBackground';

interface FamousAIVelvetThemeProps {
  children: React.ReactNode;
}

const FamousAIVelvetTheme: React.FC<FamousAIVelvetThemeProps> = ({ children }) => {
  return (
    <VelvetObsidianBackground className="min-h-screen">
      {/* Rose gold foil accent bars */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-rose-400 to-transparent opacity-60" />
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent opacity-60" />
      
      {/* Sacred geometry overlay */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><circle cx="60" cy="60" r="50" stroke="%23D4AF37" stroke-width="1" fill="none"/><circle cx="60" cy="60" r="30" stroke="%23B76E79" stroke-width="0.8" fill="none"/><circle cx="60" cy="60" r="15" stroke="%23CD7F32" stroke-width="0.6" fill="none"/></svg>')`,
          backgroundSize: '120px 120px'
        }}
      />
      
      {/* Velvet texture with chocolate tones */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-900/20 via-rose-900/15 to-yellow-600/10 pointer-events-none" />
      
      {/* Content with glow effects */}
      <div className="relative z-20">
        {children}
      </div>
    </VelvetObsidianBackground>
  );
};

export default FamousAIVelvetTheme;