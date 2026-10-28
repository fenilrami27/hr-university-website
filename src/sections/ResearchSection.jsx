import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Cpu,
  Award,
  FileText,
  FlaskConical,
  ArrowUpRight,
  Sparkles,
  X,
  Radio,
  BookOpen
} from 'lucide-react';
import SectionHeading from '../components/ui/SectionHeading';
import CountUp from '../components/ui/CountUp';
import Button from '../components/ui/Button';

export function ResearchSection() {
  const [activeFilter, setActiveFilter] = useState('All Projects');
  const [activeDispatch, setActiveDispatch] = useState(null);

  // 1. Redesigned Statistic Cards with Coordinated Color Palettes
  const researchStats = [
    {
      id: 'papers',
      label: 'Published Papers',
      value: 380,
      suffix: '+',
      prefix: '',
      icon: FileText,
      note: 'IEEE, Nature, ACM & NeurIPS',
      subnote: '4,850+ Peer Citations Recorded',
      badge: 'PEER-REVIEWED',
      theme: {
        accent: '#8B5CF6',
        bgGradient: 'from-[#1E1B4B]/80 via-[#181438]/90 to-[#0F1026]/95',
        border: 'border-indigo-500/30 hover:border-indigo-400/70',
        glow: 'rgba(139, 92, 246, 0.28)',
        iconBg: 'bg-indigo-500/20 text-indigo-300 border-indigo-500/40',
        badgeBg: 'bg-indigo-500/15 text-indigo-300 border-indigo-500/30',
        numberColor: 'text-transparent bg-clip-text bg-gradient-to-r from-indigo-200 via-white to-purple-200',
        flare: 'bg-indigo-500/20',
      },
    },
    {
      id: 'patents',
      label: 'Defensive Patents',
      value: 42,
      suffix: '+',
      prefix: '',
      icon: Award,
      note: 'Open Patent Pledge',
      subnote: '100% Defensive License Guarantee',
      badge: 'OPEN SOURCE PLEDGE',
      theme: {
        accent: '#10B981',
        bgGradient: 'from-[#064E3B]/60 via-[#042F2E]/80 to-[#0F1026]/95',
        border: 'border-emerald-500/30 hover:border-emerald-400/70',
        glow: 'rgba(16, 185, 129, 0.28)',
        iconBg: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40',
        badgeBg: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30',
        numberColor: 'text-transparent bg-clip-text bg-gradient-to-r from-emerald-200 via-white to-teal-200',
        flare: 'bg-emerald-500/20',
      },
    },
    {
      id: 'capital',
      label: 'R&D Grant Capital',
      value: 18,
      suffix: 'M+',
      prefix: '$',
      icon: FlaskConical,
      note: 'Direct Fellow & Lab Funding',
      subnote: 'Non-dilutive institutional grants',
      badge: 'NON-DILUTIVE SEED',
      theme: {
        accent: '#F59E0B',
        bgGradient: 'from-[#78350F]/50 via-[#451A03]/70 to-[#0F1026]/95',
        border: 'border-amber-500/30 hover:border-amber-400/70',
        glow: 'rgba(245, 158, 11, 0.28)',
        iconBg: 'bg-amber-500/20 text-amber-300 border-amber-500/40',
        badgeBg: 'bg-amber-500/15 text-amber-300 border-amber-500/30',
        numberColor: 'text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-white to-orange-200',
        flare: 'bg-amber-500/20',
      },
    },
    {
      id: 'labs',
      label: 'Dedicated Research Labs',
      value: 14,
      suffix: ' Facilities',
      prefix: '',
      icon: Cpu,
      note: 'Across 3 Global Hub Campuses',
      subnote: '512x H100s + BSL-2 Cleanrooms',
      badge: '24/7 COMPUTE BAY',
      theme: {
        accent: '#06B6D4',
        bgGradient: 'from-[#0C4A6E]/60 via-[#082F49]/80 to-[#0F1026]/95',
        border: 'border-cyan-500/30 hover:border-cyan-400/70',
        glow: 'rgba(6, 182, 212, 0.28)',
        iconBg: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40',
        badgeBg: 'bg-cyan-500/15 text-cyan-300 border-cyan-500/30',
        numberColor: 'text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 via-white to-blue-200',
        flare: 'bg-cyan-500/20',
      },
    },
  ];

  // 2. Redesigned Research Project Cards with Balanced Visual Identity & Color Schemes
  const filterCategories = [
    'All Projects',
    'Neural Robotics',
    'Synthetic Biology',
    'Algorithmic Web3',
    'Spatial XR',
    'Hardware & Biomaterials',
  ];

  const initiatives = [
    {
      id: 'init-1',
      title: 'Embodied Intelligence & Swarm Robotics',
      category: 'Neural Robotics',
      lead: 'Prof. Julian Vance & Cohort Fellows',
      desc: 'Developing decentralized Byzantine-fault-tolerant consensus protocols for autonomous ground rovers and micro-drone swarm exploration operating in GPS-denied hazardous terrains.',
      metrics: ['120 Autonomous Nodes', '99.2% Swarm Consensus', 'ROS2 Native'],
      badge: 'Active Fellowship',
      statusNote: 'H100 Simulation Bay 04',
      isFeatured: true,
      color: {
        primary: '#8B5CF6',
        tagBg: 'bg-indigo-500/15 text-indigo-300 border-indigo-500/30',
        badgeBg: 'bg-purple-500/15 text-purple-300 border-purple-500/30',
        cardBg: 'from-[#1A163B]/90 via-[#13112E]/95 to-[#0B0C1E]',
        border: 'border-indigo-500/35 hover:border-indigo-400/80',
        glow: 'rgba(139, 92, 246, 0.25)',
        hoverGlow: '0 20px 40px -10px rgba(139, 92, 246, 0.35)',
        accentLine: 'from-indigo-500 via-purple-500 to-pink-500',
      },
      dispatch: {
        abstract:
          'This initiative formulates asynchronous swarm coordination using transformer-based spatial perception. Tested across 120 physical rovers in the Ahmedabad robotics arena, achieving continuous cooperative SLAM without cloud dependency.',
        grant: '$2.4M Non-dilutive Robotics Seed',
        venue: 'IEEE Transactions on Robotics (T-RO) // Forthcoming',
      },
    },
    {
      id: 'init-2',
      title: 'CRISPR Bio-Scaffolding for Tissue Regrowth',
      category: 'Synthetic Biology',
      lead: 'Dr. Mira Al-Mansoor & Biotech Studio',
      desc: 'Formulating biocompatible 3D-printed mycelium matrices infused with micro-fluidic nutrient delivery channels for accelerated cartilage repair and vascular tissue synthesis.',
      metrics: ['98.4% Biocompatibility', 'BSL-2 Validated', 'Patent Pending'],
      badge: 'Nature Featured',
      statusNote: 'Biomaterials Cleanroom',
      isFeatured: false,
      color: {
        primary: '#10B981',
        tagBg: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30',
        badgeBg: 'bg-teal-500/15 text-teal-300 border-teal-500/30',
        cardBg: 'from-[#082E25]/90 via-[#06241D]/95 to-[#0B0C1E]',
        border: 'border-emerald-500/35 hover:border-emerald-400/80',
        glow: 'rgba(16, 185, 129, 0.22)',
        hoverGlow: '0 20px 40px -10px rgba(16, 185, 129, 0.32)',
        accentLine: 'from-emerald-500 via-teal-400 to-cyan-500',
      },
      dispatch: {
        abstract:
          'By genetically modulating fungal hyphae branch density, our undergraduate fellows engineered porous scaffolding that supports mammalian cellular infiltration with zero synthetic polymer toxicity.',
        grant: '$1.8M Biotech Innovation Grant',
        venue: 'Nature Biomedical Engineering // Issue 44',
      },
    },
    {
      id: 'init-3',
      title: 'Zero-Knowledge Cryptographic Settlement',
      category: 'Algorithmic Web3',
      lead: 'Marcus Sterling & Fintech Working Group',
      desc: 'Constructing sub-millisecond recursive ZK-SNARK provers tailored for borderless high-frequency liquidity pools and decentralized sovereign identity verification engines.',
      metrics: ['<0.38ms Prover Latency', '10k TPS Benchmark', 'Formal Verification'],
      badge: 'Open Source Pledge',
      statusNote: 'Fintech Studio Bay',
      isFeatured: false,
      color: {
        primary: '#06B6D4',
        tagBg: 'bg-cyan-500/15 text-cyan-300 border-cyan-500/30',
        badgeBg: 'bg-sky-500/15 text-sky-300 border-sky-500/30',
        cardBg: 'from-[#0A263D]/90 via-[#071E30]/95 to-[#0B0C1E]',
        border: 'border-cyan-500/35 hover:border-cyan-400/80',
        glow: 'rgba(6, 182, 212, 0.22)',
        hoverGlow: '0 20px 40px -10px rgba(6, 182, 212, 0.32)',
        accentLine: 'from-cyan-500 via-blue-500 to-indigo-500',
      },
      dispatch: {
        abstract:
          'Utilizing custom GPU-accelerated polynomial multiplication routines on our H100 cluster, we reduced proof generation times by 14x compared to existing Plonky2 implementations.',
        grant: '$1.2M Web3 Protocol Endowment',
        venue: 'ACM Conference on Computer and Communications Security',
      },
    },
    {
      id: 'init-4',
      title: 'Volumetric Spatial UI & Neural Radiance Fields',
      category: 'Spatial XR',
      lead: 'Elena Rostova & Immersive Media Lab',
      desc: 'Real-time eye-tracked foveated NeRF rendering pipeline running at 90 FPS on standalone headsets with micro-gesture haptic feedback telemetry for tactile spatial computing.',
      metrics: ['90 FPS @ 8K Foveated', '0.8ms Motion-to-Photon', 'VisionOS Ready'],
      badge: 'SIGGRAPH Best Demo',
      statusNote: 'Volumetric Stage 01',
      isFeatured: false,
      color: {
        primary: '#EC4899',
        tagBg: 'bg-pink-500/15 text-pink-300 border-pink-500/30',
        badgeBg: 'bg-rose-500/15 text-rose-300 border-rose-500/30',
        cardBg: 'from-[#351227]/90 via-[#270E1D]/95 to-[#0B0C1E]',
        border: 'border-pink-500/35 hover:border-pink-400/80',
        glow: 'rgba(236, 72, 153, 0.22)',
        hoverGlow: '0 20px 40px -10px rgba(236, 72, 153, 0.32)',
        accentLine: 'from-pink-500 via-rose-400 to-purple-500',
      },
      dispatch: {
        abstract:
          'Our pipeline dynamically focuses ray sampling according to calibrated pupillary gaze points, slashing compute overhead by 68% and enabling photorealistic multi-user volumetric presence.',
        grant: '$1.5M Spatial Research Grant',
        venue: 'SIGGRAPH Asia Technical Papers',
      },
    },
    {
      id: 'init-5',
      title: 'Generative Biomimetic Architecture',
      category: 'Hardware & Biomaterials',
      lead: 'Dr. Kenzo Mori & Parametric Studio',
      desc: 'Algorithmic structural optimization utilizing carbon-negative fungal bio-composites and robotic cable-driven concrete 3D extrusion for rapid deployable planetary shelters.',
      metrics: ['-46% Embodied Carbon', '3.8x Structural Strength', 'Multi-Axis CNC'],
      badge: 'Venice Biennale Grant',
      statusNote: 'Robotic FabLab',
      isFeatured: false,
      color: {
        primary: '#F59E0B',
        tagBg: 'bg-amber-500/15 text-amber-300 border-amber-500/30',
        badgeBg: 'bg-orange-500/15 text-orange-300 border-orange-500/30',
        cardBg: 'from-[#38220A]/90 via-[#291A08]/95 to-[#0B0C1E]',
        border: 'border-amber-500/35 hover:border-amber-400/80',
        glow: 'rgba(245, 158, 11, 0.22)',
        hoverGlow: '0 20px 40px -10px rgba(245, 158, 11, 0.32)',
        accentLine: 'from-amber-500 via-orange-400 to-yellow-500',
      },
      dispatch: {
        abstract:
          'Deploying continuous robotic continuous-deposition printing with living mycelium binders that self-cure and sequester carbon over a 30-year operational lifecycle.',
        grant: '$950K Sustainable Urbanism Grant',
        venue: 'Architectural Science Review // 2026',
      },
    },
    {
      id: 'init-6',
      title: 'Neuromorphic Silicon for Edge Telemetry',
      category: 'Hardware & Biomaterials',
      lead: 'Dr. Linnea Croft & Systems Bay',
      desc: 'Ultra-low power event-driven spiking neural network processors designed for sub-orbital microsatellite earth observation and autonomous debris deflection navigation.',
      metrics: ['14.2x Power Efficiency', 'Radiation Hardened', 'Tape-Out Verified'],
      badge: 'Space Co-Op Partner',
      statusNote: 'Silicon Bay Cleanroom',
      isFeatured: false,
      color: {
        primary: '#F43F5E',
        tagBg: 'bg-rose-500/15 text-rose-300 border-rose-500/30',
        badgeBg: 'bg-red-500/15 text-red-300 border-red-500/30',
        cardBg: 'from-[#36111A]/90 via-[#250C13]/95 to-[#0B0C1E]',
        border: 'border-rose-500/35 hover:border-rose-400/80',
        glow: 'rgba(244, 63, 94, 0.22)',
        hoverGlow: '0 20px 40px -10px rgba(244, 63, 94, 0.32)',
        accentLine: 'from-rose-500 via-red-400 to-pink-500',
      },
      dispatch: {
        abstract:
          'Architected custom asynchronous spike-based processing cores operating under 180mW, capable of classifying multispectral orbital imagery in real time without ground downlink.',
        grant: '$2.1M Aerospace R&D Consortium',
        venue: 'IEEE Solid-State Circuits (JSSC)',
      },
    },
  ];

  const filteredInitiatives =
    activeFilter === 'All Projects'
      ? initiatives
      : initiatives.filter((item) => item.category === activeFilter);

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Background Decorative Ambient Gradients */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] bg-[#8B5CF6]/10 rounded-full blur-[140px]" />
        <div className="absolute top-1/2 -right-32 w-[500px] h-[500px] bg-[#06B6D4]/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-10 left-1/3 w-[450px] h-[450px] bg-[#10B981]/10 rounded-full blur-[150px]" />
      </div>

      <SectionHeading
        badge="DISCOVERY & PATENTS"
        badgeColor="indigo"
        title="FRONTIER RESEARCH"
        highlight="WITHOUT THE BUREAUCRACY."
        subtitle="Undergraduates and principal fellows publish side-by-side with unmetered GPU compute. We build in public and refuse to lock code behind paywalls."
        align="left"
      />

      {/* 1. Redesigned Coordinated Statistic Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {researchStats.map((item, idx) => {
          const Icon = item.icon;
          const { theme } = item;

          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              whileHover={{ y: -6, scale: 1.015 }}
              className={`relative rounded-3xl p-6 sm:p-7 flex flex-col justify-between border bg-gradient-to-br ${theme.bgGradient} ${theme.border} backdrop-blur-xl shadow-xl transition-all duration-300 group overflow-hidden`}
              style={{
                boxShadow: `0 12px 36px -10px ${theme.glow}`,
              }}
            >
              {/* Top ambient flare */}
              <div
                className={`absolute -top-12 -right-12 w-32 h-32 rounded-full ${theme.flare} blur-2xl opacity-60 pointer-events-none group-hover:scale-125 transition-transform duration-500`}
              />

              <div>
                {/* Header Row: Modern Icon & Badge */}
                <div className="flex items-center justify-between mb-6">
                  <div
                    className={`w-12 h-12 rounded-2xl ${theme.iconBg} flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 shadow-sm`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <span
                    className={`text-[10px] font-mono font-bold tracking-wider uppercase px-2.5 py-1 rounded-full border ${theme.badgeBg}`}
                  >
                    {item.badge}
                  </span>
                </div>

                {/* Big CountUp Stat */}
                <div className="flex items-baseline gap-1">
                  <div
                    className={`text-4xl sm:text-5xl font-black font-heading tracking-tight leading-none ${theme.numberColor}`}
                  >
                    <CountUp
                      to={item.value}
                      prefix={item.prefix}
                      suffix={item.suffix}
                      duration={1800}
                    />
                  </div>
                </div>

                {/* Title & Notes */}
                <h3 className="font-heading font-extrabold text-base sm:text-lg text-white mt-3 leading-snug">
                  {item.label}
                </h3>
                <p className="text-xs text-[#A4A8C4] font-medium mt-1">
                  {item.note}
                </p>
              </div>

              {/* Bottom Micro-Metric Bar */}
              <div className="pt-4 border-t border-white/10 mt-6 flex items-center justify-between">
                <span className="text-[11px] font-mono text-[#A4A8C4]/80">
                  {item.subnote}
                </span>
                <span
                  className="w-2 h-2 rounded-full animate-pulse"
                  style={{ backgroundColor: theme.accent }}
                />
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* 2. Interactive Discipline Filter Tabs */}
      <div className="flex items-center justify-between gap-4 flex-wrap mb-8 pb-2 border-b border-white/10">
        <div className="flex items-center gap-2 overflow-x-auto scrollbar-none py-1 max-w-full">
          {filterCategories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveFilter(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all duration-200 whitespace-nowrap cursor-pointer ${
                activeFilter === cat
                  ? 'bg-hru-gold text-hru-midnight font-bold shadow-gold-glow'
                  : 'bg-white/5 border border-white/10 text-[#A4A8C4] hover:text-white hover:border-white/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-[#A4A8C4]">
          <Radio className="w-3.5 h-3.5 text-hru-gold animate-pulse" />
          <span>6 Active Fellow Initiatives</span>
        </div>
      </div>

      {/* 3. Redesigned Project Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredInitiatives.map((init, i) => {
          const { color } = init;

          return (
            <motion.div
              key={init.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              whileHover={{ y: -6, scale: 1.01 }}
              className={`relative rounded-3xl p-6 sm:p-7 flex flex-col justify-between border bg-gradient-to-br ${color.cardBg} ${color.border} backdrop-blur-xl shadow-xl transition-all duration-300 group overflow-hidden`}
              style={{
                boxShadow: `0 14px 38px -10px ${color.glow}`,
              }}
            >
              {/* Top Accent Gradient Border Line */}
              <div
                className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${color.accentLine} opacity-80 group-hover:opacity-100 transition-opacity`}
              />

              {/* Featured Ribbon if active */}
              {init.isFeatured && (
                <div className="absolute top-4 right-4 z-10">
                  <span className="inline-flex items-center gap-1 text-[10px] font-mono font-bold tracking-wider uppercase px-2.5 py-1 rounded-full bg-gradient-to-r from-amber-500/25 to-orange-500/25 text-amber-300 border border-amber-400/50 shadow-gold-glow">
                    <Sparkles className="w-3 h-3 text-amber-300" />
                    FEATURED BREAKTHROUGH
                  </span>
                </div>
              )}

              <div>
                {/* Category & Status Row */}
                <div className={`flex flex-wrap items-center gap-2 mb-4 ${init.isFeatured ? 'pr-32 sm:pr-36' : ''}`}>
                  <span
                    className={`font-mono text-xs px-2.5 py-0.5 rounded-full border ${color.tagBg}`}
                  >
                    {init.category}
                  </span>
                  <span
                    className={`font-mono text-[11px] px-2 py-0.5 rounded-full border ${color.badgeBg}`}
                  >
                    {init.badge}
                  </span>
                </div>

                {/* Project Title */}
                <h3 className="text-xl sm:text-2xl font-bold font-heading text-white mb-2 leading-snug group-hover:text-hru-gold transition-colors">
                  {init.title}
                </h3>

                {/* Lead Author / Lab Lead */}
                <p className="text-xs font-mono text-[#A4A8C4] mb-3 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: color.primary }} />
                  <span>Lead: {init.lead}</span>
                </p>

                {/* Engaging Description with guaranteed line readability */}
                <p className="text-sm text-[#CBD0E6] leading-relaxed mb-5">
                  {init.desc}
                </p>

                {/* Technical Micro-Metrics Chips */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {init.metrics.map((metric, mIdx) => (
                    <span
                      key={mIdx}
                      className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-white/80"
                    >
                      ✦ {metric}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer: Interactive Lab Dispatch Link */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setActiveDispatch(init)}
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-hru-gold hover:text-white transition-colors cursor-pointer group-hover:underline"
                >
                  <span>READ LAB DISPATCH</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
                <span className="text-[10px] font-mono text-[#A4A8C4]">
                  {init.statusNote}
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Bottom Action Strip */}
      <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-hru-indigo/15 via-[#8B5CF6]/15 to-hru-gold/15 border border-white/15 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
        <div className="space-y-1 text-center sm:text-left">
          <h4 className="font-heading font-black text-lg sm:text-xl text-white">
            WANT TO PUBLISH BEFORE COMMENCEMENT?
          </h4>
          <p className="text-xs sm:text-sm text-[#A4A8C4]">
            Undergraduates can join any lab bay from their very first semester. No gatekeeping.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Button to="/research" variant="glass" size="md">
            View All 14 Labs
          </Button>
          <Button to="/admissions" variant="gold" size="md" icon={<ArrowUpRight className="w-4 h-4" />}>
            Apply for Fellowship
          </Button>
        </div>
      </div>

      {/* Interactive Lab Dispatch Modal */}
      <AnimatePresence>
        {activeDispatch && (
          <div className="fixed inset-0 z-[9990] flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveDispatch(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />

            {/* Modal Dialog */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="relative w-full max-w-2xl rounded-3xl bg-[#0D0F24] border border-white/20 p-6 sm:p-8 shadow-2xl z-10 max-h-[90vh] overflow-y-auto"
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setActiveDispatch(null)}
                aria-label="Close dispatch modal"
                className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <span
                    className={`font-mono text-xs px-2.5 py-0.5 rounded-full border ${activeDispatch.color.tagBg}`}
                  >
                    {activeDispatch.category}
                  </span>
                  <span className="font-mono text-xs text-hru-gold bg-hru-gold/10 px-2.5 py-0.5 rounded-full border border-hru-gold/30">
                    {activeDispatch.badge}
                  </span>
                </div>

                <h3 className="text-2xl font-black font-heading text-white">
                  {activeDispatch.title}
                </h3>

                <p className="text-xs font-mono text-[#A4A8C4]">
                  Principal Investigators: {activeDispatch.lead} • {activeDispatch.statusNote}
                </p>

                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-white uppercase tracking-wider">
                    <BookOpen className="w-3.5 h-3.5 text-hru-gold" />
                    <span>Executive Abstract</span>
                  </div>
                  <p className="text-sm text-[#CBD0E6] leading-relaxed">
                    {activeDispatch.dispatch.abstract}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
                  <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                    <div className="text-[#A4A8C4]">Grant Allocation:</div>
                    <div className="text-white font-bold mt-1 text-sm">{activeDispatch.dispatch.grant}</div>
                  </div>
                  <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                    <div className="text-[#A4A8C4]">Publication Venue:</div>
                    <div className="text-hru-gold font-bold mt-1 text-xs">{activeDispatch.dispatch.venue}</div>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <Button
                    to="/admissions"
                    variant="gold"
                    size="sm"
                    onClick={() => setActiveDispatch(null)}
                    icon={<ArrowUpRight className="w-3.5 h-3.5" />}
                  >
                    Join this Lab Project
                  </Button>
                  <Button
                    variant="glass"
                    size="sm"
                    onClick={() => setActiveDispatch(null)}
                  >
                    Close Dispatch
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default ResearchSection;
