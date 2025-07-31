import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Heart, Star, Share2, Bookmark, ShoppingCart, Sparkles, Zap, Leaf } from 'lucide-react';
import { toast } from './ui/use-toast';

interface InteractiveButtonProps {
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
  variant?: 'primary' | 'secondary' | 'accent';
  count?: number;
}

const InteractiveButton: React.FC<InteractiveButtonProps> = ({ 
  icon, 
  label, 
  onClick, 
  variant = 'primary',
  count 
}) => {
  const [isPressed, setIsPressed] = useState(false);
  const [showRipple, setShowRipple] = useState(false);

  const variants = {
    primary: 'bg-gradient-to-r from-[#B76E79] to-[#A05D6E] hover:from-[#A05D6E] to-[#8F4A56]',
    secondary: 'bg-gradient-to-r from-[#CD7F32] to-[#B8722D] hover:from-[#B8722D] to-[#A3651F]',
    accent: 'bg-gradient-to-r from-[#8B7355] to-[#7A6449] hover:from-[#7A6449] to-[#69553D]'
  };

  const handleClick = () => {
    setIsPressed(true);
    setShowRipple(true);
    onClick();
    
    setTimeout(() => {
      setIsPressed(false);
      setShowRipple(false);
    }, 300);
  };

  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.95 }}
      className="relative overflow-hidden"
    >
      <Button
        onClick={handleClick}
        className={`${variants[variant]} text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden`}
        size="sm"
      >
        <div className="flex items-center gap-2 relative z-10">
          <motion.div
            animate={isPressed ? { rotate: 360, scale: 1.2 } : { rotate: 0, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            {icon}
          </motion.div>
          <span className="text-sm font-medium">{label}</span>
          {count && (
            <Badge variant="secondary" className="bg-white/20 text-white border-0 text-xs">
              {count}
            </Badge>
          )}
        </div>
        
        <AnimatePresence>
          {showRipple && (
            <motion.div
              initial={{ scale: 0, opacity: 0.6 }}
              animate={{ scale: 4, opacity: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="absolute inset-0 bg-white rounded-full"
            />
          )}
        </AnimatePresence>
      </Button>
    </motion.div>
  );
};

interface FloatingActionMenuProps {
  isVisible: boolean;
  onClose: () => void;
}

const FloatingActionMenu: React.FC<FloatingActionMenuProps> = ({ isVisible, onClose }) => {
  const actions = [
    {
      icon: <Heart className="h-4 w-4" />,
      label: 'Favorite',
      onClick: () => {
        toast({ title: '💖 Added to favorites!', description: 'This conversation has been saved to your favorites.' });
        onClose();
      },
      variant: 'primary' as const
    },
    {
      icon: <Share2 className="h-4 w-4" />,
      label: 'Share',
      onClick: () => {
        toast({ title: '🔗 Link copied!', description: 'Share this wellness tip with friends.' });
        onClose();
      },
      variant: 'secondary' as const
    },
    {
      icon: <Bookmark className="h-4 w-4" />,
      label: 'Save',
      onClick: () => {
        toast({ title: '📚 Saved for later!', description: 'Added to your wellness library.' });
        onClose();
      },
      variant: 'accent' as const
    },
    {
      icon: <ShoppingCart className="h-4 w-4" />,
      label: 'Shop',
      onClick: () => {
        toast({ title: '🛍️ Opening shop...', description: 'Redirecting to product catalog.' });
        onClose();
      },
      variant: 'primary' as const
    }
  ];

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          className="fixed bottom-20 right-4 z-50"
        >
          <Card className="bg-white/95 backdrop-blur-sm border-[#B76E79]/20 shadow-2xl">
            <CardContent className="p-4">
              <div className="flex flex-col gap-2">
                {actions.map((action, index) => (
                  <motion.div
                    key={action.label}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <InteractiveButton {...action} />
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

interface WellnessInsightProps {
  insight: string;
  category: string;
  isVisible: boolean;
}

const WellnessInsight: React.FC<WellnessInsightProps> = ({ insight, category, isVisible }) => {
  const categoryIcons = {
    energy: <Zap className="h-4 w-4" />,
    calm: <Leaf className="h-4 w-4" />,
    focus: <Star className="h-4 w-4" />,
    wellness: <Sparkles className="h-4 w-4" />
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.9 }}
          className="fixed bottom-4 left-4 right-4 z-40"
        >
          <Card className="bg-gradient-to-r from-[#F7E7CE] to-[#E2DFD2] border-[#B76E79] shadow-xl mx-auto max-w-md">
            <CardContent className="p-4">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-[#B76E79] rounded-full text-white">
                  {categoryIcons[category as keyof typeof categoryIcons] || <Sparkles className="h-4 w-4" />}
                </div>
                <div className="flex-1">
                  <Badge variant="outline" className="border-[#B76E79] text-[#B76E79] mb-2 text-xs">
                    {category.toUpperCase()} TIP
                  </Badge>
                  <p className="text-sm text-gray-700 leading-relaxed">{insight}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const LuxuryInteractiveFeatures: React.FC = () => {
  const [showActionMenu, setShowActionMenu] = useState(false);
  const [currentInsight, setCurrentInsight] = useState(0);
  const [showInsight, setShowInsight] = useState(false);

  const insights = [
    { insight: "Diffuse Lavender for 15 minutes before bedtime to improve sleep quality.", category: "calm" },
    { insight: "Add a drop of Peppermint to your water for natural energy boost.", category: "energy" },
    { insight: "Use Frankincense during meditation to deepen your spiritual practice.", category: "focus" },
    { insight: "Blend Lemon and Eucalyptus to purify and energize your space.", category: "wellness" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setShowInsight(true);
      setTimeout(() => setShowInsight(false), 5000);
      setCurrentInsight((prev) => (prev + 1) % insights.length);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <motion.div
        className="fixed bottom-4 right-4 z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2, type: 'spring', stiffness: 200 }}
      >
        <InteractiveButton
          icon={<Sparkles className="h-5 w-5" />}
          label="Actions"
          onClick={() => setShowActionMenu(!showActionMenu)}
          variant="primary"
        />
      </motion.div>

      <FloatingActionMenu 
        isVisible={showActionMenu} 
        onClose={() => setShowActionMenu(false)} 
      />

      <WellnessInsight
        insight={insights[currentInsight].insight}
        category={insights[currentInsight].category}
        isVisible={showInsight}
      />
    </>
  );
};

export default LuxuryInteractiveFeatures;
export { InteractiveButton, FloatingActionMenu, WellnessInsight };