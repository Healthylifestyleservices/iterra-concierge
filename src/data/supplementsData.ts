export interface Supplement {
  id: string;
  name: string;
  category: string;
  description: string;
  keyBenefits: string[];
  healthImpact: string;
  amazingFacts: string[];
  usage: string;
  url: string;
}

export const supplementsData: Supplement[] = [
  {
    id: 'lifelong-vitality',
    name: 'Lifelong Vitality Pack',
    category: 'Complete Wellness Foundation',
    description: 'Revolutionary nutritional program combining essential nutrients, metabolic factors, and powerful antioxidants',
    keyBenefits: [
      'Supports healthy energy metabolism',
      'Promotes cardiovascular health',
      'Supports healthy immune function',
      'Protects against oxidative stress',
      'Supports healthy brain function',
      'Promotes bone health and density'
    ],
    healthImpact: 'Transform your cellular health at the foundation level. This comprehensive system provides your body with the essential building blocks for optimal function, helping you feel energized, focused, and vibrant every day.',
    amazingFacts: [
      'Contains over 20 essential vitamins and minerals in bioavailable forms',
      'Includes omega-3 fatty acids from sustainable marine sources',
      'Features a proprietary blend of botanical extracts for cellular protection',
      'Clinically studied ingredients for maximum absorption and effectiveness'
    ],
    usage: 'Take 2 Alpha CRS+, 2 xEO Mega, and 2 Microplex VMz capsules with breakfast and dinner',
    url: 'https://www.doterra.com/US/en/p/lifelong-vitality-pack'
  },
  {
    id: 'trim-shake',
    name: 'TrimShake',
    category: 'Weight Management',
    description: 'Delicious protein shake designed to help you achieve and maintain a healthy weight',
    keyBenefits: [
      'Supports healthy weight management',
      'Provides sustained energy',
      'Promotes lean muscle development',
      'Supports healthy metabolism',
      'Satisfies hunger naturally',
      'Supports digestive health'
    ],
    healthImpact: 'Achieve your ideal weight while nourishing your body with high-quality protein and essential nutrients. Feel satisfied, energized, and confident in your wellness journey.',
    amazingFacts: [
      'Contains 20g of high-quality whey and pea protein per serving',
      'Includes prebiotic fiber to support digestive health',
      'Naturally sweetened with stevia and monk fruit',
      'Available in chocolate and vanilla flavors that taste amazing'
    ],
    usage: 'Mix 1 scoop with 8-10 oz of water or milk substitute. Enjoy as meal replacement or post-workout nutrition',
    url: 'https://www.doterra.com/US/en/p/trimshake'
  },
  {
    id: 'ddr-prime',
    name: 'DDR Prime Softgels',
    category: 'Cellular Protection',
    description: 'Proprietary blend of essential oils and natural compounds that support healthy cellular integrity',
    keyBenefits: [
      'Supports healthy cellular function',
      'Promotes DNA integrity',
      'Provides antioxidant protection',
      'Supports healthy aging process',
      'Promotes cellular renewal',
      'Supports immune system function'
    ],
    healthImpact: 'Protect and renew your cells at the most fundamental level. Support your body\'s natural ability to maintain healthy cellular function and promote longevity from within.',
    amazingFacts: [
      'Contains frankincense, wild orange, lemongrass, thyme, and summer savory essential oils',
      'Includes natural compounds like resveratrol and baicalin',
      'Formulated to support the body\'s natural cellular repair processes',
      'Convenient softgel delivery system for optimal absorption'
    ],
    usage: 'Take 1 softgel daily with food to support cellular health and longevity',
    url: 'https://www.doterra.com/US/en/p/ddr-prime-softgels'
  },
  {
    id: 'deep-blue-polyphenol',
    name: 'Deep Blue Polyphenol Complex',
    category: 'Recovery & Comfort',
    description: 'Powerful blend of polyphenols and essential oils to support a healthy response to inflammation',
    keyBenefits: [
      'Supports healthy inflammatory response',
      'Promotes joint comfort and mobility',
      'Provides antioxidant support',
      'Supports exercise recovery',
      'Promotes healthy circulation',
      'Supports overall comfort'
    ],
    healthImpact: 'Experience freedom of movement and comfort in your daily activities. Support your body\'s natural recovery processes and maintain an active, vibrant lifestyle.',
    amazingFacts: [
      'Contains polyphenols from frankincense, turmeric, tart cherry, and green tea',
      'Includes ginger and wintergreen essential oils for additional support',
      'Clinically studied ingredients for inflammation response',
      'Vegetarian-friendly capsules for easy daily use'
    ],
    usage: 'Take 1-2 capsules daily with food, or as needed for additional comfort support',
    url: 'https://www.doterra.com/US/en/p/deep-blue-polyphenol-complex'
  },
  {
    id: 'pbassist',
    name: 'PB Assist+ Probiotic',
    category: 'Digestive Health',
    description: 'Proprietary formula with pre- and probiotics designed to support digestive health and immune function',
    keyBenefits: [
      'Supports digestive health',
      'Promotes healthy gut microbiome',
      'Supports immune system function',
      'Aids nutrient absorption',
      'Promotes digestive comfort',
      'Supports overall wellness'
    ],
    healthImpact: 'Transform your digestive health and boost your immunity from within. A healthy gut is the foundation of overall wellness, energy, and vitality.',
    amazingFacts: [
      'Contains 6 strains of beneficial bacteria with 6 billion CFUs',
      'Includes prebiotic fiber to feed beneficial bacteria',
      'Double-encapsulated for maximum survival and effectiveness',
      'Shelf-stable formula requires no refrigeration'
    ],
    usage: 'Take 1 capsule daily with food. For intensive support, take up to 3 capsules daily',
    url: 'https://www.doterra.com/US/en/p/pbassist-probiotic-defense-formula'
  },
  {
    id: 'terrazyme',
    name: 'TerraZyme Digestive Enzyme',
    category: 'Digestive Support',
    description: 'Proprietary blend of active whole-food enzymes and supporting cofactors for optimal digestion',
    keyBenefits: [
      'Supports healthy digestion',
      'Promotes nutrient absorption',
      'Reduces digestive discomfort',
      'Supports gut health',
      'Enhances energy from food',
      'Promotes digestive comfort'
    ],
    healthImpact: 'Unlock the full nutritional potential of your food. Experience better digestion, increased energy, and improved overall wellness through optimal nutrient absorption.',
    amazingFacts: [
      'Contains 10 different enzymes for comprehensive digestive support',
      'Includes whole-food enzymes from pineapple and papaya',
      'Features supporting cofactors for enhanced enzyme activity',
      'Helps break down proteins, carbohydrates, and fats efficiently'
    ],
    usage: 'Take 1-3 capsules with meals to support healthy digestion and nutrient absorption',
    url: 'https://www.doterra.com/US/en/p/terrazyme-digestive-enzyme-complex'
  }
];