import React, { useRef, useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import SectionHeading from '../components/ui/SectionHeading';
import MediaCard from '../components/ui/MediaCard';
import Lightbox from '../components/ui/Lightbox';
import mediaRegistry from '../data/media';

export function CampusLifeSection() {
  const scrollContainerRef = useRef(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -420 : 420;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const handleCardClick = (idx) => {
    setLightboxIndex(idx);
    setLightboxOpen(true);
  };

  return (
    <>
      <section id="campus" className="relative py-24 overflow-hidden">
        {/* Background ambient glow */}
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-hru-indigo/15 blur-[140px] rounded-full pointer-events-none" />

        <div className="max-w-7xl 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 mb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <SectionHeading
            badge="CAMPUS LIFE & ECOSYSTEM"
            badgeColor="gold"
            title="IMMERSIVE SPACES FOR"
            highlight="ROUND-THE-CLOCK BUILDING."
            subtitle="From 24/7 robotic drone bays to underground audio synth vaults and skyline hydroponic bio-domes."
            className="mb-0"
          />

          {/* Navigation Controls */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => scroll('left')}
              aria-label="Scroll left"
              className="w-12 h-12 rounded-full border border-app-border flex items-center justify-center text-app-text hover:bg-hru-gold hover:text-hru-midnight hover:border-hru-gold transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={() => scroll('right')}
              aria-label="Scroll right"
              className="w-12 h-12 rounded-full border border-app-border flex items-center justify-center text-app-text hover:bg-hru-gold hover:text-hru-midnight hover:border-hru-gold transition-colors"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Horizontal Scroll Gallery Container */}
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto pb-10 pt-4 px-4 sm:px-6 lg:px-8 max-w-full scrollbar-none snap-x snap-mandatory cursor-grab active:cursor-grabbing"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {mediaRegistry.campus.map((card, index) => (
            <div
              key={card.id}
              className="flex-none w-[320px] sm:w-[380px] md:w-[420px] snap-start"
            >
              <MediaCard
                src={card.src}
                alt={card.alt}
                title={card.title}
                subtitle={card.description}
                tag={card.tag}
                aspectRatio="aspect-[4/3]"
                onClick={() => handleCardClick(index)}
              />
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox Modal */}
      <Lightbox
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        images={mediaRegistry.campus}
        initialIndex={lightboxIndex}
      />
    </>
  );
}

export default CampusLifeSection;
