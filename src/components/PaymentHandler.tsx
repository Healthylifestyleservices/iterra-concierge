import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle, CreditCard, Loader2 } from 'lucide-react';

interface PaymentHandlerProps {
  onPaymentSuccess: () => void;
}

export default function PaymentHandler({ onPaymentSuccess }: PaymentHandlerProps) {
  const [processing, setProcessing] = useState(false);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    supabase.auth.getUser().then(({ data: { user } }) => {
      setUser(user);
    });
  }, []);

  const handlePayment = async () => {
    if (!user) return;
    
    setProcessing(true);
    try {
      // Simulate payment processing
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Record successful payment
      await supabase.from('associate_payments').insert({
        associate_id: user.id,
        amount: 29.99,
        status: 'completed',
        payment_method: 'card',
        subscription_type: 'wellness_explorer'
      });
      
      onPaymentSuccess();
    } catch (error) {
      console.error('Payment error:', error);
    } finally {
      setProcessing(false);
    }
  };

  return (
    <Card className="max-w-md mx-auto">
      <CardHeader className="text-center">
        <CardTitle className="flex items-center justify-center gap-2">
          <CreditCard className="h-6 w-6" />
          Complete Your Membership
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="text-center space-y-2">
          <p className="text-2xl font-bold text-green-600">$29.99/month</p>
          <p className="text-sm text-gray-600">Wellness Explorer Membership</p>
        </div>
        
        <div className="space-y-2 text-sm">
          <div className="flex items-center gap-2">
            <CheckCircle className="h-4 w-4 text-green-500" />
            <span>Unlimited wellness consultations</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="h-4 w-4 text-green-500" />
            <span>24/7 concierge support</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="h-4 w-4 text-green-500" />
            <span>Personalized recommendations</span>
          </div>
        </div>
        
        <Button 
          onClick={handlePayment} 
          disabled={processing}
          className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:opacity-90"
        >
          {processing ? (
            <>
              <Loader2 className="h-4 w-4 mr-2 animate-spin" />
              Processing...
            </>
          ) : (
            'Start Membership'
          )}
        </Button>
        
        <p className="text-xs text-gray-500 text-center">
          Cancel anytime. No long-term commitments.
        </p>
      </CardContent>
    </Card>
  );
}