import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { CheckCircle, XCircle, Key, Eye, EyeOff, ExternalLink, Copy, Trash2 } from 'lucide-react';
import { useApiKeys } from './ApiKeyStorage';
import { apiKeyValidator, ValidationResult } from './ApiKeyValidator';
import { useToast } from '@/hooks/use-toast';

interface ApiService {
  name: string;
  description: string;
  required: boolean;
  placeholder: string;
  helpUrl?: string;
  format?: string;
}

const API_SERVICES: ApiService[] = [
  {
    name: 'FamousAI',
    description: 'AI chatbot and wellness assistant functionality',
    required: true,
    placeholder: 'fa_xxxxxxxxxxxxxxxxxxxxxxxx',
    helpUrl: 'https://famous.ai/dashboard/api-keys',
    format: 'Starts with "fa_" followed by 26+ characters'
  },
  {
    name: 'dōTERRA API',
    description: 'Product catalog and pricing integration',
    required: true,
    placeholder: 'your_doterra_api_key_here',
    helpUrl: 'https://doterra.com/developer',
    format: 'Alphanumeric string, 8+ characters'
  },
  {
    name: 'Stripe',
    description: 'Payment processing for premium features',
    required: false,
    placeholder: 'pk_test_xxxxxxxxxxxxxxxxxxxxxxxx',
    helpUrl: 'https://dashboard.stripe.com/apikeys',
    format: 'Starts with "pk_" for public keys'
  },
  {
    name: 'PayPal',
    description: 'Alternative payment processing',
    required: false,
    placeholder: 'your_paypal_client_id',
    helpUrl: 'https://developer.paypal.com/developer/applications',
    format: 'Client ID from PayPal Developer Dashboard'
  }
];

export default function EnhancedApiKeyManager() {
  const { keys, saveKey, removeKey, clearAll } = useApiKeys();
  const { toast } = useToast();
  const [showKeys, setShowKeys] = useState<{[key: string]: boolean}>({});
  const [testingKeys, setTestingKeys] = useState<{[key: string]: boolean}>({});
  const [validationResults, setValidationResults] = useState<{[key: string]: ValidationResult}>({});
  const [tempKeys, setTempKeys] = useState<{[key: string]: string}>({});

  const getStoredKey = (serviceName: string) => {
    const stored = keys.find(k => k.name === serviceName);
    return stored?.key || '';
  };

  const updateTempKey = (serviceName: string, value: string) => {
    setTempKeys(prev => ({ ...prev, [serviceName]: value }));
  };

  const getCurrentKey = (serviceName: string) => {
    return tempKeys[serviceName] ?? getStoredKey(serviceName);
  };

  const testApiKey = async (serviceName: string) => {
    const key = getCurrentKey(serviceName);
    if (!key) {
      toast({ title: 'Error', description: 'Please enter an API key first', variant: 'destructive' });
      return;
    }

    setTestingKeys(prev => ({ ...prev, [serviceName]: true }));
    
    try {
      const result = await apiKeyValidator.validateKey(serviceName, key);
      setValidationResults(prev => ({ ...prev, [serviceName]: result }));
      
      if (result.isValid) {
        saveKey(serviceName, key);
        setTempKeys(prev => ({ ...prev, [serviceName]: '' }));
        toast({ title: 'Success', description: result.message });
      } else {
        toast({ title: 'Validation Failed', description: result.message, variant: 'destructive' });
      }
    } catch (error) {
      toast({ title: 'Error', description: 'Failed to validate API key', variant: 'destructive' });
    } finally {
      setTestingKeys(prev => ({ ...prev, [serviceName]: false }));
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast({ title: 'Copied', description: 'API key copied to clipboard' });
  };

  const toggleKeyVisibility = (serviceName: string) => {
    setShowKeys(prev => ({ ...prev, [serviceName]: !prev[serviceName] }));
  };

  const removeApiKey = (serviceName: string) => {
    removeKey(serviceName);
    setValidationResults(prev => ({ ...prev, [serviceName]: undefined }));
    setTempKeys(prev => ({ ...prev, [serviceName]: '' }));
    toast({ title: 'Removed', description: `${serviceName} API key removed` });
  };

  const getStatusIcon = (serviceName: string) => {
    if (testingKeys[serviceName]) {
      return <div className="h-4 w-4 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />;
    }
    
    const stored = keys.find(k => k.name === serviceName);
    if (stored?.isValid) {
      return <CheckCircle className="h-4 w-4 text-green-500" />;
    }
    
    return <XCircle className="h-4 w-4 text-red-500" />;
  };

  const getStatusBadge = (serviceName: string, required: boolean) => {
    const stored = keys.find(k => k.name === serviceName);
    if (stored?.isValid) return <Badge className="bg-green-500">Connected</Badge>;
    if (testingKeys[serviceName]) return <Badge variant="secondary">Testing...</Badge>;
    return <Badge variant={required ? "destructive" : "secondary"}>{required ? 'Required' : 'Optional'}</Badge>;
  };

  const connectedCount = keys.filter(k => k.isValid).length;
  const requiredCount = API_SERVICES.filter(s => s.required).length;

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-2">API Configuration Center</h2>
        <p className="text-muted-foreground mb-4">Configure your API keys to unlock all iTERRA features</p>
        <div className="flex justify-center gap-4">
          <Badge variant="outline">{connectedCount}/{API_SERVICES.length} Services Connected</Badge>
          <Badge variant={connectedCount >= requiredCount ? "default" : "destructive"}>
            {connectedCount >= requiredCount ? 'All Required Keys Set' : `${requiredCount - connectedCount} Required Keys Missing`}
          </Badge>
        </div>
      </div>

      <Alert>
        <Key className="h-4 w-4" />
        <AlertDescription>
          API keys are stored securely in your browser and never transmitted to our servers. They're used directly to connect to external services.
        </AlertDescription>
      </Alert>

      <Tabs defaultValue="configure" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="configure">Configure Keys</TabsTrigger>
          <TabsTrigger value="manage">Manage Keys</TabsTrigger>
        </TabsList>
        
        <TabsContent value="configure" className="space-y-4">
          {API_SERVICES.map((service) => (
            <Card key={service.name}>
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {getStatusIcon(service.name)}
                    <CardTitle className="text-lg">{service.name}</CardTitle>
                    {getStatusBadge(service.name, service.required)}
                  </div>
                  {service.helpUrl && (
                    <Button variant="ghost" size="sm" asChild>
                      <a href={service.helpUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                  )}
                </div>
                <CardDescription>{service.description}</CardDescription>
                {service.format && (
                  <p className="text-xs text-muted-foreground">Format: {service.format}</p>
                )}
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-2">
                  <Label htmlFor={`${service.name}-key`}>API Key</Label>
                  <div className="flex gap-2">
                    <div className="relative flex-1">
                      <Input
                        id={`${service.name}-key`}
                        type={showKeys[service.name] ? 'text' : 'password'}
                        value={getCurrentKey(service.name)}
                        onChange={(e) => updateTempKey(service.name, e.target.value)}
                        placeholder={service.placeholder}
                        className="pr-10"
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="absolute right-0 top-0 h-full px-3"
                        onClick={() => toggleKeyVisibility(service.name)}
                      >
                        {showKeys[service.name] ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </Button>
                    </div>
                    <Button
                      onClick={() => testApiKey(service.name)}
                      disabled={!getCurrentKey(service.name) || testingKeys[service.name]}
                      variant="outline"
                    >
                      {testingKeys[service.name] ? 'Testing...' : 'Test & Save'}
                    </Button>
                  </div>
                </div>
                {validationResults[service.name] && (
                  <Alert variant={validationResults[service.name].isValid ? "default" : "destructive"}>
                    <AlertDescription>{validationResults[service.name].message}</AlertDescription>
                  </Alert>
                )}
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="manage" className="space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold">Stored API Keys</h3>
            <Button onClick={clearAll} variant="outline" size="sm">
              <Trash2 className="h-4 w-4 mr-2" />
              Clear All
            </Button>
          </div>
          
          {keys.length === 0 ? (
            <Card>
              <CardContent className="text-center py-8">
                <p className="text-muted-foreground">No API keys stored yet</p>
              </CardContent>
            </Card>
          ) : (
            keys.map((key) => (
              <Card key={key.name}>
                <CardContent className="flex items-center justify-between py-4">
                  <div className="flex items-center gap-3">
                    {key.isValid ? <CheckCircle className="h-4 w-4 text-green-500" /> : <XCircle className="h-4 w-4 text-red-500" />}
                    <div>
                      <p className="font-medium">{key.name}</p>
                      <p className="text-sm text-muted-foreground">Last updated: {new Date(key.lastUpdated).toLocaleDateString()}</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button onClick={() => copyToClipboard(key.key)} variant="ghost" size="sm">
                      <Copy className="h-4 w-4" />
                    </Button>
                    <Button onClick={() => removeApiKey(key.name)} variant="ghost" size="sm">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
}