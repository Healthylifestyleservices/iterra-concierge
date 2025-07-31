import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Database, Info } from 'lucide-react';
import ProductsManager from './ProductsManager';

const ProductsSetup = () => {
  return (
    <div className="space-y-6 p-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Database className="w-5 h-5" />
            Products Table Setup
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Alert className="border-blue-200 bg-blue-50">
            <Info className="w-4 h-4 text-blue-600" />
            <AlertDescription className="text-blue-800">
              <strong>Manual Database Setup Required</strong><br/>
              Please run this SQL command in your Supabase SQL Editor to create the products table:
            </AlertDescription>
          </Alert>
          
          <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm overflow-x-auto">
            <pre>{`CREATE TABLE products (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text,
  description text,
  category text,
  subcategory text,
  chakra text,
  emotional_support text,
  pet_safe boolean DEFAULT false,
  diy_uses text[],
  product_link text,
  image_url text,
  tags text[],
  created_at timestamp with time zone DEFAULT timezone('utc', now())
);`}</pre>
          </div>
          
          <Alert>
            <AlertDescription>
              <strong>Steps:</strong><br/>
              1. Go to your Supabase dashboard<br/>
              2. Navigate to SQL Editor<br/>
              3. Paste and run the SQL command above<br/>
              4. Once created, the Products Manager below will work automatically
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>
      
      <ProductsManager />
    </div>
  );
};

export default ProductsSetup;