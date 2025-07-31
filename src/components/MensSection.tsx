import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Dumbbell, Shield, Zap, Coffee, Mountain, Flame, ArrowRight } from 'lucide-react';

const MensSection = () => {
  const mensCollections = [
    {
      title: "Men's Vitality Collection",
      description: "Essential oils to support energy, focus, and daily performance",
      icon: Zap,
      color: "bg-blue-500",
      items: [
        "Peppermint - Mental clarity and energy",
        "Eucalyptus - Respiratory support",
        "Frankincense - Focus and grounding",
        "Wild Orange - Mood and motivation"
      ]
    },
    {
      title: "Active Lifestyle Collection",
      description: "Support for workouts, recovery, and physical wellness",
      icon: Dumbbell,
      color: "bg-green-500",
      items: [
        "Wintergreen - Muscle comfort",
        "Copaiba - Natural recovery support",
        "Deep Blue Blend - Post-workout relief",
        "Breathe Blend - Respiratory clarity"
      ]
    },
    {
      title: "Professional Focus Collection",
      description: "Essential oils for workplace confidence and mental clarity",
      icon: Coffee,
      color: "bg-gray-600",
      items: [
        "Rosemary - Memory and concentration",
        "Basil - Mental alertness",
        "Vetiver - Calm focus",
        "InTune Blend - Attention support"
      ]
    },
    {
      title: "Outdoor Adventure Collection",
      description: "Natural protection and freshness for outdoor activities",
      icon: Mountain,
      color: "bg-emerald-600",
      items: [
        "TerraShield - Natural outdoor protection",
        "Tea Tree - Cleansing properties",
        "Cedarwood - Grounding and outdoorsy",
        "Lemongrass - Fresh and invigorating"
      ]
    },
    {
      title: "Men's Grooming Essentials",
      description: "Natural solutions for daily grooming and skin care",
      icon: Shield,
      color: "bg-slate-600",
      items: [
        "Sandalwood - Smooth, masculine scent",
        "Melaleuca - Skin clarity",
        "Cypress - Fresh, clean feeling",
        "Beard Oil Blend - Nourishing care"
      ]
    },
    {
      title: "Energy & Performance Collection",
      description: "Natural support for peak performance and endurance",
      icon: Flame,
      color: "bg-red-500",
      items: [
        "Motivate Blend - Confidence boost",
        "Ginger - Digestive and energy support",
        "Black Pepper - Circulation support",
        "Spearmint - Refreshing energy"
      ]
    }
  ];

  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-blue-500 to-green-500 rounded-lg p-6 text-white">
        <h2 className="text-3xl font-bold mb-2">Men's Wellness Collections</h2>
        <p className="text-blue-100 mb-4">
          Discover essential oil collections designed specifically for men's wellness needs - 
          from energy and focus to active recovery and professional confidence.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mensCollections.map((collection, index) => {
          const Icon = collection.icon;
          return (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className={`p-2 rounded-lg ${collection.color}`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">{collection.title}</CardTitle>
                  </div>
                </div>
                <CardDescription>{collection.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 mb-4">
                  {collection.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-center space-x-2">
                      <Badge variant="outline" className="text-xs">
                        ✓
                      </Badge>
                      <span className="text-sm text-gray-600">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="space-y-2">
                  <Button className="w-full" variant="outline">
                    Learn More
                  </Button>
                  <Button className="w-full bg-gradient-to-r from-blue-500 to-green-500 text-white hover:from-blue-600 hover:to-green-600">
                    Explore Entire Collection
                  </Button>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export { MensSection };
export default MensSection;