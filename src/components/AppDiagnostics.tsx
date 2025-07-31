import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { CheckCircle, XCircle, AlertCircle, Code, Users } from 'lucide-react';
import { SignupDemo } from './SignupDemo';

export function AppDiagnostics() {
  const [activeTab, setActiveTab] = useState<'overview' | 'signup' | 'features'>('overview');

  const workingFeatures = [
    '✅ Welcome screen with iTERRA™ branding',
    '✅ 7 wellness categories (including Pets & Home)',
    '✅ Category navigation with back buttons', 
    '✅ Floating assistant chat button',
    '✅ Signup functionality with Supabase Auth',
    '✅ External API signup option',
    '✅ Form validation and error handling',
    '✅ User authentication state management',
    '✅ Responsive design with Tailwind CSS'
  ];

  const missingFeatures = [
    '⚠️ Real AI chat functionality',
    '⚠️ Product catalogs and shopping',
    '⚠️ Payment processing',
    '⚠️ Business tools library',
    '⚠️ Educational content database',
    '⚠️ Recipe database with search',
    '⚠️ Oil safety information',
    '⚠️ User profile management'
  ];

  const implementedComponents = [
    'iTerraWellnessApp', 'WellnessOptions', 'CategoryView', 'AssistantChat',
    'SignupForm', 'AuthModal', 'SignupDemo', 'AppDiagnostics'
  ];

  return (
    <div className="max-w-6xl mx-auto p-4 space-y-6">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">iTERRA™ App Diagnostics</h1>
        <p className="text-gray-600">Current status and implementation details</p>
      </div>

      {/* Navigation Tabs */}
      <div className="flex gap-2 justify-center mb-6">
        <Button
          variant={activeTab === 'overview' ? 'default' : 'outline'}
          onClick={() => setActiveTab('overview')}
          className="flex items-center gap-2"
        >
          <CheckCircle className="w-4 h-4" />
          Overview
        </Button>
        <Button
          variant={activeTab === 'signup' ? 'default' : 'outline'}
          onClick={() => setActiveTab('signup')}
          className="flex items-center gap-2"
        >
          <Users className="w-4 h-4" />
          Signup Demo
        </Button>
        <Button
          variant={activeTab === 'features' ? 'default' : 'outline'}
          onClick={() => setActiveTab('features')}
          className="flex items-center gap-2"
        >
          <Code className="w-4 h-4" />
          Features
        </Button>
      </div>

      {activeTab === 'overview' && (
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-green-700">
                <CheckCircle className="w-5 h-5" />
                Working Features
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {workingFeatures.map((feature, index) => (
                  <div key={index} className="text-sm text-green-700">
                    {feature}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-amber-700">
                <AlertCircle className="w-5 h-5" />
                Missing Features
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {missingFeatures.map((feature, index) => (
                  <div key={index} className="text-sm text-amber-700">
                    {feature}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {activeTab === 'signup' && (
        <SignupDemo />
      )}

      {activeTab === 'features' && (
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Implementation Status</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium mb-2">Core Components:</h4>
                  <div className="flex flex-wrap gap-1">
                    {implementedComponents.map((comp) => (
                      <Badge key={comp} variant="secondary" className="text-xs">
                        {comp}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Authentication:</h4>
                  <div className="space-y-1 text-sm">
                    <div className="text-green-700">✅ Supabase Auth Integration</div>
                    <div className="text-green-700">✅ External API Support</div>
                    <div className="text-green-700">✅ Form Validation</div>
                    <div className="text-green-700">✅ Error Handling</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Signup Function Implementation</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-gray-100 p-4 rounded-lg">
                <pre className="text-sm font-mono text-gray-800 whitespace-pre-wrap">
{`// Your requested signup function is implemented as:

async function signUpUser(email, password) {
  const response = await fetch("https://YOUR_NGROK_OR_COLAB_URL/signup", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password })
  });
  const result = await response.json();
  if (result.status === "success") {
    console.log("✅ Signup successful:", result);
  } else {
    console.error("❌ Signup error:", result.message);
  }
}

// Plus Supabase Auth integration for production use`}
                </pre>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      <div className="text-center text-sm text-gray-500 mt-8">
        <p>💡 <strong>Communication Tip:</strong> Be specific about features you want added, mention if you want to keep existing functionality, and specify priority vs nice-to-have features.</p>
      </div>
    </div>
  );
}