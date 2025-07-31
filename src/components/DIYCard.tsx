import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock } from 'lucide-react';
import ProductLink from './ProductLink';

interface Recipe {
  title: string;
  difficulty: string;
  time: string;
  ingredients: string[];
  instructions: string[];
  benefits: string;
  estimatedCost?: number;
  shoppingList?: string[];
}

interface DIYCardProps {
  recipe: Recipe;
}

const DIYCard: React.FC<DIYCardProps> = ({ recipe }) => {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty.toLowerCase()) {
      case 'easy': return 'bg-green-100 text-green-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'hard': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <Card className="h-full border-2 hover:shadow-lg transition-shadow">
      <CardHeader>
        <div className="flex justify-between items-start mb-2">
          <CardTitle className="text-lg">{recipe.title}</CardTitle>
          <Badge className={getDifficultyColor(recipe.difficulty)}>
            {recipe.difficulty}
          </Badge>
        </div>
        <div className="flex items-center gap-1 text-sm text-gray-600">
          <Clock className="h-4 w-4" />
          {recipe.time}
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div>
          <h4 className="font-medium mb-2">Ingredients:</h4>
          <ul className="text-sm space-y-1">
            {recipe.ingredients.map((ingredient, i) => (
              <li key={i} className="flex items-start">
                <span className="text-purple-500 mr-2">•</span>
                {ingredient}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-medium mb-2">Instructions:</h4>
          <ol className="text-sm space-y-1">
            {recipe.instructions.map((instruction, i) => (
              <li key={i} className="flex items-start">
                <span className="text-purple-500 mr-2 font-medium">{i + 1}.</span>
                {instruction}
              </li>
            ))}
          </ol>
        </div>

        <div className="bg-green-50 p-3 rounded-lg">
          <h4 className="font-medium text-green-800 mb-1">Benefits:</h4>
          <p className="text-sm text-green-700">{recipe.benefits}</p>
        </div>

        {recipe.shoppingList && (
          <div>
            <h4 className="font-medium mb-2">Shop Products:</h4>
            <div className="space-y-2">
              {recipe.shoppingList.map((item, i) => (
                <ProductLink 
                  key={i} 
                  productName={item} 
                  size="sm" 
                  className="w-full"
                />
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default DIYCard;