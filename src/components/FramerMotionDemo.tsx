import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  PlayIcon, 
  PauseIcon, 
  ArrowPathIcon,
  SparklesIcon,
  HeartIcon
} from '@heroicons/react/24/outline';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';

const animations = {
  bounce: {
    y: [0, -20, 0],
    transition: { duration: 0.6, repeat: Infinity }
  },
  rotate: {
    rotate: 360,
    transition: { duration: 2, repeat: Infinity, ease: 'linear' }
  },
  pulse: {
    scale: [1, 1.1, 1],
    transition: { duration: 1, repeat: Infinity }
  },
  slide: {
    x: [0, 100, 0],
    transition: { duration: 2, repeat: Infinity }
  }
};

export function FramerMotionDemo() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [selectedAnimation, setSelectedAnimation] = useState('bounce');
  const [showCard, setShowCard] = useState(true);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 p-8">
      <div className="max-w-4xl mx-auto">
        <motion.h1 
          className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Framer Motion & Heroicons Demo
        </motion.h1>

        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <SparklesIcon className="w-5 h-5" />
                Animation Controls
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex gap-2">
                <Button
                  onClick={() => setIsPlaying(!isPlaying)}
                  variant={isPlaying ? 'default' : 'outline'}
                  size="sm"
                >
                  {isPlaying ? <PauseIcon className="w-4 h-4" /> : <PlayIcon className="w-4 h-4" />}
                </Button>
                <Button
                  onClick={() => setShowCard(!showCard)}
                  variant="outline"
                  size="sm"
                >
                  <ArrowPathIcon className="w-4 h-4" />
                </Button>
              </div>
              
              <div className="space-y-2">
                {Object.keys(animations).map((anim) => (
                  <Button
                    key={anim}
                    onClick={() => setSelectedAnimation(anim)}
                    variant={selectedAnimation === anim ? 'default' : 'outline'}
                    size="sm"
                    className="w-full justify-start"
                  >
                    {anim.charAt(0).toUpperCase() + anim.slice(1)}
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="flex items-center justify-center">
            <AnimatePresence>
              {showCard && (
                <motion.div
                  key="demo-card"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isPlaying ? {
                    opacity: 1,
                    scale: 1,
                    ...animations[selectedAnimation as keyof typeof animations]
                  } : { opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="w-32 h-32 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-2xl flex items-center justify-center shadow-lg"
                >
                  <HeartIcon className="w-12 h-12 text-white" />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        <motion.div 
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, staggerChildren: 0.1 }}
        >
          {[1, 2, 3, 4].map((i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.05, rotate: 5 }}
              className="h-24 bg-white rounded-lg shadow-md flex items-center justify-center cursor-pointer"
            >
              <span className="text-2xl">🌿</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}