import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from './ui/collapsible';
import { ChevronDown, ChevronRight, ExternalLink, Baby, Heart } from 'lucide-react';
import { singleOilsDatabase, type OilCategory, type SingleOil } from '../data/singleOilsDatabase';
import { singleOilsDatabasePart2 } from '../data/singleOilsDatabasePart2';

const SingleOilsDropdown = () => {
  const [openCategories, setOpenCategories] = useState<string[]>([]);
  const allCategories = [...singleOilsDatabase, ...singleOilsDatabasePart2];

  const toggleCategory = (categoryName: string) => {
    setOpenCategories(prev => 
      prev.includes(categoryName) 
        ? prev.filter(name => name !== categoryName)
        : [...prev, categoryName]
    );
  };

  const getSafetyColor = (safety: string) => {
    if (safety.toLowerCase().includes('yes')) return 'bg-green-100 text-green-800';
    if (safety.toLowerCase().includes('caution')) return 'bg-yellow-100 text-yellow-800';
    if (safety.toLowerCase().includes('no')) return 'bg-red-100 text-red-800';
    return 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="text-3xl font-bold mb-2 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
          🌿 Single Essential Oils Master Database
        </h3>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Complete reference with botanical names, benefits, chakra alignment, frequencies, and safety information
        </p>
      </div>

      <div className="space-y-4">
        {allCategories.map((category: OilCategory) => {
          const isOpen = openCategories.includes(category.name);
          
          return (
            <Collapsible key={category.name} open={isOpen} onOpenChange={() => toggleCategory(category.name)}>
              <Card className="overflow-hidden border-2 hover:shadow-lg transition-all duration-200">
                <CollapsibleTrigger className="w-full">
                  <CardHeader className="bg-gradient-to-r from-purple-50 to-blue-50 hover:from-purple-100 hover:to-blue-100 transition-colors">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <span className="text-3xl">{category.emoji}</span>
                        <div className="text-left">
                          <CardTitle className="text-2xl font-bold text-gray-800">
                            {category.name}
                          </CardTitle>
                          <CardDescription className="text-lg text-gray-600">
                            {category.description}
                          </CardDescription>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="text-right text-sm">
                          <Badge variant="outline" className="mb-1">
                            🧘‍♀️ {category.chakra}
                          </Badge>
                          <br />
                          <Badge variant="secondary">
                            🎵 {category.frequency}
                          </Badge>
                        </div>
                        {isOpen ? <ChevronDown className="h-6 w-6" /> : <ChevronRight className="h-6 w-6" />}
                      </div>
                    </div>
                  </CardHeader>
                </CollapsibleTrigger>
                
                <CollapsibleContent>
                  <CardContent className="p-6">
                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                      {category.oils.map((oil: SingleOil, index: number) => (
                        <Card key={index} className="border border-gray-200 hover:shadow-md transition-shadow">
                          <CardContent className="p-4">
                            <div className="space-y-3">
                              <div>
                                <h4 className="font-bold text-lg text-gray-800 mb-1">
                                  🌿 {oil.name}
                                </h4>
                                <p className="text-sm text-gray-600 italic font-medium">
                                  {oil.botanicalName}
                                </p>
                              </div>

                              <div className="space-y-2">
                                <div>
                                  <p className="text-xs font-semibold text-purple-600 mb-1">BENEFITS:</p>
                                  <div className="flex flex-wrap gap-1">
                                    {oil.benefits.map((benefit, i) => (
                                      <Badge key={i} variant="outline" className="text-xs bg-purple-50 border-purple-200">
                                        {benefit}
                                      </Badge>
                                    ))}
                                  </div>
                                </div>

                                <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-2 rounded">
                                  <p className="text-xs"><span className="font-semibold text-blue-600">🧘‍♀️ Chakra:</span> {oil.chakra}</p>
                                  <p className="text-xs"><span className="font-semibold text-purple-600">🎵 Frequency:</span> {oil.frequency}</p>
                                </div>

                                <div className="space-y-1">
                                  <div className="flex items-center gap-2">
                                    <Baby className="h-3 w-3" />
                                    <Badge className={`text-xs ${getSafetyColor(oil.kidSafe)}`}>
                                      Kids: {oil.kidSafe}
                                    </Badge>
                                  </div>
                                  <div className="flex items-center gap-2">
                                    <Heart className="h-3 w-3" />
                                    <Badge className={`text-xs ${getSafetyColor(oil.petSafe)}`}>
                                      Pets: {oil.petSafe}
                                    </Badge>
                                  </div>
                                </div>

                                <div>
                                  <p className="text-xs font-semibold text-green-600 mb-1">USE CASES:</p>
                                  <div className="flex flex-wrap gap-1">
                                    {oil.tags.map((tag, i) => (
                                      <Badge key={i} variant="secondary" className="text-xs bg-green-50 text-green-700">
                                        {tag}
                                      </Badge>
                                    ))}
                                  </div>
                                </div>
                              </div>

                              <Button asChild size="sm" className="w-full bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600">
                                <a href={oil.url} target="_blank" rel="noopener noreferrer">
                                  🛒 Shop Now <ExternalLink className="h-3 w-3 ml-1" />
                                </a>
                              </Button>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </CardContent>
                </CollapsibleContent>
              </Card>
            </Collapsible>
          );
        })}
      </div>
    </div>
  );
};

export default SingleOilsDropdown;