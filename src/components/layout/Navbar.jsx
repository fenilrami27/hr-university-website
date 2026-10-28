import React, { useState, useEffect, useRef } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Sun,
  Moon,
  Menu,
  X,
  Search,
  ChevronDown,
  ArrowUpRight,
  Cpu,
  Layers,
  HeartPulse,
  Activity,
  Palette,
  Building,
  Briefcase,
  Video,
  Dna,
} from 'lucide-react';
import Logo from '../ui/Logo';
import Button from '../ui/Button';

export function Navbar({ isDark, toggleTheme, onOpenSearch }) {
  const [visible, setVisible] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [academicsOpen, setAcademicsOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const lastScrollY = useRef(0);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Detect direction: hide on down, show on up
      if (currentScrollY > 120 && currentScrollY > lastScrollY.current) {
        setVisible(false); // scrolling down
        setAcademicsOpen(false);
      } else {
        setVisible(true); // scrolling up
      }

      setScrolled(currentScrollY > 20);
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  const [prevPath, setPrevPath] = useState(location.pathname);
  if (prevPath !== location.pathname) {
    setPrevPath(location.pathname);
    if (mobileMenuOpen) setMobileMenuOpen(false);
    if (academicsOpen) setAcademicsOpen(false);
  }

  const departmentsList = [
    { name: 'AI & Data Science', slug: 'ai-data-science', tint: '#7C7FFF', icon: Cpu, badge: '512-H100' },
    { name: 'Computer Science', slug: 'computer-science', tint: '#5B5BF0', icon: Layers, badge: 'Cyber Labs' },
    { name: 'Pharmaceutical Sciences', slug: 'pharmacy', tint: '#2DD4BF', icon: HeartPulse, badge: 'Clinical R&D' },
    { name: 'Sports Science & Analytics', slug: 'sports-science', tint: '#FF7A59', icon: Activity, badge: 'Olympic Spec' },
    { name: 'Design & Spatial Computing', slug: 'design', tint: '#F472B6', icon: Palette, badge: 'Vision OS' },
    { name: 'Architecture & Urbanism', slug: 'architecture', tint: '#38BDF8', icon: Building, badge: 'Parametric' },
    { name: 'Business & Venture Systems', slug: 'business', tint: '#FFC53D', icon: Briefcase, badge: '₹50 Cr Fund' },
    { name: 'Media & Film Production', slug: 'media-film', tint: '#A78BFA', icon: Video, badge: 'Dolby Atmos' },
    { name: 'Biotechnology & Genetics', slug: 'biotechnology', tint: '#4ADE80', icon: Dna, badge: 'BSL-2 Wet Lab' },
  ];

  return (
    <>
      <header
        className={`fixed top-8 left-0 right-0 z-50 transition-all duration-300 ${
          visible ? 'translate-y-0 opacity-100' : '-translate-y-24 opacity-0 pointer-events-none'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav
            className={`
              relative flex items-center justify-between px-4 sm:px-6 py-3 rounded-full
              transition-all duration-300
              ${
                scrolled
                  ? 'bg-[#12142B]/85 dark:bg-[#12142B]/85 light:bg-white/90 backdrop-blur-2xl border border-app-border shadow-2xl shadow-black/40'
                  : 'bg-[#12142B]/50 backdrop-blur-md border border-white/10'
              }
            `}
          >
            {/* Logo */}
            <Logo size="md" />

            {/* Desktop Navigation Links with Academics Mega-Menu */}
            <div className="hidden lg:flex items-center gap-1 xl:gap-2">
              <NavLink
                to="/"
                className={({ isActive }) => `
                  px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase transition-colors
                  ${isActive ? 'text-hru-gold font-bold bg-white/5' : 'text-app-muted hover:text-white'}
                `}
              >
                Home
              </NavLink>

              {/* Academics Mega-Menu Trigger */}
              <div
                className="relative"
                onMouseEnter={() => setAcademicsOpen(true)}
                onMouseLeave={() => setAcademicsOpen(false)}
              >
                <button
                  type="button"
                  className={`flex items-center gap-1 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase transition-colors ${
                    academicsOpen ? 'text-hru-gold bg-white/5' : 'text-app-muted hover:text-white'
                  }`}
                >
                  <span>Academics</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${academicsOpen ? 'rotate-180 text-hru-gold' : ''}`} />
                </button>

                {/* Academics Mega-Menu Dropdown Panel */}
                <AnimatePresence>
                  {academicsOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full -left-20 w-[640px] pt-3 z-50"
                    >
                      <div className="p-5 rounded-3xl bg-[#12142B]/95 backdrop-blur-2xl border border-white/15 shadow-2xl">
                        <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10">
                          <span className="font-mono text-xs uppercase tracking-widest text-[#A4A8C4]">
                            Departments & Degree Programs
                          </span>
                          <Link
                            to="/departments"
                            className="text-xs font-mono text-hru-gold hover:underline flex items-center gap-1"
                          >
                            All Departments <ArrowUpRight className="w-3 h-3" />
                          </Link>
                        </div>

                        <div className="grid grid-cols-3 gap-2.5">
                          {departmentsList.map((dept) => {
                            const Icon = dept.icon;
                            return (
                              <Link
                                key={dept.slug}
                                to={`/departments/${dept.slug}`}
                                className="p-2.5 rounded-2xl hover:bg-white/5 border border-transparent hover:border-white/10 transition-all flex flex-col justify-between group"
                              >
                                <div className="flex items-center gap-2 mb-1.5">
                                  <div
                                    className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0"
                                    style={{ backgroundColor: `${dept.tint}20`, color: dept.tint }}
                                  >
                                    <Icon className="w-3.5 h-3.5" />
                                  </div>
                                  <span
                                    className="text-[10px] font-mono px-1.5 py-0.5 rounded"
                                    style={{ color: dept.tint, backgroundColor: `${dept.tint}15` }}
                                  >
                                    {dept.badge}
                                  </span>
                                </div>
                                <span className="font-heading font-semibold text-xs text-white group-hover:text-hru-gold transition-colors">
                                  {dept.name}
                                </span>
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <NavLink
                to="/programs"
                className={({ isActive }) => `
                  px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase transition-colors
                  ${isActive ? 'text-hru-gold font-bold bg-white/5' : 'text-app-muted hover:text-white'}
                `}
              >
                Programs
              </NavLink>

              <NavLink
                to="/campus"
                className={({ isActive }) => `
                  px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase transition-colors
                  ${isActive ? 'text-hru-gold font-bold bg-white/5' : 'text-app-muted hover:text-white'}
                `}
              >
                Campus Life
              </NavLink>

              <NavLink
                to="/events"
                className={({ isActive }) => `
                  px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase transition-colors
                  ${isActive ? 'text-hru-gold font-bold bg-white/5' : 'text-app-muted hover:text-white'}
                `}
              >
                Events & Fests
              </NavLink>

              <NavLink
                to="/scholarships"
                className={({ isActive }) => `
                  px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase transition-colors
                  ${isActive ? 'text-hru-gold font-bold bg-white/5' : 'text-app-muted hover:text-white'}
                `}
              >
                Scholarships
              </NavLink>

              <NavLink
                to="/about"
                className={({ isActive }) => `
                  px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase transition-colors
                  ${isActive ? 'text-hru-gold font-bold bg-white/5' : 'text-app-muted hover:text-white'}
                `}
              >
                About
              </NavLink>
            </div>

            {/* Right Controls: Search + Dark Mode + Fast Apply */}
            <div className="flex items-center gap-2.5">
              {/* Search Trigger */}
              <button
                type="button"
                onClick={onOpenSearch}
                aria-label="Search campus"
                className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-[#A4A8C4] hover:text-white transition-colors text-xs font-mono"
              >
                <Search className="w-3.5 h-3.5 text-hru-gold" />
                <span className="hidden sm:inline">Search</span>
                <kbd className="hidden md:inline px-1.5 py-0.5 rounded bg-black/40 text-[10px] text-hru-gold">
                  ⌘K
                </kbd>
              </button>

              {/* Theme Toggle */}
              <button
                type="button"
                onClick={toggleTheme}
                aria-label="Toggle theme"
                className="w-9 h-9 rounded-full flex items-center justify-center border border-white/10 text-white hover:bg-white/10 transition-colors"
              >
                {isDark ? (
                  <Sun className="w-4 h-4 text-hru-gold" />
                ) : (
                  <Moon className="w-4 h-4 text-hru-indigo" />
                )}
              </button>

              {/* Primary Apply Button */}
              <div className="hidden sm:block">
                <Button
                  to="/admissions"
                  variant="gold"
                  size="sm"
                  magnetic
                  icon={<ArrowUpRight className="w-3.5 h-3.5" />}
                >
                  Apply Now
                </Button>
              </div>

              {/* Mobile Hamburger */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle mobile menu"
                className="lg:hidden w-9 h-9 rounded-full flex items-center justify-center border border-white/10 text-white hover:bg-white/10 transition-colors"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Full-Screen Mobile Menu with Staggered Links */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden bg-[#0A0B1E]/98 backdrop-blur-2xl pt-28 px-6 pb-8 flex flex-col justify-between overflow-y-auto"
          >
            <div className="space-y-4">
              <span className="font-mono text-xs uppercase tracking-widest text-hru-gold block mb-2">
                Campus Directory
              </span>

              {[
                { name: 'Home', path: '/' },
                { name: 'All Departments', path: '/departments' },
                { name: 'Degree Programs', path: '/programs' },
                { name: 'Events & Festivals', path: '/events' },
                { name: 'Campus Life & Living Labs', path: '/campus' },
                { name: 'Research & Innovation', path: '/research' },
                { name: 'Placements & Careers', path: '/placements' },
                { name: 'Scholarships & Calculator', path: '/scholarships' },
                { name: 'About HRU', path: '/about' },
                { name: 'Contact & Campus Tour', path: '/contact' },
              ].map((item, idx) => (
                <motion.div
                  key={item.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.04 }}
                >
                  <NavLink
                    to={item.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-2xl font-bold font-heading py-1 block text-white hover:text-hru-gold transition-colors"
                  >
                    {item.name}
                  </NavLink>
                </motion.div>
              ))}
            </div>

            <div className="pt-8 border-t border-white/10 space-y-4">
              <div className="flex items-center justify-between text-xs font-mono text-[#A4A8C4]">
                <span>COHORT 2026/27</span>
                <span className="text-hru-gold font-bold">MERIT SEED FUND OPEN</span>
              </div>
              <Button
                to="/admissions"
                variant="gold"
                size="lg"
                className="w-full justify-center"
                onClick={() => setMobileMenuOpen(false)}
                icon={<ArrowUpRight className="w-4 h-4" />}
              >
                Start Application
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
