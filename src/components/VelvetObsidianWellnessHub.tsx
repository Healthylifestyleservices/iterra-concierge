import React from 'react';
import FlowerOfLife from './FlowerOfLife';

export const VelvetObsidianWellnessHub: React.FC = () => {
  return (
    <div className="min-h-screen relative overflow-hidden" style={{
      background: 'linear-gradient(135deg, #4A2C2A 0%, #3D1A1A 50%, #2D1010 100%)',
    }}>
      {/* Original Flower of Life */}
      <FlowerOfLife />

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-8">
        <div className="text-center mb-12">
          <h1 
            className="text-5xl font-bold mb-2 text-amber-100"
            style={{ fontFamily: 'Cinzel, serif' }}
          >
            iTERRA™
          </h1>
          <p className="text-lg text-amber-200/80 tracking-wider">
            Wellness Concierge
          </p>
        </div>

        {/* Wellness Intake Button */}
        <button 
          className="mb-16 px-8 py-4 rounded-full text-white font-medium tracking-wide transition-all duration-300 hover:scale-105 hover:brightness-110"
          style={{
            background: 'linear-gradient(135deg, #8B4513 0%, #A0522D 50%, #CD853F 100%)',
            boxShadow: '0 0 30px rgba(255, 215, 0, 0.8), 0 0 60px rgba(255, 215, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
            border: '2px solid rgba(255, 215, 0, 0.6)',
            textShadow: '0 0 10px rgba(255, 215, 0, 0.8)'
          }}
          onClick={() => console.log('Wellness Intake clicked')}
        >
          Wellness Intake
        </button>

        {/* Category Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl">
          {[
            'Men\'s Wellness',
            'Women\'s Wellness', 
            'Pet Care',
            'Home & Family',
            'Business Tools',
            'Education'
          ].map((item, index) => (
            <button
              key={index}
              className="p-6 rounded-xl text-center cursor-pointer transition-all duration-300 hover:scale-105 hover:brightness-110"
              style={{
                background: 'linear-gradient(135deg, #8B4513 0%, #A0522D 50%, #CD853F 100%)',
                boxShadow: '0 0 20px rgba(255, 215, 0, 0.6), 0 0 40px rgba(255, 215, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
                border: '1px solid rgba(255, 215, 0, 0.4)',
                textShadow: '0 0 8px rgba(255, 215, 0, 0.6)'
              }}
              onClick={() => console.log(`${item} clicked`)}
            >
              <h3 className="text-white font-medium">
                {item}
              </h3>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};