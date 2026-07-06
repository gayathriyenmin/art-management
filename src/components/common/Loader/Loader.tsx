import React from 'react';
import { motion } from 'framer-motion';

interface LoaderProps {
  fullPage?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export const Loader: React.FC<LoaderProps> = ({ fullPage = false, size = 'md' }) => {
  const sizeStyles = {
    sm: 'w-6 h-6 border-2',
    md: 'w-12 h-12 border-4',
    lg: 'w-20 h-20 border-8',
  };

  const containerStyle = fullPage
    ? 'fixed inset-0 z-50 flex items-center justify-center bg-bg-base/80 backdrop-blur-sm'
    : 'flex items-center justify-center p-8';

  return (
    <div className={containerStyle}>
      <div className="relative flex items-center justify-center">
        {/* Outer Glow Ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
          className={`${sizeStyles[size]} border-t-primary border-r-transparent border-b-highlight border-l-transparent rounded-full`}
        />
        {/* Inner Pulsing Dot */}
        <motion.div
          animate={{ scale: [0.8, 1.2, 0.8] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute w-3 h-3 bg-accent rounded-full"
        />
      </div>
    </div>
  );
};

export default Loader;
