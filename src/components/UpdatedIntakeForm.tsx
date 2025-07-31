import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Heart, Loader2, CheckCircle } from 'lucide-react';
import { IntakeSubmissionService, IntakeSubmission } from './IntakeSubmissionService';
import { useToast } from '@/hooks/use-toast';

const UpdatedIntakeForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    gender: '',
    concerns: '',
    pet_owner: false
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.concerns) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      const result = await IntakeSubmissionService.submitIntake(formData);
      
      if (result.success) {
        setIsSubmitted(true);
        toast({
          title: "Intake Submitted!",
          description: "Thank you for sharing your wellness goals with us.",
        });
      } else {
        throw new Error(result.error || 'Submission failed');
      }
    } catch (error) {
      toast({
        title: "Submission Error",
        description: error instanceof Error ? error.message : 'Please try again.',
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="max-w-2xl mx-auto text-center py-12">
        <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
        <h2 className="text-2xl font-bold text-green-700 mb-2">Thank You!</h2>
        <p className="text-gray-600 mb-6">Your wellness intake has been submitted successfully.</p>
        <Button onClick={() => window.location.reload()} variant="outline">
          Submit Another Form
        </Button>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
          Wellness Intake Form
        </h1>
        <p className="text-gray-600">Help us understand your wellness goals</p>
      </div>

      <form onSubmit={handleSubmit}>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Heart className="h-5 w-5 text-pink-500" />
              Personal Information
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="name">Full Name *</Label>
              <Input 
                id="name" 
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                placeholder="Enter your full name"
                required
              />
            </div>
            
            <div>
              <Label htmlFor="email">Email Address *</Label>
              <Input 
                id="email" 
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                placeholder="Enter your email"
                required
              />
            </div>
            
            <div>
              <Label htmlFor="gender">Gender</Label>
              <Select onValueChange={(value) => setFormData({...formData, gender: value})}>
                <SelectTrigger>
                  <SelectValue placeholder="Select gender" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="female">Female</SelectItem>
                  <SelectItem value="male">Male</SelectItem>
                  <SelectItem value="non-binary">Non-binary</SelectItem>
                  <SelectItem value="prefer-not-to-say">Prefer not to say</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <Label htmlFor="concerns">Wellness Concerns & Goals *</Label>
              <Textarea 
                id="concerns"
                placeholder="Please describe your primary wellness concerns, health goals, or areas you'd like support with..."
                value={formData.concerns}
                onChange={(e) => setFormData({...formData, concerns: e.target.value})}
                className="min-h-[120px]"
                required
              />
            </div>
            
            <div className="flex items-center space-x-2">
              <Checkbox 
                id="petOwner"
                checked={formData.pet_owner}
                onCheckedChange={(checked) => setFormData({...formData, pet_owner: checked as boolean})}
              />
              <Label htmlFor="petOwner">I have pets and want pet-safe recommendations</Label>
            </div>
          </CardContent>
        </Card>

        <div className="text-center mt-6">
          <Button 
            type="submit"
            disabled={isSubmitting}
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 text-lg"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Submitting...
              </>
            ) : (
              'Submit Wellness Intake'
            )}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default UpdatedIntakeForm;