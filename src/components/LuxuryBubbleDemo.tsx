import React, { useState } from 'react';
import { LuxuryBubble } from './luxury-bubble';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

export const LuxuryBubbleDemo = () => {
  const [selectedType, setSelectedType] = useState<'wellness' | 'emotional' | 'business'>('wellness');
  const [emotionalState, setEmotionalState] = useState('overwhelm');

  const sampleContent = {
    wellness: "Welcome to your personalized wellness journey. Let's explore the perfect essential oils for your needs today.",
    emotional: "I sense you're feeling overwhelmed. Let me guide you through a calming aromatherapy ritual that will help ground your energy.",
    business: "Discover premium business tools and training resources to elevate your doTERRA practice to new heights of success."
  };

  const emotionalStates = ['overwhelm', 'grief', 'anger', 'sadness', 'fear'];

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-cormorant text-[#D4AF37]">
            Luxury Bubble Component Demo
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Type Selection */}
          <div className="space-y-2">
            <label className="text-sm font-medium">Bubble Type:</label>
            <div className="flex gap-2">
              {(['wellness', 'emotional', 'business'] as const).map(type => (
                <Button
                  key={type}
                  variant={selectedType === type ? 'default' : 'outline'}
                  onClick={() => setSelectedType(type)}
                  className="capitalize"
                >
                  {type}
                </Button>
              ))}
            </div>
          </div>

          {/* Emotional State Selection */}
          {selectedType === 'emotional' && (
            <div className="space-y-2">
              <label className="text-sm font-medium">Emotional State:</label>
              <div className="flex gap-2 flex-wrap">
                {emotionalStates.map(state => (
                  <Button
                    key={state}
                    variant={emotionalState === state ? 'default' : 'outline'}
                    onClick={() => setEmotionalState(state)}
                    className="capitalize text-xs"
                  >
                    {state}
                  </Button>
                ))}
              </div>
            </div>
          )}

          {/* Demo Bubble */}
          <div className="flex justify-center py-8">
            <LuxuryBubble
              content={sampleContent[selectedType]}
              type={selectedType}
              emotionalState={selectedType === 'emotional' ? emotionalState : undefined}
            />
          </div>

          {/* Usage Example */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-medium mb-2">Usage Example:</h3>
            <pre className="text-sm text-gray-600 overflow-x-auto">
{`<LuxuryBubble
  content="${sampleContent[selectedType]}"
  type="${selectedType}"
  ${selectedType === 'emotional' ? `emotionalState="${emotionalState}"` : ''}
/>`}
            </pre>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};