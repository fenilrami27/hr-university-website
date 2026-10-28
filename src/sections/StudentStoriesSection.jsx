import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight, CheckCircle2, Play } from 'lucide-react';
import SectionHeading from '../components/ui/SectionHeading';
import VideoModal from '../components/ui/VideoModal';
import { studentStories } from '../data/universityData';

export function StudentStoriesSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  const current = studentStories[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? studentStories.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === studentStories.length - 1 ? 0 : prev + 1));
  };

  return (
    <>
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl 2xl:max-w-[1600px] mx-auto">
        <SectionHeading
          badge="FELLOW SPOTLIGHTS"
          badgeColor="gold"
          title="PROVEN BY OUTPUT."
          highlight="NOT PARTICIPATION."
          subtitle="Our alumni and student fellows don't collect participation certificates. They raise venture rounds, publish breakthrough research, and ship world-class software."
          align="center"
        />

        {/* Story-Style Avatar Selectors */}
        <div className="flex items-center justify-center gap-4 sm:gap-6 mb-12 overflow-x-auto py-2">
          {studentStories.map((story, idx) => {
            const isActive = idx === currentIndex;
            return (
              <button
                key={story.id}
                onClick={() => setCurrentIndex(idx)}
                className="flex flex-col items-center gap-2 group focus:outline-none"
              >
                <div
                  className={`
                    relative p-1 rounded-full transition-all duration-300
                    ${
                      isActive
                        ? 'ring-2 ring-hru-gold ring-offset-4 ring-offset-app scale-110'
                        : 'opacity-60 hover:opacity-100 ring-1 ring-app-border'
                    }
                  `}
                >
                  <img
                    src={story.avatar}
                    alt={story.name}
                    className="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover"
                  />
                  {isActive && (
                    <span className="absolute bottom-0 right-0 w-4 h-4 rounded-full bg-hru-gold border-2 border-app flex items-center justify-center">
                      <CheckCircle2 className="w-3 h-3 text-hru-midnight" />
                    </span>
                  )}
                </div>
                <span className={`text-xs font-mono tracking-tight ${isActive ? 'text-hru-gold font-bold' : 'text-app-muted'}`}>
                  {story.name.split(' ')[0]}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Story Card */}
        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, scale: 0.96, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: -20 }}
              transition={{ duration: 0.4 }}
              className="rounded-3xl p-8 sm:p-12 bg-app-surface1 border border-app-border shadow-2xl relative overflow-hidden"
            >
              {/* Top quote row */}
              <div className="flex items-center justify-between mb-8">
                <Quote className="w-10 h-10 text-hru-gold/40" />
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs font-semibold px-3 py-1 rounded-full bg-hru-indigo/15 text-hru-indigo border border-hru-indigo/30">
                    {current.tag}
                  </span>
                  <span className="font-mono text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-hru-gold">
                    {current.metrics}
                  </span>
                </div>
              </div>

              {/* Giant Quote Text */}
              <blockquote className="text-xl sm:text-2xl md:text-3xl font-heading font-bold text-app-text leading-relaxed mb-8">
                "{current.quote}"
              </blockquote>

              {/* Author info & Actions */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-6 border-t border-app-border">
                <div className="flex items-center gap-4">
                  <img
                    src={current.avatar}
                    alt={current.name}
                    className="w-12 h-12 rounded-full object-cover border border-hru-gold/40"
                  />
                  <div>
                    <h4 className="font-heading font-extrabold text-base text-app-text">
                      {current.name}
                    </h4>
                    <p className="text-xs text-hru-gold font-mono">
                      {current.role}
                    </p>
                    <p className="text-xs text-app-muted">
                      {current.program}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  {/* Video Testimonial Trigger */}
                  <button
                    type="button"
                    onClick={() => setVideoModalOpen(true)}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-white transition-colors"
                  >
                    <Play className="w-3.5 h-3.5 text-hru-gold fill-hru-gold" />
                    <span>Watch Story</span>
                  </button>

                  {/* Navigation controls */}
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={handlePrev}
                      aria-label="Previous story"
                      className="w-9 h-9 rounded-full border border-app-border flex items-center justify-center text-app-text hover:bg-hru-gold hover:text-hru-midnight transition-colors"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <span className="font-mono text-xs text-app-muted px-1">
                      0{currentIndex + 1} / 0{studentStories.length}
                    </span>
                    <button
                      type="button"
                      onClick={handleNext}
                      aria-label="Next story"
                      className="w-9 h-9 rounded-full border border-app-border flex items-center justify-center text-app-text hover:bg-hru-gold hover:text-hru-midnight transition-colors"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Video Modal */}
      <VideoModal
        isOpen={videoModalOpen}
        onClose={() => setVideoModalOpen(false)}
        videoSrc="/videos/hero.mp4"
        title={`${current.name} — Student Builder Journey at HRU`}
      />
    </>
  );
}

export default StudentStoriesSection;
