import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PlacementBentoGrid from './PlacementBentoGrid';
import CountUp from '../ui/CountUp';
import {
  departmentPlacements,
  yearlyBatchTrends,
} from '../../data/placements';
import { Layers, Calendar, Award } from 'lucide-react';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';

export function PlacementTabs() {
  const [activeTab, setActiveTab] = useState('overall'); // 'overall' | 'department' | 'year'
  const [replayKey, setReplayKey] = useState(0);

  const tabs = [
    { id: 'overall', label: 'Overall Cohort', icon: Layers },
    { id: 'department', label: 'By Department', icon: Award },
    { id: 'year', label: 'By Year (2022–2026)', icon: Calendar },
  ];

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
    setReplayKey((prev) => prev + 1);
  };

  return (
    <div className="w-full">
      {/* Animated Tab Switcher */}
      <div className="flex justify-center mb-8 sm:mb-12">
        <div className="inline-flex p-1.5 rounded-full bg-app-surface1/80 border border-app-border backdrop-blur-md shadow-md">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => handleTabChange(tab.id)}
                className={`relative px-4 sm:px-6 py-2.5 rounded-full text-xs sm:text-sm font-heading font-bold transition-colors flex items-center gap-2 z-10 ${
                  isActive ? 'text-white' : 'text-app-muted hover:text-app-text'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="placementTabActivePill"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.5 }}
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-hru-indigo to-hru-coral shadow-md -z-10"
                  />
                )}
                <Icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Tab Panels */}
      <AnimatePresence mode="wait">
        {activeTab === 'overall' && (
          <motion.div
            key="overall"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35 }}
          >
            <PlacementBentoGrid replayKey={replayKey} />
          </motion.div>
        )}

        {activeTab === 'department' && (
          <motion.div
            key="department"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35 }}
          >
            <DepartmentPlacementsView replayKey={replayKey} />
          </motion.div>
        )}

        {activeTab === 'year' && (
          <motion.div
            key="year"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35 }}
          >
            <YearlyBatchTrendsView replayKey={replayKey} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function DepartmentPlacementsView({ replayKey }) {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <div className="p-6 sm:p-10 rounded-3xl bg-app-surface1/70 border border-app-border backdrop-blur-md shadow-lg">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-app-border/60">
        <div>
          <span className="text-[11px] font-mono uppercase tracking-widest text-hru-mint font-bold">
            FACULTY METRICS
          </span>
          <h4 className="text-xl sm:text-2xl font-black font-heading text-app-text mt-1">
            Department-Wise Placement Rates
          </h4>
          <p className="text-xs sm:text-sm text-app-muted mt-1 font-sans">
            Measured across studio graduating cohorts with 100% capstone project submissions.
          </p>
        </div>
        <div className="text-right">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-hru-mint/15 text-hru-mint border border-hru-mint/30">
            91% - 99% RANGE
          </span>
        </div>
      </div>

      {/* Department horizontal bars */}
      <div className="space-y-5">
        {departmentPlacements.map((dept, idx) => (
          <div key={dept.name} className="group">
            <div className="flex items-center justify-between text-xs sm:text-sm font-heading font-bold mb-2">
              <div className="flex items-center gap-2.5">
                <span
                  className="w-3 h-3 rounded-full shrink-0 shadow-sm"
                  style={{ backgroundColor: dept.tint }}
                />
                <span className="text-app-text group-hover:text-hru-gold transition-colors">
                  {dept.name}
                </span>
                <span className="hidden sm:inline-block text-[11px] font-mono font-normal text-app-muted px-2 py-0.5 rounded bg-app-surface2 border border-app-border/40">
                  Avg: {dept.avgPkg}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <span className="sm:hidden text-[10px] font-mono text-app-muted">
                  {dept.avgPkg}
                </span>
                <span
                  className="font-mono font-black text-sm sm:text-base tracking-tight"
                  style={{ color: dept.tint }}
                >
                  <CountUp
                    to={dept.rate}
                    suffix="%"
                    duration={1800}
                    replayTrigger={replayKey}
                  />
                </span>
              </div>
            </div>

            {/* Track & Bar */}
            <div className="relative w-full h-3 sm:h-3.5 rounded-full bg-app-surface2 overflow-hidden border border-app-border/40">
              <motion.div
                key={`${dept.name}-${replayKey}`}
                initial={{ width: prefersReducedMotion ? `${dept.rate}%` : '0%' }}
                animate={{ width: `${dept.rate}%` }}
                transition={{
                  duration: prefersReducedMotion ? 0 : 1.8,
                  ease: [0.16, 1, 0.3, 1], // easeOutExpo style
                  delay: prefersReducedMotion ? 0 : idx * 0.05,
                }}
                className="h-full rounded-full relative"
                style={{
                  backgroundColor: dept.tint,
                  boxShadow: `0 0 12px ${dept.tint}40`,
                }}
              >
                {/* Light highlight bar */}
                <div className="absolute inset-0 bg-white/20" />
              </motion.div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function YearlyBatchTrendsView({ replayKey }) {
  const prefersReducedMotion = usePrefersReducedMotion();

  // SVG Chart Dimensions
  const width = 800;
  const height = 320;
  const paddingX = 70;
  const paddingY = 45;
  const chartWidth = width - paddingX * 2;
  const chartHeight = height - paddingY * 2;

  // Min/Max for dual-scale
  const minRate = 80;
  const maxRate = 100;
  const minPkg = 4.0;
  const maxPkg = 11.0;

  const points = yearlyBatchTrends.map((d, i) => {
    const x = paddingX + (i / (yearlyBatchTrends.length - 1)) * chartWidth;
    // Rate Y: 80% at bottom, 100% at top
    const rateY = height - paddingY - ((d.placementRate - minRate) / (maxRate - minRate)) * chartHeight;
    // Pkg Y: 4.0 at bottom, 11.0 at top
    const pkgY = height - paddingY - ((d.avgPackage - minPkg) / (maxPkg - minPkg)) * chartHeight;
    return { ...d, x, rateY, pkgY };
  });

  // SVG Line path for Avg Package
  const pkgLinePath = points.reduce((acc, curr, idx) => {
    return idx === 0 ? `M ${curr.x} ${curr.pkgY}` : `${acc} L ${curr.x} ${curr.pkgY}`;
  }, '');

  return (
    <div className="p-6 sm:p-10 rounded-3xl bg-app-surface1/70 border border-app-border backdrop-blur-md shadow-lg">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-app-border/60">
        <div>
          <span className="text-[11px] font-mono uppercase tracking-widest text-[#22D3EE] font-bold">
            HISTORICAL TRAJECTORY
          </span>
          <h4 className="text-xl sm:text-2xl font-black font-heading text-app-text mt-1">
            Five-Year Growth: Placement % & Average Package
          </h4>
          <p className="text-xs sm:text-sm text-app-muted mt-1 font-sans">
            Consistent upward trajectory driven by AI curriculum modernization and Tier-1 employer partnerships.
          </p>
        </div>

        {/* Legend */}
        <div className="flex items-center gap-4 text-xs font-heading font-bold">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-sm bg-[#FF7A59]" />
            <span className="text-app-text">Placement Rate (%)</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#22D3EE]" />
            <span className="text-app-text">Avg Package (₹ LPA)</span>
          </div>
        </div>
      </div>

      {/* SVG Multi-Metric Visual Chart */}
      <div className="relative w-full overflow-x-auto">
        <div className="min-w-[600px]">
          <svg
            viewBox={`0 0 ${width} ${height}`}
            className="w-full h-auto overflow-visible select-none"
          >
            {/* Horizontal Grid lines */}
            {[0, 0.25, 0.5, 0.75, 1].map((ratio, i) => {
              const y = paddingY + ratio * chartHeight;
              const rateVal = Math.round(maxRate - ratio * (maxRate - minRate));
              return (
                <g key={i}>
                  <line
                    x1={paddingX}
                    y1={y}
                    x2={width - paddingX}
                    y2={y}
                    stroke="currentColor"
                    className="text-app-border/40"
                    strokeDasharray="4 4"
                    strokeWidth="1"
                  />
                  <text
                    x={paddingX - 12}
                    y={y + 4}
                    textAnchor="end"
                    className="text-[11px] font-mono fill-app-muted"
                  >
                    {rateVal}%
                  </text>
                </g>
              );
            })}

            {/* Placement Bars (Orange/Coral gradient bars) */}
            {points.map((pt, i) => {
              const barWidth = 36;
              const barHeight = height - paddingY - pt.rateY;
              return (
                <g key={`bar-${pt.year}-${replayKey}`}>
                  <motion.rect
                    x={pt.x - barWidth / 2}
                    y={prefersReducedMotion ? pt.rateY : height - paddingY}
                    width={barWidth}
                    height={prefersReducedMotion ? barHeight : 0}
                    animate={{
                      y: pt.rateY,
                      height: barHeight,
                    }}
                    transition={{
                      duration: prefersReducedMotion ? 0 : 1.2,
                      delay: prefersReducedMotion ? 0 : i * 0.1,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    rx="6"
                    fill="url(#placementBarGradient)"
                    className="opacity-90 hover:opacity-100 transition-opacity"
                  />
                  {/* Rate Label */}
                  <text
                    x={pt.x}
                    y={pt.rateY - 10}
                    textAnchor="middle"
                    className="text-[12px] font-mono font-bold fill-[#FF7A59]"
                  >
                    {pt.placementRate}%
                  </text>
                  {/* Year X-axis label */}
                  <text
                    x={pt.x}
                    y={height - paddingY + 22}
                    textAnchor="middle"
                    className="text-[12px] font-mono font-bold fill-app-text"
                  >
                    Class {pt.year}
                  </text>
                </g>
              );
            })}

            {/* Average Package Polyline (Electric Sky Line) */}
            <motion.path
              key={`line-${replayKey}`}
              d={pkgLinePath}
              fill="none"
              stroke="#22D3EE"
              strokeWidth="3.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: prefersReducedMotion ? 1 : 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                duration: prefersReducedMotion ? 0 : 1.8,
                ease: [0.16, 1, 0.3, 1],
              }}
            />

            {/* Dots and Tooltip Labels on Line */}
            {points.map((pt, i) => (
              <g key={`dot-${pt.year}-${replayKey}`}>
                <motion.circle
                  cx={pt.x}
                  cy={pt.pkgY}
                  r="6"
                  fill="#0A0B1E"
                  stroke="#22D3EE"
                  strokeWidth="3"
                  initial={{ scale: prefersReducedMotion ? 1 : 0 }}
                  animate={{ scale: 1 }}
                  transition={{
                    duration: 0.3,
                    delay: prefersReducedMotion ? 0 : 0.8 + i * 0.15,
                  }}
                />
                {/* Package value badge pill */}
                <g transform={`translate(${pt.x}, ${pt.pkgY - 26})`}>
                  <rect
                    x="-32"
                    y="-12"
                    width="64"
                    height="20"
                    rx="4"
                    fill="#0A0B1E"
                    stroke="#22D3EE"
                    strokeWidth="1"
                  />
                  <text
                    x="0"
                    y="2"
                    textAnchor="middle"
                    className="text-[10px] font-mono font-bold fill-[#22D3EE]"
                  >
                    ₹{pt.avgPackage} LPA
                  </text>
                </g>
              </g>
            ))}

            {/* SVG Defs for Gradients */}
            <defs>
              <linearGradient id="placementBarGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#FFC53D" />
                <stop offset="100%" stopColor="#FF7A59" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      {/* Accessible Screen Reader Table */}
      <div className="sr-only">
        <table>
          <caption>Five-Year HRU Placement Trends (2022 to 2026)</caption>
          <thead>
            <tr>
              <th scope="col">Year</th>
              <th scope="col">Placement Rate</th>
              <th scope="col">Average CTC (LPA)</th>
            </tr>
          </thead>
          <tbody>
            {yearlyBatchTrends.map((d) => (
              <tr key={d.year}>
                <td>{d.year}</td>
                <td>{d.placementRate}%</td>
                <td>₹{d.avgPackage} LPA</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-6 flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-app-muted pt-4 border-t border-app-border/40">
        <span>✦ Batch size scaled 3.2x while average package rose 63.8%</span>
        <span>Audited by Career Services Office</span>
      </div>
    </div>
  );
}

export default PlacementTabs;
