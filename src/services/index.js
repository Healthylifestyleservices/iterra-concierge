// Central export point for all services
export { apiService } from './api.js';
export { doterraService } from './doterraService.js';
export { wellnessService } from './wellnessService.js';
export { chatService } from './chatService.js';
export { authService } from './authService.js';

// Service initialization and health checks
export class ServiceManager {
  constructor() {
    this.services = {
      api: null,
      doterra: null,
      wellness: null,
      chat: null,
      auth: null
    };
    this.initialized = false;
  }

  async initialize() {
    try {
      const { apiService } = await import('./api.js');
      const { doterraService } = await import('./doterraService.js');
      const { wellnessService } = await import('./wellnessService.js');
      const { chatService } = await import('./chatService.js');
      const { authService } = await import('./authService.js');

      this.services = {
        api: apiService,
        doterra: doterraService,
        wellness: wellnessService,
        chat: chatService,
        auth: authService
      };

      this.initialized = true;
      console.log('iTERRA Services initialized successfully');
      return true;
    } catch (error) {
      console.error('Service initialization failed:', error);
      return false;
    }
  }

  async healthCheck() {
    const results = {
      api: false,
      doterra: false,
      wellness: false,
      chat: false,
      auth: false,
      overall: false
    };

    try {
      await this.services.api.callFamousAI('Health check', { type: 'health_check' });
      results.api = true;
    } catch (error) {
      console.warn('API service health check failed:', error.message);
    }

    try {
      await this.services.doterra.getFallbackProducts();
      results.doterra = true;
    } catch (error) {
      console.warn('doTERRA service health check failed:', error.message);
    }

    try {
      await this.services.wellness.getFallbackRecommendations(['test']);
      results.wellness = true;
    } catch (error) {
      console.warn('Wellness service health check failed:', error.message);
    }

    try {
      this.services.chat.clearConversation();
      results.chat = true;
    } catch (error) {
      console.warn('Chat service health check failed:', error.message);
    }

    try {
      await this.services.auth.getCurrentUser();
      results.auth = true;
    } catch (error) {
      console.warn('Auth service health check failed:', error.message);
    }

    results.overall = Object.values(results).filter(Boolean).length >= 4;
    return results;
  }

  getService(name) {
    if (!this.initialized) {
      throw new Error('Services not initialized. Call initialize() first.');
    }
    return this.services[name];
  }

  isInitialized() {
    return this.initialized;
  }
}

export const serviceManager = new ServiceManager();

serviceManager.initialize().catch(error => {
  console.error('Failed to auto-initialize services:', error);
});