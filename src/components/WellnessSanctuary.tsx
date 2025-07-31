import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Badge } from './ui/badge';
import ProductCatalog from './ProductCatalog';
import CollectionsSection from './CollectionsSection';
import BlendsSection from './BlendsSection';
import PetSection from './PetSection';
import HomeSection from './HomeSection';
import { Sparkles, Home, Heart, Leaf } from 'lucide-react';

const WellnessSanctuary: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          🌿 iTERRA Wellness Sanctuary
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Your sacred space for holistic wellness, featuring doTERRA's complete collection of 
          Sacred Botanicals, essential oils, and wellness solutions for every aspect of your life.
        </p>
      </div>

      <Tabs defaultValue="products" className="w-full">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="products" className="flex items-center gap-2">
            <Sparkles className="h-4 w-4" />
            Sacred Botanicals
          </TabsTrigger>
          <TabsTrigger value="collections" className="flex items-center gap-2">
            <Leaf className="h-4 w-4" />
            Collections
          </TabsTrigger>
          <TabsTrigger value="blends" className="flex items-center gap-2">
            <Heart className="h-4 w-4" />
            Blends
          </TabsTrigger>
          <TabsTrigger value="home" className="flex items-center gap-2">
            <Home className="h-4 w-4" />
            Home & Living
          </TabsTrigger>
          <TabsTrigger value="pets" className="flex items-center gap-2">
            🐾
            Pet Wellness
          </TabsTrigger>
        </TabsList>

        <TabsContent value="products" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Sparkles className="h-5 w-5" />
                Complete Sacred Botanicals Collection
              </CardTitle>
              <Badge variant="outline">Powered by Empress Engine AI</Badge>
            </CardHeader>
            <CardContent>
              <ProductCatalog />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="collections" className="space-y-6">
          <CollectionsSection />
        </TabsContent>

        <TabsContent value="blends" className="space-y-6">
          <BlendsSection />
        </TabsContent>

        <TabsContent value="home" className="space-y-6">
          <HomeSection />
        </TabsContent>

        <TabsContent value="pets" className="space-y-6">
          <PetSection />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default WellnessSanctuary;
export { WellnessSanctuary };