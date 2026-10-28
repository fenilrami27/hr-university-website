import React from 'react';
import { motion } from 'framer-motion';
import CountUp from '../ui/CountUp';
import { placementJourneySteps } from '../../data/placements';
import { Compass, CheckCircle2, ArrowRight } from 'lucide-react';

export function PlacementJourney() {
  return (
    <div className="w-full p-6 sm:p-10 rounded-3xl bg-app-surface1/70 border border-app-border backdrop-blur-md shadow-lg">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 pb-6 border-b border-app-border/60">
        <div>
          <span className="text-[11px] font-mono uppercase tracking-widest text-[#2DD4BF] font-bold flex items-center gap-1.5">
            <Compass className="w-3.5 h-3.5" />
            FOUR-STAGE PROGRESSION
          </span>
          <h4 className="text-xl sm:text-2xl font-black font-heading text-app-text mt-1">
            The HRU Placement Journey
          </h4>
          <p className="text-xs sm:text-sm text-app-muted mt-1 font-sans">
            A continuous four-year pathway turning students into industry-ready builders with verifiable public track records.
          </p>
        </div>

        <span className="text-xs font-mono text-app-muted bg-app-surface2 px-3 py-1.5 rounded-full border border-app-border self-start sm:self-auto">
          ✦ Zero Rote Exams • 100% Studio Proof
        </span>
      </div>

      {/* 4 Step Strip */}
      <div className="relative">
        {/* Desktop connecting line */}
        <div className="hidden lg:block absolute top-7 left-12 right-12 h-0.5 bg-gradient-to-r from-[#5B5BF0] via-[#2DD4BF] via-[#FFC53D] to-[#FF7A59] opacity-40 z-0" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 relative z-10">
          {placementJourneySteps.map((step, idx) => {
            // Extract numeric value from metric string (e.g., "40+ Sprints" -> 40, "120+ Scrimmages" -> 120, "1,800+ Offers Made" -> 1800)
            const numMatch = step.metric.match(/([\d,]+)/);
            const rawNum = numMatch ? parseInt(numMatch[1].replace(/,/g, ''), 10) : 0;
            const suffix = step.metric.replace(/[\d,]+/, '');

            return (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.4 }}
                className="group relative flex flex-col justify-between p-5 rounded-2xl bg-app-surface2/60 border border-app-border/70 hover:border-app-text/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <div>
                  {/* Step bubble + Timeline */}
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className="w-10 h-10 rounded-2xl flex items-center justify-center font-heading font-black text-sm text-white shadow-md transition-transform group-hover:scale-110"
                      style={{ backgroundColor: step.tint }}
                    >
                      {step.step}
                    </span>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-app-muted px-2.5 py-1 rounded-full bg-app-surface1 border border-app-border">
                      {step.timeline}
                    </span>
                  </div>

                  {/* Step Title */}
                  <h5 className="font-heading font-bold text-base text-app-text group-hover:text-hru-gold transition-colors leading-snug">
                    {step.title}
                  </h5>

                  {/* Metric Counter Badge */}
                  <div className="my-3 inline-flex items-baseline gap-1 px-2.5 py-1 rounded-lg bg-app-surface1 border border-app-border/60">
                    <span className="text-sm font-mono font-black" style={{ color: step.tint }}>
                      <CountUp to={rawNum} suffix={suffix} duration={1800} />
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-app-muted leading-relaxed font-sans mt-1">
                    {step.description}
                  </p>
                </div>

                {/* Subtext */}
                <div className="mt-4 pt-3 border-t border-app-border/40 flex items-center gap-1.5 text-[11px] font-mono text-app-muted">
                  <CheckCircle2 className="w-3.5 h-3.5" style={{ color: step.tint }} />
                  <span>Milestone verified</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default PlacementJourney;
