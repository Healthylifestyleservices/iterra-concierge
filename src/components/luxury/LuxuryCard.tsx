import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '../ui/card';
import { cn } from '../../lib/utils';

interface LuxuryCardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'gold' | 'rose' | 'sage';
  animate?: boolean;
}

export const LuxuryCard: React.FC<LuxuryCardProps> = ({
  children,
  className,
  variant = 'gold',
  animate = true
}) => {
  const variants = {
    gold: 'bg-gradient-to-br from-amber-50 to-yellow-50 border-amber-200',
    rose: 'bg-gradient-to-br from-rose-50 to-pink-50 border-rose-200',
    sage: 'bg-gradient-to-br from-green-50 to-emerald-50 border-green-200'
  };

  const CardComponent = animate ? motion.div : 'div';
  const animationProps = animate ? {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  } : {};

  return (
    <CardComponent {...animationProps}>
      <Card className={cn(
        'shadow-lg backdrop-blur-sm border-2',
        variants[variant],
        className
      )}>
        <CardContent className="p-6">
          {children}
        </CardContent>
      </Card>
    </CardComponent>
  );
};

export default LuxuryCard;