import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Crown, Lock } from 'lucide-react';
import MembershipSection from './MembershipSection';
import PaymentHandler from './PaymentHandler';

interface MembershipGateProps {
  children: React.ReactNode;
}

export default function MembershipGate({ children }: MembershipGateProps) {
  const [hasMembership, setHasMembership] = useState(false);
  const [loading, setLoading] = useState(true);
  const [showPayment, setShowPayment] = useState(false);
  const [user, setUser] = useState<any>(null);

  const checkMembership = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    
    if (user) {
      setUser(user);
      const { data: payment } = await supabase
        .from('associate_payments')
        .select('*')
        .eq('associate_id', user.id)
        .eq('status', 'completed')
        .order('created_at', { ascending: false })
        .limit(1)
        .single();
      
      setHasMembership(!!payment);
    }
    setLoading(false);
  };

  useEffect(() => {
    checkMembership();
  }, []);

  const handlePaymentSuccess = () => {
    setHasMembership(true);
    setShowPayment(false);
  };

  const handleSelectPlan = () => {
    setShowPayment(true);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-lg">Loading...</div>
      </div>
    );
  }

  if (!hasMembership) {
    if (showPayment) {
      return (
        <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 p-6 flex items-center justify-center">
          <PaymentHandler onPaymentSuccess={handlePaymentSuccess} />
        </div>
      );
    }

    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 p-6">
        <div className="max-w-4xl mx-auto">
          <Card className="mb-8 border-2 border-purple-200">
            <CardHeader className="text-center bg-gradient-to-r from-purple-500 to-pink-500 text-white">
              <div className="flex items-center justify-center gap-3">
                <Lock className="h-8 w-8" />
                <CardTitle className="text-2xl">Membership Required</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="p-8 text-center space-y-4">
              <p className="text-lg text-gray-700">
                Access to the Associate Wellness Concierge requires an active membership.
              </p>
              <p className="text-gray-600">
                Join today to unlock unlimited wellness consultations, personalized recommendations, 
                and 24/7 support for your wellness journey.
              </p>
              <div className="flex items-center justify-center gap-2 text-purple-600 font-medium">
                <Crown className="h-5 w-5" />
                <span>Premium Wellness Concierge Access</span>
              </div>
            </CardContent>
          </Card>
          
          <MembershipSection onSelectPlan={handleSelectPlan} />
        </div>
      </div>
    );
  }

  return <>{children}</>;
}