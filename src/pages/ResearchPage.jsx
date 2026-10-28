import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Award, FileText, FlaskConical, ArrowUpRight, Sparkles } from 'lucide-react';
import SectionHeading from '../components/ui/SectionHeading';
import ResearchSection from '../sections/ResearchSection';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

export function ResearchPage() {
  const labs = [
    {
      name: 'Autonomous Agentic Systems Lab (AASL)',
      director: 'Dr. Valerius Thorne',
      focus: 'Multi-agent coordination, tool-use RL, and self-improving code synthesis.',
      facility: 'H100 Cluster Bay 04',
    },
    {
      name: 'Volumetric Spatial Interaction Lab',
      director: 'Elena Rostova',
      focus: 'Real-time eye-tracking foveation, haptic gloves, and spatial UI engines.',
      facility: 'Volumetric Stage 01',
    },
    {
      name: 'Synthetic Bio-Engineering & Proteomics',
      director: 'Dr. Zuri Okafor',
      focus: 'Automated microfluidic chips, CRISPR protein folds, and biomimetic composites.',
      facility: 'BSL-2 Cleanroom 03',
    },
    {
      name: 'Quantum Cryptography & Mechanism Design',
      director: 'Marcus Vance',
      focus: 'Sub-millisecond ZK-SNARK verifiers and post-quantum network defenses.',
      facility: 'Silicon Quarter Hub',
    },
  ];

  return (
    <div className="pt-28 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-hru-gold/30 bg-hru-gold/10 text-hru-gold font-mono text-xs uppercase tracking-widest mb-4">
          <Sparkles className="w-3.5 h-3.5" />
          Frontier Laboratories & Fellowships
        </div>
        <h1 className="text-4xl sm:text-6xl font-black font-heading text-app-text tracking-tight leading-none mb-6">
          RESEARCH POWERED <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-hru-indigo via-[#8B5CF6] to-hru-gold">
            BY RAW CURIOSITY.
          </span>
        </h1>
        <p className="text-app-muted text-base sm:text-lg">
          Unmetered GPU compute, open-source patent pledges, and direct peer collaboration between undergraduates and principal fellows.
        </p>
      </div>

      {/* Embedded Research Section */}
      <ResearchSection />

      {/* Laboratories Catalog */}
      <div className="mt-16">
        <SectionHeading
          badge="PHYSICAL LAB INFRASTRUCTURE"
          badgeColor="gold"
          title="PRODUCTION RESEARCH"
          highlight="FACILITIES."
          subtitle="Explore the specialized chambers where HRU fellows formulate, benchmark, and deploy frontier systems."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {labs.map((lab, i) => (
            <Card key={i} glow="indigo" className="p-8 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono uppercase px-2.5 py-0.5 rounded-full bg-hru-indigo/15 text-hru-indigo border border-hru-indigo/30">
                  {lab.facility}
                </span>
                <span className="text-xs font-mono text-hru-gold">ACTIVE FELLOWSHIP</span>
              </div>

              <h3 className="font-heading font-bold text-xl text-app-text">
                {lab.name}
              </h3>

              <p className="text-xs text-app-muted font-mono">
                Principal Investigator: {lab.director}
              </p>

              <p className="text-sm text-app-muted leading-relaxed">
                {lab.focus}
              </p>

              <div className="pt-4 border-t border-app-border">
                <Button to="/admissions" variant="outline" size="sm">
                  Apply for Research Fellowship
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ResearchPage;
