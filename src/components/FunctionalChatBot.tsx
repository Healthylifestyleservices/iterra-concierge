import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { MessageCircle, Send, Sparkles, ExternalLink } from 'lucide-react';
import { supabase } from '@/lib/supabase';
import FixedProductLink from './FixedProductLink';

interface Message {
  id: string;
  content: string;
  sender: 'user' | 'assistant';
  timestamp: Date;
  products?: Array<{name: string; id?: string; price?: string}>;
}

const FunctionalChatBot: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([{
    id: '1',
    content: 'Hello! I\'m your iTerra wellness assistant. I can help you find the perfect essential oil protocols and products. What wellness goal would you like to work on today?',
    sender: 'assistant',
    timestamp: new Date()
  }]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const quickSuggestions = [
    'Help me sleep better',
    'Reduce stress and anxiety', 
    'Boost my energy',
    'Support my immune system',
    'Start a wellness business'
  ];

  const productDatabase = {
    sleep: [
      { name: 'Serenity Blend', id: 'serenity-restful-blend', price: '$26.67' },
      { name: 'Lavender', id: 'lavender-oil', price: '$24.00' },
      { name: 'Adaptiv Capsules', id: 'adaptiv-calming-blend-capsules', price: '$44.67' }
    ],
    stress: [
      { name: 'Adaptiv Blend', id: 'adaptiv-calming-blend', price: '$32.00' },
      { name: 'Balance Blend', id: 'balance-grounding-blend', price: '$26.67' },
      { name: 'Frankincense', id: 'frankincense-oil', price: '$90.67' }
    ],
    energy: [
      { name: 'Peppermint Beadlets', id: 'peppermint-beadlets', price: '$19.33' },
      { name: 'Wild Orange', id: 'wild-orange-oil', price: '$12.67' },
      { name: 'Motivate Blend', id: 'motivate-encouraging-blend', price: '$32.00' }
    ],
    immune: [
      { name: 'On Guard Blend', id: 'on-guard-protective-blend', price: '$35.33' },
      { name: 'Oregano', id: 'oregano-oil', price: '$29.33' },
      { name: 'Lifelong Vitality Pack', id: 'lifelong-vitality-pack', price: '$88.00' }
    ]
  };

  const generateResponse = async (userMessage: string): Promise<{content: string; products?: Array<{name: string; id?: string; price?: string}>}> => {
    const msg = userMessage.toLowerCase();
    
    // Try Famous AI first
    try {
      const response = await fetch('https://api.famous.ai/v1/generate', {
        method: 'POST',
        headers: {
          'Authorization': 'Bearer YOUR_FAMOUS_AI_KEY',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          prompt: `As an essential oil wellness expert, respond to: "${userMessage}". Include specific doTERRA product recommendations with benefits.`,
          model: 'empress-engine',
          max_tokens: 200
        })
      });
      
      if (response.ok) {
        const data = await response.json();
        return { content: data.text || data.response };
      }
    } catch (error) {
      console.log('Famous AI unavailable, using local responses');
    }

    // Fallback to local intelligent responses
    if (msg.includes('sleep') || msg.includes('insomnia') || msg.includes('tired')) {
      return {
        content: 'For better sleep, I recommend the **Sleep Support Protocol**: Serenity blend for diffusion and topical application, Lavender for pillow misting, and Adaptiv capsules for stress-related sleep issues. This combination targets GABA pathways and promotes natural circadian rhythm. Apply Serenity to bottoms of feet 30 minutes before bed.',
        products: productDatabase.sleep
      };
    }
    
    if (msg.includes('stress') || msg.includes('anxiety') || msg.includes('overwhelm')) {
      return {
        content: 'For stress management, try the **Emotional Balance Protocol**: Adaptiv blend (diffuse or apply to wrists), Balance for grounding (apply to back of neck), and Frankincense for mental clarity (apply to temples). This combination helps regulate cortisol and activates the parasympathetic nervous system.',
        products: productDatabase.stress
      };
    }
    
    if (msg.includes('energy') || msg.includes('focus') || msg.includes('motivation')) {
      return {
        content: 'For natural energy support, use the **Vitality Enhancement Protocol**: Peppermint beadlets for quick energy, Wild Orange for mood elevation, and Motivate blend for sustained motivation. These oils work synergistically to support healthy energy levels without caffeine crashes.',
        products: productDatabase.energy
      };
    }
    
    if (msg.includes('immune') || msg.includes('sick') || msg.includes('cold')) {
      return {
        content: 'For immune support, I recommend the **Protective Wellness Protocol**: On Guard blend for daily protection, Oregano for powerful immune support, and Lifelong Vitality Pack for foundational nutrition. Use On Guard in a diffuser daily and take LLV supplements as directed.',
        products: productDatabase.immune
      };
    }
    
    if (msg.includes('business') || msg.includes('income') || msg.includes('money')) {
      return {
        content: 'Ready to start your wellness business? doTERRA offers an incredible opportunity with 25% retail profits immediately, Fast Start bonuses up to $2,000 in your first 60 days, and the potential for residual income. Start with a Home Essentials Kit ($150 wholesale value) and I\'ll help you create your 90-day launch strategy. Your products can become FREE through customer volume!'
      };
    }
    
    return {
      content: 'I\'d be happy to help you with your wellness journey! I specialize in essential oil protocols for sleep, stress, energy, immune support, and business opportunities. What specific area would you like to focus on? I can provide detailed protocols with product recommendations and usage instructions.'
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
      const response = await generateResponse(currentInput);
      
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: response.content,
        sender: 'assistant',
        timestamp: new Date(),
        products: response.products
      };
      
      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Error generating response:', error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: 'I apologize, but I\'m having trouble connecting right now. Please try asking your question again, or contact our wellness team directly.',
        sender: 'assistant',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    setInputMessage(suggestion);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <Card className="h-[600px] flex flex-col">
        <CardHeader className="bg-gradient-to-r from-purple-50 to-pink-50">
          <CardTitle className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-purple-600" />
            iTerra Wellness Assistant
          </CardTitle>
          <div className="flex flex-wrap gap-2 mt-2">
            {quickSuggestions.map((suggestion, index) => (
              <Badge 
                key={index}
                variant="outline" 
                className="cursor-pointer hover:bg-purple-100 transition-colors"
                onClick={() => handleSuggestionClick(suggestion)}
              >
                {suggestion}
              </Badge>
            ))}
          </div>
        </CardHeader>
        
        <CardContent className="flex-1 flex flex-col p-0">
          <div className="flex-1 overflow-y-auto space-y-4 p-4">
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-4 rounded-lg ${message.sender === 'user' 
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white' 
                    : 'bg-white border border-purple-200'
                  }`}>
                  <div className="whitespace-pre-wrap">{message.content}</div>
                  
                  {message.products && (
                    <div className="mt-3 space-y-2">
                      <p className="font-semibold text-sm">Recommended Products:</p>
                      {message.products.map((product, index) => (
                        <div key={index} className="flex items-center justify-between bg-gray-50 p-2 rounded">
                          <div>
                            <span className="font-medium">{product.name}</span>
                            {product.price && <span className="text-green-600 ml-2">{product.price}</span>}
                          </div>
                          <FixedProductLink 
                            productName={product.name}
                            productId={product.id}
                            className="text-xs px-2 py-1"
                          />
                        </div>
                      ))}
                    </div>
                  )}
                  
                  <p className="text-xs mt-2 opacity-70">
                    {message.timestamp.toLocaleTimeString()}
                  </p>
                </div>
              </div>
            ))}
            
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white border border-purple-200 p-4 rounded-lg">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                    <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                  </div>
                </div>
              </div>
            )}
          </div>
          
          <div className="p-4 border-t">
            <div className="flex gap-2">
              <Input
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Ask about wellness protocols, products, or business opportunities..."
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                disabled={isLoading}
              />
              <Button 
                onClick={handleSendMessage} 
                disabled={isLoading || !inputMessage.trim()}
                className="bg-gradient-to-r from-purple-600 to-pink-600"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default FunctionalChatBot;