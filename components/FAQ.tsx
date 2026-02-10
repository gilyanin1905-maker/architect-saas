import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FAQ_DATA, UI_TEXT } from '../constants';
import { XIcon, ChevronDown } from './Icons';
import { Language } from '../types';

interface FAQProps {
  lang: Language;
}

// --- Typewriter Component for the Answer ---
const TypewriterText = ({ text }: { text: string }) => {
    const [displayedText, setDisplayedText] = useState('');
    
    useEffect(() => {
        setDisplayedText('');
        let i = 0;
        const speed = 10; // Typing speed in ms
        const interval = setInterval(() => {
            if (i < text.length) {
                setDisplayedText((prev) => prev + text.charAt(i));
                i++;
            } else {
                clearInterval(interval);
            }
        }, speed);
        return () => clearInterval(interval);
    }, [text]);

    return (
        <span className="font-mono text-sm md:text-base leading-relaxed text-white/80 whitespace-pre-wrap">
            {displayedText}
            <span className="inline-block w-2 h-4 bg-[#00f2ff] ml-1 animate-pulse align-middle"></span>
        </span>
    );
};

const FAQ: React.FC<FAQProps> = ({ lang }) => {
  const [activeQuestionId, setActiveQuestionId] = useState<number | null>(null);
  const faqItems = FAQ_DATA[lang];
  const t = UI_TEXT[lang].faq;

  // Find active item for the drawer
  const activeItem = faqItems.find(i => i.id === activeQuestionId);

  return (
    <section id="faq" className="py-24 relative" itemScope itemType="https://schema.org/FAQPage">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-8 h-[1px] bg-[#00f2ff]"></div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-[0.4em] text-[#00f2ff]">FAQ</span>
                <div className="w-8 h-[1px] bg-[#00f2ff]"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-white [.light_&]:text-black">
              {t.title} <span className="gradient-text">{t.titleHighlight}</span>
          </h2>
          <p className="text-white/60 [.light_&]:text-black/60 max-w-2xl mx-auto">
              {t.description}
          </p>
        </div>

        {/* Questions Grid (Buttons) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {faqItems.map((item, index) => (
            <motion.button 
                key={item.id}
                itemScope 
                itemProp="mainEntity" 
                itemType="https://schema.org/Question"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setActiveQuestionId(item.id)}
                className={`
                    group relative p-8 text-left rounded-3xl border transition-all duration-300 h-full flex flex-col justify-between
                    ${activeQuestionId === item.id 
                        ? 'bg-[#00f2ff]/10 border-[#00f2ff] shadow-[0_0_30px_rgba(0,242,255,0.2)]' 
                        : 'glass border-white/10 hover:border-[#00f2ff]/50 hover:bg-white/5'
                    }
                `}
            >
                {/* Decorative Number */}
                <div className="absolute top-6 right-6 text-[40px] font-display font-black text-white/5 group-hover:text-white/10 transition-colors">
                    0{index + 1}
                </div>

                <h3 itemProp="name" className="text-lg font-bold text-white [.light_&]:text-black pr-8 relative z-10 group-hover:text-[#00f2ff] transition-colors">
                    {item.question}
                </h3>

                <div className="mt-8 flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-white/40 group-hover:text-[#00f2ff] transition-colors">
                    <span className="w-6 h-[1px] bg-current"></span>
                    {t.readMode}
                </div>
                
                {/* Hidden Schema Answer for SEO (since the real answer is in the dynamic drawer) */}
                <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer" className="hidden">
                    <div itemProp="text">{item.answer}</div>
                </div>
            </motion.button>
          ))}
        </div>

        {/* Bottom Drawer (Context Menu) */}
        <AnimatePresence>
            {activeQuestionId && activeItem && (
                <>
                    {/* Backdrop */}
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setActiveQuestionId(null)}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[150]"
                    />

                    {/* Drawer Panel */}
                    <motion.div
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        exit={{ y: "100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="fixed bottom-0 left-0 w-full z-[160] flex justify-center pointer-events-none"
                    >
                        <div className="pointer-events-auto w-full max-w-4xl mx-4 mb-4 md:mb-8 bg-[#050816] border border-[#00f2ff]/30 rounded-[32px] overflow-hidden shadow-[0_-20px_80px_rgba(0,0,0,0.8)] relative flex flex-col max-h-[80vh]">
                            
                            {/* Drawer Header (Terminal Style) */}
                            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-white/5">
                                <div className="flex items-center gap-3">
                                    <div className="flex gap-1.5">
                                        <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                                        <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                                        <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                                    </div>
                                    <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest ml-2">root@architect-ai:~/knowledge-base</span>
                                </div>
                                <button 
                                    onClick={() => setActiveQuestionId(null)}
                                    className="p-2 hover:bg-white/10 rounded-full transition-colors group"
                                >
                                    <span className="sr-only">{t.close}</span>
                                    <div className="group-hover:rotate-90 transition-transform duration-300">
                                        <XIcon className="w-5 h-5 text-white/60 group-hover:text-white" />
                                    </div>
                                </button>
                            </div>

                            {/* Drawer Content */}
                            <div className="p-6 md:p-10 overflow-y-auto">
                                <div className="mb-6">
                                    <h3 className="text-xl md:text-2xl font-bold text-[#00f2ff] mb-2 font-display">
                                        {`> ${activeItem.question}`}
                                    </h3>
                                    <div className="w-full h-[1px] bg-gradient-to-r from-[#00f2ff]/50 to-transparent"></div>
                                </div>
                                
                                <div className="bg-black/30 rounded-xl p-6 border border-white/5 font-mono">
                                    <TypewriterText text={activeItem.answer} />
                                </div>

                                <div className="mt-6 flex justify-end">
                                    <button 
                                        onClick={() => setActiveQuestionId(null)}
                                        className="px-6 py-3 bg-white/10 hover:bg-white/20 rounded-lg text-xs font-bold uppercase tracking-widest text-white transition-colors"
                                    >
                                        {t.close} [ESC]
                                    </button>
                                </div>
                            </div>

                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>

      </div>
    </section>
  );
};

export default FAQ;