import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Heart, Shield, Droplets, Leaf, Plus } from 'lucide-react';
import { comprehensiveProductCatalog } from '@/data/comprehensiveProductCatalog';

interface RecommendationResultsProps {
  recommendations: {
    type: 'people' | 'pets';
    answers: Record<string, any>;
    products: string[];
    safetyTips: string[];
    usageGuide: string[];
  };
  onStartOver: () => void;
}

const RecommendationResults: React.FC<RecommendationResultsProps> = ({ recommendations, onStartOver }) => {
  const { type, answers, products, safetyTips, usageGuide } = recommendations;

  const getProductDetails = (productName: string) => {
    const productMap: Record<string, string> = {
      'Lemon Essential Oil - Internal Use': 'lemon-oil',
      'Frankincense Essential Oil - Cellular Health': 'frankincense-oil',
      'Lifelong Vitality Pack': 'lifelong-vitality',
      'Oregano Essential Oil - Internal': 'copaiba-oil',
      'DigestZen Blend - Internal': 'digestzen',
      'Peppermint Oil': 'lemon-oil',
      'Calming Blend': 'adaptiv-capsules',
      'Lavender Oil': 'serenity-softgels'
    };

    const productId = productMap[productName];
    return comprehensiveProductCatalog.find(p => p.id === productId) || {
      id: 'default',
      name: productName,
      category: 'Essential Oils',
      type: 'essential-oil' as const,
      description: 'Premium wellness product for comprehensive support',
      benefits: ['Natural wellness support', 'High quality'],
      internalUse: true,
      complementaryProducts: [],
      url: 'https://www.doterra.com/US/en/essential-oils'
    };
  };

  const getComplementaryProducts = (mainProducts: any[]) => {
    const complementary = new Set<string>();
    mainProducts.forEach(product => {
      product.complementaryProducts.forEach((id: string) => {
        const comp = comprehensiveProductCatalog.find(p => p.id === id);
        if (comp && !mainProducts.find(mp => mp.id === comp.id)) {
          complementary.add(comp.id);
        }
      });
    });
    return Array.from(complementary).map(id => 
      comprehensiveProductCatalog.find(p => p.id === id)!
    ).slice(0, 3);
  };

  const mainProducts = products.map(getProductDetails);
  const complementaryProducts = getComplementaryProducts(mainProducts);

  const getProtocolRecipes = () => {
    if (type === 'people') {
      const goals = answers.wellness_goals || [];
      const recipes = [];

      if (goals.includes('Longevity Support') || answers.longevity_goals?.length > 0) {
        recipes.push({
          name: 'Complete Longevity Protocol',
          ingredients: ['2 drops Lemon oil', '1 drop Frankincense oil', 'Lifelong Vitality supplements', '1 TerraZyme capsule', '16 oz purified water'],
          instructions: ['Take Lifelong Vitality with breakfast', 'Add oils to water bottle', 'Take TerraZyme before meals', 'Drink oil water throughout day', 'Repeat daily for cellular longevity']
        });
      }

      if (goals.includes('Digestive Health')) {
        recipes.push({
          name: 'Digestive Wellness System',
          ingredients: ['2 drops DigestZen oil', '1 TerraZyme capsule', '1 PB Assist+ capsule', 'Warm water'],
          instructions: ['Take TerraZyme 15 minutes before eating', 'Add DigestZen to warm water after meals', 'Take PB Assist+ at bedtime', 'Continue for optimal gut health']
        });
      }

      return recipes;
    } else {
      return [{
        name: 'Safe Pet Comfort Protocol',
        ingredients: ['1 drop Lavender oil (diluted)', '2 oz distilled water', '1 tsp witch hazel', 'Spray bottle'],
        instructions: ['Mix ingredients in spray bottle', 'Shake well before each use', 'Spray on pet bedding only', 'Never apply directly to pet', 'Monitor pet response']
      }];
    }
  };

  const protocolRecipes = getProtocolRecipes();

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <Card className="bg-gradient-to-r from-purple-600 to-amber-600 text-white">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl">
            Your Comprehensive {type === 'people' ? 'Wellness' : 'Pet Care'} Protocol
          </CardTitle>
          <p className="text-lg opacity-90">
            Complete aromatherapy system with essential oils, supplements & complementary products
          </p>
        </CardHeader>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="w-5 h-5" />
              Primary Protocol Products
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {mainProducts.map((product, index) => (
              <div key={index} className="border rounded-lg p-4">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-medium">{product.name}</h4>
                  <Badge variant="outline" className="text-xs">
                    {product.type.replace('-', ' ')}
                  </Badge>
                </div>
                <p className="text-sm text-gray-600 mb-2">{product.description}</p>
                <div className="flex flex-wrap gap-1 mb-3">
                  {product.benefits.slice(0, 2).map((benefit, idx) => (
                    <Badge key={idx} variant="secondary" className="text-xs">
                      {benefit}
                    </Badge>
                  ))}
                  {product.internalUse && type === 'people' && (
                    <Badge variant="default" className="text-xs bg-green-600">
                      Internal Use Safe
                    </Badge>
                  )}
                </div>
                <Button 
                  size="sm" 
                  className="w-full" 
                  onClick={() => window.open(product.url, '_blank')}
                >
                  Shop {product.name} <ExternalLink className="w-3 h-3 ml-1" />
                </Button>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Plus className="w-5 h-5" />
              Complementary Products
            </CardTitle>
            <p className="text-sm text-gray-600">Enhance your protocol with these additional products</p>
          </CardHeader>
          <CardContent className="space-y-4">
            {complementaryProducts.map((product, index) => (
              <div key={index} className="border rounded-lg p-4 bg-amber-50">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-medium text-amber-800">{product.name}</h4>
                  <Badge variant="outline" className="text-xs border-amber-300">
                    {product.type.replace('-', ' ')}
                  </Badge>
                </div>
                <p className="text-sm text-amber-700 mb-2">{product.description}</p>
                <div className="flex flex-wrap gap-1 mb-3">
                  {product.benefits.slice(0, 2).map((benefit, idx) => (
                    <Badge key={idx} variant="secondary" className="text-xs bg-amber-200 text-amber-800">
                      {benefit}
                    </Badge>
                  ))}
                </div>
                <Button 
                  size="sm" 
                  variant="outline"
                  className="w-full border-amber-300 hover:bg-amber-100" 
                  onClick={() => window.open(product.url, '_blank')}
                >
                  Add to Protocol <ExternalLink className="w-3 h-3 ml-1" />
                </Button>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Droplets className="w-5 h-5" />
            Complete Protocol Recipes
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {protocolRecipes.map((recipe, index) => (
            <div key={index} className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg">
              <h4 className="font-semibold text-lg text-green-800 mb-3">{recipe.name}</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <span className="font-medium text-green-700 block mb-2">Complete System Includes:</span>
                  <ul className="list-disc list-inside space-y-1 text-sm text-green-600">
                    {recipe.ingredients.map((ing, idx) => (
                      <li key={idx}>{ing}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <span className="font-medium text-green-700 block mb-2">Protocol Instructions:</span>
                  <ol className="list-decimal list-inside space-y-1 text-sm text-green-600">
                    {recipe.instructions.map((inst, idx) => (
                      <li key={idx}>{inst}</li>
                    ))}
                  </ol>
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Heart className="w-5 h-5" />
              Safety Guidelines
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {safetyTips.map((tip, index) => (
                <li key={index} className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                  <span className="text-sm">{tip}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Leaf className="w-5 h-5" />
              Protocol Usage Guide
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {usageGuide.map((guide, index) => (
                <li key={index} className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                  <span className="text-sm">{guide}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>

      <Card className="text-center p-6 bg-gradient-to-r from-purple-50 to-amber-50">
        <h3 className="text-xl font-semibold mb-2">Ready to Begin Your Comprehensive Wellness Journey?</h3>
        <p className="text-gray-600 mb-4">
          Your personalized protocol combines essential oils with complementary wellness products for complete support
        </p>
        <div className="flex gap-3 justify-center">
          <Button variant="outline" onClick={onStartOver}>
            New Assessment
          </Button>
          <Button className="bg-gradient-to-r from-purple-600 to-amber-600 text-white">
            Explore More Protocols
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default RecommendationResults;