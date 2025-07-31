export interface TikTokVideoTool {
  id: string;
  title: string;
  description: string;
  videoUrl: string;
  category: string;
  duration: string;
  views: string;
  hashtags: string[];
  tips: string[];
}

export const tiktokVideoTools: TikTokVideoTool[] = [
  {
    id: 'essential-oil-morning-routine',
    title: '🌅 Morning Essential Oil Routine',
    description: 'Start your day with energizing essential oils',
    videoUrl: 'https://www.tiktok.com/@wellness_essentials/video/morning-routine',
    category: 'Wellness',
    duration: '30s',
    views: '2.3M',
    hashtags: ['#essentialoils', '#morningroutine', '#wellness', '#selfcare'],
    tips: ['Use citrus oils for energy', 'Diffuse while getting ready', 'Apply to pulse points']
  },
  {
    id: 'diy-roller-blend',
    title: '🧴 DIY Roller Blend Tutorial',
    description: 'Create your own custom roller blend',
    videoUrl: 'https://www.tiktok.com/@oilymama/video/diy-roller-tutorial',
    category: 'DIY',
    duration: '45s',
    views: '1.8M',
    hashtags: ['#diyessentialoils', '#rollerblend', '#naturalliving', '#wellness'],
    tips: ['Use 10ml roller bottles', 'Add carrier oil first', 'Label your blends']
  },
  {
    id: 'stress-relief-blend',
    title: '😌 Instant Stress Relief Blend',
    description: 'Quick stress relief with essential oils',
    videoUrl: 'https://www.tiktok.com/@aromatherapy_life/video/stress-relief',
    category: 'Mental Health',
    duration: '25s',
    views: '3.1M',
    hashtags: ['#stressrelief', '#anxiety', '#essentialoils', '#mentalhealth'],
    tips: ['Breathe deeply', 'Apply to temples', 'Use lavender and frankincense']
  },
  {
    id: 'cleaning-with-oils',
    title: '🧽 Natural Cleaning with Essential Oils',
    description: 'Clean your home naturally with essential oils',
    videoUrl: 'https://www.tiktok.com/@green_cleaning/video/natural-cleaning',
    category: 'Home',
    duration: '60s',
    views: '1.5M',
    hashtags: ['#naturalcleaning', '#essentialoils', '#nontoxic', '#greenliving'],
    tips: ['Use lemon for grease', 'Tea tree for disinfecting', 'Always dilute properly']
  },
  {
    id: 'sleep-routine-oils',
    title: '🌙 Bedtime Essential Oil Routine',
    description: 'Better sleep with essential oils',
    videoUrl: 'https://www.tiktok.com/@sleep_wellness/video/bedtime-routine',
    category: 'Sleep',
    duration: '40s',
    views: '2.7M',
    hashtags: ['#sleep', '#bedtimeroutine', '#essentialoils', '#insomnia'],
    tips: ['Diffuse 30 minutes before bed', 'Use lavender and cedarwood', 'Create consistent routine']
  },
  {
    id: 'workout-energy-boost',
    title: '💪 Pre-Workout Energy Boost',
    description: 'Natural energy boost for workouts',
    videoUrl: 'https://www.tiktok.com/@fitness_oils/video/preworkout-energy',
    category: 'Fitness',
    duration: '35s',
    views: '1.2M',
    hashtags: ['#preworkout', '#energy', '#essentialoils', '#fitness'],
    tips: ['Use peppermint for alertness', 'Apply to chest area', 'Inhale deeply before workout']
  },
  {
    id: 'immune-support-blend',
    title: '🛡️ Immune Support Blend',
    description: 'Boost your immune system naturally',
    videoUrl: 'https://www.tiktok.com/@immune_wellness/video/immune-support',
    category: 'Health',
    duration: '50s',
    views: '2.9M',
    hashtags: ['#immunesupport', '#wellness', '#essentialoils', '#health'],
    tips: ['Use OnGuard blend', 'Diffuse daily', 'Apply to bottoms of feet']
  },
  {
    id: 'mood-lifting-oils',
    title: '😊 Mood-Lifting Essential Oils',
    description: 'Natural mood boosters for tough days',
    videoUrl: 'https://www.tiktok.com/@mood_wellness/video/mood-boost',
    category: 'Mental Health',
    duration: '30s',
    views: '1.9M',
    hashtags: ['#moodboost', '#happiness', '#essentialoils', '#mentalwellness'],
    tips: ['Use citrus oils', 'Diffuse in morning', 'Combine with deep breathing']
  }
];