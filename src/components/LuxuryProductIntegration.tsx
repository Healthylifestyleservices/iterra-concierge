import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, Heart, Star, Leaf, Plus, Minus } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  benefits: string[];
  description: string;
  inStock: boolean;
  rating: number;
}

interface CartItem extends Product {
  quantity: number;
}

const LuxuryProductIntegration: React.FC = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [favorites, setFavorites] = useState<string[]>([]);
  const [showCart, setShowCart] = useState(false);

  const featuredProducts: Product[] = [
    {
      id: '1',
      name: 'Lavender Essential Oil',
      price: 28.00,
      image: '/oil-icon.svg',
      benefits: ['Relaxation', 'Sleep Support', 'Stress Relief'],
      description: 'Pure, therapeutic-grade lavender for ultimate calm',
      inStock: true,
      rating: 4.9
    },
    {
      id: '2',
      name: 'Peppermint Essential Oil',
      price: 27.33,
      image: '/oil-icon.svg',
      benefits: ['Energy', 'Focus', 'Digestive Support'],
      description: 'Invigorating peppermint for natural energy',
      inStock: true,
      rating: 4.8
    },
    {
      id: '3',
      name: 'Frankincense Essential Oil',
      price: 89.33,
      image: '/oil-icon.svg',
      benefits: ['Meditation', 'Skin Care', 'Spiritual Wellness'],
      description: 'Sacred frankincense for deep connection',
      inStock: true,
      rating: 5.0
    }
  ];

  const addToCart = (product: Product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => 
          item.id === product.id 
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId: string) => {
    setCart(prev => prev.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCart(prev => 
      prev.map(item => 
        item.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const toggleFavorite = (productId: string) => {
    setFavorites(prev => 
      prev.includes(productId)
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <div className="space-y-8">
      {/* Featured Products */}
      <div>
        <h2 className="text-2xl font-light text-amber-900 mb-6" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
          <Leaf className="inline w-6 h-6 mr-2" />
          Curated Wellness Essentials
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredProducts.map((product) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <Card className="bg-gradient-to-b from-amber-50 to-stone-50 border-amber-200 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="relative mb-4">
                    <div className="w-16 h-16 mx-auto bg-amber-100 rounded-full flex items-center justify-center mb-4">
                      <Leaf className="w-8 h-8 text-amber-600" />
                    </div>
                    
                    <button
                      onClick={() => toggleFavorite(product.id)}
                      className="absolute top-0 right-0 p-2 rounded-full bg-white/80 hover:bg-white transition-colors"
                    >
                      <Heart 
                        className={`w-4 h-4 ${
                          favorites.includes(product.id) 
                            ? 'text-red-500 fill-red-500' 
                            : 'text-gray-400'
                        }`} 
                      />
                    </button>
                  </div>
                  
                  <h3 className="text-lg font-medium text-amber-900 mb-2">{product.name}</h3>
                  
                  <div className="flex items-center mb-2">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-4 h-4 ${
                          i < Math.floor(product.rating) 
                            ? 'text-amber-500 fill-amber-500' 
                            : 'text-gray-300'
                        }`} 
                      />
                    ))}
                    <span className="text-sm text-amber-700 ml-2">({product.rating})</span>
                  </div>
                  
                  <p className="text-sm text-amber-800 mb-4">{product.description}</p>
                  
                  <div className="flex flex-wrap gap-1 mb-4">
                    {product.benefits.map(benefit => (
                      <Badge key={benefit} variant="secondary" className="text-xs bg-amber-100 text-amber-800">
                        {benefit}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-semibold text-amber-900">
                      ${product.price.toFixed(2)}
                    </span>
                    
                    <Button
                      onClick={() => addToCart(product)}
                      className="bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white"
                      disabled={!product.inStock}
                    >
                      <ShoppingBag className="w-4 h-4 mr-2" />
                      Add to Cart
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Shopping Cart */}
      {cart.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed bottom-6 left-6 z-40"
        >
          <Card className="bg-gradient-to-r from-amber-100 to-stone-100 border-amber-200 shadow-xl">
            <CardContent className="p-4">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <ShoppingBag className="w-5 h-5 text-amber-600 mr-2" />
                  <span className="font-medium text-amber-900">Cart ({getTotalItems()})</span>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowCart(!showCart)}
                  className="text-amber-600 hover:text-amber-700"
                >
                  {showCart ? 'Hide' : 'Show'}
                </Button>
              </div>
              
              {showCart && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="space-y-3 mb-4"
                >
                  {cart.map(item => (
                    <div key={item.id} className="flex items-center justify-between bg-white/50 p-3 rounded-lg">
                      <div className="flex-1">
                        <h4 className="text-sm font-medium text-amber-900">{item.name}</h4>
                        <p className="text-xs text-amber-700">${item.price.toFixed(2)} each</p>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-6 h-6 p-0"
                        >
                          <Minus className="w-3 h-3" />
                        </Button>
                        <span className="text-sm font-medium w-8 text-center">{item.quantity}</span>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-6 h-6 p-0"
                        >
                          <Plus className="w-3 h-3" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </motion.div>
              )}
              
              <div className="flex items-center justify-between pt-3 border-t border-amber-200">
                <span className="font-semibold text-amber-900">
                  Total: ${getTotalPrice().toFixed(2)}
                </span>
                <Button className="bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white">
                  Checkout
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      )}
    </div>
  );
};

export default LuxuryProductIntegration;