
import React, { useState, useEffect, useRef, useMemo, useCallback, Suspense, lazy } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import SpaceBackground from './components/SpaceBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Loader from './components/Loader';
import Preloader from './components/Preloader';
import EvaRobot from './components/EvaRobot'; 
import { Language } from './types';

// --- IMPORT FACTORIES (For Manual Preloading) ---
const SectionImports = {
  whylocal: () => import('./components/WhyLocalAI'),
  individuals: () => import('./components/Individuals'),
  services: () => import('./components/Services'),
  cases: () => import('./components/Cases'),
  process: () => import('./components/Process'),
  about: () => import('./components/About'),
  roi: () => import('./components/ROICalculator'),
  faq: () => import('./components/FAQ'),
  contact: () => import('./components/ContactForm'),
  footer: () => import('./components/Footer'),
};

// --- LAZY COMPONENTS ---
const WhyLocalAI = lazy(SectionImports.whylocal);
const Individuals = lazy(SectionImports.individuals);
const Services = lazy(SectionImports.services);
const Cases = lazy(SectionImports.cases);
const Process = lazy(SectionImports.process);
const About = lazy(SectionImports.about);
const ROICalculator = lazy(SectionImports.roi);
const FAQ = lazy(SectionImports.faq);
const ContactForm = lazy(SectionImports.contact);
const Footer = lazy(SectionImports.footer);

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [lang, setLang] = useState<Language>(Language.RU);
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [activeSection, setActiveSection] = useState(0);
  const [isNavVisible, setIsNavVisible] = useState(true);
  
  // NEW: Lifted Chat State
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatTriggerMessage, setChatTriggerMessage] = useState<string | null>(null);
  
  const containerRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLElement>(null);
  const isFooterInView = useInView(footerRef, { amount: 0.3 });

  const isScrolling = useRef(false);
  const lastScrollTop = useRef(0);

  // --- PRELOADING LOGIC ---
  useEffect(() => {
    // Array matching the order of sections in the 'sections' useMemo
    const loadOrder = [
        null, // 0: Hero (Static)
        SectionImports.whylocal, // 1
        SectionImports.individuals, // 2
        SectionImports.services, // 3
        SectionImports.cases, // 4
        SectionImports.process, // 5
        SectionImports.about, // 6
        SectionImports.roi, // 7
        SectionImports.faq, // 8
        SectionImports.contact, // 9
        SectionImports.footer // 10 (Footer)
    ];

    const preload = (index: number) => {
        if (index > 0 && index < loadOrder.length) {
            const loader = loadOrder[index];
            if (loader) {
                // Execute the import function to start fetching the chunk
                loader();
            }
        }
    };

    // Load next 2 sections ahead of current scroll position
    preload(activeSection + 1);
    preload(activeSection + 2);
    
    // Also aggressively preload footer if we are past halfway
    if (activeSection > 5) {
        SectionImports.footer();
    }

  }, [activeSection]);

  useEffect(() => {
    if (theme === 'light') {
      document.body.classList.add('light');
    } else {
      document.body.classList.remove('light');
    }
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  }, []);

  const handleDiscuss = useCallback((serviceTitle: string) => {
      const message = lang === Language.RU 
        ? `Я хочу узнать больше про услугу: ${serviceTitle}.`
        : `I would like to know more about the service: ${serviceTitle}.`;
      
      setChatTriggerMessage(message);
      setIsChatOpen(true);
  }, [lang]);

  const sections = useMemo(() => [
    { id: 'hero', component: <Hero lang={lang} />, isLazy: false, noPadding: true },
    { id: 'whylocal', component: <WhyLocalAI lang={lang} />, isLazy: true, disableWrapperAnimation: true },
    { id: 'individuals', component: <Individuals lang={lang} />, isLazy: true, disableWrapperAnimation: true },
    { id: 'services', component: <Services lang={lang} onDiscuss={handleDiscuss} />, isLazy: true },
    { id: 'cases', component: <Cases lang={lang} />, isLazy: true },
    { id: 'process', component: <Process theme={theme} lang={lang} />, isLazy: true },
    { id: 'about', component: <About lang={lang} />, isLazy: true }, 
    { id: 'roi', component: <ROICalculator lang={lang} />, isLazy: true },
    { id: 'faq', component: <FAQ lang={lang} />, isLazy: true },
    { id: 'contact', component: <ContactForm lang={lang} />, isLazy: true }
  ], [theme, lang, handleDiscuss]);

  const handleScroll = useCallback((e: React.UIEvent<HTMLDivElement>) => {
    const scrollTop = e.currentTarget.scrollTop;
    const height = window.innerHeight;

    const heroHeight = height * 0.9;
    
    if (scrollTop < heroHeight) {
        setIsNavVisible(true);
    } else {
        const diff = scrollTop - lastScrollTop.current;
        if (Math.abs(diff) > 10) {
            if (diff > 0) {
                setIsNavVisible(false);
            } else {
                setIsNavVisible(true);
            }
        }
    }
    lastScrollTop.current = scrollTop;

    if (!isScrolling.current) {
      window.requestAnimationFrame(() => {
        const index = Math.round(scrollTop / height);
        setActiveSection(prev => (prev !== index ? index : prev));
        isScrolling.current = false;
      });
      isScrolling.current = true;
    }
  }, []);

  const scrollToSection = useCallback((index: number) => {
    const container = containerRef.current;
    if (container) {
      const height = window.innerHeight;
      container.scrollTo({
        top: index * height,
        behavior: 'smooth'
      });
    }
  }, []);

  const handleNavigate = useCallback((id: string) => {
    const targetId = id.replace('#', '');
    const index = sections.findIndex(s => s.id === targetId);
    if (index !== -1) {
      scrollToSection(index);
    }
  }, [sections, scrollToSection]);

  const isRobotSectionVisible = activeSection === 0 || isFooterInView;

  return (
    <div className="relative h-[100dvh] w-full overflow-hidden transition-colors duration-700 bg-black">
      <AnimatePresence>
        {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      <SpaceBackground theme={theme} />
      
      <Navbar 
        lang={lang} 
        onLangChange={setLang} 
        onNavigate={handleNavigate}
        theme={theme}
        onThemeToggle={toggleTheme}
        isVisible={isNavVisible && !isChatOpen}
      />
      
      <EvaRobot 
        isChatOpen={isChatOpen} 
        setIsChatOpen={setIsChatOpen} 
        isVisible={isRobotSectionVisible}
        lang={lang}
        triggerMessage={chatTriggerMessage}
      />

      <div className={`fixed right-8 top-1/2 -translate-x-1/2 z-[100] hidden lg:flex flex-col gap-4 items-center transition-opacity duration-500 ${isChatOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
        {sections.map((_, i) => (
          <button 
            key={i} 
            onClick={() => scrollToSection(i)}
            className={`scroll-dot ${activeSection === i ? 'active' : ''} cursor-pointer hover:bg-[#00f2ff]/50`}
            aria-label={`Scroll to section ${i + 1}`}
          />
        ))}
      </div>

      <main 
        ref={containerRef} 
        onScroll={handleScroll}
        className="snap-container relative z-10"
      >
        {sections.map((section) => (
          <SectionWrapper 
             key={section.id} 
             id={section.id} 
             disableWrapperAnimation={section.disableWrapperAnimation}
             noPadding={section.noPadding}
          >
             {section.isLazy ? (
                 <Suspense fallback={<Loader />}>
                     {section.component}
                 </Suspense>
             ) : (
                 section.component
             )}
          </SectionWrapper>
        ))}

        <section ref={footerRef} className="snap-section !h-auto !min-h-0 !pb-24 lg:!pb-0">
           <div className="w-full">
               <Suspense fallback={<div className="h-20 bg-black/10"></div>}>
                   <Footer onNavigate={handleNavigate} lang={lang} />
               </Suspense>
           </div>
        </section>
      </main>
    </div>
  );
};

const SectionWrapper: React.FC<{ children: React.ReactNode; id: string; disableWrapperAnimation?: boolean; noPadding?: boolean }> = React.memo(({ children, id, disableWrapperAnimation, noPadding }) => {
  const ref = useRef(null);
  // Increased threshold slightly to avoid premature animation trigger before full mount
  const isInView = useInView(ref, { amount: 0.15, once: true }); 

  if (disableWrapperAnimation) {
    return (
        <section ref={ref} id={id} className={`snap-section ${noPadding ? '!py-0' : ''}`}>
            <div className="w-full">
                {children}
            </div>
        </section>
    );
  }

  return (
    <section 
      ref={ref} 
      id={id} 
      className={`snap-section ${noPadding ? '!py-0' : ''}`}
    >
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="w-full flex items-center justify-center will-change-transform"
      >
        {children}
      </motion.div>
    </section>
  );
});

export default App;
