import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedDropdownProps {
  isVisible?: boolean;
  onSave?: () => void;
  onShare?: () => void;
  className?: string;
}

const AnimatedDropdown: React.FC<AnimatedDropdownProps> = ({
  isVisible = true,
  onSave,
  onShare,
  className = ''
}) => {
  const handleSave = () => {
    console.log('Save clicked');
    onSave?.();
  };

  const handleShare = () => {
    console.log('Share clicked');
    onShare?.();
  };

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 5 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className={`dropdown ${className}`}
      style={{
        background: 'rgba(183, 110, 121, 0.1)',
        backdropFilter: 'blur(10px)',
        border: '1px solid #B76E79',
        borderRadius: '12px',
        padding: '12px',
        display: 'flex',
        gap: '8px',
        alignItems: 'center',
        boxShadow: '0 8px 32px rgba(183, 110, 121, 0.2)'
      }}
    >
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleSave}
        className="p-2 rounded-lg hover:bg-white/10 transition-colors"
        title="Save"
      >
        <img src="/save-icon.svg" alt="Save" className="w-6 h-6" />
      </motion.button>
      
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleShare}
        className="p-2 rounded-lg hover:bg-white/10 transition-colors"
        title="Share"
      >
        <img src="/share-icon.svg" alt="Share" className="w-6 h-6" />
      </motion.button>
    </motion.div>
  );
};

export default AnimatedDropdown;