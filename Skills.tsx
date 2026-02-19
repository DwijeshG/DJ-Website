
import React from 'react';
import { SKILL_CATEGORIES } from './constants';

const Skills: React.FC = () => {
  return (
    <section className="space-y-12">
      <div className="space-y-4">
        <h2 className="text-2xl font-black tracking-tighter uppercase italic text-white">Technical Specs</h2>
        <div className="h-1.5 w-16 bg-gradient-to-r from-amber-500 to-transparent rounded-full"></div>
      </div>

      <div className="space-y-10">
        {SKILL_CATEGORIES.map((cat, idx) => (
          <div key={idx} className="space-y-4">
            <h4 className="text-[9px] font-black uppercase tracking-[0.4em] text-slate-600 flex items-center gap-3">
              {cat.title}
            </h4>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map(skill => (
                <div key={skill} className="px-4 py-2 bg-slate-950 border border-white/5 rounded-lg text-[11px] font-bold text-slate-400 hover:text-amber-500 hover:border-amber-500/30 transition-all cursor-default">
                  {skill}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="bg-amber-500/5 border border-amber-500/20 p-6 rounded-2xl space-y-3 shadow-xl">
        <div className="flex items-center gap-2 text-amber-500">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h4 className="font-black uppercase tracking-widest text-[10px]">Verified Credentials</h4>
        </div>
        <p className="text-slate-400 text-xs leading-relaxed">
          PCEP Certified Programmer. Pursuing CompTIA Security+.
        </p>
      </div>
    </section>
  );
};

export default Skills;
