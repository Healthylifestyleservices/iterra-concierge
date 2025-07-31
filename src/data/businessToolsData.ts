export interface BusinessTool {
  id: string;
  title: string;
  description: string;
  category: string;
  platform?: string;
  features: string[];
  benefits: string[];
  isHoliday?: boolean;
  seasonalTheme?: string;
}

export const businessToolsData: BusinessTool[] = [
  // Social Media Tools
  {
    id: 'instagram-templates',
    title: 'Instagram Story Templates',
    description: 'Professional story templates for wellness brands',
    category: 'Social Media',
    platform: 'Instagram',
    features: ['Canva templates', 'Brand colors', 'Wellness quotes', 'Product showcases'],
    benefits: ['Consistent branding', 'Save time', 'Professional look', 'Engagement boost']
  },
  {
    id: 'facebook-posts',
    title: 'Facebook Post Library',
    description: 'Ready-to-use Facebook posts with engagement strategies',
    category: 'Social Media',
    platform: 'Facebook',
    features: ['Educational posts', 'Recipe shares', 'Testimonials', 'Event promotions'],
    benefits: ['Build community', 'Share knowledge', 'Drive sales', 'Establish authority']
  },
  {
    id: 'tiktok-scripts',
    title: 'TikTok Video Scripts',
    description: 'Trending video scripts for wellness content',
    category: 'Social Media',
    platform: 'TikTok',
    features: ['Trending formats', 'Educational content', 'Behind scenes', 'Quick tips'],
    benefits: ['Viral potential', 'Reach younger audience', 'Show personality', 'Build following']
  },
  {
    id: 'pinterest-pins',
    title: 'Pinterest Pin Designs',
    description: 'SEO-optimized pin designs for wellness topics',
    category: 'Social Media',
    platform: 'Pinterest',
    features: ['Recipe pins', 'DIY tutorials', 'Wellness tips', 'Product guides'],
    benefits: ['Long-term traffic', 'SEO benefits', 'Recipe sharing', 'Educational reach']
  },
  {
    id: 'youtube-thumbnails',
    title: 'YouTube Thumbnail Templates',
    description: 'Eye-catching thumbnail designs for wellness videos',
    category: 'Social Media',
    platform: 'YouTube',
    features: ['Click-worthy designs', 'Brand consistency', 'Text overlays', 'Color schemes'],
    benefits: ['Higher click rates', 'Professional appearance', 'Brand recognition', 'Video success']
  },
  {
    id: 'linkedin-articles',
    title: 'LinkedIn Article Templates',
    description: 'Professional wellness articles for business networking',
    category: 'Social Media',
    platform: 'LinkedIn',
    features: ['Business wellness', 'Industry insights', 'Success stories', 'Professional tips'],
    benefits: ['B2B connections', 'Thought leadership', 'Professional network', 'Business growth']
  },
  // Marketing Tools
  {
    id: 'email-sequences',
    title: 'Email Marketing Sequences',
    description: 'Automated email sequences for wellness businesses',
    category: 'Marketing',
    features: ['Welcome series', 'Educational content', 'Product launches', 'Seasonal campaigns'],
    benefits: ['Nurture leads', 'Build relationships', 'Increase sales', 'Automate marketing']
  },
  {
    id: 'lead-magnets',
    title: 'Lead Magnet Templates',
    description: 'Free resources to capture email subscribers',
    category: 'Marketing',
    features: ['Recipe guides', 'Wellness checklists', 'Oil usage charts', 'Safety guides'],
    benefits: ['Grow email list', 'Provide value', 'Build trust', 'Generate leads']
  },
  {
    id: 'webinar-scripts',
    title: 'Webinar Presentation Scripts',
    description: 'Complete scripts for wellness webinars',
    category: 'Marketing',
    features: ['Introduction scripts', 'Educational content', 'Q&A handling', 'Call-to-action'],
    benefits: ['Professional presentations', 'Engage audience', 'Build authority', 'Drive conversions']
  },
  {
    id: 'sales-funnels',
    title: 'Sales Funnel Templates',
    description: 'Complete sales funnel strategies for wellness products',
    category: 'Marketing',
    features: ['Landing pages', 'Email sequences', 'Upsell strategies', 'Follow-up systems'],
    benefits: ['Systematic sales', 'Higher conversions', 'Customer journey', 'Revenue growth']
  }
];

export const holidayBusinessTools: BusinessTool[] = [
  {
    id: 'christmas-social',
    title: 'Christmas Social Media Kit',
    description: 'Holiday-themed social media content for wellness brands',
    category: 'Social Media',
    isHoliday: true,
    seasonalTheme: 'Christmas',
    features: ['Holiday templates', 'Gift guides', 'Seasonal recipes', 'Festive graphics'],
    benefits: ['Seasonal engagement', 'Holiday sales boost', 'Festive branding', 'Gift promotion']
  },
  {
    id: 'thanksgiving-gratitude',
    title: 'Thanksgiving Gratitude Campaign',
    description: 'Gratitude-focused content for Thanksgiving season',
    category: 'Social Media',
    isHoliday: true,
    seasonalTheme: 'Thanksgiving',
    features: ['Gratitude posts', 'Thankful quotes', 'Community appreciation', 'Harvest themes'],
    benefits: ['Build community', 'Show appreciation', 'Positive messaging', 'Seasonal relevance']
  },
  {
    id: 'new-year-wellness',
    title: 'New Year Wellness Challenge',
    description: 'Complete wellness challenge for New Year resolutions',
    category: 'Marketing',
    isHoliday: true,
    seasonalTheme: 'New Year',
    features: ['30-day challenge', 'Daily prompts', 'Progress tracking', 'Community support'],
    benefits: ['Engage community', 'Support resolutions', 'Build habits', 'Long-term customers']
  },
  {
    id: 'valentines-self-care',
    title: 'Valentine\'s Self-Care Campaign',
    description: 'Self-love and wellness content for Valentine\'s Day',
    category: 'Social Media',
    isHoliday: true,
    seasonalTheme: 'Valentine\'s Day',
    features: ['Self-care tips', 'Love yourself posts', 'Romantic wellness', 'Gift ideas'],
    benefits: ['Promote self-love', 'Wellness focus', 'Gift opportunities', 'Positive messaging']
  }
];

export const platformSpecificTools = {
  Instagram: businessToolsData.filter(tool => tool.platform === 'Instagram'),
  Facebook: businessToolsData.filter(tool => tool.platform === 'Facebook'),
  TikTok: businessToolsData.filter(tool => tool.platform === 'TikTok'),
  Pinterest: businessToolsData.filter(tool => tool.platform === 'Pinterest'),
  YouTube: businessToolsData.filter(tool => tool.platform === 'YouTube'),
  LinkedIn: businessToolsData.filter(tool => tool.platform === 'LinkedIn')
};