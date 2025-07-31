import React from 'react';
import { FlowerOfLife } from './sacred-geometry/FlowerOfLife';

interface NavigationButtonProps {
  label: string;
  isHovered: boolean;
  onHover: (hovered: boolean) => void;
  onClick: () => void;
}

export const iTerraNavigationButton: React.FC<NavigationButtonProps> = ({
  label,
  isHovered,
  onHover,
  onClick
}) => {
  return (
    <button
      className={`
        relative group px-8 py-6 rounded-3xl border-0 outline-none cursor-none
        bg-gradient-to-br from-stone-200/20 via-amber-100/15 to-stone-300/20
        shadow-[0_0_20px_rgba(255,224,138,0.3),inset_0_0_20px_rgba(255,224,138,0.1)]
        transition-all duration-500 ease-out
        hover:shadow-[0_2px_25px_rgba(255,224,138,0.4),inset_0_0_25px_rgba(255,224,138,0.15)]
        hover:translate-y-[-2px]
        before:absolute before:inset-0 before:rounded-3xl
        before:bg-gradient-to-br before:from-yellow-200/10 before:via-amber-300/15 before:to-stone-200/10
        before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-500
        transform-gpu
      `}
      onMouseEnter={() => onHover(true)}
      onMouseLeave={() => onHover(false)}
      onClick={onClick}
    >
      {/* Sacred Geometry Icon */}
      <div className="absolute top-2 right-2 w-6 h-6 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
        <FlowerOfLife className="w-full h-full text-amber-300" />
      </div>
      
      {/* Button Text */}
      <span className="relative z-10 text-[#F5EBD8] font-semibold text-lg tracking-wide block">
        {label}
      </span>
      
      {/* Pearl Shimmer Effect */}
      <div className={`
        absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100
        bg-gradient-to-r from-transparent via-white/10 to-transparent
        transform translate-x-[-100%] group-hover:translate-x-[100%]
        transition-all duration-1000 ease-in-out pointer-events-none
      `} />
      
      {/* Glow Intensification */}
      <div className={`
        absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100
        shadow-[0_0_30px_rgba(255,224,138,0.4)]
        transition-opacity duration-300 pointer-events-none
      `} />
    </button>
  );
};