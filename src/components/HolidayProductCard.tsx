import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Gift, Heart, Sparkles } from 'lucide-react';
import { HolidayProduct } from '@/data/holidayProductCatalog';

interface HolidayProductCardProps {
  product: HolidayProduct;
}

const HolidayProductCard: React.FC<HolidayProductCardProps> = ({ product }) => {
  const getHolidayIcon = (theme: string) => {
    switch (theme) {
      case 'Valentine\'s Day': return <Heart className="h-4 w-4" />;
      case 'Christmas': return <Sparkles className="h-4 w-4" />;
      default: return <Gift className="h-4 w-4" />;
    }
  };

  const getThemeColor = (theme: string) => {
    switch (theme) {
      case 'Valentine\'s Day': return 'bg-pink-100 text-pink-800 border-pink-200';
      case 'Christmas': return 'bg-green-100 text-green-800 border-green-200';
      case 'Easter': return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'Mother\'s Day': return 'bg-rose-100 text-rose-800 border-rose-200';
      case 'Summer': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'Back to School': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'Thanksgiving': return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'Winter': return 'bg-slate-100 text-slate-800 border-slate-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <Card className="h-full hover:shadow-lg transition-shadow duration-200">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <CardTitle className="text-lg font-semibold leading-tight">
            {product.name}
          </CardTitle>
          {product.giftIdea && (
            <Badge variant="secondary" className="ml-2">
              <Gift className="h-3 w-3 mr-1" />
              Gift
            </Badge>
          )}
        </div>
        <div className="flex items-center gap-2">
          <Badge className={getThemeColor(product.holidayTheme)}>
            {getHolidayIcon(product.holidayTheme)}
            {product.holidayTheme}
          </Badge>
          <Badge variant="outline">{product.category}</Badge>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <p className="text-gray-600 text-sm leading-relaxed">
          {product.description}
        </p>
        
        <div>
          <h4 className="font-medium text-sm mb-2">Key Benefits:</h4>
          <ul className="text-sm text-gray-600 space-y-1">
            {product.benefits.slice(0, 3).map((benefit, index) => (
              <li key={index} className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                {benefit}
              </li>
            ))}
          </ul>
        </div>

        {product.recipe && (
          <div className="bg-gray-50 p-3 rounded-lg">
            <h4 className="font-medium text-sm mb-2">Quick Recipe:</h4>
            <div className="text-xs text-gray-600">
              <div className="mb-1">
                <strong>Mix:</strong> {product.recipe.ingredients.join(', ')}
              </div>
              <div>
                <strong>Use:</strong> {product.recipe.instructions[0]}
              </div>
            </div>
          </div>
        )}
        
        <div className="flex items-center justify-between pt-2">
          <Button 
            onClick={() => window.open(product.url, '_blank')}
            className="bg-green-600 hover:bg-green-700 w-full"
          >
            <ExternalLink className="h-4 w-4 mr-2" />
            Learn More
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default HolidayProductCard;