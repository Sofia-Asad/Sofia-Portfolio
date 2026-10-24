import { Project, ExperienceItem, CertificationItem, SkillCategory, RemoteService } from '../types';

export const personalInfo = {
  name: 'Safia Asad Abdulkadir',
  preferredShortName: 'Safia',
  headline: 'Junior Software Developer | Remote Administrative & Data Support',
  subHeadline: 'Computer Science Graduate Candidate | East Africa University (GPA 3.9/4.0)',
  email: 'sofiadata.dev@gmail.com',
  phone: '+252 906 079 110', // From official CV
  location: 'Galkacyo, Puntland, Somalia',
  timezone: 'East Africa Time (EAT) / UTC+3',
  githubUrl: 'https://github.com/Sofia-Asad',
  linkedinUrl: 'https://www.linkedin.com/in/safia-asad', // Configurable placeholder
  whatsappUrl: 'https://wa.me/252906079110', // Configurable WhatsApp link based on verified phone
  cvDownloadUrl: 'documents/Safia_Asad_Abdulkadir_CV.pdf',
  profileImages: {
    hero: 'images/safia-profile-defense.jpg',
    about: 'images/safia-profile-desk.jpg',
  },
  bioIntro: `Hello, I'm Safia Asad Abdulkadir, a Computer Science graduate candidate from East Africa University with a 3.9/4.0 GPA. I am passionate about building practical software applications, maintaining accurate data systems, and delivering dependable remote digital support.`,
  bioExtended: `With a strong academic foundation in software development and practical hands-on experience in database handling, web development, and digital systems, I bring meticulous attention to detail to both coding and administrative projects. My background spans ongoing software internships with CodeAlpha, advanced Full Stack React mentorship at Dugsiiye, and successful data entry internship experience at Amtel LTD. I communicate fluently in Somali, English, and Arabic, and I am eager to contribute effectively to international remote teams, NGOs, technology startups, and digital banking operations.`,
  availability: 'Open for Remote Roles, Paid Internships, and Global Opportunities',
};

export const educationData = [
  {
    institution: 'East Africa University, Galkacyo Campus',
    degree: 'Bachelor of Computer Science',
    period: '2022 – Expected November 2026',
    completionNote: 'Academic coursework completed June 2026 | Official Transcript Certification Ref: EAU/GLK/3422',
    gpa: '3.90 / 4.00 (General Cumulative Average)',
    honors: [
      'Top Student Recognition — Semester 1 (GPA 3.93)',
      'Top Student Recognition — Semester 4 (GPA 3.91)',
      'Top Student Recognition — Semester 6 (GPA 3.98)',
    ],
    verifiedDocuments: [
      {
        title: 'Temporary Transcript Certification (Ref: EAU/GLK/3422)',
        url: 'documents/eau-transcript-certification.pdf',
        type: 'pdf',
      },
      {
        title: 'Official Partial Academic Transcript (Semesters I–VIII)',
        url: 'documents/eau-partial-transcript.pdf',
        type: 'pdf',
      },
    ],
  },
  {
    institution: 'Golis University, Hargeisa',
    degree: 'Diploma in Software Engineering',
    period: 'Completed',
    completionNote: 'Foundational studies in programming fundamentals, software architecture, and engineering principles.',
    gpa: null,
    honors: [],
  },
];

export const certificationsData: CertificationItem[] = [
  {
    id: 'eau-ai-certificate',
    title: 'AI-Powered Software Development Program',
    recipientName: 'Safia Asad Abdulkadir',
    issuer: 'East Africa University, Galkacyo Campus',
    issueDate: 'December 22, 2025',
    credentialNote: 'Official Certificate of Completion awarded for program completion & capstone systems development.',
    description: 'Advanced intensive program covering modern software engineering and AI-assisted application architecture.',
    projectsIncluded: [
      'Hotel Room Booking System',
      'Real Estate Management System',
    ],
    documentUrl: 'documents/eau-ai-certificate.jpg',
    documentType: 'image',
  },
  {
    id: 'cisco-cybersecurity',
    title: 'Introduction to Cybersecurity',
    recipientName: 'Sofia Asad Abdulkadir', // Preserved exact certificate spelling as requested
    issuer: 'Cisco Networking Academy',
    issueDate: 'December 21, 2025',
    credentialNote: 'Verified credential authorized by Director Lynn Bloomer, Cisco Networking Academy.',
    description: 'Comprehensive training in foundational network security, threat mitigation principles, data confidentiality, and defense architectures.',
    documentUrl: 'documents/cisco-cybersecurity-certificate.jpg',
    documentType: 'image',
  },
  {
    id: 'amtel-internship-letter',
    title: 'Internship Completion & Professional Recommendation',
    recipientName: 'Safia Asad Abdulkadir',
    issuer: 'Amtel LTD',
    issueDate: 'June 2025',
    credentialNote: 'Official recommendation signed by Abdiaziz Said, Supervisor, Amtel LTD Commercial Department.',
    description: 'Certifies active participation in assigned data entry and operational tasks with commendable work ethics, punctuality, teamwork, and reliability.',
    documentUrl: 'documents/amtel-internship-completion-letter.jpg',
    documentType: 'image',
  },
];

export const experienceData: ExperienceItem[] = [
  {
    id: 'codealpha',
    role: 'Software Development Intern',
    organization: 'CodeAlpha',
    location: 'Remote',
    period: 'October 2026 – Present',
    status: 'Ongoing',
    type: 'internship',
    description: 'Actively participating in a software engineering internship program focused on practical full-stack development, version control workflows, and building real-world application features.',
    highlights: [
      'Collaborating on practical software development assignments and technical tasks',
      'Implementing frontend interfaces and responsive user experiences',
      'Utilizing Git and GitHub for collaborative branching and project tracking',
      'Strengthening problem-solving skills across frontend and backend modules',
    ],
    tools: ['JavaScript', 'React', 'HTML5', 'CSS3', 'Git', 'GitHub'],
  },
  {
    id: 'dugsiiye',
    role: 'Full Stack AI Engineer Mentorship (Level 3 - React)',
    organization: 'Dugsiiye',
    location: 'Online / Mentorship',
    period: 'Currently Ongoing',
    status: 'Ongoing',
    type: 'mentorship',
    description: 'Engaging in rigorous, structured mentorship specializing in modern Full Stack Web and AI Engineering architectures.',
    highlights: [
      'Deepening practical knowledge of React component lifecycles, state management, and modern hooks',
      'Integrating API endpoints and handling asynchronous data streams',
      'Applying modern best practices in UI architecture and clean modular coding',
    ],
    tools: ['React', 'JavaScript (ES6+)', 'REST APIs', 'Component Design', 'Tailwind CSS'],
  },
  {
    id: 'amtel',
    role: 'Data Entry Intern',
    organization: 'Amtel LTD',
    location: 'Galkacyo, Mudug Region, Somalia',
    period: 'June 2025 (One-month intensive)',
    status: 'Completed',
    type: 'internship',
    description: 'Completed a focused on-site internship handling administrative data tasks, record organization, and operational support within the commercial department.',
    highlights: [
      'Entered, organized, and validated operational data into spreadsheets and digital record systems',
      'Verified data consistency and minimized entry discrepancies across records',
      'Maintained high punctuality, dedicated work ethics, and reliable teamwork',
      'Received official written commendation from supervisor Abdiaziz Said for dedication and cooperation',
    ],
    tools: ['Microsoft Excel', 'Data Entry Systems', 'Document Verification', 'Spreadsheets'],
    verificationDocument: {
      title: 'Amtel LTD Completion Letter',
      type: 'image',
      url: 'documents/amtel-internship-completion-letter.jpg',
    },
  },
];

export const projectsData: Project[] = [
  {
    id: 'fududeeye-service',
    title: 'Fududeeye Service — Marketplace & CRM System',
    category: 'thesis',
    categoryLabel: 'Undergraduate Thesis Project',
    description: 'A comprehensive web-based marketplace and customer relationship management application developed as the capstone graduation thesis at East Africa University.',
    longDescription: 'Fududeeye Service was conceived to streamline property rentals, real estate sales, verified land listings, and second-hand goods marketplace transactions. Built with modern web architecture to provide intuitive listing management, structured search, and user-friendly digital operations.',
    technologies: ['React', 'JavaScript', 'HTML5', 'CSS3', 'Database Design', 'Git & GitHub'],
    githubUrl: 'https://github.com/Sofia-Asad/fududeeye-service',
    status: 'Repository Available',
    statusNote: 'Live demo coming soon / in development',
    featured: true,
  },
  {
    id: 'hotel-booking-system',
    title: 'Hotel Room Booking System',
    category: 'academic',
    categoryLabel: 'Academic Capstone Project',
    description: 'Developed as part of the AI-Powered Software Development Program at East Africa University, Galkacyo Campus.',
    longDescription: 'A functional system designed to manage room inventory, track guest reservations, handle booking schedules, and prevent double-booking discrepancies through structured data management.',
    technologies: ['Python', 'SQL Database', 'System Logic', 'Data Verification'],
    status: 'Completed',
    statusNote: 'Academic verification documented on EAU Program Certificate',
    featured: true,
  },
  {
    id: 'real-estate-management',
    title: 'Real Estate Management System',
    category: 'academic',
    categoryLabel: 'Academic Capstone Project',
    description: 'Built as part of the AI-Powered Software Development Program at East Africa University, Galkacyo Campus.',
    longDescription: 'A structured software solution developed to handle property inventories, client listings, and lease tracking with relational database structures.',
    technologies: ['Web Technologies', 'Relational Database', 'SQL', 'Data Management'],
    status: 'Completed',
    statusNote: 'Academic verification documented on EAU Program Certificate',
    featured: true,
  },
  {
    id: 'portfolio-website',
    title: 'Personal Portfolio & Credentials Showcase',
    category: 'portfolio',
    categoryLabel: 'Personal & Production Project',
    description: 'A modern, production-grade, accessible personal portfolio website built with React, TypeScript, and Tailwind CSS.',
    longDescription: 'Designed from the ground up for high readability, WCAG 2.2 AA accessibility, responsive presentation, and verifiable credential display for international employers and NGOs.',
    technologies: ['React 18', 'TypeScript', 'Tailwind CSS', 'Vite', 'Lucide Icons'],
    githubUrl: 'https://github.com/Sofia-Asad', // Points to Safia's GitHub profile where repo is hosted
    status: 'Completed',
    statusNote: 'Production Ready & Fully Tested',
    featured: true,
  },
];

export const skillCategories: SkillCategory[] = [
  {
    id: 'frontend',
    title: 'Frontend Development',
    description: 'Building responsive, accessible, and user-friendly web interfaces.',
    skills: [
      { name: 'HTML5', verifiedContext: 'Core web semantics & accessibility' },
      { name: 'CSS3', verifiedContext: 'Flexbox, Grid, custom styling' },
      { name: 'JavaScript (ES6+)', verifiedContext: 'Modern syntax, DOM manipulation' },
      { name: 'React', verifiedContext: 'Components, hooks, state management' },
      { name: 'Tailwind CSS', verifiedContext: 'Utility-first modern design systems' },
      { name: 'Responsive Web Design', verifiedContext: 'Mobile-first fluid layouts' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend & Programming',
    description: 'Practical object-oriented programming, data structures, and server fundamentals.',
    skills: [
      { name: 'Python', verifiedContext: 'Scripting, logic, data processing' },
      { name: 'Core Java', verifiedContext: 'Object-oriented programming (EAU coursework)' },
      { name: 'SQL', verifiedContext: 'Relational querying & table management' },
      { name: 'PostgreSQL', verifiedContext: 'Relational data modeling' },
      { name: 'REST API Concepts', verifiedContext: 'Endpoint consumption & data fetching' },
    ],
  },
  {
    id: 'databases-tools',
    title: 'Databases & Version Control',
    description: 'Database management systems and collaborative version control workflows.',
    skills: [
      { name: 'Git', verifiedContext: 'Branching, committing, and version tracking' },
      { name: 'GitHub', verifiedContext: 'Remote repositories & open collaboration' },
      { name: 'Database Management Systems', verifiedContext: 'Schema design & normalization' },
      { name: 'Troubleshooting Fundamentals', verifiedContext: 'System diagnostics & digital support' },
    ],
  },
  {
    id: 'spreadsheets-data',
    title: 'Data Entry & Spreadsheet Management',
    description: 'Precise data entry, spreadsheet organization, formula application, and data hygiene.',
    skills: [
      { name: 'Microsoft Excel', verifiedContext: 'Workbook organization & sheet architecture' },
      { name: 'Excel Formulas', verifiedContext: 'Arithmetic, lookup, and logical formulas' },
      { name: 'Spreadsheet Organization', verifiedContext: 'Structured tables, consistent headers' },
      { name: 'Sorting & Filtering Data', verifiedContext: 'Fast analysis & segmented viewing' },
      { name: 'Accurate Data Entry', verifiedContext: 'High-speed, error-free transcription' },
      { name: 'Data Cleaning', verifiedContext: 'Deduplication, formatting consistency' },
    ],
  },
  {
    id: 'admin-documentation',
    title: 'Document Formatting & Admin Support',
    description: 'Professional document preparation, conversions, and organized digital filing.',
    skills: [
      { name: 'Microsoft Word Document Formatting', verifiedContext: 'Styles, headings, layout alignment' },
      { name: 'PDF Conversion & Archiving', verifiedContext: 'Multi-format export & preservation' },
      { name: 'Document Organization', verifiedContext: 'Folder hierarchies & naming standards' },
      { name: 'Web Research & Information Gathering', verifiedContext: 'Structured data collection' },
      { name: 'Digital Information Archiving', verifiedContext: 'Systematic digital recordkeeping' },
    ],
  },
  {
    id: 'professional-strengths',
    title: 'Professional & Interpersonal Strengths',
    description: 'Core workplace attributes verified by academic marks and internship supervisor evaluation.',
    skills: [
      { name: 'Punctuality & Reliability', verifiedContext: 'Documented in Amtel LTD recommendation' },
      { name: 'Teamwork & Cooperation', verifiedContext: 'Proven in group projects & internships' },
      { name: 'Strong Work Ethic & Dedication', verifiedContext: 'Consistent top academic performance' },
      { name: 'Clear Communication', verifiedContext: 'Trilingual fluency (Somali, English, Arabic)' },
      { name: 'Fast Learner & Adaptability', verifiedContext: 'Continuous upskilling via mentorships' },
    ],
  },
];

export const remoteServices: RemoteService[] = [
  {
    id: 'data-entry',
    title: 'Accurate Data Entry & Record Processing',
    category: 'data',
    description: 'High-accuracy transcription of records, customer lists, inventory, and transaction files into structured digital databases or spreadsheets.',
    deliverables: [
      'Error-free data transcription from PDF/scans into digital sheets',
      'Consistent data formatting and standardization',
      'Strict quality validation to eliminate duplicates or typos',
      'Confidential and secure handling of sensitive organizational data',
    ],
    toolsUsed: ['Microsoft Excel', 'Google Sheets', 'Custom Web Portals', 'Data Entry Tools'],
  },
  {
    id: 'spreadsheet-management',
    title: 'Spreadsheet Organization & Formulas',
    category: 'data',
    description: 'Building clean, readable, and well-structured workbooks with essential formulas, data validation, and easy sorting/filtering.',
    deliverables: [
      'Logical worksheet organization with clear headers and cell formatting',
      'Implementation of formulas (SUM, AVERAGE, VLOOKUP, COUNTIF, etc.)',
      'Automated sorting, filtering, and data validation rules',
      'Data preparation ready for management reporting or analysis',
    ],
    toolsUsed: ['Microsoft Excel', 'Google Sheets'],
  },
  {
    id: 'data-cleaning',
    title: 'Data Cleaning & Deduplication',
    category: 'data',
    description: 'Auditing messy datasets to correct inconsistencies, standardize date/phone formats, and remove duplicate entries.',
    deliverables: [
      'Identification and removal of duplicate records',
      'Correction of irregular spellings, casing, and spacing',
      'Standardization of dates, addresses, and numerical codes',
      'Summary log of anomalies identified and cleaned',
    ],
    toolsUsed: ['Excel Filters & Formulas', 'Python Scripts (where applicable)', 'Google Sheets'],
  },
  {
    id: 'document-formatting',
    title: 'Professional Word & PDF Document Formatting',
    category: 'admin',
    description: 'Formatting reports, proposals, meeting minutes, and manuals according to professional corporate or NGO publishing standards.',
    deliverables: [
      'Consistent heading hierarchy, font styles, and margins',
      'Table of contents, headers, footers, and page numbers',
      'Clean table and chart alignments',
      'Seamless conversion between Word and high-resolution PDF',
    ],
    toolsUsed: ['Microsoft Word', 'Adobe Acrobat / PDF Converters', 'Google Docs'],
  },
  {
    id: 'web-research',
    title: 'Online Information Gathering & Archiving',
    category: 'admin',
    description: 'Conducting thorough desk research on targeted topics, compiling directory lists, and organizing findings into structured briefs.',
    deliverables: [
      'Targeted organization and contact list compilation',
      'Systematic categorization of web resources and references',
      'Clean summary tables with verified URLs and source notes',
      'Organized digital filing with systematic folder conventions',
    ],
    toolsUsed: ['Web Browsing', 'Search Engines', 'Spreadsheets', 'Cloud Storage'],
  },
  {
    id: 'junior-web-dev',
    title: 'Junior Web & Frontend Support',
    category: 'dev',
    description: 'Assisting development teams with component styling, content updates, responsive fixes, and maintaining web interfaces.',
    deliverables: [
      'HTML/CSS/React component updates and layout adjustments',
      'Responsive design fixes across mobile and tablet viewports',
      'Content and image updates within web applications',
      'Basic bug fixing and clean Git branch submissions',
    ],
    toolsUsed: ['React', 'JavaScript', 'HTML5 / CSS3', 'Tailwind CSS', 'Git & GitHub'],
  },
];

export const languages = [
  { language: 'Somali', level: 'Native / Bilingual', fluency: 'Fluent' },
  { language: 'English', level: 'Professional & Academic Working Proficiency', fluency: 'Fluent' },
  { language: 'Arabic', level: 'Professional & Academic Working Proficiency', fluency: 'Fluent' },
];
