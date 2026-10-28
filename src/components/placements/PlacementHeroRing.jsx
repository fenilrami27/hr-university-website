import React, { useState, useEffect, useRef, useCallback } from 'react';
import confetti from 'canvas-confetti';
import CountUp from '../ui/CountUp';
import { Award, Sparkles, TrendingUp } from 'lucide-react';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';

export function PlacementHeroRing({
  value = 98,
  suffix = '%',
  title = 'Campus Placement Rate',
  sublabel = 'Class of 2026 Cohort',
  description = 'Verified full-time offers or funded venture incubations within 90 days of graduation sprint.',
  gradient = 'from-[#FFC53D] via-[#FF9E4A] to-[#FF7A59]',
  confettiColors = ['#FFC53D', '#FF7A59', '#FFAA33', '#2DD4BF', '#FFFFFF'],
  className = '',
}) {
  const [replayKey, setReplayKey] = useState(0);
  const prefersReducedMotion = usePrefersReducedMotion();
  const [ringProgress, setRingProgress] = useState(() => prefersReducedMotion ? value : 0);
  const ringRef = useRef(null);
  const cardRef = useRef(null);
  const hasFiredConfetti = useRef(false);

  const radius = 62;
  const strokeWidth = 9;
  const circumference = 2 * Math.PI * radius; // ~389.56
  const targetOffset = circumference * (1 - value / 100);

  const triggerConfetti = useCallback(() => {
    if (cardRef.current && !prefersReducedMotion) {
      const rect = cardRef.current.getBoundingClientRect();
      const x = (rect.left + rect.width / 2) / window.innerWidth;
      const y = (rect.top + rect.height / 2) / window.innerHeight;

      try {
        confetti({
          particleCount: 35,
          spread: 70,
          origin: { x, y },
          colors: confettiColors,
          ticks: 220,
          gravity: 1.1,
          scalar: 0.85,
          disableForReducedMotion: true,
        });
      } catch {
        // Fallback gracefully
      }
    }
  }, [confettiColors, prefersReducedMotion]);

  // Animate ring in sync with counter
  useEffect(() => {
    if (prefersReducedMotion) return;

    const duration = 2000;
    const startTime = performance.now();

    function easeOutExpo(x) {
      return x === 1 ? 1 : 1 - Math.pow(2, -10 * x);
    }

    let animationFrameId;

    const animateRing = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeOutExpo(progress);
      setRingProgress(value * eased);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animateRing);
      } else {
        setRingProgress(value);
      }
    };

    animationFrameId = requestAnimationFrame(animateRing);

    return () => cancelAnimationFrame(animationFrameId);
  }, [replayKey, value, prefersReducedMotion]);

  const handleTileClick = () => {
    setReplayKey((prev) => prev + 1);
    hasFiredConfetti.current = false;
  };

  const handleCounterComplete = () => {
    if (!hasFiredConfetti.current) {
      hasFiredConfetti.current = true;
      triggerConfetti();
    }
  };

  const currentStrokeDashoffset = prefersReducedMotion
    ? targetOffset
    : circumference * (1 - ringProgress / 100);

  return (
    <div
      ref={cardRef}
      onClick={handleTileClick}
      title="Click to replay count and ring animation"
      className={`group relative rounded-3xl p-7 sm:p-9 bg-gradient-to-br ${gradient} text-[#0A0B1E] shadow-xl shadow-orange-500/10 cursor-pointer overflow-hidden border border-white/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-orange-500/20 ${className}`}
    >
      {/* Light film grain overlay */}
      <div
        className="absolute inset-0 opacity-15 pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage: `radial-gradient(rgba(0,0,0,0.4) 1px, transparent 1px)`,
          backgroundSize: '12px 12px',
        }}
      />

      {/* Decorative background glow circle */}
      <div className="absolute -right-16 -top-16 w-56 h-56 rounded-full bg-white/20 blur-2xl pointer-events-none group-hover:scale-125 transition-transform duration-700" />

      {/* Top row: badge + click to replay hint */}
      <div className="relative z-10 flex items-center justify-between gap-3 mb-6">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-heading font-black tracking-wider uppercase bg-[#0A0B1E]/15 text-[#0A0B1E] border border-[#0A0B1E]/20 backdrop-blur-sm">
          <Sparkles className="w-3.5 h-3.5 text-[#0A0B1E]" />
          ✦ PROVEN OUTCOMES
        </span>

        <span className="text-[11px] font-mono tracking-wider uppercase opacity-75 group-hover:opacity-100 transition-opacity flex items-center gap-1">
          REPLAY ⟳
        </span>
      </div>

      {/* Main Content: Ring + Big Number */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
        {/* Ring SVG container */}
        <div className="md:col-span-5 flex justify-center items-center">
          <div className="relative w-40 h-40 sm:w-44 sm:h-44 flex items-center justify-center">
            <svg
              className="w-full h-full -rotate-90 transform drop-shadow-md"
              viewBox="0 0 160 160"
              aria-hidden="true"
            >
              {/* Background track circle */}
              <circle
                cx="80"
                cy="80"
                r={radius}
                stroke="#0A0B1E"
                strokeOpacity="0.12"
                strokeWidth={strokeWidth}
                fill="none"
              />
              {/* Animated fill circle */}
              <circle
                ref={ringRef}
                cx="80"
                cy="80"
                r={radius}
                stroke="#0A0B1E"
                strokeWidth={strokeWidth}
                strokeDasharray={circumference}
                strokeDashoffset={currentStrokeDashoffset}
                strokeLinecap="round"
                fill="none"
                style={{
                  transition: prefersReducedMotion ? 'none' : 'stroke-dashoffset 0.05s linear',
                }}
              />
            </svg>

            {/* Inner Ring Text */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
              <div className="text-4xl sm:text-5xl font-black font-heading tracking-tight leading-none text-[#0A0B1E]">
                <CountUp
                  to={value}
                  suffix={suffix}
                  duration={2000}
                  replayTrigger={replayKey}
                  onComplete={handleCounterComplete}
                  className="font-black"
                />
              </div>
              <span className="text-[10px] sm:text-[11px] font-mono font-bold uppercase tracking-wider text-[#0A0B1E]/80 mt-1">
                VERIFIED
              </span>
            </div>
          </div>
        </div>

        {/* Text descriptions */}
        <div className="md:col-span-7 flex flex-col justify-center">
          <div className="flex items-center gap-2 mb-1.5">
            <Award className="w-5 h-5 text-[#0A0B1E]" />
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#0A0B1E]/80">
              {sublabel}
            </span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-black font-heading tracking-tight text-[#0A0B1E] leading-snug">
            {title}
          </h3>
          <p className="mt-2 text-sm sm:text-base text-[#0A0B1E]/85 leading-relaxed font-sans">
            {description}
          </p>

          <div className="mt-4 pt-4 border-t border-[#0A0B1E]/15 flex items-center justify-between text-xs font-heading font-bold text-[#0A0B1E]">
            <span className="flex items-center gap-1.5">
              <TrendingUp className="w-4 h-4" />
              100% Industry Residency Assured
            </span>
            <span className="font-mono text-[11px] opacity-80">
              Audited 2026 Cohort
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlacementHeroRing;
