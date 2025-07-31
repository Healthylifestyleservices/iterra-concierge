import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeInUp, pulseGlow, FloatingParticles } from './LuxuryAnimations';
import { Button } from './ui/button';
import { Heart, Sparkles, Leaf, Star } from 'lucide-react';

interface InteractiveChatBubbleProps {
  type: 'user' | 'ai';
  children: React.ReactNode;
  hasActions?: boolean;
  onOilClick?: (oil: string) => void;
  timestamp?: string;
}

const InteractiveChatBubble: React.FC<InteractiveChatBubbleProps> = ({ 
  type, 
  children, 
  hasActions = false,
  onOilClick,
  timestamp
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [showActions, setShowActions] = useState(false);
  const [liked, setLiked] = useState(false);

  const baseClasses = "max-w-[70%] px-5 py-3 mx-2 my-2 rounded-3xl relative overflow-hidden backdrop-blur-sm";
  const userClasses = "bg-gradient-to-br from-[#F7E7CE] to-[#F0D5B8] border border-[#B76E79] ml-auto shadow-lg";
  const aiClasses = "bg-gradient-to-br from-[#E2DFD2] to-[#D8D4C5] border border-[#CD7F32] shadow-lg";

  const handleOilClick = (oil: string) => {
    if (onOilClick) {
      onOilClick(oil);
    }
  };

  return (
    <motion.div
      {...fadeInUp}
      className={`${baseClasses} ${type === 'user' ? userClasses : aiClasses}`}
      style={{ fontFamily: "'Avenir Next', sans-serif" }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ scale: 1.02, y: -2 }}
      animate={isHovered ? pulseGlow.animate : {}}
      transition={pulseGlow.transition}
    >
      <FloatingParticles />
      
      <div className="relative z-10">
        {children}
        
        {timestamp && (
          <motion.div 
            className="text-xs opacity-60 mt-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0.6 }}
          >
            {timestamp}
          </motion.div>
        )}
      </div>

      {hasActions && (
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="absolute top-2 right-2 flex gap-1"
            >
              <Button
                size="sm"
                variant="ghost"
                className="h-6 w-6 p-0 hover:bg-white/20"
                onClick={() => setLiked(!liked)}
              >
                <Heart className={`h-3 w-3 ${liked ? 'fill-red-500 text-red-500' : ''}`} />
              </Button>
              <Button
                size="sm"
                variant="ghost"
                className="h-6 w-6 p-0 hover:bg-white/20"
              >
                <Sparkles className="h-3 w-3" />
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </motion.div>
  );
};

export default InteractiveChatBubble;