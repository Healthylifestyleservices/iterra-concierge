import React from 'react';

export const OptimizedGoldParticlesLayer2: React.FC = () => {
  return (
    <>
      {/* Layer 5 - 1800 particles, z-96 */}
      <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 96 }}>
        {[...Array(1800)].map((_, i) => (
          <div
            key={`gold-5-${i}`}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `goldFloat ${8 + Math.random() * 12}s infinite ease-in-out`,
              animationDelay: `${Math.random() * 20}s`
            }}
          >
            <div 
              className="bg-amber-400 rounded-full"
              style={{
                width: '1.8px',
                height: '1.8px',
                opacity: 0.4,
                boxShadow: '0 0 3px rgba(255, 215, 0, 0.8)'
              }}
            />
          </div>
        ))}
      </div>

      {/* Layer 6 - 1600 particles, z-95 */}
      <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 95 }}>
        {[...Array(1600)].map((_, i) => (
          <div
            key={`gold-6-${i}`}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `goldShimmer ${10 + Math.random() * 15}s infinite ease-in-out`,
              animationDelay: `${Math.random() * 25}s`
            }}
          >
            <div 
              className="bg-yellow-400 rounded-full"
              style={{
                width: '1.3px',
                height: '1.3px',
                opacity: 0.3,
                boxShadow: '0 0 2px rgba(255, 215, 0, 0.8)'
              }}
            />
          </div>
        ))}
      </div>

      {/* Layer 7 - 1500 particles, z-94 */}
      <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 94 }}>
        {[...Array(1500)].map((_, i) => (
          <div
            key={`gold-7-${i}`}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `goldTwinkle ${13 + Math.random() * 20}s infinite ease-in-out`,
              animationDelay: `${Math.random() * 35}s`
            }}
          >
            <div 
              className="bg-amber-200 rounded-full"
              style={{
                width: '0.8px',
                height: '0.8px',
                opacity: 0.2,
                boxShadow: '0 0 1px rgba(255, 215, 0, 0.8)'
              }}
            />
          </div>
        ))}
      </div>

      {/* Layer 8 - 1700 particles, z-93 */}
      <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 93 }}>
        {[...Array(1700)].map((_, i) => (
          <div
            key={`gold-8-${i}`}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `goldGlow ${7 + Math.random() * 12}s infinite ease-in-out`,
              animationDelay: `${Math.random() * 18}s`
            }}
          >
            <div 
              className="bg-yellow-200 rounded-full"
              style={{
                width: '2.2px',
                height: '2.2px',
                opacity: 0.25,
                boxShadow: '0 0 4px rgba(255, 215, 0, 0.8)'
              }}
            />
          </div>
        ))}
      </div>
    </>
  );
};