export interface Recipe {
  title: string;
  difficulty: string;
  time: string;
  ingredients: string[];
  instructions: string[];
  benefits: string;
  tips?: string;
  recommendedProducts?: string[];
  blogLinks?: string[];
  videoLinks?: string[];
}

export interface CategoryData {
  id: string;
  name: string;
  icon: string;
  recipes: Recipe[];
}

export const categoryRecipes: CategoryData[] = [
  {
    id: 'essential-oils',
    name: 'Essential Oils',
    icon: '🪔',
    recipes: [
      {
        title: 'Calming Lavender Roll-On',
        difficulty: 'Easy',
        time: '5 minutes',
        ingredients: ['10 drops Lavender oil', '2 tbsp Carrier Oil', '10ml roller bottle'],
        instructions: ['Add carrier oil to roller bottle', 'Add lavender drops', 'Attach roller top and shake', 'Apply to wrists and temples'],
        benefits: 'Promotes relaxation and peaceful sleep',
        tips: 'Use before bedtime for best results',
        recommendedProducts: ['Lavender Essential Oil', 'Carrier Oil Blend', 'Glass Roller Bottles'],
        blogLinks: ['Essential Oil Safety Guide', 'Bedtime Routines with Oils'],
        videoLinks: ['How to Make Roll-On Blends', 'Evening Wellness Routine']
      },
      {
        title: 'Focus Blend for Concentration',
        difficulty: 'Easy',
        time: '3 minutes',
        ingredients: ['3 drops Rosemary oil', '2 drops Peppermint oil', 'Focus Capsules', 'Diffuser'],
        instructions: ['Add oils to diffuser with water', 'Take 1 focus capsule', 'Diffuse for focus session', 'Inhale deeply'],
        benefits: 'Enhances focus and reduces stress',
        tips: 'Perfect for work or study sessions',
        recommendedProducts: ['Rosemary Essential Oil', 'Focus Support Capsules', 'Peppermint Oil', 'Ultrasonic Diffuser'],
        blogLinks: ['Productivity Tips with Essential Oils', 'Study Session Aromatherapy'],
        videoLinks: ['Diffuser Setup Guide', 'Morning Focus Routine']
      },
      {
        title: 'Energizing Morning Blend',
        difficulty: 'Easy',
        time: '5 minutes',
        ingredients: ['4 drops Wild Orange oil', '2 drops Peppermint oil', '1 drop Eucalyptus oil', 'Diffuser'],
        instructions: ['Fill diffuser with water', 'Add all essential oils', 'Run for 30 minutes', 'Breathe deeply'],
        benefits: 'Boosts energy and mental clarity',
        tips: 'Use during morning routine for best results',
        recommendedProducts: ['Wild Orange Oil', 'Peppermint Oil', 'Eucalyptus Oil', 'Ultrasonic Diffuser'],
        blogLinks: ['Morning Energy Routines', 'Citrus Oils for Mood'],
        videoLinks: ['Morning Diffuser Blends', 'Energy Boosting Tips']
      }
    ]
  },
  {
    id: 'collections',
    name: 'Collections',
    icon: '🎁',
    recipes: [
      {
        title: 'Family Essentials Kit Wellness Routine',
        difficulty: 'Easy',
        time: '10 minutes',
        ingredients: ['Lavender oil', 'Wild Orange oil', 'Peppermint oil', 'Tea Tree oil', 'Protective Blend oil', 'Frankincense oil', 'Soothing Muscle Rub'],
        instructions: ['Morning: Diffuse Wild Orange for energy', 'Afternoon: Apply Soothing Muscle Rub to sore areas', 'Evening: Use Lavender roll-on for sleep', 'Daily: Take Protective Blend capsule for immune support'],
        benefits: 'Complete daily wellness routine for the whole family',
        tips: 'Start with one oil at a time to build routine',
        recommendedProducts: ['Family Essentials Kit', 'Soothing Muscle Rub', 'Veggie Capsules', 'Roller Bottles'],
        blogLinks: ['Building Family Wellness Routines', 'Essential Oil Safety for Children'],
        videoLinks: ['Family Kit Overview', 'Daily Wellness Habits']
      },
      {
        title: 'Starter Kit Daily Routine',
        difficulty: 'Beginner',
        time: '15 minutes',
        ingredients: ['Lavender oil', 'Lemon oil', 'Peppermint oil', 'Carrier oil', 'Diffuser'],
        instructions: ['Morning: Diffuse Lemon for 30 minutes', 'Midday: Apply diluted Peppermint to temples', 'Evening: Diffuse Lavender before bed', 'Weekly: Create custom blends'],
        benefits: 'Introduction to essential oil wellness',
        tips: 'Perfect for beginners to essential oils',
        recommendedProducts: ['Starter Trio Kit', 'Carrier Oil', 'Basic Diffuser', 'Reference Guide'],
        blogLinks: ['Getting Started with Essential Oils', 'Beginner Safety Tips'],
        videoLinks: ['Starter Kit Unboxing', 'First Week with Oils']
      }
    ]
  }
];