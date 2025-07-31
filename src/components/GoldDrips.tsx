import React from 'react';

export const GoldDrips: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 85 }}>
      {[...Array(40)].map((_, i) => (
        <div
          key={`drip-${i}`}
          className="absolute"
          style={{
            left: `${Math.random() * 100}%`,
            top: '-10px',
            animation: `goldDrip ${15 + Math.random() * 25}s infinite linear`,
            animationDelay: `${Math.random() * 40}s`
          }}
        >
          <div 
            className="bg-gradient-to-b from-amber-400 via-yellow-500 to-amber-600 rounded-full"
            style={{
              width: `${3 + Math.random() * 4}px`,
              height: `${20 + Math.random() * 30}px`,
              opacity: 0.6,
              boxShadow: '0 0 8px rgba(255, 215, 0, 0.8)',
              borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%'
            }}
          />
        </div>
      ))}
      
      <style jsx>{`
        @keyframes goldDrip {
          0% {
            transform: translateY(-20px);
            opacity: 0;
          }
          10% {
            opacity: 0.6;
          }
          90% {
            opacity: 0.6;
          }
          100% {
            transform: translateY(calc(100vh + 50px));
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};