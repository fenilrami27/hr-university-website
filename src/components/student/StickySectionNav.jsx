import React from 'react';

export function StickySectionNav({ activeSection, onSelectSection }) {
  const tabs = [
    { id: 'exam-schedule', label: 'Exam Schedule' },
    { id: 'results', label: 'Results' },
    { id: 'notices', label: 'Notices & Circulars' },
    { id: 'academic-calendar', label: 'Academic Calendar' },
    { id: 'class-timetable', label: 'Class Timetable' },
    { id: 'hall-ticket', label: 'Hall Ticket' },
    { id: 'syllabus', label: 'Syllabus & PYQs' },
    { id: 'fees', label: 'Fee Details' },
    { id: 'scholarships', label: 'Scholarships' },
    { id: 'attendance', label: 'Attendance' },
    { id: 're-evaluation', label: 'Re-evaluation & ATKT' },
    { id: 'certificates', label: 'Certificates' },
    { id: 'placements', label: 'Placements' },
    { id: 'grievance', label: 'Help Desk' },
    { id: 'facilities', label: 'Campus Facilities' },
    { id: 'downloads', label: 'Downloads' },
  ];

  return (
    <div className="sticky top-20 z-30 py-3 mb-10 bg-[#0A0B1E]/90 backdrop-blur-xl border-y border-white/10 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
      <div className="flex items-center gap-2 overflow-x-auto scrollbar-none max-w-7xl 2xl:max-w-[1600px] mx-auto">
        <span className="text-[11px] font-mono text-app-muted uppercase tracking-widest shrink-0 mr-1 hidden md:inline">
          Jump to:
        </span>
        {tabs.map((tab) => {
          const isActive = activeSection === tab.id;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => onSelectSection(tab.id)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-mono font-bold whitespace-nowrap transition-all duration-200 cursor-pointer shrink-0 ${
                isActive
                  ? 'bg-gradient-to-r from-[#FFC53D] to-[#FF7A59] text-[#0A0B1E] shadow-gold-glow'
                  : 'bg-white/5 hover:bg-white/10 text-app-muted hover:text-white border border-white/10'
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default StickySectionNav;
