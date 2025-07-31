import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { AlertTriangle, XCircle, CheckCircle } from 'lucide-react';

export const ErrorReport = () => {
  const errors = [
    {
      type: 'CRITICAL',
      component: 'Font Loading',
      issue: 'Missing font-avenir and font-cormorant classes in Tailwind config',
      fix: 'Add custom fonts to tailwind.config.ts or use existing fonts',
      status: 'error'
    },
    {
      type: 'WARNING', 
      component: 'Icon Assets',
      issue: 'SVG icons in /public/icons/ may not exist',
      fix: 'Check if all category icons exist or add fallback handling',
      status: 'warning'
    },
    {
      type: 'INFO',
      component: 'Environment',
      issue: 'App loads but may have missing .env variables',
      fix: 'Create .env file with VITE_SUPABASE_URL and VITE_DOTERRA_API_KEY',
      status: 'success'
    },
    {
      type: 'CRITICAL',
      component: 'Component Structure',
      issue: 'All main components exist and should render',
      fix: 'No action needed - components are properly structured',
      status: 'success'
    }
  ];

  const getIcon = (status: string) => {
    switch (status) {
      case 'error': return <XCircle className="w-5 h-5 text-red-500" />;
      case 'warning': return <AlertTriangle className="w-5 h-5 text-yellow-500" />;
      case 'success': return <CheckCircle className="w-5 h-5 text-green-500" />;
      default: return null;
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-red-600">
            🚨 iTERRA App Error Analysis Report
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <h3 className="font-bold text-red-800 mb-2">WHITE SCREEN DIAGNOSIS:</h3>
              <p className="text-red-700">Your app is likely failing due to missing Tailwind font classes (font-avenir, font-cormorant) that don't exist in your config.</p>
            </div>
            
            {errors.map((error, index) => (
              <div key={index} className="border rounded-lg p-4">
                <div className="flex items-start gap-3">
                  {getIcon(error.status)}
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className={`px-2 py-1 text-xs rounded ${
                        error.type === 'CRITICAL' ? 'bg-red-100 text-red-800' :
                        error.type === 'WARNING' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-blue-100 text-blue-800'
                      }`}>
                        {error.type}
                      </span>
                      <span className="font-semibold">{error.component}</span>
                    </div>
                    <p className="text-gray-700 mb-2">{error.issue}</p>
                    <p className="text-sm text-gray-600 bg-gray-50 p-2 rounded">
                      <strong>Fix:</strong> {error.fix}
                    </p>
                  </div>
                </div>
              </div>
            ))}
            
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h3 className="font-bold text-blue-800 mb-2">IMMEDIATE ACTIONS:</h3>
              <ol className="list-decimal list-inside text-blue-700 space-y-1">
                <li>Update tailwind.config.ts to include proper font families</li>
                <li>Replace font-avenir and font-cormorant with font-sans in components</li>
                <li>Check browser console (F12) for specific error messages</li>
                <li>Verify all SVG icons exist in /public/icons/ directory</li>
                <li>Create .env file with required environment variables</li>
              </ol>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};