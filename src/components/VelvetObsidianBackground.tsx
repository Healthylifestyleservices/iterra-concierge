import React from 'react';

interface VelvetObsidianBackgroundProps {
  children: React.ReactNode;
  className?: string;
}

const VelvetObsidianBackground: React.FC<VelvetObsidianBackgroundProps> = ({ 
  children, 
  className = '' 
}) => {
  const backgroundStyle = {
    background: `
      radial-gradient(ellipse at top, rgba(139, 69, 19, 0.15) 0%, transparent 50%),
      radial-gradient(ellipse at bottom, rgba(72, 61, 139, 0.12) 0%, transparent 50%),
      linear-gradient(135deg, 
        rgba(25, 12, 8, 0.98) 0%,
        rgba(45, 20, 15, 0.96) 25%,
        rgba(58, 24, 24, 0.94) 50%,
        rgba(35, 15, 12, 0.97) 75%,
        rgba(18, 8, 6, 0.99) 100%
      ),
      url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><circle cx="60" cy="60" r="45" stroke="%23A0522D" stroke-width="0.3" fill="none" opacity="0.08"/><circle cx="60" cy="60" r="30" stroke="%23B8860B" stroke-width="0.2" fill="none" opacity="0.06"/></svg>')
    `,
    backgroundSize: 'cover, cover, cover, 200px 200px',
    boxShadow: `
      inset 0 0 150px rgba(0,0,0,0.8),
      inset 0 0 80px rgba(139, 69, 19, 0.1),
      inset 0 0 40px rgba(72, 61, 139, 0.08)
    `
  };

  return (
    <div 
      className={`relative ${className}`}
      style={backgroundStyle}
    >
      {/* Deep velvet texture layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-amber-950/15 to-red-950/20 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-tl from-purple-950/10 via-transparent to-amber-900/12 pointer-events-none" />
      
      {/* Garnet shimmer overlay */}
      <div 
        className="absolute inset-0 opacity-8 pointer-events-none"
        style={{
          background: `radial-gradient(circle at 30% 70%, rgba(139, 0, 0, 0.1) 0%, transparent 40%),
                      radial-gradient(circle at 70% 30%, rgba(160, 82, 45, 0.08) 0%, transparent 40%)`
        }}
      />
      
      {/* Sacred geometry pattern */}
      <div 
        className="absolute inset-0 opacity-4 pointer-events-none"
        style={{
          backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80"><polygon points="40,8 65,32 40,56 15,32" stroke="%23A0522D" stroke-width="0.4" fill="none"/><circle cx="40" cy="32" r="12" stroke="%23B8860B" stroke-width="0.3" fill="none"/></svg>')`,
          backgroundSize: '80px 80px'
        }}
      />
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default VelvetObsidianBackground;