'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Home, Heart, Sparkles } from 'lucide-react';

export const Navigation: React.FC = () => {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200"
    >
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-amber-600 to-rose-600 bg-clip-text text-transparent">
            iTERRA™
          </Link>
          <div className="flex items-center space-x-6">
            <Link href="/" className="flex items-center space-x-2 text-gray-700 hover:text-amber-600 transition-colors">
              <Home size={20} />
              <span>Home</span>
            </Link>
            <Link href="/wellness" className="flex items-center space-x-2 text-gray-700 hover:text-green-600 transition-colors">
              <Heart size={20} />
              <span>Wellness</span>
            </Link>
            <Link href="/geometry" className="flex items-center space-x-2 text-gray-700 hover:text-purple-600 transition-colors">
              <Sparkles size={20} />
              <span>Sacred Geometry</span>
            </Link>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export const withNavigation = (Component: React.ComponentType<any>) => {
  return function WrappedComponent(props: any) {
    return (
      <>
        <Navigation />
        <div className="pt-20">
          <Component {...props} />
        </div>
      </>
    );
  };
};