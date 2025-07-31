import React, { useState } from 'react';
import { databaseService, chatService, authService } from '@/lib/supabase';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';

const DatabaseIntegrationDemo: React.FC = () => {
  const [userId, setUserId] = useState('demo-user-123');
  const [profileData, setProfileData] = useState({
    first_name: 'Demo',
    last_name: 'User',
    email: 'demo@example.com',
    phone: '555-0123'
  });
  const [protocolData, setProtocolData] = useState({
    title: 'Morning Wellness Protocol',
    description: 'Essential oils for morning energy',
    instructions: 'Apply 2 drops of peppermint to temples'
  });
  const [chatMessage, setChatMessage] = useState('What oils help with stress?');
  const [results, setResults] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  const addResult = (result: string) => {
    setResults(prev => [...prev, `${new Date().toLocaleTimeString()}: ${result}`]);
  };

  const testCreateProfile = async () => {
    setLoading(true);
    addResult('Creating user profile...');
    
    try {
      const { data, error } = await databaseService.createUserProfile(userId, profileData);
      if (error) {
        addResult(`Profile creation failed: ${error.message}`);
      } else {
        addResult(`Profile created successfully: ${data?.first_name} ${data?.last_name}`);
      }
    } catch (error: any) {
      addResult(`Profile creation error: ${error.message}`);
    }
    
    setLoading(false);
  };

  const testGetProfile = async () => {
    setLoading(true);
    addResult('Retrieving user profile...');
    
    try {
      const { data, error } = await databaseService.getUserProfile(userId);
      if (error) {
        addResult(`Profile retrieval failed: ${error.message}`);
      } else if (data) {
        addResult(`Profile found: ${data.first_name} ${data.last_name} (${data.email})`);
      } else {
        addResult('No profile found for this user');
      }
    } catch (error: any) {
      addResult(`Profile retrieval error: ${error.message}`);
    }
    
    setLoading(false);
  };

  const testSaveProtocol = async () => {
    setLoading(true);
    addResult('Saving wellness protocol...');
    
    try {
      const { data, error } = await databaseService.saveWellnessProtocol(userId, protocolData);
      if (error) {
        addResult(`Protocol save failed: ${error.message}`);
      } else {
        addResult(`Protocol saved: ${data?.title}`);
      }
    } catch (error: any) {
      addResult(`Protocol save error: ${error.message}`);
    }
    
    setLoading(false);
  };

  const testChatHistory = async () => {
    setLoading(true);
    addResult('Saving chat message...');
    
    try {
      const response = 'Lavender and frankincense are excellent for stress relief.';
      const { data, error } = await chatService.saveChatMessage(userId, chatMessage, response);
      if (error) {
        addResult(`Chat save failed: ${error.message}`);
      } else {
        addResult(`Chat message saved successfully`);
      }
    } catch (error: any) {
      addResult(`Chat save error: ${error.message}`);
    }
    
    setLoading(false);
  };

  const testFavorites = async () => {
    setLoading(true);
    addResult('Adding to favorites...');
    
    try {
      const { data, error } = await chatService.addToFavorites(userId, 'lavender-001', 'Lavender Essential Oil');
      if (error) {
        addResult(`Favorites add failed: ${error.message}`);
      } else {
        addResult(`Added to favorites: Lavender Essential Oil`);
      }
    } catch (error: any) {
      addResult(`Favorites error: ${error.message}`);
    }
    
    setLoading(false);
  };

  const clearResults = () => {
    setResults([]);
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Database Integration Demo</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">User ID:</label>
            <Input 
              value={userId} 
              onChange={(e) => setUserId(e.target.value)}
              placeholder="Enter user ID"
            />
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">First Name:</label>
              <Input 
                value={profileData.first_name} 
                onChange={(e) => setProfileData({...profileData, first_name: e.target.value})}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Last Name:</label>
              <Input 
                value={profileData.last_name} 
                onChange={(e) => setProfileData({...profileData, last_name: e.target.value})}
              />
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-1">Chat Message:</label>
            <Textarea 
              value={chatMessage} 
              onChange={(e) => setChatMessage(e.target.value)}
              placeholder="Enter a chat message to test"
            />
          </div>
          
          <div className="flex gap-2 flex-wrap">
            <Button onClick={testCreateProfile} disabled={loading}>
              Create Profile
            </Button>
            <Button onClick={testGetProfile} disabled={loading}>
              Get Profile
            </Button>
            <Button onClick={testSaveProtocol} disabled={loading}>
              Save Protocol
            </Button>
            <Button onClick={testChatHistory} disabled={loading}>
              Save Chat
            </Button>
            <Button onClick={testFavorites} disabled={loading}>
              Add Favorite
            </Button>
            <Button onClick={clearResults} variant="outline">
              Clear
            </Button>
          </div>
        </CardContent>
      </Card>
      
      {results.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Test Results</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-gray-100 p-4 rounded-lg max-h-64 overflow-y-auto">
              {results.map((result, index) => (
                <div key={index} className="text-sm font-mono mb-1">
                  {result}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default DatabaseIntegrationDemo;