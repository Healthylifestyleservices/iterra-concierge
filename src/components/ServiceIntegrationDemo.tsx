import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Badge } from './ui/badge';
import { Alert, AlertDescription } from './ui/alert';
import { apiService, doterraService, wellnessService, chatService, serviceManager } from '../services';

interface ServiceStatus {
  api: boolean;
  doterra: boolean;
  wellness: boolean;
  chat: boolean;
  overall: boolean;
}

export const ServiceIntegrationDemo: React.FC = () => {
  const [serviceStatus, setServiceStatus] = useState<ServiceStatus | null>(null);
  const [testMessage, setTestMessage] = useState('');
  const [chatResponse, setChatResponse] = useState('');
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    checkServiceHealth();
  }, []);

  const checkServiceHealth = async () => {
    try {
      const status = await serviceManager.healthCheck();
      setServiceStatus(status);
    } catch (error) {
      console.error('Health check failed:', error);
      setError('Failed to check service health');
    }
  };

  const testChatService = async () => {
    if (!testMessage.trim()) return;
    
    setLoading(true);
    setError('');
    
    try {
      const response = await chatService.processMessage(testMessage);
      setChatResponse(JSON.stringify(response, null, 2));
    } catch (error) {
      setError('Chat service test failed: ' + (error as Error).message);
    } finally {
      setLoading(false);
    }
  };

  const testProductSearch = async () => {
    setLoading(true);
    setError('');
    
    try {
      const productData = await doterraService.getProductCatalog();
      setProducts(productData.products || []);
    } catch (error) {
      setError('Product search failed: ' + (error as Error).message);
    } finally {
      setLoading(false);
    }
  };

  const testWellnessRecommendations = async () => {
    setLoading(true);
    setError('');
    
    try {
      const recommendations = await wellnessService.getPersonalizedRecommendations({
        concerns: ['stress', 'sleep'],
        preferences: { natural: true },
        experience_level: 'beginner',
        lifestyle: 'busy'
      });
      setChatResponse(JSON.stringify(recommendations, null, 2));
    } catch (error) {
      setError('Wellness test failed: ' + (error as Error).message);
    } finally {
      setLoading(false);
    }
  };

  const getStatusColor = (status: boolean) => status ? 'bg-green-500' : 'bg-red-500';

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>iTERRA Service Integration Status</CardTitle>
        </CardHeader>
        <CardContent>
          {serviceStatus && (
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              <Badge className={getStatusColor(serviceStatus.api)}>
                API Service: {serviceStatus.api ? 'Online' : 'Offline'}
              </Badge>
              <Badge className={getStatusColor(serviceStatus.doterra)}>
                doTERRA: {serviceStatus.doterra ? 'Online' : 'Offline'}
              </Badge>
              <Badge className={getStatusColor(serviceStatus.wellness)}>
                Wellness: {serviceStatus.wellness ? 'Online' : 'Offline'}
              </Badge>
              <Badge className={getStatusColor(serviceStatus.chat)}>
                Chat: {serviceStatus.chat ? 'Online' : 'Offline'}
              </Badge>
              <Badge className={getStatusColor(serviceStatus.overall)}>
                Overall: {serviceStatus.overall ? 'Healthy' : 'Issues'}
              </Badge>
            </div>
          )}
          <Button onClick={checkServiceHealth} className="mt-4">
            Refresh Status
          </Button>
        </CardContent>
      </Card>

      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Chat Service Test</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Input
              placeholder="Ask about dōTERRA products or wellness..."
              value={testMessage}
              onChange={(e) => setTestMessage(e.target.value)}
            />
            <div className="flex gap-2">
              <Button onClick={testChatService} disabled={loading}>
                Test Chat
              </Button>
              <Button onClick={testWellnessRecommendations} variant="outline" disabled={loading}>
                Test Wellness
              </Button>
            </div>
            {chatResponse && (
              <pre className="bg-gray-100 p-4 rounded text-sm overflow-auto max-h-64">
                {chatResponse}
              </pre>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Product Catalog Test</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button onClick={testProductSearch} disabled={loading}>
              Load Products
            </Button>
            <div className="space-y-2 max-h-64 overflow-auto">
              {products.map((product, index) => (
                <div key={index} className="p-3 border rounded">
                  <h4 className="font-medium">{product.name}</h4>
                  <p className="text-sm text-gray-600">${product.price}</p>
                  <p className="text-xs text-gray-500">{product.category}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {error && (
        <Alert>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}
    </div>
  );
};

export default ServiceIntegrationDemo;