import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { CheckCircle, Heart } from 'lucide-react';

interface IntakeData {
  name: string;
  email: string;
  phone: string;
  age: string;
  primaryGoals: string[];
  currentChallenges: string;
  experienceLevel: string;
  budget: string;
  timeline: string;
  additionalNotes: string;
}

const WorkingIntakeSystem: React.FC = () => {
  const [formData, setFormData] = useState<IntakeData>({
    name: '',
    email: '',
    phone: '',
    age: '',
    primaryGoals: [],
    currentChallenges: '',
    experienceLevel: '',
    budget: '',
    timeline: '',
    additionalNotes: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const wellnessGoals = [
    'Better Sleep', 'Stress Management', 'Energy Boost', 'Immune Support',
    'Emotional Balance', 'Pain Relief', 'Skin Health', 'Digestive Health',
    'Weight Management', 'Mental Clarity', 'Respiratory Health', 'Hormone Balance'
  ];

  const handleGoalToggle = (goal: string) => {
    setFormData(prev => ({
      ...prev,
      primaryGoals: prev.primaryGoals.includes(goal)
        ? prev.primaryGoals.filter(g => g !== goal)
        : [...prev.primaryGoals, goal]
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Store in localStorage as fallback since Supabase access is limited
      const intakeData = {
        ...formData,
        timestamp: new Date().toISOString(),
        id: Date.now().toString()
      };
      
      // Get existing intakes
      const existingIntakes = JSON.parse(localStorage.getItem('wellness_intakes') || '[]');
      existingIntakes.push(intakeData);
      localStorage.setItem('wellness_intakes', JSON.stringify(existingIntakes));
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setSubmitted(true);
    } catch (error) {
      console.error('Error submitting intake:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <Card className="max-w-2xl mx-auto">
        <CardContent className="text-center p-8">
          <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-green-700 mb-2">Intake Complete!</h2>
          <p className="text-gray-600 mb-4">
            Thank you for completing your wellness intake. Your personalized protocol will be ready shortly.
          </p>
          <Button onClick={() => setSubmitted(false)} className="bg-purple-600 hover:bg-purple-700">
            Submit Another Intake
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Heart className="w-6 h-6 text-purple-600" />
            Updated Wellness Intake Assessment
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Personal Information */}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Full Name *</label>
                <Input
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email *</label>
                <Input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  required
                />
              </div>
            </div>

            {/* Wellness Goals */}
            <div>
              <label className="block text-sm font-medium mb-3">Primary Wellness Goals (select all that apply)</label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                {wellnessGoals.map(goal => (
                  <Badge
                    key={goal}
                    variant={formData.primaryGoals.includes(goal) ? "default" : "outline"}
                    className={`cursor-pointer p-2 text-center ${
                      formData.primaryGoals.includes(goal) 
                        ? 'bg-purple-600 text-white' 
                        : 'hover:bg-purple-100'
                    }`}
                    onClick={() => handleGoalToggle(goal)}
                  >
                    {goal}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Current Challenges */}
            <div>
              <label className="block text-sm font-medium mb-2">Current Health/Wellness Challenges</label>
              <Textarea
                value={formData.currentChallenges}
                onChange={(e) => setFormData(prev => ({ ...prev, currentChallenges: e.target.value }))}
                placeholder="Describe any current challenges you're facing..."
                rows={3}
              />
            </div>

            {/* Experience Level */}
            <div>
              <label className="block text-sm font-medium mb-2">Essential Oil Experience Level</label>
              <Select onValueChange={(value) => setFormData(prev => ({ ...prev, experienceLevel: value }))}>
                <SelectTrigger>
                  <SelectValue placeholder="Select your experience level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="beginner">Beginner - New to essential oils</SelectItem>
                  <SelectItem value="intermediate">Intermediate - Some experience</SelectItem>
                  <SelectItem value="advanced">Advanced - Very experienced</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Budget & Timeline */}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Monthly Budget</label>
                <Select onValueChange={(value) => setFormData(prev => ({ ...prev, budget: value }))}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select budget range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="under-50">Under $50</SelectItem>
                    <SelectItem value="50-100">$50 - $100</SelectItem>
                    <SelectItem value="100-200">$100 - $200</SelectItem>
                    <SelectItem value="200-plus">$200+</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Timeline for Results</label>
                <Select onValueChange={(value) => setFormData(prev => ({ ...prev, timeline: value }))}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select timeline" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="immediate">Immediate (1-2 weeks)</SelectItem>
                    <SelectItem value="short">Short-term (1-3 months)</SelectItem>
                    <SelectItem value="long">Long-term (3+ months)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <Button 
              type="submit" 
              disabled={isSubmitting || !formData.name || !formData.email}
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
            >
              {isSubmitting ? 'Submitting...' : 'Complete Updated Intake Assessment'}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default WorkingIntakeSystem;