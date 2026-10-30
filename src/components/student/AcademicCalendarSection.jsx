import React, { useState, useEffect } from 'react';
import { CalendarRange } from 'lucide-react';
import { studentService } from '../../services/studentService';

export function AcademicCalendarSection() {
  const [calendar, setCalendar] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    studentService.getAcademicCalendar().then((data) => {
      setCalendar(data || []);
      setLoading(false);
    });
  }, []);

  return (
    <section id="academic-calendar" className="mb-20 scroll-mt-32">
      <div className="p-6 sm:p-10 rounded-3xl bg-app-surface1 border border-white/10 shadow-2xl">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-6 border-b border-white/10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#38BDF8]/40 bg-[#38BDF8]/10 text-[#38BDF8] font-mono text-xs uppercase tracking-widest mb-3">
              <CalendarRange className="w-3.5 h-3.5" />
              Year Planning
            </div>
            <h2 className="text-2xl sm:text-3xl font-black font-heading text-white tracking-tight">
              2. ACADEMIC CALENDAR (2026/27)
            </h2>
            <p className="text-xs sm:text-sm text-app-muted mt-1 max-w-xl">
              Official university timeline: instructional weeks, mid-term reviews, festival recesses, and final jury evaluations.
            </p>
          </div>
        </div>

        {loading ? (
          <div className="space-y-4 animate-pulse">
            <div className="h-28 bg-white/5 rounded-2xl w-full" />
            <div className="h-28 bg-white/5 rounded-2xl w-full" />
          </div>
        ) : calendar.length > 0 ? (
          <div className="space-y-6">
            {calendar.map((phase, idx) => (
              <div
                key={idx}
                className="p-5 sm:p-6 rounded-2xl bg-[#0A0B1E] border border-white/10 space-y-4"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-white/10">
                  <div>
                    <h3 className="font-heading font-black text-base sm:text-lg text-white">
                      {phase.phase}
                    </h3>
                    <span className="text-xs font-mono text-[#FFC53D]">
                      {phase.dateRange}
                    </span>
                  </div>
                  <span
                    className={`self-start sm:self-auto text-[10px] font-mono px-2.5 py-1 rounded-full font-bold uppercase border ${
                      phase.status === 'Completed'
                        ? 'bg-neutral-800 text-neutral-400 border-neutral-700'
                        : phase.status === 'Current'
                        ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/40 animate-pulse'
                        : 'bg-white/5 text-app-muted border-white/10'
                    }`}
                  >
                    {phase.status}
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {phase.milestones.map((m, mIdx) => (
                    <div
                      key={mIdx}
                      className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 flex items-start gap-2.5"
                    >
                      <span className="text-xs font-mono font-bold text-[#2DD4BF] shrink-0">
                        {m.date}
                      </span>
                      <p className="text-xs text-neutral-300 leading-snug">
                        {m.title}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 px-6 rounded-2xl bg-[#0A0B1E] border border-dashed border-white/20 space-y-2">
            <CalendarRange className="w-8 h-8 text-app-muted mx-auto" />
            <h3 className="font-heading font-bold text-white text-base">Academic Calendar Not Released</h3>
            <p className="text-xs text-app-muted max-w-sm mx-auto">
              The Academic Senate has not ratified the calendar for this academic session yet. Check back soon.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

export default AcademicCalendarSection;
