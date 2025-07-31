import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { MessageCircle, UserPlus } from 'lucide-react';
import { WellnessOptions } from './WellnessOptions';
import { CategoryView } from './CategoryView';
import { AssistantChat } from './AssistantChat';
import { AuthModal } from './AuthModal';

export function iTerraWellnessApp() {
  const [currentView, setCurrentView] = useState<'welcome' | 'options' | 'category'>('welcome');
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [user, setUser] = useState<any>(null);

  const handleGetStarted = () => {
    setCurrentView('options');
  };

  const handleSelectCategory = (category: string) => {
    setSelectedCategory(category);
    setCurrentView('category');
  };

  const handleBackToOptions = () => {
    setCurrentView('options');
    setSelectedCategory('');
  };

  const handleAuthSuccess = (userData: any) => {
    setUser(userData);
    console.log('✅ User authenticated:', userData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-blue-50">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-emerald-100 p-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="text-2xl">🌿</div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-emerald-700 to-teal-600 bg-clip-text text-transparent">
                iTERRA™ Concierge
              </h1>
              <p className="text-xs text-gray-600">
                Powered by Healthy Lifestyle Education Services
              </p>
            </div>
          </div>
          
          {/* Auth Button */}
          <div className="flex items-center gap-2">
            {user ? (
              <div className="text-sm text-emerald-700">
                Welcome, {user.email}
              </div>
            ) : (
              <Button
                variant="outline"
                size="sm"
                onClick={() => setIsAuthOpen(true)}
                className="flex items-center gap-2"
              >
                <UserPlus className="w-4 h-4" />
                Sign Up
              </Button>
            )}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto">
        {currentView === 'welcome' && (
          <div className="flex items-center justify-center min-h-[80vh] p-4">
            <Card className="w-full max-w-md">
              <CardHeader className="text-center">
                <div className="text-4xl mb-4">🌿</div>
                <CardTitle className="text-2xl">
                  Welcome to Your Wellness Journey
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <p className="text-gray-700">
                  Discover personalized wellness solutions across all areas of your life
                </p>
                <Button 
                  className="w-full bg-emerald-600 hover:bg-emerald-700"
                  onClick={handleGetStarted}
                >
                  Get Started
                </Button>
              </CardContent>
            </Card>
          </div>
        )}

        {currentView === 'options' && (
          <WellnessOptions onSelectCategory={handleSelectCategory} />
        )}

        {currentView === 'category' && (
          <CategoryView 
            category={selectedCategory} 
            onBack={handleBackToOptions} 
          />
        )}
      </div>

      {/* Floating Assistant Button */}
      {!isChatOpen && (
        <Button
          className="fixed bottom-4 right-4 rounded-full w-14 h-14 bg-emerald-600 hover:bg-emerald-700 shadow-lg"
          onClick={() => setIsChatOpen(true)}
        >
          <MessageCircle className="w-6 h-6" />
        </Button>
      )}

      {/* Assistant Chat */}
      <AssistantChat 
        isOpen={isChatOpen} 
        onClose={() => setIsChatOpen(false)} 
      />

      {/* Auth Modal */}
      <AuthModal
        isOpen={isAuthOpen}
        onClose={() => setIsAuthOpen(false)}
        onSuccess={handleAuthSuccess}
      />
    </div>
  );
}