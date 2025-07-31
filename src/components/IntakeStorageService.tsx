import { supabase } from '@/lib/supabase';

export interface StoredIntakeData {
  id: string;
  user_id: string;
  intake_type: string;
  form_data: any;
  status: string;
  created_at: string;
  updated_at: string;
}

export interface StoredProtocolData {
  id: string;
  user_id: string;
  intake_response_id: string;
  protocol_data: any;
  created_at: string;
}

export class IntakeStorageService {
  // Store intake data locally with fallback to Supabase when available
  static async storeIntakeData(intakeData: any): Promise<{ success: boolean; data?: any; error?: string }> {
    try {
      // Generate unique ID
      const id = `intake_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
      
      const storedData: StoredIntakeData = {
        id,
        user_id: intakeData.user_id,
        intake_type: intakeData.intake_type,
        form_data: intakeData.details,
        status: intakeData.status || 'active',
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
      };

      // Store locally first
      const existingData = this.getLocalIntakeData();
      existingData.push(storedData);
      localStorage.setItem('intake_responses', JSON.stringify(existingData));

      // Try to store in Supabase if available
      try {
        const { data, error } = await supabase
          .from('intake_responses')
          .insert([storedData])
          .select();
        
        if (error) {
          console.warn('Supabase storage failed, using local storage:', error.message);
        }
      } catch (supabaseError) {
        console.warn('Supabase not available, using local storage only');
      }

      return { success: true, data: storedData };
    } catch (error) {
      return { 
        success: false, 
        error: error instanceof Error ? error.message : 'Storage failed' 
      };
    }
  }

  // Store protocol data locally with fallback to Supabase when available
  static async storeProtocolData(protocolData: any): Promise<{ success: boolean; data?: any; error?: string }> {
    try {
      const storedData: StoredProtocolData = {
        id: protocolData.id,
        user_id: protocolData.user_id,
        intake_response_id: protocolData.intake_response_id,
        protocol_data: protocolData.protocol_data,
        created_at: new Date().toISOString()
      };

      // Store locally first
      const existingData = this.getLocalProtocolData();
      existingData.push(storedData);
      localStorage.setItem('generated_protocols', JSON.stringify(existingData));

      // Try to store in Supabase if available
      try {
        const { data, error } = await supabase
          .from('generated_protocols')
          .insert([storedData])
          .select();
        
        if (error) {
          console.warn('Supabase storage failed, using local storage:', error.message);
        }
      } catch (supabaseError) {
        console.warn('Supabase not available, using local storage only');
      }

      return { success: true, data: storedData };
    } catch (error) {
      return { 
        success: false, 
        error: error instanceof Error ? error.message : 'Storage failed' 
      };
    }
  }

  // Get local intake data
  static getLocalIntakeData(): StoredIntakeData[] {
    try {
      const data = localStorage.getItem('intake_responses');
      return data ? JSON.parse(data) : [];
    } catch {
      return [];
    }
  }

  // Get local protocol data
  static getLocalProtocolData(): StoredProtocolData[] {
    try {
      const data = localStorage.getItem('generated_protocols');
      return data ? JSON.parse(data) : [];
    } catch {
      return [];
    }
  }

  // Get user's intake history
  static async getUserIntakeHistory(userId: string): Promise<StoredIntakeData[]> {
    try {
      // Try Supabase first
      const { data, error } = await supabase
        .from('intake_responses')
        .select('*')
        .eq('user_id', userId)
        .order('created_at', { ascending: false });
      
      if (data && !error) {
        return data;
      }
    } catch {
      // Fall back to local storage
    }
    
    // Fallback to local storage
    const localData = this.getLocalIntakeData();
    return localData.filter(item => item.user_id === userId);
  }

  // Get user's protocol history
  static async getUserProtocolHistory(userId: string): Promise<StoredProtocolData[]> {
    try {
      // Try Supabase first
      const { data, error } = await supabase
        .from('generated_protocols')
        .select('*')
        .eq('user_id', userId)
        .order('created_at', { ascending: false });
      
      if (data && !error) {
        return data;
      }
    } catch {
      // Fall back to local storage
    }
    
    // Fallback to local storage
    const localData = this.getLocalProtocolData();
    return localData.filter(item => item.user_id === userId);
  }

  // Clear local storage (for testing/reset)
  static clearLocalStorage(): void {
    localStorage.removeItem('intake_responses');
    localStorage.removeItem('generated_protocols');
    localStorage.removeItem('intakeResults');
  }
}
