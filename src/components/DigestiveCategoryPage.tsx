import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { ArrowLeft, Leaf, Heart, Shield } from 'lucide-react';

interface DigestiveCategoryPageProps {
  onBack?: () => void;
}

const DigestiveCategoryPage: React.FC<DigestiveCategoryPageProps> = ({ onBack }) => {
  const digestiveProducts = [
    {
      id: 1,
      name: 'DigestZen Blend',
      description: 'Soothing digestive support blend',
      price: '$32.67',
      benefits: ['Reduces bloating', 'Supports digestion', 'Calms stomach']
    },
    {
      id: 2,
      name: 'Peppermint Oil',
      description: 'Natural digestive aid',
      price: '$28.00',
      benefits: ['Reduces nausea', 'Soothes stomach', 'Fresh breath']
    },
    {
      id: 3,
      name: 'Ginger Oil',
      description: 'Traditional digestive support',
      price: '$35.33',
      benefits: ['Anti-nausea', 'Digestive comfort', 'Natural warmth']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 p-6">
      {onBack && (
        <Button 
          variant="ghost" 
          onClick={onBack}
          className="mb-6 flex items-center gap-2 hover:bg-white/50"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Categories
        </Button>
      )}
      
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-8xl mb-4">🌿</div>
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Digestive Health</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Support your digestive wellness with natural, gentle solutions that promote comfort and balance.
          </p>
        </div>

        {/* Benefits Section */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="text-center">
            <CardContent className="pt-6">
              <Leaf className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Natural Relief</h3>
              <p className="text-sm text-gray-600">Plant-based solutions for digestive comfort</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <Heart className="w-12 h-12 text-red-500 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Gentle Care</h3>
              <p className="text-sm text-gray-600">Soothing support for sensitive stomachs</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <Shield className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Trusted Quality</h3>
              <p className="text-sm text-gray-600">Pure, tested essential oils</p>
            </CardContent>
          </Card>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {digestiveProducts.map((product) => (
            <Card key={product.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">{product.name}</CardTitle>
                <p className="text-gray-600">{product.description}</p>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <span className="text-2xl font-bold text-green-600">{product.price}</span>
                </div>
                <ul className="text-sm text-gray-600 mb-4 space-y-1">
                  {product.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                      {benefit}
                    </li>
                  ))}
                </ul>
                <Button className="w-full bg-green-600 hover:bg-green-700">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DigestiveCategoryPage;