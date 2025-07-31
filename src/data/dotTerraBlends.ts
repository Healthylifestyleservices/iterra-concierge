export interface BlendOil {
  name: string;
  ingredients: string;
  category: string;
  description?: string;
  keyBenefits?: string[];
  safetyNotes?: string;
  productLink?: string;
}

export const dotTerraBlends: BlendOil[] = [
  // Immune Support & Protection
  {
    name: "Protective Blend (On Guard)",
    ingredients: "Wild Orange, Clove Bud, Cinnamon Bark, Eucalyptus Leaf, Rosemary Leaf/Flower",
    category: "🛡️ Immune Support & Protection",
    keyBenefits: ["Immune system support", "Natural cleansing", "Seasonal protection"],
    productLink: "https://www.doterra.com/US/en/p/on-guard-protective-blend"
  },
  {
    name: "Stronger (Kids Defense)",
    ingredients: "Cedarwood, Litsea, Frankincense, Rose",
    category: "🛡️ Immune Support & Protection",
    keyBenefits: ["Gentle immune support", "Kid-safe formula", "Calming protection"],
    productLink: "https://www.doterra.com/US/en/p/stronger-protective-blend"
  },
  
  // Respiratory & Airway Support
  {
    name: "Airway Blend (Breathe)",
    ingredients: "Laurel Leaf, Peppermint, Eucalyptus Leaf, Melaleuca (Tea Tree) Leaf, Lemon, Cardamom, Ravintsara, Ravensara",
    category: "💨 Respiratory & Airway Support",
    keyBenefits: ["Clear breathing", "Respiratory comfort", "Seasonal support"],
    productLink: "https://www.doterra.com/US/en/p/breathe-respiratory-blend"
  },
  {
    name: "Rescuer (Kids Muscle Blend)",
    ingredients: "Copaiba, Lavender, Spearmint, Zanthoxylum (Plant)",
    category: "💨 Respiratory & Airway Support",
    keyBenefits: ["Soothing comfort", "Kid-friendly", "Gentle relief"],
    productLink: "https://www.doterra.com/US/en/p/rescuer-soothing-blend"
  },
  {
    name: "Steady (Kids Grounding)",
    ingredients: "Amyris, Balsam Fir, Coriander, Magnolia",
    category: "💨 Respiratory & Airway Support",
    keyBenefits: ["Grounding support", "Emotional balance", "Calming blend"],
    productLink: "https://www.doterra.com/US/en/p/steady-grounding-blend"
  },
  
  // Cleansing & Cleaning
  {
    name: "Purifying Blend (Purify)",
    ingredients: "Lemon Peel, Lime Peel, Siberian Fir Needle, Austrian Fir Needle, Pine Needle, Citronella Herb, Melaleuca (Tea Tree) Leaf, Cilantro Herb",
    category: "💧 Cleansing & Cleaning",
    keyBenefits: ["Air purification", "Surface cleaning", "Fresh atmosphere"],
    productLink: "https://www.doterra.com/US/en/p/purify-cleansing-blend"
  },
  {
    name: "Refreshing Blend",
    ingredients: "Lemon, Lime, Peppermint, Ginger, Spearmint, Melissa",
    category: "💧 Cleansing & Cleaning",
    keyBenefits: ["Refreshing aroma", "Energizing blend", "Uplifting scent"],
    productLink: "https://www.doterra.com/US/en/p/refreshing-blend"
  },
  
  // Digestive Support
  {
    name: "Digestive Comfort Blend (DigestZen)",
    ingredients: "Ginger, Peppermint, Caraway Seed, Fennel Seed, Coriander Seed, Anise Seed, Tarragon Plant",
    category: "🌱 Digestive Support",
    keyBenefits: ["Digestive comfort", "Stomach soothing", "After-meal support"],
    productLink: "https://www.doterra.com/US/en/p/digestzen-digestive-blend"
  },
  {
    name: "Tamer (Kids Digestive Blend)",
    ingredients: "Spearmint, Japanese Peppermint, Ginger, Black Pepper, Parsley Seed",
    category: "🌱 Digestive Support",
    keyBenefits: ["Gentle digestive support", "Kid-safe formula", "Tummy comfort"],
    productLink: "https://www.doterra.com/US/en/p/tamer-digestive-blend"
  },
  
  // Calm, Sleep & Stress
  {
    name: "Restful Blend (Serenity)",
    ingredients: "Lavender, Cedarwood, Ho Wood, Ylang Ylang, Marjoram, Roman Chamomile, Vetiver, Vanilla Bean, Hawaiian Sandalwood",
    category: "🧘 Calm, Sleep & Stress",
    keyBenefits: ["Restful sleep", "Calming atmosphere", "Stress relief"],
    productLink: "https://www.doterra.com/US/en/p/serenity-restful-blend"
  },
  {
    name: "Peace (Reassuring Blend)",
    ingredients: "Vetiver Root, Lavender, Ylang Ylang, Frankincense Resin, Clary Sage Flower, Marjoram, Labdanum Resin, Peru Balsam",
    category: "🧘 Calm, Sleep & Stress",
    keyBenefits: ["Emotional peace", "Reassuring comfort", "Anxiety relief"],
    productLink: "https://www.doterra.com/US/en/p/peace-reassuring-blend"
  }];

export const blendCategories = [
  "🛡️ Immune Support & Protection",
  "💨 Respiratory & Airway Support",
  "💧 Cleansing & Cleaning",
  "🌱 Digestive Support",
  "🧘 Calm, Sleep & Stress",
  "😌 Mood, Uplift & Focus",
  "💪 Muscle, Joint & Recovery",
  "💗 Hormone, Women's & Life Cycles",
  "💦 Detox, Weight, & Metabolic",
  "🥗 Internal Wellness & Supplements",
  "👶 Kids' Collection",
  "🧴 Beauty, Skin, & Spa",
  "🦷 Oral Care",
  "🏡 Cleaning Blends",
  "💧 Hydration & Refreshment",
  "🧘 Spiritual/Emotion Support"
];