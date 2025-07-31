import React, { useState } from 'react';

type ViewMode = 'app' | 'analysis' | 'diagnostic';

export default function MainPage() {
  const [currentView, setCurrentView] = useState<ViewMode>('app');

  const buttonStyle = {
    background: 'linear-gradient(135deg, #F7E7CE, #D4AF37)',
    color: '#0d0d0d',
    border: 'none',
    borderRadius: '1rem',
    padding: '8px 16px',
    fontFamily: '"Playfair Display", serif',
    cursor: 'pointer',
    margin: '4px'
  };

  return (
    <div style={{ 
      minHeight: '100vh', 
      background: '#0d0d0d', 
      color: '#F5EBD8',
      padding: '20px'
    }}>
      <div style={{ position: 'fixed', top: '20px', left: '20px', zIndex: 50 }}>
        <button
          onClick={() => setCurrentView('app')}
          style={buttonStyle}
        >
          🏠 Main App
        </button>
        <button
          onClick={() => setCurrentView('analysis')}
          style={buttonStyle}
        >
          📊 Analysis
        </button>
        <button
          onClick={() => setCurrentView('diagnostic')}
          style={buttonStyle}
        >
          🔧 Diagnostics
        </button>
      </div>

      <div style={{ paddingTop: '80px', textAlign: 'center' }}>
        {currentView === 'app' && (
          <div>
            <h1 style={{ 
              fontFamily: '"Playfair Display", serif',
              fontSize: '48px',
              color: '#F5EBD8',
              marginBottom: '20px'
            }}>
              iTERRA™ Lifestyle Concierge
            </h1>
            <p>Clean, simple wellness interface</p>
            <div style={{ marginTop: '40px' }}>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '20px',
                maxWidth: '800px',
                margin: '0 auto'
              }}>
                {[
                  { name: 'Men\'s Wellness', path: '/wellness' },
                  { name: 'Women\'s Wellness', path: '/wellness' }, 
                  { name: 'Pet Care', path: '/wellness' },
                  { name: 'Home & Family', path: '/wellness' },
                  { name: 'Business Tools', path: '/wellness' },
                  { name: 'Sacred Geometry', path: '/geometry' }
                ].map((item, index) => (
                  <button
                    key={index}
                    style={{
                      ...buttonStyle,
                      padding: '16px 24px',
                      fontSize: '16px',
                      fontWeight: '600'
                    }}
                    onClick={() => {
                      if (item.path === '/geometry') {
                        window.location.href = '/geometry';
                      } else {
                        window.location.href = item.path;
                      }
                    }}
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
        
        {currentView === 'analysis' && (
          <div>
            <h2>App Analysis</h2>
            <p>System analysis tools would appear here</p>
          </div>
        )}
        
        {currentView === 'diagnostic' && (
          <div>
            <h2>Diagnostic Dashboard</h2>
            <p>System diagnostics would appear here</p>
          </div>
        )}
      </div>
    </div>
  );
}