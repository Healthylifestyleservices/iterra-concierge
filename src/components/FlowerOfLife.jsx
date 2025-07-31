import React from 'react';
import './FlowerOfLife.css';

export default function FlowerOfLife() {
  return (
    <div className="flower-wrapper">
      {/* Outer layer with champagne glow */}
      <div className="flower-layer outer-pulse">
        <svg
          width="400"
          height="400"
          viewBox="0 0 400 400"
          className="absolute inset-0"
        >
          <defs>
            <radialGradient id="champagneGradient" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#F7E7CE" stopOpacity="0.9" />
              <stop offset="50%" stopColor="#E6D3B7" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#D4AF37" stopOpacity="0.4" />
            </radialGradient>
            <filter id="champagneGlow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge> 
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          
          {/* Central circle with champagne glow */}
          <circle cx="200" cy="200" r="40" fill="none" stroke="url(#champagneGradient)" strokeWidth="2" filter="url(#champagneGlow)" />
          
          {/* First ring - 6 circles around center */}
          {[0, 1, 2, 3, 4, 5].map((i) => {
            const angle = (i * 60) * (Math.PI / 180);
            const x = 200 + 40 * Math.cos(angle);
            const y = 200 + 40 * Math.sin(angle);
            return (
              <circle key={`outer-ring1-${i}`} cx={x} cy={y} r="40" fill="none" stroke="url(#champagneGradient)" strokeWidth="2" filter="url(#champagneGlow)" />
            );
          })}
          
          {/* Second ring - 12 circles */}
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((i) => {
            const angle = (i * 30) * (Math.PI / 180);
            const x = 200 + 80 * Math.cos(angle);
            const y = 200 + 80 * Math.sin(angle);
            return (
              <circle key={`outer-ring2-${i}`} cx={x} cy={y} r="40" fill="none" stroke="url(#champagneGradient)" strokeWidth="1.5" filter="url(#champagneGlow)" />
            );
          })}
        </svg>
      </div>

      {/* Middle layer with warm champagne tones */}
      <div className="flower-layer inner-pulse-reverse">
        <svg
          width="400"
          height="400"
          viewBox="0 0 400 400"
          className="absolute inset-0"
        >
          <defs>
            <radialGradient id="warmChampagne" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#F5F5DC" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#F7E7CE" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#E6D3B7" stopOpacity="0.3" />
            </radialGradient>
          </defs>
          
          <circle cx="200" cy="200" r="40" fill="none" stroke="url(#warmChampagne)" strokeWidth="2" filter="url(#champagneGlow)" />
          
          {[0, 1, 2, 3, 4, 5].map((i) => {
            const angle = (i * 60) * (Math.PI / 180);
            const x = 200 + 40 * Math.cos(angle);
            const y = 200 + 40 * Math.sin(angle);
            return (
              <circle key={`middle-ring1-${i}`} cx={x} cy={y} r="40" fill="none" stroke="url(#warmChampagne)" strokeWidth="2" filter="url(#champagneGlow)" />
            );
          })}
        </svg>
      </div>

      {/* Inner layer with bright champagne center */}
      <div className="flower-layer center-depth">
        <svg
          width="400"
          height="400"
          viewBox="0 0 400 400"
          className="absolute inset-0"
        >
          <defs>
            <radialGradient id="brightChampagne" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#FFF8DC" stopOpacity="1" />
              <stop offset="50%" stopColor="#F7E7CE" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#D4AF37" stopOpacity="0.6" />
            </radialGradient>
          </defs>
          
          <circle cx="200" cy="200" r="40" fill="none" stroke="url(#brightChampagne)" strokeWidth="3" filter="url(#champagneGlow)" />
          
          {[0, 1, 2, 3, 4, 5].map((i) => {
            const angle = (i * 60) * (Math.PI / 180);
            const x = 200 + 40 * Math.cos(angle);
            const y = 200 + 40 * Math.sin(angle);
            return (
              <circle key={`inner-ring1-${i}`} cx={x} cy={y} r="40" fill="none" stroke="url(#brightChampagne)" strokeWidth="3" filter="url(#champagneGlow)" />
            );
          })}
        </svg>
      </div>
    </div>
  );
}