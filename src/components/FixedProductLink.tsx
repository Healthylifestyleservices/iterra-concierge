import React from 'react';
import { ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface FixedProductLinkProps {
  productName: string;
  productId?: string;
  associateId?: string;
  children?: React.ReactNode;
  className?: string;
}

const FixedProductLink: React.FC<FixedProductLinkProps> = ({ 
  productName, 
  productId, 
  associateId = '61917082', 
  children, 
  className = '' 
}) => {
  // Generate real doTERRA associate link
  const generateAssociateLink = () => {
    if (productId) {
      return `https://www.doterra.com/US/en/p/${productId}?enrollerid=${associateId}&webid=${associateId}`;
    }
    // Fallback to search if no product ID
    return `https://www.doterra.com/US/en/search?q=${encodeURIComponent(productName)}&enrollerid=${associateId}&webid=${associateId}`;
  };

  const handleClick = () => {
    const url = generateAssociateLink();
    window.open(url, '_blank', 'noopener,noreferrer');
    
    // Track click for analytics
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'product_click', {
        product_name: productName,
        product_id: productId,
        associate_id: associateId
      });
    }
  };

  if (children) {
    return (
      <div 
        onClick={handleClick}
        className={`cursor-pointer hover:opacity-80 transition-opacity ${className}`}
      >
        {children}
      </div>
    );
  }

  return (
    <Button 
      onClick={handleClick}
      className={`bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white ${className}`}
    >
      <ExternalLink className="w-4 h-4 mr-2" />
      Shop {productName}
    </Button>
  );
};

export default FixedProductLink;