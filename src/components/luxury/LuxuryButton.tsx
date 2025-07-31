import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/button';
import { cn } from '../../lib/utils';

interface LuxuryButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'gold' | 'rose' | 'sage' | 'velvet' | 'garnet' | 'bronze' | 'obsidian';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  disabled?: boolean;
}

export const LuxuryButton: React.FC<LuxuryButtonProps> = ({
  children,
  onClick,
  variant = 'gold',
  size = 'md',
  className,
  disabled = false
}) => {
  const variants = {
    gold: `
      bg-gradient-to-br from-amber-100 to-yellow-200
      hover:from-amber-200 hover:to-yellow-300
      border-2 border-amber-300 hover:border-amber-400
      text-amber-900 shadow-lg
    `,
    rose: `
      bg-gradient-to-br from-rose-100 to-pink-200
      hover:from-rose-200 hover:to-pink-300
      border-2 border-rose-300 hover:border-rose-400
      text-rose-900 shadow-lg
    `,
    sage: `
      bg-gradient-to-br from-green-100 to-emerald-200
      hover:from-green-200 hover:to-emerald-300
      border-2 border-green-300 hover:border-green-400
      text-green-900 shadow-lg
    `,
    velvet: `
      bg-gradient-to-br from-stone-950/95 via-neutral-950/98 to-black/95
      hover:from-stone-900/98 hover:via-neutral-900/98 hover:to-stone-950/98
      border-2 border-amber-900/40 hover:border-amber-800/60
      text-amber-50 shadow-[0_8px_32px_rgba(0,0,0,0.8)]
    `,
    garnet: `
      bg-gradient-to-br from-red-950/95 via-stone-950/98 to-red-900/95
      hover:from-red-900/98 hover:via-stone-900/98 hover:to-red-800/98
      border-2 border-red-800/50 hover:border-red-700/70
      text-red-50 shadow-[0_8px_32px_rgba(139,0,0,0.6)]
    `,
    bronze: `
      bg-gradient-to-br from-amber-950/95 via-stone-950/98 to-orange-950/95
      hover:from-amber-900/98 hover:via-stone-900/98 hover:to-orange-900/98
      border-2 border-amber-700/50 hover:border-amber-600/70
      text-amber-50 shadow-[0_8px_32px_rgba(160,82,45,0.6)]
    `,
    obsidian: `
      bg-gradient-to-br from-gray-950/98 via-black/98 to-slate-950/98
      hover:from-gray-900/98 hover:via-slate-950/98 hover:to-gray-950/98
      border-2 border-gray-700/40 hover:border-gray-600/60
      text-gray-50 shadow-[0_8px_32px_rgba(0,0,0,0.9)]
    `
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  return (
    <motion.div
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
    >
      <Button
        onClick={onClick}
        disabled={disabled}
        className={cn(
          'font-semibold rounded-lg transition-all duration-300',
          variants[variant],
          sizes[size],
          disabled && 'opacity-50 cursor-not-allowed',
          className
        )}
      >
        {children}
      </Button>
    </motion.div>
  );
};