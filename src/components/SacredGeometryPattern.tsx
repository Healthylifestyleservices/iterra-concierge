import React from 'react';
import { motion } from 'framer-motion';

interface SacredGeometryPatternProps {
  type?: string;
  className?: string;
}

export const SacredGeometryPattern = ({ 
  type = 'flower-of-life', 
  className = '' 
}: SacredGeometryPatternProps) => {
  if (type === 'flower-of-life') {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.3, scale: 1 }}
        className={`absolute top-2 right-2 w-8 h-8 ${className}`}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full text-[#B76E79]">
          <circle cx="50" cy="50" r="15" fill="none" stroke="currentColor" strokeWidth="1" />
          <circle cx="35" cy="37" r="15" fill="none" stroke="currentColor" strokeWidth="1" />
          <circle cx="65" cy="37" r="15" fill="none" stroke="currentColor" strokeWidth="1" />
          <circle cx="35" cy="63" r="15" fill="none" stroke="currentColor" strokeWidth="1" />
          <circle cx="65" cy="63" r="15" fill="none" stroke="currentColor" strokeWidth="1" />
          <circle cx="50" cy="24" r="15" fill="none" stroke="currentColor" strokeWidth="1" />
          <circle cx="50" cy="76" r="15" fill="none" stroke="currentColor" strokeWidth="1" />
        </svg>
      </motion.div>
    );
  }
  
  return null;
};