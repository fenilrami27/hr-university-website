import React from 'react';
import { Sparkles } from 'lucide-react';
import SectionHeading from '../components/ui/SectionHeading';
import PlacementsSection from '../sections/PlacementsSection';
import Card from '../components/ui/Card';

export function PlacementsPage() {
  const careerHighlights = [
    {
      title: 'Venture Incubation Studio',
      desc: 'Dedicated venture partners assist student founders with Delaware C-Corp legal entity formation, cap table structuring, and initial seed round pitches.',
    },
    {
      title: 'Global & National Residencies Direct Hire',
      desc: 'Our Ahmedabad, Bengaluru, Pune, Mumbai, Tokyo, and Berlin semester rotations connect fellows directly with engineering leads and research labs for immediate post-graduation placement.',
    },
    {
      title: 'Verified Portfolio Over Resumes',
      desc: 'Employers review verified GitHub repositories, production Docker images, and deployed apps rather than standardized resume bullet points.',
    },
  ];

  return (
    <div className="pt-28 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-hru-gold/30 bg-hru-gold/10 text-hru-gold font-mono text-xs uppercase tracking-widest mb-4">
          <Sparkles className="w-3.5 h-3.5" />
          Verified Outcomes & Enterprise Network
        </div>
        <h1 className="text-4xl sm:text-6xl font-black font-heading text-app-text tracking-tight leading-none mb-6">
          CAREER OUTCOMES & <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-hru-indigo via-[#8B5CF6] to-hru-gold">
            VENTURE ACCELERATION.
          </span>
        </h1>
        <p className="text-app-muted text-base sm:text-lg">
          Zero standard placement mills. 98% of HRU fellows join frontier tech studios or scale venture-backed startups within 90 days.
        </p>
      </div>

      <PlacementsSection />

      <div className="mt-16">
        <SectionHeading
          badge="CAREER DEVELOPMENT CELL"
          badgeColor="gold"
          title="HOW HRU PREPARES"
          highlight="INDUSTRY LEADERS."
          subtitle="From 1-on-1 portfolio teardowns to institutional seed capital."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {careerHighlights.map((c, i) => (
            <Card key={i} glow="gold" className="p-8 space-y-4">
              <div className="w-10 h-10 rounded-2xl bg-hru-gold/15 text-hru-gold flex items-center justify-center font-mono font-bold text-sm">
                0{i + 1}
              </div>
              <h3 className="font-heading font-bold text-xl text-app-text">
                {c.title}
              </h3>
              <p className="text-sm text-app-muted leading-relaxed">
                {c.desc}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PlacementsPage;
