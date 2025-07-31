import React, { createContext, useContext, useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { toast } from '@/components/ui/use-toast';

interface AssociateInfo {
  companyName: string;
  associateId: string;
}

interface AppContextType {
  sidebarOpen: boolean;
  toggleSidebar: () => void;
  associateInfo: AssociateInfo | null;
  setAssociateInfo: (info: AssociateInfo) => void;
  generateShoppingLink: (baseUrl: string) => string;
}

const defaultAppContext: AppContextType = {
  sidebarOpen: false,
  toggleSidebar: () => {},
  associateInfo: null,
  setAssociateInfo: () => {},
  generateShoppingLink: (baseUrl: string) => baseUrl,
};

const AppContext = createContext<AppContextType>(defaultAppContext);

export const useAppContext = () => useContext(AppContext);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [associateInfo, setAssociateInfoState] = useState<AssociateInfo | null>({
    companyName: 'Jenna Williams - dōTERRA',
    associateId: '15996087'
  });

  useEffect(() => {
    const stored = localStorage.getItem('associateInfo');
    if (stored) {
      try {
        setAssociateInfoState(JSON.parse(stored));
      } catch (e) {
        console.error('Failed to parse stored associate info');
        // Set default if parsing fails
        setAssociateInfoState({
          companyName: 'Jenna Williams - dōTERRA',
          associateId: '15996087'
        });
      }
    } else {
      // Set default and save to localStorage
      const defaultInfo = {
        companyName: 'Jenna Williams - dōTERRA',
        associateId: '15996087'
      };
      setAssociateInfoState(defaultInfo);
      localStorage.setItem('associateInfo', JSON.stringify(defaultInfo));
    }
  }, []);

  const toggleSidebar = () => {
    setSidebarOpen(prev => !prev);
  };

  const setAssociateInfo = (info: AssociateInfo) => {
    setAssociateInfoState(info);
    localStorage.setItem('associateInfo', JSON.stringify(info));
    toast({
      title: 'Associate Info Saved',
      description: `Welcome ${info.companyName} associate!`,
    });
  };

  const generateShoppingLink = (baseUrl: string): string => {
    if (!associateInfo?.associateId) return baseUrl;
    
    const separator = baseUrl.includes('?') ? '&' : '?';
    return `${baseUrl}${separator}OwnerID=${associateInfo.associateId}`;
  };

  return (
    <AppContext.Provider
      value={{
        sidebarOpen,
        toggleSidebar,
        associateInfo,
        setAssociateInfo,
        generateShoppingLink,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};