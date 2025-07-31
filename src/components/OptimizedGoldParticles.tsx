import React from 'react';

const OptimizedGoldParticles: React.FC = () => {
  return (
    <>
      {/* Layer 1 - 2000 particles, z-100 */}
      <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 100 }}>
        {[...Array(2000)].map((_, i) => (
          <div
            key={`gold-1-${i}`}
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
                width: '2px',
                height: '2px',
                opacity: 0.6,
                boxShadow: '0 0 4px rgba(255, 215, 0, 0.8)'
              }}
            />
          </div>
        ))}
      </div>

      {/* Layer 2 - 1800 particles, z-99 */}
      <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 99 }}>
        {[...Array(1800)].map((_, i) => (
          <div
            key={`gold-2-${i}`}
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
                width: '1.5px',
                height: '1.5px',
                opacity: 0.5,
                boxShadow: '0 0 3px rgba(255, 215, 0, 0.8)'
              }}
            />
          </div>
        ))}
      </div>

      {/* Layer 3 - 1700 particles, z-98 */}
      <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 98 }}>
        {[...Array(1700)].map((_, i) => (
          <div
            key={`gold-3-${i}`}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `goldTwinkle ${12 + Math.random() * 18}s infinite ease-in-out`,
              animationDelay: `${Math.random() * 30}s`
            }}
          >
            <div 
              className="bg-amber-300 rounded-full"
              style={{
                width: '1px',
                height: '1px',
                opacity: 0.4,
                boxShadow: '0 0 2px rgba(255, 215, 0, 0.8)'
              }}
            />
          </div>
        ))}
      </div>

      {/* Layer 4 - 1900 particles, z-97 */}
      <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 97 }}>
        {[...Array(1900)].map((_, i) => (
          <div
            key={`gold-4-${i}`}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `goldGlow ${6 + Math.random() * 10}s infinite ease-in-out`,
              animationDelay: `${Math.random() * 15}s`
            }}
          >
            <div 
              className="bg-yellow-300 rounded-full"
              style={{
                width: '2.5px',
                height: '2.5px',
                opacity: 0.3,
                boxShadow: '0 0 5px rgba(255, 215, 0, 0.8)'
              }}
            />
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes goldFloat {
          0% { opacity: 0.2; transform: translateY(0px) translateX(0px) scale(0.8); }
          50% { opacity: 0.6; transform: translateY(-20px) translateX(15px) scale(1.2); }
          100% { opacity: 0.2; transform: translateY(0px) translateX(0px) scale(0.8); }
        }
        @keyframes goldShimmer {
          0% { opacity: 0.3; transform: translateY(0px) translateX(0px) rotate(0deg); }
          50% { opacity: 0.5; transform: translateY(-15px) translateX(-10px) rotate(180deg); }
          100% { opacity: 0.3; transform: translateY(0px) translateX(0px) rotate(360deg); }
        }
        @keyframes goldTwinkle {
          0% { opacity: 0.1; transform: scale(0.5) translateY(0px); }
          50% { opacity: 0.4; transform: scale(1.5) translateY(-25px); }
          100% { opacity: 0.1; transform: scale(0.5) translateY(0px); }
        }
        @keyframes goldGlow {
          0%, 100% { opacity: 0.2; transform: scale(0.7); }
          25% { opacity: 0.6; transform: scale(1.3); }
          75% { opacity: 0.4; transform: scale(1.0); }
        }
      `}</style>
    </>
  );
};

export default OptimizedGoldParticles;