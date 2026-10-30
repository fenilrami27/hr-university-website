import React, { useState, useEffect } from 'react';
import { Briefcase, ArrowUpRight } from 'lucide-react';
import Button from '../ui/Button';
import { studentService } from '../../services/studentService';

export function PlacementsSection() {
  const [placements, setPlacements] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    studentService.getPlacements().then((data) => {
      setPlacements(data || []);
      setLoading(false);
    });
  }, []);

  return (
    <section id="placements" className="mb-20 scroll-mt-32">
      <div className="p-6 sm:p-10 rounded-3xl bg-app-surface1 border border-white/10 shadow-2xl">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-6 border-b border-white/10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#2DD4BF]/40 bg-[#2DD4BF]/10 text-[#2DD4BF] font-mono text-xs uppercase tracking-widest mb-3">
              <Briefcase className="w-3.5 h-3.5" />
              Industry & Venture Pipeline
            </div>
            <h2 className="text-2xl sm:text-3xl font-black font-heading text-white tracking-tight">
              11. PLACEMENT & INTERNSHIP DRIVES
            </h2>
            <p className="text-xs sm:text-sm text-app-muted mt-1 max-w-xl">
              Live corporate recruitment drives, startup research residencies, eligibility checklists, and interview shortlists.
            </p>
          </div>
        </div>

        {loading ? (
          <div className="space-y-3 animate-pulse">
            <div className="h-20 bg-white/5 rounded-2xl w-full" />
            <div className="h-20 bg-white/5 rounded-2xl w-full" />
          </div>
        ) : placements.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {placements.map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-[#0A0B1E] border border-white/10 flex flex-col justify-between group hover:border-white/30 transition-all space-y-4"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="font-mono text-[10px] uppercase font-bold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                      {item.status}
                    </span>
                    <span className="text-xs font-mono text-app-muted">
                      Due: {item.deadline}
                    </span>
                  </div>

                  <h3 className="font-heading font-black text-lg text-white group-hover:text-hru-gold transition-colors">
                    {item.role}
                  </h3>
                  <span className="text-xs font-mono text-[#2DD4BF] block font-bold">
                    {item.company}
                  </span>
                </div>

                <div className="pt-3 border-t border-white/10 space-y-2 text-xs font-mono">
                  <div className="flex items-center justify-between text-neutral-300">
                    <span className="text-app-muted">Stipend / CTC:</span>
                    <span className="text-white font-bold text-sm text-[#FFC53D]">{item.stipend}</span>
                  </div>
                  <div className="text-[11px] text-app-muted">
                    Eligibility: {item.eligibility}
                  </div>
                  <Button
                    variant="glass"
                    size="sm"
                    className="w-full justify-center mt-2"
                    onClick={() => alert(`Opening application portal for ${item.company} - ${item.role}`)}
                    icon={<ArrowUpRight className="w-3.5 h-3.5" />}
                  >
                    View Drive Details
                  </Button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 px-6 rounded-2xl bg-[#0A0B1E] border border-dashed border-white/20 space-y-2">
            <Briefcase className="w-8 h-8 text-app-muted mx-auto" />
            <h3 className="font-heading font-bold text-white text-base">No Active Recruitment Drives</h3>
            <p className="text-xs text-app-muted max-w-sm mx-auto">
              Campus placement cycles commence in the autumn and spring semesters. New venture cohorts are notified weekly.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

export default PlacementsSection;
