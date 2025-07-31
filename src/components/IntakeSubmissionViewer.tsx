import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Users, Calendar, Mail, User, MessageSquare, Heart } from 'lucide-react';
import { IntakeSubmissionService, IntakeSubmission } from './IntakeSubmissionService';

const IntakeSubmissionViewer: React.FC = () => {
  const [submissions, setSubmissions] = useState<IntakeSubmission[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadSubmissions();
  }, []);

  const loadSubmissions = async () => {
    try {
      const data = await IntakeSubmissionService.getSubmissions();
      setSubmissions(data);
    } catch (error) {
      console.error('Error loading submissions:', error);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <div className="text-center">Loading submissions...</div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
          Intake Submissions
        </h1>
        <p className="text-gray-600 flex items-center justify-center gap-2">
          <Users className="h-4 w-4" />
          {submissions.length} total submissions
        </p>
      </div>

      {submissions.length === 0 ? (
        <Card>
          <CardContent className="text-center py-12">
            <MessageSquare className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-500">No submissions yet</p>
            <Button 
              onClick={() => window.location.href = '/intake-new'} 
              className="mt-4"
              variant="outline"
            >
              Create First Submission
            </Button>
          </CardContent>
        </Card>
      ) : (
        <ScrollArea className="h-[600px]">
          <div className="space-y-4">
            {submissions.map((submission) => (
              <Card key={submission.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="flex items-center gap-2">
                      <User className="h-5 w-5 text-blue-500" />
                      {submission.name || 'Anonymous'}
                    </CardTitle>
                    <div className="flex items-center gap-2">
                      {submission.pet_owner && (
                        <Badge variant="secondary" className="bg-green-100 text-green-700">
                          <Heart className="h-3 w-3 mr-1" />
                          Pet Owner
                        </Badge>
                      )}
                      <Badge variant="outline" className="text-xs">
                        <Calendar className="h-3 w-3 mr-1" />
                        {submission.created_at ? formatDate(submission.created_at) : 'Unknown date'}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  {submission.email && (
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Mail className="h-4 w-4" />
                      {submission.email}
                    </div>
                  )}
                  
                  {submission.gender && (
                    <div className="text-sm">
                      <span className="font-medium">Gender:</span> {submission.gender}
                    </div>
                  )}
                  
                  {submission.concerns && (
                    <div>
                      <div className="font-medium text-sm mb-1">Wellness Concerns & Goals:</div>
                      <div className="text-sm text-gray-700 bg-gray-50 p-3 rounded-lg">
                        {submission.concerns}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </ScrollArea>
      )}
      
      <div className="text-center">
        <Button onClick={loadSubmissions} variant="outline">
          Refresh Submissions
        </Button>
      </div>
    </div>
  );
};

export default IntakeSubmissionViewer;