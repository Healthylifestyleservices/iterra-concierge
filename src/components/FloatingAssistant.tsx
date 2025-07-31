import { motion } from 'framer-motion';
import React from 'react';

export default function FloatingAssistant() {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-[#F7E7CE] text-[#333] border border-[#B76E79] rounded-full px-4 py-2 shadow-md hover:shadow-lg cursor-pointer transition-all duration-200"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        💬 How can I help you today?
      </motion.div>
    </div>
  );
}