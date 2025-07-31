import { useEffect, useState } from 'react';

interface AssociateData {
  name: string;
  id: string;
  isValid: boolean;
}

export const useAssociateUrl = () => {
  const [associateData, setAssociateData] = useState<AssociateData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const validateAssociate = async () => {
      // Extract associate info from URL path: /iTerra/{associate_name}/{associate_id}
      const path = window.location.pathname;
      const match = path.match(/\/iTerra\/([^/]+)\/([^/]+)$/);
      
      if (match) {
        const [, name, id] = match;
        
        // Check device fingerprinting
        const deviceId = localStorage.getItem('device_id') || crypto.randomUUID();
        localStorage.setItem('device_id', deviceId);
        
        const storedDeviceLock = localStorage.getItem('associate_device_lock');
        if (storedDeviceLock && storedDeviceLock !== `${id}_${deviceId}`) {
          // Device mismatch - redirect to payment required
          window.location.href = 'https://healthlifestyleservices.com/payment-required';
          return;
        }
        
        // Validate associate using Supabase function
        try {
          const response = await fetch(
            'https://erevryxpkuqorebmjefc.supabase.co/functions/v1/51607753-3df8-499b-a13c-969c1aa90edd',
            {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ name, id, action: 'validate' })
            }
          );
          
          if (response.ok) {
            const data = await response.json();
            if (data.valid && data.active) {
              setAssociateData({ name, id, isValid: true });
              
              // Set 30-day persistent cookie
              const expires = new Date();
              expires.setDate(expires.getDate() + 30);
              document.cookie = `associate_session=${id}; expires=${expires.toUTCString()}; path=/; secure; samesite=strict`;
              
              // Lock to this device
              localStorage.setItem('associate_device_lock', `${id}_${deviceId}`);
            } else {
              // Inactive associate - redirect to payment required
              window.location.href = 'https://healthlifestyleservices.com/payment-required';
              return;
            }
          } else {
            window.location.href = 'https://healthlifestyleservices.com/payment-required';
            return;
          }
        } catch (error) {
          console.error('Associate validation failed:', error);
          window.location.href = 'https://healthlifestyleservices.com/payment-required';
          return;
        }
      } else {
        // Check for existing cookie session
        const cookieMatch = document.cookie.match(/associate_session=([^;]+)/);
        if (cookieMatch) {
          const sessionId = cookieMatch[1];
          setAssociateData({ name: 'returning-user', id: sessionId, isValid: true });
        } else {
          // No valid session - redirect to payment required
          window.location.href = 'https://healthlifestyleservices.com/payment-required';
          return;
        }
      }
      
      setIsLoading(false);
    };

    validateAssociate();
  }, []);

  return { associateData, isLoading };
};