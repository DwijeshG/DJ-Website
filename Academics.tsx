
import React from 'react';

const Academics: React.FC = () => {
  return (
    <section className="space-y-16 md:space-y-32" aria-labelledby="academics-heading">
      <div className="space-y-4">
        <h2 id="academics-heading" className="text-3xl md:text-4xl font-black tracking-tighter uppercase italic text-white">Scholastic Record</h2>
        <div className="h-1.5 w-24 bg-amber-500 rounded-full"></div>
      </div>

      {/* Elite Invitations Spotlight */}
      <div className="relative overflow-hidden bg-[#0a0f1e]/40 border border-white/5 p-8 md:p-16 lg:p-20 rounded-[2.5rem] md:rounded-[3rem] shadow-3xl group">
        <div className="relative z-10 flex flex-col gap-10 md:gap-16">
          <div className="flex flex-wrap items-center gap-6">
            <div className="inline-block px-5 py-2 bg-amber-500/5 border border-amber-500/20 rounded-full backdrop-blur-md">
              <span className="text-amber-500/90 text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em]">Elite Academic Invitations</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div className="space-y-8 md:space-y-10">
              <h3 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[0.85] tracking-tight">
                University <br /> <span className="gradient-gold">Residency Select</span>
              </h3>
              <p className="text-slate-400 text-md md:text-xl font-medium leading-relaxed max-w-2xl">
                Hand-selected for prestigious residency programs at <strong>Stanford</strong> and <strong>Baylor University</strong>. Reserved for the top percentile of students nationwide, reflecting an advanced academic trajectory in systems management and ethical leadership.
                <br /><br className="hidden md:block" />
                Participation involves rigorous deep-dives into collegiate-level problem solving and strategic oversight within high-stakes academic environments.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-8 md:gap-10 items-center justify-center lg:justify-end lg:pt-12">
              <div className="flex flex-col items-center gap-4 md:gap-6 group/card">
                <div className="w-48 h-48 md:w-56 md:h-56 bg-[#8C1515] rounded-[2.5rem] flex items-center justify-center text-7xl md:text-8xl shadow-2xl shadow-red-900/40 border border-white/10 group-hover/card:scale-[1.02] group-hover/card:-translate-y-2 transition-all duration-700">
                  <span className="font-serif text-white font-bold select-none">S</span>
                </div>
                <p className="text-slate-500 text-[10px] md:text-[11px] font-black uppercase tracking-[0.3em] opacity-80 group-hover/card:opacity-100 transition-opacity">Stanford University</p>
              </div>

              <div className="flex flex-col items-center gap-4 md:gap-6 group/card">
                <div className="w-48 h-48 md:w-56 md:h-56 bg-[#154734] rounded-[2.5rem] flex items-center justify-center text-7xl md:text-8xl shadow-2xl shadow-emerald-900/40 border border-[#FFB81C]/20 group-hover/card:scale-[1.02] group-hover/card:-translate-y-2 transition-all duration-700">
                  <span className="font-serif text-[#FFB81C] font-bold select-none">B</span>
                </div>
                <p className="text-slate-500 text-[10px] md:text-[11px] font-black uppercase tracking-[0.3em] opacity-80 group-hover/card:opacity-100 transition-opacity">Baylor University</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
        <div className="royal-card p-8 md:p-12 rounded-[2rem] md:rounded-[2.5rem]">
          <p className="text-amber-500 text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em] mb-6 md:mb-8">Academic Velocity</p>
          <div className="space-y-8 md:space-y-10">
            <div className="flex justify-between items-end">
              <div>
                <h4 className="text-5xl md:text-6xl font-black text-white tracking-tighter">5.18</h4>
                <p className="text-slate-500 text-[9px] md:text-[11px] font-black uppercase tracking-widest mt-2 opacity-60">Weighted GPA</p>
              </div>
              <div className="text-right">
                <h4 className="text-4xl md:text-5xl font-black text-amber-500 tracking-tighter">Elite</h4>
                <p className="text-slate-500 text-[9px] md:text-[11px] font-black uppercase tracking-widest mt-2 opacity-60">Leadership Honors</p>
              </div>
            </div>
            <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
              <div className="h-full bg-amber-500 w-[100%] shadow-[0_0_15px_rgba(245,158,11,0.5)]"></div>
            </div>
            <p className="text-slate-500 text-xs md:text-sm font-medium leading-relaxed italic opacity-80">
              "Recognized with prestigious invitations to the National Society of Leadership and Success (NSLS) and the Society for Collegiate Leadership & Achievement (SCLA)."
            </p>
          </div>
        </div>

        <div className="royal-card p-8 md:p-12 rounded-[2rem] md:rounded-[2.5rem] flex flex-col justify-center gap-8 md:gap-12">
          <div className="flex items-center gap-8 md:gap-10">
            <div className="text-5xl md:text-6xl font-black text-white tracking-tighter">1300</div>
                          <div>
                            <p className="text-amber-500 text-[9px] md:text-[10px] font-black uppercase tracking-widest mb-1">PSAT Composite</p>
                            <p className="text-slate-400 text-[10px] md:text-xs font-bold uppercase tracking-widest">&gt;99% Global Percentile</p>
                          </div>          </div>
          <div className="flex items-center gap-8 md:gap-10">
            <div className="text-5xl md:text-6xl font-black text-white tracking-tighter">#6</div>
            <div>
              <p className="text-amber-500 text-[9px] md:text-[10px] font-black uppercase tracking-widest mb-1">Class Standing</p>
              <p className="text-slate-400 text-[10px] md:text-xs font-bold uppercase tracking-widest">Gateway College Prep Top Tier</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Academics;
