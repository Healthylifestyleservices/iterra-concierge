import { config } from '../config';

export interface DoTerraProduct {
  id: string;
  name: string;
  category: string;
  price: number;
  description: string;
  benefits: string[];
  usage: string[];
  safetyInfo: string[];
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
}

class DoTerraApiClient {
  private baseUrl = 'https://api.doterra.com/v1';
  private apiKey: string;
  private associateId: string;

  constructor() {
    this.apiKey = config.doterra.apiKey;
    this.associateId = config.doterra.associateId;
  }

  private async makeRequest<T>(endpoint: string, options: RequestInit = {}): Promise<ApiResponse<T>> {
    try {
      const response = await fetch(`${this.baseUrl}${endpoint}`, {
        ...options,
        headers: {
          'Authorization': `Bearer ${this.apiKey}`,
          'Content-Type': 'application/json',
          'X-Associate-ID': this.associateId,
          ...options.headers
        }
      });

      if (!response.ok) {
        throw new Error(`API request failed: ${response.status}`);
      }

      const data = await response.json();
      return { success: true, data };
    } catch (error) {
      console.error('DoTerra API Error:', error);
      return { 
        success: false, 
        error: error instanceof Error ? error.message : 'Unknown error' 
      };
    }
  }

  async getProducts(category?: string): Promise<ApiResponse<DoTerraProduct[]>> {
    const endpoint = category ? `/products?category=${category}` : '/products';
    return this.makeRequest<DoTerraProduct[]>(endpoint);
  }

  async getProduct(id: string): Promise<ApiResponse<DoTerraProduct>> {
    return this.makeRequest<DoTerraProduct>(`/products/${id}`);
  }

  async searchProducts(query: string): Promise<ApiResponse<DoTerraProduct[]>> {
    return this.makeRequest<DoTerraProduct[]>(`/products/search?q=${encodeURIComponent(query)}`);
  }

  async getProductsByEmotion(emotion: string): Promise<ApiResponse<DoTerraProduct[]>> {
    return this.makeRequest<DoTerraProduct[]>(`/products/emotion/${emotion}`);
  }

  // Fallback data when API is unavailable
  getFallbackProducts(): DoTerraProduct[] {
    return [
      {
        id: 'lavender',
        name: 'Lavender Essential Oil',
        category: 'Single Oils',
        price: 28.00,
        description: 'Pure lavender oil for relaxation and sleep support',
        benefits: ['Promotes relaxation', 'Supports restful sleep', 'Soothes skin'],
        usage: ['Diffuse for calming atmosphere', 'Apply topically with carrier oil'],
        safetyInfo: ['Dilute before topical use', 'Avoid contact with eyes']
      },
      {
        id: 'peppermint',
        name: 'Peppermint Essential Oil',
        category: 'Single Oils',
        price: 27.33,
        description: 'Invigorating peppermint for energy and focus',
        benefits: ['Promotes energy', 'Supports mental clarity', 'Cooling sensation'],
        usage: ['Diffuse for alertness', 'Apply to temples for focus'],
        safetyInfo: ['Dilute before topical use', 'Keep away from sensitive areas']
      }
    ];
  }
}

export const doTerraApi = new DoTerraApiClient();
export default doTerraApi;