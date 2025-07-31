import React from 'react';
import { FlowerOfLife } from './sacred-geometry/FlowerOfLife';

const SacredGeometryOverlay = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {/* Animated Flower of Life - Center */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="animate-spin-slow opacity-10">
          <FlowerOfLife 
            size={800} 
            color="rgba(255, 215, 0, 0.3)"
            className="text-yellow-400"
          />
        </div>
      </div>
      
      {/* Smaller rotating geometries */}
      <div className="absolute top-1/4 left-1/4 animate-pulse">
        <FlowerOfLife 
          size={200} 
          color="rgba(255, 215, 0, 0.2)"
          className="text-yellow-300"
        />
      </div>
      
      <div className="absolute bottom-1/4 right-1/4 animate-bounce-slow">
        <FlowerOfLife 
          size={150} 
          color="rgba(255, 215, 0, 0.15)"
          className="text-yellow-200"
        />
      </div>
      
      {/* Sacred geometry grid pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-cols-8 grid-rows-6 h-full w-full">
          {Array.from({ length: 48 }).map((_, i) => (
            <div key={i} className="flex items-center justify-center">
              <FlowerOfLife 
                size={60} 
                color="rgba(255, 215, 0, 0.1)"
                className="text-yellow-100"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SacredGeometryOverlay;