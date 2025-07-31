import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, X, Sparkles, Heart, ShoppingBag } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';

interface Message {
  id: string;
  type: 'user' | 'ai';
  content: string;
  oils?: string[];
  actions?: string[];
}

const PersonalizedWellnessAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'ai',
      content: 'Hello! I\'m your personal wellness guide. How can I support your journey today?',
      actions: ['Morning Routine', 'Stress Relief', 'Sleep Better']
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const wellnessResponses = {
    'morning': {
      content: 'Start your day with <span class="oil">Wild Orange</span> and <span class="oil">Peppermint</span> for energy and focus.',
      oils: ['Wild Orange', 'Peppermint'],
      actions: ['Get Recipe', 'Shop Now', 'Save Routine']
    },
    'stress': {
      content: 'For stress relief, try <span class="oil">Lavender</span> with deep breathing exercises.',
      oils: ['Lavender', 'Bergamot'],
      actions: ['Guided Meditation', 'Shop Bundle', 'Learn More']
    },
    'sleep': {
      content: 'Create a peaceful bedtime with <span class="oil">Cedarwood</span> and <span class="oil">Roman Chamomile</span>.',
      oils: ['Cedarwood', 'Roman Chamomile'],
      actions: ['Bedtime Routine', 'Purchase Set', 'Set Reminder']
    },
    'energy': {
      content: 'Boost your energy naturally with <span class="oil">Rosemary</span> and <span class="oil">Eucalyptus</span>.',
      oils: ['Rosemary', 'Eucalyptus'],
      actions: ['Energy Blend', 'Add to Cart', 'Share Recipe']
    }
  };

  const handleSendMessage = (content: string) => {
    if (!content.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const keyword = content.toLowerCase();
      let response = wellnessResponses['stress']; // default
      
      if (keyword.includes('morning') || keyword.includes('energy')) {
        response = wellnessResponses['morning'];
      } else if (keyword.includes('sleep') || keyword.includes('night')) {
        response = wellnessResponses['sleep'];
      } else if (keyword.includes('stress') || keyword.includes('anxiety')) {
        response = wellnessResponses['stress'];
      }

      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'ai',
        content: response.content,
        oils: response.oils,
        actions: response.actions
      };

      setMessages(prev => [...prev, aiMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const handleQuickAction = (action: string) => {
    handleSendMessage(action);
  };

  return (
    <>
      {/* Floating Chat Button */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1 }}
      >
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="w-16 h-16 rounded-full bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 shadow-2xl"
        >
          {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
        </Button>
      </motion.div>

      {/* Chat Panel */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          className="fixed bottom-24 right-6 w-96 h-[500px] z-40"
        >
          <Card className="h-full bg-gradient-to-b from-amber-50 to-stone-50 border-amber-200 shadow-2xl">
            <div className="flex items-center justify-between p-4 border-b border-amber-200">
              <div className="flex items-center">
                <Sparkles className="w-5 h-5 text-amber-600 mr-2" />
                <h3 className="font-medium text-amber-900">Wellness Assistant</h3>
              </div>
            </div>
            
            <CardContent className="p-0 h-full flex flex-col">
              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-3">
                {messages.map((message) => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className={`max-w-[80%] p-3 rounded-2xl ${
                      message.type === 'user'
                        ? 'bg-amber-200 text-amber-900 border border-amber-300'
                        : 'bg-stone-200 text-stone-900 border border-stone-300'
                    }`}>
                      <div dangerouslySetInnerHTML={{ __html: message.content }} />
                      
                      {message.actions && (
                        <div className="flex flex-wrap gap-1 mt-2">
                          {message.actions.map(action => (
                            <Button
                              key={action}
                              size="sm"
                              variant="outline"
                              className="text-xs bg-white/50 hover:bg-white/80"
                              onClick={() => handleQuickAction(action)}
                            >
                              {action === 'Shop Now' && <ShoppingBag className="w-3 h-3 mr-1" />}
                              {action === 'Save Routine' && <Heart className="w-3 h-3 mr-1" />}
                              {action}
                            </Button>
                          ))}
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
                
                {isTyping && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex justify-start"
                  >
                    <div className="bg-stone-200 p-3 rounded-2xl">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-stone-500 rounded-full animate-bounce" />
                        <div className="w-2 h-2 bg-stone-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
                        <div className="w-2 h-2 bg-stone-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>
              
              {/* Input */}
              <div className="p-4 border-t border-amber-200">
                <div className="flex gap-2">
                  <Input
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage(inputValue)}
                    placeholder="Ask about wellness..."
                    className="flex-1 border-amber-300 focus:border-amber-500"
                  />
                  <Button
                    onClick={() => handleSendMessage(inputValue)}
                    size="sm"
                    className="bg-amber-600 hover:bg-amber-700"
                  >
                    Send
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      )}

      <style jsx>{`
        .oil {
          background: url('/oil-icon.svg') no-repeat left center;
          background-size: 14px 14px;
          padding-left: 18px;
          font-weight: 600;
          color: #92400e;
        }
      `}</style>
    </>
  );
};

export default PersonalizedWellnessAssistant;