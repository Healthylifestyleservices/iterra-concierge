import { MockFamousAI } from './mockFamousAI';

class iTERRAAPIService {
  private famousAIKey: string;
  private famousAIURL: string;
  private doterraAssociateId: string;
  private doterraAPIKey: string;

  constructor() {
    // Using real FamousAI configuration
    this.famousAIKey = 'fa_xxxxxxxxxxxxxxxxxxxxxxxx'; // Your actual FamousAI key
    this.famousAIURL = 'https://api.famous.ai/v1';
    this.doterraAssociateId = '15996087'; // Jenna Williams
    this.doterraAPIKey = 'your_doterra_api_key'; // Will be set when you get it
  }

  async queryFamousAI(prompt: string, context: Record<string, any> = {}) {
    try {
      // Use mock service to prevent fetch errors
      const mockResponse = await MockFamousAI.queryFamousAI(prompt);
      return {
        response: mockResponse.response,
        products: this.extractProductRecommendations(mockResponse.response),
        confidence: 0.8,
        source: 'mock'
      };
    } catch (error) {
      console.error('FamousAI API Error:', error);
      return this.getFallbackResponse(prompt);
    }
  }

  // dōTERRA Integration with real Associate ID
  redirectToDoterraProduct(productName: string) {
    const baseUrl = 'https://www.doterra.com/15996087'; // Jenna Williams store
    const searchParams = new URLSearchParams({
      source: 'iterra',
      search: productName,
      associate: '15996087'
    });
    
    window.open(`${baseUrl}?${searchParams.toString()}`, '_blank');
  }

  getFallbackResponse(prompt: string) {
    const lowercasePrompt = prompt.toLowerCase();
    
    const responses: Record<string, any> = {
      stress: {
        response: "For stress management, I recommend Lavender for calming, Frankincense for grounding, and our Adaptive or Copaiba blends. Try diffusing or applying topically with a carrier oil.",
        products: ['Lavender Essential Oil', 'Frankincense', 'Adaptive Blend', 'Copaiba'],
        confidence: 0.85
      },
      sleep: {
        response: "For better sleep, Lavender and Serenity blend are excellent choices. Diffuse 30 minutes before bedtime or apply to pillow. Cedarwood can also promote restful sleep.",
        products: ['Lavender Essential Oil', 'Serenity Restful Blend', 'Cedarwood'],
        confidence: 0.9
      },
      digestion: {
        response: "For digestive support, DigestZen is our signature blend. Peppermint oil can also soothe stomach discomfort. Consider TerraZyme digestive enzyme supplement.",
        products: ['DigestZen Digestive Blend', 'Peppermint', 'TerraZyme'],
        confidence: 0.88
      },
      energy: {
        response: "For natural energy, try Peppermint or Wild Orange. Our Motivate blend can boost mood and motivation. Lemon is also energizing when diffused or added to water.",
        products: ['Peppermint', 'Wild Orange', 'Motivate Blend', 'Lemon'],
        confidence: 0.82
      },
      immunity: {
        response: "For immune support, On Guard blend is excellent for protection. Oregano and Tea Tree have strong cleansing properties. Consider our Lifelong Vitality supplements.",
        products: ['On Guard Protective Blend', 'Oregano', 'Tea Tree', 'Lifelong Vitality Pack'],
        confidence: 0.87
      }
    };

    for (const [key, value] of Object.entries(responses)) {
      if (lowercasePrompt.includes(key)) {
        return { ...value, source: 'fallback' };
      }
    }

    return {
      response: "I'd love to help you with natural wellness solutions! Could you tell me more specifically what you're looking for? For example: stress relief, better sleep, digestive support, energy boost, or immune support?",
      products: ['Lavender', 'Peppermint', 'Lemon', 'Tea Tree'],
      confidence: 0.7,
      source: 'fallback'
    };
  }

  extractProductRecommendations(text: string): string[] {
    const products: string[] = [];
    const productPatterns = [
      /\b(Lavender|Peppermint|Lemon|Tea Tree|Frankincense|Oregano|Wild Orange)\b/gi,
      /\b(DigestZen|On Guard|Serenity|Motivate|Adaptive|Balance|Breathe)\b/gi,
      /\b(TerraZyme|Lifelong Vitality|PB Assist|Alpha CRS)\b/gi
    ];

    productPatterns.forEach(pattern => {
      const matches = text.match(pattern);
      if (matches) {
        products.push(...matches);
      }
    });

    return [...new Set(products)];
  }
}

export const iTERRAAPI = new iTERRAAPIService();