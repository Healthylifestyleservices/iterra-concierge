import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Clock } from 'lucide-react';
import { Recipe } from '@/data/recipeData';

interface CategoryRecipesProps {
  categoryName: string;
  categoryIcon: string;
  recipes: Recipe[];
}

const CategoryRecipes: React.FC<CategoryRecipesProps> = ({ categoryName, categoryIcon, recipes }) => {
  const getDifficultyColor = (level: string) => {
    switch (level) {
      case 'Easy': return 'bg-green-100 text-green-800';
      case 'Medium': return 'bg-yellow-100 text-yellow-800';
      case 'Advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold flex items-center gap-2">
        <span className="text-3xl">{categoryIcon}</span>
        {categoryName} Recipes
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {recipes.map((recipe, idx) => (
          <Card key={idx} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex justify-between items-start">
                <CardTitle className="text-lg">{recipe.title}</CardTitle>
                <Badge className={getDifficultyColor(recipe.difficulty)}>
                  {recipe.difficulty}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-2 text-sm">
                <Clock className="h-4 w-4 text-gray-500" />
                <span>{recipe.time}</span>
              </div>
              
              <div>
                <h4 className="font-medium text-sm mb-2">Ingredients:</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  {recipe.ingredients.map((ingredient, i) => (
                    <li key={i}>• {ingredient}</li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="font-medium text-sm mb-1">Instructions:</h4>
                <ol className="text-sm text-gray-600 space-y-1">
                  {recipe.instructions.map((step, i) => (
                    <li key={i}>{i + 1}. {step}</li>
                  ))}
                </ol>
              </div>
              
              <div className="bg-blue-50 p-3 rounded-lg">
                <p className="text-sm text-blue-800">
                  <strong>Benefits:</strong> {recipe.benefits}
                </p>
              </div>
              
              {recipe.tips && (
                <div className="bg-yellow-50 p-3 rounded-lg">
                  <p className="text-sm text-yellow-800">
                    <strong>Tip:</strong> {recipe.tips}
                  </p>
                </div>
              )}
              
              {recipe.recommendedProducts && (
                <div className="border-t pt-4">
                  <h4 className="font-medium text-sm mb-2 flex items-center gap-2">
                    <ExternalLink className="h-4 w-4" />
                    Recommended Products:
                  </h4>
                  <div className="space-y-2">
                    {recipe.recommendedProducts.map((product, i) => (
                      <div key={i} className="flex justify-between items-center text-sm">
                        <span className="text-gray-600">{product}</span>
                        <Button 
                          size="sm" 
                          variant="outline"
                          onClick={() => window.open('https://www.doterra.com/US/en/site/yoursite', '_blank')}
                        >
                          <ExternalLink className="h-3 w-3 mr-1" />
                          Shop
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              <p className="text-xs text-gray-500 italic">
                *Not evaluated by the FDA. For general wellness only.
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CategoryRecipes;