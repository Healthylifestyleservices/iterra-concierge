import React from 'react';

const categories = [
  { name: 'Women', icon: 'women-icon.svg' },
  { name: 'Men', icon: 'men-icon.svg' },
  { name: 'Pets', icon: 'pets-icon.svg' },
  { name: 'Home', icon: 'home-icon.svg' }
];

export default function CategoryCards() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6">
      {categories.map((category) => (
        <div 
          key={category.name} 
          className="bg-white rounded-xl border border-[#CD7F32] p-4 text-center shadow hover:shadow-lg transition cursor-pointer"
        >
          <img 
            src={`/${category.icon}`} 
            alt={category.name} 
            className="mx-auto h-12 mb-2" 
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />
          <div className="text-[#D4AF37] font-cormorant text-xl">{category.name}</div>
        </div>
      ))}
    </div>
  );
}