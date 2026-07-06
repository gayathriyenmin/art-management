import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Palette } from 'lucide-react';
import { Button } from '../../common/Button';
import { ROUTES } from '../../../constants';

export const Hero: React.FC = () => {
  const [typedText, setTypedText] = useState('');
  const textToType = 'Nurturing Masterpiece Artists.';

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setTypedText(textToType.substring(0, index));
      index++;
      if (index > textToType.length) {
        clearInterval(interval);
      }
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-secondary via-secondary to-purple-950 text-white pt-24 px-6">
      {/* Dynamic blurred blobs */}
      <div className="absolute top-1/4 left-[10%] w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-slow pointer-events-none" />
      <div className="absolute bottom-1/4 right-[10%] w-[500px] h-[500px] bg-highlight/10 rounded-full blur-3xl animate-float pointer-events-none" />

      {/* Floating abstract decorative shapes */}
      <motion.div
        animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
        transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
        className="absolute top-1/3 right-[20%] w-24 h-24 bg-gradient-to-br from-highlight to-transparent rounded-2xl opacity-20 pointer-events-none hidden md:block blur-sm"
      />
      <motion.div
        animate={{ y: [0, 15, 0], rotate: [0, -5, 0] }}
        transition={{ repeat: Infinity, duration: 8, ease: 'easeInOut' }}
        className="absolute bottom-1/3 left-[20%] w-32 h-32 bg-gradient-to-tr from-primary to-transparent rounded-full opacity-15 pointer-events-none hidden md:block blur-sm"
      />

      <div className="relative max-w-5xl mx-auto text-center flex flex-col items-center gap-8 z-10">
        {/* Top Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-xs font-semibold tracking-wider text-slate-300 uppercase shadow-inner"
        >
          <Palette size={14} className="text-highlight" />
          <span>Unlock Your Artistic Potential</span>
        </motion.div>

        {/* Heading */}
        <h1 className="text-4xl md:text-7xl font-bold font-heading tracking-tight leading-[1.1] max-w-4xl text-white">
          Where Classical Skill Meets{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-400 to-highlight drop-shadow-sm">
            Digital Vision
          </span>
        </h1>

        {/* Subtitle / Typing */}
        <p className="text-base md:text-xl text-slate-300 max-w-2xl min-h-[30px] font-light leading-relaxed">
          {typedText}
          <span className="animate-ping text-highlight">|</span>
        </p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-4"
        >
          <Link to={ROUTES.COURSES}>
            <Button size="lg" variant="primary" icon={<ArrowRight size={18} />} iconPosition="right">
              Explore Courses
            </Button>
          </Link>
          <Link to={ROUTES.REGISTRATION}>
            <Button size="lg" variant="outline" className="text-white border-white/20 hover:bg-white/10 hover:text-white">
              Enroll Online
            </Button>
          </Link>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer text-slate-400 hover:text-white transition-colors"
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
        >
          <span className="text-xs uppercase tracking-widest font-semibold">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
            className="w-5 h-9 rounded-full border-2 border-slate-400/50 flex justify-center pt-1.5"
          >
            <div className="w-1.5 h-1.5 bg-highlight rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
