export interface HolidayProduct {
  id: string;
  name: string;
  category: string;
  description: string;
  benefits: string[];
  holidayTheme: string;
  giftIdea: boolean;
  price: string;
  url: string;
  recipe?: {
    ingredients: string[];
    instructions: string[];
  };
}

export const holidayProductCatalog: HolidayProduct[] = [
  {
    id: 'holiday-peace',
    name: 'Holiday Peace Diffuser Blend',
    category: 'Holiday Wellness',
    description: 'Create a peaceful holiday atmosphere with this calming blend',
    benefits: ['Reduces holiday stress', 'Promotes calm atmosphere', 'Supports relaxation', 'Creates peaceful environment'],
    holidayTheme: 'Christmas',
    giftIdea: true,
    price: '$45.00',
    url: 'https://www.doterra.com/US/en/p/holiday-peace',
    recipe: {
      ingredients: ['3 drops Frankincense', '2 drops Lavender', '2 drops Wild Orange'],
      instructions: ['Add oils to diffuser', 'Diffuse for 30 minutes', 'Use during holiday gatherings', 'Repeat as needed for peace']
    }
  },
  {
    id: 'valentine-romance',
    name: 'Romance & Connection Kit',
    category: 'Relationship Wellness',
    description: 'Essential oils to enhance romance and emotional connection',
    benefits: ['Enhances romantic mood', 'Supports emotional intimacy', 'Creates loving atmosphere', 'Promotes connection'],
    holidayTheme: 'Valentine\'s Day',
    giftIdea: true,
    price: '$89.00',
    url: 'https://www.doterra.com/US/en/p/romance-connection-kit'
  },
  {
    id: 'spring-renewal',
    name: 'Spring Renewal Collection',
    category: 'Seasonal Wellness',
    description: 'Fresh start with cleansing and energizing oils for spring',
    benefits: ['Supports spring cleaning', 'Energizes and refreshes', 'Promotes new beginnings', 'Natural detox support'],
    holidayTheme: 'Easter',
    giftIdea: true,
    price: '$125.00',
    url: 'https://www.doterra.com/US/en/p/spring-renewal-collection'
  },
  {
    id: 'mothers-day-spa',
    name: 'Mother\'s Day Spa Experience',
    category: 'Self-Care',
    description: 'Luxurious spa experience for the special mothers in your life',
    benefits: ['Promotes relaxation', 'Supports self-care', 'Reduces stress', 'Enhances well-being'],
    holidayTheme: 'Mother\'s Day',
    giftIdea: true,
    price: '$95.00',
    url: 'https://www.doterra.com/US/en/p/mothers-day-spa-experience'
  },
  {
    id: 'summer-vitality',
    name: 'Summer Vitality Bundle',
    category: 'Summer Wellness',
    description: 'Stay energized and protected during summer activities',
    benefits: ['Supports energy levels', 'Natural sun protection', 'Hydration support', 'Summer wellness'],
    holidayTheme: 'Summer',
    giftIdea: false,
    price: '$78.00',
    url: 'https://www.doterra.com/US/en/p/summer-vitality-bundle'
  },
  {
    id: 'back-to-school',
    name: 'Back to School Focus Kit',
    category: 'Educational Wellness',
    description: 'Support focus and concentration for students of all ages',
    benefits: ['Enhances focus', 'Supports concentration', 'Promotes alertness', 'Reduces study stress'],
    holidayTheme: 'Back to School',
    giftIdea: true,
    price: '$65.00',
    url: 'https://www.doterra.com/US/en/p/back-to-school-focus-kit'
  },
  {
    id: 'thanksgiving-gratitude',
    name: 'Thanksgiving Gratitude Blend',
    category: 'Holiday Traditions',
    description: 'Create a warm, grateful atmosphere for family gatherings',
    benefits: ['Promotes gratitude', 'Creates warm atmosphere', 'Supports family bonding', 'Enhances celebration'],
    holidayTheme: 'Thanksgiving',
    giftIdea: false,
    price: '$35.00',
    url: 'https://www.doterra.com/US/en/p/thanksgiving-gratitude-blend'
  },
  {
    id: 'winter-immunity',
    name: 'Winter Immunity Support Pack',
    category: 'Seasonal Health',
    description: 'Comprehensive immune support for the winter season',
    benefits: ['Supports immune function', 'Seasonal health support', 'Natural protection', 'Winter wellness'],
    holidayTheme: 'Winter',
    giftIdea: true,
    price: '$110.00',
    url: 'https://www.doterra.com/US/en/p/winter-immunity-support-pack'
  }
];