export interface EmotionalKeyword {
  word: string;
  emotion: string;
  intensity: number;
  category: 'positive' | 'negative' | 'neutral';
}

export interface EmotionalAnalysis {
  dominantEmotion: string;
  intensity: number;
  keywords: EmotionalKeyword[];
  recommendations: string[];
}

const emotionalKeywords: EmotionalKeyword[] = [
  { word: 'stressed', emotion: 'stress', intensity: 0.8, category: 'negative' },
  { word: 'anxious', emotion: 'anxiety', intensity: 0.9, category: 'negative' },
  { word: 'calm', emotion: 'peace', intensity: 0.7, category: 'positive' },
  { word: 'happy', emotion: 'joy', intensity: 0.8, category: 'positive' },
  { word: 'sad', emotion: 'sadness', intensity: 0.7, category: 'negative' },
  { word: 'angry', emotion: 'anger', intensity: 0.9, category: 'negative' },
  { word: 'peaceful', emotion: 'peace', intensity: 0.8, category: 'positive' },
  { word: 'tired', emotion: 'fatigue', intensity: 0.6, category: 'negative' },
  { word: 'energetic', emotion: 'energy', intensity: 0.8, category: 'positive' },
  { word: 'overwhelmed', emotion: 'overwhelm', intensity: 0.9, category: 'negative' },
  { word: 'focused', emotion: 'focus', intensity: 0.7, category: 'positive' },
  { word: 'confused', emotion: 'confusion', intensity: 0.6, category: 'negative' }
];

export const analyzeEmotionalContent = (text: string): EmotionalAnalysis => {
  const words = text.toLowerCase().split(/\W+/);
  const foundKeywords: EmotionalKeyword[] = [];
  
  words.forEach(word => {
    const match = emotionalKeywords.find(k => k.word === word);
    if (match) {
      foundKeywords.push(match);
    }
  });

  if (foundKeywords.length === 0) {
    return {
      dominantEmotion: 'neutral',
      intensity: 0.5,
      keywords: [],
      recommendations: ['Consider exploring our wellness collection for general support']
    };
  }

  const dominantKeyword = foundKeywords.reduce((prev, current) => 
    prev.intensity > current.intensity ? prev : current
  );

  return {
    dominantEmotion: dominantKeyword.emotion,
    intensity: dominantKeyword.intensity,
    keywords: foundKeywords,
    recommendations: getRecommendations(dominantKeyword.emotion)
  };
};

const getRecommendations = (emotion: string): string[] => {
  const recommendations: Record<string, string[]> = {
    stress: ['Lavender for relaxation', 'Bergamot for stress relief', 'Frankincense for grounding'],
    anxiety: ['Lavender Peace blend', 'Wild Orange for uplifting', 'Copaiba for calm'],
    peace: ['Continue with Serenity blend', 'Roman Chamomile for deeper calm'],
    joy: ['Citrus Bliss for sustained happiness', 'Peppermint for energy'],
    sadness: ['Elevation blend for mood support', 'Bergamot for emotional balance'],
    anger: ['Forgive blend for emotional release', 'Ylang Ylang for peace'],
    fatigue: ['Peppermint for energy', 'Wild Orange for vitality'],
    energy: ['Continue with energizing oils', 'Eucalyptus for mental clarity'],
    overwhelm: ['Balance blend for grounding', 'Frankincense for centering'],
    focus: ['InTune blend for concentration', 'Rosemary for mental clarity'],
    confusion: ['Clarity blend for mental focus', 'Lemon for mental stimulation']
  };

  return recommendations[emotion] || ['Explore our wellness collection for personalized support'];
};