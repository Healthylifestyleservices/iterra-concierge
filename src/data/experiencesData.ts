export interface Experience {
  id: number;
  title: string;
  category: string;
  description: string;
  products: string[];
  duration: string;
  icon: string;
  gradient: string;
  education: string;
  meditations?: Meditation[];
  recipes: Recipe[];
  membershipTier?: string;
}

export interface Meditation {
  id: string;
  title: string;
  duration: string;
  description: string;
  oilPairings: string[];
  audioUrl?: string;
  price: string;
  category: string;
}

export interface Recipe {
  title: string;
  ingredients: string[];
  instructions: string;
  time: string;
  serves: string;
  difficulty: 'Easy' | 'Intermediate' | 'Advanced';
  category: string;
}

export const meditations: Meditation[] = [
  {
    id: 'bathing-forest',
    title: 'Bathing in the Forest',
    duration: '15 minutes',
    description: 'Immerse yourself in the healing energy of ancient trees with grounding essential oils.',
    oilPairings: ['Cedarwood', 'Pine', 'Frankincense', 'Vetiver'],
    price: '$12.99',
    category: 'Nature'
  },
  {
    id: 'lavender-fields',
    title: 'Lavender Fields',
    duration: '20 minutes',
    description: 'Journey through endless purple fields with calming lavender aromatherapy.',
    oilPairings: ['Lavender', 'Bergamot', 'Roman Chamomile'],
    price: '$14.99',
    category: 'Relaxation'
  },
  {
    id: 'terras-whisper',
    title: "Terra's Whisper",
    duration: '18 minutes',
    description: 'Connect with Earth\'s ancient wisdom through grounding meditation.',
    oilPairings: ['Sandalwood', 'Patchouli', 'Myrrh', 'Cedarwood'],
    price: '$13.99',
    category: 'Grounding'
  },
  {
    id: 'peppermint-dreams',
    title: 'Peppermint Dreams',
    duration: '12 minutes',
    description: 'Awaken your senses and clarity with invigorating peppermint energy.',
    oilPairings: ['Peppermint', 'Eucalyptus', 'Rosemary', 'Lemon'],
    price: '$11.99',
    category: 'Energy'
  },
  {
    id: 'resin-amber-time',
    title: 'Resin of Amber and Time',
    duration: '25 minutes',
    description: 'Travel through ancient wisdom with sacred resin aromatherapy.',
    oilPairings: ['Frankincense', 'Myrrh', 'Copal', 'Benzoin'],
    price: '$16.99',
    category: 'Spiritual'
  }
];

export const sleepExperience: Experience = {
  id: 5,
  title: "Deep Sleep Sanctuary",
  category: 'sleep',
  description: 'Complete sleep wellness with products, meditations, and bedtime rituals',
  products: [
    'Lavender Essential Oil',
    'Serenity Blend',
    'Roman Chamomile Oil',
    'Sleep Support Capsules',
    'Pillow Spray',
    'Silk Sleep Mask',
    'Aromatherapy Diffuser'
  ],
  duration: '30 days',
  icon: 'Moon',
  gradient: 'from-indigo-500 to-purple-600',
  education: 'Quality sleep is essential for physical and mental restoration.',
  meditations: [
    meditations.find(m => m.id === 'lavender-fields')!,
    meditations.find(m => m.id === 'terras-whisper')!
  ],
  recipes: [
    {
      title: 'Bedtime Pillow Spray',
      ingredients: ['5 drops Lavender oil', '3 drops Roman Chamomile', '2 oz Distilled water', '1 tsp Witch hazel'],
      instructions: 'Mix in spray bottle, shake well, spray on pillow 10 minutes before sleep.',
      time: '3 minutes',
      serves: '60 sprays',
      difficulty: 'Easy',
      category: 'Sleep'
    },
    {
      title: 'Sleep Sanctuary Diffuser Blend',
      ingredients: ['4 drops Serenity blend', '2 drops Lavender', '1 drop Roman Chamomile'],
      instructions: 'Add to diffuser 30 minutes before bedtime.',
      time: '1 minute',
      serves: '8 hours',
      difficulty: 'Easy',
      category: 'Sleep'
    }
  ],
  membershipTier: 'Premium'
};

export const summerFunExperience: Experience = {
  id: 6,
  title: "Summer Fun Adventure",
  category: 'summer-fun',
  description: 'Complete summer wellness with sun protection, cooling products, and outdoor recipes',
  products: [
    'Peppermint Essential Oil',
    'Eucalyptus Oil',
    'Natural Sunscreen SPF 30',
    'After-Sun Aloe Gel',
    'Insect Repellent Spray',
    'Cooling Towels',
    'Hydration Electrolytes'
  ],
  duration: '3 months',
  icon: 'Sun',
  gradient: 'from-orange-400 to-yellow-500',
  education: 'Natural sun protection and cooling remedies for safe summer fun.',
  meditations: [
    meditations.find(m => m.id === 'peppermint-dreams')!
  ],
  recipes: [
    {
      title: 'Dog Bandana Cooling Spray',
      ingredients: ['3 drops Peppermint oil', '2 drops Eucalyptus', '8 oz Water', '1 tbsp Aloe vera'],
      instructions: 'Mix ingredients, spray on bandana, let dog wear for cooling relief.',
      time: '2 minutes',
      serves: '20 applications',
      difficulty: 'Easy',
      category: 'Pet Care'
    },
    {
      title: 'Refreshing Summer Drink',
      ingredients: ['2 drops Lemon oil', '1 drop Peppermint oil', '16 oz Cold water', '1 tbsp Honey', 'Ice cubes'],
      instructions: 'Mix oils with honey first, add to water, serve over ice.',
      time: '3 minutes',
      serves: '2 glasses',
      difficulty: 'Easy',
      category: 'Beverages'
    },
    {
      title: 'Natural After-Sun Soother',
      ingredients: ['3 drops Lavender oil', '2 drops Peppermint oil', '1/4 cup Aloe vera gel', '1 tbsp Coconut oil'],
      instructions: 'Blend ingredients, apply to sun-exposed skin for cooling relief.',
      time: '5 minutes',
      serves: '10 applications',
      difficulty: 'Easy',
      category: 'Skin Care'
    }
  ],
  membershipTier: 'Standard'
};