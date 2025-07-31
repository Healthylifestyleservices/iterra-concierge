import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';

interface Product {
  id: string;
  name: string;
  description: string;
  category: string;
  subcategory?: string;
  chakra?: string;
  emotional_support?: string;
  pet_safe?: boolean;
  diy_uses?: string[];
  product_link: string;
  image_url: string;
  tags?: string[];
  created_at: string;
}

const CategoryPage = () => {
  const { type } = useParams<{ type: string }>();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      if (!type) return;
      
      setLoading(true);
      setError(null);
      
      try {
        const { data, error } = await supabase
          .from('products')
          .select('*')
          .ilike('category', `%${type}%`);
          
        if (error) {
          console.error('Fetch error:', error.message);
          setError('Failed to load products');
        } else {
          setProducts(data || []);
        }
      } catch (err) {
        console.error('Unexpected error:', err);
        setError('An unexpected error occurred');
      } finally {
        setLoading(false);
      }
    };
    
    fetchProducts();
  }, [type]);

  if (loading) {
    return (
      <div className="p-6">
        <div className="text-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#b89c77] mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading products...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-6">
        <div className="text-center py-12">
          <p className="text-red-600">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold capitalize mb-4">{type} Offerings</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {products.map((p) => (
          <div key={p.id} className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow">
            <img 
              src={p.image_url || '/placeholder.svg'} 
              alt={p.name} 
              className="w-full h-48 object-cover rounded"
              onError={(e) => {
                (e.target as HTMLImageElement).src = '/placeholder.svg';
              }}
            />
            <h2 className="text-xl font-semibold mt-3">{p.name}</h2>
            <p className="text-sm text-gray-600 mt-1">{p.description}</p>
            {p.pet_safe && (
              <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded mt-2">
                Pet Safe
              </span>
            )}
            <a 
              href={p.product_link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#b89c77] font-bold mt-2 block hover:underline"
            >
              View Product
            </a>
          </div>
        ))}
        {products.length === 0 && (
          <div className="col-span-full text-center py-12">
            <p className="text-gray-500 italic">No offerings found for this category.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryPage;