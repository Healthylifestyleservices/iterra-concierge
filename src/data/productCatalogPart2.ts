import { Product } from './productCatalog';

export const skincare: Product[] = [
  { id: 'sk1', name: 'Anti-Aging Cleanser', category: 'Facial Care', benefits: ['Gentle Cleansing', 'Hydrating'], tips: ['Daily use', 'Gentle formula'] },
  { id: 'sk2', name: 'Hydrating Toner', category: 'Facial Care', benefits: ['Skin Toning', 'Hydration'], tips: ['After cleansing', 'Prepares skin'] },
  { id: 'sk3', name: 'Anti-Aging Moisturizer', category: 'Facial Care', benefits: ['Deep Hydration', 'Anti-aging'], tips: ['Day and night use', 'Anti-aging benefits'], isBestseller: true },
  { id: 'sk4', name: 'Soothing Skin Ointment', category: 'Topical Care', benefits: ['Skin Soothing', 'Natural Healing'], tips: ['First aid essential', 'Multi-purpose'] },
  { id: 'sk5', name: 'Clear Skin Kit', category: 'Acne Care', benefits: ['Clear Skin', 'Acne Support'], tips: ['Complete skincare', 'Gentle formula'], isNew: true }
];

export const homecare: Product[] = [
  { id: 'hc1', name: 'Natural Cleaner Concentrate', category: 'Natural Cleaning', benefits: ['Natural Cleaning', 'Safe for Family'], tips: ['Dilute as needed', 'All-purpose cleaner'] },
  { id: 'hc2', name: 'Natural Dish Soap', category: 'Kitchen Care', benefits: ['Gentle on Hands', 'Effective Cleaning'], tips: ['Concentrated formula', 'Pleasant scent'] },
  { id: 'hc3', name: 'Natural Laundry Detergent', category: 'Laundry Care', benefits: ['Natural Cleaning', 'Fresh Scent'], tips: ['Works in all temperatures', 'Concentrated'] },
  { id: 'hc4', name: 'Hand Sanitizing Mist', category: 'Hand Care', benefits: ['Hand Sanitizer', 'Moisturizing'], tips: ['Portable size', 'Non-drying formula'] }
];

export const womensWellness: Product[] = [
  { id: 'ww1', name: 'Monthly Comfort Blend', category: "Women's Health", benefits: ['Hormonal Balance', 'Monthly Support'], tips: ['Apply to abdomen', 'Monthly comfort'] },
  { id: 'ww2', name: 'Feminine Wellness Support', category: "Women's Care", benefits: ['Feminine Health', 'Natural Care'], tips: ['Daily wellness', 'Gentle support'] },
  { id: 'ww3', name: 'Hormonal Support Complex', category: "Women's Supplements", benefits: ['Hormonal Support', 'Menopause Relief'], tips: ['Daily supplement', 'Hormonal balance'] },
  { id: 'ww4', name: 'Bone Support Complex', category: "Women's Health", benefits: ['Bone Health', 'Calcium Support'], tips: ['Daily bone support', 'Essential nutrients'], isNew: true }
];

export const mensWellness: Product[] = [
  { id: 'mw1', name: 'Cellular Health Complex', category: "Men's Health", benefits: ['Cellular Health', 'Antioxidant Support'], tips: ['Daily cellular support', 'Antioxidant protection'] },
  { id: 'mw2', name: 'Omega Complex', category: "Men's Supplements", benefits: ['Heart Health', 'Brain Support'], tips: ['Daily omega support', 'Cardiovascular health'] },
  { id: 'mw3', name: 'Complete Multivitamin', category: "Men's Vitamins", benefits: ['Complete Nutrition', 'Energy Support'], tips: ['Daily multivitamin', 'Essential nutrients'], isBestseller: true },
  { id: 'mw4', name: 'Soothing Muscle Rub', category: "Men's Topical", benefits: ['Muscle Relief', 'Post-Workout'], tips: ['After exercise', 'Targeted relief'] }
];

export const kidsFamily: Product[] = [
  { id: 'kf1', name: 'Kids Essential Oil Collection', category: 'Kids Wellness', benefits: ['Kid-Safe Formulas', 'Gentle Support'], tips: ['Diluted for safety', 'Gentle formulations'] },
  { id: 'kf2', name: 'Kids Chewable Vitamins', category: 'Kids Supplements', benefits: ['Complete Nutrition', 'Great Taste'], tips: ['Daily kids vitamin', 'Chewable format'] },
  { id: 'kf3', name: 'Kids Brain Support', category: 'Kids Brain Health', benefits: ['Brain Development', 'Omega Support'], tips: ['Cognitive support', 'Brain health'], isNew: true }
];