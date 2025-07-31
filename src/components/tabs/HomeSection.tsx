import React, { useEffect, useState } from 'react';
import { fetchProductsByCategory } from '../../utils/fetchProducts';

const HomeSection = () => {
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    fetchProductsByCategory('home').then(setProducts);
  }, []);

  return (
    <div className="font-serif">
      <h2 className="text-2xl font-bold mb-6">Home & Living</h2>
      <p className="text-sm text-gray-600 mb-4">
        Natural solutions for every corner of your sanctuary — from laundry to air purification to ambiance.
      </p>

      {products.length === 0 ? (
        <p className="text-sm italic text-gray-500">No products found for this section.</p>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, i) => (
            <div key={i} className="bg-white/80 p-4 rounded-xl shadow">
              <h3 className="font-semibold text-lg">{product.name}</h3>
              <p className="text-sm text-gray-700">{product.description}</p>
              <p className="text-xs text-gray-500 mt-1">${product.price}</p>
              <p className="text-xs italic text-[#6a5f52] mt-1">{product.useCase}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default HomeSection;