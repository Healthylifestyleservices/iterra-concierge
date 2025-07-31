import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';

const TypographyDemo: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 space-y-8">
      <Card>
        <CardHeader>
          <CardTitle className="font-cormorant font-medium italic text-gold text-3xl">
            Typography Showcase
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-8">
          {/* Headings Section */}
          <div className="space-y-4">
            <h2 className="font-cormorant font-medium italic text-gold text-2xl mb-4">
              Headings (Cormorant)
            </h2>
            <h1 className="font-cormorant font-medium italic text-gold text-4xl">
              Heading 1 - Cormorant Medium Italic Gold
            </h1>
            <h2 className="font-cormorant font-medium italic text-gold text-3xl">
              Heading 2 - Cormorant Medium Italic Gold
            </h2>
            <h3 className="font-cormorant font-medium italic text-gold text-2xl">
              Heading 3 - Cormorant Medium Italic Gold
            </h3>
            <h4 className="font-cormorant font-medium italic text-gold text-xl">
              Heading 4 - Cormorant Medium Italic Gold
            </h4>
          </div>

          {/* Body Text Section */}
          <div className="space-y-4">
            <h2 className="font-cormorant font-medium italic text-gold text-2xl mb-4">
              Body Text (Avenir)
            </h2>
            <p className="font-avenir font-normal text-lg leading-relaxed">
              This is body text using Avenir font with normal weight. It provides excellent readability 
              and maintains a clean, modern appearance throughout the application. The font pairs 
              beautifully with the elegant Cormorant headings.
            </p>
            <p className="font-avenir font-normal text-base">
              Here's another paragraph in standard size. Avenir's clean lines and balanced letterforms 
              make it perfect for extended reading while maintaining visual harmony with decorative elements.
            </p>
            <p className="font-avenir font-normal text-sm text-muted-foreground">
              This is smaller body text, often used for captions, footnotes, or secondary information.
            </p>
          </div>

          {/* Buttons Section */}
          <div className="space-y-4">
            <h2 className="font-cormorant font-medium italic text-gold text-2xl mb-4">
              Buttons (Avenir Medium)
            </h2>
            <div className="flex flex-wrap gap-4">
              <Button className="font-avenir font-medium">
                Primary Button
              </Button>
              <Button variant="secondary" className="font-avenir font-medium">
                Secondary Button
              </Button>
              <Button variant="outline" className="font-avenir font-medium">
                Outline Button
              </Button>
              <Button variant="ghost" className="font-avenir font-medium">
                Ghost Button
              </Button>
            </div>
          </div>

          {/* Mixed Content Example */}
          <div className="space-y-4 p-6 bg-cream rounded-lg">
            <h2 className="font-cormorant font-medium italic text-gold text-2xl">
              Complete Example
            </h2>
            <p className="font-avenir font-normal">
              This section demonstrates how the typography system works together in a real-world scenario. 
              The combination of Cormorant headings and Avenir body text creates a sophisticated and 
              readable design system.
            </p>
            <div className="flex gap-3 mt-4">
              <Button className="font-avenir font-medium">
                Get Started
              </Button>
              <Button variant="outline" className="font-avenir font-medium">
                Learn More
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TypographyDemo;