
import { Competition, Project, SkillCategory } from './types';

export const HERO_STATS = [
  { label: 'GPA', value: '3.94', sub: '5.18 Weighted' },
  { label: 'Honor Roll', value: 'All A', sub: 'Consistent Excellence' },
  { label: 'Rank', value: '6/141', sub: 'Academic Elite' },
  { label: 'College Board', value: 'Recognized', sub: 'Rural & Small Town' },
  { label: 'Recruitment', value: '25+', sub: 'Top Tier Universities' }
];

export const COMPETITIONS: Competition[] = [
  { year: 2025, rank: 'District 1st, State 3rd', category: 'UIL Website Team (Captain)' },
  { year: 2025, rank: 'Member', category: 'DECA Business Operations' },
  { year: 2025, rank: 'District Competitor', category: 'UIL Mathematics Team' },
  { year: 2024, rank: 'State Finalists (2x)', category: 'VEX Robotics Team' },
  { year: 2025, rank: '6th Place', category: 'UIL CX Debate' },
  { year: 2024, rank: '1st Place', category: 'Maps, Graphs, & Charts' },
  { year: 2024, rank: '2nd Place', category: 'Number Sense' },
  { year: 2024, rank: '3rd Place', category: 'Mathematics' }
];

export const PROJECTS: Project[] = [
  {
    title: 'Enterprise Network Architectures',
    description: 'I architect multi-site network topologies using Cisco protocols. I focus on implementing robust VLAN segmentation and security layers, a skill I have honed through both simulation and practical application.',
    tags: ['Cisco Networking', 'VLAN', 'OSPF', 'Security'],
    icon: '🌐'
  },
  {
    title: 'Anti-Malware Browser Extension',
    description: 'A production-grade browser extension featuring a built-in firewall and internet security monitor. It utilizes AI-driven heuristic analysis to preemptively stop sophisticated malware attacks.',
    tags: ['AI Security', 'Heuristics', 'JavaScript', 'Privacy'],
    icon: '🛡️'
  },
  {
    title: 'Summer Business Operations',
    description: 'International operations experience at a business in India. Managed complex logistics coordination, accounting workflows, and regional supply chain optimizations in a fast-paced environment.',
    tags: ['Global Logistics', 'Operations', 'Finance', 'India'],
    icon: '💼'
  },
  {
    title: 'UIL Website Development',
    description: 'Led Gateway College Prep\'s UIL Website team to District Championship and 3rd Place State as Captain. Designed and developed full-stack websites judged on technical implementation.',
    tags: ['Full-stack', 'Leadership', 'UIL State', 'UI/UX'],
    icon: '🏛️'
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Technical Core',
    skills: ['C++', 'Python', 'HTML/CSS', 'JavaScript', 'Git']
  },
  {
    title: 'Infrastructure & Security',
    skills: ['Cisco Networking', 'Threat Mitigation', 'Cloudflare', 'VLAN/OSPF']
  },
  {
    title: 'Professional & Business',
    skills: ['Business Systems', 'NJHS Finance', 'Strategic Planning', 'System Analysis']
  }
];

export const MASTERY_ITEMS = [
  { icon: '💼', title: 'DECA Member', desc: 'Active member of DECA, engaging in business operations research and professional development workshops.', tag: 'Business' },
  { icon: '⚙️', title: 'Rotary Member', desc: 'Active participant in Rotary community service projects, supporting local initiatives and international outreach.', tag: 'Service' },
  { icon: '🏛️', title: 'Community Leadership', desc: 'Directed service initiatives at the local temple and library, coordinating youth engagement and cultural preservation programs.', tag: 'Service' },
  { icon: '🗣️', title: 'Cultural Heritage', desc: 'Advanced student of Telugu, dedicated to preserving linguistic traditions and bridging cultural gaps within the community.', tag: 'Telugu' },
  { icon: '🥋', title: 'Martial Discipline', desc: 'As a Red Belt in Karate, I apply the same mental focus to my architectural work that I do in high-stakes training.', tag: 'Physical' },
  { icon: '🎓', title: 'ACC Associate Progress', desc: 'I am currently a student at Austin Community College, completing my degree alongside my high school studies with a 4.0 college GPA.', tag: 'Academic' },
  { icon: '⚖️', title: 'Honor Societies', desc: 'I am a member of NSLS (National Society of Leadership and Success) and was invited to join SCLA (Society for Collegiate Leadership & Achievement).', tag: 'Leadership' },
  { icon: '🏦', title: 'NJHS Governance', desc: 'As Treasurer of the National Junior Honor Society, I manage financial integrity and organizational oversight.', tag: 'Leadership' },
  { icon: '🦾', title: 'Robotics Lead', desc: 'I design autonomous logic and mechanical systems for our VEX team, driving for peak engineering performance.', tag: 'STEM' },
  { icon: '📜', title: 'Certified Expertise', desc: 'I hold an official PCEP certification in Python, validating my foundations in high-level programming.', tag: 'Official' },
  { icon: '🌐', title: 'Network Architecture', desc: 'Designing complex Cisco-based network topologies with a focus on security, scalability, and high-availability protocols.', tag: 'Technical' },
  { icon: '🛡️', title: 'Systems Research', desc: 'Conducting independent research into advanced systems architecture and cybersecurity threat mitigation strategies.', tag: 'Research' }
];

export const BIO_SUMMARY = `
I am a 15-year-old scholar at Gateway College Prep and an ACC student with a perfect 4.0 GPA and All A Honor Roll standing. My academic excellence is recognized by the College Board with the Rural and Small Town Recognition, alongside multiple school-wide honors. As a top-tier candidate, I have been recruited by over 25 prestigious institutions, including UT Austin, UT Dallas, and Oxford Emory. Notably, I received exclusive summer recruitment offers from Stanford, UT Austin, U Chicago, and Baylor—programs that actively sought my enrollment, though I ultimately chose to pursue other strategic academic paths. My profile merges elite technical aptitude in cybersecurity with a commitment to community involvement through DECA and Rotary, leadership in UIL, and cultural heritage, making me a standout prospect for the world's leading universities.
`;
