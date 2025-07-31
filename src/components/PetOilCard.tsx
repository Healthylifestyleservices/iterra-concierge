import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { ExternalLink, AlertTriangle, Utensils } from 'lucide-react';
import { PetOil } from '@/data/petOilsData';

interface PetOilCardProps {
  oil: PetOil;
  selectedPet: string;
}

const PetOilCard: React.FC<PetOilCardProps> = ({ oil, selectedPet }) => {
  const isSafeForPet = oil.safeFor.includes(selectedPet as any);
  const dilutionForPet = oil.dilution[selectedPet as keyof typeof oil.dilution];

  return (
    <Card className={`${isSafeForPet ? 'border-green-200 bg-green-50' : 'border-red-200 bg-red-50'}`}>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span className="flex items-center gap-2">
            {oil.name}
            {oil.foodSafe && isSafeForPet && (
              <Utensils className="h-4 w-4 text-green-600" title="Food Safe" />
            )}
          </span>
          {!isSafeForPet && (
            <AlertTriangle className="h-5 w-5 text-red-500" />
          )}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {!isSafeForPet && (
          <Alert className="bg-red-100 border-red-300">
            <AlertTriangle className="h-4 w-4" />
            <AlertDescription className="text-red-800">
              ⚠️ NOT SAFE for {selectedPet}!
            </AlertDescription>
          </Alert>
        )}
        
        {isSafeForPet && (
          <>
            <div>
              <h4 className="font-medium mb-2">Uses:</h4>
              <div className="flex flex-wrap gap-1">
                {oil.uses.map((use, index) => (
                  <Badge key={index} variant="outline" className="text-xs">{use}</Badge>
                ))}
              </div>
            </div>

            {dilutionForPet && (
              <div className="bg-yellow-100 p-2 rounded">
                <p className="text-sm font-medium">💧 Dilution: {dilutionForPet}</p>
              </div>
            )}

            <div>
              <h4 className="font-medium mb-1">Application Methods:</h4>
              <ul className="text-sm space-y-1">
                {oil.application.map((app, index) => (
                  <li key={index}>• {app}</li>
                ))}
              </ul>
            </div>

            {oil.foodSafe && oil.foodUses && (
              <div className="bg-green-100 p-2 rounded">
                <h4 className="font-medium mb-1 flex items-center gap-1">
                  <Utensils className="h-4 w-4" />
                  Food Uses:
                </h4>
                <ul className="text-sm space-y-1">
                  {oil.foodUses.map((use, index) => (
                    <li key={index}>• {use}</li>
                  ))}
                </ul>
              </div>
            )}

            <div>
              <h4 className="font-medium mb-1 text-red-600">⚠️ Important Warnings:</h4>
              <ul className="text-sm space-y-1 text-red-700">
                {oil.warnings.map((warning, index) => (
                  <li key={index}>• {warning}</li>
                ))}
              </ul>
            </div>

            {oil.productLink && (
              <Button 
                variant="outline" 
                size="sm" 
                className="w-full"
                onClick={() => window.open(oil.productLink, '_blank')}
              >
                <ExternalLink className="h-4 w-4 mr-2" />
                Product Information
              </Button>
            )}
          </>
        )}
      </CardContent>
    </Card>
  );
};

export default PetOilCard;