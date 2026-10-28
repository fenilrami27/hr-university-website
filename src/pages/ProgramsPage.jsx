import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Sparkles, ArrowUpRight, DollarSign, Clock } from 'lucide-react';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import { programsData } from '../data/universityData';

export function ProgramsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFaculty, setActiveFaculty] = useState('All');

  const facultyCategories = ['All', 'AI & Neural Systems', 'Spatial & Immersive', 'Fintech & Web3', 'Synthetic Bio', 'Creative Tech'];

  const programCategoryMap = {
    'ai-systems': 'AI & Neural Systems',
    'spatial-computing': 'Spatial & Immersive',
    'fintech-ventures': 'Fintech & Web3',
    'biotech-augmentation': 'Synthetic Bio',
    'creative-direction': 'Creative Tech',
  };

  const filtered = programsData.filter((p) => {
    const categoryMatch =
      activeFaculty === 'All' || programCategoryMap[p.id] === activeFaculty;
    const matchesSearch =
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.curriculum.some((c) => c.toLowerCase().includes(searchQuery.toLowerCase()));

    return categoryMatch && matchesSearch;
  });

  return (
    <div className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-hru-gold/30 bg-hru-gold/10 text-hru-gold font-mono text-xs uppercase tracking-widest mb-4">
          <Sparkles className="w-3.5 h-3.5" />
          Academics 2026/27 Catalog
        </div>
        <h1 className="text-4xl sm:text-6xl font-black font-heading text-app-text tracking-tight leading-none mb-6">
          DEGREES DESIGNED FOR <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-hru-indigo via-[#8B5CF6] to-hru-gold">
            FUTURE FOUNDERS.
          </span>
        </h1>
        <p className="text-app-muted text-base sm:text-lg leading-relaxed">
          Explore our fully accredited studio tracks. Every program includes guaranteed hardware kits, dedicated GPU compute, and seed grant eligibility.
        </p>
      </div>

      {/* Search and Category Filters */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-12">
        <div className="relative w-full sm:w-96">
          <Search className="w-4 h-4 text-app-muted absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search programs, modules, keywords..."
            className="w-full bg-app-surface1 border border-app-border rounded-full pl-11 pr-4 py-2.5 text-sm text-app-text placeholder:text-app-muted focus:outline-none focus:border-hru-gold transition-colors"
          />
        </div>

        <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto pb-2 scrollbar-none">
          {facultyCategories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveFaculty(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-mono whitespace-nowrap transition-colors cursor-pointer ${
                activeFaculty === cat
                  ? 'bg-hru-gold text-hru-midnight font-bold shadow-gold-glow'
                  : 'bg-app-surface1 border border-app-border text-app-muted hover:text-app-text'
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
            <Card className="h-full flex flex-col justify-between group overflow-hidden border border-app-border">
              <div>
                <div className="relative aspect-[16/9] rounded-2xl overflow-hidden mb-6">
                  <img
                    src={program.image}
                    alt={program.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-90 group-hover:brightness-100"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="font-mono text-xs font-bold px-3 py-1 rounded-full bg-black/70 text-hru-gold border border-hru-gold/40 backdrop-blur-md">
                      {program.tag}
                    </span>
                  </div>
                  <div className="absolute bottom-3 right-3">
                    <span className="font-mono text-xs px-2.5 py-0.5 rounded-full bg-white/20 text-white backdrop-blur-md">
                      {program.degree}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-xs font-mono text-app-muted mb-2">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-hru-gold" />
                    {program.duration}
                  </span>
                  <span>•</span>
                  <span className="text-hru-gold font-semibold">
                    Studio Format
                  </span>
                </div>

                <h3 className="text-2xl font-bold font-heading text-app-text group-hover:text-hru-gold transition-colors">
                  {program.title}
                </h3>

                <p className="mt-3 text-sm text-app-muted leading-relaxed">
                  {program.shortDesc}
                </p>

                {/* Key modules */}
                <div className="mt-6 space-y-2">
                  <div className="text-xs font-mono uppercase tracking-wider text-app-muted">
                    Curriculum Pillars:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {program.curriculum.map((c) => (
                      <span
                        key={c}
                        className="text-xs font-mono px-2 py-0.5 rounded bg-white/5 border border-white/10 text-app-text"
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom salary & apply */}
              <div className="mt-8 pt-6 border-t border-app-border flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <DollarSign className="w-4 h-4 text-hru-gold" />
                  <span className="text-xs font-mono text-app-muted">Avg: <strong className="text-app-text">{program.avgSalary}</strong></span>
                </div>

                <Button
                  to="/admissions"
                  variant="gold"
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
