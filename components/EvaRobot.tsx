
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Language } from '../types';
import { UI_TEXT, ROBOT_DATA } from '../constants';
import ChatInterface from './ChatInterface';

// --- Types ---
type Emotion = 'idle' | 'happy' | 'thinking' | 'alert' | 'angry';
type RobotMode = 'idle' | 'threat' | 'chat';

interface EvaRobotProps {
    isChatOpen: boolean;
    setIsChatOpen: (isOpen: boolean) => void;
    isVisible: boolean; // New prop for section-based visibility
    lang: Language;
    triggerMessage?: string | null; // New prop for initiating context
}

// --- Visual Components (Preserved) ---
const EvaEyes = ({ emotion, mousePos }: { emotion: Emotion, mousePos: {x: number, y: number} }) => {
    const eyeX = mousePos.x * 6; 
    const eyeY = mousePos.y * 4;
    return (
        <g transform={`translate(${eyeX}, ${eyeY})`}>
            <defs>
                <filter id="blueGlow" x="-100%" y="-100%" width="300%" height="300%">
                    <feGaussianBlur stdDeviation="2.5" result="coloredBlur"/>
                    <feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge>
                </filter>
                <linearGradient id="eyeColor" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#80faff" /><stop offset="100%" stopColor="#00a0ff" />
                </linearGradient>
                <linearGradient id="eyeColorRed" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#ff5050" /><stop offset="100%" stopColor="#990000" />
                </linearGradient>
            </defs>
            <g filter="url(#blueGlow)" fill={emotion === 'angry' ? "url(#eyeColorRed)" : "url(#eyeColor)"}>
                {emotion === 'idle' && (
                    <><motion.ellipse cx="28" cy="22" rx="9" ry="6" transform="rotate(-8 28 22)" initial={{ scaleY: 0 }} animate={{ scaleY: 1 }} /><motion.ellipse cx="56" cy="22" rx="9" ry="6" transform="rotate(8 56 22)" initial={{ scaleY: 0 }} animate={{ scaleY: 1 }} /></>
                )}
                {emotion === 'happy' && (
                    <><path d="M20 25 Q 28 18 36 25" stroke="url(#eyeColor)" strokeWidth="2.5" fill="none" strokeLinecap="round" /><path d="M48 25 Q 56 18 64 25" stroke="url(#eyeColor)" strokeWidth="2.5" fill="none" strokeLinecap="round" /></>
                )}
                {emotion === 'angry' && (
                    <><motion.ellipse cx="28" cy="24" rx="11" ry="4" transform="rotate(15 28 24)" /><motion.ellipse cx="56" cy="24" rx="11" ry="4" transform="rotate(-15 56 24)" /></>
                )}
                {emotion === 'thinking' && (
                    <><motion.rect x="20" y="21" width="16" height="3" rx="1.5" animate={{ opacity: [1, 0.5, 1] }} transition={{ duration: 0.5, repeat: Infinity }} /><motion.ellipse cx="56" cy="22" rx="10" ry="8" transform="rotate(8 56 22)" /></>
                )}
                {emotion === 'alert' && (
                    <><circle cx="28" cy="22" r="9" /><circle cx="56" cy="22" r="9" /></>
                )}
            </g>
            <g opacity="0.3">
                <line x1="15" y1="20" x2="69" y2="20" stroke="black" strokeWidth="0.5" /><line x1="15" y1="22" x2="69" y2="22" stroke="black" strokeWidth="0.5" /><line x1="15" y1="24" x2="69" y2="24" stroke="black" strokeWidth="0.5" />
            </g>
        </g>
    );
};

const EvaBodyParts = ({ emotion, mousePos, mode }: { emotion: Emotion, mousePos: {x: number, y: number}, mode: RobotMode }) => {
    // Reduced sensitivity for straighter head
    const headRotate = mousePos.x * 6;
    const bodyRotate = mousePos.x * -1.5;

    return (
        <div className="relative w-24 h-36 md:w-36 md:h-52 drop-shadow-2xl transition-all duration-300">
            <svg viewBox="0 0 100 150" className="w-full h-full overflow-visible">
                <defs>
                    <radialGradient id="bodyGrad" cx="35%" cy="25%" r="90%">
                        <stop offset="0%" stopColor="#ffffff" /><stop offset="40%" stopColor="#f0f2f5" /><stop offset="100%" stopColor="#b0b8c4" />
                    </radialGradient>
                    <radialGradient id="visorGrad" cx="50%" cy="40%" r="60%">
                        <stop offset="60%" stopColor="#050505" /><stop offset="100%" stopColor="#252525" />
                    </radialGradient>
                    <linearGradient id="neckGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#333" />
                        <stop offset="50%" stopColor="#555" />
                        <stop offset="100%" stopColor="#333" />
                    </linearGradient>
                </defs>
                
                {/* NECK CONNECTOR (Added to support raised head) */}
                <motion.g animate={{ rotate: bodyRotate }} style={{ transformOrigin: "50% 80%" }}>
                    <rect x="42" y="45" width="16" height="20" rx="4" fill="url(#neckGrad)" />
                </motion.g>

                <motion.g initial={{ y: 0 }} animate={mode === 'threat' ? { y: 5, rotate: 10, x: -5 } : { y: [0, 2, 0], rotate: [0, 2, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}>
                    <path d="M20 55 C 10 55, 5 65, 8 85 C 10 110, 22 115, 28 110 C 26 95, 25 70, 25 55 Z" fill="url(#bodyGrad)" filter="drop-shadow(2px 4px 4px rgba(0,0,0,0.2))"/>
                </motion.g>
                <motion.g initial={{ y: 0, rotate: 0 }} animate={mode === 'threat' ? { y: -20, x: 10, rotate: -90 } : { y: [0, 2, 0], x: 0, rotate: [0, -2, 0] }} transition={{ type: "spring", stiffness: 100, damping: 15 }}>
                    <path d="M80 55 C 90 55, 95 65, 92 85 C 90 110, 78 115, 72 110 C 74 95, 75 70, 75 55 Z" fill="url(#bodyGrad)" filter="drop-shadow(-2px 4px 4px rgba(0,0,0,0.2))"/>
                    <motion.g animate={{ opacity: mode === 'threat' ? 1 : 0 }}>
                         <circle cx="92" cy="110" r="8" fill="#ff3333" filter="blur(2px)" />
                         <motion.circle cx="92" cy="110" r="15" stroke="#ff0000" strokeWidth="2" fill="none" animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }} transition={{ duration: 0.5, repeat: Infinity }} />
                         <circle cx="92" cy="110" r="4" fill="#ffffff" />
                    </motion.g>
                </motion.g>
                <motion.g animate={{ rotate: bodyRotate }} style={{ transformOrigin: "50% 80%" }}>
                    <path d="M28 55 C 28 42, 72 42, 72 55 C 72 105, 62 138, 50 142 C 38 138, 28 105, 28 55 Z" fill="url(#bodyGrad)" filter="drop-shadow(0px 10px 25px rgba(0,0,0,0.3))"/>
                    <circle cx="50" cy="65" r="5" fill="#000000" fillOpacity="0.1" />
                    <motion.circle cx="50" cy="65" r="1.5" fill={mode === 'threat' ? '#ff0000' : '#00f2ff'} animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 2, repeat: Infinity }} />
                </motion.g>

                {/* HEAD - RAISED AND STRAIGHTER */}
                <motion.g 
                    animate={{ rotate: headRotate, y: [-12, -18, -12] }} 
                    transition={{ y: { duration: 3.5, repeat: Infinity, ease: "easeInOut" }, rotate: { type: "spring", stiffness: 60 } }} 
                    style={{ transformOrigin: "50% 35%" }}
                >
                    <ellipse cx="50" cy="32" rx="36" ry="25" fill="url(#bodyGrad)" />
                    <path d="M30 18 Q 50 10 70 18" stroke="white" strokeWidth="2" strokeOpacity="0.8" fill="none" strokeLinecap="round" />
                    <path d="M22 34 C 22 22, 78 22, 78 34 C 78 48, 22 48, 22 34 Z" fill="url(#visorGrad)" />
                    <path d="M28 28 Q 50 24 72 28" stroke="white" strokeWidth="0.5" strokeOpacity="0.3" fill="none" />
                    <svg x="14" y="12" width="72" height="44" viewBox="0 0 84 44">
                        <EvaEyes emotion={emotion} mousePos={mousePos} />
                    </svg>
                </motion.g>
            </svg>
        </div>
    );
};

const EvaRobot: React.FC<EvaRobotProps> = ({ isChatOpen, setIsChatOpen, isVisible, lang, triggerMessage }) => {
  const [mode, setMode] = useState<RobotMode>('idle');
  const [emotion, setEmotion] = useState<Emotion>('idle');
  const robotData = ROBOT_DATA[lang];

  const [bubbleText, setBubbleText] = useState<string | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  
  // Position State
  const [targetPos, setTargetPos] = useState({ x: 0, y: 0 }); 
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false); // Track dragging state
  
  const constraintsRef = useRef(null);

  // --- MOVEMENT & INTERACTION ---
  
  // 1. Initialize Position (once)
  useEffect(() => {
    setTargetPos({ 
        x: window.innerWidth - (window.innerWidth < 768 ? 120 : 180), 
        y: window.innerHeight - (window.innerHeight < 768 ? 200 : 250) 
    });
  }, []);

  // 2. Center Robot on Chat Open (runs only when chat opens)
  useEffect(() => {
    if (isChatOpen) {
        setTargetPos({
            x: window.innerWidth / 2 - (window.innerWidth < 768 ? 50 : 70), 
            y: window.innerHeight - (window.innerHeight < 768 ? 250 : 320)
        });
    }
  }, [isChatOpen]);

  // 3. Wandering Logic (disabled during chat/drag/interactions)
  useEffect(() => {
    // If chat is open, we stop automatic wandering so it stays where it is (or where user dragged it)
    if (isChatOpen) return;
    
    if (!isVisible) return;
    if (mode === 'threat' || isHovered || isDragging) return;

    const moveRandomly = () => {
        const padding = window.innerWidth < 768 ? 50 : 100;
        const w = window.innerWidth;
        const h = window.innerHeight;
        setTargetPos({ 
            x: Math.random() * (w - padding * 2) + padding, 
            y: Math.random() * (h - padding * 2) + padding 
        });
    };
    const interval = setInterval(moveRandomly, 12000);
    return () => clearInterval(interval);
  }, [isChatOpen, mode, isHovered, isVisible, isDragging]);

  // Mouse Tracking
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ 
          x: (e.clientX - window.innerWidth / 2) / (window.innerWidth / 2),
          y: (e.clientY - window.innerHeight / 2) / (window.innerHeight / 2)
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Random Jokes
  useEffect(() => {
    if (isChatOpen || mode === 'threat' || !isVisible || isDragging) return;
    const showRandomBubble = () => {
      if (Math.random() > 0.6) { 
        const msg = robotData.proactive[Math.floor(Math.random() * robotData.proactive.length)];
        setBubbleText(msg);
        setEmotion('happy');
        setTimeout(() => { setBubbleText(null); setEmotion('idle'); }, 6000);
      }
    };
    const interval = setInterval(showRandomBubble, 15000);
    return () => clearInterval(interval);
  }, [isChatOpen, mode, isVisible, robotData.proactive, isDragging]);


  const handleRobotClick = () => {
      // Don't trigger click action if just finished dragging
      if (isDragging) return;

      if (isChatOpen) {
          setIsChatOpen(false);
          setMode('idle');
          return;
      }
      if (mode === 'threat') return;

      const scenario = robotData.threats[Math.floor(Math.random() * robotData.threats.length)];
      setMode('threat');
      setEmotion('angry');
      setBubbleText(scenario.threat);

      setTimeout(() => {
          setEmotion('happy');
          setMode('idle');
          setBubbleText(scenario.joke);
          setTimeout(() => {
              setBubbleText(null);
              setIsChatOpen(true);
          }, 2000);
      }, 2000);
  };

  const shouldShow = isVisible || isChatOpen;

  return (
    <>
      {/* ROBOT AVATAR LAYER */}
      <div ref={constraintsRef} className="fixed inset-0 pointer-events-none z-[100] overflow-hidden">
        <motion.div
            drag={shouldShow}
            dragMomentum={true}
            dragElastic={0.1}
            dragConstraints={constraintsRef}
            onDragStart={() => setIsDragging(true)}
            onDragEnd={(e, info) => {
                 setIsDragging(false);
                 // Commit final position so animate prop doesn't snap back
                 setTargetPos(prev => ({ 
                     x: prev.x + info.offset.x, 
                     y: prev.y + info.offset.y 
                 }));
            }}
            whileDrag={{ scale: 1.1, cursor: 'grabbing' }}
            className={`absolute top-0 left-0 pointer-events-auto touch-none ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
            animate={{ 
                x: shouldShow ? targetPos.x : window.innerWidth + 200, 
                y: targetPos.y,
                // Removed rotation from here so bubble stays upright
                opacity: shouldShow ? 1 : 0,
                pointerEvents: shouldShow ? 'auto' : 'none'
            }}
            transition={{ 
                x: { duration: isDragging ? 0 : (isChatOpen ? 1 : 2), ease: "easeInOut" }, 
                y: { duration: isDragging ? 0 : (isChatOpen ? 1 : 2), ease: "easeInOut" },
                opacity: { duration: 0.5 }
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="relative group flex flex-col items-center">
                {/* BUBBLE - Independent of body rotation */}
                <AnimatePresence>
                    {(bubbleText && !isChatOpen && shouldShow && !isDragging) && (
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            className={`absolute -top-16 left-1/2 -translate-x-1/2 w-max max-w-[200px] md:max-w-[300px] px-4 py-3 backdrop-blur-xl border rounded-2xl rounded-b-none text-xs font-bold shadow-[0_10px_30px_rgba(0,0,0,0.5)] text-center z-[100] whitespace-normal
                                ${mode === 'threat' ? 'bg-red-500/20 border-red-500/50 text-red-200' : 'bg-white/10 border-white/20 text-white'}
                            `}
                        >
                            {bubbleText}
                        </motion.div>
                    )}
                </AnimatePresence>
                
                {/* Robot Body Container - Rotation Applied Here */}
                <motion.div 
                    onClick={handleRobotClick} 
                    animate={{
                        rotate: mode === 'threat' ? [0, -5, 5, -5, 0] : [0, 1, -1, 0] // Reduced idle rotation for stability
                    }}
                    transition={{
                        rotate: { duration: mode === 'threat' ? 0.2 : 4, repeat: Infinity, ease: "linear" }
                    }}
                    className="transition-transform duration-300 hover:scale-110 active:scale-95 origin-center"
                >
                    <EvaBodyParts emotion={emotion} mousePos={mousePos} mode={mode} />
                </motion.div>
            </div>
        </motion.div>
      </div>

      {/* CHAT INTERFACE LAYER - Now delegated to ChatInterface */}
      <ChatInterface 
          isOpen={isChatOpen} 
          onClose={() => setIsChatOpen(false)} 
          lang={lang} 
          triggerMessage={triggerMessage}
      />
    </>
  );
};

export default EvaRobot;
