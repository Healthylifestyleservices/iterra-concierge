import React from 'react';
import { motion } from 'framer-motion';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { cn } from '../../lib/utils';

interface LuxuryInputProps {
  label?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: 'text' | 'email' | 'password' | 'number';
  variant?: 'gold' | 'rose' | 'sage';
  className?: string;
  required?: boolean;
}

export const LuxuryInput: React.FC<LuxuryInputProps> = ({
  label,
  placeholder,
  value,
  onChange,
  type = 'text',
  variant = 'gold',
  className,
  required = false
}) => {
  const variants = {
    gold: 'border-amber-200 focus:border-amber-400 focus:ring-amber-200',
    rose: 'border-rose-200 focus:border-rose-400 focus:ring-rose-200',
    sage: 'border-green-200 focus:border-green-400 focus:ring-green-200'
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-2"
    >
      {label && (
        <Label className="text-gray-700 font-medium">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </Label>
      )}
      <Input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className={cn(
          'bg-white/80 backdrop-blur-sm border-2 rounded-lg',
          'transition-all duration-300 focus:shadow-lg',
          variants[variant],
          className
        )}
      />
    </motion.div>
  );
};

export default LuxuryInput;