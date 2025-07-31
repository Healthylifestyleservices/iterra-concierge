import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface DiagnosticResult {
  test: string;
  status: 'pass' | 'fail' | 'warning';
  message: string;
  details?: string;
  fix?: string;
}

export const ComprehensiveErrorDiagnostics: React.FC = () => {
  const [results, setResults] = useState<DiagnosticResult[]>([]);
  const [isRunning, setIsRunning] = useState(false);

  const runDiagnostics = async () => {
    setIsRunning(true);
    const diagnosticResults: DiagnosticResult[] = [];

    // Test React version
    try {
      const reactVersion = React.version;
      diagnosticResults.push({
        test: 'React Version',
        status: 'pass',
        message: `React ${reactVersion} loaded successfully`,
      });
    } catch (error) {
      diagnosticResults.push({
        test: 'React Version',
        status: 'fail',
        message: 'React not properly loaded',
        fix: 'Reinstall React dependencies'
      });
    }

    // Test FlowerOfLife component
    try {
      const flowerElement = document.querySelector('.flower-wrapper');
      if (flowerElement) {
        diagnosticResults.push({
          test: 'FlowerOfLife Component',
          status: 'pass',
          message: 'FlowerOfLife component rendered successfully',
        });
      } else {
        diagnosticResults.push({
          test: 'FlowerOfLife Component',
          status: 'fail',
          message: 'FlowerOfLife component not found in DOM',
          fix: 'Check FlowerOfLife.css import and component rendering'
        });
      }
    } catch (error) {
      diagnosticResults.push({
        test: 'FlowerOfLife Component',
        status: 'fail',
        message: 'Error checking FlowerOfLife component',
        details: error instanceof Error ? error.message : 'Unknown error'
      });
    }

    // Test ParticleBackground
    try {
      const particleElements = document.querySelectorAll('[style*="position: absolute"]');
      if (particleElements.length > 10) {
        diagnosticResults.push({
          test: 'ParticleBackground',
          status: 'pass',
          message: `${particleElements.length} particles rendered`,
        });
      } else {
        diagnosticResults.push({
          test: 'ParticleBackground',
          status: 'warning',
          message: 'Few or no particles detected',
          fix: 'Check ParticleBackground component'
        });
      }
    } catch (error) {
      diagnosticResults.push({
        test: 'ParticleBackground',
        status: 'fail',
        message: 'Error checking particles',
        details: error instanceof Error ? error.message : 'Unknown error'
      });
    }

    // Test Tailwind CSS
    try {
      const testElement = document.createElement('div');
      testElement.className = 'bg-red-500';
      document.body.appendChild(testElement);
      const styles = window.getComputedStyle(testElement);
      const bgColor = styles.backgroundColor;
      document.body.removeChild(testElement);
      
      if (bgColor.includes('rgb(239, 68, 68)') || bgColor.includes('rgb(220, 38, 38)')) {
        diagnosticResults.push({
          test: 'Tailwind CSS',
          status: 'pass',
          message: 'Tailwind CSS working correctly',
        });
      } else {
        diagnosticResults.push({
          test: 'Tailwind CSS',
          status: 'fail',
          message: 'Tailwind CSS not loading properly',
          fix: 'Check tailwind.config.ts and CSS imports'
        });
      }
    } catch (error) {
      diagnosticResults.push({
        test: 'Tailwind CSS',
        status: 'fail',
        message: 'Error testing Tailwind CSS',
        details: error instanceof Error ? error.message : 'Unknown error'
      });
    }

    // Test fonts
    try {
      const fontTest = document.createElement('div');
      fontTest.style.fontFamily = 'Playfair Display, serif';
      fontTest.textContent = 'Test';
      document.body.appendChild(fontTest);
      const computedFont = window.getComputedStyle(fontTest).fontFamily;
      document.body.removeChild(fontTest);
      
      if (computedFont.includes('Playfair Display')) {
        diagnosticResults.push({
          test: 'Custom Fonts',
          status: 'pass',
          message: 'Custom fonts loaded successfully',
        });
      } else {
        diagnosticResults.push({
          test: 'Custom Fonts',
          status: 'warning',
          message: 'Custom fonts may not be loading',
          fix: 'Check @fontsource imports in package.json'
        });
      }
    } catch (error) {
      diagnosticResults.push({
        test: 'Custom Fonts',
        status: 'fail',
        message: 'Error testing fonts',
        details: error instanceof Error ? error.message : 'Unknown error'
      });
    }

    setResults(diagnosticResults);
    setIsRunning(false);
  };

  useEffect(() => {
    runDiagnostics();
  }, []);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pass': return 'bg-green-500';
      case 'fail': return 'bg-red-500';
      case 'warning': return 'bg-yellow-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <Card className="bg-white/10 backdrop-blur-md border-white/20">
      <CardHeader>
        <CardTitle className="text-white flex items-center justify-between">
          🔍 Error Diagnostics
          <Button 
            onClick={runDiagnostics} 
            disabled={isRunning}
            className="bg-blue-600 hover:bg-blue-700"
          >
            {isRunning ? '🔄 Running...' : '▶️ Run Tests'}
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {results.map((result, index) => (
          <div key={index} className="bg-white/5 rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-white font-semibold">{result.test}</h3>
              <Badge className={`${getStatusColor(result.status)} text-white`}>
                {result.status.toUpperCase()}
              </Badge>
            </div>
            <p className="text-gray-300 text-sm mb-2">{result.message}</p>
            {result.details && (
              <p className="text-red-300 text-xs mb-2">Details: {result.details}</p>
            )}
            {result.fix && (
              <p className="text-yellow-300 text-xs">💡 Fix: {result.fix}</p>
            )}
          </div>
        ))}
      </CardContent>
    </Card>
  );
};