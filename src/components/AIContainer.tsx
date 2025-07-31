import React from 'react';
import { TexturedBackground } from './TexturedBackground';

export function AIContainer() {
  return (
    <TexturedBackground 
      className="velvet-bg rounded-xl border border-rosegold/30 min-h-[400px] p-6"
      opacity={0.15}
    >
      {/* Sacred Geometry Overlay */}
      <div className="absolute inset-0 opacity-10 z-0">
        <div className="sacred-geometry-pattern w-full h-full" />
      </div>
      
      {/* Chat Interface Placeholder */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center">
        <div className="famous-ai-gold text-2xl font-cormorant mb-4">
          AI Assistant Interface
        </div>
        <div className="famous-ai-rosegold text-sm opacity-70">
          Chat interface with textured background
        </div>
        
        {/* Decorative Elements */}
        <div className="mt-8 flex space-x-4">
          <div className="w-2 h-2 bg-famous-ai-gold rounded-full opacity-60" />
          <div className="w-2 h-2 bg-famous-ai-bronze rounded-full opacity-60" />
          <div className="w-2 h-2 bg-famous-ai-rosegold rounded-full opacity-60" />
        </div>
      </div>
    </TexturedBackground>
  );
}