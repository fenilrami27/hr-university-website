import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowUpRight, Sparkles, CheckCircle2, ChevronDown, Cpu, Award, DollarSign } from 'lucide-react';
import Button from '../components/ui/Button';
import mediaRegistry from '../data/media';

export function DepartmentDetailPage() {
  const { slug } = useParams();
  const [openCurriculum, setOpenCurriculum] = useState(0);

  // Department catalog dictionary
  const departmentCatalog = {
    'ai-data-science': {
      name: 'AI and Data Science',
      badge: '512x H100 Cluster',
      tagline: 'Engineering autonomous agentic swarms, multimodal reasoning & robotics intelligence',
      tint: '#7C7FFF',
      photo: mediaRegistry.departments.ai.src,
      overview:
        'The Department of AI and Data Science is engineered for developers and researchers who refuse to wait five years to ship real models. Students train custom architectures directly on our 512-H100 GPU cluster, deploy embodied robots in physical simulation arenas, and work directly with venture-funded AI research studios.',
      stats: [
        { label: 'Compute Power', value: '512x H100 GPU Nodes' },
        { label: 'Median Starting Comp', value: '₹48 LPA Average Package' },
        { label: 'Faculty-Student Ratio', value: '1 : 6 Dedicated' },
      ],
      programs: [
        'B.Sc in Autonomous Intelligence & Swarms',
        'M.Tech in Neural Systems & Large World Models',
        'Ph.D Fellowship in Embodied Robotics & Alignment',
      ],
      curriculum: [
        {
          year: 'Sprint 01: Foundations & Transformers',
          details: 'Attention mechanisms, custom tokenizer pipelines, CUDA kernels, and self-supervised loss optimization.',
        },
        {
          year: 'Sprint 02: Multi-Agent Orchestration',
          details: 'Decentralized agent consensus, tool-use grounding, synthetic data generation, and reasoning models.',
        },
        {
          year: 'Sprint 03: Embodied Robotics & Vision',
          details: 'Simulation-to-real transfer, kinematic arm telemetry, spatial perception, and multimodal robotics.',
        },
        {
          year: 'Sprint 04: Production Capstone & Seed Pitch',
          details: 'Deploying model endpoints to global edge inference networks and pitching the HRU ₹50 Cr seed fund.',
        },
      ],
      faculty: [
        { name: 'Dr. Valerius Thorne', title: 'Dean of Artificial Intelligence', role: 'Ex-DeepMind Fellow' },
        { name: 'Aria Henderson', title: 'Director of Agentic Swarms', role: 'Principal Systems Architect' },
      ],
    },
    'computer-science': {
      name: 'Computer Science and Engineering',
      badge: 'High Performance Systems',
      tagline: 'Distributed operating systems, low-latency protocols & post-quantum security',
      tint: '#5B5BF0',
      photo: mediaRegistry.departments.cse.src,
      overview:
        'Move beyond passive code writing into production infrastructure engineering. Build distributed databases, compiler optimizations, kernel network drivers, and post-quantum cryptographic primitives from day zero.',
      stats: [
        { label: 'Code Shipped', value: '100% Production Grade' },
        { label: 'Median Comp', value: '₹50 LPA Average Package' },
        { label: 'Hackathons', value: 'Weekly 48h Sprints' },
      ],
      programs: [
        'B.Tech in Distributed Systems & Web Platforms',
        'M.S in High-Performance Computing',
        'Cybersecurity & Cryptography Fellowship',
      ],
      curriculum: [
        { year: 'Sprint 01: Systems & Compilers', details: 'Rust memory safety, LLVM internals, and CPU cache optimization.' },
        { year: 'Sprint 02: Distributed Networks', details: 'Raft consensus, low-latency RPCs, and edge content routing.' },
        { year: 'Sprint 03: Cryptography & Security', details: 'Zero-knowledge proofs, formal verification, and penetration.' },
        { year: 'Sprint 04: Global Scale Deployment', details: 'Managing high-concurrency cloud clusters handling millions of requests.' },
      ],
      faculty: [
        { name: 'Marcus Sterling', title: 'Head of Distributed Protocols', role: 'Core Contributor to Open-Source Engines' },
        { name: 'Dr. Linnea Croft', title: 'Chair of Cryptographic Systems', role: 'PhD, ETH Zurich' },
      ],
    },
  };

  // Fallback to AI if slug is different
  const dept = departmentCatalog[slug] || departmentCatalog['ai-data-science'];

  return (
    <div className="pt-28 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Back button */}
      <Link
        to="/departments"
        className="inline-flex items-center gap-1.5 text-xs font-mono text-app-muted hover:text-hru-gold transition-colors mb-8"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Back to All Academic Departments</span>
      </Link>

      {/* Hero Header with department photo */}
      <div className="relative rounded-[32px] overflow-hidden bg-app-surface1 border border-app-border shadow-2xl mb-16 p-8 sm:p-14">
        <div className="absolute inset-0">
          <img src={dept.photo} alt={dept.name} className="w-full h-full object-cover filter brightness-[0.35]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0B1E] via-[#0A0B1E]/60 to-transparent" />
        </div>

        <div className="relative z-10 max-w-3xl space-y-4">
          <span
            className="font-mono text-xs uppercase px-3 py-1 rounded-full border backdrop-blur-md inline-block font-semibold"
            style={{ color: dept.tint, borderColor: `${dept.tint}40`, backgroundColor: `${dept.tint}20` }}
          >
            {dept.badge}
          </span>
          <h1 className="text-4xl sm:text-6xl font-black font-heading text-white tracking-tight leading-none">
            {dept.name}
          </h1>
          <p className="text-base sm:text-xl text-[#A4A8C4] leading-relaxed">
            {dept.tagline}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Main Details Column */}
        <div className="lg:col-span-8 space-y-14">
          {/* Overview */}
          <div>
            <h3 className="text-2xl font-bold font-heading text-app-text mb-4">
              Department Architecture & Pedagogy
            </h3>
            <p className="text-app-muted leading-relaxed text-base">
              {dept.overview}
            </p>
          </div>

          {/* Curriculum Accordion */}
          <div>
            <h3 className="text-2xl font-bold font-heading text-app-text mb-6">
              Studio Sprints & Learning Architecture
            </h3>
            <div className="space-y-3">
              {dept.curriculum.map((item, idx) => {
                const isOpen = openCurriculum === idx;
                return (
                  <div
                    key={idx}
                    className="rounded-2xl border border-app-border bg-app-surface1 overflow-hidden"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenCurriculum(isOpen ? -1 : idx)}
                      className="w-full p-5 text-left flex items-center justify-between focus:outline-none"
                    >
                      <span className="font-heading font-bold text-sm sm:text-base text-app-text">
                        {item.year}
                      </span>
                      <ChevronDown className={`w-4 h-4 text-hru-gold transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-5 pt-1 text-sm text-app-muted border-t border-app-border leading-relaxed">
                        {item.details}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Faculty Chairs */}
          <div>
            <h3 className="text-2xl font-bold font-heading text-app-text mb-6">
              Distinguished Faculty Chairs & Mentors
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {dept.faculty.map((f, i) => (
                <div key={i} className="p-5 rounded-2xl bg-app-surface1 border border-app-border space-y-1">
                  <h4 className="font-heading font-bold text-base text-app-text">{f.name}</h4>
                  <p className="text-xs font-mono text-hru-gold">{f.title}</p>
                  <p className="text-xs text-app-muted">{f.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar Info Column */}
        <div className="lg:col-span-4 space-y-6">
          <div className="p-6 rounded-[24px] bg-app-surface1 border border-app-border shadow-xl space-y-6">
            <h4 className="font-heading font-bold text-lg text-app-text">
              Department Verified Outcomes
            </h4>
            <div className="space-y-4">
              {dept.stats.map((stat, i) => (
                <div key={i} className="p-3.5 rounded-xl bg-white/5 border border-app-border">
                  <div className="text-[10px] font-mono uppercase text-app-muted">{stat.label}</div>
                  <div className="text-base font-bold font-heading text-hru-gold mt-0.5">{stat.value}</div>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-app-border space-y-3">
              <Button to="/admissions" variant="gold" size="md" className="w-full justify-center">
                Apply to this Department
              </Button>
              <Button to="/contact" variant="glass" size="md" className="w-full justify-center">
                Book a Lab Walkthrough
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DepartmentDetailPage;
