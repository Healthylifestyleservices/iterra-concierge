import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Badge } from './ui/badge';
import { Textarea } from './ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { ScrollArea } from './ui/scroll-area';
import { Avatar, AvatarFallback } from './ui/avatar';

const WELLNESS_CATEGORIES = [
  {
    id: 'masculine-vitality',
    emoji: '💪',
    title: 'Masculine Vitality',
    subtitle: 'Holistic protocols for men\'s peak performance',
    color: 'bg-blue-50 border-blue-200 hover:bg-blue-100'
  },
  {
    id: 'divine-feminine',
    emoji: '🌸', 
    title: 'Divine Feminine Energy',
    subtitle: 'Nurturing wellness for hormonal balance',
    color: 'bg-pink-50 border-pink-200 hover:bg-pink-100'
  },
  {
    id: 'wellness-sanctuary',
    emoji: '🌿',
    title: 'Wellness Sanctuary', 
    subtitle: 'Sacred botanicals, collections, blends, home & pet wellness',
    color: 'bg-green-50 border-green-200 hover:bg-green-100'
  },
  {
    id: 'wellness-entrepreneurship',
    emoji: '💼',
    title: 'Wellness Entrepreneurship',
    subtitle: 'Transform passion into purpose',
    color: 'bg-amber-50 border-amber-200 hover:bg-amber-100'
  },
  {
    id: 'wisdom-wellness',
    emoji: '📖',
    title: 'Wisdom of Wellness',
    subtitle: 'Learn holistic health principles', 
    color: 'bg-teal-50 border-teal-200 hover:bg-teal-100'
  },
  {
    id: 'home',
    emoji: '🏡',
    title: 'Home',
    subtitle: 'Cleaning and cooking essentials',
    color: 'bg-purple-50 border-purple-200 hover:bg-purple-100'
  }
];

export function iTerraAssistantUI() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [showAssistant, setShowAssistant] = useState(false);
  const [chatMessages, setChatMessages] = useState<Array<{role: 'user' | 'assistant', content: string}>>([]);
  const [inputMessage, setInputMessage] = useState('');

  const handleCategorySelect = (categoryId: string) => {
    setSelectedCategory(categoryId);
  };

  const sendMessage = () => {
    if (!inputMessage.trim()) return;
    
    setChatMessages(prev => [...prev, { role: 'user', content: inputMessage }]);
    
    // Simulate assistant response
    setTimeout(() => {
      setChatMessages(prev => [...prev, { 
        role: 'assistant', 
        content: `I can help you with ${inputMessage}. What specific wellness goals are you looking to achieve?` 
      }]);
    }, 1000);
    
    setInputMessage('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm shadow-sm border-b sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-emerald-700 to-teal-600 bg-clip-text text-transparent">
                iTERRA™ Concierge
              </h1>
              <p className="text-xs md:text-sm text-gray-600 mt-1">
                Powered by Healthy Lifestyle Education Services
              </p>
            </div>
            <Button 
              onClick={() => setShowAssistant(!showAssistant)}
              className="bg-emerald-600 hover:bg-emerald-700 text-white shadow-md"
              size="sm"
            >
              💬 Assistant
            </Button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {!selectedCategory ? (
          <>
            <div className="text-center mb-8">
              <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-2">
                Choose Your Wellness Journey
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Discover personalized wellness solutions across six comprehensive categories
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {WELLNESS_CATEGORIES.map((category) => (
                <Card 
                  key={category.id}
                  className={`cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-2 ${category.color} border-2`}
                  onClick={() => handleCategorySelect(category.id)}
                >
                  <CardHeader className="text-center pb-3">
                    <div className="text-4xl mb-3 transform transition-transform hover:scale-110">
                      {category.emoji}
                    </div>
                    <CardTitle className="text-lg md:text-xl text-gray-800">
                      {category.title}
                    </CardTitle>
                    <CardDescription className="text-sm text-gray-600 leading-relaxed">
                      {category.subtitle}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <Badge variant="outline" className="w-full justify-center py-2 hover:bg-white/50 transition-colors">
                      Explore →
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </>
        ) : (
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-3">
                <span className="text-3xl">
                  {WELLNESS_CATEGORIES.find(c => c.id === selectedCategory)?.emoji}
                </span>
                <div>
                  <h2 className="text-2xl font-bold text-gray-800">
                    {WELLNESS_CATEGORIES.find(c => c.id === selectedCategory)?.title}
                  </h2>
                  <p className="text-gray-600">
                    {WELLNESS_CATEGORIES.find(c => c.id === selectedCategory)?.subtitle}
                  </p>
                </div>
              </div>
              <Button 
                onClick={() => setSelectedCategory(null)}
                variant="outline"
                className="hover:bg-gray-50"
              >
                ← Back
              </Button>
            </div>
            
            <div className="text-center py-12 text-gray-500">
              <p>Category content will be loaded here</p>
              <p className="text-sm mt-2">Use the assistant to get personalized recommendations</p>
            </div>
          </div>
        )}
      </main>

      {/* Floating Assistant */}
      {showAssistant && (
        <div className="fixed bottom-6 right-6 w-80 md:w-96 bg-white rounded-xl shadow-2xl border z-50">
          <div className="flex items-center justify-between p-4 border-b bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-t-xl">
            <div className="flex items-center space-x-2">
              <Avatar className="w-8 h-8">
                <AvatarFallback className="bg-white text-emerald-600 text-sm font-bold">
                  iT
                </AvatarFallback>
              </Avatar>
              <h3 className="font-semibold">iTERRA™ Assistant</h3>
            </div>
            <Button 
              onClick={() => setShowAssistant(false)}
              variant="ghost"
              size="sm"
              className="text-white hover:bg-white/20 h-8 w-8 p-0"
            >
              ✕
            </Button>
          </div>
          
          <ScrollArea className="h-64 p-4">
            {chatMessages.length === 0 ? (
              <div className="text-center text-gray-500 py-8">
                <p className="text-sm">👋 Hello! I'm your wellness assistant.</p>
                <p className="text-xs mt-2">Ask me about oils, protocols, or wellness advice!</p>
              </div>
            ) : (
              <div className="space-y-3">
                {chatMessages.map((msg, idx) => (
                  <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[80%] p-3 rounded-lg text-sm ${
                      msg.role === 'user' 
                        ? 'bg-emerald-500 text-white rounded-br-none' 
                        : 'bg-gray-100 text-gray-800 rounded-bl-none'
                    }`}>
                      {msg.content}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </ScrollArea>
          
          <div className="p-4 border-t">
            <div className="flex space-x-2">
              <Input
                placeholder="Ask about wellness, oils, protocols..."
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                className="flex-1"
              />
              <Button 
                onClick={sendMessage}
                className="bg-emerald-600 hover:bg-emerald-700 px-4"
                disabled={!inputMessage.trim()}
              >
                →
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}