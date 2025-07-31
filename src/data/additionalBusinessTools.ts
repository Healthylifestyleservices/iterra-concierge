import { BusinessTool } from './businessToolsData';

export const contentCreationTools: BusinessTool[] = [
  {
    id: 'canva-templates',
    title: 'Canva Design Templates',
    description: 'Professional wellness brand templates for Canva',
    category: 'Content Creation',
    features: ['Brand templates', 'Social media sizes', 'Print materials', 'Presentation slides'],
    benefits: ['Consistent branding', 'Professional designs', 'Time saving', 'Easy customization']
  },
  {
    id: 'video-scripts',
    title: 'Video Content Scripts',
    description: 'Ready-to-use scripts for wellness video content',
    category: 'Content Creation',
    features: ['Educational videos', 'Product demos', 'Testimonials', 'How-to guides'],
    benefits: ['Professional content', 'Engaging storytelling', 'Clear messaging', 'Audience education']
  }
];

export const analyticsTools: BusinessTool[] = [
  {
    id: 'social-analytics',
    title: 'Social Media Analytics Dashboard',
    description: 'Track and analyze social media performance',
    category: 'Analytics',
    features: ['Performance metrics', 'Engagement tracking', 'Growth analysis', 'Competitor insights'],
    benefits: ['Data-driven decisions', 'Optimize content', 'Track ROI', 'Improve strategy']
  }
];

export const holidayBusinessTools: BusinessTool[] = [
  {
    id: 'christmas-campaign',
    title: 'Christmas Wellness Campaign',
    description: 'Complete Christmas marketing toolkit',
    category: 'Social Media',
    isHoliday: true,
    seasonalTheme: 'Christmas',
    features: ['Holiday templates', 'Gift guides', 'Festive recipes', 'Family wellness'],
    benefits: ['Seasonal sales boost', 'Gift opportunities', 'Family engagement', 'Holiday spirit']
  },
  {
    id: 'new-year-renewal',
    title: 'New Year Renewal Campaign',
    description: 'New Year wellness and goal-setting content',
    category: 'Social Media',
    isHoliday: true,
    seasonalTheme: 'New Year',
    features: ['Goal setting', 'Wellness resolutions', 'Fresh starts', 'Motivation content'],
    benefits: ['New customer acquisition', 'Goal achievement', 'Fresh motivation', 'Renewal energy']
  }
];

export const seasonalHolidayTools: BusinessTool[] = [
  {
    id: 'easter-wellness',
    title: 'Easter Renewal Campaign',
    description: 'Spring renewal and wellness content for Easter',
    category: 'Social Media',
    isHoliday: true,
    seasonalTheme: 'Easter',
    features: ['Spring renewal', 'Fresh starts', 'Wellness rebirth', 'Family wellness'],
    benefits: ['Seasonal relevance', 'Renewal messaging', 'Family focus', 'Spring energy']
  },
  {
    id: 'mothers-day',
    title: 'Mother\'s Day Appreciation',
    description: 'Wellness content celebrating mothers and self-care',
    category: 'Social Media',
    isHoliday: true,
    seasonalTheme: 'Mother\'s Day',
    features: ['Mom appreciation', 'Self-care focus', 'Gift ideas', 'Wellness for moms'],
    benefits: ['Target female market', 'Self-care promotion', 'Gift opportunities', 'Mother appreciation']
  }
];

export const businessAutomationTools: BusinessTool[] = [
  {
    id: 'chatbot-scripts',
    title: 'Customer Service Chatbot Scripts',
    description: 'Automated responses for common wellness questions',
    category: 'Marketing',
    features: ['FAQ responses', 'Product info', 'Order support', 'Wellness guidance'],
    benefits: ['24/7 support', 'Quick responses', 'Consistent info', 'Customer satisfaction']
  }
];