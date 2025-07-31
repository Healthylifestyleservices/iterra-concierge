import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { ShoppingCart, Info, Heart, Star } from 'lucide-react';

interface InteractiveOilMentionProps {
  children: React.ReactNode;
  oilName: string;
  benefits?: string[];
  price?: string;
  onAddToCart?: (oil: string) => void;
  onLearnMore?: (oil: string) => void;
}

const InteractiveOilMention: React.FC<InteractiveOilMentionProps> = ({ 
  children, 
  oilName,
  benefits = [],
  price,
  onAddToCart,
  onLearnMore
}) => {
  const [showTooltip, setShowTooltip] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 200);
  };

  return (
    <span className="relative inline-block">
      <motion.span
        className="pl-6 bg-[url('/oil-icon.svg')] bg-no-repeat bg-left-center cursor-pointer text-[#B76E79] font-semibold underline decoration-dotted hover:decoration-solid transition-all duration-300"
        onHoverStart={() => setShowTooltip(true)}
        onHoverEnd={() => setShowTooltip(false)}
        onClick={handleClick}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        animate={isClicked ? {
          color: ['#B76E79', '#CD7F32', '#B76E79'],
          transition: { duration: 0.3 }
        } : {}}
      >
        {children}
      </motion.span>

      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            className="absolute z-50 bottom-full left-1/2 transform -translate-x-1/2 mb-2"
          >
            <Card className="w-64 bg-gradient-to-br from-white to-[#F7E7CE] border-[#B76E79] shadow-xl">
              <CardContent className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Star className="h-4 w-4 text-[#CD7F32] fill-current" />
                  <h3 className="font-bold text-[#B76E79]">{oilName}</h3>
                  {price && (
                    <span className="ml-auto text-sm font-semibold text-[#CD7F32]">
                      {price}
                    </span>
                  )}
                </div>
                
                {benefits.length > 0 && (
                  <div className="mb-3">
                    <p className="text-xs text-gray-600 mb-1">Benefits:</p>
                    <ul className="text-xs space-y-1">
                      {benefits.slice(0, 3).map((benefit, index) => (
                        <li key={index} className="flex items-center gap-1">
                          <div className="w-1 h-1 bg-[#B76E79] rounded-full" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    className="flex-1 bg-[#B76E79] hover:bg-[#A05D6E] text-white text-xs"
                    onClick={() => onAddToCart?.(oilName)}
                  >
                    <ShoppingCart className="h-3 w-3 mr-1" />
                    Add
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1 border-[#CD7F32] text-[#CD7F32] hover:bg-[#CD7F32] hover:text-white text-xs"
                    onClick={() => onLearnMore?.(oilName)}
                  >
                    <Info className="h-3 w-3 mr-1" />
                    Learn
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </span>
  );
};

export default InteractiveOilMention;