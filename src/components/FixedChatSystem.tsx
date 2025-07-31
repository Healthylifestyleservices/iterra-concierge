import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { MessageCircle, Send, Sparkles, Heart, Brain, Leaf, ShoppingBag, Star } from 'lucide-react';
import famousAI from '@/lib/famous-ai.js';

interface Message {
  id: string;
  content: string;
  sender: 'user' | 'assistant';
  timestamp: Date;
  suggestions?: string[];
}

interface ChatProps {
  onSuggestionAccepted?: (suggestion: string) => void;
}

const FixedChatSystem: React.FC<ChatProps> = ({ onSuggestionAccepted }) => {
  const [messages, setMessages] = useState<Message[]>([{
    id: '1',
    content: 'Welcome! I\'m your iTerra Wellness Assistant powered by Famous AI. I can help with essential oils, wellness protocols, and product recommendations. What would you like to explore?',
    sender: 'assistant',
    timestamp: new Date(),
    suggestions: ['Sleep support', 'Stress relief', 'Energy boost', 'Pet safety']
  }]);
  
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [conversationContext, setConversationContext] = useState<string[]>([]);

  const intelligentResponses = {
    sleep: {
      response: "For sleep support, I recommend: **Serenity Blend** (diffuse 30min before bed), **Lavender** (1-2 drops on pillow), **Adaptiv Capsules** for stress. This protocol targets GABA pathways. Would you like specific application instructions?",
      suggestions: ['Application methods', 'Dosage info', 'Bundle pricing', 'Alternative oils']
    },
    stress: {
      response: "For stress management: **Adaptiv System** (capsules + blend), **Balance** for grounding, **Frankincense** for mental clarity. This targets cortisol regulation. What's your primary stress trigger?",
      suggestions: ['Work stress', 'Family stress', 'Sleep issues', 'Physical tension']
    },
    energy: {
      response: "For natural energy: **Peppermint Beadlets**, **Wild Orange** (diffuse or inhale), **Motivate Blend** for focus. These support mitochondrial function. When do you need energy most?",
      suggestions: ['Morning routine', 'Afternoon slump', 'Workout support', 'Mental clarity']
    },
    pets: {
      response: "Pet-safe oils: **Lavender** (dilute 1:10 for dogs/cats), **Frankincense** (avoid with birds), **Copaiba** (safe for all pets). Never use Tea Tree on cats. What type of pet?",
      suggestions: ['Dogs', 'Cats', 'Birds', 'Horses']
    }
  };

  const getContextualResponse = (message: string, context: string[]): { response: string; suggestions: string[] } => {
    const msg = message.toLowerCase();
    
    if (msg.includes('sleep') || msg.includes('insomnia') || context.includes('sleep')) {
      setConversationContext(prev => [...prev, 'sleep']);
      return intelligentResponses.sleep;
    }
    if (msg.includes('stress') || msg.includes('anxiety') || context.includes('stress')) {
      setConversationContext(prev => [...prev, 'stress']);
      return intelligentResponses.stress;
    }
    if (msg.includes('energy') || msg.includes('focus') || context.includes('energy')) {
      setConversationContext(prev => [...prev, 'energy']);
      return intelligentResponses.energy;
    }
    if (msg.includes('pet') || msg.includes('dog') || msg.includes('cat') || context.includes('pets')) {
      setConversationContext(prev => [...prev, 'pets']);
      return intelligentResponses.pets;
    }
    
    return {
      response: "I can help with wellness protocols, essential oil guidance, and product recommendations. What specific area interests you most?",
      suggestions: ['Sleep & relaxation', 'Stress management', 'Energy & focus', 'Pet wellness']
    };
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputMessage,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    const currentInput = inputMessage;
    setInputMessage('');
    setIsLoading(true);

    try {
      // Try Famous AI first
      const famousResponse = await famousAI.generateResponse(
        `As an iTerra wellness expert, provide helpful advice for: ${currentInput}. Include specific product recommendations and protocols.`
      );
      
      if (famousResponse && famousResponse.text) {
        const assistantMessage: Message = {
          id: (Date.now() + 1).toString(),
          content: famousResponse.text,
          sender: 'assistant',
          timestamp: new Date(),
          suggestions: ['Tell me more', 'Alternative options', 'How to use', 'Where to buy']
        };
        
        setMessages(prev => [...prev, assistantMessage]);
      } else {
        throw new Error('Famous AI response invalid');
      }
    } catch (error) {
      console.log('Famous AI unavailable, using fallback');
      
      // Fallback to local intelligent responses
      const { response, suggestions } = getContextualResponse(currentInput, conversationContext);
      
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: response,
        sender: 'assistant',
        timestamp: new Date(),
        suggestions
      };
      
      setMessages(prev => [...prev, assistantMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    setInputMessage(suggestion);
    if (onSuggestionAccepted) {
      onSuggestionAccepted(suggestion);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent mb-4">
          Enhanced iTerra Assistant (Famous AI)
        </h1>
        <div className="flex flex-wrap justify-center gap-2">
          <Badge variant="secondary" className="bg-purple-100 text-purple-700">
            <Heart className="w-3 h-3 mr-1" />
            Context Aware
          </Badge>
          <Badge variant="secondary" className="bg-teal-100 text-teal-700">
            <Leaf className="w-3 h-3 mr-1" />
            Smart Suggestions
          </Badge>
          <Badge variant="secondary" className="bg-blue-100 text-blue-700">
            <Brain className="w-3 h-3 mr-1" />
            Memory Enabled
          </Badge>
        </div>
      </div>

      <Card className="h-[600px] flex flex-col border-2 border-purple-200 shadow-xl">
        <CardHeader className="bg-gradient-to-r from-purple-50 to-pink-50">
          <CardTitle className="flex items-center gap-2">
            <MessageCircle className="w-5 h-5 text-purple-600" />
            Intelligent Wellness Chat
          </CardTitle>
        </CardHeader>
        <CardContent className="flex-1 flex flex-col p-0">
          <div className="flex-1 overflow-y-auto space-y-4 p-4">
            {messages.map((message) => (
              <div key={message.id}>
                <div className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] p-4 rounded-lg shadow-sm ${
                    message.sender === 'user' 
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white' 
                      : 'bg-white border border-purple-200'
                  }`}>
                    <div className="whitespace-pre-wrap leading-relaxed">
                      {message.content}
                    </div>
                    <p className={`text-xs mt-2 ${
                      message.sender === 'user' ? 'text-purple-200' : 'text-gray-500'
                    }`}>
                      {message.timestamp.toLocaleTimeString()}
                    </p>
                  </div>
                </div>
                
                {message.suggestions && message.sender === 'assistant' && (
                  <div className="flex flex-wrap gap-2 mt-2 ml-4">
                    {message.suggestions.map((suggestion, idx) => (
                      <Button
                        key={idx}
                        variant="outline"
                        size="sm"
                        onClick={() => handleSuggestionClick(suggestion)}
                        className="text-xs border-purple-200 hover:bg-purple-50 hover:border-purple-300"
                      >
                        <Sparkles className="w-3 h-3 mr-1" />
                        {suggestion}
                      </Button>
                    ))}
                  </div>
                )}
              </div>
            ))}
            
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white border border-purple-200 shadow-sm p-4 rounded-lg">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                    <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                  </div>
                </div>
              </div>
            )}
          </div>
          
          <div className="p-4 bg-gradient-to-r from-purple-50 to-pink-50 border-t">
            <div className="flex gap-2">
              <Input
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Ask about wellness, oils, or click suggestions above..."
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                disabled={isLoading}
                className="border-purple-200 focus:border-purple-400"
              />
              <Button 
                onClick={handleSendMessage} 
                disabled={isLoading || !inputMessage.trim()}
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
            <p className="text-xs text-gray-500 mt-2 text-center">
              Enhanced with Famous AI, conversation memory and contextual suggestions
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default FixedChatSystem;