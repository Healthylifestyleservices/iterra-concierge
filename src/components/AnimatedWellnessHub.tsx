import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  HeartIcon, 
  SparklesIcon, 
  AcademicCapIcon,
  BriefcaseIcon,
  BeakerIcon,
  UserGroupIcon
} from '@heroicons/react/24/outline';
import { Card, CardContent } from './ui/card';

const categories = [
  {
    id: 'mens-wellness',
    title: 'Men\'s Wellness',
    description: 'Targeted solutions for masculine vitality and strength',
    icon: HeartIcon,
    gradient: 'from-blue-500 to-cyan-500',
    delay: 0.1
  },
  {
    id: 'womens-wellness', 
    title: 'Women\'s Wellness',
    description: 'Nurturing support for feminine health and balance',
    icon: SparklesIcon,
    gradient: 'from-pink-500 to-rose-500',
    delay: 0.2
  },
  {
    id: 'product-catalog',
    title: 'Product Catalog',
    description: 'Premium essential oils and wellness products',
    icon: BeakerIcon,
    gradient: 'from-green-500 to-emerald-500',
    delay: 0.3
  },
  {
    id: 'education-hub',
    title: 'Education Hub',
    description: 'Learn about essential oils and wellness practices',
    icon: AcademicCapIcon,
    gradient: 'from-purple-500 to-violet-500',
    delay: 0.4
  },
  {
    id: 'business-tools',
    title: 'Business Tools',
    description: 'Resources for building your wellness business',
    icon: BriefcaseIcon,
    gradient: 'from-orange-500 to-amber-500',
    delay: 0.5
  },
  {
    id: 'community',
    title: 'Community',
    description: 'Connect with like-minded wellness enthusiasts',
    icon: UserGroupIcon,
    gradient: 'from-teal-500 to-cyan-500',
    delay: 0.6
  }
];

export function AnimatedWellnessHub() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <motion.header 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white/80 backdrop-blur-md shadow-lg py-6 px-6"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <motion.div 
            className="flex items-center space-x-4"
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center">
              <SparklesIcon className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                iTERRA Wellness Hub
              </h1>
              <p className="text-sm text-slate-600">Jenna Williams - dōTERRA Associate</p>
            </div>
          </motion.div>
        </div>
      </motion.header>

      <main className="max-w-7xl mx-auto px-6 py-12">
        <motion.section 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent mb-6">
            Your Wellness Journey Starts Here
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Discover personalized wellness solutions powered by nature's finest essential oils
          </p>
        </motion.section>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: category.delay }}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate(`/${category.id}`)}
                className="cursor-pointer"
              >
                <Card className="h-full bg-white/60 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
                  <CardContent className="p-8">
                    <div className={`w-16 h-16 bg-gradient-to-br ${category.gradient} rounded-2xl flex items-center justify-center mb-6 mx-auto`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-800 mb-4 text-center">
                      {category.title}
                    </h3>
                    <p className="text-slate-600 text-center leading-relaxed">
                      {category.description}
                    </p>
                    <motion.div 
                      className="mt-6 flex items-center justify-center text-emerald-600 font-semibold"
                      whileHover={{ x: 5 }}
                    >
                      Explore →
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </main>
    </div>
  );
}