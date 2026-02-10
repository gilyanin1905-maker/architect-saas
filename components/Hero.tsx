
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Language } from '../types';
import { UI_TEXT } from '../constants';
import { BotIcon, VKIcon } from './Icons';
import BlogModal from './BlogModal';

interface HeroProps {
  lang: Language;
}

const CERTIFICATES = [
  "ISO/IEC 27001:2013", "GDPR COMPLIANT", "Llama-3-70B-Instruct", "Mixtral-8x22B-v0.1", 
  "SOC 2 TYPE II", "HIPAA READY", "AES-256 ENCRYPTION", "Qwen-2.5-72B", 
  "DeepSeek-V3", "Gemma-2-27B", "NVIDIA H100 OPTIMIZED", "ON-PREMISE ONLY", "AIR-GAPPED"
];

const Hero: React.FC<HeroProps> = ({ lang }) => {
  const t = UI_TEXT[lang].hero;
  const [isBlogOpen, setIsBlogOpen] = useState(false);

  return (
    <>
    <BlogModal isOpen={isBlogOpen} onClose={() => setIsBlogOpen(false)} lang={lang} />
    
    <div className="relative w-full h-[100dvh] flex flex-col justify-center overflow-hidden pb-12 sm:pb-0">
      <div className="container mx-auto px-4 sm:px-6 grid lg:grid-cols-12 gap-4 sm:gap-6 lg:gap-12 items-center relative z-10 h-full max-h-[900px]">
        
        {/* LEFT COLUMN: Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50, filter: 'blur(20px)' }}
          whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="lg:col-span-7 order-2 lg:order-1 space-y-3 sm:space-y-6 flex flex-col justify-center text-center lg:text-left z-20 mt-[-10px] sm:mt-0"
        >
          <div className="flex items-center gap-3 justify-center lg:justify-start">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: 32 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="h-[1px] bg-[#00f2ff]/50"
            />
            <span className="text-[9px] md:text-xs font-mono tracking-[0.3em] uppercase text-[#00f2ff] font-bold">
              {t.label}
            </span>
          </div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl sm:text-5xl md:text-7xl lg:text-9xl font-display font-black leading-[0.9] tracking-tighter"
          >
            {t.headline} <br />
            <span className="gradient-text">{t.subHeadline}</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 1.5 }}
            className="text-xs sm:text-base md:text-xl lg:text-2xl text-white/60 max-w-xl font-light leading-relaxed border-l-0 lg:border-l-2 border-white/10 pl-0 lg:pl-8 mx-auto lg:mx-0 py-1 sm:py-0"
          >
            {t.description}
          </motion.p>
          
          <div className="flex flex-col sm:flex-row flex-wrap gap-2 sm:gap-5 pt-1 sm:pt-6 justify-center lg:justify-start items-center">
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact" 
              className="luxury-button w-[80%] sm:w-auto px-6 py-3 sm:px-10 sm:py-5 bg-white text-black rounded-full font-bold shadow-[0_20px_50px_rgba(255,255,255,0.15)] group flex items-center justify-center gap-3 transition-shadow hover:shadow-[0_25px_60px_rgba(0,242,255,0.3)] text-xs sm:text-sm uppercase tracking-wider"
            >
              {t.ctaPrimary}
              <svg className="group-hover:translate-x-1 transition-transform" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.05, backgroundColor: 'rgba(123, 47, 247, 0.1)' }}
              whileTap={{ scale: 0.95 }}
              href="#cases" 
              className="luxury-button w-[80%] sm:w-auto px-6 py-3 sm:px-10 sm:py-5 glass rounded-full font-bold border-white/10 hover:border-[#7b2ff7] transition-all flex items-center justify-center gap-3 text-white text-xs sm:text-sm uppercase tracking-wider"
            >
              {t.ctaSecondary}
            </motion.a>
          </div>

        </motion.div>

        {/* RIGHT COLUMN: Orbital Vortex 3D Visual */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 order-1 lg:order-2 flex flex-col items-center justify-center mt-0 lg:mt-0"
        >
          {/* INTERACTIVE SPHERE WRAPPER */}
          <div 
             className="relative h-[160px] sm:h-[300px] lg:h-[400px] w-full flex items-center justify-center perspective-[1000px] cursor-pointer group"
             onClick={() => setIsBlogOpen(true)}
          >
            {/* Ambient Glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#7b2ff7]/20 to-[#00f2ff]/10 rounded-full blur-[40px] md:blur-[100px] animate-pulse pointer-events-none"></div>
            
            <div className="absolute top-0 right-0 text-white/40 text-[10px] uppercase tracking-widest font-mono opacity-0 group-hover:opacity-100 transition-opacity animate-pulse pointer-events-none">
                Click to access Neural Feed
            </div>
          
            <motion.div 
                whileHover={{ scale: 1.1 }}
                className="relative w-[150px] h-[150px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] flex items-center justify-center [transform-style:preserve-3d]"
            >
               {/* Rings omitted for brevity, logic identical to previous code */}
               <motion.div 
                 className="absolute w-[100%] h-[100%] rounded-full border border-white/5 border-t-[#00f2ff]/30 border-b-[#7b2ff7]/30"
                 animate={{ rotateX: 360, rotateY: 360, rotateZ: 360 }}
                 transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
               />
               <motion.div 
                 className="absolute w-[85%] h-[85%] rounded-full border-[1px] border-transparent border-t-[#00f2ff] border-l-[#00f2ff]/20 shadow-[0_0_30px_rgba(0,242,255,0.2)]"
                 animate={{ rotateZ: 360, rotateX: 60, rotateY: [0, 15, 0] }}
                 transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
               />
               <motion.div 
                 className="absolute w-[85%] h-[85%] rounded-full border-[1px] border-transparent border-b-[#7b2ff7] border-r-[#7b2ff7]/20 shadow-[0_0_30px_rgba(123,47,247,0.2)]"
                 animate={{ rotateZ: -360, rotateX: -60, rotateY: [0, -15, 0] }}
                 transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
               />
               <motion.div 
                 className="absolute w-[60%] h-[60%] rounded-full border border-white/20 border-t-white"
                 animate={{ rotateX: [0, 360], rotateY: [0, 180] }}
                 transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
               />

               {/* CENTRAL CORE: Nucleus */}
               <motion.div 
                 className="relative w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 rounded-full glass flex items-center justify-center border border-white/20 shadow-[inset_0_0_30px_rgba(255,255,255,0.1),0_0_50px_rgba(0,242,255,0.2)] z-20 overflow-hidden backdrop-blur-md group-hover:bg-[#00f2ff]/10 transition-colors"
                 animate={{
                     boxShadow: [
                         'inset 0 0 30px rgba(255,255,255,0.1), 0 0 50px rgba(0,242,255,0.2)',
                         'inset 0 0 50px rgba(255,255,255,0.2), 0 0 80px rgba(123,47,247,0.4)',
                         'inset 0 0 30px rgba(255,255,255,0.1), 0 0 50px rgba(0,242,255,0.2)'
                     ]
                 }}
                 transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
               >
                  <div className="absolute inset-0 bg-gradient-to-b from-[#00f2ff]/10 to-[#7b2ff7]/10"></div>
                  <span className="font-display font-black text-xl sm:text-3xl md:text-5xl relative z-10 text-white tracking-wider drop-shadow-[0_0_10px_rgba(255,255,255,0.5)] group-hover:scale-110 transition-transform">
                      AI
                  </span>
                  <motion.div 
                      className="absolute top-0 left-0 w-full h-[2px] bg-white/50 blur-[2px]"
                      animate={{ top: ['0%', '100%'], opacity: [0, 1, 0] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  />
               </motion.div>
            </motion.div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1 }}
            className="flex gap-4 justify-center mt-4 sm:mt-12 z-20"
          >
              <a href="https://t.me/Architect_AI_Bot" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-6 py-3 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition-all group hover:scale-105 backdrop-blur-md">
                  <div className="w-5 h-5 text-[#00f2ff] group-hover:scale-110 transition-transform"><BotIcon /></div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-white/60 group-hover:text-white">AI Bot</span>
              </a>
              <a href="https://vk.com/architect_saas" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-6 py-3 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition-all group hover:scale-105 backdrop-blur-md">
                  <div className="w-5 h-5 text-[#0077FF] group-hover:scale-110 transition-transform"><VKIcon /></div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-white/60 group-hover:text-white">VK Community</span>
              </a>
          </motion.div>

        </motion.div>
      </div>
      
      {/* Marquee Ticker */}
      <div className="absolute bottom-20 sm:bottom-24 left-0 w-full z-0 pointer-events-none opacity-50">
        <div className="w-full border-t border-white/5 bg-transparent py-3 overflow-hidden">
            <motion.div 
                className="flex gap-16 whitespace-nowrap"
                animate={{ x: [0, -1000] }}
                transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
            >
                {[...CERTIFICATES, ...CERTIFICATES, ...CERTIFICATES].map((cert, i) => (
                    <div key={i} className="flex items-center gap-3 opacity-60 hover:opacity-100 transition-opacity">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#00f2ff] shadow-[0_0_5px_#00f2ff]"></span>
                        <span className="text-[10px] sm:text-xs font-mono font-bold uppercase tracking-widest text-white">{cert}</span>
                    </div>
                ))}
            </motion.div>
        </div>
      </div>

    </div>
    </>
  );
};

export default Hero;
