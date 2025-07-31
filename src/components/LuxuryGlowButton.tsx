import React from 'react';
import { Button } from './ui/button';

interface LuxuryGlowButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'gold' | 'rosegold' | 'bronze';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const LuxuryGlowButton: React.FC<LuxuryGlowButtonProps> = ({
  children,
  onClick,
  variant = 'gold',
  size = 'md',
  className = ''
}) => {
  const variantStyles = {
    gold: {
      background: 'linear-gradient(135deg, #D4AF37 0%, #FFD700 50%, #B8860B 100%)',
      boxShadow: '0 0 20px rgba(212, 175, 55, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
      border: '1px solid rgba(212, 175, 55, 0.8)'
    },
    rosegold: {
      background: 'linear-gradient(135deg, #B76E79 0%, #E6B8A2 50%, #D4A574 100%)',
      boxShadow: '0 0 20px rgba(183, 110, 121, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
      border: '1px solid rgba(183, 110, 121, 0.8)'
    },
    bronze: {
      background: 'linear-gradient(135deg, #CD7F32 0%, #B87333 50%, #A0522D 100%)',
      boxShadow: '0 0 20px rgba(205, 127, 50, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
      border: '1px solid rgba(205, 127, 50, 0.8)'
    }
  };

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  return (
    <Button
      onClick={onClick}
      className={`
        ${sizeClasses[size]}
        font-semibold text-black
        rounded-lg
        transition-all duration-300
        hover:scale-105
        hover:brightness-110
        active:scale-95
        relative
        overflow-hidden
        ${className}
      `}
      style={variantStyles[variant]}
    >
      {/* Shimmer effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full hover:translate-x-full transition-transform duration-1000" />
      
      <span className="relative z-10">{children}</span>
    </Button>
  );
};

export default LuxuryGlowButton;