import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  HeartIcon, 
  SparklesIcon, 
  AcademicCapIcon,
  BriefcaseIcon,
  BeakerIcon,
  UserGroupIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';
import { AnimatedHeader } from './AnimatedHeader';
import { MotionCard } from './MotionCard';

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

export function EnhancedWellnessHub() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-emerald-50">
      <AnimatedHeader 
        onProfileClick={() => navigate('/profile')}
        onSettingsClick={() => navigate('/settings')}
      />

      <main className="max-w-7xl mx-auto px-6 py-12">
        <motion.section 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-slate-800 via-emerald-700 to-teal-600 bg-clip-text text-transparent mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Your Wellness Journey Starts Here
          </motion.h2>
          <motion.p 
            className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Discover personalized wellness solutions powered by nature's finest essential oils
          </motion.p>
        </motion.section>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <MotionCard
                key={category.id}
                delay={category.delay}
                onClick={() => navigate(`/${category.id}`)}
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${category.gradient} rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-lg`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-4 text-center">
                  {category.title}
                </h3>
                <p className="text-slate-600 text-center leading-relaxed mb-6">
                  {category.description}
                </p>
                <motion.div 
                  className="flex items-center justify-center text-emerald-600 font-semibold group"
                  whileHover={{ x: 5 }}
                >
                  <span>Explore</span>
                  <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </motion.div>
              </MotionCard>
            );
          })}
        </div>

        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-emerald-500 to-teal-600 rounded-3xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Wellness?</h3>
            <p className="text-xl opacity-90 mb-8">Join thousands who have discovered the power of natural wellness</p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-emerald-600 px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all"
              onClick={() => navigate('/get-started')}
            >
              Get Started Today
            </motion.button>
          </div>
        </motion.section>
      </main>
    </div>
  );
}