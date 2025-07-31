import React from 'react';
import { motion } from 'framer-motion';

export const ITerraHeader = () => {
  return (
    <motion.header 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative z-10 text-center border-b border-[#D4AF37]/10 py-6"
    >
      <motion.h1 
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-4xl font-cormorant text-[#D4AF37] tracking-wide"
      >
        iTERRA™ 
        <motion.span 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-sm font-light block mt-1 text-[#B76E79]"
        >
          Lifestyle Concierge
        </motion.span>
      </motion.h1>
    </motion.header>
  );
};