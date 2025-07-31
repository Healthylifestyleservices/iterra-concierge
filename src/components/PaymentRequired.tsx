import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { AlertTriangle, CreditCard } from 'lucide-react';

interface PaymentRequiredProps {
  associateName?: string;
  orderId?: string;
}

export const PaymentRequired = ({ associateName, orderId }: PaymentRequiredProps) => {
  const handlePayment = () => {
    // Redirect to main payment page with associate metadata
    const paymentUrl = `https://healthlifestyleservices.com/payment-required?associate=${associateName}&order_id=${orderId}`;
    window.location.href = paymentUrl;
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="mx-auto mb-4 w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
            <AlertTriangle className="w-6 h-6 text-red-600" />
          </div>
          <CardTitle className="text-xl font-semibold text-gray-900">
            Payment Required
          </CardTitle>
          <CardDescription className="text-gray-600">
            {associateName ? `Access to ${associateName}'s Concierge` : 'Access to iTERRA Wellness Concierge'} requires an active Stripe subscription
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="text-sm text-gray-600 text-center">
            {associateName && (
              <p>Associate: <span className="font-medium">{associateName}</span></p>
            )}
            {orderId && (
              <p>Order ID: <span className="font-medium">{orderId}</span></p>
            )}
            <p className="mt-2 font-medium text-red-600">
              Link dies immediately if unpaid
            </p>
            <p className="mt-2">
              This secure link is locked to your device and requires active payment to access.
            </p>
          </div>
          <Button 
            onClick={handlePayment}
            className="w-full bg-blue-600 hover:bg-blue-700"
            size="lg"
          >
            <CreditCard className="w-4 h-4 mr-2" />
            Activate Subscription
          </Button>
          <p className="text-xs text-gray-500 text-center">
            Secure payment via Stripe • Device-locked access
          </p>
        </CardContent>
      </Card>
    </div>
  );
};