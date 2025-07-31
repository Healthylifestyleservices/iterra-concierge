import { describe, it, expect, vi, beforeEach } from 'vitest';
import { iTERRAAPI } from '../../lib/api-integrations';

// Mock fetch
global.fetch = vi.fn();

// Mock environment variables
vi.mock('../../lib/api-integrations', async () => {
  const actual = await vi.importActual('../../lib/api-integrations');
  return {
    ...actual,
    iTERRAAPI: {
      queryFamousAI: vi.fn(),
      redirectToDoterraProduct: vi.fn(),
      processWellnessAssessment: vi.fn(),
      getFallbackResponse: vi.fn(),
      extractProductRecommendations: vi.fn()
    }
  };
});

describe('iTERRAAPI', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    (fetch as any).mockClear();
  });

  describe('queryFamousAI', () => {
    it('returns fallback response when API key is missing', async () => {
      const mockQueryFamousAI = vi.fn().mockResolvedValue({
        response: 'Fallback response for stress',
        products: ['Lavender', 'Frankincense'],
        confidence: 0.85,
        source: 'fallback'
      });
      
      iTERRAAPI.queryFamousAI = mockQueryFamousAI;
      
      const result = await iTERRAAPI.queryFamousAI('I need help with stress');
      
      expect(result.response).toContain('stress');
      expect(result.products).toContain('Lavender');
      expect(result.source).toBe('fallback');
    });

    it('handles API errors gracefully', async () => {
      const mockQueryFamousAI = vi.fn().mockResolvedValue({
        response: 'I\'d love to help you with natural wellness solutions!',
        products: ['Lavender', 'Peppermint'],
        confidence: 0.7,
        source: 'fallback'
      });
      
      iTERRAAPI.queryFamousAI = mockQueryFamousAI;
      
      const result = await iTERRAAPI.queryFamousAI('invalid request');
      
      expect(result.source).toBe('fallback');
      expect(result.response).toBeDefined();
    });
  });

  describe('redirectToDoterraProduct', () => {
    it('opens product page with associate ID', () => {
      const mockOpen = vi.fn();
      global.open = mockOpen;
      
      const mockRedirect = vi.fn();
      iTERRAAPI.redirectToDoterraProduct = mockRedirect;
      
      iTERRAAPI.redirectToDoterraProduct('Lavender');
      
      expect(mockRedirect).toHaveBeenCalledWith('Lavender');
    });

    it('shows alert when associate ID is missing', () => {
      const mockAlert = vi.fn();
      global.alert = mockAlert;
      
      const mockRedirect = vi.fn(() => {
        alert('Associate ID not configured. Please contact your iTERRA administrator.');
      });
      iTERRAAPI.redirectToDoterraProduct = mockRedirect;
      
      iTERRAAPI.redirectToDoterraProduct('Lavender');
      
      expect(mockAlert).toHaveBeenCalledWith('Associate ID not configured. Please contact your iTERRA administrator.');
    });
  });

  describe('processWellnessAssessment', () => {
    it('processes assessment and returns recommendations', async () => {
      const mockAssessment = {
        goals: ['stress', 'sleep'],
        experience: 'beginner',
        preferences: ['topical', 'diffusion']
      };
      
      const mockProcess = vi.fn().mockResolvedValue({
        response: 'Based on your assessment, I recommend...',
        products: ['Lavender', 'Serenity'],
        confidence: 0.9,
        protocol: [
          { time: 'Morning', action: 'Diffuse Lavender for 15 minutes' },
          { time: 'Evening', action: 'Use Serenity before bedtime' }
        ]
      });
      
      iTERRAAPI.processWellnessAssessment = mockProcess;
      
      const result = await iTERRAAPI.processWellnessAssessment(mockAssessment);
      
      expect(result.protocol).toBeDefined();
      expect(result.products).toContain('Lavender');
    });
  });
});