import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ExperienceCard from './ExperienceCard';
import MembershipExperience from './MembershipExperience';
import { sleepExperience, summerFunExperience, meditations } from '@/data/experiencesData';
import { Experience } from '@/data/experiencesData';
import { Moon, Sun, Heart, Leaf, Star, Scale, Clock, Baby, Waves } from 'lucide-react';

const ExperiencesSection: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'All Experiences' },
    { id: 'sleep', label: 'Sleep' },
    { id: 'summer-fun', label: 'Summer Fun' },
    { id: 'weight-loss', label: 'Weight Loss' },
    { id: 'longevity', label: 'Longevity' },
    { id: 'kids', label: 'Kids Wellness' }
  ];

  // Enhanced experiences with comprehensive products and meditations
  const experiences: Experience[] = [
    sleepExperience,
    summerFunExperience,
    {
      id: 1,
      title: "Natural Weight Loss Journey",
      category: 'weight-loss',
      description: 'Complete weight management with metabolism support, healthy recipes, and motivation',
      products: [
        'Grapefruit Essential Oil',
        'Lemon Essential Oil', 
        'Peppermint Essential Oil',
        'Slim & Sassy Blend',
        'Protein Powder',
        'Meal Replacement Shakes',
        'Fitness Tracker',
        'Recipe Book'
      ],
      duration: '8 weeks',
      icon: 'Scale',
      gradient: 'from-green-400 to-blue-400',
      education: 'Citrus oils have been used for centuries to support healthy metabolism and energy.',
      meditations: [meditations.find(m => m.id === 'peppermint-dreams')!],
      recipes: [
        {
          title: 'Metabolism Boost Blend',
          ingredients: ['3 drops Grapefruit oil', '2 drops Lemon oil', '1 drop Peppermint oil', '10ml Fractionated Coconut oil'],
          instructions: 'Mix oils, apply to chest and wrists before meals.',
          time: '2 minutes',
          serves: '20 applications',
          difficulty: 'Easy' as const,
          category: 'Weight Management'
        },
        {
          title: 'Energizing Pre-Workout Drink',
          ingredients: ['2 drops Lemon oil', '1 drop Peppermint oil', '16 oz Water', '1 tsp Honey'],
          instructions: 'Mix oils with honey, add to water, drink 30 minutes before exercise.',
          time: '2 minutes',
          serves: '1 drink',
          difficulty: 'Easy' as const,
          category: 'Fitness'
        }
      ],
      membershipTier: 'Standard'
    },
    {
      id: 2,
      title: "Longevity & Anti-Aging Wellness",
      category: 'longevity',
      description: 'Complete anti-aging protocol with cellular support, skincare, and longevity practices',
      products: [
        'Frankincense Essential Oil',
        'Copaiba Essential Oil',
        'Turmeric Essential Oil',
        'Lifelong Vitality Pack',
        'Anti-Aging Serum',
        'Collagen Supplements',
        'UV Protection Cream',
        'Antioxidant Complex'
      ],
      duration: '12 weeks',
      icon: 'Clock',
      gradient: 'from-purple-400 to-gold-400',
      education: 'Frankincense has been revered for thousands of years for its cellular-supporting properties.',
      meditations: [meditations.find(m => m.id === 'resin-amber-time')!],
      recipes: [
        {
          title: 'Youth Renewal Serum',
          ingredients: ['2 drops Frankincense oil', '1 drop Copaiba oil', '1 drop Turmeric oil', '1 tbsp Jojoba oil'],
          instructions: 'Blend oils, apply to face and neck nightly after cleansing.',
          time: '3 minutes',
          serves: '30 applications',
          difficulty: 'Intermediate' as const,
          category: 'Skincare'
        }
      ],
      membershipTier: 'Premium'
    },
    {
      id: 3,
      title: "Kids Natural Wellness",
      category: 'kids',
      description: 'Safe, gentle wellness solutions for children with family-friendly products and activities',
      products: [
        'Lavender Essential Oil',
        'Orange Essential Oil',
        'KidSafe Collection',
        'Natural Soap',
        'Gentle Shampoo',
        'Organic Snacks',
        'Activity Books',
        'Sticker Charts'
      ],
      duration: '4 weeks',
      icon: 'Baby',
      gradient: 'from-yellow-400 to-orange-400',
      education: 'Gentle, diluted essential oils have been used safely with children for generations.',
      recipes: [
        {
          title: 'Gentle Kids Calm Blend',
          ingredients: ['1 drop Lavender oil', '1 drop Orange oil', '10ml Fractionated Coconut oil'],
          instructions: 'Mix oils, apply to feet before bedtime (ages 2+). Always dilute for children.',
          time: '1 minute',
          serves: '40 applications',
          difficulty: 'Easy' as const,
          category: 'Kids Wellness'
        },
        {
          title: 'Fun Bath Time Blend',
          ingredients: ['2 drops Lavender oil', '1 drop Orange oil', '1/4 cup Epsom salt', '1 tbsp Carrier oil'],
          instructions: 'Mix oils with carrier oil first, then add to Epsom salt. Add to warm bath.',
          time: '3 minutes',
          serves: '1 bath',
          difficulty: 'Easy' as const,
          category: 'Bath Time'
        }
      ],
      membershipTier: 'Standard'
    }
  ];

  const filteredExperiences = selectedFilter === 'all' 
    ? experiences 
    : experiences.filter(exp => exp.category === selectedFilter);

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-2">Wellness Experiences</h2>
        <p className="text-gray-600">Complete wellness journeys with products, meditations, and recipes</p>
      </div>

      <Tabs defaultValue="experiences" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="experiences">Wellness Experiences</TabsTrigger>
          <TabsTrigger value="membership">My Experience</TabsTrigger>
        </TabsList>
        
        <TabsContent value="experiences" className="space-y-6">
          <div className="flex flex-wrap gap-2 justify-center">
            {filters.map((filter) => (
              <Button
                key={filter.id}
                variant={selectedFilter === filter.id ? "default" : "outline"}
                onClick={() => setSelectedFilter(filter.id)}
                className={selectedFilter === filter.id ? "bg-gradient-to-r from-purple-500 to-pink-500" : ""}
              >
                {filter.label}
              </Button>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {filteredExperiences.map((experience) => (
              <ExperienceCard key={experience.id} experience={experience} />
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="membership">
          <MembershipExperience />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ExperiencesSection;