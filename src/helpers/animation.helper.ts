import type { Variants } from 'framer-motion';

export const fadeInUp = (delay = 0, duration = 0.5): Variants => ({
  hidden: { y: 40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration, ease: [0.16, 1, 0.3, 1], delay },
  },
});

export const fadeInDown = (delay = 0, duration = 0.5): Variants => ({
  hidden: { y: -40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration, ease: [0.16, 1, 0.3, 1], delay },
  },
});

export const fadeIn = (delay = 0, duration = 0.5): Variants => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration, ease: 'easeOut', delay },
  },
});

export const scaleIn = (delay = 0, duration = 0.5): Variants => ({
  hidden: { scale: 0.9, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration, ease: [0.16, 1, 0.3, 1], delay },
  },
});

export const staggerContainer = (staggerChildren = 0.1, delayChildren = 0): Variants => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

export const slideInLeft = (delay = 0, duration = 0.5): Variants => ({
  hidden: { x: -60, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration, ease: [0.16, 1, 0.3, 1], delay },
  },
});

export const slideInRight = (delay = 0, duration = 0.5): Variants => ({
  hidden: { x: 60, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration, ease: [0.16, 1, 0.3, 1], delay },
  },
});
