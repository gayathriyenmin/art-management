import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionTitle } from '../../common/SectionTitle';
import { Input } from '../../common/Input';
import { Button } from '../../common/Button';
import { contactSchema } from '../../../helpers/validation.helper';

export const ContactSection: React.FC = () => {
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = (data: any) => {
    console.log('Contact form submitted:', data);
    setLoading(true);
    // Simulate API request
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      reset();
    }, 1500);
  };

  return (
    <section id="contact" className="py-[60px] md:py-[80px] lg:py-[150px] bg-white relative text-left border-t border-border-color">
      <div className="max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Left Column: Info Cards & Map */}
        <div className="flex flex-col gap-10">
          <div>
            <SectionTitle
              badge="Info Desk"
              title="Connect With Us"
              subtitle="We usually respond within 24 hours. Feel free to call us directly during working hours."
              align="left"
              className="mb-8 mx-0"
            />

            {/* Info Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-start gap-4 p-6 bg-slate-50 border border-border-color rounded-2xl">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                  <Phone size={18} />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-sm text-secondary mb-1">Phone Number</h4>
                  <p className="text-xs text-text-muted mb-0.5">+1 (800) 246- </p>
                  <p className="text-xs text-text-muted">+1 (415) 555-0199</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-slate-50 border border-border-color rounded-2xl">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                  <Mail size={18} />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-sm text-secondary mb-1">Email Address</h4>
                  <p className="text-xs text-text-muted mb-0.5">admissions@ academy.com</p>
                  <p className="text-xs text-text-muted">support@ academy.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-slate-50 border border-border-color rounded-2xl">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                  <MapPin size={18} />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-sm text-secondary mb-1">Academy Studio</h4>
                  <p className="text-xs text-text-muted leading-relaxed">
                    742 Evergreen Terrace,<br />Art District, SF 94103
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-slate-50 border border-border-color rounded-2xl">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                  <Clock size={18} />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-sm text-secondary mb-1">Office Hours</h4>
                  <p className="text-xs text-text-muted mb-0.5">Mon - Fri: 9:00 AM - 8:00 PM</p>
                  <p className="text-xs text-text-muted">Sat: 10:00 AM - 4:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Premium Google Map Placeholder */}
          <div className="rounded-3xl overflow-hidden border border-border-color shadow-sm h-64 relative bg-slate-100 flex items-center justify-center group">
            {/* Blur backdrop */}
            <div className="absolute inset-0 bg-cover bg-center grayscale opacity-15 transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=800&auto=format&fit=crop')" }} />
            <div className="relative z-10 flex flex-col items-center gap-2">
              <MapPin size={36} className="text-primary animate-bounce" />
              <span className="text-xs font-bold text-secondary tracking-widest uppercase mt-2">Map view deactivated for security</span>
              <span className="text-[10px] text-text-muted font-medium">Click to navigate to Google Maps external link</span>
            </div>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="bg-slate-50 border border-border-color p-8 md:p-10 rounded-3xl relative">
          <h3 className="font-heading font-bold text-xl text-secondary mb-2">Send an Enquiry</h3>
          <p className="text-xs text-text-muted mb-8 leading-relaxed">
            Fill in your details below and choose a message subject. Our admissions office will get back to you shortly.
          </p>

          <AnimatePresence mode="wait">
            {!success ? (
              <motion.form
                key="contact-form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col gap-5"
              >
                <Input label="Your Name" placeholder="Jane Doe" {...register('name')} error={errors.name?.message as string} />
                <Input label="Email Address" type="email" placeholder="jane@example.com" {...register('email')} error={errors.email?.message as string} />
                <Input label="Subject" placeholder="Inquiry about scholarship" {...register('subject')} error={errors.subject?.message as string} />

                <div className="flex flex-col gap-1.5 text-left">
                  <label className="text-xs font-semibold uppercase tracking-wider text-text-muted">Message</label>
                  <textarea
                    placeholder="Write your message here..."
                    rows={5}
                    {...register('message')}
                    className={`w-full bg-white text-secondary placeholder-text-muted text-sm rounded-xl border ${errors.message ? 'border-error focus:ring-error/20' : 'border-border-color focus:ring-primary/20'
                      } px-4 py-3 transition-all focus:outline-none focus:ring-4 focus:border-primary`}
                  />
                  {errors.message && (
                    <span className="text-xs text-error font-medium">{errors.message.message as string}</span>
                  )}
                </div>

                <Button type="submit" loading={loading} fullWidth size="lg" icon={<Send size={16} />} iconPosition="right">
                  Send Message
                </Button>
              </motion.form>
            ) : (
              <motion.div
                key="success-message"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col items-center justify-center p-8 text-center gap-4 text-success"
              >
                <CheckCircle2 size={56} className="text-success animate-pulse" />
                <h4 className="font-heading font-bold text-lg text-secondary">Message Sent Successfully</h4>
                <p className="text-xs text-text-muted max-w-xs leading-relaxed">
                  Thank you for reaching out. We have logged your request and a representative will follow up via email within 24 hours.
                </p>
                <Button variant="outline" size="sm" onClick={() => setSuccess(false)}>
                  Send another message
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
