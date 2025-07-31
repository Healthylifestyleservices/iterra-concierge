import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { Shield, Lock, Eye, Database } from 'lucide-react';

interface SecurityIssue {
  category: string;
  issue: string;
  severity: 'critical' | 'high' | 'medium' | 'low';
  description: string;
  fix: string;
  files?: string[];
}

const SecurityAudit = () => {
  const securityIssues: SecurityIssue[] = [
    {
      category: 'Authentication',
      issue: 'Hardcoded API Keys',
      severity: 'critical',
      description: 'API keys exposed in client-side code',
      fix: 'Move sensitive keys to server-side environment variables',
      files: ['famous-ai.js', 'supabase.ts']
    },
    {
      category: 'Authentication',
      issue: 'Auth Bypass Mechanism',
      severity: 'critical',
      description: 'Authentication can be bypassed with simple flag',
      fix: 'Remove bypass mechanism and implement proper auth',
      files: ['iTerraCore.tsx', 'ProtectedRoute.tsx']
    },
    {
      category: 'Data Protection',
      issue: 'Unencrypted Health Data',
      severity: 'high',
      description: 'Personal health information stored without encryption',
      fix: 'Implement client-side encryption before storage',
      files: ['IntakeSystem.tsx', 'WellnessQuestionnaire.tsx']
    },
    {
      category: 'Input Validation',
      issue: 'No Input Sanitization',
      severity: 'high',
      description: 'User inputs not validated or sanitized',
      fix: 'Add input validation and XSS protection',
      files: ['ChatInterface.tsx', 'forms']
    },
    {
      category: 'Session Management',
      issue: 'No Session Timeout',
      severity: 'medium',
      description: 'User sessions never expire',
      fix: 'Implement session timeout and refresh tokens',
      files: ['AuthContext.tsx']
    },
    {
      category: 'HTTPS',
      issue: 'Mixed Content Risk',
      severity: 'medium',
      description: 'Some external resources may load over HTTP',
      fix: 'Ensure all external resources use HTTPS',
      files: ['index.html']
    },
    {
      category: 'Error Handling',
      issue: 'Information Disclosure',
      severity: 'medium',
      description: 'Error messages may reveal sensitive information',
      fix: 'Implement generic error messages for users',
      files: ['ErrorBoundary.tsx']
    }
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'critical': return 'destructive';
      case 'high': return 'destructive';
      case 'medium': return 'default';
      case 'low': return 'secondary';
      default: return 'default';
    }
  };

  const getSeverityIcon = (severity: string) => {
    switch (severity) {
      case 'critical': return <Shield className="h-4 w-4" />;
      case 'high': return <Lock className="h-4 w-4" />;
      case 'medium': return <Eye className="h-4 w-4" />;
      case 'low': return <Database className="h-4 w-4" />;
      default: return null;
    }
  };

  const criticalCount = securityIssues.filter(i => i.severity === 'critical').length;
  const highCount = securityIssues.filter(i => i.severity === 'high').length;

  return (
    <div className="space-y-6">
      {criticalCount > 0 && (
        <Alert variant="destructive">
          <Shield className="h-4 w-4" />
          <AlertDescription>
            <strong>CRITICAL SECURITY VULNERABILITIES:</strong> {criticalCount} critical security issues found. Do not deploy to production.
          </AlertDescription>
        </Alert>
      )}

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-red-600">{criticalCount}</div>
            <div className="text-sm text-gray-600">Critical</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-orange-600">{highCount}</div>
            <div className="text-sm text-gray-600">High Risk</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-yellow-600">
              {securityIssues.filter(i => i.severity === 'medium').length}
            </div>
            <div className="text-sm text-gray-600">Medium Risk</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-green-600">
              {securityIssues.filter(i => i.severity === 'low').length}
            </div>
            <div className="text-sm text-gray-600">Low Risk</div>
          </CardContent>
        </Card>
      </div>

      <div className="space-y-4">
        {securityIssues.map((issue, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  {getSeverityIcon(issue.severity)}
                  {issue.issue}
                </div>
                <div className="flex gap-2">
                  <Badge variant="outline">{issue.category}</Badge>
                  <Badge variant={getSeverityColor(issue.severity)}>
                    {issue.severity.toUpperCase()}
                  </Badge>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-2">{issue.description}</p>
              <div className="bg-green-50 p-3 rounded mb-2">
                <strong className="text-green-800">Fix:</strong>
                <p className="text-green-700 text-sm">{issue.fix}</p>
              </div>
              {issue.files && issue.files.length > 0 && (
                <div className="text-xs text-gray-500">
                  <strong>Affected files:</strong> {issue.files.join(', ')}
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default SecurityAudit;