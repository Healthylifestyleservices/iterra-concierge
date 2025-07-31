import React from 'react';

export default function ParticleBackground() {
  // Simple fallback without external dependencies
  const particles = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    opacity: Math.random() * 0.6 + 0.1,
    color: ['#F7E7CE', '#E6D3B7', '#D4AF37', '#F5F5DC'][Math.floor(Math.random() * 4)]
  }));

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        pointerEvents: 'none',
      }}
    >
      {particles.map(particle => (
        <div
          key={particle.id}
          style={{
            position: 'absolute',
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            backgroundColor: particle.color,
            borderRadius: '50%',
            opacity: particle.opacity,
            animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
          }}
        />
      ))}
      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0px) translateX(0px); }
            25% { transform: translateY(-10px) translateX(5px); }
            50% { transform: translateY(5px) translateX(-5px); }
            75% { transform: translateY(-5px) translateX(10px); }
          }
        `}
      </style>
    </div>
  );
}