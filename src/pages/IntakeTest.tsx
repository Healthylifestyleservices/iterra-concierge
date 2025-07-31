import React from 'react';
import IntakeTestPage from '@/components/IntakeTestPage';
import IntakeSystemEnhanced from '@/components/IntakeSystemEnhanced';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TestTube, FormInput, Info } from 'lucide-react';

const IntakeTest: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 p-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Intake System Testing Hub
          </h1>
          <p className="text-gray-600 text-lg">
            Test and validate the wellness intake submission functionality
          </p>
        </div>

        <Tabs defaultValue="test" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="test" className="flex items-center gap-2">
              <TestTube className="h-4 w-4" />
              API Test
            </TabsTrigger>
            <TabsTrigger value="form" className="flex items-center gap-2">
              <FormInput className="h-4 w-4" />
              Live Form
            </TabsTrigger>
            <TabsTrigger value="info" className="flex items-center gap-2">
              <Info className="h-4 w-4" />
              Information
            </TabsTrigger>
          </TabsList>

          <TabsContent value="test" className="mt-6">
            <IntakeTestPage />
          </TabsContent>

          <TabsContent value="form" className="mt-6">
            <IntakeSystemEnhanced />
          </TabsContent>

          <TabsContent value="info" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>System Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <h3 className="font-semibold text-blue-800 mb-2">API Endpoint</h3>
                    <p className="text-sm text-blue-600 break-all">
                      https://mqfewevqghimmxqrnyiv.functions.supabase.co/hello_world
                    </p>
                  </div>
                  <div className="p-4 bg-green-50 rounded-lg">
                    <h3 className="font-semibold text-green-800 mb-2">Method</h3>
                    <p className="text-sm text-green-600">POST</p>
                  </div>
                </div>
                
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h3 className="font-semibold mb-2">Expected Request Format</h3>
                  <pre className="text-sm text-gray-600 overflow-x-auto">
{`{
  "user_id": "test-123",
  "intake_type": "Human",
  "details": {
    "goal": "Wellness",
    "age": 34,
    "gender": "Female"
  },
  "status": "active"
}`}
                  </pre>
                </div>

                <div className="p-4 bg-purple-50 rounded-lg">
                  <h3 className="font-semibold text-purple-800 mb-2">Features</h3>
                  <ul className="text-sm text-purple-600 space-y-1">
                    <li>• Direct API testing with sample data</li>
                    <li>• Interactive form with validation</li>
                    <li>• Real-time response display</li>
                    <li>• Error handling and debugging</li>
                    <li>• Supabase function integration</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default IntakeTest;