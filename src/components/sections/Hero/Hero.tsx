import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Palette } from 'lucide-react';
import { Button } from '../../common/Button';
import { ROUTES } from '../../../constants';

const SLIDE_IMAGES = [
  'https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1579783928621-7a13d66a62d1?q=80&w=1600&auto=format&fit=crop'
];

export const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [typedText, setTypedText] = useState('');
  const textToType = 'Nurturing Masterpiece Artists.';

  // Preload all slider images on component mount
  useEffect(() => {
    SLIDE_IMAGES.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  // Slide rotation effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDE_IMAGES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  // Text typing effect
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

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + SLIDE_IMAGES.length) % SLIDE_IMAGES.length);
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % SLIDE_IMAGES.length);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950 text-white pt-24 px-6">
      {/* Background Image Slider using Framer Motion AnimatePresence */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence>
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1 }}
            animate={{ opacity: 1, scale: 1.08 }}
            exit={{ opacity: 0 }}
            transition={{
              opacity: { duration: 0.5, ease: 'easeInOut' },
              scale: { duration: 6, ease: 'linear' }
            }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${SLIDE_IMAGES[currentSlide]})` }}
          />
        </AnimatePresence>
        {/* Dark overlay to maintain high text visibility */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px]" />
      </div>

      {/* Floating abstract decorative shapes */}
      <motion.div
        animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
        transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
        className="absolute top-1/3 right-[15%] w-24 h-24 bg-gradient-to-br from-[#C97C7C] to-transparent rounded-2xl opacity-15 pointer-events-none hidden md:block blur-sm z-10"
      />
      <motion.div
        animate={{ y: [0, 15, 0], rotate: [0, -5, 0] }}
        transition={{ repeat: Infinity, duration: 8, ease: 'easeInOut' }}
        className="absolute bottom-1/3 left-[15%] w-32 h-32 bg-gradient-to-tr from-[#D9B26F] to-transparent rounded-full opacity-10 pointer-events-none hidden md:block blur-sm z-10"
      />

      <div className="relative max-w-5xl mx-auto text-center flex flex-col items-center gap-8 z-10">
        {/* Top Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-xs font-semibold tracking-wider text-slate-300 uppercase shadow-inner"
        >
          <Palette size={14} className="text-[#C97C7C]" />
          <span>Unlock Your Artistic Potential</span>
        </motion.div>

        {/* Heading */}
        <h1 className="text-4xl md:text-7xl font-bold font-heading tracking-tight leading-[1.1] max-w-4xl text-white">
          Where Classical Skill Meets{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C97C7C] via-rose-200 to-[#D9B26F] drop-shadow-sm">
            Digital Vision
          </span>
        </h1>

        {/* Subtitle / Typing */}
        <p className="text-base md:text-xl text-slate-300 max-w-2xl min-h-[30px] font-light leading-relaxed">
          {typedText}
          <span className="animate-ping text-[#C97C7C]">|</span>
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
      </div>

      {/* Artistic Slider Navigation Controls - Calligraphic Paintbrush Strokes */}
      <button
        onClick={handlePrev}
        className="absolute left-8 top-1/2 -translate-y-1/2 w-16 h-16 flex items-center justify-center text-white/70 hover:text-primary transition-all duration-300 hover:scale-115 active:scale-95 z-20 hidden md:flex cursor-pointer"
        aria-label="Previous slide"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10 drop-shadow-md">
          {/* Main calligraphic flick */}
          <path d="M20 12 C14 11.2 8 10 4 12" strokeWidth="2.2" />
          {/* Upper brush head */}
          <path d="M4 12 C6.8 9.8 8.5 7 9.5 4" strokeWidth="1.5" />
          {/* Lower brush head */}
          <path d="M4 12 C6.8 14.2 8.5 17 9.5 20" strokeWidth="1.5" />
        </svg>
      </button>
      <button
        onClick={handleNext}
        className="absolute right-8 top-1/2 -translate-y-1/2 w-16 h-16 flex items-center justify-center text-white/70 hover:text-primary transition-all duration-300 hover:scale-115 active:scale-95 z-20 hidden md:flex cursor-pointer"
        aria-label="Next slide"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10 drop-shadow-md">
          {/* Main calligraphic flick */}
          <path d="M4 12 C10 11.2 16 10 20 12" strokeWidth="2.2" />
          {/* Upper brush head */}
          <path d="M20 12 C17.2 9.8 15.5 7 14.5 4" strokeWidth="1.5" />
          {/* Lower brush head */}
          <path d="M20 12 C17.2 14.2 15.5 17 14.5 20" strokeWidth="1.5" />
        </svg>
      </button>
    </section>
  );
};

export default Hero;
