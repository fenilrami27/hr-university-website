import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import SectionHeading from '../components/ui/SectionHeading';
import mediaRegistry from '../data/media';

export function DepartmentsSection() {
  const [activeId, setActiveId] = useState('ai');

  const departments = [
    {
      id: 'ai',
      name: 'AI & Data Science',
      tagline: 'Autonomous swarms, LLM reasoning & embodied robotics intelligence',
      tint: '#5B5BF0',
      photo: mediaRegistry.departments.ai.src,
      stats: ['512x H100 Nodes', '₹48 LPA Median Base', '1:6 Lab Ratio'],
      slug: 'ai-data-science',
      alt: 'Robotics and AI laboratory with neural network computing clusters',
    },
    {
      id: 'cse',
      name: 'Computer Science',
      tagline: 'Distributed systems, low-latency protocols & post-quantum security',
      tint: '#38BDF8',
      photo: mediaRegistry.departments.cse.src,
      stats: ['Zero Legacy Exams', '100% Studio Building', '24/7 Sandbox'],
      slug: 'computer-science',
      alt: 'High-performance computing server cluster infrastructure',
    },
    {
      id: 'pharmacy',
      name: 'Paramedical & Pharmacy',
      tagline: 'AI-assisted drug discovery, molecular biochemistry & paramedical simulation',
      tint: '#2DD4BF',
      photo: mediaRegistry.departments.pharmacy.src,
      stats: ['BSL-2 Lab Rigs', '18 Active Patents', 'Clinical Rotations'],
      slug: 'pharmacy',
      alt: 'Paramedical clinical simulation and pharmaceutical research laboratory',
    },
    {
      id: 'sports',
      name: 'Sports Science & Analytics',
      tagline: 'Biomechanical performance, injury prevention & athletic telemetry',
      tint: '#FF7A59',
      photo: mediaRegistry.departments.sports.src,
      stats: ['Olympic-Spec Hub', 'VO2 Max Biometrics', 'Pro Team Partners'],
      slug: 'sports-science',
      alt: 'Sports science and biomechanics track athletics complex',
    },
    {
      id: 'design',
      name: 'Design & Spatial Computing',
      tagline: 'VisionOS interfaces, 3D worldbuilding & tactile physical computing',
      tint: '#F472B6',
      photo: mediaRegistry.departments.design.src,
      stats: ['Design Fellows', 'Volumetric Stage', 'Haptic Prototyping'],
      slug: 'design',
      alt: 'Industrial design and spatial computing lab studio',
    },
    {
      id: 'architecture',
      name: 'Parametric Architecture',
      tagline: 'Regenerative urban design, sustainable composites & algorithmic fabrication',
      tint: '#22D3EE',
      photo: mediaRegistry.departments.architecture.src,
      stats: ['Multi-Axis CNCs', 'Carbon Negative', 'Biennale Showcase'],
      slug: 'architecture',
      alt: 'Parametric architecture model and sustainable structural design studio',
    },
    {
      id: 'business',
      name: 'Business & Venture Systems',
      tagline: 'Algorithmic liquidity, venture formation & Indian and global market mechanisms',
      tint: '#FFC53D',
      photo: mediaRegistry.departments.business.src,
      stats: ['₹50 Cr Seed Ticket', 'YC & Tier-1 Mentors', 'Student Managed Fund'],
      slug: 'business',
      alt: 'Venture incubation studio and financial analytics bay',
    },
    {
      id: 'media',
      name: 'Media & Film Production',
      tagline: 'Virtual cinema production, spatial audio synthesis & creative tech',
      tint: '#A78BFA',
      photo: mediaRegistry.departments.media.src,
      stats: ['Dolby Atmos Suite', 'LED Volume Wall', 'Film Screenings'],
      slug: 'media-film',
      alt: 'Film production soundstage and virtual production volume wall',
    },
    {
      id: 'biotech',
      name: 'Synthetic Biology',
      tagline: 'CRISPR engineering, bio-materials & computational genomics',
      tint: '#4ADE80',
      photo: mediaRegistry.departments.biotech.src,
      stats: ['Automated Microfluidics', 'Nature Publications', 'Bio-Incubator'],
      slug: 'biotechnology',
      alt: 'Synthetic biology cleanroom and gene synthesis workstation',
    },
  ];

  const handleImgError = (e) => {
    e.currentTarget.onerror = null;
    e.currentTarget.src = 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1000&q=80';
  };

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      <SectionHeading
        badge="ACADEMIC DEPARTMENTS"
        badgeColor="gold"
        title="NINE CENTERS OF"
        highlight="DISRUPTIVE EXCELLENCE."
        subtitle="Hover across our specialized faculty departments to explore their production-grade labs, curriculum pillars, and career outcomes."
        align="left"
      />

      {/* Desktop Expanding Panels */}
      <div className="hidden lg:flex gap-3 h-[520px] w-full rounded-3xl overflow-hidden p-2 bg-[#0A0B1E] border border-white/10 shadow-2xl">
        {departments.map((dept) => {
          const isActive = activeId === dept.id;

          return (
            <motion.div
              key={dept.id}
              onMouseEnter={() => setActiveId(dept.id)}
              animate={{
                flex: isActive ? 4 : 1,
              }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="relative h-full rounded-2xl overflow-hidden cursor-pointer group select-none flex flex-col justify-between p-5"
            >
              {/* Background Photo in FULL COLOR (vivid, not dull grayscale) */}
              <img
                src={dept.photo}
                alt={dept.alt || dept.name}
                loading="lazy"
                onError={handleImgError}
                className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  isActive
                    ? 'scale-105 filter brightness-100 saturate-110'
                    : 'scale-100 filter brightness-80 saturate-105 group-hover:brightness-100 group-hover:saturate-125'
                }`}
              />

              {/* Tint overlay & subtle department-tint gradient at the bottom */}
              <div
                className="absolute inset-0 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: isActive
                    ? `linear-gradient(180deg, rgba(10,11,30,0.25) 0%, rgba(10,11,30,0.85) 60%, ${dept.tint}30 100%)`
                    : `linear-gradient(180deg, rgba(10,11,30,0.35) 0%, rgba(10,11,30,0.65) 55%, ${dept.tint}40 100%)`,
                }}
              />

              {/* Subtle indigo grade specifically for AI panel */}
              {dept.id === 'ai' && (
                <div className="absolute inset-0 bg-[#5B5BF0]/20 mix-blend-multiply pointer-events-none" />
              )}

              {/* Top Accent Dot & Badge */}
              <div className="relative z-10 flex items-center justify-between">
                <span
                  className="w-3.5 h-3.5 rounded-full transition-transform duration-300 group-hover:scale-125 shadow-lg border border-white/30"
                  style={{ backgroundColor: dept.tint }}
                />
                {isActive && (
                  <span
                    className="font-mono text-[10px] uppercase tracking-widest px-2.5 py-0.5 rounded-full border backdrop-blur-md"
                    style={{ color: dept.tint, borderColor: `${dept.tint}40`, backgroundColor: `${dept.tint}15` }}
                  >
                    FEATURED DEPARTMENT
                  </span>
                )}
              </div>

              {/* Middle / Bottom Content */}
              {isActive ? (
                <div className="relative z-10">
                  <h3 className="font-heading font-black tracking-tight text-white text-2xl mb-2">
                    {dept.name}
                  </h3>

                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-3"
                  >
                    <p className="text-xs text-[#A4A8C4] line-clamp-2">
                      {dept.tagline}
                    </p>

                    <div className="flex flex-wrap gap-2 pt-1">
                      {dept.stats.map((s, idx) => (
                        <span
                          key={idx}
                          className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-black/60 text-white border border-white/10"
                        >
                          ✦ {s}
                        </span>
                      ))}
                    </div>

                    <div className="pt-2">
                      <Link
                        to={`/departments/${dept.slug}`}
                        className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-hru-gold hover:underline"
                      >
                        Explore Curriculum & Labs <ArrowUpRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </motion.div>
                </div>
              ) : (
                /* Collapsed panel: Vertical rotated full name so it is NEVER truncated */
                <div className="relative z-10 flex flex-col items-center justify-end h-full pb-4 pointer-events-none">
                  <span
                    className="font-mono text-xs font-bold tracking-widest text-white/95 uppercase whitespace-nowrap [writing-mode:vertical-rl] rotate-180 drop-shadow-md group-hover:text-white transition-colors"
                    style={{ letterSpacing: '0.15em' }}
                  >
                    {dept.name}
                  </span>
                </div>
              )}
            </motion.div>
          );
        })}
      </div>

      {/* Mobile Swipeable Cards */}
      <div className="lg:hidden flex gap-4 overflow-x-auto pb-6 scrollbar-none snap-x snap-mandatory">
        {departments.map((dept) => (
          <div
            key={dept.id}
            className="flex-none w-[280px] sm:w-[320px] rounded-3xl overflow-hidden bg-app-surface1 border border-app-border snap-start p-5 flex flex-col justify-between relative aspect-[4/5]"
          >
            <img
              src={dept.photo}
              alt={dept.alt || dept.name}
              loading="lazy"
              onError={handleImgError}
              className="absolute inset-0 w-full h-full object-cover filter brightness-75 saturate-110"
            />
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: `linear-gradient(to top, #0A0B1E 0%, rgba(10,11,30,0.6) 60%, ${dept.tint}20 100%)`,
              }}
            />

            <div className="relative z-10 flex justify-between items-center">
              <span
                className="w-3 h-3 rounded-full border border-white/30"
                style={{ backgroundColor: dept.tint }}
              />
              <span
                className="text-[10px] font-mono px-2 py-0.5 rounded-full border"
                style={{ color: dept.tint, borderColor: `${dept.tint}40`, backgroundColor: `${dept.tint}15` }}
              >
                STUDIO HUB
              </span>
            </div>

            <div className="relative z-10 space-y-2">
              <h3 className="font-heading font-bold text-xl text-white">
                {dept.name}
              </h3>
              <p className="text-xs text-[#A4A8C4] line-clamp-2">
                {dept.tagline}
              </p>
              <div className="pt-2">
                <Link
                  to={`/departments/${dept.slug}`}
                  className="text-xs font-mono font-bold text-hru-gold flex items-center gap-1"
                >
                  View Details <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default DepartmentsSection;
