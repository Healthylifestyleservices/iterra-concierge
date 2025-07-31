import React, { useState } from 'react';
import { EnhancedLuxuryHeader } from './EnhancedLuxuryHeader';
import { PearlLuxuryButton } from './PearlLuxuryButton';

const iTerraLifestyleConcierge: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');

  const navigationItems = [
    { key: 'masculine', label: 'Masculine Vitality' },
    { key: 'feminine', label: 'Feminine Energy' },
    { key: 'pet', label: 'Pet Harmony' },
    { key: 'home', label: 'Home' },
    { key: 'sanctuary', label: 'Wellness Sanctuary' },
    { key: 'entrepreneurship', label: 'Wellness Entrepreneurship' },
    { key: 'wisdom', label: 'Wisdom of Wellness' },
    { key: 'intake', label: 'Crafted Wellness Intake' }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden" style={{ 
      background: 'radial-gradient(circle at center, rgba(139, 69, 19, 0.4) 0%, #0d0d0d 100%)'
    }}>
      {/* Enhanced Header */}
      <EnhancedLuxuryHeader />

      {/* Navigation */}
      <nav className="flex flex-wrap justify-center gap-6 px-4 mb-12 relative z-10">
        {navigationItems.map((item) => (
          <PearlLuxuryButton
            key={item.key}
            onClick={() => setActiveSection(item.key)}
            size="md"
            className="font-medium tracking-wide"
          >
            {item.label}
          </PearlLuxuryButton>
        ))}
      </nav>

      {/* Content Area */}
      <main className="max-w-6xl mx-auto px-4 text-center relative z-10" style={{ color: '#F5EBD8' }}>
        <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
          <p className="text-xl font-medium tracking-wide" style={{ fontFamily: '"Playfair Display", serif' }}>
            Selected: <span className="italic text-amber-100">{navigationItems.find(n => n.key === activeSection)?.label}</span>
          </p>
        </div>
      </main>
    </div>
  );
};

export default iTerraLifestyleConcierge;