import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { AlertTriangle, Shield, Code, FileText } from 'lucide-react';
import LegalComplianceChecker from './LegalComplianceChecker';
import SecurityAudit from './SecurityAudit';
import AppDiagnostics from './AppDiagnostics';
import MissingFeatures from './MissingFeatures';

const ComprehensiveAudit = () => {
  const overallStatus = {
    security: 'critical',
    legal: 'critical', 
    technical: 'warning',
    features: 'warning'
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'critical': return 'bg-red-100 text-red-800';
      case 'warning': return 'bg-yellow-100 text-yellow-800';
      case 'good': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const criticalIssues = [
    'Hardcoded API keys in client code',
    'Authentication bypass mechanism',
    'Medical claims without FDA disclaimers',
    'Personal health data collection without consent',
    'No terms of service or privacy policy'
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-3xl font-bold text-gray-900">Comprehensive App Audit</h1>
            <Link to="/">
              <Button variant="outline">← Back to Home</Button>
            </Link>
          </div>
          
          <Alert variant="destructive" className="mb-6">
            <AlertTriangle className="h-4 w-4" />
            <AlertDescription>
              <strong>CRITICAL:</strong> This application has serious security and legal issues that must be resolved before deployment.
            </AlertDescription>
          </Alert>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm text-gray-600">Security</div>
                    <Badge className={getStatusColor(overallStatus.security)}>
                      {overallStatus.security.toUpperCase()}
                    </Badge>
                  </div>
                  <Shield className="h-6 w-6 text-red-500" />
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm text-gray-600">Legal</div>
                    <Badge className={getStatusColor(overallStatus.legal)}>
                      {overallStatus.legal.toUpperCase()}
                    </Badge>
                  </div>
                  <FileText className="h-6 w-6 text-red-500" />
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm text-gray-600">Technical</div>
                    <Badge className={getStatusColor(overallStatus.technical)}>
                      {overallStatus.technical.toUpperCase()}
                    </Badge>
                  </div>
                  <Code className="h-6 w-6 text-yellow-500" />
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm text-gray-600">Features</div>
                    <Badge className={getStatusColor(overallStatus.features)}>
                      {overallStatus.features.toUpperCase()}
                    </Badge>
                  </div>
                  <AlertTriangle className="h-6 w-6 text-yellow-500" />
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="text-red-600">🚨 Critical Issues Requiring Immediate Attention</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {criticalIssues.map((issue, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <AlertTriangle className="h-4 w-4 text-red-500" />
                    <span className="text-sm">{issue}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="security" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="security">Security Audit</TabsTrigger>
            <TabsTrigger value="legal">Legal Compliance</TabsTrigger>
            <TabsTrigger value="technical">Technical Issues</TabsTrigger>
            <TabsTrigger value="features">Feature Status</TabsTrigger>
          </TabsList>
          
          <TabsContent value="security">
            <Card>
              <CardHeader>
                <CardTitle>Security Vulnerabilities</CardTitle>
              </CardHeader>
              <CardContent>
                <SecurityAudit />
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="legal">
            <Card>
              <CardHeader>
                <CardTitle>Legal & Compliance Issues</CardTitle>
              </CardHeader>
              <CardContent>
                <LegalComplianceChecker />
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="technical">
            <Card>
              <CardHeader>
                <CardTitle>Technical Problems</CardTitle>
              </CardHeader>
              <CardContent>
                <AppDiagnostics />
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="features">
            <Card>
              <CardHeader>
                <CardTitle>Feature Implementation Status</CardTitle>
              </CardHeader>
              <CardContent>
                <MissingFeatures />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default ComprehensiveAudit;