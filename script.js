/**
 * EventHive - College Event Discovery & Management Platform
 * Customized for Sir Padampat Singhania University (SPSU), Udaipur, Rajasthan
 * Vanilla JavaScript (ES6+) with 3-Role Authentication: Student, Organizer, Admin.
 */

// =============================================================================
// 1. Initial Sample Dataset (14 Diverse SPSU Udaipur Events)
// =============================================================================

const DEFAULT_EVENTS = [
  {
    id: 'evt-hackspsu-2026',
    title: 'HackSPSU 2026: 24-Hour National Collegiate Hackathon',
    college: 'School of Engineering (CSE & AI), SPSU Udaipur',
    category: 'Hackathons',
    mode: 'In-Person',
    date: '2026-11-20',
    time: '09:30 AM IST Kickoff',
    venue: 'Advanced Computing Labs & Sir Padampat Auditorium, SPSU Campus, Udaipur',
    deadline: '2026-11-15',
    eligibility: 'Open to B.Tech, BCA, MCA & All University Students (Teams of 2–4)',
    fee: 'Free Registration (Food & Accommodation Provided)',
    prizes: '₹1,00,000 Cash Prize Pool + Incubation Support at SPSU Innovation Cell',
    theme: 'code',
    registrationUrl: 'https://spsu.ac.in',
    description: 'The premier 24-hour national hackathon hosted by Sir Padampat Singhania University (SPSU), Udaipur. Innovate solutions in Generative AI, Cloud Infrastructure, Smart Udaipur Tourism, Clean Energy, and Agritech. Mentored by industry engineers and alumni.',
    featured: true
  },
  {
    id: 'evt-panache-fest',
    title: 'Panache 2026 – Annual National Cultural & Arts Festival',
    college: 'Student Activity Council (SAC), SPSU Udaipur',
    category: 'Cultural',
    mode: 'In-Person',
    date: '2026-12-04',
    time: '10:00 AM onwards',
    venue: 'Central University Amphitheatre & Main Lawns, SPSU Udaipur',
    deadline: '2026-11-28',
    eligibility: 'All college students with valid University/College ID card',
    fee: 'Free Entry with Campus Pass',
    prizes: 'Trophies, Cash Prizes worth ₹1,50,000 & Celebrity Star Night',
    theme: 'cultural',
    registrationUrl: 'https://spsu.ac.in',
    description: 'Panache is SPSU Udaipur flagship annual cultural fiesta! Featuring high-voltage Battle of the Bands, Western & Rajasthani Folk Dance, Street Theatre (Nukkad Natak), Fashion Walk, and an electrifying live concert under the Mewar twilight.',
    featured: true
  },
  {
    id: 'evt-ai-cloud-workshop',
    title: 'GenAI, LLMs & Cloud Architecture Hands-on Workshop',
    college: 'Department of Computer Science & Engineering, SPSU Udaipur',
    category: 'Workshops',
    mode: 'Hybrid',
    date: '2026-11-25',
    time: '10:00 AM – 04:30 PM IST',
    venue: 'Seminar Hall 1 (Academic Block) & Google Meet Live Stream',
    deadline: '2026-11-23',
    eligibility: 'B.Tech CSE/IT, AI/ML, Cloud specializations and tech enthusiasts',
    fee: 'Free for SPSU Students (₹100 for External College Attendees)',
    prizes: 'AWS & Google Cloud Student Certification Badges + 500 Cloud Credits',
    theme: 'ai',
    registrationUrl: 'https://spsu.ac.in',
    description: 'Deep dive into modern Generative AI pipeline deployment, RAG architectures with vector embeddings, HuggingFace Transformers, and scalable cloud containerization on Google Cloud and AWS.',
    featured: true
  },
  {
    id: 'evt-codecombat-spsu',
    title: 'CodeCombat 2026: Inter-Collegiate Speed Coding Cup',
    college: 'Coding Club (CSE Dept), Sir Padampat Singhania University',
    category: 'Hackathons',
    mode: 'Hybrid',
    date: '2026-11-18',
    time: '03:00 PM – 06:00 PM IST',
    venue: 'CS Computer Center 3, SPSU Campus / HackerRank Online',
    deadline: '2026-11-17',
    eligibility: 'Individual students from engineering and computer applications programs',
    fee: 'Free Registration',
    prizes: '₹30,000 Cash + Mechanical Keyboards & Coding Club Badges',
    theme: 'coding',
    registrationUrl: 'https://spsu.ac.in',
    description: 'Speed-round competitive coding contest testing data structures, algorithms, recursion, and time complexity in C++, Java, or Python.',
    featured: false
  },
  {
    id: 'evt-spsu-drone-robotics',
    title: 'Lake City Autonomous Robotics & UAV Drone Challenge',
    college: 'Robotics Club & Department of Mechanical Engineering, SPSU Udaipur',
    category: 'Robotics',
    mode: 'In-Person',
    date: '2026-11-29',
    time: '09:00 AM – 05:00 PM IST',
    venue: 'SPSU Central Sports Ground & Robotics Research Lab, Udaipur',
    deadline: '2026-11-24',
    eligibility: 'Teams of 2–4 students from engineering colleges across Rajasthan & India',
    fee: '₹300 per team',
    prizes: '₹50,000 Cash Prize + Robotics Hardware Kits & Trophies',
    theme: 'robotics',
    registrationUrl: 'https://spsu.ac.in',
    description: 'Design and navigate autonomous line-followers, obstacle avoidance bots, and FPV drones through complex obstacle arenas at the scenic SPSU Udaipur campus.',
    featured: false
  },
  {
    id: 'evt-jk-cement-pitch',
    title: 'JK Cement National B-Plan & Startup Conclave 2026',
    college: 'School of Management & SPSU Incubation Centre, Udaipur',
    category: 'Competitions',
    mode: 'In-Person',
    date: '2026-12-08',
    time: '10:30 AM IST',
    venue: 'Management Block Auditorium, Sir Padampat Singhania University',
    deadline: '2026-12-01',
    eligibility: 'UG/PG student founders, MBA students, and aspiring entrepreneurs',
    fee: 'Free Registration',
    prizes: '₹5,00,000 Seed Capital Grants & Mentorship from JK Group Executives',
    theme: 'pitch',
    registrationUrl: 'https://spsu.ac.in',
    description: 'Present your business idea, sustainability venture, or tech prototype to seasoned executives from JK Cement, angel investors, and venture capitalists in Udaipur.',
    featured: true
  },
  {
    id: 'evt-mewar-photography',
    title: 'Mewar Chronicles: Udaipur Heritage & Campus Photography Salon',
    college: 'Fine Arts & Media Society, SPSU Udaipur',
    category: 'Photography',
    mode: 'Online',
    date: '2026-11-27',
    time: 'Online Submission closes at 11:59 PM IST',
    venue: 'Digital Gallery & Central Library Foyer Display, SPSU',
    deadline: '2026-11-25',
    eligibility: 'All university students with DSLR or Mobile cameras',
    fee: 'Free Entry',
    prizes: 'Canon Camera Gear, Framed Exhibition & Certificates',
    theme: 'camera',
    registrationUrl: 'https://spsu.ac.in',
    description: 'Capture the architectural splendor of the City of Lakes (Udaipur), Aravali hillscapes, and the architectural symmetry of the SPSU green campus.',
    featured: false
  },
  {
    id: 'evt-cybersecurity-spsu',
    title: 'CyberKavach: Ethical Hacking & Red Teaming Symposium',
    college: 'Center for Cybersecurity & CSE Department, SPSU Udaipur',
    category: 'Seminars',
    mode: 'Online',
    date: '2026-11-22',
    time: '05:30 PM – 08:00 PM IST',
    venue: 'Live Interactive Webinar & Kali Linux Virtual Lab',
    deadline: '2026-11-21',
    eligibility: 'Students interested in infosec, network security & bug bounty',
    fee: 'Free',
    prizes: 'Certified Ethical Hacking Participation Certificates & Vouchers',
    theme: 'cyber',
    registrationUrl: 'https://spsu.ac.in',
    description: 'Live demonstration of penetration testing, web application security (OWASP Top 10), reverse engineering, and threat intelligence.',
    featured: false
  },
  {
    id: 'evt-spl-cricket-football',
    title: 'Singhania Premier League (SPL 2026): Inter-Collegiate Sports Fest',
    college: 'Sports Council & Directorate of Physical Education, SPSU Udaipur',
    category: 'Sports',
    mode: 'In-Person',
    date: '2026-12-12',
    time: '08:00 AM matches kick off daily',
    venue: 'SPSU Sports Complex, Cricket Pavilion & Floodlit Basketball Courts',
    deadline: '2026-12-05',
    eligibility: 'Verified college teams in Cricket, Football, Volleyball, Basketball',
    fee: '₹1,500 per team squad',
    prizes: '₹75,000 Cash Pool + Gold & Silver Medals + Rolling Trophies',
    theme: 'sports',
    registrationUrl: 'https://spsu.ac.in',
    description: 'Annual week-long sporting spectacle at SPSU Udaipur featuring state-level collegiate matches with live scoring, commentary, and campus fan zones.',
    featured: false
  },
  {
    id: 'evt-iot-smart-campus',
    title: 'Smart Campus IoT & Embedded Systems Hackathon',
    college: 'ECE & Mechatronics Society, SPSU Udaipur',
    category: 'Hackathons',
    mode: 'In-Person',
    date: '2026-12-01',
    time: '10:00 AM – 06:00 PM IST',
    venue: 'Embedded Systems Innovation Lab, Tech Block, SPSU',
    deadline: '2026-11-26',
    eligibility: 'Engineering undergraduates with interest in ESP32, Arduino & sensors',
    fee: 'Free (Hardware kits provided on campus)',
    prizes: '₹25,000 Cash + IoT Sensor Kits from Texas Instruments',
    theme: 'code',
    registrationUrl: 'https://spsu.ac.in',
    description: 'Build connected microcontrollers, smart solar monitoring, and campus automation devices using microPython and MQTT protocols.',
    featured: false
  },
  {
    id: 'evt-uiux-design-conclave',
    title: 'Figma to Code: Modern UI/UX & Design Systems Bootcamp',
    college: 'School of Engineering & Design Guild, SPSU Udaipur',
    category: 'Workshops',
    mode: 'Hybrid',
    date: '2026-11-23',
    time: '02:00 PM – 05:30 PM IST',
    venue: 'Multipurpose Lab 2 & Zoom Webinar',
    deadline: '2026-11-21',
    eligibility: 'All students passionate about product design and frontend engineering',
    fee: 'Free',
    prizes: 'Figma Pro Student Subscriptions & Design Portfolios Review',
    theme: 'ai',
    registrationUrl: 'https://spsu.ac.in',
    description: 'Design beautiful, accessible interfaces in Figma and translate them cleanly to production CSS, Tailwind, and interactive React prototypes.',
    featured: false
  },
  {
    id: 'evt-rajasthan-heritage-quiz',
    title: 'Mewar Heritage & Indian History Inter-College Quiz',
    college: 'Literary & Debating Society, SPSU Udaipur',
    category: 'Competitions',
    mode: 'In-Person',
    date: '2026-12-02',
    time: '03:30 PM – 06:00 PM IST',
    venue: 'Sir Padampat Singhania University Seminar Hall 2',
    deadline: '2026-11-30',
    eligibility: 'Teams of 2 students from any academic stream',
    fee: 'Free Entry',
    prizes: '₹15,000 Cash + Historical Book Hampers & Shields',
    theme: 'pitch',
    registrationUrl: 'https://spsu.ac.in',
    description: 'Buzzer round quiz celebrating the rich history, brave dynasties, art, and monuments of Rajasthan and India.',
    featured: false
  },
  {
    id: 'evt-quantum-talk-spsu',
    title: 'Quantum Computing & Post-Quantum Cryptography Colloquium',
    college: 'Department of Mathematics & Computing, SPSU Udaipur',
    category: 'Seminars',
    mode: 'Hybrid',
    date: '2026-12-06',
    time: '11:00 AM – 01:00 PM IST',
    venue: 'Executive Council Room & Webex Stream',
    deadline: '2026-12-04',
    eligibility: 'Researchers, M.Tech, B.Tech and PhD scholars',
    fee: 'Free',
    prizes: 'IEEE Technical Certificates of Participation',
    theme: 'cyber',
    registrationUrl: 'https://spsu.ac.in',
    description: 'Distinguished lecture on Qiskit quantum circuit simulations, Shor algorithm implications, and NIST post-quantum encryption standards.',
    featured: false
  },
  {
    id: 'evt-robosoccer-spsu',
    title: 'RoboSoccer & Autonomous Maze Hunt Championship',
    college: 'Mechatronics & Robotics Club, SPSU Udaipur',
    category: 'Robotics',
    mode: 'In-Person',
    date: '2026-12-10',
    time: '11:00 AM IST',
    venue: 'Indoor Sports Arena, SPSU Campus, Bhatewar, Udaipur',
    deadline: '2026-12-03',
    eligibility: 'Student robotics and engineering teams from across India',
    fee: '₹350 per team',
    prizes: '₹35,000 Cash + Championship Trophy',
    theme: 'robotics',
    registrationUrl: 'https://spsu.ac.in',
    description: 'High-octane wireless RF & Bluetooth remote soccer bots competing in arena matches, plus precision micromouse autonomous maze navigation.',
    featured: false
  }
];

// =============================================================================
// 2. Default Pre-Seeded Users (Student, Event Organizer, University Admin)
// =============================================================================

const DEFAULT_USERS = [
  {
    id: 'usr-student-01',
    name: 'Anirudhh',
    email: 'student@spsu.ac.in',
    password: 'student123',
    role: 'student',
    enrollmentId: 'SPSU/2023/CSE/042',
    department: 'B.Tech CSE (3rd Yr) · Advanced Computing Lab',
    phone: '+91 98290 12345',
    avatarText: 'AN'
  },
  {
    id: 'usr-organizer-01',
    name: 'Piyush',
    email: 'organizer@spsu.ac.in',
    password: 'organizer123',
    role: 'organizer',
    enrollmentId: 'SPSU/FAC/SAC/019',
    department: 'SAC Coordinator & SPSU Coding Club Lead',
    phone: '+91 94140 56789',
    avatarText: 'PY'
  },
  {
    id: 'usr-admin-01',
    name: 'DS Chouhan',
    email: 'admin@spsu.ac.in',
    password: 'admin123',
    role: 'admin',
    enrollmentId: 'SPSU/ADM/DEAN/004',
    department: 'Dean of Student Affairs & Campus Administration, SPSU Udaipur',
    phone: '+91 94141 89012',
    avatarText: 'DC'
  }
];

// Sample registrations pre-seeded for demonstration
const DEFAULT_REGISTRATIONS = [
  {
    id: 'reg-demo-01',
    eventId: 'evt-hackspsu-2026',
    eventTitle: 'HackSPSU 2026: 24-Hour National Collegiate Hackathon',
    studentEmail: 'student@spsu.ac.in',
    studentName: 'Anirudhh',
    enrollmentId: 'SPSU/2023/CSE/042',
    phone: '+91 98290 12345',
    branch: 'B.Tech CSE',
    year: '3rd Year',
    registeredAt: '2026-11-01T10:30:00.000Z',
    ticketNumber: 'SPSU-TKT-2026-8492',
    status: 'Confirmed'
  },
  {
    id: 'reg-demo-02',
    eventId: 'evt-panache-fest',
    eventTitle: 'Panache 2026 – Annual National Cultural & Arts Festival',
    studentEmail: 'student@spsu.ac.in',
    studentName: 'Anirudhh',
    enrollmentId: 'SPSU/2023/CSE/042',
    phone: '+91 98290 12345',
    branch: 'B.Tech CSE',
    year: '3rd Year',
    registeredAt: '2026-11-02T14:15:00.000Z',
    ticketNumber: 'SPSU-TKT-2026-9214',
    status: 'Confirmed'
  },
  {
    id: 'reg-demo-03',
    eventId: 'evt-hackspsu-2026',
    eventTitle: 'HackSPSU 2026: 24-Hour National Collegiate Hackathon',
    studentEmail: 'neha.j@spsu.ac.in',
    studentName: 'Neha Joshi',
    enrollmentId: 'SPSU/2023/AIML/018',
    phone: '+91 98291 55432',
    branch: 'B.Tech AI & Data Science',
    year: '3rd Year',
    registeredAt: '2026-11-02T11:00:00.000Z',
    ticketNumber: 'SPSU-TKT-2026-3310',
    status: 'Confirmed'
  },
  {
    id: 'reg-demo-04',
    eventId: 'evt-hackspsu-2026',
    eventTitle: 'HackSPSU 2026: 24-Hour National Collegiate Hackathon',
    studentEmail: 'rohit.singh@spsu.ac.in',
    studentName: 'Rohit Singh Chouhan',
    enrollmentId: 'SPSU/2022/ECE/009',
    phone: '+91 94142 88710',
    branch: 'B.Tech ECE',
    year: '4th Year',
    registeredAt: '2026-11-03T16:45:00.000Z',
    ticketNumber: 'SPSU-TKT-2026-5782',
    status: 'Confirmed'
  }
];

// =============================================================================
// 3. High-Fidelity Thematic SVG Vector Graphics
// =============================================================================

function generateEventVectorBanner(theme, title, category) {
  const themes = {
    code: {
      grad1: '#4338ca', grad2: '#7c3aed',
      icon: '<path d="m18 16 4-4-4-4M6 8l-4 4 4 4m8.5-12-5 16" stroke="#c4b5fd" stroke-width="2" stroke-linecap="round"/>',
      accent: '#a78bfa'
    },
    ai: {
      grad1: '#1e1b4b', grad2: '#6d28d9',
      icon: '<circle cx="12" cy="12" r="3" stroke="#e0e7ff" stroke-width="2"/><path d="M12 2v4m0 12v4M2 12h4m12 0h4m-3.5-6.5-2.8 2.8m-7.4 7.4-2.8 2.8m0-13 2.8 2.8m7.4 7.4 2.8 2.8" stroke="#a78bfa" stroke-width="1.8"/>',
      accent: '#38bdf8'
    },
    coding: {
      grad1: '#1e293b', grad2: '#4f46e5',
      icon: '<rect width="18" height="14" x="3" y="5" rx="2" stroke="#e2e8f0" stroke-width="2"/><path d="m9 10 2 2-2 2m4 0h2" stroke="#38bdf8" stroke-width="2" stroke-linecap="round"/>',
      accent: '#818cf8'
    },
    cultural: {
      grad1: '#581c87', grad2: '#be185d',
      icon: '<path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M4.93 19.07 19.07 4.93" stroke="#f472b6" stroke-width="2" opacity="0.4"/><circle cx="12" cy="12" r="6" stroke="#fbcfe8" stroke-width="2"/>',
      accent: '#f472b6'
    },
    camera: {
      grad1: '#0f172a', grad2: '#312e81',
      icon: '<path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" stroke="#cbd5e1" stroke-width="2"/><circle cx="12" cy="13" r="3" stroke="#38bdf8" stroke-width="2"/>',
      accent: '#38bdf8'
    },
    robotics: {
      grad1: '#022c22', grad2: '#1e1b4b',
      icon: '<rect width="16" height="12" x="4" y="6" rx="2" stroke="#6ee7b7" stroke-width="2"/><circle cx="9" cy="11" r="1.5" fill="#6ee7b7"/><circle cx="15" cy="11" r="1.5" fill="#6ee7b7"/><path d="M12 2v4M8 18v3m8-3v3" stroke="#34d399" stroke-width="2"/>',
      accent: '#34d399'
    },
    pitch: {
      grad1: '#172554', grad2: '#701a75',
      icon: '<path d="m3 3 7.07 16.97 2.51-7.39 7.39-2.51L3 3z" stroke="#facc15" stroke-width="2"/><path d="m13 13 6 6" stroke="#facc15" stroke-width="2"/>',
      accent: '#facc15'
    },
    cyber: {
      grad1: '#0f172a', grad2: '#1e1b4b',
      icon: '<rect width="18" height="11" x="3" y="11" rx="2" stroke="#38bdf8" stroke-width="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4" stroke="#38bdf8" stroke-width="2"/>',
      accent: '#38bdf8'
    },
    sports: {
      grad1: '#064e3b', grad2: '#1e3a8a',
      icon: '<circle cx="12" cy="12" r="10" stroke="#fcd34d" stroke-width="2"/><path d="M12 2a14.5 14.5 0 0 0 0 20M2 12h20" stroke="#fcd34d" stroke-width="1.8"/>',
      accent: '#fcd34d'
    }
  };

  const selected = themes[theme] || themes.code;
  const safeTitle = escapeHTML(title || 'Campus Event');
  const safeCategory = escapeHTML(category || 'General');

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 450" width="100%" height="100%">
    <defs>
      <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="${selected.grad1}" />
        <stop offset="100%" stop-color="${selected.grad2}" />
      </linearGradient>
      <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255, 255, 255, 0.05)" stroke-width="1"/>
      </pattern>
    </defs>
    <rect width="800" height="450" fill="url(#grad)"/>
    <rect width="800" height="450" fill="url(#grid)"/>
    <circle cx="700" cy="80" r="160" fill="${selected.accent}" opacity="0.12" filter="blur(30px)"/>
    <circle cx="120" cy="380" r="140" fill="#6366f1" opacity="0.1" filter="blur(40px)"/>
    <g transform="translate(620, 80) scale(3.5)" opacity="0.4">
      ${selected.icon}
    </g>
    <g transform="translate(70, 110)">
      <rect width="64" height="64" rx="14" fill="rgba(8, 12, 22, 0.6)" stroke="${selected.accent}" stroke-width="1.5"/>
      <g transform="translate(16, 16) scale(1.3)">
        ${selected.icon}
      </g>
      <text x="0" y="115" font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-size="16" font-weight="700" fill="${selected.accent}" letter-spacing="2" text-transform="uppercase">${safeCategory}</text>
      <text x="0" y="155" font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-size="30" font-weight="800" fill="#ffffff" letter-spacing="-0.5">${safeTitle.slice(0, 32)}${safeTitle.length > 32 ? '...' : ''}</text>
      <text x="0" y="190" font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-size="16" font-weight="500" fill="#94a3b8">Official Event · SPSU Udaipur</text>
    </g>
  </svg>`;

  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
}

// =============================================================================
// 4. Application State & Storage Management
// =============================================================================

const STORAGE_KEYS = {
  EVENTS: 'spsu_eventhive_events_v3',
  BOOKMARKS: 'spsu_eventhive_bookmarks_v3',
  USERS: 'spsu_eventhive_users_v4',
  CURRENT_USER: 'spsu_eventhive_current_user_v4',
  REGISTRATIONS: 'spsu_eventhive_registrations_v4'
};

const State = {
  events: [],
  bookmarks: [],
  users: [],
  currentUser: null,
  registrations: [],
  filters: {
    query: '',
    category: 'all',
    mode: 'all',
    sortBy: 'date-asc'
  },
  currentEditingId: null,
  selectedRegisterEventId: null
};

/**
 * Initialize state from localStorage or load defaults
 */
function initState() {
  // Load Events
  try {
    const savedEvents = localStorage.getItem(STORAGE_KEYS.EVENTS);
    if (savedEvents) {
      State.events = JSON.parse(savedEvents);
    } else {
      State.events = [...DEFAULT_EVENTS];
      saveEventsToStorage();
    }
  } catch (err) {
    console.error('Error reading events from storage', err);
    State.events = [...DEFAULT_EVENTS];
  }

  // Load Bookmarks
  try {
    const savedBookmarks = localStorage.getItem(STORAGE_KEYS.BOOKMARKS);
    State.bookmarks = savedBookmarks ? JSON.parse(savedBookmarks) : [];
  } catch (err) {
    console.error('Error reading bookmarks from storage', err);
    State.bookmarks = [];
  }

  // Load Users
  try {
    const savedUsers = localStorage.getItem(STORAGE_KEYS.USERS);
    State.users = savedUsers ? JSON.parse(savedUsers) : [...DEFAULT_USERS];
    if (!savedUsers) {
      localStorage.setItem(STORAGE_KEYS.USERS, JSON.stringify(DEFAULT_USERS));
    }
  } catch (err) {
    State.users = [...DEFAULT_USERS];
  }

  // Load Current Logged In User
  try {
    const savedCurrentUser = localStorage.getItem(STORAGE_KEYS.CURRENT_USER);
    if (savedCurrentUser) {
      State.currentUser = JSON.parse(savedCurrentUser);
    } else {
      // Default to Student Anirudhh
      State.currentUser = DEFAULT_USERS[0];
      localStorage.setItem(STORAGE_KEYS.CURRENT_USER, JSON.stringify(State.currentUser));
    }
  } catch (err) {
    State.currentUser = DEFAULT_USERS[0];
  }

  // Load Registrations
  try {
    const savedRegs = localStorage.getItem(STORAGE_KEYS.REGISTRATIONS);
    State.registrations = savedRegs ? JSON.parse(savedRegs) : [...DEFAULT_REGISTRATIONS];
    if (!savedRegs) {
      localStorage.setItem(STORAGE_KEYS.REGISTRATIONS, JSON.stringify(DEFAULT_REGISTRATIONS));
    }
  } catch (err) {
    State.registrations = [...DEFAULT_REGISTRATIONS];
  }
}

function saveEventsToStorage() {
  try {
    localStorage.setItem(STORAGE_KEYS.EVENTS, JSON.stringify(State.events));
  } catch (e) {
    console.error('Failed to save events to localStorage', e);
  }
}

function saveBookmarksToStorage() {
  try {
    localStorage.setItem(STORAGE_KEYS.BOOKMARKS, JSON.stringify(State.bookmarks));
  } catch (e) {
    console.error('Failed to save bookmarks to localStorage', e);
  }
}

function saveRegistrationsToStorage() {
  try {
    localStorage.setItem(STORAGE_KEYS.REGISTRATIONS, JSON.stringify(State.registrations));
  } catch (e) {
    console.error('Failed to save registrations to localStorage', e);
  }
}

function saveCurrentUserToStorage() {
  try {
    localStorage.setItem(STORAGE_KEYS.CURRENT_USER, JSON.stringify(State.currentUser));
  } catch (e) {
    console.error('Failed to save user to localStorage', e);
  }
}

// =============================================================================
// 5. Authentication, Roles & Permissions Logic
// =============================================================================

function switchUserRole(targetRole) {
  const user = State.users.find(u => u.role === targetRole) || DEFAULT_USERS.find(u => u.role === targetRole);
  if (user) {
    State.currentUser = user;
    saveCurrentUserToStorage();
    applyRolePermissions();
    renderEvents();
    renderSavedEvents();
    renderRegistrations();
    renderDashboard();
    updateBadgeCounts();

    const roleTitles = {
      student: 'Student (Anirudhh)',
      organizer: 'Event Organizer (Piyush)',
      admin: 'University Admin (DS Chouhan)'
    };
    showToast(`Switched account to ${roleTitles[targetRole]}`, 'success');
  }
}

function applyRolePermissions() {
  const user = State.currentUser;
  if (!user) return;

  const role = user.role; // 'student' | 'organizer' | 'admin'

  // Header Elements
  const headerAvatar = document.getElementById('header-avatar');
  const headerUserName = document.getElementById('header-user-name');
  const headerRoleBadge = document.getElementById('header-role-badge');
  const dropdownAvatar = document.getElementById('dropdown-avatar');
  const dropdownUserName = document.getElementById('dropdown-user-name');
  const dropdownUserEmail = document.getElementById('dropdown-user-email');
  const dropdownUserDept = document.getElementById('dropdown-user-dept');
  const mobileUserStatus = document.getElementById('mobile-user-status');

  const roleLabels = {
    student: 'Student',
    organizer: 'Organizer',
    admin: 'Admin'
  };

  if (headerAvatar) {
    headerAvatar.textContent = user.avatarText || 'US';
    headerAvatar.className = `user-avatar-pill role-${role}`;
  }
  if (headerUserName) {
    const first = user.name.split(' ')[0];
    headerUserName.textContent = first;
  }
  if (headerRoleBadge) {
    headerRoleBadge.textContent = roleLabels[role] || role;
    headerRoleBadge.className = `role-badge role-${role}`;
  }

  if (dropdownAvatar) {
    dropdownAvatar.textContent = user.avatarText || 'US';
    dropdownAvatar.className = `user-avatar-pill role-${role}`;
  }
  if (dropdownUserName) dropdownUserName.textContent = user.name;
  if (dropdownUserEmail) dropdownUserEmail.textContent = user.email;
  if (dropdownUserDept) dropdownUserDept.textContent = user.department || user.enrollmentId || 'SPSU Udaipur';

  if (mobileUserStatus) {
    mobileUserStatus.textContent = `${user.name} (${roleLabels[role]})`;
  }

  // Highlight active role pill in dropdown
  document.querySelectorAll('.btn-role-switch').forEach(btn => {
    if (btn.dataset.role === role) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  // Top Persistent Role Bar Indicator & Buttons
  const topRoleIndicator = document.getElementById('top-role-indicator');
  if (topRoleIndicator) {
    const displayName = user.name || (role === 'student' ? 'Anirudhh' : role === 'organizer' ? 'Piyush' : 'DS Chouhan');
    const formatted = role === 'student' ? `🎓 Student (${displayName})` : role === 'organizer' ? `🎪 Organizer (${displayName})` : `🛡️ Admin (${displayName})`;
    topRoleIndicator.textContent = formatted;
    topRoleIndicator.className = `role-badge role-${role}`;
  }

  document.querySelectorAll('.top-role-btn').forEach(btn => {
    if (btn.dataset.role === role) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  // Hero Section 3-Role Demo Cards
  document.querySelectorAll('.hero-role-card').forEach(card => {
    const isCurrent = card.dataset.role === role;
    const actionBtn = card.querySelector('.hero-role-action-btn');
    if (isCurrent) {
      card.classList.add('active');
      if (actionBtn) actionBtn.textContent = 'Active Role ✓';
    } else {
      card.classList.remove('active');
      const roleName = card.dataset.role === 'student' ? 'Student' : card.dataset.role === 'organizer' ? 'Organizer' : 'Admin';
      if (actionBtn) actionBtn.textContent = `Login as ${roleName} →`;
    }
  });

  // Auth Modal Cards
  document.querySelectorAll('.auth-role-card').forEach(card => {
    if (card.dataset.role === role) {
      card.classList.add('selected');
    } else {
      card.classList.remove('selected');
    }
  });

  // Navigation Links Visibility based on Role
  const navItemPasses = document.getElementById('nav-item-passes');
  const mobileItemPasses = document.getElementById('mobile-item-passes');
  const dropdownLinkPasses = document.getElementById('dropdown-link-passes');

  const navItemAdmin = document.getElementById('nav-item-admin');
  const mobileItemAdmin = document.getElementById('mobile-item-admin');
  const dropdownAdminItem = document.getElementById('dropdown-admin-item');
  const adminSection = document.getElementById('admin-section');

  // "My Passes" visible for all (especially students)
  if (navItemPasses) navItemPasses.style.display = 'block';
  if (mobileItemPasses) mobileItemPasses.style.display = 'block';
  if (dropdownLinkPasses) dropdownLinkPasses.style.display = 'flex';

  // "Admin Center" only visible for Admin
  if (role === 'admin') {
    if (navItemAdmin) navItemAdmin.style.display = 'block';
    if (mobileItemAdmin) mobileItemAdmin.style.display = 'block';
    if (dropdownAdminItem) dropdownAdminItem.style.display = 'block';
    if (adminSection) adminSection.style.display = 'block';
  } else {
    if (navItemAdmin) navItemAdmin.style.display = 'none';
    if (mobileItemAdmin) mobileItemAdmin.style.display = 'none';
    if (dropdownAdminItem) dropdownAdminItem.style.display = 'none';
    if (adminSection) adminSection.style.display = 'none';
  }

  // Admin KPI metrics
  updateAdminKPIs();
}

function updateAdminKPIs() {
  const kpiEvents = document.getElementById('admin-kpi-events');
  const kpiRegs = document.getElementById('admin-kpi-registrations');
  const kpiClubs = document.getElementById('admin-kpi-clubs');

  if (kpiEvents) kpiEvents.textContent = State.events.length;
  if (kpiRegs) kpiRegs.textContent = State.registrations.length;
  if (kpiClubs) {
    const clubs = new Set(State.events.map(e => e.college));
    kpiClubs.textContent = clubs.size;
  }
}

// =============================================================================
// 6. Filtering & Query Processing
// =============================================================================

function getFilteredEvents() {
  const { query, category, mode, sortBy } = State.filters;
  const q = query.trim().toLowerCase();

  let results = State.events.filter(evt => {
    if (category !== 'all' && evt.category.toLowerCase() !== category.toLowerCase()) {
      return false;
    }
    if (mode !== 'all' && evt.mode.toLowerCase() !== mode.toLowerCase()) {
      return false;
    }
    if (q) {
      const matchTitle = evt.title.toLowerCase().includes(q);
      const matchCollege = evt.college.toLowerCase().includes(q);
      const matchVenue = evt.venue.toLowerCase().includes(q);
      const matchDesc = evt.description.toLowerCase().includes(q);
      const matchCategory = evt.category.toLowerCase().includes(q);
      if (!matchTitle && !matchCollege && !matchVenue && !matchDesc && !matchCategory) {
        return false;
      }
    }
    return true;
  });

  results.sort((a, b) => {
    switch (sortBy) {
      case 'date-asc':
        return new Date(a.date).getTime() - new Date(b.date).getTime();
      case 'date-desc':
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      case 'deadline':
        return new Date(a.deadline).getTime() - new Date(b.deadline).getTime();
      case 'title-asc':
        return a.title.localeCompare(b.title);
      default:
        return 0;
    }
  });

  return results;
}

function getSavedEvents() {
  return State.events.filter(evt => State.bookmarks.includes(evt.id));
}

function getStudentRegistrations() {
  const email = (State.currentUser?.email || '').toLowerCase();
  return State.registrations.filter(
    r => r.studentEmail.toLowerCase() === email && r.status !== 'Cancelled'
  );
}

function isStudentRegistered(eventId) {
  const email = (State.currentUser?.email || '').toLowerCase();
  return State.registrations.some(
    r => r.eventId === eventId && r.studentEmail.toLowerCase() === email && r.status !== 'Cancelled'
  );
}

function toggleBookmark(eventId) {
  const index = State.bookmarks.indexOf(eventId);
  let isSaved = false;
  if (index > -1) {
    State.bookmarks.splice(index, 1);
    isSaved = false;
    showToast('Event removed from your Saved Events.', 'info');
  } else {
    State.bookmarks.push(eventId);
    isSaved = true;
    showToast('Event saved to your bookmarks!', 'success');
  }
  saveBookmarksToStorage();
  updateBadgeCounts();
  renderEvents();
  renderSavedEvents();
  renderDashboard();

  const detailsBtn = document.getElementById('modal-bookmark-btn');
  if (detailsBtn && detailsBtn.dataset.eventId === eventId) {
    updateModalBookmarkBtn(detailsBtn, isSaved);
  }
}

// =============================================================================
// 7. DOM Rendering Engine (Cards, Tables, Passes)
// =============================================================================

function formatDate(dateStr) {
  if (!dateStr) return 'TBA';
  const options = { year: 'numeric', month: 'short', day: 'numeric' };
  try {
    const d = new Date(dateStr);
    return isNaN(d.getTime()) ? dateStr : d.toLocaleDateString('en-US', options);
  } catch (e) {
    return dateStr;
  }
}

/**
 * Create an event card HTML string
 */
function createEventCardHTML(evt) {
  const isBookmarked = State.bookmarks.includes(evt.id);
  const bannerUrl = evt.image || generateEventVectorBanner(evt.theme || 'tech', evt.title, evt.category);
  const modeClass = evt.mode.toLowerCase().replace(/[^a-z]/g, '-');
  const alreadyRegistered = isStudentRegistered(evt.id);

  return `
    <article class="event-card" data-id="${evt.id}">
      <div class="event-card-media">
        <img 
          src="${bannerUrl}" 
          alt="${escapeHTML(evt.title)}" 
          class="event-card-image" 
          loading="lazy" 
          referrerpolicy="no-referrer"
        />
        <div class="card-badges">
          <span class="badge-mode ${modeClass}">${escapeHTML(evt.mode)}</span>
          ${alreadyRegistered ? '<span class="role-badge role-student" style="background: rgba(16, 185, 129, 0.9); color: #fff;">Pass Issued ✓</span>' : ''}
        </div>
        <button 
          class="btn-bookmark ${isBookmarked ? 'active' : ''}" 
          data-id="${evt.id}" 
          aria-label="${isBookmarked ? 'Remove bookmark' : 'Bookmark this event'}"
          title="${isBookmarked ? 'Remove from Saved Events' : 'Save Event'}"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="${isBookmarked ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
          </svg>
        </button>
      </div>

      <div class="event-card-body">
        <div class="event-card-meta">
          <span class="event-card-category">${escapeHTML(evt.category)}</span>
          <span aria-hidden="true">·</span>
          <span>Reg Ends ${formatDate(evt.deadline)}</span>
        </div>

        <h3 class="event-card-title" title="${escapeHTML(evt.title)}">
          ${escapeHTML(evt.title)}
        </h3>

        <div class="event-card-college">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
            <path d="M6 12v5c3 3 9 3 12 0v-5"/>
          </svg>
          <span class="truncate">${escapeHTML(evt.college)}</span>
        </div>

        <div class="event-card-details">
          <div class="detail-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect width="18" height="18" x="3" y="4" rx="2" ry="2"/>
              <line x1="16" x2="16" y1="2" y2="6"/>
              <line x1="8" x2="8" y1="2" y2="6"/>
              <line x1="3" x2="21" y1="10" y2="10"/>
            </svg>
            <span>${formatDate(evt.date)}${evt.time ? ` · ${escapeHTML(evt.time)}` : ''}</span>
          </div>

          <div class="detail-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
              <circle cx="12" cy="10" r="3"/>
            </svg>
            <span class="truncate">${escapeHTML(evt.venue)}</span>
          </div>
        </div>

        <div class="event-card-footer">
          ${alreadyRegistered ? `
            <button class="btn-view-pass" data-event-id="${evt.id}" title="View your official campus pass">
              <span>🎟️ View Pass</span>
            </button>
          ` : `
            <button class="btn-register-pass" data-id="${evt.id}" title="Register for campus pass">
              <span>Register</span>
            </button>
          `}

          <button class="btn-view-details" data-id="${evt.id}">
            <span>Details</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>
        </div>
      </div>
    </article>
  `;
}

function renderEvents() {
  const container = document.getElementById('events-grid');
  const countEl = document.getElementById('results-count-num');
  if (!container) return;

  const events = getFilteredEvents();
  if (countEl) countEl.textContent = events.length;

  if (events.length === 0) {
    container.innerHTML = `
      <div class="empty-state" style="grid-column: 1 / -1;">
        <div class="empty-icon">🔍</div>
        <h3 class="empty-title">No matching SPSU events found</h3>
        <p class="empty-desc">
          Try adjusting your search terms, clearing category filters, or switching mode to "All Modes".
        </p>
        <button class="btn-primary" onclick="resetFilters()">Reset All Filters</button>
      </div>
    `;
    return;
  }

  container.innerHTML = events.map(createEventCardHTML).join('');
  attachCardEvents(container);
}

function renderSavedEvents() {
  const container = document.getElementById('saved-events-grid');
  const countBadge = document.getElementById('saved-section-count');
  if (!container) return;

  const saved = getSavedEvents();
  if (countBadge) countBadge.textContent = `${saved.length} Event${saved.length === 1 ? '' : 's'}`;

  if (saved.length === 0) {
    container.innerHTML = `
      <div class="empty-state" style="grid-column: 1 / -1;">
        <div class="empty-icon">🔖</div>
        <h3 class="empty-title">No saved events yet</h3>
        <p class="empty-desc">
          Click the bookmark ribbon on any event card across the website to collect upcoming fests and competitions here.
        </p>
        <a href="#explore" class="btn-primary">Discover Events</a>
      </div>
    `;
    return;
  }

  container.innerHTML = saved.map(createEventCardHTML).join('');
  attachCardEvents(container);
}

function renderRegistrations() {
  const container = document.getElementById('registrations-grid');
  const badge = document.getElementById('reg-count-badge');
  const navPassesBadge = document.getElementById('nav-passes-count');
  const mobilePassesBadge = document.getElementById('mobile-passes-count');

  if (!container) return;

  const myPasses = getStudentRegistrations();
  const count = myPasses.length;

  if (badge) badge.textContent = `${count} Confirmed Pass${count === 1 ? '' : 'es'}`;
  if (navPassesBadge) navPassesBadge.textContent = count;
  if (mobilePassesBadge) mobilePassesBadge.textContent = count;

  if (myPasses.length === 0) {
    container.innerHTML = `
      <div class="empty-state" style="grid-column: 1 / -1;">
        <div class="empty-icon">🎟️</div>
        <h3 class="empty-title">No Campus Passes Registered Yet</h3>
        <p class="empty-desc">
          As an SPSU student (${escapeHTML(State.currentUser?.name || 'Anirudhh')}), you can register for hackathons, workshops, and Panache fest to receive digital entry passes.
        </p>
        <a href="#explore" class="btn-primary">Browse &amp; Register for Events</a>
      </div>
    `;
    return;
  }

  container.innerHTML = myPasses.map(reg => {
    const evt = State.events.find(e => e.id === reg.eventId) || {
      date: '2026-11-20',
      time: 'TBA',
      venue: 'SPSU Campus, Udaipur',
      category: 'Campus Event'
    };

    return `
      <div class="reg-card">
        <div class="reg-card-header">
          <div>
            <div style="font-size: 0.75rem; color: #34d399; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 0.2rem;">
              Confirmed Entry Pass
            </div>
            <div class="reg-card-title">${escapeHTML(reg.eventTitle)}</div>
          </div>
          <span class="role-badge role-student">Active Pass</span>
        </div>

        <div class="reg-card-body">
          <div class="reg-card-row">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect width="18" height="18" x="3" y="4" rx="2" ry="2"/>
              <line x1="16" y1="2" x2="16" y2="6"/>
              <line x1="8" y1="2" x2="8" y2="6"/>
              <line x1="3" x2="21" y1="10" y2="10"/>
            </svg>
            <span>${formatDate(evt.date)} · ${escapeHTML(evt.time || 'All Day')}</span>
          </div>

          <div class="reg-card-row">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
              <circle cx="12" cy="10" r="3"/>
            </svg>
            <span class="truncate">${escapeHTML(evt.venue)}</span>
          </div>

          <div class="reg-card-row" style="margin-top: 0.25rem;">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
            </svg>
            <span style="font-family: monospace; color: #c4b5fd; font-weight: 600;">Pass: ${escapeHTML(reg.ticketNumber)}</span>
          </div>
        </div>

        <div class="reg-card-footer">
          <button class="btn-view-pass" data-reg-id="${reg.id}" type="button">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
              <line x1="16" y1="21" x2="16" y2="5"></line>
            </svg>
            <span>View Digital Ticket</span>
          </button>

          <button class="btn-cancel-reg" data-reg-id="${reg.id}" type="button">
            Cancel Pass
          </button>
        </div>
      </div>
    `;
  }).join('');

  // Attach pass view & cancel handlers
  container.querySelectorAll('.btn-view-pass').forEach(btn => {
    btn.addEventListener('click', () => {
      const regId = btn.dataset.regId;
      const reg = State.registrations.find(r => r.id === regId);
      if (reg) openTicketModal(reg);
    });
  });

  container.querySelectorAll('.btn-cancel-reg').forEach(btn => {
    btn.addEventListener('click', () => {
      const regId = btn.dataset.regId;
      const reg = State.registrations.find(r => r.id === regId);
      if (!reg) return;

      const confirmed = window.confirm(`Cancel your registration for "${reg.eventTitle}"?`);
      if (confirmed) {
        reg.status = 'Cancelled';
        saveRegistrationsToStorage();
        showToast('Registration cancelled.', 'info');
        renderRegistrations();
        renderEvents();
        renderDashboard();
      }
    });
  });
}

function renderDashboard() {
  const tableBody = document.getElementById('dashboard-table-body');
  const statTotal = document.getElementById('stat-total-events');
  const statInPerson = document.getElementById('stat-inperson-events');
  const statOnline = document.getElementById('stat-online-events');
  const statBookmarks = document.getElementById('stat-saved-events');

  if (statTotal) statTotal.textContent = State.events.length;
  if (statInPerson) statInPerson.textContent = State.events.filter(e => e.mode === 'In-Person').length;
  if (statOnline) statOnline.textContent = State.events.filter(e => e.mode === 'Online').length;
  if (statBookmarks) statBookmarks.textContent = State.bookmarks.length;

  if (!tableBody) return;

  if (State.events.length === 0) {
    tableBody.innerHTML = `
      <tr>
        <td colspan="6" style="text-align: center; padding: 2.5rem; color: var(--text-dim);">
          No events created yet. Click "+ Create New Event" above to add an SPSU listing.
        </td>
      </tr>
    `;
    return;
  }

  const role = State.currentUser?.role || 'student';
  const canManage = role === 'organizer' || role === 'admin';

  tableBody.innerHTML = State.events.map(evt => {
    const attendees = State.registrations.filter(r => r.eventId === evt.id && r.status !== 'Cancelled');
    const isFeatured = !!evt.featured;

    return `
      <tr>
        <td>
          <div class="table-event-name">
            ${escapeHTML(evt.title)}
            ${isFeatured ? '<span class="role-badge role-admin" style="margin-left: 0.35rem; font-size: 0.65rem;">Featured</span>' : ''}
          </div>
          <div class="table-event-college">${escapeHTML(evt.college)}</div>
        </td>
        <td><span class="event-card-category">${escapeHTML(evt.category)}</span></td>
        <td><span class="badge-mode ${evt.mode.toLowerCase().replace(/[^a-z]/g, '-')}">${escapeHTML(evt.mode)}</span></td>
        <td>${formatDate(evt.date)}</td>
        <td>${formatDate(evt.deadline)}</td>
        <td>
          <div class="table-actions">
            <!-- View Attendees Roster -->
            <button class="btn-table-action attendees" data-id="${evt.id}" style="background: rgba(16, 185, 129, 0.15); border-color: rgba(16, 185, 129, 0.3); color: #34d399;" title="View registered students">
              👥 Attendees (${attendees.length})
            </button>

            ${canManage ? `
              <button class="btn-table-action edit" data-id="${evt.id}" title="Edit this event">Edit</button>
              <button class="btn-table-action delete" data-id="${evt.id}" title="Delete this event">Delete</button>
            ` : `
              <button class="btn-table-action guest-prompt" data-action="manage" title="Switch to Organizer to edit">
                🔒 Edit
              </button>
            `}

            ${role === 'admin' ? `
              <button class="btn-table-action toggle-featured" data-id="${evt.id}" style="color: #fbbf24;" title="${isFeatured ? 'Unfeature event' : 'Feature event'}">
                ${isFeatured ? '★ Featured' : '☆ Feature'}
              </button>
            ` : ''}
          </div>
        </td>
      </tr>
    `;
  }).join('');

  // Attach Dashboard table actions
  tableBody.querySelectorAll('.btn-table-action.attendees').forEach(btn => {
    btn.addEventListener('click', () => openAttendeesModal(btn.dataset.id));
  });

  tableBody.querySelectorAll('.btn-table-action.edit').forEach(btn => {
    btn.addEventListener('click', () => openEditEventModal(btn.dataset.id));
  });

  tableBody.querySelectorAll('.btn-table-action.delete').forEach(btn => {
    btn.addEventListener('click', () => deleteEvent(btn.dataset.id));
  });

  tableBody.querySelectorAll('.btn-table-action.toggle-featured').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.dataset.id;
      const evt = State.events.find(e => e.id === id);
      if (evt) {
        evt.featured = !evt.featured;
        saveEventsToStorage();
        showToast(`Event "${evt.title}" is now ${evt.featured ? 'Featured on SPSU Homepage' : 'Standard listing'}.`, 'success');
        renderDashboard();
      }
    });
  });

  tableBody.querySelectorAll('.btn-table-action.guest-prompt').forEach(btn => {
    btn.addEventListener('click', () => {
      openPermissionPrompt('Event Editing Restricted', 'Editing and publishing university events requires Event Organizer or University Admin credentials. Switch roles with 1-click below:');
    });
  });
}

function updateBadgeCounts() {
  const count = State.bookmarks.length;
  const navBadge = document.getElementById('nav-saved-count');
  const mobileBadge = document.getElementById('mobile-saved-count');
  if (navBadge) navBadge.textContent = count;
  if (mobileBadge) mobileBadge.textContent = count;
}

function updateCategoryCounts() {
  const cards = document.querySelectorAll('.category-card');
  cards.forEach(card => {
    const cat = card.dataset.category;
    if (cat) {
      const count = State.events.filter(e => e.category.toLowerCase() === cat.toLowerCase()).length;
      const countEl = card.querySelector('.category-count');
      if (countEl) countEl.textContent = `${count} Event${count === 1 ? '' : 's'}`;
    }
  });
}

// =============================================================================
// 8. Interactive Event Handlers & Card Clicks
// =============================================================================

function attachCardEvents(parent) {
  // Bookmark toggle buttons
  parent.querySelectorAll('.btn-bookmark').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const id = btn.dataset.id;
      toggleBookmark(id);
    });
  });

  // View details buttons
  parent.querySelectorAll('.btn-view-details').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const id = btn.dataset.id;
      openDetailsModal(id);
    });
  });

  // Register pass button on card
  parent.querySelectorAll('.btn-register-pass').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const id = btn.dataset.id;
      openRegistrationModal(id);
    });
  });

  // View pass button on card (when already registered)
  parent.querySelectorAll('.btn-view-pass').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const eventId = btn.dataset.eventId;
      const email = (State.currentUser?.email || '').toLowerCase();
      const reg = State.registrations.find(r => r.eventId === eventId && r.studentEmail.toLowerCase() === email && r.status !== 'Cancelled');
      if (reg) openTicketModal(reg);
    });
  });

  // Card background click to open details
  parent.querySelectorAll('.event-card').forEach(card => {
    card.addEventListener('click', (e) => {
      if (e.target.closest('button')) return;
      const id = card.dataset.id;
      openDetailsModal(id);
    });
  });
}

// =============================================================================
// 9. Modals (Details, Add/Edit Event, Registration, Ticket Pass, Attendees, Auth)
// =============================================================================

function openDetailsModal(eventId) {
  const evt = State.events.find(e => e.id === eventId);
  if (!evt) return;

  const modal = document.getElementById('details-modal');
  if (!modal) return;

  const bannerImg = document.getElementById('modal-banner');
  const titleEl = document.getElementById('modal-title');
  const collegeEl = document.getElementById('modal-college');
  const categoryEl = document.getElementById('modal-category');
  const modeEl = document.getElementById('modal-mode');
  const dateEl = document.getElementById('modal-date');
  const venueEl = document.getElementById('modal-venue');
  const deadlineEl = document.getElementById('modal-deadline');
  const eligibilityEl = document.getElementById('modal-eligibility');
  const feeEl = document.getElementById('modal-fee');
  const prizesEl = document.getElementById('modal-prizes');
  const descEl = document.getElementById('modal-description');
  const registerBtn = document.getElementById('modal-register-btn');
  const bookmarkBtn = document.getElementById('modal-bookmark-btn');

  const bannerUrl = evt.image || generateEventVectorBanner(evt.theme || 'tech', evt.title, evt.category);

  if (bannerImg) {
    bannerImg.src = bannerUrl;
    bannerImg.alt = evt.title;
  }
  if (titleEl) titleEl.textContent = evt.title;
  if (collegeEl) collegeEl.textContent = evt.college;
  if (categoryEl) categoryEl.textContent = evt.category;
  if (modeEl) {
    modeEl.textContent = evt.mode;
    modeEl.className = `badge-mode ${evt.mode.toLowerCase().replace(/[^a-z]/g, '-')}`;
  }
  if (dateEl) dateEl.textContent = `${formatDate(evt.date)}${evt.time ? ` · ${evt.time}` : ''}`;
  if (venueEl) venueEl.textContent = evt.venue;
  if (deadlineEl) deadlineEl.textContent = formatDate(evt.deadline);
  if (eligibilityEl) eligibilityEl.textContent = evt.eligibility || 'Open to all students';
  if (feeEl) feeEl.textContent = evt.fee || 'Free';
  if (prizesEl) prizesEl.textContent = evt.prizes || 'Certificates & Goodies';
  if (descEl) descEl.textContent = evt.description;

  const alreadyRegistered = isStudentRegistered(evt.id);

  if (registerBtn) {
    if (alreadyRegistered) {
      registerBtn.innerHTML = `
        <span>Pass Issued (View Ticket)</span>
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
      `;
      registerBtn.onclick = (e) => {
        e.preventDefault();
        const email = (State.currentUser?.email || '').toLowerCase();
        const reg = State.registrations.find(r => r.eventId === evt.id && r.studentEmail.toLowerCase() === email && r.status !== 'Cancelled');
        if (reg) {
          closeModals();
          openTicketModal(reg);
        }
      };
    } else {
      registerBtn.innerHTML = `
        <span>Register for Campus Pass</span>
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
      `;
      registerBtn.onclick = (e) => {
        e.preventDefault();
        closeModals();
        openRegistrationModal(evt.id);
      };
    }
  }

  if (bookmarkBtn) {
    bookmarkBtn.dataset.eventId = evt.id;
    const isSaved = State.bookmarks.includes(evt.id);
    updateModalBookmarkBtn(bookmarkBtn, isSaved);
  }

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function updateModalBookmarkBtn(btn, isSaved) {
  if (!btn) return;
  btn.innerHTML = `
    <svg width="16" height="16" viewBox="0 0 24 24" fill="${isSaved ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2">
      <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
    </svg>
    <span>${isSaved ? 'Bookmarked' : 'Bookmark Event'}</span>
  `;
  if (isSaved) {
    btn.classList.add('active');
  } else {
    btn.classList.remove('active');
  }
}

function closeModals() {
  document.querySelectorAll('.modal-backdrop').forEach(modal => {
    modal.classList.remove('active');
  });
  document.body.style.overflow = '';
}

// Student Registration Pass Modal
function openRegistrationModal(eventId) {
  const evt = State.events.find(e => e.id === eventId);
  if (!evt) return;

  State.selectedRegisterEventId = eventId;
  const modal = document.getElementById('registration-modal');
  if (!modal) return;

  const targetTitle = document.getElementById('reg-target-event-title');
  const targetMeta = document.getElementById('reg-target-event-meta');
  const nameInput = document.getElementById('reg-student-name');
  const rollInput = document.getElementById('reg-student-roll');
  const emailInput = document.getElementById('reg-student-email');
  const phoneInput = document.getElementById('reg-student-phone');
  const branchInput = document.getElementById('reg-student-branch');

  if (targetTitle) targetTitle.textContent = evt.title;
  if (targetMeta) targetMeta.textContent = `${formatDate(evt.date)} · ${evt.venue}`;

  // Pre-fill active student profile
  const user = State.currentUser;
  if (nameInput) nameInput.value = user?.name || '';
  if (rollInput) rollInput.value = user?.enrollmentId || 'SPSU/2023/CSE/042';
  if (emailInput) emailInput.value = user?.email || 'student@spsu.ac.in';
  if (phoneInput) phoneInput.value = user?.phone || '+91 98290 12345';
  if (branchInput) branchInput.value = user?.department || 'B.Tech CSE';

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function handleRegistrationSubmit(e) {
  e.preventDefault();
  const eventId = State.selectedRegisterEventId;
  const evt = State.events.find(e => e.id === eventId);
  if (!evt) return;

  const name = document.getElementById('reg-student-name').value.trim();
  const roll = document.getElementById('reg-student-roll').value.trim();
  const email = document.getElementById('reg-student-email').value.trim();
  const phone = document.getElementById('reg-student-phone').value.trim();
  const branch = document.getElementById('reg-student-branch').value.trim();

  if (!name || !roll || !email) {
    showToast('Please fill in your name, roll number, and student email.', 'danger');
    return;
  }

  // Check if already registered
  const existing = State.registrations.find(
    r => r.eventId === eventId && r.studentEmail.toLowerCase() === email.toLowerCase() && r.status !== 'Cancelled'
  );

  if (existing) {
    showToast('You already hold a confirmed pass for this event!', 'info');
    closeModals();
    openTicketModal(existing);
    return;
  }

  const randomNum = Math.floor(1000 + Math.random() * 9000);
  const ticketNumber = `SPSU-TKT-2026-${randomNum}`;

  const newReg = {
    id: `reg-${Date.now()}-${randomNum}`,
    eventId: evt.id,
    eventTitle: evt.title,
    studentEmail: email,
    studentName: name,
    enrollmentId: roll,
    phone: phone || '+91 98290 00000',
    branch: branch || 'B.Tech CSE',
    year: '3rd Year',
    registeredAt: new Date().toISOString(),
    ticketNumber,
    status: 'Confirmed'
  };

  State.registrations.unshift(newReg);
  saveRegistrationsToStorage();

  closeModals();
  showToast(`Registration confirmed! Digital Pass ${ticketNumber} issued.`, 'success');

  renderEvents();
  renderRegistrations();
  renderDashboard();

  // Immediately display the digital ticket
  openTicketModal(newReg);
}

function openTicketModal(ticket) {
  const modal = document.getElementById('ticket-modal');
  if (!modal) return;

  const titleEl = document.getElementById('ticket-pass-title');
  const nameEl = document.getElementById('ticket-student-name');
  const idEl = document.getElementById('ticket-student-id');
  const dateEl = document.getElementById('ticket-event-date');
  const venueEl = document.getElementById('ticket-event-venue');
  const branchEl = document.getElementById('ticket-student-branch');
  const ticketNumEl = document.getElementById('ticket-number-val');

  const evt = State.events.find(e => e.id === ticket.eventId);

  if (titleEl) titleEl.textContent = ticket.eventTitle;
  if (nameEl) nameEl.textContent = ticket.studentName;
  if (idEl) idEl.textContent = ticket.enrollmentId;
  if (dateEl) dateEl.textContent = evt ? `${formatDate(evt.date)} · ${evt.time || '10:00 AM'}` : 'Nov 20, 2026';
  if (venueEl) venueEl.textContent = evt ? evt.venue : 'SPSU Campus, Udaipur';
  if (branchEl) branchEl.textContent = ticket.branch || 'B.Tech CSE';
  if (ticketNumEl) ticketNumEl.textContent = ticket.ticketNumber;

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function openAttendeesModal(eventId) {
  const evt = State.events.find(e => e.id === eventId);
  if (!evt) return;

  const modal = document.getElementById('attendees-modal');
  if (!modal) return;

  const subtitle = document.getElementById('attendees-event-subtitle');
  const totalCount = document.getElementById('attendees-total-count');
  const tableBody = document.getElementById('attendees-table-body');

  const attendees = State.registrations.filter(r => r.eventId === eventId && r.status !== 'Cancelled');

  if (subtitle) subtitle.textContent = `Registered attendees for ${evt.title}`;
  if (totalCount) totalCount.textContent = attendees.length;

  if (tableBody) {
    if (attendees.length === 0) {
      tableBody.innerHTML = `
        <tr>
          <td colspan="7" style="text-align: center; padding: 2rem; color: var(--text-dim);">
            No students registered yet for this event. Registrations will appear in real time.
          </td>
        </tr>
      `;
    } else {
      tableBody.innerHTML = attendees.map(reg => `
        <tr>
          <td><span style="font-family: monospace; color: #c4b5fd; font-weight: 600;">${escapeHTML(reg.ticketNumber)}</span></td>
          <td><strong>${escapeHTML(reg.studentName)}</strong></td>
          <td>${escapeHTML(reg.enrollmentId)}</td>
          <td>${escapeHTML(reg.branch)}</td>
          <td>${escapeHTML(reg.phone)}</td>
          <td>${formatDate(reg.registeredAt)}</td>
          <td><span class="role-badge role-student">${escapeHTML(reg.status)}</span></td>
        </tr>
      `).join('');
    }
  }

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function openPermissionPrompt(title, desc) {
  const modal = document.getElementById('permission-modal');
  if (!modal) return;

  const titleEl = document.getElementById('perm-title');
  const descEl = document.getElementById('perm-desc');

  if (titleEl && title) titleEl.textContent = title;
  if (descEl && desc) descEl.textContent = desc;

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

// Add/Edit Event Modal
function openAddEventModal() {
  const role = State.currentUser?.role;
  if (role !== 'organizer' && role !== 'admin') {
    openPermissionPrompt(
      'Organizer Access Required to Post Events',
      'Event creation is restricted to registered SPSU clubs, department societies, and faculty organizers. Click below to switch to the Organizer demo account (Piyush):'
    );
    return;
  }

  State.currentEditingId = null;
  const modal = document.getElementById('form-modal');
  const title = document.getElementById('form-modal-title');
  const form = document.getElementById('event-form');
  clearFormErrors();

  if (form) form.reset();
  if (title) title.textContent = 'Add New SPSU Campus Event';

  const collegeInput = document.getElementById('form-event-college');
  if (collegeInput) {
    collegeInput.value = State.currentUser?.department || 'Sir Padampat Singhania University (SPSU), Udaipur';
  }

  const today = new Date().toISOString().split('T')[0];
  const dateInput = document.getElementById('form-event-date');
  const deadlineInput = document.getElementById('form-event-deadline');
  if (dateInput) dateInput.value = today;
  if (deadlineInput) deadlineInput.value = today;

  if (modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function openEditEventModal(eventId) {
  const role = State.currentUser?.role;
  if (role !== 'organizer' && role !== 'admin') {
    openPermissionPrompt('Organizer Access Required', 'Switch to Organizer or Admin account to edit events:');
    return;
  }

  const evt = State.events.find(e => e.id === eventId);
  if (!evt) return;

  State.currentEditingId = eventId;
  const modal = document.getElementById('form-modal');
  const title = document.getElementById('form-modal-title');
  clearFormErrors();

  if (title) title.textContent = 'Edit Event Details';

  document.getElementById('form-event-title').value = evt.title || '';
  document.getElementById('form-event-college').value = evt.college || '';
  document.getElementById('form-event-category').value = evt.category || 'Hackathons';
  document.getElementById('form-event-mode').value = evt.mode || 'In-Person';
  document.getElementById('form-event-date').value = evt.date || '';
  document.getElementById('form-event-time').value = evt.time || '';
  document.getElementById('form-event-venue').value = evt.venue || '';
  document.getElementById('form-event-deadline').value = evt.deadline || '';
  document.getElementById('form-event-eligibility').value = evt.eligibility || '';
  document.getElementById('form-event-fee').value = evt.fee || '';
  document.getElementById('form-event-prizes').value = evt.prizes || '';
  document.getElementById('form-event-reg-url').value = evt.registrationUrl || '';
  document.getElementById('form-event-desc').value = evt.description || '';

  if (modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function handleEventFormSubmit(e) {
  e.preventDefault();
  clearFormErrors();

  const title = document.getElementById('form-event-title').value.trim();
  const college = document.getElementById('form-event-college').value.trim();
  const category = document.getElementById('form-event-category').value;
  const mode = document.getElementById('form-event-mode').value;
  const date = document.getElementById('form-event-date').value;
  const time = document.getElementById('form-event-time').value.trim();
  const venue = document.getElementById('form-event-venue').value.trim();
  const deadline = document.getElementById('form-event-deadline').value;
  const eligibility = document.getElementById('form-event-eligibility').value.trim();
  const fee = document.getElementById('form-event-fee').value.trim();
  const prizes = document.getElementById('form-event-prizes').value.trim();
  const registrationUrl = document.getElementById('form-event-reg-url').value.trim();
  const description = document.getElementById('form-event-desc').value.trim();

  let hasErrors = false;

  if (!title || title.length < 3) {
    showFieldError('form-event-title', 'Event title must be at least 3 characters.');
    hasErrors = true;
  }
  if (!college) {
    showFieldError('form-event-college', 'Organizing college/club name is required.');
    hasErrors = true;
  }
  if (!date) {
    showFieldError('form-event-date', 'Event date is required.');
    hasErrors = true;
  }
  if (!venue) {
    showFieldError('form-event-venue', 'Venue or online link is required.');
    hasErrors = true;
  }
  if (!deadline) {
    showFieldError('form-event-deadline', 'Registration deadline is required.');
    hasErrors = true;
  }
  if (!registrationUrl || !registrationUrl.startsWith('http')) {
    showFieldError('form-event-reg-url', 'A valid URL starting with http:// or https:// is required.');
    hasErrors = true;
  }
  if (!description || description.length < 15) {
    showFieldError('form-event-desc', 'Description must be at least 15 characters.');
    hasErrors = true;
  }

  if (hasErrors) return;

  const themeMap = {
    Hackathons: 'code',
    Workshops: 'ai',
    Cultural: 'cultural',
    Robotics: 'robotics',
    Competitions: 'pitch',
    Seminars: 'cyber',
    Photography: 'camera',
    Sports: 'sports'
  };

  if (State.currentEditingId) {
    const idx = State.events.findIndex(e => e.id === State.currentEditingId);
    if (idx > -1) {
      State.events[idx] = {
        ...State.events[idx],
        title,
        college,
        category,
        mode,
        date,
        time: time || '10:00 AM IST',
        venue,
        deadline,
        eligibility: eligibility || 'Open to all students',
        fee: fee || 'Free',
        prizes: prizes || 'Certificates & Goodies',
        registrationUrl,
        description,
        theme: themeMap[category] || 'tech'
      };
      saveEventsToStorage();
      showToast('Event updated successfully!', 'success');
    }
  } else {
    const newId = `evt-${Date.now()}`;
    const newEvent = {
      id: newId,
      title,
      college,
      category,
      mode,
      date,
      time: time || '10:00 AM IST',
      venue,
      deadline,
      eligibility: eligibility || 'Open to all college students',
      fee: fee || 'Free',
      prizes: prizes || 'Certificates & Goodies',
      registrationUrl,
      description,
      theme: themeMap[category] || 'tech',
      featured: false
    };

    State.events.unshift(newEvent);
    saveEventsToStorage();
    showToast('New event created and published!', 'success');
  }

  closeModals();
  updateCategoryCounts();
  renderEvents();
  renderSavedEvents();
  renderDashboard();
}

function deleteEvent(eventId) {
  const evt = State.events.find(e => e.id === eventId);
  if (!evt) return;

  const confirmed = window.confirm(`Are you sure you want to delete "${evt.title}"?\nThis event will be removed from SPSU listings.`);
  if (!confirmed) return;

  State.events = State.events.filter(e => e.id !== eventId);
  State.bookmarks = State.bookmarks.filter(id => id !== eventId);
  saveEventsToStorage();
  saveBookmarksToStorage();

  showToast(`"${evt.title}" has been deleted.`, 'danger');
  updateBadgeCounts();
  updateCategoryCounts();
  renderEvents();
  renderSavedEvents();
  renderDashboard();
}

function restoreDefaultEvents() {
  const confirmed = window.confirm('Reset all demo events back to the initial 14 curated SPSU events? Any custom events created will be replaced.');
  if (!confirmed) return;

  State.events = [...DEFAULT_EVENTS];
  saveEventsToStorage();
  showToast('Default collegiate demo events restored!', 'info');
  updateCategoryCounts();
  renderEvents();
  renderSavedEvents();
  renderDashboard();
}

function showFieldError(fieldId, message) {
  const input = document.getElementById(fieldId);
  if (input) {
    input.classList.add('has-error');
    const errEl = input.parentElement.querySelector('.form-error');
    if (errEl) errEl.textContent = message;
  }
}

function clearFormErrors() {
  document.querySelectorAll('.form-control').forEach(el => el.classList.remove('has-error'));
  document.querySelectorAll('.form-error').forEach(el => el.textContent = '');
}

// =============================================================================
// 10. Search, Filter, and Sort Controls
// =============================================================================

function setupFilters() {
  const heroSearchInput = document.getElementById('hero-search-input');
  const heroCategorySelect = document.getElementById('hero-category-select');
  const heroModeSelect = document.getElementById('hero-mode-select');
  const heroSearchBtn = document.getElementById('hero-search-btn');

  if (heroSearchBtn) {
    heroSearchBtn.addEventListener('click', () => {
      if (heroSearchInput) State.filters.query = heroSearchInput.value;
      if (heroCategorySelect) State.filters.category = heroCategorySelect.value;
      if (heroModeSelect) State.filters.mode = heroModeSelect.value;

      syncExploreControls();
      renderEvents();

      const exploreSection = document.getElementById('explore');
      if (exploreSection) exploreSection.scrollIntoView({ behavior: 'smooth' });
    });
  }

  const exploreSearchInput = document.getElementById('explore-search-input');
  const exploreModeSelect = document.getElementById('explore-mode-select');
  const exploreSortSelect = document.getElementById('explore-sort-select');
  const resetFiltersBtn = document.getElementById('btn-reset-filters');

  if (exploreSearchInput) {
    exploreSearchInput.addEventListener('input', (e) => {
      State.filters.query = e.target.value;
      renderEvents();
    });
  }

  if (exploreModeSelect) {
    exploreModeSelect.addEventListener('change', (e) => {
      State.filters.mode = e.target.value;
      renderEvents();
    });
  }

  if (exploreSortSelect) {
    exploreSortSelect.addEventListener('change', (e) => {
      State.filters.sortBy = e.target.value;
      renderEvents();
    });
  }

  if (resetFiltersBtn) {
    resetFiltersBtn.addEventListener('click', resetFilters);
  }

  // Category Quick Segmented Chips
  document.querySelectorAll('.category-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      const cat = chip.dataset.category;
      document.querySelectorAll('.category-chip').forEach(c => c.classList.remove('active'));
      chip.classList.add('active');

      State.filters.category = cat;
      renderEvents();
    });
  });

  // Category Grid Cards
  document.querySelectorAll('.category-card').forEach(card => {
    card.addEventListener('click', () => {
      const cat = card.dataset.category;
      if (!cat) return;

      State.filters.category = cat;
      syncExploreControls();
      renderEvents();

      const exploreSection = document.getElementById('explore');
      if (exploreSection) exploreSection.scrollIntoView({ behavior: 'smooth' });
    });
  });
}

function syncExploreControls() {
  const exploreSearchInput = document.getElementById('explore-search-input');
  const exploreModeSelect = document.getElementById('explore-mode-select');

  if (exploreSearchInput) exploreSearchInput.value = State.filters.query;
  if (exploreModeSelect) exploreModeSelect.value = State.filters.mode;

  document.querySelectorAll('.category-chip').forEach(chip => {
    if (chip.dataset.category.toLowerCase() === State.filters.category.toLowerCase()) {
      chip.classList.add('active');
    } else {
      chip.classList.remove('active');
    }
  });
}

function resetFilters() {
  State.filters.query = '';
  State.filters.category = 'all';
  State.filters.mode = 'all';
  State.filters.sortBy = 'date-asc';

  const heroSearchInput = document.getElementById('hero-search-input');
  const heroCategorySelect = document.getElementById('hero-category-select');
  const heroModeSelect = document.getElementById('hero-mode-select');
  const exploreSortSelect = document.getElementById('explore-sort-select');

  if (heroSearchInput) heroSearchInput.value = '';
  if (heroCategorySelect) heroCategorySelect.value = 'all';
  if (heroModeSelect) heroModeSelect.value = 'all';
  if (exploreSortSelect) exploreSortSelect.value = 'date-asc';

  syncExploreControls();
  renderEvents();
  showToast('Filters have been reset.', 'info');
}

// =============================================================================
// 11. Toast Notifications
// =============================================================================

function showToast(message, type = 'info') {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.setAttribute('role', 'alert');

  let icon = `
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <circle cx="12" cy="12" r="10"/>
      <line x1="12" y1="8" x2="12" y2="12"/>
      <line x1="12" y1="16" x2="12.01" y2="16"/>
    </svg>
  `;

  if (type === 'success') {
    icon = `
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
        <polyline points="22 4 12 14.01 9 11.01"/>
      </svg>
    `;
  } else if (type === 'danger') {
    icon = `
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ef4444" stroke-width="2">
        <circle cx="12" cy="12" r="10"/>
        <line x1="15" y1="9" x2="9" y2="15"/>
        <line x1="9" y1="9" x2="15" y2="15"/>
      </svg>
    `;
  }

  toast.innerHTML = `
    ${icon}
    <span>${escapeHTML(message)}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    toast.style.transition = 'all 200ms ease';
    setTimeout(() => toast.remove(), 200);
  }, 3200);
}

// =============================================================================
// 12. Navigation & User Role Dropdown Handlers
// =============================================================================

function setupNavigation() {
  const mobileToggle = document.getElementById('mobile-toggle');
  const mobileNav = document.getElementById('mobile-nav');

  if (mobileToggle && mobileNav) {
    mobileToggle.addEventListener('click', () => {
      const isOpen = mobileNav.classList.toggle('open');
      mobileToggle.setAttribute('aria-expanded', isOpen);
    });

    mobileNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileNav.classList.remove('open');
        mobileToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // User Dropdown Trigger
  const userCapsule = document.getElementById('btn-user-capsule');
  const userDropdown = document.getElementById('user-dropdown-menu');

  if (userCapsule && userDropdown) {
    userCapsule.addEventListener('click', (e) => {
      e.stopPropagation();
      userDropdown.classList.toggle('active');
    });

    document.addEventListener('click', (e) => {
      if (!userDropdown.contains(e.target) && e.target !== userCapsule) {
        userDropdown.classList.remove('active');
      }
    });
  }

  // Quick 1-Click Role Switch buttons inside dropdown
  const switchStudent = document.getElementById('switch-btn-student');
  const switchOrg = document.getElementById('switch-btn-organizer');
  const switchAdm = document.getElementById('switch-btn-admin');

  if (switchStudent) {
    switchStudent.addEventListener('click', () => {
      switchUserRole('student');
      if (userDropdown) userDropdown.classList.remove('active');
    });
  }
  if (switchOrg) {
    switchOrg.addEventListener('click', () => {
      switchUserRole('organizer');
      if (userDropdown) userDropdown.classList.remove('active');
    });
  }
  if (switchAdm) {
    switchAdm.addEventListener('click', () => {
      switchUserRole('admin');
      if (userDropdown) userDropdown.classList.remove('active');
    });
  }

  // Open Full Auth Modal from dropdown, top bar, or mobile
  const openLoginBtn = document.getElementById('dropdown-link-login-modal');
  const logoutBtn = document.getElementById('btn-dropdown-logout');
  const mobileLoginBtn = document.getElementById('mobile-btn-switch-account');
  const topOpenLoginBtn = document.getElementById('btn-top-open-login');

  const openAuth = () => {
    if (userDropdown) userDropdown.classList.remove('active');
    if (mobileNav) mobileNav.classList.remove('open');
    const authModal = document.getElementById('auth-modal');
    if (authModal) {
      authModal.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  };

  if (openLoginBtn) openLoginBtn.addEventListener('click', (e) => { e.preventDefault(); openAuth(); });
  if (logoutBtn) logoutBtn.addEventListener('click', openAuth);
  if (mobileLoginBtn) mobileLoginBtn.addEventListener('click', openAuth);
  if (topOpenLoginBtn) topOpenLoginBtn.addEventListener('click', openAuth);

  // Top Persistent Bar Role Switchers
  document.querySelectorAll('.top-role-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const targetRole = btn.dataset.role;
      if (targetRole) switchUserRole(targetRole);
    });
  });

  // Hero Section 3-Role Demo Cards
  document.querySelectorAll('.hero-role-card').forEach(card => {
    card.addEventListener('click', () => {
      const targetRole = card.dataset.role;
      if (targetRole) switchUserRole(targetRole);
    });
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        const targetRole = card.dataset.role;
        if (targetRole) switchUserRole(targetRole);
      }
    });
  });

  // Setup Auth Modal Tabs & Actions
  setupAuthModal();

  // Role Permission Modal button actions
  const permSwitchOrg = document.getElementById('btn-perm-switch-organizer');
  const permSwitchAdmin = document.getElementById('btn-perm-switch-admin');

  if (permSwitchOrg) {
    permSwitchOrg.addEventListener('click', () => {
      closeModals();
      switchUserRole('organizer');
      openAddEventModal();
    });
  }
  if (permSwitchAdmin) {
    permSwitchAdmin.addEventListener('click', () => {
      closeModals();
      switchUserRole('admin');
      openAddEventModal();
    });
  }

  // Header scroll shadow and active section spy
  const header = document.querySelector('.site-header');
  const sections = ['home', 'explore', 'categories', 'saved', 'registrations-section', 'organizer', 'admin-section'];
  const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');

  window.addEventListener('scroll', () => {
    if (header) {
      if (window.scrollY > 20) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }

    let current = 'home';
    sections.forEach(secId => {
      const el = document.getElementById(secId);
      if (el && el.style.display !== 'none') {
        const top = el.offsetTop - 140;
        if (window.scrollY >= top) {
          current = secId;
        }
      }
    });

    navLinks.forEach(link => {
      const href = link.getAttribute('href');
      if (href === `#${current}`) {
        link.classList.add('active');
      } else if (href && href.startsWith('#')) {
        link.classList.remove('active');
      }
    });
  });

  // Post Event buttons
  const postBtn = document.getElementById('btn-header-post');
  const heroPostBtn = document.getElementById('btn-hero-post');
  const dashAddBtn = document.getElementById('btn-dash-add');
  const restoreBtn = document.getElementById('btn-dash-restore');

  if (postBtn) postBtn.addEventListener('click', openAddEventModal);
  if (heroPostBtn) heroPostBtn.addEventListener('click', openAddEventModal);
  if (dashAddBtn) dashAddBtn.addEventListener('click', openAddEventModal);
  if (restoreBtn) restoreBtn.addEventListener('click', restoreDefaultEvents);

  // Modal Close buttons
  document.querySelectorAll('.btn-close-modal, .btn-modal-cancel').forEach(btn => {
    btn.addEventListener('click', closeModals);
  });

  // Modal backdrop clicks
  document.querySelectorAll('.modal-backdrop').forEach(modal => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModals();
    });
  });

  // ESC key to close modal
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModals();
  });

  // Modal Bookmark button
  const modalBookmarkBtn = document.getElementById('modal-bookmark-btn');
  if (modalBookmarkBtn) {
    modalBookmarkBtn.addEventListener('click', () => {
      const id = modalBookmarkBtn.dataset.eventId;
      if (id) toggleBookmark(id);
    });
  }

  // Modal Share button
  const modalShareBtn = document.getElementById('modal-share-btn');
  if (modalShareBtn) {
    modalShareBtn.addEventListener('click', () => {
      const dummyUrl = window.location.href.split('#')[0] + '#explore';
      if (navigator.clipboard) {
        navigator.clipboard.writeText(dummyUrl).then(() => {
          showToast('Event link copied to clipboard!', 'success');
        }).catch(() => {
          showToast('Link copied: ' + dummyUrl, 'info');
        });
      } else {
        showToast('Link: ' + dummyUrl, 'info');
      }
    });
  }

  // Forms submissions
  const eventForm = document.getElementById('event-form');
  if (eventForm) eventForm.addEventListener('submit', handleEventFormSubmit);

  const studentRegForm = document.getElementById('student-reg-form');
  if (studentRegForm) studentRegForm.addEventListener('submit', handleRegistrationSubmit);

  // Ticket print button
  const printTicketBtn = document.getElementById('btn-print-ticket');
  if (printTicketBtn) {
    printTicketBtn.addEventListener('click', () => {
      window.print();
    });
  }

  // Attendees print button
  const printAttendeesBtn = document.getElementById('btn-print-attendees');
  if (printAttendeesBtn) {
    printAttendeesBtn.addEventListener('click', () => {
      window.print();
    });
  }

  // Admin export data button
  const adminExportBtn = document.getElementById('btn-admin-export-data');
  if (adminExportBtn) {
    adminExportBtn.addEventListener('click', () => {
      const payload = {
        university: 'Sir Padampat Singhania University (SPSU), Udaipur',
        exportedAt: new Date().toISOString(),
        totalEvents: State.events.length,
        events: State.events,
        totalRegistrations: State.registrations.length,
        registrations: State.registrations
      };
      const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `spsu-eventhive-audit-${Date.now()}.json`;
      a.click();
      URL.revokeObjectURL(url);
      showToast('SPSU Event Platform audit data downloaded.', 'success');
    });
  }

}

// =============================================================================
// 13. Authentication Modal (ID & Password Sign In for Student, Organizer, Admin)
// =============================================================================

function setupAuthModal() {
  const tabPassword = document.getElementById('tab-btn-password-login');
  const tabSignup = document.getElementById('tab-btn-signup');

  const contentPassword = document.getElementById('auth-tab-password-login');
  const contentSignup = document.getElementById('auth-tab-signup');

  function switchAuthTab(activeBtn, activeContent) {
    [tabPassword, tabSignup].forEach(btn => btn?.classList.remove('active'));
    [contentPassword, contentSignup].forEach(cnt => {
      if (cnt) cnt.style.display = 'none';
    });
    activeBtn?.classList.add('active');
    if (activeContent) activeContent.style.display = 'block';
  }

  if (tabPassword && contentPassword) {
    tabPassword.addEventListener('click', () => switchAuthTab(tabPassword, contentPassword));
  }
  if (tabSignup && contentSignup) {
    tabSignup.addEventListener('click', () => switchAuthTab(tabSignup, contentSignup));
  }

  // Password reveal toggle
  const togglePassBtn = document.getElementById('btn-toggle-login-pass');
  const passInput = document.getElementById('login-password');
  const emailInput = document.getElementById('login-email');

  if (togglePassBtn && passInput) {
    togglePassBtn.addEventListener('click', () => {
      if (passInput.type === 'password') {
        passInput.type = 'text';
        togglePassBtn.textContent = 'Hide Password';
      } else {
        passInput.type = 'password';
        togglePassBtn.textContent = 'Show Password';
      }
    });
  }

  // Helper to populate credentials into the ID & password fields
  function autofillCredentials(idOrEmail, pass, roleLabel) {
    if (emailInput) {
      emailInput.value = idOrEmail;
      emailInput.focus();
    }
    if (passInput) {
      passInput.value = pass;
    }
    showToast(`Loaded ${roleLabel} credentials (ID: ${idOrEmail}). Click Sign In to proceed.`, 'info');
  }

  // Autofill chips for 3 roles
  document.getElementById('chip-fill-student')?.addEventListener('click', () => {
    autofillCredentials('student@spsu.ac.in', 'student123', 'Student');
  });
  document.getElementById('chip-fill-organizer')?.addEventListener('click', () => {
    autofillCredentials('organizer@spsu.ac.in', 'organizer123', 'Event Organizer');
  });
  document.getElementById('chip-fill-admin')?.addEventListener('click', () => {
    autofillCredentials('admin@spsu.ac.in', 'admin123', 'University Admin');
  });

  // ID & Password Login Form Submission
  const loginForm = document.getElementById('password-login-form');
  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = (emailInput?.value || '').trim().toLowerCase();
      const password = (passInput?.value || '').trim();

      const emailErr = document.getElementById('login-email-error');
      const passErr = document.getElementById('login-password-error');
      if (emailErr) emailErr.textContent = '';
      if (passErr) passErr.textContent = '';

      if (!input) {
        if (emailErr) emailErr.textContent = 'Please enter your University ID or Email.';
        emailInput?.focus();
        return;
      }
      if (!password) {
        if (passErr) passErr.textContent = 'Please enter your account password.';
        passInput?.focus();
        return;
      }

      // Check matching user by email OR enrollment ID and password
      const user = State.users.find(u => 
        (u.email.toLowerCase() === input || (u.enrollmentId && u.enrollmentId.toLowerCase() === input)) &&
        u.password === password
      );

      if (user) {
        State.currentUser = user;
        saveCurrentUserToStorage();
        applyRolePermissions();
        renderEvents();
        renderSavedEvents();
        renderRegistrations();
        renderDashboard();
        closeModals();
        showToast(`Signed in successfully! Welcome, ${user.name} (${user.role.toUpperCase()}).`, 'success');
      } else {
        if (passErr) passErr.textContent = 'Invalid ID/Email or password. Click a demo chip above to auto-fill.';
        showToast('Invalid credentials. Use student123, organizer123, or admin123.', 'danger');
      }
    });
  }

  // Signup Form
  const signupForm = document.getElementById('signup-form');
  if (signupForm) {
    signupForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('signup-name')?.value.trim();
      const email = document.getElementById('signup-email')?.value.trim();
      const role = document.getElementById('signup-role')?.value || 'student';
      const dept = document.getElementById('signup-dept')?.value.trim();
      const password = document.getElementById('signup-password')?.value.trim();

      if (!name || !email || !password) {
        showToast('Please provide your name, university email, and password.', 'danger');
        return;
      }

      const initials = name.split(' ').map(p => p[0]).join('').slice(0, 2).toUpperCase() || 'US';
      const newUser = {
        id: `usr-${Date.now()}`,
        name,
        email,
        password,
        role,
        department: dept || 'SPSU Udaipur',
        enrollmentId: `SPSU/${new Date().getFullYear()}/CSE/${Math.floor(100 + Math.random() * 900)}`,
        avatarText: initials
      };

      State.users.push(newUser);
      localStorage.setItem(STORAGE_KEYS.USERS, JSON.stringify(State.users));

      State.currentUser = newUser;
      saveCurrentUserToStorage();
      applyRolePermissions();
      renderEvents();
      renderSavedEvents();
      renderRegistrations();
      renderDashboard();
      closeModals();
      showToast(`Account created! Welcome to EventHive SPSU, ${name}.`, 'success');
    });
  }
}

// Utility: HTML Escaping for Safe Rendering
function escapeHTML(str) {
  if (str === null || str === undefined) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

// =============================================================================
// 14. Application Bootstrap
// =============================================================================

document.addEventListener('DOMContentLoaded', () => {
  initState();
  setupNavigation();
  setupFilters();
  applyRolePermissions();
  updateCategoryCounts();
  updateBadgeCounts();
  renderEvents();
  renderSavedEvents();
  renderRegistrations();
  renderDashboard();
});
