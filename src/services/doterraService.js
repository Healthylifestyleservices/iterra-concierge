import { config } from '../config/environment.js';
import { apiService } from './api.js';

class DoTerraService {
  constructor() {
    this.associateId = config.doterra.associateId;
    this.apiKey = config.doterra.apiKey;
    this.baseURL = 'https://api.doterra.com/v1';
  }

  async getProductCatalog() {
    try {
      const response = await fetch(`${this.baseURL}/products`, {
        headers: {
          'Authorization': `Bearer ${this.apiKey}`,
          'Content-Type': 'application/json'
        }
      });
      
      if (!response.ok) {
        throw new Error(`doTERRA API error: ${response.status}`);
      }
      
      return await response.json();
    } catch (error) {
      console.error('doTERRA Product Catalog Error:', error);
      // Fallback to local product data if API fails
      return this.getFallbackProducts();
    }
  }

  async getProductDetails(productId) {
    try {
      const response = await fetch(`${this.baseURL}/products/${productId}`, {
        headers: {
          'Authorization': `Bearer ${this.apiKey}`,
          'Content-Type': 'application/json'
        }
      });
      
      return await response.json();
    } catch (error) {
      console.error('doTERRA Product Details Error:', error);
      throw error;
    }
  }

  async searchProducts(query) {
    try {
      const response = await fetch(`${this.baseURL}/products/search?q=${encodeURIComponent(query)}`, {
        headers: {
          'Authorization': `Bearer ${this.apiKey}`,
          'Content-Type': 'application/json'
        }
      });
      
      return await response.json();
    } catch (error) {
      console.error('doTERRA Product Search Error:', error);
      // Use AI service for intelligent product matching
      return this.aiProductSearch(query);
    }
  }

  async aiProductSearch(query) {
    const prompt = `Find dōTERRA products matching this search: ${query}. Return product names and brief descriptions.`;
    return apiService.callFamousAI(prompt, {
      type: 'product_search',
      associateId: this.associateId
    });
  }

  getFallbackProducts() {
    return {
      products: [
        {
          id: 'lavender-15ml',
          name: 'Lavender Essential Oil',
          size: '15ml',
          price: 28.00,
          category: 'single_oils'
        },
        {
          id: 'peppermint-15ml',
          name: 'Peppermint Essential Oil',
          size: '15ml',
          price: 27.33,
          category: 'single_oils'
        },
        {
          id: 'frankincense-15ml',
          name: 'Frankincense Essential Oil',
          size: '15ml',
          price: 93.33,
          category: 'single_oils'
        }
      ]
    };
  }

  generatePurchaseLink(productId) {
    return `https://www.doterra.com/US/en/p/${productId}?id=${this.associateId}`;
  }
}

export const doterraService = new DoTerraService();