import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { WorkingIntakeSystem } from '../../components/WorkingIntakeSystem';
import { MockAuthProvider } from '../setup';

describe('WorkingIntakeSystem', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders intake form', () => {
    render(
      <MockAuthProvider>
        <WorkingIntakeSystem />
      </MockAuthProvider>
    );

    expect(screen.getByText(/wellness intake/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
  });

  it('validates required fields', async () => {
    render(
      <MockAuthProvider>
        <WorkingIntakeSystem />
      </MockAuthProvider>
    );

    const submitButton = screen.getByRole('button', { name: /submit/i });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText(/name is required/i)).toBeInTheDocument();
    });
  });

  it('submits form with valid data', async () => {
    render(
      <MockAuthProvider>
        <WorkingIntakeSystem />
      </MockAuthProvider>
    );

    const nameInput = screen.getByLabelText(/name/i);
    const emailInput = screen.getByLabelText(/email/i);
    const submitButton = screen.getByRole('button', { name: /submit/i });

    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    fireEvent.change(emailInput, { target: { value: 'john@example.com' } });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText(/thank you/i)).toBeInTheDocument();
    });
  });

  it('handles wellness goals selection', () => {
    render(
      <MockAuthProvider>
        <WorkingIntakeSystem />
      </MockAuthProvider>
    );

    const stressCheckbox = screen.getByLabelText(/stress/i);
    fireEvent.click(stressCheckbox);

    expect(stressCheckbox).toBeChecked();
  });
});