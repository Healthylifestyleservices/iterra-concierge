import React, { useState } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Textarea } from './ui/textarea';
import { Copy, Download } from 'lucide-react';

const FamousAIPromptGenerator: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const aiPrompt = `A high-end UI navigation bar for the iTERRA™ Lifestyle Concierge app, displayed on a deep rich onyx background resembling black velvet. The header 'iTERRA™ Lifestyle Concierge' is at the top in a luxe serif/sans-serif hybrid font, champagne color (#F5EBD8). Below, eight buttons arranged horizontally: 'Masculine Vitality', 'Feminine Energy', 'Pet Harmony', 'Home', 'Wellness Sanctuary', 'Wellness Entrepreneurship', 'Wisdom of Wellness', 'Crafted Wellness Intake'. Each button has a pearlized base with inner and outer soft glow, 2xl rounded corners, no borders. Button text in the same luxe font, champagne color. The color palette rotates through gold, bronze, and pearl tones. One button ('Home') is shown in hover state: gently lifted with 3D elevation, light shimmer across surface, intensified glow. Over this hovered button, show a sacred geometry cursor (Golden Flower of Life symbol). Another button ('Wellness Sanctuary') has an open dropdown panel below it; the panel is empty with pearl blur backdrop (frosted glass effect) and smooth fade-slide appearance. Style: ultra-detailed digital design, 8k resolution, material design 3.0, opulent and earthy, professional UI --ar 16:9 --v 6.0 --style raw --no emoji --no brand_symbols`;

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(aiPrompt);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const downloadPrompt = () => {
    const element = document.createElement('a');
    const file = new Blob([aiPrompt], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = 'iterra-navigation-ai-prompt.txt';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-600 mb-4">
            iTERRA™ Navigation AI Prompt Generator
          </h1>
          <p className="text-gray-300 text-lg">
            Generate visual designs for the iTERRA™ Lifestyle Concierge navigation using Famous AI (MidJourney/DALL-E)
          </p>
        </div>

        <Card className="bg-black/40 backdrop-blur-sm border-amber-500/20 p-6">
          <div className="mb-6">
            <h2 className="text-2xl font-semibold text-amber-400 mb-4">Navigation Structure</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-300">
              <div>
                <h3 className="text-amber-300 font-medium mb-2">Header:</h3>
                <p className="text-sm">"iTERRA™ Lifestyle Concierge"</p>
              </div>
              <div>
                <h3 className="text-amber-300 font-medium mb-2">Buttons:</h3>
                <ul className="text-sm space-y-1">
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
          </div>

          <div className="mb-6">
            <h2 className="text-2xl font-semibold text-amber-400 mb-4">AI Prompt for Famous AI</h2>
            <Textarea
              value={aiPrompt}
              readOnly
              className="min-h-[200px] bg-slate-800/50 border-amber-500/30 text-gray-200 font-mono text-sm"
            />
          </div>

          <div className="flex gap-4 justify-center">
            <Button
              onClick={copyToClipboard}
              className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white"
            >
              <Copy className="w-4 h-4 mr-2" />
              {copied ? 'Copied!' : 'Copy Prompt'}
            </Button>
            <Button
              onClick={downloadPrompt}
              variant="outline"
              className="border-amber-500/50 text-amber-400 hover:bg-amber-500/10"
            >
              <Download className="w-4 h-4 mr-2" />
              Download
            </Button>
          </div>
        </Card>

        <Card className="bg-black/40 backdrop-blur-sm border-amber-500/20 p-6 mt-6">
          <h2 className="text-2xl font-semibold text-amber-400 mb-4">Design Specifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-300 text-sm">
            <div>
              <h3 className="text-amber-300 font-medium mb-2">Color Scheme:</h3>
              <p>Gold, Bronze, Pearl (rotating palette)</p>
              
              <h3 className="text-amber-300 font-medium mb-2 mt-4">Button Style:</h3>
              <ul className="space-y-1">
                <li>• Pearlized base with soft ambient glow</li>
                <li>• 2xl rounded corners, no borders</li>
                <li>• Luxe serif/sans-serif hybrid font</li>
                <li>• Champagne tone on dark background</li>
              </ul>
            </div>
            <div>
              <h3 className="text-amber-300 font-medium mb-2">Interactive States:</h3>
              <ul className="space-y-1">
                <li>• Gentle lift on hover</li>
                <li>• Light shimmer across surface</li>
                <li>• Glow intensifies subtly</li>
              </ul>
              
              <h3 className="text-amber-300 font-medium mb-2 mt-4">Sacred Geometry:</h3>
              <ul className="space-y-1">
                <li>• Golden Flower of Life cursor</li>
                <li>• Hexagram Grid patterns</li>
                <li>• Fibonacci Spiral accents</li>
              </ul>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default FamousAIPromptGenerator;