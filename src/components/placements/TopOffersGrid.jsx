import React from 'react';
import { motion } from 'framer-motion';
import { topOffersCards } from '../../data/placements';
import { Award, Building2, MapPin } from 'lucide-react';

export function TopOffersGrid() {
  return (
    <div className="w-full">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <span className="text-[11px] font-mono uppercase tracking-widest text-[#F472B6] font-bold flex items-center gap-1.5">
            <Award className="w-3.5 h-3.5" />
            MARQUEE SIGNINGS
          </span>
          <h4 className="text-xl sm:text-2xl font-black font-heading text-app-text mt-1">
            Top Cohort Offers & Early Leadership Roles
          </h4>
          <p className="text-xs sm:text-sm text-app-muted mt-1 font-sans">
            Graduating fellows joining high-conviction deep-tech startups and advanced laboratories.
          </p>
        </div>

        <span className="text-xs font-mono text-app-muted bg-app-surface2 px-3 py-1.5 rounded-full border border-app-border self-start sm:self-auto">
          ✦ Verified Signing Terms
        </span>
      </div>

      {/* Grid of 6 cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {topOffersCards.map((offer, idx) => (
          <motion.div
            key={offer.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.08, duration: 0.4 }}
            className="group relative rounded-3xl p-6 bg-app-surface1/70 border border-app-border backdrop-blur-md shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-app-text/30 flex flex-col justify-between"
          >
            {/* Top row: Avatar + Badge */}
            <div>
              <div className="flex items-center justify-between gap-3 mb-4">
                {/* Gradient Initials Avatar */}
                <div
                  className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${offer.avatarGradient} flex items-center justify-center text-[#0A0B1E] font-heading font-black text-lg shadow-md shrink-0 transition-transform group-hover:scale-105`}
                  title={`${offer.name} (${offer.initials})`}
                >
                  {offer.initials}
                </div>

                <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-app-surface2 border border-app-border text-app-muted group-hover:text-app-text transition-colors">
                  {offer.badge}
                </span>
              </div>

              {/* Package CTC Big Callout */}
              <div className="flex items-baseline justify-between gap-2 mt-2">
                <span className="text-2xl sm:text-3xl font-black font-heading tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-hru-coral via-[#FFC53D] to-hru-mint">
                  {offer.packageAmt}
                </span>
                <span className="text-[11px] font-mono text-app-muted uppercase">
                  Annual CTC
                </span>
              </div>

              {/* Student Name & Role */}
              <div className="mt-3">
                <h5 className="font-heading font-black text-base text-app-text group-hover:text-hru-gold transition-colors">
                  {offer.name}
                </h5>
                <p className="text-xs font-heading font-semibold text-app-text/90 mt-0.5 leading-snug">
                  {offer.role}
                </p>
              </div>
            </div>

            {/* Bottom metadata */}
            <div className="mt-5 pt-4 border-t border-app-border/60 flex items-center justify-between text-xs font-mono text-app-muted">
              <span className="flex items-center gap-1 text-app-text/80 font-bold">
                <Building2 className="w-3.5 h-3.5 text-hru-indigo" />
                {offer.company}
              </span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3 h-3 text-app-muted" />
                {offer.location}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default TopOffersGrid;
