import { useAssociateUrl } from './AssociateUrlHandler';
import { AssociateAnalytics } from './AssociateAnalytics';
import { PaymentRequired } from './PaymentRequired';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface AssociateBrandingProps {
  children: React.ReactNode;
}

export const AssociateBranding = ({ children }: AssociateBrandingProps) => {
  const { associateData, isLoading } = useAssociateUrl();

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
      </div>
    );
  }

  // Check if we need to show payment required page
  const urlPath = window.location.pathname;
  const isITerraUrl = urlPath.match(/\/iTerra\/([^/]+)\/([^/]+)$/);
  
  if (isITerraUrl && (!associateData || !associateData.isValid)) {
    const [, name, id] = isITerraUrl;
    return <PaymentRequired associateName={name} associateId={id} />;
  }

  if (associateData && !associateData.isValid) {
    return (
      <div className="flex items-center justify-center min-h-screen p-4">
        <Card className="max-w-md">
          <CardContent className="p-6 text-center">
            <h2 className="text-xl font-semibold mb-2 text-red-600">Invalid Associate Link</h2>
            <p className="text-gray-600 mb-4">
              This associate link is not valid or has been disabled.
            </p>
            <p className="text-sm text-gray-500">
              Please contact your wellness associate for a valid link.
            </p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div>
      <AssociateAnalytics />
      {associateData && associateData.name !== 'returning-user' && (
        <div className="bg-gradient-to-r from-green-50 to-blue-50 border-b border-green-200 p-3">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Badge variant="secondary" className="bg-green-100 text-green-800">
                iTERRA Wellness Associate
              </Badge>
              <span className="font-semibold text-green-800 capitalize">
                {associateData.name.replace('-', ' ')}
              </span>
            </div>
            <div className="text-sm text-green-700">
              Your personalized iTERRA experience
            </div>
          </div>
        </div>
      )}
      {children}
    </div>
  );
};