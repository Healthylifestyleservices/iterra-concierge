import React from 'react';
import { motion } from 'framer-motion';

const guidanceItems = [
  "I feel overwhelmed",
  "I want to support my pet's digestion",
  "I need help with grief",
  "Show me a DIY beauty oil",
  "I want to host a class with oils",
  "I want to detox my home",
  "Help me start my wellness business"
];

export const ITerraEmotionalGuidance = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="max-w-3xl mx-auto p-6 mt-8"
    >
      <motion.h2 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="text-2xl font-cormorant text-[#D4AF37] mb-4 text-center"
      >
        Emotional Guidance & Curated Experiences
      </motion.h2>
      <motion.ul 
        className="grid gap-3 text-[#333]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        {guidanceItems.map((item, index) => (
          <motion.li
            key={item}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
            whileHover={{ x: 5, color: '#B76E79' }}
            className="cursor-pointer transition-colors duration-200 hover:text-[#B76E79]"
          >
            → {item}
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  );
};