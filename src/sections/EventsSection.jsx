import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Calendar,
  Sparkles,
  CheckCircle2,
  Bell,
  ArrowUpRight,
  Flame,
  ChevronRight,
  ChevronLeft,
  X,
  Trophy,
} from 'lucide-react';
import confetti from 'canvas-confetti';
import SectionHeading from '../components/ui/SectionHeading';
import Button from '../components/ui/Button';
import { festivalsData, eventCategories } from '../data/events';

export function EventsSection() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeFestivalId, setActiveFestivalId] = useState(festivalsData[0].id);
  const [registrationModal, setRegistrationModal] = useState(null); // { event, success }
  const [formData, setFormData] = useState({ name: '', email: '', department: 'AI & Data Science', teamSize: '1' });
  const scrollTimelineRef = useRef(null);

  const notices = [
    '✦ NAVRATRI: Registration open for 9-Night Garba & Dandiya Raas Trophy',
    '✦ HACKHRU: 48-Hour Deep-Tech Hackathon ₹15 Lakhs Seed Prize Pool Announced',
    '✦ DIWALI MELA: Inter-Department Green Rangoli & Eco-Diya Painting Slots Open',
    '✦ UTTARAYAN: Rooftop Kite Aerodynamics Design Challenge Entries Invited',
  ];

  const featuredFestival = festivalsData.find((f) => f.featured) || festivalsData[0];

  const filteredFestivals = activeCategory === 'All'
    ? festivalsData
    : festivalsData.filter((f) => f.category === activeCategory);

  const handleOpenRegister = (fest) => {
    setRegistrationModal({ event: fest, success: false });
  };

  const handleConfirmRegister = (e) => {
    e.preventDefault();
    if (!registrationModal) return;

    try {
      confetti({
        particleCount: 35,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#FFC53D', '#FF7A59', '#2DD4BF', '#F472B6'],
        disableForReducedMotion: true,
      });
    } catch {}

    setRegistrationModal((prev) => ({
      ...prev,
      success: true,
      passId: Math.floor(100000 + Math.random() * 900000),
    }));
  };

  const scrollTimeline = (dir) => {
    if (!scrollTimelineRef.current) return;
    const offset = dir === 'left' ? -380 : 380;
    scrollTimelineRef.current.scrollBy({ left: offset, behavior: 'smooth' });
  };

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl 2xl:max-w-[1600px] mx-auto overflow-hidden">
      {/* Live Campus Notice Ticker Bar */}
      <div className="mb-14 rounded-2xl bg-app-surface1 border border-app-border p-3 flex items-center gap-3 overflow-hidden shadow-lg backdrop-blur-md">
        <div className="flex items-center gap-1.5 px-3 py-1 rounded-xl bg-gradient-to-r from-[#FFC53D]/20 to-[#FF7A59]/20 text-[#FFC53D] font-mono text-[11px] font-bold uppercase shrink-0 border border-[#FFC53D]/30">
          <Bell className="w-3.5 h-3.5 animate-bounce" />
          <span>FESTIVE DISPATCH</span>
        </div>
        <div className="overflow-hidden whitespace-nowrap text-xs font-mono text-app-muted">
          <motion.div
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
            className="inline-flex gap-8"
          >
            {[...notices, ...notices].map((n, i) => (
              <span key={i} className="inline-block text-app-text font-medium">
                {n}
              </span>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
        <SectionHeading
          badge="CAMPUS CALENDAR"
          badgeColor="gold"
          title="A CELEBRATION"
          highlight="EVERY SINGLE MONTH."
          subtitle="From 9 nights of whirling Navratri Garba to the HackHRU buildathon and Diwali Deepotsav. Explore vibrant year-round student life."
          className="mb-0"
        />

        <div className="flex flex-wrap items-center gap-3 self-start md:self-auto">
          <Link
            to="/events"
            className="inline-flex items-center gap-2 text-xs font-mono font-bold text-hru-gold hover:underline border border-hru-gold/30 px-4 py-2 rounded-full bg-hru-gold/10"
          >
            <span>View 12-Month Calendar & Guidelines</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Filter Chips Bar */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
        {eventCategories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-full text-xs font-mono font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer whitespace-nowrap ${
              activeCategory === cat
                ? 'bg-gradient-to-r from-[#FFC53D] to-[#FF7A59] text-[#0A0B1E] shadow-gold-glow scale-105'
                : 'bg-white/5 hover:bg-white/10 text-app-muted border border-white/10'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Large Featured Card (Navratri & Garba Night) */}
      <div className="mb-14 rounded-3xl overflow-hidden border border-white/15 bg-gradient-to-br from-[#12142B] via-[#1E2248] to-[#0A0B1E] shadow-2xl relative">
        <div className="relative min-h-[380px] sm:min-h-[440px] flex flex-col justify-end p-6 sm:p-10 lg:p-14 overflow-hidden">
          {/* Background Photo & Overlay */}
          <img
            src={featuredFestival.image}
            alt={featuredFestival.alt}
            loading="lazy"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
            className="absolute inset-0 w-full h-full object-cover filter brightness-[0.7] saturate-125 transition-transform duration-1000 hover:scale-105"
            style={{ objectPosition: 'center 35%' }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0B1E] via-[#0A0B1E]/60 to-transparent pointer-events-none" />
          <div className="absolute top-0 right-0 w-[500px] h-[300px] bg-gradient-to-b from-[#FF7A59]/30 to-transparent blur-[120px] pointer-events-none" />

          {/* Top Badges */}
          <div className="absolute top-6 left-6 sm:left-10 right-6 flex flex-wrap items-center justify-between gap-3 z-10">
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-[#FF7A59] to-[#FFC53D] text-[#0A0B1E] text-xs font-mono font-black uppercase tracking-wider shadow-lg">
                <Flame className="w-3.5 h-3.5 fill-current" />
                {featuredFestival.badge}
              </span>
              <span className="px-3 py-1 rounded-full bg-black/60 border border-white/20 text-white text-xs font-mono font-medium backdrop-blur-md">
                {featuredFestival.countdownLabel}
              </span>
            </div>

            <span className="font-mono text-xs text-[#FFC53D] font-bold bg-black/60 px-3 py-1 rounded-full border border-[#FFC53D]/30 backdrop-blur-md">
              {featuredFestival.dateStr}
            </span>
          </div>

          {/* Bottom Card Content */}
          <div className="relative z-10 max-w-3xl space-y-4">
            <div className="inline-block">
              <span className="text-xs font-mono uppercase tracking-widest text-[#FFC53D] font-bold">
                MONTH OF {featuredFestival.monthApprox.toUpperCase()}
              </span>
            </div>

            <h3 className="text-3xl sm:text-5xl lg:text-6xl font-black font-heading tracking-tight text-white leading-tight">
              {featuredFestival.title}
            </h3>

            <p className="text-sm sm:text-base text-neutral-200 leading-relaxed max-w-2xl">
              {featuredFestival.summary}
            </p>

            {/* Quick Competition Chips */}
            <div className="flex flex-wrap gap-2 pt-2">
              {featuredFestival.competitions.slice(0, 3).map((comp, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-1 text-[11px] font-mono font-medium px-2.5 py-1 rounded-lg bg-black/70 border border-white/15 text-white backdrop-blur-md"
                >
                  <Trophy className="w-3 h-3 text-[#FFC53D]" />
                  {comp.name} ({comp.prizePool})
                </span>
              ))}
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Button
                variant="gold"
                size="md"
                onClick={() => handleOpenRegister(featuredFestival)}
                icon={<ArrowUpRight className="w-4 h-4" />}
              >
                Register For Garba & Competitions
              </Button>

              <Link
                to={`/events/${featuredFestival.slug}`}
                className="px-5 py-2.5 rounded-full border border-white/20 bg-white/10 hover:bg-white/20 text-white text-xs font-mono font-bold tracking-wider transition-colors inline-flex items-center gap-1.5"
              >
                Explore Full Schedule & Rules
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Horizontal Scroll-Driven "Festival Year" Timeline (July to June) */}
      <div className="mb-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Calendar className="w-4 h-4 text-hru-gold" />
          <h4 className="font-heading font-bold text-lg text-white">
            12-Month Festival Year Timeline
          </h4>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => scrollTimeline('left')}
            aria-label="Scroll left"
            className="w-9 h-9 rounded-full border border-white/10 bg-white/5 hover:bg-white/15 text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={() => scrollTimeline('right')}
            aria-label="Scroll right"
            className="w-9 h-9 rounded-full border border-white/10 bg-white/5 hover:bg-white/15 text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div
        ref={scrollTimelineRef}
        className="flex gap-5 overflow-x-auto pb-8 scrollbar-none snap-x snap-mandatory"
      >
        {filteredFestivals.map((fest) => {
          const isActive = activeFestivalId === fest.id;

          return (
            <motion.div
              key={fest.id}
              onClick={() => setActiveFestivalId(fest.id)}
              animate={{
                width: isActive ? 380 : 300,
              }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className={`flex-none rounded-3xl overflow-hidden bg-app-surface1 border snap-start cursor-pointer transition-all duration-300 relative group flex flex-col justify-between ${
                isActive
                  ? 'border-hru-gold shadow-2xl ring-1 ring-hru-gold/50'
                  : 'border-white/10 hover:border-white/30'
              }`}
              style={{ minHeight: '420px' }}
            >
              {/* Card Photo Background */}
              <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-[#12142B] via-[#1E2248] to-[#0A0B1E]">
                <img
                  src={fest.image}
                  alt={fest.alt || fest.title}
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter brightness-90"
                  style={{ objectPosition: 'center 35%' }}
                />
                <div
                  className="absolute inset-0 opacity-40 mix-blend-multiply pointer-events-none"
                  style={{ backgroundColor: fest.tint }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0B1E] via-[#0A0B1E]/40 to-transparent" />

                <div className="absolute top-3 left-3 right-3 flex justify-between items-center z-10">
                  <span
                    className="font-mono text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border backdrop-blur-md"
                    style={{
                      borderColor: `${fest.tint}50`,
                      backgroundColor: `${fest.tint}20`,
                      color: fest.tint,
                    }}
                  >
                    {fest.category}
                  </span>

                  <span className="font-mono text-[10px] font-bold text-white bg-black/60 px-2.5 py-0.5 rounded-full border border-white/20 backdrop-blur-md">
                    {fest.monthApprox}
                  </span>
                </div>
              </div>

              {/* Content Block */}
              <div className="p-5 flex flex-col justify-between flex-grow">
                <div>
                  <h4 className="font-heading font-black text-lg text-white group-hover:text-hru-gold transition-colors leading-snug mb-2">
                    {fest.title}
                  </h4>
                  <p className="text-xs text-[#A4A8C4] line-clamp-2 leading-relaxed">
                    {fest.summary}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 mt-4 space-y-3">
                  <div className="flex items-center justify-between text-[11px] font-mono text-app-muted">
                    <span className="flex items-center gap-1 text-white">
                      <Calendar className="w-3.5 h-3.5 text-hru-gold" />
                      {fest.dateStr}
                    </span>
                    <span className="text-hru-gold font-bold">
                      {fest.competitions.length} Competitions
                    </span>
                  </div>

                  <div className="flex items-center gap-2 pt-1">
                    <Button
                      variant="glass"
                      size="sm"
                      className="w-full justify-center text-xs"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleOpenRegister(fest);
                      }}
                    >
                      Register
                    </Button>
                    <Link
                      to={`/events/${fest.slug}`}
                      onClick={(e) => e.stopPropagation()}
                      className="p-2 rounded-xl border border-white/15 bg-white/5 hover:bg-white/15 text-white transition-colors shrink-0"
                      title="View Details"
                    >
                      <ArrowUpRight className="w-4 h-4 text-hru-gold" />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* UI-Only Registration Modal */}
      <AnimatePresence>
        {registrationModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-lg rounded-3xl bg-[#0A0B1E] border border-white/20 p-6 sm:p-8 shadow-2xl overflow-hidden"
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setRegistrationModal(null)}
                className="absolute top-5 right-5 w-8 h-8 rounded-full border border-white/15 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>

              {registrationModal.success ? (
                <div className="text-center py-6 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-[#2DD4BF]/20 border-2 border-[#2DD4BF] text-[#2DD4BF] mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-black font-heading text-white">
                    Registration Confirmed!
                  </h3>
                  <p className="text-sm text-[#A4A8C4] max-w-sm mx-auto leading-relaxed">
                    You are registered for <span className="text-white font-bold">{registrationModal.event.title}</span>. Your student digital entry badge has been generated.
                  </p>
                  <div className="p-3 rounded-2xl bg-white/5 border border-white/10 text-xs font-mono text-[#FFC53D] inline-block">
                    PASS ID: HRU-FEST-{registrationModal.passId || '849201'}
                  </div>
                  <div className="pt-4">
                    <Button
                      variant="gold"
                      size="md"
                      className="w-full justify-center"
                      onClick={() => setRegistrationModal(null)}
                    >
                      Done & Return to Campus
                    </Button>
                  </div>
                </div>
              ) : (
                <div>
                  <div className="mb-6 pr-8">
                    <span className="font-mono text-xs uppercase tracking-wider text-[#FFC53D] block mb-1">
                      Event RSVP • UI Demo
                    </span>
                    <h3 className="text-2xl font-black font-heading text-white">
                      {registrationModal.event.title}
                    </h3>
                    <p className="text-xs text-[#A4A8C4] mt-1">
                      Fill in your details below to reserve team slots and student entry pass.
                    </p>
                  </div>

                  <form onSubmit={handleConfirmRegister} className="space-y-4">
                    <div>
                      <label className="block text-xs font-mono uppercase text-app-muted mb-1">
                        Full Name / Team Lead
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Aarav Sharma"
                        className="w-full bg-white/5 border border-white/15 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-hru-gold transition-colors"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-mono uppercase text-app-muted mb-1">
                          Student Email
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="aarav@hru.edu.in"
                          className="w-full bg-white/5 border border-white/15 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-hru-gold transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-mono uppercase text-app-muted mb-1">
                          Academic Department
                        </label>
                        <select
                          value={formData.department}
                          onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                          className="w-full bg-[#12142B] border border-white/15 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-hru-gold transition-colors"
                        >
                          <option>AI & Data Science</option>
                          <option>Computer Science</option>
                          <option>Paramedical & Pharmacy</option>
                          <option>Sports Science</option>
                          <option>Design & Spatial XR</option>
                          <option>Business & Ventures</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase text-app-muted mb-1">
                        Select Competition / Track
                      </label>
                      <select
                        className="w-full bg-[#12142B] border border-white/15 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-hru-gold transition-colors"
                      >
                        <option>General Festive Entry & Concert Pass</option>
                        {registrationModal.event.competitions.map((c, i) => (
                          <option key={i}>{c.name} ({c.prizePool})</option>
                        ))}
                      </select>
                    </div>

                    <div className="pt-2">
                      <Button
                        type="submit"
                        variant="gold"
                        size="lg"
                        className="w-full justify-center"
                        icon={<Sparkles className="w-4 h-4" />}
                      >
                        Confirm Instant Registration
                      </Button>
                    </div>
                  </form>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default EventsSection;
