import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { AlertTriangle, Shield, FileText, Users } from 'lucide-react';

interface ComplianceIssue {
  category: string;
  issue: string;
  severity: 'critical' | 'high' | 'medium' | 'low';
  description: string;
  recommendation: string;
  files?: string[];
}

const LegalComplianceChecker = () => {
  const complianceIssues: ComplianceIssue[] = [
    {
      category: 'FDA Compliance',
      issue: 'Medical Claims Without Disclaimers',
      severity: 'critical',
      description: 'Essential oil recommendations without FDA disclaimers',
      recommendation: 'Add FDA disclaimer to all health-related content',
      files: ['WellnessRecommendations.tsx', 'ProtocolGenerator.tsx']
    },
    {
      category: 'Privacy',
      issue: 'Data Collection Without Consent',
      severity: 'critical', 
      description: 'Collecting personal health data without explicit consent',
      recommendation: 'Implement privacy policy and consent forms',
      files: ['IntakeSystem.tsx', 'WellnessQuestionnaire.tsx']
    },
    {
      category: 'Business Compliance',
      issue: 'MLM Income Claims',
      severity: 'high',
      description: 'Potential income claims without proper disclaimers',
      recommendation: 'Add income disclaimer and compliance warnings',
      files: ['AssociateApp.tsx', 'BusinessToolsLibrary.tsx']
    },
    {
      category: 'Terms of Service',
      issue: 'Missing Terms and Conditions',
      severity: 'high',
      description: 'No terms of service or user agreement',
      recommendation: 'Create comprehensive terms of service',
      files: []
    },
    {
      category: 'Age Verification',
      issue: 'No Age Verification',
      severity: 'medium',
      description: 'Health recommendations without age verification',
      recommendation: 'Add age verification for health content',
      files: ['LoginForm.tsx']
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
      case 'critical': return <AlertTriangle className="h-4 w-4" />;
      case 'high': return <Shield className="h-4 w-4" />;
      case 'medium': return <FileText className="h-4 w-4" />;
      case 'low': return <Users className="h-4 w-4" />;
      default: return null;
    }
  };

  const criticalCount = complianceIssues.filter(i => i.severity === 'critical').length;
  const highCount = complianceIssues.filter(i => i.severity === 'high').length;

  return (
    <div className="space-y-6">
      {criticalCount > 0 && (
        <Alert variant="destructive">
          <AlertTriangle className="h-4 w-4" />
          <AlertDescription>
            <strong>CRITICAL LEGAL ISSUES FOUND:</strong> {criticalCount} critical compliance issues require immediate attention before deployment.
          </AlertDescription>
        </Alert>
      )}

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-red-600">{criticalCount}</div>
            <div className="text-sm text-gray-600">Critical Issues</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-orange-600">{highCount}</div>
            <div className="text-sm text-gray-600">High Priority</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-yellow-600">
              {complianceIssues.filter(i => i.severity === 'medium').length}
            </div>
            <div className="text-sm text-gray-600">Medium Priority</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-green-600">
              {complianceIssues.filter(i => i.severity === 'low').length}
            </div>
            <div className="text-sm text-gray-600">Low Priority</div>
          </CardContent>
        </Card>
      </div>

      <div className="space-y-4">
        {complianceIssues.map((issue, index) => (
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
              <div className="bg-blue-50 p-3 rounded mb-2">
                <strong className="text-blue-800">Recommendation:</strong>
                <p className="text-blue-700 text-sm">{issue.recommendation}</p>
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

export default LegalComplianceChecker;