import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Cpu, Zap, Globe2, Users, ArrowUpRight } from 'lucide-react';
import SectionHeading from '../components/ui/SectionHeading';
import { bentoFeatures } from '../data/universityData';

export function WhyHRUSection() {
  const iconMap = {
    Rocket,
    Cpu,
    Zap,
    Globe2,
    Users,
  };

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl 2xl:max-w-[1600px] mx-auto">
      <SectionHeading
        badge="THE HRU ADVANTAGE"
        badgeColor="gold"
        title="BUILT FOR BUILDERS."
        highlight="NOT TEST-TAKERS."
        subtitle="Higher education shouldn't feel like an industrial testing factory. We engineered every aspect of our campus, seed funding, and mentorship to accelerate your unfair advantage."
        align="center"
      />

      {/* Bento Grid Layout */}
      <div className="grid grid-cols-12 gap-6">
        {bentoFeatures.map((item, index) => {
          const Icon = iconMap[item.icon] || Zap;

          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className={`${item.size} group relative overflow-hidden rounded-3xl p-6 sm:p-8 bg-app-surface1 border border-app-border hover:border-hru-gold/50 transition-all duration-300 flex flex-col justify-between`}
            >
              {/* Subtle gradient hover layer */}
              <div
                className="absolute inset-0 bg-gradient-to-br from-[#5B5BF0]/15 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              />

              {/* Background ambient image (subtle) */}
              {item.image && (
                <div className="absolute right-0 bottom-0 w-2/5 h-2/3 opacity-15 group-hover:opacity-25 transition-opacity duration-500 pointer-events-none rounded-tl-3xl overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover filter grayscale contrast-125"
                  />
                </div>
              )}

              {/* Top Row: Icon + Badge + Arrow */}
              <div className="relative z-10 flex items-center justify-between mb-8">
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                  <Icon className="w-6 h-6 text-hru-gold" />
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-mono uppercase tracking-wider font-semibold px-3 py-1 rounded-full border border-hru-gold/30 bg-hru-gold/10 text-hru-gold">
                    {item.badge}
                  </span>
                  <div className="w-8 h-8 rounded-full border border-app-border flex items-center justify-center text-app-muted group-hover:text-hru-gold group-hover:border-hru-gold transition-colors">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </div>

              {/* Middle: Content */}
              <div className="relative z-10 space-y-3 my-auto">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold font-heading text-app-text tracking-tight leading-snug">
                  {item.title}
                </h3>
                <p className="text-sm sm:text-base text-app-muted leading-relaxed max-w-xl">
                  {item.subtitle}
                </p>
              </div>

              {/* Bottom: Big Stat Callout */}
              <div className="relative z-10 mt-8 pt-6 border-t border-app-border flex items-baseline justify-between">
                <div>
                  <div className="text-3xl sm:text-4xl font-black font-heading tracking-tight text-app-text group-hover:text-hru-gold transition-colors">
                    {item.stat}
                  </div>
                  <div className="text-[11px] font-mono uppercase tracking-widest text-app-muted mt-0.5">
                    {item.statLabel}
                  </div>
                </div>
                <span className="text-[11px] font-mono text-hru-gold group-hover:underline">
                  EXPLORE LAB →
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

export default WhyHRUSection;
