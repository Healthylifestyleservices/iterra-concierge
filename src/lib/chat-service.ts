import { supabase } from './supabase';

export class ChatService {
  private client: typeof supabase;

  constructor() {
    this.client = supabase;
  }

  async saveChatMessage(userId: string, message: string, response: string, context: any = {}): Promise<{ data: any | null; error: any }> {
    try {
      const { data, error } = await this.client
        .from('chat_history')
        .insert([{
          user_id: userId,
          message: message,
          response: response,
          context: context,
          created_at: new Date().toISOString()
        }])
        .select()
        .single();

      return { data, error };
    } catch (error) {
      console.error('Error saving chat message:', error);
      return { data: null, error };
    }
  }

  async getChatHistory(userId: string, limit: number = 10): Promise<{ data: any[] | null; error: any }> {
    try {
      const { data, error } = await this.client
        .from('chat_history')
        .select('*')
        .eq('user_id', userId)
        .order('created_at', { ascending: false })
        .limit(limit);

      return { data, error };
    } catch (error) {
      console.error('Error getting chat history:', error);
      return { data: null, error };
    }
  }

  async addToFavorites(userId: string, productId: string, productName: string): Promise<{ data: any | null; error: any }> {
    try {
      const { data, error } = await this.client
        .from('user_favorites')
        .insert([{
          user_id: userId,
          product_id: productId,
          product_name: productName,
          created_at: new Date().toISOString()
        }])
        .select()
        .single();

      return { data, error };
    } catch (error) {
      console.error('Error adding to favorites:', error);
      return { data: null, error };
    }
  }

  async removeFromFavorites(userId: string, productId: string): Promise<{ data: any; error: any }> {
    try {
      const { data, error } = await this.client
        .from('user_favorites')
        .delete()
        .eq('user_id', userId)
        .eq('product_id', productId);

      return { data, error };
    } catch (error) {
      console.error('Error removing from favorites:', error);
      return { data: null, error };
    }
  }

  async getUserFavorites(userId: string): Promise<{ data: any[] | null; error: any }> {
    try {
      const { data, error } = await this.client
        .from('user_favorites')
        .select('*')
        .eq('user_id', userId)
        .order('created_at', { ascending: false });

      return { data, error };
    } catch (error) {
      console.error('Error getting user favorites:', error);
      return { data: null, error };
    }
  }
}