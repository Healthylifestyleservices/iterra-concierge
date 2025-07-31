import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';

interface ContrastResult {
  ratio: string;
  rating: string;
  colors: [string, string];
}

export default function AccessibilityContrastDemo() {
  const [color1, setColor1] = useState('#D4AF37');
  const [color2, setColor2] = useState('#0B0A0A');
  const [result, setResult] = useState<ContrastResult | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Check if Famous AI is loaded
    const checkFamousAI = () => {
      if (window.FamousAI?.accessibility?.checkContrast) {
        setIsLoaded(true);
        // Test the specific example from the request
        testContrast();
      } else {
        setTimeout(checkFamousAI, 100);
      }
    };
    checkFamousAI();
  }, []);

  const testContrast = () => {
    if (!window.FamousAI?.accessibility?.checkContrast) {
      console.error('Famous AI accessibility not loaded');
      return;
    }

    try {
      const rating = window.FamousAI.accessibility.checkContrast(color1, color2);
      console.log(`Contrast test: ${color1} vs ${color2} = ${rating}`);
      
      setResult({
        ratio: rating,
        rating: rating,
        colors: [color1, color2]
      });
    } catch (error) {
      console.error('Error testing contrast:', error);
    }
  };

  const getRatingColor = (rating: string) => {
    switch (rating) {
      case 'AAA': return 'bg-green-500';
      case 'AA': return 'bg-blue-500';
      case 'AA_LARGE': return 'bg-yellow-500';
      case 'FAIL': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  const getRatingDescription = (rating: string) => {
    switch (rating) {
      case 'AAA': return 'Excellent - Passes WCAG AAA (7:1+)';
      case 'AA': return 'Good - Passes WCAG AA (4.5:1+)';
      case 'AA_LARGE': return 'Acceptable for large text (3:1+)';
      case 'FAIL': return 'Fails accessibility standards';
      default: return 'Unknown rating';
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <span className="text-2xl">♿</span>
            Famous AI Accessibility Contrast Checker
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {!isLoaded ? (
            <div className="text-center py-8">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 mx-auto mb-4"></div>
              <p>Loading Famous AI accessibility module...</p>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="color1">Foreground Color</Label>
                  <div className="flex gap-2">
                    <Input
                      id="color1"
                      type="text"
                      value={color1}
                      onChange={(e) => setColor1(e.target.value)}
                      placeholder="#D4AF37"
                    />
                    <div 
                      className="w-12 h-10 border rounded"
                      style={{ backgroundColor: color1 }}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="color2">Background Color</Label>
                  <div className="flex gap-2">
                    <Input
                      id="color2"
                      type="text"
                      value={color2}
                      onChange={(e) => setColor2(e.target.value)}
                      placeholder="#0B0A0A"
                    />
                    <div 
                      className="w-12 h-10 border rounded"
                      style={{ backgroundColor: color2 }}
                    />
                  </div>
                </div>
              </div>

              <Button onClick={testContrast} className="w-full">
                Check Contrast
              </Button>

              {result && (
                <div className="space-y-4">
                  <div className="text-center">
                    <Badge className={`${getRatingColor(result.rating)} text-white px-4 py-2 text-lg`}>
                      {result.rating}
                    </Badge>
                    <p className="mt-2 text-sm text-gray-600">
                      {getRatingDescription(result.rating)}
                    </p>
                  </div>

                  <div 
                    className="p-6 rounded-lg border-2"
                    style={{ 
                      backgroundColor: color2,
                      color: color1,
                      borderColor: color1
                    }}
                  >
                    <h3 className="text-xl font-bold mb-2">Sample Text</h3>
                    <p>This is how text would appear with these colors.</p>
                    <p className="text-sm mt-2">Small text example for testing readability.</p>
                  </div>
                </div>
              )}

              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Console Test:</h4>
                <code className="text-sm bg-gray-100 p-2 rounded block">
                  window.FamousAI.accessibility.checkContrast('{color1}', '{color2}');
                </code>
                {result && (
                  <p className="mt-2 text-sm text-green-600">
                    ✅ Returns: "{result.rating}"
                  </p>
                )}
              </div>
            </>
          )}
        </CardContent>
      </Card>
    </div>
  );
}