import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Heart, Zap, Shield, Sparkles, ExternalLink, Star, ChevronDown, ChevronUp } from 'lucide-react';
import { healthVitalityData } from '@/data/healthVitalityData';
import { comprehensiveWellnessOfferings, wellnessResources } from '@/data/comprehensiveWellnessOfferings';

const HealthProductCard: React.FC<{ product: any }> = ({ product }) => {
  const getIcon = (category: string) => {
    switch(category) {
      case 'Daily Nutrition': return <Heart className="h-8 w-8 text-red-500" />;
      case 'Digestive Health': return <Zap className="h-8 w-8 text-orange-500" />;
      case 'Natural Wellness': return <Shield className="h-8 w-8 text-green-500" />;
      case 'Weight Management': return <Star className="h-8 w-8 text-blue-500" />;
      default: return <Sparkles className="h-8 w-8 text-purple-500" />;
    }
  };

  return (
    <Card className="hover:shadow-xl transition-all duration-300 border-2 border-green-200 hover:border-green-400">
      <CardHeader className="text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          {getIcon(product.category)}
        </div>
        <CardTitle className="text-xl">{product.name}</CardTitle>
        <Badge variant="secondary" className="bg-green-100 text-green-800">{product.category}</Badge>
        <p className="text-gray-600 text-sm">{product.description}</p>
        <div className="mt-3 space-y-1">
          <p className="text-sm font-medium text-green-600">🧘 Chakra: {product.chakra}</p>
          <p className="text-xs text-gray-500">🎵 Frequency: {product.frequency}</p>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <h4 className="font-medium mb-2 text-green-700">Health Benefits:</h4>
          <ul className="text-sm text-gray-700 space-y-1">
            {product.benefits.map((benefit: string, idx: number) => (
              <li key={idx} className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                {benefit}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-medium mb-2 text-purple-700">🌟 Amazing Facts:</h4>
          <ul className="text-sm text-gray-700 space-y-1">
            {product.amazingFacts.map((fact: string, idx: number) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-yellow-500 mt-0.5">⭐</span>
                <span>{fact}</span>
              </li>
            ))}
          </ul>
        </div>
        <Button 
          className="w-full bg-green-600 hover:bg-green-700" 
          onClick={() => window.open(product.url, '_blank')}
        >
          Learn More <ExternalLink className="h-4 w-4 ml-2" />
        </Button>
      </CardContent>
    </Card>
  );
};

const WellnessCategoryCard: React.FC<{ category: any; categoryKey: string }> = ({ category, categoryKey }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Card className="hover:shadow-lg transition-all duration-300 border border-blue-200 hover:border-blue-400">
      <CardHeader 
        className="cursor-pointer" 
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-3xl">{category.emoji}</span>
            <CardTitle className="text-lg">{category.title}</CardTitle>
          </div>
          {isExpanded ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
        </div>
      </CardHeader>
      {isExpanded && (
        <CardContent className="space-y-4">
          <ul className="space-y-2">
            {category.products.map((product: string, idx: number) => (
              <li key={idx} className="flex items-start gap-2 text-sm">
                <span className="text-blue-500 mt-1">•</span>
                <span>{product}</span>
              </li>
            ))}
          </ul>
          <div className="flex gap-2">
            <Button 
              size="sm" 
              className="bg-blue-600 hover:bg-blue-700"
              onClick={() => window.open(category.shopLink, '_blank')}
            >
              Shop {category.title} <ExternalLink className="h-3 w-3 ml-1" />
            </Button>
            <Button 
              size="sm" 
              variant="outline"
              onClick={() => window.open(category.recipesLink, '_blank')}
            >
              Recipes <ExternalLink className="h-3 w-3 ml-1" />
            </Button>
          </div>
        </CardContent>
      )}
    </Card>
  );
};

const HealthVitalitySection: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center gap-3">
          <Heart className="h-10 w-10 text-red-500" />
          <h1 className="text-5xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
            Health & Vitality
          </h1>
          <Zap className="h-10 w-10 text-yellow-500" />
        </div>
        <p className="text-xl text-gray-600 max-w-4xl mx-auto">
          Transform your health with premium supplements, shakes, and wellness products. Discover what your body can accomplish with proper nutrition and natural support.
        </p>
      </div>

      {/* Comprehensive Wellness Offerings */}
      <div className="space-y-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            🌟 Holistic Health & Vitality Offerings
          </h2>
          <p className="text-lg text-gray-600 mb-6">2025 Wellness Goals | Product Categories & Trusted Recipe Resources</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {Object.entries(comprehensiveWellnessOfferings).map(([key, category]) => (
            <WellnessCategoryCard key={key} category={category} categoryKey={key} />
          ))}
        </div>

        {/* Resource Links */}
        <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-blue-200">
          <CardContent className="p-6 text-center">
            <h3 className="text-2xl font-bold mb-4">🛒 Complete Wellness Resources</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                className="bg-blue-600 hover:bg-blue-700"
                onClick={() => window.open(wellnessResources.shopAll, '_blank')}
              >
                Shop All Products <ExternalLink className="h-4 w-4 ml-2" />
              </Button>
              <Button 
                variant="outline"
                onClick={() => window.open(wellnessResources.allRecipes, '_blank')}
              >
                All Recipes <ExternalLink className="h-4 w-4 ml-2" />
              </Button>
              <Button 
                variant="outline"
                onClick={() => window.open(wellnessResources.diyIdeas, '_blank')}
              >
                DIY Ideas <ExternalLink className="h-4 w-4 ml-2" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Original Health Products */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {healthVitalityData.map((product) => (
          <HealthProductCard key={product.id} product={product} />
        ))}
      </div>

      <Card className="bg-gradient-to-r from-green-50 to-blue-50 border-2 border-green-200">
        <CardContent className="p-8 text-center">
          <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
            🚀 What You Can Accomplish
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="space-y-3">
              <div className="text-4xl">💪</div>
              <h4 className="font-semibold">Boundless Energy</h4>
              <p className="text-sm text-gray-600">Experience sustained energy that lasts all day without crashes</p>
            </div>
            <div className="space-y-3">
              <div className="text-4xl">🧠</div>
              <h4 className="font-semibold">Mental Clarity</h4>
              <p className="text-sm text-gray-600">Enhance focus, memory, and cognitive performance naturally</p>
            </div>
            <div className="space-y-3">
              <div className="text-4xl">🛡️</div>
              <h4 className="font-semibold">Immune Strength</h4>
              <p className="text-sm text-gray-600">Build unshakeable immunity and resilience against illness</p>
            </div>
            <div className="space-y-3">
              <div className="text-4xl">✨</div>
              <h4 className="font-semibold">Cellular Renewal</h4>
              <p className="text-sm text-gray-600">Support healthy aging and cellular regeneration from within</p>
            </div>
          </div>
          <div className="mt-8 p-6 bg-white rounded-lg shadow-lg">
            <h4 className="text-2xl font-bold mb-4 text-green-700">🌟 Imagine Your Transformation</h4>
            <p className="text-gray-700 leading-relaxed">
              "Wake up energized, think clearly all day, maintain your ideal weight effortlessly, and feel 10 years younger. 
              With our scientifically-formulated supplements, thousands have already transformed their health. 
              Your body has incredible healing potential - we just provide the premium nutrition to unlock it!"
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default HealthVitalitySection;