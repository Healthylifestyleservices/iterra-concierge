import React from 'react';
import { Card } from './ui/card';

const AppAnalysisReport: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto p-6 space-y-8" style={{ color: '#F5EBD8' }}>
      <Card className="p-6" style={{ background: 'rgba(13, 13, 13, 0.9)', border: '1px solid rgba(255, 224, 138, 0.3)' }}>
        <h1 className="text-3xl font-bold mb-6" style={{ fontFamily: '"Playfair Display", serif', color: '#FFD700' }}>
          iTERRA™ Lifestyle Concierge - Complete App Analysis
        </h1>
        
        <div className="space-y-6">
          {/* App Overview */}
          <section>
            <h2 className="text-2xl font-semibold mb-4" style={{ color: '#FFA500' }}>App Overview</h2>
            <div className="space-y-3">
              <p><strong>Name:</strong> iTERRA™ Lifestyle Concierge</p>
              <p><strong>Type:</strong> Luxury wellness and essential oils lifestyle application</p>
              <p><strong>Theme:</strong> Dark luxury theme with golden accents</p>
              <p><strong>Target:</strong> doTERRA associates and wellness enthusiasts</p>
            </div>
          </section>

          {/* Design & Styling */}
          <section>
            <h2 className="text-2xl font-semibold mb-4" style={{ color: '#FFA500' }}>Design & Styling</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h3 className="text-lg font-medium mb-2" style={{ color: '#CD7F32' }}>Color Scheme</h3>
                <ul className="space-y-1 text-sm">
                  <li>• Background: #0d0d0d (Dark charcoal)</li>
                  <li>• Primary Text: #F5EBD8 (Warm cream)</li>
                  <li>• Gold Accent: #FFD700</li>
                  <li>• Orange Gradient: #FFA500</li>
                  <li>• Bronze: #CD7F32</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2" style={{ color: '#CD7F32' }}>Typography</h3>
                <ul className="space-y-1 text-sm">
                  <li>• Primary Font: Playfair Display (serif)</li>
                  <li>• Header Size: 56px</li>
                  <li>• Text Shadow: Golden glow effects</li>
                  <li>• Font Weight: 400-700 range</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Features & Components */}
          <section>
            <h2 className="text-2xl font-semibold mb-4" style={{ color: '#FFA500' }}>Current Features</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h3 className="text-lg font-medium mb-2" style={{ color: '#CD7F32' }}>Working Components</h3>
                <ul className="space-y-1 text-sm">
                  <li>✅ Main Navigation (8 sections)</li>
                  <li>✅ iTERRA Empress Assistant Panel</li>
                  <li>✅ Sacred Geometry Cursor</li>
                  <li>✅ Responsive Design</li>
                  <li>✅ Gradient Buttons</li>
                  <li>✅ Dark Theme Implementation</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2" style={{ color: '#CD7F32' }}>Navigation Sections</h3>
                <ul className="space-y-1 text-sm">
                  <li>• Masculine Vitality</li>
                  <li>• Feminine Energy</li>
                  <li>• Pet Harmony</li>
                  <li>• Home</li>
                  <li>• Wellness Sanctuary</li>
                  <li>• Wellness Entrepreneurship</li>
                  <li>• Wisdom of Wellness</li>
                  <li>• Crafted Wellness Intake</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </Card>
    </div>
  );
};

export default AppAnalysisReport;