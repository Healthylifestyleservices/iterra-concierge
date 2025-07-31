import React from 'react';
import { motion } from 'framer-motion';

interface CategoryCardProps {
  category: string;
}

const CategoryCard = ({ category }: CategoryCardProps) => {
  const getIconPath = (category: string) => {
    return `/icons/${category.toLowerCase().replace(/ & |\s+/g, '-')}.svg`;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05, y: -5 }}
      className="bg-white rounded-xl border border-[#CD7F32] p-4 text-center shadow hover:shadow-lg transition-all duration-300 cursor-pointer"
    >
      <img 
        src={getIconPath(category)}
        alt={category} 
        className="mx-auto h-12 mb-2" 
        onError={(e) => {
          // Fallback to placeholder if icon doesn't exist
          (e.target as HTMLImageElement).src = '/placeholder.svg';
        }}
      />
      <div className="text-[#D4AF37] font-cormorant text-lg">{category}</div>
    </motion.div>
  );
};

export const CategoryGrid = () => {
  const categories = [
    'Women', 'Men', 'Children', 'Pets', 'Home',
    'Emotions', 'Seasonal', 'DIY & Ritual Kits',
    'Education', 'Business Builder', 'Offerings', 'Sanctuary'
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 p-6">
      {categories.map((category, index) => (
        <motion.div
          key={category}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <CategoryCard category={category} />
        </motion.div>
      ))}
    </div>
  );
};