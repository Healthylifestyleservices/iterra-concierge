import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { AlertTriangle, ExternalLink } from 'lucide-react';
import { petOilCategories } from '@/data/petOilsData';
import PetOilCard from './PetOilCard';
import PetSafetyGuide from './PetSafetyGuide';

const PetSection: React.FC = () => {
  const [selectedPet, setSelectedPet] = useState('dogs');

  const petTypes = [
    { id: 'cats', name: 'Cats', icon: '🐱' },
    { id: 'dogs', name: 'Dogs', icon: '🐕' },
    { id: 'horses', name: 'Horses', icon: '🐴' }
  ];

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          🐾 Pet Essential Oil Safety Guide
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Safe essential oil solutions for cats, dogs, and horses
        </p>
      </div>

      <Alert className="bg-red-50 border-red-200">
        <AlertTriangle className="h-4 w-4 text-red-600" />
        <AlertDescription className="text-red-800">
          <strong>Veterinary Consultation Required:</strong> Always consult your veterinarian before using essential oils with pets. 
          Cats are especially sensitive and many oils are toxic to them.
        </AlertDescription>
      </Alert>

      <Tabs value={selectedPet} onValueChange={setSelectedPet} className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          {petTypes.map((pet) => (
            <TabsTrigger key={pet.id} value={pet.id} className="flex items-center gap-2">
              <span>{pet.icon}</span>
              {pet.name}
            </TabsTrigger>
          ))}
        </TabsList>

        {petTypes.map((pet) => (
          <TabsContent key={pet.id} value={pet.id} className="space-y-6">
            <PetSafetyGuide selectedPet={pet.id} />
            
            {petOilCategories.map((category, catIndex) => (
              <Card key={catIndex}>
                <CardHeader>
                  <CardTitle>{category.name}</CardTitle>
                  <p className="text-gray-600">{category.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {category.oils.map((oil, oilIndex) => (
                      <PetOilCard 
                        key={oilIndex} 
                        oil={oil} 
                        selectedPet={pet.id} 
                      />
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
            
            <Card className="bg-blue-50">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-3">Pet Care Resources</h3>
                <div className="space-y-2">
                  <Button 
                    variant="outline" 
                    className="w-full justify-start"
                    onClick={() => window.open('https://www.doterra.com/US/en/blog/spotlight-using-essential-oils-safely-around-pets', '_blank')}
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Essential Oil Safety Around Pets
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full justify-start"
                    onClick={() => window.open('https://www.doterra.com/US/en/blog/healthy-living-diy-pet-care-recipes', '_blank')}
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    DIY Pet Care Recipes
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default PetSection;