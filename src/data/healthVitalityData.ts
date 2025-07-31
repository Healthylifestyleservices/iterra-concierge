export interface HealthProduct {
  id: string;
  name: string;
  category: string;
  description: string;
  benefits: string[];
  amazingFacts: string[];
  chakra: string;
  frequency: string;
  url: string;
}

export const healthVitalityData: HealthProduct[] = [
  {
    id: 'lifelong-vitality',
    name: 'Lifelong Vitality Pack',
    category: 'Daily Nutrition',
    description: 'Complete nutritional foundation for cellular health and energy',
    benefits: ['Cellular energy', 'Antioxidant protection', 'Cardiovascular support', 'Cognitive function'],
    amazingFacts: [
      'Contains 22 essential vitamins and minerals',
      'Provides omega-3 fatty acids for brain health',
      'Supports healthy aging at the cellular level',
      'Can increase energy levels by up to 40%'
    ],
    chakra: 'Solar Plexus - Personal Power',
    frequency: '528 Hz - Transformation',
    url: 'https://www.doterra.com/US/en/p/lifelong-vitality-pack'
  },
  {
    id: 'pbassist',
    name: 'PB Assist+ Probiotic',
    category: 'Digestive Health',
    description: 'Advanced probiotic formula for digestive and immune support',
    benefits: ['Digestive balance', 'Immune support', 'Nutrient absorption', 'Gut health'],
    amazingFacts: [
      'Contains 6 billion CFUs of beneficial bacteria',
      'Supports 70% of your immune system in the gut',
      'Improves nutrient absorption by up to 30%',
      'Balances mood through gut-brain connection'
    ],
    chakra: 'Solar Plexus - Digestive Fire',
    frequency: '528 Hz - Healing',
    url: 'https://www.doterra.com/US/en/p/pbassist-plus'
  },
  {
    id: 'copaiba-softgels',
    name: 'Copaiba Softgels',
    category: 'Natural Wellness',
    description: 'Powerful cannabinoids for nervous system support',
    benefits: ['Nervous system support', 'Cellular health', 'Antioxidant', 'Natural calm'],
    amazingFacts: [
      'Contains beta-caryophyllene, a natural cannabinoid',
      'Supports the endocannabinoid system naturally',
      'More potent than CBD in some studies',
      'Promotes cellular regeneration and repair'
    ],
    chakra: 'Root - Grounding & Stability',
    frequency: '396 Hz - Liberation',
    url: 'https://www.doterra.com/US/en/p/copaiba-softgels'
  },
  {
    id: 'trim-shake',
    name: 'TrimShake',
    category: 'Weight Management',
    description: 'Protein shake for healthy weight management and energy',
    benefits: ['Weight management', 'Protein nutrition', 'Energy boost', 'Muscle support'],
    amazingFacts: [
      'Contains 22g of plant-based protein per serving',
      'Includes fiber for satiety and digestive health',
      'Supports lean muscle mass development',
      'Can help reduce cravings for up to 4 hours'
    ],
    chakra: 'Solar Plexus - Metabolism',
    frequency: '528 Hz - Transformation',
    url: 'https://www.doterra.com/US/en/p/trimshake'
  }
];