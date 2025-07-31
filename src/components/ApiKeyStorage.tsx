import { useState, useEffect } from 'react';

export interface StoredApiKey {
  name: string;
  key: string;
  lastUpdated: string;
  isValid?: boolean;
}

class ApiKeyStorage {
  private static instance: ApiKeyStorage;
  private storageKey = 'iterra_api_keys';
  private listeners: ((keys: StoredApiKey[]) => void)[] = [];

  static getInstance(): ApiKeyStorage {
    if (!ApiKeyStorage.instance) {
      ApiKeyStorage.instance = new ApiKeyStorage();
    }
    return ApiKeyStorage.instance;
  }

  subscribe(listener: (keys: StoredApiKey[]) => void) {
    this.listeners.push(listener);
    return () => {
      this.listeners = this.listeners.filter(l => l !== listener);
    };
  }

  private notify() {
    const keys = this.getAllKeys();
    this.listeners.forEach(listener => listener(keys));
  }

  storeKey(name: string, key: string): void {
    const keys = this.getAllKeys();
    const existingIndex = keys.findIndex(k => k.name === name);
    
    const newKey: StoredApiKey = {
      name,
      key,
      lastUpdated: new Date().toISOString(),
      isValid: this.validateKey(name, key)
    };

    if (existingIndex >= 0) {
      keys[existingIndex] = newKey;
    } else {
      keys.push(newKey);
    }

    localStorage.setItem(this.storageKey, JSON.stringify(keys));
    this.notify();
  }

  private validateKey(name: string, key: string): boolean {
    if (!key || key.length < 8) return false;
    
    switch (name) {
      case 'FamousAI':
        return key.startsWith('fa_') && key.length > 20;
      case 'dōTERRA API':
        return key.length > 10;
      case 'Stripe':
        return key.startsWith('pk_') || key.startsWith('sk_');
      case 'PayPal':
        return key.length > 15;
      default:
        return key.length > 8;
    }
  }

  saveKey(name: string, key: string): void {
    this.storeKey(name, key);
  }

  getKey(name: string): string | null {
    const keys = this.getAllKeys();
    const found = keys.find(k => k.name === name);
    return found ? found.key : null;
  }

  getAllKeys(): StoredApiKey[] {
    try {
      const stored = localStorage.getItem(this.storageKey);
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  }

  removeKey(name: string): void {
    const keys = this.getAllKeys().filter(k => k.name !== name);
    localStorage.setItem(this.storageKey, JSON.stringify(keys));
    this.notify();
  }

  clearAll(): void {
    localStorage.removeItem(this.storageKey);
    this.notify();
  }

  updateKeyValidation(name: string, isValid: boolean): void {
    const keys = this.getAllKeys();
    const keyIndex = keys.findIndex(k => k.name === name);
    
    if (keyIndex >= 0) {
      keys[keyIndex].isValid = isValid;
      localStorage.setItem(this.storageKey, JSON.stringify(keys));
      this.notify();
    }
  }
}

export const apiKeyStorage = ApiKeyStorage.getInstance();

export function useApiKeys() {
  const [keys, setKeys] = useState<StoredApiKey[]>([]);

  useEffect(() => {
    setKeys(apiKeyStorage.getAllKeys());
    return apiKeyStorage.subscribe(setKeys);
  }, []);

  return {
    keys,
    saveKey: apiKeyStorage.saveKey.bind(apiKeyStorage),
    getKey: apiKeyStorage.getKey.bind(apiKeyStorage),
    removeKey: apiKeyStorage.removeKey.bind(apiKeyStorage),
    clearAll: apiKeyStorage.clearAll.bind(apiKeyStorage),
    updateValidation: apiKeyStorage.updateKeyValidation.bind(apiKeyStorage)
  };
}

export function useApiKey(name: string) {
  const { keys, saveKey, getKey } = useApiKeys();
  const key = keys.find(k => k.name === name);

  return {
    key: key?.key || '',
    isValid: key?.isValid,
    lastUpdated: key?.lastUpdated,
    save: (newKey: string) => saveKey(name, newKey),
    get: () => getKey(name)
  };
}