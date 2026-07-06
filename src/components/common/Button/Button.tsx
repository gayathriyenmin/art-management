import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'text' | 'accent';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  loading?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  loading = false,
  icon,
  iconPosition = 'left',
  className = '',
  ...props
}) => {
  const baseStyle = 'inline-flex items-center justify-center font-medium rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer whitespace-nowrap';

  const variants = {
    primary: 'bg-primary text-white hover:bg-opacity-95 shadow-lg shadow-primary/20 focus:ring-primary',
    secondary: 'bg-secondary text-white hover:bg-opacity-90 shadow-lg shadow-secondary/10 focus:ring-secondary',
    outline: 'border border-border-color text-secondary hover:bg-secondary/5 focus:ring-secondary',
    text: 'text-secondary hover:text-primary bg-transparent rounded-none focus:ring-transparent',
    accent: 'bg-accent text-secondary hover:bg-opacity-95 shadow-lg shadow-accent/25 focus:ring-accent',
  };

  const sizes = {
    sm: 'px-4 py-1.5 text-xs',
    md: 'px-6 py-2.5 text-sm',
    lg: 'px-8 py-3.5 text-base',
  };

  const widthStyle = fullWidth ? 'w-full' : '';

  return (
    <motion.button
      whileHover={{ y: -2, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseStyle} ${variants[variant]} ${sizes[size]} ${widthStyle} ${className}`}
      disabled={loading || props.disabled}
      {...(props as any)}
    >
      {loading && (
        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      )}
      {!loading && icon && iconPosition === 'left' && <span className="mr-2 inline-flex items-center">{icon}</span>}
      {children}
      {!loading && icon && iconPosition === 'right' && <span className="ml-2 inline-flex items-center">{icon}</span>}
    </motion.button>
  );
};
export default Button;
