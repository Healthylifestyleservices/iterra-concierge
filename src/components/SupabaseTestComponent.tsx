import React, { useState, useEffect } from 'react';
import { supabase, databaseService, authService } from '@/lib/supabase';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';

const SupabaseTestComponent: React.FC = () => {
  const [connectionStatus, setConnectionStatus] = useState<{
    connected: boolean;
    message: string;
  } | null>(null);
  const [testResults, setTestResults] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  const addResult = (result: string) => {
    setTestResults(prev => [...prev, result]);
  };

  const testConnection = async () => {
    setLoading(true);
    addResult('Testing Supabase connection...');
    
    try {
      const result = await authService.testConnection();
      setConnectionStatus(result);
      addResult(`Connection test: ${result.message}`);
    } catch (error: any) {
      addResult(`Connection failed: ${error.message}`);
      setConnectionStatus({ connected: false, message: error.message });
    }
    
    setLoading(false);
  };

  const testAuth = async () => {
    setLoading(true);
    addResult('Testing authentication...');
    
    try {
      const user = await authService.getCurrentUser();
      addResult(`Current user: ${user ? user.email : 'No user logged in'}`);
    } catch (error: any) {
      addResult(`Auth test failed: ${error.message}`);
    }
    
    setLoading(false);
  };

  const testDatabase = async () => {
    setLoading(true);
    addResult('Testing database operations...');
    
    try {
      // Test a simple query
      const { data, error } = await supabase
        .from('associates')
        .select('*')
        .limit(1);
      
      if (error) {
        addResult(`Database test failed: ${error.message}`);
      } else {
        addResult(`Database test successful: Retrieved ${data?.length || 0} records`);
      }
    } catch (error: any) {
      addResult(`Database test error: ${error.message}`);
    }
    
    setLoading(false);
  };

  const clearResults = () => {
    setTestResults([]);
    setConnectionStatus(null);
  };

  useEffect(() => {
    testConnection();
  }, []);

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Supabase Connection Test</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {connectionStatus && (
          <Alert className={connectionStatus.connected ? 'border-green-500' : 'border-red-500'}>
            <AlertDescription>
              Status: {connectionStatus.connected ? '✅ Connected' : '❌ Disconnected'}
              <br />
              {connectionStatus.message}
            </AlertDescription>
          </Alert>
        )}
        
        <div className="flex gap-2 flex-wrap">
          <Button onClick={testConnection} disabled={loading}>
            Test Connection
          </Button>
          <Button onClick={testAuth} disabled={loading}>
            Test Auth
          </Button>
          <Button onClick={testDatabase} disabled={loading}>
            Test Database
          </Button>
          <Button onClick={clearResults} variant="outline">
            Clear Results
          </Button>
        </div>
        
        {testResults.length > 0 && (
          <div className="bg-gray-100 p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Test Results:</h3>
            <div className="space-y-1 text-sm font-mono">
              {testResults.map((result, index) => (
                <div key={index} className="text-gray-700">
                  {new Date().toLocaleTimeString()}: {result}
                </div>
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default SupabaseTestComponent;