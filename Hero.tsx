
import React from 'react';
import { BIO_SUMMARY } from './constants';

const Hero: React.FC = () => {
  const scrollToSpecs = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('portfolio');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="relative scroll-mt-32">
      <div className="relative">
        <div className="inline-flex items-center gap-2 md:gap-3 mb-6 md:mb-10 px-4 md:px-5 py-2 bg-amber-500/5 border border-amber-500/20 rounded-full backdrop-blur-xl no-print">
          <span className="relative flex h-1.5 w-1.5 md:h-2 md:w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 md:h-2 md:w-2 bg-amber-500"></span>
          </span>
          <span className="text-amber-500/90 text-[7px] md:text-[9px] font-black uppercase tracking-[0.3em] md:tracking-[0.45em]">
            Class of 2028 • Gateway College Prep • ACC Scholar
          </span>
        </div>
        
        <div className="space-y-2 md:space-y-4 mb-8 md:mb-12">
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[9rem] font-black tracking-tighter leading-[0.8] mb-2">
            Dwijesh <br />
            <span className="gradient-gold">Gontla</span>
          </h1>
          <p className="text-amber-500/40 text-[10px] md:text-2xl font-black tracking-[0.3em] md:tracking-[0.5em] uppercase italic">
            Exploring Cybersecurity & Systems
          </p>
        </div>
        
        <p className="text-lg md:text-3xl text-slate-400 leading-snug max-w-4xl mb-10 md:mb-14 font-medium tracking-tight">
          {BIO_SUMMARY}
        </p>
        
        <div className="flex flex-wrap gap-4 md:gap-6 no-print">
          <button 
            onClick={scrollToSpecs}
            className="w-full sm:w-auto px-10 md:px-12 py-4 md:py-5 bg-amber-500 rounded-xl md:rounded-2xl font-black uppercase text-[9px] md:text-[10px] tracking-[0.3em] text-slate-950 hover:bg-amber-400 transition-all active:scale-95 shadow-2xl shadow-amber-500/10 cursor-pointer outline-none"
            aria-label="View Technical Specs"
          >
            Technical Specs
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
