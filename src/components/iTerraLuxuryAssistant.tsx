import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { MessageCircle, Send, Sparkles, Heart, Brain, Leaf, ShoppingBag, Star, Dog, Cat, Bird, Horse } from 'lucide-react';

interface Message {
  id: string;
  content: string;
  sender: 'user' | 'assistant';
  timestamp: Date;
}

const iTerraLuxuryAssistant: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: 'Welcome to iTerra™ Wellness Concierge. I\'m your Master Aromatherapist, Wellness Coach, and Business Strategist. I recommend complete product protocols, bundles, and programs with intelligent upselling paths. How may I design your optimal wellness protocol today?',
      sender: 'assistant',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const clinicalResponses = {
    sleep: "For optimal sleep support, I recommend the **Sleep System Protocol**: [Serenity Blend](https://doterra.com/associate-link) (topical & diffusion), [Lavender](https://doterra.com/associate-link) (pillow application), and [Adaptiv Capsules](https://doterra.com/associate-link) for stress response. Retail: $89.50 | Wholesale: $67.25 (25% savings). Add [PastTense](https://doterra.com/associate-link) for tension relief. Complete protocol targets GABA pathways and circadian rhythm optimization. *Educational guidance only.*",
    stress: "**Stress Management Protocol**: [Adaptiv System](https://doterra.com/associate-link) (capsules + blend), [Balance](https://doterra.com/associate-link) for grounding, [Frankincense](https://doterra.com/associate-link) for neural support. Bundle saves $23 vs individual. Targets cortisol regulation and parasympathetic activation. Chakra focus: Root & Crown. *For educational purposes only.*",
    energy: "**Vitality Enhancement Protocol**: [Peppermint Beadlets](https://doterra.com/associate-link), [Wild Orange](https://doterra.com/associate-link), [Motivate Blend](https://doterra.com/associate-link), plus [Alpha CRS+](https://doterra.com/associate-link) cellular support. Frequency: 528Hz resonance oils. Retail: $156 | Wholesale: $117 (save $39). *Educational information only.*",
    business: "Build your wellness empire with doTERRA's compensation plan. Start with [Home Essentials Kit](https://doterra.com/associate-link) ($150 wholesale value), earn 25% retail margins immediately. Fast Start bonuses up to $2000 first 60 days. Your products become FREE through customer volume. Let me map your 90-day launch strategy.",
    pets: "**Pet-Safe Protocol**: [Lavender](https://doterra.com/associate-link) 🐕🐱🐴 (dilute 1:10), [Frankincense](https://doterra.com/associate-link) 🐕🐱 (avoid birds), [Copaiba](https://doterra.com/associate-link) 🐕🐱🐴🐦 (all pets safe). Never use Tea Tree on cats. Dilution ratios critical for safety. *Veterinary consultation recommended.*"
  };

  const getIntelligentResponse = (message: string): string => {
    const msg = message.toLowerCase();
    if (msg.includes('sleep') || msg.includes('insomnia') || msg.includes('tired')) {
      return clinicalResponses.sleep;
    }
    if (msg.includes('stress') || msg.includes('anxiety') || msg.includes('overwhelm')) {
      return clinicalResponses.stress;
    }
    if (msg.includes('energy') || msg.includes('focus') || msg.includes('motivation')) {
      return clinicalResponses.energy;
    }
    if (msg.includes('business') || msg.includes('income') || msg.includes('money')) {
      return clinicalResponses.business;
    }
    if (msg.includes('pet') || msg.includes('dog') || msg.includes('cat') || msg.includes('animal')) {
      return clinicalResponses.pets;
    }
    
    return "I specialize in complete wellness protocols combining essential oils, supplements, and targeted programs. Popular bundles include our [Healthy Habits Kit](https://doterra.com/associate-link) or [Natural Solutions Kit](https://doterra.com/associate-link). What specific wellness goal would you like to address? I'll design a comprehensive protocol with pricing optimization and explain the clinical rationale. *Educational guidance only.*";
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

    setTimeout(() => {
      const response = getIntelligentResponse(currentInput);
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: response,
        sender: 'assistant',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, assistantMessage]);
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="text-center mb-6">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Star className="w-8 h-8 text-purple-600" />
          <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
            iTerra™ Wellness Concierge
          </h1>
          <Star className="w-8 h-8 text-purple-600" />
        </div>
        <div className="flex flex-wrap justify-center gap-2 mb-4">
          <Badge variant="secondary" className="bg-purple-100 text-purple-700">
            <Heart className="w-3 h-3 mr-1" />
            Master Aromatherapist
          </Badge>
          <Badge variant="secondary" className="bg-teal-100 text-teal-700">
            <Leaf className="w-3 h-3 mr-1" />
            Wellness Coach
          </Badge>
          <Badge variant="secondary" className="bg-blue-100 text-blue-700">
            <Brain className="w-3 h-3 mr-1" />
            Business Strategist
          </Badge>
          <Badge variant="secondary" className="bg-pink-100 text-pink-700">
            <ShoppingBag className="w-3 h-3 mr-1" />
            Product Guide
          </Badge>
        </div>
      </div>

      <Card className="h-[500px] flex flex-col border-2 border-purple-200 shadow-xl">
        <CardHeader className="bg-gradient-to-r from-purple-50 to-pink-50">
          <CardTitle className="flex items-center gap-2">
            <MessageCircle className="w-5 h-5 text-purple-600" />
            Clinical-Grade Wellness Protocols
          </CardTitle>
        </CardHeader>
        <CardContent className="flex-1 flex flex-col p-0">
          <div className="flex-1 overflow-y-auto space-y-4 p-4 bg-gradient-to-b from-purple-25 to-white">
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-4 rounded-lg shadow-sm ${message.sender === 'user' 
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white' 
                    : 'bg-white border border-purple-200'
                  }`}>
                  <div className="whitespace-pre-wrap leading-relaxed" dangerouslySetInnerHTML={{__html: message.content}} />
                  <p className={`text-xs mt-2 ${message.sender === 'user' ? 'text-purple-200' : 'text-gray-500'}`}>
                    {message.timestamp.toLocaleTimeString()}
                  </p>
                </div>
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
                placeholder="Ask about wellness protocols, product bundles, pricing, or business strategies..."
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
              *Clinical-grade educational protocols. Not medical advice. Consult healthcare providers.*
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default iTerraLuxuryAssistant;