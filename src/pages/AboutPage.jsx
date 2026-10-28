import React from 'react';
import { Sparkles, Check, X } from 'lucide-react';
import SectionHeading from '../components/ui/SectionHeading';
import Button from '../components/ui/Button';

export function AboutPage() {
  const comparison = [
    {
      feature: 'Curriculum Velocity',
      traditional: 'Updated once every 5 to 10 years',
      hru: 'Updated continuously every sprint cycle',
    },
    {
      feature: 'Core Evaluation',
      traditional: 'Memorizing facts for 3-hour written exams',
      hru: '100% Shipping production software, models & products',
    },
    {
      feature: 'Capital & Funding',
      traditional: 'Student debt with zero seed investment',
      hru: '₹50 Cr dedicated seed tickets directly to student startups',
    },
    {
      feature: 'Faculty Pedagogy',
      traditional: 'Tenured lecturers with no recent industry building',
      hru: 'Active research scientists, CTOs, and venture partners',
    },
    {
      feature: 'Computing Hardware',
      traditional: 'Restricted desktop labs with scheduled slots',
      hru: 'Direct shell access to 512-H100 clusters 24/7/365',
    },
  ];

  const mentors = [
    {
      name: 'Dr. Valerius Thorne',
      title: 'Dean of AI & Swarm Dynamics',
      prev: 'Ex-DeepMind / Stanford AI Lab',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
    },
    {
      name: 'Elena Rostova',
      title: 'Head of Spatial Computing Lab',
      prev: 'Former Principal Vision Designer, Cupertino',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80',
    },
    {
      name: 'Marcus Vance',
      title: 'Managing Partner, HRU Venture Fund',
      prev: 'Early-stage GP, 3 unicorn exits',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
    },
    {
      name: 'Zuri Okafor',
      title: 'Director of Synthetic Biology',
      prev: 'Pioneered CRISPR Microfluidics at Cambridge',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=300&q=80',
    },
  ];

  return (
    <div className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neon-coral/30 bg-neon-coral/10 text-neon-coral font-mono text-xs uppercase tracking-widest mb-4">
          <Sparkles className="w-3.5 h-3.5" />
          The HRU Manifesto
        </div>
        <h1 className="text-4xl sm:text-6xl font-black font-heading text-text-main tracking-tight leading-none mb-6">
          EDUCATION REBUILT <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-coral via-neon-violet to-neon-lime">
            FROM FIRST PRINCIPLES.
          </span>
        </h1>
        <p className="text-text-muted text-base sm:text-lg leading-relaxed">
          The modern university was invented during the Industrial Revolution to produce factory workers. HR University was engineered for the era of AI and borderless agency.
        </p>
      </div>

      {/* Comparison Grid: Traditional vs HRU */}
      <div className="mb-20">
        <SectionHeading
          badge="THE DIFFERENCE"
          badgeColor="lime"
          title="LEGACY FACTORY VS."
          highlight="HR UNIVERSITY."
          subtitle="A side-by-side view of why traditional higher education is failing the next generation."
        />

        <div className="overflow-x-auto">
          <div className="min-w-[650px] rounded-3xl bg-white/70 dark:bg-[#10121A]/70 border border-black/10 dark:border-white/10 overflow-hidden shadow-xl">
            <div className="grid grid-cols-12 p-6 border-b border-black/10 dark:border-white/10 font-mono text-xs uppercase tracking-wider bg-black/5 dark:bg-white/5">
              <div className="col-span-4 text-text-muted">Dimension</div>
              <div className="col-span-4 text-text-muted">Traditional College</div>
              <div className="col-span-4 text-neon-lime font-bold">HR University (HRU)</div>
            </div>

            <div className="divide-y divide-black/5 dark:divide-white/5 text-sm">
              {comparison.map((item, idx) => (
                <div key={idx} className="grid grid-cols-12 p-6 items-center hover:bg-black/[0.02] dark:hover:bg-white/[0.02] transition-colors">
                  <div className="col-span-4 font-heading font-bold text-text-main">
                    {item.feature}
                  </div>
                  <div className="col-span-4 text-text-muted flex items-center gap-2">
                    <X className="w-4 h-4 text-red-500 shrink-0" />
                    <span>{item.traditional}</span>
                  </div>
                  <div className="col-span-4 text-text-main font-semibold flex items-center gap-2">
                    <Check className="w-4 h-4 text-neon-lime shrink-0" />
                    <span>{item.hru}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Faculty and Mentor Leadership */}
      <div className="mb-20">
        <SectionHeading
          badge="LEADERSHIP & MENTORS"
          badgeColor="violet"
          title="LEARN DIRECTLY FROM"
          highlight="WORLD-CLASS BUILDERS."
          subtitle="Our fellows are guided by researchers who write seminal papers and founders who have scaled generational companies."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {mentors.map((m, idx) => (
            <div
              key={idx}
              className="p-6 rounded-3xl bg-white/70 dark:bg-[#10121A]/70 border border-black/10 dark:border-white/10 group hover:border-neon-lime/40 transition-all duration-300 shadow-lg text-center"
            >
              <img
                src={m.avatar}
                alt={m.name}
                className="w-20 h-20 rounded-2xl mx-auto object-cover mb-4 ring-2 ring-neon-lime/20 group-hover:ring-neon-lime transition-all duration-300"
              />
              <h3 className="font-heading font-bold text-lg text-text-main">
                {m.name}
              </h3>
              <p className="text-xs font-mono text-neon-lime mt-1">
                {m.title}
              </p>
              <p className="text-xs text-text-muted mt-2">
                {m.prev}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="rounded-3xl p-8 sm:p-12 bg-gradient-to-br from-neon-lime/10 via-neon-violet/10 to-transparent border border-neon-lime/30 text-center">
        <h2 className="text-3xl font-extrabold font-heading text-text-main mb-4">
          Ready to join the fellowship?
        </h2>
        <p className="text-text-muted max-w-xl mx-auto mb-8 text-sm sm:text-base">
          Applications are evaluated every two weeks. Apply today to secure your place in the upcoming cohort.
        </p>
        <Button to="/admissions" variant="lime" size="lg">
          Submit Portfolio Signal
        </Button>
      </div>
    </div>
  );
}

export default AboutPage;
