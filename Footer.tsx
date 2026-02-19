
import React from 'react';

const Footer: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative mt-24 border-t border-white/5 py-16 md:py-24 px-6 overflow-hidden no-print">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[1px] bg-gradient-to-r from-transparent via-amber-500/10 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-start gap-12 md:gap-16">
        <div className="space-y-6 max-w-sm">
          <div className="flex items-center gap-5 md:gap-6">
            <div className="w-12 h-12 md:w-14 md:h-14 bg-amber-500 text-slate-950 rounded-xl md:rounded-2xl flex items-center justify-center font-black text-lg md:text-xl shadow-2xl shadow-amber-500/10">DG</div>
            <div>
              <h2 className="text-2xl md:text-3xl font-black tracking-tighter text-white uppercase italic leading-none mb-1 md:mb-2">Dwijesh Gontla</h2>
              <p className="text-amber-500/60 text-[8px] md:text-[9px] font-black tracking-[0.4em] md:tracking-[0.5em] uppercase">Cybersecurity Enthusiast & ACC Scholar</p>
            </div>
          </div>
          <p className="text-slate-500 text-sm md:text-[14px] font-medium leading-relaxed opacity-60">
            I explore secure network architectures and systems, leveraging firsthand business experience to build a more resilient digital future.
          </p>
          <div className="space-y-3 pt-4">
            <a href="mailto:gdwijju@gmail.com" className="block text-white text-[11px] md:text-[12px] font-black tracking-widest uppercase hover:text-amber-500 transition-all">
              gdwijju@gmail.com
            </a>
            <a href="tel:5129568087" className="block text-slate-400 text-[11px] md:text-[12px] font-bold tracking-widest hover:text-white transition-all">
              (512) 956-8087
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-12 sm:gap-20 md:gap-32 w-full lg:w-auto">
          <div className="space-y-6 md:space-y-8">
            <h4 className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em] md:tracking-[0.5em] text-slate-500">Navigation</h4>
            <div className="flex flex-col gap-3 md:gap-4 text-[10px] md:text-[11px] font-bold uppercase tracking-[0.2em] md:tracking-[0.3em] text-slate-600">
              <button onClick={() => scrollTo('academics')} className="text-left hover:text-amber-500 transition-colors outline-none focus:text-amber-500">Scholarship</button>
              <button onClick={() => scrollTo('uil')} className="text-left hover:text-amber-500 transition-colors outline-none focus:text-amber-500">UIL Record</button>
              <button onClick={() => scrollTo('portfolio')} className="text-left hover:text-amber-500 transition-colors outline-none focus:text-amber-500">Portfolio</button>
              <button onClick={() => scrollTo('mastery')} className="text-left hover:text-amber-500 transition-colors outline-none focus:text-amber-500">Mastery</button>
            </div>
          </div>
          <div className="space-y-6 md:space-y-8">
            <h4 className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em] md:tracking-[0.5em] text-slate-500">Connect</h4>
            <div className="flex flex-col gap-3 md:gap-4 text-[10px] md:text-[11px] font-bold uppercase tracking-[0.2em] md:tracking-[0.3em] text-slate-600">
              <a href="mailto:gdwijju@gmail.com" className="hover:text-amber-500 transition-all">Secure Email</a>
              <a href="tel:5129568087" className="hover:text-amber-500 transition-all">Voice Channel</a>
              <p className="text-slate-800">Georgetown, TX</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-16 md:mt-24 pt-10 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-6 md:gap-8">
        <p className="text-slate-400/60 text-[8px] md:text-[9px] font-mono uppercase tracking-[0.4em] md:tracking-[0.7em] text-center sm:text-left transition-colors hover:text-amber-500/60">
          © 2025 // DWIJESH GONTLA // ARCHITECTURAL DOSSIER
        </p>
        <div className="flex items-center gap-4 group">
          <span className="w-1.5 h-1.5 bg-amber-500/60 rounded-full animate-pulse"></span>
          <p className="text-slate-400/60 text-[8px] md:text-[9px] font-mono uppercase tracking-[0.4em] md:tracking-[0.7em] group-hover:text-amber-500/80 transition-colors">
            SYSTEMS STATUS: OPTIMAL
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
