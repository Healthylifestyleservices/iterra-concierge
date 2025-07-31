import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Leaf, Sparkles } from 'lucide-react';

const EssentialOilWellnessCategories: React.FC = () => {
  const categories = [
    {
      title: '🌿 Natural',
      description: 'Discover the power of nature with our pure, natural essential oils',
      items: ['Lavender', 'Tea Tree', 'Eucalyptus', 'Peppermint', 'Lemon']
    },
    {
      title: '✨ Wellness',
      description: 'Transform your wellness journey with therapeutic essential oils',
      items: ['Stress Relief', 'Sleep Support', 'Energy Boost', 'Immune Support', 'Focus & Clarity']
    }
  ];

  return (
    <div className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        {categories.map((category, index) => (
          <Card key={index} className="border-2 hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-center">
                {category.title}
              </CardTitle>
              <p className="text-gray-600 text-center">{category.description}</p>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {category.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex items-center space-x-2 p-2 rounded-lg bg-gray-50">
                    <Leaf className="h-4 w-4 text-green-500" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center mt-8">
        <Button 
          onClick={() => window.dispatchEvent(new CustomEvent('navigate', { detail: 'wellness-assistant' }))}
          className="bg-gradient-to-r from-green-500 to-purple-500 hover:from-green-600 hover:to-purple-600 text-white px-8 py-3 text-lg"
        >
          <Sparkles className="mr-2 h-5 w-5" />
          Access Comprehensive Wellness Assistant
        </Button>
      </div>
    </div>
  );
};

export default EssentialOilWellnessCategories;