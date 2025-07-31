import React from 'react';

export const GoldParticlesLayer2: React.FC = () => {
  return (
    <>
      {/* Layer 5 - 3000 particles */}
      <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 96 }}>
        {[...Array(3000)].map((_, i) => (
          <div
            key={`gold-5-${i}`}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `goldGlow ${14 + Math.random() * 20}s infinite ease-in-out`,
              animationDelay: `${Math.random() * 35}s`
            }}
          >
            <div 
              className="bg-amber-500 rounded-full"
              style={{
                width: '1.8px',
                height: '1.8px',
                opacity: 0.4,
                boxShadow: '0 0 6px rgba(255, 215, 0, 0.6)'
              }}
            />
          </div>
        ))}
      </div>

      {/* Layer 6 - 2000 particles */}
      <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 95 }}>
        {[...Array(2000)].map((_, i) => (
          <div
            key={`gold-6-${i}`}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `goldWave ${16 + Math.random() * 24}s infinite ease-in-out`,
              animationDelay: `${Math.random() * 40}s`
            }}
          >
            <div 
              className="bg-yellow-500 rounded-full"
              style={{
                width: '2.2px',
                height: '2.2px',
                opacity: 0.3,
                boxShadow: '0 0 7px rgba(255, 215, 0, 0.5)'
              }}
            />
          </div>
        ))}
      </div>

      {/* Layer 7 - 1500 particles */}
      <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 94 }}>
        {[...Array(1500)].map((_, i) => (
          <div
            key={`gold-7-${i}`}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `goldSpiral ${18 + Math.random() * 28}s infinite ease-in-out`,
              animationDelay: `${Math.random() * 45}s`
            }}
          >
            <div 
              className="bg-amber-600 rounded-full"
              style={{
                width: '1.3px',
                height: '1.3px',
                opacity: 0.5,
                boxShadow: '0 0 4px rgba(255, 215, 0, 0.7)'
              }}
            />
          </div>
        ))}
      </div>

      {/* Layer 8 - 1000 particles */}
      <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 93 }}>
        {[...Array(1000)].map((_, i) => (
          <div
            key={`gold-8-${i}`}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `goldDrift ${20 + Math.random() * 30}s infinite ease-in-out`,
              animationDelay: `${Math.random() * 50}s`
            }}
          >
            <div 
              className="bg-yellow-600 rounded-full"
              style={{
                width: '2.8px',
                height: '2.8px',
                opacity: 0.2,
                boxShadow: '0 0 8px rgba(255, 215, 0, 0.4)'
              }}
            />
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes goldGlow {
          0% { opacity: 0.2; transform: scale(0.6) translateY(0px) translateX(0px); }
          50% { opacity: 0.8; transform: scale(1.4) translateY(-30px) translateX(20px); }
          100% { opacity: 0.2; transform: scale(0.6) translateY(0px) translateX(0px); }
        }
        @keyframes goldWave {
          0% { opacity: 0.1; transform: translateY(0px) translateX(0px) rotate(0deg) scale(0.8); }
          50% { opacity: 0.6; transform: translateY(-35px) translateX(-25px) rotate(180deg) scale(1.6); }
          100% { opacity: 0.1; transform: translateY(0px) translateX(0px) rotate(360deg) scale(0.8); }
        }
        @keyframes goldSpiral {
          0% { opacity: 0.3; transform: rotate(0deg) translateX(0px) translateY(0px) scale(0.7); }
          50% { opacity: 0.7; transform: rotate(180deg) translateX(30px) translateY(-20px) scale(1.3); }
          100% { opacity: 0.3; transform: rotate(360deg) translateX(0px) translateY(0px) scale(0.7); }
        }
        @keyframes goldDrift {
          0% { opacity: 0.1; transform: translateY(0px) translateX(0px) scale(1.0); }
          50% { opacity: 0.5; transform: translateY(-40px) translateX(35px) scale(1.8); }
          100% { opacity: 0.1; transform: translateY(0px) translateX(0px) scale(1.0); }
        }
      `}</style>
    </>
  );
};