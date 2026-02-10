
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Preloader: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [textIndex, setTextIndex] = useState(0);

  const loadingText = [
    "INITIALIZING CORE...",
    "LOADING NEURAL MODULES...",
    "ESTABLISHING SECURE CONNECTION...",
    "DECRYPTING ASSETS...",
    "SYSTEM READY."
  ];

  useEffect(() => {
    // Faster progress simulation
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        // Non-linear progress simulation
        const increment = Math.random() * 2 + 0.5;
        return Math.min(prev + increment, 100);
      });
    }, 20);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Cycle text based on progress thresholds
    if (progress < 30) setTextIndex(0);
    else if (progress < 50) setTextIndex(1);
    else if (progress < 70) setTextIndex(2);
    else if (progress < 90) setTextIndex(3);
    else setTextIndex(4);
  }, [progress]);

  useEffect(() => {
    if (progress === 100) {
      const timeout = setTimeout(() => {
        onComplete();
      }, 500); // Slight delay at 100% before unmounting
      return () => clearTimeout(timeout);
    }
  }, [progress, onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, pointerEvents: 'none' }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-0 z-[9999] bg-[#02040a] flex flex-col items-center justify-center cursor-wait"
    >
      {/* Central Visual */}
      <div className="relative w-32 h-32 mb-12 flex items-center justify-center">
        {/* Pulsing Core */}
        <motion.div 
          className="absolute w-16 h-16 bg-[#00f2ff] rounded-full blur-[40px] opacity-20"
          animate={{ scale: [1, 1.5, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        
        {/* Rotating Rings */}
        <motion.div 
            className="absolute inset-0 border border-white/10 rounded-full border-t-[#00f2ff]"
            animate={{ rotate: 360 }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
            className="absolute inset-2 border border-white/5 rounded-full border-b-[#7b2ff7]"
            animate={{ rotate: -360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        />
        
        {/* Center Logo */}
        <div className="relative z-10 font-display font-black text-4xl text-white tracking-tighter">
            A
        </div>
      </div>

      {/* Progress Stats */}
      <div className="w-64 max-w-[80vw] space-y-2">
          <div className="flex justify-between text-[10px] font-mono text-[#00f2ff] uppercase tracking-widest">
              <span>{loadingText[textIndex]}</span>
              <span>{Math.floor(progress)}%</span>
          </div>
          <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
              <motion.div 
                  className="h-full bg-[#00f2ff]"
                  style={{ width: `${progress}%` }}
                  layoutId="progress-bar"
              />
          </div>
      </div>
    </motion.div>
  );
};

export default Preloader;
