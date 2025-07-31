import { createClient } from '@supabase/supabase-js';
import { config } from './config';
import { DatabaseService } from './database-service';
import { ChatService } from './chat-service';
import { AuthService } from './auth-service';

// Create client with environment variables
const supabaseUrl = config.supabase.url;
const supabaseAnonKey = config.supabase.anonKey;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Type definitions
export interface UserProfile {
  id?: string;
  user_id: string;
  associate_id?: string;
  first_name?: string;
  last_name?: string;
  email?: string;
  phone?: string;
  membership_tier?: string;
  created_at?: string;
  updated_at?: string;
}

export interface WellnessProtocol {
  id?: string;
  user_id: string;
  title: string;
  description?: string;
  products?: any;
  instructions?: string;
  created_at?: string;
}

export interface ChatMessage {
  id?: string;
  user_id: string;
  message: string;
  response: string;
  context?: any;
  created_at?: string;
}

export interface UserFavorite {
  id?: string;
  user_id: string;
  product_id: string;
  product_name: string;
  created_at?: string;
}

// Export singleton instances
export const databaseService = new DatabaseService();
export const chatService = new ChatService();
export const authService = new AuthService();