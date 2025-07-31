import React, { useEffect, useRef } from 'react';

interface FamousAIContainerProps {
  isVisible: boolean;
  onClose: () => void;
}

const FamousAIContainer: React.FC<FamousAIContainerProps> = ({ isVisible, onClose }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initialize FamousAI integration
    if (typeof window !== 'undefined') {
      (window as any).FamousAI = {
        toggle: () => {
          onClose();
        }
      };
    }
  }, [onClose]);

  if (!isVisible) return null;

  return (
    <div
      ref={containerRef}
      className="fixed z-50 rounded-xl border"
      style={{
        bottom: '100px',
        right: '30px',
        width: '400px',
        height: '500px',
        background: '#0B0A0A',
        border: '1px solid #D4AF37',
        borderRadius: '12px'
      }}
    >
      <div className="flex justify-between items-center p-4 border-b border-amber-600/30">
        <h3 className="text-amber-400 font-serif text-lg">iTerra Concierge</h3>
        <button
          onClick={onClose}
          className="text-amber-400 hover:text-amber-300 text-xl font-bold bg-transparent border-none cursor-pointer"
        >
          ×
        </button>
      </div>
      <div className="p-4 h-full overflow-y-auto">
        <div className="text-amber-100/80 text-sm">
          <p>Welcome to your luxury wellness concierge.</p>
          <p className="mt-2">How may I assist you today?</p>
        </div>
      </div>
    </div>
  );
};

export default FamousAIContainer;