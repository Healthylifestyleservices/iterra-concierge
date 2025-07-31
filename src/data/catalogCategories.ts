export interface CatalogCategory {
  id: string;
  title: string;
  emoji: string;
  route: string;
  description?: string;
}

export const catalogCategories: CatalogCategory[] = [
  { id: 'immune', title: 'Immune System', emoji: '🛡️', route: '/category/immune', description: 'Natural immune system boosters' },
  { id: 'sleep', title: 'Sleep & Relaxation', emoji: '😴', route: '/category/sleep', description: 'Promote restful sleep' },
  { id: 'digestive', title: 'Digestive Health', emoji: '🌿', route: '/category/digestive', description: 'Support for digestive wellness' },
  { id: 'respiratory', title: 'Respiratory Support', emoji: '🫁', route: '/category/respiratory', description: 'Breathe easier naturally' },
  { id: 'mood', title: 'Mood & Emotional Wellness', emoji: '🧘', route: '/category/mood', description: 'Balance emotions naturally' },
  { id: 'pain', title: 'Muscle & Joint Support', emoji: '💪', route: '/category/pain', description: 'Natural pain relief solutions' },
  { id: 'women', title: 'Women\'s Health', emoji: '🌸', route: '/category/women', description: 'Women\'s wellness products' },
  { id: 'men', title: 'Men\'s Vitality', emoji: '⚡', route: '/category/men', description: 'Men\'s health and vitality' },
  { id: 'kids', title: 'Children & Families', emoji: '👶', route: '/category/kids', description: 'Safe products for families' },
  { id: 'energy', title: 'Energy & Focus', emoji: '🔋', route: '/category/energy', description: 'Natural energy enhancement' },
  { id: 'pets', title: 'Pet Wellness', emoji: '🐾', route: '/category/pets', description: 'Safe products for pets' },
  { id: 'home', title: 'Home & Cleaning', emoji: '🏠', route: '/category/home', description: 'Natural home care products' }
];