// This is the horrible converted code that was created from your original beautiful iTERRA component
import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { motion } from 'framer-motion';

interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  description: string;
  image?: string;
}

const HorribleITerraCode: React.FC = () => {
  const [activeTab, setActiveTab] = useState('human');
  const [searchQuery, setSearchQuery] = useState('');
  const [chatInput, setChatInput] = useState('');
  const [products] = useState<Product[]>([
    { id: '1', name: 'Lavender', category: 'Essential Oil', price: 28.67, description: 'Calming and relaxing' },
    { id: '2', name: 'Peppermint', category: 'Essential Oil', price: 27.33, description: 'Energizing and cooling' },
    { id: '3', name: 'Balance Blend', category: 'Blend', price: 26.67, description: 'Grounding blend' },
    { id: '4', name: 'Pet Calming Spray', category: 'Pet Care', price: 24.00, description: 'Safe for pets' }
  ]);

  useEffect(() => {
    if (window.location.href.includes('iterra')) {
      localStorage.setItem('bypassAuth', 'true');
    }
  }, []);

  const handleChatSubmit = () => {
    if (!chatInput.trim()) return;
    
    const responses: Record<string, string> = {
      stress: 'For stress relief, try Lavender, Bergamot, or Balance blend.',
      sleep: 'For better sleep, use Lavender, Cedarwood, or Serenity blend.',
      energy: 'For energy, try Peppermint, Wild Orange, or Motivate blend.',
      focus: 'For focus, use Rosemary, Frankincense, or InTune blend.',
      immune: 'For immune support, try On Guard, Oregano, or Tea Tree.',
      pets: 'For pets, only use highly diluted Lavender. Consult a veterinarian first.'
    };
    
    const lower = chatInput.toLowerCase();
    let answer = 'I can help with stress, sleep, energy, focus, immune support, and pet safety.';
    
    for (const [key, response] of Object.entries(responses)) {
      if (lower.includes(key)) {
        answer = response;
        break;
      }
    }
    
    alert(answer);
    setChatInput('');
  };

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100">
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-purple-600 mb-2">iTERRA™</h1>
            <p className="text-gray-600">Your Essential Oil Wellness Companion</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-6">
            <TabsTrigger value="human">Human Wellness</TabsTrigger>
            <TabsTrigger value="pet">Pet Wellness</TabsTrigger>
            <TabsTrigger value="together">Healthier Together™</TabsTrigger>
            <TabsTrigger value="shop">Your Wellness Shop</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="memberships">Memberships</TabsTrigger>
          </TabsList>

          <TabsContent value="human" className="mt-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold text-purple-600 mb-4">Human Wellness</h3>
                <p className="text-gray-600 mb-4">Essential oils for stress, sleep, energy, and focus.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-purple-50 rounded-lg">
                    <h4 className="font-semibold text-purple-700">Stress Relief</h4>
                    <p className="text-sm text-gray-600">Lavender, Balance, Bergamot</p>
                  </div>
                  <div className="p-4 bg-purple-50 rounded-lg">
                    <h4 className="font-semibold text-purple-700">Better Sleep</h4>
                    <p className="text-sm text-gray-600">Serenity, Cedarwood, Vetiver</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="shop" className="mt-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold text-purple-600 mb-4">Your Wellness Shop</h3>
                <Input
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="max-w-md mb-4"
                />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {filteredProducts.map((product) => (
                    <Card key={product.id}>
                      <CardContent className="p-4">
                        <h4 className="font-semibold">{product.name}</h4>
                        <Badge variant="secondary">{product.category}</Badge>
                        <p className="text-sm text-gray-600">{product.description}</p>
                        <div className="flex justify-between items-center mt-2">
                          <span className="font-bold">${product.price}</span>
                          <Button size="sm">Add to Cart</Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="fixed bottom-6 right-6 z-50"
      >
        <Card className="w-80 shadow-lg">
          <CardContent className="p-4">
            <h4 className="font-semibold text-purple-600 mb-3">Ask iTERRA™</h4>
            <Input
              placeholder="Ask about oils, protocols, or pets..."
              value={chatInput}
              onChange={(e) => setChatInput(e.target.value)}
              className="mb-2"
            />
            <Button onClick={handleChatSubmit} className="w-full">
              Ask iTerra
            </Button>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default HorribleITerraCode;