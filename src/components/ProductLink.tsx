import React from 'react';
import { Button } from '@/components/ui/button';
import { ExternalLink, User } from 'lucide-react';
import { useAppContext } from '@/contexts/AppContext';
import { useToast } from '@/hooks/use-toast';

interface ProductLinkProps {
  productName: string;
  baseUrl?: string;
  size?: 'sm' | 'default' | 'lg';
  variant?: 'default' | 'outline' | 'secondary';
  className?: string;
}

export const ProductLink: React.FC<ProductLinkProps> = ({ 
  productName, 
  baseUrl = 'https://www.doterra.com/US/en/shop',
  size = 'sm', 
  variant = 'outline',
  className = ''
}) => {
  const { associateInfo, generateShoppingLink } = useAppContext();
  const { toast } = useToast();

  const handleClick = () => {
    if (!associateInfo) {
      toast({
        title: "Associate Info Required",
        description: "Please enter your associate information to enable product links with your ID.",
        duration: 5000,
      });
      return;
    }

    const linkWithAssociateId = generateShoppingLink(baseUrl);
    
    toast({
      title: "Opening Official Store",
      description: `Link includes your associate ID: ${associateInfo.associateId}`,
      duration: 3000,
    });
    
    window.open(linkWithAssociateId, '_blank', 'noopener,noreferrer');
  };

  return (
    <Button 
      size={size}
      variant={variant}
      onClick={handleClick}
      className={`${className} transition-all duration-200 hover:scale-105 relative`}
      title={associateInfo ? `Shop with associate ID: ${associateInfo.associateId}` : "Enter associate info to enable links"}
    >
      {associateInfo ? (
        <ExternalLink className="h-3 w-3 mr-1" />
      ) : (
        <User className="h-3 w-3 mr-1 text-orange-500" />
      )}
      Shop {productName}
    </Button>
  );
};

export default ProductLink;