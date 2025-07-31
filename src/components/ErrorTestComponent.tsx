import React from 'react';
import { logLuxuryError } from '@/lib/error-handling';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const ErrorTestComponent: React.FC = () => {
  const handleTestError = async () => {
    try {
      await logLuxuryError(new Error('Test error'), 'TestComponent');
      console.log('Error logged successfully!');
    } catch (error) {
      console.error('Failed to log error:', error);
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Luxury Error Logger Test</CardTitle>
      </CardHeader>
      <CardContent>
        <Button 
          onClick={handleTestError}
          className="w-full"
        >
          Test logLuxuryError Function
        </Button>
        <p className="text-sm text-gray-600 mt-2">
          Click to test: logLuxuryError(new Error('Test error'), 'TestComponent')
        </p>
      </CardContent>
    </Card>
  );
};

export default ErrorTestComponent;