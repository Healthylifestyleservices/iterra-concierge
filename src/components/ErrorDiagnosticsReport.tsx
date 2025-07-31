import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { AlertTriangle, XCircle, CheckCircle, RefreshCw, Bug } from 'lucide-react';

interface ErrorCheck {
  name: string;
  status: 'pass' | 'fail' | 'warning';
  message: string;
  fix?: string;
  critical: boolean;
}

export const ErrorDiagnosticsReport = () => {
  const [checks, setChecks] = useState<ErrorCheck[]>([]);
  const [isRunning, setIsRunning] = useState(false);
  const [consoleErrors, setConsoleErrors] = useState<string[]>([]);

  const runDiagnostics = async () => {
    setIsRunning(true);
    const results: ErrorCheck[] = [];

    // Capture console errors
    const originalError = console.error;
    const errors: string[] = [];
    console.error = (...args) => {
      errors.push(args.join(' '));
      originalError(...args);
    };

    // Check 1: FlowerOfLife Component
    try {
      const flowerModule = await import('./FlowerOfLife');
      results.push({
        name: 'FlowerOfLife Component',
        status: flowerModule ? 'pass' : 'fail',
        message: 'Component imports successfully',
        critical: true
      });
    } catch (error) {
      results.push({
        name: 'FlowerOfLife Component',
        status: 'fail',
        message: `Import failed: ${error}`,
        fix: 'Check FlowerOfLife.jsx exists and has no syntax errors',
        critical: true
      });
    }

    // Check 2: CSS Classes
    const testDiv = document.createElement('div');
    testDiv.className = 'flower-wrapper';
    document.body.appendChild(testDiv);
    const styles = window.getComputedStyle(testDiv);
    const hasStyles = styles.position !== 'static' || styles.display !== 'block';
    document.body.removeChild(testDiv);

    results.push({
      name: 'FlowerOfLife CSS',
      status: hasStyles ? 'pass' : 'warning',
      message: hasStyles ? 'CSS classes found' : 'CSS classes may be missing',
      fix: 'Check FlowerOfLife.css is imported',
      critical: false
    });

    // Check 3: Font Loading
    const fontLoaded = document.fonts.check('16px "Cinzel Decorative"');
    results.push({
      name: 'Cinzel Decorative Font',
      status: fontLoaded ? 'pass' : 'warning',
      message: fontLoaded ? 'Font is loaded' : 'Font not detected',
      fix: 'Check Google Fonts import in index.html',
      critical: false
    });

    // Check 4: Tailwind Config
    const tailwindTest = document.createElement('div');
    tailwindTest.className = 'font-avenir';
    document.body.appendChild(tailwindTest);
    const fontFamily = window.getComputedStyle(tailwindTest).fontFamily;
    document.body.removeChild(tailwindTest);

    results.push({
      name: 'Tailwind Custom Fonts',
      status: fontFamily.includes('avenir') ? 'pass' : 'fail',
      message: fontFamily.includes('avenir') ? 'Custom fonts working' : 'font-avenir class not found',
      fix: 'Add Avenir to tailwind.config.ts or replace with font-sans',
      critical: true
    });

    // Check 5: Environment Variables
    const hasSupabase = !!import.meta.env.VITE_SUPABASE_URL;
    results.push({
      name: 'Environment Variables',
      status: hasSupabase ? 'pass' : 'warning',
      message: hasSupabase ? 'Supabase URL found' : 'Missing environment variables',
      fix: 'Create .env file with VITE_SUPABASE_URL',
      critical: false
    });

    // Check 6: React Strict Mode Issues
    const reactVersion = React.version;
    results.push({
      name: 'React Version',
      status: 'pass',
      message: `React ${reactVersion} detected`,
      critical: false
    });

    console.error = originalError;
    setConsoleErrors(errors);
    setChecks(results);
    setIsRunning(false);
  };

  useEffect(() => {
    runDiagnostics();
  }, []);

  const criticalErrors = checks.filter(c => c.status === 'fail' && c.critical);
  const warnings = checks.filter(c => c.status === 'warning' || (c.status === 'fail' && !c.critical));
  const passing = checks.filter(c => c.status === 'pass');

  return (
    <div className="p-6 max-w-6xl mx-auto space-y-6">
      <Card className="border-red-500">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-red-600">
            <Bug className="w-6 h-6" />
            Error Diagnostics Report
            <Button 
              onClick={runDiagnostics} 
              disabled={isRunning}
              size="sm"
              className="ml-auto"
            >
              <RefreshCw className={`w-4 h-4 ${isRunning ? 'animate-spin' : ''}`} />
              {isRunning ? 'Running...' : 'Re-run'}
            </Button>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <div className="bg-red-50 p-4 rounded-lg">
              <div className="flex items-center gap-2 text-red-700">
                <XCircle className="w-5 h-5" />
                <span className="font-semibold">Critical Errors</span>
              </div>
              <div className="text-2xl font-bold text-red-600">{criticalErrors.length}</div>
            </div>
            <div className="bg-yellow-50 p-4 rounded-lg">
              <div className="flex items-center gap-2 text-yellow-700">
                <AlertTriangle className="w-5 h-5" />
                <span className="font-semibold">Warnings</span>
              </div>
              <div className="text-2xl font-bold text-yellow-600">{warnings.length}</div>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <div className="flex items-center gap-2 text-green-700">
                <CheckCircle className="w-5 h-5" />
                <span className="font-semibold">Passing</span>
              </div>
              <div className="text-2xl font-bold text-green-600">{passing.length}</div>
            </div>
          </div>

          <div className="space-y-4">
            {checks.map((check, index) => (
              <div key={index} className={`border rounded-lg p-4 ${
                check.status === 'fail' && check.critical ? 'border-red-500 bg-red-50' :
                check.status === 'fail' ? 'border-orange-500 bg-orange-50' :
                check.status === 'warning' ? 'border-yellow-500 bg-yellow-50' :
                'border-green-500 bg-green-50'
              }`}>
                <div className="flex items-start gap-3">
                  {check.status === 'fail' ? 
                    <XCircle className="w-5 h-5 text-red-500 mt-0.5" /> :
                    check.status === 'warning' ?
                    <AlertTriangle className="w-5 h-5 text-yellow-500 mt-0.5" /> :
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                  }
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-semibold">{check.name}</span>
                      {check.critical && (
                        <span className="px-2 py-1 text-xs bg-red-100 text-red-800 rounded">
                          CRITICAL
                        </span>
                      )}
                    </div>
                    <p className="text-gray-700 mb-2">{check.message}</p>
                    {check.fix && (
                      <div className="bg-white p-2 rounded border-l-4 border-blue-500">
                        <span className="text-sm font-medium text-blue-700">Fix: </span>
                        <span className="text-sm text-blue-600">{check.fix}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {consoleErrors.length > 0 && (
            <div className="mt-6">
              <h3 className="font-bold text-red-600 mb-2">Console Errors Detected:</h3>
              <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm max-h-40 overflow-y-auto">
                {consoleErrors.map((error, index) => (
                  <div key={index} className="mb-1">{error}</div>
                ))}
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};