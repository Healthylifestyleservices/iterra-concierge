import React, { useEffect } from 'react';

interface FamousAIWindow extends Window {
  FamousAI?: {
    init?: (config: any) => void;
    loaded?: boolean;
    components?: any;
  };
}

const FamousAIConfig: React.FC = () => {
  useEffect(() => {
    const initializeFamousAI = () => {
      const famousWindow = window as FamousAIWindow;
      
      // Initialize Famous AI with luxury config
      if (famousWindow.FamousAI?.init) {
        famousWindow.FamousAI.init({
          container: '#ai-container',
          config: {
            theme: {
              colors: {
                primary: '#D4AF37', // Gold
                secondary: '#B76E79', // Rose Gold
                background: 'velvet-obsidian',
                textures: ['floral', 'geometry']
              },
              depth: {
                shadowIntensity: 0.8,
                material: 'velvet'
              }
            },
            components: {
              chatBubbles: {
                user: 'rosegold-gradient',
                ai: 'bronze-velvet'
              }
            }
          }
        });
      }
    };

    // Initialize when Famous AI is ready
    if ((window as FamousAIWindow).FamousAI?.loaded) {
      initializeFamousAI();
    } else {
      window.addEventListener('FamousAIReady', initializeFamousAI);
    }

    return () => {
      window.removeEventListener('FamousAIReady', initializeFamousAI);
    };
  }, []);

  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-br from-gray-900 to-amber-900 rounded-lg shadow-xl p-6 text-white">
        <h2 className="text-2xl font-bold mb-4 text-amber-300">
          Famous AI Luxury Configuration
        </h2>
        <p className="text-gray-200 mb-4">
          Enhanced Famous AI integration with velvet-obsidian theme and luxury styling.
        </p>
        
        <div className="bg-black/30 rounded-lg p-4 mb-4">
          <h3 className="font-semibold text-amber-300 mb-2">Theme Configuration:</h3>
          <ul className="list-disc list-inside text-gray-300 space-y-1 text-sm">
            <li>Primary: Gold (#D4AF37)</li>
            <li>Secondary: Rose Gold (#B76E79)</li>
            <li>Background: Velvet-Obsidian</li>
            <li>Textures: Floral & Geometry</li>
            <li>Material: Velvet with 0.8 shadow intensity</li>
          </ul>
        </div>

        <div id="ai-container" className="min-h-[200px] bg-black/20 rounded-lg p-4 border border-amber-600/30">
          <p className="text-amber-200 text-center py-8">
            Famous AI Container Ready
          </p>
        </div>
      </div>
    </div>
  );
};

export default FamousAIConfig;