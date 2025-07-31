import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';

interface IconButtonProps {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  onClick?: () => void;
  variant?: 'default' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  gradient?: string;
}

export function IconButton({ 
  icon: Icon, 
  label, 
  onClick, 
  variant = 'default',
  size = 'md',
  gradient = 'from-emerald-500 to-teal-600'
}: IconButtonProps) {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12', 
    lg: 'w-16 h-16'
  };

  const iconSizes = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8'
  };

  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
    >
      <Button
        variant={variant}
        onClick={onClick}
        className={`${sizeClasses[size]} bg-gradient-to-br ${gradient} hover:shadow-lg transition-all duration-200 rounded-xl`}
      >
        <Icon className={`${iconSizes[size]} text-white`} />
        <span className="sr-only">{label}</span>
      </Button>
    </motion.div>
  );
}