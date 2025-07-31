import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Clock, Sparkles, Gift } from 'lucide-react';

interface MonthlySpecialItem {
  id: string;
  name: string;
  category: string;
  percentOff: number;
  description: string;
  features: string[];
  validUntil: string;
  signupRequired?: boolean;
}

const MonthlySpecial: React.FC = () => {
  const currentMonth = new Date().toLocaleString('default', { month: 'long' });
  const currentYear = new Date().getFullYear();
  
  const monthlySpecials: MonthlySpecialItem[] = [
    {
      id: 'ms1',
      name: 'Essential Wellness Starter Kit',
      category: 'Starter Kits',
      percentOff: 25,
      description: 'Perfect introduction to essential oils with our most popular oils and diffuser',
      features: [
        'Lavender Essential Oil (15ml)',
        'Peppermint Essential Oil (15ml)', 
        'Wild Orange Essential Oil (15ml)',
        'Ultrasonic Diffuser',
        'Getting Started Guide'
      ],
      validUntil: `${currentMonth} 31, ${currentYear}`,
      signupRequired: true
    },
    {
      id: 'ms2',
      name: 'Immune Support Bundle',
      category: 'Wellness Bundles',
      percentOff: 30,
      description: 'Complete immune support with protective blend and supplements',
      features: [
        'Protective Blend (15ml)',
        'Protective Softgels (60 count)',
        'Vitamin C + Bioflavonoids',
        'Immune Support Guide'
      ],
      validUntil: `${currentMonth} 31, ${currentYear}`,
      signupRequired: true
    }
  ];

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-2 bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
          🎯 {currentMonth} Monthly Specials
        </h2>
        <p className="text-gray-600">Limited-time offers updated monthly - sign up to access!</p>
        <div className="flex items-center justify-center space-x-2 mt-2">
          <Clock className="h-4 w-4 text-red-500" />
          <span className="text-sm text-red-600 font-medium">
            Valid until {monthlySpecials[0]?.validUntil}
          </span>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {monthlySpecials.map((special) => (
          <Card key={special.id} className="h-full hover:shadow-lg transition-all duration-300 group relative border-2 border-red-200">
            <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-red-500 to-orange-500 text-white text-center py-2">
              <div className="flex items-center justify-center space-x-2">
                <Sparkles className="h-4 w-4" />
                <span className="font-bold text-sm">MONTHLY SPECIAL - {special.percentOff}% OFF!</span>
                <Sparkles className="h-4 w-4" />
              </div>
            </div>
            
            <CardHeader className="pt-16">
              <CardTitle className="text-xl">{special.name}</CardTitle>
              <Badge variant="outline" className="w-fit">{special.category}</Badge>
            </CardHeader>
            
            <CardContent className="space-y-4">
              <p className="text-gray-600">{special.description}</p>
              
              <div className="bg-gradient-to-r from-red-50 to-orange-50 p-4 rounded-lg border border-red-200">
                <div className="flex items-center justify-center mb-2">
                  <Badge variant="destructive" className="text-lg px-4 py-2">
                    <Gift className="h-4 w-4 mr-2" />
                    {special.percentOff}% OFF
                  </Badge>
                </div>
                {special.signupRequired && (
                  <div className="text-xs text-red-700 text-center">
                    *Requires membership signup to access special pricing
                  </div>
                )}
              </div>
              
              <div>
                <h4 className="font-medium text-sm mb-2">What's Included:</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  {special.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="flex items-center space-x-2 text-xs text-red-600">
                <Clock className="h-3 w-3" />
                <span>Offer expires {special.validUntil}</span>
              </div>
              
              <Button 
                className="w-full bg-gradient-to-r from-red-500 to-orange-500 text-white hover:opacity-90 text-lg py-3"
                onClick={() => window.open('https://www.doterra.com', '_blank')}
              >
                <ExternalLink className="h-5 w-5 mr-2" />
                Sign Up & Claim Special
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-6 rounded-lg border border-purple-200">
        <div className="text-center">
          <h3 className="text-lg font-bold text-purple-800 mb-2">
            📅 Monthly Specials Program
          </h3>
          <p className="text-purple-700 text-sm mb-4">
            New exclusive offers every month! Sign up for membership to access special pricing and never miss a deal.
          </p>
          <Button 
            variant="outline" 
            className="border-purple-500 text-purple-700 hover:bg-purple-50"
            onClick={() => window.open('https://www.doterra.com', '_blank')}
          >
            Join for Monthly Specials
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MonthlySpecial;