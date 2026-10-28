import React from 'react';
import { Sparkles, ArrowUpRight, Cpu, Layers, Dna, ShieldCheck } from 'lucide-react';
import SectionHeading from '../components/ui/SectionHeading';
import ResearchSection from '../sections/ResearchSection';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

export function ResearchPage() {
  const labs = [
    {
      name: 'Autonomous Agentic Systems Lab (AASL)',
      director: 'Dr. Valerius Thorne',
      focus: 'Multi-agent coordination, tool-use RL, and self-improving code synthesis running on 512-H100 clusters.',
      facility: 'H100 Cluster Bay 04',
      icon: Cpu,
      tint: '#8B5CF6',
      badge: '512x H100 Nodes',
    },
    {
      name: 'Volumetric Spatial Interaction Lab',
      director: 'Elena Rostova',
      focus: 'Real-time eye-tracking foveation, haptic feedback gloves, and low-latency spatial UI rendering engines.',
      facility: 'Volumetric Stage 01',
      icon: Layers,
      tint: '#EC4899',
      badge: 'VisionOS Prototyping',
    },
    {
      name: 'Synthetic Bio-Engineering & Proteomics',
      director: 'Dr. Zuri Okafor',
      focus: 'Automated microfluidic chips, CRISPR protein folds, and mycelium-based biocompatible tissue scaffolding.',
      facility: 'BSL-2 Cleanroom 03',
      icon: Dna,
      tint: '#10B981',
      badge: 'BSL-2 Cleanroom',
    },
    {
      name: 'Quantum Cryptography & Mechanism Design',
      director: 'Marcus Vance',
      focus: 'Sub-millisecond recursive ZK-SNARK verifiers, sovereign decentralized identities, and post-quantum network defense.',
      facility: 'Silicon Quarter Hub',
      icon: ShieldCheck,
      tint: '#06B6D4',
      badge: 'Post-Quantum Protocol',
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
      <div className="mt-20">
        <SectionHeading
          badge="PHYSICAL LAB INFRASTRUCTURE"
          badgeColor="gold"
          title="PRODUCTION RESEARCH"
          highlight="FACILITIES."
          subtitle="Explore the specialized chambers where HRU fellows formulate, benchmark, and deploy frontier systems."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {labs.map((lab, i) => {
            const Icon = lab.icon;
            return (
              <Card
                key={i}
                glow="indigo"
                className="p-8 space-y-5 hover:border-white/30 transition-all duration-300"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: `${lab.tint}20`, color: lab.tint }}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono uppercase px-2.5 py-0.5 rounded-full border border-white/10 bg-white/5 text-white/90">
                      {lab.facility}
                    </span>
                  </div>
                  <span
                    className="text-xs font-mono px-2.5 py-0.5 rounded-full border"
                    style={{
                      borderColor: `${lab.tint}50`,
                      backgroundColor: `${lab.tint}15`,
                      color: lab.tint,
                    }}
                  >
                    {lab.badge}
                  </span>
                </div>

                <h3 className="font-heading font-bold text-xl text-app-text">
                  {lab.name}
                </h3>

                <p className="text-xs text-app-muted font-mono flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: lab.tint }} />
                  <span>Principal Investigator: {lab.director}</span>
                </p>

                <p className="text-sm text-app-muted leading-relaxed">
                  {lab.focus}
                </p>

                <div className="pt-4 border-t border-app-border flex items-center justify-between">
                  <Button
                    to="/admissions"
                    variant="outline"
                    size="sm"
                    icon={<ArrowUpRight className="w-3.5 h-3.5" />}
                  >
                    Apply for Lab Fellowship
                  </Button>
                  <span className="text-[11px] font-mono text-hru-gold">
                    ACTIVE 2026/27 COHORT
                  </span>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ResearchPage;
