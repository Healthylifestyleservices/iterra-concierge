import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';

interface Product {
  id: string;
  name: string;
  category: string;
  benefits: string[];
  tips: string[];
  isNew?: boolean;
  isBestseller?: boolean;
}

interface LuxuryProductCardProps {
  product: Product;
  className?: string;
}

export function LuxuryProductCard({ product, className = '' }: LuxuryProductCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.3 }}
      className={className}
    >
      <Card className="h-full bg-gradient-to-br from-white to-slate-50 border-slate-200 shadow-xl hover:shadow-2xl transition-all duration-300">
        <CardHeader className="pb-4">
          <div className="flex justify-between items-start mb-2">
            <CardTitle className="text-lg font-semibold text-slate-800">
              {product.name}
            </CardTitle>
            <div className="flex gap-1">
              {product.isNew && (
                <Badge className="bg-emerald-100 text-emerald-800 text-xs">
                  New
                </Badge>
              )}
              {product.isBestseller && (
                <Badge className="bg-gold-100 text-gold-800 text-xs">
                  ⭐ Bestseller
                </Badge>
              )}
            </div>
          </div>
          <p className="text-sm text-slate-600 font-medium">{product.category}</p>
        </CardHeader>
        
        <CardContent className="pt-0">
          <div className="space-y-4">
            <div>
              <h4 className="text-sm font-semibold text-slate-700 mb-2">Benefits:</h4>
              <div className="flex flex-wrap gap-1">
                {product.benefits.map((benefit, index) => (
                  <Badge 
                    key={index} 
                    variant="secondary" 
                    className="text-xs bg-slate-100 text-slate-700"
                  >
                    {benefit}
                  </Badge>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="text-sm font-semibold text-slate-700 mb-2">Usage Tips:</h4>
              <ul className="text-xs text-slate-600 space-y-1">
                {product.tips.slice(0, 2).map((tip, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-emerald-500 mr-1">•</span>
                    {tip}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full mt-6 bg-gradient-to-r from-slate-700 to-slate-800 text-white py-2 px-4 rounded-lg text-sm font-medium hover:from-slate-600 hover:to-slate-700 transition-all duration-300"
          >
            Learn More
          </motion.button>
        </CardContent>
      </Card>
    </motion.div>
  );
}