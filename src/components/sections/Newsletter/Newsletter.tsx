import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle2 } from 'lucide-react';
import { Button } from '../../common/Button';

export const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setLoading(true);
    // Simulate API request
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setEmail('');
    }, 1000);
  };

  return (
    <section className="py-20 md:py-28 bg-bg-base relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="bg-white rounded-3xl p-8 md:p-14 border border-border-color shadow-lg glass-card text-center relative overflow-hidden">
          <h2 className="text-2xl md:text-4xl font-bold font-heading text-secondary mb-3">
            Subscribe to our newsletter
          </h2>
          <p className="text-sm text-text-muted mb-8 max-w-lg mx-auto">
            Get early announcements, exclusive workshops, student exhibitions, and expert art tips delivered straight to your inbox.
          </p>

          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
              >
                <input
                  type="email"
                  required
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-grow px-5 py-3 rounded-full border border-border-color bg-white text-secondary text-sm focus:outline-none focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all"
                />
                <Button type="submit" loading={loading} icon={<Send size={14} />} iconPosition="right">
                  Subscribe
                </Button>
              </motion.form>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col items-center gap-3 text-success p-4"
              >
                <CheckCircle2 size={36} className="text-success" />
                <span className="text-sm font-bold">Successfully subscribed! Thank you.</span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
