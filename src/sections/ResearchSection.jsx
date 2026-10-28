import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Award, FileText, FlaskConical, ArrowUpRight, Sparkles } from 'lucide-react';
import SectionHeading from '../components/ui/SectionHeading';
import CountUp from '../components/ui/CountUp';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

export function ResearchSection() {
  const researchStats = [
    { label: 'Published Papers', value: 380, suffix: '+', icon: FileText, note: 'IEEE, Nature & NeurIPS' },
    { label: 'Defensive Patents', value: 42, suffix: '+', icon: Award, note: 'Open patent pledge' },
    { label: 'R&D Grant Capital', value: 18, suffix: 'M+', prefix: '$', icon: FlaskConical, note: 'Direct faculty & fellow funding' },
    { label: 'Dedicated Research Labs', value: 14, suffix: '', icon: Cpu, note: 'Across 3 global campuses' },
  ];

  const initiatives = [
    {
      title: 'Embodied Intelligence & Swarm Robotics',
      lead: 'Prof. Julian Vance & Cohort Fellows',
      desc: 'Developing decentralized consensus protocols for autonomous ground rovers and micro-drone swarm exploration.',
      tag: 'Neural Robotics',
      badge: 'Active Fellowship',
    },
    {
      title: 'CRISPR Bio-Scaffolding for Tissue Regrowth',
      lead: 'Dr. Mira Al-Mansoor & Biotech Studio',
      desc: 'Formulating biocompatible mycelium matrices infused with micro-fluidic nutrient delivery channels.',
      tag: 'Synthetic Biology',
      badge: 'Nature Featured',
    },
    {
      title: 'Zero-Knowledge Cryptographic Settlement',
      lead: 'Venture & Fintech Working Group',
      desc: 'Constructing sub-millisecond recursive ZK-SNARK provers tailored for borderless high-frequency liquidity pools.',
      tag: 'Algorithmic Web3',
      badge: 'Open Source',
    },
  ];

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <SectionHeading
        badge="DISCOVERY & PATENTS"
        badgeColor="indigo"
        title="RESEARCH WITHOUT"
        highlight="THE BUREAUCRACY."
        subtitle="Our undergraduates and graduate fellows publish side-by-side with principal investigators. We don't hide code behind paywalls."
        align="left"
      />

      {/* Counters Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {researchStats.map((item, idx) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className="p-6 rounded-3xl bg-app-surface1 border border-app-border flex flex-col justify-between"
            >
              <div className="w-10 h-10 rounded-xl bg-hru-indigo/15 text-hru-indigo flex items-center justify-center mb-4">
                <Icon className="w-5 h-5" />
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-black font-heading text-app-text flex items-baseline">
                  <CountUp
                    to={item.value}
                    suffix={item.suffix}
                    prefix={item.prefix || ''}
                    duration={2000}
                    className="text-hru-gold"
                  />
                </div>
                <div className="font-heading font-bold text-sm text-app-text mt-1">
                  {item.label}
                </div>
                <div className="text-[11px] font-mono text-app-muted mt-1">
                  {item.note}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Key Initiatives Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {initiatives.map((init, i) => (
          <Card key={i} glow="indigo" className="flex flex-col justify-between h-full">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs px-2.5 py-0.5 rounded-full bg-hru-indigo/15 text-hru-indigo border border-hru-indigo/30">
                  {init.tag}
                </span>
                <span className="font-mono text-[11px] text-hru-gold">
                  {init.badge}
                </span>
              </div>
              <h3 className="text-xl font-bold font-heading text-app-text mb-2">
                {init.title}
              </h3>
              <p className="text-xs text-app-muted mb-4 font-mono">
                Lead: {init.lead}
              </p>
              <p className="text-sm text-app-muted leading-relaxed">
                {init.desc}
              </p>
            </div>

            <div className="pt-6 border-t border-app-border mt-6 flex items-center justify-between">
              <span className="text-xs font-mono text-hru-gold">READ LAB DISPATCH</span>
              <ArrowUpRight className="w-4 h-4 text-hru-gold" />
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}

export default ResearchSection;
