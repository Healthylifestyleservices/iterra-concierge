import React from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { MockAuthProvider } from '../setup';

// Custom render function that includes providers
const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <BrowserRouter>
      <MockAuthProvider>
        {children}
      </MockAuthProvider>
    </BrowserRouter>
  );
};

const customRender = (
  ui: React.ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, { wrapper: AllTheProviders, ...options });

// Re-export everything
export * from '@testing-library/react';
export { customRender as render };

// Test data helpers
export const createMockUser = (overrides = {}) => ({
  id: 'test-user-123',
  email: 'test@example.com',
  user_metadata: { first_name: 'Test', last_name: 'User' },
  ...overrides
});

export const createMockWellnessData = (overrides = {}) => ({
  goals: ['stress', 'sleep'],
  experience: 'beginner',
  preferences: ['topical', 'diffusion'],
  ...overrides
});

export const createMockApiResponse = (overrides = {}) => ({
  response: 'Mock wellness response',
  products: ['Lavender', 'Peppermint'],
  confidence: 0.9,
  source: 'test',
  ...overrides
});

// Common test assertions
export const expectElementToBeVisible = (element: HTMLElement) => {
  expect(element).toBeInTheDocument();
  expect(element).toBeVisible();
};

export const expectElementToHaveText = (element: HTMLElement, text: string) => {
  expect(element).toBeInTheDocument();
  expect(element).toHaveTextContent(text);
};