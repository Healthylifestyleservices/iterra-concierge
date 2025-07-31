import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { ProductCatalog } from '../../components/ProductCatalog';
import { MockAuthProvider } from '../setup';

// Mock the redirect function
const mockRedirectToDoterraProduct = vi.fn();
vi.mock('../../lib/api-integrations', () => ({
  iTERRAAPI: {
    redirectToDoterraProduct: mockRedirectToDoterraProduct
  }
}));

describe('ProductCatalog', () => {
  beforeEach(() => {
    mockRedirectToDoterraProduct.mockClear();
  });

  it('renders product catalog', () => {
    render(
      <MockAuthProvider>
        <ProductCatalog />
      </MockAuthProvider>
    );

    expect(screen.getByText(/product catalog/i)).toBeInTheDocument();
  });

  it('displays product categories', () => {
    render(
      <MockAuthProvider>
        <ProductCatalog />
      </MockAuthProvider>
    );

    expect(screen.getByText(/essential oils/i)).toBeInTheDocument();
    expect(screen.getByText(/blends/i)).toBeInTheDocument();
    expect(screen.getByText(/supplements/i)).toBeInTheDocument();
  });

  it('filters products by category', () => {
    render(
      <MockAuthProvider>
        <ProductCatalog />
      </MockAuthProvider>
    );

    const oilsTab = screen.getByRole('tab', { name: /essential oils/i });
    fireEvent.click(oilsTab);

    expect(screen.getByText(/lavender/i)).toBeInTheDocument();
    expect(screen.getByText(/peppermint/i)).toBeInTheDocument();
  });

  it('handles product selection', () => {
    render(
      <MockAuthProvider>
        <ProductCatalog />
      </MockAuthProvider>
    );

    const productButton = screen.getByText(/lavender/i);
    fireEvent.click(productButton);

    expect(mockRedirectToDoterraProduct).toHaveBeenCalledWith('Lavender');
  });

  it('searches products', () => {
    render(
      <MockAuthProvider>
        <ProductCatalog />
      </MockAuthProvider>
    );

    const searchInput = screen.getByPlaceholderText(/search products/i);
    fireEvent.change(searchInput, { target: { value: 'lavender' } });

    expect(screen.getByText(/lavender/i)).toBeInTheDocument();
  });
});