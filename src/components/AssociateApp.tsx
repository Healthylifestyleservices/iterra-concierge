import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { User, DollarSign, TrendingUp, Users } from 'lucide-react';

const AssociateApp = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 p-4">
      <div className="max-w-6xl mx-auto">
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-3xl text-center text-green-600">
              dōTERRA Associate Dashboard
            </CardTitle>
            <p className="text-center text-gray-600">
              Manage your essential oils business with iTerra
            </p>
          </CardHeader>
          <CardContent>
            <Alert className="mb-6 bg-blue-50 border-blue-200">
              <User className="h-4 w-4" />
              <AlertDescription>
                <strong>Welcome!</strong> Your associate tools and business management hub.
              </AlertDescription>
            </Alert>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              <Card>
                <CardContent className="p-4 text-center">
                  <DollarSign className="h-8 w-8 mx-auto mb-2 text-green-600" />
                  <h3 className="font-semibold">Monthly Sales</h3>
                  <p className="text-2xl font-bold text-green-600">$2,450</p>
                  <Badge variant="secondary">+15% vs last month</Badge>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-4 text-center">
                  <Users className="h-8 w-8 mx-auto mb-2 text-blue-600" />
                  <h3 className="font-semibold">Team Members</h3>
                  <p className="text-2xl font-bold text-blue-600">12</p>
                  <Badge variant="secondary">3 new this month</Badge>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-4 text-center">
                  <TrendingUp className="h-8 w-8 mx-auto mb-2 text-purple-600" />
                  <h3 className="font-semibold">Rank</h3>
                  <p className="text-2xl font-bold text-purple-600">Elite</p>
                  <Badge variant="secondary">Next: Premier</Badge>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-4 text-center">
                  <DollarSign className="h-8 w-8 mx-auto mb-2 text-orange-600" />
                  <h3 className="font-semibold">Commission</h3>
                  <p className="text-2xl font-bold text-orange-600">$890</p>
                  <Badge variant="secondary">This month</Badge>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button className="w-full" variant="outline">
                    Share Product Links
                  </Button>
                  <Button className="w-full" variant="outline">
                    View Business Tools
                  </Button>
                  <Button className="w-full" variant="outline">
                    Track Orders
                  </Button>
                  <Button className="w-full" variant="outline">
                    Team Training
                  </Button>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Recent Activity</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span>New customer order</span>
                      <span className="text-gray-500">2 hours ago</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Team member enrolled</span>
                      <span className="text-gray-500">1 day ago</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Commission earned</span>
                      <span className="text-gray-500">3 days ago</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AssociateApp;
export { AssociateApp };