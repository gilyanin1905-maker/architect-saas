
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROCESS_STEPS_DATA, UI_TEXT } from '../constants';
import { Language } from '../types';

// --- Custom Animated Icons ---

const AuditIcon = () => (
  <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <motion.rect x="10" y="10" width="40" height="40" rx="4" stroke="var(--accent-cyan)" strokeWidth="2" strokeOpacity="0.5" />
    <motion.path d="M15 20H45" stroke="var(--accent-cyan)" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.3" />
    <motion.path d="M15 30H45" stroke="var(--accent-cyan)" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.3" />
    <motion.path d="M15 40H30" stroke="var(--accent-cyan)" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.3" />
    
    {/* Scanning Line */}
    <motion.rect 
      x="8" y="10" width="44" height="2" fill="var(--accent-cyan)"
      animate={{ y: [0, 40, 0], opacity: [0, 1, 0] }}
      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
    />
    
    {/* Magnifying Glass */}
    <motion.g animate={{ x: [0, 10, 0], y: [0, 10, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}>
      <circle cx="40" cy="40" r="12" stroke="currentColor" strokeWidth="2" fill="rgba(128,128,128,0.2)" />
      <path d="M49 49L55 55" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </motion.g>
  </svg>
);

const ArchitectureIcon = () => (
  <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Base Layer */}
    <motion.path d="M10 40L30 50L50 40L30 30L10 40Z" stroke="var(--accent-purple)" strokeWidth="2" fill="var(--accent-purple)" fillOpacity="0.1"
      animate={{ y: [0, 2, 0] }} transition={{ duration: 3, repeat: Infinity }}
    />
    {/* Mid Layer */}
    <motion.path d="M10 30L30 40L50 30L30 20L10 30Z" stroke="var(--accent-cyan)" strokeWidth="2" fill="var(--accent-cyan)" fillOpacity="0.1"
      animate={{ y: [0, -2, 0] }} transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
    />
    {/* Top Layer */}
    <motion.path d="M10 20L30 30L50 20L30 10L10 20Z" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.1"
      animate={{ y: [0, -5, 0] }} transition={{ duration: 3, repeat: Infinity, delay: 1 }}
    />
    {/* Connection Line */}
    <motion.path d="M30 10V50" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" strokeOpacity="0.3" />
  </svg>
);

const BrainIcon = () => (
  <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="brainGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="var(--accent-cyan)" stopOpacity="0.2"/>
        <stop offset="100%" stopColor="var(--accent-purple)" stopOpacity="0.2"/>
      </linearGradient>
    </defs>
    
    {/* Brain Hemispheres */}
    <path d="M28 15C18 15 12 22 12 32C12 42 20 48 28 48V15Z" stroke="var(--accent-cyan)" strokeWidth="1.5" fill="url(#brainGrad)" />
    <path d="M32 15C42 15 48 22 48 32C48 42 40 48 32 48V15Z" stroke="var(--accent-purple)" strokeWidth="1.5" fill="url(#brainGrad)" />
    
    {/* Data Flow between Hemispheres */}
    {[18, 24, 30, 36, 42].map((y, i) => (
      <motion.rect 
        key={i}
        x="28" y={y} width="4" height="1" fill="currentColor"
        animate={{ opacity: [0.2, 1, 0.2], width: [4, 8, 4], x: [28, 26, 28] }}
        transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2, ease: "linear" }}
      />
    ))}

    {/* Active Neurons */}
    <motion.circle cx="20" cy="25" r="2" fill="var(--accent-cyan)" animate={{ scale: [1, 2, 1], opacity: [1, 0, 1] }} transition={{ duration: 2, repeat: Infinity }} />
    <motion.circle cx="40" cy="35" r="2" fill="var(--accent-purple)" animate={{ scale: [1, 2, 1], opacity: [1, 0, 1] }} transition={{ duration: 2.5, repeat: Infinity, delay: 1 }} />
    <motion.circle cx="24" cy="40" r="1.5" fill="currentColor" animate={{ scale: [1, 1.5, 1] }} transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }} />
    
    {/* Tuning Knob/Gear overlay */}
    <motion.g style={{ originX: "50px", originY: "50px" }} animate={{ rotate: 360 }} transition={{ duration: 10, repeat: Infinity, ease: "linear" }}>
      <circle cx="50" cy="50" r="8" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" opacity="0.2" />
      <path d="M50 44V46M50 54V56M44 50H46M54 50H56" stroke="var(--accent-cyan)" strokeWidth="1.5" />
      <circle cx="50" cy="50" r="3" fill="var(--accent-cyan)" opacity="0.5" />
    </motion.g>
  </svg>
);

const IntegrationIcon = () => (
  <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Central Hexagon */}
    <path d="M30 22L37 26V34L30 38L23 34V26L30 22Z" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.1" />

    {/* Connecting Lines */}
    <path d="M30 22V10" stroke="var(--accent-cyan)" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M37 26L47 20" stroke="var(--accent-cyan)" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M37 34L47 40" stroke="var(--accent-cyan)" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M30 38V50" stroke="var(--accent-cyan)" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M23 34L13 40" stroke="var(--accent-cyan)" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M23 26L13 20" stroke="var(--accent-cyan)" strokeWidth="1.5" strokeLinecap="round" />

    {/* External Nodes */}
    {[
        { cx: 30, cy: 10, delay: 0 },
        { cx: 47, cy: 20, delay: 0.2 },
        { cx: 47, cy: 40, delay: 0.4 },
        { cx: 30, cy: 50, delay: 0.6 },
        { cx: 13, cy: 40, delay: 0.8 },
        { cx: 13, cy: 20, delay: 1.0 }
    ].map((node, i) => (
         <motion.circle 
            key={i} 
            cx={node.cx} 
            cy={node.cy} 
            r="3" 
            fill="var(--accent-purple)" 
            animate={{ scale: [1, 1.5, 1], fill: ["var(--accent-purple)", "var(--accent-cyan)", "var(--accent-purple)"] }} 
            transition={{ duration: 2, repeat: Infinity, delay: node.delay }} 
        />
    ))}

    {/* Pulse - Top */}
    <motion.circle r="2" fill="currentColor" 
        animate={{ cx: [30, 30], cy: [22, 10], opacity: [0, 1, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
    />
    
    {/* Pulse - Bottom Right */}
    <motion.circle r="2" fill="currentColor" 
        animate={{ cx: [37, 47], cy: [34, 40], opacity: [0, 1, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, delay: 0.5, ease: "linear" }}
    />
    
    {/* Pulse - Top Left */}
    <motion.circle r="2" fill="currentColor" 
        animate={{ cx: [23, 13], cy: [26, 20], opacity: [0, 1, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, delay: 1, ease: "linear" }}
    />

    {/* Rotating Ring */}
    <motion.circle cx="30" cy="30" r="18" stroke="var(--accent-cyan)" strokeWidth="1" strokeDasharray="2 4" strokeOpacity="0.5"
       animate={{ rotate: 360 }}
       transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
    />
  </svg>
);

const SupportIcon = () => (
  <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Shield Container */}
    <path d="M30 55L12 45V18L30 8L48 18V45L30 55Z" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.2" fill="currentColor" fillOpacity="0.05" />
    
    {/* Inner Active Shield */}
    <motion.path 
      d="M30 52L15 43V20L30 11L45 20V43L30 52Z" 
      stroke="var(--accent-cyan)" strokeWidth="1.5" 
      fill="none"
      animate={{ strokeOpacity: [0.2, 1, 0.2] }}
      transition={{ duration: 3, repeat: Infinity }}
    />

    {/* Life Line Graph */}
    <path d="M18 30H24L27 24L33 36L36 30H42" stroke="var(--accent-purple)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.3" />
    <motion.path 
      d="M18 30H24L27 24L33 36L36 30H42" 
      stroke="var(--accent-cyan)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: [0, 1, 0], opacity: [1, 1, 0] }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
    />

    {/* Rotating Scan Element */}
    <motion.circle cx="30" cy="30" r="18" stroke="currentColor" strokeWidth="1" strokeDasharray="1 6" strokeOpacity="0.3"
      animate={{ rotate: 360 }}
      transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
    />
    
    {/* Status Dot */}
    <motion.circle cx="30" cy="15" r="2" fill="#00ff88" 
      animate={{ opacity: [0.4, 1, 0.4] }}
      transition={{ duration: 1, repeat: Infinity }}
    />
  </svg>
);

const techBrands = [
  "VS Code", "Claude Code", "Koda", "Ollama", "LangChain", 
  "PyTorch", "Hugging Face", "Docker", "Kubernetes", 
  "vLLM", "Cursor", "NVIDIA", "FastAPI", "React", "LlamaIndex"
];

// Helper to get visual background based on step ID
const getStepVisual = (id: string) => {
    switch(id) {
        case '01': return (
            <div className="absolute inset-0 overflow-hidden opacity-20 pointer-events-none">
                {[...Array(5)].map((_, i) => (
                    <motion.div 
                        key={i}
                        className="absolute top-0 w-[1px] bg-gradient-to-b from-transparent via-[#00f2ff] to-transparent h-full"
                        style={{ left: `${20 + i * 15}%` }}
                        animate={{ y: [-200, 400], opacity: [0, 1, 0] }}
                        transition={{ duration: 2 + i, repeat: Infinity, ease: "linear" }}
                    />
                ))}
            </div>
        );
        case '02': return (
            <div className="absolute inset-0 overflow-hidden opacity-10 pointer-events-none">
                <svg width="100%" height="100%">
                    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5"/>
                    </pattern>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
            </div>
        );
        case '03': return (
            <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none">
                <motion.div 
                    className="w-64 h-64 bg-[#7b2ff7] rounded-full blur-[80px]"
                    animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
                    transition={{ duration: 4, repeat: Infinity }}
                />
            </div>
        );
        case '04': return (
             <div className="absolute inset-0 overflow-hidden opacity-20 pointer-events-none">
                 {[...Array(6)].map((_, i) => (
                     <motion.div 
                        key={i}
                        className="absolute w-2 h-2 rounded-full bg-white"
                        style={{ top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%` }}
                        animate={{ scale: [0, 1, 0], opacity: [0, 1, 0] }}
                        transition={{ duration: 2 + Math.random(), repeat: Infinity }}
                     />
                 ))}
             </div>
        );
        case '05': return (
             <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
                 <motion.div 
                    className="absolute w-full h-[2px] bg-[#00f2ff]"
                    animate={{ rotate: 360 }}
                    style={{ width: '150%' }}
                    transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                 />
                 <div className="absolute inset-0 border border-[#00f2ff]/20 rounded-full scale-150"></div>
             </div>
        );
        default: return null;
    }
}

const getIcon = (id: string) => {
    switch(id) {
        case '01': return <AuditIcon />;
        case '02': return <ArchitectureIcon />;
        case '03': return <BrainIcon />;
        case '04': return <IntegrationIcon />;
        case '05': return <SupportIcon />;
        default: return <AuditIcon />;
    }
}


interface ProcessProps {
    theme: 'dark' | 'light';
    lang: Language;
}

const Process: React.FC<ProcessProps> = ({ theme, lang }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const stepsData = PROCESS_STEPS_DATA[lang];
  const t = UI_TEXT[lang].process;

  const startTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % stepsData.length);
    }, 3000);
  };

  useEffect(() => {
    if (!isPaused) {
      startTimer();
    } else {
      if (timerRef.current) clearInterval(timerRef.current);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, stepsData.length]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % stepsData.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + stepsData.length) % stepsData.length);
  };

  return (
    <section className="py-8 md:py-24 w-full relative overflow-hidden flex flex-col justify-center min-h-[100dvh]">
      
      <div className="container mx-auto px-6 mt-0">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          
          {/* Left Column: Card Stack */}
          <div 
            className="relative h-[280px] md:h-[450px] w-full max-w-sm md:max-w-md mx-auto lg:mx-0 perspective-1000 order-2 lg:order-1"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={() => setIsPaused(true)}
            onTouchEnd={() => setIsPaused(false)}
          >
            <AnimatePresence mode='popLayout'>
              {stepsData.map((step, index) => {
                // Calculate position relative to current index
                const offset = (index - currentIndex + stepsData.length) % stepsData.length;
                
                // Only render the top 3 cards for performance and visual clarity
                if (offset > 2 && offset !== stepsData.length - 1) return null;

                const isFront = offset === 0;
                
                return (
                  <motion.div
                    key={step.id}
                    layout
                    initial={false}
                    animate={{
                      scale: isFront ? 1 : 1 - offset * 0.05,
                      y: isFront ? 0 : offset * 25,
                      z: isFront ? 100 : 100 - offset * 10,
                      opacity: isFront ? 1 : 1 - offset * 0.3,
                      rotateX: isFront ? 0 : 5,
                    }}
                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                    className={`absolute top-0 left-0 w-full h-full glass rounded-[24px] md:rounded-[40px] p-5 md:p-10 flex flex-col justify-between border border-white/10 shadow-2xl ${isFront ? 'z-50' : 'z-0'} overflow-hidden`}
                    style={{ 
                        transformOrigin: "top center",
                        boxShadow: isFront ? '0 25px 50px -12px rgba(0, 0, 0, 0.5)' : 'none',
                        // Override glass background specifically for this card stack effect based on theme
                        background: theme === 'dark' 
                            ? 'linear-gradient(145deg, rgba(2, 4, 10, 0.98) 0%, rgba(10, 10, 20, 0.98) 100%)'
                            : 'linear-gradient(145deg, rgba(255, 255, 255, 0.98) 0%, rgba(240, 249, 255, 0.98) 100%)',
                        backdropFilter: 'blur(40px)'
                    }}
                  >
                    {/* Living Background */}
                    {getStepVisual(step.id)}

                    <div className="relative z-10 flex justify-between items-start">
                      <div className="p-2 md:p-4 glass rounded-2xl bg-white/5 border-white/10 scale-75 md:scale-100 origin-top-left">
                        {getIcon(step.id)}
                      </div>
                      <div className="text-3xl md:text-6xl font-display font-black text-white/5 select-none">
                        {step.id}
                      </div>
                    </div>

                    <div className="space-y-2 md:space-y-4 relative z-10">
                      <h3 className="text-xl md:text-3xl font-display font-bold" style={{ color: 'var(--accent-cyan)' }}>
                        {step.title}
                      </h3>
                      <p className="text-[10px] md:text-sm text-white/70 leading-relaxed font-light">
                        {step.description}
                      </p>
                    </div>

                    {/* Progress Bar inside card */}
                    {isFront && !isPaused && (
                         <div className="relative z-10 w-full h-1 bg-white/5 rounded-full mt-3 md:mt-6 overflow-hidden">
                             <motion.div 
                                className="h-full"
                                style={{ backgroundColor: 'var(--accent-cyan)' }}
                                initial={{ width: "0%" }}
                                animate={{ width: "100%" }}
                                transition={{ duration: 3, ease: "linear" }}
                             />
                         </div>
                    )}
                  </motion.div>
                );
              })}
            </AnimatePresence>

            {/* Controls (Visible on Hover/Touch) */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: isPaused ? 1 : 0 }}
              className="absolute -bottom-16 left-0 w-full flex justify-center gap-4 z-50"
            >
                <button 
                    onClick={handlePrev}
                    className="w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-white/10 active:scale-95 transition-all text-white/70 hover:text-[#00f2ff]"
                    aria-label="Previous step"
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m15 18-6-6 6-6"/></svg>
                </button>
                <button 
                    onClick={handleNext}
                    className="w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-white/10 active:scale-95 transition-all text-white/70 hover:text-[#00f2ff]"
                    aria-label="Next step"
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m9 18 6-6-6-6"/></svg>
                </button>
            </motion.div>
          </div>

          {/* Right Column: Context */}
          <div className="text-center lg:text-left space-y-4 md:space-y-8 order-1 lg:order-2">
             <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
             >
                <div className="text-[8px] md:text-[10px] font-mono font-bold uppercase tracking-[0.5em] mb-2 md:mb-4" style={{ color: 'var(--accent-purple)' }}>{t.workflow}</div>
                <h2 className="text-3xl md:text-4xl lg:text-7xl font-display font-bold leading-tight">
                    {t.title} <br/><span className="gradient-text">{t.titleHighlight}</span>
                </h2>
                <p className="text-white/40 mt-4 md:mt-8 text-xs md:text-lg font-light leading-relaxed max-w-lg mx-auto lg:mx-0">
                    {t.description}
                </p>

                <div className="flex flex-wrap gap-2 md:gap-3 mt-4 md:mt-8 justify-center lg:justify-start">
                    {t.tags.map((tag, i) => (
                        <span key={i} className="px-3 py-1 md:px-4 md:py-1.5 rounded-full border border-white/5 bg-white/[0.02] text-[9px] md:text-[10px] uppercase tracking-widest text-white/30">
                            {tag}
                        </span>
                    ))}
                </div>
             </motion.div>
          </div>

        </div>
      </div>

      {/* Tech Ticker Marquee - Bottom */}
      <div 
        className="absolute bottom-[20px] md:bottom-[50px] left-[20px] md:left-[50px] right-[20px] md:right-[50px] overflow-hidden py-4 border-y border-white/5 bg-transparent z-20 rounded-xl"
        style={{
             maskImage: 'linear-gradient(to right, transparent, black 50px, black calc(100% - 50px), transparent)',
             WebkitMaskImage: 'linear-gradient(to right, transparent, black 50px, black calc(100% - 50px), transparent)'
        }}
      >
        <motion.div 
          className="flex gap-8 md:gap-16 whitespace-nowrap"
          animate={{ x: [0, -1000] }}
          transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
        >
          {[...techBrands, ...techBrands, ...techBrands].map((brand, i) => (
            <span key={i} className="text-xs md:text-sm font-mono font-bold text-white/50 uppercase tracking-widest flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: 'var(--accent-cyan)', opacity: 0.5 }}></span>
              {brand}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Process;
