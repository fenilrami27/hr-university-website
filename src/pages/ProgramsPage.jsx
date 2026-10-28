import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Sparkles, ArrowUpRight, CheckCircle2, DollarSign, Award, Clock } from 'lucide-react';
import SectionHeading from '../components/ui/SectionHeading';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import { programsData } from '../data/universityData';

export function ProgramsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFaculty, setActiveFaculty] = useState('All');

  const facultyCategories = ['All', 'AI & Neural Systems', 'Spatial & Immersive', 'Fintech & Web3', 'Synthetic Bio', 'Creative Tech'];

  const filtered = programsData.filter((p) => {
    const matchesSearch =
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.curriculum.some((c) => c.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesSearch;
  });

  return (
    <div className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neon-violet/30 bg-neon-violet/10 text-neon-violet font-mono text-xs uppercase tracking-widest mb-4">
          <Sparkles className="w-3.5 h-3.5" />
          Academics 2026/27 Catalog
        </div>
        <h1 className="text-4xl sm:text-6xl font-black font-heading text-text-main tracking-tight leading-none mb-6">
          DEGREES DESIGNED FOR <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-violet via-neon-lime to-neon-coral">
            FUTURE FOUNDERS.
          </span>
        </h1>
        <p className="text-text-muted text-base sm:text-lg leading-relaxed">
          Explore our fully accredited studio tracks. Every program includes guaranteed hardware kits, dedicated GPU compute, and seed grant eligibility.
        </p>
      </div>

      {/* Search and Category Filters */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-12">
        <div className="relative w-full sm:w-96">
          <Search className="w-4 h-4 text-text-muted absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search programs, modules, keywords..."
            className="w-full bg-white/70 dark:bg-[#10121A]/70 border border-black/10 dark:border-white/10 rounded-full pl-11 pr-4 py-2.5 text-sm text-text-main placeholder-text-muted focus:outline-none focus:border-neon-lime transition-colors"
          />
        </div>

        <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto pb-2 scrollbar-none">
          {facultyCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFaculty(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-mono whitespace-nowrap transition-colors ${
                activeFaculty === cat
                  ? 'bg-neon-lime text-black font-bold'
                  : 'bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-text-muted hover:text-text-main'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Programs Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filtered.map((program, idx) => (
          <motion.div
            key={program.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: idx * 0.08 }}
          >
            <Card className="h-full flex flex-col justify-between group overflow-hidden border border-black/10 dark:border-white/10">
              <div>
                <div className="relative aspect-[16/9] rounded-2xl overflow-hidden mb-6">
                  <img
                    src={program.image}
                    alt={program.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-90 group-hover:brightness-100"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="font-mono text-xs font-bold px-3 py-1 rounded-full bg-black/70 text-neon-lime border border-neon-lime/40 backdrop-blur-md">
                      {program.tag}
                    </span>
                  </div>
                  <div className="absolute bottom-3 right-3">
                    <span className="font-mono text-xs px-2.5 py-0.5 rounded-full bg-white/20 text-white backdrop-blur-md">
                      {program.degree}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-xs font-mono text-text-muted mb-2">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {program.duration}
                  </span>
                  <span>•</span>
                  <span className="text-neon-lime font-semibold">
                    Studio Format
                  </span>
                </div>

                <h3 className="text-2xl font-bold font-heading text-text-main group-hover:text-neon-lime transition-colors">
                  {program.title}
                </h3>

                <p className="mt-3 text-sm text-text-muted leading-relaxed">
                  {program.shortDesc}
                </p>

                {/* Key modules */}
                <div className="mt-6 space-y-2">
                  <div className="text-xs font-mono uppercase tracking-wider text-text-muted">
                    Curriculum Pillars:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {program.curriculum.map((c) => (
                      <span
                        key={c}
                        className="text-xs font-mono px-2 py-0.5 rounded bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5 text-text-main"
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom salary & apply */}
              <div className="mt-8 pt-6 border-t border-black/10 dark:border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <DollarSign className="w-4 h-4 text-neon-lime" />
                  <span className="text-xs font-mono text-text-muted">Avg: <strong className="text-text-main">{program.avgSalary}</strong></span>
                </div>

                <Button
                  to="/admissions"
                  variant="lime"
                  size="sm"
                  icon={<ArrowUpRight className="w-3.5 h-3.5" />}
                >
                  Apply to Program
                </Button>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default ProgramsPage;
