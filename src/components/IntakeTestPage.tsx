import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Loader2, CheckCircle, XCircle, Send } from 'lucide-react';
import { supabase } from '@/lib/supabase';

const IntakeTestPage: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [response, setResponse] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  const testIntakeData = {
    user_id: "test-123",
    intake_type: "Human",
    details: {
      goal: "Wellness",
      age: 34,
      gender: "Female"
    },
    status: "active"
  };

  const submitTestIntake = async () => {
    setIsSubmitting(true);
    setError(null);
    setResponse(null);

    try {
      // Try to call the hello_world function
      const { data, error: functionError } = await supabase.functions.invoke('hello_world', {
        body: testIntakeData
      });

      if (functionError) {
        throw functionError;
      }

      setResponse(data);
    } catch (err: any) {
      const errorMessage = err.message || 'Failed to submit intake';
      setError(errorMessage);
      console.error('Submission error:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const testDirectAPI = async () => {
    setIsSubmitting(true);
    setError(null);
    setResponse(null);

    try {
      const response = await fetch('https://mqfewevqghimmxqrnyiv.functions.supabase.co/hello_world', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${supabase.supabaseKey}`
        },
        body: JSON.stringify(testIntakeData)
      });

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }

      const data = await response.json();
      setResponse(data);
    } catch (err: any) {
      setError(err.message || 'Failed to call API directly');
      console.error('Direct API error:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
          Intake System Test
        </h1>
        <p className="text-gray-600">Test the intake submission functionality</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Send className="h-5 w-5" />
            Test Intake Data
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Sample Intake Data:</h3>
            <pre className="text-sm text-gray-600 overflow-x-auto">
              {JSON.stringify(testIntakeData, null, 2)}
            </pre>
          </div>

          <div className="flex gap-4">
            <Button 
              onClick={submitTestIntake}
              disabled={isSubmitting}
              className="flex-1"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Testing Supabase Function...
                </>
              ) : (
                'Test via Supabase Client'
              )}
            </Button>

            <Button 
              onClick={testDirectAPI}
              disabled={isSubmitting}
              variant="outline"
              className="flex-1"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Testing Direct API...
                </>
              ) : (
                'Test Direct API Call'
              )}
            </Button>
          </div>

          {error && (
            <Alert variant="destructive">
              <XCircle className="h-4 w-4" />
              <AlertDescription>
                <strong>Error:</strong> {error}
              </AlertDescription>
            </Alert>
          )}

          {response && (
            <Alert>
              <CheckCircle className="h-4 w-4" />
              <AlertDescription>
                <div>
                  <strong>Success!</strong> Response received:
                  <pre className="mt-2 text-sm bg-green-50 p-3 rounded overflow-x-auto">
                    {JSON.stringify(response, null, 2)}
                  </pre>
                </div>
              </AlertDescription>
            </Alert>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default IntakeTestPage;