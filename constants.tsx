
import { Competition, Project, SkillCategory } from './types';

export const HERO_STATS = [
  { label: 'GPA', value: '5.18', sub: 'Weighted Merit' },
  { label: 'PCEP Certified', value: 'Official', sub: 'Python Specialist' },
  { label: 'Rank', value: '6/141', sub: 'Academic Elite' },
  { label: 'PSAT', value: '1300', sub: '>99% Percentile' },
  { label: 'UIL State', value: '3rd', sub: 'Top of Texas' }
];

export const COMPETITIONS: Competition[] = [
  { year: 2025, rank: 'District 1st, State 3rd', category: 'UIL Website Team (Captain)' },
  { year: 2024, rank: 'State Finalists (2x)', category: 'VEX Robotics Team' },
  { year: 2025, rank: '6th Place', category: 'UIL CX Debate' },
  { year: 2024, rank: '1st Place', category: 'Maps, Graphs, & Charts' },
  { year: 2024, rank: '2nd Place', category: 'Number Sense' },
  { year: 2024, rank: '3rd Place', category: 'Mathematics' },
  { year: 2023, rank: '1st Place', category: 'Mathematics' }
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
  { icon: '📜', title: 'Philosophy & Ethics', desc: 'I study ethical frameworks to ensure my technical pursuits remain grounded in human-centric values.', tag: 'Intellectual' },
  { icon: '🎓', title: 'ACC Associate Progress', desc: 'I am currently a student at Austin Community College, completing my degree alongside my high school studies.', tag: 'Academic' },
  { icon: '🥋', title: 'Martial Discipline', desc: 'As a Red Belt in Karate, I apply the same mental focus to my architectural work that I do in high-stakes training.', tag: 'Physical' },
  { icon: '⚖️', title: 'Honor Societies', desc: 'I am a member of NSLS (National Society of Leadership and Success) and was invited to join SCLA (Society for Collegiate Leadership & Achievement).', tag: 'Leadership' },
  { icon: '🏦', title: 'NJHS Governance', desc: 'As Treasurer of the National Junior Honor Society, I manage financial integrity and organizational oversight.', tag: 'Leadership' },
  { icon: '🦾', title: 'Robotics Lead', desc: 'I design autonomous logic and mechanical systems for our VEX team, driving for peak engineering performance.', tag: 'STEM' },
  { icon: '📜', title: 'Certified Expertise', desc: 'I hold an official PCEP certification in Python, validating my foundations in high-level programming.', tag: 'Official' },
  { icon: '📜', title: 'Student Advocacy', desc: 'As a Student Council representative, I act as a liaison between my peers and the school administration.', tag: 'Diplomacy' }
];

export const BIO_SUMMARY = `
I am a 15-year-old scholar at Gateway College Prep and a current student at Austin Community College, where I am 50% through my Associate degree. I have gained extensive firsthand experience working directly with local and international businesses to solve complex technical challenges, while receiving prestigious invitations from Stanford and Baylor University for their elite residency programs. My passion lies in exploring the intricacies of cybersecurity and building secure, efficient digital environments.
`;
