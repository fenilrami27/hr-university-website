import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight, Sparkles, Building2 } from 'lucide-react';
import SectionHeading from '../components/ui/SectionHeading';
import mediaRegistry from '../data/media';

export function DepartmentsPage() {
  const [activeTab, setActiveTab] = useState('All');

  const departments = [
    {
      id: 'ai-data-science',
      name: 'AI and Data Science',
      category: 'Computing & Tech',
      tagline: 'Autonomous swarms, LLM reasoning & embodied robotics',
      tint: '#5B5BF0',
      photo: mediaRegistry.departments.ai.src,
      stats: ['512x H100 Nodes', '₹48 LPA Median Comp', '1:6 Lab Ratio'],
    },
    {
      id: 'computer-science',
      name: 'Computer Science and Engineering',
      category: 'Computing & Tech',
      tagline: 'Distributed architectures, kernel engineering & cryptographic systems',
      tint: '#38BDF8',
      photo: mediaRegistry.departments.cse.src,
      stats: ['Zero Legacy Exams', '100% Studio Building', '24/7 Compute'],
    },
    {
      id: 'pharmacy',
      name: 'Paramedical & Pharmaceutical Sciences',
      category: 'Health & Science',
      tagline: 'AI-assisted molecular design, high-throughput drug screening & paramedical care',
      tint: '#2DD4BF',
      photo: mediaRegistry.departments.pharmacy.src,
      stats: ['BSL-2 Lab Rigs', '18 Active Patents', 'Clinical Rotations'],
    },
    {
      id: 'sports-science',
      name: 'Sports Science and Analytics',
      category: 'Health & Science',
      tagline: 'Biomechanical telemetry, kinetic load analysis & athletic longevity',
      tint: '#FF7A59',
      photo: mediaRegistry.departments.sports.src,
      stats: ['Olympic Track', 'VO2 Max Telemetry', 'Pro Team Partners'],
    },
    {
      id: 'design',
      name: 'Design and Spatial Computing',
      category: 'Creative Tech',
      tagline: 'Spatial vision interfaces, generative typography & tactile physical UX',
      tint: '#F472B6',
      photo: mediaRegistry.departments.design.src,
      stats: ['Design Fellows', 'Volumetric Stage', 'Haptic Prototyping'],
    },
    {
      id: 'architecture',
      name: 'Parametric Architecture',
      category: 'Creative Tech',
      tagline: 'Generative biomaterial structures, robotic fabrication & smart cities',
      tint: '#22D3EE',
      photo: mediaRegistry.departments.architecture.src,
      stats: ['Multi-Axis CNCs', 'Carbon Negative', 'Milan Biennale Showcase'],
    },
    {
      id: 'business',
      name: 'Business and Venture Systems',
      category: 'Enterprise',
      tagline: 'Decentralized liquidity, algorithmic trading & venture-scale building',
      tint: '#FFC53D',
      photo: mediaRegistry.departments.business.src,
      stats: ['₹50 Cr Seed Fund', 'Tier-1 Mentors', 'Student Managed Fund'],
    },
    {
      id: 'media-film',
      name: 'Media and Film Production',
      category: 'Creative Tech',
      tagline: 'Virtual volume cinematography, generative sound design & immersive audio',
      tint: '#A78BFA',
      photo: mediaRegistry.departments.media.src,
      stats: ['Dolby Atmos Suite', 'LED Volume Wall', 'Sundance Screenings'],
    },
    {
      id: 'biotechnology',
      name: 'Synthetic Biology',
      category: 'Health & Science',
      tagline: 'CRISPR microfluidics, biomimetic materials & neuro-regeneration',
      tint: '#4ADE80',
      photo: mediaRegistry.departments.biotech.src,
      stats: ['Automated Wet Labs', 'Nature Publications', 'Bio-Incubator'],
    },
  ];

  const categories = ['All', 'Computing & Tech', 'Health & Science', 'Creative Tech', 'Enterprise'];

  const filtered = activeTab === 'All'
    ? departments
    : departments.filter((d) => d.category === activeTab);

  return (
    <div className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-hru-gold/30 bg-hru-gold/10 text-hru-gold font-mono text-xs uppercase tracking-widest mb-4">
          <Sparkles className="w-3.5 h-3.5" />
          Academic Faculties
        </div>
        <h1 className="text-4xl sm:text-6xl font-black font-heading text-app-text tracking-tight leading-none mb-6">
          DEPARTMENTS BUILT <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-hru-indigo via-[#8B5CF6] to-hru-gold">
            FOR TOMORROW.
          </span>
        </h1>
        <p className="text-app-muted text-base sm:text-lg">
          Explore our specialized faculty hubs, each operating production-grade labs and unmetered computing hardware.
        </p>
      </div>

      {/* Category Tabs */}
      <div className="flex items-center justify-center gap-2 overflow-x-auto pb-6 mb-12 scrollbar-none">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveTab(cat)}
            className={`px-4 py-2 rounded-full text-xs font-mono tracking-wider transition-colors ${
              activeTab === cat
                ? 'bg-hru-gold text-hru-midnight font-bold shadow-gold-glow'
                : 'bg-app-surface1 border border-app-border text-app-muted hover:text-white'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid of Departments */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {filtered.map((dept, idx) => (
          <motion.div
            key={dept.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: idx * 0.05 }}
          >
            <Link
              to={`/departments/${dept.id}`}
              className="group block rounded-[24px] overflow-hidden bg-app-surface1 border border-app-border hover:border-hru-gold/50 transition-all duration-300 shadow-xl"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={dept.photo}
                  alt={dept.name}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0B1E] via-transparent to-transparent opacity-90" />
                <span
                  className="absolute top-4 left-4 text-xs font-mono px-3 py-1 rounded-full border backdrop-blur-md"
                  style={{ color: dept.tint, borderColor: `${dept.tint}40`, backgroundColor: `${dept.tint}20` }}
                >
                  {dept.category}
                </span>
              </div>

              <div className="p-6 space-y-3">
                <h3 className="font-heading font-extrabold text-xl text-app-text group-hover:text-hru-gold transition-colors">
                  {dept.name}
                </h3>
                <p className="text-xs text-app-muted leading-relaxed">
                  {dept.tagline}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-2">
                  {dept.stats.map((s, i) => (
                    <span
                      key={i}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 border border-app-border text-app-muted"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                <div className="pt-4 border-t border-app-border flex items-center justify-between text-xs font-mono text-hru-gold font-bold">
                  <span>EXPLORE DEPARTMENT</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default DepartmentsPage;
