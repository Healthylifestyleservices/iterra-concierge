import React from 'react';

interface FibonacciSpiralProps {
  size?: number;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

export const FibonacciSpiral: React.FC<FibonacciSpiralProps> = ({ 
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
      {/* Fibonacci Spiral Path */}
      <path 
        d="M 50 50 
           Q 50 30, 70 30 
           Q 90 30, 90 50 
           Q 90 80, 60 80 
           Q 20 80, 20 40 
           Q 20 10, 60 10 
           Q 95 10, 95 45" 
        fill="none" 
        stroke={color} 
        strokeWidth="2" 
        opacity="0.8"
      />
      
      {/* Golden Ratio Rectangles */}
      <rect x="45" y="45" width="10" height="10" fill="none" stroke={color} strokeWidth="1" opacity="0.4" />
      <rect x="45" y="35" width="10" height="10" fill="none" stroke={color} strokeWidth="1" opacity="0.4" />
      <rect x="55" y="35" width="15" height="15" fill="none" stroke={color} strokeWidth="1" opacity="0.4" />
      <rect x="30" y="35" width="25" height="25" fill="none" stroke={color} strokeWidth="1" opacity="0.4" />
      
      {/* Center Point */}
      <circle 
        cx="50" 
        cy="50" 
        r="1.5" 
        fill={color} 
        opacity="0.9"
      />
    </svg>
  );
};