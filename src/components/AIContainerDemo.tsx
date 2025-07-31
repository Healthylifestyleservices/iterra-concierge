import React from 'react';
import { AIContainer } from './AIContainer';

export function AIContainerDemo() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="font-cormorant text-4xl font-medium text-famous-ai-gold mb-4">
            AI Container Demo
          </h1>
          <p className="text-famous-ai-rosegold text-lg opacity-80">
            Luxury AI interface with velvet background and sacred geometry
          </p>
        </div>
        
        <div className="grid gap-8">
          {/* Main AI Container */}
          <AIContainer />
          
          {/* Additional Examples */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="velvet-bg rounded-lg p-6 border border-famous-ai-bronze/20">
              <h3 className="font-cormorant text-xl text-famous-ai-bronze mb-3">
                Compact Version
              </h3>
              <div className="h-32 flex items-center justify-center">
                <div className="text-famous-ai-gold opacity-70">
                  Mini AI Interface
                </div>
              </div>
            </div>
            
            <div className="velvet-bg rounded-lg p-6 border border-famous-ai-rosegold/20">
              <h3 className="font-cormorant text-xl text-famous-ai-rosegold mb-3">
                Side Panel
              </h3>
              <div className="h-32 flex items-center justify-center">
                <div className="text-famous-ai-bronze opacity-70">
                  Assistant Panel
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Theme Colors Display */}
        <div className="mt-12 text-center">
          <h2 className="font-cormorant text-2xl text-famous-ai-gold mb-6">
            Famous AI Theme Colors
          </h2>
          <div className="flex justify-center space-x-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-famous-ai-gold rounded-full mx-auto mb-2" />
              <div className="text-famous-ai-gold text-sm font-mono">#D4AF37</div>
              <div className="text-gray-400 text-xs">Gold</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-famous-ai-bronze rounded-full mx-auto mb-2" />
              <div className="text-famous-ai-bronze text-sm font-mono">#CD7F32</div>
              <div className="text-gray-400 text-xs">Bronze</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-famous-ai-rosegold rounded-full mx-auto mb-2" />
              <div className="text-famous-ai-rosegold text-sm font-mono">#B76E79</div>
              <div className="text-gray-400 text-xs">Rose Gold</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}