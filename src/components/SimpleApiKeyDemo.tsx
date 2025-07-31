import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Key, CheckCircle, XCircle } from 'lucide-react';
import { apiKeyStorage } from '@/components/ApiKeyStorage';

interface SimpleApiKeyDemoProps {
  onUpdate?: () => void;
}

export default function SimpleApiKeyDemo({ onUpdate }: SimpleApiKeyDemoProps) {
  const [keys, setKeys] = useState({
    famousAI: '',
    doterra: '',
    stripe: '',
    paypal: ''
  });
  
  const [validated, setValidated] = useState({
    famousAI: false,
    doterra: false,
    stripe: false,
    paypal: false
  });

  useEffect(() => {
    // Load existing keys and validation status
    const loadKeys = () => {
      const allKeys = apiKeyStorage.getAllKeys();
      const newValidated = {
        famousAI: allKeys.find(k => k.name === 'FamousAI')?.isValid || false,
        doterra: allKeys.find(k => k.name === 'dōTERRA API')?.isValid || false,
        stripe: allKeys.find(k => k.name === 'Stripe')?.isValid || false,
        paypal: allKeys.find(k => k.name === 'PayPal')?.isValid || false
      };
      setValidated(newValidated);
    };
    
    loadKeys();
  }, []);

  const validateKey = async (service: string, key: string) => {
    if (!key || key.length < 8) {
      return;
    }

    const serviceMap: { [key: string]: string } = {
      famousAI: 'FamousAI',
      doterra: 'dōTERRA API',
      stripe: 'Stripe',
      paypal: 'PayPal'
    };

    const serviceName = serviceMap[service];
    
    try {
      // Store the key
      apiKeyStorage.storeKey(serviceName, key);
      
      // Update validation status
      setValidated(prev => ({ ...prev, [service]: true }));
      
      // Clear the input
      setKeys(prev => ({ ...prev, [service]: '' }));
      
      // Notify parent component
      if (onUpdate) {
        onUpdate();
      }
    } catch (error) {
      console.error('Failed to validate key:', error);
      setValidated(prev => ({ ...prev, [service]: false }));
    }
  };

  const updateKey = (service: string, value: string) => {
    setKeys(prev => ({ ...prev, [service]: value }));
  };

  const services = [
    { key: 'famousAI', name: 'FamousAI', placeholder: 'fa_xxxxxxxxxxxxxxxxxxxxxxxx', required: true },
    { key: 'doterra', name: 'dōTERRA API', placeholder: 'your_doterra_api_key', required: true },
    { key: 'stripe', name: 'Stripe', placeholder: 'pk_test_xxxxxxxxxxxxxxxx', required: false },
    { key: 'paypal', name: 'PayPal', placeholder: 'your_paypal_client_id', required: false }
  ];

  const validCount = Object.values(validated).filter(Boolean).length;
  const requiredValid = validated.famousAI && validated.doterra;

  return (
    <div className="max-w-2xl mx-auto space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Key className="h-5 w-5" />
            API Key Configuration
          </CardTitle>
          <div className="flex gap-2">
            <Badge variant="outline">{validCount}/4 Configured</Badge>
            <Badge variant={requiredValid ? "default" : "destructive"}>
              {requiredValid ? 'Ready' : 'Setup Required'}
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          {services.map(service => (
            <div key={service.key} className="space-y-2">
              <div className="flex items-center gap-2">
                {validated[service.key as keyof typeof validated] ? 
                  <CheckCircle className="h-4 w-4 text-green-500" /> : 
                  <XCircle className="h-4 w-4 text-red-500" />
                }
                <label className="font-medium">{service.name}</label>
                {service.required && <Badge variant="destructive" className="text-xs">Required</Badge>}
                {validated[service.key as keyof typeof validated] && 
                  <Badge variant="default" className="text-xs bg-green-100 text-green-800">Configured</Badge>
                }
              </div>
              <div className="flex gap-2">
                <Input
                  type="password"
                  placeholder={validated[service.key as keyof typeof validated] ? 'Key configured' : service.placeholder}
                  value={keys[service.key as keyof typeof keys]}
                  onChange={(e) => updateKey(service.key, e.target.value)}
                  className="flex-1"
                  disabled={validated[service.key as keyof typeof validated]}
                />
                <Button
                  onClick={() => validateKey(service.key, keys[service.key as keyof typeof keys])}
                  disabled={!keys[service.key as keyof typeof keys] || validated[service.key as keyof typeof validated]}
                  size="sm"
                >
                  {validated[service.key as keyof typeof validated] ? 'Saved' : 'Save'}
                </Button>
              </div>
            </div>
          ))}
          
          <div className="pt-4 border-t">
            <p className="text-sm text-muted-foreground text-center">
              API keys are stored locally in your browser for security.
            </p>
            {requiredValid && (
              <p className="text-sm text-green-600 text-center mt-2 font-medium">
                ✓ All required API keys configured! Your app is ready to use.
              </p>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}