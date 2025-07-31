import React, { useState } from 'react';
import { FlowerOfLife } from './sacred-geometry/FlowerOfLife';

const iTerraCore: React.FC = () => {
  const [buttonPosition, setButtonPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });

  const navigationItems = [
    { id: 'masculine', label: 'Masculine Vitality', icon: '💪' },
    { id: 'feminine', label: 'Divine Feminine', icon: '🌸' },
    { id: 'sanctuary', label: 'Wellness Sanctuary', icon: '🌿' },
    { id: 'business', label: 'Wellness Business', icon: '💼' },
    { id: 'wisdom', label: 'Ancient Wisdom', icon: '📖' },
    { id: 'pets', label: 'Sacred Companions', icon: '🐾' }
  ];

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    const rect = (e.target as HTMLElement).getBoundingClientRect();
    setDragOffset({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
    e.preventDefault();
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      const containerRect = e.currentTarget.getBoundingClientRect();
      setButtonPosition({
        x: e.clientX - containerRect.left - dragOffset.x,
        y: e.clientY - containerRect.top - dragOffset.y
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div 
      className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-purple-900 relative overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      {/* Velvet Obsidian Background with Sacred Geometry */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-purple-900/30 to-black/90" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-20">
          <FlowerOfLife size={400} className="text-yellow-400" />
        </div>
        {/* Golden sparkles */}
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-yellow-400 rounded-full opacity-70"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `pulse ${2 + Math.random() * 2}s infinite`
            }}
          />
        ))}
      </div>

      {/* DRAGGABLE WELLNESS INTAKE BUTTON WITH GLASS EFFECT AND ROSE GOLD GLOW */}
      <div 
        className="absolute z-50 cursor-move select-none"
        style={{ 
          left: buttonPosition.x,
          top: buttonPosition.y
        }}
        onMouseDown={handleMouseDown}
      >
        <button className="relative bg-black/20 backdrop-blur-md border border-white/10 text-white font-bold px-8 py-3 rounded-full transform transition-all duration-300 hover:scale-110 text-lg animate-[breathe_3s_ease-in-out_infinite] shadow-[0_0_30px_rgba(244,164,96,0.6),0_0_60px_rgba(244,164,96,0.4)] hover:shadow-[0_0_40px_rgba(244,164,96,0.8),0_0_80px_rgba(244,164,96,0.6)] before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-r before:from-rose-400/20 before:to-orange-300/20 before:opacity-50 hover:before:opacity-70 before:transition-opacity before:duration-300">
          <span className="relative z-10">Wellness Intake</span>
        </button>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-7xl font-bold bg-gradient-to-r from-yellow-400 via-yellow-300 to-amber-400 bg-clip-text text-transparent mb-6">
            iTerra<span className="text-yellow-400 text-2xl align-top">™</span>
          </h1>
          <p className="text-2xl text-yellow-200/80 font-light tracking-wider">
            LIFESTYLE CONCIERGE
          </p>
        </div>

        {/* Navigation Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mb-12">
          {navigationItems.map((item) => (
            <div
              key={item.id}
              className="group relative bg-black/40 backdrop-blur-md border border-yellow-500/20 rounded-lg p-8 hover:border-yellow-400/50 transition-all duration-500 cursor-pointer hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/20"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg" />
              <div className="relative text-center">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="text-lg font-semibold text-yellow-200 group-hover:text-yellow-100 transition-colors duration-300">
                  {item.label}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Welcome Message */}
        <div className="max-w-4xl text-center">
          <h2 className="text-3xl text-yellow-200 mb-6">
            Welcome to Your Sacred Wellness Journey
          </h2>
          <p className="text-lg text-yellow-100/70 leading-relaxed mb-8">
            Experience luxury wellness with iTerra's curated essential oils, personalized protocols, and ancient botanical wisdom.
          </p>
          <button className="bg-gradient-to-r from-yellow-600 to-amber-600 hover:from-yellow-500 hover:to-amber-500 text-black font-semibold px-12 py-4 rounded-full transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-yellow-500/30">
            Begin Your Sacred Journey
          </button>
        </div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <p className="text-yellow-200/60 text-sm text-center">
          ©Health Lifestyle Education Services 2025
        </p>
      </div>
    </div>
  );
};

export default iTerraCore;