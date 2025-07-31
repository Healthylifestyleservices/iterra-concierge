import React, { useState } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Leaf, Shield, AlertTriangle } from 'lucide-react';
import { oilDatabase, OilProfile } from '@/data/oilDatabase';

const SingleOilDropdown: React.FC = () => {
  const [selectedOil, setSelectedOil] = useState<string>('');
  const [oilProfile, setOilProfile] = useState<OilProfile | null>(null);

  const handleOilSelect = (oilKey: string) => {
    setSelectedOil(oilKey);
    setOilProfile(oilDatabase[oilKey] || null);
  };

  const oilOptions = Object.keys(oilDatabase).map(key => ({
    value: key,
    label: oilDatabase[key].name,
    scientific: oilDatabase[key].scientificName
  }));

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="text-2xl font-bold mb-4 text-purple-800">🌿 Single Essential Oils Database</h3>
        <p className="text-gray-600 mb-6">Explore detailed profiles of individual essential oils with safety information and usage guides</p>
        
        <Select onValueChange={handleOilSelect}>
          <SelectTrigger className="w-full max-w-md mx-auto">
            <SelectValue placeholder="Select an essential oil to explore..." />
          </SelectTrigger>
          <SelectContent>
            {oilOptions.map((oil) => (
              <SelectItem key={oil.value} value={oil.value}>
                <div className="flex flex-col items-start">
                  <span className="font-medium">{oil.label}</span>
                  <span className="text-sm text-gray-500 italic">{oil.scientific}</span>
                </div>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {oilProfile && (
        <Card className="border-2 border-purple-200 shadow-lg">
          <CardHeader className="bg-gradient-to-r from-purple-100 to-pink-100">
            <CardTitle className="flex items-center gap-3">
              <Leaf className="h-6 w-6 text-green-600" />
              <div>
                <h3 className="text-2xl font-bold text-purple-800">{oilProfile.name}</h3>
                <p className="text-sm italic text-gray-600">{oilProfile.scientificName}</p>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6 space-y-6">
            {/* Benefits */}
            <div>
              <h4 className="font-semibold text-lg mb-3 text-purple-700">✨ Key Benefits</h4>
              <div className="flex flex-wrap gap-2">
                {oilProfile.benefits.map((benefit, index) => (
                  <Badge key={index} variant="outline" className="bg-purple-50 border-purple-200">
                    {benefit}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Pet Safety */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <h4 className="font-semibold text-lg mb-2 flex items-center gap-2">
                {oilProfile.petSafety.safe ? (
                  <Shield className="h-5 w-5 text-green-600" />
                ) : (
                  <AlertTriangle className="h-5 w-5 text-red-600" />
                )}
                Pet Safety Information
              </h4>
              <p className={`text-sm ${
                oilProfile.petSafety.safe ? 'text-green-700' : 'text-red-700'
              }`}>
                {oilProfile.petSafety.notes}
              </p>
            </div>

            {/* History & Education */}
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-blue-50 rounded-lg p-4">
                <h4 className="font-semibold text-blue-800 mb-2">📚 Historical Background</h4>
                <p className="text-sm text-blue-700">{oilProfile.history}</p>
              </div>
              <div className="bg-green-50 rounded-lg p-4">
                <h4 className="font-semibold text-green-800 mb-2">🔬 Scientific Education</h4>
                <p className="text-sm text-green-700">{oilProfile.education}</p>
              </div>
            </div>

            {/* Luxury Fact */}
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-4">
              <h4 className="font-semibold text-purple-800 mb-2">💎 Luxury Fact</h4>
              <p className="text-sm text-purple-700">{oilProfile.luxuryFact}</p>
            </div>

            {/* Recipes */}
            <div>
              <h4 className="font-semibold text-lg mb-3 text-purple-700">🧪 Usage Recipes</h4>
              <div className="grid gap-4">
                {oilProfile.recipes.map((recipe, index) => (
                  <Card key={index} className="border border-purple-200">
                    <CardContent className="p-4">
                      <h5 className="font-medium text-purple-800 mb-2">{recipe.name}</h5>
                      <div className="space-y-2">
                        <div>
                          <span className="text-sm font-medium text-gray-700">Ingredients:</span>
                          <ul className="text-sm text-gray-600 ml-4">
                            {recipe.ingredients.map((ingredient, i) => (
                              <li key={i}>• {ingredient}</li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <span className="text-sm font-medium text-gray-700">Instructions:</span>
                          <p className="text-sm text-gray-600">{recipe.instructions}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Product Link */}
            <div className="text-center">
              <Button asChild className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                <a href={oilProfile.productLink} target="_blank" rel="noopener noreferrer">
                  Learn More About {oilProfile.name} <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default SingleOilDropdown;