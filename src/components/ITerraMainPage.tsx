import React from 'react';
import { motion } from 'framer-motion';

const SacredGeometryOverlay = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 0.1, scale: 1 }}
      transition={{ duration: 2 }}
      className="absolute top-20 right-20 w-32 h-32"
    >
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <circle cx="50" cy="50" r="15" fill="none" stroke="#D4AF37" strokeWidth="0.5" />
        <circle cx="37" cy="37" r="15" fill="none" stroke="#D4AF37" strokeWidth="0.5" />
        <circle cx="63" cy="37" r="15" fill="none" stroke="#D4AF37" strokeWidth="0.5" />
      </svg>
    </motion.div>
  </div>
);

const ITerraHeader = () => (
  <motion.header 
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    className="relative z-10 text-center border-b border-champagne/20 py-6"
  >
    <h1 className="text-4xl font-cormorant text-warmgold tracking-wide">
      iTERRA™ 
      <span className="text-sm font-light block mt-1 text-rosegold">
        Lifestyle Concierge
      </span>
    </h1>
  </motion.header>
);

const CategoryCard = ({ category }: { category: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    whileHover={{ scale: 1.05 }}
    className="bg-white rounded-xl border border-warmgold p-4 text-center shadow hover:shadow-lg transition-all cursor-pointer"
  >
    <div className="w-12 h-12 mx-auto mb-2 bg-champagne rounded-full flex items-center justify-center">
      <span className="text-warmgold text-xl">✨</span>
    </div>
    <div className="text-warmgold font-cormorant text-lg">{category}</div>
  </motion.div>
);

const CategoryGrid = () => {
  const categories = ['Women', 'Men', 'Children', 'Pets', 'Home', 'Emotions', 'Seasonal', 'DIY Kits', 'Education', 'Business', 'Offerings', 'Sanctuary'];
  
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 p-6">
      {categories.map((category, index) => (
        <motion.div key={category} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: index * 0.1 }}>
          <CategoryCard category={category} />
        </motion.div>
      ))}
    </div>
  );
};

const AssistantIntake = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className="max-w-xl mx-auto p-6 bg-cream border border-warmgold rounded-2xl shadow-md mt-8"
  >
    <div className="text-lg mb-3 text-gray-800 font-medium">
      What do you seek today? Wellness, clarity, a recipe, or something else?
    </div>
    <div className="text-sm text-rosegold italic">
      Begin your journey—ask about oils, rituals, emotions, pets, or business.
    </div>
  </motion.div>
);

const FloatingAssistant = () => (
  <div className="fixed bottom-6 right-6 z-50">
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      whileHover={{ scale: 1.05 }}
      className="bg-champagne text-gray-800 border border-rosegold rounded-full px-6 py-3 shadow-lg cursor-pointer"
    >
      💬 How can I assist your path today?
    </motion.div>
  </div>
);

export default function ITerraMainPage() {
  return (
    <div className="min-h-screen bg-cream text-gray-800 font-avenir relative overflow-hidden">
      <SacredGeometryOverlay />
      <ITerraHeader />
      <main className="relative z-10 pb-24">
        <AssistantIntake />
        <CategoryGrid />
      </main>
      <FloatingAssistant />
    </div>
  );
}