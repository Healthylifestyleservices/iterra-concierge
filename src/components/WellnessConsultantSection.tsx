import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Sparkles, Heart, Flower, Zap, ClipboardList, ShoppingBag } from 'lucide-react';

interface WellnessConsultantSectionProps {
  onSectionChange: (section: string) => void;
}

const WellnessConsultantSection: React.FC<WellnessConsultantSectionProps> = ({ onSectionChange }) => {
  const consultationOptions = [
    {
      id: 'mens',
      title: 'Men\'s Wellness',
      description: 'Specialized wellness solutions for men',
      icon: Zap,
      gradient: 'from-blue-400 to-teal-400',
      textColor: 'text-blue-600'
    },
    {
      id: 'womens',
      title: 'Women\'s Wellness',
      description: 'Comprehensive wellness support for women',
      icon: Heart,
      gradient: 'from-pink-400 to-rose-400',
      textColor: 'text-pink-600'
    },
    {
      id: 'products',
      title: 'Product Catalog',
      description: 'Browse our complete wellness product offerings',
      icon: ShoppingBag,
      gradient: 'from-orange-400 to-red-400',
      textColor: 'text-orange-600'
    },
    {
      id: 'collections',
      title: 'Oil Collections & Blends',
      description: 'Explore curated collections and proprietary blends',
      icon: ClipboardList,
      gradient: 'from-indigo-400 to-purple-400',
      textColor: 'text-indigo-600'
    },
    {
      id: 'business',
      title: 'Business Tools',
      description: 'Resources for wellness entrepreneurs',
      icon: Flower,
      gradient: 'from-green-400 to-emerald-400',
      textColor: 'text-green-600'
    },
    {
      id: 'education',
      title: 'Education Hub',
      description: 'Learn about wellness and essential oils',
      icon: Sparkles,
      gradient: 'from-purple-400 to-violet-400',
      textColor: 'text-purple-600'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-100 via-blue-100 via-green-100 to-yellow-100">
      <div className="max-w-6xl mx-auto p-6">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 via-blue-600 to-green-600 bg-clip-text text-transparent mb-4">
            iTerra Wellness Hub
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Your personal gateway to holistic wellness solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {consultationOptions.map((option, index) => {
            const Icon = option.icon;
            return (
              <Card 
                key={index}
                className="hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 overflow-hidden"
              >
                <div className={`h-2 bg-gradient-to-r ${option.gradient}`} />
                <CardHeader className="text-center pb-4">
                  <div className={`mx-auto mb-4 p-4 rounded-full bg-gradient-to-r ${option.gradient} w-fit`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className={`text-xl ${option.textColor}`}>
                    {option.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600 mb-6">{option.description}</p>
                  <Button 
                    onClick={() => onSectionChange(option.id)}
                    className={`bg-gradient-to-r ${option.gradient} hover:shadow-lg transform hover:scale-105 transition-all duration-200 text-white border-0`}
                    size="lg"
                  >
                    <Sparkles className="mr-2 h-5 w-5" />
                    Explore
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default WellnessConsultantSection;