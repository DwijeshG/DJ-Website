
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Academics from './components/Academics';
import Competitions from './components/Competitions';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Footer from './components/Footer';
import ProjectDetail from './components/ProjectDetail';
import ChatBot from './components/ChatBot';
import { MASTERY_ITEMS } from './constants';
import { Project } from './types';
import { Sparkles } from 'lucide-react';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (activeProject) window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeProject]);

  if (activeProject) {
    return (
      <div className="min-h-screen selection:bg-amber-500/20 bg-[#02040a]">
        <ProjectDetail project={activeProject} onBack={() => setActiveProject(null)} />
      </div>
    );
  }

  return (
    <div className="min-h-screen selection:bg-amber-500/20 text-white">
      <div className="fixed inset-0 bg-grid pointer-events-none opacity-20 no-print"></div>
      <div className="noise no-print"></div>
      
      <Navbar scrolled={scrolled} />
      
      <ChatBot />
      
      <main className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pt-32 md:pt-48 space-y-24 md:space-y-48 pb-32">
        
        {/* HERO SECTION */}
        <div className="space-y-16 md:space-y-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Hero />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Stats />
          </motion.div>
        </div>
        
        {/* SECTION 1: SCHOLARSHIP */}
        <motion.div 
          id="academics" 
          className="scroll-mt-32 md:scroll-mt-56"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Academics />
        </motion.div>
        
        {/* SECTION 2: UIL DOMINANCE */}
        <motion.div 
          id="uil" 
          className="scroll-mt-32 md:scroll-mt-56"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Competitions />
        </motion.div>
        
        {/* SECTION 3: PORTFOLIO & TECHNICAL SPECS */}
        <motion.div 
          id="portfolio" 
          className="scroll-mt-32 md:scroll-mt-56 space-y-24 md:space-y-40"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
            <div className="lg:col-span-4 order-2 lg:order-1">
              <Skills />
            </div>
            <div className="lg:col-span-8 order-1 lg:order-2">
              <Projects onSelectProject={setActiveProject} />
            </div>
          </div>
        </motion.div>
        
        {/* SECTION 4: MASTERY */}
        <motion.div 
          id="mastery" 
          className="scroll-mt-32 md:scroll-mt-56 space-y-12 md:space-y-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-black tracking-tighter uppercase italic gradient-gold inline-block">Distinguished Mastery</h2>
            <div className="h-1.5 w-24 bg-amber-500 rounded-full shadow-[0_0_20px_rgba(245,158,11,0.4)]"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {MASTERY_ITEMS.map((item, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="royal-card p-8 md:p-10 rounded-[2rem] hover:border-amber-500/40 transition-all duration-500 group h-full flex flex-col hover:-translate-y-2"
              >
                <div className="flex items-center gap-5 md:gap-6 mb-6 md:mb-8">
                  <div className="w-14 h-14 md:w-16 md:h-16 bg-black rounded-2xl md:rounded-[1.5rem] flex items-center justify-center text-3xl md:text-4xl group-hover:scale-110 group-hover:bg-slate-900 transition-all duration-500 shadow-3xl shadow-black/60 border border-white/5">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-[9px] md:text-[10px] text-amber-500/60 font-black uppercase tracking-widest mb-1">{item.tag}</p>
                    <h4 className="font-black text-white text-base md:text-lg leading-tight">{item.title}</h4>
                  </div>
                </div>
                <p className="text-slate-300 text-sm md:text-base leading-relaxed font-bold opacity-80 group-hover:opacity-100 transition-opacity duration-500">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </main>

      <Footer />
    </div>
  );
};

export default App;
