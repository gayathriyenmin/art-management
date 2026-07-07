import React from 'react';
import { motion } from 'framer-motion';
import { SectionTitle } from '../../common/SectionTitle';
import { AchievementCard } from '../../cards/AchievementCard';
import { ACHIEVEMENTS } from '../../../constants';

export const Features: React.FC = () => {
  return (
    <section className="py-[60px] md:py-[80px] lg:py-[150px] mb-12 md:mb-28 bg-gradient-to-br from-bg-base via-primary/10 to-accent/20 relative overflow-hidden">
      {/* Dynamic Floating Background Shine/Glow Blobs */}
      <motion.div
        initial={{ x: 0, y: 0, scale: 1 }}
        animate={{
          x: [0, 40, -20, 0],
          y: [0, -30, 40, 0],
          scale: [1, 1.15, 0.9, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-gradient-to-tr from-primary/20 to-accent/15 rounded-full blur-[150px] pointer-events-none z-0"
      />
      <motion.div
        initial={{ x: 0, y: 0, scale: 1 }}
        animate={{
          x: [0, -30, 40, 0],
          y: [0, 40, -30, 0],
          scale: [1, 0.9, 1.1, 1],
        }}
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-[-20%] right-[-10%] w-[550px] h-[550px] bg-gradient-to-br from-accent/20 to-primary/15 rounded-full blur-[130px] pointer-events-none z-0"
      />

      {/* Moving Shine Line Effect */}
      <motion.div
        initial={{ left: '-100%' }}
        animate={{ left: '200%' }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "linear",
          repeatDelay: 1
        }}
        className="absolute top-1/2 -translate-y-1/2 w-[150px] h-[4000px] bg-gradient-to-r from-transparent via-white/60 to-transparent rotate-[35deg] pointer-events-none z-0"
      />

      {/* Twinkling/Rotating Sparkles ("Shine Objects") */}
      <motion.div
        initial={{ opacity: 0.1, rotate: 0, scale: 0.8 }}
        animate={{
          opacity: [0.1, 0.7, 0.1],
          rotate: [0, 90, 180],
          scale: [0.8, 1.2, 0.8],
          y: [0, -15, 0]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-[15%] left-[20%] text-accent/50 pointer-events-none z-0 hidden md:block"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
          <path d="M12,0 C12,6 18,12 24,12 C18,12 12,18 12,24 C12,18 6,12 0,12 C6,12 12,6 12,0 Z" />
        </svg>
      </motion.div>

      <motion.div
        initial={{ opacity: 0.1, rotate: 45, scale: 0.6 }}
        animate={{
          opacity: [0.1, 0.8, 0.1],
          rotate: [45, 135, 225],
          scale: [0.6, 1.1, 0.6],
          y: [0, 20, 0]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-[28%] right-[15%] text-primary/40 pointer-events-none z-0 hidden md:block"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12 filter drop-shadow-[0_0_8px_rgba(201,124,124,0.4)]">
          <path d="M12,0 C12,6 18,12 24,12 C18,12 12,18 12,24 C12,18 6,12 0,12 C6,12 12,6 12,0 Z" />
        </svg>
      </motion.div>

      <motion.div
        initial={{ opacity: 0.1, rotate: 15, scale: 0.7 }}
        animate={{
          opacity: [0.1, 0.6, 0.1],
          rotate: [15, -45, 15],
          scale: [0.7, 1.0, 0.7],
          x: [0, -10, 0]
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-[20%] left-[12%] text-accent/40 pointer-events-none z-0 hidden md:block"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
          <path d="M12,0 C12,6 18,12 24,12 C18,12 12,18 12,24 C12,18 6,12 0,12 C6,12 12,6 12,0 Z" />
        </svg>
      </motion.div>

      <motion.div
        initial={{ opacity: 0.1, rotate: 90, scale: 0.5 }}
        animate={{
          opacity: [0.1, 0.9, 0.1],
          rotate: [90, 270, 90],
          scale: [0.5, 1.3, 0.5],
          y: [0, -10, 0]
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-[35%] right-[22%] text-primary/50 pointer-events-none z-0 hidden md:block"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
          <path d="M12,0 C12,6 18,12 24,12 C18,12 12,18 12,24 C12,18 6,12 0,12 C6,12 12,6 12,0 Z" />
        </svg>
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        <SectionTitle
          badge="Why Choose Us"
          title="Elevating Artistic Standards"
          subtitle="Discover how our premium resources, master instruction, and global alumni networks set us apart as an industry leader."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {ACHIEVEMENTS.map((ach) => (
            <AchievementCard key={ach.id} achievement={ach} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
