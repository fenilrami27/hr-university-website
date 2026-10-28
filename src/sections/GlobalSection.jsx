import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Globe2, MapPin, Sparkles, Building, ArrowUpRight } from 'lucide-react';
import SectionHeading from '../components/ui/SectionHeading';
import Card from '../components/ui/Card';

export function GlobalSection() {
  const hubs = [
    {
      id: 'india',
      city: 'Ahmedabad & Bengaluru, India',
      region: 'Flagship Core Hub',
      focus: 'Autonomous AI Swarms, DeepTech, Fintech & Bio-Incubator',
      coordinates: { x: '68%', y: '46%' },
      students: '999+ Fellows',
      partner: 'HRU Central Campus & Innovation Corridor',
    },
    {
      id: 'sf',
      city: 'San Francisco, USA',
      region: 'North America',
      focus: 'Autonomous Agents & Venture Incubation',
      coordinates: { x: '18%', y: '36%' },
      students: '120 Fellows',
      partner: 'Silicon Venture Studio (Fictional)',
    },
    {
      id: 'tokyo',
      city: 'Tokyo, Japan',
      region: 'Asia Pacific',
      focus: 'Robotics & Volumetric Spatial Media',
      coordinates: { x: '82%', y: '38%' },
      students: '85 Fellows',
      partner: 'Shibuya Future Media Lab',
    },
    {
      id: 'berlin',
      city: 'Berlin, Germany',
      region: 'Europe Central',
      focus: 'Generative Audio, Sound & Cryptography',
      coordinates: { x: '52%', y: '30%' },
      students: '95 Fellows',
      partner: 'Mitte Creative Tech Foundry',
    },
    {
      id: 'zurich',
      city: 'Zurich, Switzerland',
      region: 'Europe Alps',
      focus: 'Quantum Computing & Precision Nanotech',
      coordinates: { x: '50%', y: '34%' },
      students: '60 Fellows',
      partner: 'Alpine Quantum Institute',
    },
    {
      id: 'singapore',
      city: 'Singapore',
      region: 'Southeast Asia',
      focus: 'Sustainable Urbanism & Clean AgTech',
      coordinates: { x: '75%', y: '56%' },
      students: '70 Fellows',
      partner: 'Equator Bio-Dome Consortium',
    },
  ];

  const [selectedHub, setSelectedHub] = useState(hubs[0]);

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      <SectionHeading
        badge="BORDERLESS RESIDENCIES"
        badgeColor="gold"
        title="SPEND SEMESTERS"
        highlight="ACROSS GLOBAL & NATIONAL HUBS."
        subtitle="All degree programs feature integrated residency rotations. Build in Bengaluru's AI corridors, study in Tokyo's robotics labs, and pitch in Silicon Valley."
        align="left"
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Animated Dotted World Map Graphic */}
        <div className="lg:col-span-8 relative rounded-3xl p-6 sm:p-10 bg-[#0A0B1E] border border-white/10 shadow-2xl overflow-hidden aspect-[16/9] flex items-center justify-center">
          {/* Subtle Grid & Map Dots Background */}
          <div className="absolute inset-0 bg-[radial-gradient(rgba(91,91,240,0.15)_1.5px,transparent_1.5px)] [background-size:24px_24px]" />

          {/* Dotted World SVG Silhouette */}
          <svg
            viewBox="0 0 1000 500"
            className="w-full h-full opacity-35 filter brightness-125"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* World outline paths */}
            <path
              d="M150 120 C 180 110, 240 140, 270 200 C 290 240, 240 320, 210 330 C 170 340, 140 250, 130 180 Z"
              fill="rgba(91,91,240,0.3)"
            />
            <path
              d="M230 280 C 270 290, 310 380, 280 440 C 250 470, 220 420, 210 360 Z"
              fill="rgba(91,91,240,0.25)"
            />
            <path
              d="M450 100 C 540 80, 580 140, 560 210 C 530 230, 480 200, 460 160 Z"
              fill="rgba(91,91,240,0.3)"
            />
            <path
              d="M480 220 C 530 230, 560 320, 530 400 C 490 420, 460 340, 470 260 Z"
              fill="rgba(91,91,240,0.25)"
            />
            <path
              d="M620 120 C 760 100, 850 180, 820 280 C 780 320, 680 260, 640 180 Z"
              fill="rgba(91,91,240,0.3)"
            />
            <path
              d="M740 340 C 810 350, 840 420, 800 450 C 760 460, 730 410, 740 370 Z"
              fill="rgba(91,91,240,0.25)"
            />
          </svg>

          {/* Interactive Glowing City Nodes */}
          {hubs.map((hub) => {
            const isSelected = selectedHub.id === hub.id;
            return (
              <div
                key={hub.id}
                style={{ left: hub.coordinates.x, top: hub.coordinates.y }}
                className="absolute -translate-x-1/2 -translate-y-1/2 z-20 cursor-pointer"
                onClick={() => setSelectedHub(hub)}
              >
                <div className="relative group">
                  {/* Ping wave */}
                  <span
                    className={`absolute -inset-2 rounded-full animate-ping opacity-60 ${
                      isSelected ? 'bg-hru-gold' : 'bg-hru-indigo'
                    }`}
                  />
                  {/* Center Dot */}
                  <div
                    className={`w-4 h-4 rounded-full border-2 border-[#0A0B1E] flex items-center justify-center transition-transform duration-300 ${
                      isSelected
                        ? 'bg-hru-gold scale-125 shadow-gold-glow'
                        : 'bg-hru-indigo group-hover:scale-110'
                    }`}
                  />
                  {/* City Label */}
                  <div
                    className={`absolute left-1/2 -translate-x-1/2 top-6 whitespace-nowrap font-mono text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full backdrop-blur-md border ${
                      isSelected
                        ? 'bg-hru-gold text-hru-midnight border-hru-gold'
                        : 'bg-black/60 text-white border-white/10 group-hover:border-hru-gold'
                    }`}
                  >
                    {hub.city.split(',')[0]}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Hub Detail Card */}
        <div className="lg:col-span-4">
          <Card glow="gold" className="p-8 space-y-6">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-hru-gold/15 text-hru-gold border border-hru-gold/30">
                ACTIVE SELECTION
              </span>
              <span className="text-xs font-mono text-app-muted">
                {selectedHub.region}
              </span>
            </div>

            <div>
              <h3 className="text-2xl font-black font-heading text-app-text">
                {selectedHub.city}
              </h3>
              <p className="text-sm text-app-muted mt-2 leading-relaxed">
                {selectedHub.focus}
              </p>
            </div>

            <div className="space-y-3 pt-4 border-t border-app-border">
              <div className="flex justify-between text-xs font-mono">
                <span className="text-app-muted">Semester Cohort:</span>
                <span className="text-app-text font-bold">{selectedHub.students}</span>
              </div>
              <div className="flex justify-between text-xs font-mono">
                <span className="text-app-muted">Partner Hub:</span>
                <span className="text-hru-gold font-bold">{selectedHub.partner}</span>
              </div>
              <div className="flex justify-between text-xs font-mono">
                <span className="text-app-muted">Housing Spec:</span>
                <span className="text-app-text font-bold">Guaranteed City Pod Suites</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                type="button"
                className="w-full py-2.5 rounded-full bg-white/5 hover:bg-hru-gold hover:text-hru-midnight text-xs font-mono font-bold uppercase transition-all duration-200 border border-app-border flex items-center justify-center gap-1.5"
              >
                <span>View Rotation Syllabus</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}

export default GlobalSection;
