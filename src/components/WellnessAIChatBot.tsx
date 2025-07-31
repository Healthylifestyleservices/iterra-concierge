import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Send, Bot, User, Sparkles, Heart } from 'lucide-react';
import famousAI from '@/lib/famous-ai.js';

interface Message {
  id: string;
  content: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const WellnessAIChatBot: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: 'Welcome to your AI Wellness Assistant powered by Famous AI! I\'m here to help with evidence-based recommendations and wellness protocols. What would you like to explore today?',
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const wellnessTopics = [
    'Research on essential oils',
    'Evidence-based stress relief',
    'Aromatherapy studies',
    'Wellness protocols',
    'Product recommendations',
    'Natural health studies'
  ];

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputMessage,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    const currentMessage = inputMessage;
    setInputMessage('');
    setIsTyping(true);

    try {
      const famousResponse = await famousAI.generateResponse(
        `As a wellness expert, provide evidence-based advice for: ${currentMessage}`
      );
      
      if (famousResponse && famousResponse.text) {
        const botResponse: Message = {
          id: (Date.now() + 1).toString(),
          content: famousResponse.text,
          sender: 'bot',
          timestamp: new Date()
        };
        setMessages(prev => [...prev, botResponse]);
      } else {
        throw new Error('Famous AI response invalid');
      }
    } catch (error) {
      console.log('Famous AI unavailable, using fallback');
      const fallbackResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: 'I\'m having trouble with the AI service right now. Please try again or ask about wellness topics!',
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, fallbackResponse]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleTopicClick = (topic: string) => {
    setInputMessage(topic);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <Card className="border-2 border-blue-200">
        <CardHeader className="bg-gradient-to-r from-blue-600 to-teal-600 text-white">
          <CardTitle className="flex items-center gap-3">
            <Sparkles className="h-6 w-6" />
            AI Wellness Assistant (Famous AI Powered)
            <Heart className="h-6 w-6" />
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <ScrollArea className="h-96 p-4 border rounded mb-4">
            <div className="space-y-4">
              {messages.map((message) => (
                <div key={message.id} className={`flex gap-3 ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                  {message.sender === 'bot' && (
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-teal-600 rounded-full flex items-center justify-center">
                      <Bot className="h-4 w-4 text-white" />
                    </div>
                  )}
                  <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                    message.sender === 'user' 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-gray-100 text-gray-800'
                  }`}>
                    <p className="text-sm">{message.content}</p>
                  </div>
                  {message.sender === 'user' && (
                    <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                      <User className="h-4 w-4 text-gray-600" />
                    </div>
                  )}
                </div>
              ))}
              {isTyping && (
                <div className="flex gap-3 justify-start">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-teal-600 rounded-full flex items-center justify-center">
                    <Bot className="h-4 w-4 text-white" />
                  </div>
                  <div className="bg-gray-100 px-4 py-2 rounded-lg">
                    <p className="text-sm text-gray-600">Famous AI analyzing...</p>
                  </div>
                </div>
              )}
            </div>
          </ScrollArea>
          
          <div className="space-y-3">
            <div className="flex gap-2 flex-wrap">
              {wellnessTopics.map((topic, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="sm"
                  onClick={() => handleTopicClick(topic)}
                  className="text-xs border-blue-200 hover:bg-blue-50"
                >
                  {topic}
                </Button>
              ))}
            </div>
            
            <div className="flex gap-2">
              <Input
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Ask about wellness, research, protocols..."
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                className="flex-1"
              />
              <Button 
                onClick={handleSendMessage}
                className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700"
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

export default WellnessAIChatBot;