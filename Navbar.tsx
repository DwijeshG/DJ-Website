
import React, { useState } from 'react';

interface NavbarProps {
  scrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ scrolled }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Scholarship', id: 'academics' },
    { name: 'UIL Record', id: 'uil' },
    { name: 'Portfolio', id: 'portfolio' },
    { name: 'Mastery', id: 'mastery' },
  ];

  const scrollToSection = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
      setMobileMenuOpen(false);
      window.history.pushState(null, '', `#${id}`);
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 no-print ${
        scrolled ? 'py-2 md:py-4' : 'py-6 md:py-10'
      }`}
      role="navigation"
      aria-label="Main Navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex justify-between items-center px-6 md:px-12 py-3 md:py-4 rounded-2xl md:rounded-[2.5rem] border transition-all duration-700 relative ${
          scrolled || mobileMenuOpen
            ? 'bg-slate-950/90 backdrop-blur-3xl border-white/10 shadow-2xl' 
            : 'bg-transparent border-transparent'
        }`}>
          
          <a 
            href="#" 
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="flex items-center gap-3 md:gap-5 group cursor-pointer outline-none"
            aria-label="Dwijesh Gontla Home"
          >
            <div className="w-8 h-8 md:w-10 md:h-10 bg-amber-500 rounded-lg md:rounded-xl flex items-center justify-center font-black text-slate-950 shadow-xl shadow-amber-500/20 group-hover:scale-105 transition-all">
              DG
            </div>
            <div className="flex flex-col text-left">
              <span className="font-black text-[11px] md:text-[14px] tracking-tight block text-white uppercase leading-none mb-0.5 md:mb-1">DWIJESH GONTLA</span>
              <span className="text-[6.5px] md:text-[7.5px] text-amber-500/60 font-black tracking-[0.4em] md:tracking-[0.5em] uppercase block">Exploring Cybersecurity</span>
            </div>
          </a>
          
          <div className="hidden md:flex items-center gap-8 lg:gap-12">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={`#${link.id}`}
                onClick={(e) => scrollToSection(e, link.id)}
                className="text-[9px] font-black uppercase tracking-[0.4em] text-slate-400 hover:text-amber-500 transition-all py-2 relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-amber-500 transition-all group-hover:w-full"></span>
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3 md:gap-6">
            <a 
              href="mailto:gdwijju@gmail.com"
              className="px-5 md:px-8 py-2.5 md:py-3 rounded-full text-[8px] md:text-[9px] font-black uppercase tracking-[0.2em] md:tracking-[0.25em] bg-amber-500 text-slate-950 hover:bg-amber-400 transition-all active:scale-95 shadow-lg shadow-amber-500/10"
            >
              CONNECT
            </a>

            <button 
              className="md:hidden w-9 h-9 flex flex-col items-center justify-center gap-1.5 p-2 rounded-lg border border-white/10 text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? "Close Menu" : "Open Menu"}
            >
              <span className={`w-5 h-0.5 bg-current transition-all ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`w-5 h-0.5 bg-current transition-all ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`w-5 h-0.5 bg-current transition-all ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        <div className={`md:hidden mt-2 overflow-hidden transition-all duration-500 ease-in-out ${mobileMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="bg-slate-950/95 backdrop-blur-3xl border border-white/10 rounded-2xl p-6 flex flex-col gap-2 shadow-3xl">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={`#${link.id}`} 
                onClick={(e) => scrollToSection(e, link.id)}
                className="text-white text-[10px] font-black uppercase tracking-[0.4em] py-4 px-3 border-b border-white/5 last:border-0 active:bg-white/5 rounded-lg transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="mailto:gdwijju@gmail.com"
              className="mt-4 text-center py-4 bg-amber-500 text-slate-950 text-[10px] font-black uppercase tracking-widest rounded-xl shadow-xl shadow-amber-500/5"
            >
              SEND DIRECT MESSAGE
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
