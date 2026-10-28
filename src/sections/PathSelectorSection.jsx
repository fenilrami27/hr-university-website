import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { UserCheck, Shield, GraduationCap, Briefcase, RefreshCw, ArrowRight, CheckCircle2 } from 'lucide-react';
import Button from '../components/ui/Button';

export function PathSelectorSection() {
  const [activePersona, setActivePersona] = useState('student');

  const personas = {
    student: {
      id: 'student',
      title: 'Future Student (Undergrad)',
      icon: GraduationCap,
      headline: 'Build Real Software & Raise Venture Capital Before You Graduate.',
      badge: 'Zero Rote Exams • 100% Studio Work',
      points: [
        'Direct unmetered shell access to 512x H100 GPU cluster from semester one',
        '₹50 Crore student seed fund with direct checks up to ₹1.5 Crore for student startups',
        'Semester residency rotations across San Francisco, Tokyo, and Berlin',
      ],
      ctaText: 'Explore Undergraduate Programs',
      ctaLink: '/programs',
    },
    parent: {
      id: 'parent',
      title: 'Parent & Guardian',
      icon: Shield,
      headline: 'A Trusted, Globally Accredited Foundation For Your Child’s Ambition.',
      badge: 'Full ECTS Compatibility • Top Tier Safety',
      points: [
        '98% Verified career and venture placement rate within 90 days of graduation',
        'Over 90% of students receive need-blind or merit-based tuition scholarships',
        '24/7 biometric smart campus security with on-site medical and wellness teams',
      ],
      ctaText: 'View Accreditation & Campus Safety',
      ctaLink: '/about',
    },
    transfer: {
      id: 'transfer',
      title: 'Transfer Student',
      icon: RefreshCw,
      headline: 'Accelerate Your Momentum. Transfer Credits In Less Than 5 Days.',
      badge: 'Fast Credit Assessment • Year-Round Entry',
      points: [
        'Seamless recognition of European ECTS and US collegiate semester credits',
        'Immediate assignment of dedicated faculty mentor upon transfer acceptance',
        'No repeated coursework — jump straight into studio capstone projects',
      ],
      ctaText: 'Start Credit Transfer Check',
      ctaLink: '/admissions',
    },
    postgraduate: {
      id: 'postgraduate',
      title: 'Postgraduate & Fellow',
      icon: UserCheck,
      headline: 'Conduct Cutting-Edge R&D With Commercial Scale & Frontier Grants.',
      badge: 'Fully Funded Ph.D • Direct Lab Fellowships',
      points: [
        'M.Tech, M.Des, and Ph.D fellowships with up to 100% full tuition coverage',
        'Co-publish seminal papers in NeurIPS, IEEE, Nature, and ACM',
        'Collaborate with principal research scientists and venture partners',
      ],
      ctaText: 'View Master’s & Doctoral Grants',
      ctaLink: '/scholarships',
    },
    professional: {
      id: 'professional',
      title: 'Working Professional',
      icon: Briefcase,
      headline: 'Master AI Systems & Spatial Computing Without Pausing Your Career.',
      badge: 'Flexible Studio Sprints • Executive Mentors',
      points: [
        'Modular hybrid micro-credentials and asynchronous prompt challenges',
        'Weekend collaborative buildathons and venture demo nights',
        'Direct access to global alumni network of founders and engineering leads',
      ],
      ctaText: 'Browse Executive Tracks',
      ctaLink: '/programs',
    },
  };

  const current = personas[activePersona];

  return (
    <section className="relative py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="rounded-[28px] p-6 sm:p-10 bg-app-surface1 border border-app-border shadow-2xl">
        <div className="text-center max-w-xl mx-auto mb-8">
          <span className="text-xs font-mono uppercase tracking-widest text-hru-gold font-bold">
            TAILORED EXPERIENCE
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-app-text mt-1">
            Choose Your Path Through HRU
          </h2>
          <p className="text-xs sm:text-sm text-app-muted mt-1">
            Select who you are to view tailored curriculum highlights, safety metrics, and next steps.
          </p>
        </div>

        {/* Persona Selectors Tabs */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {Object.values(personas).map((p) => {
            const Icon = p.icon;
            const isActive = activePersona === p.id;

            return (
              <button
                key={p.id}
                type="button"
                onClick={() => setActivePersona(p.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-mono font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-hru-gold text-hru-midnight shadow-gold-glow'
                    : 'bg-white/5 border border-app-border text-app-muted hover:text-white'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{p.title.split(' ')[0]} {p.title.split(' ')[1] || ''}</span>
              </button>
            );
          })}
        </div>

        {/* Persona Details Panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="p-6 sm:p-8 rounded-2xl bg-white/5 border border-app-border flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
          >
            <div className="space-y-3 max-w-2xl">
              <span className="font-mono text-[11px] uppercase tracking-wider px-3 py-1 rounded-full bg-hru-indigo/15 text-hru-indigo border border-hru-indigo/30 inline-block font-semibold">
                {current.badge}
              </span>
              <h3 className="font-heading font-black text-xl sm:text-2xl text-app-text">
                {current.headline}
              </h3>
              <div className="space-y-2 pt-2">
                {current.points.map((pt, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-app-muted">
                    <CheckCircle2 className="w-4 h-4 text-hru-gold shrink-0 mt-0.5" />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="shrink-0 w-full md:w-auto">
              <Button
                to={current.ctaLink}
                variant="gold"
                size="md"
                className="w-full justify-center"
                icon={<ArrowRight className="w-4 h-4" />}
              >
                {current.ctaText}
              </Button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

export default PathSelectorSection;
