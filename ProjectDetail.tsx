
import React from 'react';
import { Project } from './types';

interface ProjectDetailProps {
  project: Project;
  onBack: () => void;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ project, onBack }) => {
  const isEnterpriseProject = project.title === 'Enterprise Network Architectures';
  const isSecurityProject = project.title === 'Anti-Malware Browser Extension';
  const isBusinessProject = project.title === 'Summer Business Operations';
  const isUILProject = project.title === 'UIL Website Development';

  // Determine theme colors based on project
  let accentColor = 'emerald';
  let roleText = 'Specialist';
  
  if (isSecurityProject) {
    accentColor = 'blue';
    roleText = 'Cybersecurity Developer';
  } else if (isBusinessProject) {
    accentColor = 'amber';
    roleText = 'Operations & Logistics';
  } else if (isUILProject) {
    accentColor = 'indigo';
    roleText = 'UIL Website Team Captain';
  } else if (isEnterpriseProject) {
    accentColor = 'emerald';
    roleText = 'Network Architect & Cisco Specialist';
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-20 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <button 
        onClick={onBack}
        className={`mb-12 flex items-center gap-3 text-slate-500 hover:text-${accentColor}-400 font-black uppercase text-[10px] tracking-[0.3em] transition-all group`}
      >
        <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        Return to Dossier
      </button>

      <div className="space-y-16">
        {/* Header Section */}
        <header className="space-y-6">
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-white leading-tight">
            {project.title}
          </h1>
          <div className="flex flex-wrap items-center gap-6">
            <div className="flex items-center gap-3">
              <div className={`w-8 h-8 bg-${accentColor}-500 text-slate-950 rounded-lg flex items-center justify-center font-black text-xs`}>DG</div>
              <div>
                <p className="text-white text-[11px] font-black uppercase tracking-widest leading-none mb-1">Dwijesh Gontla</p>
                <p className="text-slate-500 text-[9px] font-bold uppercase tracking-widest">{roleText}</p>
              </div>
            </div>
            <a href="mailto:gdwijju@gmail.com" className={`text-${accentColor}-400 text-[10px] font-black uppercase tracking-[0.2em] border-b border-${accentColor}-500/20 pb-0.5 hover:text-white transition-colors`}>
              gdwijju@gmail.com
            </a>
          </div>
        </header>

        <hr className="border-white/5" />

        {/* --- UIL Website Development --- */}
        {isUILProject && (
          <div className="space-y-12 animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <section className="space-y-6">
              <div className="flex items-center gap-4">
                <div className={`h-px flex-grow bg-indigo-500/10`}></div>
                <h2 className={`text-indigo-400 text-[10px] font-black uppercase tracking-[0.4em]`}>Professional Summary</h2>
                <div className={`h-px flex-grow bg-indigo-500/10`}></div>
              </div>
              <p className="text-slate-400 text-lg leading-relaxed font-medium">
                Led Gateway College Prep's UIL Website team to <strong>District Championship</strong> and <strong>3rd Place State</strong> as Captain. Designed and developed full-stack websites judged on functionality, design, and technical implementation under strict competition timelines.
              </p>
            </section>

            <section className="space-y-8">
              <h3 className="text-white text-2xl font-black tracking-tight italic">Competition Achievements</h3>
              <div className="overflow-hidden border border-white/5 rounded-2xl bg-slate-950/40">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-indigo-500/5">
                      <th className="p-6 text-[10px] font-black uppercase tracking-[0.3em] text-indigo-400 border-b border-white/5">Level</th>
                      <th className="p-6 text-[10px] font-black uppercase tracking-[0.3em] text-indigo-400 border-b border-white/5">Achievement</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    <tr>
                      <td className="p-6 text-white font-bold border-b border-white/5">District</td>
                      <td className="p-6 text-slate-400 border-b border-white/5">1st Place - Champions</td>
                    </tr>
                    <tr>
                      <td className="p-6 text-white font-bold">State</td>
                      <td className="p-6 text-slate-400">3rd Place - Top 3 Texas</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="space-y-6">
               <h3 className="text-white text-2xl font-black tracking-tight italic">Technical Skills Demonstrated</h3>
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                 {[
                   { label: 'Full-Stack Development', icon: '🌐' },
                   { label: 'HTML5/CSS3/JavaScript', icon: '⚛️' },
                   { label: 'UI/UX Design', icon: '🎨' },
                   { label: 'Responsive Architecture', icon: '📱' }
                 ].map(s => (
                   <div key={s.label} className="p-4 bg-slate-950/40 border border-white/5 rounded-xl flex items-center gap-4">
                     <span className="text-xl">{s.icon}</span>
                     <span className="text-slate-400 text-xs font-black uppercase tracking-widest">{s.label}</span>
                   </div>
                 ))}
               </div>
            </section>

            <section className="space-y-6">
              <h3 className="text-white text-2xl font-black tracking-tight italic">Technical Implementation</h3>
              <div className="bg-slate-950 p-8 rounded-2xl border border-white/5 font-mono text-xs leading-relaxed">
                <p className="text-indigo-400 font-bold mb-2">FRONTEND: HTML5 Semantic Markup</p>
                <p className="text-indigo-400 font-bold mb-2">CSS3 Grid/Flexbox + Animations</p>
                <p className="text-indigo-400 font-bold mb-2">JavaScript DOM Manipulation</p>
                <p className="text-slate-500 mt-4">// Result: Top 3 Texas High School Websites</p>
              </div>
            </section>
          </div>
        )}

        {/* --- Summer Business Operations --- */}
        {isBusinessProject && (
          <div className="space-y-12 animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <section className="space-y-6">
              <div className="flex items-center gap-4">
                <div className={`h-px flex-grow bg-amber-500/10`}></div>
                <h2 className={`text-amber-400 text-[10px] font-black uppercase tracking-[0.4em]`}>Professional Summary</h2>
                <div className={`h-px flex-grow bg-amber-500/10`}></div>
              </div>
              <p className="text-slate-400 text-lg leading-relaxed font-medium">
                Hands-on operations experience at a regional business in <strong>India</strong>. Mastered <strong>international logistics coordination</strong>, <strong>financial auditing fundamentals</strong>, and <strong>cross-border supply chain management</strong> through active participation in high-growth small business operations.
              </p>
            </section>

            <section className="space-y-8">
              <h3 className="text-white text-2xl font-black tracking-tight italic">Executive Experience Overview</h3>
              <div className="grid grid-cols-1 gap-6">
                <div className="p-8 bg-slate-950/40 border border-white/5 rounded-3xl space-y-4">
                  <h4 className="text-amber-400 font-black uppercase text-xs tracking-widest">Global Logistics & Supply Chain</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Managed end-to-end inventory tracking systems across multiple regional hubs. Coordinated with diverse vendors and freight carriers to ensure seamless delivery schedules and strict quality control on receiving.
                  </p>
                </div>
                <div className="p-8 bg-slate-950/40 border border-white/5 rounded-3xl space-y-4">
                  <h4 className="text-amber-400 font-black uppercase text-xs tracking-widest">Financial Operations & Accounting</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Facilitated daily bookkeeping and reconciliation processes using digital auditing tools. Gained deep insight into accounts payable/receivable management, regional invoicing laws, and profitability analysis for operational overhead.
                  </p>
                </div>
                <div className="p-8 bg-slate-950/40 border border-white/5 rounded-3xl space-y-4">
                  <h4 className="text-amber-400 font-black uppercase text-xs tracking-widest">Workflow Optimization</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Identified structural bottlenecks in warehouse-to-client pipelines. Implemented new task prioritization frameworks that bridged communication gaps between technical teams and logistical staff.
                  </p>
                </div>
              </div>
            </section>

            <section className="space-y-6">
              <h3 className="text-white text-2xl font-black tracking-tight italic">Technical & Process Skills</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {['Excel Analytics', 'Lean Workflow', 'QuickBooks', 'ROI Analysis'].map(skill => (
                  <div key={skill} className="px-4 py-3 bg-slate-950 border border-white/5 rounded-xl text-center text-[10px] font-black uppercase tracking-widest text-slate-500">
                    {skill}
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}

        {/* --- Anti-Malware Browser Extension --- */}
        {isSecurityProject && (
          <div className="space-y-12 animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <section className="space-y-6">
              <div className="flex items-center gap-4">
                <div className={`h-px flex-grow bg-blue-500/10`}></div>
                <h2 className={`text-blue-400 text-[10px] font-black uppercase tracking-[0.4em]`}>Professional Summary</h2>
                <div className={`h-px flex-grow bg-blue-500/10`}></div>
              </div>
              <p className="text-slate-400 text-lg leading-relaxed font-medium">
                Developed a <strong>production-grade browser security suite</strong> equipped with a persistent <strong>firewall</strong> and <strong>internet security monitor</strong>. It employs advanced <strong>AI-driven heuristic analysis</strong> to identify and stop malware, phishing, and privacy threats in real-time.
              </p>
            </section>

            <section className="space-y-8">
              <h3 className="text-white text-2xl font-black tracking-tight italic">Security Architecture</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-8 bg-slate-950/40 border border-blue-500/20 rounded-3xl space-y-4">
                   <div className="flex items-center gap-3">
                     <span className="text-2xl">🛡️</span>
                     <h4 className="text-blue-400 font-black uppercase text-xs tracking-widest">Extension Firewall</h4>
                   </div>
                   <p className="text-slate-400 text-sm">A robust blocking engine that evaluates every outgoing network request against dynamic filter lists and domain blacklists.</p>
                </div>
                <div className="p-8 bg-slate-950/40 border border-blue-500/20 rounded-3xl space-y-4">
                   <div className="flex items-center gap-3">
                     <span className="text-2xl">🧠</span>
                     <h4 className="text-blue-400 font-black uppercase text-xs tracking-widest">AI Heuristics Engine</h4>
                   </div>
                   <p className="text-slate-400 text-sm">Uses pattern-based behavior detection to identify zero-day threats and malicious script injections before execution.</p>
                </div>
              </div>
            </section>

            <section className="space-y-8">
              <h3 className="text-white text-2xl font-black tracking-tight italic">Protection Layers</h3>
              <div className="overflow-hidden border border-white/5 rounded-2xl bg-slate-950/40">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-blue-500/5">
                      <th className="p-6 text-[10px] font-black uppercase tracking-[0.3em] text-blue-400 border-b border-white/5">Layer</th>
                      <th className="p-6 text-[10px] font-black uppercase tracking-[0.3em] text-blue-400 border-b border-white/5">Mechanism</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    <tr>
                      <td className="p-6 text-white font-bold border-b border-white/5">Internet Monitor</td>
                      <td className="p-6 text-slate-400 border-b border-white/5">Real-time telemetry of background network activity</td>
                    </tr>
                    <tr>
                      <td className="p-6 text-white font-bold border-b border-white/5">Malware Mitigation</td>
                      <td className="p-6 text-slate-400 border-b border-white/5">Heuristic blocking of high-risk payloads</td>
                    </tr>
                    <tr>
                      <td className="p-6 text-white font-bold">Privacy Protection</td>
                      <td className="p-6 text-slate-400">Anti-fingerprinting + granular cookie deletion</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="space-y-6">
              <h3 className="text-white text-2xl font-black tracking-tight italic">Technical Specification</h3>
              <div className="bg-slate-950 p-8 rounded-2xl border border-white/5 font-mono text-[11px] leading-relaxed">
                <p className="text-blue-500 font-bold mb-2">🔧 CORE: Manifest V3 Compliant</p>
                <p className="text-white mb-4">Service Worker for background persistence & real-time monitoring</p>
                <p className="text-blue-500 font-bold mb-2">🧬 DETECTION: AI/ML Inference</p>
                <p className="text-white">Pattern-matching engine evaluates URL entropy and script payloads</p>
              </div>
            </section>
          </div>
        )}

        {/* --- Enterprise Network Architectures --- */}
        {isEnterpriseProject && (
          <div className="space-y-12 animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <section className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="h-px flex-grow bg-emerald-500/10"></div>
                <h2 className="text-emerald-400 text-[10px] font-black uppercase tracking-[0.4em]">Professional Summary</h2>
                <div className="h-px flex-grow bg-emerald-500/10"></div>
              </div>
              <p className="text-slate-400 text-lg leading-relaxed font-medium">
                I architect multi-site network topologies using Cisco protocols, with expertise in VLAN segmentation and enterprise security layers. Completed Cisco Packet Tracer's first and end-of-course modules, mastering simulation-to-production network design principles.
              </p>
            </section>

            <section className="space-y-8">
              <h3 className="text-white text-2xl font-black tracking-tight italic">Cisco Packet Tracer Coursework</h3>
              <div className="overflow-hidden border border-white/5 rounded-2xl bg-slate-950/40">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-emerald-500/5">
                      <th className="p-6 text-[10px] font-black uppercase tracking-[0.3em] text-emerald-400 border-b border-white/5">Module</th>
                      <th className="p-6 text-[10px] font-black uppercase tracking-[0.3em] text-emerald-400 border-b border-white/5">Key Skills Mastered</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    <tr>
                      <td className="p-6 text-white font-bold border-b border-white/5">Introductory</td>
                      <td className="p-6 text-slate-400 border-b border-white/5">Packet Tracer interface, topologies, connectivity</td>
                    </tr>
                    <tr>
                      <td className="p-6 text-white font-bold">Advanced</td>
                      <td className="p-6 text-slate-400">VLAN creation, static routing, troubleshooting</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="space-y-6">
              <h3 className="text-white text-2xl font-black tracking-tight italic">Architecture Philosophy</h3>
              <div className="bg-slate-950 p-8 rounded-2xl border border-white/5 font-mono text-xs leading-relaxed">
                <p className="text-emerald-500 font-bold mb-4">// HIERARCHICAL DESIGN PRINCIPLE</p>
                <p><span className="text-slate-500">Core:</span> Backbone speed</p>
                <p><span className="text-slate-500">Dist:</span> Policy enforcement</p>
                <p><span className="text-slate-500">Acc:</span> User connectivity</p>
              </div>
            </section>
          </div>
        )}

        {/* Catch-all Fallback */}
        {!isEnterpriseProject && !isSecurityProject && !isBusinessProject && !isUILProject && (
          <div className="py-20 text-center space-y-8">
            <div className="w-20 h-20 bg-slate-950 mx-auto rounded-3xl flex items-center justify-center text-5xl border border-white/10">
              {project.icon}
            </div>
            <div className="space-y-4">
              <h3 className="text-white text-3xl font-black tracking-tighter uppercase italic">Specifications Pending</h3>
              <p className="text-slate-500 max-w-sm mx-auto">Full technical documentation for this module is currently being finalized.</p>
            </div>
            <button 
              onClick={onBack}
              className="px-8 py-3 bg-white text-slate-950 rounded-xl font-black uppercase text-[10px] tracking-widest hover:bg-slate-200 transition-all"
            >
              Back to Portfolio
            </button>
          </div>
        )}
      </div>

      {/* Background Decor */}
      <div className="fixed inset-0 pointer-events-none z-[-1] opacity-40">
        <div className={`absolute top-0 left-1/4 w-[500px] h-[500px] bg-${accentColor}-500/5 blur-[120px] rounded-full`}></div>
        <div className={`absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-${accentColor}-500/5 blur-[100px] rounded-full`}></div>
      </div>
    </div>
  );
};

export default ProjectDetail;
