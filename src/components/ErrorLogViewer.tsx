import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { AlertTriangle, Clock, Globe, User } from 'lucide-react';

interface ErrorLog {
  id: string;
  timestamp: string;
  route: string;
  error_type: string;
  stack?: string;
  user_agent: string;
  environment: string;
  custom_metadata: {
    component?: string;
    severity: 'low' | 'medium' | 'high';
  };
}

const SUPABASE_CONFIG = {
  url: 'https://mqfewevqghimmxqrnyiv.supabase.co',
  anonKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1xZmV3ZXZxZ2hpbW14cXJueWl2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI3MTIwNjcsImV4cCI6MjA2ODI4ODA2N30.HuaGcuncl7UaXjwT2ObIQgYCwksj6KLvDSagW-GyIao'
};

export function ErrorLogViewer() {
  const [logs, setLogs] = useState<ErrorLog[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchErrorLogs();
  }, []);

  const fetchErrorLogs = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${SUPABASE_CONFIG.url}/rest/v1/error_logs?order=timestamp.desc&limit=50`, {
        headers: {
          'apikey': SUPABASE_CONFIG.anonKey,
          'Authorization': `Bearer ${SUPABASE_CONFIG.anonKey}`
        }
      });

      if (!response.ok) {
        throw new Error('Failed to fetch error logs');
      }

      const data = await response.json();
      setLogs(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error');
    } finally {
      setLoading(false);
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'high': return 'bg-red-100 text-red-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  if (loading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Error Logs</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Loading error logs...</p>
        </CardContent>
      </Card>
    );
  }

  if (error) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Error Logs</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-red-600">Error: {error}</p>
          <Button onClick={fetchErrorLogs} className="mt-2">Retry</Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="flex items-center gap-2">
          <AlertTriangle className="w-5 h-5" />
          Error Logs ({logs.length})
        </CardTitle>
        <Button onClick={fetchErrorLogs} size="sm">Refresh</Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-4 max-h-96 overflow-y-auto">
          {logs.length === 0 ? (
            <p className="text-gray-500">No error logs found.</p>
          ) : (
            logs.map((log) => (
              <div key={log.id} className="border rounded-lg p-3 space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Badge className={getSeverityColor(log.custom_metadata.severity)}>
                      {log.custom_metadata.severity}
                    </Badge>
                    <span className="font-medium">{log.error_type}</span>
                  </div>
                  <div className="flex items-center gap-1 text-sm text-gray-500">
                    <Clock className="w-4 h-4" />
                    {new Date(log.timestamp).toLocaleString()}
                  </div>
                </div>
                
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <Globe className="w-4 h-4" />
                    {log.route}
                  </div>
                  <div className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    {log.custom_metadata.component || 'Unknown'}
                  </div>
                  <Badge variant="outline">{log.environment}</Badge>
                </div>
                
                {log.stack && (
                  <details className="text-xs">
                    <summary className="cursor-pointer text-gray-600 hover:text-gray-800">
                      Stack trace
                    </summary>
                    <pre className="mt-2 p-2 bg-gray-50 rounded text-xs overflow-x-auto">
                      {log.stack}
                    </pre>
                  </details>
                )}
              </div>
            ))
          )}
        </div>
      </CardContent>
    </Card>
  );
}