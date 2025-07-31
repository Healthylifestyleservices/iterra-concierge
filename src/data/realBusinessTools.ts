export interface RealBusinessTool {
  id: string;
  title: string;
  description: string;
  category: string;
  platform?: string;
  features: string[];
  benefits: string[];
  link: string;
  price?: string;
  type: 'free' | 'paid' | 'freemium';
  isHoliday?: boolean;
  isTemplate?: boolean;
}

export const realBusinessTools: RealBusinessTool[] = [
  // Templates and Hashtags
  {
    id: 'wellness-post-templates',
    title: '📝 Wellness Post Templates',
    description: 'Ready-to-use social media post templates for wellness content',
    category: 'Templates',
    features: ['Instagram templates', 'Facebook templates', 'Story templates', 'Customizable'],
    benefits: ['Save time', 'Professional look', 'Consistent branding'],
    link: '#',
    type: 'free',
    isTemplate: true
  },
  {
    id: 'wellness-hashtags',
    title: '#️⃣ Wellness Hashtag Library',
    description: 'Curated hashtag collections for wellness and aromatherapy',
    category: 'Hashtags',
    features: ['Trending hashtags', 'Niche-specific tags', 'Engagement boosters', 'Monthly updates'],
    benefits: ['Increase reach', 'Better engagement', 'Target audience'],
    link: '#',
    type: 'free',
    isTemplate: true
  },
  {
    id: 'email-templates',
    title: '📧 Email Marketing Templates',
    description: 'Professional email templates for wellness businesses',
    category: 'Templates',
    features: ['Welcome sequences', 'Product launches', 'Educational content', 'Mobile responsive'],
    benefits: ['Higher open rates', 'Professional appearance', 'Time saving'],
    link: '#',
    type: 'free',
    isTemplate: true
  },
  {
    id: 'content-calendar-template',
    title: '📅 Content Calendar Template',
    description: 'Monthly content planning template for wellness brands',
    category: 'Templates',
    features: ['Monthly planning', 'Post ideas', 'Hashtag suggestions', 'Analytics tracking'],
    benefits: ['Organized content', 'Consistent posting', 'Better planning'],
    link: '#',
    type: 'free',
    isTemplate: true
  },
  {
    id: 'story-templates',
    title: '📱 Instagram Story Templates',
    description: 'Eye-catching story templates for wellness content',
    category: 'Templates',
    features: ['Quote templates', 'Product showcases', 'Educational slides', 'Interactive elements'],
    benefits: ['Higher engagement', 'Professional stories', 'Brand consistency'],
    link: '#',
    type: 'free',
    isTemplate: true
  },
  {
    id: 'wellness-hashtag-sets',
    title: '🏷️ Hashtag Sets by Category',
    description: 'Organized hashtag collections for different wellness topics',
    category: 'Hashtags',
    features: ['Essential oils tags', 'Wellness lifestyle', 'Natural health', 'Self-care hashtags'],
    benefits: ['Targeted reach', 'Category-specific', 'Easy copy-paste'],
    link: '#',
    type: 'free',
    isTemplate: true
  },
  // Real Business Tools
  {
    id: 'canva-pro',
    title: '🎨 Canva Pro',
    description: 'Professional design tool for creating wellness content',
    category: 'Design',
    features: ['Premium templates', 'Brand kit', 'Background remover', 'Team collaboration'],
    benefits: ['Professional designs', 'Brand consistency', 'Time saving'],
    link: 'https://www.canva.com/pro/',
    price: '$12.99/month',
    type: 'paid'
  },
  {
    id: 'mailchimp',
    title: '📧 Mailchimp',
    description: 'Email marketing platform for wellness businesses',
    category: 'Marketing',
    features: ['Email campaigns', 'Automation', 'Analytics', 'Templates'],
    benefits: ['Nurture leads', 'Increase sales', 'Customer retention'],
    link: 'https://mailchimp.com/',
    price: '$10/month',
    type: 'freemium'
  },
  {
    id: 'hootsuite',
    title: '🦉 Hootsuite',
    description: 'Social media management for wellness brands',
    category: 'Social Media',
    features: ['Multi-platform posting', 'Scheduling', 'Analytics', 'Team collaboration'],
    benefits: ['Save time', 'Consistent posting', 'Team efficiency'],
    link: 'https://hootsuite.com/',
    price: '$49/month',
    type: 'freemium'
  }
];