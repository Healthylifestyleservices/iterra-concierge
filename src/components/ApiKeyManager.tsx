import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { CheckCircle, XCircle, Key, Eye, EyeOff } from 'lucide-react';

interface ApiKey {
  name: string;
  key: string;
  status: 'connected' | 'disconnected' | 'testing';
  required: boolean;
  description: string;
}

export default function ApiKeyManager() {
  const [apiKeys, setApiKeys] = useState<ApiKey[]>([
    {
      name: 'FamousAI',
      key: '',
      status: 'disconnected',
      required: true,
      description: 'AI chatbot and wellness assistant functionality'
    },
    {
      name: 'dōTERRA API',
      key: '',
      status: 'disconnected',
      required: true,
      description: 'Product catalog and pricing integration'
    },
    {
      name: 'Stripe',
      key: '',
      status: 'disconnected',
      required: false,
      description: 'Payment processing for premium features'
    },
    {
      name: 'PayPal',
      key: '',
      status: 'disconnected',
      required: false,
      description: 'Alternative payment processing'
    }
  ]);

  const [showKeys, setShowKeys] = useState<{[key: string]: boolean}>({});
  const [testingKey, setTestingKey] = useState<string | null>(null);

  const updateApiKey = (name: string, newKey: string) => {
    setApiKeys(prev => prev.map(api => 
      api.name === name ? { ...api, key: newKey, status: newKey ? 'disconnected' : 'disconnected' } : api
    ));
  };

  const testApiKey = async (name: string) => {
    setTestingKey(name);
    setApiKeys(prev => prev.map(api => 
      api.name === name ? { ...api, status: 'testing' } : api
    ));

    // Simulate API test
    setTimeout(() => {
      const key = apiKeys.find(api => api.name === name)?.key;
      const isValid = key && key.length > 10; // Basic validation
      
      setApiKeys(prev => prev.map(api => 
        api.name === name ? { ...api, status: isValid ? 'connected' : 'disconnected' } : api
      ));
      setTestingKey(null);
    }, 2000);
  };

  const toggleKeyVisibility = (name: string) => {
    setShowKeys(prev => ({ ...prev, [name]: !prev[name] }));
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'connected': return <CheckCircle className="h-4 w-4 text-green-500" />;
      case 'testing': return <div className="h-4 w-4 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />;
      default: return <XCircle className="h-4 w-4 text-red-500" />;
    }
  };

  const getStatusBadge = (status: string, required: boolean) => {
    if (status === 'connected') return <Badge variant="default" className="bg-green-500">Connected</Badge>;
    if (status === 'testing') return <Badge variant="secondary">Testing...</Badge>;
    return <Badge variant={required ? "destructive" : "secondary"}>{required ? 'Required' : 'Optional'}</Badge>;
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-2">API Key Configuration</h2>
        <p className="text-muted-foreground">Configure your API keys to unlock all iTERRA features</p>
      </div>

      <Alert>
        <Key className="h-4 w-4" />
        <AlertDescription>
          API keys are stored locally and never transmitted to our servers. They're used directly by your browser to connect to services.
        </AlertDescription>
      </Alert>

      <div className="grid gap-4">
        {apiKeys.map((api) => (
          <Card key={api.name}>
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  {getStatusIcon(api.status)}
                  <CardTitle className="text-lg">{api.name}</CardTitle>
                  {getStatusBadge(api.status, api.required)}
                </div>
              </div>
              <CardDescription>{api.description}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="space-y-2">
                <Label htmlFor={`${api.name}-key`}>API Key</Label>
                <div className="flex gap-2">
                  <div className="relative flex-1">
                    <Input
                      id={`${api.name}-key`}
                      type={showKeys[api.name] ? 'text' : 'password'}
                      value={api.key}
                      onChange={(e) => updateApiKey(api.name, e.target.value)}
                      placeholder={`Enter your ${api.name} API key`}
                      className="pr-10"
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="absolute right-0 top-0 h-full px-3"
                      onClick={() => toggleKeyVisibility(api.name)}
                    >
                      {showKeys[api.name] ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </Button>
                  </div>
                  <Button
                    onClick={() => testApiKey(api.name)}
                    disabled={!api.key || testingKey === api.name}
                    variant="outline"
                  >
                    {testingKey === api.name ? 'Testing...' : 'Test'}
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center">
        <p className="text-sm text-muted-foreground">
          Need help getting API keys? Check our documentation for setup guides.
        </p>
      </div>
    </div>
  );
}