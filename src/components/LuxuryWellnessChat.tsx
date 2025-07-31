import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import InteractiveChatBubble from './InteractiveChatBubble';
import InteractiveOilMention from './InteractiveOilMention';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Send, Mic, Sparkles, Heart } from 'lucide-react';
import { AnimatedText, FloatingParticles } from './LuxuryAnimations';

interface ChatMessage {
  id: string;
  type: 'user' | 'ai';
  content: React.ReactNode;
  timestamp: string;
  hasActions?: boolean;
}

const LuxuryWellnessChat: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      type: 'user',
      content: "What's today's wellness focus?",
      timestamp: '2:30 PM',
      hasActions: true
    },
    {
      id: '2',
      type: 'ai',
      content: (
        <span>
          Start with{' '}
          <InteractiveOilMention 
            oilName="Lavender" 
            benefits={['Promotes relaxation', 'Reduces stress', 'Improves sleep quality']}
            price="$28.67"
            onAddToCart={(oil) => console.log(`Added ${oil} to cart`)}
            onLearnMore={(oil) => console.log(`Learn more about ${oil}`)}
          >
            Lavender
          </InteractiveOilMention>
          {' '}for calm, then try{' '}
          <InteractiveOilMention 
            oilName="Peppermint" 
            benefits={['Boosts energy', 'Enhances focus', 'Soothes digestion']}
            price="$27.33"
            onAddToCart={(oil) => console.log(`Added ${oil} to cart`)}
            onLearnMore={(oil) => console.log(`Learn more about ${oil}`)}
          >
            Peppermint
          </InteractiveOilMention>
          {' '}for energy. ✨
        </span>
      ),
      timestamp: '2:31 PM',
      hasActions: true
    }
  ]);
  
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const newUserMessage: ChatMessage = {
      id: Date.now().toString(),
      type: 'user',
      content: inputValue,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      hasActions: true
    };

    setMessages(prev => [...prev, newUserMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const aiResponse: ChatMessage = {
        id: (Date.now() + 1).toString(),
        type: 'ai',
        content: (
          <span>
            I recommend{' '}
            <InteractiveOilMention 
              oilName="Frankincense" 
              benefits={['Spiritual grounding', 'Skin rejuvenation', 'Emotional balance']}
              price="$93.33"
              onAddToCart={(oil) => console.log(`Added ${oil} to cart`)}
              onLearnMore={(oil) => console.log(`Learn more about ${oil}`)}
            >
              Frankincense
            </InteractiveOilMention>
            {' '}for your wellness journey. It's perfect for meditation and self-care rituals. 🌟
          </span>
        ),
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        hasActions: true
      };
      
      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 2000);
  };

  return (
    <div className="flex flex-col h-screen max-w-4xl mx-auto bg-gradient-to-br from-[#F7F4F0] to-[#E8E4DE] relative overflow-hidden">
      <FloatingParticles />
      
      {/* Header */}
      <motion.div 
        className="bg-gradient-to-r from-[#B76E79] to-[#CD7F32] text-white p-6 shadow-lg relative overflow-hidden"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <div className="flex items-center justify-between relative z-10">
          <div>
            <AnimatedText text="✨ Luxury Wellness Assistant" className="text-2xl font-bold" />
            <p className="text-sm opacity-90 mt-1">Your personal aromatherapy guide</p>
          </div>
          <div className="flex items-center gap-2">
            <Sparkles className="h-6 w-6" />
            <Heart className="h-6 w-6" />
          </div>
        </div>
      </motion.div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        <AnimatePresence>
          {messages.map((message) => (
            <InteractiveChatBubble
              key={message.id}
              type={message.type}
              hasActions={message.hasActions}
              timestamp={message.timestamp}
              onOilClick={(oil) => console.log(`Clicked on ${oil}`)}
            >
              {message.content}
            </InteractiveChatBubble>
          ))}
        </AnimatePresence>
        
        {isTyping && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex items-center gap-2 text-[#B76E79] ml-4"
          >
            <div className="flex gap-1">
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="w-2 h-2 bg-[#B76E79] rounded-full"
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.2 }}
                />
              ))}
            </div>
            <span className="text-sm">AI is typing...</span>
          </motion.div>
        )}
        
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <motion.div 
        className="p-4 bg-white/80 backdrop-blur-sm border-t border-[#B76E79]/20"
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <div className="flex gap-2">
          <Input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            placeholder="Ask about essential oils, wellness tips, or recipes..."
            className="flex-1 border-[#B76E79]/30 focus:border-[#B76E79] bg-white/90"
          />
          <Button
            onClick={handleSendMessage}
            className="bg-[#B76E79] hover:bg-[#A05D6E] text-white"
            disabled={!inputValue.trim()}
          >
            <Send className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            className="border-[#CD7F32] text-[#CD7F32] hover:bg-[#CD7F32] hover:text-white"
          >
            <Mic className="h-4 w-4" />
          </Button>
        </div>
      </motion.div>
    </div>
  );
};

export default LuxuryWellnessChat;