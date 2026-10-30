// Centralized Academic Programs & Branches Configuration for HR University
// Single source of truth for branch dropdowns, semesters, and validation rules.

export const branches = [
  {
    id: 'ai-data-science',
    code: 'AIDS',
    name: 'AI & Data Science',
    shortName: 'AI & DS',
    degree: 'B.Sc / M.Tech',
    badge: 'Autonomous Swarms',
    tint: '#7C7FFF'
  },
  {
    id: 'computer-science',
    code: 'CSE',
    name: 'Computer Science',
    shortName: 'CSE',
    degree: 'B.Tech / M.Tech',
    badge: 'Post-Quantum & Systems',
    tint: '#5B5BF0'
  },
  {
    id: 'pharmacy',
    code: 'PHARM',
    name: 'Paramedical & Pharmacy',
    shortName: 'Pharmacy',
    degree: 'B.Pharm / Pharm.D',
    badge: 'Drug Discovery R&D',
    tint: '#2DD4BF'
  },
  {
    id: 'sports-science',
    code: 'SPORTS',
    name: 'Sports Science & Analytics',
    shortName: 'Sports Science',
    degree: 'B.Sc Sports Sci',
    badge: 'Biometrics & Telemetry',
    tint: '#FF7A59'
  },
  {
    id: 'design',
    code: 'DES',
    name: 'Design & Spatial Computing',
    shortName: 'Design & Spatial',
    degree: 'B.Des / M.Des',
    badge: 'VisionOS & Haptics',
    tint: '#F472B6'
  },
  {
    id: 'architecture',
    code: 'ARCH',
    name: 'Parametric Architecture',
    shortName: 'Architecture',
    degree: 'B.Arch / M.Arch',
    badge: 'Regenerative Urbanism',
    tint: '#38BDF8'
  },
  {
    id: 'business',
    code: 'BVS',
    name: 'Business & Venture Systems',
    shortName: 'Business & Ventures',
    degree: 'B.S / MBA Dual',
    badge: 'Algorithmic Liquidity',
    tint: '#FFC53D'
  },
  {
    id: 'media-film',
    code: 'MEDIA',
    name: 'Media & Film Production',
    shortName: 'Media & Film',
    degree: 'B.A / B.Des',
    badge: 'Virtual LED Soundstage',
    tint: '#A78BFA'
  },
  {
    id: 'biotechnology',
    code: 'BIOTECH',
    name: 'Synthetic Biology',
    shortName: 'Synthetic Bio',
    degree: 'B.Sc & M.Sc Integrated',
    badge: 'CRISPR & Bio-Gen',
    tint: '#4ADE80'
  }
];

export const semesters = [
  { value: '1', label: 'Semester 1 (Autumn Year 1)' },
  { value: '2', label: 'Semester 2 (Spring Year 1)' },
  { value: '3', label: 'Semester 3 (Autumn Year 2)' },
  { value: '4', label: 'Semester 4 (Spring Year 2)' },
  { value: '5', label: 'Semester 5 (Autumn Year 3)' },
  { value: '6', label: 'Semester 6 (Spring Year 3)' },
  { value: '7', label: 'Semester 7 (Autumn Year 4)' },
  { value: '8', label: 'Semester 8 (Spring Year 4)' }
];

export const academicYears = ['2026-2027', '2025-2026', '2024-2025'];

// Enrollment number validation rules
export const enrollmentRules = {
  minLength: 6,
  maxLength: 16,
  pattern: /^[A-Z0-9_-]{6,16}$/,
  formatHelp: 'Format: 6-16 alphanumeric characters (e.g., HRU24AI108)'
};

export const validateEnrollmentNumber = (raw) => {
  if (!raw) return { valid: false, error: 'Enrollment number is required.' };
  const trimmed = raw.trim().toUpperCase();
  if (trimmed.length < enrollmentRules.minLength || trimmed.length > enrollmentRules.maxLength) {
    return { valid: false, error: `Enrollment number must be between ${enrollmentRules.minLength} and ${enrollmentRules.maxLength} characters.` };
  }
  if (!enrollmentRules.pattern.test(trimmed)) {
    return { valid: false, error: 'Only letters, numbers, hyphens, and underscores are allowed.' };
  }
  return { valid: true, value: trimmed };
};

export default {
  branches,
  semesters,
  academicYears,
  enrollmentRules,
  validateEnrollmentNumber
};
