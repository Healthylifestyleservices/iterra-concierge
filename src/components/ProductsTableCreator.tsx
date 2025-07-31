import React, { useState } from 'react';
import { supabase } from '@/lib/supabase';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { CheckCircle, XCircle, Database } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const ProductsTableCreator = () => {
  const [isCreating, setIsCreating] = useState(false);
  const [tableExists, setTableExists] = useState<boolean | null>(null);
  const [error, setError] = useState<string | null>(null);

  const checkTableExists = async () => {
    try {
      const { data, error } = await supabase
        .from('products')
        .select('id')
        .limit(1);
      
      if (error) {
        if (error.message.includes('does not exist')) {
          setTableExists(false);
        } else {
          setError(error.message);
        }
      } else {
        setTableExists(true);
      }
    } catch (err) {
      setError('Failed to check table existence');
    }
  };

  const createTable = async () => {
    setIsCreating(true);
    setError(null);
    
    try {
      // Since we can't run DDL directly, we'll create a function to handle this
      const { data, error } = await supabase.functions.invoke('create-products-table', {
        body: { action: 'create_table' }
      });
      
      if (error) {
        throw error;
      }
      
      setTableExists(true);
      toast({ title: 'Success', description: 'Products table created successfully!' });
    } catch (err: any) {
      setError(err.message || 'Failed to create table');
      toast({ title: 'Error', description: 'Failed to create products table', variant: 'destructive' });
    } finally {
      setIsCreating(false);
    }
  };

  React.useEffect(() => {
    checkTableExists();
  }, []);

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Database className="w-5 h-5" />
          Products Table Setup
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <h3 className="font-semibold">Table Schema:</h3>
          <div className="bg-gray-50 p-3 rounded text-sm font-mono">
            <div>id: uuid (primary key)</div>
            <div>name: text</div>
            <div>description: text</div>
            <div>category: text</div>
            <div>subcategory: text</div>
            <div>chakra: text</div>
            <div>emotional_support: text</div>
            <div>pet_safe: boolean</div>
            <div>diy_uses: text[]</div>
            <div>product_link: text</div>
            <div>image_url: text</div>
            <div>tags: text[]</div>
            <div>created_at: timestamp</div>
          </div>
        </div>

        {tableExists === null && (
          <Alert>
            <AlertDescription>Checking table status...</AlertDescription>
          </Alert>
        )}

        {tableExists === true && (
          <Alert className="border-green-200 bg-green-50">
            <CheckCircle className="w-4 h-4 text-green-600" />
            <AlertDescription className="text-green-800">
              Products table already exists and is ready to use!
            </AlertDescription>
          </Alert>
        )}

        {tableExists === false && (
          <Alert className="border-yellow-200 bg-yellow-50">
            <AlertDescription className="text-yellow-800">
              Products table does not exist. Click the button below to create it.
            </AlertDescription>
          </Alert>
        )}

        {error && (
          <Alert className="border-red-200 bg-red-50">
            <XCircle className="w-4 h-4 text-red-600" />
            <AlertDescription className="text-red-800">
              Error: {error}
            </AlertDescription>
          </Alert>
        )}

        <div className="flex gap-2">
          <Button 
            onClick={checkTableExists}
            variant="outline"
            disabled={isCreating}
          >
            Check Table Status
          </Button>
          
          {tableExists === false && (
            <Button 
              onClick={createTable}
              disabled={isCreating}
              className="bg-blue-600 hover:bg-blue-700"
            >
              {isCreating ? 'Creating...' : 'Create Products Table'}
            </Button>
          )}
        </div>

        <div className="text-sm text-gray-600">
          <p><strong>Note:</strong> This will create the products table with all the specified fields including support for arrays (diy_uses, tags) and proper UUID primary keys.</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductsTableCreator;