import React from 'react';
import { motion } from 'framer-motion';

interface HeaderProps {
  title: string;
  subtitle?: string;
  gradientFrom?: string;
  gradientTo?: string;
}

export const Header: React.FC<HeaderProps> = ({
  title,
  subtitle,
  gradientFrom = 'from-primary/20',
  gradientTo = 'to-highlight/10',
}) => {
  return (
    <div className={`relative pt-36 pb-20 overflow-hidden bg-gradient-to-b ${gradientFrom} ${gradientTo} text-center`}>
      {/* Background blobs */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-72 h-72 rounded-full bg-primary/10 blur-3xl animate-pulse-slow pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 -translate-y-1/2 w-80 h-80 rounded-full bg-highlight/10 blur-3xl pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-6">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-4xl md:text-6xl font-black text-secondary tracking-tight mb-4"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-base md:text-lg text-text-muted max-w-xl mx-auto leading-relaxed"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </div>
  );
};

export default Header;
