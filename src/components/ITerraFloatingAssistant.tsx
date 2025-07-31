import React from 'react';
import { motion } from 'framer-motion';

export const ITerraFloatingAssistant = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <motion.div
        initial={{ opacity: 0, y: 10, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.95 }}
        className="bg-[#F7E7CE] text-[#333] border border-[#B76E79] rounded-full px-6 py-3 shadow-lg hover:shadow-xl cursor-pointer transition-all duration-300"
      >
        <motion.span
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
          className="inline-block mr-2"
        >
          💬
        </motion.span>
        How can I assist your path today?
      </motion.div>
    </div>
  );
};