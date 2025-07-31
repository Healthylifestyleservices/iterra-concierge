import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, XCircle, AlertCircle } from 'lucide-react';

interface Feature {
  name: string;
  status: 'implemented' | 'missing' | 'partial';
  priority: 'critical' | 'high' | 'medium' | 'low';
  description: string;
  files?: string[];
}

const MissingFeatures = () => {
  const features: Feature[] = [
    {
      name: 'User Authentication',
      status: 'partial',
      priority: 'critical',
      description: 'Auth bypass exists but no real auth system',
      files: ['LoginForm.tsx', 'ProtectedRoute.tsx']
    },
    {
      name: 'Associate Management',
      status: 'partial',
      priority: 'high',
      description: 'Database tables exist but no UI integration',
      files: ['AssociateSignup.tsx', 'AssociateApp.tsx']
    },
    {
      name: 'Payment Processing',
      status: 'partial',
      priority: 'high',
      description: 'Webhook exists but no frontend payment flow',
      files: ['PaymentHandler.tsx', 'PaymentRequired.tsx']
    },
    {
      name: 'Chat System',
      status: 'partial',
      priority: 'medium',
      description: 'Basic chat exists but no real AI integration',
      files: ['ChatInterface.tsx', 'WellnessAIChatBot.tsx']
    },
    {
      name: 'Product Catalog',
      status: 'implemented',
      priority: 'medium',
      description: 'Comprehensive product data available',
      files: ['ProductCatalog.tsx', 'comprehensiveProductCatalog.ts']
    },
    {
      name: 'Recipe System',
      status: 'implemented',
      priority: 'medium',
      description: 'Recipe data and components exist',
      files: ['RecipeSection.tsx', 'recipeData.ts']
    },
    {
      name: 'Business Tools',
      status: 'implemented',
      priority: 'medium',
      description: 'Business tools library is complete',
      files: ['BusinessToolsLibrary.tsx', 'businessToolsData.ts']
    },
    {
      name: 'Wellness Questionnaire',
      status: 'partial',
      priority: 'medium',
      description: 'Multiple questionnaire components but no integration',
      files: ['WellnessQuestionnaire.tsx', 'IntakeSystem.tsx']
    },
    {
      name: 'Navigation System',
      status: 'missing',
      priority: 'high',
      description: 'No React Router setup, only DOM manipulation',
      files: ['App.tsx']
    },
    {
      name: 'Error Handling',
      status: 'missing',
      priority: 'medium',
      description: 'No error boundaries or global error handling'
    },
    {
      name: 'Loading States',
      status: 'missing',
      priority: 'medium',
      description: 'No loading indicators or skeleton screens'
    },
    {
      name: 'Data Persistence',
      status: 'partial',
      priority: 'medium',
      description: 'Supabase setup but limited frontend integration',
      files: ['supabase.ts']
    },
    {
      name: 'Mobile Responsiveness',
      status: 'partial',
      priority: 'medium',
      description: 'Tailwind CSS but no mobile-specific testing'
    },
    {
      name: 'SEO Optimization',
      status: 'missing',
      priority: 'low',
      description: 'No meta tags, sitemap, or SEO structure'
    },
    {
      name: 'Analytics Integration',
      status: 'missing',
      priority: 'low',
      description: 'No Google Analytics or tracking'
    },
    {
      name: 'Testing Suite',
      status: 'missing',
      priority: 'low',
      description: 'No unit tests, integration tests, or E2E tests'
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'implemented': return <CheckCircle className="h-5 w-5 text-green-500" />;
      case 'partial': return <AlertCircle className="h-5 w-5 text-yellow-500" />;
      case 'missing': return <XCircle className="h-5 w-5 text-red-500" />;
      default: return null;
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'critical': return 'destructive';
      case 'high': return 'destructive';
      case 'medium': return 'default';
      case 'low': return 'secondary';
      default: return 'default';
    }
  };

  const implemented = features.filter(f => f.status === 'implemented').length;
  const partial = features.filter(f => f.status === 'partial').length;
  const missing = features.filter(f => f.status === 'missing').length;

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Missing Features Report</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-500" />
              Implemented
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">{implemented}</div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm flex items-center gap-2">
              <AlertCircle className="h-4 w-4 text-yellow-500" />
              Partial
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-yellow-600">{partial}</div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm flex items-center gap-2">
              <XCircle className="h-4 w-4 text-red-500" />
              Missing
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">{missing}</div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {features.map((feature, index) => (
          <Card key={index}>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center justify-between">
                <div className="flex items-center gap-2">
                  {getStatusIcon(feature.status)}
                  {feature.name}
                </div>
                <Badge variant={getPriorityColor(feature.priority)}>
                  {feature.priority}
                </Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-2">{feature.description}</p>
              {feature.files && (
                <div className="text-xs text-muted-foreground">
                  <strong>Files:</strong> {feature.files.join(', ')}
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default MissingFeatures;