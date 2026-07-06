import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, Palette } from 'lucide-react';
import { useScroll } from '../../../hooks/useScroll';
import { NAV_LINKS, ROUTES } from '../../../constants';
import { Button } from '../../common/Button';
import { MobileMenu } from '../MobileMenu/MobileMenu';

export const Navbar: React.FC = () => {
  const { scrolled } = useScroll(50);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'py-4 bg-white/75 backdrop-blur-md border-b border-border-color shadow-sm'
            : 'py-6 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link to={ROUTES.HOME} className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-primary to-highlight flex items-center justify-center text-white shadow-md shadow-primary/20 group-hover:scale-105 transition-all">
              <Palette size={20} />
            </div>
            <span className="font-heading font-extrabold text-xl tracking-tight text-secondary group-hover:text-primary transition-all">
              <span className="text-primary font-light">ACADEMY</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `text-sm font-medium transition-all hover:text-primary ${
                    isActive ? 'text-primary font-semibold' : 'text-text-muted'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Action CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <Link to={ROUTES.REGISTRATION}>
              <Button size="sm" variant="primary">
                Enroll Now
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="lg:hidden p-2 text-secondary hover:text-primary transition-all cursor-pointer"
          >
            <Menu size={24} />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </>
  );
};

export default Navbar;
