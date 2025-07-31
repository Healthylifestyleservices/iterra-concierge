import React, { useEffect, useState } from 'react';

interface DiagnosticResult {
  component: string;
  status: 'success' | 'error' | 'warning';
  message: string;
  details?: string;
}

const ComprehensiveDiagnostic: React.FC = () => {
  const [diagnostics, setDiagnostics] = useState<DiagnosticResult[]>([]);
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    runDiagnostics();
  }, []);

  const runDiagnostics = async () => {
    const results: DiagnosticResult[] = [];

    // Check if components exist
    try {
      const { FlowerOfLife } = await import('./sacred-geometry/FlowerOfLife');
      results.push({
        component: 'FlowerOfLife',
        status: FlowerOfLife ? 'success' : 'error',
        message: FlowerOfLife ? 'Component loaded successfully' : 'Component failed to load'
      });
    } catch (error) {
      results.push({
        component: 'FlowerOfLife',
        status: 'error',
        message: 'Import failed',
        details: error instanceof Error ? error.message : 'Unknown error'
      });
    }

    try {
      const { GoldParticles } = await import('./GoldParticles');
      results.push({
        component: 'GoldParticles',
        status: GoldParticles ? 'success' : 'error',
        message: GoldParticles ? 'Component loaded successfully' : 'Component failed to load'
      });
    } catch (error) {
      results.push({
        component: 'GoldParticles',
        status: 'error',
        message: 'Import failed',
        details: error instanceof Error ? error.message : 'Unknown error'
      });
    }

    try {
      const { GoldDrips } = await import('./GoldDrips');
      results.push({
        component: 'GoldDrips',
        status: GoldDrips ? 'success' : 'error',
        message: GoldDrips ? 'Component loaded successfully' : 'Component failed to load'
      });
    } catch (error) {
      results.push({
        component: 'GoldDrips',
        status: 'error',
        message: 'Import failed',
        details: error instanceof Error ? error.message : 'Unknown error'
      });
    }

    // Check CSS and fonts
    const fontCheck = document.fonts.check('1rem "Cinzel Decorative"');
    results.push({
      component: 'Cinzel Decorative Font',
      status: fontCheck ? 'success' : 'warning',
      message: fontCheck ? 'Font loaded' : 'Font may not be loaded'
    });

    // Check for CSS conflicts
    const bodyStyle = window.getComputedStyle(document.body);
    const bgColor = bodyStyle.backgroundColor;
    results.push({
      component: 'Body Background',
      status: bgColor.includes('26, 26, 26') || bgColor === 'rgb(26, 26, 26)' ? 'success' : 'warning',
      message: `Background color: ${bgColor}`,
      details: 'Should be #1a1a1a (rgb(26, 26, 26))'
    });

    setDiagnostics(results);
    setIsRunning(false);
  };

  return (
    <div className="fixed top-4 right-4 w-96 bg-black/90 border border-amber-500/30 rounded-lg p-4 z-50 max-h-96 overflow-y-auto">
      <h3 className="text-amber-400 font-bold mb-4">App Diagnostics</h3>
      
      {isRunning ? (
        <div className="text-amber-200">Running diagnostics...</div>
      ) : (
        <div className="space-y-2">
          {diagnostics.map((result, index) => (
            <div key={index} className="border-b border-amber-500/20 pb-2">
              <div className="flex items-center gap-2">
                <div className={`w-3 h-3 rounded-full ${
                  result.status === 'success' ? 'bg-green-500' :
                  result.status === 'warning' ? 'bg-yellow-500' : 'bg-red-500'
                }`} />
                <span className="text-amber-200 font-medium">{result.component}</span>
              </div>
              <div className="text-sm text-amber-100 ml-5">{result.message}</div>
              {result.details && (
                <div className="text-xs text-amber-300/70 ml-5">{result.details}</div>
              )}
            </div>
          ))}
        </div>
      )}
      
      <button 
        onClick={runDiagnostics}
        className="mt-4 px-3 py-1 bg-amber-600 text-black rounded text-sm hover:bg-amber-500"
      >
        Re-run Diagnostics
      </button>
    </div>
  );
};

export default ComprehensiveDiagnostic;