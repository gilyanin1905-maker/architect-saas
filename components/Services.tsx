
import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SERVICES_DATA, UI_TEXT } from '../constants';
import { Language } from '../types';
import { TelegramIcon, VKIcon, BotIcon, XIcon } from './Icons';

interface ServicesProps {
  lang: Language;
  onDiscuss: (title: string) => void;
}

// --- Buy Modal Component ---
const BuyModal: React.FC<{ isOpen: boolean; onClose: () => void; lang: Language }> = ({ isOpen, onClose, lang }) => {
    const t = UI_TEXT[lang].services;

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[200]"
                    />
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-sm z-[201] p-4"
                    >
                        <div className="bg-[#0e1621] border border-white/10 rounded-3xl p-6 shadow-2xl relative overflow-hidden">
                            <button onClick={onClose} className="absolute top-4 right-4 text-white/40 hover:text-white">
                                <XIcon className="w-6 h-6" />
                            </button>
                            
                            <h3 className="text-xl font-bold text-white mb-2">{t.buyModalTitle}</h3>
                            <p className="text-white/60 text-sm mb-6">{t.buyModalDesc}</p>

                            <div className="space-y-3">
                                <a href="https://t.me/Architect_SaaS" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-[#0088cc]/20 border border-white/5 hover:border-[#0088cc]/50 transition-all group">
                                    <div className="text-[#0088cc]"><TelegramIcon className="w-6 h-6" /></div>
                                    <span className="font-bold text-white group-hover:text-[#00f2ff]">{t.telegram}</span>
                                </a>
                                <a href="#" className="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-purple-500/20 border border-white/5 hover:border-purple-500/50 transition-all group opacity-50 cursor-not-allowed">
                                    <div className="text-purple-400"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg></div>
                                    <span className="font-bold text-white">{t.messenger} (Soon)</span>
                                </a>
                                <a href="#contact" onClick={onClose} className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-[#00f2ff]/10 to-[#7b2ff7]/10 hover:from-[#00f2ff]/20 hover:to-[#7b2ff7]/20 border border-white/10 transition-all group">
                                    <div className="text-white"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg></div>
                                    <span className="font-bold text-white">{t.request}</span>
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

// --- Service Card ---
const ServiceCard: React.FC<{ service: typeof SERVICES_DATA['RU'][0], lang: Language, onDiscuss: (title: string) => void }> = ({ service, lang, onDiscuss }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [showBuyModal, setShowBuyModal] = useState(false);
  const t = UI_TEXT[lang].services;

  return (
    <>
        <motion.div
            className="relative min-w-[280px] md:min-w-[320px] h-[450px] md:h-[520px] rounded-[24px] md:rounded-[32px] overflow-hidden flex flex-col justify-between border border-white/10 [.light_&]:border-black/5 group select-none shrink-0"
            style={{
                background: 'var(--card-gradient)',
                backdropFilter: 'blur(20px)',
                boxShadow: isHovered ? `0 20px 50px -12px ${service.accent}40` : 'var(--glass-shadow)',
                transition: 'box-shadow 0.5s ease'
            }}
            whileHover={{ y: -5 }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Top Gradient Glow */}
            <div className={`absolute top-0 left-0 w-full h-[150px] bg-gradient-to-b ${service.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-500`}></div>
            
            {/* Header content */}
            <div className="relative z-10 p-6">
                <div className="text-xs font-bold text-white/40 mb-2">architect.ai</div>
                <h3 className="text-2xl md:text-3xl font-display font-light text-white mb-1 leading-none">
                    {service.title}
                </h3>
                <div className={`text-xl md:text-2xl font-display font-bold bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}>
                    {service.role}
                </div>
            </div>

            {/* Body content */}
            <div className="relative z-10 px-6 flex-1 flex flex-col">
                {/* Description: Hidden on mobile, visible on desktop */}
                <p className="hidden md:block text-sm text-white/70 font-light leading-relaxed mb-6">
                    {service.description}
                </p>

                <ul className="space-y-3 mt-auto mb-6">
                    {service.features.map((feature, i) => (
                        <li key={i} className="text-[10px] md:text-xs font-mono text-white/50 flex items-center gap-2">
                            <span className="w-1 h-1 rounded-full" style={{ backgroundColor: service.accent }}></span>
                            {feature}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Footer / Actions */}
            <div className="relative z-10 p-4 md:p-6 mt-auto grid grid-cols-2 gap-3">
                {/* Buy Button */}
                <button
                    onClick={() => setShowBuyModal(true)}
                    className={`py-3 md:py-4 rounded-xl font-bold uppercase tracking-wider text-[10px] md:text-xs transition-all duration-300 flex items-center justify-center gap-2
                        bg-gradient-to-r ${service.gradient} text-white shadow-lg hover:shadow-[0_0_20px_${service.accent}60]
                    `}
                >
                    {t.buy}
                </button>

                {/* Discuss Button */}
                <button
                    onClick={() => onDiscuss(service.title)}
                    className="py-3 md:py-4 rounded-xl font-bold uppercase tracking-wider text-[10px] md:text-xs transition-all duration-300 flex items-center justify-center gap-2 border border-white/10 bg-white/5 hover:bg-white/10 text-white hover:text-[#00f2ff]"
                >
                    <BotIcon className="w-4 h-4" />
                    <span className="truncate">{t.discuss}</span>
                </button>
            </div>

        </motion.div>

        {/* Modal for this specific card instance */}
        <BuyModal isOpen={showBuyModal} onClose={() => setShowBuyModal(false)} lang={lang} />
    </>
  );
};

const Services: React.FC<ServicesProps> = ({ lang, onDiscuss }) => {
  const t = UI_TEXT[lang].services;
  const originalServices = SERVICES_DATA[lang];
  // Triple the data to ensure smooth infinite loop logic
  const services = [...originalServices, ...originalServices, ...originalServices];
  
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationFrameId: number;
    let scrollPos = 0;
    const speed = 0.8; // Adjusted speed
    
    const animate = () => {
      if (!isPaused && scrollContainer) {
        scrollPos += speed;
        
        const oneSetWidth = scrollContainer.scrollWidth / 3;
        
        if (scrollPos >= oneSetWidth) {
          scrollPos = 0;
        }
        
        scrollContainer.scrollLeft = scrollPos;
      } else if (scrollContainer) {
          scrollPos = scrollContainer.scrollLeft;
      }
      
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, [isPaused, services.length]);

  return (
    <section id="services" className="py-8 md:py-32 relative w-full overflow-hidden flex flex-col justify-center">
      
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#7b2ff7]/5 rounded-full blur-[120px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-8 md:mb-20">
             <div className="flex items-center justify-center gap-3 mb-2 md:mb-4">
                <div className="w-8 h-[1px] bg-[#00f2ff]"></div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-[0.4em] text-[#00f2ff]">
                    {t.label}
                </span>
                <div className="w-8 h-[1px] bg-[#00f2ff]"></div>
             </div>
             <h2 className="text-3xl md:text-6xl font-display font-bold leading-tight mb-4 md:mb-6">
                {t.title} <br className="hidden md:block"/>
                <span className="gradient-text">{t.titleHighlight}</span>
             </h2>
             <p className="text-white/50 text-sm md:text-lg max-w-2xl mx-auto font-light leading-relaxed">
                 {t.description}
             </p>
        </div>

        {/* Carousel Container with Blurred Edges Mask */}
        <div className="relative w-full -mx-6 md:mx-0 px-6 md:px-0">
            <div 
                className="overflow-hidden"
                style={{
                    // Mask for blurred edges
                    maskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',
                    WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)'
                }}
            >
                <div 
                    ref={scrollRef}
                    className="flex gap-4 md:gap-8 overflow-x-auto pb-12 pt-10 px-4 md:px-10 no-scrollbar"
                    style={{ 
                        WebkitOverflowScrolling: 'touch',
                        scrollBehavior: 'auto'
                    }}
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                    onTouchStart={() => setIsPaused(true)}
                    onTouchEnd={() => setIsPaused(false)}
                >
                    {services.map((service, index) => (
                        <ServiceCard 
                            key={`${service.id}-${index}`} 
                            service={service} 
                            lang={lang} 
                            onDiscuss={onDiscuss}
                        />
                    ))}
                </div>
            </div>
        </div>

        {/* Scroll Hint (Mobile Only) */}
        <div className="flex justify-center mt-0 md:hidden opacity-50">
             <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="animate-pulse">
                 <path d="M17 12h-10M13 8l-4 4 4 4" />
             </svg>
             <span className="text-[10px] uppercase tracking-widest ml-2">Pause & Swipe</span>
        </div>

      </div>
    </section>
  );
};

export default Services;
