import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import SectionHeading from '../components/ui/SectionHeading';
import { faqsData } from '../data/universityData';

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <SectionHeading
        badge="FREQUENTLY ASKED"
        badgeColor="gold"
        title="EVERYTHING YOU NEED"
        highlight="TO KNOW."
        subtitle="Clear answers on accreditation, hardware kits, global credit compatibility, and venture tickets."
        align="center"
      />

      <div className="space-y-4 mt-12">
        {faqsData.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.04 }}
              className={`
                rounded-2xl transition-all duration-300 overflow-hidden
                border
                ${
                  isOpen
                    ? 'border-hru-gold/50 bg-app-surface1 shadow-lg'
                    : 'border-app-border bg-app-surface1/60 hover:border-app-border'
                }
              `}
            >
              <button
                type="button"
                onClick={() => toggleFAQ(index)}
                className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
              >
                <span className="font-heading font-bold text-base sm:text-lg text-app-text">
                  {faq.question}
                </span>
                <div
                  className={`
                    w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors duration-200
                    ${isOpen ? 'bg-hru-gold text-hru-midnight font-bold' : 'bg-white/5 text-app-muted'}
                  `}
                >
                  {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                </div>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{
                      type: 'spring',
                      stiffness: 300,
                      damping: 30,
                    }}
                  >
                    <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-app-muted leading-relaxed border-t border-app-border">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

export default FAQSection;
