import React, { useState } from 'react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';

interface EmpressPanelProps {
  className?: string;
}

const EmpressPanel: React.FC<EmpressPanelProps> = ({ className = '' }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeMode, setActiveMode] = useState('concierge');

  const modes = [
    { key: 'concierge', label: 'Lifestyle Concierge', icon: '👑' },
    { key: 'wellness', label: 'Wellness Guide', icon: '🌿' },
    { key: 'aromatherapy', label: 'Aromatherapy Expert', icon: '🌸' },
    { key: 'research', label: 'Research Assistant', icon: '📚' }
  ];

  return (
    <div className={`fixed bottom-6 right-6 z-50 ${className}`}>
      {/* Main Panel */}
      <Card 
        className="backdrop-blur-md shadow-2xl border-0"
        style={{
          background: 'rgba(13, 13, 13, 0.9)',
          border: '1px solid rgba(255, 224, 138, 0.3)'
        }}
      >
        <div className="p-4">
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <h3 
              className="font-bold text-lg tracking-wide"
              style={{
                fontFamily: '"Playfair Display", serif',
                color: '#F5EBD8',
                textShadow: '0 0 10px rgba(255, 224, 138, 0.3)'
              }}
            >
              iTERRA™ Empress
            </h3>
            <Button
              onClick={() => setIsExpanded(!isExpanded)}
              className="transition-all duration-300 border-0"
              style={{
                background: 'linear-gradient(135deg, #FFD700, #FFA500)',
                color: '#F5EBD8',
                borderRadius: '1rem',
                boxShadow: '0 2px 10px rgba(255, 224, 138, 0.3)'
              }}
              size="sm"
            >
              {isExpanded ? '−' : '+'}
            </Button>
          </div>

          {/* Mode Selector */}
          {isExpanded && (
            <div className="space-y-3">
              <div className="grid grid-cols-2 gap-2">
                {modes.map((mode) => (
                  <Button
                    key={mode.key}
                    onClick={() => setActiveMode(mode.key)}
                    className={`text-xs p-2 transition-all duration-200 border-0 ${
                      activeMode === mode.key
                        ? 'scale-105'
                        : 'hover:scale-105'
                    }`}
                    style={{
                      background: activeMode === mode.key 
                        ? 'linear-gradient(135deg, #CD7F32, #B8860B)' 
                        : 'linear-gradient(135deg, #FFD700, #FFA500)',
                      color: '#F5EBD8',
                      borderRadius: '1rem',
                      fontFamily: '"Playfair Display", serif',
                      boxShadow: '0 2px 8px rgba(255, 224, 138, 0.2)'
                    }}
                  >
                    <span className="mr-1">{mode.icon}</span>
                    {mode.label}
                  </Button>
                ))}
              </div>

              {/* Active Mode Display */}
              <div 
                className="mt-4 p-3 rounded-lg"
                style={{ 
                  background: 'rgba(13, 13, 13, 0.8)',
                  border: '1px solid rgba(255, 224, 138, 0.2)'
                }}
              >
                <p 
                  className="text-sm text-center"
                  style={{
                    color: '#F5EBD8',
                    fontFamily: '"Playfair Display", serif'
                  }}
                >
                  {modes.find(m => m.key === activeMode)?.label} Mode Active
                </p>
              </div>
            </div>
          )}
        </div>
      </Card>
    </div>
  );
};

export default EmpressPanel;