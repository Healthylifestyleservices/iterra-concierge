import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface FamousAI {
  assets: {
    validateTextures: () => string[];
  };
}

declare global {
  interface Window {
    FamousAI: FamousAI;
  }
}

const TextureValidationDemo: React.FC = () => {
  const [validationResults, setValidationResults] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const runValidation = () => {
    setIsLoading(true);
    
    setTimeout(() => {
      if (window.FamousAI && window.FamousAI.assets) {
        const results = window.FamousAI.assets.validateTextures();
        setValidationResults(results);
      } else {
        console.warn('FamousAI not loaded');
        setValidationResults(['error:famous-ai-not-loaded']);
      }
      setIsLoading(false);
    }, 500);
  };

  useEffect(() => {
    // Auto-run validation on component mount
    const timer = setTimeout(() => {
      runValidation();
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const getStatusColor = (status: string) => {
    if (status.includes('loaded')) return 'bg-green-500';
    if (status.includes('error')) return 'bg-red-500';
    return 'bg-yellow-500';
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">
          🎨 Famous AI Texture Validation
        </CardTitle>
        <CardDescription className="text-center">
          Test the window.FamousAI.assets.validateTextures() function
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="text-center">
          <Button 
            onClick={runValidation} 
            disabled={isLoading}
            className="px-8 py-2"
          >
            {isLoading ? 'Validating...' : 'Run Texture Validation'}
          </Button>
        </div>

        {validationResults.length > 0 && (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Validation Results:</h3>
            <div className="grid gap-2">
              {validationResults.map((result, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span className="font-mono text-sm">{result}</span>
                  <Badge className={getStatusColor(result)}>
                    {result.includes('loaded') ? 'LOADED' : 
                     result.includes('error') ? 'ERROR' : 'UNKNOWN'}
                  </Badge>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="mt-6 p-4 bg-blue-50 rounded-lg">
          <h4 className="font-semibold mb-2">Console Command:</h4>
          <code className="text-sm bg-gray-100 p-2 rounded block">
            window.FamousAI.assets.validateTextures();
          </code>
          <p className="text-sm text-gray-600 mt-2">
            Expected return: ["geometry:loaded", "plants:loaded"]
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default TextureValidationDemo;