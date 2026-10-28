import React from 'react';
import { fictionalRecruitersRow1, fictionalRecruitersRow2 } from '../../data/placements';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';
import { Building2, Sparkles } from 'lucide-react';

export function RecruiterMarquee() {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <div className="w-full space-y-4 py-6 overflow-hidden">
      <div className="text-center mb-2">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono uppercase tracking-widest text-hru-gold bg-hru-gold/10 border border-hru-gold/25">
          <Sparkles className="w-3.5 h-3.5" />
          ✦ 250+ FICTIONAL INDUSTRY PARTNERS & VENTURE LABS ✦
        </span>
      </div>

      {/* Row 1: Forward Marquee */}
      <MarqueeRow items={fictionalRecruitersRow1} speed={32} reverse={false} prefersReducedMotion={prefersReducedMotion} />

      {/* Row 2: Reverse Marquee */}
      <MarqueeRow items={fictionalRecruitersRow2} speed={36} reverse={true} prefersReducedMotion={prefersReducedMotion} />
    </div>
  );
}

function MarqueeRow({ items, speed, reverse, prefersReducedMotion }) {
  // Duplicate 4x for continuous scroll loop
  const repeated = [...items, ...items, ...items, ...items];

  return (
    <div className="relative w-full overflow-hidden select-none py-1">
      <div
        className="flex gap-4 sm:gap-6 will-change-transform hover:[animation-play-state:paused]"
        style={{
          width: 'max-content',
          animation: prefersReducedMotion
            ? 'none'
            : `recruiterScroll ${speed}s linear infinite ${reverse ? 'reverse' : 'normal'}`,
        }}
      >
        {repeated.map((partner, idx) => (
          <div
            key={`${partner.name}-${idx}`}
            className={`inline-flex items-center gap-2.5 px-4 sm:px-5 py-2.5 rounded-2xl border font-heading text-xs sm:text-sm font-bold backdrop-blur-sm shadow-sm transition-transform duration-200 hover:scale-105 ${partner.color}`}
          >
            <Building2 className="w-4 h-4 opacity-75 shrink-0" />
            <span className="tracking-tight whitespace-nowrap">{partner.name}</span>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-black/10 dark:bg-white/10 uppercase tracking-wider font-semibold opacity-85">
              {partner.category}
            </span>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes recruiterScroll {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
}

export default RecruiterMarquee;
