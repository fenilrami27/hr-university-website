import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight, Clock } from 'lucide-react';

export function AnnouncementBar() {
  const [timeLeft, setTimeLeft] = useState({ days: 18, hours: 9, minutes: 42, seconds: 15 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: 59, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        if (prev.days > 0) return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-[#0A0B1E] border-b border-white/10 text-white text-xs py-2 px-4 transition-colors">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-hru-gold/15 text-hru-gold font-mono font-bold text-[10px] uppercase">
            <Sparkles className="w-3 h-3" />
            Admissions Open
          </span>
          <span className="text-[#A4A8C4] text-[11px] sm:text-xs">
            Round 01 Merit Fellowships & Seed Fund Eligibility for Class of 2026/27
          </span>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5 font-mono text-[11px] text-hru-gold tabular-nums">
            <Clock className="w-3.5 h-3.5 text-[#A4A8C4]" />
            <span>Closes in:</span>
            <span className="font-bold">{timeLeft.days}d</span>
            <span>:</span>
            <span className="font-bold">{String(timeLeft.hours).padStart(2, '0')}h</span>
            <span>:</span>
            <span className="font-bold">{String(timeLeft.minutes).padStart(2, '0')}m</span>
            <span>:</span>
            <span className="font-bold">{String(timeLeft.seconds).padStart(2, '0')}s</span>
          </div>

          <Link
            to="/admissions"
            className="hidden md:inline-flex items-center gap-1 text-white hover:text-hru-gold font-semibold transition-colors text-[11px] group"
          >
            Apply Fast <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AnnouncementBar;
