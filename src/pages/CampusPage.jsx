import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Sparkles, Wifi, Shield, Coffee, Zap } from 'lucide-react';
import SectionHeading from '../components/ui/SectionHeading';
import Button from '../components/ui/Button';
import { campusLifeGallery } from '../data/universityData';

export function CampusPage() {
  const [activeZone, setActiveZone] = useState(campusLifeGallery[0]);

  const amenities = [
    { icon: Wifi, label: '10 Gbps Symmetrical Wi-Fi 7' },
    { icon: Zap, label: '512-H100 Cluster Direct Access' },
    { icon: Shield, label: '24/7 Biometric Smart Access' },
    { icon: Coffee, label: 'Artisanal Nitro Brew & Matcha Bars' },
  ];

  return (
    <div className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neon-lime/30 bg-neon-lime/10 text-neon-lime font-mono text-xs uppercase tracking-widest mb-4">
          <Sparkles className="w-3.5 h-3.5" />
          Silicon Campus & Living Labs
        </div>
        <h1 className="text-4xl sm:text-6xl font-black font-heading text-text-main tracking-tight leading-none mb-6">
          SPACES CRAFTED FOR <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-lime via-neon-violet to-neon-coral">
            ROUND-THE-CLOCK BUILDING.
          </span>
        </h1>
        <p className="text-text-muted text-base sm:text-lg leading-relaxed">
          Forget dull cinder-block libraries. Our campus is an open-source living laboratory engineered for hackers, artists, and venture teams.
        </p>
      </div>

      {/* Featured Interactive Zone Showcase */}
      <div className="mb-20 rounded-3xl overflow-hidden bg-white/70 dark:bg-[#10121A]/70 border border-black/10 dark:border-white/10 shadow-2xl p-6 sm:p-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 relative aspect-[16/10] rounded-2xl overflow-hidden">
            <img
              src={activeZone.image}
              alt={activeZone.title}
              className="w-full h-full object-cover filter brightness-95"
            />
            <div className="absolute top-4 left-4">
              <span className="font-mono text-xs px-3 py-1 rounded-full bg-black/70 text-neon-lime border border-neon-lime/40 backdrop-blur-md">
                {activeZone.tag}
              </span>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono text-neon-coral">
              <MapPin className="w-4 h-4" />
              <span>ACTIVE ZONE // {activeZone.category.toUpperCase()}</span>
            </div>
            <h2 className="text-3xl font-extrabold font-heading text-text-main">
              {activeZone.title}
            </h2>
            <p className="text-text-muted leading-relaxed">
              {activeZone.description}
            </p>

            <div className="pt-4 flex flex-wrap gap-2">
              {campusLifeGallery.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveZone(item)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-mono transition-all duration-200 ${
                    activeZone.id === item.id
                      ? 'bg-neon-lime text-black font-bold shadow-neon-lime'
                      : 'bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-text-muted hover:text-text-main'
                  }`}
                >
                  {item.title.split(' ')[0]}
                </button>
              ))}
            </div>

            <div className="pt-6 border-t border-black/10 dark:border-white/10">
              <Button to="/contact" variant="lime" size="sm">
                Schedule In-Person Walkthrough
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Campus Perks and Amenities */}
      <div className="mb-20">
        <SectionHeading
          badge="CAMPUS INFRASTRUCTURE"
          badgeColor="violet"
          title="ZERO FRICTION."
          highlight="MAXIMUM VELOCITY."
          subtitle="Everything in our facility is optimized so you never lose your flow state."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {amenities.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white/60 dark:bg-[#10121A]/60 border border-black/10 dark:border-white/10 flex items-center gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-neon-lime/10 border border-neon-lime/30 flex items-center justify-center text-neon-lime shrink-0">
                  <Icon className="w-6 h-6" />
                </div>
                <span className="font-heading font-semibold text-sm text-text-main">
                  {item.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Full Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {campusLifeGallery.map((card, idx) => (
          <div
            key={card.id}
            className="rounded-3xl overflow-hidden bg-white/70 dark:bg-[#10121A]/70 border border-black/10 dark:border-white/10 group shadow-lg"
          >
            <div className="aspect-[4/3] overflow-hidden relative">
              <img
                src={card.image}
                alt={card.title}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <span className="absolute bottom-3 left-3 text-xs font-mono px-2.5 py-1 rounded bg-black/70 text-neon-lime border border-neon-lime/30">
                {card.tag}
              </span>
            </div>
            <div className="p-6">
              <h3 className="font-heading font-bold text-lg text-text-main group-hover:text-neon-lime transition-colors">
                {card.title}
              </h3>
              <p className="mt-2 text-xs text-text-muted leading-relaxed">
                {card.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CampusPage;
