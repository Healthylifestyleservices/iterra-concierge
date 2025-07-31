import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { AlertTriangle, CheckCircle, XCircle } from 'lucide-react';
import { safeOilsByPet } from '@/data/petOilsData';

interface PetSafetyGuideProps {
  selectedPet: string;
}

const PetSafetyGuide: React.FC<PetSafetyGuideProps> = ({ selectedPet }) => {
  const safetyData = safeOilsByPet[selectedPet as keyof typeof safeOilsByPet];

  if (!safetyData) return null;

  return (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <AlertTriangle className="h-5 w-5 text-amber-500" />
          Safety Guide for {selectedPet.charAt(0).toUpperCase() + selectedPet.slice(1)}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <Alert className="bg-blue-50 border-blue-200">
          <AlertDescription>
            Always consult your veterinarian before using essential oils with pets. 
            Start with the lowest dilution and observe for any adverse reactions.
          </AlertDescription>
        </Alert>

        {safetyData.safe && (
          <div>
            <h4 className="font-medium mb-2 flex items-center gap-2 text-green-600">
              <CheckCircle className="h-4 w-4" />
              Generally Safe Oils
            </h4>
            <div className="flex flex-wrap gap-2">
              {safetyData.safe.map((oil, index) => (
                <Badge key={index} variant="secondary" className="bg-green-100 text-green-800">
                  {oil}
                </Badge>
              ))}
            </div>
          </div>
        )}

        {safetyData.caution && (
          <div>
            <h4 className="font-medium mb-2 flex items-center gap-2 text-amber-600">
              <AlertTriangle className="h-4 w-4" />
              Use with Caution
            </h4>
            <div className="flex flex-wrap gap-2">
              {safetyData.caution.map((oil, index) => (
                <Badge key={index} variant="secondary" className="bg-amber-100 text-amber-800">
                  {oil}
                </Badge>
              ))}
            </div>
          </div>
        )}

        {safetyData.avoid && (
          <div>
            <h4 className="font-medium mb-2 flex items-center gap-2 text-red-600">
              <XCircle className="h-4 w-4" />
              Avoid These Oils
            </h4>
            <div className="flex flex-wrap gap-2">
              {safetyData.avoid.map((oil, index) => (
                <Badge key={index} variant="secondary" className="bg-red-100 text-red-800">
                  {oil}
                </Badge>
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default PetSafetyGuide;