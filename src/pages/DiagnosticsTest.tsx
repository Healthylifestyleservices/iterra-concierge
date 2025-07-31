import React from 'react';
import { ComprehensiveErrorDiagnostics } from '@/components/ComprehensiveErrorDiagnostics';
import { SystemHealthCheck } from '@/components/SystemHealthCheck';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

export const DiagnosticsTest: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 p-6">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <Card className="bg-white/10 backdrop-blur-md border-white/20">
          <CardHeader>
            <CardTitle className="text-white text-center text-2xl">
              🔧 Complete Application Diagnostics
            </CardTitle>
            <div className="flex justify-center gap-4 mt-4">
              <Button 
                onClick={() => navigate('/')}
                variant="outline"
                className="bg-white/20 border-white/30 text-white hover:bg-white/30"
              >
                ← Back to App
              </Button>
              <Button 
                onClick={() => window.location.reload()}
                className="bg-blue-600 hover:bg-blue-700 text-white"
              >
                🔄 Reload Page
              </Button>
            </div>
          </CardHeader>
        </Card>

        {/* Error Diagnostics */}
        <div className="bg-white/5 backdrop-blur-md rounded-lg p-6">
          <ComprehensiveErrorDiagnostics />
        </div>

        {/* System Health Check */}
        <div className="bg-white/5 backdrop-blur-md rounded-lg p-6">
          <SystemHealthCheck />
        </div>

        {/* Additional Debug Info */}
        <Card className="bg-white/10 backdrop-blur-md border-white/20">
          <CardHeader>
            <CardTitle className="text-white">🐛 Debug Information</CardTitle>
          </CardHeader>
          <CardContent className="text-white space-y-4">
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <strong>User Agent:</strong>
                <p className="text-gray-300 break-all">{navigator.userAgent}</p>
              </div>
              <div>
                <strong>Screen Resolution:</strong>
                <p className="text-gray-300">{screen.width}x{screen.height}</p>
              </div>
              <div>
                <strong>Viewport:</strong>
                <p className="text-gray-300">{window.innerWidth}x{window.innerHeight}</p>
              </div>
              <div>
                <strong>Color Depth:</strong>
                <p className="text-gray-300">{screen.colorDepth} bits</p>
              </div>
              <div>
                <strong>Language:</strong>
                <p className="text-gray-300">{navigator.language}</p>
              </div>
              <div>
                <strong>Online Status:</strong>
                <p className="text-gray-300">{navigator.onLine ? 'Online' : 'Offline'}</p>
              </div>
            </div>
            
            <div className="mt-6">
              <strong>Current URL:</strong>
              <p className="text-gray-300 break-all">{window.location.href}</p>
            </div>
            
            <div className="mt-4">
              <strong>Loaded Stylesheets:</strong>
              <p className="text-gray-300">{document.styleSheets.length} stylesheets detected</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};