import { apiService } from './api.js';
import { doterraService } from './doterraService.js';
import { config } from '../config/environment.js';

class WellnessService {
  constructor() {
    this.associateId = config.doterra.associateId;
  }

  async getPersonalizedRecommendations(userProfile) {
    const { concerns, preferences, experience_level, lifestyle } = userProfile;
    
    const prompt = `Create personalized dōTERRA wellness recommendations for:
    Health Concerns: ${concerns.join(', ')}
    Preferences: ${JSON.stringify(preferences)}
    Experience Level: ${experience_level}
    Lifestyle: ${lifestyle}
    
    Provide specific product recommendations with usage instructions.`;
    
    try {
      const aiResponse = await apiService.callFamousAI(prompt, {
        type: 'personalized_wellness',
        associateId: this.associateId,
        userProfile
      });
      
      return this.enhanceWithProductLinks(aiResponse);
    } catch (error) {
      console.error('Wellness Recommendation Error:', error);
      return this.getFallbackRecommendations(concerns);
    }
  }

  async createWellnessProtocol(symptoms, duration = '30_days') {
    const prompt = `Design a comprehensive ${duration} dōTERRA wellness protocol for these symptoms: ${symptoms.join(', ')}. Include:
    - Morning routine
    - Evening routine
    - Targeted applications
    - Safety considerations
    - Progress tracking suggestions`;
    
    return apiService.callFamousAI(prompt, {
      type: 'wellness_protocol',
      duration,
      symptoms,
      associateId: this.associateId
    });
  }

  async getEmotionalWellnessSupport(emotionalState, intensity = 'moderate') {
    const prompt = `Provide dōTERRA emotional aromatherapy support for ${emotionalState} (intensity: ${intensity}). Include:
    - Specific essential oil blends
    - Application methods
    - Diffuser recipes
    - Topical application guidance
    - Complementary lifestyle suggestions`;
    
    return apiService.callFamousAI(prompt, {
      type: 'emotional_wellness',
      emotionalState,
      intensity,
      category: 'emotional_aromatherapy'
    });
  }

  async analyzeSafetyConsiderations(oils, userConditions = []) {
    const prompt = `Analyze safety considerations for these dōTERRA oils: ${oils.join(', ')} with user conditions: ${userConditions.join(', ')}. Provide:
    - Safety warnings
    - Dilution recommendations
    - Contraindications
    - Age-appropriate usage`;
    
    return apiService.callFamousAI(prompt, {
      type: 'safety_analysis',
      oils,
      userConditions
    });
  }

  enhanceWithProductLinks(recommendation) {
    if (recommendation.products) {
      recommendation.products = recommendation.products.map(product => ({
        ...product,
        purchaseLink: doterraService.generatePurchaseLink(product.id || product.name.toLowerCase().replace(/\s+/g, '-'))
      }));
    }
    return recommendation;
  }

  getFallbackRecommendations(concerns) {
    const commonRecommendations = {
      stress: {
        oils: ['Lavender', 'Bergamot', 'Frankincense'],
        protocol: 'Diffuse 3-4 drops in evening, apply diluted to pulse points'
      },
      sleep: {
        oils: ['Lavender', 'Cedarwood', 'Vetiver'],
        protocol: 'Diffuse 30 minutes before bed, apply to feet'
      },
      energy: {
        oils: ['Peppermint', 'Wild Orange', 'Lemon'],
        protocol: 'Diffuse in morning, inhale directly from bottle'
      }
    };
    
    return concerns.map(concern => 
      commonRecommendations[concern.toLowerCase()] || {
        oils: ['Lavender'],
        protocol: 'Consult with wellness advocate'
      }
    );
  }
}

export const wellnessService = new WellnessService();