import { describe, it, expect, beforeEach, vi } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';

// Mock environment variables
vi.mock('../lib/supabase', () => ({
  supabase: null,
  DatabaseService: class MockDatabaseService {
    async createUserProfile() {
      return { data: { id: 'mock-user' }, error: null };
    }
    async getUserProfile() {
      return { data: { id: 'mock-user', name: 'Test User' }, error: null };
    }
  }
}));

vi.mock('../lib/api-integrations', () => ({
  iTERRAAPI: {
    queryFamousAI: vi.fn().mockResolvedValue({
      response: 'Mock wellness response',
      products: ['Lavender', 'Peppermint'],
      confidence: 0.9
    }),
    redirectToDoterraProduct: vi.fn()
  }
}));

// Global test utilities
export const mockUser = {
  id: 'test-user-123',
  email: 'test@example.com',
  user_metadata: { first_name: 'Test', last_name: 'User' }
};

export const MockAuthProvider = ({ children }: { children: React.ReactNode }) => {
  const mockAuthValue = {
    user: mockUser,
    loading: false,
    signIn: vi.fn(),
    signUp: vi.fn(),
    signOut: vi.fn(),
    isAuthenticated: true,
    isAssociate: false
  };

  return React.createElement(
    'div',
    { 'data-testid': 'mock-auth-provider' },
    children
  );
};

export { describe, it, expect, beforeEach, vi, render, screen, fireEvent, waitFor };