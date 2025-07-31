export interface DropdownItem {
  title: string;
  description: string;
  icon: string;
  action?: () => void;
}

export interface NavigationDropdown {
  [key: string]: DropdownItem[];
}

export const navigationDropdowns: NavigationDropdown = {
  'Masculine Vitality': [
    {
      title: 'Energy & Focus',
      description: 'Essential oils for mental clarity and sustained energy',
      icon: 'energy'
    },
    {
      title: 'Physical Strength',
      description: 'Support for athletic performance and recovery',
      icon: 'strength'
    },
    {
      title: 'Confidence Blends',
      description: 'Aromatherapy for leadership and self-assurance',
      icon: 'confidence'
    },
    {
      title: 'Stress Relief',
      description: 'Natural solutions for work-life balance',
      icon: 'relief'
    }
  ],
  'Feminine Energy': [
    {
      title: 'Hormonal Balance',
      description: 'Natural support for womens wellness cycles',
      icon: 'balance'
    },
    {
      title: 'Emotional Harmony',
      description: 'Oils for mood support and emotional wellbeing',
      icon: 'harmony'
    },
    {
      title: 'Beauty & Radiance',
      description: 'Skincare and beauty enhancement protocols',
      icon: 'beauty'
    },
    {
      title: 'Intuitive Wellness',
      description: 'Sacred feminine energy and spiritual connection',
      icon: 'intuition'
    }
  ],
  'Pet Harmony': [
    {
      title: 'Calming Blends',
      description: 'Pet-safe aromatherapy for anxiety and stress',
      icon: 'calm'
    },
    {
      title: 'Skin & Coat',
      description: 'Natural solutions for healthy pet grooming',
      icon: 'grooming'
    },
    {
      title: 'Digestive Support',
      description: 'Gentle oils for pet digestive wellness',
      icon: 'digestive'
    },
    {
      title: 'Energy & Vitality',
      description: 'Natural support for active pets',
      icon: 'vitality'
    }
  ],
  'Home': [
    {
      title: 'Air Purification',
      description: 'Essential oils for clean, fresh indoor air',
      icon: 'air'
    },
    {
      title: 'Natural Cleaning',
      description: 'Chemical-free household cleaning solutions',
      icon: 'cleaning'
    },
    {
      title: 'Sacred Space',
      description: 'Create peaceful, harmonious living environments',
      icon: 'sacred'
    },
    {
      title: 'Seasonal Wellness',
      description: 'Year-round home wellness protocols',
      icon: 'seasonal'
    }
  ],
  'Wellness Sanctuary': [
    {
      title: 'Meditation Blends',
      description: 'Sacred aromatherapy for deep spiritual practice',
      icon: 'meditation'
    },
    {
      title: 'Chakra Alignment',
      description: 'Essential oils for energy center balancing',
      icon: 'chakra'
    },
    {
      title: 'Sacred Rituals',
      description: 'Ancient wellness ceremonies and practices',
      icon: 'ritual'
    },
    {
      title: 'Inner Peace',
      description: 'Tranquility and mindfulness enhancement',
      icon: 'peace'
    }
  ],
  'Wellness Entrepreneurship': [
    {
      title: 'Business Building',
      description: 'Tools and strategies for wellness entrepreneurs',
      icon: 'business'
    },
    {
      title: 'Product Knowledge',
      description: 'Deep dive into essential oil science and benefits',
      icon: 'knowledge'
    },
    {
      title: 'Client Consultation',
      description: 'Professional wellness assessment techniques',
      icon: 'consultation'
    },
    {
      title: 'Marketing Mastery',
      description: 'Authentic wellness brand development',
      icon: 'marketing'
    }
  ],
  'Wisdom of Wellness': [
    {
      title: 'Ancient Traditions',
      description: 'Time-honored healing practices and wisdom',
      icon: 'ancient'
    },
    {
      title: 'Modern Science',
      description: 'Research-backed wellness methodologies',
      icon: 'science'
    },
    {
      title: 'Holistic Health',
      description: 'Mind-body-spirit integration approaches',
      icon: 'holistic'
    },
    {
      title: 'Educational Resources',
      description: 'Comprehensive wellness learning materials',
      icon: 'education'
    }
  ],
  'Crafted Wellness Intake': [
    {
      title: 'Personal Assessment',
      description: 'Comprehensive wellness evaluation and analysis',
      icon: 'assessment'
    },
    {
      title: 'Custom Protocols',
      description: 'Personalized essential oil recommendations',
      icon: 'custom'
    },
    {
      title: 'Lifestyle Integration',
      description: 'Seamless wellness routine development',
      icon: 'lifestyle'
    },
    {
      title: 'Progress Tracking',
      description: 'Monitor and optimize your wellness journey',
      icon: 'tracking'
    }
  ]
};