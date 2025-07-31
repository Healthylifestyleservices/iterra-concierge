import React from 'react';
import { FlowerOfLife } from './sacred-geometry/FlowerOfLife';

const LuxuryVelvetDesign: React.FC = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Deep Velvet Background with Sacred Geometry */}
      <div 
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(circle at 20% 30%, rgba(139, 69, 19, 0.4) 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, rgba(160, 82, 45, 0.3) 0%, transparent 50%),
            linear-gradient(135deg, 
              #0B0A0A 0%, 
              #1A0F0F 15%,
              #2B1F1F 30%,
              #8B4513 45%,
              #A0522D 60%,
              #CD853F 75%,
              #8B0000 90%,
              #0B0A0A 100%
            )
          `,
          backgroundAttachment: 'fixed'
        }}
      />
      
      {/* Velvet Texture Overlay */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `
            radial-gradient(circle at 25% 25%, rgba(205, 133, 63, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 75% 75%, rgba(139, 0, 0, 0.1) 0%, transparent 50%),
            url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="4" height="4" viewBox="0 0 4 4"><circle cx="2" cy="2" r="1" fill="%23CD853F" opacity="0.1"/></svg>')
          `,
          backgroundSize: '200px 200px, 300px 300px, 4px 4px'
        }}
      />

      {/* Sacred Geometry Patterns */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2">
          <FlowerOfLife size={300} className="text-amber-600" />
        </div>
        <div className="absolute bottom-1/4 right-1/4 transform translate-x-1/2 translate-y-1/2">
          <FlowerOfLife size={200} className="text-red-800" />
        </div>
      </div>

      {/* Bronze Accent Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-600 to-transparent opacity-60" />
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-800 to-transparent opacity-60" />
        <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-transparent via-amber-700 to-transparent opacity-40" />
        <div className="absolute right-0 top-0 w-1 h-full bg-gradient-to-b from-transparent via-red-900 to-transparent opacity-40" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-8">
        {/* Luxurious Header */}
        <div className="text-center mb-16">
          <h1 className="text-8xl font-bold mb-6 relative">
            <span 
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: 'linear-gradient(45deg, #CD853F 0%, #DAA520 25%, #B8860B 50%, #8B0000 75%, #A0522D 100%)'
              }}
            >
              iTerra
            </span>
          </h1>
          <p className="text-2xl text-amber-200/90 font-light tracking-widest">
            Sacred Luxury Wellness
          </p>
        </div>

        {/* Elegant Navigation Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl">
          {[
            'Human Wellness', 'Pet Wellness', 'Sacred Botanicals',
            'Luxury Collections', 'Wellness Education', 'Premium Memberships'
          ].map((item, index) => (
            <div
              key={item}
              className="group relative overflow-hidden rounded-lg cursor-pointer transform transition-all duration-700 hover:scale-105"
              style={{
                background: 'linear-gradient(135deg, rgba(139, 69, 19, 0.3) 0%, rgba(160, 82, 45, 0.2) 100%)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(205, 133, 63, 0.3)'
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-amber-600/10 to-red-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative p-8 text-center">
                <h3 className="text-xl font-semibold text-amber-200 group-hover:text-amber-100 transition-colors duration-300">
                  {item}
                </h3>
              </div>
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-amber-600 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
            </div>
          ))}
        </div>

        {/* Luxury Call to Action */}
        <div className="mt-20 text-center">
          <button 
            className="relative px-12 py-4 text-lg font-semibold text-black rounded-full overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            style={{
              background: 'linear-gradient(45deg, #DAA520 0%, #CD853F 50%, #B8860B 100%)'
            }}
          >
            <span className="relative z-10">Begin Your Sacred Journey</span>
            <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-yellow-600 opacity-0 hover:opacity-100 transition-opacity duration-300" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default LuxuryVelvetDesign;