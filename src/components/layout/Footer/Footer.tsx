import React from 'react';
import { Link } from 'react-router-dom';
import { Palette, Heart } from 'lucide-react';
import { FOOTER_LINKS, ROUTES } from '../../../constants';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary text-slate-400 pt-20 pb-10 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-16 text-left">
        {/* Brand Section */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          <Link to={ROUTES.HOME} className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-primary to-highlight flex items-center justify-center text-white">
              <Palette size={20} />
            </div>
            <span className="font-heading font-extrabold text-xl tracking-tight text-white">
              <span className="text-primary font-light">ACADEMY</span>
            </span>
          </Link>
          <p className="text-sm max-w-sm leading-relaxed text-slate-400">
            A premium, state-of-the-art art academy nurturing fine art, digital sculpting, and classical oil painting for creators worldwide.
          </p>
          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <a href="#" className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all" aria-label="Instagram">
              <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
            </a>
            <a href="#" className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all" aria-label="Twitter">
              <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" /></svg>
            </a>
            <a href="#" className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all" aria-label="Facebook">
              <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
            </a>
            <a href="#" className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
            </a>
          </div>
        </div>

        {/* Explore Links */}
        <div className="flex flex-col gap-4">
          <h4 className="text-white text-sm font-bold uppercase tracking-wider">Explore</h4>
          <ul className="flex flex-col gap-2.5 text-sm">
            {FOOTER_LINKS.EXPLORE.map((link) => (
              <li key={link.label}>
                <Link to={link.path} className="hover:text-white transition-all">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Company Links */}
        <div className="flex flex-col gap-4">
          <h4 className="text-white text-sm font-bold uppercase tracking-wider">Academy</h4>
          <ul className="flex flex-col gap-2.5 text-sm">
            {FOOTER_LINKS.COMPANY.map((link) => (
              <li key={link.label}>
                <Link to={link.path} className="hover:text-white transition-all">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Legal Links */}
        <div className="flex flex-col gap-4">
          <h4 className="text-white text-sm font-bold uppercase tracking-wider">Legal</h4>
          <ul className="flex flex-col gap-2.5 text-sm">
            {FOOTER_LINKS.LEGAL.map((link) => (
              <li key={link.label}>
                <Link to={link.path} className="hover:text-white transition-all">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-6 md:px-8 pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
        <p>&copy; {new Date().getFullYear()}   Academy. All rights reserved.</p>
        <p className="flex items-center gap-1">
          Crafted with <Heart size={12} className="text-rose-500 fill-rose-500" /> for modern creators.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
