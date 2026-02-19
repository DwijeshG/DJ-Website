
import React, { useState, useEffect, useRef } from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Stats from './Stats';
import Academics from './Academics';
import Competitions from './Competitions';
import Projects from './Projects';
import Skills from './Skills';
import Footer from './Footer';
import ProjectDetail from './ProjectDetail';
import ChatBot from './ChatBot';
import { MASTERY_ITEMS } from './constants';
import { Project } from './types';

const Reveal: React.FC<{ children: React.ReactNode, delay?: number }> = ({ children, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    const current = domRef.current;
    if (current) observer.observe(current);
    return () => {
      if (current) observer.unobserve(current);
    };
  }, []);

  return (
    <div
      ref={domRef}
      style={{ transitionDelay: `${delay}ms` }}
      className={`reveal-item transform ${
        isVisible 
          ? 'opacity-100 translate-y-0 scale-100' 
          : 'opacity-0 translate-y-12 md:translate-y-20 scale-[0.98]'
      }`}
    >
      {children}
    </div>
  );
};

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [isChatOpen, setIsChatOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (activeProject) window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeProject]);

  if (activeProject) {
    return (
      <div className="min-h-screen selection:bg-amber-500/20 bg-[#030712]">
        <ProjectDetail project={activeProject} onBack={() => setActiveProject(null)} />
      </div>
    );
  }

  return (
    <div className="min-h-screen selection:bg-amber-500/20">
      <div className="fixed inset-0 bg-grid pointer-events-none opacity-20 no-print"></div>
      
      <Navbar scrolled={scrolled} />
      
      <main className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-32 md:pt-48 space-y-32 md:space-y-64 pb-24">
        
        {/* HERO SECTION */}
        <div className="space-y-16 md:space-y-32">
          <Reveal>
            <Hero />
          </Reveal>
          <Reveal delay={200}>
            <Stats />
          </Reveal>
        </div>
        
        {/* SECTION 1: SCHOLARSHIP */}
        <Reveal>
          <div id="academics" className="scroll-mt-24 md:scroll-mt-48">
            <Academics />
          </div>
        </Reveal>
        
        {/* SECTION 2: UIL DOMINANCE */}
        <Reveal>
          <div id="uil" className="scroll-mt-24 md:scroll-mt-48">
            <Competitions />
          </div>
        </Reveal>
        
        {/* SECTION 3: PORTFOLIO & TECHNICAL SPECS */}
        <Reveal>
          <div id="portfolio" className="scroll-mt-24 md:scroll-mt-48 space-y-16 md:space-y-24">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
              <div className="lg:col-span-4 order-2 lg:order-1">
                <Skills />
              </div>
              <div className="lg:col-span-8 order-1 lg:order-2">
                <Projects onSelectProject={setActiveProject} />
              </div>
            </div>
          </div>
        </Reveal>
        
        {/* SECTION 4: MASTERY */}
        <Reveal>
          <div id="mastery" className="scroll-mt-24 md:scroll-mt-48 space-y-10 md:space-y-20">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-black tracking-tighter uppercase italic text-white">Distinguished Mastery</h2>
              <div className="h-1.5 w-24 bg-amber-500/40 rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {MASTERY_ITEMS.map((item, idx) => (
                <div key={idx} className="royal-card p-8 md:p-10 rounded-3xl hover:border-amber-500/30 transition-all group h-full flex flex-col">
                  <div className="flex items-center gap-4 md:gap-5 mb-6 md:mb-8">
                    <div className="w-12 h-12 md:w-16 md:h-16 bg-slate-950 rounded-xl md:rounded-2xl flex items-center justify-center text-3xl md:text-4xl group-hover:scale-110 transition-transform shadow-2xl shadow-black/40">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-[9px] md:text-[10px] text-amber-500/40 font-black uppercase tracking-widest mb-1">{item.tag}</p>
                      <h4 className="font-bold text-white text-md md:text-lg leading-tight">{item.title}</h4>
                    </div>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed font-medium">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </main>

      {/* Floating Chat Interface */}
      <div className="fixed bottom-8 right-8 z-[100] no-print">
        {isChatOpen ? (
          <div className="w-[380px] md:w-[450px] bg-slate-900/95 backdrop-blur-3xl border border-white/10 rounded-[2.5rem] shadow-3xl overflow-hidden animate-in fade-in slide-in-from-bottom-8 duration-500">
            <div className="bg-slate-950/50 p-6 border-b border-white/5 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center font-black text-white text-sm">AI</div>
                <div>
                  <h3 className="text-white text-[11px] font-black uppercase tracking-widest leading-none mb-1">Dossier Assistant</h3>
                  <p className="text-blue-500/60 text-[8px] font-black uppercase tracking-widest">Secure Channel Active</p>
                </div>
              </div>
              <button 
                onClick={() => setIsChatOpen(false)}
                className="w-8 h-8 flex items-center justify-center rounded-full bg-white/5 text-slate-400 hover:bg-white/10 transition-all"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-6 bg-[#030712]/50">
              <ChatBot />
            </div>
          </div>
        ) : (
          <button 
            onClick={() => setIsChatOpen(true)}
            className="w-16 h-16 md:w-20 md:h-20 bg-blue-600 rounded-[2rem] flex items-center justify-center text-white shadow-2xl shadow-blue-600/20 hover:scale-110 hover:-translate-y-2 transition-all group"
          >
            <div className="absolute inset-0 bg-blue-400 rounded-[2rem] blur-xl opacity-0 group-hover:opacity-20 transition-opacity"></div>
            <svg className="w-8 h-8 relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
            </svg>
          </button>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default App;
