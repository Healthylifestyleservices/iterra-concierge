import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Badge } from '@/components/ui/badge';
import { Sparkles, Send, Bot, User, MessageCircle, X } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  suggestions?: string[];
}

const iTerraConsultantBot: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isMinimized, setIsMinimized] = useState(true);

  useEffect(() => {
    const welcomeMessage: Message = {
      id: '1',
      text: "Hello! I'm your iTerra Wellness Concierge. I can help you with essential oils, wellness protocols, and product recommendations. How may I assist your wellness journey today?",
      sender: 'bot',
      timestamp: new Date(),
      suggestions: [
        "Start wellness intake",
        "View my protocol",
        "Explore membership tiers",
        "See impact dashboard"
      ]
    };
    setMessages([welcomeMessage]);
  }, []);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: input,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      let botResponse = "I'd be happy to help you with that wellness inquiry.";
      let suggestions = ["Tell me more", "Show products", "Other options"];
      
      if (input.toLowerCase().includes('intake')) {
        botResponse = "Perfect! I can guide you through our comprehensive wellness intake system. This will help us create a personalized protocol just for you.";
        suggestions = ["Start intake now", "Learn about protocols", "View examples"];
      } else if (input.toLowerCase().includes('protocol')) {
        botResponse = "Your personalized wellness protocol is designed based on your intake responses, including chakra alignment, emotional needs, and pet safety considerations.";
        suggestions = ["View my protocol", "Update intake", "Learn more"];
      } else if (input.toLowerCase().includes('membership')) {
        botResponse = "We offer three tiers: Retail Customer, Wellness Advocate (25% savings), and Business Associate. Each tier provides increasing benefits and savings.";
        suggestions = ["Compare tiers", "Upgrade now", "Learn benefits"];
      } else if (input.toLowerCase().includes('impact')) {
        botResponse = "Our impact dashboard shows how your wellness journey contributes to global sustainability - from trees planted to communities supported worldwide.";
        suggestions = ["View impact", "Learn more", "See projects"];
      }
      
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: botResponse,
        sender: 'bot',
        timestamp: new Date(),
        suggestions
      };

      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const handleSuggestionClick = (suggestion: string) => {
    if (suggestion === "Start intake now") {
      const event = new CustomEvent('navigate', { detail: 'intake' });
      window.dispatchEvent(event);
      setIsMinimized(true);
    } else if (suggestion === "View my protocol") {
      const event = new CustomEvent('navigate', { detail: 'protocol' });
      window.dispatchEvent(event);
      setIsMinimized(true);
    } else if (suggestion === "Compare tiers") {
      const event = new CustomEvent('navigate', { detail: 'membership-tiers' });
      window.dispatchEvent(event);
      setIsMinimized(true);
    } else if (suggestion === "View impact") {
      const event = new CustomEvent('navigate', { detail: 'impact' });
      window.dispatchEvent(event);
      setIsMinimized(true);
    } else {
      setInput(suggestion);
    }
  };

  const toggleChat = () => {
    setIsMinimized(!isMinimized);
    if (!isVisible) setIsVisible(true);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {isMinimized ? (
        <Button
          onClick={toggleChat}
          className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white rounded-full p-4 shadow-lg animate-pulse"
          size="lg"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      ) : (
        <Card className="w-96 h-[500px] shadow-2xl border-2 border-green-500">
          <CardHeader className="bg-gradient-to-r from-green-500 to-blue-500 text-white p-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Sparkles className="h-5 w-5" />
                <CardTitle className="text-sm">iTerra Concierge</CardTitle>
                <Badge variant="secondary" className="text-xs bg-white/20">Live</Badge>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleChat}
                className="text-white hover:bg-white/20 h-6 w-6 p-0"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </CardHeader>
          
          <CardContent className="p-0 flex flex-col h-[440px]">
            <ScrollArea className="flex-1 p-4">
              <div className="space-y-4">
                {messages.map((message) => (
                  <div key={message.id} className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[80%] p-3 rounded-lg ${
                      message.sender === 'user' 
                        ? 'bg-blue-500 text-white' 
                        : 'bg-gray-100 text-gray-800'
                    }`}>
                      <div className="flex items-start space-x-2">
                        {message.sender === 'bot' && <Sparkles className="h-4 w-4 mt-0.5 flex-shrink-0" />}
                        {message.sender === 'user' && <User className="h-4 w-4 mt-0.5 flex-shrink-0" />}
                        <div className="flex-1">
                          <p className="text-sm">{message.text}</p>
                          {message.suggestions && message.suggestions.length > 0 && (
                            <div className="mt-2 space-y-1">
                              {message.suggestions.map((suggestion, index) => (
                                <Button
                                  key={index}
                                  variant="outline"
                                  size="sm"
                                  className="text-xs h-6 mr-1 mb-1"
                                  onClick={() => handleSuggestionClick(suggestion)}
                                >
                                  {suggestion}
                                </Button>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="bg-gray-100 p-3 rounded-lg">
                      <div className="flex items-center space-x-2">
                        <Sparkles className="h-4 w-4" />
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </ScrollArea>
            
            <div className="p-4 border-t">
              <div className="flex space-x-2">
                <Input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask about wellness, protocols, or membership..."
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  className="flex-1"
                />
                <Button onClick={handleSend} size="sm" disabled={!input.trim() || isTyping}>
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default iTerraConsultantBot;