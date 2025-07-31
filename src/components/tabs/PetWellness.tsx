import React, { useEffect, useState } from 'react';
import { fetchProductsByCategory } from '../../utils/fetchProducts';
import { petOilCategories, safeOilsByPet } from '../../data/petOilsData';

const petTypes = ['Dog', 'Cat', 'Horse'];

const PetWellness = () => {
  const [products, setProducts] = useState<any[]>([]);
  const [filter, setFilter] = useState('Dog');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProducts = async () => {
      setLoading(true);
      try {
        const fetchedProducts = await fetchProductsByCategory('pets');
        setProducts(fetchedProducts);
      } catch (error) {
        console.error('Error loading pet products:', error);
      } finally {
        setLoading(false);
      }
    };
    loadProducts();
  }, []);

  const filtered = products.filter(p => 
    p.petType === filter.toLowerCase() || 
    !p.petType ||
    (p.safeFor && p.safeFor.includes(filter.toLowerCase() + 's'))
  );

  const getSafeOils = (petType: string) => {
    const pet = petType.toLowerCase() + 's' as keyof typeof safeOilsByPet;
    return safeOilsByPet[pet] || { safe: [], avoid: [] };
  };

  return (
    <div className="font-serif">
      <h2 className="text-2xl font-bold mb-4">Pet Wellness</h2>
      
      <div className="flex space-x-4 mb-6">
        {petTypes.map(type => (
          <button
            key={type}
            className={`px-4 py-1 rounded-full border transition-colors ${
              filter === type ? 'bg-[#8E735B] text-white' : 'bg-white text-[#8E735B] hover:bg-[#8E735B]/10'
            }`}
            onClick={() => setFilter(type)}
          >
            {type}
          </button>
        ))}
      </div>

      {loading ? (
        <div className="text-center py-8">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#8E735B] mx-auto"></div>
          <p className="text-sm text-gray-600 mt-2">Loading pet wellness products...</p>
        </div>
      ) : (
        <>
          {/* Safety Information */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
            <h3 className="font-semibold text-yellow-800 mb-2">Safety Guidelines for {filter}s</h3>
            <div className="text-sm text-yellow-700">
              {(() => {
                const safetyInfo = getSafeOils(filter);
                return (
                  <div className="space-y-2">
                    {safetyInfo.safe && safetyInfo.safe.length > 0 && (
                      <p><strong>Generally Safe:</strong> {safetyInfo.safe.join(', ')}</p>
                    )}
                    {safetyInfo.avoid && safetyInfo.avoid.length > 0 && (
                      <p><strong>Avoid:</strong> {safetyInfo.avoid.join(', ')}</p>
                    )}
                  </div>
                );
              })()} 
            </div>
          </div>

          {/* Products */}
          {filtered.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-sm italic text-gray-500">No pet products found for {filter}s.</p>
              <p className="text-xs text-gray-400 mt-2">Check our oil categories below for safe options.</p>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {filtered.map((product, idx) => (
                <div key={idx} className="bg-white/80 backdrop-blur-md rounded-xl p-4 shadow-sm">
                  <h3 className="font-semibold">{product.name}</h3>
                  <p className="text-sm text-gray-700">{product.description}</p>
                  {product.price && <p className="text-xs text-gray-500 mt-1">${product.price}</p>}
                  <p className="text-xs text-[#6a5f52] italic mt-1">
                    Safe for: {product.petType || product.safeFor?.join(', ') || 'Check guidelines'}
                  </p>
                </div>
              ))}
            </div>
          )}

          {/* Oil Categories */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Essential Oil Categories for {filter}s</h3>
            {petOilCategories.map((category, idx) => (
              <div key={idx} className="bg-white/60 rounded-lg p-4">
                <h4 className="font-semibold text-lg mb-2">{category.name}</h4>
                <p className="text-sm text-gray-600 mb-3">{category.description}</p>
                <div className="grid gap-3">
                  {category.oils
                    .filter(oil => oil.safeFor.includes(filter.toLowerCase() + 's' as any))
                    .map((oil, oilIdx) => (
                    <div key={oilIdx} className="bg-white/80 rounded-lg p-3 text-sm">
                      <h5 className="font-medium">{oil.name}</h5>
                      <p className="text-xs text-gray-600">Uses: {oil.uses.join(', ')}</p>
                      <p className="text-xs text-[#8E735B]">Dilution: {oil.dilution[filter.toLowerCase() + 's' as keyof typeof oil.dilution]}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default PetWellness;