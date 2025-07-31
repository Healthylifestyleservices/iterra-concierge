import React from 'react';

interface ChocolateTextureBackgroundProps {
  children: React.ReactNode;
  className?: string;
  intensity?: 'light' | 'medium' | 'dark';
}

const ChocolateTextureBackground: React.FC<ChocolateTextureBackgroundProps> = ({ 
  children, 
  className = '',
  intensity = 'medium'
}) => {
  const getIntensityColors = () => {
    switch (intensity) {
      case 'light':
        return {
          center: 'rgba(139, 69, 19, 0.6)',
          mid: 'rgba(101, 67, 33, 0.8)',
          outer: 'rgba(62, 39, 35, 0.9)'
        };
      case 'dark':
        return {
          center: 'rgba(62, 39, 35, 0.9)',
          mid: 'rgba(45, 26, 18, 0.95)',
          outer: 'rgba(10, 5, 3, 1)'
        };
      default:
        return {
          center: 'rgba(92, 51, 23, 0.8)',
          mid: 'rgba(62, 39, 35, 0.9)',
          outer: 'rgba(28, 16, 12, 0.98)'
        };
    }
  };

  const colors = getIntensityColors();

  return (
    <div 
      className={`relative min-h-screen ${className}`}
      style={{
        background: `
          radial-gradient(ellipse at center, 
            ${colors.center} 0%,
            ${colors.mid} 40%,
            ${colors.outer} 80%,
            rgba(15, 8, 6, 1) 100%
          )
        `
      }}
    >
      {/* Velvet shimmer layers */}
      <div 
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          background: `
            radial-gradient(circle at 25% 25%, rgba(160, 82, 45, 0.2) 0%, transparent 40%),
            radial-gradient(circle at 75% 75%, rgba(139, 69, 19, 0.15) 0%, transparent 40%)
          `
        }}
      />
      
      {/* Depth shadows */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          boxShadow: 'inset 0 0 150px rgba(0,0,0,0.8)'
        }}
      />
      
      {children}
    </div>
  );
};

export default ChocolateTextureBackground;