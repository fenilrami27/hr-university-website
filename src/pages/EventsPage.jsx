import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Calendar as CalendarIcon,
  Search,
  Sparkles,
  Trophy,
  Users,
  MapPin,
  ArrowUpRight,
  Filter,
  CheckCircle2,
  X,
  Flame,
  List,
  Grid
} from 'lucide-react';
import confetti from 'canvas-confetti';
import SectionHeading from '../components/ui/SectionHeading';
import Button from '../components/ui/Button';
import { festivalsData, eventCategories } from '../data/events';

export function EventsPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState('grid'); // 'grid' | 'list'
  const [selectedMonth, setSelectedMonth] = useState('All');
  const [registrationModal, setRegistrationModal] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '', dept: 'AI & Data Science' });

  const monthsList = [
    'All',
    'January',
    'February',
    'March',
    'April',
    'May',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const filteredEvents = festivalsData.filter((evt) => {
    const matchesCategory = activeCategory === 'All' || evt.category === activeCategory;
    const matchesMonth = selectedMonth === 'All' || evt.monthApprox.toLowerCase().includes(selectedMonth.toLowerCase());
    const matchesSearch =
      evt.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      evt.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      evt.competitions.some((c) => c.name.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesMonth && matchesSearch;
  });

  const handleOpenRegister = (evt) => {
    setRegistrationModal({ event: evt, success: false });
  };

  const handleConfirmRegister = (e) => {
    e.preventDefault();
    try {
      confetti({
        particleCount: 40,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#FFC53D', '#FF7A59', '#2DD4BF', '#F472B6'],
        disableForReducedMotion: true,
      });
    } catch {}
    setRegistrationModal((prev) => ({ ...prev, success: true }));
  };

  return (
    <div className="pt-28 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl 2xl:max-w-[1600px] mx-auto">
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-hru-gold/40 bg-hru-gold/15 text-hru-gold font-mono text-xs uppercase tracking-widest mb-4">
          <Sparkles className="w-3.5 h-3.5" />
          Campus Calendar • Academic Year 2026/27
        </div>
        <h1 className="text-4xl sm:text-6xl font-black font-heading text-app-text tracking-tight leading-none mb-6">
          CAMPUS FESTIVALS & <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFC53D] via-[#FF7A59] via-[#2DD4BF] to-[#22D3EE]">
            STUDENT COMPETITIONS.
          </span>
        </h1>
        <p className="text-app-muted text-base sm:text-lg leading-relaxed">
          Experience twelve months of rich cultural heritage, national hackathons, and high-energy university cups. Explore dates, prize pools, and register teams online.
        </p>
      </div>

      {/* Control Bar: Search + Category Chips + Month Filter + Grid/List Toggle */}
      <div className="space-y-4 mb-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Search Box */}
          <div className="relative w-full md:w-96">
            <Search className="w-4 h-4 text-app-muted absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search festivals, hackathons, Garba..."
              className="w-full bg-white/5 border border-white/10 rounded-full pl-11 pr-4 py-2.5 text-sm text-app-text placeholder-app-muted focus:outline-none focus:border-hru-gold transition-colors"
            />
          </div>

          {/* Right Controls: Month Selector + Grid/List Toggle */}
          <div className="flex items-center gap-3 w-full md:w-auto justify-between md:justify-end">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono text-app-muted hidden sm:inline">Month:</span>
              <select
                value={selectedMonth}
                onChange={(e) => setSelectedMonth(e.target.value)}
                className="bg-[#12142B] border border-white/15 rounded-xl px-3 py-2 text-xs font-mono text-white focus:outline-none focus:border-hru-gold transition-colors"
              >
                {monthsList.map((m) => (
                  <option key={m} value={m}>{m === 'All' ? 'All Months (12)' : m}</option>
                ))}
              </select>
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center bg-white/5 border border-white/10 rounded-xl p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-1.5 rounded-lg transition-colors ${
                  viewMode === 'grid' ? 'bg-hru-gold text-hru-midnight font-bold' : 'text-app-muted hover:text-white'
                }`}
                title="Grid View"
              >
                <Grid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-1.5 rounded-lg transition-colors ${
                  viewMode === 'list' ? 'bg-hru-gold text-hru-midnight font-bold' : 'text-app-muted hover:text-white'
                }`}
                title="List View"
              >
                <List className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Category Chips Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {eventCategories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer whitespace-nowrap ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-[#FFC53D] to-[#FF7A59] text-[#0A0B1E] shadow-gold-glow'
                  : 'bg-white/5 hover:bg-white/10 text-app-muted border border-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid or List Display */}
      {viewMode === 'grid' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.map((evt) => (
            <motion.div
              key={evt.id}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="rounded-3xl overflow-hidden bg-app-surface1 border border-white/10 hover:border-white/30 transition-all duration-500 group flex flex-col justify-between shadow-xl relative"
            >
              {/* Event Image Container with Hover Zoom & Color Wash */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={evt.image}
                  alt={evt.alt || evt.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter brightness-90 group-hover:brightness-100"
                />

                {/* Color Wash Overlay in Event's Color on Hover */}
                <div
                  className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none mix-blend-multiply"
                  style={{ backgroundColor: evt.tint }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0B1E] via-[#0A0B1E]/40 to-transparent pointer-events-none" />

                {/* Top Floating Badges */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
                  <span
                    className="font-mono text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border backdrop-blur-md"
                    style={{
                      borderColor: `${evt.tint}50`,
                      backgroundColor: `${evt.tint}25`,
                      color: evt.tint,
                    }}
                  >
                    {evt.category}
                  </span>
                  <span className="font-mono text-[10px] font-bold text-white bg-black/60 px-2.5 py-0.5 rounded-full border border-white/20 backdrop-blur-md">
                    {evt.monthApprox}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="font-heading font-black text-xl text-white group-hover:text-hru-gold transition-colors leading-snug mb-2">
                    {evt.title}
                  </h3>
                  <p className="text-xs text-[#A4A8C4] line-clamp-2 leading-relaxed">
                    {evt.summary}
                  </p>
                </div>

                {/* Sliding Competition Chips */}
                <div className="pt-4 border-t border-white/10 mt-5 space-y-3">
                  <div className="flex flex-wrap gap-1.5">
                    {evt.competitions.map((comp, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center gap-1 text-[10px] font-mono font-medium px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-white group-hover:border-white/20 transition-all transform group-hover:-translate-y-0.5"
                      >
                        <Trophy className="w-3 h-3 text-[#FFC53D]" />
                        {comp.name}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between text-[11px] font-mono text-app-muted pt-2">
                    <span className="flex items-center gap-1 text-white">
                      <CalendarIcon className="w-3.5 h-3.5 text-hru-gold" />
                      {evt.dateStr}
                    </span>
                    <span className="text-[#2DD4BF] font-semibold">
                      {evt.competitions.length} Contests
                    </span>
                  </div>

                  <div className="flex items-center gap-2 pt-2">
                    <Button
                      variant="gold"
                      size="sm"
                      className="w-full justify-center text-xs"
                      onClick={() => handleOpenRegister(evt)}
                    >
                      Register Now
                    </Button>
                    <Link
                      to={`/events/${evt.slug}`}
                      className="px-3 py-2 rounded-xl border border-white/15 bg-white/5 hover:bg-white/15 text-white text-xs font-mono font-bold flex items-center gap-1 shrink-0"
                    >
                      <span>Details</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-hru-gold" />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      ) : (
        /* List View */
        <div className="space-y-4">
          {filteredEvents.map((evt) => (
            <motion.div
              key={evt.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-5 sm:p-6 rounded-3xl bg-app-surface1 border border-white/10 hover:border-white/30 transition-all flex flex-col md:flex-row items-start md:items-center justify-between gap-6 group"
            >
              <div className="flex items-start sm:items-center gap-4">
                <img
                  src={evt.image}
                  alt={evt.title}
                  loading="lazy"
                  className="w-20 h-20 rounded-2xl object-cover shrink-0 border border-white/10"
                />
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span
                      className="text-[10px] font-mono uppercase font-bold px-2 py-0.5 rounded-full border"
                      style={{
                        borderColor: `${evt.tint}40`,
                        color: evt.tint,
                      }}
                    >
                      {evt.category}
                    </span>
                    <span className="text-xs font-mono text-app-muted">
                      {evt.monthApprox} • {evt.dateStr}
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-heading font-black text-white group-hover:text-hru-gold transition-colors">
                    {evt.title}
                  </h3>
                  <p className="text-xs text-[#A4A8C4] line-clamp-1 max-w-xl mt-1">
                    {evt.summary}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 w-full md:w-auto justify-end">
                <Button
                  variant="gold"
                  size="sm"
                  onClick={() => handleOpenRegister(evt)}
                >
                  Register
                </Button>
                <Link
                  to={`/events/${evt.slug}`}
                  className="p-2.5 rounded-xl border border-white/15 bg-white/5 hover:bg-white/15 text-white text-xs font-mono flex items-center gap-1"
                >
                  <span>Details</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-hru-gold" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      )}

      {/* UI Registration Modal with Confetti */}
      <AnimatePresence>
        {registrationModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-lg rounded-3xl bg-[#0A0B1E] border border-white/20 p-6 sm:p-8 shadow-2xl overflow-hidden"
            >
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
                    You have reserved a spot for <span className="text-white font-bold">{registrationModal.event.title}</span>. Your event credential pass has been dispatched.
                  </p>
                  <div className="p-3 rounded-2xl bg-white/5 border border-white/10 text-xs font-mono text-[#FFC53D] inline-block">
                    TICKET PASS: HRU-{Math.floor(100000 + Math.random() * 900000)}
                  </div>
                  <div className="pt-4">
                    <Button
                      variant="gold"
                      size="md"
                      className="w-full justify-center"
                      onClick={() => setRegistrationModal(null)}
                    >
                      Done
                    </Button>
                  </div>
                </div>
              ) : (
                <div>
                  <div className="mb-6 pr-8">
                    <span className="font-mono text-xs uppercase tracking-wider text-[#FFC53D] block mb-1">
                      Event RSVP • Class of 2026/27
                    </span>
                    <h3 className="text-2xl font-black font-heading text-white">
                      {registrationModal.event.title}
                    </h3>
                    <p className="text-xs text-[#A4A8C4] mt-1">
                      Enter team details to reserve free student festival passes.
                    </p>
                  </div>

                  <form onSubmit={handleConfirmRegister} className="space-y-4">
                    <div>
                      <label className="block text-xs font-mono uppercase text-app-muted mb-1">
                        Full Name / Team Leader
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Priya Patel"
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
                          placeholder="priya@hru.edu.in"
                          className="w-full bg-white/5 border border-white/15 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-hru-gold transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-mono uppercase text-app-muted mb-1">
                          Academic Department
                        </label>
                        <select
                          value={formData.dept}
                          onChange={(e) => setFormData({ ...formData, dept: e.target.value })}
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
                        Select Registered Competition
                      </label>
                      <select
                        className="w-full bg-[#12142B] border border-white/15 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-hru-gold transition-colors"
                      >
                        <option>General Festive Entry Pass</option>
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
                        Confirm Registration
                      </Button>
                    </div>
                  </form>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default EventsPage;
