import { supabase } from './supabase';

// DatabaseService with proper TypeScript types
export class DatabaseService {
  private client: typeof supabase;
  private associateId: string;

  constructor() {
    this.client = supabase;
    this.associateId = '15996087'; // Jenna Williams
  }

  async createUserProfile(userId: string, profileData: any): Promise<{ data: any | null; error: any }> {
    try {
      const { data, error } = await this.client
        .from('user_profiles')
        .insert([{
          user_id: userId,
          associate_id: this.associateId,
          ...profileData,
          created_at: new Date().toISOString()
        }])
        .select()
        .single();

      return { data, error };
    } catch (error) {
      console.error('Error creating user profile:', error);
      return { data: null, error };
    }
  }

  async getUserProfile(userId: string): Promise<{ data: any | null; error: any }> {
    try {
      const { data, error } = await this.client
        .from('user_profiles')
        .select('*')
        .eq('user_id', userId)
        .single();

      return { data, error };
    } catch (error) {
      console.error('Error getting user profile:', error);
      return { data: null, error };
    }
  }

  async updateUserProfile(userId: string, updates: any): Promise<{ data: any | null; error: any }> {
    try {
      const { data, error } = await this.client
        .from('user_profiles')
        .update({ 
          ...updates, 
          updated_at: new Date().toISOString() 
        })
        .eq('user_id', userId)
        .select()
        .single();

      return { data, error };
    } catch (error) {
      console.error('Error updating user profile:', error);
      return { data: null, error };
    }
  }

  async saveWellnessProtocol(userId: string, protocolData: any): Promise<{ data: any | null; error: any }> {
    try {
      const { data, error } = await this.client
        .from('wellness_protocols')
        .insert([{
          user_id: userId,
          ...protocolData,
          created_at: new Date().toISOString()
        }])
        .select()
        .single();

      return { data, error };
    } catch (error) {
      console.error('Error saving wellness protocol:', error);
      return { data: null, error };
    }
  }

  async getUserProtocols(userId: string): Promise<{ data: any[] | null; error: any }> {
    try {
      const { data, error } = await this.client
        .from('wellness_protocols')
        .select('*')
        .eq('user_id', userId)
        .order('created_at', { ascending: false });

      return { data, error };
    } catch (error) {
      console.error('Error getting user protocols:', error);
      return { data: null, error };
    }
  }
}