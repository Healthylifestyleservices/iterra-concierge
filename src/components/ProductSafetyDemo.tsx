import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface Product {
  name: string;
  description: string;
  safety_flag: 'green' | 'yellow' | 'red';
  caution_notes?: string;
  sku: string;
  category: string;
  image?: string;
}

const sampleProducts: Product[] = [
  {
    name: "Lavender Essential Oil",
    description: "Pure lavender oil for relaxation and sleep support",
    safety_flag: "green",
    caution_notes: "Generally safe for all pets when properly diluted",
    sku: "LAV-001",
    category: "Single Oils"
  },
  {
    name: "Tea Tree Essential Oil",
    description: "Powerful cleansing and purifying properties",
    safety_flag: "yellow",
    caution_notes: "Use with caution around cats. Consult veterinarian before use.",
    sku: "TTO-001",
    category: "Single Oils"
  },
  {
    name: "Eucalyptus Essential Oil",
    description: "Respiratory support and invigorating aroma",
    safety_flag: "red",
    caution_notes: "UNSAFE FOR CATS. Can cause respiratory distress in small animals.",
    sku: "EUC-001",
    category: "Single Oils"
  }
];

const ProductSafetyDemo: React.FC = () => {
  const getSafetyBadge = (flag: string) => {
    switch (flag) {
      case 'green':
        return { emoji: '🟢', text: 'SAFE', variant: 'default' as const };
      case 'yellow':
        return { emoji: '🟡', text: 'Caution / Consult Vet', variant: 'secondary' as const };
      case 'red':
        return { emoji: '🛑', text: 'UNSAFE FOR PETS', variant: 'destructive' as const };
      default:
        return { emoji: '⚪', text: 'Unknown', variant: 'outline' as const };
    }
  };

  const getCardStyle = (flag: string) => {
    switch (flag) {
      case 'green':
        return 'border-green-200 bg-green-50';
      case 'yellow':
        return 'border-yellow-200 bg-yellow-50';
      case 'red':
        return 'border-red-200 bg-red-50';
      default:
        return 'border-gray-200';
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Product Safety Demo</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sampleProducts.map((product, index) => {
          const safety = getSafetyBadge(product.safety_flag);
          return (
            <Card key={index} className={`${getCardStyle(product.safety_flag)} transition-all hover:shadow-lg`}>
              <CardHeader>
                <div className="w-full h-32 bg-gray-200 rounded-md mb-4 flex items-center justify-center">
                  <span className="text-gray-500">Product Image</span>
                </div>
                <CardTitle className="text-lg">{product.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">{product.description}</p>
                
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">{safety.emoji}</span>
                    <Badge variant={safety.variant} className="text-xs">
                      {safety.text}
                    </Badge>
                  </div>
                  
                  {product.caution_notes && (
                    <div className="bg-white/50 p-2 rounded text-xs">
                      <strong>Caution:</strong> {product.caution_notes}
                    </div>
                  )}
                  
                  <div className="text-xs text-gray-500 mt-4">
                    <div><strong>SKU:</strong> {product.sku}</div>
                    <div><strong>Category:</strong> {product.category}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default ProductSafetyDemo;