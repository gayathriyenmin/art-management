import React from 'react';
import { motion } from 'framer-motion';
import type { Instructor } from '../../../interfaces';

interface InstructorCardProps {
  instructor: Instructor;
}

export const InstructorCard: React.FC<InstructorCardProps> = ({ instructor }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      whileHover={{ y: -6 }}
      className="bg-white rounded-3xl overflow-hidden shadow-lg border border-border-color/60 p-6 flex flex-col items-center text-center transition-all duration-300 group hover:shadow-xl relative"
    >
      {/* Avatar Container */}
      <div className="relative w-36 h-36 rounded-full overflow-hidden mb-6 border-4 border-slate-50 group-hover:border-primary/20 transition-colors shadow-inner">
        <img
          src={instructor.avatar}
          alt={instructor.name}
          className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-108"
        />
      </div>

      {/* Info */}
      <h3 className="font-heading font-bold text-lg md:text-xl text-secondary mb-1">
        {instructor.name}
      </h3>
      <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-4">
        {instructor.role}
      </p>
      <p className="text-sm text-text-muted leading-relaxed mb-6 px-2">
        {instructor.bio}
      </p>

      {/* Social Links */}
      <div className="flex items-center gap-3 mt-auto">
        {instructor.socials?.instagram && (
          <a
            href={instructor.socials.instagram}
            className="p-2 rounded-full bg-slate-50 text-text-muted hover:bg-primary hover:text-white transition-all flex items-center justify-center"
            aria-label="Instagram"
          >
            <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
          </a>
        )}
        {instructor.socials?.twitter && (
          <a
            href={instructor.socials.twitter}
            className="p-2 rounded-full bg-slate-50 text-text-muted hover:bg-primary hover:text-white transition-all flex items-center justify-center"
            aria-label="Twitter / X"
          >
            <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
          </a>
        )}
        {instructor.socials?.linkedin && (
          <a
            href={instructor.socials.linkedin}
            className="p-2 rounded-full bg-slate-50 text-text-muted hover:bg-primary hover:text-white transition-all flex items-center justify-center"
            aria-label="LinkedIn"
          >
            <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
          </a>
        )}
      </div>
    </motion.div>
  );
};

export default InstructorCard;
