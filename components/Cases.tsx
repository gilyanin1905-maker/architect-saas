import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CASE_STUDIES_DATA, UI_TEXT } from '../constants';
import { Language } from '../types';

// --- Visual Components for Each Industry ---
// NOTE: Added [.light_&] variant classes for specific light mode SVG adjustments

const BankingVisual = () => (
    <div className="relative w-full h-full flex items-center justify-center">
        <svg viewBox="0 0 400 400" className="w-[120%] h-[120%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-80 mix-blend-screen [.light_&]:mix-blend-multiply pointer-events-none">
            <defs>
                 <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="var(--accent-cyan)" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="var(--accent-purple)" stopOpacity="0.8" />
                </linearGradient>
                <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                    <feMerge>
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                </filter>
            </defs>
            
            {/* Animated Frame - Outer Rotating Ring */}
            <motion.circle cx="200" cy="200" r="150" stroke="var(--accent-cyan)" strokeWidth="1" fill="none" strokeDasharray="10 10" opacity="0.3"
                animate={{ rotate: 360 }} transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            />
            
            {/* Animated Frame - Inner Active Ring */}
            <motion.circle cx="200" cy="200" r="130" stroke="var(--accent-purple)" strokeWidth="2" fill="none" strokeDasharray="100 200" strokeLinecap="round" opacity="0.6"
                animate={{ rotate: -360 }} transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            />
            
            {/* Background Halo */}
            <circle cx="200" cy="200" r="100" fill="var(--accent-cyan)" fillOpacity="0.05" filter="blur(20px)" />

            {/* The Dollar Sign Construction */}
            <motion.g 
                initial={{ scale: 0.95 }} 
                animate={{ scale: [0.95, 1.05, 0.95] }} 
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
                {/* Vertical Line */}
                <motion.path 
                    d="M200 80 V320" 
                    stroke="var(--accent-cyan)" strokeWidth="6" strokeLinecap="round" 
                    filter="url(#glow)"
                    initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.5 }}
                />

                {/* S Shape - Cleaner Symmetric Path */}
                <motion.path 
                    d="M 240 130 C 240 80, 160 80, 160 140 C 160 200, 240 200, 240 260 C 240 320, 160 320, 160 270"
                    fill="none"
                    stroke="url(#goldGrad)" strokeWidth="14" strokeLinecap="round"
                    filter="url(#glow)"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, ease: "easeInOut", delay: 0.5 }}
                />
            </motion.g>
        </svg>
    </div>
);

const TelecomVisual = () => (
     <div className="relative w-full h-full flex items-center justify-center">
        <svg viewBox="0 0 400 400" className="w-[120%] h-[120%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-80 mix-blend-screen [.light_&]:mix-blend-multiply pointer-events-none">
            {/* Central Transmission Hub */}
            <circle cx="200" cy="200" r="20" fill="var(--accent-cyan)" fillOpacity="0.2" stroke="var(--accent-cyan)" strokeWidth="2" />
            
            {/* Concentric Signal Waves (High Frequency) */}
            {[0, 1, 2, 3].map((i) => (
                <motion.circle key={i} cx="200" cy="200" r="30" stroke="var(--accent-purple)" strokeWidth="2" fill="none"
                    animate={{ r: [30, 200], opacity: [0.8, 0], strokeWidth: [2, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.5, ease: "linear" }}
                />
            ))}

            {/* Digital Data Streams (Orbiting Satellites/Nodes) */}
            {[0, 120, 240].map((deg, i) => {
                 return (
                    <motion.g key={i} animate={{ rotate: 360 }} transition={{ duration: 8, repeat: Infinity, ease: "linear", delay: i }} style={{ originX: "200px", originY: "200px" }}>
                        <line x1="200" y1="200" x2="200" y2="80" stroke="var(--accent-cyan)" strokeWidth="1" strokeOpacity="0.3" strokeDasharray="4 4" />
                        <circle cx="200" cy="80" r="6" fill="currentColor" stroke="var(--accent-cyan)" strokeWidth="2" />
                    </motion.g>
                 )
            })}
        </svg>
    </div>
);

const EcomVisual = () => (
    <div className="relative w-full h-full flex items-center justify-center">
         <svg viewBox="0 0 400 400" className="w-[120%] h-[120%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-80 mix-blend-screen [.light_&]:mix-blend-multiply pointer-events-none">
            {/* Grid Background */}
            <path d="M50 350 H350 M50 300 H350 M50 250 H350 M50 200 H350 M50 150 H350" stroke="currentColor" strokeWidth="1" strokeOpacity="0.1" />
            <path d="M50 350 V100 M100 350 V100 M150 350 V100 M200 350 V100 M250 350 V100 M300 350 V100 M350 350 V100" stroke="currentColor" strokeWidth="1" strokeOpacity="0.1" />
            
            {/* Axes */}
            <path d="M50 50 V350 H380" stroke="var(--accent-cyan)" strokeWidth="2" />

            {/* Rising Bar Chart */}
            {[0, 1, 2, 3, 4, 5].map((i) => {
                const height = 50 + i * 40;
                return (
                    <motion.rect key={i} 
                        x={70 + i * 50} y={350} width="30" height="0" 
                        fill="var(--accent-purple)" fillOpacity="0.3" stroke="var(--accent-purple)" strokeWidth="1"
                        animate={{ height: height, y: 350 - height }}
                        transition={{ duration: 1.5, delay: i * 0.2, ease: "easeOut" }}
                    />
                )
            })}

            {/* Growth Line Chart */}
            <motion.path 
                d="M70 300 L120 280 L170 200 L220 220 L270 150 L320 80" 
                fill="none" stroke="var(--accent-cyan)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, ease: "easeInOut", delay: 0.5 }}
            />
            
            {/* Peak Indicator */}
            <motion.g 
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 2.5, duration: 0.5 }}
            >
                <circle cx="320" cy="80" r="6" fill="currentColor" />
                <circle cx="320" cy="80" r="15" stroke="var(--accent-cyan)" strokeWidth="1" strokeOpacity="0.5" />
                <text x="340" y="80" fill="var(--accent-cyan)" fontSize="14" fontWeight="bold">+400%</text>
            </motion.g>
         </svg>
    </div>
);

const GamedevVisual = () => (
    <div className="relative w-full h-full flex items-center justify-center">
         <svg viewBox="0 0 400 400" className="w-[120%] h-[120%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-80 mix-blend-screen [.light_&]:mix-blend-multiply pointer-events-none">
             
             <motion.g animate={{ y: [-5, 5, -5] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}>
                {/* Controller Body Shape */}
                <path 
                    d="M100 180 C100 130, 140 130, 160 150 L240 150 C260 130, 300 130, 300 180 C300 230, 280 260, 250 260 L150 260 C120 260, 100 230, 100 180 Z" 
                    fill="none" stroke="var(--accent-cyan)" strokeWidth="3" 
                    filter="drop-shadow(0 0 5px var(--accent-cyan))"
                />
                
                {/* D-Pad (Left) */}
                <path d="M140 170 V190 M130 180 H150" stroke="var(--accent-purple)" strokeWidth="8" strokeLinecap="round" />
                
                {/* Action Buttons (Right) - Animated */}
                <g transform="translate(260, 180)">
                    <motion.circle cx="0" cy="-12" r="4" fill="var(--accent-purple)" animate={{ opacity: [1, 0.5, 1] }} transition={{ duration: 0.5, repeat: Infinity, delay: 0 }} />
                    <motion.circle cx="12" cy="0" r="4" fill="var(--accent-cyan)" animate={{ opacity: [1, 0.5, 1] }} transition={{ duration: 0.5, repeat: Infinity, delay: 0.2 }} />
                    <motion.circle cx="0" cy="12" r="4" fill="currentColor" animate={{ opacity: [1, 0.5, 1] }} transition={{ duration: 0.5, repeat: Infinity, delay: 0.4 }} />
                    <motion.circle cx="-12" cy="0" r="4" fill="var(--accent-purple)" animate={{ opacity: [1, 0.5, 1] }} transition={{ duration: 0.5, repeat: Infinity, delay: 0.6 }} />
                </g>

                {/* Joysticks */}
                {/* Left Stick - Moving */}
                <motion.circle cx="170" cy="220" r="12" stroke="var(--accent-cyan)" strokeWidth="2" fill="none"
                    animate={{ cx: [170, 175, 165, 170], cy: [220, 215, 225, 220] }}
                    transition={{ duration: 1, repeat: Infinity, repeatType: "mirror" }}
                />
                <circle cx="170" cy="220" r="4" fill="var(--accent-cyan)" />

                {/* Right Stick */}
                <circle cx="230" cy="220" r="12" stroke="var(--accent-cyan)" strokeWidth="2" fill="none" />
                <circle cx="230" cy="220" r="4" fill="var(--accent-cyan)" />
             </motion.g>

             {/* Connection Wire / Wireless Signal */}
             <motion.path 
                d="M200 130 V50" 
                stroke="var(--accent-purple)" strokeWidth="2" strokeDasharray="4 4"
                animate={{ strokeDashoffset: [0, -20] }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
             />
             <motion.circle cx="200" cy="50" r="5" fill="var(--accent-purple)" 
                animate={{ scale: [1, 1.5, 1], opacity: [1, 0, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
             />
         </svg>
    </div>
);

const PharmaVisual = () => (
    <div className="relative w-full h-full flex items-center justify-center">
         <svg viewBox="0 0 400 400" className="w-[120%] h-[120%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-60 mix-blend-screen [.light_&]:mix-blend-multiply pointer-events-none">
            {/* DNA Helix Construction */}
             {[...Array(20)].map((_, i) => {
                 const y = 100 + i * 10;
                 return (
                     <g key={i}>
                        <motion.circle r="3" fill="var(--accent-cyan)"
                            cx="160"
                            animate={{ cx: [160, 240, 160], opacity: [0.5, 1, 0.5] }}
                            transition={{ duration: 2, repeat: Infinity, delay: i * 0.1, ease: "easeInOut" }}
                            cy={y}
                        />
                        <motion.circle r="3" fill="var(--accent-purple)"
                            cx="240"
                            animate={{ cx: [240, 160, 240], opacity: [0.5, 1, 0.5] }}
                            transition={{ duration: 2, repeat: Infinity, delay: i * 0.1, ease: "easeInOut" }}
                            cy={y}
                        />
                        <motion.line stroke="currentColor" strokeWidth="1" strokeOpacity="0.2"
                             animate={{ x1: [160, 240, 160], x2: [240, 160, 240] }}
                             transition={{ duration: 2, repeat: Infinity, delay: i * 0.1, ease: "easeInOut" }}
                             y1={y} y2={y}
                        />
                     </g>
                 )
             })}
         </svg>
    </div>
);

const EducationVisual = () => (
    <div className="relative w-full h-full flex items-center justify-center">
         <svg viewBox="0 0 400 400" className="w-[120%] h-[120%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-80 mix-blend-screen [.light_&]:mix-blend-multiply pointer-events-none">
            
            {/* Blackboard Frame */}
            <rect x="60" y="80" width="280" height="180" rx="4" fill="var(--bg-main)" stroke="var(--accent-purple)" strokeWidth="4" />
            <rect x="70" y="260" width="260" height="10" fill="var(--accent-purple)" opacity="0.5" />

            {/* Content on Board */}
            <motion.path 
                d="M80 200 Q 150 150 200 200 T 320 150" 
                fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="5 5" opacity="0.5"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
            />
            
             <motion.text x="90" y="130" fill="var(--accent-cyan)" fontSize="16" fontFamily="monospace"
                initial={{ opacity: 0 }} animate={{ opacity: [0, 1, 1, 0] }} transition={{ duration: 4, repeat: Infinity }}
            >
                E = mc²
            </motion.text>
             <motion.text x="250" y="130" fill="var(--accent-cyan)" fontSize="16" fontFamily="monospace"
                initial={{ opacity: 0 }} animate={{ opacity: [0, 1, 1, 0] }} transition={{ duration: 4, repeat: Infinity, delay: 1 }}
            >
                {"x -> ∞"}
            </motion.text>
             <motion.text x="90" y="240" fill="currentColor" fontSize="12" fontFamily="monospace" opacity="0.7"
                initial={{ opacity: 0 }} animate={{ opacity: [0, 1, 1, 0] }} transition={{ duration: 4, repeat: Infinity, delay: 2 }}
            >
                function learn()
            </motion.text>

         </svg>
    </div>
);

// Switcher Component
const CaseVisual = ({ industry }: { industry: string }) => {
    switch(industry) {
        case 'Banking': return <BankingVisual />;
        case 'Telecom': return <TelecomVisual />;
        case 'E-com': return <EcomVisual />;
        case 'Gamedev': return <GamedevVisual />;
        case 'Pharma': return <PharmaVisual />;
        case 'Education': return <EducationVisual />;
        default: return <BankingVisual />;
    }
}

// --- Main Component ---

interface CasesProps {
  lang: Language;
}

const Cases: React.FC<CasesProps> = ({ lang }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const cases = CASE_STUDIES_DATA[lang];
  const t = UI_TEXT[lang].cases;
  const activeCase = cases[activeIndex];

  // Handler for navigation arrows
  const handleNext = () => setActiveIndex((prev) => (prev + 1) % cases.length);
  const handlePrev = () => setActiveIndex((prev) => (prev - 1 + cases.length) % cases.length);

  return (
    <section id="cases" className="py-8 md:py-32 w-full relative overflow-hidden flex flex-col justify-center">
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        {/* Header Section */}
        <motion.div 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-6 md:mb-16"
        >
            <h2 className="text-2xl md:text-5xl lg:text-6xl font-display font-bold mb-2 md:mb-4 leading-tight">
                {t.title} <span className="gradient-text">{t.titleHighlight}</span>
            </h2>
            <p className="text-white/60 text-xs md:text-xl font-light max-w-2xl mx-auto hidden md:block">
                {t.subtitle}
            </p>
        </motion.div>

        {/* Industry Tabs (Pills) */}
        {/* FIX: justify-start for mobile scroll, center for desktop */}
        <div className="flex justify-start md:justify-center mb-6 md:mb-14 overflow-x-auto pb-4 no-scrollbar -mx-4 px-4 md:mx-0 md:px-0">
            <div className="flex gap-2 p-1 glass rounded-full border-white/10 [.light_&]:border-black/5 min-w-max">
                {cases.map((item, index) => (
                    <button
                        key={item.id}
                        onClick={() => setActiveIndex(index)}
                        className={`px-4 py-2 md:px-6 md:py-2.5 rounded-full text-[10px] md:text-sm font-bold uppercase tracking-wider transition-all whitespace-nowrap
                            ${activeIndex === index 
                                ? 'bg-white [.light_&]:bg-black text-black [.light_&]:text-white shadow-[0_0_20px_rgba(255,255,255,0.3)]' 
                                : 'text-white/40 hover:text-white hover:bg-white/5'
                            }
                        `}
                    >
                        {item.industry}
                    </button>
                ))}
            </div>
        </div>

        {/* Main Content Area - Split Layout */}
        <div className="relative max-w-7xl mx-auto">
            
            {/* Navigation Arrows (Desktop: Outside) */}
            <button onClick={handlePrev} className="hidden lg:flex absolute top-1/2 -left-16 -translate-y-1/2 w-12 h-12 rounded-full border border-white/10 [.light_&]:border-black/10 items-center justify-center text-white/40 hover:text-white hover:bg-white/5 transition-colors z-20">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m15 18-6-6 6-6"/></svg>
            </button>
            <button onClick={handleNext} className="hidden lg:flex absolute top-1/2 -right-16 -translate-y-1/2 w-12 h-12 rounded-full border border-white/10 [.light_&]:border-black/10 items-center justify-center text-white/40 hover:text-white hover:bg-white/5 transition-colors z-20">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m9 18 6-6-6-6"/></svg>
            </button>

            <AnimatePresence mode='wait'>
                <motion.div 
                    key={activeCase.id}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="grid lg:grid-cols-12 gap-4 md:gap-6 h-auto lg:h-[600px]"
                >
                    
                    {/* LEFT CARD: Brand & Visual */}
                    <div className="lg:col-span-8 relative rounded-[32px] md:rounded-[40px] overflow-hidden border border-white/10 [.light_&]:border-black/5 bg-[#050816] [.light_&]:bg-white group min-h-[300px] md:min-h-0 flex flex-col">
                         {/* Background Gradient */}
                         <div className="absolute inset-0 bg-gradient-to-br from-[#00f2ff]/5 to-[#7b2ff7]/5 opacity-50 group-hover:opacity-100 transition-opacity duration-700"></div>
                         
                         {/* Content Container */}
                         <div className="relative z-20 h-full p-6 md:p-12 flex flex-col justify-between">
                            
                            {/* Top Label */}
                            <div className="flex justify-between items-start">
                                <div>
                                    <div className="text-sm md:text-2xl font-display font-bold text-white/30 mb-1">Architect AI</div>
                                    <h3 className="text-3xl md:text-6xl lg:text-7xl font-display font-black text-white leading-[0.9] tracking-tighter">
                                        {activeCase.industry} <br />
                                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f2ff] to-[#7b2ff7] italic pr-2">{t.visualText}</span>
                                    </h3>
                                </div>
                            </div>

                            {/* Middle Visual (Absolute Centered roughly) - OPTIMIZED FOR MOBILE */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:top-0 md:left-auto md:right-[-10%] md:translate-x-0 md:translate-y-0 h-[200px] w-[200px] md:h-full md:w-[60%] pointer-events-none z-10 mix-blend-lighten [.light_&]:mix-blend-normal opacity-40 md:opacity-100">
                                <CaseVisual industry={activeCase.industry} />
                            </div>

                            {/* Bottom Description */}
                            <div className="relative z-20 max-w-md mt-24 md:mt-20 lg:mt-0">
                                <p className="text-sm md:text-lg text-white/80 leading-relaxed font-light border-l-2 border-[#00f2ff] pl-4 md:pl-6 bg-black/40 md:bg-transparent backdrop-blur-sm md:backdrop-blur-none p-2 md:p-0 rounded-r-lg md:rounded-none">
                                    {activeCase.description}
                                </p>
                                
                                <div className="flex flex-wrap gap-2 mt-4 md:mt-6">
                                    {activeCase.tags.map((tag, i) => (
                                        <span key={i} className="px-2 py-1 md:px-3 md:py-1 bg-white/5 [.light_&]:bg-black/5 rounded-lg text-[10px] md:text-xs font-mono text-white/50 border border-white/5 [.light_&]:border-black/5">
                                            #{tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                         </div>
                    </div>

                    {/* RIGHT CARD: Features List */}
                    <div className="lg:col-span-4 rounded-[32px] md:rounded-[40px] border border-white/10 [.light_&]:border-black/5 bg-[#0a0c1a] [.light_&]:bg-white p-6 md:p-10 flex flex-col relative overflow-hidden">
                        {/* Subtle Grid BG */}
                        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>

                        <div className="relative z-10 mb-4 md:mb-8">
                            <h4 className="text-xs md:text-sm font-bold uppercase tracking-[0.2em] text-white/40 mb-2">{t.featuresTitle}</h4>
                            <div className="w-8 md:w-12 h-1 bg-[#7b2ff7] rounded-full"></div>
                        </div>

                        <div className="relative z-10 flex-1 space-y-4 md:space-y-8">
                            {activeCase.featuresList?.map((feature, i) => (
                                <motion.div 
                                    key={i}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.2 + (i * 0.1) }}
                                >
                                    <h5 className="text-sm md:text-lg font-bold text-white mb-1 md:mb-2">{feature.title}</h5>
                                    <p className="text-xs md:text-sm text-white/50 leading-relaxed">
                                        {feature.description}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                        
                        {/* Mobile Nav Arrows (Inside card for mobile) */}
                        <div className="flex lg:hidden gap-4 mt-6 md:mt-8 pt-4 md:pt-6 border-t border-white/5 justify-end">
                            <button onClick={handlePrev} className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center active:bg-white/10"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m15 18-6-6 6-6"/></svg></button>
                            <button onClick={handleNext} className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center active:bg-white/10"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m9 18 6-6-6-6"/></svg></button>
                        </div>
                    </div>

                </motion.div>
            </AnimatePresence>
        </div>

      </div>
    </section>
  );
};

export default Cases;
