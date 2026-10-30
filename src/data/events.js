// HR University Centralized Events & Festivals Registry
// Verified free commercial use photos (Wikimedia Commons, Unsplash)
// Preserves respectful festive celebrations and student competitions

export const eventCategories = ['All', 'Festivals', 'Cultural', 'Tech', 'Sports', 'Academic'];

export const festivalsData = [
  {
    id: 'fest-navratri',
    slug: 'navratri-garba-raas',
    title: 'Navratri & Garba Raas Mahotsav',
    tagline: 'Nine nights of divine rhythms, whirling chaniya-cholis, and high-energy Dhol-Dandiya',
    monthApprox: 'September - October',
    dateStr: 'Oct 08 - 16, 2026',
    featured: true,
    category: 'Festivals',
    tint: '#FF7A59', // Pop Coral
    gradient: 'from-[#FF7A59] via-[#FFC53D] to-[#F472B6]',
    countdownLabel: 'Starts in approx 3 Weeks',
    image: '/images/events/navratri-garba-raas.jpg',
    videoUrl: '/videos/hero/hero-1.mp4',
    alt: 'Joyful Garba and Dandiya dancers in vibrant traditional attire under festive lights',
    badge: 'Flagship Celebration',
    summary: 'The pinnacle of HRU festive spirit. 9 nights of electrifying Raas, traditional live folk orchestras, midnight food streets, and prestigious university-wide Garba trophies.',
    description: `HR University celebrates Navratri with deep cultural reverence and boundless youthful ecstasy. The central open-air amphitheater transforms into a sea of kaleidoscopic traditional bandhej, mirror-work chaniya cholis, and swirling kediyus. 
Under canopy lights and glowing lanterns, students, faculty, and international fellows dance together to the resonant beats of live dhol and authentic Gujarati folk singers. The festival honors Shakti with daily traditional evening Aarti followed by non-stop Sheri Garba and contemporary Fusion Dandiya beats till midnight.`,
    schedule: [
      { time: '06:30 PM', title: 'Traditional Deepam Lighting & Saraswati-Amba Aarti', venue: 'Central Quad' },
      { time: '07:30 PM', title: 'Prathama Raas: Traditional 2-Taali & 3-Taali Garba', venue: 'Grand Amphitheater' },
      { time: '09:00 PM', title: 'Inter-Department Dandiya Raas Trophy Championship', venue: 'Main Arena' },
      { time: '10:30 PM', title: 'Midnight Live Band Fusion Raas & Award Ceremony', venue: 'Grand Amphitheater' },
      { time: '11:45 PM', title: 'Fafda-Jalebi & Festive Food Street Commons', venue: 'Atrium Commons' },
    ],
    competitions: [
      {
        name: 'University Raas Trophy (Group Dance)',
        type: 'Dance',
        teamSize: '8 - 16 members',
        prizePool: '₹1,00,000',
        venue: 'Main Amphitheater',
        vibe: 'High Energy & Synchrony',
      },
      {
        name: 'Best Garba Duo (King & Queen of the Night)',
        type: 'Dance',
        teamSize: 'Duo (2 members)',
        prizePool: '₹50,000',
        venue: 'Grand Ring',
        vibe: 'Traditional Grace',
      },
      {
        name: 'Best Authentic Traditional Attire',
        type: 'Fashion',
        teamSize: 'Solo',
        prizePool: '₹25,000',
        venue: 'Runway Stage',
        vibe: 'Heritage Glamour',
      },
      {
        name: '#HRUGarba Viral Reel & Photo Quest',
        type: 'Reel-making',
        teamSize: 'Solo or Duo',
        prizePool: '₹30,000',
        venue: 'Campus-wide',
        vibe: 'Gen-Z Viral Favorite',
      },
    ],
    rules: [
      {
        title: 'Attire & Cultural Decorum',
        detail: 'Traditional Indian festive attire is encouraged for Garba grounds. ID card mandatory for security entry.',
      },
      {
        title: 'Safety & Eco-Friendliness',
        detail: 'Soft wooden or fiber Dandiyas permitted. Metal dandiyas strictly prohibited. Eco-friendly biodegradable lanterns used across campus.',
      },
      {
        title: 'Registration Protocol',
        detail: 'Pre-registration via student portal is required for competition participation to receive team badges and slot allotments.',
      },
    ],
    momentsGallery: [
      {
        src: '/images/events/navratri-garba-raas.jpg',
        caption: 'Midnight Dandiya Raas in Central Amphitheater',
      },
      {
        src: '/images/events/diwali-deepotsav.jpg',
        caption: 'Traditional floral rangoli and evening diya illumination',
      },
      {
        src: '/images/events/hru-fest-annual-cultural.jpg',
        caption: 'Departmental cultural band and celebration team',
      },
    ],
  },

  {
    id: 'fest-diwali',
    slug: 'diwali-deepotsav',
    title: 'Diwali Deepotsav & Grand Mela',
    tagline: 'Illuminating minds: 10,000 diyas, eco-rangoli championships, and Diwali cultural gala',
    monthApprox: 'October - November',
    dateStr: 'Nov 01 - 04, 2026',
    featured: false,
    category: 'Festivals',
    tint: '#FFC53D', // Pop Gold
    gradient: 'from-[#FFC53D] via-[#FF9E4A] to-[#FF7A59]',
    countdownLabel: 'Approx 7 Weeks Away',
    image: '/images/events/diwali-deepotsav.jpg',
    alt: 'Warm glowing traditional earthen diyas and rangoli illuminating Diwali celebration',
    badge: 'Festival of Lights',
    summary: 'The campus glows with thousands of earthen diyas, lantern arrays, inter-departmental rangoli art contests, sweet distributions, and the grand Diwali musical evening.',
    description: `Diwali at HR University is an ethereal experience of warmth and camaraderie. All faculty towers and academic studios participate in the 'Deepotsav Illumination Sprint', lighting up walkways with sustainable earthen diyas and handmade paper lanterns.
Traditional rangoli competitions bring intricate floor art to every corridor using organic colored rice powders, flower petals, and spice powders. The evening culminates in a spectacular zero-smoke green laser-and-light show and a campus-wide Diwali Mela celebrating artisanal culinary heritage.`,
    schedule: [
      { time: '10:00 AM', title: 'Inter-Department Grand Rangoli Championship', venue: 'Innovation Promenade' },
      { time: '02:00 PM', title: 'Handmade Diya Painting & Lantern Workshop', venue: 'Design Studios' },
      { time: '06:00 PM', title: 'Lighting of 10,000 Campus Diyas & Aarti', venue: 'Central Reflection Pool' },
      { time: '07:30 PM', title: 'Diwali Mela, Ethnic Food Stalls & Folk Music', venue: 'Campus Green' },
      { time: '09:30 PM', title: 'Grand Green Light & Laser Symphony', venue: 'Skyline Roof Deck' },
    ],
    competitions: [
      {
        name: 'Grand Rangoli Masterpiece Contest',
        type: 'Art',
        teamSize: '3 - 5 members',
        prizePool: '₹60,000',
        venue: 'Atrium Foyer',
        vibe: 'Intricate & Traditional Art',
      },
      {
        name: 'Best Decorated Academic Department',
        type: 'Art',
        teamSize: 'Full Department',
        prizePool: '₹75,000',
        venue: 'All 9 Departments',
        vibe: 'Department Pride',
      },
      {
        name: 'Diwali Lens: Festival Photography',
        type: 'Reel-making',
        teamSize: 'Solo',
        prizePool: '₹25,000',
        venue: 'Campus-wide',
        vibe: 'Cinematic Shadows & Lights',
      },
    ],
    rules: [
      {
        title: 'Zero-Emission Campus Policy',
        detail: 'HRU is a zero-smoke zone. Firecrackers are strictly replaced with green laser symphonies and ambient light installations.',
      },
      {
        title: 'Natural Materials Only',
        detail: 'Rangoli competitions use 100% natural rice powders, flower petals, turmeric, and organic dyes.',
      },
    ],
    momentsGallery: [
      {
        src: '/images/events/diwali-deepotsav.jpg',
        caption: 'Clay diya lamps along central reflection pool',
      },
      {
        src: '/images/events/onam-pongal-harvest.jpg',
        caption: 'Marigold and rose petal rangoli creation',
      },
    ],
  },

  {
    id: 'fest-holi',
    slug: 'holi-spring-colors',
    title: 'Holi Rangotsav & Spring Fest',
    tagline: 'Eco-friendly organic herbal colors, live rain-dance trance, and Gujiya feast',
    monthApprox: 'March',
    dateStr: 'Mar 17 - 18, 2027',
    featured: false,
    category: 'Festivals',
    tint: '#F472B6', // Pop Pink
    gradient: 'from-[#F472B6] via-[#FF7A59] to-[#C6FF3D]',
    countdownLabel: 'Spring Celebration',
    image: '/images/events/holi-spring-colors.jpg',
    alt: 'Joyful students celebrating Holi festival with clouds of organic gulal colors',
    badge: 'Spring Carnival',
    summary: 'A vibrant celebration of spring unity with certified organic herbal gulal, dhol beats, cold thandai stalls, and best-dressed ethnic celebrations.',
    description: `Holi at HR University is celebrated with exuberant youthfulness and unwavering environmental responsibility. Using exclusively certified organic botanical gulal derived from turmeric, beetroot, and marigold petals, the campus grounds turn into an explosion of vivid joy.
The morning starts with traditional festive greetings and sweets distribution, proceeding to live student bands, folk dhol-tasha circles, and friendly inter-batch color play.`,
    schedule: [
      { time: '09:00 AM', title: 'Choti Holi Holika Dahan & Blessings', venue: 'North Green' },
      { time: '10:00 AM', title: 'Eco-Gulal Distribution & Color Run', venue: 'Athletic Track' },
      { time: '11:00 AM', title: 'Live Rock & Indie Folk Band Stage', venue: 'Student Lawn' },
      { time: '01:00 PM', title: 'Traditional Thandai & Gujiya Feast', venue: 'Atrium Dining' },
    ],
    competitions: [
      {
        name: 'Holi Color Run Sprint (5K Fun Run)',
        type: 'Sports',
        teamSize: 'Solo or Quad',
        prizePool: '₹40,000',
        venue: 'Campus Outer Ring',
        vibe: 'High Stamina & Color Splashes',
      },
      {
        name: 'Live Folk Dhol & Battle of Beats',
        type: 'Singing',
        teamSize: '4 - 8 members',
        prizePool: '₹45,000',
        venue: 'Music Pavilion',
        vibe: 'Rhythmic Trance',
      },
      {
        name: '#HRUHoliInColors Reel Contest',
        type: 'Reel-making',
        teamSize: 'Solo or Duo',
        prizePool: '₹25,000',
        venue: 'Campus-wide',
        vibe: 'Ultra Slow-Mo Viral Shots',
      },
    ],
    rules: [
      {
        title: 'Only Organic Herbal Colors',
        detail: 'Synthetic chemical colors, grease, or mud are strictly banned. Only campus-approved organic plant-based gulal is provided.',
      },
      {
        title: 'Water Conservation',
        detail: 'Dry Holi policy applies across residences. High-pressure water balloons or hoses are strictly prohibited.',
      },
    ],
    momentsGallery: [
      {
        src: '/images/events/holi-spring-colors.jpg',
        caption: 'Herbal gulal clouds under spring sunshine',
      },
    ],
  },

  {
    id: 'fest-uttarayan',
    slug: 'makar-sankranti-uttarayan',
    title: 'Uttarayan & Makar Sankranti Kite Slam',
    tagline: 'Kites kissing the blue sky, cotton manjha, Undhiyu feasts, and terrace music',
    monthApprox: 'January',
    dateStr: 'Jan 14 - 15, 2027',
    featured: false,
    category: 'Festivals',
    tint: '#22D3EE', // Pop Sky
    gradient: 'from-[#22D3EE] via-[#FFC53D] to-[#FF7A59]',
    countdownLabel: 'Winter Carnival',
    image: '/images/events/makar-sankranti-uttarayan.jpg',
    alt: 'Hundreds of colourful kites soaring across the sky during Gujarat Uttarayan festival',
    badge: 'Sky Festival',
    summary: 'Gujarat’s beloved Uttarayan celebrated across all campus rooftops with friendly kite-cutting battles, kite design contests, and warm traditional til-gud and undhiyu lunch.',
    description: `Uttarayan at HR University celebrates the northern movement of the sun with exhilarating terrace camaraderie. From sunrise to sunset, the sky above the campus is filled with hundreds of colorful kites soaring in harmony.
The atmosphere resonates with joyous shouts of "Kai Po Che!" as students, professors, and international fellows learn the art of kite maneuvering. Traditional delicacies like Undhiyu, Jalebi, and sesame Til-Laddus are served hot on every rooftop.`,
    schedule: [
      { time: '08:00 AM', title: 'Rooftop Kite Assembly & Manjha Handover', venue: 'All Residential Roofs' },
      { time: '10:30 AM', title: 'Innovative Kite Aerodynamics Challenge', venue: 'Flight Arena' },
      { time: '01:00 PM', title: 'Authentic Undhiyu-Jalebi Community Lunch', venue: 'Commons Lawn' },
      { time: '04:00 PM', title: 'Inter-Faculty Kite Battle Championship', venue: 'Central Tower Deck' },
      { time: '07:00 PM', title: 'Tukkaal & Paper Lantern Night Flight', venue: 'Main Quad' },
    ],
    competitions: [
      {
        name: 'Best Aerodynamic & Creative Kite Design',
        type: 'Art',
        teamSize: 'Solo or Duo',
        prizePool: '₹35,000',
        venue: 'Makerspace Deck',
        vibe: 'Engineering Meets Craft',
      },
      {
        name: 'The Last Kite Flying (Terrace Duel)',
        type: 'Sports',
        teamSize: 'Duo',
        prizePool: '₹50,000',
        venue: 'Tower Rooftop',
        vibe: 'Tactical Precision',
      },
    ],
    rules: [
      {
        title: 'Bird-Safe Cotton Thread Only',
        detail: 'Glass-coated nylon or Chinese manjha is completely banned. Only bird-friendly traditional cotton thread is permitted.',
      },
      {
        title: 'Terrace Safety Railings',
        detail: 'All designated rooftop zones are equipped with safety harnesses and boundary barriers with marshals on duty.',
      },
    ],
    momentsGallery: [
      {
        src: '/images/events/makar-sankranti-uttarayan.jpg',
        caption: 'Kites dancing over the morning sky',
      },
    ],
  },

  {
    id: 'fest-durga-puja',
    slug: 'durga-puja-utsav',
    title: 'Durga Puja Cultural Showcase',
    tagline: 'Artistic pandal designs, energetic Dhunuchi dance, and Rabindra sangeet nights',
    monthApprox: 'October',
    dateStr: 'Oct 19 - 23, 2026',
    featured: false,
    category: 'Cultural',
    tint: '#FF7A59',
    gradient: 'from-[#FF7A59] via-[#FFC53D] to-[#2DD4BF]',
    countdownLabel: 'Autumn Cultural Days',
    image: '/images/events/durga-puja-utsav.jpg',
    alt: 'Artistic Durga Puja pandal and traditional deity idols with ceremonial illuminations',
    badge: 'Heritage Fest',
    summary: 'A magnificent celebration of craftsmanship and classical arts, featuring sustainable pandal installations designed by architecture students, Dhunuchi dance, and cultural recitals.',
    description: `HRU celebrates Durga Puja with exquisite artistic ingenuity and cultural devotion. Architecture and Design students collaborate to construct sustainable thematic pandals made of recycled bamboo, terracotta, and jute textiles.
Evenings feature the hypnotic beats of the Dhak drums, traditional Dhunuchi Naach competitions, classical Rabindra Sangeet, and authentic Bengali cuisine stalls.`,
    schedule: [
      { time: '09:00 AM', title: 'Maha Saptami Morning Prayers & Anjali', venue: 'Heritage Hall' },
      { time: '05:00 PM', title: 'Sustainable Pandal Architecture Exhibition', venue: 'Design Pavilion' },
      { time: '07:00 PM', title: 'Dhunuchi Dance & Dhaak Rhythm Battle', venue: 'Central Courtyard' },
      { time: '08:30 PM', title: 'Bengali Cultural Melodies & Drama Night', venue: 'Amphitheater' },
    ],
    competitions: [
      {
        name: 'Sustainable Pandal Architecture Award',
        type: 'Art',
        teamSize: '5 - 10 members',
        prizePool: '₹80,000',
        venue: 'Studio Grounds',
        vibe: 'Bio-Architecture Marvel',
      },
      {
        name: 'Dhunuchi Naach Solo & Duo Battle',
        type: 'Dance',
        teamSize: 'Solo / Duo',
        prizePool: '₹35,000',
        venue: 'Heritage Stage',
        vibe: 'Hypnotic Beats',
      },
    ],
    rules: [
      {
        title: 'Eco-Friendly Idols Only',
        detail: 'Clay idols made from 100% biodegradable river silt with organic water-soluble colors for eco-immersion.',
      },
    ],
    momentsGallery: [
      {
        src: '/images/events/durga-puja-utsav.jpg',
        caption: 'Evening festive lamps and cultural performances',
      },
    ],
  },

  {
    id: 'fest-ganesh-utsav',
    slug: 'ganesh-chaturthi-utsav',
    title: 'Ganesh Utsav & Clay Modeling Slam',
    tagline: 'Eco-friendly clay idol crafting, Dhol-Tasha troop performances, and Modak masterclass',
    monthApprox: 'August - September',
    dateStr: 'Sep 06 - 12, 2026',
    featured: false,
    category: 'Festivals',
    tint: '#FFC53D',
    gradient: 'from-[#FFC53D] via-[#FF7A59] to-[#2DD4BF]',
    countdownLabel: 'Monsoon Festive',
    image: '/images/events/ganesh-chaturthi-utsav.jpg',
    alt: 'Eco-friendly clay Lord Ganesha idol decorated with floral garlands and festive lamps',
    badge: 'Eco Craft Fest',
    summary: 'A celebration of wisdom, new beginnings, and environmental stewardship with handmade clay idol contests, high-octane Nashik Dhol performances, and Modak baking workshops.',
    description: `Ganesh Chaturthi at HR University embodies the perfect marriage of devotion and ecological consciousness. Students craft their own mini Ganpati idols in clay modeling workshops using seeds and river mud that blossom into flowering plants upon visarjan.
The campus rings with thunderous Dhol-Tasha beats by the student percussion troupe, and culinary clubs serve fresh Ukadiche Modaks.`,
    schedule: [
      { time: '10:00 AM', title: 'Seed-Ganesha Clay Modeling Workshop', venue: 'Art & Ceramics Studio' },
      { time: '04:00 PM', title: 'Grand Dhol-Tasha Procession & Sthapana', venue: 'Academic Promenade' },
      { time: '07:00 PM', title: 'Traditional Evening Aarti & Stotram Recitation', venue: 'Atrium Foyer' },
    ],
    competitions: [
      {
        name: 'Seed-Clay Sculpture & Modeling Contest',
        type: 'Art',
        teamSize: 'Solo or Duo',
        prizePool: '₹30,000',
        venue: 'Ceramics Lab',
        vibe: 'Creative & Green',
      },
      {
        name: 'Inter-College Dhol-Tasha Rhythm Clash',
        type: 'Singing',
        teamSize: '6 - 12 members',
        prizePool: '₹50,000',
        venue: 'Courtyard Arena',
        vibe: 'Thunderous Resonance',
      },
    ],
    rules: [
      {
        title: 'Zero Plaster-of-Paris (PoP)',
        detail: 'Only unbaked terracotta and river clay permitted. Plant seeds embedded in clay idols for eco-flowering immersion.',
      },
    ],
    momentsGallery: [
      {
        src: '/images/events/ganesh-chaturthi-utsav.jpg',
        caption: 'Terracotta craft and floral celebration',
      },
    ],
  },

  {
    id: 'fest-onam-pongal',
    slug: 'onam-pongal-harvest',
    title: 'Onam & Pongal Harvest Melam',
    tagline: 'Gigantic flower carpets (Pookalam), traditional Kolam, Tug-of-War, and Grand Sadhya',
    monthApprox: 'August - September & January',
    dateStr: 'Sep 14, 2026 & Jan 15, 2027',
    featured: false,
    category: 'Cultural',
    tint: '#2DD4BF', // Pop Mint
    gradient: 'from-[#2DD4BF] via-[#C6FF3D] to-[#FFC53D]',
    countdownLabel: 'Harvest Fest',
    image: '/images/events/onam-pongal-harvest.jpg',
    alt: 'Vibrant traditional Onam Pookalam floral carpet crafted from fresh flower petals',
    badge: 'Harvest Jubilee',
    summary: 'Honoring harvest traditions with 20-foot multi-tiered Pookalam and Kolam competitions, Chenda Melam percussion, high-stakes tug-of-war, and authentic 24-dish Sadhya feast served on banana leaves.',
    description: `HRU brings South Indian harvest festivals alive with grandeur. The main atrium is draped in fresh marigold garlands and jasmine, anchored by an enormous 20-foot Pookalam flower carpet designed by fine arts students.
Students dress in traditional Kasavu sarees and Mundus, enjoying the rhythmic cadence of Chenda Melam drums followed by competitive Tug-of-War and sweet Pongal preparation.`,
    schedule: [
      { time: '08:00 AM', title: 'Pookalam Flower Carpet Championship', venue: 'Central Atrium' },
      { time: '11:00 AM', title: 'Chenda Melam Traditional Percussion', venue: 'Main Lawn' },
      { time: '12:30 PM', title: 'Grand Onam Sadhya Feast (24 Dishes on Banana Leaf)', venue: 'Dining Hall' },
      { time: '03:30 PM', title: 'Inter-Department Tug-of-War & Traditional Games', venue: 'Sports Ground' },
    ],
    competitions: [
      {
        name: 'Inter-Batch Pookalam & Kolam Trophy',
        type: 'Art',
        teamSize: '4 - 8 members',
        prizePool: '₹40,000',
        venue: 'Main Atrium Floor',
        vibe: 'Floral Precision',
      },
      {
        name: 'Grand Vadam Vali (Tug-of-War Championship)',
        type: 'Sports',
        teamSize: '8 members',
        prizePool: '₹50,000',
        venue: 'Athletic Field',
        vibe: 'Raw Strength & Team Spirit',
      },
    ],
    rules: [
      {
        title: 'Authentic Floral Ingredients',
        detail: 'Floral carpets are created exclusively with fresh petals and natural foliage.',
      },
    ],
    momentsGallery: [
      {
        src: '/images/events/onam-pongal-harvest.jpg',
        caption: 'Pookalam flower carpet celebration',
      },
    ],
  },

  {
    id: 'event-hackhru',
    slug: 'hackhru-global-hackathon',
    title: 'HackHRU: 48-Hour Deep-Tech Hackathon',
    tagline: '512-H100 compute nodes, non-dilutive seed checks, and autonomous agent swarms',
    monthApprox: 'November',
    dateStr: 'Nov 20 - 22, 2026',
    featured: false,
    category: 'Tech',
    tint: '#5B5BF0', // HRU Indigo
    gradient: 'from-[#5B5BF0] via-[#22D3EE] to-[#C6FF3D]',
    countdownLabel: '48h Buildathon',
    image: '/images/events/hackhru-global-hackathon.jpg',
    alt: 'Student software developers coding intensely in a collaborative hackathon sprint',
    badge: '₹15 Lakhs Prize Pool',
    summary: 'Over 800 coders, robotics hackers, and UI designers building around the clock with unmetered GPU compute and direct angel investor demo tracks.',
    description: `HackHRU is one of India's most intense college hackathons. For 48 continuous hours, the Glass Atrium transforms into a bustling cyber city filled with pizza boxes, hardware soldering kits, and multi-agent AI terminals.
Teams pitch live to leading startup founders, CTOs, and angel syndicates on Sunday evening.`,
    schedule: [
      { time: '05:00 PM (Fri)', title: 'Opening Keynote & Problem Statement Release', venue: 'Auditorium' },
      { time: '06:00 PM (Fri)', title: 'Hacking Commences & GPU Shells Assigned', venue: 'Hack Bay' },
      { time: '02:00 PM (Sat)', title: 'Midway Mentor Review & Code Scrimmage', venue: 'Mentor Pods' },
      { time: '03:00 PM (Sun)', title: 'Hacking Freezes & Live Demo Showdown', venue: 'Main Stage' },
    ],
    competitions: [
      {
        name: 'Autonomous AI Swarms Track',
        type: 'Tech',
        teamSize: '2 - 4 members',
        prizePool: '₹5,00,000',
        venue: 'AI Bay',
        vibe: 'Hardcore Engineering',
      },
      {
        name: 'Spatial XR & Hardware Prototype Track',
        type: 'Tech',
        teamSize: '2 - 4 members',
        prizePool: '₹3,50,000',
        venue: 'Robotics Bay',
        vibe: 'Physical + Digital',
      },
    ],
    rules: [
      {
        title: 'Build From Scratch',
        detail: 'All code and design prototypes must be created during the 48-hour event window. Open-source libraries permitted.',
      },
    ],
    momentsGallery: [
      {
        src: '/images/events/hackhru-global-hackathon.jpg',
        caption: 'Late night coding sprint at HackHRU',
      },
    ],
  },

  {
    id: 'fest-hru-cultural',
    slug: 'hru-fest-annual-cultural',
    title: 'HRU Fest: Annual Cultural & Star Nights',
    tagline: 'Concerts, celebrity star artists, battle of the bands, and inter-collegiate drama',
    monthApprox: 'March - April',
    dateStr: 'Apr 02 - 05, 2027',
    featured: false,
    category: 'Cultural',
    tint: '#A78BFA', // Pop Violet
    gradient: 'from-[#A78BFA] via-[#F472B6] to-[#FF7A59]',
    countdownLabel: 'Grand Finale',
    image: '/images/events/hru-fest-annual-cultural.jpg',
    alt: 'Star night music concert with live stage lights and cheering student crowd',
    badge: 'Flagship Fest',
    summary: 'The biggest youth celebration in western India featuring live Bollywood & Indie artist concerts, street dance battles, mono-acts, and culinary pop-up streets.',
    description: `HRU Fest brings together over 12,000 university students for four uninhibited days of artistic celebration. From dawn to dusk, concurrent stages host classical raga battles, contemporary street dancing, spoken word poetry, and theatrical street plays (Nukkad Natak).
Evenings culminate in stadium-scale concerts featuring nationally acclaimed singers and international electronic music producers.`,
    schedule: [
      { time: '11:00 AM', title: 'Inter-Collegiate Street Play (Nukkad Natak)', venue: 'Central Circle' },
      { time: '02:00 PM', title: 'Western & Classical Solo Vocal Championship', venue: 'Auditorium' },
      { time: '04:00 PM', title: 'Hip-Hop & Contemporary Dance Battle', venue: 'Amphitheater' },
      { time: '07:30 PM', title: 'Celebrity Headliner Concert & Star Night', venue: 'Festival Stadium' },
    ],
    competitions: [
      {
        name: 'Battle of the College Bands',
        type: 'Singing',
        teamSize: '3 - 8 members',
        prizePool: '₹1,50,000',
        venue: 'Main Arena',
        vibe: 'Rock & Fusion',
      },
      {
        name: 'Step-Up: All-India Street Dance Slam',
        type: 'Dance',
        teamSize: '6 - 15 members',
        prizePool: '₹1,00,000',
        venue: 'Amphitheater',
        vibe: 'Electrifying Moves',
      },
      {
        name: 'Nukkad Natak: Street Theatre for Social Impact',
        type: 'Drama',
        teamSize: '8 - 20 members',
        prizePool: '₹75,000',
        venue: 'Open Square',
        vibe: 'Raw & Emotive',
      },
    ],
    rules: [
      {
        title: 'Original Content Encouraged',
        detail: 'Original scripts and music compositions receive bonus judge scoring.',
      },
    ],
    momentsGallery: [
      {
        src: '/images/events/hru-fest-annual-cultural.jpg',
        caption: 'Star Night concert crowd under laser lights',
      },
    ],
  },

  {
    id: 'fest-national-days',
    slug: 'republic-independence-symphony',
    title: 'Desh Prem: Republic & Independence Symphony',
    tagline: 'Flag hoisting, tri-color floral tribute, patriotic youth choir, and nation-building quiz',
    monthApprox: 'January & August',
    dateStr: 'Jan 26 & Aug 15, 2027',
    featured: false,
    category: 'Cultural',
    tint: '#FFC53D',
    gradient: 'from-[#FF7A59] via-white to-[#2DD4BF]',
    countdownLabel: 'National Pride',
    image: '/images/events/republic-independence-symphony.jpg',
    alt: 'The Indian Tricolor national flag fluttering high under clear blue sky',
    badge: 'National Pride',
    summary: 'A dignified ceremony honoring India’s constitutional ethos with campus parades, classical patriotic symphonies, and clean-tech social innovation showcases.',
    description: `HR University commemorates Republic Day and Independence Day with immense patriotic pride and visionary resolve. The celebrations commence with ceremonial Tricolor unfurling and NCC parade, followed by choir renditions of 'Vande Mataram' and 'Jana Gana Mana'.
Students participate in the 'Youth for Viksit Bharat' technology exhibition, presenting frugal engineering prototypes aimed at rural solar power, clean water, and regional language computing.`,
    schedule: [
      { time: '08:30 AM', title: 'Ceremonial Tricolor Unfurling & Anthem', venue: 'Administrative Plaza' },
      { time: '09:30 AM', title: 'NCC Cadet Guard of Honour & Parade', venue: 'Central Parade Track' },
      { time: '10:30 AM', title: 'Desh Bhakti Choir & Classical Instrumental', venue: 'Auditorium' },
      { time: '02:00 PM', title: 'All-India Constitutional & Heritage Quiz', venue: 'Hall of Wisdom' },
    ],
    competitions: [
      {
        name: 'Patriotic Song & Choir Symphony',
        type: 'Singing',
        teamSize: '5 - 12 members',
        prizePool: '₹35,000',
        venue: 'Auditorium',
        vibe: 'Soulful & Patriotic',
      },
      {
        name: 'Viksit Bharat Frugal Tech Hackathon',
        type: 'Tech',
        teamSize: '2 - 4 members',
        prizePool: '₹75,000',
        venue: 'FabLab',
        vibe: 'Social Innovation',
      },
    ],
    rules: [
      {
        title: 'Flag Code Adherence',
        detail: 'Strict respect for the National Flag Code of India at all times.',
      },
    ],
    momentsGallery: [
      {
        src: '/images/events/republic-independence-symphony.jpg',
        caption: 'Patriotic assembly and tricolor morning ceremony',
      },
    ],
  },

  {
    id: 'fest-eid-christmas',
    slug: 'eid-christmas-interfaith',
    title: 'Interfaith Joy: Eid Milan & Winter Christmas',
    tagline: 'Mehndi & calligraphy, festive Sheer Khurma feast, carol concerts, and Secret Santa',
    monthApprox: 'March & December',
    dateStr: 'Dec 24, 2026 & Mar 31, 2027',
    featured: false,
    category: 'Cultural',
    tint: '#2DD4BF',
    gradient: 'from-[#2DD4BF] via-[#5B5BF0] to-[#FFC53D]',
    countdownLabel: 'Community Harmony',
    image: '/images/events/eid-christmas-interfaith.jpg',
    alt: 'Festive illuminated celebration with vibrant colorful lanterns and community gatherings',
    badge: 'Inclusive Harmony',
    summary: 'Celebrating the pluralistic fabric of India with Eid feasts, intricate Arabic and Rajasthani mehndi competitions, Christmas winter carols, and campus charity drives.',
    description: `HR University takes pride in its vibrant, inclusive student body. Eid Milan features community feasts with hot Sheer Khurma, Biryani stalls, and inter-batch Arabic calligraphy contests.
In December, the campus is decorated with fairy lights, giant sustainable Christmas trees, live acoustic carol singing, and a university-wide 'Secret Santa' gift exchange supporting underprivileged children in local schools.`,
    schedule: [
      { time: '11:00 AM', title: 'Traditional Mehndi & Floral Henna Competition', venue: 'Student Lounge' },
      { time: '01:00 PM', title: 'Eid Milan Community Biryani & Sweet Feast', venue: 'Atrium Commons' },
      { time: '06:00 PM', title: 'Christmas Candlelight Carol Choir Concert', venue: 'Open Amphitheater' },
      { time: '08:00 PM', title: 'Winter Secret Santa & Gift Distribution', venue: 'Central Courtyard' },
    ],
    competitions: [
      {
        name: 'Bridal & Arabic Mehndi Art Contest',
        type: 'Art',
        teamSize: 'Solo or Duo',
        prizePool: '₹25,000',
        venue: 'Design Patio',
        vibe: 'Intricate Detail',
      },
      {
        name: 'Acoustic Christmas Carol & Band Jam',
        type: 'Singing',
        teamSize: '3 - 8 members',
        prizePool: '₹30,000',
        venue: 'Acoustic Soundstage',
        vibe: 'Warm Winter Melodies',
      },
    ],
    rules: [
      {
        title: 'Open To All',
        detail: 'All community members, regardless of background, are welcomed to participate in all cultural feasts and games.',
      },
    ],
    momentsGallery: [
      {
        src: '/images/events/eid-christmas-interfaith.jpg',
        caption: 'Campus festive feast and community banquet',
      },
    ],
  },

  {
    id: 'event-sports-meet',
    slug: 'annual-sports-meet-olympiad',
    title: 'HRU Olympiad: Annual Sports & Esports Meet',
    tagline: 'Track athletics, Kabaddi, Cricket championship, and national collegiate Esports arena',
    monthApprox: 'May',
    dateStr: 'May 08 - 12, 2027',
    featured: false,
    category: 'Sports',
    tint: '#FF7A59',
    gradient: 'from-[#FF7A59] via-[#C6FF3D] to-[#22D3EE]',
    countdownLabel: 'Summer Games',
    image: '/images/events/annual-sports-meet-olympiad.jpg',
    alt: 'Athletes sprinting forward on university athletics stadium running track',
    badge: 'Olympiad',
    summary: 'Olympic-spec sports complex hosting 5 days of high-intensity athletics, Kabaddi, Cricket, Badminton, and collegiate Esports gaming battles.',
    description: `The HRU Sports Olympiad brings out raw athletic determination and biometric analytics. From 100m sprint dashes on Olympic tracks to high-stakes Kabaddi and floodlit T20 Cricket matches, every department competes for the prestigious Chancellor's Athletics Trophy.
Simultaneously, the Neon Kinetic Esports Hub hosts collegiate championships in Valorant, EA FC, and Rocket League with live commentary.`,
    schedule: [
      { time: '07:00 AM', title: 'Athletics 100m, 400m & Relay Finals', venue: 'Olympic Stadium' },
      { time: '11:00 AM', title: 'Inter-Department Kabaddi & Kho-Kho Clash', venue: 'Indoor Arena' },
      { time: '04:00 PM', title: 'T20 Cricket Championship Final under Lights', venue: 'Cricket Oval' },
      { time: '07:00 PM', title: 'National Esports Gaming Finals (Live Streamed)', venue: 'Esports Hub' },
    ],
    competitions: [
      {
        name: 'Pro-Kabaddi Inter-Department Shield',
        type: 'Sports',
        teamSize: '7 + 3 reserves',
        prizePool: '₹60,000',
        venue: 'Indoor Arena',
        vibe: 'High Intensity & Grit',
      },
      {
        name: 'T20 Floodlit Cricket Cup',
        type: 'Sports',
        teamSize: '11 + 4 reserves',
        prizePool: '₹1,00,000',
        venue: 'Main Oval',
        vibe: 'Championship Drama',
      },
      {
        name: 'Collegiate Valorant & BGMI Esports Cup',
        type: 'Tech',
        teamSize: '5 members',
        prizePool: '₹75,000',
        venue: 'Esports Studio',
        vibe: 'Precision & Reflexes',
      },
    ],
    rules: [
      {
        title: 'Sportsmanship & Safety',
        detail: 'Certified medical staff and physiotherapy units present on site. Standard AIU sports rules apply.',
      },
    ],
    momentsGallery: [
      {
        src: '/images/events/annual-sports-meet-olympiad.jpg',
        caption: 'Track athletes crossing the finish line',
      },
    ],
  },

  {
    id: 'event-academic-colloquium',
    slug: 'academic-research-colloquium',
    title: 'HRU Global Academic Colloquium & Research Conclave',
    tagline: 'Interdisciplinary research paper presentations, keynote symposiums, and innovation grant pitches',
    monthApprox: 'February',
    dateStr: 'Feb 18 - 20, 2027',
    featured: false,
    category: 'Academic',
    tint: '#38BDF8', // Cyan/Sky
    gradient: 'from-[#38BDF8] via-[#5B5BF0] to-[#2DD4BF]',
    countdownLabel: 'Academic Congress',
    image: '/images/events/academic-research-colloquium.jpg',
    alt: 'Academic research symposium keynote presentation in university amphitheater',
    badge: 'Research Conclave',
    summary: 'International academic congress gathering scholars, student researchers, and industry pioneers for peer-reviewed paper presentations and doctoral symposiums.',
    description: `The HRU Global Academic Colloquium & Research Conclave showcases breakthroughs spanning embodied AI, quantum security, bio-materials, and sustainable urban architecture.
Students and faculty fellows present research papers alongside visiting scientists from MIT, Cambridge, and IITs. Outstanding papers receive seed grants from the HRU Innovation Foundation.`,
    schedule: [
      { time: '09:00 AM', title: 'Inaugural Keynote Address & Research Overview', venue: 'Turing Hall' },
      { time: '11:00 AM', title: 'Parallel Paper Tracks: AI, Biotech & Materials', venue: 'Seminar Bay 1-4' },
      { time: '02:30 PM', title: 'Doctoral Poster Presentation & Peer Review', venue: 'Innovation Foyer' },
      { time: '05:00 PM', title: 'Seed Grant Awards & Plenary Closing Ceremony', venue: 'Grand Auditorium' },
    ],
    competitions: [
      {
        name: 'Best Undergraduate Research Paper',
        type: 'Academic',
        teamSize: '1 - 3 members',
        prizePool: '₹1,00,000',
        venue: 'Turing Hall',
        vibe: 'Scholarly Excellence',
      },
      {
        name: 'Speculative Science & Poster Pitch',
        type: 'Academic',
        teamSize: 'Solo or Duo',
        prizePool: '₹50,000',
        venue: 'Central Atrium',
        vibe: 'Innovative Ideation',
      },
    ],
    rules: [
      {
        title: 'Originality & Academic Integrity',
        detail: 'Submissions must represent original, unpublished student research with faculty mentorship endorsement.',
      },
      {
        title: 'Peer Review Adherence',
        detail: 'Double-blind peer review methodology applies to all technical paper evaluation tracks.',
      },
    ],
    momentsGallery: [
      {
        src: '/images/events/academic-research-colloquium.jpg',
        caption: 'Keynote lecture session in university amphitheater',
      },
    ],
  },
];

export default festivalsData;
