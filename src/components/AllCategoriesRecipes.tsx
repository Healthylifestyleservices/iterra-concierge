import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Clock, Users, BookOpen, Video } from 'lucide-react';
import { categoryRecipes } from '@/data/recipeData';
import { categoryRecipesPart2 } from '@/data/recipeDataPart2';
import { categoryRecipesPart3 } from '@/data/recipeDataPart3';
import { categoryRecipesPart4 } from '@/data/recipeDataPart4';
import ProductLink from './ProductLink';

const AllCategoriesRecipes: React.FC = () => {
  // Combine all recipe data
  const allCategories = [
    ...categoryRecipes,
    ...categoryRecipesPart2,
    ...categoryRecipesPart3,
    ...categoryRecipesPart4
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty.toLowerCase()) {
      case 'easy': return 'bg-green-100 text-green-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'hard': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          🌿 Complete DIY Recipe Collection
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Discover hundreds of natural wellness recipes using premium essential oils and wellness products
        </p>
      </div>

      {allCategories.map((category) => (
        <div key={category.id} className="space-y-6">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-3xl">{category.icon}</span>
            <h2 className="text-3xl font-bold text-gray-800">{category.name}</h2>
            <Badge variant="outline" className="ml-auto">
              {category.recipes.length} recipes
            </Badge>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {category.recipes.map((recipe, index) => (
              <Card key={index} className="border-2 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-lg">{recipe.title}</CardTitle>
                    <Badge className={getDifficultyColor(recipe.difficulty)}>
                      {recipe.difficulty}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {recipe.time}
                    </div>
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

                  {recipe.tips && (
                    <div className="bg-blue-50 p-3 rounded-lg">
                      <h4 className="font-medium text-blue-800 mb-1">Pro Tip:</h4>
                      <p className="text-sm text-blue-700">{recipe.tips}</p>
                    </div>
                  )}

                  {recipe.recommendedProducts && (
                    <div>
                      <h4 className="font-medium mb-2">Recommended Products:</h4>
                      <div className="space-y-2">
                        {recipe.recommendedProducts.map((product, i) => (
                          <ProductLink 
                            key={i} 
                            productName={product} 
                            size="sm" 
                            className="w-full"
                          />
                        ))}
                      </div>
                    </div>
                  )}

                  {(recipe.blogLinks || recipe.videoLinks) && (
                    <div className="border-t pt-4">
                      <h4 className="font-medium mb-2">Learn More:</h4>
                      <div className="flex flex-wrap gap-2">
                        {recipe.blogLinks?.map((blog, i) => (
                          <Button key={i} variant="ghost" size="sm" className="h-8">
                            <BookOpen className="h-3 w-3 mr-1" />
                            {blog}
                          </Button>
                        ))}
                        {recipe.videoLinks?.map((video, i) => (
                          <Button key={i} variant="ghost" size="sm" className="h-8">
                            <Video className="h-3 w-3 mr-1" />
                            {video}
                          </Button>
                        ))}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllCategoriesRecipes;