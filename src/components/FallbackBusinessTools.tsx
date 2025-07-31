import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Download, FileText, Image, Sparkles } from 'lucide-react';
import { fetchBusinessTools, BusinessContent } from '@/lib/doterra-client';

const FallbackBusinessTools: React.FC = () => {
  const [content, setContent] = useState<BusinessContent | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadContent = async () => {
      try {
        setLoading(true);
        const data = await fetchBusinessTools();
        setContent(data);
      } catch (err) {
        setError('Failed to load business tools');
      } finally {
        setLoading(false);
      }
    };

    loadContent();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center p-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-600"></div>
        <span className="ml-2 text-gray-600">Loading business tools...</span>
      </div>
    );
  }

  if (error || !content) {
    return (
      <div className="text-center p-8">
        <p className="text-red-600 mb-4">{error || 'No content available'}</p>
        <Button onClick={() => window.location.reload()}>
          Try Again
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-amber-500 to-rose-500 bg-clip-text text-transparent">
          ✨ Business Resources Hub
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Self-contained business tools with automatic fallback - no setup required
        </p>
        <Badge variant="outline" className="mt-2">
          <Sparkles className="h-3 w-3 mr-1" />
          100% Self-Contained
        </Badge>
      </div>

      {/* Training Materials */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="h-5 w-5 text-blue-600" />
            Training Materials
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {content.training.map((item, index) => (
              <div key={index} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="flex items-start gap-3">
                  <img 
                    src={item.thumbnail} 
                    alt="Sacred geometry" 
                    className="w-12 h-12 text-amber-500"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-800 mb-2">{item.title}</h3>
                    <Button 
                      size="sm" 
                      className="bg-blue-600 hover:bg-blue-700"
                      onClick={() => window.open(item.pdfUrl, '_blank')}
                    >
                      <Download className="h-4 w-4 mr-1" />
                      Download PDF
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Templates */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Image className="h-5 w-5 text-rose-600" />
            Design Templates
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {content.templates.map((item, index) => (
              <div key={index} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">{item.name}</h3>
                    <p className="text-sm text-gray-600">
                      {item.downloadUrl.includes('.canva') ? 'Canva Template' : 'PowerPoint Template'}
                    </p>
                  </div>
                  <Button 
                    size="sm" 
                    variant="outline"
                    className="border-rose-600 text-rose-600 hover:bg-rose-50"
                    onClick={() => window.open(item.downloadUrl, '_blank')}
                  >
                    <Download className="h-4 w-4 mr-1" />
                    Get Template
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Status Info */}
      <Card className="bg-green-50 border-green-200">
        <CardContent className="pt-6">
          <div className="flex items-center gap-2 text-green-800">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="font-medium">System Status: Operational</span>
          </div>
          <p className="text-sm text-green-700 mt-1">
            All resources loaded successfully with automatic fallback protection
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default FallbackBusinessTools;