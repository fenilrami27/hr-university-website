import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, PhoneCall, Sparkles } from 'lucide-react';
import { POPUP_DELAY_MS, POPUP_VISIBLE_MS } from '../../config/enquiry';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';

export function TimedEnquiryPopup({ canStart = false }) {
  const [isOpen, setIsOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [drainProgress, setDrainProgress] = useState(100);

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    program: 'Autonomous AI & Intelligent Systems',
  });

  const location = useLocation();
  const prefersReducedMotion = usePrefersReducedMotion();

  const accumulatedTimeRef = useRef(0);
  const drainTimerRef = useRef(null);
  const drainStartRef = useRef(null);
  const remainingDrainRef = useRef(POPUP_VISIBLE_MS);

  // Check if popup should trigger after POPUP_DELAY_MS of active tab visibility
  useEffect(() => {
    if (!canStart) return;
    if (typeof window === 'undefined') return;

    // Check session storage
    if (sessionStorage.getItem('hru_enquiry_shown') || sessionStorage.getItem('hru_form_submitted')) {
      return;
    }

    let interval;
    const tickTime = 250;

    const handleVisibilityTick = () => {
      // Don't count time if tab is hidden or user is on /admissions
      if (document.hidden || location.pathname.includes('/admissions')) {
        return;
      }

      accumulatedTimeRef.current += tickTime;

      if (accumulatedTimeRef.current >= POPUP_DELAY_MS) {
        clearInterval(interval);
        triggerOpen();
      }
    };

    interval = setInterval(handleVisibilityTick, tickTime);
    return () => clearInterval(interval);
  }, [canStart, location.pathname]);

  const triggerOpen = () => {
    sessionStorage.setItem('hru_enquiry_shown', 'true');
    setIsOpen(true);
    startDrain(POPUP_VISIBLE_MS);
  };

  // Start 5-second drain countdown
  const startDrain = (duration) => {
    drainStartRef.current = performance.now();
    remainingDrainRef.current = duration;

    const step = (now) => {
      if (isPaused || hasInteracted) return;

      const elapsed = now - drainStartRef.current;
      const remaining = Math.max(0, remainingDrainRef.current - elapsed);
      const pct = (remaining / POPUP_VISIBLE_MS) * 100;

      setDrainProgress(pct);

      if (remaining > 0) {
        drainTimerRef.current = requestAnimationFrame(step);
      } else {
        handleClose();
      }
    };

    drainTimerRef.current = requestAnimationFrame(step);
  };

  const handlePause = () => {
    setIsPaused(true);
    cancelAnimationFrame(drainTimerRef.current);
  };

  const handleResume = () => {
    if (hasInteracted) return; // Keep open if user touched form
    setIsPaused(false);
    startDrain((drainProgress / 100) * POPUP_VISIBLE_MS);
  };

  const handleClose = () => {
    setIsOpen(false);
    cancelAnimationFrame(drainTimerRef.current);
  };

  // Listen for Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        handleClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    sessionStorage.setItem('hru_form_submitted', 'true');

    setTimeout(() => {
      handleClose();
    }, 2000);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div
        role="dialog"
        aria-label="Planning your future counselling enquiry"
        aria-modal="false"
        className="fixed inset-0 z-[9950] pointer-events-none flex items-center justify-center p-4 sm:p-6"
      >
        {/* Light Dim Backdrop (~30%), clicking closes */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleClose}
          className="absolute inset-0 bg-black/30 backdrop-blur-[2px] pointer-events-auto"
        />

        {/* Glass Card on Desktop / Bottom Sheet on Mobile */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          onMouseEnter={handlePause}
          onMouseLeave={handleResume}
          className="relative pointer-events-auto w-full max-w-lg rounded-3xl bg-[#12142B]/95 backdrop-blur-2xl border border-white/15 shadow-2xl p-6 sm:p-8 overflow-hidden text-white"
        >
          {/* Thin Sun Gold Draining Progress Bar */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-white/10">
            <div
              className="h-full bg-hru-gold transition-all duration-75 ease-linear"
              style={{ width: `${drainProgress}%` }}
            />
          </div>

          {/* Close Button */}
          <button
            type="button"
            onClick={handleClose}
            aria-label="Close dialog"
            className="absolute top-5 right-5 p-1.5 rounded-full hover:bg-white/10 text-[#A4A8C4] hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {!submitted ? (
            <div className="space-y-4 pt-1">
              {/* Badge + Pause indicator */}
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-hru-gold/15 text-hru-gold border border-hru-gold/30">
                  <Sparkles className="w-3 h-3" />
                  Free 1-on-1 Guidance
                </span>
                <span className="text-[#A4A8C4]">
                  {isPaused || hasInteracted ? 'Take your time' : 'Auto-closing...'}
                </span>
              </div>

              <div>
                <h3 className="font-heading font-black text-xl sm:text-2xl text-white">
                  Planning your future?
                </h3>
                <p className="text-xs sm:text-sm text-[#A4A8C4] mt-1">
                  Get a direct counselling call from our faculty admissions squad.
                </p>
              </div>

              <form
                onSubmit={handleSubmit}
                className="space-y-3.5 pt-2"
                onFocus={() => {
                  handlePause();
                  setHasInteracted(true);
                }}
              >
                <div>
                  <label className="block text-[11px] font-mono uppercase text-[#A4A8C4] mb-1">Full Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => {
                      setHasInteracted(true);
                      setFormData({ ...formData, name: e.target.value });
                    }}
                    placeholder="Grace Hopper"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-3.5 py-2 text-xs text-white placeholder-[#A4A8C4] focus:outline-none focus:border-hru-gold"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-mono uppercase text-[#A4A8C4] mb-1">Mobile / WhatsApp</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => {
                        setHasInteracted(true);
                        setFormData({ ...formData, phone: e.target.value });
                      }}
                      placeholder="+1 (555) 000-0000"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-3.5 py-2 text-xs text-white placeholder-[#A4A8C4] focus:outline-none focus:border-hru-gold"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-mono uppercase text-[#A4A8C4] mb-1">Email</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => {
                        setHasInteracted(true);
                        setFormData({ ...formData, email: e.target.value });
                      }}
                      placeholder="grace@navy.mil"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-3.5 py-2 text-xs text-white placeholder-[#A4A8C4] focus:outline-none focus:border-hru-gold"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-mono uppercase text-[#A4A8C4] mb-1">Program of Interest</label>
                  <select
                    value={formData.program}
                    onChange={(e) => {
                      setHasInteracted(true);
                      setFormData({ ...formData, program: e.target.value });
                    }}
                    className="w-full bg-[#12142B] border border-white/10 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-hru-gold"
                  >
                    <option value="Autonomous AI & Intelligent Systems">Autonomous AI & Intelligent Systems</option>
                    <option value="Spatial Computing & XR Interfaces">Spatial Computing & XR Interfaces</option>
                    <option value="Algorithmic Finance & Quantitative Trading">Algorithmic Finance & Quantitative Trading</option>
                    <option value="Synthetic Biology & Neurotech">Synthetic Biology & Neurotech</option>
                  </select>
                </div>

                <div className="pt-2 flex items-center justify-between gap-3">
                  <button
                    type="button"
                    onClick={handleClose}
                    className="text-xs font-mono text-[#A4A8C4] hover:text-white transition-colors"
                  >
                    No thanks, I'll explore
                  </button>

                  <button
                    type="submit"
                    className="px-5 py-2.5 rounded-full bg-hru-gold text-hru-midnight font-bold text-xs shadow-gold-glow hover:bg-hru-gold-hover transition-all flex items-center gap-1.5"
                  >
                    <PhoneCall className="w-3.5 h-3.5" />
                    <span>Request a Call</span>
                  </button>
                </div>
              </form>
            </div>
          ) : (
            <div className="text-center py-6 space-y-3">
              <div className="w-12 h-12 rounded-full bg-hru-gold/20 text-hru-gold flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h4 className="font-heading font-bold text-lg text-white">
                Thanks, {formData.name || 'Builder'}!
              </h4>
              <p className="text-xs text-[#A4A8C4]">
                Our academic counsellor will connect with you on WhatsApp / Phone soon.
              </p>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

export default TimedEnquiryPopup;
