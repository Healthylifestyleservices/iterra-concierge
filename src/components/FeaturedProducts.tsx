import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Sparkles } from 'lucide-react';
import { ProductLink } from './ProductLink';

interface FeaturedProduct {
  id: string;
  name: string;
  category: string;
  benefits: string[];
  isNew?: boolean;
  isSpecial?: boolean;
  description: string;
  productUrl?: string;
}

const FeaturedProducts: React.FC = () => {
  const featuredProducts: FeaturedProduct[] = [
    {
      id: 'fp1',
      name: 'Lavender Essential Oil',
      category: 'Essential Oils',
      benefits: ['Calming', 'Sleep Support', 'Skin Care'],
      isSpecial: true,
      description: 'Premium lavender oil for relaxation and wellness',
      productUrl: 'https://www.doterra.com/US/en/p/lavender-oil'
    },
    {
      id: 'fp2', 
      name: 'Daily Vitality Pack',
      category: 'Supplements',
      benefits: ['Complete Nutrition', 'Energy Support', 'Immune Health'],
      isNew: true,
      description: 'Complete daily nutrition in convenient packets',
      productUrl: 'https://www.doterra.com/US/en/p/lifelong-vitality-pack'
    },
    {
      id: 'fp3',
      name: 'Protective Blend',
      category: 'Essential Oil Blends', 
      benefits: ['Immune Support', 'Purifying', 'Seasonal Wellness'],
      isSpecial: true,
      description: 'Powerful blend for immune system support',
      productUrl: 'https://www.doterra.com/US/en/p/on-guard-protective-blend'
    },
    {
      id: 'fp4',
      name: 'Anti-Aging Skincare Kit',
      category: 'Skincare',
      benefits: ['Anti-Aging', 'Hydration', 'Natural Glow'],
      isNew: true,
      description: 'Complete skincare routine with essential oils',
      productUrl: 'https://www.doterra.com/US/en/p/anti-aging-moisturizer'
    }
  ];

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-2 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          ✨ Featured Products
        </h2>
        <p className="text-gray-600">Handpicked favorites and customer top choices</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {featuredProducts.map((product) => (
          <Card key={product.id} className="h-full hover:shadow-lg transition-all duration-300 group relative">
            {product.isNew && (
              <Badge className="absolute top-2 right-2 bg-green-500 text-white">
                NEW
              </Badge>
            )}
            {product.isSpecial && (
              <Badge className="absolute top-2 right-2 bg-red-500 text-white">
                <Sparkles className="h-3 w-3 mr-1" />
                SPECIAL
              </Badge>
            )}
            
            <CardHeader>
              <CardTitle className="text-lg">{product.name}</CardTitle>
              <Badge variant="outline">{product.category}</Badge>
            </CardHeader>
            
            <CardContent className="space-y-4">
              <p className="text-sm text-gray-600">{product.description}</p>
              
              <div>
                <h4 className="font-medium text-sm mb-1">Key Benefits:</h4>
                <div className="flex flex-wrap gap-1">
                  {product.benefits.map((benefit, idx) => (
                    <Badge key={idx} variant="secondary" className="text-xs">
                      {benefit}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <ProductLink 
                productName={product.name}
                baseUrl={product.productUrl}
                className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:opacity-90"
              />
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;