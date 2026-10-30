import React from 'react';
import { Sparkles, ShieldCheck } from 'lucide-react';
import { studentService } from '../../services/studentService';

export function StudentHero({ onFillDemo }) {
  const isDemo = studentService.isDemoMode();
  const demoCreds = studentService.getDemoCredentials();

  return (
    <div className="relative pt-10 pb-8 text-center max-w-4xl mx-auto">
      {/* Top Pill Badge */}
      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-hru-gold/40 bg-hru-gold/15 text-hru-gold font-mono text-xs uppercase tracking-widest mb-6">
        <Sparkles className="w-3.5 h-3.5" />
        Official University Student Gateway • AY 2026/27
      </div>

      {/* Main Title */}
      <h1 className="text-4xl sm:text-6xl font-black font-heading text-app-text tracking-tight leading-[1.05] mb-5">
        STUDENT UPDATES & <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFC53D] via-[#FF7A59] via-[#2DD4BF] to-[#22D3EE]">
          ACADEMIC HUB.
        </span>
      </h1>

      {/* Subtitle */}
      <p className="text-app-muted text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-6">
        Access upcoming exam schedules, official semester marksheets, digital hall tickets, syllabus repositories, fee records, and university circulars.
      </p>

      {/* Demo Mode Notification Card */}
      {isDemo ? (
        <div className="p-4 rounded-2xl bg-gradient-to-r from-emerald-500/10 via-[#2DD4BF]/10 to-transparent border border-emerald-500/30 text-left max-w-2xl mx-auto shadow-lg backdrop-blur-md">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div className="flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shrink-0" />
              <div>
                <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider block">
                  DEMO DATA MODE ACTIVE (VITE_USE_DEMO_DATA=true)
                </span>
                <span className="text-xs text-app-muted font-mono">
                  Branch: <strong className="text-white">{demoCreds.branchName}</strong> • Sem: <strong className="text-white">{demoCreds.semester}</strong> • Enroll: <strong className="text-[#FFC53D]">{demoCreds.enrollmentNo}</strong>
                </span>
              </div>
            </div>
            {onFillDemo && (
              <button
                type="button"
                onClick={onFillDemo}
                className="px-3 py-1.5 rounded-xl bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 border border-emerald-500/40 text-xs font-mono font-bold transition-all shrink-0 cursor-pointer"
              >
                Auto-Fill Demo
              </button>
            )}
          </div>
        </div>
      ) : (
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-white/5 border border-white/10 text-xs font-mono text-app-muted max-w-xl mx-auto">
          <ShieldCheck className="w-4 h-4 text-[#2DD4BF] shrink-0" />
          <span>Live mode active: Queries check real uploaded university circulars & declared results.</span>
        </div>
      )}
    </div>
  );
}

export default StudentHero;
