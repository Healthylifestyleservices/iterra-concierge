import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { BlurLayer, GlassCard, LuxeButton } from './LuxeComponents';

const WELLNESS_CATEGORIES = [
  {
    id: 'humans',
    title: 'Wellness Horizons',
    icon: '👥',
    gradient: 'from-[#F1A7A7]/20 to-[#B76E79]/30',
    description: 'Personalized Wellness Odyssey',
    features: [
      'Advanced Biometric Tracking',
      'AI-Powered Wellness Insights',
      'Holistic Protocol Design'
    ]
  },
  {
    id: 'pets',
    title: 'Pet Wellness',
    icon: '🐾',
    gradient: 'from-[#A8E6CF]/20 to-[#7FCDCD]/30',
    description: 'Companion Care Excellence',
    features: [
      'Species-Specific Protocols',
      'Veterinary Integration',
      'Natural Pet Solutions'
    ]
  },
  {
    id: 'business',
    title: 'Business Elite',
    icon: '💼',
    gradient: 'from-[#FFD3A5]/20 to-[#FD9853]/30',
    description: 'Professional Wellness Solutions',
    features: [
      'Corporate Wellness Programs',
      'Executive Health Optimization',
      'Team Performance Enhancement'
    ]
  },
  {
    id: 'luxury',
    title: 'Luxury Experiences',
    icon: '✨',
    gradient: 'from-[#D4A574]/20 to-[#B8860B]/30',
    description: 'Exclusive Wellness Journeys',
    features: [
      'Personalized Concierge Service',
      'Premium Product Collections',
      'VIP Consultation Access'
    ]
  }
];

export function RoyalWellnessHub() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [backgroundGradient, setBackgroundGradient] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const gradients = [
      'bg-gradient-to-br from-[#FAF0E6] via-[#F7E7CE] to-[#E8D5B7]',
      'bg-gradient-to-br from-[#FFF8DC] via-[#F5DEB3] to-[#DEB887]',
      'bg-gradient-to-br from-[#F0F8FF] via-[#E6E6FA] to-[#D8BFD8]',
      'bg-gradient-to-br from-[#FDF5E6] via-[#FAEBD7] to-[#F5E6D3]'
    ];
    setBackgroundGradient(gradients[Math.floor(Math.random() * gradients.length)]);
  }, [selectedCategory]);

  return (
    <motion.div 
      className={`
        min-h-screen 
        ${backgroundGradient}
        overflow-hidden 
        font-serif 
        text-[#654321]
        tracking-wide
        relative
      `}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Luxe Header */}
      <motion.header 
        className="fixed top-0 left-0 right-0 z-50 
        bg-white/30 backdrop-blur-xl 
        py-4 px-6 flex justify-between items-center"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 120 }}
      >
        <div className="flex items-center space-x-4">
          <motion.div
            className="h-12 w-12 rounded-full bg-gradient-to-br from-[#8B4513] to-[#A0522D] flex items-center justify-center text-white font-bold text-xl"
            whileHover={{ scale: 1.1, rotate: 5 }}
          >
            iT
          </motion.div>
          <div>
            <h1 className="text-3xl font-bold tracking-widest text-[#8B4513]">
              iTERRA
            </h1>
            <p className="text-xs uppercase tracking-wider text-[#654321]/70">
              Elevated Wellness Sanctuary
            </p>
          </div>
        </div>
        
        <nav className="flex space-x-4">
          <LuxeButton>Profile</LuxeButton>
          <LuxeButton>Protocols</LuxeButton>
        </nav>
      </motion.header>

      {/* Main Wellness Categories */}
      <motion.main 
        className="container mx-auto px-8 pt-24 pb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {WELLNESS_CATEGORIES.map((category) => (
            <GlassCard
              key={category.id}
              className={`
                bg-gradient-to-br ${category.gradient}
                rounded-3xl 
                shadow-2xl 
                p-6 
                transform 
                transition-all 
                duration-300 
                hover:scale-105
              `}
              onClick={() => setSelectedCategory(category.id)}
            >
              <div className="text-5xl mb-4 opacity-80">{category.icon}</div>
              <h2 className="text-2xl font-semibold mb-2">{category.title}</h2>
              <p className="text-sm opacity-70 mb-4">{category.description}</p>
              
              <AnimatePresence>
                {selectedCategory === category.id && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="space-y-2"
                  >
                    {category.features.map((feature) => (
                      <motion.div
                        key={feature}
                        className="bg-white/20 backdrop-blur-sm p-2 rounded-lg"
                        whileHover={{ scale: 1.05 }}
                      >
                        {feature}
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </GlassCard>
          ))}
        </div>
      </motion.main>

      {/* Elegant Footer */}
      <footer className="bg-white/30 backdrop-blur-xl py-6 text-center">
        <p className="text-[#654321]/70">
          © 2024 iTERRA Wellness Sanctuary. All Rights Reserved.
        </p>
      </footer>
    </motion.div>
  );
}