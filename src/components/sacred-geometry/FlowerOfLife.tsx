import React from 'react';
import { motion } from 'framer-motion';

interface FlowerOfLifeProps {
  size?: number;
  color?: string;
  animate?: boolean;
  className?: string;
}

export const FlowerOfLife: React.FC<FlowerOfLifeProps> = ({
  size = 200,
  color = '#D4AF37',
  animate = true,
  className = ''
}) => {
  const SvgComponent = animate ? motion.svg : 'svg';
  const animationProps = animate ? {
    initial: { opacity: 0, scale: 0.5, rotate: -180 },
    animate: { opacity: 1, scale: 1, rotate: 0 },
    transition: { duration: 2, ease: 'easeOut' }
  } : {};

  return (
    <SvgComponent
      width={size}
      height={size}
      viewBox="0 0 200 200"
      className={className}
      {...animationProps}
    >
      <defs>
        <radialGradient id={`flowerGradient-${size}`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={color} stopOpacity="0.3" />
          <stop offset="100%" stopColor={color} stopOpacity="0.8" />
        </radialGradient>
      </defs>
      
      {/* Central circle */}
      <circle 
        cx="100" 
        cy="100" 
        r="20" 
        fill="none" 
        stroke={`url(#flowerGradient-${size})`} 
        strokeWidth="1.5" 
      />
      
      {/* First ring - 6 circles */}
      {[0, 1, 2, 3, 4, 5].map((i) => {
        const angle = (i * 60) * (Math.PI / 180);
        const x = 100 + 20 * Math.cos(angle);
        const y = 100 + 20 * Math.sin(angle);
        return (
          <motion.circle
            key={`ring1-${i}`}
            cx={x}
            cy={y}
            r="20"
            fill="none"
            stroke={`url(#flowerGradient-${size})`}
            strokeWidth="1.5"
            initial={animate ? { r: 0, opacity: 0 } : {}}
            animate={animate ? { r: 20, opacity: 1 } : {}}
            transition={animate ? { duration: 0.8, delay: 0.5 + i * 0.1 } : {}}
          />
        );
      })}
      
      {/* Second ring - 12 circles */}
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((i) => {
        const angle = (i * 30) * (Math.PI / 180);
        const x = 100 + 40 * Math.cos(angle);
        const y = 100 + 40 * Math.sin(angle);
        return (
          <motion.circle
            key={`ring2-${i}`}
            cx={x}
            cy={y}
            r="20"
            fill="none"
            stroke={`url(#flowerGradient-${size})`}
            strokeWidth="1.2"
            initial={animate ? { r: 0, opacity: 0 } : {}}
            animate={animate ? { r: 20, opacity: 1 } : {}}
            transition={animate ? { duration: 0.8, delay: 1.1 + i * 0.05 } : {}}
          />
        );
      })}
    </SvgComponent>
  );
};