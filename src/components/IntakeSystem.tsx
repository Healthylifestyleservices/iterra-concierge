import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Heart, Sparkles, Leaf, Moon } from 'lucide-react';

const IntakeSystem: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    primaryConcern: '',
    emotionalState: '',
    chakraFocus: '',
    petOwner: false,
    petType: '',
    experienceLevel: '',
    preferences: []
  });

  const chakras = [
    { name: 'Root', color: 'text-red-600', icon: '🔴' },
    { name: 'Sacral', color: 'text-orange-600', icon: '🟠' },
    { name: 'Solar Plexus', color: 'text-yellow-600', icon: '🟡' },
    { name: 'Heart', color: 'text-green-600', icon: '💚' },
    { name: 'Throat', color: 'text-blue-600', icon: '🔵' },
    { name: 'Third Eye', color: 'text-indigo-600', icon: '🟣' },
    { name: 'Crown', color: 'text-purple-600', icon: '🟪' }
  ];

  const emotionalStates = [
    'Stressed', 'Anxious', 'Peaceful', 'Energized', 'Grounded', 'Focused', 'Joyful', 'Balanced'
  ];

  const handleSubmit = () => {
    // Navigate to protocol generator with form data
    const event = new CustomEvent('navigate', { detail: 'protocol' });
    window.dispatchEvent(event);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
          Wellness Intake Assessment
        </h1>
        <p className="text-gray-600">Share your wellness journey to receive personalized recommendations</p>
      </div>

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
              <Label htmlFor="name">Name</Label>
              <Input 
                id="name" 
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                placeholder="Your name"
              />
            </div>
            <div>
              <Label htmlFor="age">Age Range</Label>
              <Select onValueChange={(value) => setFormData({...formData, age: value})}>
                <SelectTrigger>
                  <SelectValue placeholder="Select age range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="18-25">18-25</SelectItem>
                  <SelectItem value="26-35">26-35</SelectItem>
                  <SelectItem value="36-45">36-45</SelectItem>
                  <SelectItem value="46-55">46-55</SelectItem>
                  <SelectItem value="56+">56+</SelectItem>
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
            Emotional & Energetic State
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label>Current Emotional State</Label>
            <RadioGroup 
              value={formData.emotionalState}
              onValueChange={(value) => setFormData({...formData, emotionalState: value})}
              className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-2"
            >
              {emotionalStates.map((state) => (
                <div key={state} className="flex items-center space-x-2">
                  <RadioGroupItem value={state} id={state} />
                  <Label htmlFor={state} className="text-sm">{state}</Label>
                </div>
              ))}
            </RadioGroup>
          </div>

          <div>
            <Label>Chakra Focus Area</Label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-2">
              {chakras.map((chakra) => (
                <Button
                  key={chakra.name}
                  variant={formData.chakraFocus === chakra.name ? "default" : "outline"}
                  onClick={() => setFormData({...formData, chakraFocus: chakra.name})}
                  className="text-sm"
                >
                  {chakra.icon} {chakra.name}
                </Button>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Leaf className="h-5 w-5 text-green-500" />
            Pet Wellness
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center space-x-2">
            <Checkbox 
              id="petOwner"
              checked={formData.petOwner}
              onCheckedChange={(checked) => setFormData({...formData, petOwner: checked as boolean})}
            />
            <Label htmlFor="petOwner">I have pets and want pet-safe recommendations</Label>
          </div>
          
          {formData.petOwner && (
            <Select onValueChange={(value) => setFormData({...formData, petType: value})}>
              <SelectTrigger>
                <SelectValue placeholder="Select pet type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="dog">Dog</SelectItem>
                <SelectItem value="cat">Cat</SelectItem>
                <SelectItem value="bird">Bird</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Moon className="h-5 w-5 text-indigo-500" />
            Primary Wellness Focus
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Textarea 
            placeholder="Describe your primary wellness goals or concerns..."
            value={formData.primaryConcern}
            onChange={(e) => setFormData({...formData, primaryConcern: e.target.value})}
            className="min-h-[100px]"
          />
        </CardContent>
      </Card>

      <div className="text-center">
        <Button 
          onClick={handleSubmit}
          className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 text-lg"
        >
          Generate My Wellness Protocol
        </Button>
      </div>
    </div>
  );
};

export default IntakeSystem;