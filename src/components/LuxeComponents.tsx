import React from 'react';
import { motion } from 'framer-motion';

export const BlurLayer: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="backdrop-blur-xl bg-white/10 rounded-2xl border border-white/20">
    {children}
  </div>
);

export const GlassCard: React.FC<{
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}> = ({ children, className = '', onClick }) => (
  <motion.div
    className={`backdrop-blur-xl bg-white/10 border border-white/20 cursor-pointer ${className}`}
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
    onClick={onClick}
  >
    {children}
  </motion.div>
);

export const LuxeButton: React.FC<{
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}> = ({ children, onClick, className = '' }) => (
  <motion.button
    className={`px-6 py-2 bg-gradient-to-r from-[#8B4513] to-[#A0522D] text-white rounded-full font-semibold tracking-wide shadow-lg hover:shadow-xl transition-all duration-300 ${className}`}
    whileHover={{ scale: 1.05, boxShadow: '0 10px 25px rgba(139, 69, 19, 0.3)' }}
    whileTap={{ scale: 0.95 }}
    onClick={onClick}
  >
    {children}
  </motion.button>
);