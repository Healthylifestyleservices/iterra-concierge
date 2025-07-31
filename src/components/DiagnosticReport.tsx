import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import AppDiagnostics from './AppDiagnostics';
import MissingFeatures from './MissingFeatures';

const DiagnosticReport = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const criticalIssues = [
    'FamousAI dependency is mocked but not properly integrated',
    'Hardcoded placeholder URLs in API configurations',
    'No React Router setup - app only shows SimpleHome',
    'Direct DOM manipulation in React components (anti-pattern)'
  ];

  const quickFixes = [
    {
      issue: 'Missing React Router',
      solution: 'Install react-router-dom and setup routing in App.tsx',
      effort: 'Low'
    },
    {
      issue: 'Environment Variables',
      solution: 'Create .env file with proper API keys and URLs',
      effort: 'Low'
    },
    {
      issue: 'Error Boundaries',
      solution: 'Add React error boundaries for better error handling',
      effort: 'Medium'
    },
    {
      issue: 'State Management',
      solution: 'Implement Context API or Zustand for global state',
      effort: 'Medium'
    }
  ];

  const architecturalIssues = [
    {
      category: 'Code Organization',
      issues: [
        'Too many components in single directory',
        'No clear separation of concerns',
        'Mixed data and component files'
      ]
    },
    {
      category: 'Performance',
      issues: [
        'No code splitting or lazy loading',
        'Large bundle size due to unused components',
        'No memoization for expensive operations'
      ]
    },
    {
      category: 'Security',
      issues: [
        'Auth bypass functionality',
        'Hardcoded API keys in source',
        'No input validation or sanitization'
      ]
    }
  ];

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="mb-6">
        <h1 className="text-4xl font-bold mb-2">Complete App Analysis</h1>
        <p className="text-muted-foreground">
          Comprehensive report of issues, missing features, and recommendations
        </p>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="issues">Issues</TabsTrigger>
          <TabsTrigger value="missing">Missing</TabsTrigger>
          <TabsTrigger value="fixes">Quick Fixes</TabsTrigger>
          <TabsTrigger value="architecture">Architecture</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-red-600">Critical Issues</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">4</div>
                <p className="text-sm text-muted-foreground">Blocking functionality</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-yellow-600">Missing Features</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">8</div>
                <p className="text-sm text-muted-foreground">Incomplete implementation</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-green-600">Working Features</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">6</div>
                <p className="text-sm text-muted-foreground">Fully functional</p>
              </CardContent>
            </Card>
          </div>

          <Alert>
            <AlertDescription>
              <div className="space-y-2">
                <h3 className="font-semibold">Priority Actions Needed:</h3>
                <ul className="space-y-1">
                  {criticalIssues.map((issue, index) => (
                    <li key={index} className="text-sm flex items-center gap-2">
                      <Badge variant="destructive" className="text-xs">!</Badge>
                      {issue}
                    </li>
                  ))}
                </ul>
              </div>
            </AlertDescription>
          </Alert>
        </TabsContent>

        <TabsContent value="issues">
          <AppDiagnostics />
        </TabsContent>

        <TabsContent value="missing">
          <MissingFeatures />
        </TabsContent>

        <TabsContent value="fixes" className="space-y-4">
          <h2 className="text-2xl font-bold">Quick Fixes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {quickFixes.map((fix, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center justify-between">
                    {fix.issue}
                    <Badge variant={fix.effort === 'Low' ? 'default' : 'secondary'}>
                      {fix.effort} Effort
                    </Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">{fix.solution}</p>
                  <Button size="sm" variant="outline">
                    View Implementation
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="architecture" className="space-y-4">
          <h2 className="text-2xl font-bold">Architectural Issues</h2>
          <div className="space-y-4">
            {architecturalIssues.map((category, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{category.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {category.issues.map((issue, issueIndex) => (
                      <li key={issueIndex} className="text-sm flex items-center gap-2">
                        <Badge variant="outline" className="text-xs">Issue</Badge>
                        {issue}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default DiagnosticReport;