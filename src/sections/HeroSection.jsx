import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Play, Sparkles, Cpu, Rocket, ShieldCheck } from 'lucide-react';
import Button from '../components/ui/Button';
import { SplitTextReveal } from '../components/ui/Reveal';
import VideoModal from '../components/ui/VideoModal';
import Doodle from '../components/ui/Doodle';
import mediaRegistry from '../data/media';
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion';

export function HeroSection() {
  const [activeClipIndex, setActiveClipIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();

  const reel = mediaRegistry.heroReel;
  const currentClip = reel[activeClipIndex];
  const videoRef = useRef(null);

  // Reel timer: cycle through 4 clips every 5.5s
  useEffect(() => {
    if (prefersReducedMotion) return;

    setProgress(0);
    const duration = currentClip.duration || 5500;
    const intervalTime = 50;
    const increment = (intervalTime / duration) * 100;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setActiveClipIndex((current) => (current + 1) % reel.length);
          return 0;
        }
        return prev + increment;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, [activeClipIndex, prefersReducedMotion, reel.length, currentClip.duration]);

  const handleSelectClip = (index) => {
    setActiveClipIndex(index);
    setProgress(0);
  };

  return (
    <>
      <section className="relative min-h-[100svh] h-[100svh] w-full flex items-center justify-center overflow-hidden pt-28 pb-16 px-4 sm:px-6 lg:px-8 bg-[#0A0B1E]">
        {/* Background Hero Reel (Crossfading clips with Ken Burns zoom) */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <AnimatePresence mode="wait">
            {!videoError && !prefersReducedMotion ? (
              <motion.div
                key={currentClip.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
                className="absolute inset-0 w-full h-full"
              >
                {/* Slow Ken Burns Zoom Effect (1.00 to 1.08) */}
                <motion.div
                  initial={{ scale: 1 }}
                  animate={{ scale: 1.08 }}
                  transition={{ duration: 6, ease: 'easeOut' }}
                  className="w-full h-full"
                >
                  <video
                    ref={videoRef}
                    src={currentClip.video}
                    poster={currentClip.poster}
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="metadata"
                    onError={() => setVideoError(true)}
                    className="w-full h-full object-cover filter brightness-[0.42] contrast-105"
                  />
                </motion.div>
              </motion.div>
            ) : (
              /* Fallback Poster Image with Soft Ambient Aurora Glow */
              <motion.div
                key="poster-fallback"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="absolute inset-0 w-full h-full"
              >
                <img
                  src={currentClip.poster}
                  alt={currentClip.title}
                  className="w-full h-full object-cover filter brightness-[0.38]"
                />
                <div className="absolute top-1/4 left-1/4 w-[600px] h-[500px] bg-[#5B5BF0]/20 rounded-full blur-[140px]" />
                <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[400px] bg-[#22D3EE]/15 rounded-full blur-[130px]" />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Left-to-Right Midnight Gradient (80% left, 20% right) & Bottom Gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A0B1E] via-[#0A0B1E]/75 to-[#0A0B1E]/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0B1E] via-[#0A0B1E]/40 to-transparent" />
          <div className="absolute inset-0 bg-[#5B5BF0]/5 mix-blend-color" />
        </div>

        {/* Floating Glass Stat Chips */}
        <div className="absolute top-36 right-8 lg:right-20 hidden md:block z-10 pointer-events-none">
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="p-3.5 px-4 rounded-2xl bg-[#12142B]/85 backdrop-blur-xl border border-white/10 shadow-2xl flex items-center gap-3"
          >
            <div className="w-9 h-9 rounded-xl bg-hru-indigo/20 border border-hru-indigo/40 text-hru-indigo flex items-center justify-center">
              <Cpu className="w-4 h-4" />
            </div>
            <div>
              <div className="text-[10px] font-mono uppercase tracking-wider text-[#A4A8C4]">Supercomputing</div>
              <div className="text-xs font-bold text-white">512x H100 GPU Cluster</div>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-32 left-8 lg:left-20 hidden md:block z-10 pointer-events-none">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            className="p-3.5 px-4 rounded-2xl bg-[#12142B]/85 backdrop-blur-xl border border-white/10 shadow-2xl flex items-center gap-3"
          >
            <div className="w-9 h-9 rounded-xl bg-hru-gold/20 border border-hru-gold/40 text-hru-gold flex items-center justify-center">
              <Rocket className="w-4 h-4" />
            </div>
            <div>
              <div className="text-[10px] font-mono uppercase tracking-wider text-[#A4A8C4]">Venture Capital</div>
              <div className="text-xs font-bold text-white">₹50 Cr Dedicated Seed Fund</div>
            </div>
          </motion.div>
        </div>

        {/* Center Main Content */}
        <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
          {/* Active Reel Scene Badge Chip */}
          <div className="flex items-center gap-2 mb-6">
            <span className="font-mono text-xs uppercase px-3.5 py-1 rounded-full border border-hru-gold/30 bg-hru-gold/10 text-hru-gold backdrop-blur-md shadow-gold-glow flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>HRU Reel // Scene: <strong>{currentClip.label}</strong></span>
            </span>
          </div>

          {/* Word-by-Word Headline Reveal */}
          <div className="relative">
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black font-heading tracking-tight leading-[1.02] text-white mb-6">
              <SplitTextReveal
                text="THE BORDERLESS UNIVERSITY FOR NEXT-WAVE BUILDERS."
                wordClassName="text-white hover:text-hru-gold transition-colors duration-200"
                delay={0.15}
              />
            </h1>

            {/* Hand-drawn scribble underline doodle */}
            <div className="absolute -bottom-2 right-12 hidden sm:block">
              <Doodle type="underline" width={180} height={20} color="var(--hru-gold)" />
            </div>
          </div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="max-w-2xl text-base sm:text-lg md:text-xl text-[#A4A8C4] leading-relaxed mb-8"
          >
            Replace passive rote lectures with venture-scale studio building. Master artificial intelligence, spatial computing, synthetic biology, and algorithmic finance.
          </motion.p>

          {/* Instagram-Story-Style Progress Pips */}
          <div className="flex items-center justify-center gap-2.5 mb-8 w-full max-w-md">
            {reel.map((clip, idx) => {
              const isActive = idx === activeClipIndex;
              const isPast = idx < activeClipIndex;

              return (
                <button
                  key={clip.id}
                  type="button"
                  onClick={() => handleSelectClip(idx)}
                  className="flex-1 group py-2 focus:outline-none cursor-pointer"
                  aria-label={`Jump to ${clip.label} reel`}
                >
                  <div className="h-1 rounded-full bg-white/20 overflow-hidden relative">
                    <div
                      className="h-full bg-hru-gold transition-all"
                      style={{
                        width: isPast ? '100%' : isActive ? `${progress}%` : '0%',
                        transition: isActive ? 'width 50ms linear' : 'none',
                      }}
                    />
                  </div>
                  <span className={`text-[10px] font-mono uppercase tracking-wider block text-center mt-1.5 transition-colors ${
                    isActive ? 'text-hru-gold font-bold' : 'text-[#A4A8C4] group-hover:text-white'
                  }`}>
                    {clip.label}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full sm:w-auto"
          >
            <Button
              to="/admissions"
              variant="gold"
              size="lg"
              magnetic
              className="w-full sm:w-auto"
              icon={<ArrowUpRight className="w-5 h-5" />}
            >
              Apply for 2026 Cohort
            </Button>

            <Button
              variant="glass"
              size="lg"
              className="w-full sm:w-auto"
              onClick={() => setModalOpen(true)}
              icon={<Play className="w-4 h-4 text-hru-gold fill-hru-gold" />}
              iconPosition="left"
            >
              Take a Campus Tour
            </Button>
          </motion.div>

          {/* Bottom Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="mt-12 flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-[#A4A8C4]"
          >
            <span className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-hru-gold" />
              Global ECTS Credit Transfer Compatible
            </span>
            <span className="hidden sm:inline">•</span>
            <span>Zero Standardized Testing</span>
            <span className="hidden sm:inline">•</span>
            <span className="text-hru-gold font-bold">Over 90% Merit Fellowship Rate</span>
          </motion.div>
        </div>
      </section>

      {/* Video Modal Player */}
      <VideoModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        videoSrc="/videos/hero/hero-1.mp4"
        title="HR University — Silicon Campus Virtual Walkthrough"
      />
    </>
  );
}

export default HeroSection;
