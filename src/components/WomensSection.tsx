import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Heart, Flower, Star, Zap, Sparkles, ArrowRight, Moon, Smile } from 'lucide-react';
import WellnessQuestionnaire from './WellnessQuestionnaire';
import WellnessRecommendations from './WellnessRecommendations';
import DIYCard from './DIYCard';

type ViewState = 'overview' | 'questionnaire' | 'recommendations';

const WomensSection: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>('overview');
  const [expandedRecipe, setExpandedRecipe] = useState<number | null>(null);
  const [questionnaireResults, setQuestionnaireResults] = useState<any>(null);

  const womensWellness = [
    {
      id: 1,
      title: "Hormonal Balance Support",
      description: "Natural support for women's hormonal wellness throughout life stages",
      oils: ['Clary Sage', 'Geranium', 'Lavender'],
      icon: Flower,
      gradient: 'from-pink-400 to-purple-400',
      diyRecipe: {
        title: 'Goddess Balance Blend',
        ingredients: ['3 drops Clary Sage oil', '2 drops Geranium oil', '2 drops Lavender oil', '10ml Fractionated Coconut oil'],
        instructions: 'Mix oils in roller bottle. Apply to ankles and wrists twice daily.',
        time: '3 minutes',
        serves: '20 applications',
        difficulty: 'Easy' as const,
        estimatedCost: 'View Pricing',
        upsellProducts: ['Clary Sage Oil 15ml', 'Geranium Oil 15ml', 'Women\'s Wellness Kit']
      }
    },
    {
      id: 2,
      title: "Beauty & Radiance",
      description: "Luxurious beauty rituals for glowing skin and self-care",
      oils: ['Rose', 'Ylang Ylang', 'Frankincense'],
      icon: Star,
      gradient: 'from-rose-400 to-pink-500',
      diyRecipe: {
        title: 'Royal Beauty Elixir',
        ingredients: ['1 drop Rose oil', '2 drops Ylang Ylang oil', '2 drops Frankincense oil', '1 tbsp Jojoba oil'],
        instructions: 'Blend oils, apply to face and neck before bed.',
        time: '5 minutes',
        serves: '15 applications',
        difficulty: 'Intermediate' as const,
        estimatedCost: 'View Pricing',
        upsellProducts: ['Rose Oil 5ml', 'Ylang Ylang Oil 15ml', 'Beauty Serum']
      }
    },
    {
      id: 3,
      title: "Energy & Vitality",
      description: "Natural energy support for busy women and mothers",
      oils: ['Peppermint', 'Wild Orange', 'Rosemary'],
      icon: Zap,
      gradient: 'from-orange-400 to-yellow-400',
      diyRecipe: {
        title: 'Mama Energy Boost',
        ingredients: ['3 drops Peppermint oil', '3 drops Wild Orange oil', '2 drops Rosemary oil', 'Diffuser'],
        instructions: 'Diffuse blend for 30 minutes in morning.',
        time: '2 minutes',
        serves: '30 uses',
        difficulty: 'Easy' as const,
        estimatedCost: 'View Pricing',
        upsellProducts: ['Peppermint Oil 15ml', 'Wild Orange Oil 15ml', 'Energy Complex']
      }
    },
    {
      id: 4,
      title: "Stress Relief & Calm",
      description: "Peaceful blends for relaxation and emotional balance",
      oils: ['Bergamot', 'Roman Chamomile', 'Vetiver'],
      icon: Heart,
      gradient: 'from-blue-400 to-indigo-400',
      diyRecipe: {
        title: 'Serenity Sanctuary Blend',
        ingredients: ['3 drops Bergamot oil', '2 drops Roman Chamomile oil', '1 drop Vetiver oil', 'Diffuser'],
        instructions: 'Diffuse during evening routine or stressful moments.',
        time: '2 minutes',
        serves: '25 uses',
        difficulty: 'Easy' as const,
        estimatedCost: 'View Pricing',
        upsellProducts: ['Bergamot Oil 15ml', 'Roman Chamomile Oil 5ml', 'Calm Kit']
      }
    },
    {
      id: 5,
      title: "Sleep & Restoration",
      description: "Gentle blends to promote restful sleep and recovery",
      oils: ['Lavender', 'Cedarwood', 'Marjoram'],
      icon: Moon,
      gradient: 'from-purple-400 to-indigo-500',
      diyRecipe: {
        title: 'Dreamy Night Ritual',
        ingredients: ['4 drops Lavender oil', '2 drops Cedarwood oil', '1 drop Marjoram oil', '10ml carrier oil'],
        instructions: 'Apply to temples and feet before bedtime.',
        time: '3 minutes',
        serves: '20 applications',
        difficulty: 'Easy' as const,
        estimatedCost: 'View Pricing',
        upsellProducts: ['Lavender Oil 15ml', 'Cedarwood Oil 15ml', 'Sleep Kit']
      }
    },
    {
      id: 6,
      title: "Confidence & Joy",
      description: "Uplifting blends to boost mood and self-confidence",
      oils: ['Grapefruit', 'Jasmine', 'Lemon'],
      icon: Smile,
      gradient: 'from-yellow-400 to-orange-400',
      diyRecipe: {
        title: 'Sunshine Confidence Spray',
        ingredients: ['4 drops Grapefruit oil', '2 drops Jasmine oil', '3 drops Lemon oil', '30ml water', 'Spray bottle'],
        instructions: 'Mix in spray bottle, shake well, mist around space.',
        time: '5 minutes',
        serves: '40 sprays',
        difficulty: 'Easy' as const,
        estimatedCost: 'View Pricing',
        upsellProducts: ['Grapefruit Oil 15ml', 'Jasmine Oil 5ml', 'Mood Kit']
      }
    }
  ];

  const handleQuestionnaireComplete = (results: any) => {
    setQuestionnaireResults(results);
    setCurrentView('recommendations');
  };

  const handleBackToOverview = () => {
    setCurrentView('overview');
    setQuestionnaireResults(null);
  };

  if (currentView === 'questionnaire') {
    return (
      <WellnessQuestionnaire
        gender="women"
        onComplete={handleQuestionnaireComplete}
        onBack={handleBackToOverview}
      />
    );
  }

  if (currentView === 'recommendations' && questionnaireResults) {
    return (
      <WellnessRecommendations
        results={questionnaireResults}
        onBack={handleBackToOverview}
      />
    );
  }

  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg p-6 text-white">
        <h2 className="text-3xl font-bold mb-2">Women's Wellness Collection</h2>
        <p className="text-pink-100 mb-4">Specialized wellness solutions designed for women's unique needs</p>
        <Button 
          onClick={() => setCurrentView('questionnaire')}
          className="bg-white text-pink-600 hover:bg-pink-50 font-semibold"
        >
          Take Wellness Assessment <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {womensWellness.map((item) => {
          const Icon = item.icon;
          const isExpanded = expandedRecipe === item.id;
          return (
            <div key={item.id} className="space-y-4">
              <Card className="hover:shadow-xl transition-all duration-300">
                <div className={`bg-gradient-to-r ${item.gradient} p-4 text-white`}>
                  <Icon className="h-8 w-8 mb-2" />
                  <h3 className="text-xl font-bold">{item.title}</h3>
                </div>
                <CardContent className="p-4 space-y-4">
                  <p className="text-gray-600">{item.description}</p>
                  <div>
                    <h4 className="font-medium mb-2">Featured Oils:</h4>
                    <div className="flex flex-wrap gap-1">
                      {item.oils.map((oil, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {oil}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <Button 
                    className={`w-full bg-gradient-to-r ${item.gradient} hover:opacity-90`}
                    onClick={() => setExpandedRecipe(isExpanded ? null : item.id)}
                  >
                    {isExpanded ? 'Hide' : 'View'} DIY Recipe
                  </Button>
                </CardContent>
              </Card>
              
              {isExpanded && (
                <DIYCard
                  title={item.diyRecipe.title}
                  ingredients={item.diyRecipe.ingredients}
                  instructions={item.diyRecipe.instructions}
                  time={item.diyRecipe.time}
                  serves={item.diyRecipe.serves}
                  history="Ancient wisdom meets modern wellness"
                  benefits={['Natural ingredients', 'Time-tested', 'Women-focused']}
                  category="womens"
                  difficulty={item.diyRecipe.difficulty}
                  estimatedCost={item.diyRecipe.estimatedCost}
                  upsellProducts={item.diyRecipe.upsellProducts}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export { WomensSection };
export default WomensSection;