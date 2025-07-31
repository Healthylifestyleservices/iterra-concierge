import React from 'react';
import { Card, CardContent } from './ui/card';
import { catalogCategories } from '../data/catalogCategories';

interface Product {
  name: string;
  description: string;
  category: string;
  subcategory: string;
  tags: string[];
}

const sampleProducts: Product[] = [
  {
    name: "Lavender Oil",
    description: "Calming and soothing oil ideal for rest and emotional balance.",
    category: "sleep",
    subcategory: "emotional",
    tags: ["relaxation", "sleep", "emotions"]
  },
  {
    name: "Peppermint Oil", 
    description: "Cooling and clarifying oil for energy and focus.",
    category: "energy",
    subcategory: "mind",
    tags: ["clarity", "focus", "head tension"]
  },
  {
    name: "Frankincense",
    description: "Powerful grounding oil that supports meditation and healing.",
    category: "mood",
    subcategory: "spirit", 
    tags: ["spiritual", "skin", "ritual"]
  },
  {
    name: "Tea Tree Oil",
    description: "Purifying oil for skin and immune support.",
    category: "immune",
    subcategory: "skin",
    tags: ["purifying", "cleansing", "skin"]
  },
  {
    name: "Eucalyptus Oil",
    description: "Refreshing oil for respiratory and breathing support.",
    category: "respiratory",
    subcategory: "breathing",
    tags: ["breathing", "clearing", "fresh"]
  }
];

const MainCatalog = () => {
  const getProductsForCategory = (categoryId: string) => {
    return sampleProducts.filter(product => product.category === categoryId);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F5EFE5] to-[#D1BFA4] p-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-[#4A3C2F] mb-2">Essential Oils Catalog</h1>
          <p className="text-[#7A6E5D]">Explore our comprehensive wellness categories and collections</p>
        </div>
        
        <div className="grid gap-8">
          {catalogCategories.map(category => {
            const categoryProducts = getProductsForCategory(category.id);
            
            return (
              <Card key={category.id} className="bg-white/80 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl">{category.emoji}</span>
                    <div>
                      <h2 className="text-2xl font-bold text-[#4A3C2F]">{category.title}</h2>
                      <p className="text-[#7A6E5D]">{category.description}</p>
                    </div>
                  </div>
                  
                  {categoryProducts.length > 0 ? (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                      {categoryProducts.map((product, index) => (
                        <div key={index} className="bg-white/60 p-4 rounded-lg border">
                          <h3 className="font-semibold text-[#4A3C2F] mb-2">{product.name}</h3>
                          <p className="text-sm text-[#7A6E5D] mb-2">{product.description}</p>
                          <div className="flex flex-wrap gap-1">
                            {product.tags.map((tag, tagIndex) => (
                              <span key={tagIndex} className="bg-[#8E735B]/20 text-[#4A3C2F] px-2 py-1 rounded-full text-xs">
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-[#7A6E5D] italic">Products coming soon for this category</p>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MainCatalog;