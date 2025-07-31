import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Loader2, CheckCircle, XCircle, Heart, Sparkles } from 'lucide-react';
import { supabase } from '@/lib/supabase';

const IntakeSystemEnhanced: React.FC = () => {
  const [formData, setFormData] = useState({
    user_id: `user-${Date.now()}`,
    name: '',
    age: '',
    gender: '',
    goal: '',
    primaryConcern: '',
    experienceLevel: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [response, setResponse] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    setResponse(null);

    const intakeData = {
      user_id: formData.user_id,
      intake_type: "Human",
      details: {
        name: formData.name,
        age: parseInt(formData.age) || 0,
        gender: formData.gender,
        goal: formData.goal,
        primaryConcern: formData.primaryConcern,
        experienceLevel: formData.experienceLevel
      },
      status: "active"
    };

    try {
      const { data, error: functionError } = await supabase.functions.invoke('hello_world', {
        body: intakeData
      });

      if (functionError) {
        throw functionError;
      }

      setResponse(data);
    } catch (err: any) {
      const errorMessage = err.message || 'Failed to submit intake';
      setError(errorMessage);
      console.error('Submission error:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
          Enhanced Wellness Intake
        </h1>
        <p className="text-gray-600">Complete your wellness assessment for personalized recommendations</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Heart className="h-5 w-5 text-pink-500" />
              Personal Information
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="name">Full Name</Label>
                <Input 
                  id="name" 
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  placeholder="Enter your full name"
                  required
                />
              </div>
              <div>
                <Label htmlFor="age">Age</Label>
                <Input 
                  id="age" 
                  type="number"
                  value={formData.age}
                  onChange={(e) => setFormData({...formData, age: e.target.value})}
                  placeholder="Enter your age"
                  min="1"
                  max="120"
                  required
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="gender">Gender</Label>
                <Select onValueChange={(value) => setFormData({...formData, gender: value})} required>
                  <SelectTrigger>
                    <SelectValue placeholder="Select gender" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Female">Female</SelectItem>
                    <SelectItem value="Male">Male</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="goal">Primary Wellness Goal</Label>
                <Select onValueChange={(value) => setFormData({...formData, goal: value})} required>
                  <SelectTrigger>
                    <SelectValue placeholder="Select primary goal" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Wellness">General Wellness</SelectItem>
                    <SelectItem value="Stress Relief">Stress Relief</SelectItem>
                    <SelectItem value="Energy">Energy & Vitality</SelectItem>
                    <SelectItem value="Sleep">Better Sleep</SelectItem>
                    <SelectItem value="Focus">Mental Focus</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-yellow-500" />
              Wellness Details
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="primaryConcern">Primary Health Concern</Label>
              <Textarea 
                id="primaryConcern"
                placeholder="Describe your main wellness goals or concerns..."
                value={formData.primaryConcern}
                onChange={(e) => setFormData({...formData, primaryConcern: e.target.value})}
                className="min-h-[100px]"
                required
              />
            </div>
            
            <div>
              <Label htmlFor="experienceLevel">Essential Oils Experience</Label>
              <Select onValueChange={(value) => setFormData({...formData, experienceLevel: value})} required>
                <SelectTrigger>
                  <SelectValue placeholder="Select experience level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Beginner">Beginner</SelectItem>
                  <SelectItem value="Intermediate">Intermediate</SelectItem>
                  <SelectItem value="Advanced">Advanced</SelectItem>
                  <SelectItem value="Expert">Expert</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        <div className="text-center">
          <Button 
            type="submit"
            disabled={isSubmitting}
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 text-lg"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Processing...
              </>
            ) : (
              'Submit Wellness Assessment'
            )}
          </Button>
        </div>
      </form>

      {error && (
        <Alert variant="destructive">
          <XCircle className="h-4 w-4" />
          <AlertDescription>
            <strong>Error:</strong> {error}
          </AlertDescription>
        </Alert>
      )}

      {response && (
        <Alert>
          <CheckCircle className="h-4 w-4" />
          <AlertDescription>
            <div>
              <strong>Assessment Complete!</strong> Your wellness profile has been created.
              <div className="mt-2 p-3 bg-green-50 rounded">
                <pre className="text-sm overflow-x-auto">
                  {JSON.stringify(response, null, 2)}
                </pre>
              </div>
            </div>
          </AlertDescription>
        </Alert>
      )}
    </div>
  );
};

export default IntakeSystemEnhanced;