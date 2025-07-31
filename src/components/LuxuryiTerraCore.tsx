import React, { useState } from 'react';
import LuxuryBackground from './LuxuryBackground';
import LuxuryNavigation from './LuxuryNavigation';
import ConciergeButton from './ConciergeButton';
import FamousAIContainer from './FamousAIContainer';

const LuxuryiTerraCore: React.FC = () => {
  const [showConcierge, setShowConcierge] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handleConciergeToggle = () => {
    setShowConcierge(!showConcierge);
  };

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    setShowConcierge(true);
  };

  return (
    <div 
      className="min-h-screen relative overflow-hidden"
      style={{
        margin: 0,
        background: '#080808',
        color: '#EAE0C8',
        fontFamily: 'Cormorant Garamond, serif'
      }}
    >
      {/* Luxury Velvet Background */}
      <LuxuryBackground />

      {/* Navigation */}
      <LuxuryNavigation onCategorySelect={handleCategorySelect} />

      {/* Main Content Area */}
      <div className="relative z-10 flex-1 p-8">
        <div className="text-center">
          <h1 
            className="text-6xl font-bold mb-4 bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-400 bg-clip-text text-transparent"
            style={{ fontFamily: 'Cormorant Garamond, serif' }}
          >
            iTERRA™
          </h1>
          <p className="text-xl text-amber-200/80 font-light tracking-wider">
            Luxury Wellness Concierge
          </p>
        </div>
      </div>

      {/* Concierge Button */}
      <ConciergeButton onClick={handleConciergeToggle} />

      {/* FamousAI Container */}
      <FamousAIContainer 
        isVisible={showConcierge} 
        onClose={() => setShowConcierge(false)} 
      />
    </div>
  );
};

export default LuxuryiTerraCore;