export interface OilProfile {
  name: string;
  scientificName: string;
  maskedProductName: string;
  benefits: string[];
  chakras?: {
    primary: string;
    secondary?: string[];
    description: string;
  };
  frequency?: {
    hz: number;
    description: string;
  };
  petSafety: {
    safe: boolean;
    notes: string;
  };
  recipes: {
    name: string;
    ingredients: string[];
    instructions: string;
  }[];
  history: string;
  education: string;
  luxuryFact: string;
  productLink: string;
}

export const oilDatabase: Record<string, OilProfile> = {
  lavender: {
    name: 'Lavender',
    scientificName: 'Lavandula angustifolia',
    maskedProductName: 'Peaceful Dreams Essence',
    benefits: [
      'Promotes deep, restful sleep',
      'Calms nervous tension and anxiety',
      'Soothes minor skin irritations',
      'Supports emotional balance',
      'Natural antiseptic properties'
    ],
    chakras: {
      primary: 'Crown Chakra (Sahasrara)',
      secondary: ['Third Eye Chakra (Ajna)', 'Heart Chakra (Anahata)'],
      description: 'Lavender resonates with the Crown chakra, promoting spiritual connection and divine consciousness. It also supports the Third Eye for intuition and the Heart for emotional healing.'
    },
    frequency: {
      hz: 528,
      description: 'Known as the "Love Frequency" or "Miracle Tone," 528 Hz promotes healing, DNA repair, and transformation. Lavender naturally resonates with this frequency of love and restoration.'
    },
    petSafety: {
      safe: true,
      notes: 'Generally safe for dogs when properly diluted. Avoid with cats unless under veterinary guidance.'
    },
    recipes: [
      {
        name: 'Bedtime Bliss Diffuser Blend',
        ingredients: ['3 drops Lavender', '2 drops Roman Chamomile', '1 drop Bergamot'],
        instructions: 'Add to diffuser 30 minutes before bedtime for ultimate relaxation.'
      },
      {
        name: 'Calming Bath Soak',
        ingredients: ['4 drops Lavender', '1 cup Epsom salt', '2 tbsp carrier oil'],
        instructions: 'Mix oils with salt, add to warm bath water, and soak for 15-20 minutes.'
      }
    ],
    history: 'Lavender has been treasured for over 2,500 years, from ancient Egyptian mummification to Roman baths. The name derives from the Latin "lavare" meaning "to wash," as Romans used it to scent their bathwater.',
    education: 'Lavender contains linalool and linalyl acetate, compounds that interact with neurotransmitters to promote relaxation. Studies show it can reduce cortisol levels and improve sleep quality.',
    luxuryFact: 'French lavender fields in Provence produce the world\'s finest essential oil, harvested at dawn when oil concentration peaks. Each bottle requires 150 lavender flowers.',
    productLink: 'https://www.doterra.com/US/en/p/lavender-oil'
  },
  peppermint: {
    name: 'Peppermint',
    scientificName: 'Mentha piperita',
    maskedProductName: 'Cool Mint Vitality',
    benefits: [
      'Enhances mental clarity and focus',
      'Provides natural cooling sensation',
      'Supports digestive comfort',
      'Relieves tension headaches',
      'Boosts energy naturally'
    ],
    chakras: {
      primary: 'Throat Chakra (Vishuddha)',
      secondary: ['Solar Plexus Chakra (Manipura)'],
      description: 'Peppermint activates the Throat chakra for clear communication and self-expression, while energizing the Solar Plexus for personal power and confidence.'
    },
    frequency: {
      hz: 741,
      description: 'The frequency of awakening intuition and cleansing. 741 Hz helps remove toxins and electromagnetic radiation while promoting mental clarity and problem-solving.'
    },
    petSafety: {
      safe: false,
      notes: 'Not safe for cats or small dogs. Can be overwhelming for pets - use with extreme caution and proper ventilation.'
    },
    recipes: [
      {
        name: 'Focus & Energy Inhaler',
        ingredients: ['5 drops Peppermint', '3 drops Rosemary', '2 drops Lemon'],
        instructions: 'Add to personal inhaler or tissue. Inhale deeply when needing mental clarity.'
      }
    ],
    history: 'Ancient Egyptians, Greeks, and Romans valued peppermint for digestive health. Medieval monasteries cultivated it as a medicinal herb.',
    education: 'Menthol activates cold-sensitive receptors while blocking sodium channels, creating cooling sensation and analgesic effects.',
    luxuryFact: 'Premium peppermint oil requires specific soil conditions. The finest comes from the Pacific Northwest volcanic soil.',
    productLink: 'https://www.doterra.com/US/en/p/peppermint-oil'
  }
};