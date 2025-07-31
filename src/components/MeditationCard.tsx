import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Play, Clock, Sparkles } from 'lucide-react';
import { Meditation } from '@/data/experiencesData';

interface MeditationCardProps {
  meditation: Meditation;
  onPurchase?: (meditationId: string) => void;
}

const MeditationCard: React.FC<MeditationCardProps> = ({ meditation, onPurchase }) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <CardHeader className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Sparkles className="h-5 w-5" />
            <CardTitle className="text-lg">{meditation.title}</CardTitle>
          </div>
          <Badge variant="secondary" className="bg-white/20">
            <Clock className="h-3 w-3 mr-1" />
            {meditation.duration}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="p-4 space-y-4">
        <p className="text-gray-700 text-sm">{meditation.description}</p>
        
        <div className="space-y-2">
          <h4 className="font-semibold text-sm">Essential Oil Pairings:</h4>
          <div className="flex flex-wrap gap-1">
            {meditation.oilPairings.map((oil, idx) => (
              <Badge key={idx} variant="outline" className="text-xs">
                {oil}
              </Badge>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between pt-2">
          <div className="flex items-center space-x-2">
            <Play className="h-4 w-4 text-green-600" />
            <span className="text-sm text-gray-600">Audio Meditation</span>
          </div>
          <Button 
            size="sm" 
            className="bg-gradient-to-r from-purple-500 to-indigo-600"
            onClick={() => onPurchase?.(meditation.id)}
          >
            Add to App - {meditation.price}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default MeditationCard;