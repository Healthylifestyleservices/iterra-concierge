import React, { useEffect, useState } from 'react';

interface CursorPosition {
  x: number;
  y: number;
}

const SacredCursor: React.FC = () => {
  const [position, setPosition] = useState<CursorPosition>({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    document.addEventListener('mousemove', updatePosition);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      document.removeEventListener('mousemove', updatePosition);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Main cursor */}
      <div
        className={`fixed pointer-events-none z-[9999] transition-all duration-150 ${
          isClicking ? 'scale-75' : 'scale-100'
        }`}
        style={{
          left: position.x - 12,
          top: position.y - 12,
          transform: 'translate(-50%, -50%)'
        }}
      >
        <div className="w-6 h-6 relative">
          {/* Sacred geometry pattern with golden colors for dark background */}
          <div 
            className="absolute inset-0 rounded-full animate-pulse" 
            style={{
              border: '2px solid rgba(255, 215, 0, 0.8)',
              boxShadow: '0 0 10px rgba(255, 224, 138, 0.4)'
            }}
          />
          <div 
            className="absolute inset-1 rounded-full animate-spin" 
            style={{ 
              border: '1px solid rgba(255, 165, 0, 0.6)',
              animationDuration: '3s' 
            }} 
          />
          <div 
            className="absolute inset-2 rounded-full"
            style={{
              background: 'linear-gradient(135deg, rgba(255, 215, 0, 0.4), rgba(255, 165, 0, 0.4))'
            }}
          />
        </div>
      </div>

      {/* Trail effect */}
      <div
        className="fixed pointer-events-none z-[9998] opacity-30"
        style={{
          left: position.x - 20,
          top: position.y - 20,
          transform: 'translate(-50%, -50%)'
        }}
      >
        <div 
          className="w-10 h-10 rounded-full animate-ping" 
          style={{
            border: '1px solid rgba(255, 224, 138, 0.3)',
            boxShadow: '0 0 15px rgba(255, 224, 138, 0.2)'
          }}
        />
      </div>
    </>
  );
};

export default SacredCursor;