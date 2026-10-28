import React from 'react';
import HeroSection from '../sections/HeroSection';
import PathSelectorSection from '../sections/PathSelectorSection';
import Marquee from '../components/ui/Marquee';
import StatsSection from '../sections/StatsSection';
import ChancellorSection from '../sections/ChancellorSection';
import DepartmentsSection from '../sections/DepartmentsSection';
import ProgramsSection from '../sections/ProgramsSection';
import WhyHRUSection from '../sections/WhyHRUSection';
import CampusLifeSection from '../sections/CampusLifeSection';
import ResearchSection from '../sections/ResearchSection';
import PlacementsSection from '../sections/PlacementsSection';
import StudentStoriesSection from '../sections/StudentStoriesSection';
import GlobalSection from '../sections/GlobalSection';
import EventsSection from '../sections/EventsSection';
import AdmissionsTimelineSection from '../sections/AdmissionsTimelineSection';
import FAQSection from '../sections/FAQSection';
import Background from '../components/ui/Background';
import SideDecor from '../components/ui/SideDecor';
import ErrorBoundary from '../components/ui/ErrorBoundary';

// Tasteful Section Divider with Ambient Flare
function SectionDivider({ glow = 'indigo' }) {
  const glowMap = {
    indigo: 'from-transparent via-[#5B5BF0]/20 to-transparent border-indigo-500/30 text-indigo-400',
    gold: 'from-transparent via-[#FFC53D]/20 to-transparent border-amber-500/30 text-amber-300',
    cyan: 'from-transparent via-[#22D3EE]/20 to-transparent border-cyan-500/30 text-cyan-300',
    emerald: 'from-transparent via-[#10B981]/20 to-transparent border-emerald-500/30 text-emerald-300',
  };
  const current = glowMap[glow] || glowMap.indigo;

  return (
    <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 pointer-events-none select-none">
      <div className={`h-px bg-gradient-to-r ${current.split(' ')[0]} ${current.split(' ')[1]} ${current.split(' ')[2]} relative flex items-center justify-center`}>
        <div className={`w-2 h-2 rotate-45 border bg-[#0A0B1E] ${current.split(' ')[3]}`} />
      </div>
    </div>
  );
}

export function HomePage() {
  const marqueeWords = [
    'NO BORING LECTURES',
    'AI-NATIVE CURRICULUM',
    '100% STUDIO BASED',
    '₹50 CR VENTURE FUND',
    '512x H100 GPU NODES',
    'GLOBAL FELLOWSHIPS',
    'DESIGNED FOR GEN-Z',
    'BUILD IN PUBLIC',
  ];

  return (
    <div className="space-y-0 relative w-full overflow-x-clip">
      {/* 1. Hero Reel */}
      <div className="relative w-full">
        <SideDecor section="hero" />
        <ErrorBoundary name="Hero Section">
          <HeroSection />
        </ErrorBoundary>
      </div>

      <SectionDivider glow="indigo" />

      {/* 2. Choose Your Path */}
      <div className="relative w-full">
        <ErrorBoundary name="Path Selector Section">
          <PathSelectorSection />
        </ErrorBoundary>
      </div>

      {/* 3. Infinite Outlined Marquee Strip */}
      <div className="relative w-full overflow-x-clip my-4">
        <SideDecor section="marquee" />
        <ErrorBoundary name="Marquee Strip" fallback={null}>
          <Marquee items={marqueeWords} speed={30} />
        </ErrorBoundary>
      </div>

      <SectionDivider glow="gold" />

      {/* 4. Stats Counters */}
      <div className="relative w-full">
        <SideDecor section="stats" />
        <Background variant="grid">
          <ErrorBoundary name="Stats Section">
            <StatsSection />
          </ErrorBoundary>
        </Background>
      </div>

      <SectionDivider glow="indigo" />

      {/* 5. Chancellor's Message */}
      <div className="relative w-full">
        <ErrorBoundary name="Chancellor Section">
          <ChancellorSection />
        </ErrorBoundary>
      </div>

      <SectionDivider glow="cyan" />

      {/* 6. Departments */}
      <div className="relative w-full">
        <SideDecor section="departments" />
        <Background variant="aurora">
          <ErrorBoundary name="Departments Section">
            <DepartmentsSection />
          </ErrorBoundary>
        </Background>
      </div>

      <SectionDivider glow="gold" />

      {/* 7. Programs */}
      <div className="relative w-full">
        <SideDecor section="programs" />
        <Background variant="mesh" wordWatermark="DEGREES">
          <ErrorBoundary name="Programs Section">
            <ProgramsSection />
          </ErrorBoundary>
        </Background>
      </div>

      <SectionDivider glow="cyan" />

      {/* 8. Why HRU */}
      <div className="relative w-full">
        <SideDecor section="whyHRU" />
        <Background variant="dots">
          <ErrorBoundary name="Why HRU Section">
            <WhyHRUSection />
          </ErrorBoundary>
        </Background>
      </div>

      <SectionDivider glow="emerald" />

      {/* 9. Campus Life */}
      <div className="relative w-full">
        <SideDecor section="campusLife" />
        <Background variant="paper">
          <ErrorBoundary name="Campus Life Section">
            <CampusLifeSection />
          </ErrorBoundary>
        </Background>
      </div>

      <SectionDivider glow="indigo" />

      {/* 10. Research & Innovation */}
      <div className="relative w-full">
        <SideDecor section="research" />
        <Background variant="topo">
          <ErrorBoundary name="Research Section">
            <ResearchSection />
          </ErrorBoundary>
        </Background>
      </div>

      <SectionDivider glow="gold" />

      {/* 11. Placements */}
      <div className="relative w-full">
        <SideDecor section="placements" />
        <Background variant="sunrise-mesh">
          <ErrorBoundary name="Placements Section">
            <PlacementsSection />
          </ErrorBoundary>
        </Background>
      </div>

      <SectionDivider glow="cyan" />

      {/* 12. Student Stories */}
      <div className="relative w-full">
        <SideDecor section="studentStories" />
        <ErrorBoundary name="Student Stories Section">
          <StudentStoriesSection />
        </ErrorBoundary>
      </div>

      <SectionDivider glow="indigo" />

      {/* 13. Global Residencies */}
      <div className="relative w-full">
        <ErrorBoundary name="Global Residencies Section">
          <GlobalSection />
        </ErrorBoundary>
      </div>

      <SectionDivider glow="emerald" />

      {/* 14. Events & Festivals */}
      <div className="relative w-full">
        <SideDecor section="events" />
        <ErrorBoundary name="Events Section">
          <EventsSection />
        </ErrorBoundary>
      </div>

      <SectionDivider glow="gold" />

      {/* 15. Admissions Timeline */}
      <div className="relative w-full">
        <SideDecor section="admissions" />
        <ErrorBoundary name="Admissions Timeline Section">
          <AdmissionsTimelineSection />
        </ErrorBoundary>
      </div>

      <SectionDivider glow="indigo" />

      {/* 16. FAQ Spring-Animated Accordion */}
      <div className="relative w-full">
        <SideDecor section="faq" />
        <ErrorBoundary name="FAQ Section">
          <FAQSection />
        </ErrorBoundary>
      </div>

      {/* 17. Reverse Outlined Bottom Marquee */}
      <div className="relative w-full overflow-x-clip my-4">
        <ErrorBoundary name="Bottom Marquee" fallback={null}>
          <Marquee
            items={[
              'FALL 2026 ADMISSIONS OPEN',
              '₹50 CR MERIT SEED FUNDING',
              'AHMEDABAD • BENGALURU • TOKYO • BERLIN',
              '100% PRODUCTION OUTPUT',
            ]}
            speed={26}
            reverse
          />
        </ErrorBoundary>
      </div>
    </div>
  );
}

export default HomePage;
