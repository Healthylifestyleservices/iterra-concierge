import { createClient } from '@supabase/supabase-js';
import { config } from '../../config/environment.js';

const supabase = createClient(config.supabase.url, config.supabase.anonKey);

export class AuthService {
  async signUp(email, password, userData = {}) {
    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            associate_id: config.doterra.associateId,
            ...userData
          }
        }
      });
      
      if (error) throw error;
      return data;
    } catch (error) {
      console.error('Auth Error:', error);
      throw error;
    }
  }

  async signIn(email, password) {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password
    });
    
    if (error) throw error;
    return data;
  }

  async signOut() {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
  }

  async getCurrentUser() {
    const { data: { user } } = await supabase.auth.getUser();
    return user;
  }

  onAuthStateChange(callback) {
    return supabase.auth.onAuthStateChange(callback);
  }

  async resetPassword(email) {
    const { data, error } = await supabase.auth.resetPasswordForEmail(email);
    if (error) throw error;
    return data;
  }

  async updateUser(updates) {
    const { data, error } = await supabase.auth.updateUser(updates);
    if (error) throw error;
    return data;
  }

  async getSession() {
    const { data: { session } } = await supabase.auth.getSession();
    return session;
  }

  async saveQuestionnaireResponse(userId, responses) {
    try {
      const { data, error } = await supabase
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

  async trackUserAction(userId, action, metadata = {}) {
    try {
      const { data, error } = await supabase
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
}

export const authService = new AuthService();