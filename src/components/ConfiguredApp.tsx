import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Settings, Database, Key, ExternalLink, AlertTriangle, XCircle, RefreshCw } from 'lucide-react';
import SimpleApiKeyDemo from './SimpleApiKeyDemo';
import { apiKeyService } from '@/lib/apiKeyService';
import { useAppContext } from '@/contexts/AppContext';
import { WellnessHub } from './WellnessHub';

// Inline diagnostics to avoid import issues
const QuickDiagnostics = () => {
  const { associateInfo } = useAppContext();
  const [issues, setIssues] = useState<string[]>([]);
  
  useEffect(() => {
    const foundIssues: string[] = [];
    const apiStatus = apiKeyService.getConfigurationStatus();
    
    if (!apiStatus.isReady) foundIssues.push('Missing required API keys');
    if (!associateInfo?.associateId) foundIssues.push('No associate ID configured');
    if (!navigator.onLine) foundIssues.push('No internet connection');
    
    setIssues(foundIssues);
  }, [associateInfo]);
  
  if (issues.length === 0) {
    return (
      <Alert className="bg-green-50 border-green-200">
        <CheckCircle className="h-4 w-4 text-green-500" />
        <AlertDescription>All systems operational!</AlertDescription>
      </Alert>
    );
  }
  
  return (
    <Alert className="bg-red-50 border-red-200">
      <XCircle className="h-4 w-4 text-red-500" />
      <AlertDescription>
        <strong>Issues found:</strong>
        <ul className="list-disc list-inside mt-2">
          {issues.map((issue, i) => <li key={i}>{issue}</li>)}
        </ul>
      </AlertDescription>
    </Alert>
  );
};

const ConfiguredApp = () => {
  const { associateInfo } = useAppContext();
  const [apiStatus, setApiStatus] = useState({ configured: 0, total: 4, isReady: false });
  const [showDiagnostics, setShowDiagnostics] = useState(false);
  const [appReady, setAppReady] = useState(false);
  
  useEffect(() => {
    const updateStatus = () => {
      const status = apiKeyService.getConfigurationStatus();
      setApiStatus({ configured: status.configured, total: status.total, isReady: status.isReady });
      setAppReady(status.isReady);
    };
    updateStatus();
    const interval = setInterval(updateStatus, 2000);
    return () => clearInterval(interval);
  }, [associateInfo]);
  
  // Show main app if ready
  if (appReady) {
    return <WellnessHub />;
  }
  
  const configs = [
    { name: 'Supabase Database', status: 'configured', icon: <Database className="h-4 w-4" /> },
    { name: 'Associate Info', status: associateInfo?.associateId ? 'configured' : 'pending', icon: <Key className="h-4 w-4" /> },
    { name: 'API Keys', status: apiStatus.isReady ? 'configured' : 'pending', note: `${apiStatus.configured}/${apiStatus.total}`, icon: <Settings className="h-4 w-4" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 p-4">
      <div className="max-w-4xl mx-auto space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-3xl text-center text-green-600 flex items-center justify-center gap-2">
              <CheckCircle className="h-8 w-8" />
              iTERRA Wellness Hub - Setup
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Alert className={`mb-6 ${apiStatus.isReady ? 'bg-green-50 border-green-200' : 'bg-orange-50 border-orange-200'}`}>
              {apiStatus.isReady ? <CheckCircle className="h-4 w-4" /> : <AlertTriangle className="h-4 w-4" />}
              <AlertDescription>
                <strong>{apiStatus.isReady ? 'READY:' : 'SETUP REQUIRED:'}</strong> {apiStatus.isReady ? 'App configured and ready!' : 'Configure API keys below.'}
              </AlertDescription>
            </Alert>

            <div className="space-y-4 mb-6">
              {configs.map((config, index) => (
                <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center gap-3">
                    {config.icon}
                    <div>
                      <h3 className="font-semibold">{config.name}</h3>
                      {config.note && <p className="text-sm text-gray-500">{config.note}</p>}
                    </div>
                  </div>
                  <Badge variant={config.status === 'configured' ? 'default' : 'secondary'} className={config.status === 'configured' ? 'bg-green-100 text-green-800' : ''}>
                    {config.status === 'configured' ? '✓ Ready' : '⏳ Pending'}
                  </Badge>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <Button onClick={() => setShowDiagnostics(!showDiagnostics)} variant="outline" className="flex items-center gap-2">
                <Settings className="h-4 w-4" />
                {showDiagnostics ? 'Hide' : 'Show'} Diagnostics
              </Button>
              <Button className={`flex items-center gap-2 ${apiStatus.isReady ? 'bg-green-600 hover:bg-green-700' : 'bg-gray-400'}`} disabled={!apiStatus.isReady} onClick={() => setAppReady(true)}>
                <ExternalLink className="h-4 w-4" />
                {apiStatus.isReady ? 'Launch App' : 'Setup Required'}
              </Button>
            </div>
            
            {showDiagnostics && <QuickDiagnostics />}
          </CardContent>
        </Card>

        <SimpleApiKeyDemo onUpdate={() => {}} />
      </div>
    </div>
  );
};

export default ConfiguredApp;