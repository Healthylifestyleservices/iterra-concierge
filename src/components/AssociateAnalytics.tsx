import { useEffect } from 'react';
import { useAssociateUrl } from './AssociateUrlHandler';

export const AssociateAnalytics = () => {
  const { associateData } = useAssociateUrl();

  useEffect(() => {
    if (associateData?.isValid && associateData.id) {
      // Track page visit
      const trackVisit = async () => {
        try {
          await fetch(
            'https://erevryxpkuqorebmjefc.supabase.co/functions/v1/f0013c77-fd2e-4928-824d-a4e96e88921b',
            {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                id: associateData.id,
                action: 'track_visit',
                page: window.location.pathname,
                timestamp: new Date().toISOString()
              })
            }
          );
        } catch (error) {
          console.error('Analytics tracking failed:', error);
        }
      };

      trackVisit();

      // Track page changes
      const handlePageChange = () => {
        trackVisit();
      };

      window.addEventListener('popstate', handlePageChange);
      
      return () => {
        window.removeEventListener('popstate', handlePageChange);
      };
    }
  }, [associateData]);

  return null; // This component doesn't render anything
};

export const useAssociateAnalytics = () => {
  const { associateData } = useAssociateUrl();

  const trackEvent = async (eventName: string, eventData?: any) => {
    if (associateData?.isValid && associateData.id) {
      try {
        await fetch(
          'https://erevryxpkuqorebmjefc.supabase.co/functions/v1/f0013c77-fd2e-4928-824d-a4e96e88921b',
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              id: associateData.id,
              action: 'track_event',
              event_name: eventName,
              event_data: eventData,
              timestamp: new Date().toISOString()
            })
          }
        );
      } catch (error) {
        console.error('Event tracking failed:', error);
      }
    }
  };

  return { trackEvent };
};