import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';

interface WellnessOptionsProps {
  onSelectCategory: (category: string) => void;
}

export function WellnessOptions({ onSelectCategory }: WellnessOptionsProps) {
  const categories = [
    {
      id: 'masculine',
      title: 'Masculine Vitality',
      icon: '💪',
      description: 'Strength & Performance'
    },
    {
      id: 'feminine',
      title: 'Divine Feminine Energy',
      icon: '🌸',
      description: 'Balance & Harmony'
    },
    {
      id: 'sanctuary',
      title: 'Wellness Sanctuary',
      icon: '🧘',
      description: 'Peace & Restoration'
    },
    {
      id: 'business',
      title: 'Wellness Entrepreneurship',
      icon: '💼',
      description: 'Business & Growth'
    },
    {
      id: 'wisdom',
      title: 'Wisdom of Wellness',
      icon: '🦉',
      description: 'Knowledge & Learning'
    },
    {
      id: 'pets',
      title: 'Pets',
      icon: '🐾',
      description: 'Pet Care & Safety'
    },
    {
      id: 'home',
      title: 'Home',
      icon: '🏠',
      description: 'Home & Family'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-6">
      {categories.map((category) => (
        <Card 
          key={category.id} 
          className="cursor-pointer hover:shadow-lg transition-all duration-300 hover:scale-105"
          onClick={() => onSelectCategory(category.id)}
        >
          <CardHeader className="text-center pb-2">
            <div className="text-4xl mb-2">{category.icon}</div>
            <CardTitle className="text-lg">{category.title}</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-sm text-gray-600">{category.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}