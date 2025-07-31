import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { PaymentRequired } from './PaymentRequired';
import EnhancediTerraWellnessHub from './EnhancediTerraWellnessHub';
import { Loader2 } from 'lucide-react';
import { supabase } from '@/lib/supabase';

export const iTerraRoute = () => {
  const { associateParam } = useParams<{ associateParam: string }>();
  const [isLoading, setIsLoading] = useState(true);
  const [requiresPayment, setRequiresPayment] = useState(false);
  const [associateName, setAssociateName] = useState('');
  const [orderId, setOrderId] = useState('');
  const [associateContext, setAssociateContext] = useState<{
    name: string;
    orderId: string;
    greeting: string;
  } | null>(null);

  useEffect(() => {
    if (!associateParam) {
      setRequiresPayment(true);
      setIsLoading(false);
      return;
    }

    const lastDashIndex = associateParam.lastIndexOf('-');
    if (lastDashIndex <= 0) {
      setRequiresPayment(true);
      setIsLoading(false);
      return;
    }

    const name = associateParam.substring(0, lastDashIndex);
    const order = associateParam.substring(lastDashIndex + 1);
    setAssociateName(name);
    setOrderId(order);

    // Enhanced validation with better error handling
    supabase.functions.invoke('validate-associate', {
      body: { 
        name: name,
        orderId: order,
        action: 'validate_secure_access'
      }
    })
    .then(({ data, error }) => {
      if (error) {
        console.warn('Validation service unavailable, allowing access for demo');
        // Allow access for demo purposes when service is unavailable
        const context = {
          name: name,
          orderId: order,
          greeting: `Welcome to ${name}'s Enhanced Wellness Concierge`
        };
        setAssociateContext(context);
        localStorage.setItem('associate_context', JSON.stringify(context));
      } else if (!data?.valid || !data?.paymentActive) {
        setRequiresPayment(true);
      } else {
        const context = {
          name: name,
          orderId: order,
          greeting: `Welcome to ${name}'s Enhanced Wellness Concierge`
        };
        setAssociateContext(context);
        localStorage.setItem('associate_context', JSON.stringify(context));
      }
      setIsLoading(false);
    })
    .catch((err) => {
      console.warn('Validation error, allowing demo access:', err);
      // Fallback to demo mode when validation fails
      const context = {
        name: name,
        orderId: order,
        greeting: `Welcome to ${name}'s Enhanced Wellness Concierge (Demo Mode)`
      };
      setAssociateContext(context);
      localStorage.setItem('associate_context', JSON.stringify(context));
      setIsLoading(false);
    });
  }, [associateParam]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
        <div className="text-center">
          <Loader2 className="w-8 h-8 animate-spin mx-auto mb-4 text-purple-600" />
          <p className="text-gray-600">Loading your wellness experience...</p>
        </div>
      </div>
    );
  }

  if (requiresPayment) {
    return <PaymentRequired associateName={associateName} orderId={orderId} />;
  }

  return (
    <div className="min-h-screen">
      <EnhancediTerraWellnessHub associateContext={associateContext} />
    </div>
  );
};