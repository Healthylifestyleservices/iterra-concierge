import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, XCircle, AlertTriangle } from 'lucide-react';

interface Issue {
  type: 'error' | 'warning' | 'fixed';
  category: string;
  description: string;
  file?: string;
  severity: 'critical' | 'high' | 'medium' | 'low';
  status: 'resolved' | 'active' | 'partial';
}

const UpdatedAppDiagnostics = () => {
  const issues: Issue[] = [
    {
      type: 'fixed',
      category: 'DOM Manipulation',
      description: 'Direct DOM manipulation replaced with React patterns',
      file: 'FixedITerraCore.tsx',
      severity: 'high',
      status: 'resolved'
    },
    {
      type: 'fixed',
      category: 'Component Structure',
      description: 'Proper React component architecture implemented',
      severity: 'medium',
      status: 'resolved'
    },
    {
      type: 'fixed',
      category: 'Error Handling',
      description: 'Error boundaries and proper error handling added',
      file: 'ErrorBoundary.tsx',
      severity: 'medium',
      status: 'resolved'
    },
    {
      type: 'error',
      category: 'API Configuration',
      description: 'Hardcoded placeholder URLs in famous-ai.js',
      file: 'src/lib/famous-ai.js',
      severity: 'critical',
      status: 'active'
    },
    {
      type: 'error',
      category: 'Authentication',
      description: 'Auth bypass mechanism poses security risk',
      file: 'FixedITerraCore.tsx',
      severity: 'critical',
      status: 'active'
    },
    {
      type: 'warning',
      category: 'Environment Variables',
      description: 'Missing required environment configuration',
      severity: 'high',
      status: 'partial'
    },
    {
      type: 'warning',
      category: 'Testing',
      description: 'No test files or testing framework setup',
      severity: 'low',
      status: 'active'
    },
    {
      type: 'warning',
      category: 'Type Safety',
      description: 'Some components missing proper TypeScript types',
      severity: 'medium',
      status: 'partial'
    }
  ];

  const resolvedIssues = issues.filter(i => i.status === 'resolved').length;
  const activeIssues = issues.filter(i => i.status === 'active').length;
  const partialIssues = issues.filter(i => i.status === 'partial').length;
  const criticalActive = issues.filter(i => i.severity === 'critical' && i.status === 'active').length;

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'critical': return 'destructive';
      case 'high': return 'destructive';
      case 'medium': return 'default';
      case 'low': return 'secondary';
      default: return 'default';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'resolved': return <CheckCircle className="h-4 w-4 text-green-500" />;
      case 'active': return <XCircle className="h-4 w-4 text-red-500" />;
      case 'partial': return <AlertTriangle className="h-4 w-4 text-yellow-500" />;
      default: return null;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'error': return 'destructive';
      case 'warning': return 'default';
      case 'fixed': return 'outline';
      default: return 'default';
    }
  };

  return (
    <div className="space-y-6">
      {criticalActive > 0 && (
        <Alert variant="destructive">
          <XCircle className="h-4 w-4" />
          <AlertDescription>
            {criticalActive} critical issue(s) still active. These must be resolved before production deployment.
          </AlertDescription>
        </Alert>
      )}
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-500" />
              Resolved
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">{resolvedIssues}</div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm flex items-center gap-2">
              <XCircle className="h-4 w-4 text-red-500" />
              Active Issues
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">{activeIssues}</div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm flex items-center gap-2">
              <AlertTriangle className="h-4 w-4 text-yellow-500" />
              Partial
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-yellow-600">{partialIssues}</div>
          </CardContent>
        </Card>
      </div>

      <div className="space-y-4">
        {issues.map((issue, index) => (
          <Alert key={index}>
            <AlertDescription>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    {getStatusIcon(issue.status)}
                    <Badge variant={getTypeColor(issue.type)}>
                      {issue.type.toUpperCase()}
                    </Badge>
                    <Badge variant={getSeverityColor(issue.severity)}>
                      {issue.severity.toUpperCase()}
                    </Badge>
                    <span className="font-semibold">{issue.category}</span>
                  </div>
                  <p className="text-sm mb-1">{issue.description}</p>
                  {issue.file && (
                    <p className="text-xs text-muted-foreground">File: {issue.file}</p>
                  )}
                </div>
              </div>
            </AlertDescription>
          </Alert>
        ))}
      </div>
    </div>
  );
};

export default UpdatedAppDiagnostics;