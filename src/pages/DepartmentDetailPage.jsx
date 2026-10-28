import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ChevronDown } from 'lucide-react';
import Button from '../components/ui/Button';
import mediaRegistry from '../data/media';

export function DepartmentDetailPage() {
  const { slug } = useParams();
  const [openCurriculum, setOpenCurriculum] = useState(0);

  // Department catalog dictionary covering all 9 academic tracks
  const departmentCatalog = {
    'ai-data-science': {
      name: 'AI and Data Science',
      badge: '512x H100 Cluster',
      tagline: 'Engineering autonomous agentic swarms, multimodal reasoning & robotics intelligence',
      tint: '#7C7FFF',
      photo: mediaRegistry.departments.ai.src,
      overview:
        'The Department of AI and Data Science is engineered for developers and researchers who refuse to wait five years to ship real models. Students train custom architectures directly on our 512-H100 GPU cluster, deploy embodied robots in physical simulation arenas, and work directly with venture-funded AI research studios.',
      stats: [
        { label: 'Compute Power', value: '512x H100 GPU Nodes' },
        { label: 'Median Starting Comp', value: '₹48 LPA Average Package' },
        { label: 'Faculty-Student Ratio', value: '1 : 6 Dedicated' },
      ],
      programs: [
        'B.Sc in Autonomous Intelligence & Swarms',
        'M.Tech in Neural Systems & Large World Models',
        'Ph.D Fellowship in Embodied Robotics & Alignment',
      ],
      curriculum: [
        {
          year: 'Sprint 01: Foundations & Transformers',
          details: 'Attention mechanisms, custom tokenizer pipelines, CUDA kernels, and self-supervised loss optimization.',
        },
        {
          year: 'Sprint 02: Multi-Agent Orchestration',
          details: 'Decentralized agent consensus, tool-use grounding, synthetic data generation, and reasoning models.',
        },
        {
          year: 'Sprint 03: Embodied Robotics & Vision',
          details: 'Simulation-to-real transfer, kinematic arm telemetry, spatial perception, and multimodal robotics.',
        },
        {
          year: 'Sprint 04: Production Capstone & Seed Pitch',
          details: 'Deploying model endpoints to global edge inference networks and pitching the HRU ₹50 Cr seed fund.',
        },
      ],
      faculty: [
        { name: 'Dr. Valerius Thorne', title: 'Dean of Artificial Intelligence', role: 'Ex-DeepMind Fellow' },
        { name: 'Aria Henderson', title: 'Director of Agentic Swarms', role: 'Principal Systems Architect' },
      ],
    },
    'computer-science': {
      name: 'Computer Science and Engineering',
      badge: 'High Performance Systems',
      tagline: 'Distributed operating systems, low-latency protocols & post-quantum security',
      tint: '#5B5BF0',
      photo: mediaRegistry.departments.cse.src,
      overview:
        'Move beyond passive code writing into production infrastructure engineering. Build distributed databases, compiler optimizations, kernel network drivers, and post-quantum cryptographic primitives from day zero.',
      stats: [
        { label: 'Code Shipped', value: '100% Production Grade' },
        { label: 'Median Comp', value: '₹50 LPA Average Package' },
        { label: 'Hackathons', value: 'Weekly 48h Sprints' },
      ],
      programs: [
        'B.Tech in Distributed Systems & Web Platforms',
        'M.S in High-Performance Computing',
        'Cybersecurity & Cryptography Fellowship',
      ],
      curriculum: [
        { year: 'Sprint 01: Systems & Compilers', details: 'Rust memory safety, LLVM internals, and CPU cache optimization.' },
        { year: 'Sprint 02: Distributed Networks', details: 'Raft consensus, low-latency RPCs, and edge content routing.' },
        { year: 'Sprint 03: Cryptography & Security', details: 'Zero-knowledge proofs, formal verification, and penetration.' },
        { year: 'Sprint 04: Global Scale Deployment', details: 'Managing high-concurrency cloud clusters handling millions of requests.' },
      ],
      faculty: [
        { name: 'Marcus Sterling', title: 'Head of Distributed Protocols', role: 'Core Contributor to Open-Source Engines' },
        { name: 'Dr. Linnea Croft', title: 'Chair of Cryptographic Systems', role: 'PhD, ETH Zurich' },
      ],
    },
    'pharmacy': {
      name: 'Paramedical & Pharmaceutical Sciences',
      badge: 'Clinical R&D & AI Drug Discovery',
      tagline: 'Computational molecular design, high-throughput drug screening & advanced paramedic care',
      tint: '#2DD4BF',
      photo: mediaRegistry.departments.pharmacy.src,
      overview:
        'Bridging computational AI pharmacology with direct clinical paramedic rotations. HRU fellows model ligand-protein docks with deep learning, formulate targeted nanomedicines, and gain real-world emergency triage and paramedic trauma experience.',
      stats: [
        { label: 'Cleanroom Facilities', value: 'BSL-2 Certified' },
        { label: 'Active Patents', value: '18 Filed Patents' },
        { label: 'Clinical Rotations', value: '1,200+ Hospital Hours' },
      ],
      programs: [
        'B.Pharm with AI Drug Modeling Specialization',
        'M.Pharm in Nanomedicine & Drug Delivery Systems',
        'Doctor of Pharmacy (Pharm.D) & Clinical Fellowship',
      ],
      curriculum: [
        { year: 'Sprint 01: Molecular Chemistry & Cellular Biology', details: 'Pharmacokinetics, cell biochemistry, and molecular dynamics modeling.' },
        { year: 'Sprint 02: AI Drug Screening & Synthesis', details: 'Diffusion models for de novo molecular design and automated microfluidics.' },
        { year: 'Sprint 03: Paramedical Clinical Simulation', details: 'Emergency life support triage, trauma pharmacology, and clinical monitoring.' },
        { year: 'Sprint 04: Regulatory Capstone & Clinical Trial Protocol', details: 'FDA/CDSCO compliance, human trial protocol formulation, and bioethics.' },
      ],
      faculty: [
        { name: 'Dr. Rajeshwari Sen', title: 'Chair of Pharmaceutical Discovery', role: 'Former Principal Scientist, CSIR' },
        { name: 'Dr. Julianne Mercer', title: 'Head of Clinical Paramedical Simulation', role: 'Emergency Medicine Consultant, NHS' },
      ],
    },
    'sports-science': {
      name: 'Sports Science and Analytics',
      badge: 'Olympic Track & Biometrics',
      tagline: 'Biomechanical telemetry, kinetic load analysis & peak athletic longevity',
      tint: '#FF7A59',
      photo: mediaRegistry.departments.sports.src,
      overview:
        'Engineering the future of human performance. Students work inside our Olympic-spec indoor stadium and biometric lab, deploying high-speed motion capture, surface EMG sensors, and metabolic VO2 analysis to train elite athletes and build sports tech startups.',
      stats: [
        { label: 'Biomechanics Lab', value: '120 FPS Motion Capture' },
        { label: 'Pro Team Partners', value: '14 League Franchises' },
        { label: 'Starting CTC', value: '₹28 LPA Top Offer' },
      ],
      programs: [
        'B.Sc in Sports Biomechanics & Performance Analytics',
        'M.Sc in Athletic Rehabilitation & High Performance',
        'Fellowship in Wearable Sensory Engineering',
      ],
      curriculum: [
        { year: 'Sprint 01: Applied Kinesiology & Human Anatomy', details: 'Musculoskeletal biomechanics, force plate vector analysis, and EMG telemetry.' },
        { year: 'Sprint 02: Sensor Engineering & Wearables', details: 'Inertial measurement unit (IMU) firmware, Bluetooth telemetry, and gait analysis.' },
        { year: 'Sprint 03: Machine Learning in Performance Diagnostics', details: 'Computer vision pose estimation, injury risk predictive modeling, and fatigue metrics.' },
        { year: 'Sprint 04: Pro Franchise Residency Capstone', details: 'Full-season tactical performance analytics embedded with national athletic teams.' },
      ],
      faculty: [
        { name: 'Dr. Arjun Nair', title: 'Director of Biomechanics', role: 'Lead Sports Scientist, National Athletics Federation' },
        { name: 'Chloe Dubois', title: 'Chair of Athletic Longevity', role: 'Ex-Performance Coach, French Olympic Committee' },
      ],
    },
    'design': {
      name: 'Design and Spatial Computing',
      badge: 'VisionOS & XR Hardware Lab',
      tagline: 'Spatial vision interfaces, generative typography & tactile physical UX',
      tint: '#F472B6',
      photo: mediaRegistry.departments.design.src,
      overview:
        'The screen is dissolving. In the Design and Spatial Computing studio, fellows design the next generation of 3D spatial computing interfaces, spatial audio landscapes, and haptic feedback experiences using Apple Vision Pro, Meta Quest Pro, and custom micro-gesture sensors.',
      stats: [
        { label: 'Spatial Rigs', value: 'Volumetric Stage 01' },
        { label: 'Industry Fellows', value: 'Apple & Figma Mentors' },
        { label: 'Median Comp', value: '₹36 LPA Average' },
      ],
      programs: [
        'B.Des in Spatial Interface & Generative Worlds',
        'M.Des in Human-Computer Interaction & XR Systems',
        'Fellowship in Volumetric Spatial Typography',
      ],
      curriculum: [
        { year: 'Sprint 01: Spatial Thinking & 3D Form', details: 'Volumetric layouts, eye-tracking ergonomics, and depth perception heuristics.' },
        { year: 'Sprint 02: Real-time XR Engines & Swift/Metal', details: 'RealityKit, Unity/Unreal spatial pipelines, and real-time shader development.' },
        { year: 'Sprint 03: Haptic Feedback & Audio Foveation', details: 'Micro-vibration transducers, ambisonics spatial audio, and multisensory UI.' },
        { year: 'Sprint 04: Spatial Venture Launch', details: 'Building, packaging, and commercializing a production spatial computing application.' },
      ],
      faculty: [
        { name: 'Elena Rostova', title: 'Head of Spatial Computing Studio', role: 'Ex-Principal Spatial UI Designer' },
        { name: 'Kaelen Voss', title: 'Director of Generative Typography', role: 'Award-winning Creative Director' },
      ],
    },
    'architecture': {
      name: 'Parametric Architecture & Urbanism',
      badge: 'Robotic Fabrication & CNC',
      tagline: 'Generative biomaterial structures, robotic fabrication & smart autonomous cities',
      tint: '#38BDF8',
      photo: mediaRegistry.departments.architecture.src,
      overview:
        'Redefining physical space with algorithmic geometry and carbon-negative materials. Students program industrial robotic arms for concrete 3D printing, simulate micro-climatic urban wind tunnels, and formulate living mycelium structural panels.',
      stats: [
        { label: 'Robotic Arms', value: '6-Axis ABB Industrial' },
        { label: 'Carbon Impact', value: 'Net Carbon Negative' },
        { label: 'Showcase', value: 'Milan Biennale Exhibitor' },
      ],
      programs: [
        'B.Arch in Computational Architecture & Biomaterials',
        'M.Arch in Autonomous Urbanism & Robotic Construction',
        'Doctoral Fellowship in Planetary Habitats',
      ],
      curriculum: [
        { year: 'Sprint 01: Parametric Geometry & Grasshopper/Rhino', details: 'Algorithmic structural topologies, Voronoi tessellations, and stress distribution.' },
        { year: 'Sprint 02: Robotic Cable Extrusion & 3D Concrete', details: 'Path planning for robotic arms, toolpath generation, and rheology of curing mixes.' },
        { year: 'Sprint 03: Living Bio-Composite Materials', details: 'Growing structural mycelium bricks, bio-resin binders, and environmental lifecycle testing.' },
        { year: 'Sprint 04: Smart City Capstone Pavilion', details: 'Constructing a full-scale, sensor-instrumented permanent campus pavilion.' },
      ],
      faculty: [
        { name: 'Dr. Kenzo Mori', title: 'Dean of Computational Architecture', role: 'Pritzker Research Fellow' },
        { name: 'Ananya Deshmukh', title: 'Head of Robotic Construction Bay', role: 'Lead Architect, Sustainable Infrastructure' },
      ],
    },
    'business': {
      name: 'Business and Venture Systems',
      badge: '₹50 Cr Student Seed Syndicate',
      tagline: 'Decentralized liquidity, algorithmic trading & venture-scale building',
      tint: '#FFC53D',
      photo: mediaRegistry.departments.business.src,
      overview:
        'No boring case studies from twenty years ago. At HRU, business students manage an active ₹50 Crore student venture fund, formulate quantitative algorithmic trading strategies on live liquidity pools, and launch real Delaware C-Corp startups before graduation.',
      stats: [
        { label: 'Direct Seed Capital', value: '₹50 Cr Dedicated Fund' },
        { label: 'Cohort Startups', value: '24 Backed Ventures' },
        { label: 'Max Single Ticket', value: '₹1.5 Cr Seed Check' },
      ],
      programs: [
        'B.B.A in Venture Building & Product Strategy',
        'M.B.A in Algorithmic Finance & Quantitative Economics',
        'Executive Fellowship in Venture Capital Syndicate Management',
      ],
      curriculum: [
        { year: 'Sprint 01: Venture Economics & Unit Math', details: 'CAC/LTV modeling, cap table mathematics, SaaS mechanics, and convertible notes.' },
        { year: 'Sprint 02: Quantitative Modeling & Algo Finance', details: 'Python/C++ backtesting, statistical arbitrage, and decentralized automated market makers.' },
        { year: 'Sprint 03: Fund Diligence & Portfolio Syndicate', details: 'Leading due diligence on fellow students’ studio startups and deploying live checks.' },
        { year: 'Sprint 04: Institutional Fund Pitch & Scale', details: 'Pitching top tier global venture capital syndicates in San Francisco, Tokyo, and Bengaluru.' },
      ],
      faculty: [
        { name: 'Marcus Vance', title: 'Managing Partner, HRU Venture Fund', role: 'Founding GP, 3 Tech Unicorn Exits' },
        { name: 'Siddharth Mehta', title: 'Chair of Algorithmic Finance', role: 'Ex-Head of Quantitative Trading, Citadel Securities' },
      ],
    },
    'media-film': {
      name: 'Media and Film Production',
      badge: 'Dolby Atmos & LED Volume Stage',
      tagline: 'Virtual volume cinematography, generative sound design & immersive audio',
      tint: '#A78BFA',
      photo: mediaRegistry.departments.media.src,
      overview:
        'Where cinematic storytelling merges with real-time game engines. Our state-of-the-art virtual production studio features a 270-degree LED volume wall running Unreal Engine 5.4, allowing directors to shoot anywhere in the universe in real-time camera tracking.',
      stats: [
        { label: 'Virtual Stage', value: '270° LED Volume Wall' },
        { label: 'Audio Mastering', value: '9.1.6 Dolby Atmos Suite' },
        { label: 'Festival Screenings', value: 'Sundance & Cannes Next' },
      ],
      programs: [
        'B.F.A in Virtual Production & Cinematic Storytelling',
        'M.A in Immersive Audio & Generative Soundscapes',
        'Fellowship in AI-Assisted Non-Linear Editing',
      ],
      curriculum: [
        { year: 'Sprint 01: Visual Composition & Narrative Core', details: 'Cinematography lenses, lighting ratios, screenwriting structure, and color grading.' },
        { year: 'Sprint 02: Unreal Engine Virtual Production', details: 'In-camera VFX (ICVFX), real-time camera tracking sync, and digital asset worldbuilding.' },
        { year: 'Sprint 03: Dolby Atmos Audio Engineering', details: 'Multichannel surround mixing, Foley art synthesis, and generative neural sound design.' },
        { year: 'Sprint 04: Capstone Short Film & Film Festival Tour', details: 'Producing a festival-ready short narrative and distributing across global festivals.' },
      ],
      faculty: [
        { name: 'Maya Chevalier', title: 'Director of Virtual Cinematography', role: 'Emmy-Nominated Director of Photography' },
        { name: 'Tariq Al-Hashemi', title: 'Chair of Immersive Sound', role: 'Dolby Certified Mastering Engineer' },
      ],
    },
    'biotechnology': {
      name: 'Synthetic Biology & Genetics',
      badge: 'Automated Wet Labs & CRISPR',
      tagline: 'CRISPR microfluidics, biomimetic materials & neuro-regeneration',
      tint: '#4ADE80',
      photo: mediaRegistry.departments.biotech.src,
      overview:
        'Re-engineering biology from the code up. In our certified wet labs and automated microfluidic workstations, fellows design custom synthetic proteins, test metabolic pathways in yeast cultures, and synthesize biodegradable polymer replacements.',
      stats: [
        { label: 'Wet Labs', value: '24/7 Automated Access' },
        { label: 'Publications', value: 'Nature & Cell Co-Authors' },
        { label: 'Incubator', value: 'Bio-Venture Seed Access' },
      ],
      programs: [
        'B.Sc in Synthetic Biology & Protein Engineering',
        'M.Tech in Computational Proteomics & Neuro-Engineering',
        'Ph.D Fellowship in Molecular Nanotechnology',
      ],
      curriculum: [
        { year: 'Sprint 01: Genetic Circuits & Molecular Tools', details: 'Plasmid design, bacterial transformation, DNA electrophoresis, and CRISPR-Cas9 mechanics.' },
        { year: 'Sprint 02: Computational Proteomics & AlphaFold', details: 'Protein structure prediction, molecular docking simulation, and enzyme active-site optimization.' },
        { year: 'Sprint 03: Automated Bioreactors & Microfluidics', details: 'Cell culture scale-up, continuous-flow chip design, and automated metabolite assays.' },
        { year: 'Sprint 04: Bio-Venture Studio Capstone', details: 'Patenting a novel bio-material or diagnostic assay and launching a venture spin-out.' },
      ],
      faculty: [
        { name: 'Dr. Zuri Okafor', title: 'Head of Synthetic Biology Studio', role: 'Pioneered CRISPR Microfluidics at Cambridge' },
        { name: 'Dr. Evelyn Brand', title: 'Chair of Computational Proteomics', role: 'Senior Bioinformatician, EMBL' },
      ],
    },
  };

  // Find department or fallback gracefully
  const dept = departmentCatalog[slug] || departmentCatalog['ai-data-science'];

  return (
    <div className="pt-28 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Back button */}
      <Link
        to="/departments"
        className="inline-flex items-center gap-1.5 text-xs font-mono text-app-muted hover:text-hru-gold transition-colors mb-8 cursor-pointer"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Back to All Academic Departments</span>
      </Link>

      {/* Hero Header with department photo */}
      <div className="relative rounded-[32px] overflow-hidden bg-app-surface1 border border-app-border shadow-2xl mb-16 p-8 sm:p-14">
        <div className="absolute inset-0">
          <img src={dept.photo} alt={dept.name} className="w-full h-full object-cover filter brightness-[0.35]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0B1E] via-[#0A0B1E]/60 to-transparent" />
        </div>

        <div className="relative z-10 max-w-3xl space-y-4">
          <span
            className="font-mono text-xs uppercase px-3 py-1 rounded-full border backdrop-blur-md inline-block font-semibold"
            style={{ color: dept.tint, borderColor: `${dept.tint}40`, backgroundColor: `${dept.tint}20` }}
          >
            {dept.badge}
          </span>
          <h1 className="text-4xl sm:text-6xl font-black font-heading text-white tracking-tight leading-none">
            {dept.name}
          </h1>
          <p className="text-base sm:text-xl text-[#A4A8C4] leading-relaxed">
            {dept.tagline}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Main Details Column */}
        <div className="lg:col-span-8 space-y-14">
          {/* Overview */}
          <div>
            <h3 className="text-2xl font-bold font-heading text-app-text mb-4">
              Department Architecture & Pedagogy
            </h3>
            <p className="text-app-muted leading-relaxed text-base">
              {dept.overview}
            </p>
          </div>

          {/* Curriculum Accordion */}
          <div>
            <h3 className="text-2xl font-bold font-heading text-app-text mb-6">
              Studio Sprints & Learning Architecture
            </h3>
            <div className="space-y-3">
              {dept.curriculum.map((item, idx) => {
                const isOpen = openCurriculum === idx;
                return (
                  <div
                    key={idx}
                    className="rounded-2xl border border-app-border bg-app-surface1 overflow-hidden"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenCurriculum(isOpen ? -1 : idx)}
                      className="w-full p-5 text-left flex items-center justify-between focus:outline-none cursor-pointer"
                    >
                      <span className="font-heading font-bold text-sm sm:text-base text-app-text">
                        {item.year}
                      </span>
                      <ChevronDown className={`w-4 h-4 text-hru-gold transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-5 pt-1 text-sm text-app-muted border-t border-app-border leading-relaxed">
                        {item.details}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Programs Offered */}
          <div>
            <h3 className="text-2xl font-bold font-heading text-app-text mb-6">
              Accredited Degree Tracks & Fellowships
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {dept.programs.map((prog, pIdx) => (
                <div key={pIdx} className="p-5 rounded-2xl bg-app-surface1 border border-app-border flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: dept.tint }} />
                  <span className="text-sm font-heading font-semibold text-app-text">{prog}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Faculty Chairs */}
          <div>
            <h3 className="text-2xl font-bold font-heading text-app-text mb-6">
              Distinguished Faculty Chairs & Mentors
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {dept.faculty.map((f, i) => (
                <div key={i} className="p-5 rounded-2xl bg-app-surface1 border border-app-border space-y-1">
                  <h4 className="font-heading font-bold text-base text-app-text">{f.name}</h4>
                  <p className="text-xs font-mono text-hru-gold">{f.title}</p>
                  <p className="text-xs text-app-muted">{f.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar Info Column */}
        <div className="lg:col-span-4 space-y-6">
          <div className="p-6 rounded-[24px] bg-app-surface1 border border-app-border shadow-xl space-y-6">
            <h4 className="font-heading font-bold text-lg text-app-text">
              Department Verified Outcomes
            </h4>
            <div className="space-y-4">
              {dept.stats.map((stat, i) => (
                <div key={i} className="p-3.5 rounded-xl bg-white/5 border border-app-border">
                  <div className="text-[10px] font-mono uppercase text-app-muted">{stat.label}</div>
                  <div className="text-base font-bold font-heading text-hru-gold mt-0.5">{stat.value}</div>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-app-border space-y-3">
              <Button to="/admissions" variant="gold" size="md" className="w-full justify-center">
                Apply to this Department
              </Button>
              <Button to="/contact" variant="glass" size="md" className="w-full justify-center">
                Book a Lab Walkthrough
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DepartmentDetailPage;
