export interface SingleOil {
  name: string;
  botanicalName: string;
  benefits: string[];
  chakra: string;
  frequency: string;
  kidSafe: string;
  petSafe: string;
  tags: string[];
  url: string;
}

export interface OilCategory {
  name: string;
  emoji: string;
  description: string;
  chakra: string;
  frequency: string;
  oils: SingleOil[];
}

export const singleOilsDatabase: OilCategory[] = [
  {
    name: "Citrus Collection",
    emoji: "🍊",
    description: "Uplifting, mood-boosting, metabolic, cleansing",
    chakra: "Solar Plexus/Sacral",
    frequency: "417–528 Hz",
    oils: [
      {
        name: "Lemon",
        botanicalName: "Citrus limon",
        benefits: ["Cleansing", "Energy", "Focus", "Detox", "Immune"],
        chakra: "Solar Plexus",
        frequency: "528 Hz",
        kidSafe: "Yes (dilute)",
        petSafe: "Dogs yes, cats no",
        tags: ["Cleaning", "Immunity", "Mood", "Weight Loss", "On-the-Go"],
        url: "https://www.doterra.com/US/en/p/lemon-oil"
      },
      {
        name: "Wild Orange",
        botanicalName: "Citrus sinensis",
        benefits: ["Joy", "Creativity", "Stress", "Immunity"],
        chakra: "Sacral",
        frequency: "417 Hz",
        kidSafe: "Yes (dilute)",
        petSafe: "Dogs yes, cats caution",
        tags: ["Stress Relief", "Immunity", "Cleaning", "Sleep", "On-the-Go"],
        url: "https://www.doterra.com/US/en/p/wild-orange-oil"
      },
      {
        name: "Grapefruit",
        botanicalName: "Citrus paradisi",
        benefits: ["Metabolism", "Mood", "Purifying"],
        chakra: "Solar Plexus",
        frequency: "528 Hz",
        kidSafe: "Yes (dilute)",
        petSafe: "Caution",
        tags: ["Weight Loss", "Detox", "Mood", "Cleaning"],
        url: "https://www.doterra.com/US/en/p/grapefruit-oil"
      },
      {
        name: "Bergamot",
        botanicalName: "Citrus bergamia",
        benefits: ["Confidence", "Stress", "Skin health"],
        chakra: "Heart",
        frequency: "528 Hz",
        kidSafe: "Over 6 (diluted)",
        petSafe: "Caution",
        tags: ["Mood", "Stress", "Skin"],
        url: "https://www.doterra.com/US/en/p/bergamot-oil"
      },
      {
        name: "Lime",
        botanicalName: "Citrus aurantifolia",
        benefits: ["Revitalizing", "Clarity", "Refreshing"],
        chakra: "Solar Plexus",
        frequency: "528 Hz",
        kidSafe: "Yes (dilute)",
        petSafe: "Dogs yes",
        tags: ["Cleansing", "Energy", "Mood"],
        url: "https://www.doterra.com/US/en/p/lime-oil"
      },
      {
        name: "Tangerine",
        botanicalName: "Citrus reticulata",
        benefits: ["Calm", "Mood", "Sleep"],
        chakra: "Sacral",
        frequency: "417 Hz",
        kidSafe: "Yes, gentle",
        petSafe: "Dogs yes",
        tags: ["Sleep", "Mood", "On-the-Go", "Kids"],
        url: "https://www.doterra.com/US/en/p/tangerine-oil"
      }
    ]
  },
  {
    name: "Floral Collection",
    emoji: "🌸",
    description: "Calming, hormone, skin, emotional support",
    chakra: "Heart/Crown/Sacral",
    frequency: "417–963 Hz",
    oils: [
      {
        name: "Lavender",
        botanicalName: "Lavandula angustifolia",
        benefits: ["Calm", "Sleep", "Skin"],
        chakra: "Crown",
        frequency: "963 Hz",
        kidSafe: "Yes, dilute",
        petSafe: "Yes",
        tags: ["Sleep", "Stress", "Beauty", "Kids", "Pets"],
        url: "https://www.doterra.com/US/en/p/lavender-oil"
      },
      {
        name: "Roman Chamomile",
        botanicalName: "Chamaemelum nobile",
        benefits: ["Sleep", "Calm", "Skin"],
        chakra: "Heart",
        frequency: "528 Hz",
        kidSafe: "Yes, gentle",
        petSafe: "Yes",
        tags: ["Sleep", "Kids", "Stress", "Pets"],
        url: "https://www.doterra.com/US/en/p/roman-chamomile-oil"
      },
      {
        name: "Geranium",
        botanicalName: "Pelargonium graveolens",
        benefits: ["Hormones", "Emotions", "Skin"],
        chakra: "Sacral",
        frequency: "417 Hz",
        kidSafe: "Yes (dilute)",
        petSafe: "Yes",
        tags: ["Hormones", "Skin", "Mood", "Detox"],
        url: "https://www.doterra.com/US/en/p/geranium-oil"
      },
      {
        name: "Rose",
        botanicalName: "Rosa damascena",
        benefits: ["Love", "Skin", "Mood"],
        chakra: "Heart",
        frequency: "528 Hz",
        kidSafe: "12+ (diluted)",
        petSafe: "Caution",
        tags: ["Beauty", "Mood", "Hormones"],
        url: "https://www.doterra.com/US/en/p/rose-oil"
      }
    ]
  },
  {
    name: "Minty Collection",
    emoji: "🧠",
    description: "Focus, breath, digestion, energy",
    chakra: "Throat/Third Eye/Root",
    frequency: "396–852 Hz",
    oils: [
      {
        name: "Peppermint",
        botanicalName: "Mentha piperita",
        benefits: ["Alert", "Breath", "Digestion"],
        chakra: "Throat",
        frequency: "741 Hz",
        kidSafe: "6+ (diluted)",
        petSafe: "Caution",
        tags: ["Focus", "Energy", "Digestion", "Cleaning"],
        url: "https://www.doterra.com/US/en/p/peppermint-oil"
      },
      {
        name: "Spearmint",
        botanicalName: "Mentha spicata",
        benefits: ["Focus", "Digestion", "Uplift"],
        chakra: "Throat",
        frequency: "741 Hz",
        kidSafe: "Dilute",
        petSafe: "Caution",
        tags: ["Digestion", "Focus"],
        url: "https://www.doterra.com/US/en/p/spearmint-oil"
      }
    ]
  },
  {
    name: "Woody/Tree Collection",
    emoji: "🌲",
    description: "Grounding, stability, meditation, skin",
    chakra: "Root/Heart/Crown",
    frequency: "396–963 Hz",
    oils: [
      {
        name: "Frankincense",
        botanicalName: "Boswellia carterii",
        benefits: ["Cell health", "Meditation", "Skin"],
        chakra: "Crown",
        frequency: "963 Hz",
        kidSafe: "Dilute",
        petSafe: "Yes",
        tags: ["Meditation", "Beauty"],
        url: "https://www.doterra.com/US/en/p/frankincense-oil"
      },
      {
        name: "Cedarwood",
        botanicalName: "Juniperus virginiana",
        benefits: ["Ground", "Hair", "Focus"],
        chakra: "Root",
        frequency: "396 Hz",
        kidSafe: "Yes (dilute)",
        petSafe: "Yes",
        tags: ["Hair", "Focus", "Sleep"],
        url: "https://www.doterra.com/US/en/p/cedarwood-oil"
      }
    ]
  }
];