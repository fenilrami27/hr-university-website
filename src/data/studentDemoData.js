// HR University Demo Student Data
// IMPORTANT: This demo data is ONLY enabled when import.meta.env.VITE_USE_DEMO_DATA === 'true'.
// Otherwise, the student service returns empty states by default.

export const DEMO_CONFIG = {
  branchId: 'ai-data-science',
  branchName: 'AI & Data Science',
  semester: '4',
  enrollmentNo: 'HRU24AI108',
  dob: '2004-09-15',
  studentName: 'Aryan V. Patel',
  degree: 'B.Sc in Autonomous AI & Intelligent Systems',
  batch: '2024 - 2028'
};

export const demoExamSchedule = {
  branchId: 'ai-data-science',
  branchName: 'AI & Data Science',
  semester: '4',
  academicYear: '2026-2027',
  examSession: 'Spring End-Semester Examinations 2027',
  publishedDate: '15 Oct 2026',
  timetable: [
    {
      code: 'AI-401',
      name: 'Deep Neural Transformers & LLM Reasoning',
      date: '18 Nov 2026',
      day: 'Wednesday',
      time: '10:00 AM - 01:00 PM',
      type: 'Theory & System Defense',
      venue: 'Turing Hall A-101',
      session: 'Morning'
    },
    {
      code: 'AI-402',
      name: 'Autonomous Swarms & Multi-Agent Orchestration',
      date: '20 Nov 2026',
      day: 'Friday',
      time: '10:00 AM - 01:00 PM',
      type: 'Studio Benchmark',
      venue: 'Glass Atrium Bay B',
      session: 'Morning'
    },
    {
      code: 'AI-403',
      name: 'Embodied Robotics & Spatial Telemetry',
      date: '23 Nov 2026',
      day: 'Monday',
      time: '02:00 PM - 05:00 PM',
      type: 'Lab Practical & Hardware Rig',
      venue: 'Cybernetics Bay 3',
      session: 'Afternoon'
    },
    {
      code: 'AI-404',
      name: 'Statistical Mechanics & High-Dimensional Geometry',
      date: '25 Nov 2026',
      day: 'Wednesday',
      time: '10:00 AM - 01:00 PM',
      type: 'Written Theory',
      venue: 'Hall of Wisdom 204',
      session: 'Morning'
    },
    {
      code: 'AI-405',
      name: 'Production Capstone Sprint & Venture Defense',
      date: '27 Nov 2026',
      day: 'Friday',
      time: '09:30 AM - 01:30 PM',
      type: 'Jury Defense & Live Pitch',
      venue: 'Innovation Theater',
      session: 'Morning'
    }
  ]
};

export const demoResult = {
  enrollmentNo: 'HRU24AI108',
  studentName: 'Aryan V. Patel',
  fatherName: 'Vikram Patel',
  branchId: 'ai-data-science',
  branchName: 'AI & Data Science',
  degree: 'Bachelor of Science (Honors)',
  semester: '4',
  academicYear: '2025-2026',
  examSession: 'Spring 2026 Regular Examination',
  declarationDate: '12 June 2026',
  status: 'PASS',
  division: 'First Class with Distinction',
  sgpa: '9.65',
  cgpa: '9.48',
  totalCredits: 20,
  subjects: [
    {
      code: 'AI-401',
      name: 'Deep Neural Transformers & LLM Reasoning',
      credits: 4,
      internal: 28,
      external: 64,
      total: 92,
      grade: 'A+',
      gradePoint: 10,
      status: 'Pass'
    },
    {
      code: 'AI-402',
      name: 'Autonomous Swarms & Multi-Agent Orchestration',
      credits: 4,
      internal: 29,
      external: 67,
      total: 96,
      grade: 'O',
      gradePoint: 10,
      status: 'Pass'
    },
    {
      code: 'AI-403',
      name: 'Embodied Robotics & Spatial Telemetry',
      credits: 4,
      internal: 27,
      external: 61,
      total: 88,
      grade: 'A+',
      gradePoint: 9,
      status: 'Pass'
    },
    {
      code: 'AI-404',
      name: 'Statistical Mechanics & High-Dimensional Geometry',
      credits: 3,
      internal: 26,
      external: 59,
      total: 85,
      grade: 'A',
      gradePoint: 9,
      status: 'Pass'
    },
    {
      code: 'AI-405',
      name: 'Production Capstone Sprint & Venture Defense',
      credits: 5,
      internal: 30,
      external: 68,
      total: 98,
      grade: 'O',
      gradePoint: 10,
      status: 'Pass'
    }
  ]
};

export const demoNotices = [
  {
    id: 'not-01',
    title: 'Schedule for End-Semester Practical & Theory Examinations (Nov 2026)',
    category: 'Examinations',
    date: '24 Oct 2026',
    pinned: true,
    badge: 'Urgent',
    fileSize: '1.2 MB',
    summary: 'Detailed guidelines regarding exam hall entry, permitted calculators, and zero-tolerance malpractice protocols.'
  },
  {
    id: 'not-02',
    title: 'Allocation of 512-H100 GPU Clusters for Capstone Project Cohort',
    category: 'Academic',
    date: '20 Oct 2026',
    pinned: false,
    badge: 'Compute Drop',
    fileSize: '840 KB',
    summary: 'SSH access tokens, SLURM batch job priority queues, and quota allocation for semester 4, 6 and 8 engineering labs.'
  },
  {
    id: 'not-03',
    title: 'Merit Seed Fellowship Round 2 Application Window Extended',
    category: 'Venture & Aid',
    date: '15 Oct 2026',
    pinned: false,
    badge: 'Grant Notice',
    fileSize: '450 KB',
    summary: 'Eligible undergraduate teams with shipped prototypes can pitch the Investment Committee for equity-free grants.'
  },
  {
    id: 'not-04',
    title: 'Annual Hostel Winter Break Check-out & Campus Transit Timings',
    category: 'Campus & Hostel',
    date: '10 Oct 2026',
    pinned: false,
    badge: 'Logistics',
    fileSize: '620 KB',
    summary: 'Electric bus shuttle schedules to Ahmedabad Airport & Railway Station during semester recess.'
  }
];

export const demoCalendar = [
  {
    phase: 'Phase 01: Semester Kickoff & Studio Sprints',
    dateRange: 'Jul 20 - Sep 15, 2026',
    status: 'Completed',
    milestones: [
      { date: 'Jul 20', title: 'Classes commence across all 9 departments' },
      { date: 'Aug 10', title: 'Course add/drop deadline & studio lab registration' },
      { date: 'Sep 05', title: 'First continuous evaluation milestone & sprint review' }
    ]
  },
  {
    phase: 'Phase 02: Mid-Terms & Hackathon Month',
    dateRange: 'Sep 16 - Oct 31, 2026',
    status: 'Current',
    milestones: [
      { date: 'Oct 01 - 07', title: 'Mid-term written examinations & code scrimmage' },
      { date: 'Oct 08 - 16', title: 'Navratri Mahotsav university celebrations' },
      { date: 'Oct 25', title: 'Venture seed committee pitches & prototype showcase' }
    ]
  },
  {
    phase: 'Phase 03: Final Exams & Capstone Defenses',
    dateRange: 'Nov 01 - Dec 15, 2026',
    status: 'Upcoming',
    milestones: [
      { date: 'Nov 10', title: 'Hall tickets generated on student updates portal' },
      { date: 'Nov 18 - 27', title: 'End-semester theory & studio jury examinations' },
      { date: 'Dec 05', title: 'Grading completion & provisional marksheet declaration' }
    ]
  }
];

export const demoTimetable = {
  branchId: 'ai-data-science',
  semester: '4',
  section: 'A',
  schedule: [
    { day: 'Monday', slots: [
      { time: '09:00 - 10:30', course: 'AI-401: Deep Neural Transformers', room: 'Turing Hall A-101', faculty: 'Dr. Sterling' },
      { time: '11:00 - 12:30', course: 'AI-404: Statistical Mechanics', room: 'Hall 204', faculty: 'Prof. Mukherjee' },
      { time: '02:00 - 05:00', course: 'AI-403: Embodied Robotics Lab', room: 'Cybernetics Bay 3', faculty: 'Dr. Varma & Fellows' }
    ]},
    { day: 'Tuesday', slots: [
      { time: '09:30 - 11:00', course: 'AI-402: Autonomous Swarms', room: 'Glass Atrium B', faculty: 'Prof. Thorne' },
      { time: '11:30 - 01:00', course: 'AI-401: Deep Neural Transformers', room: 'Turing Hall A-101', faculty: 'Dr. Sterling' },
      { time: '02:30 - 04:30', course: 'AI-405: Venture Capstone Studio', room: 'Innovation Pod 2', faculty: 'Industry Mentors' }
    ]},
    { day: 'Wednesday', slots: [
      { time: '09:00 - 10:30', course: 'AI-404: Statistical Mechanics', room: 'Hall 204', faculty: 'Prof. Mukherjee' },
      { time: '11:00 - 01:00', course: 'H100 GPU Cluster Hands-on', room: 'Server Bay 1', faculty: 'Lab Engineers' },
      { time: '02:00 - 04:00', course: 'Open Research Colloquium', room: 'Auditorium', faculty: 'Visiting Fellows' }
    ]},
    { day: 'Thursday', slots: [
      { time: '09:30 - 11:00', course: 'AI-402: Autonomous Swarms', room: 'Glass Atrium B', faculty: 'Prof. Thorne' },
      { time: '11:30 - 01:00', course: 'AI-403: Embodied Robotics Theory', room: 'Turing Hall A-101', faculty: 'Dr. Varma' },
      { time: '02:00 - 05:00', course: 'Capstone Buildathon Sprint', room: 'FabLab Studio', faculty: 'Peer Led' }
    ]},
    { day: 'Friday', slots: [
      { time: '10:00 - 12:00', course: 'Weekly Code Review & Sprint Demo', room: 'Innovation Theater', faculty: 'Full Faculty Panel' },
      { time: '02:00 - 04:00', course: 'Mentorship & Venture Advisory', room: 'Founder Lounge', faculty: 'VC Partners' }
    ]}
  ]
};

export const demoHallTicket = {
  enrollmentNo: 'HRU24AI108',
  dob: '2004-09-15',
  studentName: 'Aryan V. Patel',
  program: 'B.Sc Autonomous AI & Intelligent Systems',
  semester: '4',
  examRollNo: 'EX26-AIDS-042',
  center: 'Main Campus Academic Complex, Gandhinagar Highway',
  reportingTime: '09:15 AM (Morning) / 01:15 PM (Afternoon)',
  verifiedStatus: 'ELIGIBLE (Attendance 92.4%)',
  papers: [
    { code: 'AI-401', name: 'Deep Neural Transformers', date: '18 Nov 2026', time: '10:00 AM', seat: 'T-108' },
    { code: 'AI-402', name: 'Autonomous Swarms', date: '20 Nov 2026', time: '10:00 AM', seat: 'GA-042' },
    { code: 'AI-403', name: 'Embodied Robotics', date: '23 Nov 2026', time: '02:00 PM', seat: 'CB-019' },
    { code: 'AI-404', name: 'Statistical Mechanics', date: '25 Nov 2026', time: '10:00 AM', seat: 'HW-204' },
    { code: 'AI-405', name: 'Capstone Defense', date: '27 Nov 2026', time: '09:30 AM', seat: 'IT-008' }
  ]
};

export const demoSyllabus = [
  {
    code: 'AI-401',
    name: 'Deep Neural Transformers & LLM Reasoning',
    credits: 4,
    modules: ['Attention Mechanisms & RoPE', 'KV Caching & FlashAttention 3', 'Chain-of-Thought Reasoning Trees', 'Fine-tuning (LoRA, DPO, RLHF)'],
    pyqs: ['Spring 2026 (Question Paper & Solutions)', 'Spring 2025 Paper', 'Specimen Benchmark Rigs'],
    materials: ['Lecture Slides Vol 1-4 (PDF)', 'PyTorch Transformer from Scratch (Jupyter Notebook)', 'FlashAttention Implementation Guide']
  },
  {
    code: 'AI-402',
    name: 'Autonomous Swarms & Multi-Agent Orchestration',
    credits: 4,
    modules: ['Actor-Critic Swarm Architecture', 'Consensus & Raft in Distributed Agents', 'Graph Neural State Tracking', 'Real-world Sandbox Safety'],
    pyqs: ['Spring 2026 Paper', 'Mid-term Benchmark Exam 2025'],
    materials: ['Multi-Agent Protocol Whitepaper', 'Simulation Sandbox Codebase']
  },
  {
    code: 'AI-403',
    name: 'Embodied Robotics & Spatial Telemetry',
    credits: 4,
    modules: ['Kinematic State Estimation', 'Vision-Language-Action Models (VLA)', 'Sim-to-Real Domain Randomization', 'Tactile Sensor Fusion'],
    pyqs: ['Spring 2026 Practical Exam Blueprint', 'Spring 2025 Paper'],
    materials: ['Robotics ROS2 Lab Manual', 'Isaac Sim Integration Templates']
  }
];

export const demoFees = {
  enrollmentNo: 'HRU24AI108',
  studentName: 'Aryan V. Patel',
  currentSemester: '4',
  academicYear: '2026 - 2027',
  overallStatus: 'PAID',
  transactions: [
    {
      id: 'TXN-2026-4891',
      date: '15 Jul 2026',
      description: 'Semester 4 Tuition & Studio Fee (After 50% Fellowship)',
      amount: '₹85,000',
      status: 'Success',
      receiptNo: 'HRU-RCP-2026-0942'
    },
    {
      id: 'TXN-2026-1102',
      date: '18 Jul 2026',
      description: 'H100 Supercomputing Lab & Cluster Access Fee',
      amount: '₹15,000',
      status: 'Success',
      receiptNo: 'HRU-RCP-2026-1188'
    },
    {
      id: 'TXN-2026-0045',
      date: '02 Aug 2026',
      description: 'Annual Library, Sports & Health Center Retainer',
      amount: '₹8,000',
      status: 'Success',
      receiptNo: 'HRU-RCP-2026-1402'
    }
  ]
};

export const demoScholarships = {
  enrollmentNo: 'HRU24AI108',
  studentName: 'Aryan V. Patel',
  activeScholarship: {
    name: 'HRU Merit Seed Fellowship (Tier-1)',
    awardDate: 'Aug 2024',
    waiverPercent: '50% Tuition Waiver',
    status: 'Active (Renewed for 2026-27)',
    annualBenefit: '₹1,70,000 / year',
    cgpaRequirement: 'Min 8.5 CGPA (Current: 9.48)',
    nextRenewalDate: 'June 2027'
  }
};

export const demoAttendance = {
  enrollmentNo: 'HRU24AI108',
  overallPercentage: 92.4,
  minimumRequired: 75.0,
  status: 'Compliant / Examination Eligible',
  subjects: [
    { code: 'AI-401', name: 'Transformers & LLM', attended: 44, total: 48, percent: 91.6 },
    { code: 'AI-402', name: 'Autonomous Swarms', attended: 39, total: 42, percent: 92.8 },
    { code: 'AI-403', name: 'Embodied Robotics', attended: 48, total: 50, percent: 96.0 },
    { code: 'AI-404', name: 'Statistical Mechanics', attended: 32, total: 36, percent: 88.8 },
    { code: 'AI-405', name: 'Capstone Defense', attended: 46, total: 48, percent: 95.8 }
  ]
};

export const demoCertificates = [
  { id: 'REQ-8801', type: 'Bonafide Certificate', requestDate: '10 Sep 2026', status: 'Ready for Download', refNo: 'HRU/BON/2026/410' },
  { id: 'REQ-7912', type: 'Hackathon NOC (Global AI Summit)', requestDate: '14 Aug 2026', status: 'Approved & Dispatched', refNo: 'HRU/NOC/2026/189' }
];

export const demoPlacements = [
  {
    company: 'OpenPerception Labs',
    role: 'Embodied AI Research Intern',
    stipend: '₹1.2 Lakh / month',
    deadline: '05 Nov 2026',
    status: 'Applications Open',
    eligibility: 'Semester 4+ in AI/CSE, Min 8.5 CGPA'
  },
  {
    company: 'NeuralDrive Systems',
    role: 'Autonomous Vehicle Controls Fellow',
    stipend: '₹95,000 / month',
    deadline: '12 Nov 2026',
    status: 'Shortlist Announced',
    eligibility: 'B.Sc AI / B.Tech CSE'
  },
  {
    company: 'Nexus Capital Venture Partners',
    role: 'Deep-Tech Student Fellow',
    stipend: '₹75,000 / month',
    deadline: '20 Nov 2026',
    status: 'Interview Round 2',
    eligibility: 'Open to All Batches'
  }
];

export const demoFacilities = {
  library: {
    borrowedCount: 2,
    limit: 6,
    items: [
      { title: 'Reinforcement Learning: An Introduction (Sutton & Barto)', dueDate: '14 Nov 2026', renewable: true },
      { title: 'Probabilistic Robotics (Thrun, Burgard, Fox)', dueDate: '18 Nov 2026', renewable: true }
    ]
  },
  hostel: {
    building: 'Aryabhata Residential Tower (Block B)',
    roomNumber: 'B-304 (Double Studio with Deck)',
    warden: 'Prof. S. R. Sharma (Ext: 4421)'
  },
  transport: {
    passId: 'HRU-BUS-2026-904',
    route: 'Route 14: SG Highway • Prahlad Nagar • Science City • HRU Campus',
    timing: 'Pickup: 07:45 AM • Return: 05:30 PM'
  }
};

export const demoGrievances = [
  {
    ticketId: 'GRV-2026-1044',
    category: 'IT & Lab Access',
    subject: 'SLURM job queue timeout for multi-GPU training job',
    date: '18 Oct 2026',
    status: 'Resolved',
    resolution: 'Node allocation limit increased to 4x H100 with 12h max walltime for capstone project.'
  }
];

export const demoDownloads = [
  { title: 'Academic Ordinance & Grading Policy (2026/27)', size: '2.4 MB', type: 'PDF' },
  { title: 'Anti-Ragging Affidavit & Code of Conduct', size: '480 KB', type: 'PDF' },
  { title: 'Student Entrepreneurship & Venture Fund Bylaws', size: '1.8 MB', type: 'PDF' },
  { title: 'Campus Health & Medical Emergency Guide', size: '920 KB', type: 'PDF' }
];
