import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Experience } from '@/data/experiencesData';
import MeditationCard from './MeditationCard';
import DIYCard from './DIYCard';
import { Moon, Sun, Heart, Leaf, Star, Scale, Clock, Baby, Waves } from 'lucide-react';

interface ExperienceCardProps {
  experience: Experience;
}

const iconMap = {
  Moon, Sun, Heart, Leaf, Star, Scale, Clock, Baby, Waves
};

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const IconComponent = iconMap[experience.icon as keyof typeof iconMap] || Star;

  const handlePurchaseMeditation = (meditationId: string) => {
    console.log('Purchasing meditation for client app:', meditationId);
  };

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <CardHeader className={`bg-gradient-to-r ${experience.gradient} text-white`}>
        <div className="flex items-center space-x-2">
          <IconComponent className="h-6 w-6" />
          <CardTitle className="text-lg">{experience.title}</CardTitle>
        </div>
        <div className="flex items-center justify-between">
          <Badge variant="secondary" className="w-fit bg-white/20">{experience.duration}</Badge>
          <Badge variant="outline" className="bg-white/10 border-white/30">
            Available for Client Apps
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="p-4 space-y-4">
        <p className="text-gray-700">{experience.description}</p>
        
        <div className="space-y-2">
          <h4 className="font-semibold text-sm">Complete Experience Includes:</h4>
          <div className="flex flex-wrap gap-1">
            {experience.products.slice(0, 3).map((product, idx) => (
              <Badge key={idx} variant="outline" className="text-xs">{product}</Badge>
            ))}
            {experience.products.length > 3 && (
              <Badge variant="outline" className="text-xs">+{experience.products.length - 3} more</Badge>
            )}
          </div>
        </div>

        <div className="bg-blue-50 p-3 rounded">
          <p className="text-sm text-blue-800 font-medium">✨ Available for Your Client Apps</p>
          <p className="text-xs text-blue-600 mt-1">Once purchased, this experience becomes available for your clients to use through your wellness app.</p>
        </div>

        <Button 
          variant="outline" 
          className="w-full"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? 'Hide Experience Details' : 'Explore Full Experience'}
        </Button>

        {isExpanded && (
          <div className="space-y-4 border-t pt-4">
            <div className="bg-green-50 p-3 rounded">
              <p className="text-sm text-green-800">{experience.education}</p>
            </div>
            
            <Tabs defaultValue="products" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="products">Products</TabsTrigger>
                <TabsTrigger value="meditations">Meditations</TabsTrigger>
                <TabsTrigger value="recipes">Recipes</TabsTrigger>
              </TabsList>
              
              <TabsContent value="products" className="space-y-2">
                <h4 className="font-semibold">All Products in Experience:</h4>
                <div className="grid gap-2">
                  {experience.products.map((product, idx) => (
                    <div key={idx} className="flex items-center justify-between p-2 bg-gray-50 rounded">
                      <span className="text-sm">{product}</span>
                      <Button size="sm" variant="outline">View</Button>
                    </div>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="meditations" className="space-y-4">
                {experience.meditations && experience.meditations.length > 0 ? (
                  <div className="space-y-4">
                    <div className="bg-purple-50 p-3 rounded">
                      <p className="text-sm text-purple-800 font-medium">🧘‍♀️ Purchasable Meditations</p>
                      <p className="text-xs text-purple-600 mt-1">Add these guided meditations to your client app library</p>
                    </div>
                    {experience.meditations.map((meditation) => (
                      <MeditationCard 
                        key={meditation.id} 
                        meditation={meditation}
                        onPurchase={handlePurchaseMeditation}
                      />
                    ))}
                  </div>
                ) : (
                  <p className="text-sm text-gray-500">No meditations available for this experience yet.</p>
                )}
              </TabsContent>
              
              <TabsContent value="recipes" className="space-y-4">
                {experience.recipes.map((recipe, idx) => (
                  <DIYCard 
                    key={idx} 
                    recipe={{
                      ...recipe,
                      estimatedCost: 'View Products',
                      upsellProducts: []
                    }} 
                  />
                ))}
              </TabsContent>
            </Tabs>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ExperienceCard;