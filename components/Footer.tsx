
import React from 'react';
import { Language } from '../types';
import { UI_TEXT } from '../constants';
import { TelegramIcon, GitHubIcon, LinkedInIcon } from './Icons';

interface FooterProps {
  onNavigate: (id: string) => void;
  lang: Language;
}

const Footer: React.FC<FooterProps> = ({ onNavigate, lang }) => {
  const currentYear = new Date().getFullYear();
  const t = UI_TEXT[lang].footer;
  const navT = UI_TEXT[lang].nav;
  const roiT = UI_TEXT[lang].roi;

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    onNavigate(id);
  };

  return (
    <footer className="relative border-t border-white/5 [.light_&]:border-black/5 bg-[#02040a]/80 [.light_&]:bg-white/80 backdrop-blur-xl pt-20 pb-10 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none overflow-hidden">
         <div className="absolute -top-20 -right-20 w-96 h-96 bg-[#7b2ff7]/5 rounded-full blur-[100px]"></div>
         <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#00f2ff]/5 rounded-full blur-[80px]"></div>
         {/* Large Watermark Logo */}
         <div className="absolute bottom-10 right-10 font-display font-black text-[10rem] leading-none text-white/[0.02] [.light_&]:text-black/[0.02] select-none">
            A
         </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-20">
          
          {/* Col 1: Brand Info (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white [.light_&]:bg-black rounded-xl flex items-center justify-center shadow-lg">
                 <span className="font-display font-black text-black [.light_&]:text-white text-xl">A</span>
              </div>
              <span className="font-display font-bold text-lg tracking-widest uppercase">Architect<span className="text-[#00f2ff]">SaaS</span></span>
            </div>
            <p className="text-sm text-white/50 leading-relaxed font-light max-w-sm">
              {t.description}
            </p>
            <div className="flex gap-4 pt-4">
              {/* Social Icons - Enhanced with Glass Effect */}
              <a href="https://t.me/Architect_SaaS" target="_blank" rel="noopener noreferrer" className="w-12 h-12 glass rounded-2xl flex items-center justify-center text-white/50 hover:text-[#00f2ff] hover:bg-white/5 border border-white/5 hover:border-[#00f2ff]/30 transition-all hover:scale-110 shadow-lg" aria-label="Telegram">
                 <TelegramIcon className="w-6 h-6" />
              </a>
              <a href="#" className="w-12 h-12 glass rounded-2xl flex items-center justify-center text-white/50 hover:text-[#7b2ff7] hover:bg-white/5 border border-white/5 hover:border-[#7b2ff7]/30 transition-all hover:scale-110 shadow-lg" aria-label="GitHub">
                 <GitHubIcon className="w-6 h-6" />
              </a>
              <a href="#" className="w-12 h-12 glass rounded-2xl flex items-center justify-center text-white/50 hover:text-white hover:bg-white/5 border border-white/5 hover:border-white/30 transition-all hover:scale-110 shadow-lg" aria-label="LinkedIn">
                 <LinkedInIcon className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation (3 cols) */}
          <div className="lg:col-span-3">
             <h4 className="font-display font-bold text-white mb-6">{t.navTitle}</h4>
             <ul className="space-y-3">
                {[
                    { name: t.links.home, id: 'hero' },
                    { name: navT.services, id: 'services' },
                    { name: navT.cases, id: 'cases' },
                    { name: navT.process, id: 'process' },
                    { name: roiT.title, id: 'roi' },
                    { name: t.links.about, id: 'hero' }
                ].map((item) => (
                    <li key={item.name}>
                        <a 
                            href={`#${item.id}`} 
                            onClick={(e) => handleLinkClick(e, item.id)}
                            className="text-sm text-white/50 hover:text-[#00f2ff] transition-colors flex items-center gap-2 group"
                        >
                            <span className="w-0 h-[1px] bg-[#00f2ff] transition-all group-hover:w-2"></span>
                            {item.name}
                        </a>
                    </li>
                ))}
             </ul>
          </div>

          {/* Col 3: Resources (2 cols) */}
          <div className="lg:col-span-2">
             <h4 className="font-display font-bold text-white mb-6">{t.resourcesTitle}</h4>
             <ul className="space-y-3">
                <li><a href="#" className="text-sm text-white/50 hover:text-white transition-colors">{t.links.blog}</a></li>
                <li><a href="#" className="text-sm text-white/50 hover:text-white transition-colors">{t.links.docs}</a></li>
                <li><a href="#" className="text-sm text-white/50 hover:text-white transition-colors">{t.links.privacy}</a></li>
                <li><a href="#" className="text-sm text-white/50 hover:text-white transition-colors">{t.links.terms}</a></li>
             </ul>
          </div>

          {/* Col 4: Contacts (3 cols) */}
          <div className="lg:col-span-3">
             <h4 className="font-display font-bold text-white mb-6">{t.contactsTitle}</h4>
             <div className="space-y-4">
                <div className="glass p-4 rounded-xl border-white/5 [.light_&]:border-black/5 group hover:border-[#7b2ff7]/30 transition-all">
                    <div className="text-[10px] uppercase tracking-widest text-white/40 font-bold mb-1">Email</div>
                    <a href="mailto:contact@architect-saas.dev" className="text-sm font-mono text-white/80 group-hover:text-white transition-colors">contact@architect-saas.dev</a>
                </div>
                <div className="glass p-4 rounded-xl border-white/5 [.light_&]:border-black/5 group hover:border-[#00f2ff]/30 transition-all">
                    <div className="text-[10px] uppercase tracking-widest text-white/40 font-bold mb-1">Telegram</div>
                    <a href="https://t.me/Architect_SaaS" className="text-sm font-mono text-white/80 group-hover:text-white transition-colors">@Architect_SaaS</a>
                </div>
                <div className="pt-2">
                     <div className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/30 mb-2">Location</div>
                     <div className="text-sm text-white/60">Dubai, UAE / Remote Worldwide</div>
                </div>
             </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 [.light_&]:border-black/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-[10px] font-mono text-white/30 uppercase tracking-[0.1em]">
            {t.rights}
          </div>
          
          <div className="flex items-center gap-6">
             <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
                <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest">{t.status}</span>
             </div>
             <div className="text-[10px] font-mono text-white/20 uppercase tracking-[0.1em] hidden md:block">
                {t.encryption}
             </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
