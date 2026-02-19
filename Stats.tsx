
import React from 'react';
import { HERO_STATS } from './constants';

const Stats: React.FC = () => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6">
      {HERO_STATS.map((stat, idx) => (
        <div key={idx} className="group relative h-full">
          <div className="absolute inset-0 bg-amber-500/0 group-hover:bg-amber-500/5 blur-2xl transition-all rounded-3xl"></div>
          <div className="relative bg-[#0a0f1e]/60 border border-white/5 p-6 md:p-10 rounded-2xl md:rounded-3xl h-full flex flex-col justify-center items-center text-center hover:border-amber-500/20 transition-all">
            <p className="text-amber-500/60 text-[8px] md:text-[10px] font-black uppercase tracking-[0.2em] mb-3 md:mb-4 group-hover:text-amber-400 transition-colors">
              {stat.label}
            </p>
            <h3 className="text-3xl lg:text-5xl font-black text-white tracking-tighter mb-1 md:mb-2">
              {stat.value}
            </h3>
            <p className="text-slate-500 text-[8px] md:text-[10px] font-bold uppercase tracking-widest opacity-70 italic">{stat.sub}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Stats;
