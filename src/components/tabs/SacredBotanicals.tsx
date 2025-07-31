import React, { useEffect, useState } from 'react';
import { fetchProductsByCategory } from '../../utils/fetchProducts';
import { ComprehensiveProduct } from '../../data/comprehensiveProductCatalog';

const SacredBotanicals = () => {
  const [products, setProducts] = useState<ComprehensiveProduct[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProducts = async () => {
      setLoading(true);
      try {
        const data = await fetchProductsByCategory('essential-oils');
        setProducts(data);
      } catch (error) {
        console.error('Error loading products:', error);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  if (loading) {
    return (
      <div className="space-y-4">
        <p className="text-sm text-gray-500">Loading sacred botanicals...</p>
        <div className="animate-pulse space-y-3">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="bg-gray-200 h-20 rounded"></div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {products.length === 0 ? (
        <p className="text-sm text-gray-500">No essential oils found.</p>
      ) : (
        products.map((product, index) => (
          <div key={product.id || index} className="bg-white/80 p-4 rounded-lg shadow-sm border border-gray-100">
            <h3 className="font-bold text-lg text-gray-800">{product.name}</h3>
            <p className="text-sm text-gray-700 mt-1">{product.description}</p>
            <div className="flex justify-between items-center mt-3">
              <p className="text-sm font-semibold text-green-600">${product.price}</p>
              {product.category && (
                <span className="text-xs bg-amber-100 text-amber-800 px-2 py-1 rounded-full">
                  {product.category}
                </span>
              )}
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default SacredBotanicals;