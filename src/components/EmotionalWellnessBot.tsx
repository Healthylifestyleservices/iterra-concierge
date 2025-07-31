import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Send, Bot, User, Heart, Sparkles } from 'lucide-react';
import { processEmotionalQuery } from '@/lib/emotional-engine';

interface Message {
  id: string;
  content: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  emotionalResponse?: {
    oils: string[];
    action: string;
    geometry: string;
  };
}

const EmotionalWellnessBot: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: 'Welcome to your Emotional Wellness Assistant! I can detect your emotional state and provide personalized essential oil recommendations and healing actions. How are you feeling today?',
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const emotionalPrompts = [
    'I feel overwhelmed',
    'I\'m grieving a loss',
    'I\'m feeling angry',
    'I need more energy',
    'I can\'t focus',
    'I need peace'
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

    // Process emotional query
    const emotionalResponse = processEmotionalQuery(currentMessage);
    
    setTimeout(() => {
      let botContent = '';
      let botEmotionalResponse = undefined;

      if (emotionalResponse) {
        botContent = `I sense you're experiencing ${Object.keys(processEmotionalQuery(currentMessage) || {}).join(', ')}. Here's what I recommend:\n\n🌿 Essential Oils: ${emotionalResponse.oils.join(', ')}\n\n✨ Healing Action: ${emotionalResponse.action}\n\nTake a moment to breathe deeply and connect with these natural remedies.`;
        botEmotionalResponse = emotionalResponse;
      } else {
        botContent = 'I hear you. While I couldn\'t detect a specific emotional pattern, I\'m here to support you. Try describing how you\'re feeling with words like "stressed", "sad", "anxious", or "tired" for personalized recommendations.';
      }

      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: botContent,
        sender: 'bot',
        timestamp: new Date(),
        emotionalResponse: botEmotionalResponse
      };
      
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const handlePromptClick = (prompt: string) => {
    setInputMessage(prompt);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <Card className="border-2 border-purple-200">
        <CardHeader className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
          <CardTitle className="flex items-center gap-3">
            <Heart className="h-6 w-6" />
            Emotional Wellness Assistant
            <Sparkles className="h-6 w-6" />
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <ScrollArea className="h-96 p-4 border rounded mb-4">
            <div className="space-y-4">
              {messages.map((message) => (
                <div key={message.id} className={`flex gap-3 ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                  {message.sender === 'bot' && (
                    <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
                      <Bot className="h-4 w-4 text-white" />
                    </div>
                  )}
                  <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                    message.sender === 'user' 
                      ? 'bg-purple-600 text-white' 
                      : 'bg-gray-100 text-gray-800'
                  }`}>
                    <p className="text-sm whitespace-pre-line">{message.content}</p>
                    {message.emotionalResponse && (
                      <div className="mt-3 p-3 bg-white/20 rounded-lg">
                        <div className="flex items-center justify-center mb-2">
                          <img 
                            src="/flower-of-life.svg" 
                            alt="Sacred Geometry" 
                            className="w-8 h-8 opacity-70"
                          />
                        </div>
                      </div>
                    )}
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
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
                    <Bot className="h-4 w-4 text-white" />
                  </div>
                  <div className="bg-gray-100 px-4 py-2 rounded-lg">
                    <p className="text-sm text-gray-600">Sensing your emotional state...</p>
                  </div>
                </div>
              )}
            </div>
          </ScrollArea>
          
          <div className="space-y-3">
            <div className="flex gap-2 flex-wrap">
              {emotionalPrompts.map((prompt, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="sm"
                  onClick={() => handlePromptClick(prompt)}
                  className="text-xs border-purple-200 hover:bg-purple-50"
                >
                  {prompt}
                </Button>
              ))}
            </div>
            
            <div className="flex gap-2">
              <Input
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Tell me how you're feeling..."
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                className="flex-1"
              />
              <Button 
                onClick={handleSendMessage}
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
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

export default EmotionalWellnessBot;