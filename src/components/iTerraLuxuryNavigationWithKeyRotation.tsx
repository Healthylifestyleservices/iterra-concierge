import React, { useState } from 'react';
import { FlowerOfLife } from './sacred-geometry/FlowerOfLife';
import { HexagramGrid } from './sacred-geometry/HexagramGrid';
import { FibonacciSpiral } from './sacred-geometry/FibonacciSpiral';
import { NavigationDropdownContent } from './NavigationDropdownContent';
import { KeyRotationRoute } from './KeyRotationRoute';

const iTerraLuxuryNavigationWithKeyRotation: React.FC = () => {
  const [hoveredButton, setHoveredButton] = useState<string | null>(null);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [currentView, setCurrentView] = useState<string>('home');
  const [cursorGeometry, setCursorGeometry] = useState(0);

  const buttons = [
    'Masculine Vitality',
    'Feminine Energy', 
    'Pet Harmony',
    'Home',
    'Wellness Sanctuary',
    'Wellness Entrepreneurship',
    'Wisdom of Wellness',
    'Security Management'
  ];

  const geometryComponents = [FlowerOfLife, HexagramGrid, FibonacciSpiral];
  const CurrentGeometry = geometryComponents[cursorGeometry];

  const handleButtonHover = (button: string) => {
    setHoveredButton(button);
    setCursorGeometry(prev => (prev + 1) % 3);
  };

  const handleButtonClick = (button: string) => {
    if (button === 'Security Management') {
      setCurrentView('key-rotation');
      setActiveDropdown(null);
    } else if (button === 'Home') {
      setCurrentView('home');
      setActiveDropdown(null);
    } else {
      setActiveDropdown(activeDropdown === button ? null : button);
    }
  };

  if (currentView === 'key-rotation') {
    return (
      <div className="min-h-screen">
        <div className="fixed top-4 left-4 z-50">
          <button
            onClick={() => setCurrentView('home')}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            ← Back to Home
          </button>
        </div>
        <KeyRotationRoute />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Volcanic Stone Underlay */}
      <div 
        className="absolute inset-0 opacity-20" 
        style={{
          backgroundImage: `
            radial-gradient(circle at 25% 25%, #1a1a1a 0%, transparent 50%),
            radial-gradient(circle at 75% 75%, #1a1a1a 0%, transparent 50%),
            radial-gradient(circle at 50% 50%, #0d0d0d 0%, transparent 70%)
          `,
          backgroundSize: '400px 400px, 300px 300px, 500px 500px'
        }} 
      />
      
      {/* Subterranean Amber Glow */}
      <div 
        className="absolute inset-0 opacity-40"
        style={{
          background: 'radial-gradient(ellipse 80% 50% at 50% 50%, #FFB347 0%, transparent 70%)'
        }}
      />
      
      {/* Brushed Metal Accents */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-amber-700 to-transparent opacity-30" />
      <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-amber-700 to-transparent opacity-30" />
      
      {/* Header */}
      <header className="text-center pt-20 pb-16 relative z-10">
        <h1 
          className="text-7xl font-bold tracking-widest"
          style={{
            color: '#F5EBD8',
            fontFamily: '"Playfair Display", "Times New Roman", serif',
            textShadow: '0 0 40px rgba(255, 224, 138, 0.6), 0 0 80px rgba(255, 179, 71, 0.3)',
            letterSpacing: '0.1em',
            fontWeight: '300'
          }}
        >
          iTERRA™ Lifestyle Concierge
        </h1>
      </header>

      {/* Navigation */}
      <nav className="flex flex-wrap justify-center gap-6 px-8 max-w-7xl mx-auto relative z-10">
        {buttons.map((button, index) => {
          const gradientColors = [
            ['#FFD700', '#FFA500', '#FF8C00'], // Gold
            ['#CD7F32', '#B8860B', '#C5A880'], // Bronze  
            ['#F8F8FF', '#E6E6FA', '#D8BFD8']  // Pearl
          ];
          const colors = gradientColors[index % 3];
          
          return (
            <div key={button} className="relative">
              <button
                className={`
                  px-8 py-4 rounded-3xl transition-all duration-300 ease-out relative overflow-hidden
                  ${hoveredButton === button ? 'transform -translate-y-0.5 scale-105' : ''}
                `}
                style={{
                  background: `linear-gradient(135deg, ${colors[0]} 0%, ${colors[1]} 50%, ${colors[2]} 100%)`,
                  boxShadow: hoveredButton === button 
                    ? `0 8px 32px rgba(255, 224, 138, 0.4), inset 0 2px 16px rgba(255, 255, 255, 0.4), 0 0 20px rgba(255, 224, 138, 0.3)`
                    : `0 4px 20px rgba(255, 224, 138, 0.3), inset 0 1px 8px rgba(255, 255, 255, 0.3)`,
                  border: 'none',
                  color: index % 3 === 2 ? '#2D2D2D' : '#F5EBD8',
                  fontFamily: '"Playfair Display", "Times New Roman", serif',
                  fontSize: '1.1rem',
                  fontWeight: '500',
                  textShadow: index % 3 === 2 ? 'none' : '0 1px 3px rgba(0, 0, 0, 0.5)',
                  backdropFilter: 'blur(10px)'
                }}
                onMouseEnter={() => handleButtonHover(button)}
                onMouseLeave={() => setHoveredButton(null)}
                onClick={() => handleButtonClick(button)}
              >
                {button}
                
                {/* Surface Shimmer */}
                {hoveredButton === button && (
                  <div 
                    className="absolute inset-0 rounded-3xl opacity-60"
                    style={{
                      background: 'linear-gradient(45deg, transparent 30%, rgba(255, 255, 255, 0.9) 50%, transparent 70%)',
                      animation: 'shimmer 2s ease-in-out infinite'
                    }}
                  />
                )}
              </button>
              
              {/* Pearl Blur Dropdown */}
              {activeDropdown === button && (
                <div 
                  className="absolute top-full left-1/2 transform -translate-x-1/2 mt-3 w-80 rounded-2xl shadow-2xl z-20"
                  style={{
                    background: 'rgba(248, 248, 255, 0.1)',
                    backdropFilter: 'blur(25px)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    animation: 'fadeSlide 0.4s ease-out'
                  }}
                >
                  <NavigationDropdownContent buttonName={button} />
                </div>
              )}
            </div>
          );
        })}
      </nav>

      {/* Sacred Geometry Cursor */}
      {hoveredButton && (
        <div 
          className="fixed pointer-events-none z-30"
          style={{
            left: '50%',
            top: '45%',
            transform: 'translate(-50%, -50%)'
          }}
        >
          <CurrentGeometry 
            size={32} 
            color="#FFD700" 
            style={{ 
              filter: 'drop-shadow(0 0 12px rgba(255, 215, 0, 0.8))',
              animation: 'sacredSpin 15s linear infinite'
            }} 
          />
        </div>
      )}

      <style jsx>{`
        @keyframes shimmer {
          0% { transform: translateX(-120%); }
          100% { transform: translateX(120%); }
        }
        @keyframes sacredSpin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes fadeSlide {
          0% { 
            opacity: 0;
            transform: translateX(-50%) translateY(-10px);
          }
          100% { 
            opacity: 1;
            transform: translateX(-50%) translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default iTerraLuxuryNavigationWithKeyRotation;