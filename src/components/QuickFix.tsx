import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';

export const QuickFix = () => {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  const tailwindFix = `// Add to tailwind.config.ts
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        'avenir': ['Inter', 'sans-serif'],
        'cormorant': ['Playfair Display', 'serif']
      }
    }
  }
}`;

  const envFix = `# Create .env file in root
VITE_SUPABASE_URL=your_supabase_url_here
VITE_SUPABASE_ANON_KEY=your_supabase_key_here
VITE_DOTERRA_API_KEY=your_doterra_key_here
VITE_DOTERRA_ASSOCIATE_ID=15996087`;

  return (
    <div className="p-6 max-w-4xl mx-auto space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-xl text-green-600">🔧 QUICK FIXES FOR WHITE SCREEN</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h3 className="font-bold mb-2">1. Fix Tailwind Font Classes</h3>
            <div className="bg-gray-100 p-3 rounded text-sm font-mono">
              <pre>{tailwindFix}</pre>
            </div>
            <Button onClick={() => copyToClipboard(tailwindFix)} className="mt-2" size="sm">
              Copy Tailwind Fix
            </Button>
          </div>
          
          <div>
            <h3 className="font-bold mb-2">2. Create Environment File</h3>
            <div className="bg-gray-100 p-3 rounded text-sm font-mono">
              <pre>{envFix}</pre>
            </div>
            <Button onClick={() => copyToClipboard(envFix)} className="mt-2" size="sm">
              Copy .env Template
            </Button>
          </div>
          
          <div className="bg-red-50 border border-red-200 rounded p-4">
            <h3 className="font-bold text-red-800 mb-2">ROOT CAUSE:</h3>
            <p className="text-red-700">
              Your app uses <code>font-avenir</code> and <code>font-cormorant</code> classes that don't exist in Tailwind config.
              This causes CSS compilation to fail, resulting in a white screen.
            </p>
          </div>
          
          <div className="bg-green-50 border border-green-200 rounded p-4">
            <h3 className="font-bold text-green-800 mb-2">AFTER FIXES:</h3>
            <ol className="list-decimal list-inside text-green-700">
              <li>Save the tailwind.config.ts changes</li>
              <li>Create .env file in project root</li>
              <li>Restart dev server: npm run dev</li>
              <li>App should load iTERRA main page</li>
            </ol>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};