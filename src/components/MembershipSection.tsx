import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Crown, Star, Zap, CheckCircle, Sparkles, Users, Heart, Shield, Clock } from 'lucide-react';

interface MembershipSectionProps {
  onSelectPlan?: () => void;
}

const MembershipSection: React.FC<MembershipSectionProps> = ({ onSelectPlan }) => {
  const membershipTiers = [
    {
      name: 'Wellness Explorer',
      price: '$29.99/month',
      description: 'Perfect for getting started with your wellness journey',
      features: [
        'Unlimited wellness consultations',
        'Personal wellness concierge access',
        'Curated product recommendations',
        'Pet-safe oil guidance',
        'Basic wellness protocols',
        '24/7 support chat',
        'Monthly wellness tips'
      ],
      icon: Star,
      gradient: 'from-blue-400 to-blue-600',
      popular: false,
      available: true
    },
    {
      name: 'Wellness Pro',
      price: '$49.99/month',
      description: 'Complete wellness ecosystem with advanced concierge services',
      features: [
        'Everything in Explorer',
        'Advanced nutrition guidance',
        'Custom cleansing protocols',
        'Premium wellness tools access',
        'Priority concierge support',
        'Exclusive seasonal experiences',
        'Personalized wellness plans',
        'Monthly strategy sessions'
      ],
      icon: Crown,
      gradient: 'from-purple-500 to-pink-500',
      popular: true,
      available: false
    },
    {
      name: 'Wellness Elite',
      price: '$99.99/month',
      description: 'White-glove concierge service for serious wellness enthusiasts',
      features: [
        'Everything in Pro',
        'Dedicated wellness coach',
        'Advanced health analytics',
        'Custom resource creation',
        'Priority feature requests',
        'Weekly strategy calls',
        'Exclusive VIP community',
        'Direct line to wellness experts'
      ],
      icon: Sparkles,
      gradient: 'from-yellow-400 to-orange-500',
      popular: false,
      available: false
    }
  ];

  const benefits = [
    {
      title: 'Unlimited Access',
      description: 'Your personal wellness concierge available 24/7 with no usage limits',
      icon: Zap
    },
    {
      title: 'Expert Guidance',
      description: 'Professional wellness advice tailored to your unique needs',
      icon: Crown
    },
    {
      title: 'Always Current',
      description: 'Latest wellness trends and product updates included',
      icon: Star
    },
    {
      title: 'Community Support',
      description: 'Connect with like-minded wellness enthusiasts',
      icon: Users
    },
    {
      title: 'Personalized Care',
      description: 'Customized wellness plans designed just for you',
      icon: Heart
    },
    {
      title: 'Safe & Compliant',
      description: 'All recommendations follow safety guidelines and regulations',
      icon: Shield
    }
  ];

  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 rounded-lg p-8 text-white">
        <div className="flex items-center gap-3 mb-4">
          <Crown className="h-10 w-10" />
          <h1 className="text-4xl font-bold">Membership Plans</h1>
        </div>
        <p className="text-xl text-yellow-100 mb-2">Unlimited access to your personal wellness concierge</p>
        <p className="text-lg text-yellow-200">Get expert guidance, personalized recommendations, and 24/7 support for your wellness journey</p>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        {membershipTiers.map((tier, index) => {
          const Icon = tier.icon;
          return (
            <Card 
              key={index} 
              className={`relative overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 ${
                tier.popular ? 'ring-2 ring-purple-500 scale-105' : ''
              } ${!tier.available ? 'opacity-75' : ''}`}
            >
              {tier.popular && (
                <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-center py-2 text-sm font-medium z-10">
                  ⭐ Most Popular Choice
                </div>
              )}
              
              {!tier.available && (
                <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-gray-500 to-gray-600 text-white text-center py-2 text-sm font-medium z-10">
                  <Clock className="h-4 w-4 inline mr-2" />
                  Coming Soon!
                </div>
              )}
              
              <div className={`bg-gradient-to-r ${tier.gradient} p-8 text-white ${tier.popular || !tier.available ? 'mt-8' : ''}`}>
                <div className="flex items-center justify-center mb-4">
                  <Icon className="h-16 w-16" />
                </div>
                <h3 className="text-2xl font-bold mb-2 text-center">{tier.name}</h3>
                <p className="text-3xl font-bold mb-3 text-center">{tier.price}</p>
                <p className="text-sm opacity-90 text-center leading-relaxed">{tier.description}</p>
              </div>
              
              <CardContent className="p-8 space-y-6">
                <div className="space-y-4">
                  {tier.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm leading-relaxed">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Button 
                  className={`w-full ${tier.available 
                    ? `bg-gradient-to-r ${tier.gradient} hover:opacity-90 text-white` 
                    : 'bg-gray-400 text-gray-600 cursor-not-allowed'
                  } py-3 text-lg font-semibold`}
                  size="lg"
                  disabled={!tier.available}
                  onClick={() => {
                    if (tier.available && onSelectPlan) {
                      onSelectPlan();
                    }
                  }}
                >
                  {tier.available ? (
                    'Get Started'
                  ) : (
                    <>
                      <Clock className="h-5 w-5 mr-2" />
                      Coming Soon!
                    </>
                  )}
                </Button>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-8 shadow-lg">
        <h3 className="text-2xl font-bold mb-6 text-center text-gray-800">Why Choose Our Wellness Concierge?</h3>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div key={index} className="text-center space-y-3 p-4">
                <div className="mx-auto w-16 h-16 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full flex items-center justify-center">
                  <Icon className="h-8 w-8 text-purple-600" />
                </div>
                <h4 className="font-semibold text-lg text-gray-800">{benefit.title}</h4>
                <p className="text-sm text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
        <div className="text-center space-y-3">
          <h4 className="font-semibold text-yellow-800">Your Personal Wellness Concierge Includes:</h4>
          <div className="grid gap-2 md:grid-cols-2 text-sm text-yellow-700">
            <div>✓ Unlimited consultations and recommendations</div>
            <div>✓ 24/7 availability for wellness questions</div>
            <div>✓ Personalized wellness protocols</div>
            <div>✓ Safety guidelines and compliance automation</div>
          </div>
          <p className="text-xs text-yellow-600 mt-4">
            *These statements have not been evaluated by the FDA. Products not intended to diagnose, treat, cure, or prevent disease.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MembershipSection;