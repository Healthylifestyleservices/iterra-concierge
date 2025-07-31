export interface BlendOil {
  name: string;
  ingredients: string;
  category: string;
  description?: string;
  keyBenefits?: string[];
  safetyNotes?: string;
}

export const dotTerraBlendsComplete: BlendOil[] = [
  // Digestive Support
  {
    name: "Digestive Comfort Blend (DigestZen)",
    ingredients: "Ginger, Peppermint, Caraway Seed, Fennel Seed, Coriander Seed, Anise Seed, Tarragon Plant",
    category: "🌱 Digestive Support",
    keyBenefits: ["Digestive comfort", "Soothing support", "Natural wellness"]
  },
  {
    name: "Tamer (Kids Digestive Blend)",
    ingredients: "Spearmint, Japanese Peppermint, Ginger, Black Pepper, Parsley Seed",
    category: "🌱 Digestive Support",
    keyBenefits: ["Gentle digestive support", "Kid-friendly", "Tummy comfort"]
  },
  
  // Calm, Sleep & Stress
  {
    name: "Restful Blend (Serenity)",
    ingredients: "Lavender, Cedarwood, Ho Wood, Ylang Ylang, Marjoram, Roman Chamomile, Vetiver, Vanilla Bean, Hawaiian Sandalwood",
    category: "🧘 Calm, Sleep & Stress",
    keyBenefits: ["Peaceful sleep", "Relaxation", "Stress relief"]
  },
  {
    name: "Peace (Reassuring Blend)",
    ingredients: "Vetiver Root, Lavender, Ylang Ylang, Frankincense Resin, Clary Sage Flower, Marjoram, Labdanum Resin, Peru Balsam",
    category: "🧘 Calm, Sleep & Stress",
    keyBenefits: ["Inner peace", "Emotional balance", "Reassuring comfort"]
  },
  {
    name: "Balance (Grounding Blend)",
    ingredients: "Spruce Leaf, Ho Wood, Frankincense Resin, Blue Tansy Flower, Blue Chamomile Flower, Osmanthus Harvested Flowers",
    category: "🧘 Calm, Sleep & Stress",
    keyBenefits: ["Grounding energy", "Emotional stability", "Centering support"]
  },
  
  // Mood, Uplift & Focus
  {
    name: "Uplifting Blend (Elevation)",
    ingredients: "Lavender Flower, Mandarin Orange Peel, Lemon Peel, Osmanthus Flower, Melissa Leaf",
    category: "😌 Mood, Uplift & Focus",
    keyBenefits: ["Mood enhancement", "Uplifting energy", "Positive outlook"]
  },
  {
    name: "Motivate (Encouraging Blend)",
    ingredients: "Peppermint Plant, Wild Orange Peel, Clementine Peel, Lemon Peel, Rosemary Leaf, Cardamom Seed, Basil Herb, Melissa Leaf/Stem",
    category: "😌 Mood, Uplift & Focus",
    keyBenefits: ["Motivation boost", "Mental clarity", "Encouraging energy"]
  },
  {
    name: "Cheer (Uplifting Blend)",
    ingredients: "Wild Orange Peel, Clove Bud, Star Anise Fruit, Lemon Myrtle Leaf, Nutmeg Kernel, Vanilla Bean Extract, Ginger Root, Cinnamon Bark, Zdravetz (Geranium)",
    category: "😌 Mood, Uplift & Focus",
    keyBenefits: ["Joyful energy", "Cheerful mood", "Warm comfort"]
  }];