import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowLeft,
  Calendar,
  MapPin,
  Sparkles,
  Trophy,
  Users,
  CheckCircle2,
  ChevronDown,
  Clock,
  ArrowUpRight,
  ShieldAlert,
  Flame,
  Camera,
  X
} from 'lucide-react';
import confetti from 'canvas-confetti';
import Button from '../components/ui/Button';
import Lightbox from '../components/ui/Lightbox';
import { festivalsData } from '../data/events';

export function EventDetailPage() {
  const { slug } = useParams();
  const [openRuleIndex, setOpenRuleIndex] = useState(0);
  const [registered, setRegistered] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [regForm, setRegForm] = useState({ name: '', roll: '', teamSize: 'Solo' });

  // Find festival by slug or fallback to first
  const event = festivalsData.find((f) => f.slug === slug) || festivalsData[0];

  // Related events
  const relatedEvents = festivalsData.filter((f) => f.id !== event.id).slice(0, 3);

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    try {
      confetti({
        particleCount: 35,
        spread: 70,
        origin: { y: 0.6 },
        colors: [event.tint || '#FFC53D', '#FF7A59', '#2DD4BF'],
        disableForReducedMotion: true,
      });
    } catch {}
    setRegistered(true);
  };

  const handleOpenPhoto = (idx) => {
    setLightboxIndex(idx);
    setLightboxOpen(true);
  };

  return (
    <div className="pt-28 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl 2xl:max-w-[1600px] mx-auto">
      {/* Back Button */}
      <Link
        to="/events"
        className="inline-flex items-center gap-2 text-xs font-mono text-app-muted hover:text-hru-gold transition-colors mb-8"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Back to All Campus Festivals & Calendar</span>
      </Link>

      {/* Hero Header Banner */}
      <div className="relative rounded-3xl overflow-hidden mb-12 border border-white/15 bg-[#0A0B1E] shadow-2xl">
        <div className="relative min-h-[420px] sm:min-h-[500px] flex flex-col justify-end p-6 sm:p-12 lg:p-16">
          <img
            src={event.image}
            alt={event.alt || event.title}
            className="absolute inset-0 w-full h-full object-cover filter brightness-[0.65] saturate-125"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0B1E] via-[#0A0B1E]/60 to-transparent pointer-events-none" />
          <div
            className="absolute top-0 right-0 w-[600px] h-[350px] blur-[140px] pointer-events-none"
            style={{ backgroundColor: `${event.tint}35` }}
          />

          <div className="relative z-10 max-w-3xl space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              <span
                className="font-mono text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full border backdrop-blur-md"
                style={{
                  borderColor: `${event.tint}60`,
                  backgroundColor: `${event.tint}25`,
                  color: event.tint,
                }}
              >
                {event.category}
              </span>
              <span className="font-mono text-xs text-white bg-black/60 px-3 py-1 rounded-full border border-white/20 backdrop-blur-md">
                {event.monthApprox} • {event.dateStr}
              </span>
              <span className="font-mono text-xs text-[#FFC53D] font-bold bg-black/60 px-3 py-1 rounded-full border border-[#FFC53D]/30 backdrop-blur-md">
                ✦ {event.countdownLabel}
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black font-heading text-white tracking-tight leading-[1.05]">
              {event.title}
            </h1>

            <p className="text-base sm:text-lg text-neutral-200 leading-relaxed max-w-2xl">
              {event.tagline}
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
        {/* Left Column: Description, Schedule, Competitions, Rules */}
        <div className="lg:col-span-8 space-y-12">
          {/* Respectful Celebration Description */}
          <div className="p-8 rounded-3xl bg-app-surface1 border border-white/10 shadow-lg space-y-4">
            <h2 className="text-2xl font-black font-heading text-white flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-hru-gold" />
              How HR University Celebrates
            </h2>
            <p className="text-sm sm:text-base text-[#A4A8C4] leading-relaxed whitespace-pre-line">
              {event.description}
            </p>
          </div>

          {/* Schedule Timeline */}
          <div className="p-8 rounded-3xl bg-app-surface1 border border-white/10 shadow-lg space-y-6">
            <h2 className="text-2xl font-black font-heading text-white flex items-center gap-2">
              <Clock className="w-5 h-5 text-hru-gold" />
              Celebration Itinerary & Schedule
            </h2>

            <div className="space-y-4 relative before:absolute before:left-[17px] before:top-2 before:bottom-2 before:w-[2px] before:bg-white/10">
              {event.schedule.map((item, idx) => (
                <div key={idx} className="relative flex items-start gap-4 pl-8">
                  <div className="absolute left-[11px] top-1.5 w-3.5 h-3.5 rounded-full bg-hru-gold border-2 border-[#0A0B1E]" />
                  <div>
                    <span className="font-mono text-xs text-[#FFC53D] font-bold block mb-0.5">
                      {item.time}
                    </span>
                    <h4 className="font-heading font-bold text-base text-white">
                      {item.title}
                    </h4>
                    <span className="font-mono text-xs text-app-muted flex items-center gap-1 mt-0.5">
                      <MapPin className="w-3 h-3 text-app-muted" />
                      {item.venue}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Competitions Table */}
          <div className="p-8 rounded-3xl bg-app-surface1 border border-white/10 shadow-lg space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <h2 className="text-2xl font-black font-heading text-white flex items-center gap-2">
                <Trophy className="w-5 h-5 text-hru-gold" />
                Featured Student Competitions
              </h2>
              <span className="text-xs font-mono text-app-muted">
                Prizes Awarded in Official Valedictory
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-white/10 text-xs font-mono uppercase tracking-wider text-app-muted">
                    <th className="py-3 px-3">Competition</th>
                    <th className="py-3 px-3">Category</th>
                    <th className="py-3 px-3">Team Size</th>
                    <th className="py-3 px-3">Prize Pool</th>
                    <th className="py-3 px-3">Venue</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10 text-xs">
                  {event.competitions.map((comp, idx) => (
                    <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                      <td className="py-3.5 px-3 font-heading font-bold text-white text-sm">
                        {comp.name}
                        <span className="block text-[10px] font-mono text-hru-gold font-normal">
                          ✦ {comp.vibe}
                        </span>
                      </td>
                      <td className="py-3.5 px-3">
                        <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10 font-mono text-[10px]">
                          {comp.type}
                        </span>
                      </td>
                      <td className="py-3.5 px-3 font-mono text-app-muted">
                        {comp.teamSize}
                      </td>
                      <td className="py-3.5 px-3 font-mono font-bold text-[#2DD4BF]">
                        {comp.prizePool}
                      </td>
                      <td className="py-3.5 px-3 font-mono text-app-muted">
                        {comp.venue}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Last Year's Moments Gallery */}
          {event.momentsGallery && event.momentsGallery.length > 0 && (
            <div className="p-8 rounded-3xl bg-app-surface1 border border-white/10 shadow-lg space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-black font-heading text-white flex items-center gap-2">
                  <Camera className="w-5 h-5 text-hru-gold" />
                  Last Year's Memories & Lightbox
                </h2>
                <span className="text-xs font-mono text-app-muted">
                  Click photo to zoom
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {event.momentsGallery.map((m, idx) => (
                  <div
                    key={idx}
                    onClick={() => handleOpenPhoto(idx)}
                    className="relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer group border border-white/10"
                  >
                    <img
                      src={m.src}
                      alt={m.caption}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 filter brightness-90 group-hover:brightness-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
                      <span className="text-[11px] font-mono text-white leading-tight">
                        {m.caption}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Rules Accordion */}
          <div className="p-8 rounded-3xl bg-app-surface1 border border-white/10 shadow-lg space-y-6">
            <h2 className="text-2xl font-black font-heading text-white flex items-center gap-2">
              <ShieldAlert className="w-5 h-5 text-hru-gold" />
              Festival Code of Conduct & Guidelines
            </h2>

            <div className="space-y-3">
              {event.rules.map((rule, idx) => {
                const isOpen = openRuleIndex === idx;

                return (
                  <div
                    key={idx}
                    className="rounded-2xl border border-white/10 bg-white/[0.02] overflow-hidden"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenRuleIndex(isOpen ? -1 : idx)}
                      className="w-full px-5 py-4 flex items-center justify-between text-left font-heading font-bold text-sm text-white hover:text-hru-gold transition-colors"
                    >
                      <span>{rule.title}</span>
                      <ChevronDown
                        className={`w-4 h-4 text-hru-gold transition-transform duration-300 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-4 text-xs font-mono text-[#A4A8C4] leading-relaxed border-t border-white/5 pt-3">
                        {rule.detail}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Column: Sticky Quick Register Mini-Form */}
        <div className="lg:col-span-4 sticky top-28 space-y-6">
          <div className="p-6 sm:p-8 rounded-3xl bg-app-surface1 border-2 border-hru-gold shadow-2xl space-y-5">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs uppercase tracking-widest text-hru-gold font-bold">
                INSTANT RSVP
              </span>
              <Sparkles className="w-4 h-4 text-hru-gold" />
            </div>

            <h3 className="font-heading font-black text-2xl text-white">
              Register for {event.title}
            </h3>

            {registered ? (
              <div className="py-6 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-[#2DD4BF]/20 border-2 border-[#2DD4BF] text-[#2DD4BF] mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="font-heading font-bold text-lg text-white">
                  Registration Successful!
                </h4>
                <p className="text-xs text-[#A4A8C4]">
                  Your student entry pass has been emailed to you. Please bring your college ID card.
                </p>
                <div className="p-2 rounded-xl bg-white/5 border border-white/10 text-xs font-mono text-[#FFC53D]">
                  PASS: HRU-{Math.floor(100000 + Math.random() * 900000)}
                </div>
              </div>
            ) : (
              <form onSubmit={handleRegisterSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-mono uppercase text-app-muted mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    value={regForm.name}
                    onChange={(e) => setRegForm({ ...regForm, name: e.target.value })}
                    placeholder="Ananya Joshi"
                    className="w-full bg-white/5 border border-white/15 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-hru-gold transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-app-muted mb-1">
                    Roll No / University ID
                  </label>
                  <input
                    type="text"
                    required
                    value={regForm.roll}
                    onChange={(e) => setRegForm({ ...regForm, roll: e.target.value })}
                    placeholder="HRU-2026-CS-042"
                    className="w-full bg-white/5 border border-white/15 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-hru-gold transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-app-muted mb-1">
                    Select Event / Competition
                  </label>
                  <select
                    className="w-full bg-[#12142B] border border-white/15 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-hru-gold transition-colors"
                  >
                    <option>General Campus Celebration Pass</option>
                    {event.competitions.map((c, i) => (
                      <option key={i}>{c.name}</option>
                    ))}
                  </select>
                </div>

                <div className="pt-2">
                  <Button
                    type="submit"
                    variant="gold"
                    size="md"
                    className="w-full justify-center text-xs"
                    icon={<ArrowUpRight className="w-4 h-4" />}
                  >
                    Submit Registration Pass
                  </Button>
                </div>
              </form>
            )}

            <div className="pt-4 border-t border-white/10 text-[11px] font-mono text-app-muted space-y-1">
              <div>✦ Free entry for all HRU enrolled fellows</div>
              <div>✦ External guest passes subject to ID check</div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Events Section */}
      <div className="pt-12 border-t border-white/10">
        <h3 className="text-2xl font-black font-heading text-white mb-6">
          More Upcoming Celebrations
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {relatedEvents.map((rel) => (
            <Link
              key={rel.id}
              to={`/events/${rel.slug}`}
              className="p-5 rounded-3xl bg-app-surface1 border border-white/10 hover:border-hru-gold/40 transition-all flex flex-col justify-between group shadow-lg"
            >
              <div className="relative aspect-[16/10] rounded-2xl overflow-hidden mb-4">
                <img
                  src={rel.image}
                  alt={rel.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div>
                <span className="text-[10px] font-mono text-hru-gold uppercase font-bold">
                  {rel.monthApprox}
                </span>
                <h4 className="font-heading font-bold text-lg text-white group-hover:text-hru-gold transition-colors mt-1">
                  {rel.title}
                </h4>
                <p className="text-xs text-app-muted line-clamp-2 mt-1">
                  {rel.summary}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Lightbox for Gallery */}
      {lightboxOpen && event.momentsGallery && (
        <Lightbox
          images={event.momentsGallery}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxOpen(false)}
          onNext={() => setLightboxIndex((lightboxIndex + 1) % event.momentsGallery.length)}
          onPrev={() =>
            setLightboxIndex((lightboxIndex - 1 + event.momentsGallery.length) % event.momentsGallery.length)
          }
        />
      )}
    </div>
  );
}

export default EventDetailPage;
