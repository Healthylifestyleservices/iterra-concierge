import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Home, Sparkles, Droplets, Wind } from 'lucide-react';

const HomeSection: React.FC = () => {
  const homeCategories = [
    {
      id: 'cleaning',
      name: 'Natural Cleaning',
      icon: <Sparkles className="h-5 w-5" />,
      products: [
        {
          name: 'On Guard Cleaner Concentrate',
          description: 'Natural, effective cleaning for every surface',
          benefits: ['Non-toxic', 'Plant-based', 'Concentrated formula'],
          price: '$18.67'
        },
        {
          name: 'Abode Multi-Surface Cleaner',
          description: 'Gentle yet powerful all-purpose cleaner',
          benefits: ['Safe for families', 'Effective cleaning', 'Pleasant scent'],
          price: '$12.33'
        }
      ]
    },
    {
      id: 'diffusion',
      name: 'Diffusion & Ambiance',
      icon: <Wind className="h-5 w-5" />,
      products: [
        {
          name: 'Petal 2.0 Diffuser',
          description: 'Elegant ultrasonic diffuser for any room',
          benefits: ['Whisper quiet', 'LED lighting', 'Timer settings'],
          price: '$83.33'
        },
        {
          name: 'Laluz Diffuser',
          description: 'Handcrafted ceramic diffuser with warm lighting',
          benefits: ['Artisan crafted', 'Warm ambiance', 'Premium design'],
          price: '$200.00'
        }
      ]
    },
    {
      id: 'laundry',
      name: 'Laundry Care',
      icon: <Droplets className="h-5 w-5" />,
      products: [
        {
          name: 'doTERRA Laundry Detergent',
          description: 'Plant-based formula with essential oils',
          benefits: ['Concentrated', 'Biodegradable', 'Natural freshness'],
          price: '$16.67'
        },
        {
          name: 'Wool Dryer Balls',
          description: 'Natural fabric softener alternative',
          benefits: ['Reduces drying time', 'Chemical-free', 'Reusable'],
          price: '$24.00'
        }
      ]
    }
  ];

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
          🏠 Home & Living Wellness
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Transform your home into a natural sanctuary with doTERRA's home care essentials
        </p>
      </div>

      <Tabs defaultValue="cleaning" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          {homeCategories.map((category) => (
            <TabsTrigger key={category.id} value={category.id} className="flex items-center gap-2">
              {category.icon}
              {category.name}
            </TabsTrigger>
          ))}
        </TabsList>

        {homeCategories.map((category) => (
          <TabsContent key={category.id} value={category.id} className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  {category.icon}
                  {category.name}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {category.products.map((product, index) => (
                    <Card key={index} className="border-2 hover:border-blue-200 transition-colors">
                      <CardHeader>
                        <CardTitle className="text-lg">{product.name}</CardTitle>
                        <Badge variant="secondary">{product.price}</Badge>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600 mb-4">{product.description}</p>
                        <div className="space-y-2">
                          <h4 className="font-semibold text-sm">Key Benefits:</h4>
                          <ul className="text-sm space-y-1">
                            {product.benefits.map((benefit, bIndex) => (
                              <li key={bIndex} className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                                {benefit}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <Button className="w-full mt-4" variant="outline">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Learn More
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>

      <Card className="bg-gradient-to-r from-green-50 to-blue-50">
        <CardContent className="p-6">
          <div className="text-center">
            <Home className="h-12 w-12 mx-auto mb-4 text-green-600" />
            <h3 className="text-xl font-semibold mb-2">Create Your Natural Home</h3>
            <p className="text-gray-600 mb-4">
              Discover how doTERRA's home care products can help you maintain a clean, 
              healthy, and naturally fresh living environment for your family.
            </p>
            <Button className="bg-green-600 hover:bg-green-700">
              <ExternalLink className="h-4 w-4 mr-2" />
              Shop Home Care Collection
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default HomeSection;