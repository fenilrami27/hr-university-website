import React, { useState } from 'react';
import { motion } from 'framer-motion';
import PlacementHeroRing from './PlacementHeroRing';
import CountUp from '../ui/CountUp';
import {
  Building2,
  TrendingUp,
  DollarSign,
  Gift,
  Award,
  Globe2,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';
import {
  heroPlacement,
  bentoStats,
  placementBentoPhotos,
} from '../../data/placements';

const STAT_ICONS = {
  recruiters: Building2,
  'highest-package': TrendingUp,
  'average-package': DollarSign,
  'offers-made': Gift,
  ppos: Award,
  'intl-offers': Globe2,
  'internship-rate': CheckCircle2,
};

export function PlacementBentoGrid({ replayKey = 0 }) {
  const [activeTileReplays, setActiveTileReplays] = useState({});

  const handleStatCardClick = (id) => {
    setActiveTileReplays((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + 1,
    }));
  };

  return (
    <div className="w-full">
      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-5 sm:gap-6">
        {/* 1. Hero Ring Card (Spans 12 on mobile/tablet, 8 cols on desktop) */}
        <div className="sm:col-span-2 lg:col-span-8">
          <PlacementHeroRing
            value={heroPlacement.value}
            suffix={heroPlacement.suffix}
            title={heroPlacement.title}
            sublabel={heroPlacement.sublabel}
            description={heroPlacement.description}
            gradient={heroPlacement.gradient}
            confettiColors={heroPlacement.confettiColors}
          />
        </div>

        {/* 2. Photo Tile 1 - Commencement Toss (Spans 4 cols on desktop) */}
        {placementBentoPhotos[0] && (
          <div className="sm:col-span-2 lg:col-span-4 flex items-center justify-center">
            <div
              className="relative w-full h-full min-h-[220px] rounded-3xl overflow-hidden group shadow-lg border border-white/20"
              style={{
                transform: `rotate(${placementBentoPhotos[0].tilt}deg)`,
                clipPath:
                  placementBentoPhotos[0].mask === 'arch'
                    ? 'ellipse(100% 90% at 50% 10%)'
                    : 'none',
              }}
            >
              <img
                src={placementBentoPhotos[0].src}
                alt={placementBentoPhotos[0].alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0B1E]/90 via-[#0A0B1E]/20 to-transparent flex flex-col justify-end p-5">
                <span className="text-[10px] font-mono uppercase tracking-widest text-hru-gold">
                  HRU OUTCOMES
                </span>
                <span className="text-white font-heading font-bold text-sm">
                  {placementBentoPhotos[0].caption}
                </span>
              </div>
            </div>
          </div>
        )}

        {/* 3. Stat 1: 250+ Recruiting Companies (Lagoon: 4 cols) */}
        <StatCard
          stat={bentoStats[0]}
          icon={STAT_ICONS[bentoStats[0].id]}
          replayKey={replayKey + (activeTileReplays[bentoStats[0].id] || 0)}
          onClick={() => handleStatCardClick(bentoStats[0].id)}
          className="lg:col-span-4"
        />

        {/* 4. Stat 2: ₹45 LPA Highest Package (Bubblegum: 4 cols) */}
        <StatCard
          stat={bentoStats[1]}
          icon={STAT_ICONS[bentoStats[1].id]}
          replayKey={replayKey + (activeTileReplays[bentoStats[1].id] || 0)}
          onClick={() => handleStatCardClick(bentoStats[1].id)}
          className="lg:col-span-4"
        />

        {/* 5. Stat 3: ₹9.5 LPA Average Package (Electric: 4 cols) */}
        <StatCard
          stat={bentoStats[2]}
          icon={STAT_ICONS[bentoStats[2].id]}
          replayKey={replayKey + (activeTileReplays[bentoStats[2].id] || 0)}
          onClick={() => handleStatCardClick(bentoStats[2].id)}
          className="lg:col-span-4"
        />

        {/* 6. Photo Tile 2 - Recruitment Hackday (Spans 4 cols) */}
        {placementBentoPhotos[1] && (
          <div className="sm:col-span-1 lg:col-span-4 flex items-center justify-center">
            <div
              className="relative w-full h-full min-h-[200px] rounded-3xl overflow-hidden group shadow-lg border border-white/20"
              style={{
                transform: `rotate(${placementBentoPhotos[1].tilt}deg)`,
                borderRadius: '36px 12px 36px 12px',
              }}
            >
              <img
                src={placementBentoPhotos[1].src}
                alt={placementBentoPhotos[1].alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0B1E]/90 via-[#0A0B1E]/20 to-transparent flex flex-col justify-end p-5">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#2DD4BF]">
                  CAMPUS DRIVES
                </span>
                <span className="text-white font-heading font-bold text-sm">
                  {placementBentoPhotos[1].caption}
                </span>
              </div>
            </div>
          </div>
        )}

        {/* 7. Stat 4: 1,800+ Offers Made (Lime-pop: 4 cols) */}
        <StatCard
          stat={bentoStats[3]}
          icon={STAT_ICONS[bentoStats[3].id]}
          replayKey={replayKey + (activeTileReplays[bentoStats[3].id] || 0)}
          onClick={() => handleStatCardClick(bentoStats[3].id)}
          className="lg:col-span-4"
        />

        {/* 8. Stat 5: 400+ Pre-Placement Offers (Sunrise: 4 cols) */}
        <StatCard
          stat={bentoStats[4]}
          icon={STAT_ICONS[bentoStats[4].id]}
          replayKey={replayKey + (activeTileReplays[bentoStats[4].id] || 0)}
          onClick={() => handleStatCardClick(bentoStats[4].id)}
          className="lg:col-span-4"
        />

        {/* 9. Stat 6: 60+ International Offers (Lagoon: 4 cols) */}
        <StatCard
          stat={bentoStats[5]}
          icon={STAT_ICONS[bentoStats[5].id]}
          replayKey={replayKey + (activeTileReplays[bentoStats[5].id] || 0)}
          onClick={() => handleStatCardClick(bentoStats[5].id)}
          className="lg:col-span-4"
        />

        {/* 10. Photo Tile 3 - Technical Whiteboard Review (Spans 4 cols) */}
        {placementBentoPhotos[2] && (
          <div className="sm:col-span-1 lg:col-span-4 flex items-center justify-center">
            <div
              className="relative w-full h-full min-h-[200px] rounded-3xl overflow-hidden group shadow-lg border border-white/20"
              style={{
                transform: `rotate(${placementBentoPhotos[2].tilt}deg)`,
                borderRadius: '16px 36px 16px 36px',
              }}
            >
              <img
                src={placementBentoPhotos[2].src}
                alt={placementBentoPhotos[2].alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0B1E]/90 via-[#0A0B1E]/20 to-transparent flex flex-col justify-end p-5">
                <span className="text-[10px] font-mono uppercase tracking-widest text-hru-sky">
                  MENTOR CLINIC
                </span>
                <span className="text-white font-heading font-bold text-sm">
                  {placementBentoPhotos[2].caption}
                </span>
              </div>
            </div>
          </div>
        )}

        {/* 11. Stat 7: 100% Internship Completion (Bubblegum variant: 4 cols) */}
        <StatCard
          stat={bentoStats[6]}
          icon={STAT_ICONS[bentoStats[6].id]}
          replayKey={replayKey + (activeTileReplays[bentoStats[6].id] || 0)}
          onClick={() => handleStatCardClick(bentoStats[6].id)}
          className="lg:col-span-4"
        />
      </div>
    </div>
  );
}

function StatCard({ stat, icon: Icon, replayKey, onClick, className = '' }) {
  const isDarkText = stat.darkText !== false;
  const textColorClass = isDarkText ? 'text-[#0A0B1E]' : 'text-white';
  const mutedColorClass = isDarkText ? 'text-[#0A0B1E]/80' : 'text-white/80';
  const badgeClass = isDarkText
    ? 'bg-[#0A0B1E]/12 text-[#0A0B1E] border-[#0A0B1E]/20'
    : 'bg-white/15 text-white border-white/25';
  const iconBgClass = isDarkText
    ? 'bg-[#0A0B1E]/12 text-[#0A0B1E]'
    : 'bg-white/15 text-white';

  return (
    <div
      onClick={onClick}
      title="Click to replay count"
      className={`group relative rounded-3xl p-6 bg-gradient-to-br ${stat.gradient} ${textColorClass} shadow-md border border-white/25 cursor-pointer overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${className}`}
    >
      {/* Light film grain overlay */}
      <div
        className="absolute inset-0 opacity-15 pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage: `radial-gradient(rgba(0,0,0,0.4) 1px, transparent 1px)`,
          backgroundSize: '12px 12px',
        }}
      />

      {/* Top row: Icon + Replay hint */}
      <div className="relative z-10 flex items-center justify-between gap-3 mb-4">
        <div className={`w-10 h-10 rounded-2xl ${iconBgClass} flex items-center justify-center transition-transform group-hover:scale-110`}>
          {Icon && <Icon className="w-5 h-5" />}
        </div>
        <span className={`text-[10px] font-mono tracking-wider uppercase px-2 py-0.5 rounded-full border ${badgeClass}`}>
          REPLAY ⟳
        </span>
      </div>

      {/* Big Counter Value */}
      <div className="relative z-10">
        <div className="text-3xl sm:text-4xl font-black font-heading tracking-tight leading-tight flex items-baseline">
          <CountUp
            to={stat.value}
            prefix={stat.prefix || ''}
            suffix={stat.suffix || ''}
            decimals={stat.decimals || 0}
            duration={2000}
            replayTrigger={replayKey}
            className="font-black"
          />
        </div>

        <div className="font-heading font-bold text-base sm:text-lg mt-1 tracking-tight">
          {stat.label}
        </div>

        <div className={`text-xs font-sans mt-1.5 leading-relaxed ${mutedColorClass}`}>
          {stat.sublabel}
        </div>
      </div>
    </div>
  );
}

export default PlacementBentoGrid;
