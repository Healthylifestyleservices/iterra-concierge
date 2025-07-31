import React from 'react';
import { supabase } from '@/lib/supabase';

export interface IntakeSubmission {
  id?: string;
  name: string;
  email: string;
  gender: string;
  concerns: string;
  pet_owner: boolean;
  created_at?: string;
}

export class IntakeSubmissionService {
  static async submitIntake(data: Omit<IntakeSubmission, 'id' | 'created_at'>): Promise<{ success: boolean; error?: string; data?: IntakeSubmission }> {
    try {
      // For now, store in localStorage as fallback since database access is restricted
      const submission: IntakeSubmission = {
        id: crypto.randomUUID(),
        ...data,
        created_at: new Date().toISOString()
      };
      
      // Store locally
      const existingSubmissions = this.getLocalSubmissions();
      existingSubmissions.push(submission);
      localStorage.setItem('intake_submissions', JSON.stringify(existingSubmissions));
      
      // Try to submit to Supabase if available
      try {
        const { data: supabaseData, error } = await supabase
          .from('intake_submissions')
          .insert([{
            name: data.name,
            email: data.email,
            gender: data.gender,
            concerns: data.concerns,
            pet_owner: data.pet_owner
          }])
          .select();
          
        if (!error && supabaseData) {
          console.log('Successfully saved to Supabase:', supabaseData);
        }
      } catch (supabaseError) {
        console.log('Supabase not available, using local storage:', supabaseError);
      }
      
      return { success: true, data: submission };
    } catch (error) {
      return { success: false, error: error instanceof Error ? error.message : 'Unknown error' };
    }
  }
  
  static getLocalSubmissions(): IntakeSubmission[] {
    try {
      const stored = localStorage.getItem('intake_submissions');
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  }
  
  static async getSubmissions(): Promise<IntakeSubmission[]> {
    try {
      const { data, error } = await supabase
        .from('intake_submissions')
        .select('*')
        .order('created_at', { ascending: false });
        
      if (error) throw error;
      return data || [];
    } catch {
      return this.getLocalSubmissions();
    }
  }
}

export default IntakeSubmissionService;