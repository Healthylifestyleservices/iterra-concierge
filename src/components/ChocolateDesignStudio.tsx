import React, { useState } from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import ChocolateTextureBackground from './ChocolateTextureBackground';

interface DesignTool {
  id: string;
  name: string;
  icon: string;
  description: string;
}

interface ChocolateType {
  id: string;
  name: string;
  color: string;
  description: string;
}

const ChocolateDesignStudio: React.FC = () => {
  const [selectedChocolate, setSelectedChocolate] = useState('dark');
  const [activeTool, setActiveTool] = useState('mold');

  const chocolateTypes: ChocolateType[] = [
    { id: 'dark', name: 'Dark Chocolate', color: '#2D1810', description: 'Rich 70% cacao' },
    { id: 'milk', name: 'Milk Chocolate', color: '#8B4513', description: 'Creamy and smooth' },
    { id: 'white', name: 'White Chocolate', color: '#F5F5DC', description: 'Pure cocoa butter' },
    { id: 'ruby', name: 'Ruby Chocolate', color: '#CD5C5C', description: 'Natural pink hue' }
  ];

  const designTools: DesignTool[] = [
    { id: 'mold', name: 'Chocolate Molds', icon: '🍫', description: 'Shape your creations' },
    { id: 'tempering', name: 'Tempering', icon: '🌡️', description: 'Perfect crystallization' },
    { id: 'decoration', name: 'Decorations', icon: '✨', description: 'Add finishing touches' },
    { id: 'packaging', name: 'Packaging', icon: '🎁', description: 'Luxury presentation' }
  ];

  return (
    <ChocolateTextureBackground variant={selectedChocolate as any} className="min-h-screen">
      <div className="container mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-amber-300 to-yellow-200 bg-clip-text text-transparent mb-4">
            Chocolate Design Studio
          </h1>
          <p className="text-xl text-amber-200/80 font-light">
            Craft artisanal chocolates with precision and artistry
          </p>
        </div>

        {/* Chocolate Type Selection */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-amber-200 mb-6 text-center">
            Choose Your Chocolate
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {chocolateTypes.map((chocolate) => (
              <Card 
                key={chocolate.id}
                className={`cursor-pointer transition-all duration-300 hover:scale-105 ${
                  selectedChocolate === chocolate.id 
                    ? 'ring-2 ring-amber-400 bg-black/50' 
                    : 'bg-black/30 hover:bg-black/40'
                } backdrop-blur-md border-amber-500/20`}
                onClick={() => setSelectedChocolate(chocolate.id)}
              >
                <CardContent className="p-4 text-center">
                  <div 
                    className="w-12 h-12 mx-auto mb-3 rounded-full shadow-lg"
                    style={{ backgroundColor: chocolate.color }}
                  />
                  <h3 className="text-amber-200 font-medium text-sm mb-1">{chocolate.name}</h3>
                  <p className="text-amber-300/60 text-xs">{chocolate.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Design Tools */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-amber-200 mb-6 text-center">
            Design Tools
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {designTools.map((tool) => (
              <Card 
                key={tool.id}
                className={`cursor-pointer transition-all duration-300 hover:scale-105 ${
                  activeTool === tool.id 
                    ? 'ring-2 ring-amber-400 bg-black/50' 
                    : 'bg-black/30 hover:bg-black/40'
                } backdrop-blur-md border-amber-500/20`}
                onClick={() => setActiveTool(tool.id)}
              >
                <CardContent className="p-6 text-center">
                  <div className="text-3xl mb-3">{tool.icon}</div>
                  <h3 className="text-amber-200 font-medium mb-2">{tool.name}</h3>
                  <p className="text-amber-300/60 text-sm">{tool.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Design Canvas */}
        <Card className="bg-black/40 backdrop-blur-lg border-amber-500/30">
          <CardContent className="p-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-amber-200 mb-6">
                Your Chocolate Creation
              </h2>
              <div className="bg-black/20 rounded-lg p-8 mb-6 min-h-[200px] flex items-center justify-center">
                <div 
                  className="w-32 h-32 rounded-lg shadow-2xl transform rotate-12 hover:rotate-0 transition-transform duration-500"
                  style={{ 
                    backgroundColor: chocolateTypes.find(c => c.id === selectedChocolate)?.color,
                    background: `linear-gradient(135deg, ${chocolateTypes.find(c => c.id === selectedChocolate)?.color}, #1a1a1a)`
                  }}
                />
              </div>
              <p className="text-amber-100/80 text-lg mb-8">
                Using {chocolateTypes.find(c => c.id === selectedChocolate)?.name.toLowerCase()} with {designTools.find(t => t.id === activeTool)?.name.toLowerCase()}
              </p>
              <div className="flex gap-4 justify-center">
                <Button className="bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-500 hover:to-yellow-500 text-black font-semibold px-6 py-3 rounded-full">
                  Save Design
                </Button>
                <Button className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-500 hover:to-red-500 text-white font-semibold px-6 py-3 rounded-full">
                  Start Over
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </ChocolateTextureBackground>
  );
};

export default ChocolateDesignStudio;