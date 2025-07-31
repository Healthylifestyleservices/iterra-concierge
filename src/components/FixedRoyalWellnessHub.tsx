import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const WELLNESS_CATEGORIES = [
  {
    id: 'humans',
    title: 'Human Wellness',
    icon: '🧘‍♀️',
    gradient: 'from-emerald-400 to-teal-600',
    description: 'Personalized wellness for adults and children',
    features: ['Adult Programs', 'Child Safety', 'Family Support']
  },
  {
    id: 'pets',
    title: 'Pet Care',
    icon: '🐕',
    gradient: 'from-blue-400 to-indigo-600',
    description: 'Safe wellness solutions for your pets',
    features: ['Pet Safety', 'Natural Care', 'Vet Approved']
  },
  {
    id: 'business',
    title: 'Business Tools',
    icon: '💼',
    gradient: 'from-purple-400 to-pink-600',
    description: 'Professional wellness business resources',
    features: ['Marketing Tools', 'Training', 'Support']
  },
  {
    id: 'luxury',
    title: 'Premium Experience',
    icon: '✨',
    gradient: 'from-amber-400 to-orange-600',
    description: 'Exclusive luxury wellness experiences',
    features: ['VIP Access', 'Premium Products', 'Concierge']
  }
];

export function FixedRoyalWellnessHub() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 font-sans">
      {/* Header */}
      <motion.header 
        className="bg-white/80 backdrop-blur-md shadow-sm border-b py-4 px-6"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">iT</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-slate-800">iTERRA</h1>
              <p className="text-sm text-slate-600">Wellness Sanctuary</p>
            </div>
          </div>
          
          <nav className="flex space-x-3">
            <Button variant="outline" size="sm">Profile</Button>
            <Button variant="outline" size="sm">Protocols</Button>
          </nav>
        </div>
      </motion.header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Wellness Categories</h2>
          <p className="text-lg text-slate-600">Choose your wellness journey</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {WELLNESS_CATEGORIES.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.6 }}
            >
              <Card 
                className={`
                  p-6 cursor-pointer transition-all duration-300 hover:scale-105
                  bg-gradient-to-br ${category.gradient} text-white
                  border-0 shadow-lg hover:shadow-xl
                `}
                onClick={() => setSelectedCategory(
                  selectedCategory === category.id ? null : category.id
                )}
              >
                <div className="text-4xl mb-4">{category.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
                <p className="text-white/90 text-sm mb-4">{category.description}</p>
                
                <AnimatePresence>
                  {selectedCategory === category.id && (
                    <motion.div 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="space-y-2"
                    >
                      {category.features.map((feature, idx) => (
                        <motion.div
                          key={feature}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 }}
                          className="bg-white/20 backdrop-blur-sm p-2 rounded-lg text-sm"
                        >
                          {feature}
                        </motion.div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </Card>
            </motion.div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white/50 backdrop-blur-md py-6 mt-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-slate-600">© 2024 iTERRA Wellness. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}