import React from 'react';
import { motion } from 'framer-motion';
import { SparklesIcon, UserIcon, Cog6ToothIcon } from '@heroicons/react/24/outline';
import { IconButton } from './IconButton';

interface AnimatedHeaderProps {
  title?: string;
  subtitle?: string;
  onProfileClick?: () => void;
  onSettingsClick?: () => void;
}

export function AnimatedHeader({ 
  title = 'iTERRA Wellness Hub',
  subtitle = 'Jenna Williams - dōTERRA Associate',
  onProfileClick,
  onSettingsClick
}: AnimatedHeaderProps) {
  return (
    <motion.header 
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white/80 backdrop-blur-md shadow-lg py-6 px-6 sticky top-0 z-50"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <motion.div 
          className="flex items-center space-x-4"
          whileHover={{ scale: 1.02 }}
          transition={{ type: 'spring', stiffness: 400, damping: 17 }}
        >
          <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center shadow-lg">
            <SparklesIcon className="w-6 h-6 text-white" />
          </div>
          <div>
            <motion.h1 
              className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              {title}
            </motion.h1>
            <motion.p 
              className="text-sm text-slate-600"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              {subtitle}
            </motion.p>
          </div>
        </motion.div>
        
        <motion.div 
          className="flex items-center space-x-3"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <IconButton
            icon={UserIcon}
            label="Profile"
            onClick={onProfileClick}
            variant="ghost"
            size="sm"
          />
          <IconButton
            icon={Cog6ToothIcon}
            label="Settings"
            onClick={onSettingsClick}
            variant="ghost"
            size="sm"
          />
        </motion.div>
      </div>
    </motion.header>
  );
}