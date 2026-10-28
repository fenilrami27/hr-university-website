// HR University Side Decor Configuration Registry
// Configures viewport-edge decor items for all wide-screen (1280px - 2560px) displays.
// Edit items, image/video paths, positions, and scroll speeds here.

export const decorData = {
  hero: {
    left: {
      type: 'rail',
      index: '01',
      sectionName: 'Hero',
      text: 'HR UNIVERSITY • CLASS OF 2026/27 • ADMISSIONS LIVE •',
      dots: 6,
      activeDot: 0,
    },
    right: {
      type: 'photo',
      photo: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=400&q=80',
      caption: 'Main Quad Atrium',
      mask: 'arch', // 'arch' | 'polaroid' | 'blob'
      rotation: 6,
      speed: 0.08,
      glow: 'rgba(255, 197, 61, 0.25)',
      blobColor: '#FFC53D',
    },
  },

  marquee: {
    left: {
      type: 'sticker',
      stickerText: '✦ STUDIO FIRST',
      doodle: 'star',
      color: '#C6FF3D',
    },
    right: {
      type: 'giant-word',
      word: 'BUILD',
      speed: 0.05,
    },
  },

  stats: {
    left: {
      type: 'photo',
      photo: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=400&q=80',
      caption: '999+ Cohort',
      mask: 'polaroid',
      rotation: -5,
      speed: 0.12,
      glow: 'rgba(255, 122, 89, 0.3)',
      blobColor: '#FF7A59',
    },
    right: {
      type: 'rail',
      index: '02',
      sectionName: 'Metrics',
      text: 'STUDIO STATISTICS • VERIFIED OUTCOMES 2026/27 •',
      dots: 6,
      activeDot: 1,
    },
  },

  departments: {
    left: {
      type: 'giant-word',
      word: 'STUDIOS',
      speed: 0.08,
    },
    right: {
      type: 'video',
      videoUrl: '/videos/hero/hero-1.mp4',
      poster: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=400&q=80',
      tag: '512-H100 Lab Bay',
      speed: 0.06,
      rotation: 4,
      glow: 'rgba(91, 91, 240, 0.35)',
    },
  },

  whyHRU: {
    left: {
      type: 'rail',
      index: '03',
      sectionName: 'Why HRU',
      text: 'ZERO LEGACY EXAMS • 100% PRODUCTION SHIPPING •',
      dots: 6,
      activeDot: 2,
    },
    right: {
      type: 'photo',
      photo: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=400&q=80',
      caption: '48h Buildathon',
      mask: 'arch',
      rotation: -4,
      speed: -0.1,
      glow: 'rgba(45, 212, 191, 0.3)',
      blobColor: '#2DD4BF',
    },
  },

  programs: {
    left: {
      type: 'photo',
      photo: 'https://images.unsplash.com/photo-1592478411213-6153e4ebc07d?auto=format&fit=crop&w=400&q=80',
      caption: 'VisionOS Spatial Studio',
      mask: 'blob',
      rotation: 5,
      speed: 0.07,
      glow: 'rgba(244, 114, 182, 0.3)',
      blobColor: '#F472B6',
    },
    right: {
      type: 'giant-word',
      word: 'DEGREES',
      speed: 0.06,
    },
  },

  campusLife: {
    left: {
      type: 'sticker',
      stickerText: 'CAMPUS 24/7',
      doodle: 'spiral',
      color: '#FFC53D',
    },
    right: {
      type: 'photo',
      photo: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=400&q=80',
      caption: 'Esports Arena',
      mask: 'polaroid',
      rotation: -6,
      speed: 0.11,
      glow: 'rgba(34, 211, 238, 0.3)',
      blobColor: '#22D3EE',
    },
  },

  events: {
    left: {
      type: 'rail',
      index: '04',
      sectionName: 'Festivals',
      text: 'CAMPUS CELEBRATIONS • 12 MONTHS OF CULTURE & FESTS •',
      dots: 6,
      activeDot: 3,
    },
    right: {
      type: 'photo',
      photo: 'https://images.unsplash.com/photo-1567157577867-05ccb1388e66?auto=format&fit=crop&w=400&q=80',
      caption: 'Navratri Garba Nights',
      mask: 'arch',
      rotation: 5,
      speed: -0.08,
      glow: 'rgba(255, 122, 89, 0.35)',
      blobColor: '#FF7A59',
    },
  },

  placements: {
    left: {
      type: 'giant-word',
      word: 'CAREERS',
      speed: 0.08,
    },
    right: {
      type: 'rail',
      index: '05',
      sectionName: 'Careers',
      text: '₹1.2 CR TOP DOMESTIC • ₹50 CR SEED FUND • 98% RATE •',
      dots: 6,
      activeDot: 4,
    },
  },

  studentStories: {
    left: {
      type: 'photo',
      photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
      caption: 'Aria Thorne (YC S25)',
      mask: 'polaroid',
      rotation: -4,
      speed: 0.09,
      glow: 'rgba(167, 139, 250, 0.3)',
      blobColor: '#A78BFA',
    },
    right: {
      type: 'sticker',
      stickerText: 'FOUNDERS',
      doodle: 'star',
      color: '#C6FF3D',
    },
  },

  faq: {
    left: {
      type: 'rail',
      index: '06',
      sectionName: 'Admissions FAQ',
      text: 'ZERO SAT/ACT • PORTFOLIO SIGNAL • 48H SPRINT •',
      dots: 6,
      activeDot: 5,
    },
    right: {
      type: 'giant-word',
      word: 'SIGNAL',
      speed: 0.05,
    },
  },

  admissions: {
    left: {
      type: 'calm',
      text: 'Cohort 2026/27',
    },
    right: {
      type: 'calm',
      text: 'Merit Grants Live',
    },
  },
};

export default decorData;
