import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import {
  Building2,
  Download,
  Mail,
  User,
  Briefcase,
  FileText,
  X,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Send,
} from 'lucide-react';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';

export function HireFromHRUModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [downloadToast, setDownloadToast] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();

  const [formData, setFormData] = useState({
    companyName: '',
    contactEmail: '',
    contactName: '',
    rolesHiring: '',
    message: '',
  });

  // Handle ESC key to close modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleOpen = () => {
    setIsSubmitted(false);
    setIsSubmitting(false);
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate 700ms submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      if (!prefersReducedMotion) {
        try {
          confetti({
            particleCount: 50,
            spread: 80,
            origin: { y: 0.6 },
            colors: ['#FFC53D', '#FF7A59', '#2DD4BF', '#22D3EE', '#FFFFFF'],
          });
        } catch {
          // ignore
        }
      }
    }, 700);
  };

  const handleDownloadReport = () => {
    setDownloadToast(true);
    setTimeout(() => {
      setDownloadToast(false);
    }, 3800);
  };

  return (
    <>
      {/* Action Banner / Buttons */}
      <div className="w-full p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-hru-indigo via-[#4338CA] to-[#0A0B1E] text-white border border-white/20 shadow-2xl relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8">
        {/* Background glow circles */}
        <div className="absolute -left-20 -top-20 w-64 h-64 bg-hru-coral/25 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-hru-sky/25 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-xl text-center lg:text-left">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-white/10 text-hru-gold border border-white/20 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-hru-gold" />
            PARTNER WITH HRU TALENT
          </span>
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black font-heading tracking-tight leading-tight">
            Ready to hire the next generation of builders?
          </h3>
          <p className="mt-2 text-sm sm:text-base text-white/80 font-sans leading-relaxed">
            Connect with pre-vetted engineers, AI researchers, designers, and domain specialists for campus drives, internships, and deep-tech residencies.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="relative z-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto shrink-0">
          <button
            onClick={handleOpen}
            className="w-full sm:w-auto px-7 py-4 rounded-2xl font-heading font-black text-sm tracking-wide bg-gradient-to-r from-[#FFC53D] to-[#FF7A59] text-[#0A0B1E] shadow-xl hover:shadow-orange-500/30 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2"
          >
            <Building2 className="w-4 h-4" />
            <span>Hire from HRU</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={handleDownloadReport}
            className="w-full sm:w-auto px-6 py-4 rounded-2xl font-heading font-bold text-sm tracking-wide bg-white/10 hover:bg-white/20 text-white border border-white/25 backdrop-blur-sm hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2"
          >
            <Download className="w-4 h-4 text-hru-mint" />
            <span>Placement Report 2026</span>
          </button>
        </div>
      </div>

      {/* Simulated Download Notification Toast */}
      <AnimatePresence>
        {downloadToast && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-6 right-6 z-50 p-4 rounded-2xl bg-[#0A0B1E] text-white border border-hru-mint/40 shadow-2xl flex items-center gap-3 max-w-md"
          >
            <div className="w-9 h-9 rounded-xl bg-hru-mint/20 text-hru-mint flex items-center justify-center shrink-0">
              <Download className="w-5 h-5 animate-bounce" />
            </div>
            <div>
              <div className="text-xs font-mono font-bold text-hru-mint uppercase">
                REPORT DOWNLOAD TRIGGERED
              </div>
              <div className="text-xs text-white/90 font-sans mt-0.5">
                Downloading HRU-Campus-Placement-Report-2026.pdf (Sample Brochure)
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* UI Modal */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleClose}
              className="fixed inset-0 bg-[#0A0B1E]/80 backdrop-blur-md"
            />

            {/* Modal Dialog Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 20 }}
              transition={{ type: 'spring', duration: 0.5, bounce: 0.15 }}
              className="relative w-full max-w-xl rounded-3xl bg-app-surface1 border border-app-border p-6 sm:p-8 shadow-2xl z-10 overflow-hidden"
            >
              {/* Close Button */}
              <button
                onClick={handleClose}
                className="absolute top-5 right-5 w-8 h-8 rounded-full bg-app-surface2 border border-app-border text-app-muted hover:text-app-text flex items-center justify-center transition-colors"
                aria-label="Close hiring modal"
              >
                <X className="w-4 h-4" />
              </button>

              {!isSubmitted ? (
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-hru-coral uppercase mb-1">
                    <Building2 className="w-4 h-4" />
                    <span>CORPORATE TALENT DESK</span>
                  </div>
                  <h4 className="text-xl sm:text-2xl font-black font-heading text-app-text">
                    Hire from HR University
                  </h4>
                  <p className="text-xs sm:text-sm text-app-muted mt-1 font-sans">
                    Submit your organization details to schedule on-campus drives, virtual hackathons, or direct portfolio screenings.
                  </p>

                  <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                    <div>
                      <label className="block text-xs font-heading font-bold text-app-text mb-1">
                        Company / Organization Name *
                      </label>
                      <input
                        type="text"
                        name="companyName"
                        required
                        value={formData.companyName}
                        onChange={handleChange}
                        placeholder="e.g., NovaTech Systems, Zenith Labs"
                        className="w-full px-4 py-2.5 rounded-xl bg-app-surface2 border border-app-border text-app-text text-sm focus:outline-none focus:border-hru-coral transition-colors"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-heading font-bold text-app-text mb-1">
                          Talent Lead / HR Name *
                        </label>
                        <input
                          type="text"
                          name="contactName"
                          required
                          value={formData.contactName}
                          onChange={handleChange}
                          placeholder="e.g., Sarah Jenkins"
                          className="w-full px-4 py-2.5 rounded-xl bg-app-surface2 border border-app-border text-app-text text-sm focus:outline-none focus:border-hru-coral transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-heading font-bold text-app-text mb-1">
                          Corporate Work Email *
                        </label>
                        <input
                          type="email"
                          name="contactEmail"
                          required
                          value={formData.contactEmail}
                          onChange={handleChange}
                          placeholder="talent@company.com"
                          className="w-full px-4 py-2.5 rounded-xl bg-app-surface2 border border-app-border text-app-text text-sm focus:outline-none focus:border-hru-coral transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-heading font-bold text-app-text mb-1">
                        Roles / Specializations Hiring For *
                      </label>
                      <input
                        type="text"
                        name="rolesHiring"
                        required
                        value={formData.rolesHiring}
                        onChange={handleChange}
                        placeholder="e.g., Autonomous Systems, Full Stack AI, Spatial UX"
                        className="w-full px-4 py-2.5 rounded-xl bg-app-surface2 border border-app-border text-app-text text-sm focus:outline-none focus:border-hru-coral transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-heading font-bold text-app-text mb-1">
                        Message / Timeline & CTC Bracket
                      </label>
                      <textarea
                        name="message"
                        rows="3"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Specify target batch, hiring timeline, or package details..."
                        className="w-full px-4 py-2.5 rounded-xl bg-app-surface2 border border-app-border text-app-text text-sm focus:outline-none focus:border-hru-coral transition-colors resize-none"
                      />
                    </div>

                    <div className="pt-2 flex items-center justify-end gap-3">
                      <button
                        type="button"
                        onClick={handleClose}
                        className="px-5 py-2.5 rounded-xl text-xs font-heading font-bold text-app-muted hover:text-app-text transition-colors"
                      >
                        Cancel
                      </button>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="px-6 py-2.5 rounded-xl font-heading font-bold text-xs bg-gradient-to-r from-hru-coral to-hru-gold text-[#0A0B1E] shadow-md hover:scale-105 transition-all flex items-center gap-2 disabled:opacity-50"
                      >
                        {isSubmitting ? (
                          <span>Dispatching...</span>
                        ) : (
                          <>
                            <Send className="w-3.5 h-3.5" />
                            <span>Submit Hiring Request</span>
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                </div>
              ) : (
                /* Celebratory Success State */
                <div className="py-8 text-center flex flex-col items-center">
                  <div className="w-16 h-16 rounded-3xl bg-hru-mint/20 text-hru-mint flex items-center justify-center mb-4 animate-bounce">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>

                  <span className="text-xs font-mono font-bold text-hru-mint uppercase tracking-wider">
                    REQUEST DISPATCHED SUCCESSFULLY
                  </span>
                  <h4 className="text-2xl font-black font-heading text-app-text mt-1">
                    Thank You, {formData.companyName || 'Partner'}!
                  </h4>
                  <p className="text-sm text-app-muted max-w-md mt-2 font-sans">
                    Our Corporate Placement cell has received your invitation. Our team will verify credentials and connect via <strong>{formData.contactEmail || 'your email'}</strong> within 24 business hours.
                  </p>

                  <button
                    onClick={handleClose}
                    className="mt-6 px-6 py-2.5 rounded-xl bg-app-surface2 border border-app-border font-heading font-bold text-xs text-app-text hover:bg-app-surface1 transition-colors"
                  >
                    Done & Close Window
                  </button>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}

export default HireFromHRUModal;
