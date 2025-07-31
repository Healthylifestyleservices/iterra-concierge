import React, { useState } from 'react';
import { supabase } from '../utils/supabaseClient';
import { sampleProducts } from '../data/sampleProducts';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Alert, AlertDescription } from './ui/alert';

const SampleProductsLoader = () => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const loadSampleProducts = async () => {
    setLoading(true);
    setMessage('');
    setError('');

    try {
      const { data, error } = await supabase
        .from('products')
        .insert(sampleProducts);

      if (error) {
        setError(`Error loading products: ${error.message}`);
      } else {
        setMessage('Sample products loaded successfully!');
      }
    } catch (err) {
      setError('Failed to load sample products');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Load Sample Products</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm text-gray-600">
          Load the sample products (Lavender, Peppermint, Frankincense) into the database.
        </p>
        
        <Button 
          onClick={loadSampleProducts} 
          disabled={loading}
          className="w-full"
        >
          {loading ? 'Loading...' : 'Load Sample Products'}
        </Button>

        {message && (
          <Alert>
            <AlertDescription className="text-green-600">
              {message}
            </AlertDescription>
          </Alert>
        )}

        {error && (
          <Alert variant="destructive">
            <AlertDescription>
              {error}
            </AlertDescription>
          </Alert>
        )}
      </CardContent>
    </Card>
  );
};

export default SampleProductsLoader;