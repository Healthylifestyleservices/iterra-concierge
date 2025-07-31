import React, { useState } from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import ChocolateTextureBackground from './ChocolateTextureBackground';

interface WellnessChocolate {
  id: string;
  name: string;
  benefits: string[];
  oils: string[];
  color: string;
  description: string;
}

const ChocolateWellnessIntegration: React.FC = () => {
  const [selectedChocolate, setSelectedChocolate] = useState('lavender-dark');

  const wellnessChocolates: WellnessChocolate[] = [
    {
      id: 'lavender-dark',
      name: 'Lavender Dark Chocolate',
      benefits: ['Relaxation', 'Stress Relief', 'Better Sleep'],
      oils: ['Lavender Essential Oil', 'Bergamot'],
      color: '#4A4A6A',
      description: 'Calming dark chocolate infused with pure lavender essence'
    },
    {
      id: 'peppermint-milk',
      name: 'Peppermint Milk Chocolate',
      benefits: ['Digestive Support', 'Mental Clarity', 'Energy Boost'],
      oils: ['Peppermint Essential Oil', 'Spearmint'],
      color: '#8B6F47',
      description: 'Refreshing milk chocolate with cooling peppermint'
    },
    {
      id: 'orange-white',
      name: 'Orange Blossom White',
      benefits: ['Mood Enhancement', 'Vitamin C', 'Antioxidants'],
      oils: ['Sweet Orange Oil', 'Neroli'],
      color: '#FFF8DC',
      description: 'Uplifting white chocolate with citrus wellness'
    },
    {
      id: 'rose-ruby',
      name: 'Rose Ruby Chocolate',
      benefits: ['Heart Health', 'Emotional Balance', 'Skin Health'],
      oils: ['Rose Otto', 'Geranium'],
      color: '#CD5C5C',
      description: 'Luxurious ruby chocolate with rose wellness properties'
    }
  ];

  const selectedProduct = wellnessChocolates.find(c => c.id === selectedChocolate);

  return (
    <ChocolateTextureBackground variant="dark" className="min-h-screen">
      <div className="container mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-amber-300 to-rose-300 bg-clip-text text-transparent mb-4">
            Wellness Chocolate Collection
          </h1>
          <p className="text-xl text-amber-200/80 font-light">
            Where luxury chocolate meets essential oil wellness
          </p>
        </div>

        {/* Product Selection */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {wellnessChocolates.map((chocolate) => (
            <Card 
              key={chocolate.id}
              className={`cursor-pointer transition-all duration-300 hover:scale-105 ${
                selectedChocolate === chocolate.id 
                  ? 'ring-2 ring-amber-400 bg-black/50' 
                  : 'bg-black/30 hover:bg-black/40'
              } backdrop-blur-md border-amber-500/20`}
              onClick={() => setSelectedChocolate(chocolate.id)}
            >
              <CardContent className="p-6 text-center">
                <div 
                  className="w-16 h-16 mx-auto mb-4 rounded-full shadow-lg"
                  style={{ backgroundColor: chocolate.color }}
                />
                <h3 className="text-amber-200 font-medium mb-2">{chocolate.name}</h3>
                <div className="flex flex-wrap gap-1 justify-center">
                  {chocolate.benefits.slice(0, 2).map((benefit, idx) => (
                    <span key={idx} className="text-xs bg-amber-600/20 text-amber-300 px-2 py-1 rounded">
                      {benefit}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Selected Product Details */}
        {selectedProduct && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Product Showcase */}
            <Card className="bg-black/40 backdrop-blur-lg border-amber-500/30">
              <CardContent className="p-8">
                <div className="text-center">
                  <div 
                    className="w-48 h-48 mx-auto mb-6 rounded-lg shadow-2xl transform hover:rotate-6 transition-transform duration-500"
                    style={{ 
                      backgroundColor: selectedProduct.color,
                      background: `linear-gradient(135deg, ${selectedProduct.color}, #1a1a1a)`
                    }}
                  />
                  <h2 className="text-3xl font-bold text-amber-200 mb-4">
                    {selectedProduct.name}
                  </h2>
                  <p className="text-amber-100/80 text-lg mb-6">
                    {selectedProduct.description}
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Wellness Benefits */}
            <Card className="bg-black/40 backdrop-blur-lg border-amber-500/30">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-amber-200 mb-6">Wellness Benefits</h3>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-amber-300 mb-3">Health Benefits:</h4>
                  <div className="grid grid-cols-1 gap-2">
                    {selectedProduct.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center text-amber-100/80">
                        <span className="text-amber-400 mr-2">✓</span>
                        {benefit}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-amber-300 mb-3">Essential Oils:</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProduct.oils.map((oil, idx) => (
                      <span key={idx} className="bg-amber-600/30 text-amber-200 px-3 py-1 rounded-full text-sm">
                        {oil}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4">
                  <Button className="flex-1 bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-500 hover:to-yellow-500 text-black font-semibold py-3 rounded-full">
                    Order Now
                  </Button>
                  <Button className="flex-1 bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-500 hover:to-pink-500 text-white font-semibold py-3 rounded-full">
                    Learn More
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </ChocolateTextureBackground>
  );
};

export default ChocolateWellnessIntegration;