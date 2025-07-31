import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ExternalLink, Filter, Crown, Sparkles } from 'lucide-react';
import { 
  essentialOils, 
  blends, 
  supplements,
  Product 
} from '@/data/productCatalog';
import { 
  skincare, 
  homecare, 
  womensWellness, 
  mensWellness, 
  kidsFamily
} from '@/data/productCatalogPart2';

const ProductCatalog: React.FC = () => {
  const [sortBy, setSortBy] = useState<string>('name');
  const [filterBy, setFilterBy] = useState<string>('all');

  const allProducts = [
    ...essentialOils,
    ...blends,
    ...supplements,
    ...skincare,
    ...homecare,
    ...womensWellness,
    ...mensWellness,
    ...kidsFamily
  ];

  const sortProducts = (products: Product[]) => {
    return [...products].sort((a, b) => {
      switch (sortBy) {
        case 'name':
        default:
          return a.name.localeCompare(b.name);
        case 'category':
          return a.category.localeCompare(b.category);
        case 'bestsellers':
          return (b.isBestseller ? 1 : 0) - (a.isBestseller ? 1 : 0);
      }
    });
  };

  const filterProducts = (products: Product[]) => {
    switch (filterBy) {
      case 'bestsellers':
        return products.filter(p => p.isBestseller);
      case 'new':
        return products.filter(p => p.isNew);
      case 'all':
      default:
        return products;
    }
  };

  const ProductGrid: React.FC<{ products: Product[] }> = ({ products }) => {
    const filteredAndSorted = sortProducts(filterProducts(products));
    
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredAndSorted.map((product) => (
          <Card key={product.id} className="h-full hover:shadow-lg transition-all duration-300 group relative">
            {product.isBestseller && (
              <Badge className="absolute top-2 right-2 bg-yellow-500 text-white z-10">
                <Crown className="h-3 w-3 mr-1" />
                BESTSELLER
              </Badge>
            )}
            {product.isNew && !product.isBestseller && (
              <Badge className="absolute top-2 right-2 bg-green-500 text-white z-10">
                <Sparkles className="h-3 w-3 mr-1" />
                NEW
              </Badge>
            )}
            
            <CardHeader>
              <CardTitle className="text-lg">{product.name}</CardTitle>
              <Badge variant="outline">{product.category}</Badge>
            </CardHeader>
            
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-medium text-sm mb-1">Benefits:</h4>
                <div className="flex flex-wrap gap-1">
                  {product.benefits.map((benefit, idx) => (
                    <Badge key={idx} variant="secondary" className="text-xs">
                      {benefit}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="font-medium text-sm mb-1">Usage Tips:</h4>
                <ul className="text-xs text-gray-600 space-y-1">
                  {product.tips.slice(0, 2).map((tip, idx) => (
                    <li key={idx}>• {tip}</li>
                  ))}
                </ul>
              </div>
              
              <Button 
                className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:opacity-90"
                onClick={() => window.open('https://www.doterra.com', '_blank')}
              >
                <ExternalLink className="h-4 w-4 mr-2" />
                Shop Now
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-2 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          🛍️ Complete Product Catalog
        </h2>
        <p className="text-gray-600">Browse our full collection of essential oils, blends, supplements, and wellness products</p>
      </div>
      
      <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
        <div className="flex items-center space-x-2">
          <Filter className="h-4 w-4 text-gray-500" />
          <Select value={filterBy} onValueChange={setFilterBy}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Filter products" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Products</SelectItem>
              <SelectItem value="bestsellers">Bestsellers</SelectItem>
              <SelectItem value="new">New Products</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <Select value={sortBy} onValueChange={setSortBy}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="name">Name A-Z</SelectItem>
            <SelectItem value="category">Category</SelectItem>
            <SelectItem value="bestsellers">Bestsellers First</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <TabsList className="grid w-full grid-cols-4 lg:grid-cols-8">
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="oils">Oils</TabsTrigger>
          <TabsTrigger value="blends">Blends</TabsTrigger>
          <TabsTrigger value="supplements">Supplements</TabsTrigger>
          <TabsTrigger value="skincare">Skincare</TabsTrigger>
          <TabsTrigger value="home">Home</TabsTrigger>
          <TabsTrigger value="womens">Women's</TabsTrigger>
          <TabsTrigger value="mens">Men's</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-6">
          <ProductGrid products={allProducts} />
        </TabsContent>

        <TabsContent value="oils" className="space-y-6">
          <ProductGrid products={essentialOils} />
        </TabsContent>

        <TabsContent value="blends" className="space-y-6">
          <ProductGrid products={blends} />
        </TabsContent>

        <TabsContent value="supplements" className="space-y-6">
          <ProductGrid products={supplements} />
        </TabsContent>

        <TabsContent value="skincare" className="space-y-6">
          <ProductGrid products={skincare} />
        </TabsContent>

        <TabsContent value="home" className="space-y-6">
          <ProductGrid products={homecare} />
        </TabsContent>

        <TabsContent value="womens" className="space-y-6">
          <ProductGrid products={womensWellness} />
        </TabsContent>

        <TabsContent value="mens" className="space-y-6">
          <ProductGrid products={mensWellness} />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ProductCatalog;