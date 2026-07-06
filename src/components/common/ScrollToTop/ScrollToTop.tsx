import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { useScroll } from '../../../hooks/useScroll';

export const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();
  const { scrollY } = useScroll(300);
  const [visible, setVisible] = useState(false);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // Handle visibility based on scroll y
  useEffect(() => {
    if (scrollY > 400) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [scrollY]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          onClick={scrollToTop}
          className="fixed right-6 bottom-6 z-50 p-3.5 bg-primary text-white rounded-full shadow-lg shadow-primary/20 cursor-pointer hover:bg-primary/95 focus:outline-none transition-all flex items-center justify-center border border-white/10"
          whileHover={{ y: -3, scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <ArrowUp size={20} />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;
