export interface RealProduct {
  id: string;
  name: string;
  category: string;
  description: string;
  benefits: string[];
  internalUse: boolean;
  recipe?: {
    ingredients: string[];
    instructions: string[];
  };
  url: string;
}

export const realProductCatalog: RealProduct[] = [
  {
    id: 'lemon-oil',
    name: 'Lemon Essential Oil',
    category: 'Longevity & Internal Use',
    description: 'Premium citrus oil for daily wellness and longevity support',
    benefits: ['Supports healthy metabolism', 'Natural detoxification', 'Immune system support', 'Antioxidant properties'],
    internalUse: true,
    recipe: {
      ingredients: ['2 drops Lemon oil', '8 oz purified water', '1 tsp raw honey'],
      instructions: ['Add lemon oil to water', 'Stir in honey', 'Drink first thing in morning', 'Use daily for longevity support']
    },
    url: 'https://www.doterra.com/US/en/p/lemon-oil'
  },
  {
    id: 'frankincense-oil',
    name: 'Frankincense Essential Oil',
    category: 'Longevity & Cellular Health',
    description: 'The king of oils for cellular health and longevity',
    benefits: ['Supports healthy cellular function', 'Promotes healthy aging', 'Supports immune function', 'Emotional balance'],
    internalUse: true,
    recipe: {
      ingredients: ['1 drop Frankincense oil', '1 tsp coconut oil', 'Empty veggie capsule'],
      instructions: ['Mix frankincense with coconut oil', 'Fill capsule with mixture', 'Take once daily with food', 'For cellular longevity support']
    },
    url: 'https://www.doterra.com/US/en/p/frankincense-oil'
  },
  {
    id: 'copaiba-oil',
    name: 'Copaiba Essential Oil',
    category: 'Longevity & Wellness',
    description: 'Natural support for healthy inflammatory response',
    benefits: ['Supports healthy inflammatory response', 'Promotes cardiovascular health', 'Supports nervous system', 'Antioxidant support'],
    internalUse: true,
    recipe: {
      ingredients: ['2 drops Copaiba oil', '1 drop Frankincense oil', '1 tsp olive oil'],
      instructions: ['Combine oils in small dish', 'Take under tongue', 'Hold for 30 seconds then swallow', 'Use twice daily for longevity']
    },
    url: 'https://www.doterra.com/US/en/p/copaiba-oil'
  },
  {
    id: 'oregano-oil',
    name: 'Oregano Essential Oil',
    category: 'Immune & Longevity',
    description: 'Powerful immune system support for preventative care',
    benefits: ['Powerful antioxidant support', 'Supports healthy immune function', 'Natural cleansing properties', 'Supports respiratory health'],
    internalUse: true,
    recipe: {
      ingredients: ['1 drop Oregano oil', '4 drops carrier oil', 'Empty veggie capsule'],
      instructions: ['Dilute oregano in carrier oil', 'Fill capsule with mixture', 'Take with meals', 'Use for immune longevity support']
    },
    url: 'https://www.doterra.com/US/en/p/oregano-oil'
  },
  {
    id: 'lifelong-vitality',
    name: 'Lifelong Vitality Pack',
    category: 'Complete Longevity System',
    description: 'Comprehensive nutritional program for lifelong wellness',
    benefits: ['Complete nutritional foundation', 'Cellular energy support', 'Antioxidant protection', 'Cardiovascular support'],
    internalUse: true,
    url: 'https://www.doterra.com/US/en/p/lifelong-vitality-pack'
  },
  {
    id: 'digestzen',
    name: 'DigestZen Digestive Blend',
    category: 'Digestive Longevity',
    description: 'Soothing blend for digestive health and comfort',
    benefits: ['Supports healthy digestion', 'Soothes stomach discomfort', 'Promotes digestive health', 'Supports gut wellness'],
    internalUse: true,
    recipe: {
      ingredients: ['2 drops DigestZen', '1 tsp coconut oil', 'Warm water'],
      instructions: ['Mix oils with coconut oil', 'Add to warm water', 'Drink after meals', 'For digestive longevity']
    },
    url: 'https://www.doterra.com/US/en/p/digestzen-digestive-blend'
  },
  {
    id: 'ddr-prime',
    name: 'DDR Prime Cellular Complex',
    category: 'Cellular Longevity',
    description: 'Proprietary blend for cellular health and longevity',
    benefits: ['Supports healthy cellular function', 'Antioxidant protection', 'Promotes cellular renewal', 'Supports DNA integrity'],
    internalUse: true,
    url: 'https://www.doterra.com/US/en/p/ddr-prime-cellular-complex'
  },
  {
    id: 'zendocrine',
    name: 'Zendocrine Detoxification Complex',
    category: 'Detox & Cleansing',
    description: 'Supports healthy cleansing and detoxification',
    benefits: ['Supports liver function', 'Promotes healthy detoxification', 'Supports kidney function', 'Cleansing support'],
    internalUse: true,
    url: 'https://www.doterra.com/US/en/p/zendocrine-detoxification-complex'
  },
  {
    id: 'terrazyme',
    name: 'TerraZyme Digestive Enzyme Complex',
    category: 'Digestive Support',
    description: 'Proprietary blend of enzymes for digestive health',
    benefits: ['Supports healthy digestion', 'Promotes nutrient absorption', 'Supports gut health', 'Digestive comfort'],
    internalUse: true,
    url: 'https://www.doterra.com/US/en/p/terrazyme-digestive-enzyme-complex'
  },
  {
    id: 'pbassist',
    name: 'PB Assist+ Probiotic Defense Formula',
    category: 'Gut Health',
    description: 'Proprietary formula with pre- and probiotics',
    benefits: ['Supports digestive health', 'Promotes gut microbiome', 'Immune system support', 'Digestive balance'],
    internalUse: true,
    url: 'https://www.doterra.com/US/en/p/pbassist-probiotic-defense-formula'
  }
];