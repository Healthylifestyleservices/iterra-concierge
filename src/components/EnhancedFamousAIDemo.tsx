import React, { useEffect, useState } from 'react';
import FamousAILuxuryInterface from './FamousAILuxuryInterface';
import LuxuryGlowButton from './LuxuryGlowButton';

interface FamousAIWindow extends Window {
  FamousAI?: {
    loaded?: boolean;
    init?: (config: any) => void;
    config?: any;
    components?: {
      ITerraConcierge?: {
        init: () => void;
        render: (container: string) => void;
      };
    };
  };
}

const EnhancedFamousAIDemo: React.FC = () => {
  const [componentLoaded, setComponentLoaded] = useState(false);
  const [configApplied, setConfigApplied] = useState(false);

  useEffect(() => {
    const setupFamousAI = () => {
      const famousWindow = window as FamousAIWindow;
      
      // Initialize Famous AI with complete luxury configuration
      famousWindow.FamousAI = {
        loaded: true,
        components: {
          ITerraConcierge: {
            init: () => {
              console.log('iTerra Concierge initialized with luxury theme');
              setComponentLoaded(true);
            },
            render: (container: string) => {
              const element = document.getElementById(container.replace('#', ''));
              if (element) {
                element.innerHTML = `
                  <div class="luxury-iterra-concierge">
                    <div class="bg-gradient-to-br from-amber-900/30 to-rose-900/20 rounded-xl p-6 border border-amber-400/30">
                      <h3 class="text-xl font-semibold text-amber-300 mb-4">iTerra Luxury Concierge</h3>
                      <div class="space-y-3">
                        <div class="bg-black/40 rounded-lg p-3 border-l-4 border-rose-400">
                          <p class="text-rose-200 text-sm">Welcome to your luxury wellness experience</p>
                        </div>
                        <div class="bg-black/40 rounded-lg p-3 border-l-4 border-amber-400">
                          <p class="text-amber-200 text-sm">How may I assist you with premium essential oils today?</p>
                        </div>
                      </div>
                    </div>
                  </div>
                `;
              }
            }
          }
        },
        init: (config: any) => {
          console.log('Famous AI initialized with luxury velvet onyx config:', config);
          famousWindow.FamousAI!.config = config;
          setConfigApplied(true);
          
          // Auto-render the component
          setTimeout(() => {
            famousWindow.FamousAI!.components!.ITerraConcierge!.render('#ai-container');
          }, 1000);
        }
      };

      // Apply the luxury configuration
      const luxuryConfig = {
        theme: {
          name: 'velvet-onyx-luxury-enhanced',
          colors: {
            primary: '#D4AF37', // Rich Gold
            secondary: '#B76E79', // Rose Gold
            tertiary: '#CD7F32', // Bronze
            background: {
              base: '#0B0A0A', // Deep onyx black
              velvet: '#2B201A', // Rich chocolate velvet
              accent: '#1A1A1A', // Deep black velvet
              chocolate: '#3C2414' // Deep chocolate tones
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
            chocolate: true,
            sacredGeometry: true,
            shimmer: true
          },
          effects: {
            glow: {
              intensity: 0.9,
              radius: '25px',
              colors: ['#D4AF37', '#B76E79', '#CD7F32']
            },
            depth: {
              shadowIntensity: 0.9,
              material: 'velvet-onyx-chocolate'
            },
            animation: {
              shimmer: true,
              hover: 'luxury-glow',
              transition: 'smooth-velvet'
            }
          }
        },
        components: {
          buttons: {
            style: 'luxury-glow-enhanced',
            variants: ['gold', 'rosegold', 'bronze'],
            effects: ['shimmer', 'glow', 'depth']
          },
          chatBubbles: {
            user: 'rosegold-gradient-velvet',
            ai: 'bronze-velvet-onyx',
            system: 'gold-luxury-accent'
          },
          background: 'velvet-onyx-sacred-geometry-enhanced',
          branding: 'iterra-luxury-premium'
        }
      };

      famousWindow.FamousAI.init(luxuryConfig);
      
      // Initialize the iTerra component
      famousWindow.FamousAI.components.ITerraConcierge.init();
      
      // Dispatch ready event
      window.dispatchEvent(new CustomEvent('FamousAIReady'));
    };

    const timer = setTimeout(setupFamousAI, 800);
    return () => clearTimeout(timer);
  }, []);

  const handleReinitialize = () => {
    const famousWindow = window as FamousAIWindow;
    if (famousWindow.FamousAI?.components?.ITerraConcierge) {
      famousWindow.FamousAI.components.ITerraConcierge.render('#ai-container');
    }
  };

  return (
    <FamousAILuxuryInterface>
      <div className="max-w-4xl mx-auto">
        {/* Enhanced Status Panel */}
        <div className="bg-black/50 backdrop-blur-sm rounded-xl p-6 mb-8 border border-amber-400/40">
          <h2 className="text-2xl font-bold text-amber-300 mb-4">Enhanced Famous AI Demo</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className={`p-4 rounded-lg border ${
              configApplied 
                ? 'bg-green-900/20 border-green-400/30 text-green-300' 
                : 'bg-yellow-900/20 border-yellow-400/30 text-yellow-300'
            }`}>
              <div className="font-semibold mb-1">Configuration Status</div>
              <div className="text-sm">
                {configApplied ? '✓ Luxury Config Applied' : '⏳ Applying Config...'}
              </div>
            </div>
            
            <div className={`p-4 rounded-lg border ${
              componentLoaded 
                ? 'bg-green-900/20 border-green-400/30 text-green-300' 
                : 'bg-yellow-900/20 border-yellow-400/30 text-yellow-300'
            }`}>
              <div className="font-semibold mb-1">Component Status</div>
              <div className="text-sm">
                {componentLoaded ? '✓ iTerra Concierge Loaded' : '⏳ Loading Component...'}
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <LuxuryGlowButton 
              variant="rosegold" 
              onClick={handleReinitialize}
              className="mb-4"
            >
              Reinitialize Component
            </LuxuryGlowButton>
          </div>
        </div>

        {/* Famous AI Container */}
        <div className="bg-gradient-to-br from-black/60 to-amber-900/30 rounded-xl p-8 border border-rose-400/30">
          <div 
            id="ai-container" 
            className="min-h-[400px] rounded-lg"
          >
            <div className="flex items-center justify-center h-full text-center">
              <div>
                <div className="text-8xl mb-6">💎</div>
                <p className="text-amber-200 text-xl mb-2">Famous AI iTerra Concierge</p>
                <p className="text-amber-200/70">Loading luxury experience...</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </FamousAILuxuryInterface>
  );
};

export default EnhancedFamousAIDemo;