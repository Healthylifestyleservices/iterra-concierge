import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { ShoppingCart as CartIcon, Plus, Minus, Trash2, CreditCard } from 'lucide-react';

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
  type: 'oil' | 'blend' | 'supplement' | 'accessory';
  membershipDiscount?: number;
}

interface ShippingOption {
  id: string;
  name: string;
  price: number;
  estimatedDays: string;
}

const ShoppingCart: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [selectedShipping, setSelectedShipping] = useState<string>('standard');
  const [promoCode, setPromoCode] = useState<string>('');
  const [promoDiscount, setPromoDiscount] = useState<number>(0);
  const [membershipTier, setMembershipTier] = useState<'retail' | 'wellness' | 'associate'>('retail');

  const shippingOptions: ShippingOption[] = [
    { id: 'standard', name: 'Standard Shipping', price: 6.95, estimatedDays: '5-7 business days' },
    { id: 'expedited', name: 'Expedited Shipping', price: 12.95, estimatedDays: '2-3 business days' },
    { id: 'overnight', name: 'Overnight Shipping', price: 24.95, estimatedDays: '1 business day' }
  ];

  useEffect(() => {
    // Load cart from localStorage or mock data
    const mockCart: CartItem[] = [
      {
        id: '1',
        name: 'Lavender Essential Oil',
        price: 28.00,
        quantity: 2,
        image: '/placeholder.svg',
        type: 'oil',
        membershipDiscount: 0.25
      },
      {
        id: '2',
        name: 'Serenity Blend',
        price: 42.67,
        quantity: 1,
        image: '/placeholder.svg',
        type: 'blend',
        membershipDiscount: 0.25
      },
      {
        id: '3',
        name: 'Lifelong Vitality Pack',
        price: 89.33,
        quantity: 1,
        image: '/placeholder.svg',
        type: 'supplement',
        membershipDiscount: 0.25
      }
    ];
    setCartItems(mockCart);
  }, []);

  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      removeItem(id);
      return;
    }
    setCartItems(items => 
      items.map(item => 
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id: string) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const applyPromoCode = () => {
    // Mock promo code logic
    if (promoCode.toUpperCase() === 'WELLNESS10') {
      setPromoDiscount(0.10);
    } else if (promoCode.toUpperCase() === 'NEWCUSTOMER') {
      setPromoDiscount(0.15);
    } else {
      setPromoDiscount(0);
    }
  };

  const getItemPrice = (item: CartItem) => {
    let price = item.price;
    if (membershipTier !== 'retail' && item.membershipDiscount) {
      price = price * (1 - item.membershipDiscount);
    }
    return price;
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (getItemPrice(item) * item.quantity), 0);
  const selectedShippingOption = shippingOptions.find(option => option.id === selectedShipping);
  const shippingCost = selectedShippingOption?.price || 0;
  const promoAmount = subtotal * promoDiscount;
  const total = subtotal + shippingCost - promoAmount;

  const getMembershipBadge = () => {
    switch (membershipTier) {
      case 'wellness': return <Badge className="bg-green-100 text-green-800">Wellness 25% Off</Badge>;
      case 'associate': return <Badge className="bg-purple-100 text-purple-800">Associate 25% Off</Badge>;
      default: return <Badge variant="outline">Retail Pricing</Badge>;
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-2">
          Shopping Cart
        </h1>
        <div className="flex items-center justify-center gap-2">
          <CartIcon className="h-5 w-5 text-gray-600" />
          <span className="text-gray-600">{cartItems.length} items</span>
          {getMembershipBadge()}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-4">
          {cartItems.map((item) => (
            <Card key={item.id}>
              <CardContent className="p-4">
                <div className="flex items-center space-x-4">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-16 h-16 rounded-lg object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold">{item.name}</h3>
                    <div className="flex items-center gap-2 mt-1">
                      <Badge variant="outline">{item.type}</Badge>
                      {membershipTier !== 'retail' && item.membershipDiscount && (
                        <Badge className="bg-green-100 text-green-800 text-xs">
                          {(item.membershipDiscount * 100)}% off
                        </Badge>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="w-8 text-center">{item.quantity}</span>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold">${(getItemPrice(item) * item.quantity).toFixed(2)}</div>
                    {membershipTier !== 'retail' && item.membershipDiscount && (
                      <div className="text-sm text-gray-500 line-through">
                        ${(item.price * item.quantity).toFixed(2)}
                      </div>
                    )}
                  </div>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    onClick={() => removeItem(item.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Order Summary */}
        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Order Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              
              {/* Shipping Options */}
              <div className="space-y-2">
                <label className="text-sm font-medium">Shipping</label>
                {shippingOptions.map((option) => (
                  <div key={option.id} className="flex items-center space-x-2">
                    <input
                      type="radio"
                      id={option.id}
                      name="shipping"
                      value={option.id}
                      checked={selectedShipping === option.id}
                      onChange={(e) => setSelectedShipping(e.target.value)}
                      className="text-blue-600"
                    />
                    <label htmlFor={option.id} className="text-sm flex-1">
                      <div className="flex justify-between">
                        <span>{option.name}</span>
                        <span>${option.price.toFixed(2)}</span>
                      </div>
                      <div className="text-xs text-gray-500">{option.estimatedDays}</div>
                    </label>
                  </div>
                ))}
              </div>

              {/* Promo Code */}
              <div className="space-y-2">
                <label className="text-sm font-medium">Promo Code</label>
                <div className="flex space-x-2">
                  <Input
                    placeholder="Enter code"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                  />
                  <Button onClick={applyPromoCode} variant="outline">Apply</Button>
                </div>
                {promoDiscount > 0 && (
                  <div className="text-sm text-green-600">
                    Promo applied: -{(promoDiscount * 100)}%
                  </div>
                )}
              </div>

              <Separator />
              
              {promoDiscount > 0 && (
                <div className="flex justify-between text-green-600">
                  <span>Promo Discount</span>
                  <span>-${promoAmount.toFixed(2)}</span>
                </div>
              )}
              
              <div className="flex justify-between font-semibold text-lg">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
              
              <Button className="w-full bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white">
                <CreditCard className="h-4 w-4 mr-2" />
                Proceed to Checkout
              </Button>
            </CardContent>
          </Card>

          {/* Membership Upgrade Prompt */}
          {membershipTier === 'retail' && (
            <Card className="bg-gradient-to-r from-green-50 to-blue-50">
              <CardContent className="p-4">
                <h4 className="font-semibold mb-2">Save 25% with Membership!</h4>
                <p className="text-sm text-gray-600 mb-3">
                  Upgrade to Wellness Advocate and save ${(subtotal * 0.25).toFixed(2)} on this order.
                </p>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full"
                  onClick={() => setMembershipTier('wellness')}
                >
                  Upgrade Now
                </Button>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;