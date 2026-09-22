// ─── Identity cycling text ────────────────────────────────────
import {image_url} from '../sections/Gallery.jsx'

export const identityPhrases = [
  'SOLUTIONIST',
  'ROBOTICIST',
  'BUILDER',
  'CO-FOUNDER',
  'SON OF GOD',
  'KEYBOARDIST',
  'PENSA BOY...',
  'ODADE3 !'
]

// ─── Projects ─────
export const projects = [
  {
    id: 'green-route',
    image: image_url('green_route_logo.png'),
    title: 'Green Route',
    tagline: 'Rethinking how trotro moves.',
    description:
      'A Ghanaian trotro transportation platform that connects passengers with drivers in real time. Drivers register their vehicles, available seats, and destinations. Passengers find the right trotro — no guessing, no waiting in the wrong spot.',
    tags: ['Flask', 'Python', 'SQLite', 'Leaflet', 'TailwindCSS', 'JavaScript'],
    badge: '🏆 Global Young Innovators STEAM Fest — Winner',
    year: '2025',
    status: 'Competition Winner',
    teamSize: 9,
    details: {
      problem:
        'Trotro transport in Accra is chaotic. No schedules, no tracking, no way to know which car goes where until you\'re already standing at the roadside.',
      approach:
        'Built a web platform where drivers register their routes and live seat availability, and passengers can search by destination to find the right vehicle before they leave home.',
      outcome:
        'Won the Global Young Innovators STEAM Fest — a live, working platform that genuinely addresses a real problem millions of Ghanaians deal with daily.',
    },
  },
  {
    id: 'v-wave',
    image: image_url('v_wave_icon.jpg'),
    title: 'V-Wave',
    tagline: 'Voting that actually works.',
    description:
      'Virtual Wireless Advanced Voting Environment — a touchscreen electronic voting system with RFID voter verification, built to eliminate the mess of paper ballots in institutional settings.',
    tags: ['KivyMD', 'Python', 'SQLite', 'RFID', 'Touchscreen UI'],
    badge: 'Coolest Projects Ghana — Finalist',
    year: '2024',
    status: 'Exhibited',
    teamSize: 2,
    details: {
      problem:
        'Paper voting in schools and institutions is slow, error-prone, and easy to manipulate. There needed to be a better way.',
      approach:
        'Designed and coordinated a full touchscreen voting kiosk with RFID card verification, a clean KivyMD UI, and an SQLite backend that records and tallies votes securely.',
      outcome:
        'Exhibited at Coolest Projects Ghana, organized by Ghana Code Club. Led the team as coordinator and UI designer.',
    },
  },
  {
    id: 'xplora-bot',
    image: image_url('xplora_bois.png'),
    title: 'Xplora Bot',
    tagline: 'Built for places humans shouldn\'t go.',
    description:
      'A six-wheel rocker-bogie rover designed for environmental monitoring in mining-affected areas. Inspired by NASA Mars rovers — sensors for pH, soil moisture, gas, mercury, and more, feeding into a live dashboard.',
    tags: ['ESP32', 'Arduino Mega', 'GPS', 'DHT22', 'MQ Sensors', 'Python'],
    badge: 'Acity Tech Expo 2026',
    year: '2026',
    status: 'Exhibited',
    teamSize: 20,
    details: {
      problem:
        'Galamsey (illegal mining) in Ghana destroys land and water. Monitoring environmental damage in those zones is dangerous for humans and expensive with professional equipment.',
      approach:
        'Built a six-wheel rocker-bogie chassis (same suspension concept as the Mars rovers) fitted with environmental sensors and a wireless dashboard for real-time data visualization.',
      outcome:
        'Exhibited at the Acity Tech Expo 2026. The project demonstrated that student-built robotics can address serious environmental challenges.',
    },
  },
  {
    id: 'health-port',
    image: image_url('healthport.png'),
    title: 'Health Port',
    tagline: 'A clinic in a kiosk.',
    description:
      'A healthcare kiosk concept featuring vital sign sensors, an AI diagnostic model, touchscreen interaction, voice guidance, and a smart dispensing section — designed for underserved communities.',
    tags: ['AI', 'IoT', 'Touchscreen', 'Voice', 'Healthcare'],
    badge: 'High Schools Renewable Energy Challenge - Winner',
    year: '2025',
    status: 'Competition Winner',
    teamSize: 18,
    details: {
      problem:
        'Access to basic healthcare in many Ghanaian communities is limited by distance, cost, and doctor availability. People skip checkups because it\'s too much effort.',
      approach:
        'Conceptualizing a standalone kiosk that can take vitals, give AI-assisted initial assessments, and dispense basic medication — bringing healthcare closer to the people who need it.',
      outcome:
        'Currently in early development. The concept is designed to be deployable in clinics, schools, and community centers.',
    },
  },
]

// ─── Experience ───────────────────────────────────────────────
export const experience = [
  {
    role: 'Immediate Past President',
    org: 'PRESEC Robotics & Programming Club',
    period: '2025 – 2026',
    description:
      'Led the club through competitions, workshops, and project seasons. Handed over a stronger club than the one I received.',
  },
  {
    role: 'Team Member',
    org: 'PRESEC STEM Team',
    period: '2024 – 2026',
    description:
      'Built and coordinated projects, attended competitions, won awards together with the teams. Built the a tracker (KeyRadarX) that earned my spot on the team.',
  },
  {
    role: 'Project Lead',
    org: 'Virtual Wireless Advanced Voting Environment (V-WAVE)',
    period: '2025',
    description:
      'Built an e-voting machine for school elections, finalist at Coolest Projects Ghana.',
  },
  {
    role: 'Project Lead',
    org: 'Green Route — STEAM Fest',
    period: '2026',
    description:
      'Researched, built, and presented the Green Route transportation platform. Won the Global Young Innovators STEAM Fest.',
  },
  {
    role: 'Keyboardist',
    org: 'COP New Weija District, COP Kade Kubease District...',
    period: '2022 – 2026',
    description:
      'Active keyboardist and choir member at church and in school.',
  },
]

// ─── Achievements ────────────────────────────────────────────
export const achievements = [
  {
    title: 'Global Young Innovators STEAM Fest',
    result: 'Winner',
    org: 'Expanding Boundaries',
    year: '2026',
    project: 'Green Route',
  },
  {
    title: 'AIRTAD 2026',
    result: 'First Runner-Up',
    org: 'IMPLEMENTERS . Helping Africa Foundation',
    year: '2026',
    project: 'Xplora Bot',
  },
  {
    title: 'Palm University Hackathon',
    result: 'Certificate of Participation',
    org: 'Palm University',
    year: '2026',
    project: '',
  },
  {
    title: 'Coolest Projects Ghana',
    result: 'Finalist',
    org: 'Ghana Code Club',
    year: '2024',
    project: 'V-Wave',
  },
  {
    title: 'Acity Tech Expo',
    result: 'Finalist / Exhibited',
    org: 'Academic City',
    year: '2026',
    project: 'Xplora Bot',
  },
  {
    title: 'Primetime SciTech Festival',
    result: 'Finalist',
    org: 'Primetime',
    year: '2025',
    project: 'Chef On-deck Operational Kitchen (COOK)',
  },
]

// ─── Posts ───────────────────────────────────────────────────
export const posts = [
  {
    id: 1,
    title: 'What robotics actually taught me',
    tag: 'build-log',
    date: 'May 2026',
    image: image_url('random.png'),
    excerpt:
      'The first time I joined the robotics club at high school, I thought I was going to learn how to build robots. That\'s not quite what happened.',
    content:
      'The first time I joined the robotics club in Form 1, I thought I was going to learn how to build robots.\n\nThat\'s not quite what happened.\n\nI did learn to build robots. But more than that, I learned how to break something completely, not panic, and figure out why it broke. I learned that the difference between a working prototype and a broken one is usually one bad connection or one wrong variable — and that patience finds it every time.\n\nI learned how to work with people who think differently from me. How to coordinate a team when everyone has an opinion and a deadline is pressing. How to present a thing you built to people who didn\'t build it and make them care about it anyway.\n\nThe robots were the excuse. The real curriculum was everything else.',
  },
]
// ─── Mike system prompt ───────────────────────────────────────
export const mikeSystemPrompt = `You are the AI presence behind Michael Ayisi's portfolio website. You speak in first person as if you ARE Michael — not as a third-party assistant. You are detailed, funny, professional, slightly proud, and genuinely smart. You adapt your tone to match the visitor's energy — if they're casual, you're casual; if they're formal, you match it. You use their name naturally in conversation.

ABOUT MICHAEL (everything you know):

Full name: Ayisi Michael Kwabena. Goes by Mike (and A.M. in professional contexts). From Kade, Ghana. Just graduated from PRESEC Legon (Presbyterian Boys' Senior High School), Class of 2026. Pursuing BSc Robotics Engineering and Artificial Intelligence at the University of Mines & Technology (UMaT), Ghana.

PERSONALITY: Curious, driven, confused, serious sarcastic, very wise,. Takes problems seriously but doesn't take himself too seriously. Proud of his work without being arrogant about it. Ghanaian to the core — that identity matters to him.

TECH BACKGROUND:
- Languages/Tools: Python, Arduino C++, HTML, CSS, JavaScript, Flask, SQLite, KivyMD, TailwindCSS, Leaflet, REACT
- Hardware: Arduino, ESP32, GPS modules, RFID, fingerprint sensors, various IoT sensors
- Built: fingerprint attendance system(the only project he built alone.. all the remaining he built with others), e-voting machine (V-Wave), GPS tracker, Green Route, Xplora Bot, Health Port (All with a team, except the fingerprint attendance system)
- Currently learning: React, advanced web development, AI/ML integration, networking

PROJECTS:
1. Green Route — Ghanaian trotro transportation platform. Flask + Python + SQLite + Leaflet. Won Global Young Innovators STEAM Fest. Inspired by the chaos of Accra transport.
2. V-Wave (Virtual Wireless Advanced Voting Environment) — touchscreen e-voting with RFID verification. KivyMD + SQLite. Exhibited at Coolest Projects Ghana. He was team lead and full software designer.
3. Xplora Bot — six-wheel rocker-bogie rover for environmental monitoring in mining zones. ESP32 + Arduino Mega + multiple sensors + GPS. Exhibited at Acity Tech Expo 2026. He worked on the electronics and arduino programming.
4. Health Port — healthcare kiosk with vitals, AI model, touchscreen, voice interaction, dispensing. Built by the whole PRESEC STEAM team.. He contributed on the electronics and structural build.
5. GPS Tracker — built this for the PRESEC STEM Challenge, which is what got him onto the STEM Team. Built together with a friend called Andrews.. Made an app with MIT App Inventor to communicate with the tracker...
6. Fingerprint Attendance System — Built this alone intended to use it for club attendance recording...

LEADERSHIP & EXPERIENCE:
- Immediate Past President, PRESEC Robotics & Programming Club (joined in Form 1)
- TEAM MEMBER & Organising Secretary, PRESEC STEM Team
- Has participated in: Global Young Innovators STEAM Fest (winner), Led a team to participate in AIRTAD 2026 (1st runner-up), Coolest Projects Ghana, Acity Tech Expo, Palm University Hackathon, Primetime SciTech Festival..

MUSIC:
- Keyboardist (Key of F, working on advancing)
- Vocalist
- Member of The Mighty Choir, English Assembly, Church of Pentecost, New Weija District
- Part of school Praise & Worship team and house choir at PRESEC

BRAND: AM Industries — his personal/professional brand. Focused on solving real problems with technology. The portfolio site is its first major public face.

CONVERSATION RULES:
1. First message to a new visitor: greet warmly, briefly explain what you are (the person behind the work, their guide through the portfolio), and ask their name naturally.
2. Once you have their name, use it occasionally — not every message, just naturally.
3. Story Mode: if they ask for the story, start from Form 1 joining the robotics club and let it unfold naturally. Pause at interesting points. Let them ask questions.
4. Be specific. Don't give vague answers — give real details about real projects.
5. If asked something you don't know, say so honestly and pivot to something related you DO know.
6. Never sound like a chatbot. Sound like a person who is proud of what they've built and genuinely enjoys talking about it.
7. Keep responses concise unless the visitor asks for depth. Don't dump everything at once.
8. Occasionally be funny. Not forced — just natural.`
