export interface ComprehensiveProduct {
  id: string;
  name: string;
  category: string;
  type: 'essential-oil' | 'supplement' | 'topical' | 'wellness-system' | 'home';
  description: string;
  benefits: string[];
  internalUse: boolean;
  safetyNotes?: string[];
  complementaryProducts: string[];
  recipe?: {
    ingredients: string[];
    instructions: string[];
    usage: string;
  };
  url: string;
  price?: string;
  useCase?: string;
}

export const comprehensiveProductCatalog: ComprehensiveProduct[] = [
  {
    id: 'abode-multi-surface-cleaner',
    name: 'Abode Multi-Surface Cleaner',
    category: 'home',
    type: 'home',
    description: 'Plant-powered cleaner for every surface.',
    benefits: ['Safe for all surfaces', 'Plant-based formula', 'Non-toxic cleaning', 'Effective on grease and grime'],
    internalUse: false,
    complementaryProducts: ['lemon-oil', 'melaleuca-oil', 'on-guard-cleaner'],
    safetyNotes: ['For external use only', 'Keep out of reach of children'],
    url: 'https://www.doterra.com/US/en/p/abode-multi-surface-cleaner',
    price: '12.99',
    useCase: 'Kitchen, bathroom, countertops'
  },
  {
    id: 'lemon-oil',
    name: 'Lemon Essential Oil',
    category: 'Longevity & Internal Use',
    type: 'essential-oil',
    description: 'Premium citrus oil for daily wellness and longevity support',
    benefits: ['Supports healthy metabolism', 'Natural detoxification', 'Immune system support', 'Antioxidant properties'],
    internalUse: true,
    complementaryProducts: ['lifelong-vitality', 'terrazyme', 'pbassist'],
    recipe: {
      ingredients: ['2 drops Lemon oil', '8 oz purified water', '1 tsp raw honey', '1 TerraZyme capsule'],
      instructions: ['Add lemon oil to water', 'Stir in honey', 'Take with TerraZyme capsule', 'Drink first thing in morning'],
      usage: 'Daily morning protocol for metabolic longevity'
    },
    url: 'https://www.doterra.com/US/en/p/lemon-oil'
  },
  {
    id: 'frankincense-oil',
    name: 'Frankincense Essential Oil',
    category: 'Longevity & Cellular Health',
    type: 'essential-oil',
    description: 'The king of oils for cellular health and longevity',
    benefits: ['Supports healthy cellular function', 'Promotes healthy aging', 'Supports immune function', 'Emotional balance'],
    internalUse: true,
    complementaryProducts: ['ddr-prime', 'lifelong-vitality', 'copaiba-oil'],
    recipe: {
      ingredients: ['1 drop Frankincense oil', '1 DDR Prime softgel', '1 tsp coconut oil'],
      instructions: ['Take DDR Prime with breakfast', 'Mix frankincense with coconut oil', 'Take under tongue in evening'],
      usage: 'Complete cellular longevity protocol'
    },
    url: 'https://www.doterra.com/US/en/p/frankincense-oil'
  }];