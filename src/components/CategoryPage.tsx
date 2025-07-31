import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProductsByCategory } from '../utils/fetchProducts';
import { catalogCategories } from '../data/catalogCategories';
import { ComprehensiveProduct } from '../data/comprehensiveProductCatalog';

const CategoryPage = () => {
  const { id } = useParams<{ id: string }>();
  const [products, setProducts] = useState<ComprehensiveProduct[]>([]);
  const [loading, setLoading] = useState(true);

  const category = catalogCategories.find(c => c.id === id);
  const categoryTitle = category ? category.title : 'Wellness';
  const categoryDescription = category?.description;

  useEffect(() => {
    const loadProducts = async () => {
      if (id) {
        setLoading(true);
        try {
          const fetchedProducts = await fetchProductsByCategory(id);
          setProducts(fetchedProducts);
        } catch (error) {
          console.error('Error fetching products:', error);
        } finally {
          setLoading(false);
        }
      }
    };
    loadProducts();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen p-8 bg-gradient-to-b from-[#F5EFE5] to-[#D1BFA4] font-serif">
        <div className="animate-pulse">
          <div className="h-8 bg-white/30 rounded w-64 mb-6"></div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map(i => (
              <div key={i} className="bg-white/30 p-4 rounded-xl h-32"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-8 bg-gradient-to-b from-[#F5EFE5] to-[#D1BFA4] font-serif">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2 text-[#8E735B]">{categoryTitle}</h1>
        {categoryDescription && (
          <p className="text-lg text-[#6a5f52] italic">{categoryDescription}</p>
        )}
      </div>
      
      {products.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-lg text-gray-600 mb-2">No products found for this category.</p>
          <p className="text-sm text-gray-500">Try browsing other categories or check back later.</p>
        </div>
      ) : (
        <>
          <div className="mb-6">
            <p className="text-sm text-[#6a5f52]">
              Showing {products.length} product{products.length !== 1 ? 's' : ''}
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, i) => (
              <div key={i} className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="font-bold text-lg text-[#8E735B] mb-2">{product.name}</h3>
                <p className="text-sm text-gray-700 mb-3 line-clamp-3">{product.description}</p>
                <div className="flex justify-between items-center">
                  <p className="text-lg font-semibold text-[#8E735B]">${product.price}</p>
                  {product.category && (
                    <span className="text-xs bg-[#8E735B]/10 text-[#8E735B] px-2 py-1 rounded-full">
                      {product.category}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default CategoryPage;