import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Send, Bot, User, Sparkles, Crown } from 'lucide-react';
import { oilDatabase, OilProfile } from '@/data/oilDatabase';
import { comprehensiveProductCatalog, ComprehensiveProduct } from '@/data/comprehensiveProductCatalog';
import OilProfileDisplay from '@/components/OilProfileDisplay';
import famousAI from '@/lib/famous-ai.js';

interface Message {
  id: string;
  type: 'user' | 'bot';
  content: string;
  timestamp: Date;
  oilProfile?: OilProfile;
  products?: ComprehensiveProduct[];
}

const AromatherapistChatBot: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'bot',
      content: 'Welcome to your luxury wellness concierge powered by Famous AI! I\'m iTerra, your botanical consultant. Ask about essential oils, hair care, skin concerns, wellness support, pet safety, or any natural solution.',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [selectedOil, setSelectedOil] = useState<OilProfile | null>(null);

  const findOilInMessage = (message: string): OilProfile | null => {
    const lowerMessage = message.toLowerCase();
    for (const [key, oil] of Object.entries(oilDatabase)) {
      if (lowerMessage.includes(key) || lowerMessage.includes(oil.name.toLowerCase())) {
        return oil;
      }
    }
    return null;
  };

  const findRelevantProducts = (message: string): ComprehensiveProduct[] => {
    const lowerMessage = message.toLowerCase();
    const relevantProducts: ComprehensiveProduct[] = [];
    
    if (lowerMessage.includes('pet') || lowerMessage.includes('dog') || lowerMessage.includes('cat') || lowerMessage.includes('horse')) {
      return [{
        id: 'pet-safety',
        name: 'Pet-Safe Essential Oil Guide',
        category: 'Pet Care',
        subcategory: 'Safety',
        benefits: ['Veterinary guidance', 'Species-specific safety', 'Proper dilution'],
        url: 'https://www.doterra.com/US/en/blog/spotlight-using-essential-oils-safely-around-pets'
      }];
    }
    
    if (lowerMessage.includes('hair') || lowerMessage.includes('scalp')) {
      if (lowerMessage.includes('dry') || lowerMessage.includes('damaged')) {
        relevantProducts.push(...comprehensiveProductCatalog.filter(p => p.subcategory === 'Dry Hair'));
      } else if (lowerMessage.includes('oily') || lowerMessage.includes('greasy')) {
        relevantProducts.push(...comprehensiveProductCatalog.filter(p => p.subcategory === 'Oily Hair'));
      } else if (lowerMessage.includes('growth') || lowerMessage.includes('grow') || lowerMessage.includes('thinning')) {
        relevantProducts.push(...comprehensiveProductCatalog.filter(p => p.subcategory === 'Hair Growth'));
      } else {
        relevantProducts.push(...comprehensiveProductCatalog.filter(p => p.category === 'Hair Care'));
      }
    }
    
    if (lowerMessage.includes('skin') || lowerMessage.includes('face') || lowerMessage.includes('aging')) {
      relevantProducts.push(...comprehensiveProductCatalog.filter(p => p.category === 'Skin Care'));
    }
    
    return relevantProducts.slice(0, 3);
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: inputMessage,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    const currentMessage = inputMessage;
    setInputMessage('');
    setIsTyping(true);

    try {
      // Try Famous AI first
      const famousResponse = await famousAI.generateResponse(
        `As an expert aromatherapist and wellness consultant, provide detailed advice for: ${currentMessage}`
      );
      
      if (famousResponse && famousResponse.text) {
        const oil = findOilInMessage(currentMessage);
        const products = findRelevantProducts(currentMessage);
        
        const botResponse: Message = {
          id: (Date.now() + 1).toString(),
          type: 'bot',
          content: famousResponse.text,
          timestamp: new Date(),
          oilProfile: oil,
          products: products.length > 0 ? products : undefined
        };
        
        setMessages(prev => [...prev, botResponse]);
      } else {
        throw new Error('Famous AI response invalid');
      }
    } catch (error) {
      console.log('Famous AI unavailable, using fallback');
      
      // Fallback to local logic
      const oil = findOilInMessage(currentMessage);
      const products = findRelevantProducts(currentMessage);
      
      let fallbackContent = '';
      
      if (currentMessage.toLowerCase().includes('pet')) {
        fallbackContent = 'Pet aromatherapy requires extreme caution and veterinary guidance. Cats are especially sensitive to essential oils. Many common oils are toxic to them. Always prioritize your pet\'s safety and consult your veterinarian before any aromatherapy use.';
      } else if (oil) {
        fallbackContent = `Ah, ${oil.name} (${oil.scientificName}) - an exquisite choice! This magnificent botanical essence offers a world of wellness possibilities. I\'ve prepared a complete luxury profile covering the science, benefits, safety, artisanal recipes, and beautiful heritage.`;
      } else if (products.length > 0) {
        fallbackContent = 'I\'ve curated exceptional natural solutions for you:\n\n';
        products.forEach((product, index) => {
          fallbackContent += `${index + 1}. **${product.name}** - ${product.benefits.join(', ')}\n`;
        });
        fallbackContent += '\nEach premium botanical product offers pure, natural wellness support.';
      } else {
        fallbackContent = 'Welcome to your personalized wellness consultation! I specialize in comprehensive natural solutions - from essential oils and hair care to skin wellness and pet safety. Ask about any concern: hair growth, skin aging, digestive support, pet aromatherapy safety, or any wellness goal.';
      }
      
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        type: 'bot',
        content: fallbackContent,
        timestamp: new Date(),
        oilProfile: oil,
        products: products.length > 0 ? products : undefined
      };
      
      setMessages(prev => [...prev, botResponse]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  if (selectedOil) {
    return (
      <div className="space-y-6">
        <Button 
          variant="outline" 
          onClick={() => setSelectedOil(null)}
          className="mb-4"
        >
          ← Back to iTerra Chat
        </Button>
        <OilProfileDisplay oil={selectedOil} />
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="text-center space-y-2">
        <div className="flex items-center justify-center gap-3">
          <Crown className="h-8 w-8 text-amber-500" />
          <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-amber-600 bg-clip-text text-transparent">
            iTerra Concierge (Famous AI)
          </h2>
          <Crown className="h-8 w-8 text-amber-500" />
        </div>
        <p className="text-gray-600">Your comprehensive natural wellness consultation</p>
      </div>

      <Card className="h-[600px] flex flex-col border-2 border-amber-200">
        <CardHeader className="bg-gradient-to-r from-purple-600 to-amber-600 text-white">
          <CardTitle className="flex items-center gap-2">
            <Bot className="h-5 w-5" />
            iTerra - Complete Wellness Concierge
          </CardTitle>
        </CardHeader>
        
        <CardContent className="flex-1 flex flex-col p-0">
          <ScrollArea className="flex-1 p-4">
            <div className="space-y-4">
              {messages.map((message) => (
                <div key={message.id} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] rounded-lg p-4 ${message.type === 'user' ? 'bg-gradient-to-r from-purple-500 to-amber-500 text-white' : 'bg-gradient-to-r from-gray-50 to-amber-50 border border-amber-200'}`}>
                    <div className="flex items-center gap-2 mb-2">
                      {message.type === 'bot' ? <Bot className="h-4 w-4" /> : <User className="h-4 w-4" />}
                      <span className="text-xs opacity-70">
                        {message.timestamp.toLocaleTimeString()}
                      </span>
                    </div>
                    <p className="text-sm leading-relaxed whitespace-pre-line">{message.content}</p>
                    
                    {message.oilProfile && (
                      <div className="mt-4">
                        <Button 
                          onClick={() => setSelectedOil(message.oilProfile!)}
                          className="w-full bg-gradient-to-r from-purple-600 to-amber-600 hover:from-purple-700 hover:to-amber-700"
                        >
                          <Sparkles className="h-4 w-4 mr-2" />
                          Explore {message.oilProfile.name} Profile
                        </Button>
                      </div>
                    )}
                    
                    {message.products && message.products.length > 0 && (
                      <div className="mt-4 space-y-2">
                        {message.products.map((product) => (
                          <a 
                            key={product.id}
                            href={product.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block w-full p-3 bg-white rounded-lg border border-amber-300 hover:border-amber-400 transition-colors"
                          >
                            <div className="font-medium text-purple-700">{product.name}</div>
                            <div className="text-xs text-gray-600">{product.benefits.join(', ')}</div>
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-gradient-to-r from-gray-50 to-amber-50 border border-amber-200 rounded-lg p-4">
                    <div className="flex items-center gap-2">
                      <Bot className="h-4 w-4" />
                      <span className="text-sm">Famous AI curating your experience...</span>
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-amber-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-amber-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                        <div className="w-2 h-2 bg-amber-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </ScrollArea>
          
          <div className="border-t border-amber-200 p-4 bg-gradient-to-r from-purple-50 to-amber-50">
            <div className="flex gap-2">
              <Input
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask about hair care, skin wellness, essential oils, pet safety, or any natural solution..."
                className="flex-1 border-amber-200 focus:border-amber-400"
              />
              <Button 
                onClick={handleSendMessage} 
                disabled={!inputMessage.trim()}
                className="bg-gradient-to-r from-purple-600 to-amber-600 hover:from-purple-700 hover:to-amber-700"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AromatherapistChatBot;