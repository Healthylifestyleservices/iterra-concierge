import React from 'react';
import { motion } from 'framer-motion';

export const ITerraAssistantIntake = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="max-w-xl mx-auto p-6 bg-[#E2DFD2] border border-[#CD7F32] rounded-2xl shadow-md mt-8"
    >
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-lg mb-3 text-[#333] font-medium"
      >
        What do you seek today? Wellness, clarity, a recipe, or something else?
      </motion.div>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="text-sm text-[#B76E79] italic leading-relaxed"
      >
        Begin your journey—ask about oils, rituals, emotions, pets, or business.
      </motion.div>
    </motion.div>
  );
};