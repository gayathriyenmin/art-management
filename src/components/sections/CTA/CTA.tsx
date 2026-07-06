import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Palette } from 'lucide-react';
import { Button } from '../../common/Button';
import { ROUTES } from '../../../constants';

export const CTA: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-white relative overflow-hidden">
      {/* Decorative gradient blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-primary/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-tr from-secondary to-purple-950 text-white rounded-3xl p-8 md:p-16 text-center shadow-xl relative overflow-hidden border border-white/5"
        >
          {/* Background circles */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-highlight/10 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center gap-6 max-w-2xl mx-auto">
            <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-highlight mb-2">
              <Palette size={24} />
            </div>

            <h2 className="text-3xl md:text-5xl font-bold font-heading tracking-tight leading-tight">
              Ready to Shape Your Creative Destiny?
            </h2>

            <p className="text-sm md:text-base text-slate-300 font-light leading-relaxed">
              Enrollments for our upcoming autumn term are now open. Secure your seat in our premium studios and begin learning under world-class master instructors.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <Link to={ROUTES.REGISTRATION}>
                <Button size="lg" variant="accent" icon={<ArrowRight size={16} />} iconPosition="right">
                  Enroll Online Now
                </Button>
              </Link>
              <Link to={ROUTES.CONTACT}>
                <Button size="lg" variant="outline" className="text-white border-white/20 hover:bg-white/10">
                  Contact Admissions
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
