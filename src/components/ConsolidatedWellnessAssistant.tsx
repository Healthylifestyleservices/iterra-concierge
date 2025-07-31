import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { MessageCircle, Send, Sparkles, Heart, Brain, Leaf } from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import WellnessQuestionnaire from './WellnessQuestionnaire';
import ConsultationQuestionnaire from './ConsultationQuestionnaire';
import OilProfileDisplay from './OilProfileDisplay';

interface Message {
  id: string;
  content: string;
  sender: 'user' | 'assistant';
  timestamp: Date;
}

const ConsolidatedWellnessAssistant: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: 'Hello! I\'m iTerra, your trusted sales representative, certified aromatherapist, doTERRA expert, and holistic wellness consultant. I can help with essential oils, wellness guidance, product recommendations, and research. How can I assist you today?',
      sender: 'assistant',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [selectedOil, setSelectedOil] = useState<any>(null);
  const [activeTab, setActiveTab] = useState('chat');

  const handleSendMessage = async () => {
    if (!inputMessage.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputMessage,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);

    try {
      const response = await fetch(
        'https://erevryxpkuqorebmjefc.supabase.co/functions/v1/23869b48-9960-4d22-8f9b-cf354be5f8d4',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ message: inputMessage })
        }
      );

      const data = await response.json();
      
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: data.response || 'I apologize, but I\'m having trouble responding right now.',
        sender: 'assistant',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to get response. Please try again.',
        variant: 'destructive'
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent mb-4">
          iTerra - Your Wellness Expert
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          Your trusted sales representative, certified aromatherapist, doTERRA expert, and holistic wellness consultant
        </p>
        <div className="flex flex-wrap justify-center gap-2">
          <Badge variant="secondary" className="bg-purple-100 text-purple-700">
            <Heart className="w-3 h-3 mr-1" />
            Wellness Expert
          </Badge>
          <Badge variant="secondary" className="bg-teal-100 text-teal-700">
            <Leaf className="w-3 h-3 mr-1" />
            Certified Aromatherapist
          </Badge>
          <Badge variant="secondary" className="bg-blue-100 text-blue-700">
            <Brain className="w-3 h-3 mr-1" />
            doTERRA Expert
          </Badge>
          <Badge variant="secondary" className="bg-pink-100 text-pink-700">
            <Sparkles className="w-3 h-3 mr-1" />
            Sales Representative
          </Badge>
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="chat">Chat with iTerra</TabsTrigger>
          <TabsTrigger value="wellness-quiz">Wellness Quiz</TabsTrigger>
          <TabsTrigger value="consultation">Consultation</TabsTrigger>
          <TabsTrigger value="oil-profiles">Oil Profiles</TabsTrigger>
        </TabsList>

        <TabsContent value="chat" className="mt-6">
          <Card className="h-[500px] flex flex-col">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageCircle className="w-5 h-5 text-purple-600" />
                Chat with iTerra
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col">
              <div className="flex-1 overflow-y-auto space-y-4 mb-4 p-4 bg-gray-50 rounded-lg">
                {messages.map((message) => (
                  <div key={message.id} className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[80%] p-3 rounded-lg ${
                      message.sender === 'user' 
                        ? 'bg-purple-600 text-white' 
                        : 'bg-white border shadow-sm'
                    }`}>
                      <p className="whitespace-pre-wrap">{message.content}</p>
                      <p className={`text-xs mt-1 ${
                        message.sender === 'user' ? 'text-purple-200' : 'text-gray-500'
                      }`}>
                        {message.timestamp.toLocaleTimeString()}
                      </p>
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <div className="flex justify-start">
                    <div className="bg-white border shadow-sm p-3 rounded-lg">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="flex gap-2">
                <Input
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  placeholder="Ask iTerra about essential oils, wellness, products, business..."
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  disabled={isLoading}
                />
                <Button onClick={handleSendMessage} disabled={isLoading || !inputMessage.trim()}>
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="wellness-quiz">
          <WellnessQuestionnaire />
        </TabsContent>

        <TabsContent value="consultation">
          <ConsultationQuestionnaire />
        </TabsContent>

        <TabsContent value="oil-profiles">
          <OilProfileDisplay selectedOil={selectedOil} />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ConsolidatedWellnessAssistant;