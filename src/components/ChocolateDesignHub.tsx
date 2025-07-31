import React, { useState } from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';

interface ChocolateDesignProps {
  className?: string;
}

const ChocolateDesignHub: React.FC<ChocolateDesignProps> = ({ className = '' }) => {
  const [activeDesign, setActiveDesign] = useState('truffle');

  const chocolateDesigns = [
    { id: 'truffle', name: 'Velvet Truffles', color: '#8B4513' },
    { id: 'bark', name: 'Sacred Bark', color: '#654321' },
    { id: 'bonbon', name: 'Golden Bonbons', color: '#D2691E' },
    { id: 'ganache', name: 'Luxury Ganache', color: '#A0522D' }
  ];

  return (
    <div className={`min-h-screen bg-gradient-to-br from-amber-900 via-yellow-800 to-orange-900 relative overflow-hidden ${className}`}>
      {/* Chocolate texture background */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><rect width="100" height="100" fill="%23654321"/><circle cx="25" cy="25" r="8" fill="%23D2691E" opacity="0.3"/><circle cx="75" cy="75" r="12" fill="%23A0522D" opacity="0.4"/></svg>')`,
          backgroundSize: '150px 150px'
        }}
      />

      {/* Header */}
      <div className="relative z-10 text-center py-12">
        <h1 className="text-6xl font-bold bg-gradient-to-r from-amber-300 to-yellow-200 bg-clip-text text-transparent mb-4">
          Chocolate Design Studio
        </h1>
        <p className="text-xl text-amber-200 font-light tracking-wide">
          Artisanal Chocolate Creations
        </p>
      </div>

      {/* Design Selection */}
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {chocolateDesigns.map((design) => (
            <Card 
              key={design.id}
              className="bg-black/30 backdrop-blur-md border-amber-500/20 hover:border-amber-400/40 transition-all duration-300 cursor-pointer hover:transform hover:scale-105"
              onClick={() => setActiveDesign(design.id)}
            >
              <CardContent className="p-6 text-center">
                <div 
                  className="w-16 h-16 mx-auto mb-3 rounded-full"
                  style={{ backgroundColor: design.color }}
                />
                <h3 className="text-amber-200 font-semibold text-lg">{design.name}</h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Active Design Display */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 pb-12">
        <Card className="bg-black/40 backdrop-blur-lg border-amber-500/30">
          <CardContent className="p-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-amber-200 mb-6">
                {chocolateDesigns.find(d => d.id === activeDesign)?.name}
              </h2>
              <div 
                className="w-32 h-32 mx-auto mb-6 rounded-lg shadow-2xl"
                style={{ 
                  backgroundColor: chocolateDesigns.find(d => d.id === activeDesign)?.color,
                  background: `linear-gradient(135deg, ${chocolateDesigns.find(d => d.id === activeDesign)?.color}, #2D1810)`
                }}
              />
              <p className="text-amber-100/80 text-lg leading-relaxed mb-8">
                Experience the rich, luxurious world of artisanal chocolate design with our premium collection.
              </p>
              <Button className="bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-500 hover:to-yellow-500 text-black font-semibold px-8 py-3 rounded-full transform transition-all duration-200 hover:scale-105">
                Create Design
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ChocolateDesignHub;