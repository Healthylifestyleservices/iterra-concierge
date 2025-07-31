import React from 'react';
import { KeyRotationInstructions } from '@/components/KeyRotationInstructions';
import { SupabaseKeyRotationManager } from '@/components/SupabaseKeyRotationManager';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Shield, Terminal, Settings } from 'lucide-react';

export function KeyRotation() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2 flex items-center justify-center gap-3">
            <Shield className="w-8 h-8 text-blue-600" />
            Security Management
          </h1>
          <p className="text-gray-600 text-lg">
            Manage and rotate your Supabase authentication keys securely
          </p>
        </div>

        <Tabs defaultValue="instructions" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="instructions" className="flex items-center gap-2">
              <Terminal className="w-4 h-4" />
              CLI Instructions
            </TabsTrigger>
            <TabsTrigger value="manager" className="flex items-center gap-2">
              <Settings className="w-4 h-4" />
              Key Manager
            </TabsTrigger>
          </TabsList>

          <TabsContent value="instructions">
            <KeyRotationInstructions />
          </TabsContent>

          <TabsContent value="manager">
            <SupabaseKeyRotationManager />
          </TabsContent>
        </Tabs>

        <div className="mt-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-sm border">
            <Shield className="w-4 h-4 text-green-600" />
            <span className="text-sm text-gray-600">
              Secure key rotation for enhanced application security
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}