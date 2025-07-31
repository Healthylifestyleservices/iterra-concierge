import React from 'react';
import { getBackgroundImageStyle } from '../lib/textures';

interface TexturedBackgroundProps {
  children: React.ReactNode;
  className?: string;
  opacity?: number;
}

export function TexturedBackground({ 
  children, 
  className = '', 
  opacity = 0.1 
}: TexturedBackgroundProps) {
  const backgroundStyle = getBackgroundImageStyle();
  
  return (
    <div 
      className={`relative overflow-hidden ${className}`}
      style={backgroundStyle}
    >
      {/* Texture overlay with adjustable opacity */}
      <div 
        className="absolute inset-0 bg-black"
        style={{ opacity: 1 - opacity }}
      />
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}