import React from 'react';
import { TexturedBackground } from './TexturedBackground';
import { textures } from '../lib/textures';

export function TextureDemo() {
  return (
    <div className="space-y-8 p-6">
      <h2 className="text-2xl font-cormorant famous-ai-gold text-center mb-8">
        Famous AI Texture System
      </h2>
      
      {/* Texture Configuration Display */}
      <div className="bg-black/20 rounded-lg p-4 mb-6">
        <h3 className="famous-ai-bronze text-lg mb-3">Texture Configuration:</h3>
        <div className="space-y-2 text-sm font-mono">
          <div className="famous-ai-rosegold">
            geometry: '{textures.geometry}'
          </div>
          <div className="famous-ai-rosegold">
            plants: '{textures.plants}'
          </div>
        </div>
      </div>

      {/* Demo Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <TexturedBackground 
          className="rounded-lg border border-famous-ai-gold/30 p-6 min-h-[200px]"
          opacity={0.1}
        >
          <h3 className="famous-ai-gold text-lg mb-2">Low Opacity</h3>
          <p className="famous-ai-rosegold text-sm">Subtle texture blend</p>
        </TexturedBackground>
        
        <TexturedBackground 
          className="rounded-lg border border-famous-ai-bronze/30 p-6 min-h-[200px]"
          opacity={0.3}
        >
          <h3 className="famous-ai-bronze text-lg mb-2">High Opacity</h3>
          <p className="famous-ai-rosegold text-sm">Prominent texture blend</p>
        </TexturedBackground>
      </div>
    </div>
  );
}