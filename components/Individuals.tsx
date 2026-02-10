
import React from 'react';
import { motion } from 'framer-motion';
import { INDIVIDUALS_DATA, UI_TEXT } from '../constants';
import { Language } from '../types';

// --- Visual Components ---

// 1. Mind Coach - "Neural Alignment" (Sacred Cyber-Geometry)
const CoachVisual = () => (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
        <svg viewBox="0 0 400 400" className="w-[100%] h-[100%] overflow-visible hardware-accelerated">
            <defs>
                <filter id="glow-coach" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                    <feMerge>
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                </filter>
                <linearGradient id="coachGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="var(--accent-cyan)" />
                    <stop offset="100%" stopColor="var(--accent-purple)" />
                </linearGradient>
            </defs>

            <g transform="translate(200, 200)">
                
                {/* 1. Background Pulse (Breathing Mind) */}
                <motion.circle 
                    r="80" fill="var(--accent-cyan)" fillOpacity="0.05"
                    animate={{ scale: [1, 1.5, 1], opacity: [0.1, 0, 0.1] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.circle 
                    r="120" fill="var(--accent-purple)" fillOpacity="0.05"
                    animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0, 0.1] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                />

                {/* 2. Outer Progress Rings (Habits/Cycles) */}
                <motion.circle 
                    r="140" fill="none" stroke="var(--accent-cyan)" strokeWidth="1" strokeOpacity="0.3" strokeDasharray="10 20"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                />
                <motion.circle 
                    r="130" fill="none" stroke="var(--accent-purple)" strokeWidth="2" strokeOpacity="0.2" strokeDasharray="100 400" strokeLinecap="round"
                    animate={{ rotate: -360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                />

                {/* 3. The Merkaba (Star of David) - Balance of Logic & Emotion */}
                <motion.g animate={{ rotate: 360 }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }}>
                    {/* Triangle Up */}
                    <motion.path 
                        d="M0 -90 L78 45 L-78 45 Z" 
                        fill="none" stroke="url(#coachGrad)" strokeWidth="2"
                        filter="url(#glow-coach)"
                        initial={{ pathLength: 0, opacity: 0 }}
                        whileInView={{ pathLength: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 2, ease: "easeInOut" }}
                    />
                    {/* Triangle Down */}
                    <motion.path 
                        d="M0 90 L-78 -45 L78 -45 Z" 
                        fill="none" stroke="url(#coachGrad)" strokeWidth="2"
                        filter="url(#glow-coach)"
                        initial={{ pathLength: 0, opacity: 0 }}
                        whileInView={{ pathLength: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 2, ease: "easeInOut", delay: 0.5 }}
                    />
                </motion.g>

                {/* 4. Central Neural Core (Focus) */}
                <motion.g animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}>
                    <circle r="15" fill="#050816" stroke="var(--accent-cyan)" strokeWidth="2" />
                    <motion.circle r="6" fill="#fff" filter="url(#glow-coach)" animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 1, repeat: Infinity }} />
                    
                    {/* Orbiting Electrons/Thoughts */}
                    {[0, 120, 240].map((deg, i) => (
                        <motion.circle 
                            key={i}
                            r="3" fill="var(--accent-purple)"
                            cx={Math.cos(deg * Math.PI/180) * 30}
                            cy={Math.sin(deg * Math.PI/180) * 30}
                            animate={{ 
                                cx: [Math.cos(deg * Math.PI/180) * 30, Math.cos((deg + 360) * Math.PI/180) * 30],
                                cy: [Math.sin(deg * Math.PI/180) * 30, Math.sin((deg + 360) * Math.PI/180) * 30],
                            }}
                            transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: i }}
                        />
                    ))}
                </motion.g>

                {/* 5. Connecting Nodes (Synapses) */}
                {[0, 60, 120, 180, 240, 300].map((deg, i) => (
                    <motion.g key={i} transform={`rotate(${deg})`}>
                        <motion.line 
                            x1="0" y1="-20" x2="0" y2="-80" 
                            stroke="white" strokeWidth="1" strokeOpacity="0.1"
                            animate={{ strokeDasharray: ["0 100", "100 0"], strokeOpacity: [0.1, 0.5, 0.1] }}
                            transition={{ duration: 3, repeat: Infinity, delay: i * 0.2 }}
                        />
                        <circle cx="0" cy="-90" r="2" fill="var(--accent-cyan)" opacity="0.5" />
                    </motion.g>
                ))}

            </g>
        </svg>
    </div>
);

// 2. Polymatch - 3D Textbook
const TutorVisual = () => (
    <div className="relative w-full h-full flex items-center justify-center perspective-[1000px]">
        <motion.div 
            className="relative w-40 h-56 md:w-52 md:h-72 hardware-accelerated"
            style={{ transformStyle: 'preserve-3d' }}
            animate={{ rotateY: [-15, -25, -15], rotateX: [10, 5, 10] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
            {/* Book Cover (Front) - Open slightly */}
            <div 
                className="absolute inset-0 bg-[#0f172a] rounded-r-lg border-l-4 border-gray-600 flex flex-col items-center justify-center shadow-xl origin-left"
                style={{ transform: 'rotateY(-20deg) translateZ(10px)' }}
            >
                 <div className="w-24 h-24 rounded-full border border-white/10 flex items-center justify-center mb-4">
                     <span className="text-4xl font-display font-bold text-[#00f2ff]">π</span>
                 </div>
                 <div className="text-[10px] uppercase tracking-[0.3em] text-white/50">PolyMatch</div>
            </div>

            {/* Pages (Stack) */}
            <div className="absolute top-2 bottom-2 left-1 w-full bg-white rounded-r transform translate-z-[-5px]" style={{ transform: 'translateZ(-5px)' }}></div>
            <div className="absolute top-3 bottom-3 left-1 w-[98%] bg-gray-200 rounded-r transform translate-z-[-10px]" style={{ transform: 'translateZ(-10px)' }}></div>
            
            {/* Back Cover */}
            <div className="absolute inset-0 bg-[#0f172a] rounded-r-lg transform translate-z-[-15px]" style={{ transform: 'translateZ(-15px)' }}></div>

            {/* Floating Formulas */}
            <motion.div className="absolute -top-10 -right-10 text-3xl font-mono text-[#00f2ff] font-bold" animate={{ y: -15, opacity: [0, 1, 0] }} transition={{ duration: 3, repeat: Infinity }}>
                ∫ f(x)
            </motion.div>
            <motion.div className="absolute top-1/2 -left-16 text-2xl font-mono text-[#7b2ff7] font-bold" animate={{ x: -15, opacity: [0, 1, 0] }} transition={{ duration: 4, repeat: Infinity, delay: 1.5 }}>
                ∑
            </motion.div>
             <motion.div className="absolute -bottom-5 -right-5 text-xl font-mono text-white font-bold" animate={{ y: 15, opacity: [0, 1, 0] }} transition={{ duration: 3.5, repeat: Infinity, delay: 0.5 }}>
                √2
            </motion.div>
        </motion.div>
    </div>
);

// 3. Lexicom - Legal Contract
const LegalVisual = () => (
    <div className="relative w-full h-full flex items-center justify-center">
        <motion.div 
            className="w-48 h-64 bg-[#f8fafc] text-black p-6 shadow-2xl relative rounded-sm rotate-[-2deg] hardware-accelerated"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
        >
            {/* Header */}
            <div className="flex justify-between items-center mb-6 border-b-2 border-black pb-2">
                <div className="text-[8px] font-bold uppercase">Agreement</div>
                <div className="text-[8px] font-mono">No. 2049</div>
            </div>
            
            {/* Text Lines */}
            <div className="space-y-3 mb-8 opacity-40">
                <div className="w-full h-1.5 bg-black rounded"></div>
                <div className="w-full h-1.5 bg-black rounded"></div>
                <div className="w-5/6 h-1.5 bg-black rounded"></div>
                <div className="w-full h-1.5 bg-black rounded"></div>
                <div className="w-4/6 h-1.5 bg-black rounded"></div>
            </div>

            {/* Signature Block */}
            <div className="mt-auto pt-2 relative">
                 <div className="border-b border-black w-32 mb-1"></div>
                 <span className="text-[6px] uppercase tracking-widest font-bold text-gray-500">Authorized Signature</span>
                 
                 {/* Animated Pen Signature */}
                 <svg className="absolute -top-6 left-2 w-32 h-16 overflow-visible pointer-events-none">
                     <motion.path 
                        d="M0 20 Q 10 0, 20 20 T 40 20 T 60 10 T 80 20" 
                        fill="none" stroke="#0000cc" strokeWidth="2"
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, delay: 0.5 }}
                     />
                 </svg>
            </div>

            {/* Stamp Animation */}
            <motion.div 
                className="absolute bottom-16 right-2 w-20 h-20 border-4 border-red-600 rounded-full flex items-center justify-center opacity-0 -rotate-12 mask-image"
                whileInView={{ opacity: 0.8, scale: [2, 1] }}
                viewport={{ once: true }}
                transition={{ delay: 1.5, type: "spring", stiffness: 300 }}
            >
                <div className="text-red-600 font-black text-[10px] uppercase border-y-2 border-red-600 py-1 px-2 tracking-widest">
                    APPROVED
                </div>
            </motion.div>
        </motion.div>
    </div>
);

// 4. Chef - Pan Flip (Updated Dynamic Version)
const ChefVisual = () => (
    <div className="relative w-full h-full flex items-center justify-center">
        <svg viewBox="0 0 400 400" className="w-[100%] h-[100%] overflow-visible hardware-accelerated">
            <defs>
                <filter id="glow-food">
                    <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                    <feMerge>
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                </filter>
            </defs>
            <g transform="translate(200, 220)">
                {/* Induction Ring / Heat */}
                <motion.ellipse 
                    cx="0" cy="50" rx="60" ry="10" 
                    stroke="var(--accent-purple)" strokeWidth="2" fill="none"
                    animate={{ opacity: [0.2, 0.6, 0.2], rx: [60, 65, 60] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                />

                {/* Pan Group */}
                <motion.g
                    animate={{ 
                        y: [0, -30, 0], 
                        rotateZ: [0, -8, 0] 
                    }}
                    transition={{ 
                        duration: 1.5, 
                        repeat: Infinity, 
                        ease: "easeInOut",
                        times: [0, 0.4, 1]
                    }}
                >
                    {/* Handle */}
                    <path d="M 60 -10 L 140 -20 L 140 -10 L 60 5 Z" fill="#334155" />
                    
                    {/* Pan Body */}
                    <path 
                        d="M -70 0 L 70 0 L 60 40 C 60 55, -60 55, -60 40 Z" 
                        fill="#1e293b" stroke="#94a3b8" strokeWidth="3" 
                    />
                    
                    {/* Ingredients */}
                    {[0, 1, 2].map((i) => (
                        <motion.g
                            key={i}
                            initial={{ y: 0, x: (i - 1) * 20 }}
                            animate={{ 
                                y: [0, -120 - (i * 10), 0],
                                rotate: [0, 180 + i * 60, 360],
                                scale: [1, 1.1, 1]
                            }}
                            transition={{ 
                                duration: 1.5, 
                                repeat: Infinity, 
                                ease: [0.2, 0.8, 0.2, 1], // Custom bounce-like curve
                                times: [0, 0.45, 1],
                                delay: 0 // Sync exactly with pan
                            }}
                        >
                            <rect 
                                x="-10" y="-10" width="20" height="20" rx="4"
                                fill={i % 2 === 0 ? "var(--accent-cyan)" : "var(--accent-purple)"}
                                stroke="white" strokeWidth="1"
                                filter="url(#glow-food)"
                                fillOpacity="0.8"
                            />
                        </motion.g>
                    ))}
                </motion.g>
            </g>
        </svg>
    </div>
);

// 5. Lifestyle - Robot Assistant
const LifestyleVisual = () => (
    <div className="relative w-full h-full flex items-center justify-center">
         {/* Robot Face Container */}
         <motion.div 
            className="w-48 h-40 bg-gradient-to-b from-gray-800 to-black rounded-[2rem] border-4 border-gray-700 flex flex-col items-center justify-center relative shadow-[0_0_50px_rgba(0,242,255,0.15)] hardware-accelerated"
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
         >
             {/* Antenna */}
             <div className="absolute -top-10 w-2 h-10 bg-gray-500 rounded-full"></div>
             <motion.div 
                className="absolute -top-14 w-6 h-6 rounded-full bg-red-500 shadow-[0_0_15px_#ef4444]"
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 1.5, repeat: Infinity }}
             ></motion.div>

             {/* Screen Face */}
             <div className="w-36 h-24 bg-black rounded-2xl border-2 border-gray-800 flex items-center justify-center gap-6 overflow-hidden relative">
                 {/* Scanlines */}
                 <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,242,255,0.05)_50%)] bg-[length:100%_4px] pointer-events-none"></div>
                 
                 {/* Eyes */}
                 <motion.div 
                    className="w-8 h-10 bg-[#00f2ff] rounded-full shadow-[0_0_20px_#00f2ff]" 
                    animate={{ scaleY: [1, 0.1, 1] }} 
                    transition={{ duration: 3, repeat: Infinity, repeatDelay: 3 }} 
                />
                 <motion.div 
                    className="w-8 h-10 bg-[#00f2ff] rounded-full shadow-[0_0_20px_#00f2ff]" 
                    animate={{ scaleY: [1, 0.1, 1] }} 
                    transition={{ duration: 3, repeat: Infinity, repeatDelay: 3 }} 
                />
             </div>

             {/* Neck/Shoulders Hint */}
             <div className="absolute -bottom-16 w-24 h-16 bg-gray-800 rounded-t-full -z-10"></div>
         </motion.div>
    </div>
);

const getVisual = (type: string) => {
    switch(type) {
        case 'coach': return <CoachVisual />;
        case 'tutor': return <TutorVisual />;
        case 'legal': return <LegalVisual />;
        case 'chef': return <ChefVisual />;
        case 'lifestyle': return <LifestyleVisual />;
        default: return null;
    }
};

const CardItem = ({ item, index }: { item: any, index: number }) => {
    return (
        <motion.div 
            className="sticky top-20 md:top-32 w-full h-auto md:h-[600px] rounded-[32px] md:rounded-[48px] overflow-hidden border border-white/10 [.light_&]:border-black/5 shadow-2xl backdrop-blur-3xl hardware-accelerated"
            initial={{ y: -50, opacity: 0, scale: 0.95 }}
            whileInView={{ y: 0, opacity: 1, scale: 1 }}
            viewport={{ margin: "-10% 0px -10% 0px", once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            style={{
                zIndex: index + 1,
                // Unified Style with WhyLocalAI Section (Dark Gradient)
                background: `linear-gradient(160deg, var(--panel-bg), rgba(0,0,0,0.8))`, 
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
                        <div className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] uppercase tracking-widest text-[#7b2ff7] mb-4">
                            {item.subtitle}
                        </div>
                        <h3 className="text-2xl md:text-5xl font-display font-bold text-white [.light_&]:text-black mb-4 md:mb-6">
                            {item.title}
                        </h3>
                        <p className="text-white/60 [.light_&]:text-black/60 text-sm md:text-lg mb-6 md:mb-8 leading-relaxed">
                            {item.description}
                        </p>

                        {/* Stats Row */}
                        <div className="grid grid-cols-2 gap-4 md:gap-6 mt-4">
                            {item.stats?.map((stat: any, i: number) => (
                                <div key={i}>
                                    <div className="text-2xl md:text-4xl font-mono font-bold text-white [.light_&]:text-black">{stat.value}</div>
                                    <div className="text-[10px] uppercase text-white/40 tracking-wider">{stat.label}</div>
                                    {/* Stats Bar */}
                                    <div className="w-full h-1 bg-white/10 mt-2 rounded-full overflow-hidden">
                                        <motion.div 
                                            className="h-full bg-[#00f2ff]" 
                                            initial={{ width: 0 }}
                                            whileInView={{ width: '80%' }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 1.5, delay: 0.5 }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                        
                        {/* Features Tags */}
                        <div className="flex flex-wrap gap-2 mt-6 md:mt-8">
                            {item.features?.map((f: string, i: number) => (
                                <span key={i} className="px-3 py-1 rounded-lg bg-white/5 text-[10px] md:text-xs text-white/50 border border-white/5 flex items-center gap-2 group cursor-default hover:bg-white/10 transition-colors">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#7b2ff7] group-hover:bg-[#00f2ff] transition-colors"></span>
                                    {f}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right: Visual */}
                <div className="relative bg-black/20 [.light_&]:bg-black/5 h-[220px] md:h-auto lg:min-h-full overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                        {getVisual(item.visualType)}
                    </div>
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#02040a] to-transparent lg:bg-gradient-to-l opacity-50 pointer-events-none"></div>
                </div>

            </div>
        </motion.div>
    );
};

interface IndividualsProps {
    lang: Language;
}

const Individuals: React.FC<IndividualsProps> = ({ lang }) => {
    const data = INDIVIDUALS_DATA[lang];
    const t = UI_TEXT[lang].individuals;

    if (!data) return null;

    return (
        <section id="individuals" className="relative py-20 bg-transparent">
             
            {/* Section Header */}
            <div className="container mx-auto px-6 mb-20">
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-3xl"
                >
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-8 h-[1px] bg-[#7b2ff7]"></div>
                        <span className="text-[10px] font-mono font-bold uppercase tracking-[0.4em] text-[#7b2ff7]">
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
                        <CardItem key={item.id} item={item} index={index} />
                    ))}
                </div>
            </div>

        </section>
    );
};

export default Individuals;
