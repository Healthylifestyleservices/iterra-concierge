import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Copy, Check, RefreshCw } from 'lucide-react';

export function KeyRotationInstructions() {
  const [generatedKey, setGeneratedKey] = useState('');
  const [copied, setCopied] = useState(false);

  const generateRandomKey = () => {
    const array = new Uint8Array(32);
    crypto.getRandomValues(array);
    const newKey = Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('');
    setGeneratedKey(newKey);
    setCopied(false);
  };

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const supabaseCommand = `supabase secrets set SUPABASE_ANON_KEY=${generatedKey || '$(openssl rand -hex 32)'}`;
  const envUpdate = `VITE_SUPABASE_ANON_KEY=${generatedKey || 'your_new_key_here'}`;

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center flex items-center justify-center gap-2">
          <RefreshCw className="w-6 h-6" />
          Supabase Key Rotation Guide
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <Alert>
          <AlertDescription>
            <strong>Important:</strong> Key rotation requires Supabase CLI access and proper permissions. 
            Follow these steps to securely rotate your anonymous key.
          </AlertDescription>
        </Alert>

        <div className="space-y-4">
          <div>
            <Label className="text-lg font-semibold">Step 1: Generate New Key</Label>
            <div className="mt-2 flex gap-2">
              <Button onClick={generateRandomKey} className="flex items-center gap-2">
                <RefreshCw className="w-4 h-4" />
                Generate Random Key
              </Button>
            </div>
            {generatedKey && (
              <div className="mt-2 p-3 bg-gray-100 rounded-lg">
                <div className="flex items-center justify-between">
                  <code className="text-sm break-all">{generatedKey}</code>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => copyToClipboard(generatedKey)}
                    className="ml-2 flex items-center gap-1"
                  >
                    {copied ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                    {copied ? 'Copied!' : 'Copy'}
                  </Button>
                </div>
              </div>
            )}
          </div>

          <div>
            <Label className="text-lg font-semibold">Step 2: Update Supabase Secret</Label>
            <p className="text-sm text-gray-600 mt-1">
              Run this command in your terminal (requires Supabase CLI):
            </p>
            <div className="mt-2 p-3 bg-black text-green-400 rounded-lg font-mono text-sm">
              <div className="flex items-center justify-between">
                <code>{supabaseCommand}</code>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => copyToClipboard(supabaseCommand)}
                  className="ml-2 bg-gray-800 border-gray-600 text-white hover:bg-gray-700"
                >
                  <Copy className="w-3 h-3" />
                </Button>
              </div>
            </div>
          </div>

          <div>
            <Label className="text-lg font-semibold">Step 3: Update Environment Variables</Label>
            <p className="text-sm text-gray-600 mt-1">
              Update your .env files with the new key:
            </p>
            <div className="mt-2 p-3 bg-blue-50 rounded-lg font-mono text-sm">
              <div className="flex items-center justify-between">
                <code>{envUpdate}</code>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => copyToClipboard(envUpdate)}
                  className="ml-2"
                >
                  <Copy className="w-3 h-3" />
                </Button>
              </div>
            </div>
          </div>

          <div>
            <Label className="text-lg font-semibold">Step 4: Restart Application</Label>
            <p className="text-sm text-gray-600 mt-1">
              Restart your development server and production deployments to use the new key.
            </p>
          </div>
        </div>

        <Alert className="border-yellow-500 bg-yellow-50">
          <AlertDescription>
            <strong>Security Notes:</strong>
            <ul className="list-disc list-inside mt-2 space-y-1 text-sm">
              <li>Never commit the new key to version control</li>
              <li>Update all environments (dev, staging, production)</li>
              <li>Monitor for any authentication errors after rotation</li>
              <li>Keep the old key temporarily in case rollback is needed</li>
            </ul>
          </AlertDescription>
        </Alert>

        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="font-semibold mb-2">Alternative: Manual OpenSSL Generation</h3>
          <div className="space-y-2">
            <p className="text-sm text-gray-600">Generate key manually:</p>
            <div className="p-2 bg-black text-green-400 rounded font-mono text-sm">
              <code>openssl rand -hex 32</code>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}