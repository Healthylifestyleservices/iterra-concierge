import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter, Star, ShoppingBag } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

// Sample data for offerings
const SAMPLE_OFFERINGS = {
  collections: [
    { id: 1, name: 'Emotional Wellness Collection', price: '$89.99', category: 'Wellness', image: '🌸', rating: 4.9 },
    { id: 2, name: 'Home Essentials Kit', price: '$124.99', category: 'Home', image: '🏠', rating: 4.8 },
    { id: 3, name: 'Travel Wellness Set', price: '$67.99', category: 'Travel', image: '✈️', rating: 4.7 }
  ],
  products: [
    { id: 4, name: 'Lavender Essential Oil', price: '$28.99', category: 'Single Oils', image: '💜', rating: 4.9 },
    { id: 5, name: 'Peppermint Essential Oil', price: '$24.99', category: 'Single Oils', image: '🌿', rating: 4.8 },
    { id: 6, name: 'Frankincense Essential Oil', price: '$89.99', category: 'Premium', image: '👑', rating: 5.0 }
  ],
  blends: [
    { id: 7, name: 'Serenity Restful Blend', price: '$42.99', category: 'Sleep', image: '🌙', rating: 4.9 },
    { id: 8, name: 'On Guard Protective Blend', price: '$44.99', category: 'Immunity', image: '🛡️', rating: 4.8 },
    { id: 9, name: 'Balance Grounding Blend', price: '$31.99', category: 'Grounding', image: '🌍', rating: 4.7 }
  ]
};

const ProductCard = ({ item }) => (
  <motion.div
    whileHover={{ y: -4, scale: 1.02 }}
    transition={{ duration: 0.2 }}
  >
    <Card className="overflow-hidden bg-white/90 backdrop-blur-sm border-slate-200/50 hover:shadow-xl transition-all duration-300">
      <CardContent className="p-6">
        <div className="text-center mb-4">
          <div className="text-4xl mb-2">{item.image}</div>
          <Badge variant="secondary" className="bg-emerald-100 text-emerald-700 mb-2">
            {item.category}
          </Badge>
        </div>
        
        <h3 className="font-semibold text-slate-800 mb-2 text-center">{item.name}</h3>
        
        <div className="flex items-center justify-center mb-3">
          <div className="flex items-center">
            <Star className="w-4 h-4 fill-amber-400 text-amber-400 mr-1" />
            <span className="text-sm text-slate-600">{item.rating}</span>
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <span className="text-lg font-semibold text-emerald-700">{item.price}</span>
          <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700">
            <ShoppingBag className="w-4 h-4 mr-1" />
            Add
          </Button>
        </div>
      </CardContent>
    </Card>
  </motion.div>
);

export function OfferingsHub() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [activeTab, setActiveTab] = useState('collections');

  const filterItems = (items) => {
    return items.filter(item => 
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedCategory === 'all' || item.category.toLowerCase() === selectedCategory.toLowerCase())
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/5 to-amber-600/5" />
        
        <div className="relative px-8 py-12">
          <motion.header 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl font-light text-slate-800 mb-4 tracking-wide">
              Curated <span className="font-thin italic text-emerald-700">Offerings</span>
            </h1>
            <div className="w-24 h-px bg-gradient-to-r from-emerald-400 to-amber-400 mx-auto mb-6" />
            <p className="text-slate-600 text-lg font-light">Premium Wellness Collections & Products</p>
          </motion.header>

          {/* Search and Filter */}
          <div className="max-w-2xl mx-auto mb-8 flex gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
              <Input 
                placeholder="Search offerings..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-white/80 border-slate-200"
              />
            </div>
            <Button variant="outline" className="flex items-center gap-2">
              <Filter className="w-4 h-4" />
              Filter
            </Button>
          </div>

          {/* Tabs */}
          <div className="max-w-6xl mx-auto">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8 bg-white/80">
                <TabsTrigger value="collections" className="text-slate-700">Oil Collections</TabsTrigger>
                <TabsTrigger value="products" className="text-slate-700">Product Catalog</TabsTrigger>
                <TabsTrigger value="blends" className="text-slate-700">Specialized Blends</TabsTrigger>
              </TabsList>
              
              <TabsContent value="collections">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                  {filterItems(SAMPLE_OFFERINGS.collections).map((item) => (
                    <ProductCard key={item.id} item={item} />
                  ))}
                </motion.div>
              </TabsContent>
              
              <TabsContent value="products">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                  {filterItems(SAMPLE_OFFERINGS.products).map((item) => (
                    <ProductCard key={item.id} item={item} />
                  ))}
                </motion.div>
              </TabsContent>
              
              <TabsContent value="blends">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                  {filterItems(SAMPLE_OFFERINGS.blends).map((item) => (
                    <ProductCard key={item.id} item={item} />
                  ))}
                </motion.div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
}