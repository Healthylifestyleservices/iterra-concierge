import React from 'react';
import { motion } from 'framer-motion';

interface SeedOfLifeProps {
  size?: number;
  color?: string;
  animate?: boolean;
  className?: string;
}

export const SeedOfLife: React.FC<SeedOfLifeProps> = ({
  size = 80,
  color = '#B76E79',
  animate = true,
  className = ''
}) => {
  const circles = [
    { cx: 40, cy: 40, r: 15 },
    { cx: 25, cy: 27, r: 15 },
    { cx: 55, cy: 27, r: 15 },
    { cx: 15, cy: 40, r: 15 },
    { cx: 65, cy: 40, r: 15 },
    { cx: 25, cy: 53, r: 15 },
    { cx: 55, cy: 53, r: 15 }
  ];

  const SvgComponent = animate ? motion.svg : 'svg';
  const animationProps = animate ? {
    initial: { opacity: 0, scale: 0.5 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 1.5, ease: 'easeOut' }
  } : {};

  return (
    <SvgComponent
      width={size}
      height={size}
      viewBox="0 0 80 80"
      className={className}
      {...animationProps}
    >
      <defs>
        <radialGradient id="seedGradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={color} stopOpacity="0.3" />
          <stop offset="100%" stopColor={color} stopOpacity="0.8" />
        </radialGradient>
      </defs>
      {circles.map((circle, index) => (
        <motion.circle
          key={index}
          cx={circle.cx}
          cy={circle.cy}
          r={circle.r}
          fill="none"
          stroke={`url(#seedGradient)`}
          strokeWidth="1.2"
          initial={animate ? { r: 0, opacity: 0 } : {}}
          animate={animate ? { r: circle.r, opacity: 1 } : {}}
          transition={animate ? { duration: 0.8, delay: index * 0.15 } : {}}
        />
      ))}
    </SvgComponent>
  );
};

export default SeedOfLife;