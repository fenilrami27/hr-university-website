import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Mail, MessageSquare, Sparkles, CheckCircle2, Clock } from 'lucide-react';
import Button from '../components/ui/Button';

export function ContactPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    interest: 'Campus Walkthrough Tour',
    date: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      try {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#D4FF00', '#8B5CF6', '#FF3366'],
        });
      } catch {
        // Confetti optional
      }
    }, 500);
  };

  const campuses = [
    {
      city: 'San Francisco, CA',
      address: '742 Mission Street, Silicon Quarter',
      code: 'PACIFIC HUB // 01',
      status: 'Open 24/7 for Fellows',
    },
    {
      city: 'Tokyo, Japan',
      address: 'Shibuya Stream Tower, Floor 18',
      code: 'ASIA PACIFIC // 02',
      status: 'Open 24/7 for Fellows',
    },
    {
      city: 'Berlin, Germany',
      address: 'Torstraße 140, Mitte Creative Hub',
      code: 'EUROPE CENTRAL // 03',
      status: 'Open 24/7 for Fellows',
    },
  ];

  return (
    <div className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neon-lime/30 bg-neon-lime/10 text-neon-lime font-mono text-xs uppercase tracking-widest mb-4">
          <Sparkles className="w-3.5 h-3.5" />
          Global Concierge & Tour Booking
        </div>
        <h1 className="text-4xl sm:text-6xl font-black font-heading text-text-main tracking-tight leading-none mb-6">
          CONNECT WITH OUR <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-lime via-neon-violet to-neon-coral">
            ADMISSIONS SQUAD.
          </span>
        </h1>
        <p className="text-text-muted text-base sm:text-lg leading-relaxed">
          Book a 1-on-1 virtual advisory session, tour our living labs in person, or pitch our student venture seed partners.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Contact Form */}
        <div className="lg:col-span-7">
          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.div
                key="form"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="p-8 sm:p-10 rounded-3xl bg-white/80 dark:bg-[#10121A]/80 border border-black/10 dark:border-white/10 shadow-xl"
              >
                <h3 className="text-2xl font-bold font-heading text-text-main mb-6">
                  Schedule Session / Inquire
                </h3>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-mono uppercase text-text-muted mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="Ada Lovelace"
                        className="w-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-xl px-4 py-3 text-sm text-text-main focus:outline-none focus:border-neon-lime transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono uppercase text-text-muted mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="ada@computing.org"
                        className="w-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-xl px-4 py-3 text-sm text-text-main focus:outline-none focus:border-neon-lime transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-text-muted mb-2">
                      Topic of Interest *
                    </label>
                    <select
                      value={form.interest}
                      onChange={(e) => setForm({ ...form, interest: e.target.value })}
                      className="w-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-xl px-4 py-3 text-sm text-text-main focus:outline-none focus:border-neon-lime transition-colors"
                    >
                      <option value="Campus Walkthrough Tour" className="bg-background text-text-main">In-Person Campus Walkthrough</option>
                      <option value="Virtual Faculty Advisory" className="bg-background text-text-main">Virtual Faculty Advisory Session</option>
                      <option value="Student Venture Fund Pitch" className="bg-background text-text-main">Student Venture Seed Fund Query</option>
                      <option value="International Credit Transfer" className="bg-background text-text-main">International Credit Transfer & Visa</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-text-muted mb-2">
                      Brief Message or Questions
                    </label>
                    <textarea
                      rows="4"
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Tell us what you'd like to explore..."
                      className="w-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-xl px-4 py-3 text-sm text-text-main focus:outline-none focus:border-neon-lime transition-colors"
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="lime"
                    size="lg"
                    disabled={loading}
                    className="w-full justify-center"
                  >
                    {loading ? 'Reserving...' : 'Confirm Appointment'}
                  </Button>
                </form>
              </motion.div>
            ) : (
              <motion.div
                key="confirmed"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-10 rounded-3xl bg-white/90 dark:bg-[#10121A]/90 border-2 border-neon-lime text-center shadow-2xl"
              >
                <div className="w-16 h-16 rounded-2xl bg-neon-lime/20 text-neon-lime border border-neon-lime flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold font-heading text-text-main mb-2">
                  APPOINTMENT RESERVED!
                </h3>
                <p className="text-text-muted text-sm max-w-md mx-auto mb-6">
                  An advisor has sent confirmation details to <strong className="text-text-main">{form.email}</strong>. We can't wait to welcome you.
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setSubmitted(false)}
                >
                  Book Another Time
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Global Hubs Sidebar */}
        <div className="lg:col-span-5 space-y-6">
          <div className="p-8 rounded-3xl bg-white/70 dark:bg-[#10121A]/70 border border-black/10 dark:border-white/10 shadow-lg space-y-6">
            <h3 className="font-heading font-bold text-xl text-text-main">
              Global Metropolises
            </h3>

            <div className="space-y-4">
              {campuses.map((camp, i) => (
                <div key={i} className="p-4 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5 space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="font-heading font-bold text-sm text-text-main">
                      {camp.city}
                    </span>
                    <span className="text-[10px] font-mono text-neon-lime">
                      {camp.code}
                    </span>
                  </div>
                  <p className="text-xs text-text-muted">
                    {camp.address}
                  </p>
                  <p className="text-[11px] font-mono text-text-muted flex items-center gap-1.5 pt-1">
                    <Clock className="w-3 h-3 text-neon-lime" />
                    {camp.status}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-black/10 dark:border-white/10 text-xs font-mono text-text-muted space-y-2">
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-neon-violet" />
                <span>admissions@hr-university.edu</span>
              </div>
              <div className="flex items-center gap-2">
                <MessageSquare className="w-3.5 h-3.5 text-neon-lime" />
                <span>Discord: discord.gg/hr-university</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
