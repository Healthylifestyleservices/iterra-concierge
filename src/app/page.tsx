'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { LuxuryCard } from '../components/luxury/LuxuryCard';
import { LuxuryButton } from '../components/luxury/LuxuryButton';
import { FlowerOfLife } from '../components/sacred-geometry/FlowerOfLife';
import { SeedOfLife } from '../components/sacred-geometry/SeedOfLife';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-rose-50 to-green-50">
      <section className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mb-8"
          >
            <FlowerOfLife size={120} className="mx-auto mb-6" />
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-amber-600 to-rose-600 bg-clip-text text-transparent mb-4">
              iTERRA™
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto">
              Luxury Wellness Experience with Sacred Botanicals
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <LuxuryButton variant="gold" size="lg">Explore Wellness</LuxuryButton>
            <LuxuryButton variant="rose" size="lg">Emotional Guidance</LuxuryButton>
            <LuxuryButton variant="sage" size="lg">Sacred Botanicals</LuxuryButton>
          </motion.div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          <LuxuryCard variant="gold">
            <div className="text-center">
              <SeedOfLife size={60} className="mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Luxury Components</h3>
              <p className="text-gray-600">Pixel-perfect UI pieces crafted for premium wellness experiences</p>
            </div>
          </LuxuryCard>
          <LuxuryCard variant="rose">
            <div className="text-center">
              <FlowerOfLife size={60} className="mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Sacred Geometry</h3>
              <p className="text-gray-600">Beautiful SVG patterns that enhance spiritual connection</p>
            </div>
          </LuxuryCard>
          <LuxuryCard variant="sage">
            <div className="text-center">
              <SeedOfLife size={60} color="#10B981" className="mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Wellness Intelligence</h3>
              <p className="text-gray-600">Local NLP processing and curated oil knowledge</p>
            </div>
          </LuxuryCard>
        </div>
      </section>
    </div>
  );
};

export default HomePage;