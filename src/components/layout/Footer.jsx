import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight, CheckCircle2, Sparkles, Send, ArrowUp, ShieldCheck, Heart } from 'lucide-react';
import Button from '../ui/Button';

export function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setEmail('');
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const marqueeChips = [
    { text: 'BUILD IN PUBLIC', color: 'bg-[#FF7A59]/20 text-[#FF7A59] border-[#FF7A59]/40' },
    { text: 'NO LEGACY EXAMS', color: 'bg-[#FFC53D]/20 text-[#FFC53D] border-[#FFC53D]/40' },
    { text: '512x H100 NODES', color: 'bg-[#22D3EE]/20 text-[#22D3EE] border-[#22D3EE]/40' },
    { text: '₹50 CR VENTURE FUND', color: 'bg-[#2DD4BF]/20 text-[#2DD4BF] border-[#2DD4BF]/40' },
    { text: 'AHMEDABAD • BENGALURU • TOKYO', color: 'bg-[#F472B6]/20 text-[#F472B6] border-[#F472B6]/40' },
    { text: 'CLASS OF 2026/27 LIVE', color: 'bg-[#C6FF3D]/20 text-[#C6FF3D] border-[#C6FF3D]/40' },
    { text: '100% STUDIO OUTPUT', color: 'bg-[#A78BFA]/20 text-[#A78BFA] border-[#A78BFA]/40' },
  ];

  return (
    <footer className="relative overflow-hidden bg-[#05060E] text-white pt-16 pb-12 border-t border-white/10">
      {/* Background Multi-Color Pop Glow Blobs */}
      <div className="absolute top-0 left-1/4 -translate-x-1/2 w-[600px] h-[350px] bg-[#5B5BF0]/20 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute top-20 right-10 w-[550px] h-[350px] bg-[#FF7A59]/15 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-[#2DD4BF]/15 blur-[150px] rounded-full pointer-events-none" />

      {/* Scrolling Marquee Strip */}
      <div className="w-full overflow-hidden border-y border-white/10 bg-white/[0.02] py-3.5 mb-16 backdrop-blur-md">
        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          className="inline-flex gap-4 whitespace-nowrap"
        >
          {[...marqueeChips, ...marqueeChips].map((chip, idx) => (
            <span
              key={idx}
              className={`inline-flex items-center gap-2 px-3.5 py-1 rounded-full border text-xs font-mono font-bold uppercase tracking-wider ${chip.color}`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-current" />
              {chip.text}
            </span>
          ))}
        </motion.div>
      </div>

      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Giant Headline Call To Action */}
        <div className="pb-16 border-b border-white/10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#FFC53D]/40 bg-[#FFC53D]/15 text-[#FFC53D] text-xs font-mono font-bold uppercase tracking-widest mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            Admissions Round 01 Closing Soon // Class of 2026/27
          </div>

          <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black font-heading tracking-tight leading-[0.92]">
            READY TO SHAPE <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C6FF3D] via-[#22D3EE] via-[#A78BFA] to-[#FF7A59]">
              THE NEXT WAVE?
            </span>
          </h2>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button
              to="/admissions"
              variant="gold"
              size="lg"
              magnetic
              icon={<ArrowUpRight className="w-5 h-5" />}
            >
              Start Your Application
            </Button>
            <Button
              to="/events"
              variant="glass"
              size="lg"
            >
              Explore Campus Festivals & Events
            </Button>
            <Button
              to="/contact"
              variant="glass"
              size="lg"
            >
              Book a Campus Tour
            </Button>
          </div>
        </div>

        {/* 4-Column Grid: Brand Info, Links, Faculties, Newsletter */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 py-16 border-b border-white/10">
          {/* Brand Info with Huge Wordmark Badge */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-[#5B5BF0] via-[#22D3EE] to-[#FFC53D] text-[#0A0B1E] font-black font-heading flex items-center justify-center text-lg shadow-lg">
                HR
              </div>
              <div>
                <span className="font-heading font-black text-xl tracking-tight text-white block">
                  HR UNIVERSITY
                </span>
                <span className="font-mono text-[10px] text-[#FFC53D] tracking-widest uppercase">
                  Studio for Future Founders
                </span>
              </div>
            </div>

            <p className="text-[#A4A8C4] text-sm leading-relaxed max-w-sm">
              The borderless, venture-backed university engineered for builders, designers, hackers, and creators. No legacy exams. 100% production studio output.
            </p>

            <div className="flex flex-wrap items-center gap-2 pt-2">
              {[
                { name: 'Twitter / X', url: 'https://twitter.com' },
                { name: 'GitHub', url: 'https://github.com' },
                { name: 'Discord', url: 'https://discord.com' },
                { name: 'YouTube', url: 'https://youtube.com' },
                { name: 'LinkedIn', url: 'https://linkedin.com' },
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs font-mono text-[#A4A8C4] hover:text-[#FFC53D] transition-colors border border-white/10 px-2.5 py-1 rounded-md hover:border-[#FFC53D]/40 bg-white/[0.02]"
                >
                  {social.name}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-mono text-xs uppercase tracking-widest text-[#22D3EE] font-bold">
              Campus Nav
            </h4>
            <ul className="space-y-2 text-sm">
              {[
                { name: 'Home', path: '/' },
                { name: 'Departments', path: '/departments' },
                { name: 'Programs & Degrees', path: '/programs' },
                { name: 'Events & Festivals', path: '/events' },
                { name: 'Campus Life', path: '/campus' },
                { name: 'Research Hub', path: '/research' },
                { name: 'Placements & Careers', path: '/placements' },
                { name: 'Scholarships & Grants', path: '/scholarships' },
                { name: 'Admissions 2026/27', path: '/admissions' },
                { name: 'About University', path: '/about' },
                { name: 'Contact & Visits', path: '/contact' },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="text-[#A4A8C4] hover:text-[#FFC53D] transition-colors block py-0.5"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Faculties & Studios */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-mono text-xs uppercase tracking-widest text-[#2DD4BF] font-bold">
              Faculties & Labs
            </h4>
            <ul className="space-y-2 text-sm text-[#A4A8C4]">
              <li className="hover:text-white transition-colors cursor-pointer">
                Autonomous AI & LLM Reasoning
              </li>
              <li className="hover:text-white transition-colors cursor-pointer">
                High-Performance Systems & Networks
              </li>
              <li className="hover:text-white transition-colors cursor-pointer">
                Paramedical & Clinical Therapeutics
              </li>
              <li className="hover:text-white transition-colors cursor-pointer">
                Olympic Sports Biomechanics & Telemetry
              </li>
              <li className="hover:text-white transition-colors cursor-pointer">
                Spatial Computing & VisionOS Studio
              </li>
              <li className="hover:text-white transition-colors cursor-pointer">
                Parametric Architecture & Fabrication
              </li>
              <li className="hover:text-white transition-colors cursor-pointer">
                Algorithmic Finance & Seed Venture Fund
              </li>
              <li className="hover:text-white transition-colors cursor-pointer">
                Virtual Volume Cinematography & Atmos
              </li>
              <li className="hover:text-white transition-colors cursor-pointer">
                Synthetic Biology & Bio-Incubator
              </li>
            </ul>
          </div>

          {/* Newsletter Dispatch */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-mono text-xs uppercase tracking-widest text-[#F472B6] font-bold">
              Weekly Research Dispatch
            </h4>
            <p className="text-[#A4A8C4] text-xs leading-relaxed">
              Join 45,000+ engineers, founders, and designers receiving our verified studio curriculum drops, hackathon invites, and festival notices.
            </p>

            {subscribed ? (
              <div className="p-3.5 rounded-2xl bg-[#2DD4BF]/15 border border-[#2DD4BF]/40 flex items-center gap-2.5 text-[#2DD4BF] text-xs font-semibold">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>You're in! Check your inbox for Dispatch #01.</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex items-center gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@build.io"
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-[#A4A8C4] focus:outline-none focus:border-[#FFC53D] transition-colors"
                />
                <button
                  type="submit"
                  aria-label="Subscribe"
                  className="p-2.5 bg-gradient-to-r from-[#FFC53D] to-[#FF7A59] text-[#0A0B1E] rounded-xl hover:opacity-90 transition-opacity shrink-0 font-bold"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}

            <div className="pt-3">
              <span className="inline-flex items-center gap-1.5 text-[11px] font-mono text-[#A4A8C4]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#2DD4BF]" />
                Zero Spam • Instant One-Click Unsubscribe
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright, System Cluster & Back To Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-[#A4A8C4] gap-4">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} HR UNIVERSITY. ALL RIGHTS RESERVED.</span>
          </div>

          <div className="flex flex-wrap items-center gap-6">
            <Link to="/portal" className="text-[#FFC53D] hover:underline font-semibold">
              Student / Alumni Portal
            </Link>
            <span className="flex items-center gap-1.5 text-[#2DD4BF]">
              <span className="w-2 h-2 rounded-full bg-[#2DD4BF] animate-pulse" />
              SYSTEM CLUSTER: NOMINAL (99.98%)
            </span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/15 bg-white/5 hover:bg-white/10 text-white transition-colors cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 text-[#FFC53D]" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
