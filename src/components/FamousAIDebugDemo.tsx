import React, { useEffect, useState } from 'react';

interface ThemeConfig {
  name: string;
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    surface: string;
    text: string;
  };
  textures: {
    geometry: string;
    plants: string;
  };
  depth: {
    type: string;
    intensity: number;
  };
  typography: {
    primary: string;
    weight: {
      light: number;
      normal: number;
      medium: number;
      semibold: number;
      bold: number;
    };
  };
}

export const FamousAIDebugDemo: React.FC = () => {
  const [themeConfig, setThemeConfig] = useState<ThemeConfig | null>(null);
  const [debugOutput, setDebugOutput] = useState<string>('');

  useEffect(() => {
    // Ensure Famous AI script is loaded
    const script = document.createElement('script');
    script.src = '/famous-ai-iterra-concierge.js';
    script.onload = () => {
      // Wait a moment for initialization
      setTimeout(() => {
        if (window.FamousAI?.debug?.printTheme) {
          const theme = window.FamousAI.debug.printTheme();
          setThemeConfig(theme);
          
          // Capture console output
          const originalLog = console.log;
          let output = '';
          console.log = (...args) => {
            output += args.join(' ') + '\n';
            originalLog(...args);
          };
          
          window.FamousAI.debug.printTheme();
          setDebugOutput(output);
          
          // Restore console.log
          console.log = originalLog;
        }
      }, 100);
    };
    
    if (!document.querySelector('script[src="/famous-ai-iterra-concierge.js"]')) {
      document.head.appendChild(script);
    }
  }, []);

  const handlePrintTheme = () => {
    if (window.FamousAI?.debug?.printTheme) {
      window.FamousAI.debug.printTheme();
    } else {
      console.error('Famous AI debug not available');
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Famous AI Debug Demo
        </h1>
        <p className="text-gray-600">
          Test the window.FamousAI.debug.printTheme() function
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Debug Controls</h2>
          <button
            onClick={handlePrintTheme}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
          >
            Run window.FamousAI.debug.printTheme()
          </button>
        </div>
        
        <div className="bg-gray-100 rounded p-4 font-mono text-sm">
          <code>window.FamousAI.debug.printTheme();</code>
        </div>
      </div>

      {themeConfig && (
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Velvet-Obsidian Theme Config</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-700 mb-2">Colors</h3>
              <div className="space-y-2">
                {Object.entries(themeConfig.colors).map(([key, value]) => (
                  <div key={key} className="flex items-center space-x-3">
                    <div 
                      className="w-6 h-6 rounded border"
                      style={{ background: value }}
                    ></div>
                    <span className="text-sm">
                      <strong>{key}:</strong> {value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-700 mb-2">Textures</h3>
              <div className="space-y-2">
                <div><strong>Geometry:</strong> {themeConfig.textures.geometry}</div>
                <div><strong>Plants:</strong> {themeConfig.textures.plants}</div>
              </div>
              
              <h3 className="font-semibold text-gray-700 mb-2 mt-4">Depth</h3>
              <div className="space-y-2">
                <div><strong>Type:</strong> {themeConfig.depth.type}</div>
                <div><strong>Intensity:</strong> {themeConfig.depth.intensity}</div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="bg-black rounded-lg p-4 text-green-400 font-mono text-sm overflow-auto max-h-64">
        <div className="mb-2 text-green-300">Console Output:</div>
        <pre>{debugOutput || 'Run the debug function to see output...'}</pre>
      </div>
    </div>
  );
};

export default FamousAIDebugDemo;