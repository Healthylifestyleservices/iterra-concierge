import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Badge } from './ui/badge';

const CATEGORIES = [
  {
    emoji: "💪",
    title: "Masculine Vitality",
    subtitle: "Holistic protocols for men's peak performance",
    slug: "masculine-vitality",
    color: "bg-slate-50 border-slate-200"
  },
  {
    emoji: "🌸",
    title: "Divine Feminine Energy",
    subtitle: "Nurturing wellness for hormonal balance",
    slug: "divine-feminine-energy",
    color: "bg-slate-50 border-slate-200"
  },
  {
    emoji: "🌿",
    title: "Wellness Sanctuary",
    subtitle: "Sacred botanicals, collections, blends, home & pet wellness",
    slug: "wellness-sanctuary",
    color: "bg-slate-50 border-slate-200"
  },
  {
    emoji: "💼",
    title: "Wellness Entrepreneurship",
    subtitle: "Transform passion into purpose",
    slug: "wellness-entrepreneurship",
    color: "bg-slate-50 border-slate-200"
  },
  {
    emoji: "🏡",
    title: "Home",
    subtitle: "Cleaning and cooking essentials",
    slug: "home",
    color: "bg-slate-50 border-slate-200"
  }
];

export function CleanWellnessHub() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [chatInput, setChatInput] = useState('');
  const [showAssistant, setShowAssistant] = useState(false);

  const handleCategorySelect = (slug: string) => {
    setSelectedCategory(slug);
  };

  const toggleAssistant = () => {
    setShowAssistant(!showAssistant);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-slate-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-800">iTERRA™ Concierge</h1>
              <p className="text-sm text-gray-600 mt-1">Powered by Healthy Lifestyle Education Services</p>
            </div>
            <Button 
              onClick={toggleAssistant}
              className="bg-gray-700 hover:bg-gray-800"
            >
              💬 Assistant
            </Button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Categories Grid */}
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
                  Explore →
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Selected Category Display */}
        {selectedCategory && (
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
        )}
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
              <Button className="w-full bg-gray-700 hover:bg-gray-800">
                Send Message
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}