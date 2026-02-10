
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { PRESENTATION_DATA, UI_TEXT } from '../constants';
import { Language } from '../types';

// --- Visual Components for Slides ---

const ComparisonVisual = ({ lang }: { lang: Language }) => (
    <div className="relative w-full h-full flex items-center justify-center p-4">
        {/* Split Container */}
        <div className="relative w-full h-full flex gap-4">
            
            {/* Cloud (Left) */}
            <div className="flex-1 rounded-2xl bg-red-500/5 border border-red-500/20 flex flex-col items-center justify-center relative overflow-hidden group">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(239,68,68,0.1),transparent)] opacity-50 group-hover:opacity-100 transition-opacity"></div>
                <div className="w-16 h-16 md:w-24 md:h-24 rounded-full border border-red-500/30 flex items-center justify-center mb-4 text-red-500">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M17.5 19c0-1.7-1.3-3-3-3h-11c-1.7 0-3 1.3-3 3 .6 1.7 2.3 3 4 3h10c1.7 0 3.4-1.3 4-3z"/><path d="M17.5 19c1.7 0 3-1.3 3-3 0-1.1-.6-2-1.5-2.6.4-.8.5-1.7.2-2.6-.5-1.6-2-2.7-3.7-2.7-1.3 0-2.5.7-3.2 1.8C11.8 8.8 10.5 8 9 8c-2.2 0-4 1.8-4 4 0 .4.1.8.2 1.2"/></svg>
                </div>
                <div className="text-red-400 font-mono text-xs uppercase tracking-widest">{UI_TEXT[lang].visuals.unsafe}</div>
                {/* Padlock Open */}
                 <svg className="mt-4 text-red-500/50 w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 9.9-1"/></svg>
            </div>

            {/* Local (Right) */}
            <div className="flex-1 rounded-2xl bg-[#00f2ff]/5 border border-[#00f2ff]/20 flex flex-col items-center justify-center relative overflow-hidden group">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,242,255,0.1),transparent)] opacity-50 group-hover:opacity-100 transition-opacity"></div>
                <div className="w-16 h-16 md:w-24 md:h-24 rounded-full border border-[#00f2ff]/30 flex items-center justify-center mb-4 text-[#00f2ff]">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"/><rect x="2" y="14" width="20" height="8" rx="2" ry="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg>
                </div>
                <div className="text-[#00f2ff] font-mono text-xs uppercase tracking-widest">{UI_TEXT[lang].visuals.sovereign}</div>
                 {/* Padlock Closed */}
                 <svg className="mt-4 text-[#00f2ff]/50 w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 0-10 0v4"/></svg>
            </div>

            {/* VS Badge */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black border border-white/20 flex items-center justify-center z-10 font-black text-xs italic">VS</div>
        </div>
    </div>
);

const DatabaseVisual = () => (
    <div className="relative w-full h-full flex items-center justify-center">
        {/* Server Rack Representation */}
        <div className="w-48 h-64 border border-white/10 rounded-lg p-2 flex flex-col gap-2 relative bg-[#050816] [.light_&]:bg-gray-100">
            {[1,2,3,4].map(i => (
                <div key={i} className="flex-1 border border-white/5 rounded bg-white/5 flex items-center px-3 gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                    <div className="w-2 h-2 rounded-full bg-green-500/30"></div>
                    <div className="flex-1 h-[2px] bg-white/10"></div>
                </div>
            ))}
            
            {/* Vector Cube Floating */}
            <motion.div 
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 perspective-1000"
                animate={{ rotateY: 360, rotateX: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                style={{ transformStyle: 'preserve-3d' }}
            >
                <div className="absolute inset-0 border border-[#7b2ff7] opacity-50 bg-[#7b2ff7]/10 translate-z-8" style={{ transform: 'translateZ(16px)' }}></div>
                <div className="absolute inset-0 border border-[#7b2ff7] opacity-50 bg-[#7b2ff7]/10 -translate-z-8" style={{ transform: 'translateZ(-16px)' }}></div>
                <div className="absolute inset-0 border border-[#7b2ff7] opacity-50 bg-[#7b2ff7]/10 rotate-y-90" style={{ transform: 'rotateY(90deg)' }}></div>
            </motion.div>
        </div>
    </div>
);

const ProductivityVisual = ({ lang }: { lang: Language }) => (
    <div className="relative w-full h-full flex items-center justify-center">
        {/* Speedometer / Graph */}
        <svg viewBox="0 0 200 200" className="w-64 h-64">
             <circle cx="100" cy="100" r="80" stroke="currentColor" strokeWidth="10" strokeOpacity="0.1" fill="none" strokeDasharray="400" strokeDashoffset="100" transform="rotate(135 100 100)" />
             <motion.circle 
                cx="100" cy="100" r="80" 
                stroke="#00f2ff" strokeWidth="10" fill="none" 
                strokeDasharray="502" 
                strokeDashoffset="502"
                strokeLinecap="round"
                transform="rotate(135 100 100)"
                whileInView={{ strokeDashoffset: 100 }}
                viewport={{ once: true }}
                transition={{ duration: 2, ease: "easeOut" }}
             />
             <motion.text x="100" y="110" textAnchor="middle" fill="currentColor" fontSize="40" fontWeight="bold"
                initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 1 }}
             >
                 10x
             </motion.text>
             <text x="100" y="135" textAnchor="middle" fill="currentColor" fontSize="12" opacity="0.5" letterSpacing="2">{UI_TEXT[lang].visuals.speed}</text>
        </svg>
    </div>
);

const HardwareVisual = () => (
    <div className="relative w-full h-full flex items-center justify-center">
        <div className="grid grid-cols-2 gap-4">
            <motion.div className="w-24 h-32 border border-white/20 rounded-lg bg-white/5 relative p-2" whileHover={{ scale: 1.05 }}>
                <div className="absolute top-2 right-2 text-[8px] font-mono text-white/50">RTX 4090</div>
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full border-4 border-[#76b900]/50 animate-spin-slow"></div>
                </div>
            </motion.div>
             <motion.div className="w-24 h-32 border border-white/20 rounded-lg bg-white/5 relative p-2" whileHover={{ scale: 1.05 }}>
                <div className="absolute top-2 right-2 text-[8px] font-mono text-white/50">H100</div>
                 <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full border-4 border-[#76b900] shadow-[0_0_15px_#76b900] animate-pulse"></div>
                </div>
            </motion.div>
        </div>
    </div>
);


const getVisual = (type: string, lang: Language) => {
    switch(type) {
        case 'comparison': return <ComparisonVisual lang={lang} />;
        case 'database': return <DatabaseVisual />;
        case 'graph': return <ProductivityVisual lang={lang} />;
        case 'hardware': return <HardwareVisual />;
        default: return null;
    }
};

interface WhyLocalAIProps {
    lang: Language;
}

const WhyLocalAI: React.FC<WhyLocalAIProps> = ({ lang }) => {
    const data = PRESENTATION_DATA[lang];
    const t = UI_TEXT[lang].whyLocal;

    // We can use a scroll container logic, but sticky positioning is simpler for the "falling" stack effect.
    // The visual effect of "falling from top" is achieved by translation based on viewport entry.

    return (
        <section id="whylocal" className="relative py-20 bg-transparent">
             
            {/* Section Header */}
            <div className="container mx-auto px-6 mb-20">
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-3xl"
                >
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-8 h-[1px] bg-[#00f2ff]"></div>
                        <span className="text-[10px] font-mono font-bold uppercase tracking-[0.4em] text-[#00f2ff]">
                            {t.label}
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-tight mb-6 text-white [.light_&]:text-black">
                        {t.title} <br/><span className="gradient-text">{t.titleHighlight}</span>
                    </h2>
                    <p className="text-white/60 [.light_&]:text-black/60 text-sm md:text-xl leading-relaxed border-l-2 border-white/10 [.light_&]:border-black/10 pl-6">
                        {t.description}
                    </p>
                </motion.div>
            </div>

            {/* Falling Cards Container */}
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col gap-8 md:gap-32">
                    {data.map((item, index) => (
                        <CardItem key={item.id} item={item} index={index} total={data.length} lang={lang} />
                    ))}
                </div>
            </div>

        </section>
    );
};

const CardItem = ({ item, index, total, lang }: { item: any, index: number, total: number, lang: Language }) => {
    // Parallax logic: Elements slide down into view
    // Using simple viewport enter animation for "Falling" feel
    
    return (
        <motion.div 
            className="sticky top-20 md:top-32 w-full h-auto md:h-[600px] rounded-[32px] md:rounded-[48px] overflow-hidden border border-white/10 [.light_&]:border-black/5 shadow-2xl backdrop-blur-3xl hardware-accelerated"
            initial={{ y: -50, opacity: 0, scale: 0.95 }}
            whileInView={{ y: 0, opacity: 1, scale: 1 }}
            viewport={{ margin: "-10% 0px -10% 0px", once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            style={{
                zIndex: index + 1,
                background: `linear-gradient(160deg, var(--panel-bg), rgba(0,0,0,0.8))`, // Ensure contrast
            }}
        >
            {/* Card Content Grid */}
            <div className="grid lg:grid-cols-2 h-full">
                
                {/* Left: Text & Data */}
                <div className="p-6 md:p-12 lg:p-16 flex flex-col justify-center relative">
                    {/* Background Index */}
                    <div className="absolute top-4 left-6 text-[80px] md:text-[120px] font-display font-black text-white/[0.02] [.light_&]:text-black/[0.05] leading-none pointer-events-none select-none">
                        0{index + 1}
                    </div>

                    <div className="relative z-10">
                        <div className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] uppercase tracking-widest text-[#00f2ff] mb-4">
                            {item.subtitle}
                        </div>
                        <h3 className="text-2xl md:text-5xl font-display font-bold text-white [.light_&]:text-black mb-4 md:mb-6">
                            {item.title}
                        </h3>
                        <p className="text-white/60 [.light_&]:text-black/60 text-sm md:text-lg mb-6 md:mb-8 leading-relaxed">
                            {item.description}
                        </p>

                        {/* Comparison Table Specifics */}
                        {item.visualType === 'comparison' && (
                            <div className="space-y-4">
                                {item.features.map((feat: any, i: number) => (
                                    <div key={i} className="grid grid-cols-3 gap-4 text-xs md:text-sm border-b border-white/5 pb-2">
                                        <div className="text-white/40 font-bold uppercase tracking-wider self-center">{feat.name}</div>
                                        <div className="text-red-400 self-center">{feat.cloud}</div>
                                        <div className="text-[#00f2ff] font-bold self-center">{feat.local}</div>
                                    </div>
                                ))}
                            </div>
                        )}

                        {/* Stats Row for others */}
                        {item.visualType !== 'comparison' && item.stats && (
                            <div className="grid grid-cols-2 gap-4 md:gap-6 mt-4">
                                {item.stats.map((stat: any, i: number) => (
                                    <div key={i}>
                                        <div className="text-2xl md:text-4xl font-mono font-bold text-white [.light_&]:text-black">{stat.value}</div>
                                        <div className="text-[10px] uppercase text-white/40 tracking-wider">{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                        )}
                        
                        {/* Tags */}
                        {item.visualType !== 'comparison' && item.features && (
                            <div className="flex flex-wrap gap-2 mt-6 md:mt-8">
                                {item.features.map((f: string, i: number) => (
                                    <span key={i} className="px-3 py-1 rounded-lg bg-white/5 text-[10px] md:text-xs text-white/50 border border-white/5">
                                        {f}
                                    </span>
                                ))}
                            </div>
                        )}
                    </div>
                </div>

                {/* Right: Visual */}
                <div className="relative bg-black/20 [.light_&]:bg-black/5 h-[220px] md:h-auto lg:min-h-full">
                    <div className="absolute inset-0 flex items-center justify-center">
                        {getVisual(item.visualType, lang)}
                    </div>
                    {/* Gradient Overlay for integration */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#02040a] to-transparent lg:bg-gradient-to-l opacity-50 pointer-events-none"></div>
                </div>

            </div>
        </motion.div>
    );
};

export default WhyLocalAI;
