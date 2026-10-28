import React from 'react';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';

export function Marquee({
  items = [],
  speed = 28,
  reverse = false,
  pauseOnHover = true,
  className = '',
  separator = '✦',
}) {
  const prefersReducedMotion = usePrefersReducedMotion();

  // Duplicate items 4 times to guarantee seamless wrapping
  const repeatedItems = [...items, ...items, ...items, ...items];

  return (
    <div
      className={`relative w-full overflow-hidden select-none py-4 border-y border-black/[0.08] dark:border-white/[0.08] bg-black/[0.02] dark:bg-white/[0.02] backdrop-blur-sm ${className}`}
    >
      <div
        className={`flex whitespace-nowrap will-change-transform ${pauseOnHover ? 'hover:[animation-play-state:paused]' : ''}`}
        style={{
          display: 'flex',
          width: 'max-content',
          animation: prefersReducedMotion
            ? 'none'
            : `marqueeScroll ${speed}s linear infinite ${reverse ? 'reverse' : 'normal'}`,
        }}
      >
        {repeatedItems.map((item, idx) => (
          <div key={idx} className="flex items-center gap-6 sm:gap-10 px-4 sm:px-6">
            <span className="font-heading font-black text-xl sm:text-2xl md:text-3xl lg:text-4xl uppercase tracking-wider text-text-main/90">
              {item}
            </span>
            <span className="text-neon-lime text-lg sm:text-xl md:text-2xl animate-spin-slow">
              {separator}
            </span>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes marqueeScroll {
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

export default Marquee;
