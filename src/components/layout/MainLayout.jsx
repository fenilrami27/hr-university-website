import React, { useState, useEffect } from 'react';
import { Outlet, useLocation, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import AnnouncementBar from './AnnouncementBar';
import Navbar from './Navbar';
import Footer from './Footer';
import CustomCursor from '../ui/CustomCursor';
import SearchOverlay from '../ui/SearchOverlay';
import AskHRUWidget from '../ui/AskHRUWidget';
import BackToTop from '../ui/BackToTop';
import ErrorBoundary from '../ui/ErrorBoundary';
import { useDarkMode } from '../../hooks/useDarkMode';
import { useLenis } from '../../hooks/useLenis';

export function MainLayout() {
  const { isDark, toggleTheme } = useDarkMode();
  const [searchOpen, setSearchOpen] = useState(false);
  const location = useLocation();

  // Initialize Lenis smooth scroll
  useLenis();

  // Scroll to top on route change
  useEffect(() => {
    try {
      window.scrollTo(0, 0);
    } catch {
      // ignore
    }
  }, [location.pathname]);

  // Global Ctrl+K / Cmd+K listener
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setSearchOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col bg-app text-app-text transition-colors duration-300 page-wrapper overflow-x-clip">
      {/* Film Grain Subtle Noise Texture */}
      <div className="film-grain" />

      {/* Desktop Custom Cursor */}
      <ErrorBoundary name="Custom Cursor" fallback={null}>
        <CustomCursor />
      </ErrorBoundary>

      {/* Global Search Overlay (Ctrl+K) */}
      <ErrorBoundary name="Search Overlay" fallback={null}>
        <SearchOverlay isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
      </ErrorBoundary>

      {/* Announcement Bar */}
      <ErrorBoundary name="Announcement Bar" fallback={null}>
        <AnnouncementBar />
      </ErrorBoundary>

      {/* Floating Hide/Show Glass Navbar */}
      <ErrorBoundary name="Navigation Bar">
        <Navbar
          isDark={isDark}
          toggleTheme={toggleTheme}
          onOpenSearch={() => setSearchOpen(true)}
        />
      </ErrorBoundary>

      {/* Main Routed Page Content */}
      <main className="flex-grow w-full overflow-x-clip">
        <ErrorBoundary name="Page Route Content">
          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              <Outlet />
            </motion.div>
          </AnimatePresence>
        </ErrorBoundary>
      </main>

      {/* Floating Bottom Left Back To Top */}
      <ErrorBoundary name="Back To Top" fallback={null}>
        <BackToTop />
      </ErrorBoundary>

      {/* Floating "Ask HRU" Chat Widget */}
      <ErrorBoundary name="Ask HRU Chat Widget" fallback={null}>
        <AskHRUWidget />
      </ErrorBoundary>

      {/* Floating Quick Apply Mobile Pill */}
      <div className="sm:hidden fixed bottom-6 left-6 z-[9980]">
        <Link
          to="/admissions"
          className="flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-hru-gold text-hru-midnight font-bold text-xs shadow-gold-glow active:scale-95 transition-all"
        >
          <span>Apply Now</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </Link>
      </div>

      {/* Giant Footer */}
      <ErrorBoundary name="Footer">
        <Footer />
      </ErrorBoundary>
    </div>
  );
}

export default MainLayout;
