import React from 'react';

interface PearlLuxuryButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const PearlLuxuryButton: React.FC<PearlLuxuryButtonProps> = ({
  children,
  onClick,
  size = 'md',
  className = ''
}) => {
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-8 py-4 text-base',
    lg: 'px-12 py-6 text-lg'
  };

  return (
    <button
      onClick={onClick}
      className={`
        ${sizeClasses[size]}
        relative overflow-hidden
        font-semibold tracking-wide
        text-amber-900/80
        rounded-xl
        transition-all duration-500 ease-out
        transform-gpu
        backdrop-blur-sm
        border border-white/30
        ${className}
      `}
      style={{
        background: `
          linear-gradient(135deg, 
            rgba(255, 255, 255, 0.9) 0%,
            rgba(255, 250, 240, 0.95) 25%,
            rgba(250, 240, 230, 0.9) 50%,
            rgba(245, 235, 220, 0.95) 75%,
            rgba(255, 255, 255, 0.9) 100%
          )
        `,
        boxShadow: `
          0 8px 32px rgba(255, 255, 255, 0.3),
          0 4px 16px rgba(245, 235, 220, 0.4),
          inset 0 1px 0 rgba(255, 255, 255, 0.8),
          inset 0 -1px 0 rgba(245, 235, 220, 0.3)
        `
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-2px) scale(1.02)';
        e.currentTarget.style.boxShadow = `
          0 12px 48px rgba(255, 255, 255, 0.4),
          0 6px 24px rgba(245, 235, 220, 0.5),
          inset 0 1px 0 rgba(255, 255, 255, 0.9),
          inset 0 -1px 0 rgba(245, 235, 220, 0.4)
        `;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0) scale(1)';
        e.currentTarget.style.boxShadow = `
          0 8px 32px rgba(255, 255, 255, 0.3),
          0 4px 16px rgba(245, 235, 220, 0.4),
          inset 0 1px 0 rgba(255, 255, 255, 0.8),
          inset 0 -1px 0 rgba(245, 235, 220, 0.3)
        `;
      }}
      onMouseDown={(e) => {
        e.currentTarget.style.transform = 'translateY(1px) scale(0.98)';
      }}
      onMouseUp={(e) => {
        e.currentTarget.style.transform = 'translateY(-2px) scale(1.02)';
      }}
    >
      {/* Pearl Shimmer Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
      
      {/* Content */}
      <span className="relative z-10 drop-shadow-sm">{children}</span>
    </button>
  );
};