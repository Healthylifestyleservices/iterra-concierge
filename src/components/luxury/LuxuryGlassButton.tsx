import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/button';
import { cn } from '../../lib/utils';

interface LuxuryGlassButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'velvet' | 'garnet' | 'bronze' | 'obsidian';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  disabled?: boolean;
}

export const LuxuryGlassButton: React.FC<LuxuryGlassButtonProps> = ({
  children,
  onClick,
  variant = 'velvet',
  size = 'md',
  className,
  disabled = false
}) => {
  const variants = {
    velvet: `
      bg-gradient-to-br from-stone-950/95 via-neutral-950/98 to-black/95
      hover:from-stone-900/98 hover:via-neutral-900/98 hover:to-stone-950/98
      border-2 border-amber-900/40 hover:border-amber-800/60
      text-amber-50 shadow-[0_8px_32px_rgba(255,241,165,0.3),inset_0_1px_0_rgba(247,231,206,0.2)]
      backdrop-blur-xl backdrop-saturate-150
    `,
    garnet: `
      bg-gradient-to-br from-red-950/95 via-stone-950/98 to-red-900/95
      hover:from-red-900/98 hover:via-stone-900/98 hover:to-red-800/98
      border-2 border-red-800/50 hover:border-red-700/70
      text-red-50 shadow-[0_8px_32px_rgba(255,241,165,0.3),inset_0_1px_0_rgba(247,231,206,0.2)]
    `,
    bronze: `
      bg-gradient-to-br from-amber-950/95 via-stone-950/98 to-orange-950/95
      hover:from-amber-900/98 hover:via-stone-900/98 hover:to-orange-900/98
      border-2 border-amber-700/50 hover:border-amber-600/70
      text-amber-50 shadow-[0_8px_32px_rgba(255,241,165,0.3),inset_0_1px_0_rgba(247,231,206,0.2)]
    `,
    obsidian: `
      bg-gradient-to-br from-gray-950/98 via-black/98 to-slate-950/98
      hover:from-gray-900/98 hover:via-slate-950/98 hover:to-gray-950/98
      border-2 border-gray-700/40 hover:border-gray-600/60
      text-gray-50 shadow-[0_8px_32px_rgba(255,241,165,0.3),inset_0_1px_0_rgba(247,231,206,0.2)]
    `
  };

  const sizes = {
    sm: 'px-5 py-2.5 text-sm',
    md: 'px-7 py-3.5 text-base',
    lg: 'px-9 py-4.5 text-lg'
  };

  return (
    <motion.div
      whileHover={{ scale: disabled ? 1 : 1.03, y: -1 }}
      whileTap={{ scale: disabled ? 1 : 0.97 }}
    >
      <Button
        onClick={onClick}
        disabled={disabled}
        className={cn(
          'font-semibold rounded-xl transition-all duration-700 relative overflow-hidden',
          'backdrop-blur-xl backdrop-saturate-150',
          variants[variant],
          sizes[size],
          disabled && 'opacity-50 cursor-not-allowed',
          className
        )}
      >
        <span className="relative z-20 drop-shadow-sm">{children}</span>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-100/10 to-transparent 
                       translate-x-[-100%] hover:translate-x-[100%] transition-transform duration-1000 z-10" />
      </Button>
    </motion.div>
  );
};