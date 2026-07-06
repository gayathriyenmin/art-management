import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { Header } from '../../components/layout/Header';
import { SectionTitle } from '../../components/common/SectionTitle';
import { FAQS } from '../../constants';

export const FAQScreen: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <>
      <Helmet>
        <title>Frequently Asked Questions |   Academy</title>
        <meta name="description" content="Find answers regarding admissions, class materials, course access, and portfolio coaching." />
      </Helmet>

      {/* Header Banner */}
      <Header
        title="Help & Support"
        subtitle="Got questions? We have answers. Find everything you need to know about scheduling, tuition, and admissions."
      />

      {/* FAQ Accordion Section */}
      <section className="py-20 md:py-28 bg-white relative text-left">
        <div className="max-w-4xl mx-auto px-6 md:px-8">
          <SectionTitle
            badge="FAQ"
            title="Admissions & Policy Help"
            subtitle="Explore detailed answers below or connect with our support desk if you need immediate clarification."
          />

          <div className="flex flex-col gap-4">
            {FAQS.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className="border border-border-color rounded-2xl overflow-hidden bg-slate-50 transition-all hover:bg-white hover:shadow-md"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex items-center justify-between p-6 text-left font-heading font-bold text-secondary text-sm md:text-base cursor-pointer focus:outline-none"
                  >
                    <span>{faq.question}</span>
                    <span className="p-1 rounded-full bg-white border border-border-color text-primary flex-shrink-0 ml-4">
                      {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                      >
                        <div className="px-6 pb-6 text-sm text-text-muted leading-relaxed border-t border-border-color/60 pt-4 bg-white">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQScreen;
