import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { User, Heart, ShoppingBag, Settings, Award, Calendar } from 'lucide-react';

interface UserData {
  id: string;
  name: string;
  email: string;
  membershipTier: 'retail' | 'wellness' | 'associate';
  joinDate: string;
  avatar?: string;
  preferences: {
    language: string;
    region: string;
    notifications: boolean;
  };
}

interface SavedProtocol {
  id: string;
  name: string;
  createdDate: string;
  items: string[];
  totalValue: number;
  status: 'active' | 'completed' | 'paused';
}

interface OrderHistory {
  id: string;
  orderNumber: string;
  date: string;
  items: number;
  total: number;
  status: 'delivered' | 'shipped' | 'processing' | 'cancelled';
}

const UserProfile: React.FC = () => {
  const [userData, setUserData] = useState<UserData | null>(null);
  const [savedProtocols, setSavedProtocols] = useState<SavedProtocol[]>([]);
  const [orderHistory, setOrderHistory] = useState<OrderHistory[]>([]);
  const [activeTab, setActiveTab] = useState('profile');
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    // Load user data from backend/localStorage
    const mockUserData: UserData = {
      id: '1',
      name: 'Sarah Johnson',
      email: 'sarah@example.com',
      membershipTier: 'wellness',
      joinDate: '2023-06-15',
      avatar: '/placeholder.svg',
      preferences: {
        language: 'en',
        region: 'US',
        notifications: true
      }
    };

    const mockProtocols: SavedProtocol[] = [
      {
        id: '1',
        name: 'Evening Relaxation Protocol',
        createdDate: '2024-01-15',
        items: ['Lavender', 'Serenity Blend', 'Frankincense'],
        totalValue: 156.00,
        status: 'active'
      },
      {
        id: '2',
        name: 'Morning Energy Boost',
        createdDate: '2024-01-10',
        items: ['Peppermint', 'Wild Orange', 'Motivate Blend'],
        totalValue: 89.33,
        status: 'completed'
      }
    ];

    const mockOrders: OrderHistory[] = [
      {
        id: '1',
        orderNumber: 'ORD-2024-001',
        date: '2024-01-20',
        items: 3,
        total: 156.00,
        status: 'delivered'
      },
      {
        id: '2',
        orderNumber: 'ORD-2024-002',
        date: '2024-01-15',
        items: 2,
        total: 89.33,
        status: 'delivered'
      },
      {
        id: '3',
        orderNumber: 'ORD-2024-003',
        date: '2024-01-25',
        items: 1,
        total: 42.67,
        status: 'shipped'
      }
    ];

    setUserData(mockUserData);
    setSavedProtocols(mockProtocols);
    setOrderHistory(mockOrders);
  }, []);

  const getMembershipBadge = (tier: string) => {
    switch (tier) {
      case 'wellness':
        return <Badge className="bg-green-100 text-green-800">Wellness Advocate</Badge>;
      case 'associate':
        return <Badge className="bg-purple-100 text-purple-800">Business Associate</Badge>;
      default:
        return <Badge variant="outline">Retail Customer</Badge>;
    }
  };

  const getStatusBadge = (status: string) => {
    const statusColors = {
      active: 'bg-green-100 text-green-800',
      completed: 'bg-blue-100 text-blue-800',
      paused: 'bg-yellow-100 text-yellow-800',
      delivered: 'bg-green-100 text-green-800',
      shipped: 'bg-blue-100 text-blue-800',
      processing: 'bg-yellow-100 text-yellow-800',
      cancelled: 'bg-red-100 text-red-800'
    };
    return <Badge className={statusColors[status as keyof typeof statusColors]}>{status}</Badge>;
  };

  const totalSpent = orderHistory.reduce((sum, order) => sum + order.total, 0);
  const activeProtocolsCount = savedProtocols.filter(p => p.status === 'active').length;

  if (!userData) {
    return (
      <div className="max-w-4xl mx-auto text-center py-12">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto mb-4"></div>
        <h2 className="text-xl font-semibold mb-2">Loading Profile</h2>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
          My Profile
        </h1>
        <p className="text-gray-600">Manage your wellness journey and preferences</p>
      </div>

      {/* Profile Header */}
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center space-x-6">
            <Avatar className="h-20 w-20">
              <AvatarImage src={userData.avatar} alt={userData.name} />
              <AvatarFallback>{userData.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <h2 className="text-2xl font-bold">{userData.name}</h2>
              <p className="text-gray-600">{userData.email}</p>
              <div className="flex items-center gap-3 mt-2">
                {getMembershipBadge(userData.membershipTier)}
                <Badge variant="outline">
                  <Calendar className="h-3 w-3 mr-1" />
                  Member since {new Date(userData.joinDate).toLocaleDateString()}
                </Badge>
              </div>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-green-600">${totalSpent.toFixed(2)}</div>
              <p className="text-sm text-gray-600">Total Spent</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardContent className="p-4 text-center">
            <Heart className="h-8 w-8 text-pink-500 mx-auto mb-2" />
            <div className="text-2xl font-bold">{activeProtocolsCount}</div>
            <p className="text-sm text-gray-600">Active Protocols</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <ShoppingBag className="h-8 w-8 text-blue-500 mx-auto mb-2" />
            <div className="text-2xl font-bold">{orderHistory.length}</div>
            <p className="text-sm text-gray-600">Total Orders</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <Award className="h-8 w-8 text-yellow-500 mx-auto mb-2" />
            <div className="text-2xl font-bold">Gold</div>
            <p className="text-sm text-gray-600">Loyalty Status</p>
          </CardContent>
        </Card>
      </div>

      {/* Main Content Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="protocols">Protocols</TabsTrigger>
          <TabsTrigger value="orders">Orders</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>

        <TabsContent value="profile" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="h-5 w-5" />
                Personal Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" value={userData.name} disabled={!editing} />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" value={userData.email} disabled={!editing} />
                </div>
              </div>
              <div className="flex justify-end">
                <Button 
                  onClick={() => setEditing(!editing)}
                  variant={editing ? "default" : "outline"}
                >
                  {editing ? 'Save Changes' : 'Edit Profile'}
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="protocols" className="space-y-4">
          {savedProtocols.map((protocol) => (
            <Card key={protocol.id}>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold">{protocol.name}</h3>
                    <p className="text-sm text-gray-600">Created: {new Date(protocol.createdDate).toLocaleDateString()}</p>
                    <p className="text-sm text-gray-600">{protocol.items.join(', ')}</p>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-green-600">${protocol.totalValue.toFixed(2)}</div>
                    {getStatusBadge(protocol.status)}
                    <div className="mt-2 space-x-2">
                      <Button size="sm" variant="outline">Reorder</Button>
                      <Button size="sm">View Details</Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="orders" className="space-y-4">
          {orderHistory.map((order) => (
            <Card key={order.id}>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold">{order.orderNumber}</h3>
                    <p className="text-sm text-gray-600">{new Date(order.date).toLocaleDateString()}</p>
                    <p className="text-sm text-gray-600">{order.items} items</p>
                  </div>
                  <div className="text-right">
                    <div className="font-bold">${order.total.toFixed(2)}</div>
                    {getStatusBadge(order.status)}
                    <div className="mt-2 space-x-2">
                      <Button size="sm" variant="outline">Track Order</Button>
                      <Button size="sm">View Details</Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="settings" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Settings className="h-5 w-5" />
                Preferences
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label>Language</Label>
                  <p className="text-sm text-gray-600">{userData.preferences.language}</p>
                </div>
                <div>
                  <Label>Region</Label>
                  <p className="text-sm text-gray-600">{userData.preferences.region}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <input 
                  type="checkbox" 
                  id="notifications" 
                  checked={userData.preferences.notifications}
                  className="rounded"
                />
                <Label htmlFor="notifications">Email notifications</Label>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default UserProfile;