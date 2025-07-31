import React, { useState, useEffect } from 'react';
import { supabase } from '../utils/supabaseClient';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Checkbox } from './ui/checkbox';
import SampleProductsLoader from './SampleProductsLoader';

interface Product {
  id: string;
  name: string;
  description: string;
  category: string;
  subcategory: string;
  chakra: string;
  emotional_support: string;
  pet_safe: boolean;
  diy_uses: string[];
  product_link: string;
  image_url: string;
  tags: string[];
  created_at: string;
}

const ProductsManager = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    name: '', description: '', category: '', subcategory: '', chakra: '',
    emotional_support: '', pet_safe: false, diy_uses: '', product_link: '',
    image_url: '', tags: ''
  });

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      setProducts(data || []);
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const productData = {
        ...formData,
        diy_uses: formData.diy_uses.split(',').map(s => s.trim()).filter(Boolean),
        tags: formData.tags.split(',').map(s => s.trim()).filter(Boolean)
      };

      const { error } = await supabase
        .from('products')
        .insert([productData]);
      
      if (error) throw error;
      
      alert('Product added successfully!');
      setFormData({
        name: '', description: '', category: '', subcategory: '', chakra: '',
        emotional_support: '', pet_safe: false, diy_uses: '', product_link: '',
        image_url: '', tags: ''
      });
      fetchProducts();
    } catch (error) {
      console.error('Error adding product:', error);
      alert('Failed to add product');
    }
  };

  if (loading) return <div className="p-6">Loading products...</div>;

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">Products Manager</h1>
      
      <SampleProductsLoader />
      
      <Card>
        <CardHeader>
          <CardTitle>Add New Product</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <Input
                placeholder="Product Name"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                required
              />
              <Input
                placeholder="Category"
                value={formData.category}
                onChange={(e) => setFormData({...formData, category: e.target.value})}
              />
            </div>
            <Textarea
              placeholder="Description"
              value={formData.description}
              onChange={(e) => setFormData({...formData, description: e.target.value})}
            />
            <div className="grid grid-cols-2 gap-4">
              <Input
                placeholder="Subcategory"
                value={formData.subcategory}
                onChange={(e) => setFormData({...formData, subcategory: e.target.value})}
              />
              <Input
                placeholder="Chakra"
                value={formData.chakra}
                onChange={(e) => setFormData({...formData, chakra: e.target.value})}
              />
            </div>
            <Input
              placeholder="Emotional Support"
              value={formData.emotional_support}
              onChange={(e) => setFormData({...formData, emotional_support: e.target.value})}
            />
            <div className="flex items-center space-x-2">
              <Checkbox
                id="pet_safe"
                checked={formData.pet_safe}
                onCheckedChange={(checked) => setFormData({...formData, pet_safe: !!checked})}
              />
              <label htmlFor="pet_safe">Pet Safe</label>
            </div>
            <Input
              placeholder="DIY Uses (comma-separated)"
              value={formData.diy_uses}
              onChange={(e) => setFormData({...formData, diy_uses: e.target.value})}
            />
            <div className="grid grid-cols-2 gap-4">
              <Input
                placeholder="Product Link"
                value={formData.product_link}
                onChange={(e) => setFormData({...formData, product_link: e.target.value})}
              />
              <Input
                placeholder="Image URL"
                value={formData.image_url}
                onChange={(e) => setFormData({...formData, image_url: e.target.value})}
              />
            </div>
            <Input
              placeholder="Tags (comma-separated)"
              value={formData.tags}
              onChange={(e) => setFormData({...formData, tags: e.target.value})}
            />
            <Button type="submit">Add Product</Button>
          </form>
        </CardContent>
      </Card>

      <div className="grid gap-4">
        <h2 className="text-2xl font-semibold">Products ({products.length})</h2>
        {products.map((product) => (
          <Card key={product.id}>
            <CardContent className="p-4">
              <div className="flex justify-between items-start">
                <div className="space-y-2">
                  <h3 className="font-semibold">{product.name}</h3>
                  <p className="text-sm text-gray-600">{product.description}</p>
                  <div className="flex gap-2">
                    <Badge variant="secondary">{product.category}</Badge>
                    {product.subcategory && <Badge variant="outline">{product.subcategory}</Badge>}
                    {product.pet_safe && <Badge className="bg-green-100 text-green-800">Pet Safe</Badge>}
                  </div>
                  {product.tags && product.tags.length > 0 && (
                    <div className="flex gap-1 flex-wrap">
                      {product.tags.map((tag, index) => (
                        <Badge key={index} variant="outline" className="text-xs">{tag}</Badge>
                      ))}
                    </div>
                  )}
                </div>
                <div className="text-xs text-gray-500">
                  {new Date(product.created_at).toLocaleDateString()}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
        {products.length === 0 && (
          <Card>
            <CardContent className="p-8 text-center text-gray-500">
              No products found. Load sample products or add your first product above.
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default ProductsManager;