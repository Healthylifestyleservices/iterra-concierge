import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ChevronDown, ChevronUp, ExternalLink } from 'lucide-react';
import { completeSingleOilsDatabase } from '../data/completeSingleOilsDatabase';
import { completeSingleOilsDatabasePart2 } from '../data/completeSingleOilsDatabasePart2';
import { completeSingleOilsDatabasePart3 } from '../data/completeSingleOilsDatabasePart3';
import { completeSingleOilsDatabasePart4 } from '../data/completeSingleOilsDatabasePart4';

const ComprehensiveSingleOilsDropdown = () => {
  const [expandedCategories, setExpandedCategories] = useState<string[]>([]);
  
  const allCategories = [
    ...completeSingleOilsDatabase,
    ...completeSingleOilsDatabasePart2,
    ...completeSingleOilsDatabasePart3,
    ...completeSingleOilsDatabasePart4
  ];

  const toggleCategory = (categoryName: string) => {
    setExpandedCategories(prev => 
      prev.includes(categoryName)
        ? prev.filter(name => name !== categoryName)
        : [...prev, categoryName]
    );
  };

  const getSafetyColor = (safety: string) => {
    if (safety.includes('Yes') || safety.includes('gentle')) return 'bg-green-100 text-green-800';
    if (safety.includes('Caution') || safety.includes('Spot')) return 'bg-yellow-100 text-yellow-800';
    if (safety.includes('No')) return 'bg-red-100 text-red-800';
    return 'bg-gray-100 text-gray-800';
  };

  return (
    <Card className="mb-8 shadow-xl border-0 bg-gradient-to-br from-emerald-50 to-teal-50">
      <CardHeader className="bg-gradient-to-r from-emerald-100 to-teal-100 border-b-4 border-emerald-200">
        <CardTitle className="text-3xl font-bold text-emerald-800 flex items-center gap-3">
          🌿 Complete Single Essential Oils Master Database
        </CardTitle>
        <p className="text-emerald-700 text-lg">
          Comprehensive collection of all doTERRA single oils with botanical names, benefits, chakra alignment, frequencies, and safety information.
        </p>
      </CardHeader>
      <CardContent className="p-6">
        <div className="space-y-4">
          {allCategories.map((category) => {
            const isExpanded = expandedCategories.includes(category.name);
            return (
              <div key={category.name} className="border border-emerald-200 rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleCategory(category.name)}
                  className="w-full p-4 bg-gradient-to-r from-emerald-50 to-teal-50 hover:from-emerald-100 hover:to-teal-100 transition-all duration-200 flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{category.emoji}</span>
                    <div className="text-left">
                      <h3 className="text-xl font-bold text-emerald-800">{category.name}</h3>
                      <p className="text-emerald-600 text-sm">{category.description}</p>
                      <div className="flex gap-2 mt-1">
                        <Badge variant="outline" className="text-xs border-emerald-300 text-emerald-700">
                          🧘‍♀️ {category.chakra}
                        </Badge>
                        <Badge variant="outline" className="text-xs border-teal-300 text-teal-700">
                          🎵 {category.frequency}
                        </Badge>
                      </div>
                    </div>
                  </div>
                  {isExpanded ? <ChevronUp className="h-5 w-5 text-emerald-600" /> : <ChevronDown className="h-5 w-5 text-emerald-600" />}
                </button>
                
                {isExpanded && (
                  <div className="p-4 bg-white">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {category.oils.map((oil, index) => (
                        <Card key={index} className="border border-emerald-100 hover:shadow-md transition-shadow">
                          <CardContent className="p-4">
                            <h4 className="font-bold text-lg text-emerald-800 mb-1">{oil.name}</h4>
                            <p className="text-sm text-gray-600 italic mb-3">{oil.botanicalName}</p>
                            
                            <div className="space-y-3">
                              <div>
                                <p className="text-xs font-semibold text-emerald-700 mb-1">Benefits:</p>
                                <div className="flex flex-wrap gap-1">
                                  {oil.benefits.map((benefit, i) => (
                                    <Badge key={i} variant="outline" className="text-xs bg-emerald-50 border-emerald-200 text-emerald-700">
                                      {benefit}
                                    </Badge>
                                  ))}
                                </div>
                              </div>
                              
                              <div className="grid grid-cols-2 gap-2 text-xs">
                                <div>
                                  <p className="font-semibold text-purple-700">🧘‍♀️ Chakra:</p>
                                  <p className="text-purple-600">{oil.chakra}</p>
                                </div>
                                <div>
                                  <p className="font-semibold text-blue-700">🎵 Frequency:</p>
                                  <p className="text-blue-600">{oil.frequency}</p>
                                </div>
                              </div>
                              
                              <div className="space-y-1">
                                <div className="flex items-center gap-2">
                                  <span className="text-xs font-semibold">👶 Kids:</span>
                                  <Badge className={`text-xs ${getSafetyColor(oil.kidSafe)}`}>
                                    {oil.kidSafe}
                                  </Badge>
                                </div>
                                <div className="flex items-center gap-2">
                                  <span className="text-xs font-semibold">🐾 Pets:</span>
                                  <Badge className={`text-xs ${getSafetyColor(oil.petSafe)}`}>
                                    {oil.petSafe}
                                  </Badge>
                                </div>
                              </div>
                              
                              <div>
                                <p className="text-xs font-semibold text-gray-700 mb-1">Tags:</p>
                                <div className="flex flex-wrap gap-1">
                                  {oil.tags.map((tag, i) => (
                                    <Badge key={i} variant="secondary" className="text-xs bg-gray-100 text-gray-700">
                                      {tag}
                                    </Badge>
                                  ))}
                                </div>
                              </div>
                              
                              <Button asChild size="sm" className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white">
                                <a href={oil.url} target="_blank" rel="noopener noreferrer">
                                  🛒 Learn More <ExternalLink className="h-3 w-3 ml-1" />
                                </a>
                              </Button>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};

export default ComprehensiveSingleOilsDropdown;