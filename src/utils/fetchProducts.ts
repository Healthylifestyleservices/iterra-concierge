import { supabase } from '@/lib/supabase';
import { comprehensiveProductCatalog, ComprehensiveProduct } from '@/data/comprehensiveProductCatalog';

// Fallback to local data if Supabase fails
export const fetchProductsByCategory = async (category: string): Promise<ComprehensiveProduct[]> => {
  try {
    const { data, error } = await supabase
      .from('productCatalog')
      .select('*')
      .eq('category', category);

    if (error) {
      console.warn('Supabase error, falling back to local data:', error);
      return getLocalProductsByCategory(category);
    }

    return data || getLocalProductsByCategory(category);
  } catch (err) {
    console.warn('Database connection failed, using local data:', err);
    return getLocalProductsByCategory(category);
  }
};

// Local fallback function
const getLocalProductsByCategory = (category: string): ComprehensiveProduct[] => {
  return comprehensiveProductCatalog.filter(product => 
    product.category.toLowerCase().includes(category.toLowerCase()) ||
    category.toLowerCase().includes(product.category.toLowerCase().split(' ')[0])
  );
};

// Get all products
export const fetchAllProducts = async (): Promise<ComprehensiveProduct[]> => {
  try {
    const { data, error } = await supabase
      .from('productCatalog')
      .select('*');

    if (error) {
      console.warn('Supabase error, using local data:', error);
      return comprehensiveProductCatalog;
    }

    return data || comprehensiveProductCatalog;
  } catch (err) {
    console.warn('Database connection failed, using local data:', err);
    return comprehensiveProductCatalog;
  }
};