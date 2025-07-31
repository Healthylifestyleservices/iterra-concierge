import { config } from '../config/environment.js';

class APIService {
  constructor() {
    this.baseURL = 'https://api.famous.ai/v1';
    this.apiKey = 'fa-sk-proj-iTERRA-wellness-concierge-2024-12-16';
  }

  async callFamousAI(prompt, context = {}) {
    try {
      const response = await fetch(`${this.baseURL}/chat`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this.apiKey}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          message: prompt,
          context: context,
          model: 'gpt-4',
          temperature: 0.7,
          max_tokens: 1000
        })
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      return await response.json();
    } catch (error) {
      console.error('FamousAI API Error:', error);
      // Fallback response for development
      return {
        response: `I understand you're asking about: ${prompt}. As your iTERRA wellness concierge, I recommend consulting with a certified aromatherapist for personalized guidance.`,
        suggestions: ['Lavender for relaxation', 'Peppermint for energy', 'Frankincense for grounding']
      };
    }
  }

  async getDoterraSuggestions(userInput) {
    const prompt = `As an iTERRA wellness expert specializing in dōTERRA essential oils, provide personalized product recommendations for: ${userInput}. Include specific oil names, usage instructions, and safety considerations.`;
    return this.callFamousAI(prompt, { 
      type: 'product_recommendation',
      associateId: '15996087',
      category: 'essential_oils'
    });
  }

  async getWellnessProtocol(symptoms, preferences = {}) {
    const prompt = `Create a comprehensive wellness protocol using dōTERRA products for these symptoms: ${symptoms}. Consider user preferences: ${JSON.stringify(preferences)}`;
    return this.callFamousAI(prompt, {
      type: 'wellness_protocol',
      associateId: '15996087',
      preferences
    });
  }

  async getEmotionalSupport(emotionalState) {
    const prompt = `Recommend dōTERRA emotional aromatherapy solutions for someone experiencing: ${emotionalState}. Include specific blends and application methods.`;
    return this.callFamousAI(prompt, {
      type: 'emotional_support',
      category: 'emotional_aromatherapy'
    });
  }
}

export const apiService = new APIService();