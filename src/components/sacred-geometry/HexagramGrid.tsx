import React from 'react';

interface HexagramGridProps {
  size?: number;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

export const HexagramGrid: React.FC<HexagramGridProps> = ({ 
  size = 24, 
  color = '#FFD700', 
  className = '', 
  style = {} 
}) => {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 100 100" 
      className={className}
      style={style}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Upward Triangle */}
      <path 
        d="M 50 15 L 25 65 L 75 65 Z" 
        fill="none" 
        stroke={color} 
        strokeWidth="2" 
        opacity="0.8"
      />
      
      {/* Downward Triangle */}
      <path 
        d="M 50 85 L 25 35 L 75 35 Z" 
        fill="none" 
        stroke={color} 
        strokeWidth="2" 
        opacity="0.8"
      />
      
      {/* Inner Hexagon */}
      <path 
        d="M 50 25 L 37.5 40 L 37.5 60 L 50 75 L 62.5 60 L 62.5 40 Z" 
        fill="none" 
        stroke={color} 
        strokeWidth="1.5" 
        opacity="0.6"
      />
      
      {/* Center Point */}
      <circle 
        cx="50" 
        cy="50" 
        r="2" 
        fill={color} 
        opacity="0.9"
      />
    </svg>
  );
};