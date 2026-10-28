import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, BookOpen, Building2, MapPin, ArrowRight, Sparkles } from 'lucide-react';
import { modalBackdrop, modalPanel } from '../../lib/motion';

export function SearchOverlay({ isOpen, onClose }) {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const searchableIndex = [
    { title: 'AI and Data Science', category: 'Department', path: '/departments/ai-data-science', icon: Building2 },
    { title: 'Computer Science & Engineering', category: 'Department', path: '/departments/computer-science', icon: Building2 },
    { title: 'Pharmaceutical Sciences', category: 'Department', path: '/departments/pharmacy', icon: Building2 },
    { title: 'Sports Science & Analytics', category: 'Department', path: '/departments/sports-science', icon: Building2 },
    { title: 'Design & Spatial Computing', category: 'Department', path: '/departments/design', icon: Building2 },
    { title: 'Architecture & Parametric Urbanism', category: 'Department', path: '/departments/architecture', icon: Building2 },
    { title: 'Business, Fintech & Venture Systems', category: 'Department', path: '/departments/business', icon: Building2 },
    { title: 'Media, Cinema & Sound Tech', category: 'Department', path: '/departments/media-film', icon: Building2 },
    { title: 'Synthetic Biology & Neurotech', category: 'Department', path: '/departments/biotechnology', icon: Building2 },
    
    { title: 'Autonomous AI & Swarm Dynamics (B.Sc / M.Tech)', category: 'Program', path: '/programs', icon: BookOpen },
    { title: 'Spatial Computing & XR Interfaces (B.Des)', category: 'Program', path: '/programs', icon: BookOpen },
    { title: 'Algorithmic Finance & Quantitative Trading (B.S/MBA)', category: 'Program', path: '/programs', icon: BookOpen },
    { title: 'Genomic Engineering & CRISPR Synthesis', category: 'Program', path: '/programs', icon: BookOpen },

    { title: 'Turing Infinite Library', category: 'Campus Facility', path: '/campus', icon: MapPin },
    { title: 'Quantum & GPU Supercomputing Bay', category: 'Campus Facility', path: '/campus', icon: MapPin },
    { title: 'Robotics & Drone FabLab', category: 'Campus Facility', path: '/campus', icon: MapPin },
    { title: 'Skyline Aeroponic Bio-Dome', category: 'Campus Facility', path: '/campus', icon: MapPin },
    
    { title: 'Fee & Merit Scholarships Calculator', category: 'Admissions', path: '/scholarships', icon: BookOpen },
    { title: 'Admissions Application Portal', category: 'Admissions', path: '/admissions', icon: BookOpen },
    { title: 'Navratri & Garba Raas Mahotsav', category: 'Festival', path: '/events/navratri-garba-raas', icon: Sparkles },
    { title: 'Diwali Deepotsav & Grand Mela', category: 'Festival', path: '/events/diwali-deepotsav', icon: Sparkles },
    { title: 'HackHRU 48h Deep-Tech Hackathon', category: 'Event', path: '/events/hackhru-global-hackathon', icon: Sparkles },
    { title: 'Campus Calendar & All 12-Month Fests', category: 'Events', path: '/events', icon: Sparkles },
    { title: 'Book a Guided Campus Tour', category: 'Contact', path: '/contact', icon: MapPin },
  ];

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        onClose();
      }
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const filtered = searchableIndex.filter((item) =>
    item.title.toLowerCase().includes(query.toLowerCase()) ||
    item.category.toLowerCase().includes(query.toLowerCase())
  );

  const handleSelect = (path) => {
    onClose();
    navigate(path);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          variants={modalBackdrop}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="fixed inset-0 z-[10000] bg-black/80 backdrop-blur-xl flex items-start justify-center pt-20 px-4 sm:px-6"
          onClick={onClose}
        >
          <motion.div
            variants={modalPanel}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-2xl rounded-3xl bg-[#12142B] border border-white/10 shadow-2xl overflow-hidden"
          >
            {/* Search Input Bar */}
            <div className="flex items-center gap-3 px-6 py-4 border-b border-white/10 bg-[#0A0B1E]">
              <Search className="w-5 h-5 text-hru-gold shrink-0" />
              <input
                type="text"
                autoFocus
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search departments, degree tracks, campus facilities (e.g. AI, Library, Fees)..."
                className="w-full bg-transparent text-white placeholder-[#A4A8C4] text-sm sm:text-base focus:outline-none"
              />
              <button
                type="button"
                onClick={onClose}
                className="p-1 rounded-lg hover:bg-white/10 text-white transition-colors"
                aria-label="Close search"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Results List */}
            <div className="max-h-[60vh] overflow-y-auto p-4 space-y-2">
              {filtered.length > 0 ? (
                filtered.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => handleSelect(item.path)}
                      className="w-full text-left p-3.5 rounded-2xl bg-white/5 hover:bg-hru-indigo/20 border border-transparent hover:border-hru-indigo/40 flex items-center justify-between group transition-all"
                    >
                      <div className="flex items-center gap-3.5">
                        <div className="w-10 h-10 rounded-xl bg-black/30 border border-white/10 flex items-center justify-center text-hru-gold shrink-0">
                          <Icon className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="font-heading font-bold text-sm text-white group-hover:text-hru-gold transition-colors">
                            {item.title}
                          </div>
                          <div className="text-xs font-mono text-[#A4A8C4]">
                            {item.category}
                          </div>
                        </div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-[#A4A8C4] group-hover:text-hru-gold group-hover:translate-x-1 transition-all" />
                    </button>
                  );
                })
              ) : (
                <div className="text-center py-12 text-[#A4A8C4] text-sm">
                  No results found for "{query}". Try searching "AI", "Design", or "Scholarships".
                </div>
              )}
            </div>

            {/* Quick Helper Footer */}
            <div className="px-6 py-3 border-t border-white/5 bg-[#0A0B1E] flex items-center justify-between text-[11px] font-mono text-[#A4A8C4]">
              <span>NAVIGATE WITH ARROWS</span>
              <span>ESC TO CLOSE</span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default SearchOverlay;
