import React, { useState, useEffect } from 'react';
import { Building2, Book, Home, Bus } from 'lucide-react';
import { studentService } from '../../services/studentService';

export function CampusFacilitiesSection() {
  const [facilities, setFacilities] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    studentService.getCampusFacilities().then((data) => {
      setFacilities(data);
      setLoading(false);
    });
  }, []);

  return (
    <section id="facilities" className="mb-20 scroll-mt-32">
      <div className="p-6 sm:p-10 rounded-3xl bg-app-surface1 border border-white/10 shadow-2xl">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-6 border-b border-white/10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#38BDF8]/40 bg-[#38BDF8]/10 text-[#38BDF8] font-mono text-xs uppercase tracking-widest mb-3">
              <Building2 className="w-3.5 h-3.5" />
              Living Labs & Services
            </div>
            <h2 className="text-2xl sm:text-3xl font-black font-heading text-white tracking-tight">
              12. LIBRARY, HOSTEL & TRANSPORT SERVICES
            </h2>
            <p className="text-xs sm:text-sm text-app-muted mt-1 max-w-xl">
              Real-time library loan ledger, residential hall room allocations, and campus electric shuttle schedules.
            </p>
          </div>
        </div>

        {loading ? (
          <div className="space-y-4 animate-pulse">
            <div className="h-28 bg-white/5 rounded-2xl w-full" />
          </div>
        ) : facilities ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Library Card */}
            <div className="p-6 rounded-2xl bg-[#0A0B1E] border border-white/10 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <Book className="w-4 h-4 text-hru-gold" />
                  <h3 className="font-heading font-black text-white text-base">Turing Library</h3>
                </div>
                <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                  {facilities.library.borrowedCount}/{facilities.library.limit} Borrowed
                </span>
              </div>
              <div className="space-y-2 text-xs font-mono">
                {facilities.library.items.map((item, idx) => (
                  <div key={idx} className="p-2.5 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
                    <span className="text-white font-bold block line-clamp-1">{item.title}</span>
                    <div className="flex items-center justify-between text-[11px] text-app-muted">
                      <span>Due: <strong className="text-[#FFC53D]">{item.dueDate}</strong></span>
                      <button
                        type="button"
                        onClick={() => alert(`Renewed book loan for 14 days: ${item.title}`)}
                        className="text-[#2DD4BF] hover:underline"
                      >
                        Renew
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Hostel Card */}
            <div className="p-6 rounded-2xl bg-[#0A0B1E] border border-white/10 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <Home className="w-4 h-4 text-[#2DD4BF]" />
                  <h3 className="font-heading font-black text-white text-base">Hostel Residency</h3>
                </div>
                <span className="text-[10px] font-mono text-white bg-white/10 px-2 py-0.5 rounded">
                  Allotted
                </span>
              </div>
              <div className="space-y-3 text-xs font-mono">
                <div>
                  <span className="text-app-muted block uppercase text-[10px]">Building & Hall</span>
                  <span className="text-white font-bold block mt-0.5">{facilities.hostel.building}</span>
                </div>
                <div>
                  <span className="text-app-muted block uppercase text-[10px]">Room Suite</span>
                  <span className="text-[#2DD4BF] font-black text-sm block mt-0.5">{facilities.hostel.roomNumber}</span>
                </div>
                <div>
                  <span className="text-app-muted block uppercase text-[10px]">Warden Desk</span>
                  <span className="text-neutral-300 block mt-0.5">{facilities.hostel.warden}</span>
                </div>
              </div>
            </div>

            {/* Transport Card */}
            <div className="p-6 rounded-2xl bg-[#0A0B1E] border border-white/10 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <Bus className="w-4 h-4 text-[#FF7A59]" />
                  <h3 className="font-heading font-black text-white text-base">Campus Transit</h3>
                </div>
                <span className="text-[10px] font-mono text-[#FF7A59] bg-[#FF7A59]/10 px-2 py-0.5 rounded border border-[#FF7A59]/20">
                  Electric Bus
                </span>
              </div>
              <div className="space-y-3 text-xs font-mono">
                <div>
                  <span className="text-app-muted block uppercase text-[10px]">Transit Pass ID</span>
                  <span className="text-white font-bold block mt-0.5">{facilities.transport.passId}</span>
                </div>
                <div>
                  <span className="text-app-muted block uppercase text-[10px]">Designated Route</span>
                  <span className="text-neutral-300 block mt-0.5">{facilities.transport.route}</span>
                </div>
                <div>
                  <span className="text-app-muted block uppercase text-[10px]">Shuttle Timings</span>
                  <span className="text-[#FFC53D] block mt-0.5">{facilities.transport.timing}</span>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center py-12 px-6 rounded-2xl bg-[#0A0B1E] border border-dashed border-white/20 space-y-2">
            <Building2 className="w-8 h-8 text-app-muted mx-auto" />
            <h3 className="font-heading font-bold text-white text-base">Campus Services Sync Pending</h3>
            <p className="text-xs text-app-muted max-w-sm mx-auto">
              Hostel allocations and transit passes are active during official instruction terms.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

export default CampusFacilitiesSection;
