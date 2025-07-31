import React, { useEffect } from 'react';

interface FamousAIWindow extends Window {
  FamousAI?: {
    loaded?: boolean;
    init?: (config: any) => void;
    components?: {
      ITerraConcierge?: {
        init: () => void;
      };
    };
  };
}

const FamousAIDemo: React.FC = () => {
  useEffect(() => {
    // Simulate Famous AI being loaded with luxury config
    const initializeFamousAI = () => {
      const famousWindow = window as FamousAIWindow;
      
      // Set up Famous AI structure if not already present
      famousWindow.FamousAI = famousWindow.FamousAI || {};
      famousWindow.FamousAI.components = famousWindow.FamousAI.components || {};
      
      // Add init method for configuration
      famousWindow.FamousAI.init = (config: any) => {
        console.log('Famous AI initialized with config:', config);
        famousWindow.FamousAI!.config = config;
      };
      
      // Mark as loaded and trigger initialization
      famousWindow.FamousAI.loaded = true;
      
      // Initialize with luxury configuration
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
      
      // Dispatch the FamousAIReady event
      const event = new CustomEvent('FamousAIReady');
      window.dispatchEvent(event);
    };

    // Initialize after a short delay to simulate loading
    const timer = setTimeout(initializeFamousAI, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Famous AI iTerra Concierge Demo
        </h2>
        <p className="text-gray-600 mb-4">
          This demonstrates the Famous AI compatible iTerra Concierge component with luxury configuration.
          The component initializes automatically with velvet-obsidian theme when Famous AI loads.
        </p>
        
        <div className="bg-gray-50 rounded-lg p-4 mb-4">
          <h3 className="font-semibold text-gray-700 mb-2">Luxury Features:</h3>
          <ul className="list-disc list-inside text-gray-600 space-y-1">
            <li>Velvet-obsidian background with geometric patterns</li>
            <li>Rose gold gradient user bubbles</li>
            <li>Bronze velvet AI response bubbles</li>
            <li>Luxury iTerra™ branding with gold accents</li>
            <li>Shadow intensity 0.8 with velvet material depth</li>
            <li>Floral and geometry texture overlays</li>
          </ul>
        </div>

        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-4">
          <h3 className="font-semibold text-amber-800 mb-2">Configuration Applied:</h3>
          <pre className="text-xs text-amber-700 bg-amber-100 p-2 rounded overflow-x-auto">
{`window.FamousAI.init({
  container: '#ai-container',
  config: {
    theme: {
      colors: {
        primary: '#D4AF37',
        secondary: '#B76E79',
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
});`}
          </pre>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <h3 className="font-semibold text-blue-800 mb-2">Integration Status:</h3>
          <p className="text-blue-700">
            ✓ Component registered as window.FamousAI.components.ITerraConcierge<br/>
            ✓ Auto-initialization on FamousAIReady event<br/>
            ✓ Luxury configuration applied<br/>
            ✓ DOM injection into #famous-ai-container or #ai-container
          </p>
        </div>
        
        <div id="famous-ai-container" className="mt-6 min-h-[200px] bg-gray-100 rounded-lg flex items-center justify-center">
          <p className="text-gray-500">Famous AI Container - Component will load here</p>
        </div>
      </div>
    </div>
  );
};

export default FamousAIDemo;