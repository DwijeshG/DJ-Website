
import React from 'react';
import { COMPETITIONS } from './constants';

const Competitions: React.FC = () => {
  return (
    <section className="space-y-12">
      <div className="space-y-4">
        <h2 className="text-3xl md:text-4xl font-black tracking-tighter uppercase italic text-white">UIL Dominance</h2>
        <div className="h-1.5 w-24 bg-amber-500 rounded-full"></div>
      </div>

      <div className="grid gap-3 md:gap-4">
        {COMPETITIONS.map((comp, idx) => (
          <div key={idx} className="group flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 p-6 bg-slate-900/30 border border-white/5 rounded-2xl hover:bg-blue-600/5 hover:border-blue-500/20 transition-all duration-300">
            <div className="w-12 h-12 md:w-14 md:h-14 flex-shrink-0 bg-slate-950 rounded-xl flex flex-col items-center justify-center border border-white/5 group-hover:border-blue-500/30">
              <span className="text-[8px] md:text-[10px] font-black text-slate-600">{comp.year}</span>
              <span className="text-md md:text-lg font-bold text-blue-500">UIL</span>
            </div>
            
            <div className="flex-grow">
              <h4 className="text-white font-bold text-base md:text-lg group-hover:text-blue-400 transition-colors">{comp.category}</h4>
              <p className="text-slate-500 text-[11px] md:text-sm font-medium tracking-wide uppercase">{comp.rank}</p>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
              {comp.rank.includes('1st') && (
                <div className="w-8 h-8 md:w-10 md:h-10 bg-amber-500/20 rounded-full flex items-center justify-center text-lg md:text-xl border border-amber-500/30 shadow-[0_0_15px_rgba(245,158,11,0.2)]">🥇</div>
              )}
              {comp.rank.includes('State') && (
                <div className="px-3 md:px-4 py-1.5 bg-blue-600 text-white text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] rounded-full shadow-lg shadow-blue-500/20">
                  State Finalist
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Competitions;
