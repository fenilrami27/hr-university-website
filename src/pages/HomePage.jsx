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

      {/* 2. Choose Your Path */}
      <div className="relative w-full">
        <ErrorBoundary name="Path Selector Section">
          <PathSelectorSection />
        </ErrorBoundary>
      </div>

      {/* 3. Infinite Outlined Marquee Strip */}
      <div className="relative w-full overflow-x-clip">
        <SideDecor section="marquee" />
        <ErrorBoundary name="Marquee Strip" fallback={null}>
          <Marquee items={marqueeWords} speed={30} />
        </ErrorBoundary>
      </div>

      {/* 4. Stats Counters */}
      <div className="relative w-full">
        <SideDecor section="stats" />
        <Background variant="grid">
          <ErrorBoundary name="Stats Section">
            <StatsSection />
          </ErrorBoundary>
        </Background>
      </div>

      {/* 5. Chancellor's Message */}
      <div className="relative w-full">
        <ErrorBoundary name="Chancellor Section">
          <ChancellorSection />
        </ErrorBoundary>
      </div>

      {/* 6. Departments */}
      <div className="relative w-full">
        <SideDecor section="departments" />
        <Background variant="aurora">
          <ErrorBoundary name="Departments Section">
            <DepartmentsSection />
          </ErrorBoundary>
        </Background>
      </div>

      {/* 7. Programs */}
      <div className="relative w-full">
        <SideDecor section="programs" />
        <Background variant="mesh" wordWatermark="DEGREES">
          <ErrorBoundary name="Programs Section">
            <ProgramsSection />
          </ErrorBoundary>
        </Background>
      </div>

      {/* 8. Why HRU */}
      <div className="relative w-full">
        <SideDecor section="whyHRU" />
        <Background variant="dots">
          <ErrorBoundary name="Why HRU Section">
            <WhyHRUSection />
          </ErrorBoundary>
        </Background>
      </div>

      {/* 9. Campus Life */}
      <div className="relative w-full">
        <SideDecor section="campusLife" />
        <Background variant="paper">
          <ErrorBoundary name="Campus Life Section">
            <CampusLifeSection />
          </ErrorBoundary>
        </Background>
      </div>

      {/* 10. Research & Innovation */}
      <div className="relative w-full">
        <Background variant="topo">
          <ErrorBoundary name="Research Section">
            <ResearchSection />
          </ErrorBoundary>
        </Background>
      </div>

      {/* 11. Placements */}
      <div className="relative w-full">
        <SideDecor section="placements" />
        <Background variant="sunrise-mesh">
          <ErrorBoundary name="Placements Section">
            <PlacementsSection />
          </ErrorBoundary>
        </Background>
      </div>

      {/* 12. Student Stories */}
      <div className="relative w-full">
        <SideDecor section="studentStories" />
        <ErrorBoundary name="Student Stories Section">
          <StudentStoriesSection />
        </ErrorBoundary>
      </div>

      {/* 13. Global Residencies */}
      <div className="relative w-full">
        <ErrorBoundary name="Global Residencies Section">
          <GlobalSection />
        </ErrorBoundary>
      </div>

      {/* 14. Events & Festivals */}
      <div className="relative w-full">
        <SideDecor section="events" />
        <ErrorBoundary name="Events Section">
          <EventsSection />
        </ErrorBoundary>
      </div>

      {/* 15. Admissions Timeline */}
      <div className="relative w-full">
        <SideDecor section="admissions" />
        <ErrorBoundary name="Admissions Timeline Section">
          <AdmissionsTimelineSection />
        </ErrorBoundary>
      </div>

      {/* 16. FAQ Spring-Animated Accordion */}
      <div className="relative w-full">
        <SideDecor section="faq" />
        <ErrorBoundary name="FAQ Section">
          <FAQSection />
        </ErrorBoundary>
      </div>

      {/* 17. Reverse Outlined Bottom Marquee */}
      <div className="relative w-full overflow-x-clip">
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
