import React from 'react';

interface ConciergeButtonProps {
  onClick: () => void;
}

const ConciergeButton: React.FC<ConciergeButtonProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-8 right-8 z-50 px-6 py-3 rounded-full border border-rose-400/50 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl"
      style={{
        background: 'linear-gradient(to bottom right, #800020, #CD7F32)',
        color: '#EAE0C8',
        fontFamily: 'Cormorant Garamond, serif',
        fontSize: '1rem',
        fontWeight: '500',
        boxShadow: '0 4px 20px rgba(0,0,0,0.3)'
      }}
    >
      Concierge
    </button>
  );
};

export default ConciergeButton;