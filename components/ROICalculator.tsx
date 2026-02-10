
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Language } from '../types';
import { UI_TEXT } from '../constants';

interface ROICalculatorProps {
  lang: Language;
}

const ROICalculator: React.FC<ROICalculatorProps> = ({ lang }) => {
  const [requests, setRequests] = useState(1000);
  const [tokens, setTokens] = useState(500);
  const t = UI_TEXT[lang].roi;

  const cloudCostPerMillion = 20; 
  const monthlyCloudCost = (requests * 30 * tokens) / 1000000 * cloudCostPerMillion;
  const monthlyLocalCost = 450; 
  const monthlySavings = monthlyCloudCost - monthlyLocalCost;
  const savingsPercent = Math.max(0, Math.min(100, Math.round((monthlySavings / monthlyCloudCost) * 100)));

  return (
    <section id="roi" className="py-8 md:py-24 relative">
      <div className="container mx-auto px-6">
        <div className="glass rounded-[32px] md:rounded-[40px] p-6 md:p-12 lg:p-20 overflow-hidden relative transition-all duration-700">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#7b2ff7]/20 rounded-full blur-[120px] -z-10 translate-x-1/2 -translate-y-1/2"></div>
          
          <div className="grid lg:grid-cols-2 gap-8 md:gap-20 items-start">
            
            {/* Left: Commercial Logic & Graph */}
            <div className="space-y-8">
              <div>
                <div className="text-[8px] md:text-[10px] font-mono font-bold uppercase tracking-[0.5em] text-[#00f2ff] mb-2 md:mb-4">{t.label}</div>
                <h2 className="text-2xl md:text-4xl font-display font-bold mb-4 md:mb-6">{t.title} <span className="gradient-text">{t.titleHighlight}</span></h2>
                <p className="text-white/50 leading-relaxed font-light text-xs md:text-base">
                    {t.description}
                </p>
              </div>

              {/* Strategic Graph: Capex vs Opex */}
              <div className="p-6 bg-black/20 rounded-2xl border border-white/5">
                 <h4 className="text-xs font-bold text-white/60 mb-6 uppercase tracking-widest">{t.chartTitle}</h4>
                 <div className="relative h-48 w-full flex items-end justify-between gap-2 pl-8 pb-8 border-l border-b border-white/10">
                    
                    {/* Y-Axis Label */}
                    <div className="absolute left-0 top-0 -rotate-90 origin-top-left text-[9px] text-white/30 tracking-widest">COST ($)</div>

                    {/* Chart Bars/Lines Simulation */}
                    <div className="w-full h-full relative">
                        {/* Cloud Line (Linear Growth) */}
                        <svg className="absolute inset-0 w-full h-full overflow-visible">
                            <motion.path 
                                d="M0,192 L400,20" 
                                fill="none" stroke="#ef4444" strokeWidth="2" strokeDasharray="4 4"
                                initial={{ pathLength: 0 }}
                                whileInView={{ pathLength: 1 }}
                                transition={{ duration: 2 }}
                            />
                            <text x="350" y="15" fill="#ef4444" fontSize="10">Cloud (∞)</text>

                            {/* Local Line (Flat after Capex) */}
                             <motion.path 
                                d="M0,100 L50,100 L400,180" 
                                fill="none" stroke="#00f2ff" strokeWidth="3"
                                initial={{ pathLength: 0 }}
                                whileInView={{ pathLength: 1 }}
                                transition={{ duration: 2, delay: 0.5 }}
                            />
                             <text x="350" y="170" fill="#00f2ff" fontSize="10">Local (Flat)</text>
                        </svg>

                        {/* Break-even point */}
                        <motion.div 
                            className="absolute bg-white rounded-full w-3 h-3 border-2 border-[#00f2ff]"
                            style={{ left: '35%', top: '45%' }}
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            transition={{ delay: 2 }}
                        >
                             <div className="absolute top-4 -left-4 w-max text-[9px] bg-white/10 backdrop-blur px-2 py-1 rounded text-white">ROI Point</div>
                        </motion.div>
                    </div>

                    {/* X-Axis Label */}
                    <div className="absolute bottom-[-20px] right-0 text-[9px] text-white/30 tracking-widest">TIME (MONTHS)</div>
                 </div>
                 
                 <div className="flex justify-between mt-4 text-[10px] text-white/40">
                     <div className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-red-500"></span>{t.chartCloud}</div>
                     <div className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-[#00f2ff]"></span>{t.chartLocal}</div>
                 </div>
              </div>
            </div>

            {/* Right: Interactive Calculator */}
            <div className="glass-panel rounded-[24px] md:rounded-[32px] p-6 md:p-10 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-[#00f2ff]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              
              {/* Inputs */}
              <div className="space-y-6 md:space-y-8 mb-8 relative z-10">
                <div>
                  <div className="flex justify-between mb-2 md:mb-4">
                    <label className="text-xs font-bold text-white/40 uppercase tracking-widest">{t.requestsLabel}</label>
                    <span className="text-[#00f2ff] font-mono font-bold">{requests.toLocaleString()}</span>
                  </div>
                  <input 
                    type="range" min="100" max="10000" step="100" 
                    value={requests} onChange={(e) => setRequests(parseInt(e.target.value))}
                    className="w-full h-[2px] bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#00f2ff]"
                  />
                </div>
                
                <div>
                  <div className="flex justify-between mb-2 md:mb-4">
                    <label className="text-xs font-bold text-white/40 uppercase tracking-widest">{t.tokensLabel}</label>
                    <span className="text-[#00f2ff] font-mono font-bold">{tokens}</span>
                  </div>
                  <input 
                    type="range" min="100" max="2000" step="50" 
                    value={tokens} onChange={(e) => setTokens(parseInt(e.target.value))}
                    className="w-full h-[2px] bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#00f2ff]"
                  />
                </div>
              </div>

              <div className="text-center mb-6 md:mb-10 relative z-10">
                <div className="text-[9px] md:text-[10px] font-bold text-white/30 uppercase tracking-[4px] mb-2">{t.monthlySavings}</div>
                <div className="text-5xl md:text-7xl font-display font-black text-white tracking-tight">
                  ${Math.max(0, Math.round(monthlySavings)).toLocaleString()}
                </div>
                <div className="text-xs font-bold text-[#7b2ff7] mt-3 uppercase tracking-widest">{t.profit} {savingsPercent}%</div>
              </div>

              <div className="space-y-4 relative z-10">
                <div className="flex justify-between text-[11px] py-4 border-b border-white/5">
                  <span className="text-white/40 uppercase tracking-widest">{t.cloudCost}</span>
                  <span className="font-mono text-white/70">${Math.round(monthlyCloudCost).toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-[11px] py-4 border-b border-white/5">
                  <span className="text-white/40 uppercase tracking-widest">{t.localNode}</span>
                  <span className="font-mono text-[#00f2ff]">${monthlyLocalCost}</span>
                </div>
                <div className="pt-6 md:pt-8">
                  <a 
                    href="#contact"
                    className="luxury-button w-full inline-block py-4 md:py-5 bg-white/5 hover:bg-white/10 rounded-2xl font-bold transition-all border border-white/10 text-center text-xs uppercase tracking-[0.2em]"
                  >
                    {t.cta}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ROICalculator;
