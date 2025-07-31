import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { processEmotionalQuery, emotionalKeywords } from '@/lib/emotional-engine';
import { EmotionalResponseDisplay } from '@/components/EmotionalResponseDisplay';
import { EmotionalSynergyBlend } from '@/components/EmotionalSynergyBlend';
import { EmotionalKeywordHighlighter, DetectedKeywordsDisplay } from '@/components/EmotionalKeywordHighlighter';
import { motion } from 'framer-motion';
import { Send, Heart, Sparkles } from 'lucide-react';

export const EmotionalWellnessChat: React.FC = () => {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [queryHistory, setQueryHistory] = useState<string[]>([]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setIsLoading(true);
    setQueryHistory(prev => [query, ...prev.slice(0, 4)]);
    
    setTimeout(() => {
      const emotionalResponse = processEmotionalQuery(query);
      setResponse(emotionalResponse);
      setIsLoading(false);
    }, 800);
  };

  const handleNavigation = (path: string) => {
    console.log('Navigating to:', path);
    alert(`Would navigate to: ${path}`);
  };

  const handleCreateBlend = () => {
    alert('Opening custom blend creator...');
  };

  const handleViewRecipes = () => {
    alert('Opening DIY recipe library...');
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="bg-gradient-to-r from-purple-50 to-pink-50 border-purple-200">
          <CardHeader>
            <CardTitle className="text-center text-purple-800 flex items-center justify-center gap-2">
              <Heart className="w-6 h-6" />
              Emotional Wellness Assistant
              <Sparkles className="w-5 h-5" />
            </CardTitle>
            <p className="text-center text-purple-600 text-sm">
              Share how you're feeling, and I'll guide you to the perfect aromatherapy support
            </p>
          </CardHeader>
          
          <CardContent>
            <form onSubmit={handleSubmit} className="flex gap-3">
              <Input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="How are you feeling today? (e.g., 'I'm stressed and overwhelmed')"
                className="flex-1 border-purple-200 focus:border-purple-400"
                disabled={isLoading}
              />
              <Button 
                type="submit" 
                disabled={isLoading || !query.trim()}
                className="bg-purple-600 hover:bg-purple-700"
              >
                {isLoading ? (
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                ) : (
                  <Send className="w-4 h-4" />
                )}
              </Button>
            </form>
            
            {queryHistory.length > 0 && (
              <div className="mt-4">
                <p className="text-xs text-purple-600 mb-2">Recent queries:</p>
                <div className="flex flex-wrap gap-2">
                  {queryHistory.map((q, index) => (
                    <button
                      key={index}
                      onClick={() => setQuery(q)}
                      className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded hover:bg-purple-200 transition-colors"
                    >
                      {q.length > 30 ? q.substring(0, 30) + '...' : q}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </motion.div>

      {response && response.detectedKeywords && (
        <DetectedKeywordsDisplay 
          detectedKeywords={response.detectedKeywords}
          allKeywords={emotionalKeywords}
        />
      )}

      {response && response.synergy && (
        <EmotionalSynergyBlend
          states={response.states}
          oils={response.oils}
          onCreateBlend={handleCreateBlend}
          onViewRecipes={handleViewRecipes}
        />
      )}

      {response && !response.synergy && (
        <EmotionalResponseDisplay 
          response={response} 
          onNavigate={handleNavigation}
        />
      )}

      {response === null && query && !isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="bg-yellow-50 border-yellow-200">
            <CardContent className="pt-6">
              <p className="text-yellow-800 text-center mb-3">
                I didn't detect any specific emotional keywords in your message.
              </p>
              <EmotionalKeywordHighlighter 
                text={query}
                keywords={[]}
                className="text-center text-gray-600 italic mb-3"
              />
              <p className="text-yellow-700 text-sm text-center">
                Try describing how you feel using words like "stressed", "sad", "anxious", or "tired".
              </p>
            </CardContent>
          </Card>
        </motion.div>
      )}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-center text-sm text-gray-500"
      >
        <p>✨ Powered by doTERRA aromatherapy wisdom and sacred geometry ✨</p>
      </motion.div>
    </div>
  );
};