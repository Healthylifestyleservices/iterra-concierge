export interface BlendOil {
  name: string;
  ingredients: string;
  category: string;
  description?: string;
  keyBenefits?: string[];
  safetyNotes?: string;
}

export const dotTerraBlendsComplete3: BlendOil[] = [
  // Detox, Weight, & Metabolic
  {
    name: "Smart & Sassy (Metabolic Blend)",
    ingredients: "Grapefruit Peel, Lemon Peel, Peppermint Plant, Ginger Root, Cinnamon Bark Leaf",
    category: "💦 Detox, Weight, & Metabolic",
    keyBenefits: ["Metabolic support", "Weight management", "Energy boost"]
  },
  
  // Kids' Collection
  {
    name: "Brave (Kids Courage Blend)",
    ingredients: "Wild Orange, Amyris, Osmanthus, Cinnamon Bark",
    category: "👶 Kids' Collection",
    keyBenefits: ["Courage building", "Confidence boost", "Kid-safe empowerment"]
  },
  
  // Beauty, Skin, & Spa
  {
    name: "Rejuvenating Blend (Immortelle)",
    ingredients: "Citrus Peel Oils, Lavender, Sandalwood, Frankincense, Myrrh, Helichrysum, Rose, Osmanthus",
    category: "🧴 Beauty, Skin, & Spa",
    keyBenefits: ["Skin rejuvenation", "Anti-aging support", "Radiant complexion"]
  },
  {
    name: "Invigorating Blend (Zendocrine)",
    ingredients: "Grapefruit Peel, Lemon Peel, Peppermint Herb, Ginger Root, Cinnamon Bark, Lemongrass",
    category: "🧴 Beauty, Skin, & Spa",
    keyBenefits: ["Detoxifying support", "Cleansing blend", "Purifying wellness"]
  },
  
  // Cleaning Blends
  {
    name: "Abode (Home Blend)",
    ingredients: "Lime, Litsea, Cassia, Lemon Eucalyptus, Tea Tree, Arborvitae, Cilantro, Lavandin, Lemon Myrtle",
    category: "🏡 Cleaning Blends",
    keyBenefits: ["Home purification", "Natural cleaning", "Fresh environment"]
  },
  
  // Spiritual/Emotion Support
  {
    name: "Anchor (Steadying Blend)",
    ingredients: "Lavender, Cedarwood, Frankincense, Cinnamon Bark, Sandalwood, Black Pepper, Patchouli",
    category: "🧘 Spiritual/Emotion Support",
    keyBenefits: ["Grounding stability", "Emotional anchoring", "Spiritual centering"]
  },
  {
    name: "Ascend (Uplifting Blend)",
    ingredients: "Lavender, Frankincense, Melissa, Ylang Ylang, Osmanthus, Lime",
    category: "🧘 Spiritual/Emotion Support",
    keyBenefits: ["Spiritual elevation", "Higher consciousness", "Transcendent peace"]
  },
  {
    name: "Align (Centering Blend)",
    ingredients: "Bergamot, Coriander, Marjoram, Peppermint, Rose, Jasmine, Lemon, Geranium",
    category: "🧘 Spiritual/Emotion Support",
    keyBenefits: ["Chakra alignment", "Energy balance", "Spiritual harmony"]
  },
  {
    name: "Arise (Encouraging Blend)",
    ingredients: "Lemon Peel, Grapefruit Peel, Siberian Fir, Osmanthus Flower, Melissa Leaf",
    category: "🧘 Spiritual/Emotion Support",
    keyBenefits: ["New beginnings", "Fresh energy", "Awakening spirit"]
  }];