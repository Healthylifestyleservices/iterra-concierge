import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Info, Lock, Unlock, DollarSign, Link } from 'lucide-react';

const AssociateLinkExplanation: React.FC = () => {
  return (
    <Card className="max-w-4xl mx-auto mt-8 mb-8">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-2xl">
          <Info className="h-6 w-6 text-blue-500" />
          Why doTERRA Links Don't Work Yet
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <Alert>
          <Lock className="h-4 w-4" />
          <AlertDescription className="text-lg">
            The doTERRA product links in this application are currently placeholder links that won't direct to actual products.
          </AlertDescription>
        </Alert>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold flex items-center gap-2">
              <Lock className="h-5 w-5 text-red-500" />
              Current Status (Free Version)
            </h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Links go to generic doTERRA site</li>
              <li>• No personalized associate information</li>
              <li>• Products not directly accessible</li>
              <li>• No commission tracking</li>
              <li>• Limited functionality</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold flex items-center gap-2">
              <Unlock className="h-5 w-5 text-green-500" />
              Paid Associate Version
            </h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Direct links to specific products</li>
              <li>• Your associate ID embedded</li>
              <li>• Commission tracking enabled</li>
              <li>• Personalized customer experience</li>
              <li>• Full doTERRA integration</li>
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <DollarSign className="h-5 w-5 text-green-600" />
            How It Works When You Subscribe
          </h3>
          <div className="space-y-3">
            <p className="flex items-start gap-2">
              <span className="font-semibold text-blue-600">1.</span>
              Your doTERRA associate ID gets integrated into the system
            </p>
            <p className="flex items-start gap-2">
              <span className="font-semibold text-blue-600">2.</span>
              All product links automatically include your associate information
            </p>
            <p className="flex items-start gap-2">
              <span className="font-semibold text-blue-600">3.</span>
              Customers clicking links are directed to products with your ID attached
            </p>
            <p className="flex items-start gap-2">
              <span className="font-semibold text-blue-600">4.</span>
              You earn commissions on all sales generated through the app
            </p>
            <p className="flex items-start gap-2">
              <span className="font-semibold text-blue-600">5.</span>
              Full tracking and analytics for your business growth
            </p>
          </div>
        </div>

        <Alert>
          <Link className="h-4 w-4" />
          <AlertDescription>
            <strong>Ready to activate your associate links?</strong> Contact us to upgrade to the full associate version and start earning commissions on every product recommendation!
          </AlertDescription>
        </Alert>
      </CardContent>
    </Card>
  );
};

export default AssociateLinkExplanation;