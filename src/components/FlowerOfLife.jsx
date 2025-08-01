import React from 'react';

export default function FlowerOfLife() {
  return (
    <div className="absolute inset-0 opacity-20 pointer-events-none">
      <svg width="100%" height="100%" viewBox="0 0 1000 1000">
        <circle cx="500" cy="500" r="200" stroke="#D4AF37" strokeWidth="2" fill="none" />
      </svg>
    </div>
  );
}
