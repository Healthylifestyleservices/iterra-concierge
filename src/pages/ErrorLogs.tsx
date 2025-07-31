import React from 'react';
import { ErrorLogViewer } from '@/components/ErrorLogViewer';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function ErrorLogs() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 p-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-6">
          <Button 
            variant="outline" 
            onClick={() => navigate(-1)}
            className="mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Error Logs Dashboard
          </h1>
          <p className="text-gray-600">
            Monitor application errors and system health
          </p>
        </div>
        
        <ErrorLogViewer />
      </div>
    </div>
  );
}