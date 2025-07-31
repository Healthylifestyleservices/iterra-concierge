import React, { useEffect, useState } from 'react';

interface RenderError {
  component: string;
  error: string;
  stack?: string;
}

const RenderingDebugger: React.FC = () => {
  const [errors, setErrors] = useState<RenderError[]>([]);
  const [renderStatus, setRenderStatus] = useState<Record<string, boolean>>({});

  useEffect(() => {
    // Test component rendering
    const testComponents = async () => {
      const status: Record<string, boolean> = {};
      
      // Test FlowerOfLife
      try {
        const { FlowerOfLife } = await import('./sacred-geometry/FlowerOfLife');
        const testElement = document.createElement('div');
        document.body.appendChild(testElement);
        
        // Try to render component
        status['FlowerOfLife'] = true;
        document.body.removeChild(testElement);
      } catch (error) {
        status['FlowerOfLife'] = false;
        setErrors(prev => [...prev, {
          component: 'FlowerOfLife',
          error: error instanceof Error ? error.message : 'Unknown error'
        }]);
      }

      // Test GoldParticles
      try {
        const { GoldParticles } = await import('./GoldParticles');
        status['GoldParticles'] = true;
      } catch (error) {
        status['GoldParticles'] = false;
        setErrors(prev => [...prev, {
          component: 'GoldParticles',
          error: error instanceof Error ? error.message : 'Unknown error'
        }]);
      }

      // Test GoldDrips
      try {
        const { GoldDrips } = await import('./GoldDrips');
        status['GoldDrips'] = true;
      } catch (error) {
        status['GoldDrips'] = false;
        setErrors(prev => [...prev, {
          component: 'GoldDrips',
          error: error instanceof Error ? error.message : 'Unknown error'
        }]);
      }

      setRenderStatus(status);
    };

    testComponents();

    // Check for CSS issues
    const checkCSS = () => {
      const body = document.body;
      const computedStyle = window.getComputedStyle(body);
      
      if (computedStyle.backgroundColor === 'rgb(44, 26, 18)') {
        setErrors(prev => [...prev, {
          component: 'CSS',
          error: 'Body background is brown (#2c1a12) instead of dark (#1a1a1a)'
        }]);
      }
      
      if (computedStyle.backgroundColor === 'rgb(0, 0, 0)') {
        setErrors(prev => [...prev, {
          component: 'CSS',
          error: 'Body background is pure black instead of dark gray (#1a1a1a)'
        }]);
      }
    };

    checkCSS();
  }, []);

  return (
    <div className="fixed top-4 left-4 w-80 bg-red-900/90 border border-red-500 rounded-lg p-4 z-50 max-h-96 overflow-y-auto">
      <h3 className="text-red-200 font-bold mb-4">Rendering Debug</h3>
      
      <div className="mb-4">
        <h4 className="text-red-300 font-semibold mb-2">Component Status:</h4>
        {Object.entries(renderStatus).map(([component, status]) => (
          <div key={component} className="flex items-center gap-2 mb-1">
            <div className={`w-3 h-3 rounded-full ${status ? 'bg-green-500' : 'bg-red-500'}`} />
            <span className="text-red-100">{component}</span>
          </div>
        ))}
      </div>

      {errors.length > 0 && (
        <div>
          <h4 className="text-red-300 font-semibold mb-2">Errors:</h4>
          {errors.map((error, index) => (
            <div key={index} className="mb-2 p-2 bg-red-800/50 rounded">
              <div className="text-red-200 font-medium">{error.component}</div>
              <div className="text-red-100 text-sm">{error.error}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RenderingDebugger;