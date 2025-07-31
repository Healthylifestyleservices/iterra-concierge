import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { ConsolidatedWellnessAssistant } from '../../components/ConsolidatedWellnessAssistant';
import { MockAuthProvider } from '../setup';

// Mock the API
const mockQueryFamousAI = vi.fn();
vi.mock('../../lib/api-integrations', () => ({
  iTERRAAPI: {
    queryFamousAI: mockQueryFamousAI,
    redirectToDoterraProduct: vi.fn()
  }
}));

describe('ConsolidatedWellnessAssistant', () => {
  beforeEach(() => {
    mockQueryFamousAI.mockClear();
    mockQueryFamousAI.mockResolvedValue({
      response: 'Test wellness response',
      products: ['Lavender', 'Peppermint'],
      confidence: 0.9
    });
  });

  it('renders wellness assistant interface', () => {
    render(
      <MockAuthProvider>
        <ConsolidatedWellnessAssistant />
      </MockAuthProvider>
    );

    expect(screen.getByText(/wellness assistant/i)).toBeInTheDocument();
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  it('handles user input and API response', async () => {
    render(
      <MockAuthProvider>
        <ConsolidatedWellnessAssistant />
      </MockAuthProvider>
    );

    const input = screen.getByRole('textbox');
    const submitButton = screen.getByRole('button', { name: /send/i });

    fireEvent.change(input, { target: { value: 'I need help with stress' } });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(mockQueryFamousAI).toHaveBeenCalledWith('I need help with stress', expect.any(Object));
    });

    await waitFor(() => {
      expect(screen.getByText('Test wellness response')).toBeInTheDocument();
    });
  });

  it('displays loading state during API call', async () => {
    mockQueryFamousAI.mockImplementation(() => new Promise(resolve => setTimeout(resolve, 100)));
    
    render(
      <MockAuthProvider>
        <ConsolidatedWellnessAssistant />
      </MockAuthProvider>
    );

    const input = screen.getByRole('textbox');
    const submitButton = screen.getByRole('button', { name: /send/i });

    fireEvent.change(input, { target: { value: 'test question' } });
    fireEvent.click(submitButton);

    expect(screen.getByText(/thinking/i)).toBeInTheDocument();
  });
});