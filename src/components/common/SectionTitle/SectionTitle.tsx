import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp } from '../../../helpers/animation.helper';

interface SectionTitleProps {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({
  badge,
  title,
  subtitle,
  align = 'center',
  className = '',
}) => {
  const alignment = {
    left: 'text-left items-start',
    center: 'text-center items-center',
    right: 'text-right items-end',
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      variants={fadeInUp(0, 0.6)}
      className={`flex flex-col gap-3 mb-12 md:mb-16 ${
        align === 'center' ? 'max-w-3xl mx-auto' : 'w-full'
      } ${alignment[align]} ${className}`}
    >
      {badge && (
        <span className="px-4 py-1.5 text-[10px] md:text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 rounded-full border border-primary/20">
          {badge}
        </span>
      )}
      <h2 className="text-3xl md:text-5xl font-bold text-secondary leading-tight tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-sm md:text-base text-text-muted font-normal max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};

export default SectionTitle;
