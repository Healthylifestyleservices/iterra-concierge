import React from 'react';
import { motion } from 'framer-motion';

const AnimatedWellnessDemo: React.FC = () => {
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
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-100 p-8">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl mx-auto"
      >
        <motion.h1
          variants={itemVariants}
          className="text-6xl font-serif text-emerald-800 text-center mb-4"
        >
          iTERRA Wellness
        </motion.h1>
        
        <motion.p
          variants={itemVariants}
          className="text-xl font-elegant text-emerald-600 text-center mb-12"
        >
          Experience the power of natural wellness with elegant animations
        </motion.p>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: "Essential Oils", icon: "🌿", desc: "Pure, natural essences" },
            { title: "Wellness Blends", icon: "🧴", desc: "Expertly crafted formulas" },
            { title: "Holistic Care", icon: "💆‍♀️", desc: "Complete wellness solutions" }
          ].map((item, index) => (
            <motion.div
              key={item.title}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg"
            >
              <div className="text-4xl mb-4 text-center">{item.icon}</div>
              <h3 className="text-xl font-serif text-emerald-800 mb-2">{item.title}</h3>
              <p className="font-elegant text-emerald-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          variants={itemVariants}
          className="mt-12 text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-emerald-600 text-white px-8 py-3 rounded-full font-elegant text-lg shadow-lg hover:bg-emerald-700 transition-colors"
          >
            Explore Wellness Solutions
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AnimatedWellnessDemo;