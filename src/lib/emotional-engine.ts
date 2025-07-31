const emotionalKeywords = {
  overwhelm: ['stress', 'anxious', 'too much', 'overwhelmed', 'pressure', 'burden'],
  grief: ['loss', 'mourn', 'passed away', 'died', 'death', 'funeral', 'miss'],
  anger: ['angry', 'mad', 'furious', 'rage', 'irritated', 'frustrated'],
  sadness: ['sad', 'depressed', 'down', 'blue', 'melancholy', 'heartbroken'],
  fear: ['afraid', 'scared', 'terrified', 'anxious', 'worried', 'panic'],
  joy: ['happy', 'joyful', 'excited', 'elated', 'cheerful', 'blissful'],
  peace: ['calm', 'peaceful', 'serene', 'tranquil', 'relaxed', 'centered'],
  energy: ['tired', 'exhausted', 'drained', 'fatigue', 'low energy', 'sluggish'],
  focus: ['distracted', 'unfocused', 'scattered', 'concentration', 'clarity'],
  confidence: ['insecure', 'doubt', 'uncertain', 'confidence', 'self-esteem'],
  sleep: ['insomnia', 'restless', 'cant sleep', 'tired', 'sleepless'],
  digestion: ['stomach', 'nausea', 'digestive', 'bloated', 'upset stomach'],
  headache: ['headache', 'migraine', 'head pain', 'tension'],
  immune: ['sick', 'cold', 'flu', 'immunity', 'fighting infection'],
  romance: ['love', 'romantic', 'passion', 'intimacy', 'connection'],
  creativity: ['creative block', 'inspiration', 'artistic', 'innovative'],
  motivation: ['unmotivated', 'lazy', 'procrastination', 'drive'],
  balance: ['unbalanced', 'harmony', 'equilibrium', 'centered'],
  grounding: ['scattered', 'ungrounded', 'spacey', 'disconnected'],
  protection: ['vulnerable', 'exposed', 'unsafe', 'shield', 'guard']
};

export function processEmotionalQuery(query: string) {
  const matchedStates = Object.entries(emotionalKeywords)
    .filter(([_, keywords]) => 
      keywords.some(kw => query.toLowerCase().includes(kw))
    )
    .map(([state]) => state);

  if (matchedStates.length === 0) return null;
  
  if (matchedStates.length === 1) {
    return {
      ...emotionalResponses[matchedStates[0]],
      detectedKeywords: getDetectedKeywords(query, matchedStates)
    };
  }

  return createSynergyResponse(matchedStates, query);
}

function getDetectedKeywords(query: string, states: string[]) {
  const detected: string[] = [];
  states.forEach(state => {
    emotionalKeywords[state].forEach(keyword => {
      if (query.toLowerCase().includes(keyword)) {
        detected.push(keyword);
      }
    });
  });
  return detected;
}

function createSynergyResponse(states: string[], query: string) {
  const allOils = states.flatMap(state => emotionalResponses[state]?.oils || []);
  const uniqueOils = [...new Set(allOils)];
  
  return {
    oils: uniqueOils.slice(0, 5),
    action: `Multiple emotional states detected (${states.join(', ')}). Create a personalized synergy blend combining these oils for holistic support.`,
    geometry: 'flower-of-life',
    synergy: true,
    states: states,
    detectedKeywords: getDetectedKeywords(query, states),
    diyRecipeLink: '/recipes/emotional-synergy',
    intakeFormLink: '/intake/emotional-assessment',
    learnMoreLink: '/education/emotional-aromatherapy',
    synergyBenefits: `The combination of ${states.join(' and ')} support creates a powerful therapeutic blend that addresses your unique emotional landscape with comprehensive aromatherapy wisdom.`
  };
}

export const emotionalResponses: Record<string, any> = {
  overwhelm: {
    oils: ['Serenity', 'Lavender Peace', 'Balance'],
    action: 'Try this 3-minute grounding ritual: Place 2 drops of Serenity on your wrists, breathe deeply for 10 counts, visualize roots growing from your feet into the earth.',
    geometry: 'flower-of-life',
    diyRecipes: ['/recipes/stress-relief-roller', '/recipes/calming-diffuser-blend'],
    intakeFormLink: '/intake/stress-assessment',
    learnMoreLink: '/education/stress-management'
  },
  grief: {
    oils: ['Console', 'Frankincense', 'Myrrh'],
    action: 'Create a sacred space: Light a candle, apply Console to your heart center, and allow yourself to feel and release.',
    geometry: 'flower-of-life',
    diyRecipes: ['/recipes/comfort-blend', '/recipes/healing-heart-spray'],
    intakeFormLink: '/intake/grief-support',
    learnMoreLink: '/education/grief-healing'
  },
  anger: {
    oils: ['Forgive', 'Lavender', 'Serenity'],
    action: 'Cool the fire within: Apply Forgive to temples, take 5 deep breaths, practice the 4-7-8 breathing technique.',
    geometry: 'flower-of-life',
    diyRecipes: ['/recipes/cooling-spray', '/recipes/forgiveness-blend'],
    intakeFormLink: '/intake/anger-management',
    learnMoreLink: '/education/emotional-regulation'
  },
  sadness: {
    oils: ['Cheer', 'Citrus Bliss', 'Elevation'],
    action: 'Lift your spirits: Diffuse Cheer, step outside for sunlight, practice gratitude for 3 things.',
    geometry: 'flower-of-life',
    diyRecipes: ['/recipes/mood-lift-blend', '/recipes/sunshine-spray'],
    intakeFormLink: '/intake/mood-support',
    learnMoreLink: '/education/mood-enhancement'
  },
  fear: {
    oils: ['Peace', 'Frankincense', 'Vetiver'],
    action: 'Find your courage: Apply Peace to heart, ground your feet, repeat "I am safe and protected".',
    geometry: 'flower-of-life',
    diyRecipes: ['/recipes/courage-blend', '/recipes/protection-spray'],
    intakeFormLink: '/intake/anxiety-support',
    learnMoreLink: '/education/fear-management'
  }
};

export { emotionalKeywords };