import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Star, Gift } from 'lucide-react';
import { BusinessTool } from '@/data/businessToolsData';

interface BusinessToolCardProps {
  tool: BusinessTool;
}

const BusinessToolCard: React.FC<BusinessToolCardProps> = ({ tool }) => {
  const getPlatformColor = (platform?: string) => {
    switch (platform) {
      case 'Instagram': return 'from-pink-500 to-purple-500';
      case 'Facebook': return 'from-blue-500 to-blue-600';
      case 'TikTok': return 'from-black to-gray-800';
      case 'Pinterest': return 'from-red-500 to-red-600';
      case 'YouTube': return 'from-red-500 to-red-700';
      case 'LinkedIn': return 'from-blue-600 to-blue-800';
      default: return 'from-purple-500 to-pink-500';
    }
  };

  const getCategoryIcon = () => {
    if (tool.isHoliday) return <Gift className="h-5 w-5" />;
    return <Star className="h-5 w-5" />;
  };

  return (
    <Card className={`h-full hover:shadow-lg transition-all duration-300 ${tool.isHoliday ? 'border-amber-200 bg-gradient-to-br from-amber-50 to-orange-50' : 'hover:scale-105'}`}>
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-3">
            <div className={`p-2 bg-gradient-to-r ${getPlatformColor(tool.platform)} rounded-lg text-white`}>
              {getCategoryIcon()}
            </div>
            <div>
              <CardTitle className="text-lg leading-tight">{tool.title}</CardTitle>
              {tool.platform && (
                <Badge variant="secondary" className="mt-1 text-xs">
                  {tool.platform}
                </Badge>
              )}
            </div>
          </div>
          {tool.isHoliday && (
            <Badge className="bg-gradient-to-r from-amber-500 to-orange-500 text-white">
              {tool.seasonalTheme}
            </Badge>
          )}
        </div>
        <p className="text-gray-600 text-sm mt-2">{tool.description}</p>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <h4 className="font-medium text-sm mb-2 text-gray-800">Features:</h4>
            <div className="flex flex-wrap gap-1">
              {tool.features.slice(0, 4).map((feature, index) => (
                <Badge key={index} variant="outline" className="text-xs">
                  {feature}
                </Badge>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-medium text-sm mb-2 text-gray-800">Benefits:</h4>
            <ul className="text-xs text-gray-600 space-y-1">
              {tool.benefits.slice(0, 3).map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-green-500 mr-1">•</span>
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
          
          <Button 
            className={`w-full bg-gradient-to-r ${getPlatformColor(tool.platform)} hover:opacity-90 transition-opacity`}
            onClick={() => window.open('https://www.doterra.com/US/en/site/yoursite', '_blank')}
          >
            <ExternalLink className="h-4 w-4 mr-2" />
            Access Tool
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default BusinessToolCard;