
import React, { useState, useRef, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Language } from '../types';
import { UI_TEXT } from '../constants';
import { MenuIcon, XIcon } from './Icons';

interface NavbarProps {
  lang: Language;
  onLangChange: (lang: Language) => void;
  onNavigate: (id: string) => void;
  theme: 'dark' | 'light';
  onThemeToggle: () => void;
  isVisible: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ lang, onLangChange, onNavigate, theme, onThemeToggle, isVisible }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const t = UI_TEXT[lang].nav;

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false);
      }
    };
    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    onNavigate(id.replace('#', ''));
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { name: t.whylocal, href: '#whylocal' },
    { name: t.individuals, href: '#individuals' }, // New Link
    { name: t.services, href: '#services' },
    { name: t.cases, href: '#cases' },
    { name: t.process, href: '#process' },
    { name: t.about, href: '#about' },
    { name: t.faq, href: '#faq' }
  ];

  return (
    <div className="fixed bottom-0 left-0 w-full z-[100] flex justify-center pointer-events-none pb-6 lg:pb-8">
        
      {/* Container for Drop-up Menu & Navbar */}
      <div className="relative flex flex-col items-center" ref={menuRef}>
      
        {/* Drop-up Context Menu (Mobile Only) */}
        <AnimatePresence>
            {isMobileMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, y: 20, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    className="absolute bottom-full mb-3 left-0 origin-bottom-left pointer-events-auto min-w-[220px]"
                >
                    <div className="glass rounded-2xl p-2 border border-white/10 bg-[#02040a]/90 backdrop-blur-xl shadow-2xl flex flex-col gap-1 overflow-hidden">
                        
                        {/* Mobile Lang Toggle inside Menu */}
                        <div className="flex p-1.5 bg-white/5 rounded-xl border border-white/5 mb-1">
                            <button 
                                onClick={() => onLangChange(Language.RU)}
                                className={`flex-1 py-2 rounded-lg text-[10px] font-bold transition-all ${lang === Language.RU ? 'bg-[#00f2ff] text-black shadow-sm' : 'text-white/40 hover:text-white'}`}
                            >RU</button>
                            <button 
                                onClick={() => onLangChange(Language.EN)}
                                className={`flex-1 py-2 rounded-lg text-[10px] font-bold transition-all ${lang === Language.EN ? 'bg-[#00f2ff] text-black shadow-sm' : 'text-white/40 hover:text-white'}`}
                            >EN</button>
                        </div>

                        {navLinks.map((link, i) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={(e) => handleNavClick(e, link.href)}
                                className="flex items-center justify-between px-4 py-3 rounded-xl hover:bg-white/10 active:bg-white/20 transition-colors group"
                            >
                                <span className="text-xs font-bold uppercase tracking-widest text-white/80 group-hover:text-white">{link.name}</span>
                                <div className="w-1.5 h-1.5 rounded-full bg-[#00f2ff] opacity-0 group-hover:opacity-100 transition-opacity shadow-[0_0_5px_#00f2ff]"></div>
                            </a>
                        ))}
                    </div>
                </motion.div>
            )}
        </AnimatePresence>

        {/* Main Navbar Pill */}
        <motion.nav 
          layout
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className={`
              pointer-events-auto
              glass rounded-full 
              flex items-center
              shadow-[0_20px_40px_rgba(0,0,0,0.3)]
              border border-white/10
              ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-[150%] opacity-0'}
              transition-transform duration-500
          `}
          style={{
             padding: '8px' // Constant padding for container
          }}
        >
          {/* Mobile Menu Button - The Trigger */}
          <motion.button
              layout="position"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`md:hidden flex items-center justify-center rounded-full transition-all z-20 relative
                  ${isMobileMenuOpen ? 'bg-white text-black w-10 h-10 rotate-90' : 'bg-white/5 hover:bg-white/10 text-white w-12 h-12'}
              `}
              aria-label="Menu"
          >
              {isMobileMenuOpen ? <XIcon /> : <MenuIcon />}
          </motion.button>

          {/* MOBILE EXPANDED CONTENT: Logo, Theme, CTA */}
          <AnimatePresence mode='popLayout'>
             {isMobileMenuOpen && (
                <motion.div
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: 'auto', opacity: 1 }}
                    exit={{ width: 0, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    className="md:hidden flex items-center gap-3 overflow-hidden whitespace-nowrap pl-2 pr-1"
                >
                     {/* Vertical Divider */}
                     <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="w-[1px] h-6 bg-white/10"></motion.div>
                     
                     {/* Logo (Mobile) */}
                     <a href="#hero" onClick={(e) => handleNavClick(e, 'hero')} className="flex items-center justify-center w-10 h-10 bg-white rounded-full text-black shadow-lg">
                        <span className="font-display font-black text-lg">A</span>
                     </a>

                     {/* Theme (Mobile) */}
                     <button
                        onClick={onThemeToggle}
                        className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 text-white/70 [.light_&]:text-slate-600"
                     >
                        {theme === 'dark' ? (
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="5"/><path d="M12 1v2"/><path d="M12 21v2"/><path d="M4.22 4.22l1.42 1.42"/><path d="M18.36 18.36l1.42 1.42"/><path d="M1 12h2"/><path d="M21 12h2"/><path d="M4.22 19.78l1.42-1.42"/><path d="M18.36 5.64l1.42-1.42"/></svg>
                        ) : (
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
                        )}
                     </button>

                     {/* CTA (Mobile) */}
                     <a 
                        href="#contact" 
                        onClick={(e) => handleNavClick(e, 'contact')}
                        className="luxury-button px-4 py-2.5 bg-[#7b2ff7] rounded-full text-[10px] font-bold uppercase tracking-widest text-white hover:bg-[#00f2ff] hover:text-black transition-colors"
                    >
                        GO
                    </a>
                </motion.div>
             )}
          </AnimatePresence>

          {/* DESKTOP CONTENT: Full Bar (Always Visible on Desktop) */}
          <div className="hidden md:flex items-center gap-4 sm:gap-8 px-2 sm:px-6 sm:py-2">
             {/* Logo */}
             <a 
                href="#hero" 
                onClick={(e) => handleNavClick(e, 'hero')}
                className="flex items-center gap-3 group cursor-pointer border-r border-white/10 pr-4"
             >
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center transition-all duration-700 group-hover:bg-[#00f2ff] shadow-lg">
                    <span className="font-display font-black text-black text-lg">A</span>
                </div>
                <div className="hidden lg:flex flex-col">
                    <span className="font-display font-bold text-xs tracking-widest uppercase text-white [.light_&]:text-slate-800">Architect</span>
                </div>
             </a>

             {/* Links */}
             <div className="flex items-center gap-6">
                {navLinks.map((link) => (
                    <a 
                        key={link.name}
                        href={link.href} 
                        onClick={(e) => handleNavClick(e, link.href)}
                        className="text-[10px] font-bold uppercase tracking-[0.15em] text-white/50 [.light_&]:text-slate-500 hover:text-[#00f2ff] [.light_&]:hover:text-[#0088cc] transition-all relative group cursor-pointer"
                    >
                        {link.name}
                        <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-[#00f2ff] rounded-full transition-all duration-300 group-hover:w-full"></span>
                    </a>
                ))}
             </div>

             <div className="w-[1px] h-8 bg-white/10"></div>

             {/* Right Controls */}
             <div className="flex items-center gap-3">
                 <button
                    onClick={onThemeToggle}
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 transition-all text-white/70 [.light_&]:text-slate-600 hover:text-[#00f2ff]"
                 >
                    {theme === 'dark' ? (
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="5"/><path d="M12 1v2"/><path d="M12 21v2"/><path d="M4.22 4.22l1.42 1.42"/><path d="M18.36 18.36l1.42 1.42"/><path d="M1 12h2"/><path d="M21 12h2"/><path d="M4.22 19.78l1.42-1.42"/><path d="M18.36 5.64l1.42-1.42"/></svg>
                    ) : (
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
                    )}
                 </button>

                 <div className="hidden sm:flex items-center gap-1 p-1 bg-white/5 rounded-full border border-white/5">
                    <button 
                        onClick={() => onLangChange(Language.RU)}
                        className={`w-8 h-8 rounded-full flex items-center justify-center text-[9px] font-bold transition-all ${lang === Language.RU ? 'bg-[#00f2ff] text-black shadow-sm' : 'text-white/40 hover:text-white'}`}
                    >RU</button>
                    <button 
                        onClick={() => onLangChange(Language.EN)}
                        className={`w-8 h-8 rounded-full flex items-center justify-center text-[9px] font-bold transition-all ${lang === Language.EN ? 'bg-[#00f2ff] text-black shadow-sm' : 'text-white/40 hover:text-white'}`}
                    >EN</button>
                 </div>
                
                 <a 
                    href="#contact" 
                    onClick={(e) => handleNavClick(e, 'contact')}
                    className="luxury-button pl-4 pr-1 sm:px-6 py-2.5 bg-[#7b2ff7] rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-[#00f2ff] hover:text-black transition-all duration-500 shadow-lg shadow-[#7b2ff7]/30 flex items-center gap-2 group"
                 >
                    <span className="hidden sm:inline">{t.contact}</span>
                    <span className="sm:hidden">GO</span>
                    <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-black/10 transition-colors">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                    </div>
                 </a>
             </div>
          </div>
        </motion.nav>
      </div>
    </div>
  );
};

export default Navbar;
