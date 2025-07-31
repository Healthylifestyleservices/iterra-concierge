import React from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';
import { BusinessCrownIcon } from './BusinessCrownIcon';
import { SacredGeometryPattern } from './SacredGeometryPattern';
import { emotionalResponses } from '../lib/emotional-engine';

interface LuxuryBubbleProps {
  content: string | JSX.Element;
  type?: 'wellness' | 'emotional' | 'business';
  emotionalState?: string;
}

export const LuxuryBubble = ({ 
  content,
  type = 'wellness',
  emotionalState
}: LuxuryBubbleProps) => {
  const getGeometryType = () => {
    if (type === 'emotional' && emotionalState) {
      return emotionalResponses[emotionalState]?.geometry || 'flower-of-life';
    }
    return 'flower-of-life';
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={clsx(
        "max-w-[80%] p-6 rounded-3xl shadow-lg relative border-2",
        type === 'emotional' 
          ? "bg-[#F7E7CE] border-[#B76E79]"
          : type === 'business'
          ? "bg-[#E8E4D9] border-[#CD7F32]"
          : "bg-[#E2DFD2] border-[#CD7F32]"
      )}
    >
      <div className="font-cormorant text-[#D4AF37] relative z-10">
        {type === 'business' && <BusinessCrownIcon />}
        {content}
      </div>
      {type === 'emotional' && (
        <SacredGeometryPattern type={getGeometryType()} />
      )}
    </motion.div>
  );
};