'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { LuxuryCard } from '../../components/luxury/LuxuryCard';
import { LuxuryButton } from '../../components/luxury/LuxuryButton';
import { FlowerOfLife } from '../../components/sacred-geometry/FlowerOfLife';
import { SeedOfLife } from '../../components/sacred-geometry/SeedOfLife';

const GeometryPage: React.FC = () => {
  const [activePattern, setActivePattern] = useState<'flower' | 'seed'>('flower');
  const [size, setSize] = useState<number>(150);
  const [color, setColor] = useState<string>('#D4AF37');

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-indigo-50 to-blue-50 p-4">
      <div className="max-w-6xl mx-auto py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Sacred Geometry Patterns</h1>
          <p className="text-lg text-gray-600">Interactive SVG patterns for spiritual connection</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          <LuxuryCard variant="gold">
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-6">Pattern Display</h3>
              <div className="flex justify-center mb-6">
                {activePattern === 'flower' ? (
                  <FlowerOfLife size={size} color={color} />
                ) : (
                  <SeedOfLife size={size} color={color} />
                )}
              </div>
              <div className="flex justify-center gap-4">
                <LuxuryButton
                  variant={activePattern === 'flower' ? 'gold' : 'sage'}
                  onClick={() => setActivePattern('flower')}
                >
                  Flower of Life
                </LuxuryButton>
                <LuxuryButton
                  variant={activePattern === 'seed' ? 'rose' : 'sage'}
                  onClick={() => setActivePattern('seed')}
                >
                  Seed of Life
                </LuxuryButton>
              </div>
            </div>
          </LuxuryCard>

          <LuxuryCard variant="rose">
            <h3 className="text-xl font-semibold mb-6">Pattern Controls</h3>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Size: {size}px</label>
                <input
                  type="range"
                  min="80"
                  max="300"
                  value={size}
                  onChange={(e) => setSize(Number(e.target.value))}
                  className="w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Color</label>
                <div className="flex gap-2">
                  {['#D4AF37', '#B76E79', '#10B981', '#3B82F6', '#8B5CF6'].map((c) => (
                    <button
                      key={c}
                      onClick={() => setColor(c)}
                      className="w-8 h-8 rounded-full border-2 border-gray-300"
                      style={{ backgroundColor: c }}
                    />
                  ))}
                </div>
              </div>
              <div className="text-sm text-gray-600">
                <p><strong>Flower of Life:</strong> Symbol of creation and cosmic order</p>
                <p><strong>Seed of Life:</strong> Foundation pattern representing genesis</p>
              </div>
            </div>
          </LuxuryCard>
        </div>
      </div>
    </div>
  );
};

export default GeometryPage;