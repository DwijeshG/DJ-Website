
import React from 'react';
import { PROJECTS } from './constants';
import { Project } from './types';

interface ProjectsProps {
  onSelectProject: (project: Project) => void;
}

const Projects: React.FC<ProjectsProps> = ({ onSelectProject }) => {
  return (
    <section className="space-y-12">
      <div className="space-y-4">
        <h2 className="text-3xl md:text-4xl font-black tracking-tighter uppercase italic text-white">Portfolio</h2>
        <div className="h-1.5 w-24 bg-amber-500 rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 gap-6 md:gap-8">
        {PROJECTS.map((project, idx) => (
          <button 
            key={idx} 
            onClick={() => onSelectProject(project)}
            className="group relative bg-slate-900/40 border border-white/5 p-6 md:p-8 rounded-[2rem] overflow-hidden transition-all hover:bg-slate-900/60 hover:border-amber-500/20 text-left w-full outline-none focus:ring-2 focus:ring-amber-500/50"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 blur-[60px] rounded-full"></div>
            
            <div className="relative z-10 flex flex-col sm:flex-row gap-6 md:gap-8 items-start sm:items-center">
              <div className="w-16 h-16 md:w-20 md:h-20 flex-shrink-0 bg-slate-950 rounded-2xl flex items-center justify-center text-3xl md:text-4xl border border-white/10 group-hover:border-amber-500/40 transition-colors shadow-2xl">
                {project.icon}
              </div>
              
              <div className="flex-grow space-y-3 md:space-y-4">
                <div className="flex justify-between items-start">
                  <h3 className="text-lg md:text-xl font-black text-white group-hover:text-amber-400 transition-colors">{project.title}</h3>
                  <div className="p-2 rounded-full group-hover:bg-amber-500 group-hover:text-slate-950 transition-all text-slate-600">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>
                <p className="text-slate-400 leading-relaxed text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-slate-950 text-amber-500/80 text-[8px] font-black uppercase tracking-[0.15em] rounded-md border border-white/5">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
};

export default Projects;
