export interface Product {
  id: string;
  name: string;
  category: string;
  benefits: string[];
  tips: string[];
  isNew?: boolean;
  isBestseller?: boolean;
}

export const essentialOils: Product[] = [
  { id: 'eo1', name: 'Lavender', category: 'Floral', benefits: ['Calming', 'Sleep Support'], tips: ['Add to pillow', 'Mix with carrier oil'], isBestseller: true },
  { id: 'eo2', name: 'Peppermint', category: 'Minty', benefits: ['Energy Boost', 'Digestive Support'], tips: ['Dilute before use', 'Cooling effect'], isBestseller: true },
  { id: 'eo3', name: 'Wild Orange', category: 'Citrus', benefits: ['Energizing', 'Mood Lifting'], tips: ['Add to water', 'Morning diffusion'] },
  { id: 'eo4', name: 'Frankincense', category: 'Sacred', benefits: ['Anti-aging', 'Spiritual Support'], tips: ['Add to skincare', 'Meditation'] },
  { id: 'eo5', name: 'Tea Tree (Melaleuca)', category: 'Cleansing', benefits: ['Purifying', 'Skin Health'], tips: ['Spot treatment', 'Natural cleanser'] },
  { id: 'eo6', name: 'Lemon', category: 'Citrus', benefits: ['Cleansing', 'Energizing'], tips: ['Add to water', 'Natural cleanser'] },
  { id: 'eo7', name: 'Eucalyptus', category: 'Tree', benefits: ['Respiratory Support', 'Invigorating'], tips: ['Steam inhalation', 'Chest rub'] },
  { id: 'eo8', name: 'Cedarwood', category: 'Tree', benefits: ['Grounding', 'Sleep Support'], tips: ['Evening diffusion', 'Meditation aid'] },
  { id: 'eo9', name: 'Rose', category: 'Floral', benefits: ['Emotional Balance', 'Skin Care'], tips: ['Add to moisturizer', 'Emotional support'] },
  { id: 'eo10', name: 'Bergamot', category: 'Citrus', benefits: ['Mood Support', 'Confidence'], tips: ['Morning diffusion', 'Uplifting blend'], isNew: true }
];

export const blends: Product[] = [
  { id: 'b1', name: 'Restful Blend', category: 'Sleep & Relaxation', benefits: ['Sleep Support', 'Relaxation'], tips: ['Apply to feet before bed', 'Diffuse before sleep'], isBestseller: true },
  { id: 'b2', name: 'Protective Blend', category: 'Immune Support', benefits: ['Immune Support', 'Purifying'], tips: ['Diffuse during cold season', 'Add to cleaning'], isBestseller: true },
  { id: 'b3', name: 'Respiratory Blend', category: 'Respiratory Support', benefits: ['Clear Breathing', 'Respiratory Health'], tips: ['Steam inhalation', 'Chest application'] },
  { id: 'b4', name: 'Digestive Blend', category: 'Digestive Support', benefits: ['Digestive Comfort', 'Stomach Soothing'], tips: ['Apply to abdomen', 'Take internally'] },
  { id: 'b5', name: 'Grounding Blend', category: 'Grounding', benefits: ['Emotional Balance', 'Grounding'], tips: ['Apply to feet', 'Meditation support'] },
  { id: 'b6', name: 'Encouraging Blend', category: 'Energizing', benefits: ['Motivation', 'Confidence'], tips: ['Morning application', 'Pulse points'], isNew: true }
];

export const supplements: Product[] = [
  { id: 's1', name: 'Daily Vitality Pack', category: 'Daily Wellness', benefits: ['Complete Nutrition', 'Energy Support'], tips: ['Take with meals', 'Foundation for health'], isBestseller: true },
  { id: 's2', name: 'Digestive Enzyme Complex', category: 'Digestive Support', benefits: ['Digestive Support', 'Nutrient Absorption'], tips: ['Take before meals', 'Supports digestion'] },
  { id: 's3', name: 'Probiotic Complex', category: 'Gut Health', benefits: ['Gut Health', 'Immune Support'], tips: ['Daily probiotic', 'Take on empty stomach'] },
  { id: 's4', name: 'Copaiba Softgels', category: 'Natural Relief', benefits: ['Natural Pain Relief', 'Inflammation Support'], tips: ['Daily wellness', 'Natural support'] },
  { id: 's5', name: 'Joint Support Complex', category: 'Joint Support', benefits: ['Joint Health', 'Muscle Support'], tips: ['Post-workout support', 'Daily joint care'] },
  { id: 's6', name: 'Energy & Stamina Complex', category: 'Energy Support', benefits: ['Cellular Energy', 'Endurance'], tips: ['Pre-workout', 'Energy support'], isNew: true }
];

// Export combined catalog
export const productCatalog = {
  essentialOils,
  blends,
  supplements
};