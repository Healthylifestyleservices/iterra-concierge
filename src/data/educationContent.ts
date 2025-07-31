export interface EducationItem {
  id: string;
  title: string;
  type: 'video' | 'article' | 'blog' | 'library' | 'certification' | 'membership';
  duration: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'Professional' | 'Open to All';
  description: string;
  url: string;
  instructor?: string;
  category?: string;
  isExternal?: boolean;
  price?: string;
  isCertification?: boolean;
  isMembership?: boolean;
  highlights?: string[];
}

export const educationVideos: EducationItem[] = [
  {
    id: '1',
    title: '🍃 Essential Oil Safety & Dilution Guide',
    type: 'video',
    duration: '15 min video',
    level: 'Beginner',
    description: 'Master safe use of essential oils for all ages. Learn why dilution matters, how to blend for safe diffusion, topical, and even pet environments.',
    instructor: 'Dr. Eric Zielinski',
    url: 'https://www.doterra.com/US/en/education/essential-oil-safety',
    isExternal: true,
    highlights: ['Safe ratios for kids, adults, pets', 'Carrier oil basics', 'When to patch-test']
  },
  {
    id: '2',
    title: '💪 Men\'s Energy & Vitality: Aromatherapy in Action',
    type: 'video',
    duration: '18 min video',
    level: 'Intermediate',
    description: 'Specialized aromatherapy and wellness rituals to support men\'s energy levels, focus, and resilience.',
    instructor: 'Dr. Josh Axe',
    url: 'https://www.doterra.com/US/en/education/men-s-energy-and-vitality-with-essential-oils',
    isExternal: true,
    highlights: ['Focus/clarity blends', 'Sensorial routines for stress and fitness', 'Essential oils for circulation, motivation']
  },
  {
    id: '3',
    title: '🚀 Wellness Business Masterclass',
    type: 'video',
    duration: '35 min workshop',
    level: 'Advanced',
    description: 'Actionable strategies for building a successful wellness or aromatherapy business.',
    instructor: 'Amy Porterfield (Business Coach)',
    url: 'https://www.doterra.com/US/en/education/building-wellness-business',
    isExternal: true,
    highlights: ['Social media & content marketing', 'Building online presence & automation', 'Workshop exercises for Instagram, Facebook, Pinterest, X, and TikTok']
  }
];

export const educationArticles: EducationItem[] = [
  {
    id: '4',
    title: '🏺 Ancient Wisdom: Essential Oils Through History',
    type: 'article',
    duration: '8 min read',
    level: 'Beginner',
    description: 'Travel through history to see how essential oils supported health, spirituality, and daily living from ancient Egypt to today.',
    url: 'https://www.doterra.com/US/en/education/essential-oils-through-history',
    isExternal: true,
    highlights: ['Rituals and remedies', 'Timeless botanicals', 'Cross-cultural wisdom']
  }
];

export const certificationPrograms: EducationItem[] = [
  {
    id: 'cert-1',
    title: '🐾 Human & Pet Master Aromatherapy Certification',
    type: 'certification',
    duration: 'Online Course',
    level: 'Professional',
    description: 'Become a certified essential oil expert for both human and animal wellness.',
    instructor: 'Healthy Lifestyles Education Services',
    url: 'https://www.healthylifestyleseducationservices.com/aroma-alchemist-certification',
    isExternal: true,
    isCertification: true,
    highlights: ['Safe essential oil use for dogs, cats, horses, birds', 'Creating blends for energy, emotion, immunity, and home', 'Detailed guidance for holistic families', '**Certification included**']
  }
];

export const membershipPrograms: EducationItem[] = [
  {
    id: 'member-1',
    title: '🌱 Free Aroma Alchemist Membership',
    type: 'membership',
    duration: 'Ongoing library & support',
    level: 'Open to All',
    description: 'Unlock your own free member portal for ongoing recipes, safety charts, downloadable guides, and private Q&A threads with essential oil educators.',
    instructor: 'Healthy Lifestyles Education Services',
    url: 'https://www.healthylifestyleseducationservices.com/free-membership',
    isExternal: true,
    price: 'Always free',
    isMembership: true,
    highlights: ['Always free', 'New resources every month', 'For self-care, home, pet, and business']
  }
];