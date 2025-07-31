import React from 'react';
import LuxuryWellnessChat from './LuxuryWellnessChat';
import LuxuryInteractiveFeatures from './LuxuryInteractiveFeatures';
import { motion } from 'framer-motion';
import { FloatingParticles } from './LuxuryAnimations';

const EnhancedLuxuryWellnessChat: React.FC = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <FloatingParticles />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative z-10"
      >
        <LuxuryWellnessChat />
      </motion.div>
      
      <LuxuryInteractiveFeatures />
    </div>
  );
};

export default EnhancedLuxuryWellnessChat;