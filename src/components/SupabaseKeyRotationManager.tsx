import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { supabase } from '@/lib/supabase';

interface KeyRotationResult {
  success: boolean;
  message: string;
  newKey?: string;
}

export function SupabaseKeyRotationManager() {
  const [isRotating, setIsRotating] = useState(false);
  const [result, setResult] = useState<KeyRotationResult | null>(null);
  const [customKey, setCustomKey] = useState('');

  const generateRandomKey = () => {
    const array = new Uint8Array(32);
    crypto.getRandomValues(array);
    return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('');
  };

  const rotateKey = async (newKey?: string) => {
    setIsRotating(true);
    setResult(null);

    try {
      const keyToUse = newKey || generateRandomKey();
      
      // Call Supabase function to rotate the key
      const { data, error } = await supabase.functions.invoke('rotate-anon-key', {
        body: { newKey: keyToUse }
      });

      if (error) {
        setResult({
          success: false,
          message: `Key rotation failed: ${error.message}`
        });
      } else {
        setResult({
          success: true,
          message: 'Key rotation successful! Please update your environment variables.',
          newKey: keyToUse
        });
      }
    } catch (error) {
      setResult({
        success: false,
        message: `Error: ${error instanceof Error ? error.message : 'Unknown error'}`
      });
    } finally {
      setIsRotating(false);
    }
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">
          Supabase Key Rotation Manager
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <div>
            <Label htmlFor="custom-key">Custom Key (optional)</Label>
            <Input
              id="custom-key"
              type="text"
              placeholder="Leave empty to generate random key"
              value={customKey}
              onChange={(e) => setCustomKey(e.target.value)}
              className="mt-1"
            />
          </div>
          
          <div className="flex gap-3">
            <Button
              onClick={() => rotateKey()}
              disabled={isRotating}
              className="flex-1"
            >
              {isRotating ? 'Rotating...' : 'Generate & Rotate Key'}
            </Button>
            
            <Button
              onClick={() => rotateKey(customKey)}
              disabled={isRotating || !customKey}
              variant="outline"
              className="flex-1"
            >
              Use Custom Key
            </Button>
          </div>
        </div>

        {result && (
          <Alert className={result.success ? 'border-green-500' : 'border-red-500'}>
            <AlertDescription>
              {result.message}
              {result.newKey && (
                <div className="mt-2 p-2 bg-gray-100 rounded font-mono text-sm break-all">
                  New Key: {result.newKey}
                </div>
              )}
            </AlertDescription>
          </Alert>
        )}

        <div className="text-sm text-gray-600 space-y-2">
          <p><strong>Instructions:</strong></p>
          <ol className="list-decimal list-inside space-y-1">
            <li>Click "Generate & Rotate Key" to create a new random key</li>
            <li>Or enter a custom key and click "Use Custom Key"</li>
            <li>Update your environment variables with the new key</li>
            <li>Restart your application to use the new key</li>
          </ol>
        </div>
      </CardContent>
    </Card>
  );
}