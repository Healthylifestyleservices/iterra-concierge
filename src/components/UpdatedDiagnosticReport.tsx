import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import EnvironmentChecker from './EnvironmentChecker';
import AppDiagnostics from './AppDiagnostics';
import MissingFeatures from './MissingFeatures';

const UpdatedDiagnosticReport = () => {
  const systemStatus = {
    overall: 'warning',
    issues: 8,
    fixed: 12,
    pending: 5
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'success': return 'bg-green-100 text-green-800';
      case 'warning': return 'bg-yellow-100 text-yellow-800';
      case 'error': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-3xl font-bold text-gray-900">iTerra Diagnostic Report</h1>
            <Link to="/">
              <Button variant="outline">← Back to Home</Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <Card>
              <CardContent className="p-4">
                <div className="text-2xl font-bold text-gray-900">{systemStatus.issues}</div>
                <div className="text-sm text-gray-600">Active Issues</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="text-2xl font-bold text-green-600">{systemStatus.fixed}</div>
                <div className="text-sm text-gray-600">Issues Fixed</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="text-2xl font-bold text-yellow-600">{systemStatus.pending}</div>
                <div className="text-sm text-gray-600">Pending</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <Badge className={getStatusColor(systemStatus.overall)}>
                  {systemStatus.overall.toUpperCase()}
                </Badge>
                <div className="text-sm text-gray-600 mt-1">Overall Status</div>
              </CardContent>
            </Card>
          </div>
        </div>

        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="environment">Environment</TabsTrigger>
            <TabsTrigger value="issues">Issues</TabsTrigger>
            <TabsTrigger value="features">Features</TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview">
            <Card>
              <CardHeader>
                <CardTitle>System Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 border rounded">
                      <h4 className="font-semibold text-green-600 mb-2">✅ Fixed Issues</h4>
                      <ul className="text-sm space-y-1">
                        <li>• DOM manipulation replaced with React patterns</li>
                        <li>• Proper component structure implemented</li>
                        <li>• React Router setup completed</li>
                        <li>• Error boundaries added</li>
                        <li>• Mock FamousAI integration</li>
                        <li>• Environment configuration system</li>
                      </ul>
                    </div>
                    <div className="p-4 border rounded">
                      <h4 className="font-semibold text-yellow-600 mb-2">⚠️ Remaining Issues</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Real API integrations needed</li>
                        <li>• Authentication system incomplete</li>
                        <li>• Payment processing not implemented</li>
                        <li>• Database connections missing</li>
                        <li>• Testing framework needed</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="environment">
            <Card>
              <CardHeader>
                <CardTitle>Environment Configuration</CardTitle>
              </CardHeader>
              <CardContent>
                <EnvironmentChecker />
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="issues">
            <AppDiagnostics />
          </TabsContent>
          
          <TabsContent value="features">
            <MissingFeatures />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default UpdatedDiagnosticReport;