import React, { useState } from 'react';
import { MessageCircle, X, Sparkles } from 'lucide-react';
import iTerraLuxuryAssistant from './iTerraLuxuryAssistant';

const iTerraAssistantBubble: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Floating Bubble - Bottom Right */}
      <div className="fixed bottom-6 right-6 z-50">
        <div 
          onClick={() => setIsOpen(!isOpen)}
          className="w-16 h-16 rounded-full shadow-xl cursor-pointer hover:scale-110 transition-all duration-300 flex items-center justify-center bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 text-white group relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 animate-pulse opacity-75"></div>
          <div className="relative z-10 text-center">
            <Sparkles className="w-5 h-5 mb-1" />
            <span className="text-xs font-bold">iTerra</span>
          </div>
          
          {/* Elegant glow effect */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 opacity-0 group-hover:opacity-30 transition-opacity duration-300 animate-pulse"></div>
        </div>
        
        {/* Floating indicator */}
        <div className="absolute -top-2 -right-2 w-4 h-4 bg-green-500 rounded-full border-2 border-white animate-pulse"></div>
      </div>

      {/* Luxury Modal Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm z-40 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-5xl w-full max-h-[90vh] overflow-hidden relative border border-purple-200">
            <div className="flex justify-between items-center p-6 border-b border-purple-100 bg-gradient-to-r from-purple-50 to-pink-50">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h2 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    iTerra - Your Luxury Wellness Concierge
                  </h2>
                  <p className="text-sm text-gray-600">Certified Nutritionist • Wellness Coach • Aromatherapist • Sales Consultant</p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-purple-100 rounded-full transition-colors group"
              >
                <X className="w-6 h-6 text-gray-600 group-hover:text-purple-600" />
              </button>
            </div>
            <div className="overflow-y-auto max-h-[calc(90vh-100px)]">
              <iTerraLuxuryAssistant />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default iTerraAssistantBubble;