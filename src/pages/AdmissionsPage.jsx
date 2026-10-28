import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import {
  Sparkles,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  UploadCloud,
  FileCheck,
  Clock,
  DollarSign,
  PhoneCall,
  Download,
  AlertCircle,
  HelpCircle,
  ShieldCheck,
  Check,
} from 'lucide-react';
import Button from '../components/ui/Button';
import SectionHeading from '../components/ui/SectionHeading';
import CountUp from '../components/ui/CountUp';
import mediaRegistry from '../data/media';

export function AdmissionsPage() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [draftToast, setDraftToast] = useState(false);
  const [brochureModal, setBrochureModal] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(100);

  const [formData, setFormData] = useState({
    // Step 1: Personal
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    country: 'United States',
    // Step 2: Academic
    currentSchool: '',
    gpaOrGrade: '',
    graduationYear: '2026',
    primarySkill: 'Full-Stack Development',
    // Step 3: Program
    selectedProgram: 'Autonomous AI & Intelligent Systems',
    studyLevel: 'Undergraduate (UG)',
    // Step 4: Documents
    portfolioUrl: '',
    hasUploadedResume: true,
    essayPitch: '',
  });

  const programsChoice = [
    {
      title: 'Autonomous AI & Intelligent Systems',
      level: 'UG',
      tint: '#7C7FFF',
      photo: mediaRegistry.departments.ai.src,
      tag: '512x H100 Nodes',
    },
    {
      title: 'Spatial Computing & XR Interfaces',
      level: 'UG',
      tint: '#F472B6',
      photo: mediaRegistry.departments.design.src,
      tag: 'VisionOS Studio',
    },
    {
      title: 'Algorithmic Finance & Quantitative Trading',
      level: 'PG',
      tint: '#FFC53D',
      photo: mediaRegistry.departments.business.src,
      tag: '₹1.5 Cr Seed Ticket',
    },
    {
      title: 'Synthetic Biology & Neurotech',
      level: 'PhD',
      tint: '#4ADE80',
      photo: mediaRegistry.departments.biotech.src,
      tag: 'Fully Funded',
    },
  ];

  const triggerDraftSave = () => {
    setDraftToast(true);
    setTimeout(() => setDraftToast(false), 2500);
  };

  const handleNext = (e) => {
    if (e) e.preventDefault();
    triggerDraftSave();
    setStep((prev) => Math.min(prev + 1, 5));
  };

  const handleBack = () => {
    setStep((prev) => Math.max(prev - 1, 1));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      try {
        confetti({
          particleCount: 140,
          spread: 90,
          origin: { y: 0.55 },
          colors: ['#FFC53D', '#5B5BF0', '#8B5CF6', '#22D3EE'],
        });
      } catch (err) {}
    }, 700);
  };

  return (
    <div className="pt-28 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Toast Notification */}
      <AnimatePresence>
        {draftToast && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-24 right-6 z-[9999] px-4 py-2.5 rounded-2xl bg-[#12142B] border border-hru-gold/40 text-hru-gold text-xs font-mono shadow-2xl flex items-center gap-2"
          >
            <Check className="w-4 h-4" />
            <span>Progress automatically saved to local draft</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-hru-gold/30 bg-hru-gold/10 text-hru-gold font-mono text-xs uppercase tracking-widest mb-4">
          <Sparkles className="w-3.5 h-3.5" />
          Fall 2026 Admissions Protocol
        </div>
        <h1 className="text-4xl sm:text-6xl font-black font-heading text-app-text tracking-tight leading-none mb-4">
          LAUNCH YOUR <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-hru-indigo via-[#8B5CF6] to-hru-gold">
            CANDIDACY.
          </span>
        </h1>
        <p className="text-app-muted text-base sm:text-lg">
          Zero standardized test transcripts. Submit your raw builder signals, prototypes, or research vision.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Main Application Flow Area */}
        <div className="lg:col-span-8">
          {!submitted ? (
            <div className="rounded-[24px] p-6 sm:p-10 bg-app-surface1 border border-app-border shadow-2xl relative overflow-hidden">
              {/* Animated Progress Stepper */}
              <div className="mb-10">
                <div className="flex items-center justify-between mb-4">
                  {['Personal', 'Academic', 'Program', 'Documents', 'Review'].map((label, i) => {
                    const stepNum = i + 1;
                    const isActive = step === stepNum;
                    const isDone = step > stepNum;

                    return (
                      <div key={label} className="flex flex-col items-center">
                        <div
                          className={`w-9 h-9 rounded-full flex items-center justify-center font-mono text-xs font-bold transition-all duration-300 ${
                            isDone
                              ? 'bg-hru-gold text-hru-midnight shadow-gold-glow'
                              : isActive
                              ? 'bg-hru-indigo text-white border-2 border-hru-gold'
                              : 'bg-white/5 text-app-muted border border-white/10'
                          }`}
                        >
                          {isDone ? <Check className="w-4 h-4" /> : stepNum}
                        </div>
                        <span className="hidden sm:block text-[11px] font-mono mt-2 text-app-muted">
                          {label}
                        </span>
                      </div>
                    );
                  })}
                </div>
                {/* Stepper Progress Bar */}
                <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-hru-indigo to-hru-gold"
                    animate={{ width: `${((step - 1) / 4) * 100}%` }}
                    transition={{ duration: 0.35, ease: 'easeInOut' }}
                  />
                </div>
              </div>

              {/* Multi-Step Form */}
              <form onSubmit={step === 5 ? handleSubmit : handleNext}>
                <AnimatePresence mode="wait">
                  {/* STEP 1: Personal */}
                  {step === 1 && (
                    <motion.div
                      key="step1"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-6"
                    >
                      <h3 className="text-xl font-bold font-heading text-app-text">
                        Step 1: Personal Identity
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-xs font-mono uppercase text-app-muted mb-2">First Name *</label>
                          <input
                            type="text"
                            required
                            value={formData.firstName}
                            onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                            placeholder="Ada"
                            className="w-full bg-white/5 border border-app-border rounded-xl px-4 py-3 text-sm text-app-text focus:outline-none focus:border-hru-gold"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-mono uppercase text-app-muted mb-2">Last Name *</label>
                          <input
                            type="text"
                            required
                            value={formData.lastName}
                            onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                            placeholder="Lovelace"
                            className="w-full bg-white/5 border border-app-border rounded-xl px-4 py-3 text-sm text-app-text focus:outline-none focus:border-hru-gold"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-xs font-mono uppercase text-app-muted mb-2">Email Address *</label>
                          <input
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            placeholder="ada@computing.org"
                            className="w-full bg-white/5 border border-app-border rounded-xl px-4 py-3 text-sm text-app-text focus:outline-none focus:border-hru-gold"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-mono uppercase text-app-muted mb-2">Phone Number *</label>
                          <input
                            type="tel"
                            required
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            placeholder="+1 (555) 019-2834"
                            className="w-full bg-white/5 border border-app-border rounded-xl px-4 py-3 text-sm text-app-text focus:outline-none focus:border-hru-gold"
                          />
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* STEP 2: Academic */}
                  {step === 2 && (
                    <motion.div
                      key="step2"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-6"
                    >
                      <h3 className="text-xl font-bold font-heading text-app-text">
                        Step 2: Educational Context
                      </h3>
                      <div>
                        <label className="block text-xs font-mono uppercase text-app-muted mb-2">Current or Most Recent Institution *</label>
                        <input
                          type="text"
                          required
                          value={formData.currentSchool}
                          onChange={(e) => setFormData({ ...formData, currentSchool: e.target.value })}
                          placeholder="e.g. Polytechnic High / State University"
                          className="w-full bg-white/5 border border-app-border rounded-xl px-4 py-3 text-sm text-app-text focus:outline-none focus:border-hru-gold"
                        />
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-xs font-mono uppercase text-app-muted mb-2">Graduation / Passout Year</label>
                          <select
                            value={formData.graduationYear}
                            onChange={(e) => setFormData({ ...formData, graduationYear: e.target.value })}
                            className="w-full bg-[#12142B] border border-app-border rounded-xl px-4 py-3 text-sm text-app-text focus:outline-none focus:border-hru-gold"
                          >
                            <option value="2026">2026</option>
                            <option value="2025">2025</option>
                            <option value="2024">2024</option>
                            <option value="2023">2023 or Earlier</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-xs font-mono uppercase text-app-muted mb-2">Primary Core Craft</label>
                          <select
                            value={formData.primarySkill}
                            onChange={(e) => setFormData({ ...formData, primarySkill: e.target.value })}
                            className="w-full bg-[#12142B] border border-app-border rounded-xl px-4 py-3 text-sm text-app-text focus:outline-none focus:border-hru-gold"
                          >
                            <option value="Full-Stack & Systems">Full-Stack & Systems Engineering</option>
                            <option value="Neural AI & ML">Neural AI & Machine Learning</option>
                            <option value="Spatial & 3D Design">Spatial, XR & 3D Worldbuilding</option>
                            <option value="Synthetic Bio & Chemistry">Synthetic Biology & Chemistry</option>
                            <option value="Fintech & Quantitative">Fintech & Quantitative Markets</option>
                          </select>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* STEP 3: Program Choice (Selectable cards with department tint) */}
                  {step === 3 && (
                    <motion.div
                      key="step3"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-6"
                    >
                      <h3 className="text-xl font-bold font-heading text-app-text">
                        Step 3: Select Degree Track
                      </h3>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {programsChoice.map((p) => {
                          const isSelected = formData.selectedProgram === p.title;

                          return (
                            <div
                              key={p.title}
                              onClick={() => setFormData({ ...formData, selectedProgram: p.title })}
                              className={`p-4 rounded-2xl border cursor-pointer transition-all duration-300 relative overflow-hidden group ${
                                isSelected
                                  ? 'border-hru-gold bg-[#1B1E3D] shadow-gold-glow'
                                  : 'border-app-border bg-white/5 hover:border-white/20'
                              }`}
                            >
                              <div className="aspect-[16/9] rounded-xl overflow-hidden mb-3 relative">
                                <img src={p.photo} alt={p.title} className="w-full h-full object-cover" />
                                <span
                                  className="absolute top-2 left-2 text-[10px] font-mono px-2 py-0.5 rounded-full"
                                  style={{ backgroundColor: `${p.tint}30`, color: p.tint }}
                                >
                                  {p.tag}
                                </span>
                              </div>

                              <div className="flex items-center justify-between">
                                <h4 className="font-heading font-bold text-sm text-app-text">
                                  {p.title}
                                </h4>
                                <div
                                  className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 ${
                                    isSelected
                                      ? 'border-hru-gold bg-hru-gold text-hru-midnight'
                                      : 'border-app-border'
                                  }`}
                                >
                                  {isSelected && <Check className="w-3.5 h-3.5" />}
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}

                  {/* STEP 4: Documents (Drag-and-drop upload UI) */}
                  {step === 4 && (
                    <motion.div
                      key="step4"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-6"
                    >
                      <h3 className="text-xl font-bold font-heading text-app-text">
                        Step 4: Output Signals & Portfolio
                      </h3>

                      <div>
                        <label className="block text-xs font-mono uppercase text-app-muted mb-2">
                          Signal URL (GitHub, Figma, Substack, YouTube, Personal Domain) *
                        </label>
                        <input
                          type="url"
                          required
                          value={formData.portfolioUrl}
                          onChange={(e) => setFormData({ ...formData, portfolioUrl: e.target.value })}
                          placeholder="https://github.com/your-username or https://yourportfolio.dev"
                          className="w-full bg-white/5 border border-app-border rounded-xl px-4 py-3 text-sm text-app-text focus:outline-none focus:border-hru-gold"
                        />
                      </div>

                      {/* Drag & Drop UI Box */}
                      <div>
                        <label className="block text-xs font-mono uppercase text-app-muted mb-2">
                          Resume or Project Deck (PDF, Max 25MB)
                        </label>
                        <div className="p-8 border-2 border-dashed border-app-border hover:border-hru-gold/60 rounded-2xl text-center bg-white/5 cursor-pointer transition-colors">
                          <UploadCloud className="w-10 h-10 text-hru-gold mx-auto mb-2" />
                          <div className="text-sm font-semibold text-app-text">
                            Drag & drop portfolio PDF here, or browse files
                          </div>
                          <div className="text-xs font-mono text-app-muted mt-1">
                            Simulated verified client upload
                          </div>

                          <div className="mt-4 max-w-xs mx-auto p-2.5 rounded-xl bg-white/5 border border-white/10 flex items-center gap-3 text-left">
                            <FileCheck className="w-6 h-6 text-hru-gold shrink-0" />
                            <div className="flex-1 overflow-hidden">
                              <div className="text-xs font-mono text-app-text truncate">builder_portfolio_v3.pdf</div>
                              <div className="text-[10px] font-mono text-hru-gold">2.4 MB • READY</div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-mono uppercase text-app-muted mb-2">
                          Speculative Vision: What will you invent at HRU?
                        </label>
                        <textarea
                          rows="3"
                          value={formData.essayPitch}
                          onChange={(e) => setFormData({ ...formData, essayPitch: e.target.value })}
                          placeholder="Describe the technical architecture or venture thesis you want to build..."
                          className="w-full bg-white/5 border border-app-border rounded-xl px-4 py-3 text-sm text-app-text focus:outline-none focus:border-hru-gold"
                        />
                      </div>
                    </motion.div>
                  )}

                  {/* STEP 5: Review & Submit */}
                  {step === 5 && (
                    <motion.div
                      key="step5"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-6"
                    >
                      <h3 className="text-xl font-bold font-heading text-app-text">
                        Step 5: Review & Transmit Signal
                      </h3>

                      <div className="p-5 rounded-2xl bg-white/5 border border-app-border space-y-4 text-xs font-mono">
                        <div className="flex justify-between border-b border-app-border pb-2">
                          <span className="text-app-muted">Applicant:</span>
                          <span className="text-app-text font-bold">{formData.firstName || 'Ada'} {formData.lastName || 'Lovelace'}</span>
                        </div>
                        <div className="flex justify-between border-b border-app-border pb-2">
                          <span className="text-app-muted">Email:</span>
                          <span className="text-app-text font-bold">{formData.email || 'ada@computing.org'}</span>
                        </div>
                        <div className="flex justify-between border-b border-app-border pb-2">
                          <span className="text-app-muted">Degree Track:</span>
                          <span className="text-hru-gold font-bold">{formData.selectedProgram}</span>
                        </div>
                        <div className="flex justify-between border-b border-app-border pb-2">
                          <span className="text-app-muted">Signal Link:</span>
                          <span className="text-app-text font-bold truncate max-w-[200px]">{formData.portfolioUrl || 'https://github.com/lovelace'}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-app-muted">Merit Fellowship Eligibility:</span>
                          <span className="text-hru-gold font-bold">AUTOMATICALLY QUEUED</span>
                        </div>
                      </div>

                      <div className="p-4 rounded-xl bg-hru-gold/10 border border-hru-gold/30 text-xs text-app-text flex items-start gap-3">
                        <ShieldCheck className="w-5 h-5 text-hru-gold shrink-0 mt-0.5" />
                        <div>
                          By submitting, your signal will be queued for the 48-Hour Asynchronous Prompt Challenge. No application fees required.
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Stepper Navigation Buttons */}
                <div className="mt-10 pt-6 border-t border-app-border flex items-center justify-between">
                  {step > 1 ? (
                    <button
                      type="button"
                      onClick={handleBack}
                      className="flex items-center gap-1.5 px-4 py-2 rounded-full border border-app-border text-xs font-mono text-app-muted hover:text-white"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      <span>Back</span>
                    </button>
                  ) : <div />}

                  <Button
                    type="submit"
                    variant="gold"
                    size="md"
                    disabled={loading}
                    icon={<ArrowRight className="w-4 h-4" />}
                  >
                    {step === 5
                      ? loading
                        ? 'Transmitting Signal...'
                        : 'Submit Application'
                      : 'Continue'}
                  </Button>
                </div>
              </form>
            </div>
          ) : (
            /* Celebratory Success State */
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="rounded-[24px] p-8 sm:p-14 bg-app-surface1 border-2 border-hru-gold text-center shadow-2xl relative overflow-hidden"
            >
              <div className="w-20 h-20 rounded-3xl bg-hru-gold/20 border border-hru-gold text-hru-gold flex items-center justify-center mx-auto mb-6 shadow-gold-glow animate-bounce">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <span className="font-mono text-xs uppercase px-3 py-1 rounded-full bg-hru-gold/15 text-hru-gold border border-hru-gold/30 inline-block mb-4">
                Application Logged // Candidate #HRU-2026-X892
              </span>

              <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-app-text mb-4">
                APPLICATION TRANSMITTED!
              </h2>

              <p className="text-app-muted max-w-lg mx-auto text-base leading-relaxed mb-8">
                Welcome to the pipeline, <strong className="text-app-text">{formData.firstName || 'Builder'}</strong>. The Faculty Committee has verified your portfolio signal. Check your inbox for your 48-Hour Challenge prompt link.
              </p>

              {/* What Happens Next Timeline */}
              <div className="max-w-md mx-auto p-5 rounded-2xl bg-white/5 border border-app-border text-left space-y-3 mb-8">
                <div className="text-xs font-mono uppercase text-hru-gold font-bold">
                  What Happens Next:
                </div>
                <div className="text-xs text-app-muted flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-hru-gold" />
                  <span>Prompt Challenge delivered to inbox in 24 hours.</span>
                </div>
                <div className="text-xs text-app-muted flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-hru-gold" />
                  <span>30-minute peer dialogue & culture jam.</span>
                </div>
                <div className="text-xs text-app-muted flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-hru-gold" />
                  <span>Guaranteed hardware kit allocation on acceptance.</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button onClick={() => setSubmitted(false)} variant="outline" size="sm">
                  Edit Application
                </Button>
                <Button to="/programs" variant="gold" size="sm">
                  Browse Campus Studios
                </Button>
              </div>
            </motion.div>
          )}
        </div>

        {/* Sticky Side Panel: Deadline, Fees, Counselor CTA, Brochure */}
        <div className="lg:col-span-4 sticky top-28 space-y-6">
          <div className="p-6 rounded-[24px] bg-app-surface1 border border-app-border shadow-xl space-y-5">
            <div>
              <span className="font-mono text-[10px] uppercase tracking-widest text-hru-gold">
                COHORT DEADLINE
              </span>
              <div className="flex items-center gap-2 mt-1">
                <Clock className="w-4 h-4 text-hru-gold" />
                <h4 className="font-heading font-bold text-base text-app-text">
                  Round 01 Closes in 18 Days
                </h4>
              </div>
            </div>

            <div className="pt-4 border-t border-app-border space-y-2">
              <span className="font-mono text-[10px] uppercase tracking-widest text-app-muted">
                TUITION & FELLOWSHIPS
              </span>
              <div className="flex justify-between items-baseline">
                <span className="text-xs text-app-muted">Standard Studio Fee:</span>
                <span className="font-mono font-bold text-sm text-app-text">₹1,50,000 / sem</span>
              </div>
              <div className="flex justify-between items-baseline">
                <span className="text-xs text-app-muted">Merit Grants:</span>
                <span className="font-mono font-bold text-xs text-hru-gold">25% - 100% Covered</span>
              </div>
              <div className="flex justify-between items-baseline">
                <span className="text-xs text-app-muted">Hardware Kit:</span>
                <span className="font-mono font-bold text-xs text-semantic-success">Included Free</span>
              </div>
            </div>

            <div className="pt-4 border-t border-app-border space-y-3">
              <Button
                variant="gold"
                size="sm"
                className="w-full justify-center"
                onClick={() => setBrochureModal(true)}
                icon={<Download className="w-3.5 h-3.5" />}
              >
                Download 2026 Prospectus
              </Button>

              <button
                type="button"
                onClick={() => alert('An admissions advisor will connect with you via WhatsApp/Email within 1 business day.')}
                className="w-full py-2.5 rounded-full border border-app-border hover:border-hru-gold text-xs font-mono text-app-text hover:text-hru-gold flex items-center justify-center gap-1.5 transition-colors"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                <span>Request Counselor Callback</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Brochure Modal (UI only) */}
      <AnimatePresence>
        {brochureModal && (
          <div
            className="fixed inset-0 z-[10000] bg-black/80 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setBrochureModal(false)}
          >
            <div
              className="p-8 rounded-3xl bg-[#12142B] border border-hru-gold max-w-md w-full text-center space-y-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="w-12 h-12 rounded-2xl bg-hru-gold/20 text-hru-gold flex items-center justify-center mx-auto">
                <Download className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-bold text-xl text-white">
                HRU 2026 Academic Prospectus
              </h3>
              <p className="text-xs text-[#A4A8C4] leading-relaxed">
                Contains complete curriculum blueprints, faculty bios, hardware specifications, and housing pricing.
              </p>
              <Button
                variant="gold"
                size="sm"
                className="w-full justify-center"
                onClick={() => {
                  alert('Prospectus download started.');
                  setBrochureModal(false);
                }}
              >
                Download PDF (18 MB)
              </Button>
            </div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default AdmissionsPage;
