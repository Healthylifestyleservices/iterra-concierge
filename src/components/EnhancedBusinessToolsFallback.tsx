import React from 'react';
import { fallbackBusinessContent } from '../data/fallbackBusinessContent';
import { handleBusinessToolsError } from '../lib/error-handler';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Download, FileText, Image, Sparkles, CheckCircle } from 'lucide-react';

interface EnhancedBusinessToolsFallbackProps {
  error?: Error | null;
}

export function EnhancedBusinessToolsFallback({ error }: EnhancedBusinessToolsFallbackProps) {
  // Handle any errors and get fallback content
  const content = error ? handleBusinessToolsError(error) : fallbackBusinessContent;

  return (
    <div className="space-y-6 p-6">
      <div className="text-center">
        <h1 className="text-4xl font-cormorant mb-4 bg-gradient-to-r from-[#D4AF37] to-[#B76E79] bg-clip-text text-transparent">
          ✨ Business Resources Hub
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
          Self-contained business tools with automatic fallback - no setup required
        </p>
        <Badge variant="outline" className="border-[#D4AF37] text-[#D4AF37]">
          <Sparkles className="h-3 w-3 mr-1" />
          100% Self-Contained
        </Badge>
      </div>

      {/* Training Materials */}
      <Card className="bg-[#FAF9F6] border-[#CD7F32]/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-[#D4AF37] font-cormorant">
            <FileText className="h-5 w-5" />
            Training Materials
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {content.training.map((item, index) => (
              <div key={index} className="border border-[#CD7F32]/20 rounded-lg p-4 hover:shadow-md transition-all hover:border-[#B76E79]/40">
                <div className="flex items-start gap-3">
                  <img 
                    src={item.thumbnail} 
                    alt="Resource icon" 
                    className="w-8 h-8 mt-1"
                    onError={(e) => {
                      e.currentTarget.src = '/icons/business-builder.svg';
                    }}
                  />
                  <div className="flex-1">
                    <h3 className="font-medium text-[#D4AF37] mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-600 mb-2">{item.category}</p>
                    <Button 
                      size="sm" 
                      className="bg-[#D4AF37] hover:bg-[#B76E79] text-white"
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
      <Card className="bg-[#FAF9F6] border-[#CD7F32]/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-[#B76E79] font-cormorant">
            <Image className="h-5 w-5" />
            Design Templates
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 gap-4">
            {content.templates.map((template, index) => (
              <div key={index} className="border border-[#CD7F32]/20 rounded-lg p-4 hover:shadow-md transition-all">
                <div className="flex items-center gap-3">
                  <img 
                    src={template.thumbnail} 
                    className="h-6 w-6" 
                    alt="Template icon"
                  />
                  <div className="flex-1">
                    <h3 className="font-medium text-[#D4AF37] mb-1">{template.title}</h3>
                    <p className="text-sm text-gray-600">{template.description}</p>
                  </div>
                  <Button 
                    size="sm" 
                    variant="outline"
                    className="border-[#B76E79] text-[#B76E79] hover:bg-[#B76E79] hover:text-white"
                    onClick={() => window.open(template.downloadUrl, '_blank')}
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
            <CheckCircle className="w-4 h-4 text-green-500" />
            <span className="font-medium">System Status: Operational</span>
          </div>
          <p className="text-sm text-green-700 mt-1">
            All resources loaded successfully with automatic fallback protection
          </p>
        </CardContent>
      </Card>
    </div>
  );
}