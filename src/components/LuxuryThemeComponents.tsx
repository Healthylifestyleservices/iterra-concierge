import React from 'react';
import { useFamousAITheme } from './FamousAIThemeProvider';

interface LuxuryButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'gold' | 'bronze' | 'rosegold';
  className?: string;
}

export const LuxuryButton: React.FC<LuxuryButtonProps> = ({ 
  children, 
  onClick, 
  variant = 'gold',
  className = '' 
}) => {
  const theme = useFamousAITheme();
  const color = theme.colors[variant];
  
  return (
    <button
      onClick={onClick}
      className={`
        px-6 py-3 rounded-lg font-semibold text-white
        transition-all duration-300 transform hover:scale-105
        shadow-lg hover:shadow-xl
        ${className}
      `}
      style={{
        background: `linear-gradient(135deg, ${color}, ${adjustBrightness(color, -20)})`,
        boxShadow: `0 4px 15px ${color}33`
      }}
    >
      {children}
    </button>
  );
};

interface LuxuryCardProps {
  children: React.ReactNode;
  className?: string;
}

export const LuxuryCard: React.FC<LuxuryCardProps> = ({ children, className = '' }) => {
  const theme = useFamousAITheme();
  
  return (
    <div
      className={`
        p-6 rounded-xl backdrop-blur-sm
        border border-opacity-20 border-white
        shadow-2xl hover:shadow-3xl transition-all duration-300
        ${className}
      `}
      style={{
        background: `
          radial-gradient(ellipse at center, rgba(43, 32, 22, 0.4) 0%, rgba(11, 10, 10, 0.9) 100%),
          linear-gradient(15deg, transparent 0%, ${theme.colors.gold}08 100%)
        `,
        backdropFilter: 'blur(10px)'
      }}
    >
      {children}
    </div>
  );
};

interface SacredGeometryBackgroundProps {
  children: React.ReactNode;
  pattern?: 'flower-of-life' | 'seed-of-life';
}

export const SacredGeometryBackground: React.FC<SacredGeometryBackgroundProps> = ({ 
  children, 
  pattern = 'flower-of-life' 
}) => {
  const theme = useFamousAITheme();
  
  return (
    <div
      className="relative min-h-screen overflow-hidden"
      style={{
        background: `
          radial-gradient(circle at 20% 80%, ${theme.colors.bronze}15 0%, transparent 50%),
          radial-gradient(circle at 80% 20%, ${theme.colors.rosegold}15 0%, transparent 50%),
          radial-gradient(circle at 40% 40%, ${theme.colors.gold}10 0%, transparent 50%),
          linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)
        `
      }}
    >
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url(/geometry/${pattern}.svg)`,
          backgroundSize: '200px 200px',
          backgroundRepeat: 'repeat'
        }}
      />
      {children}
    </div>
  );
};

// Helper function to adjust color brightness
function adjustBrightness(hex: string, percent: number): string {
  const num = parseInt(hex.replace('#', ''), 16);
  const amt = Math.round(2.55 * percent);
  const R = (num >> 16) + amt;
  const G = (num >> 8 & 0x00FF) + amt;
  const B = (num & 0x0000FF) + amt;
  return '#' + (0x1000000 + (R < 255 ? R < 1 ? 0 : R : 255) * 0x10000 +
    (G < 255 ? G < 1 ? 0 : G : 255) * 0x100 +
    (B < 255 ? B < 1 ? 0 : B : 255)).toString(16).slice(1);
}