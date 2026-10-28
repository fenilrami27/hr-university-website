import React, { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut } from 'lucide-react';
import { modalBackdrop } from '../../lib/motion';

export function Lightbox({ isOpen, onClose, images = [], initialIndex = 0 }) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [prevInitial, setPrevInitial] = useState(initialIndex);
  const [isZoomed, setIsZoomed] = useState(false);

  if (prevInitial !== initialIndex) {
    setPrevInitial(initialIndex);
    setCurrentIndex(initialIndex);
  }

  const handleNext = useCallback(() => {
    setIsZoomed(false);
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const handlePrev = useCallback(() => {
    setIsZoomed(false);
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, handleNext, handlePrev, onClose]);

  if (!isOpen || images.length === 0) return null;

  const current = images[currentIndex];

  return (
    <AnimatePresence>
      <motion.div
        variants={modalBackdrop}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="fixed inset-0 z-[10000] bg-black/95 backdrop-blur-2xl flex flex-col justify-between p-4 sm:p-6"
        onClick={onClose}
      >
        {/* Top Control Bar */}
        <div className="flex items-center justify-between z-10" onClick={(e) => e.stopPropagation()}>
          <div className="text-white">
            <span className="font-heading font-bold text-base block">{current.title}</span>
            <span className="text-xs font-mono text-[#A4A8C4]">{current.tag || 'Campus Gallery'}</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setIsZoomed(!isZoomed)}
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
              aria-label="Toggle zoom"
            >
              {isZoomed ? <ZoomOut className="w-4 h-4 text-hru-gold" /> : <ZoomIn className="w-4 h-4" />}
            </button>
            <button
              type="button"
              onClick={onClose}
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
              aria-label="Close lightbox"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Center Main Image with Arrows */}
        <div
          className="relative my-auto flex items-center justify-center overflow-hidden max-h-[75vh]"
          onClick={(e) => e.stopPropagation()}
        >
          {images.length > 1 && (
            <button
              type="button"
              onClick={handlePrev}
              className="absolute left-2 sm:left-6 z-20 w-12 h-12 rounded-full bg-black/60 hover:bg-hru-indigo text-white flex items-center justify-center transition-colors border border-white/10 shadow-lg"
              aria-label="Previous"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          )}

          <motion.img
            key={current.src}
            src={current.src}
            alt={current.alt || current.title}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{
              opacity: 1,
              scale: isZoomed ? 1.4 : 1,
              transition: { duration: 0.3 },
            }}
            className="max-h-[70vh] max-w-full rounded-2xl object-contain shadow-2xl cursor-pointer"
            onClick={() => setIsZoomed(!isZoomed)}
          />

          {images.length > 1 && (
            <button
              type="button"
              onClick={handleNext}
              className="absolute right-2 sm:right-6 z-20 w-12 h-12 rounded-full bg-black/60 hover:bg-hru-indigo text-white flex items-center justify-center transition-colors border border-white/10 shadow-lg"
              aria-label="Next"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          )}
        </div>

        {/* Bottom Thumbnails Strip */}
        <div className="z-10 flex items-center justify-center gap-3 overflow-x-auto py-2" onClick={(e) => e.stopPropagation()}>
          {images.map((img, idx) => (
            <button
              key={idx}
              onClick={() => {
                setIsZoomed(false);
                setCurrentIndex(idx);
              }}
              className={`relative rounded-xl overflow-hidden shrink-0 w-16 h-12 border-2 transition-all duration-200 ${
                idx === currentIndex ? 'border-hru-gold scale-105' : 'border-transparent opacity-50 hover:opacity-100'
              }`}
            >
              <img src={img.src} alt={img.title} className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export default Lightbox;
