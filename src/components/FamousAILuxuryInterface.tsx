import React, { useEffect, useState } from 'react';
import FamousAIVelvetTheme from './FamousAIVelvetTheme';
import LuxuryGlowButton from './LuxuryGlowButton';

interface FamousAIWindow extends Window {
  FamousAI?: {
    loaded?: boolean;
    init?: (config: any) => void;
    config?: any;
  };
}

const FamousAILuxuryInterface: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [config, setConfig] = useState<any>(null);

  useEffect(() => {
    const initializeFamousAI = () => {
      const famousWindow = window as FamousAIWindow;
      
      // Initialize Famous AI with luxury velvet configuration
      famousWindow.FamousAI = {
        loaded: true,
        init: (luxuryConfig: any) => {
          console.log('Famous AI initialized with luxury config:', luxuryConfig);
          famousWindow.FamousAI!.config = luxuryConfig;
          setConfig(luxuryConfig);
        }
      };

      // Apply luxury velvet onyx configuration
      const luxuryConfig = {
        theme: {
          name: 'velvet-onyx-luxury',
          colors: {
            primary: '#D4AF37', // Gold
            secondary: '#B76E79', // Rose Gold
            tertiary: '#CD7F32', // Bronze
            background: {
              base: '#0B0A0A', // Deep onyx black
              velvet: '#2B201A', // Rich chocolate velvet
              accent: '#1A1A1A' // Deep black velvet
            },
            foiling: {
              rosegold: '#E6B8A2',
              gold: '#FFD700',
              bronze: '#B87333'
            }
          },
          textures: {
            velvet: true,
            onyx: true,
            chocolate: '#3C2414',
            sacredGeometry: true
          },
          effects: {
            glow: {
              intensity: 0.8,
              radius: '20px',
              colors: ['#D4AF37', '#B76E79', '#CD7F32']
            },
            shimmer: true,
            depth: {
              shadowIntensity: 0.9,
              material: 'velvet-onyx'
            }
          }
        },
        components: {
          buttons: {
            style: 'luxury-glow',
            variants: ['gold', 'rosegold', 'bronze']
          },
          chatBubbles: {
            user: 'rosegold-gradient-velvet',
            ai: 'bronze-velvet-onyx'
          },
          background: 'velvet-onyx-sacred-geometry'
        }
      };

      famousWindow.FamousAI.init(luxuryConfig);
      setIsLoaded(true);
      
      // Dispatch ready event
      window.dispatchEvent(new CustomEvent('FamousAIReady'));
    };

    const timer = setTimeout(initializeFamousAI, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <FamousAIVelvetTheme>
      <div className="container mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-yellow-400 via-rose-400 to-amber-400 bg-clip-text text-transparent mb-4">
            Famous AI Luxury Interface
          </h1>
          <p className="text-amber-200/80 text-lg">
            Velvet Onyx Theme with Rose Gold Foiling & Sacred Geometry
          </p>
        </div>

        {/* Status */}
        <div className="bg-black/40 backdrop-blur-sm rounded-xl p-6 mb-8 border border-amber-600/30">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-amber-300">Integration Status</h2>
            <div className={`px-3 py-1 rounded-full text-sm ${
              isLoaded ? 'bg-green-600/30 text-green-300' : 'bg-yellow-600/30 text-yellow-300'
            }`}>
              {isLoaded ? '✓ Loaded' : '⏳ Loading...'}
            </div>
          </div>
          
          {config && (
            <div className="bg-amber-900/20 rounded-lg p-4">
              <h3 className="text-amber-300 font-medium mb-2">Applied Configuration:</h3>
              <div className="text-amber-200/70 text-sm space-y-1">
                <div>• Theme: {config.theme.name}</div>
                <div>• Colors: Gold, Rose Gold, Bronze on Velvet Onyx</div>
                <div>• Effects: Glow intensity {config.theme.effects.glow.intensity}</div>
                <div>• Textures: Velvet, Onyx, Chocolate, Sacred Geometry</div>
              </div>
            </div>
          )}
        </div>

        {/* Demo Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="text-center">
            <LuxuryGlowButton variant="gold" size="lg">
              Gold Glow
            </LuxuryGlowButton>
            <p className="text-amber-200/60 text-sm mt-2">Primary Gold</p>
          </div>
          <div className="text-center">
            <LuxuryGlowButton variant="rosegold" size="lg">
              Rose Gold Foil
            </LuxuryGlowButton>
            <p className="text-rose-200/60 text-sm mt-2">Rose Gold Foiling</p>
          </div>
          <div className="text-center">
            <LuxuryGlowButton variant="bronze" size="lg">
              Bronze Velvet
            </LuxuryGlowButton>
            <p className="text-amber-200/60 text-sm mt-2">Bronze Accent</p>
          </div>
        </div>

        {/* Famous AI Container */}
        <div className="bg-black/60 backdrop-blur-sm rounded-xl p-8 border border-rose-400/20">
          <h3 className="text-2xl font-semibold text-rose-300 mb-4 text-center">
            Famous AI Container
          </h3>
          <div 
            id="famous-ai-container" 
            className="min-h-[300px] bg-gradient-to-br from-black/40 to-amber-900/20 rounded-lg border border-amber-600/30 flex items-center justify-center"
          >
            <div className="text-center">
              <div className="text-6xl mb-4">✨</div>
              <p className="text-amber-200/80 text-lg">Famous AI Component Loads Here</p>
              <p className="text-amber-200/60 text-sm mt-2">With Velvet Onyx Luxury Theme Applied</p>
            </div>
          </div>
        </div>
      </div>
    </FamousAIVelvetTheme>
  );
};

export default FamousAILuxuryInterface;