import React from 'react';
import SectionHeading from '../components/ui/SectionHeading';
import PlacementTabs from '../components/placements/PlacementTabs';
import SectorDonutChart from '../components/placements/SectorDonutChart';
import RecruiterMarquee from '../components/placements/RecruiterMarquee';
import TopOffersGrid from '../components/placements/TopOffersGrid';
import PlacementJourney from '../components/placements/PlacementJourney';
import HireFromHRUModal from '../components/placements/HireFromHRUModal';
import { placementsFootnote } from '../data/placements';

export function PlacementsSection() {
  return (
    <section
      id="placements"
      className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-12 2xl:px-16 max-w-[1600px] mx-auto overflow-hidden"
    >
      {/* Background Decor: Warm Sunrise Mesh, Soft Pop Blobs & Giant Outlined Numbers */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden select-none">
        {/* Soft Pop Blobs */}
        <div className="absolute -top-32 left-1/4 w-[600px] h-[500px] bg-gradient-to-br from-[#FFC53D]/18 via-[#FF7A59]/15 to-transparent rounded-full blur-[140px] animate-pulse" />
        <div className="absolute top-1/3 -right-24 w-[550px] h-[550px] bg-[#22D3EE]/12 rounded-full blur-[150px]" />
        <div className="absolute top-2/3 -left-20 w-[500px] h-[500px] bg-[#2DD4BF]/12 rounded-full blur-[140px]" />
        <div className="absolute -bottom-24 right-1/4 w-[600px] h-[500px] bg-[#F472B6]/12 rounded-full blur-[150px]" />

        {/* Subtle Ruled Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.035] dark:opacity-[0.05]"
          style={{
            backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
            backgroundSize: '48px 48px',
          }}
        />

        {/* Giant Outlined Decorative Numbers Bleeding Behind Content */}
        <div className="absolute top-12 -right-12 font-heading font-black text-[22vw] leading-none text-transparent stroke-outline-gold opacity-[0.05] dark:opacity-[0.06] select-none">
          98%
        </div>
        <div className="absolute top-1/2 -left-16 font-heading font-black text-[20vw] leading-none text-transparent stroke-outline-coral opacity-[0.04] dark:opacity-[0.05] select-none">
          ₹45L
        </div>
        <div className="absolute bottom-16 right-4 font-heading font-black text-[18vw] leading-none text-transparent stroke-outline-sky opacity-[0.04] dark:opacity-[0.05] select-none">
          1800+
        </div>
      </div>

      {/* Section Header */}
      <div className="mb-12 sm:mb-16">
        <SectionHeading
          badge="OUTCOMES & CAREERS"
          badgeColor="gold"
          title="Placements: where HRU"
          highlight="students land."
          subtitle="From autonomous AI systems and drug discovery to quantitative finance and spatial computing—our graduates don't get lost in resume stacks. They ship public code, verify deep-tech portfolios, and step directly into frontier engineering roles."
          align="left"
        />
      </div>

      {/* Block A: Tabs Switcher (Overall Bento Grid / By Department / By Year) */}
      <div className="mb-16 sm:mb-20">
        <PlacementTabs />
      </div>

      {/* Block B: Recruiter Marquee (2 Opposing Rows of Fictional Partners) */}
      <div className="mb-16 sm:mb-20">
        <RecruiterMarquee />
      </div>

      {/* Block C: Sector Split Donut Chart */}
      <div className="mb-16 sm:mb-20">
        <SectorDonutChart />
      </div>

      {/* Block D: Top Offers Cards */}
      <div className="mb-16 sm:mb-20">
        <TopOffersGrid />
      </div>

      {/* Block E: Four-Stage Placement Journey */}
      <div className="mb-16 sm:mb-20">
        <PlacementJourney />
      </div>

      {/* Block F: "Hire from HRU" CTA Banner & Interactive Modal */}
      <div className="mb-12">
        <HireFromHRUModal />
      </div>

      {/* Footnote for Dummy / Sample Figures */}
      <div className="text-center pt-6 border-t border-app-border/40">
        <p className="text-[11px] sm:text-xs font-mono text-app-muted flex items-center justify-center gap-1.5">
          <span>✦</span>
          <span>{placementsFootnote}</span>
        </p>
      </div>

      <style>{`
        .stroke-outline-gold {
          -webkit-text-stroke: 2px #FFC53D;
        }
        .stroke-outline-coral {
          -webkit-text-stroke: 2px #FF7A59;
        }
        .stroke-outline-sky {
          -webkit-text-stroke: 2px #22D3EE;
        }
      `}</style>
    </section>
  );
}

export default PlacementsSection;
