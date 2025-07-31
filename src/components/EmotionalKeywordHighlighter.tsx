import React from 'react';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';

interface KeywordHighlighterProps {
  text: string;
  keywords: string[];
  className?: string;
}

export const EmotionalKeywordHighlighter: React.FC<KeywordHighlighterProps> = ({
  text,
  keywords,
  className = ''
}) => {
  const highlightKeywords = (text: string, keywords: string[]) => {
    if (!keywords.length) return [text];
    
    const regex = new RegExp(`\\b(${keywords.join('|')})\\b`, 'gi');
    const parts = text.split(regex);
    
    return parts.map((part, index) => {
      const isKeyword = keywords.some(keyword => 
        keyword.toLowerCase() === part.toLowerCase()
      );
      
      if (isKeyword) {
        return (
          <motion.span
            key={index}
            initial={{ backgroundColor: 'transparent' }}
            animate={{ backgroundColor: '#fef3c7' }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="px-1 rounded font-medium text-purple-800"
          >
            {part}
          </motion.span>
        );
      }
      
      return part;
    });
  };

  return (
    <div className={`${className}`}>
      {highlightKeywords(text, keywords)}
    </div>
  );
};

interface DetectedKeywordsDisplayProps {
  detectedKeywords: string[];
  allKeywords: Record<string, string[]>;
}

export const DetectedKeywordsDisplay: React.FC<DetectedKeywordsDisplayProps> = ({
  detectedKeywords,
  allKeywords
}) => {
  if (!detectedKeywords.length) return null;

  const getEmotionalState = (keyword: string) => {
    for (const [state, keywords] of Object.entries(allKeywords)) {
      if (keywords.includes(keyword.toLowerCase())) {
        return state;
      }
    }
    return null;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="mb-4"
    >
      <h4 className="text-sm font-semibold text-purple-700 mb-2">
        Detected Emotional Keywords:
      </h4>
      <div className="flex flex-wrap gap-2">
        {detectedKeywords.map((keyword, index) => {
          const state = getEmotionalState(keyword);
          return (
            <motion.div
              key={index}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: index * 0.1, type: 'spring' }}
            >
              <Badge 
                variant="secondary" 
                className="bg-yellow-100 text-yellow-800 border-yellow-300"
              >
                {keyword}
                {state && (
                  <span className="ml-1 text-xs opacity-75">
                    ({state})
                  </span>
                )}
              </Badge>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};