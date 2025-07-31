import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Sparkles, Droplets, Heart } from 'lucide-react';

interface SynergyBlendProps {
  states: string[];
  oils: string[];
  onCreateBlend?: () => void;
  onViewRecipes?: () => void;
}

export const EmotionalSynergyBlend: React.FC<SynergyBlendProps> = ({
  states,
  oils,
  onCreateBlend,
  onViewRecipes
}) => {
  const blendName = `${states[0].charAt(0).toUpperCase() + states[0].slice(1)} Synergy`;
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200 shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-purple-800">
            <Sparkles className="w-5 h-5" />
            {blendName}
            <Badge variant="secondary" className="ml-auto">
              Custom Blend
            </Badge>
          </CardTitle>
          <p className="text-sm text-purple-600">
            A personalized aromatherapy blend addressing multiple emotional states
          </p>
        </CardHeader>
        
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold text-purple-700 mb-2 flex items-center gap-2">
              <Heart className="w-4 h-4" />
              Emotional States Addressed:
            </h4>
            <div className="flex flex-wrap gap-2">
              {states.map((state, index) => (
                <Badge key={index} variant="outline" className="capitalize border-purple-300">
                  {state.replace(/([A-Z])/g, ' $1').trim()}
                </Badge>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-purple-700 mb-2 flex items-center gap-2">
              <Droplets className="w-4 h-4" />
              Synergy Oils:
            </h4>
            <div className="grid grid-cols-2 gap-2">
              {oils.map((oil, index) => (
                <div key={index} className="bg-white/60 rounded-lg p-2 text-center">
                  <span className="text-sm font-medium text-purple-800">{oil}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-white/60 rounded-lg p-4">
            <h4 className="font-semibold text-purple-700 mb-2">Synergy Benefits:</h4>
            <p className="text-sm text-gray-700 leading-relaxed">
              This custom blend combines the therapeutic properties of multiple oils to create 
              a holistic approach to emotional wellness. The synergistic effect amplifies 
              individual oil benefits while providing comprehensive support for your unique 
              emotional landscape.
            </p>
          </div>
          
          <div className="flex gap-3 pt-2">
            <Button 
              onClick={onCreateBlend}
              className="flex-1 bg-purple-600 hover:bg-purple-700"
            >
              Create My Blend
            </Button>
            <Button 
              onClick={onViewRecipes}
              variant="outline"
              className="flex-1 border-purple-300 text-purple-700 hover:bg-purple-50"
            >
              View DIY Recipes
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};