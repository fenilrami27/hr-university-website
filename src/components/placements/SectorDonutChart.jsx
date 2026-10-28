import React, { useState } from 'react';
import { motion } from 'framer-motion';
import CountUp from '../ui/CountUp';
import { sectorDonutData } from '../../data/placements';
import { PieChart, Briefcase, Sparkles, Building2 } from 'lucide-react';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';

export function SectorDonutChart() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [replayKey, setReplayKey] = useState(0);
  const prefersReducedMotion = usePrefersReducedMotion();

  // Circle parameters
  const radius = 68;
  const strokeWidth = 24;
  const circumference = 2 * Math.PI * radius; // ~427.256

  // Pre-calculate cumulative offsets for 100% circumference
  let cumulativePercent = 0;
  const slices = sectorDonutData.map((d, index) => {
    const startPercent = cumulativePercent;
    cumulativePercent += d.percentage;
    const strokeDash = (d.percentage / 100) * circumference;
    const strokeOffset = -((startPercent / 100) * circumference);
    return {
      ...d,
      index,
      strokeDash,
      strokeOffset,
      startPercent,
    };
  });

  const activeSlice = hoveredIndex !== null ? slices[hoveredIndex] : null;

  return (
    <div className="w-full p-6 sm:p-10 rounded-3xl bg-app-surface1/70 border border-app-border backdrop-blur-md shadow-lg">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-app-border/60">
        <div>
          <span className="text-[11px] font-mono uppercase tracking-widest text-hru-coral font-bold flex items-center gap-1.5">
            <PieChart className="w-3.5 h-3.5" />
            INDUSTRY DISTRIBUTION
          </span>
          <h4 className="text-xl sm:text-2xl font-black font-heading text-app-text mt-1">
            Sector Split & Employer Domains
          </h4>
          <p className="text-xs sm:text-sm text-app-muted mt-1 font-sans">
            Balanced career diversity spanning artificial intelligence, healthcare, venture capital, and creative studios.
          </p>
        </div>

        <button
          onClick={() => setReplayKey((prev) => prev + 1)}
          className="self-start sm:self-auto text-xs font-mono font-bold px-3 py-1.5 rounded-full bg-app-surface2 border border-app-border text-app-muted hover:text-app-text transition-colors flex items-center gap-1.5"
        >
          <span>REPLAY DONUT</span>
          <span>⟳</span>
        </button>
      </div>

      {/* Grid: Donut visual on left, legend list on right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Donut SVG Container */}
        <div className="lg:col-span-5 flex justify-center items-center relative">
          <div className="relative w-64 h-64 sm:w-72 sm:h-72 flex items-center justify-center">
            <svg
              viewBox="0 0 200 200"
              className="w-full h-full -rotate-90 transform drop-shadow-lg"
              aria-hidden="true"
            >
              {/* Background circle track */}
              <circle
                cx="100"
                cy="100"
                r={radius}
                stroke="currentColor"
                strokeWidth={strokeWidth}
                fill="none"
                className="text-app-surface2"
              />

              {/* Slices */}
              {slices.map((slice) => {
                const isHovered = hoveredIndex === slice.index;
                const isAnyHovered = hoveredIndex !== null;
                const opacity = isHovered ? 1 : isAnyHovered ? 0.45 : 0.95;
                const currentStrokeWidth = isHovered ? strokeWidth + 4 : strokeWidth;

                return (
                  <motion.circle
                    key={`${slice.sector}-${replayKey}`}
                    cx="100"
                    cy="100"
                    r={radius}
                    stroke={slice.color}
                    strokeWidth={currentStrokeWidth}
                    strokeDasharray={`${slice.strokeDash} ${circumference}`}
                    strokeDashoffset={slice.strokeOffset}
                    strokeLinecap="butt"
                    fill="none"
                    initial={{
                      strokeDasharray: prefersReducedMotion
                        ? `${slice.strokeDash} ${circumference}`
                        : `0 ${circumference}`,
                    }}
                    animate={{
                      strokeDasharray: `${slice.strokeDash} ${circumference}`,
                    }}
                    transition={{
                      duration: prefersReducedMotion ? 0 : 1.4,
                      delay: prefersReducedMotion ? 0 : slice.index * 0.12,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    onMouseEnter={() => setHoveredIndex(slice.index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    style={{
                      cursor: 'pointer',
                      opacity,
                      transition: 'opacity 0.2s, stroke-width 0.2s',
                    }}
                  />
                );
              })}
            </svg>

            {/* Center Content / Tooltip readout */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4 pointer-events-none select-none">
              {activeSlice ? (
                <motion.div
                  key={activeSlice.sector}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.15 }}
                  className="flex flex-col items-center"
                >
                  <span
                    className="text-3xl sm:text-4xl font-black font-heading leading-tight"
                    style={{ color: activeSlice.color }}
                  >
                    {activeSlice.percentage}%
                  </span>
                  <span className="text-xs font-heading font-bold text-app-text max-w-[130px] truncate mt-0.5">
                    {activeSlice.sector}
                  </span>
                  <span className="text-[10px] font-mono text-app-muted">
                    {activeSlice.recruitersCount}
                  </span>
                </motion.div>
              ) : (
                <div className="flex flex-col items-center">
                  <span className="text-2xl sm:text-3xl font-black font-heading text-app-text">
                    100%
                  </span>
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-hru-gold mt-0.5">
                    DIVERSIFIED
                  </span>
                  <span className="text-[10px] font-mono text-app-muted mt-1">
                    Hover for breakdown
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Legend List */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          {slices.map((item) => {
            const isHovered = hoveredIndex === item.index;
            return (
              <div
                key={item.sector}
                onMouseEnter={() => setHoveredIndex(item.index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`p-3.5 rounded-2xl border transition-all duration-200 cursor-pointer flex items-center justify-between ${
                  isHovered
                    ? 'bg-app-surface2 border-app-text/30 shadow-md scale-[1.02]'
                    : 'bg-app-surface1/60 border-app-border hover:bg-app-surface2/70'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span
                    className="w-3.5 h-3.5 rounded-full shrink-0 shadow-sm"
                    style={{ backgroundColor: item.color }}
                  />
                  <div>
                    <div className="font-heading font-bold text-xs sm:text-sm text-app-text leading-tight">
                      {item.sector}
                    </div>
                    <div className="text-[11px] font-mono text-app-muted flex items-center gap-1 mt-0.5">
                      <Building2 className="w-3 h-3 inline" />
                      {item.recruitersCount}
                    </div>
                  </div>
                </div>

                <div
                  className="font-mono font-black text-sm sm:text-base ml-2 shrink-0"
                  style={{ color: item.color }}
                >
                  <CountUp
                    to={item.percentage}
                    suffix="%"
                    duration={1800}
                    replayTrigger={replayKey}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Screen Reader Table */}
      <div className="sr-only">
        <table>
          <caption>HRU Placement Sector Split</caption>
          <thead>
            <tr>
              <th>Sector</th>
              <th>Percentage</th>
              <th>Hiring Partners</th>
            </tr>
          </thead>
          <tbody>
            {sectorDonutData.map((d) => (
              <tr key={d.sector}>
                <td>{d.sector}</td>
                <td>{d.percentage}%</td>
                <td>{d.recruitersCount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default SectorDonutChart;
