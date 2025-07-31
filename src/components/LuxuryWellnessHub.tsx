import React, { useState } from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';

const LuxuryWellnessHub: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');

  const sections = [
    { id: 'masculine', label: 'Masculine Vitality', icon: '💪' },
    { id: 'feminine', label: 'Divine Feminine', icon: '🌹' },
    { id: 'sanctuary', label: 'Wellness Sanctuary', icon: '✨' },
    { id: 'business', label: 'Wellness Business', icon: '💼' },
    { id: 'wisdom', label: 'Ancient Wisdom', icon: '📿' },
    { id: 'companions', label: 'Sacred Companions', icon: '🐾' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Sacred Geometry Background */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 400 400">
          <defs>
            <pattern id="flowerOfLife" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <circle cx="50" cy="50" r="20" fill="none" stroke="#D4AF37" strokeWidth="1"/>
              <circle cx="35" cy="35" r="20" fill="none" stroke="#D4AF37" strokeWidth="1"/>
              <circle cx="65" cy="35" r="20" fill="none" stroke="#D4AF37" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#flowerOfLife)"/>
        </svg>
      </div>

      {/* Header */}
      <div className="relative z-10 text-center py-12">
        <h1 className="text-6xl font-bold bg-gradient-to-r from-gold-400 to-amber-300 bg-clip-text text-transparent mb-4 font-elegant">
          iTerra
        </h1>
        <p className="text-xl text-gold-200 font-light tracking-wide">
          Luxury Wellness Sanctuary
        </p>
      </div>

      {/* Navigation */}
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-12">
          {sections.map((section) => (
            <Card 
              key={section.id} 
              className="bg-black/30 backdrop-blur-md border-gold-500/20 hover:border-gold-400/40 transition-all duration-300 cursor-pointer hover:transform hover:scale-105" 
              onClick={() => setActiveSection(section.id)}
            >
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-3">{section.icon}</div>
                <h3 className="text-gold-200 font-semibold text-lg">{section.label}</h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Content Area */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 pb-12">
        <Card className="bg-black/40 backdrop-blur-lg border-gold-500/30">
          <CardContent className="p-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gold-200 mb-6 font-elegant">
                Welcome to Your Wellness Journey
              </h2>
              <p className="text-gold-100/80 text-lg leading-relaxed mb-8">
                Experience the pinnacle of wellness luxury with iTerra's curated collection of premium essential oils, personalized wellness protocols, and sacred botanical wisdom.
              </p>
              <Button className="bg-gradient-to-r from-gold-600 to-amber-600 hover:from-gold-500 hover:to-amber-500 text-black font-semibold px-8 py-3 rounded-full transform transition-all duration-200 hover:scale-105">
                Begin Your Journey
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default LuxuryWellnessHub;