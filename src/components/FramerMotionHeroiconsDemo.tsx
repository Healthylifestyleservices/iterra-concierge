import React from 'react';
import { motion } from 'framer-motion';
import { HeartIcon, SparklesIcon, StarIcon } from '@heroicons/react/24/solid';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const FramerMotionHeroiconsDemo = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  const iconVariants = {
    hover: {
      scale: 1.2,
      rotate: 360,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 p-6">
      <motion.div
        className="max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-4xl font-bold text-center mb-8 text-gray-800"
          variants={itemVariants}
        >
          Framer Motion + Heroicons Demo
        </motion.h1>

        <div className="grid md:grid-cols-3 gap-6">
          <motion.div variants={itemVariants}>
            <Card className="h-full">
              <CardHeader className="text-center">
                <motion.div
                  className="mx-auto mb-4"
                  variants={iconVariants}
                  whileHover="hover"
                >
                  <HeartIcon className="h-12 w-12 text-red-500" />
                </motion.div>
                <CardTitle>Wellness</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-gray-600">
                  Experience holistic wellness with our premium essential oils.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Card className="h-full">
              <CardHeader className="text-center">
                <motion.div
                  className="mx-auto mb-4"
                  variants={iconVariants}
                  whileHover="hover"
                >
                  <SparklesIcon className="h-12 w-12 text-yellow-500" />
                </motion.div>
                <CardTitle>Quality</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-gray-600">
                  Premium quality oils sourced from the finest ingredients.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Card className="h-full">
              <CardHeader className="text-center">
                <motion.div
                  className="mx-auto mb-4"
                  variants={iconVariants}
                  whileHover="hover"
                >
                  <StarIcon className="h-12 w-12 text-blue-500" />
                </motion.div>
                <CardTitle>Excellence</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-gray-600">
                  Committed to excellence in every product we offer.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <motion.div
          className="mt-12 text-center"
          variants={itemVariants}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
              Get Started
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default FramerMotionHeroiconsDemo;