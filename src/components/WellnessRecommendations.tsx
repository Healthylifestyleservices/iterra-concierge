import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Star, Droplets, Leaf, Zap, Heart, Shield, ExternalLink } from 'lucide-react';
import { realProductCatalog, RealProduct } from '@/data/realProductCatalog';

interface RecommendationProps {
  results: {
    gender: 'women' | 'men';
    age: string;
    weightGain: string;
    hormone: string;
    hair: string;
    skin: string;
    energy: string;
    behavior: string;
    longevity: string;
  };
  onBack: () => void;
}

interface Recommendation {
  title: string;
  description: string;
  products: RealProduct[];
  icon: any;
  priority: 'high' | 'medium';
  diyRecipe?: {
    name: string;
    ingredients: string[];
    instructions: string[];
  };
}

const WellnessRecommendations: React.FC<RecommendationProps> = ({ results, onBack }) => {
  const generateRecommendations = (): Recommendation[] => {
    const recommendations: Recommendation[] = [];
    const { gender, age, weightGain, hormone, hair, skin, energy, behavior, longevity } = results;

    // Longevity & Preventative Care (Always recommended for internal use)
    recommendations.push({
      title: 'Longevity Foundation Protocol',
      description: 'Essential oils for daily internal use supporting cellular health and longevity',
      products: [
        realProductCatalog.find(p => p.id === 'lemon-oil')!,
        realProductCatalog.find(p => p.id === 'frankincense-oil')!,
        realProductCatalog.find(p => p.id === 'lifelong-vitality')!
      ],
      icon: Shield,
      priority: 'high',
      diyRecipe: {
        name: 'Daily Longevity Tonic',
        ingredients: ['2 drops Lemon oil', '1 drop Frankincense oil', '16 oz purified water', '1 tsp raw honey'],
        instructions: ['Add oils to water bottle', 'Add honey and shake well', 'Drink throughout the day', 'Use daily for longevity support']
      }
    });

    // Behavior & Mood Support
    if (behavior === 'Frequent mood changes' || behavior === 'Occasional fluctuations' || behavior === 'Frequent distractions') {
      recommendations.push({
        title: 'Emotional Balance & Focus',
        description: 'Natural support for emotional wellness and mental clarity',
        products: [
          realProductCatalog.find(p => p.id === 'copaiba-oil')!,
          realProductCatalog.find(p => p.id === 'frankincense-oil')!
        ],
        icon: Heart,
        priority: 'high',
        diyRecipe: {
          name: 'Calm Focus Blend',
          ingredients: ['2 drops Copaiba oil', '1 drop Frankincense oil', '1 tsp coconut oil'],
          instructions: ['Mix oils with coconut oil', 'Apply to temples and wrists', 'Take 1 drop under tongue', 'Use morning and evening']
        }
      });
    }

    // Energy & Vitality
    if (energy === 'Low energy' || energy === 'Very low energy' || energy === 'Declining energy') {
      recommendations.push({
        title: 'Energy & Vitality Support',
        description: 'Natural energy enhancement for sustained vitality',
        products: [
          realProductCatalog.find(p => p.id === 'lemon-oil')!,
          realProductCatalog.find(p => p.id === 'digestzen')!
        ],
        icon: Zap,
        priority: 'high',
        diyRecipe: {
          name: 'Morning Energy Boost',
          ingredients: ['2 drops Lemon oil', '1 drop DigestZen', '8 oz warm water', '1 tsp apple cider vinegar'],
          instructions: ['Add oils to warm water', 'Stir in apple cider vinegar', 'Drink on empty stomach', 'Use every morning for energy']
        }
      });
    }

    // Immune & Preventative Care
    recommendations.push({
      title: 'Immune Longevity Protocol',
      description: 'Powerful immune support for long-term health and disease prevention',
      products: [
        realProductCatalog.find(p => p.id === 'oregano-oil')!,
        realProductCatalog.find(p => p.id === 'copaiba-oil')!
      ],
      icon: Shield,
      priority: 'medium',
      diyRecipe: {
        name: 'Immune Defense Capsules',
        ingredients: ['1 drop Oregano oil', '2 drops Copaiba oil', '4 drops coconut oil', 'Veggie capsules'],
        instructions: ['Mix oils with coconut oil', 'Fill capsule with mixture', 'Take with food twice daily', 'Use during seasonal challenges']
      }
    });

    return recommendations.sort((a, b) => a.priority === 'high' ? -1 : 1);
  };

  const recommendations = generateRecommendations();
  const { gender } = results;

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <Card className={`${gender === 'women' ? 'bg-gradient-to-r from-pink-500 to-purple-500' : 'bg-gradient-to-r from-blue-500 to-green-500'} text-white`}>
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">
            Your Personalized Longevity & Wellness Plan
          </CardTitle>
          <p className="opacity-90">
            Real products with working links • DIY recipes • Internal use for longevity
          </p>
        </CardHeader>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {recommendations.map((rec, index) => {
          const Icon = rec.icon;
          return (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg ${rec.priority === 'high' ? 'bg-red-100 text-red-600' : 'bg-blue-100 text-blue-600'}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">{rec.title}</CardTitle>
                    {rec.priority === 'high' && (
                      <Badge variant="destructive" className="text-xs">Priority</Badge>
                    )}
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">{rec.description}</p>
                
                {/* Products */}
                <div>
                  <h4 className="font-medium mb-3">Recommended Products:</h4>
                  <div className="space-y-3">
                    {rec.products.map((product, idx) => (
                      <div key={idx} className="border rounded-lg p-3">
                        <div className="flex justify-between items-start mb-2">
                          <h5 className="font-medium">{product.name}</h5>
                          <Badge variant="outline">{product.price}</Badge>
                        </div>
                        <p className="text-sm text-gray-600 mb-2">{product.description}</p>
                        <div className="flex flex-wrap gap-1 mb-2">
                          {product.benefits.slice(0, 2).map((benefit, bidx) => (
                            <Badge key={bidx} variant="secondary" className="text-xs">
                              {benefit}
                            </Badge>
                          ))}
                        </div>
                        <Button 
                          size="sm" 
                          className="w-full" 
                          onClick={() => window.open(product.url, '_blank')}
                        >
                          Shop Now <ExternalLink className="w-3 h-3 ml-1" />
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>

                {/* DIY Recipe */}
                {rec.diyRecipe && (
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-medium text-green-800 mb-2">DIY Recipe: {rec.diyRecipe.name}</h4>
                    <div className="text-sm space-y-2">
                      <div>
                        <span className="font-medium text-green-700">Ingredients:</span>
                        <ul className="list-disc list-inside ml-2 text-green-600">
                          {rec.diyRecipe.ingredients.map((ing, idx) => (
                            <li key={idx}>{ing}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <span className="font-medium text-green-700">Instructions:</span>
                        <ol className="list-decimal list-inside ml-2 text-green-600">
                          {rec.diyRecipe.instructions.map((inst, idx) => (
                            <li key={idx}>{inst}</li>
                          ))}
                        </ol>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="text-center space-y-4">
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-2">Ready to Start Your Longevity Journey?</h3>
          <p className="text-gray-600 mb-4">
            Get personalized guidance from a certified aromatherapist for your wellness goals
          </p>
          <div className="flex gap-3 justify-center">
            <Button variant="outline" onClick={onBack}>
              Retake Assessment
            </Button>
            <Button className={`${gender === 'women' ? 'bg-gradient-to-r from-pink-500 to-purple-500' : 'bg-gradient-to-r from-blue-500 to-green-500'} text-white`}>
              Book Consultation
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default WellnessRecommendations;