export interface BlendOil {
  name: string;
  ingredients: string;
  category: string;
  description?: string;
  keyBenefits?: string[];
  safetyNotes?: string;
}

export const dotTerraBlendsComplete2: BlendOil[] = [
  // More Mood, Uplift & Focus
  {
    name: "Passion (Inspiring Blend)",
    ingredients: "Fractionated Coconut Oil, Cardamom Seed, Cinnamon Bark, Ginger Root, Clove Bud, Sandalwood Wood, Jasmine Flower, Vanilla Bean, Damiana Leaf",
    category: "😌 Mood, Uplift & Focus",
    keyBenefits: ["Inspiring energy", "Passionate motivation", "Creative spark"]
  },
  {
    name: "Forgive (Renewing Blend)",
    ingredients: "Spruce Leaf, Bergamot Peel, Juniper Berry Fruit, Myrrh Resin, Arborvitae Wood, Nootka Tree Wood, Thyme Leaf, Citronella Herb",
    category: "😌 Mood, Uplift & Focus",
    keyBenefits: ["Emotional renewal", "Release negativity", "Fresh perspective"]
  },
  {
    name: "Console (Comforting Blend)",
    ingredients: "Fractionated Coconut Oil, Frankincense Resin, Patchouli Leaf, Ylang Ylang Flower, Labdanum Resin, Amyris Bark, Sandalwood, Rose Flower",
    category: "😌 Mood, Uplift & Focus",
    keyBenefits: ["Emotional comfort", "Healing support", "Gentle consolation"]
  },
  {
    name: "Adaptiv (Calming Blend)",
    ingredients: "Wild Orange Peel, Lavender Flower, Copaiba Resin, Spearmint Leaf, Magnolia Flower, Rosemary Leaf, Neroli Flower, Sweetgum Fruit",
    category: "😌 Mood, Uplift & Focus",
    keyBenefits: ["Stress adaptation", "Calm focus", "Balanced energy"]
  },
  {
    name: "Thinker (Kids Focus Blend)",
    ingredients: "Vetiver, Peppermint, Clementine, Rosemary",
    category: "😌 Mood, Uplift & Focus",
    keyBenefits: ["Mental clarity", "Focus support", "Kid-friendly concentration"]
  },
  
  // Muscle, Joint & Recovery
  {
    name: "Soothing Blend (Deep Blue)",
    ingredients: "Wintergreen, Camphor, Peppermint, Blue Tansy, Blue Chamomile, Helichrysum, Osmanthus",
    category: "💪 Muscle, Joint & Recovery",
    keyBenefits: ["Muscle comfort", "Joint support", "Soothing relief"]
  },
  
  // Hormone, Women's & Life Cycles
  {
    name: "Women's Monthly Blend (ClaryCalm)",
    ingredients: "Clary Sage, Lavender, Bergamot, Roman Chamomile, Cedarwood, Ylang Ylang, Geranium, Fennel, Carrot Seed, Palmarosa, Vitex",
    category: "💗 Hormone, Women's & Life Cycles",
    keyBenefits: ["Monthly comfort", "Hormonal balance", "Feminine wellness"]
  },
  {
    name: "Calmer (Kids Sleep Blend)",
    ingredients: "Lavender, Cananga odorata (Ylang Ylang), Buddha Wood, Roman Chamomile",
    category: "💗 Hormone, Women's & Life Cycles",
    keyBenefits: ["Peaceful sleep", "Kid-safe relaxation", "Bedtime comfort"]
  }];