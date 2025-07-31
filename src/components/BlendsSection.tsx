import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ExternalLink } from 'lucide-react';
import { dotTerraBlends } from '@/data/dotTerraBlends';
import { dotTerraBlendsComplete } from '@/data/dotTerraBlendsComplete';
import { dotTerraBlendsComplete2 } from '@/data/dotTerraBlendsComplete2';
import { dotTerraBlendsComplete3 } from '@/data/dotTerraBlendsComplete3';

const BlendsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  
  // Combine all blend data
  const allBlends = [
    ...dotTerraBlends,
    ...dotTerraBlendsComplete,
    ...dotTerraBlendsComplete2,
    ...dotTerraBlendsComplete3
  ];
  
  // Get unique categories
  const categories = ['all', ...Array.from(new Set(allBlends.map(blend => blend.category)))];
  
  // Filter blends by category
  const filteredBlends = selectedCategory === 'all' 
    ? allBlends 
    : allBlends.filter(blend => blend.category === selectedCategory);

  const handleLearnMore = (blend: any) => {
    if (blend.productLink) {
      window.open(blend.productLink, '_blank');
    } else {
      // Fallback to general product search
      const searchTerm = blend.name.split('(')[0].trim();
      window.open(`https://www.doterra.com/US/en/search?q=${encodeURIComponent(searchTerm)}`, '_blank');
    }
  };

  return (
    <div className="space-y-6">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold text-gray-900">🌈 Essential Oil Blends</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Complete list of all current proprietary blends (2024) with botanical ingredients
        </p>
      </div>
      
      <div className="flex justify-center">
        <Select value={selectedCategory} onValueChange={setSelectedCategory}>
          <SelectTrigger className="w-80">
            <SelectValue placeholder="Select a category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>
            {categories.slice(1).map((category) => (
              <SelectItem key={category} value={category}>
                {category}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredBlends.map((blend, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-lg">{blend.name}</CardTitle>
              <Badge variant="secondary" className="w-fit">
                {blend.category}
              </Badge>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <h4 className="font-semibold text-sm text-gray-700 mb-1">Ingredients:</h4>
                <p className="text-sm text-gray-600 italic">{blend.ingredients}</p>
              </div>
              {blend.keyBenefits && (
                <div>
                  <h4 className="font-semibold text-sm text-gray-700 mb-1">Key Benefits:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {blend.keyBenefits.map((benefit, idx) => (
                      <li key={idx}>• {benefit}</li>
                    ))}
                  </ul>
                </div>
              )}
              <Button 
                variant="outline" 
                size="sm" 
                className="w-full"
                onClick={() => handleLearnMore(blend)}
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Learn More
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default BlendsSection;