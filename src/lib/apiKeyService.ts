import { config } from './config';
import { apiKeyStorage } from '@/components/ApiKeyStorage';

export class ApiKeyService {
  private static instance: ApiKeyService;

  static getInstance(): ApiKeyService {
    if (!ApiKeyService.instance) {
      ApiKeyService.instance = new ApiKeyService();
    }
    return ApiKeyService.instance;
  }

  getFamousAIKey(): string | null {
    return config.famousAI.apiKey || null;
  }

  getDoterraKey(): string | null {
    return config.doterra.apiKey || apiKeyStorage.getKey('dōTERRA API') || null;
  }

  getDoterraAssociateId(): string | null {
    return config.doterra.associateId || null;
  }

  getStripeKey(): string | null {
    return apiKeyStorage.getKey('Stripe');
  }

  getPayPalKey(): string | null {
    return apiKeyStorage.getKey('PayPal');
  }

  isServiceConfigured(serviceName: string): boolean {
    switch (serviceName) {
      case 'FamousAI':
        return !!this.getFamousAIKey();
      case 'dōTERRA API':
        return !!this.getDoterraKey();
      default:
        const key = apiKeyStorage.getKey(serviceName);
        const stored = apiKeyStorage.getAllKeys().find(k => k.name === serviceName);
        return !!(key && stored?.isValid);
    }
  }

  areRequiredServicesConfigured(): boolean {
    return this.isServiceConfigured('FamousAI') && this.isServiceConfigured('dōTERRA API');
  }

  getConfigurationStatus() {
    const allKeys = apiKeyStorage.getAllKeys();
    const coreServices = ['FamousAI', 'dōTERRA API'];
    const configuredCore = coreServices.filter(name => this.isServiceConfigured(name)).length;
    const configuredOptional = allKeys.filter(k => k.isValid).length;
    
    return {
      configured: configuredCore + configuredOptional,
      total: coreServices.length + allKeys.length,
      requiredConfigured: configuredCore,
      requiredTotal: coreServices.length,
      isReady: this.areRequiredServicesConfigured(),
      services: {
        famousAI: this.isServiceConfigured('FamousAI'),
        doterra: this.isServiceConfigured('dōTERRA API'),
        stripe: this.isServiceConfigured('Stripe'),
        paypal: this.isServiceConfigured('PayPal')
      }
    };
  }

  async makeAuthenticatedRequest(service: string, endpoint: string, options: RequestInit = {}) {
    let key: string | null;
    
    switch (service) {
      case 'FamousAI':
        key = this.getFamousAIKey();
        break;
      case 'dōTERRA API':
        key = this.getDoterraKey();
        break;
      default:
        key = apiKeyStorage.getKey(service);
    }
    
    if (!key) {
      throw new Error(`${service} API key not configured`);
    }

    const headers = new Headers(options.headers);
    
    switch (service) {
      case 'FamousAI':
        headers.set('Authorization', `Bearer ${key}`);
        break;
      case 'dōTERRA API':
        headers.set('X-API-Key', key);
        break;
      default:
        headers.set('Authorization', `Bearer ${key}`);
    }

    return fetch(endpoint, {
      ...options,
      headers
    });
  }
}

export const apiKeyService = ApiKeyService.getInstance();