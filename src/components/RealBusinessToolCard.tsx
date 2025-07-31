import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Star, DollarSign } from 'lucide-react';
import { RealBusinessTool } from '@/data/realBusinessTools';

interface RealBusinessToolCardProps {
  tool: RealBusinessTool;
}

const RealBusinessToolCard: React.FC<RealBusinessToolCardProps> = ({ tool }) => {
  const getTypeColor = (type: string) => {
    switch (type) {
      case 'free': return 'bg-green-100 text-green-800';
      case 'paid': return 'bg-blue-100 text-blue-800';
      case 'freemium': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getPlatformColor = (platform?: string) => {
    switch (platform) {
      case 'TikTok': return 'from-pink-500 to-red-500';
      case 'Instagram': return 'from-purple-500 to-pink-500';
      case 'YouTube': return 'from-red-500 to-red-600';
      case 'Facebook': return 'from-blue-500 to-blue-600';
      case 'Pinterest': return 'from-red-400 to-pink-500';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  return (
    <Card className="h-full hover:shadow-lg transition-all duration-300 group border-l-4 border-l-blue-500">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <CardTitle className="text-lg font-bold group-hover:text-blue-600 transition-colors">
            {tool.title}
          </CardTitle>
          <div className="flex gap-2">
            <Badge className={getTypeColor(tool.type)}>
              {tool.type === 'free' ? '🆓 Free' : tool.type === 'paid' ? '💰 Paid' : '🔄 Freemium'}
            </Badge>
            {tool.platform && (
              <Badge className={`bg-gradient-to-r ${getPlatformColor(tool.platform)} text-white`}>
                {tool.platform}
              </Badge>
            )}
          </div>
        </div>
        <p className="text-gray-600 text-sm leading-relaxed">{tool.description}</p>
        {tool.price && (
          <div className="flex items-center gap-1 text-green-600 font-semibold">
            <DollarSign className="h-4 w-4" />
            {tool.price}
          </div>
        )}
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <h4 className="font-semibold text-sm mb-2 text-gray-800">✨ Key Features:</h4>
          <div className="flex flex-wrap gap-1">
            {tool.features.map((feature, index) => (
              <Badge key={index} variant="outline" className="text-xs">
                {feature}
              </Badge>
            ))}
          </div>
        </div>
        
        <div>
          <h4 className="font-semibold text-sm mb-2 text-gray-800">🎯 Benefits:</h4>
          <ul className="text-xs text-gray-600 space-y-1">
            {tool.benefits.map((benefit, index) => (
              <li key={index} className="flex items-start gap-1">
                <Star className="h-3 w-3 text-yellow-500 mt-0.5 flex-shrink-0" />
                {benefit}
              </li>
            ))}
          </ul>
        </div>

        <Button 
          className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold"
          onClick={() => window.open(tool.link, '_blank')}
        >
          <ExternalLink className="h-4 w-4 mr-2" />
          Access Tool
        </Button>
      </CardContent>
    </Card>
  );
};

export default RealBusinessToolCard;