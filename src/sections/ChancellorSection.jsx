import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Sparkles } from 'lucide-react';
import mediaRegistry from '../data/media';

export function ChancellorSection() {
  const { chancellor } = mediaRegistry;

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="rounded-3xl p-8 sm:p-14 bg-app-surface1 border border-app-border relative overflow-hidden shadow-2xl">
        {/* Subtle background ambient blur */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-hru-indigo/15 rounded-full blur-[100px] pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Portrait Photo Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-3xl overflow-hidden aspect-[4/5] border border-white/10 shadow-2xl">
              <img
                src={chancellor.src}
                alt={chancellor.alt}
                loading="lazy"
                className="w-full h-full object-cover filter brightness-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0B1E] via-transparent to-transparent opacity-80" />

              <div className="absolute bottom-6 left-6 right-6">
                <span className="font-mono text-xs font-semibold px-3 py-1 rounded-full bg-hru-gold text-hru-midnight inline-block mb-2">
                  OFFICE OF THE CHANCELLOR
                </span>
                <h4 className="font-heading font-black text-xl text-white">
                  {chancellor.name}
                </h4>
                <p className="text-xs text-[#A4A8C4] font-mono">
                  {chancellor.role}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Quote & Manifesto Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-hru-indigo/30 bg-hru-indigo/10 text-hru-indigo text-xs font-mono uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5" />
              Leadership Perspective
            </div>

            <Quote className="w-12 h-12 text-hru-gold/40" />

            <blockquote className="text-xl sm:text-2xl md:text-3xl font-heading font-bold text-app-text leading-snug">
              "We built HR University to answer a simple, urgent question: why should curious, ambitious young minds spend four years memorizing yesterday's textbooks when they could be architecting tomorrow's systems?"
            </blockquote>

            <p className="text-sm sm:text-base text-app-muted leading-relaxed">
              At HRU, academic rigor does not mean passive silence. It means submitting code to open-source foundation models, sequencing novel proteins in wet labs, and presenting real venture decks before graduation. We provide the capital, the supercomputing infrastructure, and the mentorship. You bring the fire to build.
            </p>

            <div className="pt-4 border-t border-app-border flex flex-wrap items-center justify-between gap-4">
              <div>
                <div className="font-heading font-extrabold text-base text-app-text">
                  Dr. Althea Sterling, Ph.D.
                </div>
                <div className="text-xs font-mono text-hru-gold">
                  Former Principal Research Scientist, AI Systems Institute
                </div>
              </div>

              {/* Graphic Signature placeholder */}
              <div className="font-display italic text-2xl text-app-muted select-none">
                Althea Sterling
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default ChancellorSection;
