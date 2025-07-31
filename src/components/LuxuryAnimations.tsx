import React from 'react';
import { motion } from 'framer-motion';

export const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut' }
};

export const shimmer = {
  initial: { backgroundPosition: '-200% 0' },
  animate: { backgroundPosition: '200% 0' },
  transition: { duration: 2, repeat: Infinity, ease: 'linear' }
};

export const pulseGlow = {
  animate: {
    boxShadow: [
      '0 0 20px rgba(183, 110, 121, 0.3)',
      '0 0 40px rgba(183, 110, 121, 0.6)',
      '0 0 20px rgba(183, 110, 121, 0.3)'
    ]
  },
  transition: { duration: 2, repeat: Infinity }
};

export const typewriter = {
  hidden: { width: 0 },
  visible: {
    width: '100%',
    transition: {
      duration: 2,
      ease: 'easeInOut'
    }
  }
};

interface AnimatedTextProps {
  text: string;
  className?: string;
}

export const AnimatedText: React.FC<AnimatedTextProps> = ({ text, className = '' }) => {
  return (
    <motion.div
      className={`overflow-hidden whitespace-nowrap ${className}`}
      initial="hidden"
      animate="visible"
      variants={typewriter}
    >
      {text}
    </motion.div>
  );
};

export const FloatingParticles: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-gradient-to-r from-[#B76E79] to-[#CD7F32] rounded-full opacity-30"
          animate={{
            y: [-20, -100],
            x: [0, Math.random() * 100 - 50],
            opacity: [0, 1, 0]
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2
          }}
          style={{
            left: `${Math.random() * 100}%`,
            top: '100%'
          }}
        />
      ))}
    </div>
  );
};