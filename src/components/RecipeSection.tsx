import React from 'react';
import AllCategoriesRecipes from './AllCategoriesRecipes';

const RecipeSection: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      <div className="container mx-auto px-4 py-8">
        <AllCategoriesRecipes />
      </div>
    </div>
  );
};

export default RecipeSection;