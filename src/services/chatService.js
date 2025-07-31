import { apiService } from './api.js';
import { wellnessService } from './wellnessService.js';
import { doterraService } from './doterraService.js';
import { config } from '../config/environment.js';

class ChatService {
  constructor() {
    this.conversationHistory = [];
    this.userContext = {};
    this.associateId = config.doterra.associateId;
  }

  async processMessage(message, userProfile = {}) {
    try {
      // Add message to conversation history
      this.conversationHistory.push({
        role: 'user',
        content: message,
        timestamp: new Date().toISOString()
      });

      // Determine intent and route to appropriate service
      const intent = await this.analyzeIntent(message);
      let response;

      switch (intent.type) {
        case 'product_inquiry':
          response = await this.handleProductInquiry(message, intent);
          break;
        case 'wellness_consultation':
          response = await this.handleWellnessConsultation(message, userProfile);
          break;
        case 'emotional_support':
          response = await this.handleEmotionalSupport(message, intent);
          break;
        case 'safety_question':
          response = await this.handleSafetyQuestion(message, intent);
          break;
        default:
          response = await this.handleGeneralInquiry(message);
      }

      // Add response to conversation history
      this.conversationHistory.push({
        role: 'assistant',
        content: response,
        timestamp: new Date().toISOString()
      });

      return response;
    } catch (error) {
      console.error('Chat Service Error:', error);
      return this.getErrorResponse();
    }
  }

  async analyzeIntent(message) {
    const prompt = `Analyze this user message and determine the intent: "${message}"
    
    Return JSON with:
    {
      "type": "product_inquiry|wellness_consultation|emotional_support|safety_question|general",
      "confidence": 0.0-1.0,
      "keywords": ["extracted", "keywords"],
      "urgency": "low|medium|high"
    }`;

    try {
      const response = await apiService.callFamousAI(prompt, {
        type: 'intent_analysis',
        conversationHistory: this.conversationHistory.slice(-5)
      });
      
      return JSON.parse(response.message || response.content || '{}');
    } catch (error) {
      return { type: 'general', confidence: 0.5, keywords: [], urgency: 'low' };
    }
  }

  async handleProductInquiry(message, intent) {
    const products = await doterraService.searchProducts(intent.keywords.join(' '));
    
    const prompt = `User asked: "${message}"
    
    Available products: ${JSON.stringify(products)}
    
    Provide helpful product recommendations with:
    - Product benefits
    - Usage instructions
    - Purchase links
    - Safety considerations`;

    return apiService.callFamousAI(prompt, {
      type: 'product_recommendation',
      products,
      associateId: this.associateId
    });
  }

  async handleWellnessConsultation(message, userProfile) {
    return wellnessService.getPersonalizedRecommendations({
      concerns: [message],
      preferences: userProfile.preferences || {},
      experience_level: userProfile.experience_level || 'beginner',
      lifestyle: userProfile.lifestyle || 'standard'
    });
  }

  async handleEmotionalSupport(message, intent) {
    const emotionalState = intent.keywords.find(word => 
      ['stress', 'anxiety', 'sad', 'angry', 'overwhelmed', 'tired'].includes(word.toLowerCase())
    ) || 'general_support';

    return wellnessService.getEmotionalWellnessSupport(emotionalState);
  }

  async handleSafetyQuestion(message, intent) {
    const oils = intent.keywords.filter(word => 
      word.toLowerCase().includes('oil') || 
      ['lavender', 'peppermint', 'frankincense', 'lemon', 'tea tree'].includes(word.toLowerCase())
    );

    return wellnessService.analyzeSafetyConsiderations(oils);
  }

  async handleGeneralInquiry(message) {
    const prompt = `As an iTERRA wellness expert, respond to: "${message}"
    
    Provide helpful, accurate information about:
    - dōTERRA products and wellness
    - Essential oil education
    - Wellness lifestyle tips
    
    Always include safety considerations and suggest consulting healthcare providers when appropriate.`;

    return apiService.callFamousAI(prompt, {
      type: 'general_consultation',
      associateId: this.associateId
    });
  }

  getErrorResponse() {
    return {
      message: "I apologize, but I'm experiencing technical difficulties. Please try again in a moment, or contact your dōTERRA wellness advocate directly for immediate assistance.",
      type: 'error',
      suggestions: [
        'Try rephrasing your question',
        'Contact your wellness advocate',
        'Visit doterra.com for product information'
      ]
    };
  }

  clearConversation() {
    this.conversationHistory = [];
    this.userContext = {};
  }

  getConversationHistory() {
    return this.conversationHistory;
  }
}

export const chatService = new ChatService();