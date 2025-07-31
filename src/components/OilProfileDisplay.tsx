import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Sparkles, Heart, Shield, BookOpen, Clock, Crown, Zap, Eye } from 'lucide-react';
import { OilProfile } from '@/data/oilDatabase';

interface OilProfileDisplayProps {
  oil: OilProfile;
}

const OilProfileDisplay: React.FC<OilProfileDisplayProps> = ({ oil }) => {
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center gap-3">
          <Crown className="h-8 w-8 text-amber-500" />
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-amber-600 bg-clip-text text-transparent">
            {oil.name}
          </h1>
          <Crown className="h-8 w-8 text-amber-500" />
        </div>
        <p className="text-xl italic text-gray-600">{oil.scientificName}</p>
        <Badge variant="outline" className="text-lg px-4 py-2">
          {oil.maskedProductName}
        </Badge>
      </div>

      {/* Main Content Tabs */}
      <Tabs defaultValue="benefits" className="w-full">
        <TabsList className="grid w-full grid-cols-8">
          <TabsTrigger value="benefits">Benefits</TabsTrigger>
          <TabsTrigger value="chakras">Chakras</TabsTrigger>
          <TabsTrigger value="frequency">Frequency</TabsTrigger>
          <TabsTrigger value="safety">Pet Safety</TabsTrigger>
          <TabsTrigger value="recipes">Recipes</TabsTrigger>
          <TabsTrigger value="education">Science</TabsTrigger>
          <TabsTrigger value="history">History</TabsTrigger>
          <TabsTrigger value="luxury">Luxury</TabsTrigger>
        </TabsList>

        <TabsContent value="benefits" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Heart className="h-5 w-5 text-red-500" />
                Wellness Benefits
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-3">
                {oil.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg">
                    <Sparkles className="h-4 w-4 text-green-600" />
                    <span className="text-gray-800">{benefit}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="chakras" className="space-y-4">
          {oil.chakras && (
            <Card className="bg-gradient-to-br from-purple-50 to-indigo-50 border-purple-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Eye className="h-5 w-5 text-purple-600" />
                  Chakra Alignment
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 bg-white rounded-lg border border-purple-200">
                  <h4 className="font-semibold text-purple-800 mb-2">Primary Chakra:</h4>
                  <p className="text-lg font-medium text-purple-700">{oil.chakras.primary}</p>
                </div>
                {oil.chakras.secondary && (
                  <div className="p-4 bg-white rounded-lg border border-purple-200">
                    <h4 className="font-semibold text-purple-800 mb-2">Secondary Chakras:</h4>
                    <div className="space-y-1">
                      {oil.chakras.secondary.map((chakra, index) => (
                        <p key={index} className="text-purple-700">{chakra}</p>
                      ))}
                    </div>
                  </div>
                )}
                <div className="p-4 bg-gradient-to-r from-purple-100 to-indigo-100 rounded-lg">
                  <p className="text-gray-800 leading-relaxed">{oil.chakras.description}</p>
                </div>
              </CardContent>
            </Card>
          )}
        </TabsContent>

        <TabsContent value="frequency" className="space-y-4">
          {oil.frequency && (
            <Card className="bg-gradient-to-br from-cyan-50 to-blue-50 border-cyan-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="h-5 w-5 text-cyan-600" />
                  Vibrational Frequency
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center p-6 bg-white rounded-lg border border-cyan-200">
                  <div className="text-4xl font-bold text-cyan-700 mb-2">{oil.frequency.hz} Hz</div>
                  <div className="text-lg text-cyan-600">Healing Frequency</div>
                </div>
                <div className="p-4 bg-gradient-to-r from-cyan-100 to-blue-100 rounded-lg">
                  <p className="text-gray-800 leading-relaxed">{oil.frequency.description}</p>
                </div>
              </CardContent>
            </Card>
          )}
        </TabsContent>

        <TabsContent value="safety" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-blue-500" />
                Pet Safety Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Alert className={oil.petSafety.safe ? 'border-green-200 bg-green-50' : 'border-red-200 bg-red-50'}>
                <Shield className={`h-4 w-4 ${oil.petSafety.safe ? 'text-green-600' : 'text-red-600'}`} />
                <AlertDescription className="text-gray-800">
                  <strong>{oil.petSafety.safe ? 'Generally Safe' : 'Use with Caution'}:</strong> {oil.petSafety.notes}
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="recipes" className="space-y-4">
          <div className="grid gap-4">
            {oil.recipes.map((recipe, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{recipe.name}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <h4 className="font-semibold mb-2">Ingredients:</h4>
                    <ul className="list-disc list-inside space-y-1">
                      {recipe.ingredients.map((ingredient, idx) => (
                        <li key={idx} className="text-gray-700">{ingredient}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Instructions:</h4>
                    <p className="text-gray-700">{recipe.instructions}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="education" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-purple-500" />
                Scientific Education
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-800 leading-relaxed">{oil.education}</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="history" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-amber-500" />
                Historical Legacy
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-800 leading-relaxed">{oil.history}</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="luxury" className="space-y-4">
          <Card className="bg-gradient-to-br from-amber-50 to-purple-50 border-amber-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Crown className="h-5 w-5 text-amber-600" />
                Luxury Experience
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-800 leading-relaxed mb-4">{oil.luxuryFact}</p>
              <Button 
                onClick={() => window.open(oil.productLink, '_blank')}
                className="w-full bg-gradient-to-r from-purple-600 to-amber-600 hover:from-purple-700 hover:to-amber-700"
              >
                Experience Premium Quality
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default OilProfileDisplay;