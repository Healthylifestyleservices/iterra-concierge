import React from 'react';
import { FamousAIThemeProvider } from './FamousAIThemeProvider';
import { SacredGeometryBackground, LuxuryCard, LuxuryButton } from './LuxuryThemeComponents';
import { useFamousAITheme } from './FamousAIThemeProvider';

const ThemedContent: React.FC = () => {
  const theme = useFamousAITheme();
  
  return (
    <SacredGeometryBackground>
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 
            className="text-5xl font-bold mb-4 bg-gradient-to-r bg-clip-text text-transparent"
            style={{
              backgroundImage: `linear-gradient(135deg, ${theme.colors.gold}, ${theme.colors.rosegold})`
            }}
          >
            doTERRA Wellness Assistant
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Experience luxury wellness guidance with Famous AI technology
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <LuxuryCard>
            <div className="text-center">
              <div 
                className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center"
                style={{ backgroundColor: `${theme.colors.gold}20` }}
              >
                <span className="text-2xl">🌿</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Essential Oils</h3>
              <p className="text-gray-300">Discover the perfect oils for your wellness journey</p>
            </div>
          </LuxuryCard>
          
          <LuxuryCard>
            <div className="text-center">
              <div 
                className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center"
                style={{ backgroundColor: `${theme.colors.bronze}20` }}
              >
                <span className="text-2xl">💼</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Business Tools</h3>
              <p className="text-gray-300">Grow your doTERRA business with AI assistance</p>
            </div>
          </LuxuryCard>
          
          <LuxuryCard>
            <div className="text-center">
              <div 
                className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center"
                style={{ backgroundColor: `${theme.colors.rosegold}20` }}
              >
                <span className="text-2xl">🧘</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Wellness Hub</h3>
              <p className="text-gray-300">Personalized wellness recommendations</p>
            </div>
          </LuxuryCard>
        </div>
        
        <div className="text-center">
          <div className="flex flex-wrap justify-center gap-4">
            <LuxuryButton variant="gold">
              Get Started
            </LuxuryButton>
            <LuxuryButton variant="bronze">
              Learn More
            </LuxuryButton>
            <LuxuryButton variant="rosegold">
              Contact Support
            </LuxuryButton>
          </div>
        </div>
      </div>
    </SacredGeometryBackground>
  );
};

export const ThemedApp: React.FC = () => {
  return (
    <FamousAIThemeProvider>
      <ThemedContent />
    </FamousAIThemeProvider>
  );
};