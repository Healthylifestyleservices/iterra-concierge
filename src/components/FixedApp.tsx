import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FixedITerraCore from './FixedITerraCore';
import UpdatedDiagnosticReport from './UpdatedDiagnosticReport';
import UpdatedAppDiagnostics from './UpdatedAppDiagnostics';
import MissingFeatures from './MissingFeatures';
import ComprehensiveAudit from './ComprehensiveAudit';
import DisclaimerBanner from './DisclaimerBanner';
import ErrorBoundary from './ErrorBoundary';
import { Toaster } from '@/components/ui/toaster';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Link } from 'react-router-dom';
import { AlertTriangle, Shield, FileText, Code } from 'lucide-react';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 p-4 pb-24">
      <div className="max-w-4xl mx-auto">
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-3xl text-center text-purple-600">
              iTerra Wellness Hub - AUDIT COMPLETE
            </CardTitle>
            <p className="text-center text-gray-600">
              ✅ All issues identified and documented
            </p>
          </CardHeader>
          <CardContent>
            <Alert className="mb-6 bg-blue-50 border-blue-200">
              <AlertTriangle className="h-4 w-4" />
              <AlertDescription>
                <strong>AUDIT COMPLETE:</strong> All security, legal, and technical issues have been identified. 
                Review the comprehensive audit report for detailed remediation steps.
              </AlertDescription>
            </Alert>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <Link to="/audit">
                <Button className="w-full h-20 flex flex-col bg-blue-600 hover:bg-blue-700">
                  <Shield className="h-6 w-6 mb-1" />
                  <span>📊 COMPLETE AUDIT</span>
                  <span className="text-xs">Security, Legal & Technical</span>
                </Button>
              </Link>
              <Link to="/diagnostics">
                <Button variant="outline" className="w-full h-20 flex flex-col">
                  <Code className="h-6 w-6 mb-1" />
                  <span>Technical Report</span>
                  <span className="text-xs">Build Status & Fixes</span>
                </Button>
              </Link>
            </div>
            
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4">
              <h3 className="font-semibold text-green-800 mb-2">✅ Audit Tools Created:</h3>
              <ul className="text-sm text-green-700 space-y-1">
                <li>• Comprehensive security vulnerability scanner</li>
                <li>• Legal compliance checker with FDA requirements</li>
                <li>• Technical diagnostics with fix tracking</li>
                <li>• Feature implementation status tracker</li>
                <li>• Environment configuration validator</li>
                <li>• Critical issue prioritization system</li>
              </ul>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <h3 className="font-semibold text-yellow-800 mb-2">⚠️ Next Steps Required:</h3>
              <ul className="text-sm text-yellow-700 space-y-1">
                <li>• Review comprehensive audit report</li>
                <li>• Address critical security vulnerabilities</li>
                <li>• Implement legal disclaimers and compliance</li>
                <li>• Set up proper environment variables</li>
                <li>• Remove authentication bypass mechanisms</li>
              </ul>
            </div>
          </CardContent>
        </Card>
        
        <FixedITerraCore />
      </div>
      <DisclaimerBanner />
    </div>
  );
};

const FixedApp = () => {
  return (
    <ErrorBoundary>
      <Router>
        <div className="min-h-screen">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/audit" element={<ComprehensiveAudit />} />
            <Route path="/diagnostics" element={<UpdatedDiagnosticReport />} />
            <Route path="/issues" element={<UpdatedAppDiagnostics />} />
            <Route path="/missing" element={<MissingFeatures />} />
          </Routes>
          <Toaster />
        </div>
      </Router>
    </ErrorBoundary>
  );
};

export default FixedApp;