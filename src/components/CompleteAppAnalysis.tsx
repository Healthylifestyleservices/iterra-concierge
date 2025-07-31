import React, { useState } from 'react';
import { Button } from './ui/button';
import AppAnalysisReport from './AppAnalysisReport';
import AppAnalysisReport2 from './AppAnalysisReport2';
import AppAnalysisReport3 from './AppAnalysisReport3';

const CompleteAppAnalysis: React.FC = () => {
  const [currentSection, setCurrentSection] = useState(1);

  const sections = [
    { id: 1, title: 'Overview & Design', component: AppAnalysisReport },
    { id: 2, title: 'Features & Issues', component: AppAnalysisReport2 },
    { id: 3, title: 'Resources & Status', component: AppAnalysisReport3 }
  ];

  const CurrentComponent = sections.find(s => s.id === currentSection)?.component || AppAnalysisReport;

  return (
    <div className="min-h-screen" style={{ background: '#0d0d0d' }}>
      {/* Header */}
      <header className="text-center py-8" style={{ background: '#000000' }}>
        <h1 
          className="text-4xl font-bold mb-4"
          style={{
            fontFamily: '"Playfair Display", serif',
            color: '#F5EBD8',
            textShadow: '0 0 20px rgba(255, 224, 138, 0.4)'
          }}
        >
          iTERRA™ Complete App Analysis
        </h1>
        
        {/* Section Navigation */}
        <nav className="flex justify-center gap-4 mt-6">
          {sections.map((section) => (
            <Button
              key={section.id}
              onClick={() => setCurrentSection(section.id)}
              className="transition-all duration-300 hover:scale-105 border-0"
              style={{
                borderRadius: '1rem',
                fontFamily: '"Playfair Display", serif',
                fontSize: '14px',
                fontWeight: '500',
                padding: '10px 20px',
                color: '#F5EBD8',
                background: currentSection === section.id 
                  ? 'linear-gradient(135deg, #CD7F32, #B8860B)'
                  : 'linear-gradient(135deg, #FFD700, #FFA500)',
                boxShadow: '0 4px 20px rgba(255, 224, 138, 0.3)'
              }}
            >
              {section.title}
            </Button>
          ))}
        </nav>
      </header>

      {/* Content */}
      <main className="pb-8">
        <CurrentComponent />
      </main>

      {/* Summary Footer */}
      <footer className="text-center py-8" style={{ background: 'rgba(13, 13, 13, 0.9)' }}>
        <div className="max-w-4xl mx-auto px-4">
          <h2 
            className="text-2xl font-bold mb-4"
            style={{
              fontFamily: '"Playfair Display", serif',
              color: '#FFD700'
            }}
          >
            Summary
          </h2>
          <p className="text-lg" style={{ color: '#F5EBD8', fontFamily: '"Playfair Display", serif' }}>
            The iTERRA™ Lifestyle Concierge has a beautiful, professional design with luxury dark theme and golden accents. 
            The visual framework is complete, but content and functionality need to be implemented to make it fully functional.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default CompleteAppAnalysis;