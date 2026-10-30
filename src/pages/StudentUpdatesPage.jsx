import React, { useState, useEffect } from 'react';
import StudentHero from '../components/student/StudentHero';
import StudentQuickHub from '../components/student/StudentQuickHub';
import StickySectionNav from '../components/student/StickySectionNav';
import ExamScheduleSection from '../components/student/ExamScheduleSection';
import ResultsSection from '../components/student/ResultsSection';
import NoticesSection from '../components/student/NoticesSection';
import AcademicCalendarSection from '../components/student/AcademicCalendarSection';
import ClassTimetableSection from '../components/student/ClassTimetableSection';
import HallTicketSection from '../components/student/HallTicketSection';
import SyllabusSection from '../components/student/SyllabusSection';
import FeesSection from '../components/student/FeesSection';
import ScholarshipsSection from '../components/student/ScholarshipsSection';
import AttendanceSection from '../components/student/AttendanceSection';
import ReEvaluationSection from '../components/student/ReEvaluationSection';
import CertificatesSection from '../components/student/CertificatesSection';
import PlacementsSection from '../components/student/PlacementsSection';
import CampusFacilitiesSection from '../components/student/CampusFacilitiesSection';
import GrievanceSection from '../components/student/GrievanceSection';
import DownloadsSection from '../components/student/DownloadsSection';
import { studentService } from '../services/studentService';

export function StudentUpdatesPage() {
  const [activeSection, setActiveSection] = useState('exam-schedule');
  const [demoPrefill, setDemoPrefill] = useState({
    enrollment: '',
    branch: 'ai-data-science',
    semester: '4',
    dob: '',
  });

  useEffect(() => {
    document.title = 'Student Updates & Academic Hub | HR University';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // Intersection observer or scroll tracking for active section
  useEffect(() => {
    const sectionIds = [
      'exam-schedule',
      'results',
      'notices',
      'academic-calendar',
      'class-timetable',
      'hall-ticket',
      'syllabus',
      'fees',
      'scholarships',
      'attendance',
      're-evaluation',
      'certificates',
      'placements',
      'facilities',
      'grievance',
      'downloads',
    ];

    const handleScroll = () => {
      const scrollPos = window.scrollY + 220;
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sectionIds[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (id) => {
    setActiveSection(id);
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleFillDemo = () => {
    const creds = studentService.getDemoCredentials();
    if (creds) {
      setDemoPrefill({
        enrollment: creds.enrollmentNo,
        branch: creds.branchId,
        semester: creds.semester,
        dob: creds.dob,
      });
      // Jump to exam schedule
      handleNavigate('exam-schedule');
    }
  };

  return (
    <div className="pt-28 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl 2xl:max-w-[1600px] mx-auto min-h-screen">
      {/* 1. Hero Header */}
      <StudentHero onFillDemo={studentService.isDemoMode() ? handleFillDemo : null} />

      {/* 2. Top Student Hub Quick Links Grid */}
      <StudentQuickHub onNavigate={handleNavigate} />

      {/* 3. Sticky Section Nav Tabs */}
      <StickySectionNav
        activeSection={activeSection}
        onSelectSection={handleNavigate}
      />

      {/* 4. Section A: Exam Schedule */}
      <ExamScheduleSection
        key={`sched-${demoPrefill.enrollment}`}
        prefillEnrollment={demoPrefill.enrollment}
        prefillBranch={demoPrefill.branch}
        prefillSemester={demoPrefill.semester}
      />

      {/* 5. Section B: Results */}
      <ResultsSection
        key={`res-${demoPrefill.enrollment}`}
        prefillEnrollment={demoPrefill.enrollment}
        prefillBranch={demoPrefill.branch}
        prefillSemester={demoPrefill.semester}
      />

      {/* 6. Section C: Remaining 14 Standard University Student Sections */}
      <NoticesSection />

      <AcademicCalendarSection />

      <ClassTimetableSection
        prefillBranch={demoPrefill.branch}
        prefillSemester={demoPrefill.semester}
      />

      <HallTicketSection
        key={`ticket-${demoPrefill.enrollment}`}
        prefillEnrollment={demoPrefill.enrollment}
        prefillDob={demoPrefill.dob}
      />

      <SyllabusSection
        prefillBranch={demoPrefill.branch}
        prefillSemester={demoPrefill.semester}
      />

      <FeesSection prefillEnrollment={demoPrefill.enrollment} />

      <ScholarshipsSection prefillEnrollment={demoPrefill.enrollment} />

      <AttendanceSection prefillEnrollment={demoPrefill.enrollment} />

      <ReEvaluationSection prefillEnrollment={demoPrefill.enrollment} />

      <CertificatesSection prefillEnrollment={demoPrefill.enrollment} />

      <PlacementsSection />

      <CampusFacilitiesSection />

      <GrievanceSection />

      <DownloadsSection />
    </div>
  );
}

export default StudentUpdatesPage;
