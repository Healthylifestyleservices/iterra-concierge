import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import LuxuryWellnessChat from './LuxuryWellnessChat';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Sparkles, MessageCircle, Star, Heart } from 'lucide-react';
import { FloatingParticles, AnimatedText } from './LuxuryAnimations';

interface QuickActionProps {
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
  gradient: string;
}

const QuickAction: React.FC<QuickActionProps> = ({ icon, label, onClick, gradient }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.95 }}
      className="cursor-pointer"
      onClick={onClick}
    >
      <Card className={`bg-gradient-to-br ${gradient} border-0 shadow-lg hover:shadow-xl transition-all duration-300`}>
        <CardContent className="p-4 text-center">
          <div className="flex flex-col items-center gap-2">
            <div className="p-2 bg-white/20 rounded-full">
              {icon}
            </div>
            <span className="text-sm font-medium text-white">{label}</span>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const EnhancedWellnessChatBubbles: React.FC = () => {
  const [showFullChat, setShowFullChat] = useState(false);
  const [welcomeComplete, setWelcomeComplete] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setWelcomeComplete(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (showFullChat) {
    return <LuxuryWellnessChat />;
  }

  const quickActions = [
    {
      icon: <Sparkles className="h-5 w-5 text-white" />,
      label: "Daily Wellness",
      onClick: () => setShowFullChat(true),
      gradient: "from-[#B76E79] to-[#A05D6E]"
    },
    {
      icon: <Heart className="h-5 w-5 text-white" />,
      label: "Self Care",
      onClick: () => setShowFullChat(true),
      gradient: "from-[#CD7F32] to-[#B8722D]"
    },
    {
      icon: <Star className="h-5 w-5 text-white" />,
      label: "Oil Recipes",
      onClick: () => setShowFullChat(true),
      gradient: "from-[#8B7355] to-[#7A6449]"
    },
    {
      icon: <MessageCircle className="h-5 w-5 text-white" />,
      label: "Ask Anything",
      onClick: () => setShowFullChat(true),
      gradient: "from-[#9B8B7A] to-[#8A7B6A]"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F7F4F0] to-[#E8E4DE] relative overflow-hidden">
      <FloatingParticles />
      
      <div className="flex flex-col items-center justify-center min-h-screen p-6 relative z-10">
        {/* Welcome Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="text-center mb-8"
        >
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
            className="text-6xl mb-4"
          >
            ✨
          </motion.div>
          
          <AnimatedText 
            text="Welcome to Your Luxury Wellness Experience" 
            className="text-4xl font-bold bg-gradient-to-r from-[#B76E79] to-[#CD7F32] bg-clip-text text-transparent mb-2"
          />
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: welcomeComplete ? 1 : 0 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Discover personalized aromatherapy guidance, interactive oil recommendations, and luxurious wellness experiences tailored just for you.
          </motion.p>
        </motion.div>

        {/* Preview Chat Bubbles */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="w-full max-w-2xl mb-8"
        >
          <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-6 shadow-xl border border-white/20">
            <div className="flex flex-col space-y-4">
              <motion.div
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1 }}
                className="max-w-[70%] px-5 py-3 rounded-3xl bg-gradient-to-br from-[#F7E7CE] to-[#F0D5B8] border border-[#B76E79] ml-auto shadow-lg"
              >
                What's today's wellness focus?
              </motion.div>
              
              <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="max-w-[70%] px-5 py-3 rounded-3xl bg-gradient-to-br from-[#E2DFD2] to-[#D8D4C5] border border-[#CD7F32] shadow-lg"
              >
                Start with <span className="text-[#B76E79] font-semibold">Lavender</span> for calm, then try <span className="text-[#B76E79] font-semibold">Peppermint</span> for energy. ✨
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="w-full max-w-4xl"
        >
          <h3 className="text-2xl font-bold text-center mb-6 bg-gradient-to-r from-[#B76E79] to-[#CD7F32] bg-clip-text text-transparent">
            How can I elevate your wellness today?
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {quickActions.map((action, index) => (
              <motion.div
                key={action.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 + index * 0.1 }}
              >
                <QuickAction {...action} />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2, duration: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button
            onClick={() => setShowFullChat(true)}
            className="bg-gradient-to-r from-[#B76E79] to-[#CD7F32] hover:from-[#A05D6E] hover:to-[#B8722D] text-white px-8 py-4 text-lg font-semibold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            Start Your Luxury Wellness Journey
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default EnhancedWellnessChatBubbles;