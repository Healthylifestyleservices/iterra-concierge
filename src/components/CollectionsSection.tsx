import React from 'react';
import ComprehensiveSingleOilsDropdown from './ComprehensiveSingleOilsDropdown';
import BlendsSection from './BlendsSection';

const CollectionsSection = () => {
  return (
    <div className="space-y-12 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 p-8 rounded-3xl">
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          ✨ Essential Oil Collections ✨
        </h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
          🌈 Discover our curated collections of single oils and proprietary blends, each aligned with specific chakras and frequencies for holistic wellness. 🧘‍♀️
        </p>
      </div>

      {/* Comprehensive Single Oils Master Database */}
      <ComprehensiveSingleOilsDropdown />
      
      {/* doTERRA Blends Section */}
      <BlendsSection />
    </div>
  );
};

export default CollectionsSection;