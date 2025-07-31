import React, { useState } from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import ChocolateDesignHub from './ChocolateDesignHub';
import ChocolateDesignStudio from './ChocolateDesignStudio';
import ChocolateWellnessIntegration from './ChocolateWellnessIntegration';
import ChocolateTextureBackground from './ChocolateTextureBackground';

type ViewMode = 'hub' | 'studio' | 'wellness' | 'gallery';

const ChocolateDesignApp: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewMode>('hub');

  const navigationItems = [
    { id: 'hub' as ViewMode, name: 'Design Hub', icon: '🏠', description: 'Main chocolate design center' },
    { id: 'studio' as ViewMode, name: 'Design Studio', icon: '🎨', description: 'Create custom chocolates' },
    { id: 'wellness' as ViewMode, name: 'Wellness Collection', icon: '🌿', description: 'Essential oil chocolates' },
    { id: 'gallery' as ViewMode, name: 'Design Gallery', icon: '🖼️', description: 'Showcase creations' }
  ];

  const renderCurrentView = () => {
    switch (currentView) {
      case 'hub':
        return <ChocolateDesignHub />;
      case 'studio':
        return <ChocolateDesignStudio />;
      case 'wellness':
        return <ChocolateWellnessIntegration />;
      case 'gallery':
        return (
          <ChocolateTextureBackground variant="dark" className="min-h-screen">
            <div className="container mx-auto px-6 py-12">
              <div className="text-center">
                <h1 className="text-5xl font-bold bg-gradient-to-r from-amber-300 to-yellow-200 bg-clip-text text-transparent mb-8">
                  Design Gallery
                </h1>
                <p className="text-xl text-amber-200/80 mb-12">
                  Showcase of artisanal chocolate creations
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {[1, 2, 3, 4, 5, 6].map((item) => (
                    <Card key={item} className="bg-black/40 backdrop-blur-lg border-amber-500/30 hover:scale-105 transition-transform duration-300">
                      <CardContent className="p-6">
                        <div className="w-full h-48 bg-gradient-to-br from-amber-800 to-yellow-900 rounded-lg mb-4 shadow-lg" />
                        <h3 className="text-amber-200 font-semibold mb-2">Design #{item}</h3>
                        <p className="text-amber-300/60 text-sm">Artisanal chocolate creation</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </ChocolateTextureBackground>
        );
      default:
        return <ChocolateDesignHub />;
    }
  };

  return (
    <div className="min-h-screen">
      {/* Navigation Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-amber-500/20">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-amber-300 to-yellow-200 bg-clip-text text-transparent">
                Chocolate Design
              </h1>
            </div>
            <div className="flex space-x-2">
              {navigationItems.map((item) => (
                <Button
                  key={item.id}
                  onClick={() => setCurrentView(item.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    currentView === item.id
                      ? 'bg-gradient-to-r from-amber-600 to-yellow-600 text-black'
                      : 'bg-black/30 text-amber-200 hover:bg-amber-600/20'
                  }`}
                >
                  <span className="mr-2">{item.icon}</span>
                  {item.name}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="pt-20">
        {renderCurrentView()}
      </div>

      {/* Footer */}
      <div className="bg-black/80 backdrop-blur-md border-t border-amber-500/20 py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-amber-200/60">
            © 2024 Chocolate Design Studio - Where artistry meets flavor
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChocolateDesignApp;