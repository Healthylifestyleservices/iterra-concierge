import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from '../../App';
import { MockAuthProvider } from '../setup';

// Mock components that might cause issues in tests
vi.mock('../../components/iTerraWellnessHub', () => ({
  default: () => <div data-testid="wellness-hub">Wellness Hub</div>
}));

vi.mock('../../components/AssociateApp', () => ({
  default: () => <div data-testid="associate-app">Associate App</div>
}));

vi.mock('../../components/ErrorBoundary', () => ({
  default: ({ children }: { children: React.ReactNode }) => <div>{children}</div>
}));

describe('App Integration', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders main application', async () => {
    render(
      <BrowserRouter>
        <MockAuthProvider>
          <App />
        </MockAuthProvider>
      </BrowserRouter>
    );

    await waitFor(() => {
      expect(screen.getByTestId('wellness-hub')).toBeInTheDocument();
    });
  });

  it('handles routing correctly', async () => {
    // Mock window.location
    Object.defineProperty(window, 'location', {
      value: {
        pathname: '/'
      },
      writable: true
    });

    render(
      <BrowserRouter>
        <MockAuthProvider>
          <App />
        </MockAuthProvider>
      </BrowserRouter>
    );

    await waitFor(() => {
      expect(screen.getByTestId('wellness-hub')).toBeInTheDocument();
    });
  });

  it('loads without crashing', () => {
    expect(() => {
      render(
        <BrowserRouter>
          <MockAuthProvider>
            <App />
          </MockAuthProvider>
        </BrowserRouter>
      );
    }).not.toThrow();
  });
});