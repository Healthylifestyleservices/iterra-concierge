import React, { useState } from 'react';
import { FlowerOfLife } from './sacred-geometry/FlowerOfLife';

const CATEGORIES = [
  {
    emoji: "💪",
    title: "Masculine Vitality",
    subtitle: "Holistic protocols for men's peak performance",
    slug: "masculine-vitality",
    color: "bg-blue-50 border-blue-200"
  },
  {
    emoji: "🌸",
    title: "Divine Feminine Energy",
    subtitle: "Nurturing wellness for hormonal balance",
    slug: "divine-feminine-energy",
    color: "bg-pink-50 border-pink-200"
  },
  {
    emoji: "🌿",
    title: "Wellness Sanctuary",
    subtitle: "Sacred botanicals, collections, blends, home & pet wellness",
    slug: "wellness-sanctuary",
    color: "bg-green-50 border-green-200"
  },
  {
    emoji: "💼",
    title: "Wellness Entrepreneurship",
    subtitle: "Transform passion into purpose",
    slug: "wellness-entrepreneurship",
    color: "bg-amber-50 border-amber-200"
  },
  {
    emoji: "📖",
    title: "Wisdom of Wellness",
    subtitle: "Learn holistic health principles",
    slug: "wisdom-of-wellness",
    color: "bg-teal-50 border-teal-200"
  },
  {
    emoji: "🏡",
    title: "Home",
    subtitle: "Cleaning and cooking essentials",
    slug: "home",
    color: "bg-purple-50 border-purple-200"
  }
];

export function iTerraWellnessHub() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [showIntake, setShowIntake] = useState(false);

  const handleCategorySelect = (slug: string) => {
    setSelectedCategory(slug);
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-black via-purple-900/20 to-black overflow-hidden">
      {/* Sacred Geometry Background */}
      <div className="absolute inset-0 flex items-center justify-center">
        <FlowerOfLife size={800} className="opacity-30" />
      </div>

      {/* Crafted Wellness Intake - ABSOLUTE POSITIONING */}
      <div 
        style={{
          position: 'absolute',
          top: '100px',
          left: '100px',
          zIndex: 50
        }}
      >
        <button
          onClick={() => setShowIntake(true)}
          className="group relative px-8 py-4 bg-gradient-to-r from-purple-600/20 to-pink-600/20 
                     backdrop-blur-md border border-white/20 rounded-full text-white font-medium
                     hover:from-purple-500/30 hover:to-pink-500/30 hover:border-white/30
                     transition-all duration-300 hover:scale-105 hover:shadow-2xl
                     shadow-lg shadow-purple-500/20"
        >
          <span className="relative z-10">✨ Crafted Wellness Intake</span>
          <div className="absolute inset-0 bg-gradient-to-r from-purple-400/10 to-pink-400/10 
                          rounded-full blur-xl group-hover:blur-2xl transition-all duration-300" />
        </button>
      </div>

      {/* Category Grid - Centered */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
        <div className="grid grid-cols-3 gap-6">
          {CATEGORIES.map((category, index) => (
            <button
              key={category.slug}
              onClick={() => handleCategorySelect(category.slug)}
              className="group relative w-48 h-24 bg-gradient-to-r from-white/10 to-white/5 
                         backdrop-blur-md border border-white/20 rounded-2xl
                         hover:from-white/20 hover:to-white/10 hover:border-white/30
                         transition-all duration-300 hover:scale-105 hover:shadow-2xl
                         shadow-lg shadow-black/20 flex flex-col items-center justify-center"
            >
              <div className="text-2xl mb-1">{category.emoji}</div>
              <div className="text-white font-medium text-sm text-center px-2">
                {category.title}
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400/5 to-pink-400/5 
                              rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
            </button>
          ))}
        </div>
      </div>

      {/* Selected Category Display */}
      {selectedCategory && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-30 flex items-center justify-center">
          <div className="bg-gradient-to-br from-purple-900/90 to-black/90 backdrop-blur-xl 
                          border border-white/20 rounded-3xl p-8 max-w-2xl mx-4">
            <h2 className="text-3xl font-bold text-white mb-4">
              {CATEGORIES.find(c => c.slug === selectedCategory)?.title}
            </h2>
            <p className="text-white/80 mb-6">
              {CATEGORIES.find(c => c.slug === selectedCategory)?.subtitle}
            </p>
            <button 
              onClick={() => setSelectedCategory(null)}
              className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 
                         text-white rounded-full hover:from-purple-500 hover:to-pink-500
                         transition-all duration-300 hover:scale-105"
            >
              ← Back to Wellness Hub
            </button>
          </div>
        </div>
      )}

      {/* Intake Modal */}
      {showIntake && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-30 flex items-center justify-center">
          <div className="bg-gradient-to-br from-purple-900/90 to-black/90 backdrop-blur-xl 
                          border border-white/20 rounded-3xl p-8 max-w-2xl mx-4">
            <h2 className="text-3xl font-bold text-white mb-4">
              ✨ Crafted Wellness Intake
            </h2>
            <p className="text-white/80 mb-6">
              Begin your personalized wellness journey with our comprehensive intake assessment.
            </p>
            <button 
              onClick={() => setShowIntake(false)}
              className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 
                         text-white rounded-full hover:from-purple-500 hover:to-pink-500
                         transition-all duration-300 hover:scale-105"
            >
              ← Back to Wellness Hub
            </button>
          </div>
        </div>
      )}
    </div>
  );
}