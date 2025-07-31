import React from 'react';

interface DarkChocolateVelvetBackgroundProps {
  children: React.ReactNode;
  className?: string;
}

const DarkChocolateVelvetBackground: React.FC<DarkChocolateVelvetBackgroundProps> = ({ 
  children, 
  className = '' 
}) => {
  const backgroundStyle = {
    background: `
      radial-gradient(ellipse at center, 
        rgba(92, 51, 23, 0.8) 0%,
        rgba(62, 39, 35, 0.9) 25%,
        rgba(45, 26, 18, 0.95) 50%,
        rgba(28, 16, 12, 0.98) 75%,
        rgba(15, 8, 6, 1) 100%
      ),
      linear-gradient(135deg, 
        rgba(139, 69, 19, 0.1) 0%,
        transparent 50%,
        rgba(101, 67, 33, 0.08) 100%
      )
    `,
    minHeight: '100vh',
    position: 'relative' as const,
    overflow: 'hidden' as const
  };

  return (
    <div 
      className={`${className}`}
      style={backgroundStyle}
    >
      {/* Velvet texture overlay */}
      <div 
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          background: `
            radial-gradient(circle at 20% 80%, rgba(139, 69, 19, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(160, 82, 45, 0.2) 0%, transparent 50%),
            radial-gradient(circle at 40% 40%, rgba(101, 67, 33, 0.15) 0%, transparent 60%)
          `
        }}
      />
      
      {/* Dimensional depth shadows */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          boxShadow: `
            inset 0 0 200px rgba(0,0,0,0.7),
            inset 0 0 100px rgba(15, 8, 6, 0.8),
            inset 0 0 50px rgba(28, 16, 12, 0.6)
          `
        }}
      />
      
      {/* Subtle pattern for texture */}
      <div 
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60"><circle cx="30" cy="30" r="20" stroke="%23A0522D" stroke-width="0.5" fill="none"/><circle cx="30" cy="30" r="10" stroke="%23D2691E" stroke-width="0.3" fill="none"/></svg>')`,
          backgroundSize: '60px 60px'
        }}
      />
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default DarkChocolateVelvetBackground;