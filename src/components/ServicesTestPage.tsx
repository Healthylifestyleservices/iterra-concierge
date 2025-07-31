import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import ServiceIntegrationDemo from './ServiceIntegrationDemo';
import EnhancedChatInterface from './EnhancedChatInterface';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { CheckCircle, AlertCircle, Settings, MessageSquare, Database, Brain } from 'lucide-react';

const ServicesTestPage: React.FC = () => {
  const serviceFeatures = [
    {
      icon: <Brain className="w-5 h-5" />,
      title: 'AI-Powered Chat',
      description: 'Intelligent conversation with Famous AI integration',
      status: 'active'
    },
    {
      icon: <Database className="w-5 h-5" />,
      title: 'doTERRA Integration',
      description: 'Real product catalog and purchase links',
      status: 'active'
    },
    {
      icon: <MessageSquare className="w-5 h-5" />,
      title: 'Wellness Protocols',
      description: 'Personalized recommendations and safety analysis',
      status: 'active'
    },
    {
      icon: <Settings className="w-5 h-5" />,
      title: 'Service Management',
      description: 'Health monitoring and error handling',
      status: 'active'
    }
  ];

  const userProfile = {
    preferences: {
      natural: true,
      organic: true,
      budget_conscious: false
    },
    experience_level: 'intermediate',
    lifestyle: 'active'
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            iTERRA Services Integration
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Complete API integration with Famous AI, doTERRA, and wellness services
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {serviceFeatures.map((feature, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-4">
                  <div className="flex justify-center mb-2">
                    {feature.icon}
                  </div>
                  <h3 className="font-semibold text-sm mb-1">{feature.title}</h3>
                  <p className="text-xs text-gray-600 mb-2">{feature.description}</p>
                  <Badge 
                    variant={feature.status === 'active' ? 'default' : 'secondary'}
                    className="text-xs"
                  >
                    <CheckCircle className="w-3 h-3 mr-1" />
                    {feature.status}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <Tabs defaultValue="chat" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="chat" className="flex items-center gap-2">
              <MessageSquare className="w-4 h-4" />
              Live Chat Interface
            </TabsTrigger>
            <TabsTrigger value="testing" className="flex items-center gap-2">
              <Settings className="w-4 h-4" />
              Service Testing
            </TabsTrigger>
          </TabsList>

          <TabsContent value="chat" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageSquare className="w-5 h-5" />
                  Interactive Wellness Chat
                </CardTitle>
                <p className="text-sm text-gray-600">
                  Experience the full iTERRA chat system with AI-powered responses, 
                  product recommendations, and wellness protocols.
                </p>
              </CardHeader>
              <CardContent>
                <EnhancedChatInterface userProfile={userProfile} />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="testing" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Settings className="w-5 h-5" />
                  Service Integration Testing
                </CardTitle>
                <p className="text-sm text-gray-600">
                  Test all service endpoints, check health status, and verify 
                  API integrations are working correctly.
                </p>
              </CardHeader>
              <CardContent>
                <ServiceIntegrationDemo />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertCircle className="w-5 h-5" />
              Implementation Notes
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-2">✅ Implemented Features</h4>
                <ul className="text-sm space-y-1 text-gray-600">
                  <li>• Complete API service with Famous AI integration</li>
                  <li>• doTERRA product catalog and search</li>
                  <li>• Intelligent wellness recommendations</li>
                  <li>• Multi-service chat routing with intent analysis</li>
                  <li>• Service health monitoring and error handling</li>
                  <li>• Real-time chat interface with typing indicators</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">🔧 Technical Details</h4>
                <ul className="text-sm space-y-1 text-gray-600">
                  <li>• Uses real environment configuration</li>
                  <li>• Fallback systems for API failures</li>
                  <li>• TypeScript integration throughout</li>
                  <li>• Modular service architecture</li>
                  <li>• Centralized service management</li>
                  <li>• Production-ready error handling</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ServicesTestPage;