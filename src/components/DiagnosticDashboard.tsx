import React, { useState } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import SystemDiagnostic from './SystemDiagnostic';
import ErrorDiagnostic from './ErrorDiagnostic';

type DiagnosticView = 'dashboard' | 'system' | 'errors';

export default function DiagnosticDashboard() {
  const [currentView, setCurrentView] = useState<DiagnosticView>('dashboard');

  if (currentView === 'system') {
    return (
      <div>
        <div className="fixed top-4 left-4 z-50">
          <Button
            onClick={() => setCurrentView('dashboard')}
            className="mb-4"
            style={{
              background: 'linear-gradient(135deg, #FFD700, #FFA500)',
              color: '#0d0d0d',
              borderRadius: '1rem'
            }}
          >
            ← Back to Dashboard
          </Button>
        </div>
        <SystemDiagnostic />
      </div>
    );
  }

  if (currentView === 'errors') {
    return (
      <div>
        <div className="fixed top-4 left-4 z-50">
          <Button
            onClick={() => setCurrentView('dashboard')}
            className="mb-4"
            style={{
              background: 'linear-gradient(135deg, #FFD700, #FFA500)',
              color: '#0d0d0d',
              borderRadius: '1rem'
            }}
          >
            ← Back to Dashboard
          </Button>
        </div>
        <ErrorDiagnostic />
      </div>
    );
  }

  return (
    <div className="min-h-screen p-6" style={{ background: '#0d0d0d' }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold mb-4" style={{ 
            color: '#FFD700',
            fontFamily: '"Playfair Display", serif'
          }}>
            🔧 System Malfunction Center 🔧
          </h1>
          <p className="text-xl" style={{ color: '#F5EBD8' }}>
            Comprehensive diagnostic and repair system for iTERRA app
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <Card 
            className="p-8 cursor-pointer hover:scale-105 transition-transform"
            style={{ 
              background: 'linear-gradient(135deg, rgba(255, 0, 0, 0.2), rgba(255, 100, 100, 0.1))',
              border: '2px solid rgba(255, 0, 0, 0.3)'
            }}
            onClick={() => setCurrentView('system')}
          >
            <div className="text-center">
              <div className="text-6xl mb-4">🚨</div>
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#FFD700' }}>
                System Health Check
              </h2>
              <p className="text-gray-300 mb-4">
                Run comprehensive diagnostics on all app components and systems
              </p>
              <ul className="text-left text-sm text-gray-400 space-y-1">
                <li>• Component functionality testing</li>
                <li>• Navigation system validation</li>
                <li>• UI element responsiveness</li>
                <li>• Performance monitoring</li>
              </ul>
            </div>
          </Card>

          <Card 
            className="p-8 cursor-pointer hover:scale-105 transition-transform"
            style={{ 
              background: 'linear-gradient(135deg, rgba(255, 165, 0, 0.2), rgba(255, 215, 0, 0.1))',
              border: '2px solid rgba(255, 165, 0, 0.3)'
            }}
            onClick={() => setCurrentView('errors')}
          >
            <div className="text-center">
              <div className="text-6xl mb-4">🐛</div>
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#FFD700' }}>
                Error Analysis Report
              </h2>
              <p className="text-gray-300 mb-4">
                Detailed breakdown of all known issues, bugs, and missing features
              </p>
              <ul className="text-left text-sm text-gray-400 space-y-1">
                <li>• Critical system failures</li>
                <li>• Missing functionality</li>
                <li>• Design inconsistencies</li>
                <li>• Performance bottlenecks</li>
              </ul>
            </div>
          </Card>
        </div>

        <Card className="p-8" style={{ 
          background: 'rgba(255, 215, 0, 0.1)',
          border: '1px solid rgba(255, 215, 0, 0.3)'
        }}>
          <h2 className="text-3xl font-bold mb-6 text-center" style={{ color: '#FFD700' }}>
            Quick Status Overview
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-4 rounded-lg" style={{ background: 'rgba(255, 0, 0, 0.1)' }}>
              <div className="text-4xl mb-2">❌</div>
              <h3 className="text-lg font-bold text-red-400 mb-2">Critical Issues</h3>
              <ul className="text-sm text-gray-300 space-y-1">
                <li>• Chat system non-functional</li>
                <li>• No user authentication</li>
                <li>• API integrations incomplete</li>
                <li>• Database queries missing</li>
              </ul>
            </div>

            <div className="text-center p-4 rounded-lg" style={{ background: 'rgba(255, 255, 0, 0.1)' }}>
              <div className="text-4xl mb-2">⚠️</div>
              <h3 className="text-lg font-bold text-yellow-400 mb-2">Warnings</h3>
              <ul className="text-sm text-gray-300 space-y-1">
                <li>• Navigation partially working</li>
                <li>• Design inconsistencies</li>
                <li>• Mobile responsiveness issues</li>
                <li>• Performance not optimized</li>
              </ul>
            </div>

            <div className="text-center p-4 rounded-lg" style={{ background: 'rgba(0, 255, 0, 0.1)' }}>
              <div className="text-4xl mb-2">✅</div>
              <h3 className="text-lg font-bold text-green-400 mb-2">Working Features</h3>
              <ul className="text-sm text-gray-300 space-y-1">
                <li>• Basic UI components</li>
                <li>• Styling system</li>
                <li>• Component structure</li>
                <li>• Basic navigation</li>
              </ul>
            </div>
          </div>
        </Card>

        <div className="mt-8 text-center">
          <p className="text-lg" style={{ color: '#F5EBD8' }}>
            Select a diagnostic tool above to begin system analysis
          </p>
        </div>
      </div>
    </div>
  );
}