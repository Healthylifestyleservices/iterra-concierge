import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { SacredGeometryOverlay } from '@/components/sacred-geometry';
import { motion } from 'framer-motion';

interface EmotionalResponse {
  oils: string[];
  action: string;
  geometry: string;
  synergy?: boolean;
  states?: string[];
  diyRecipes?: string[];
  diyRecipeLink?: string;
  intakeFormLink?: string;
  learnMoreLink?: string;
}

interface EmotionalResponseDisplayProps {
  response: EmotionalResponse;
  onNavigate?: (path: string) => void;
}

export const EmotionalResponseDisplay: React.FC<EmotionalResponseDisplayProps> = ({ 
  response, 
  onNavigate 
}) => {
  const handleNavigation = (path: string) => {
    if (onNavigate) {
      onNavigate(path);
    } else {
      window.location.href = path;
    }
  };

  return (
    <div className="relative">
      <SacredGeometryOverlay />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Card className="bg-white/90 backdrop-blur-sm border-purple-200 shadow-lg">
          <CardHeader>
            <CardTitle className="text-purple-800 flex items-center gap-2">
              {response.synergy ? (
                <>
                  <span>Emotional Synergy Blend</span>
                  <Badge variant="secondary">Multiple States</Badge>
                </>
              ) : (
                'Aromatherapy Guidance'
              )}
            </CardTitle>
          </CardHeader>
          
          <CardContent className="space-y-4">
            {response.synergy && response.states && (
              <div>
                <h4 className="font-semibold text-purple-700 mb-2">Detected States:</h4>
                <div className="flex flex-wrap gap-2">
                  {response.states.map((state, index) => (
                    <Badge key={index} variant="outline" className="capitalize">
                      {state}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
            
            <div>
              <h4 className="font-semibold text-purple-700 mb-2">Recommended Oils:</h4>
              <div className="flex flex-wrap gap-2">
                {response.oils.map((oil, index) => (
                  <Badge key={index} className="bg-purple-100 text-purple-800">
                    {oil}
                  </Badge>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-purple-700 mb-2">Guided Action:</h4>
              <p className="text-gray-700 leading-relaxed">{response.action}</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-4">
              {(response.diyRecipes || response.diyRecipeLink) && (
                <Button 
                  variant="outline" 
                  className="border-purple-300 text-purple-700 hover:bg-purple-50"
                  onClick={() => handleNavigation(response.diyRecipeLink || response.diyRecipes?.[0] || '/recipes')}
                >
                  DIY Recipes
                </Button>
              )}
              
              {response.intakeFormLink && (
                <Button 
                  variant="outline" 
                  className="border-purple-300 text-purple-700 hover:bg-purple-50"
                  onClick={() => handleNavigation(response.intakeFormLink)}
                >
                  Personal Assessment
                </Button>
              )}
              
              {response.learnMoreLink && (
                <Button 
                  variant="outline" 
                  className="border-purple-300 text-purple-700 hover:bg-purple-50"
                  onClick={() => handleNavigation(response.learnMoreLink)}
                >
                  Learn More
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};