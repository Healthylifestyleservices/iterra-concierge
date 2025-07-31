import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CheckCircle, XCircle, RefreshCw, AlertTriangle } from 'lucide-react';
import { apiKeyService } from '@/lib/apiKeyService';
import { useAppContext } from '@/contexts/AppContext';

interface SystemCheck {
  name: string;
  status: 'pass' | 'fail' | 'warning';
  message: string;
  details?: string;
}

export default function AppStatusChecker() {
  const { associateInfo } = useAppContext();
  const [checks, setChecks] = useState<SystemCheck[]>([]);
  const [isChecking, setIsChecking] = useState(false);
  const [lastCheck, setLastCheck] = useState<Date | null>(null);

  const runSystemChecks = async () => {
    setIsChecking(true);
    const results: SystemCheck[] = [];

    // API Keys Check
    const apiStatus = apiKeyService.getConfigurationStatus();
    results.push({
      name: 'API Keys',
      status: apiStatus.isReady ? 'pass' : 'fail',
      message: apiStatus.isReady ? 'All required keys configured' : 'Missing required API keys',
      details: `${apiStatus.configured}/${apiStatus.total} keys configured`
    });

    // Associate Info Check
    results.push({
      name: 'Associate Information',
      status: associateInfo?.associateId ? 'pass' : 'warning',
      message: associateInfo?.associateId ? 'Associate ID configured' : 'No associate ID set',
      details: associateInfo?.associateId ? `ID: ${associateInfo.associateId}` : 'Shopping links will not work'
    });

    // Browser Storage Check
    try {
      localStorage.setItem('test', 'test');
      localStorage.removeItem('test');
      results.push({
        name: 'Browser Storage',
        status: 'pass',
        message: 'Local storage available'
      });
    } catch {
      results.push({
        name: 'Browser Storage',
        status: 'fail',
        message: 'Local storage unavailable',
        details: 'Enable cookies and local storage'
      });
    }

    // Network Check
    results.push({
      name: 'Network Connection',
      status: navigator.onLine ? 'pass' : 'fail',
      message: navigator.onLine ? 'Connected' : 'Offline',
      details: navigator.onLine ? 'AI features available' : 'AI features unavailable'
    });

    // Supabase Connection Check
    try {
      const response = await fetch('https://mqfewevqghimmxqrnyiv.supabase.co/rest/v1/', {
        method: 'HEAD'
      });
      results.push({
        name: 'Database Connection',
        status: response.ok ? 'pass' : 'warning',
        message: response.ok ? 'Database accessible' : 'Database connection issues'
      });
    } catch {
      results.push({
        name: 'Database Connection',
        status: 'fail',
        message: 'Cannot reach database',
        details: 'Some features may not work'
      });
    }

    setChecks(results);
    setLastCheck(new Date());
    setIsChecking(false);
  };

  useEffect(() => {
    runSystemChecks();
  }, [associateInfo]);

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'pass': return <CheckCircle className="h-4 w-4 text-green-500" />;
      case 'fail': return <XCircle className="h-4 w-4 text-red-500" />;
      case 'warning': return <AlertTriangle className="h-4 w-4 text-yellow-500" />;
      default: return null;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pass': return 'bg-green-100 text-green-800';
      case 'fail': return 'bg-red-100 text-red-800';
      case 'warning': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const overallStatus = checks.some(c => c.status === 'fail') ? 'fail' : 
                      checks.some(c => c.status === 'warning') ? 'warning' : 'pass';

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            {getStatusIcon(overallStatus)}
            System Status
          </CardTitle>
          <div className="flex items-center gap-2">
            {lastCheck && (
              <span className="text-sm text-gray-500">
                Last check: {lastCheck.toLocaleTimeString()}
              </span>
            )}
            <Button 
              onClick={runSystemChecks} 
              disabled={isChecking} 
              size="sm" 
              variant="outline"
            >
              <RefreshCw className={`h-4 w-4 ${isChecking ? 'animate-spin' : ''}`} />
              Check
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {checks.map((check, index) => (
            <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
              <div className="flex items-center gap-3">
                {getStatusIcon(check.status)}
                <div>
                  <h4 className="font-medium">{check.name}</h4>
                  <p className="text-sm text-gray-600">{check.message}</p>
                  {check.details && (
                    <p className="text-xs text-gray-500 mt-1">{check.details}</p>
                  )}
                </div>
              </div>
              <Badge className={getStatusColor(check.status)}>
                {check.status.toUpperCase()}
              </Badge>
            </div>
          ))}
        </div>
        
        <div className="mt-4 p-3 border rounded-lg bg-gray-50">
          <div className="flex items-center gap-2">
            {getStatusIcon(overallStatus)}
            <span className="font-medium">
              Overall Status: {overallStatus === 'pass' ? 'All Systems Operational' : 
                              overallStatus === 'warning' ? 'Minor Issues Detected' : 
                              'Critical Issues Found'}
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}