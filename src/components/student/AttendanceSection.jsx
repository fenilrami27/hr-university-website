import React, { useState } from 'react';
import { Percent, Search, ShieldCheck } from 'lucide-react';
import Button from '../ui/Button';
import { validateEnrollmentNumber } from '../../config/academics';
import { studentService } from '../../services/studentService';

export function AttendanceSection({ prefillEnrollment = '' }) {
  const [enrollmentInput, setEnrollmentInput] = useState(prefillEnrollment);
  const [loading, setLoading] = useState(false);
  const [hasQueried, setHasQueried] = useState(false);
  const [attendanceData, setAttendanceData] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validation = validateEnrollmentNumber(enrollmentInput);
    if (!validation.valid) return;

    setLoading(true);
    setHasQueried(true);
    try {
      const data = await studentService.getAttendance({ enrollmentNo: validation.value });
      setAttendanceData(data);
    } catch {
      setAttendanceData(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="attendance" className="mb-20 scroll-mt-32">
      <div className="p-6 sm:p-10 rounded-3xl bg-app-surface1 border border-white/10 shadow-2xl">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-6 border-b border-white/10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#38BDF8]/40 bg-[#38BDF8]/10 text-[#38BDF8] font-mono text-xs uppercase tracking-widest mb-3">
              <Percent className="w-3.5 h-3.5" />
              Biometric Telemetry
            </div>
            <h2 className="text-2xl sm:text-3xl font-black font-heading text-white tracking-tight">
              8. ATTENDANCE & EXAMINATION ELIGIBILITY
            </h2>
            <p className="text-xs sm:text-sm text-app-muted mt-1 max-w-xl">
              Track studio lab presence, verify 75% statutory examination attendance requirements, and audit condonation status.
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="mb-8">
          <div className="flex flex-col sm:flex-row items-end gap-3 max-w-lg">
            <div className="w-full">
              <label className="block text-xs font-mono uppercase text-app-muted mb-2">
                Enrollment Number
              </label>
              <input
                type="text"
                required
                value={enrollmentInput}
                onChange={(e) => setEnrollmentInput(e.target.value.toUpperCase())}
                placeholder="e.g. HRU24AI108"
                className="w-full bg-[#0A0B1E] border border-white/15 focus:border-hru-gold rounded-xl px-4 py-3 text-sm text-white font-mono uppercase focus:outline-none"
              />
            </div>
            <Button
              type="submit"
              variant="gold"
              size="md"
              disabled={loading}
              className="h-[46px] shrink-0"
              icon={<Search className="w-4 h-4" />}
            >
              {loading ? 'Checking...' : 'Check Attendance'}
            </Button>
          </div>
        </form>

        {loading && (
          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 animate-pulse space-y-4">
            <div className="h-10 bg-white/10 rounded w-1/3" />
            <div className="h-20 bg-white/5 rounded w-full" />
          </div>
        )}

        {!loading && hasQueried && (
          <div>
            {attendanceData ? (
              <div className="space-y-6">
                {/* Summary Card */}
                <div className="p-6 rounded-3xl bg-gradient-to-br from-[#12142B] to-[#0A0B1E] border border-white/15 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div>
                    <span className="text-xs font-mono text-app-muted block uppercase">
                      Cumulative Semester Attendance
                    </span>
                    <div className="flex items-baseline gap-3 mt-1">
                      <span className="text-4xl font-black font-heading text-[#2DD4BF]">
                        {attendanceData.overallPercentage}%
                      </span>
                      <span className="text-xs font-mono text-app-muted">
                        Statutory Minimum: {attendanceData.minimumRequired}%
                      </span>
                    </div>
                  </div>
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-mono font-bold">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    <span>{attendanceData.status}</span>
                  </div>
                </div>

                {/* Subject-Wise Progress */}
                <div className="space-y-3">
                  {attendanceData.subjects.map((sub, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-2xl bg-[#0A0B1E] border border-white/10 space-y-2"
                    >
                      <div className="flex items-center justify-between text-xs font-mono">
                        <div>
                          <span className="text-white font-bold mr-2">{sub.code}: {sub.name}</span>
                          <span className="text-app-muted">({sub.attended}/{sub.total} sessions)</span>
                        </div>
                        <span className={`font-bold ${sub.percent >= 75 ? 'text-emerald-400' : 'text-rose-400'}`}>
                          {sub.percent}%
                        </span>
                      </div>
                      <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden">
                        <div
                          className={`h-full rounded-full transition-all duration-500 ${
                            sub.percent >= 75 ? 'bg-gradient-to-r from-[#2DD4BF] to-emerald-400' : 'bg-rose-500'
                          }`}
                          style={{ width: `${sub.percent}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="text-center py-12 px-6 rounded-2xl bg-[#0A0B1E] border border-dashed border-white/20 space-y-2">
                <Percent className="w-8 h-8 text-app-muted mx-auto" />
                <h3 className="font-heading font-bold text-white text-base">No Attendance Records Uploaded</h3>
                <p className="text-xs text-app-muted max-w-sm mx-auto">
                  Biometric telemetry logs for this enrollment ID have not synced to the central student portal.
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}

export default AttendanceSection;
