import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';

interface EnvCheck {
  name: string;
  key: string;
  value: string | undefined;
  required: boolean;
  category: string;
}

const EnvironmentChecker = () => {
  const [envChecks, setEnvChecks] = useState<EnvCheck[]>([]);
  const [showValues, setShowValues] = useState(false);

  useEffect(() => {
    const checks: EnvCheck[] = [
      // doTERRA
      { name: 'Associate ID', key: 'VITE_DOTERRA_ASSOCIATE_ID', value: import.meta.env.VITE_DOTERRA_ASSOCIATE_ID, required: true, category: 'doTERRA' },
      { name: 'API Key', key: 'VITE_DOTERRA_API_KEY', value: import.meta.env.VITE_DOTERRA_API_KEY, required: false, category: 'doTERRA' },
      
      // Supabase
      { name: 'URL', key: 'VITE_SUPABASE_URL', value: import.meta.env.VITE_SUPABASE_URL, required: true, category: 'Supabase' },
      { name: 'Anon Key', key: 'VITE_SUPABASE_ANON_KEY', value: import.meta.env.VITE_SUPABASE_ANON_KEY, required: true, category: 'Supabase' },
      
      // FamousAI
      { name: 'API Key', key: 'VITE_FAMOUS_AI_KEY', value: import.meta.env.VITE_FAMOUS_AI_KEY, required: true, category: 'FamousAI' },
      { name: 'URL', key: 'VITE_FAMOUS_AI_URL', value: import.meta.env.VITE_FAMOUS_AI_URL, required: false, category: 'FamousAI' },
      
      // App
      { name: 'Name', key: 'VITE_APP_NAME', value: import.meta.env.VITE_APP_NAME, required: false, category: 'App' },
      { name: 'Environment', key: 'VITE_ENVIRONMENT', value: import.meta.env.VITE_ENVIRONMENT, required: false, category: 'App' },
      
      // Payment
      { name: 'Stripe Key', key: 'VITE_STRIPE_PUBLIC_KEY', value: import.meta.env.VITE_STRIPE_PUBLIC_KEY, required: false, category: 'Payment' },
      { name: 'PayPal ID', key: 'VITE_PAYPAL_CLIENT_ID', value: import.meta.env.VITE_PAYPAL_CLIENT_ID, required: false, category: 'Payment' }
    ];
    
    setEnvChecks(checks);
  }, []);

  const getStatus = (check: EnvCheck) => {
    if (check.value) return 'configured';
    if (check.required) return 'missing';
    return 'optional';
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'configured': return 'bg-green-100 text-green-800';
      case 'missing': return 'bg-red-100 text-red-800';
      case 'optional': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const maskValue = (value: string | undefined) => {
    if (!value) return 'Not set';
    if (!showValues && value.length > 8) {
      return value.substring(0, 4) + '***' + value.substring(value.length - 4);
    }
    return value;
  };

  const categories = [...new Set(envChecks.map(check => check.category))];
  const missingRequired = envChecks.filter(check => check.required && !check.value).length;

  return (
    <div className="space-y-6">
      {missingRequired > 0 && (
        <Alert>
          <AlertDescription>
            {missingRequired} required environment variable(s) missing. Create a .env file from .env.example and configure the missing values.
          </AlertDescription>
        </Alert>
      )}
      
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">Environment Configuration</h3>
        <Button 
          variant="outline" 
          size="sm" 
          onClick={() => setShowValues(!showValues)}
        >
          {showValues ? 'Hide' : 'Show'} Values
        </Button>
      </div>

      {categories.map(category => {
        const categoryChecks = envChecks.filter(check => check.category === category);
        const categoryMissing = categoryChecks.filter(check => check.required && !check.value).length;
        
        return (
          <Card key={category}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                {category}
                {categoryMissing > 0 && (
                  <Badge variant="destructive">{categoryMissing} missing</Badge>
                )}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {categoryChecks.map(check => {
                  const status = getStatus(check);
                  return (
                    <div key={check.key} className="flex items-center justify-between p-2 border rounded">
                      <div>
                        <div className="font-medium">{check.name}</div>
                        <div className="text-sm text-gray-500">{check.key}</div>
                        <div className="text-sm">{maskValue(check.value)}</div>
                      </div>
                      <Badge className={getStatusColor(status)}>
                        {status}
                      </Badge>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};

export default EnvironmentChecker;