import React from 'react';

const LuxuryBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0">
      {/* Velvet Background */}
      <div 
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse at center, rgba(139, 69, 19, 0.2) 0%, rgba(8, 8, 8, 1) 100%),
            url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" opacity="0.05"><path d="M50 0 L100 50 L50 100 L0 50 Z" fill="%23D4AF37"/></svg>')
          `
        }}
      />
    </div>
  );
};

export default LuxuryBackground;