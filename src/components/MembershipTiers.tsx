import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Check, Crown, Star, Sparkles } from 'lucide-react';

interface TierBenefit {
  feature: string;
  retail: boolean;
  wellness: boolean;
  associate: boolean;
}

const MembershipTiers: React.FC = () => {
  const [selectedTier, setSelectedTier] = useState<string | null>(null);

  const benefits: TierBenefit[] = [
    { feature: 'Product Access', retail: true, wellness: true, associate: true },
    { feature: 'Retail Pricing', retail: true, wellness: false, associate: false },
    { feature: '25% Wholesale Pricing', retail: false, wellness: true, associate: true },
    { feature: 'Loyalty Rewards Program', retail: false, wellness: true, associate: true },
    { feature: 'Monthly Product Credits', retail: false, wellness: false, associate: true },
    { feature: 'Business Building Tools', retail: false, wellness: false, associate: true },
    { feature: 'Leadership Development', retail: false, wellness: false, associate: true },
    { feature: 'Global Shipping', retail: true, wellness: true, associate: true },
    { feature: 'Priority Customer Support', retail: false, wellness: true, associate: true },
    { feature: 'Exclusive Product Launches', retail: false, wellness: false, associate: true }
  ];

  const tiers = [
    {
      id: 'retail',
      name: 'Retail Customer',
      price: 'No Fee',
      icon: <Star className="h-6 w-6" />,
      color: 'from-blue-500 to-blue-600',
      description: 'Perfect for trying doTERRA products',
      features: ['Full product access', 'Retail pricing', 'Global shipping']
    },
    {
      id: 'wellness',
      name: 'Wellness Advocate',
      price: '$35/year',
      icon: <Sparkles className="h-6 w-6" />,
      color: 'from-green-500 to-green-600',
      description: 'Save 25% and earn rewards',
      features: ['25% wholesale pricing', 'Loyalty rewards', 'Priority support'],
      popular: true
    },
    {
      id: 'associate',
      name: 'Business Associate',
      price: '$35/year + Business Kit',
      icon: <Crown className="h-6 w-6" />,
      color: 'from-purple-500 to-purple-600',
      description: 'Build your wellness business',
      features: ['All Wellness benefits', 'Business tools', 'Leadership training']
    }
  ];

  const handleUpgrade = (tierId: string) => {
    setSelectedTier(tierId);
    // Here you would integrate with payment processing
    console.log(`Upgrading to ${tierId}`);
  };

  return (
    <div className="max-w-7xl mx-auto space-y-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
          Choose Your Wellness Journey
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          From trying products to building a business, find the perfect membership tier for your goals
        </p>
      </div>

      {/* Tier Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {tiers.map((tier) => (
          <Card 
            key={tier.id} 
            className={`relative overflow-hidden transition-all duration-300 hover:shadow-xl ${
              tier.popular ? 'ring-2 ring-purple-500 scale-105' : ''
            }`}
          >
            {tier.popular && (
              <div className="absolute top-0 right-0 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 text-sm font-semibold">
                Most Popular
              </div>
            )}
            
            <CardHeader className="text-center pb-4">
              <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${tier.color} flex items-center justify-center text-white`}>
                {tier.icon}
              </div>
              <CardTitle className="text-2xl font-bold">{tier.name}</CardTitle>
              <p className="text-3xl font-bold text-green-600 mt-2">{tier.price}</p>
              <p className="text-gray-600 mt-2">{tier.description}</p>
            </CardHeader>
            
            <CardContent className="space-y-4">
              <ul className="space-y-3">
                {tier.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button 
                onClick={() => handleUpgrade(tier.id)}
                className={`w-full mt-6 bg-gradient-to-r ${tier.color} hover:opacity-90 text-white`}
                size="lg"
              >
                {tier.id === 'retail' ? 'Shop Now' : `Upgrade to ${tier.name}`}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Detailed Comparison Table */}
      <Card>
        <CardHeader>
          <CardTitle className="text-center text-2xl">Detailed Comparison</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4 font-semibold">Features</th>
                  <th className="text-center py-3 px-4 font-semibold">Retail</th>
                  <th className="text-center py-3 px-4 font-semibold">Wellness</th>
                  <th className="text-center py-3 px-4 font-semibold">Associate</th>
                </tr>
              </thead>
              <tbody>
                {benefits.map((benefit, index) => (
                  <tr key={index} className="border-b hover:bg-gray-50">
                    <td className="py-3 px-4">{benefit.feature}</td>
                    <td className="text-center py-3 px-4">
                      {benefit.retail ? (
                        <Check className="h-5 w-5 text-green-500 mx-auto" />
                      ) : (
                        <span className="text-gray-400">—</span>
                      )}
                    </td>
                    <td className="text-center py-3 px-4">
                      {benefit.wellness ? (
                        <Check className="h-5 w-5 text-green-500 mx-auto" />
                      ) : (
                        <span className="text-gray-400">—</span>
                      )}
                    </td>
                    <td className="text-center py-3 px-4">
                      {benefit.associate ? (
                        <Check className="h-5 w-5 text-green-500 mx-auto" />
                      ) : (
                        <span className="text-gray-400">—</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Upgrade Path */}
      <Card className="bg-gradient-to-r from-purple-50 to-pink-50">
        <CardContent className="p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Upgrade Your Wellness Journey?</h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Join thousands of satisfied customers who have transformed their wellness routine with doTERRA products and community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => handleUpgrade('wellness')}
              className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-3"
            >
              Start with Wellness Advocate
            </Button>
            <Button 
              onClick={() => handleUpgrade('associate')}
              className="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white px-8 py-3"
            >
              Build Your Business
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default MembershipTiers;