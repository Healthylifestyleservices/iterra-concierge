import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Badge } from './ui/badge';
import { useNavigate } from 'react-router-dom';
import EmotionalWellnessBot from './EmotionalWellnessBot';
import { processEmotionalQuery } from '@/lib/emotional-engine';

const CATEGORIES = [
  {
    emoji: "💪",
    title: "Masculine Vitality",
    subtitle: "Holistic protocols for men's peak performance",
    slug: "masculine-vitality",
    color: "bg-blue-50 border-blue-200"
  },
  {
    emoji: "🌸",
    title: "Divine Feminine Energy",
    subtitle: "Nurturing wellness for hormonal balance",
    slug: "divine-feminine-energy",
    color: "bg-pink-50 border-pink-200"
  },
  {
    emoji: "💜",
    title: "Emotional Wellness",
    subtitle: "AI-powered emotional support with essential oils",
    slug: "emotional-wellness",
    color: "bg-purple-50 border-purple-200"
  },
  {
    emoji: "🌿",
    title: "Wellness Sanctuary",
    subtitle: "Sacred botanicals, collections, blends, home & pet wellness",
    slug: "wellness-sanctuary",
    color: "bg-green-50 border-green-200"
  },
  {
    emoji: "💼",
    title: "Business Tools",
    subtitle: "Self-contained resources with automatic fallback",
    slug: "business-tools",
    color: "bg-amber-50 border-amber-200"
  },
  {
    emoji: "🏡",
    title: "Home",
    subtitle: "Cleaning and cooking essentials",
    slug: "home",
    color: "bg-indigo-50 border-indigo-200"
  }
];

export function EnhancediTerraWellnessHub() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [chatInput, setChatInput] = useState('');
  const [showAssistant, setShowAssistant] = useState(false);
  const [quickEmotionalCheck, setQuickEmotionalCheck] = useState('');
  const navigate = useNavigate();

  const handleCategorySelect = (slug: string) => {
    if (slug === 'business-tools') {
      navigate('/business-tools');
    } else {
      setSelectedCategory(slug);
    }
  };

  const toggleAssistant = () => {
    setShowAssistant(!showAssistant);
  };

  const handleQuickEmotionalCheck = () => {
    if (quickEmotionalCheck.trim()) {
      const response = processEmotionalQuery(quickEmotionalCheck);
      if (response) {
        setSelectedCategory('emotional-wellness');
      }
    }
  };

  const renderCategoryContent = () => {
    if (selectedCategory === 'emotional-wellness') {
      return (
        <div className="mt-8">
          <EmotionalWellnessBot />
        </div>
      );
    }
    
    if (selectedCategory) {
      return (
        <div className="mt-8 p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">Selected: {selectedCategory}</h2>
          <p className="text-gray-600">Content for {selectedCategory} category will be displayed here.</p>
          <Button 
            onClick={() => setSelectedCategory(null)}
            variant="outline"
            className="mt-4"
          >
            ← Back to Categories
          </Button>
        </div>
      );
    }
    
    return null;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div>
              <h1 className="text-3xl font-bold text-emerald-800">iTERRA™ Concierge</h1>
              <p className="text-sm text-gray-600 mt-1">Powered by Healthy Lifestyle Education Services</p>
            </div>
            <Button 
              onClick={toggleAssistant}
              className="bg-emerald-600 hover:bg-emerald-700"
            >
              💬 Assistant
            </Button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Quick Emotional Check */}
        {!selectedCategory && (
          <div className="mb-8 p-6 bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg border border-purple-200">
            <h2 className="text-xl font-semibold text-purple-800 mb-3 flex items-center gap-2">
              💜 Quick Emotional Check
            </h2>
            <p className="text-purple-700 mb-4">How are you feeling today? Get instant essential oil recommendations.</p>
            <div className="flex gap-2">
              <Input
                placeholder="I feel stressed, anxious, overwhelmed..."
                value={quickEmotionalCheck}
                onChange={(e) => setQuickEmotionalCheck(e.target.value)}
                className="flex-1"
                onKeyPress={(e) => e.key === 'Enter' && handleQuickEmotionalCheck()}
              />
              <Button 
                onClick={handleQuickEmotionalCheck}
                className="bg-purple-600 hover:bg-purple-700"
              >
                Get Support
              </Button>
            </div>
          </div>
        )}

        {/* Categories Grid */}
        {!selectedCategory && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CATEGORIES.map((category) => (
              <Card 
                key={category.slug}
                className={`cursor-pointer transition-all duration-200 hover:shadow-lg hover:-translate-y-1 ${category.color}`}
                onClick={() => handleCategorySelect(category.slug)}
              >
                <CardHeader className="text-center">
                  <div className="text-4xl mb-2">{category.emoji}</div>
                  <CardTitle className="text-xl">{category.title}</CardTitle>
                  <CardDescription className="text-sm">
                    {category.subtitle}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Badge variant="outline" className="w-full justify-center">
                    {category.slug === 'business-tools' ? 'Open Tools →' : 'Explore →'}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Category Content */}
        {renderCategoryContent()}
      </main>

      {/* Assistant Panel */}
      {showAssistant && (
        <div className="fixed bottom-4 right-4 w-80 bg-white rounded-lg shadow-xl border">
          <div className="p-4 border-b">
            <div className="flex justify-between items-center">
              <h3 className="font-semibold">iTERRA™ Assistant</h3>
              <Button 
                onClick={toggleAssistant}
                variant="ghost"
                size="sm"
              >
                ✕
              </Button>
            </div>
          </div>
          <div className="p-4">
            <div className="space-y-3">
              <Input
                placeholder="Ask about wellness, oils, or protocols..."
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
              />
              <Button className="w-full bg-emerald-600 hover:bg-emerald-700">
                Send Message
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}