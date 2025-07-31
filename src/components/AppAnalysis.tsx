import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, XCircle, AlertTriangle, Info } from "lucide-react";

export default function AppAnalysis() {
  return (
    <div className="p-6 max-w-6xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold mb-6">iTERRA App Analysis</h1>
      
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Info className="w-5 h-5" />
            What is iTERRA?
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            iTERRA is a comprehensive wellness education hub and AI-powered essential oils platform 
            designed for doTERRA associates. It provides personalized wellness consultations, 
            product recommendations, educational content, and business tools through an associate-branded experience.
          </p>
        </CardContent>
      </Card>

      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-green-600">
              <CheckCircle className="w-5 h-5" />
              What It CAN Do
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="space-y-2">
              <Badge variant="secondary">AI Wellness Assistant</Badge>
              <p className="text-sm">Provides personalized wellness recommendations via AI chatbot</p>
            </div>
            <div className="space-y-2">
              <Badge variant="secondary">Product Catalog</Badge>
              <p className="text-sm">Comprehensive database of essential oils, blends, and supplements</p>
            </div>
            <div className="space-y-2">
              <Badge variant="secondary">Educational Content</Badge>
              <p className="text-sm">Extensive library of wellness articles, recipes, and guides</p>
            </div>
            <div className="space-y-2">
              <Badge variant="secondary">Associate Branding</Badge>
              <p className="text-sm">Personalized URLs and branding for doTERRA associates</p>
            </div>
            <div className="space-y-2">
              <Badge variant="secondary">Business Tools</Badge>
              <p className="text-sm">Marketing materials, social media content, and business analytics</p>
            </div>
            <div className="space-y-2">
              <Badge variant="secondary">Secure Access</Badge>
              <p className="text-sm">Payment validation and device fingerprinting for access control</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-red-600">
              <XCircle className="w-5 h-5" />
              What It CANNOT Do
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="space-y-2">
              <Badge variant="destructive">No E-commerce</Badge>
              <p className="text-sm">Cannot process payments or handle product purchases directly</p>
            </div>
            <div className="space-y-2">
              <Badge variant="destructive">No Medical Advice</Badge>
              <p className="text-sm">Cannot provide medical diagnoses or replace professional healthcare</p>
            </div>
            <div className="space-y-2">
              <Badge variant="destructive">No Inventory Management</Badge>
              <p className="text-sm">Cannot track real-time product availability or stock levels</p>
            </div>
            <div className="space-y-2">
              <Badge variant="destructive">No CRM Features</Badge>
              <p className="text-sm">Cannot manage customer relationships or sales pipelines</p>
            </div>
            <div className="space-y-2">
              <Badge variant="destructive">No Offline Access</Badge>
              <p className="text-sm">Requires internet connection for all functionality</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-orange-600">
            <AlertTriangle className="w-5 h-5" />
            Issues & Missing Features
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <h4 className="font-semibold text-red-600">Critical Issues</h4>
              <ul className="space-y-1 text-sm">
                <li>• Hardcoded Supabase function IDs may break</li>
                <li>• Basic device fingerprinting is easily bypassed</li>
                <li>• No graceful error handling for network failures</li>
                <li>• Missing proper TypeScript types in components</li>
                <li>• Payment validation function may not exist</li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold text-orange-600">Missing Features</h4>
              <ul className="space-y-1 text-sm">
                <li>• Real-time chat support</li>
                <li>• Push notifications</li>
                <li>• Advanced analytics dashboard</li>
                <li>• Mobile app version</li>
                <li>• Integration with doTERRA's official systems</li>
                <li>• Multi-language support</li>
                <li>• Advanced search and filtering</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Technical Architecture</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <h4 className="font-semibold mb-2">Frontend</h4>
              <ul className="text-sm space-y-1">
                <li>• React + TypeScript</li>
                <li>• Tailwind CSS</li>
                <li>• Shadcn/ui components</li>
                <li>• React Router</li>
                <li>• Tanstack Query</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Backend</h4>
              <ul className="text-sm space-y-1">
                <li>• Supabase (PostgreSQL)</li>
                <li>• Edge Functions</li>
                <li>• Authentication</li>
                <li>• Real-time subscriptions</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Data</h4>
              <ul className="text-sm space-y-1">
                <li>• Extensive product catalogs</li>
                <li>• Recipe databases</li>
                <li>• Educational content</li>
                <li>• Business tools library</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}