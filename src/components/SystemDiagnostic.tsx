import React, { useState, useEffect } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';

interface DiagnosticResult {
  component: string;
  status: 'working' | 'broken' | 'warning';
  details: string;
  error?: string;
}

export default function SystemDiagnostic() {
  const [diagnostics, setDiagnostics] = useState<DiagnosticResult[]>([]);
  const [isRunning, setIsRunning] = useState(false);

  const runDiagnostics = async () => {
    setIsRunning(true);
    const results: DiagnosticResult[] = [];

    // Test main components
    const tests = [
      {
        name: 'iTerraLifestyleConcierge',
        test: () => {
          try {
            const component = document.querySelector('[data-component="iterra-main"]');
            return component ? 'working' : 'warning';
          } catch (e) {
            return 'broken';
          }
        }
      },
      {
        name: 'EmpressPanel',
        test: () => {
          try {
            const panel = document.querySelector('[data-component="empress-panel"]');
            return panel ? 'working' : 'warning';
          } catch (e) {
            return 'broken';
          }
        }
      },
      {
        name: 'Navigation System',
        test: () => {
          try {
            const nav = document.querySelector('nav');
            return nav ? 'working' : 'broken';
          } catch (e) {
            return 'broken';
          }
        }
      },
      {
        name: 'Chat Interface',
        test: () => 'warning' // Known to be incomplete
      },
      {
        name: 'Product Catalog',
        test: () => 'warning' // Exists but may have issues
      }
    ];

    for (const test of tests) {
      await new Promise(resolve => setTimeout(resolve, 500));
      
      try {
        const status = test.test() as 'working' | 'broken' | 'warning';
        results.push({
          component: test.name,
          status,
          details: getStatusDetails(test.name, status)
        });
      } catch (error) {
        results.push({
          component: test.name,
          status: 'broken',
          details: 'Component test failed',
          error: error instanceof Error ? error.message : 'Unknown error'
        });
      }
    }

    setDiagnostics(results);
    setIsRunning(false);
  };

  const getStatusDetails = (component: string, status: string): string => {
    const details: Record<string, Record<string, string>> = {
      'iTerraLifestyleConcierge': {
        working: 'Main component loaded successfully',
        warning: 'Component may not be fully rendered',
        broken: 'Failed to load main component'
      },
      'EmpressPanel': {
        working: 'Assistant panel is functional',
        warning: 'Panel exists but may have limited functionality',
        broken: 'Assistant panel failed to load'
      },
      'Navigation System': {
        working: 'Navigation is functional',
        warning: 'Navigation partially working',
        broken: 'Navigation system not found'
      },
      'Chat Interface': {
        working: 'Chat system fully operational',
        warning: 'Chat interface incomplete or non-functional',
        broken: 'Chat system completely broken'
      },
      'Product Catalog': {
        working: 'Product catalog fully functional',
        warning: 'Product catalog has known issues',
        broken: 'Product catalog not working'
      }
    };

    return details[component]?.[status] || 'Unknown status';
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'working': return 'text-green-400';
      case 'warning': return 'text-yellow-400';
      case 'broken': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'working': return '✅';
      case 'warning': return '⚠️';
      case 'broken': return '❌';
      default: return '❓';
    }
  };

  return (
    <div className="min-h-screen p-6" style={{ background: '#0d0d0d' }}>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4" style={{ 
            color: '#FFD700',
            fontFamily: '"Playfair Display", serif'
          }}>
            System Malfunction Diagnostic
          </h1>
          <p className="text-lg" style={{ color: '#F5EBD8' }}>
            Comprehensive system health check and error detection
          </p>
        </div>

        <div className="mb-6 text-center">
          <Button
            onClick={runDiagnostics}
            disabled={isRunning}
            className="px-8 py-3 text-lg"
            style={{
              background: isRunning 
                ? 'linear-gradient(135deg, #666, #888)' 
                : 'linear-gradient(135deg, #FFD700, #FFA500)',
              color: '#0d0d0d',
              borderRadius: '1rem',
              fontFamily: '"Playfair Display", serif'
            }}
          >
            {isRunning ? 'Running Diagnostics...' : 'Run System Diagnostic'}
          </Button>
        </div>

        {diagnostics.length > 0 && (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#FFD700' }}>
              Diagnostic Results
            </h2>
            
            {diagnostics.map((result, index) => (
              <Card key={index} className="p-4" style={{ 
                background: 'rgba(255, 215, 0, 0.1)',
                border: '1px solid rgba(255, 215, 0, 0.3)'
              }}>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-semibold" style={{ color: '#F5EBD8' }}>
                    {result.component}
                  </h3>
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">{getStatusIcon(result.status)}</span>
                    <span className={`font-bold ${getStatusColor(result.status)}`}>
                      {result.status.toUpperCase()}
                    </span>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-2">{result.details}</p>
                
                {result.error && (
                  <div className="mt-2 p-2 rounded" style={{ 
                    background: 'rgba(255, 0, 0, 0.1)',
                    border: '1px solid rgba(255, 0, 0, 0.3)'
                  }}>
                    <p className="text-red-400 font-mono text-sm">
                      Error: {result.error}
                    </p>
                  </div>
                )}
              </Card>
            ))}

            <div className="mt-8 p-4 rounded-lg" style={{ 
              background: 'rgba(255, 215, 0, 0.1)',
              border: '1px solid rgba(255, 215, 0, 0.3)'
            }}>
              <h3 className="text-xl font-bold mb-2" style={{ color: '#FFD700' }}>
                Summary
              </h3>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-green-400">
                    {diagnostics.filter(d => d.status === 'working').length}
                  </div>
                  <div className="text-sm text-gray-300">Working</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-yellow-400">
                    {diagnostics.filter(d => d.status === 'warning').length}
                  </div>
                  <div className="text-sm text-gray-300">Warnings</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-red-400">
                    {diagnostics.filter(d => d.status === 'broken').length}
                  </div>
                  <div className="text-sm text-gray-300">Broken</div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}