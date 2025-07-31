export interface OilCollection {
  id: string;
  name: string;
  category: string;
  description: string;
  benefits: string[];
  chakra: string;
  frequency: string;
  oils: {
    name: string;
    scientificName: string;
    keyBenefits: string[];
    chakra: string;
    frequency: string;
    url: string;
  }[];
}

export const oilCollectionsData: OilCollection[] = [
  {
    id: 'citrus',
    name: '🍊 Citrus Collection',
    category: 'Joy & Energy',
    description: '🌞 Uplifting, energizing oils that boost mood and vitality with bright, zesty aromas that awaken your senses! ✨',
    benefits: ['🌟 Mood enhancement', '⚡ Energy boost', '🧠 Mental clarity', '🛡️ Immune support'],
    chakra: 'Solar Plexus (Manipura)',
    frequency: '528 Hz - Love & Transformation',
    oils: [
      {
        name: '🍋 Lemon',
        scientificName: 'Citrus limon',
        keyBenefits: ['✨ Cleansing', '⚡ Energy boost', '🎯 Focus'],
        chakra: 'Solar Plexus',
        frequency: '528 Hz',
        url: 'https://www.doterra.com/US/en/p/lemon-oil'
      },
      {
        name: '🍊 Sweet Orange',
        scientificName: 'Citrus sinensis',
        keyBenefits: ['😊 Joy', '🎨 Creativity', '😌 Stress relief'],
        chakra: 'Sacral',
        frequency: '417 Hz',
        url: 'https://www.doterra.com/US/en/p/wild-orange-oil'
      },
      {
        name: '🍇 Grapefruit',
        scientificName: 'Citrus paradisi',
        keyBenefits: ['🔥 Metabolism', '🌈 Mood lift', '🧹 Purifying'],
        chakra: 'Solar Plexus',
        frequency: '528 Hz',
        url: 'https://www.doterra.com/US/en/p/grapefruit-oil'
      },
      {
        name: '🌿 Bergamot',
        scientificName: 'Citrus bergamia',
        keyBenefits: ['💪 Confidence', '🧘 Stress relief', '✨ Skin health'],
        chakra: 'Heart',
        frequency: '639 Hz',
        url: 'https://www.doterra.com/US/en/p/bergamot-oil'
      },
      {
        name: '🍃 Lime',
        scientificName: 'Citrus aurantifolia',
        keyBenefits: ['🌟 Revitalizing', '🧠 Mental clarity', '🌿 Refreshing'],
        chakra: 'Throat',
        frequency: '741 Hz',
        url: 'https://www.doterra.com/US/en/p/lime-oil'
      },
      {
        name: '🌸 Tangerine',
        scientificName: 'Citrus reticulata',
        keyBenefits: ['😴 Calming', '🌙 Sleep support', '👶 Kid-friendly'],
        chakra: 'Sacral',
        frequency: '417 Hz',
        url: 'https://www.doterra.com/US/en/p/tangerine-oil'
      }
    ]
  },
  {
    id: 'floral',
    name: '🌸 Floral Collection',
    category: 'Love & Beauty',
    description: '💖 Delicate, feminine oils that promote emotional balance and self-love with enchanting floral bouquets! 🌺',
    benefits: ['💕 Emotional harmony', '🥰 Self-love', '✨ Skin rejuvenation', '💖 Heart opening'],
    chakra: 'Heart (Anahata)',
    frequency: '639 Hz - Love & Relationships',
    oils: [
      {
        name: '💜 Lavender',
        scientificName: 'Lavandula angustifolia',
        keyBenefits: ['😌 Calming', '😴 Sleep support', '🩹 Skin healing'],
        chakra: 'Crown',
        frequency: '963 Hz',
        url: 'https://www.doterra.com/US/en/p/lavender-oil'
      },
      {
        name: '🌹 Rose',
        scientificName: 'Rosa damascena',
        keyBenefits: ['💕 Unconditional love', '⏰ Anti-aging', '💖 Emotional healing'],
        chakra: 'Heart',
        frequency: '639 Hz',
        url: 'https://www.doterra.com/US/en/p/rose-oil'
      },
      {
        name: '🌺 Geranium',
        scientificName: 'Pelargonium graveolens',
        keyBenefits: ['⚖️ Hormone balance', '🧘‍♀️ Emotional stability', '✨ Skin health'],
        chakra: 'Heart',
        frequency: '639 Hz',
        url: 'https://www.doterra.com/US/en/p/geranium-oil'
      },
      {
        name: '🌼 Ylang Ylang',
        scientificName: 'Cananga odorata',
        keyBenefits: ['💃 Sensuality', '💪 Confidence', '💇‍♀️ Hair health'],
        chakra: 'Sacral',
        frequency: '417 Hz',
        url: 'https://www.doterra.com/US/en/p/ylang-ylang-oil'
      }
    ]
  }
];