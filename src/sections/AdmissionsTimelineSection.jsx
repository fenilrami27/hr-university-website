import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Sparkles, Terminal } from 'lucide-react';
import SectionHeading from '../components/ui/SectionHeading';
import Button from '../components/ui/Button';
import { admissionsSteps } from '../data/universityData';

export function AdmissionsTimelineSection() {
  return (
    <section id="admissions" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      <SectionHeading
        badge="ADMISSION PROTOCOL"
        badgeColor="gold"
        title="ZERO ROTE EXAMS."
        highlight="100% SIGNAL."
        subtitle="We do not evaluate standard bell curves. We test raw agency, problem-solving drive, and your hunger to ship production systems."
        align="center"
      />

      <div className="relative mt-16">
        {/* Glowing Center Line */}
        <div className="absolute left-6 sm:left-1/2 top-4 bottom-4 w-0.5 bg-app-border sm:-translate-x-1/2 overflow-hidden">
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: '100%' }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
            className="w-full bg-gradient-to-b from-hru-indigo via-[#8B5CF6] to-hru-gold"
          />
        </div>

        {/* Step Items */}
        <div className="space-y-12 sm:space-y-16">
          {admissionsSteps.map((step, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex flex-col sm:flex-row items-start sm:items-center ${
                  isEven ? 'sm:flex-row-reverse' : ''
                }`}
              >
                {/* Node Pill on Line */}
                <div className="absolute left-6 sm:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-app border-2 border-hru-gold flex items-center justify-center font-mono text-xs font-bold text-hru-gold shadow-gold-glow z-10">
                  {step.step}
                </div>

                {/* Content Card */}
                <div className="w-full sm:w-[calc(50%-40px)] pl-16 sm:pl-0">
                  <div className="p-6 sm:p-8 rounded-[24px] bg-app-surface1 border border-app-border hover:border-hru-gold/50 transition-all duration-300 shadow-lg">
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-mono text-xs font-semibold px-2.5 py-0.5 rounded-full bg-hru-gold/15 text-hru-gold border border-hru-gold/30">
                        {step.duration}
                      </span>
                      <Terminal className="w-4 h-4 text-app-muted" />
                    </div>

                    <h3 className="text-xl font-bold font-heading text-app-text mb-2">
                      {step.title}
                    </h3>

                    <p className="text-sm text-app-muted leading-relaxed mb-4">
                      {step.description}
                    </p>

                    <div className="p-3 rounded-xl bg-white/5 border border-app-border text-xs text-app-muted flex items-start gap-2">
                      <Sparkles className="w-4 h-4 text-hru-gold shrink-0 mt-0.5" />
                      <span>{step.tip}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <Button
            to="/admissions"
            variant="gold"
            size="lg"
            magnetic
            icon={<ArrowUpRight className="w-5 h-5" />}
          >
            Launch Admission Form
          </Button>
        </div>
      </div>
    </section>
  );
}

export default AdmissionsTimelineSection;
