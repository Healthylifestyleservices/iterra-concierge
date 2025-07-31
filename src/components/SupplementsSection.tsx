import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Heart, Zap, Shield, Sparkles, Star, ExternalLink } from 'lucide-react';
import { supplementsData } from '@/data/supplementsData';

const SupplementCard: React.FC<{ supplement: typeof supplementsData[0] }> = ({ supplement }) => {
  const getCategoryIcon = (category: string) => {
    if (category.includes('Wellness')) return <Heart className="h-6 w-6 text-red-500" />;
    if (category.includes('Weight')) return <Zap className="h-6 w-6 text-orange-500" />;
    if (category.includes('Protection') || category.includes('Cellular')) return <Shield className="h-6 w-6 text-blue-500" />;
    if (category.includes('Digestive')) return <Sparkles className="h-6 w-6 text-green-500" />;
    return <Star className="h-6 w-6 text-purple-500" />;
  };

  return (
    <Card className="hover:shadow-xl transition-all duration-300 border-2 border-purple-200 hover:border-purple-400 h-full">
      <CardHeader>
        <div className="flex items-center gap-3 mb-2">
          {getCategoryIcon(supplement.category)}
          <Badge variant="secondary" className="text-xs">{supplement.category}</Badge>
        </div>
        <CardTitle className="text-xl">{supplement.name}</CardTitle>
        <p className="text-gray-600 text-sm">{supplement.description}</p>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-lg">
          <h4 className="font-semibold mb-2 text-purple-800">🌟 Health Impact</h4>
          <p className="text-sm text-gray-700 leading-relaxed">{supplement.healthImpact}</p>
        </div>
        
        <div>
          <h4 className="font-medium mb-2">Key Benefits:</h4>
          <ul className="text-sm text-gray-700 space-y-1">
            {supplement.keyBenefits.slice(0, 4).map((benefit, idx) => (
              <li key={idx}>• {benefit}</li>
            ))}
          </ul>
        </div>

        <div className="bg-yellow-50 p-3 rounded-lg">
          <h4 className="font-medium mb-2 text-yellow-800">💡 Amazing Facts:</h4>
          <ul className="text-xs text-gray-700 space-y-1">
            {supplement.amazingFacts.slice(0, 2).map((fact, idx) => (
              <li key={idx}>• {fact}</li>
            ))}
          </ul>
        </div>

        <div className="pt-2">
          <p className="text-xs text-gray-600 mb-3">
            <strong>Usage:</strong> {supplement.usage}
          </p>
          <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
            Learn More <ExternalLink className="h-4 w-4 ml-2" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

const SupplementsSection: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center gap-3">
          <Heart className="h-10 w-10 text-red-500" />
          <h1 className="text-5xl font-bold bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">
            Health & Vitality
          </h1>
          <Heart className="h-10 w-10 text-red-500" />
        </div>
        <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
          Transform your health with premium supplements and nutritional shakes. 
          Discover what your body can accomplish with the right foundation for wellness.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {supplementsData.map((supplement) => (
          <SupplementCard key={supplement.id} supplement={supplement} />
        ))}
      </div>

      <Card className="bg-gradient-to-r from-red-50 via-pink-50 to-red-50 border-2 border-red-200">
        <CardContent className="p-8 text-center">
          <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">
            🚀 What You Can Accomplish with Optimal Nutrition
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h4 className="font-semibold mb-3 text-lg text-red-600">💪 Peak Energy</h4>
              <p className="text-sm text-gray-600">
                Experience sustained energy throughout the day without crashes or fatigue
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h4 className="font-semibold mb-3 text-lg text-orange-600">🧠 Mental Clarity</h4>
              <p className="text-sm text-gray-600">
                Achieve laser focus, improved memory, and enhanced cognitive performance
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h4 className="font-semibold mb-3 text-lg text-green-600">🛡️ Immune Strength</h4>
              <p className="text-sm text-gray-600">
                Build robust immunity and resilience against environmental challenges
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h4 className="font-semibold mb-3 text-lg text-purple-600">⏰ Healthy Aging</h4>
              <p className="text-sm text-gray-600">
                Support cellular health and maintain vitality as you age gracefully
              </p>
            </div>
          </div>
          <div className="mt-8 p-6 bg-gradient-to-r from-yellow-100 to-orange-100 rounded-lg">
            <h4 className="text-2xl font-bold mb-4 text-orange-800">🌟 Transform Your Life Today!</h4>
            <p className="text-gray-700 leading-relaxed">
              Imagine waking up every morning with boundless energy, crystal-clear focus, and unshakeable confidence in your health. 
              With the right nutritional foundation, you can achieve optimal wellness, maintain your ideal weight, 
              and feel amazing in your own body. Your journey to extraordinary health starts with one simple decision.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SupplementsSection;