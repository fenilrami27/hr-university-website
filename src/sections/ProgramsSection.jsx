import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, CheckCircle2, DollarSign, Clock, Award } from 'lucide-react';
import SectionHeading from '../components/ui/SectionHeading';
import Button from '../components/ui/Button';
import mediaRegistry from '../data/media';

export function ProgramsSection() {
  const [levelFilter, setLevelFilter] = useState('All');

  const programs = [
    {
      id: 'ai-systems',
      title: 'Autonomous AI & Intelligent Systems',
      level: 'UG',
      degree: 'B.Sc (Hons)',
      duration: '4 Years',
      tag: 'Most Popular',
      shortDesc: 'Master foundation models, agentic swarms, embodied robotics, and neural architecture search.',
      highlights: [
        'Direct access to 512x H100 GPU clusters',
        'Residency at frontier AI research studios',
        'Deploy production agent swarms in year 2',
      ],
      curriculum: ['Transformers & Attention Mechanisms', 'Agentic Orchestration', 'Reinforcement Learning', 'AI Safety'],
      avgSalary: '₹48 LPA Avg CTC',
      image: mediaRegistry.departments.ai.src,
    },
    {
      id: 'spatial-xr',
      title: 'Spatial Computing & Immersive Environments',
      level: 'UG',
      degree: 'B.Des',
      duration: '4 Years',
      tag: 'Studio Track',
      shortDesc: 'Architect next-generation VisionOS interfaces, volumetric stages, and tactile virtual simulations.',
      highlights: [
        'State-of-the-art volumetric capture chambers',
        'Spatial audio monitoring acoustics',
        'Hardware kits provided on day zero',
      ],
      curriculum: ['Spatial UI Systems', 'Real-Time 3D Engine Architecture', 'Haptic Interactions', 'Generative Worlds'],
      avgSalary: '₹42 LPA Avg CTC',
      image: 'https://images.unsplash.com/photo-1592478411213-6153e4ebc07d?auto=format&fit=crop&w=1000&q=80',
    },
    {
      id: 'fintech-algo',
      title: 'Algorithmic Finance & Quantitative Trading',
      level: 'PG',
      degree: 'M.Sc / MBA Dual',
      duration: '2 Years',
      tag: 'High Yield',
      shortDesc: 'Deconstruct decentralized liquidity mechanisms, low-latency market making, and automated financial systems.',
      highlights: [
        'Manage real student-run treasury fund',
        'Low-latency algorithmic backtesting clusters',
        'Direct ₹1.5 Cr seed tickets for graduate funds',
      ],
      curriculum: ['High-Frequency Architecture', 'Mechanism Design', 'Macro Computational Finance', 'Tokenomics'],
      avgSalary: '₹52 LPA Avg CTC',
      image: 'https://images.unsplash.com/photo-1642543492481-44e81e3914a7?auto=format&fit=crop&w=1000&q=80',
    },
    {
      id: 'synth-bio',
      title: 'Synthetic Biology & Computational Genetics',
      level: 'PhD',
      degree: 'Ph.D Fellowship',
      duration: '3 - 4 Years',
      tag: 'Fully Funded',
      shortDesc: 'Merge computational proteomics, CRISPR editing, and automated microfluidic bio-scaffolds.',
      highlights: [
        '100% full-tuition fellowship + ₹3.5 Lakhs annual research stipend',
        'BSL-2 certified automated cleanrooms',
        'Direct publication pathway in peer-reviewed journals',
      ],
      curriculum: ['Genome Synthesis', 'Computational Proteomics', 'Neural Interfaces', 'Bio-Ethics'],
      avgSalary: '₹46 LPA Avg CTC',
      image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1000&q=80',
    },
  ];

  const filtered = levelFilter === 'All'
    ? programs
    : programs.filter((p) => p.level === levelFilter);

  return (
    <section id="programs" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <SectionHeading
          badge="ACADEMIC TRACKS"
          badgeColor="gold"
          title="DEGREES CRAFTED FOR"
          highlight="NEXT-WAVE MINDS."
          subtitle="Explore our fully accredited studio tracks across Undergraduate, Postgraduate, and Doctoral Fellowships."
          className="mb-0"
        />

        <Button
          to="/programs"
          variant="outline"
          size="md"
          icon={<ArrowUpRight className="w-4 h-4" />}
        >
          View All 120+ Curriculums
        </Button>
      </div>

      {/* Filter Tabs: UG / PG / PhD */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-12 scrollbar-none">
        {[
          { label: 'All Levels', value: 'All' },
          { label: 'Undergraduate (UG)', value: 'UG' },
          { label: 'Postgraduate (PG / Masters)', value: 'PG' },
          { label: 'Doctoral & Fellowships (PhD)', value: 'PhD' },
        ].map((tab) => (
          <button
            key={tab.value}
            onClick={() => setLevelFilter(tab.value)}
            className={`
              px-4 py-2 rounded-full text-xs font-mono tracking-wider uppercase whitespace-nowrap transition-all duration-200
              ${
                levelFilter === tab.value
                  ? 'bg-hru-gold text-hru-midnight font-bold shadow-gold-glow'
                  : 'bg-app-surface1 border border-app-border text-app-muted hover:text-app-text'
              }
            `}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Stacking Sticky Cards Container */}
      <div className="relative space-y-8">
        {filtered.map((program, index) => {
          const stickyTop = 110 + index * 16;

          return (
            <div
              key={program.id}
              className="sticky transition-all duration-300"
              style={{
                top: `${stickyTop}px`,
                zIndex: index + 10,
              }}
            >
              <motion.div
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="rounded-[24px] p-6 sm:p-10 bg-app-surface1/95 backdrop-blur-2xl border border-app-border shadow-2xl hover:border-hru-gold/50 transition-all duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
                    <div>
                      <div className="flex flex-wrap items-center gap-3 mb-4">
                        <span className="font-mono text-xs font-bold uppercase px-3 py-1 rounded-full bg-hru-gold/15 border border-hru-gold/30 text-hru-gold">
                          {program.tag}
                        </span>
                        <span className="flex items-center gap-1 text-xs font-mono text-app-muted">
                          <Award className="w-3.5 h-3.5 text-hru-indigo" />
                          {program.degree}
                        </span>
                        <span className="flex items-center gap-1 text-xs font-mono text-app-muted">
                          <Clock className="w-3.5 h-3.5 text-app-muted" />
                          {program.duration}
                        </span>
                      </div>

                      <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-heading text-app-text tracking-tight">
                        {program.title}
                      </h3>

                      <p className="mt-3 text-sm sm:text-base text-app-muted leading-relaxed">
                        {program.shortDesc}
                      </p>
                    </div>

                    <div className="space-y-2">
                      <div className="text-xs font-mono uppercase tracking-wider text-app-muted">
                        Lab Capabilities & Perks:
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-app-text">
                        {program.highlights.map((h, i) => (
                          <div key={i} className="flex items-start gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-hru-gold shrink-0 mt-0.5" />
                            <span>{h}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 pt-2">
                      {program.curriculum.map((topic) => (
                        <span
                          key={topic}
                          className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-white/5 border border-app-border text-app-muted"
                        >
                          #{topic}
                        </span>
                      ))}
                    </div>

                    <div className="pt-4 border-t border-app-border flex flex-wrap items-center justify-between gap-4">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-hru-gold/15 border border-hru-gold/30 flex items-center justify-center text-hru-gold">
                          <DollarSign className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-[10px] font-mono uppercase text-app-muted">Grad Median Comp</div>
                          <div className="text-sm font-bold font-heading text-app-text">{program.avgSalary}</div>
                        </div>
                      </div>

                      <Button
                        to="/admissions"
                        variant="gold"
                        size="sm"
                        icon={<ArrowUpRight className="w-3.5 h-3.5" />}
                      >
                        Enroll in Track
                      </Button>
                    </div>
                  </div>

                  <div className="lg:col-span-5 relative group overflow-hidden rounded-[24px] aspect-[4/3] sm:aspect-[16/10] lg:aspect-square">
                    <img
                      src={program.image}
                      alt={program.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-90 group-hover:brightness-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A0B1E] via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end text-white">
                      <div>
                        <span className="font-mono text-[10px] uppercase tracking-wider text-hru-gold">
                          STUDIO ACCESS
                        </span>
                        <div className="font-heading font-bold text-base">
                          Live Sandbox Open
                        </div>
                      </div>
                      <span className="font-mono text-xs text-white/70">
                        LAB 0{index + 1}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default ProgramsSection;
