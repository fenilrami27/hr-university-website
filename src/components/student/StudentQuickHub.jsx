import React from 'react';
import {
  CalendarDays,
  Award,
  BellRing,
  CalendarRange,
  Clock,
  Ticket,
  BookOpen,
  CreditCard,
  GraduationCap,
  Percent,
  RotateCcw,
  FileBadge,
  Briefcase,
  LifeBuoy,
  Building2,
  DownloadCloud,
  ArrowRight
} from 'lucide-react';

export function StudentQuickHub({ onNavigate }) {
  const hubs = [
    {
      id: 'exam-schedule',
      title: 'Exam Schedule',
      desc: 'Upcoming semester timetable & venues',
      icon: CalendarDays,
      tint: '#FFC53D', // Gold
      badge: 'Active'
    },
    {
      id: 'results',
      title: 'Semester Results',
      desc: 'Online scorecards & CGPA lookup',
      icon: Award,
      tint: '#2DD4BF', // Mint
      badge: 'Official'
    },
    {
      id: 'notices',
      title: 'Notices & Circulars',
      desc: 'Administrative orders & announcements',
      icon: BellRing,
      tint: '#FF7A59', // Coral
      badge: 'Daily'
    },
    {
      id: 'academic-calendar',
      title: 'Academic Calendar',
      desc: 'Milestones, exams & vacations',
      icon: CalendarRange,
      tint: '#38BDF8', // Cyan
      badge: '2026-27'
    },
    {
      id: 'class-timetable',
      title: 'Class Timetable',
      desc: 'Weekly lectures & studio lab hours',
      icon: Clock,
      tint: '#A78BFA', // Violet
      badge: 'Weekly'
    },
    {
      id: 'hall-ticket',
      title: 'Hall Ticket Download',
      desc: 'Admit card verification & seating',
      icon: Ticket,
      tint: '#F472B6', // Pink
      badge: 'Mandatory'
    },
    {
      id: 'syllabus',
      title: 'Syllabus & PYQs',
      desc: 'Course outlines & past 3-year papers',
      icon: BookOpen,
      tint: '#C6FF3D', // Lime
      badge: 'Repository'
    },
    {
      id: 'fees',
      title: 'Fee Status & Receipts',
      desc: 'Semester payments & vouchers',
      icon: CreditCard,
      tint: '#FFC53D',
      badge: 'Accounts'
    },
    {
      id: 'scholarships',
      title: 'Scholarships & Aid',
      desc: 'Merit seed waivers & stipends',
      icon: GraduationCap,
      tint: '#2DD4BF',
      badge: 'Grants'
    },
    {
      id: 'attendance',
      title: 'Attendance Tracker',
      desc: 'Subject percentage & eligibility',
      icon: Percent,
      tint: '#38BDF8',
      badge: '75% Min'
    },
    {
      id: 're-evaluation',
      title: 'Re-evaluation & ATKT',
      desc: 'Copy verification & supplementary',
      icon: RotateCcw,
      tint: '#FF7A59',
      badge: 'Forms'
    },
    {
      id: 'certificates',
      title: 'Certificates & Forms',
      desc: 'Bonafide, NOC, TC & ID reissue',
      icon: FileBadge,
      tint: '#A78BFA',
      badge: 'Self-Serve'
    },
    {
      id: 'placements',
      title: 'Placement & Internships',
      desc: 'Campus recruitment & stipends',
      icon: Briefcase,
      tint: '#2DD4BF',
      badge: 'Careers'
    },
    {
      id: 'grievance',
      title: 'Grievance Help Desk',
      desc: 'Ticket generation & cell support',
      icon: LifeBuoy,
      tint: '#F472B6',
      badge: '24/7'
    },
    {
      id: 'facilities',
      title: 'Library, Hostel, Transit',
      desc: 'Circulation, room & bus passes',
      icon: Building2,
      tint: '#38BDF8',
      badge: 'Campus'
    },
    {
      id: 'downloads',
      title: 'Downloads & Handbooks',
      desc: 'Ordinance, affidavits & guides',
      icon: DownloadCloud,
      tint: '#C6FF3D',
      badge: 'PDFs'
    }
  ];

  const handleCardClick = (id) => {
    if (onNavigate) {
      onNavigate(id);
    } else {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <div className="mb-14">
      <div className="flex items-center justify-between mb-6">
        <div>
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-hru-gold block">
            ONE-CLICK STUDENT HUB
          </span>
          <h2 className="text-xl sm:text-2xl font-black font-heading text-white">
            Quick Navigation & Services
          </h2>
        </div>
        <span className="text-xs font-mono text-app-muted hidden sm:inline">
          16 Central Services
        </span>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3.5 sm:gap-4">
        {hubs.map((hub) => {
          const Icon = hub.icon;
          return (
            <button
              key={hub.id}
              type="button"
              onClick={() => handleCardClick(hub.id)}
              className="p-4 sm:p-5 rounded-2xl bg-app-surface1 border border-white/10 hover:border-white/30 hover:-translate-y-1 transition-all duration-300 text-left flex flex-col justify-between group shadow-lg cursor-pointer"
            >
              <div className="flex items-start justify-between mb-3">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border"
                  style={{
                    backgroundColor: `${hub.tint}15`,
                    borderColor: `${hub.tint}30`,
                    color: hub.tint
                  }}
                >
                  <Icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </div>
                <span
                  className="text-[10px] font-mono px-2 py-0.5 rounded-full font-bold uppercase tracking-wider"
                  style={{
                    backgroundColor: `${hub.tint}15`,
                    color: hub.tint
                  }}
                >
                  {hub.badge}
                </span>
              </div>

              <div>
                <h3 className="font-heading font-black text-sm sm:text-base text-white group-hover:text-hru-gold transition-colors flex items-center justify-between">
                  <span>{hub.title}</span>
                  <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all text-hru-gold shrink-0" />
                </h3>
                <p className="text-[11px] text-app-muted line-clamp-1 mt-0.5">
                  {hub.desc}
                </p>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default StudentQuickHub;
