import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { LuxuryProductCard } from './LuxuryProductCard';
import { productCatalog } from '../data/productCatalog';
import { oilCollectionsData } from '../data/oilCollectionsData';
import { dotTerraBlends } from '../data/dotTerraBlends';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';

const OFFERING_CATEGORIES = [
  {
    id: 'essential-oils',
    title: 'Premium Essential Oils',
    icon: '🌿',
    description: 'Single-origin botanical essences',
    data: productCatalog.essentialOils
  },
  {
    id: 'blends',
    title: 'Signature Blends',
    icon: '✨',
    description: 'Expertly crafted therapeutic combinations',
    data: productCatalog.blends
  },
  {
    id: 'collections',
    title: 'Curated Collections',
    icon: '💎',
    description: 'Thoughtfully assembled wellness sets',
    data: oilCollectionsData.slice(0, 6)
  },
  {
    id: 'supplements',
    title: 'Wellness Supplements',
    icon: '🏆',
    description: 'Premium nutritional support',
    data: productCatalog.supplements
  }
];

export function LuxuryOfferingsHub() {
  const [activeCategory, setActiveCategory] = useState('essential-oils');
  const [searchTerm, setSearchTerm] = useState('');

  const currentCategory = OFFERING_CATEGORIES.find(cat => cat.id === activeCategory);
  const filteredProducts = currentCategory?.data?.filter(product => 
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.category.toLowerCase().includes(searchTerm.toLowerCase())
  ) || [];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Luxury Header */}
      <motion.header 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 shadow-2xl"
      >
        <div className="container mx-auto px-6 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-light text-white mb-4 tracking-wide">
              Curated <span className="font-bold text-gold-300">Wellness Offerings</span>
            </h1>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto">
              Discover our exclusive collection of premium essential oils, artisanal blends, and wellness solutions
            </p>
          </div>
        </div>
      </motion.header>

      <main className="container mx-auto px-6 py-12">
        {/* Search & Filter */}
        <motion.section 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-slate-200">
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="flex-grow">
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search our premium collection..."
                  className="w-full p-4 border border-slate-300 rounded-xl focus:ring-2 focus:ring-slate-500 focus:border-transparent"
                />
              </div>
              <div className="text-slate-600 text-sm">
                {filteredProducts.length} premium offerings
              </div>
            </div>
          </div>
        </motion.section>

        {/* Category Tabs */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Tabs value={activeCategory} onValueChange={setActiveCategory} className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8 bg-slate-100 p-2 rounded-xl">
              {OFFERING_CATEGORIES.map((category) => (
                <TabsTrigger 
                  key={category.id} 
                  value={category.id}
                  className="flex flex-col items-center p-4 data-[state=active]:bg-white data-[state=active]:shadow-md rounded-lg transition-all duration-300"
                >
                  <span className="text-2xl mb-1">{category.icon}</span>
                  <span className="text-xs font-medium">{category.title}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {OFFERING_CATEGORIES.map((category) => (
              <TabsContent key={category.id} value={category.id} className="mt-0">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="text-center mb-8">
                    <h2 className="text-2xl font-light text-slate-800 mb-2">{category.title}</h2>
                    <p className="text-slate-600">{category.description}</p>
                  </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {filteredProducts.map((product, index) => (
                      <motion.div
                        key={product.id}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                      >
                        <LuxuryProductCard product={product} />
                      </motion.div>
                    ))}
                  </div>

                  {filteredProducts.length === 0 && (
                    <div className="text-center py-12">
                      <p className="text-slate-500 text-lg">No products found matching your search.</p>
                    </div>
                  )}
                </motion.div>
              </TabsContent>
            ))}
          </Tabs>
        </motion.section>
      </main>

      {/* Luxury Footer */}
      <motion.footer 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="bg-gradient-to-r from-slate-900 to-slate-800 py-8 mt-16"
      >
        <div className="container mx-auto px-6 text-center">
          <p className="text-slate-300 font-light">
            © 2024 iTERRA Wellness • Premium dōTERRA Collection
          </p>
        </div>
      </motion.footer>
    </div>
  );
}