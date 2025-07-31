import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Heart, Droplets, Sparkles, BookOpen, ShoppingCart } from 'lucide-react';

interface ProtocolItem {
  id: string;
  name: string;
  type: 'oil' | 'blend' | 'supplement';
  chakra?: string;
  emotion?: string;
  petSafe: boolean;
  application: string;
  benefits: string[];
  diyRecipe?: string;
  price: number;
}

const ProtocolGenerator: React.FC = () => {
  const [protocol, setProtocol] = useState<ProtocolItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedTab, setSelectedTab] = useState('protocol');

  useEffect(() => {
    // Simulate protocol generation based on intake data
    setTimeout(() => {
      const mockProtocol: ProtocolItem[] = [
        {
          id: '1',
          name: 'Serenity Blend',
          type: 'blend',
          chakra: 'Heart',
          emotion: 'Peaceful',
          petSafe: true,
          application: 'Diffuse 3-4 drops in evening or apply to pulse points',
          benefits: ['Promotes relaxation', 'Supports restful sleep', 'Calms nervous system'],
          diyRecipe: 'Mix 2 drops Lavender + 1 drop Bergamot + 1 drop Ylang Ylang',
          price: 42.67
        },
        {
          id: '2',
          name: 'Frankincense',
          type: 'oil',
          chakra: 'Crown',
          emotion: 'Grounded',
          petSafe: true,
          application: 'Apply to temples and third eye, or diffuse during meditation',
          benefits: ['Enhances spiritual connection', 'Supports cellular health', 'Promotes focus'],
          diyRecipe: 'Meditation blend: 3 drops Frankincense + 2 drops Sandalwood',
          price: 89.33
        },
        {
          id: '3',
          name: 'Lifelong Vitality Pack',
          type: 'supplement',
          petSafe: false,
          application: 'Take with meals as directed',
          benefits: ['Supports overall wellness', 'Provides essential nutrients', 'Promotes energy'],
          price: 89.33
        }
      ];
      setProtocol(mockProtocol);
      setLoading(false);
    }, 2000);
  }, []);

  const totalPrice = protocol.reduce((sum, item) => sum + item.price, 0);

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto text-center py-12">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto mb-4"></div>
        <h2 className="text-xl font-semibold mb-2">Generating Your Personalized Protocol</h2>
        <p className="text-gray-600">Analyzing your intake responses and matching with optimal wellness solutions...</p>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
          Your Personalized Wellness Protocol
        </h1>
        <p className="text-gray-600">Curated specifically for your unique wellness journey</p>
      </div>

      <Tabs value={selectedTab} onValueChange={setSelectedTab} className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="protocol">Protocol</TabsTrigger>
          <TabsTrigger value="diy">DIY Recipes</TabsTrigger>
          <TabsTrigger value="education">Education</TabsTrigger>
          <TabsTrigger value="upsells">Complementary</TabsTrigger>
        </TabsList>

        <TabsContent value="protocol" className="space-y-4">
          <div className="grid gap-4">
            {protocol.map((item) => (
              <Card key={item.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="flex items-center gap-2">
                        <Droplets className="h-5 w-5 text-blue-500" />
                        {item.name}
                        {item.petSafe && <Badge variant="secondary">Pet Safe</Badge>}
                      </CardTitle>
                      <div className="flex gap-2 mt-2">
                        {item.chakra && (
                          <Badge variant="outline">{item.chakra} Chakra</Badge>
                        )}
                        {item.emotion && (
                          <Badge variant="outline">{item.emotion}</Badge>
                        )}
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-green-600">${item.price}</p>
                      <Button size="sm" className="mt-2">
                        <ShoppingCart className="h-4 w-4 mr-1" />
                        Add to Cart
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold text-sm text-gray-700 mb-1">Application:</h4>
                      <p className="text-sm">{item.application}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm text-gray-700 mb-1">Benefits:</h4>
                      <ul className="text-sm space-y-1">
                        {item.benefits.map((benefit, index) => (
                          <li key={index} className="flex items-center gap-2">
                            <Heart className="h-3 w-3 text-pink-500" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-gradient-to-r from-purple-50 to-pink-50">
            <CardContent className="p-6">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-xl font-bold">Complete Protocol</h3>
                  <p className="text-gray-600">Total investment in your wellness journey</p>
                </div>
                <div className="text-right">
                  <p className="text-3xl font-bold text-purple-600">${totalPrice.toFixed(2)}</p>
                  <Button className="mt-2 bg-gradient-to-r from-purple-600 to-pink-600">
                    Order Complete Protocol
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="diy" className="space-y-4">
          {protocol.filter(item => item.diyRecipe).map((item) => (
            <Card key={item.id}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-yellow-500" />
                  DIY {item.name} Alternative
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm bg-gray-50 p-3 rounded-lg">{item.diyRecipe}</p>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="education">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-blue-500" />
                Educational Resources
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">Learn more about your recommended oils and wellness practices:</p>
              <div className="space-y-2">
                <Button variant="outline" className="w-full justify-start">
                  📚 Essential Oil Safety Guide
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  🧘 Chakra Balancing with Oils
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  🐾 Pet-Safe Aromatherapy
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="upsells">
          <Card>
            <CardHeader>
              <CardTitle>Complementary Products</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">Enhance your wellness journey with these additional products:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 border rounded-lg">
                  <h4 className="font-semibold">Petal Diffuser</h4>
                  <p className="text-sm text-gray-600 mb-2">Perfect for your essential oil protocols</p>
                  <p className="text-lg font-bold text-green-600">$89.33</p>
                </div>
                <div className="p-4 border rounded-lg">
                  <h4 className="font-semibold">Fractionated Coconut Oil</h4>
                  <p className="text-sm text-gray-600 mb-2">Ideal carrier oil for topical application</p>
                  <p className="text-lg font-bold text-green-600">$16.00</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ProtocolGenerator;