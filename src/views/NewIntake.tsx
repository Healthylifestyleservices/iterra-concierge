import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { getCurrentIntake } from '@/lib/core';

interface IntakeField {
  id: string;
  type: string;
  label: string;
  required?: boolean;
  options?: string[];
}

const NewIntake = () => {
  const [fields, setFields] = useState<IntakeField[]>([]);
  const [formData, setFormData] = useState<Record<string, any>>({});
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    loadIntakeForm();
  }, []);

  const loadIntakeForm = async () => {
    try {
      const intake = await getCurrentIntake();
      if (intake?.fields) {
        setFields(intake.fields);
      } else {
        // Default fields if no intake form found
        setFields([
          { id: 'name', type: 'text', label: 'Full Name', required: true },
          { id: 'email', type: 'email', label: 'Email', required: true },
          { id: 'concerns', type: 'textarea', label: 'Health Concerns' },
          { id: 'experience', type: 'select', label: 'Essential Oil Experience', 
            options: ['Beginner', 'Intermediate', 'Advanced'] }
        ]);
      }
    } catch (error) {
      console.error('Error loading intake form:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (fieldId: string, value: any) => {
    setFormData(prev => ({ ...prev, [fieldId]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      alert('Intake form submitted successfully!');
      setSubmitting(false);
      setFormData({});
    }, 1000);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-lg">Loading intake form...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 p-4">
      <div className="max-w-2xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-center text-blue-700">
              Wellness Intake Form
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {fields.map((field) => (
                <div key={field.id}>
                  <Label className="text-sm font-medium">
                    {field.label}
                    {field.required && <span className="text-red-500 ml-1">*</span>}
                  </Label>
                  
                  {field.type === 'text' || field.type === 'email' ? (
                    <Input
                      type={field.type}
                      value={formData[field.id] || ''}
                      onChange={(e) => handleInputChange(field.id, e.target.value)}
                      required={field.required}
                      className="mt-1"
                    />
                  ) : field.type === 'textarea' ? (
                    <Textarea
                      value={formData[field.id] || ''}
                      onChange={(e) => handleInputChange(field.id, e.target.value)}
                      required={field.required}
                      className="mt-1 min-h-[100px]"
                    />
                  ) : null}
                </div>
              ))}
              
              <Button 
                type="submit" 
                disabled={submitting}
                className="w-full bg-blue-600 hover:bg-blue-700"
              >
                {submitting ? 'Submitting...' : 'Submit Intake Form'}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default NewIntake;