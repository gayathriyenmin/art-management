import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Palette } from 'lucide-react';
import { NAV_LINKS, ROUTES } from '../../../constants';
import { Button } from '../../common/Button';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Overlay backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-secondary/30 backdrop-blur-lg"
          />

          {/* Sidebar */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 bottom-0 w-80 max-w-full bg-white shadow-2xl z-10 flex flex-col p-6 border-l border-border-color"
          >
            <div className="flex items-center justify-between mb-8">
              <Link to={ROUTES.HOME} onClick={onClose} className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-primary to-highlight flex items-center justify-center text-white">
                  <Palette size={16} />
                </div>
                <span className="font-heading font-extrabold text-lg text-secondary">
                  <span className="text-primary font-light">ACADEMY</span>
                </span>
              </Link>
              <button
                onClick={onClose}
                className="p-2 text-text-muted hover:text-secondary rounded-full hover:bg-slate-100 transition-all cursor-pointer"
              >
                <X size={20} />
              </button>
            </div>

            {/* Links */}
            <nav className="flex flex-col gap-5 mb-8">
              {NAV_LINKS.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={onClose}
                  className={({ isActive }) =>
                    `text-base font-semibold py-1.5 transition-all hover:text-primary ${
                      isActive ? 'text-primary pl-2 border-l-2 border-primary' : 'text-text-muted'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>

            {/* CTA */}
            <div className="mt-auto flex flex-col gap-4">
              <Link to={ROUTES.REGISTRATION} onClick={onClose}>
                <Button fullWidth>Enroll Now</Button>
              </Link>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
