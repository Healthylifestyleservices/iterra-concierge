import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { ArrowLeft } from 'lucide-react';

interface CategoryViewProps {
  category: string;
  onBack: () => void;
}

export function CategoryView({ category, onBack }: CategoryViewProps) {
  const getCategoryInfo = (cat: string) => {
    const categories = {
      masculine: {
        title: 'Masculine Vitality',
        icon: '💪',
        content: 'Enhance your strength, energy, and performance with targeted wellness solutions.'
      },
      feminine: {
        title: 'Divine Feminine Energy',
        icon: '🌸',
        content: 'Nurture balance, harmony, and feminine wellness with gentle, supportive approaches.'
      },
      sanctuary: {
        title: 'Wellness Sanctuary',
        icon: '🧘',
        content: 'Create your peaceful retreat with meditation, relaxation, and restoration practices.'
      },
      business: {
        title: 'Wellness Entrepreneurship',
        icon: '💼',
        content: 'Build and grow your wellness business with proven strategies and tools.'
      },
      wisdom: {
        title: 'Wisdom of Wellness',
        icon: '🦉',
        content: 'Deepen your understanding of wellness through education and ancient wisdom.'
      },
      pets: {
        title: 'Pets',
        icon: '🐾',
        content: 'Keep your furry friends healthy and happy with pet-safe wellness solutions.'
      },
      home: {
        title: 'Home',
        icon: '🏠',
        content: 'Transform your living space into a wellness haven for you and your family.'
      }
    };
    return categories[cat as keyof typeof categories] || { title: 'Unknown', icon: '❓', content: 'Category not found' };
  };

  const info = getCategoryInfo(category);

  return (
    <div className="p-6">
      <Button 
        variant="ghost" 
        onClick={onBack}
        className="mb-4 flex items-center gap-2"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Categories
      </Button>
      
      <Card className="max-w-2xl mx-auto">
        <CardHeader className="text-center">
          <div className="text-6xl mb-4">{info.icon}</div>
          <CardTitle className="text-2xl">{info.title}</CardTitle>
        </CardHeader>
        <CardContent className="text-center space-y-4">
          <p className="text-gray-700 text-lg">{info.content}</p>
          <div className="space-y-2">
            <Button className="w-full bg-emerald-600 hover:bg-emerald-700">
              Explore Products
            </Button>
            <Button variant="outline" className="w-full">
              Learn More
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}