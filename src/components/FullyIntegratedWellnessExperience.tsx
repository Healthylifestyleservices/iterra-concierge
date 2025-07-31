import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Heart, Leaf, Star, ShoppingBag } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';

interface ChatMessage {
  id: string;
  type: 'user' | 'ai';
  content: string;
  timestamp: Date;
  oils?: string[];
  actions?: string[];
}

interface WellnessInsight {
  title: string;
  description: string;
  oils: string[];
  benefits: string[];
}

const FullyIntegratedWellnessExperience: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      type: 'ai',
      content: 'Welcome to your luxury wellness sanctuary. What brings you here today?',
      timestamp: new Date(),
      actions: ['Daily Routine', 'Stress Relief', 'Sleep Support']
    }
  ]);
  
  const [currentInsight, setCurrentInsight] = useState<WellnessInsight>({
    title: 'Morning Harmony',
    description: 'Start your day with intention and natural wellness',
    oils: ['Lavender', 'Peppermint', 'Wild Orange'],
    benefits: ['Clarity', 'Energy', 'Focus']
  });

  const [showWelcome, setShowWelcome] = useState(true);
  const [particles, setParticles] = useState<Array<{id: number, x: number, y: number}>>([]);

  useEffect(() => {
    const newParticles = Array.from({length: 20}, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100
    }));
    setParticles(newParticles);
  }, []);

  const handleQuickAction = (action: string) => {
    const responses = {
      'Daily Routine': {
        content: 'Let me create your personalized morning ritual with <span class="oil">Lavender</span> and <span class="oil">Wild Orange</span>',
        oils: ['Lavender', 'Wild Orange'],
        actions: ['View Recipe', 'Add to Cart', 'Save Favorite']
      },
      'Stress Relief': {
        content: 'For immediate calm, try <span class="oil">Frankincense</span> with deep breathing',
        oils: ['Frankincense', 'Bergamot'],
        actions: ['Guided Meditation', 'Shop Now', 'Learn More']
      },
      'Sleep Support': {
        content: 'Tonight, diffuse <span class="oil">Cedarwood</span> and <span class="oil">Roman Chamomile</span>',
        oils: ['Cedarwood', 'Roman Chamomile'],
        actions: ['Bedtime Routine', 'Purchase Bundle', 'Set Reminder']
      }
    };

    const response = responses[action as keyof typeof responses];
    if (response) {
      const newMessage: ChatMessage = {
        id: Date.now().toString(),
        type: 'ai',
        content: response.content,
        timestamp: new Date(),
        oils: response.oils,
        actions: response.actions
      };
      setMessages(prev => [...prev, newMessage]);
    }
    setShowWelcome(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-stone-50 to-amber-100 relative overflow-hidden">
      {/* Floating Particles */}
      {particles.map(particle => (
        <motion.div
          key={particle.id}
          className="absolute w-2 h-2 bg-amber-200/30 rounded-full"
          style={{ left: `${particle.x}%`, top: `${particle.y}%` }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.8, 0.3]
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2
          }}
        />
      ))}

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <AnimatePresence>
          {showWelcome && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="text-center mb-8"
            >
              <motion.h1 
                className="text-4xl font-light text-amber-900 mb-4"
                style={{ fontFamily: 'Cormorant Garamond, serif' }}
                animate={{ scale: [1, 1.02, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Sparkles className="inline w-8 h-8 mr-2 text-amber-600" />
                iTERRA™ Wellness Sanctuary
              </motion.h1>
              <p className="text-lg text-amber-700 mb-6">Your personalized journey to natural wellness begins here</p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Current Wellness Insight */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mb-8"
        >
          <Card className="bg-gradient-to-r from-amber-100 to-stone-100 border-amber-200 shadow-xl">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <Star className="w-6 h-6 text-amber-600 mr-2" />
                <h3 className="text-xl font-medium text-amber-900">{currentInsight.title}</h3>
              </div>
              <p className="text-amber-800 mb-4">{currentInsight.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {currentInsight.oils.map(oil => (
                  <motion.span
                    key={oil}
                    className="px-3 py-1 bg-amber-200 text-amber-900 rounded-full text-sm font-medium"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Leaf className="inline w-3 h-3 mr-1" />
                    {oil}
                  </motion.span>
                ))}
              </div>
              <div className="flex gap-2">
                {currentInsight.benefits.map(benefit => (
                  <span key={benefit} className="text-sm text-amber-700 bg-amber-50 px-2 py-1 rounded">
                    {benefit}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Chat Messages */}
        <div className="space-y-4 mb-8">
          {messages.map((message, index) => (
            <motion.div
              key={message.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`max-w-[70%] p-4 rounded-3xl ${
                message.type === 'user' 
                  ? 'bg-gradient-to-r from-amber-200 to-amber-300 border border-amber-400 text-amber-900' 
                  : 'bg-gradient-to-r from-stone-200 to-stone-300 border border-stone-400 text-stone-900'
              } shadow-lg`}>
                <div 
                  dangerouslySetInnerHTML={{ __html: message.content }}
                  className="mb-3"
                />
                
                {message.actions && (
                  <div className="flex flex-wrap gap-2 mt-3">
                    {message.actions.map(action => (
                      <Button
                        key={action}
                        size="sm"
                        variant="outline"
                        className="bg-white/50 hover:bg-white/80 border-amber-300"
                        onClick={() => handleQuickAction(action)}
                      >
                        {action === 'Add to Cart' && <ShoppingBag className="w-3 h-3 mr-1" />}
                        {action === 'Save Favorite' && <Heart className="w-3 h-3 mr-1" />}
                        {action}
                      </Button>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex justify-center gap-4 flex-wrap"
        >
          {['Daily Routine', 'Stress Relief', 'Sleep Support', 'Energy Boost'].map(action => (
            <Button
              key={action}
              onClick={() => handleQuickAction(action)}
              className="bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white px-6 py-3 rounded-full shadow-lg"
            >
              {action}
            </Button>
          ))}
        </motion.div>
      </div>

      <style jsx>{`
        .oil {
          background: url('/oil-icon.svg') no-repeat left center;
          background-size: 16px 16px;
          padding-left: 20px;
          font-weight: 600;
          color: #92400e;
        }
      `}</style>
    </div>
  );
};

export default FullyIntegratedWellnessExperience;