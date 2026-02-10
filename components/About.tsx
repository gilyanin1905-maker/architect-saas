
import React from 'react';
import { motion } from 'framer-motion';
import { ABOUT_DATA, UI_TEXT } from '../constants';
import { Language } from '../types';

interface AboutProps {
    lang: Language;
}

const About: React.FC<AboutProps> = ({ lang }) => {
    const data = ABOUT_DATA[lang];
    const t = UI_TEXT[lang].about;

    return (
        <section id="about" className="py-24 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#7b2ff7]/5 to-transparent pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-24 items-center">
                    
                    {/* Visual / Avatar Placeholder */}
                    <motion.div 
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-5 relative"
                    >
                        <div className="relative aspect-[4/5] rounded-[40px] overflow-hidden border border-white/10 shadow-2xl">
                             {/* Abstract Cyber Silhouette since no real photo */}
                             <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black">
                                <div className="absolute inset-0 opacity-50 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
                                <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-[#00f2ff]/20 to-transparent"></div>
                                
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                     <svg width="200" height="200" viewBox="0 0 200 200" fill="none" stroke="white" strokeWidth="1" opacity="0.1">
                                         <circle cx="100" cy="50" r="30" />
                                         <path d="M100 80 V 150" />
                                         <path d="M70 180 L 100 150 L 130 180" />
                                         <path d="M60 110 L 140 110" />
                                     </svg>
                                </div>
                             </div>

                             <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black/90 to-transparent">
                                 <h3 className="text-3xl font-display font-bold text-white">{data.name}</h3>
                                 <p className="text-[#00f2ff] font-mono text-sm uppercase tracking-widest">{data.role}</p>
                             </div>
                        </div>

                        {/* Floating Stats */}
                        <div className="absolute -right-4 top-10 glass p-4 rounded-xl border-white/10 animate-float">
                            <div className="text-2xl font-bold text-white">{data.stats[0].value}</div>
                            <div className="text-[10px] text-white/50 uppercase">{data.stats[0].label}</div>
                        </div>
                         <div className="absolute -left-4 bottom-20 glass p-4 rounded-xl border-white/10 animate-float-delayed">
                            <div className="text-xl font-bold text-white">{data.stats[1].value}</div>
                            <div className="text-[10px] text-white/50 uppercase">{data.stats[1].label}</div>
                        </div>
                    </motion.div>

                    {/* Text Content */}
                    <motion.div 
                         initial={{ opacity: 0, x: 50 }}
                         whileInView={{ opacity: 1, x: 0 }}
                         viewport={{ once: true }}
                         className="lg:col-span-7 space-y-8"
                    >
                        <div>
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-8 h-[1px] bg-[#7b2ff7]"></div>
                                <span className="text-[10px] font-mono font-bold uppercase tracking-[0.4em] text-[#7b2ff7]">
                                    {t.label}
                                </span>
                            </div>
                            <h2 className="text-4xl md:text-6xl font-display font-bold leading-tight mb-6">
                                {t.title} <br />
                                <span className="gradient-text">{t.titleHighlight}</span>
                            </h2>
                            <p className="text-xl text-white/80 font-light border-l-2 border-[#7b2ff7] pl-6 italic">
                                "{t.description}"
                            </p>
                        </div>

                        <div className="space-y-4">
                            {data.bio.map((paragraph, i) => (
                                <p key={i} className="text-white/60 text-base md:text-lg leading-relaxed">
                                    {paragraph}
                                </p>
                            ))}
                        </div>

                        <div className="pt-6">
                            <h4 className="text-xs font-bold text-white/40 uppercase tracking-widest mb-4">Core Competencies</h4>
                            <div className="flex flex-wrap gap-2">
                                {data.skills.map((skill, i) => (
                                    <span key={i} className="px-4 py-2 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition-colors text-xs font-mono text-[#00f2ff]">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default About;
