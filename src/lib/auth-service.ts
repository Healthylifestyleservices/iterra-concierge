import { supabase } from './supabase';

// Auth service for authentication operations
export class AuthService {
  private client: typeof supabase;

  constructor() {
    this.client = supabase;
  }

  async signUp(email: string, password: string, userData: any = {}) {
    try {
      const { data, error } = await this.client.auth.signUp({
        email,
        password,
        options: {
          data: {
            associate_id: '15996087', // Jenna Williams
            ...userData
          }
        }
      });

      if (error) throw error;
      return data;
    } catch (error) {
      console.error('Sign up error:', error);
      throw error;
    }
  }

  async signIn(email: string, password: string) {
    try {
      const { data, error } = await this.client.auth.signInWithPassword({
        email,
        password
      });

      if (error) throw error;
      return data;
    } catch (error) {
      console.error('Sign in error:', error);
      throw error;
    }
  }

  async signOut() {
    try {
      const { error } = await this.client.auth.signOut();
      if (error) throw error;
    } catch (error) {
      console.error('Sign out error:', error);
      throw error;
    }
  }

  async getCurrentUser() {
    try {
      const { data: { user } } = await this.client.auth.getUser();
      return user;
    } catch (error) {
      console.error('Get current user error:', error);
      return null;
    }
  }

  onAuthStateChange(callback: (event: string, session: any) => void) {
    return this.client.auth.onAuthStateChange(callback);
  }

  async saveQuestionnaireResponse(userId: string, responses: any): Promise<{ data: any; error: any }> {
    try {
      const { data, error } = await this.client
        .from('questionnaire_responses')
        .insert([{
          user_id: userId,
          responses: responses,
          completed_at: new Date().toISOString()
        }])
        .select()
        .single();

      return { data, error };
    } catch (error) {
      console.error('Error saving questionnaire response:', error);
      return { data: null, error };
    }
  }

  async trackUserAction(userId: string, action: string, metadata: any = {}): Promise<{ data: any; error: any }> {
    try {
      const { data, error } = await this.client
        .from('user_actions')
        .insert([{
          user_id: userId,
          action: action,
          metadata: metadata,
          timestamp: new Date().toISOString()
        }]);

      return { data, error };
    } catch (error) {
      console.error('Error tracking user action:', error);
      return { data: null, error };
    }
  }

  async testConnection(): Promise<{ connected: boolean; message: string }> {
    try {
      const { data, error } = await this.client
        .from('user_profiles')
        .select('count')
        .limit(1);

      return { 
        connected: !error, 
        message: error ? error.message : 'Supabase connection successful' 
      };
    } catch (error: any) {
      return { 
        connected: false, 
        message: error.message || 'Supabase connection failed' 
      };
    }
  }
}