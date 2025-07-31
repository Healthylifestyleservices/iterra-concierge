import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Send, Bot, User, Microscope } from 'lucide-react';
import famousAI from '@/lib/famous-ai.js';

interface Message {
  id: string;
  content: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const ResearchAIChatBot: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: 'Welcome! I am your clinical research assistant powered by Famous AI with access to peer-reviewed studies on essential oils and aromatherapy. I provide evidence-based information including safety protocols, efficacy data, and pet considerations. How can I help you today?',
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const researchTopics = [
    'Clinical studies on lavender for anxiety',
    'Pet-safe essential oils research',
    'Frankincense cancer research studies',
    'Peppermint for digestive health studies',
    'Tea tree antimicrobial research',
    'Eucalyptus respiratory studies'
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
      // Try Famous AI first
      const famousResponse = await famousAI.generateResponse(
        `As a clinical research expert, provide evidence-based information with citations for: ${currentMessage}`
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
      
      // Fallback to Supabase function
      try {
        const response = await fetch(
          'https://erevryxpkuqorebmjefc.supabase.co/functions/v1/1ae0c013-c154-45cc-bb5e-478efa9344d0',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ message: currentMessage })
          }
        );

        const data = await response.json();
        
        const botResponse: Message = {
          id: (Date.now() + 1).toString(),
          content: data.response || 'I apologize, but I\'m currently unable to access the research database. Please try again later.',
          sender: 'bot',
          timestamp: new Date()
        };
        
        setMessages(prev => [...prev, botResponse]);
      } catch (fallbackError) {
        const errorResponse: Message = {
          id: (Date.now() + 1).toString(),
          content: 'I apologize, but I\'m currently experiencing technical difficulties. Please try again later or consult peer-reviewed journals for essential oil research.',
          sender: 'bot',
          timestamp: new Date()
        };
        setMessages(prev => [...prev, errorResponse]);
      }
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <Card className="border-2 border-blue-200">
      <CardHeader className="bg-gradient-to-r from-blue-500 to-teal-500 text-white">
        <CardTitle className="flex items-center gap-3">
          <Microscope className="h-6 w-6" />
          Clinical Research AI (Famous AI)
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <ScrollArea className="h-96 p-4">
          <div className="space-y-4">
            {messages.map((message) => (
              <div key={message.id} className={`flex gap-3 ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                {message.sender === 'bot' && (
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full flex items-center justify-center">
                    <Bot className="h-4 w-4 text-white" />
                  </div>
                )}
                <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${message.sender === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-800'}`}>
                  <p className="text-sm whitespace-pre-line">{message.content}</p>
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
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full flex items-center justify-center">
                  <Bot className="h-4 w-4 text-white" />
                </div>
                <div className="bg-gray-100 px-4 py-2 rounded-lg">
                  <p className="text-sm text-gray-600">Famous AI researching studies...</p>
                </div>
              </div>
            )}
          </div>
        </ScrollArea>
        
        <div className="p-4 border-t">
          <div className="flex gap-2 mb-3 flex-wrap">
            {researchTopics.map((topic, index) => (
              <Button
                key={index}
                variant="outline"
                size="sm"
                onClick={() => setInputMessage(topic)}
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
              placeholder="Ask about clinical research, safety protocols, efficacy studies..."
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              className="flex-1"
            />
            <Button 
              onClick={handleSendMessage}
              className="bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600"
            >
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ResearchAIChatBot;