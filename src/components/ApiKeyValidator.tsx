import { apiKeyStorage } from './ApiKeyStorage';

export interface ValidationResult {
  isValid: boolean;
  message: string;
  details?: any;
}

class ApiKeyValidator {
  private static instance: ApiKeyValidator;

  static getInstance(): ApiKeyValidator {
    if (!ApiKeyValidator.instance) {
      ApiKeyValidator.instance = new ApiKeyValidator();
    }
    return ApiKeyValidator.instance;
  }

  async validateFamousAI(apiKey: string): Promise<ValidationResult> {
    if (!apiKey || apiKey.length < 10) {
      return { isValid: false, message: 'API key must be at least 10 characters' };
    }

    try {
      const response = await fetch('https://api.famous.ai/v1/models', {
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json'
        }
      });

      if (response.ok) {
        const data = await response.json();
        apiKeyStorage.updateKeyValidation('FamousAI', true);
        return { 
          isValid: true, 
          message: 'FamousAI API key is valid', 
          details: data 
        };
      } else {
        apiKeyStorage.updateKeyValidation('FamousAI', false);
        return { 
          isValid: false, 
          message: `Invalid API key: ${response.status} ${response.statusText}` 
        };
      }
    } catch (error) {
      apiKeyStorage.updateKeyValidation('FamousAI', false);
      return { 
        isValid: false, 
        message: 'Network error or invalid endpoint' 
      };
    }
  }

  async validateDoterra(apiKey: string): Promise<ValidationResult> {
    if (!apiKey || apiKey.length < 8) {
      return { isValid: false, message: 'dōTERRA API key must be at least 8 characters' };
    }

    // Mock validation for dōTERRA (replace with real endpoint when available)
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Basic format validation
      const isValidFormat = /^[A-Za-z0-9_-]+$/.test(apiKey);
      
      if (isValidFormat) {
        apiKeyStorage.updateKeyValidation('dōTERRA API', true);
        return { 
          isValid: true, 
          message: 'dōTERRA API key format is valid' 
        };
      } else {
        apiKeyStorage.updateKeyValidation('dōTERRA API', false);
        return { 
          isValid: false, 
          message: 'Invalid API key format' 
        };
      }
    } catch (error) {
      apiKeyStorage.updateKeyValidation('dōTERRA API', false);
      return { 
        isValid: false, 
        message: 'Validation failed' 
      };
    }
  }

  async validateStripe(apiKey: string): Promise<ValidationResult> {
    if (!apiKey || !apiKey.startsWith('pk_')) {
      return { isValid: false, message: 'Stripe public key must start with "pk_"' };
    }

    // Basic format validation for Stripe
    const isValidFormat = apiKey.length > 20;
    
    if (isValidFormat) {
      apiKeyStorage.updateKeyValidation('Stripe', true);
      return { 
        isValid: true, 
        message: 'Stripe public key format is valid' 
      };
    } else {
      apiKeyStorage.updateKeyValidation('Stripe', false);
      return { 
        isValid: false, 
        message: 'Invalid Stripe public key format' 
      };
    }
  }

  async validatePayPal(clientId: string): Promise<ValidationResult> {
    if (!clientId || clientId.length < 20) {
      return { isValid: false, message: 'PayPal Client ID must be at least 20 characters' };
    }

    // Basic format validation for PayPal
    const isValidFormat = /^[A-Za-z0-9_-]+$/.test(clientId);
    
    if (isValidFormat) {
      apiKeyStorage.updateKeyValidation('PayPal', true);
      return { 
        isValid: true, 
        message: 'PayPal Client ID format is valid' 
      };
    } else {
      apiKeyStorage.updateKeyValidation('PayPal', false);
      return { 
        isValid: false, 
        message: 'Invalid PayPal Client ID format' 
      };
    }
  }

  async validateKey(serviceName: string, apiKey: string): Promise<ValidationResult> {
    switch (serviceName) {
      case 'FamousAI':
        return this.validateFamousAI(apiKey);
      case 'dōTERRA API':
        return this.validateDoterra(apiKey);
      case 'Stripe':
        return this.validateStripe(apiKey);
      case 'PayPal':
        return this.validatePayPal(apiKey);
      default:
        return { isValid: false, message: 'Unknown service' };
    }
  }
}

export const apiKeyValidator = ApiKeyValidator.getInstance();