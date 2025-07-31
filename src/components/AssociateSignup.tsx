import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useAppContext } from '@/contexts/AppContext';
import { Building2, User } from 'lucide-react';

interface AssociateSignupProps {
  onComplete?: () => void;
}

export const AssociateSignup: React.FC<AssociateSignupProps> = ({ onComplete }) => {
  const { setAssociateInfo } = useAppContext();
  const [companyName, setCompanyName] = useState('');
  const [associateId, setAssociateId] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!companyName.trim() || !associateId.trim()) return;

    setIsSubmitting(true);
    
    try {
      setAssociateInfo({
        companyName: companyName.trim(),
        associateId: associateId.trim()
      });
      
      if (onComplete) {
        onComplete();
      }
    } catch (error) {
      console.error('Failed to save associate info:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader className="text-center">
        <CardTitle className="flex items-center justify-center gap-2">
          <Building2 className="h-5 w-5" />
          Associate Registration
        </CardTitle>
        <CardDescription>
          Enter your essential oil company details to ensure you receive credit for all sales
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="companyName">Company Name</Label>
            <Input
              id="companyName"
              type="text"
              placeholder="e.g., doTERRA, Young Living"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="associateId">Associate ID</Label>
            <Input
              id="associateId"
              type="text"
              placeholder="Your unique associate ID"
              value={associateId}
              onChange={(e) => setAssociateId(e.target.value)}
              required
            />
          </div>
          
          <Button 
            type="submit" 
            className="w-full" 
            disabled={isSubmitting || !companyName.trim() || !associateId.trim()}
          >
            {isSubmitting ? 'Saving...' : 'Save Associate Info'}
          </Button>
        </form>
        
        <div className="mt-4 p-3 bg-blue-50 rounded-lg text-sm text-blue-800">
          <p className="font-medium">Why we need this:</p>
          <p>Your associate ID will be automatically added to all product links, ensuring you receive proper credit for sales and enrollments.</p>
        </div>
      </CardContent>
    </Card>
  );
};