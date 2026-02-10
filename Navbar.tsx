
import React, { useState, useEffect } from 'react';
import { Language } from '../types';

interface NavbarProps {
  lang: Language;
  onLangChange: (lang: Language) => void;
}

const Navbar: React.FC<NavbarProps> = ({ lang, onLangChange }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // Check scroll on the container if possible, or window if body scrolls
    // Since we use a snap-container in App, window scroll might strictly remain 0 depending on CSS.
    // However, the scroll-dot logic in App.tsx suggests we track scroll on the container.
    // For navbar appearance, we can stick to a simple check or always keep it clean.
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { name: 'Услуги', href: '#services' },
    { name: 'Кейсы', href: '#cases' },
    { name: 'Процесс', href: '#process' },
    { name: 'FAQ', href: '#faq' }
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-700 ${isScrolled ? 'py-4' : 'py-8'}`}>
      <div className="container mx-auto px-6">
        <div className={`flex justify-between items-center px-8 rounded-full transition-all duration-700 ${isScrolled ? 'glass py-3 shadow-2xl border-white/10' : 'bg-transparent py-0'}`}>
          <a 
            href="#hero" 
            onClick={(e) => scrollToSection(e, 'hero')}
            className="flex items-center gap-3 group cursor-pointer"
          >
            <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center transition-all duration-700 group-hover:rotate-[15deg] group-hover:bg-[#00f2ff]">
               <span className="font-display font-black text-black text-xl">A</span>
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-sm tracking-widest uppercase">Architect<span className="text-[#00f2ff]">SaaS</span></span>
              <span className="text-[8px] font-mono text-white/30 tracking-[0.2em] uppercase">Private AI Infrastructure</span>
            </div>
          </a>

          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href} 
                onClick={(e) => scrollToSection(e, link.href)}
                className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/50 hover:text-[#00f2ff] transition-all relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#00f2ff] transition-all group-hover:w-full"></span>
              </a>
            ))}
          </div>

          <div className="flex items-center gap-8">
            <div className="hidden sm:flex items-center gap-1 p-1 glass rounded-lg border-white/5">
              <button 
                onClick={() => onLangChange(Language.RU)}
                className={`px-3 py-1 rounded text-[9px] font-bold transition-all ${lang === Language.RU ? 'bg-[#00f2ff] text-black' : 'text-white/40 hover:text-white'}`}
              >RU</button>
              <button 
                onClick={() => onLangChange(Language.EN)}
                className={`px-3 py-1 rounded text-[9px] font-bold transition-all ${lang === Language.EN ? 'bg-[#00f2ff] text-black' : 'text-white/40 hover:text-white'}`}
              >EN</button>
            </div>
            
            <a 
              href="#contact" 
              onClick={(e) => scrollToSection(e, 'contact')}
              className="luxury-button px-8 py-3 bg-[#7b2ff7] rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-[#00f2ff] hover:text-black transition-all duration-500 shadow-xl shadow-[#7b2ff7]/20"
            >
              Консультация
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
