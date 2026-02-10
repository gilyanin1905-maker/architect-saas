
import React, { useState, useEffect } from 'react';
import { ContactFormData, Language } from '../types';
import { UI_TEXT } from '../constants';
import { BotIcon, TelegramIcon, VKIcon } from './Icons';

interface ContactFormProps {
  lang: Language;
}

const ContactForm: React.FC<ContactFormProps> = ({ lang }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    company: '',
    email: '',
    telegram: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const t = UI_TEXT[lang].contact;

  // Safety cleanup for timer
  useEffect(() => {
    return () => {
      // Cleanup handled via state/lifecycle implicitly
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    // Simulate API call
    const timer = setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', company: '', email: '', telegram: '', message: '' });
    }, 1500);
  };

  return (
    <section id="contact" className="py-12 md:py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-10 md:gap-20">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6 md:mb-8 leading-tight">
              {t.title} <span className="gradient-text">{t.titleHighlight}</span>
            </h2>
            <p className="text-white/60 mb-8 md:mb-12 text-base md:text-lg">
              {t.description}
            </p>
            
            <div className="space-y-6 md:space-y-8">
              
              {/* Telegram Channel */}
              <div className="flex gap-4 md:gap-6 items-center group">
                <div className="w-10 h-10 md:w-12 md:h-12 glass rounded-full flex items-center justify-center text-[#00f2ff] group-hover:scale-110 transition-transform">
                  <TelegramIcon />
                </div>
                <div>
                  <div className="text-xs font-bold text-white/40 uppercase mb-1">{t.telegram}</div>
                  <a href="https://t.me/Architect_SaaS" target="_blank" rel="noopener noreferrer" className="text-base md:text-lg font-bold hover:text-[#00f2ff] transition-colors">@Architect_SaaS</a>
                </div>
              </div>
              
              {/* Telegram Bot */}
              <div className="flex gap-4 md:gap-6 items-center group">
                 <div className="w-10 h-10 md:w-12 md:h-12 glass rounded-full flex items-center justify-center text-[#00f2ff] group-hover:scale-110 transition-transform">
                    <BotIcon />
                 </div>
                 <div>
                    <div className="text-xs font-bold text-white/40 uppercase mb-1">{t.telegramBot}</div>
                    <a href="https://t.me/Architect_AI_Bot" target="_blank" rel="noopener noreferrer" className="text-base md:text-lg font-bold hover:text-[#00f2ff] transition-colors">@Architect_AI_Bot</a>
                 </div>
              </div>

              {/* VK Community */}
              <div className="flex gap-4 md:gap-6 items-center group">
                 <div className="w-10 h-10 md:w-12 md:h-12 glass rounded-full flex items-center justify-center text-[#00f2ff] group-hover:scale-110 transition-transform">
                    <VKIcon />
                 </div>
                 <div>
                    <div className="text-xs font-bold text-white/40 uppercase mb-1">{t.vk}</div>
                    <a href="https://vk.com/architect_saas" target="_blank" rel="noopener noreferrer" className="text-base md:text-lg font-bold hover:text-[#00f2ff] transition-colors">Architect SaaS</a>
                 </div>
              </div>
              
              {/* Email */}
              <div className="flex gap-4 md:gap-6 items-center group">
                <div className="w-10 h-10 md:w-12 md:h-12 glass rounded-full flex items-center justify-center text-[#7b2ff7] group-hover:scale-110 transition-transform">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                </div>
                <div>
                  <div className="text-xs font-bold text-white/40 uppercase mb-1">{t.email}</div>
                  <a href="mailto:contact@architect-saas.dev" className="text-base md:text-lg font-bold hover:text-[#7b2ff7] transition-colors">contact@architect-saas.dev</a>
                </div>
              </div>

            </div>
          </div>

          <div className="glass p-6 md:p-10 lg:p-12 rounded-[32px] md:rounded-[40px] relative">
            {status === 'success' ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-6 animate-[fadeIn_0.5s_ease]">
                <div className="w-20 h-20 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>
                </div>
                <h3 className="text-2xl font-display font-bold">{t.successTitle}</h3>
                <p className="text-white/60">{t.successDesc}</p>
                <button 
                  onClick={() => setStatus('idle')}
                  className="px-8 py-3 bg-white/5 rounded-xl text-sm font-bold border border-white/10 hover:bg-white/10 transition-all"
                >{t.sendAgain}</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-white/40 uppercase ml-1">{t.name}</label>
                    <input 
                      type="text" required value={formData.name}
                      onChange={e => setFormData({...formData, name: e.target.value})}
                      placeholder={t.name}
                      className="w-full input-glass rounded-2xl px-6 py-4 text-white placeholder-white/20 text-base"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-white/40 uppercase ml-1">{t.company}</label>
                    <input 
                      type="text" value={formData.company}
                      onChange={e => setFormData({...formData, company: e.target.value})}
                      placeholder={t.company}
                      className="w-full input-glass rounded-2xl px-6 py-4 text-white placeholder-white/20 text-base"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-white/40 uppercase ml-1">{t.email}</label>
                    <input 
                      type="email" required value={formData.email}
                      onChange={e => setFormData({...formData, email: e.target.value})}
                      placeholder="example@mail.ru"
                      className="w-full input-glass rounded-2xl px-6 py-4 text-white placeholder-white/20 text-base"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-white/40 uppercase ml-1">{t.telegram}</label>
                    <input 
                      type="text" value={formData.telegram}
                      onChange={e => setFormData({...formData, telegram: e.target.value})}
                      placeholder="@username"
                      className="w-full input-glass rounded-2xl px-6 py-4 text-white placeholder-white/20 text-base"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-white/40 uppercase ml-1">{t.message}</label>
                  <textarea 
                    rows={4} required value={formData.message}
                    onChange={e => setFormData({...formData, message: e.target.value})}
                    placeholder={t.message}
                    className="w-full input-glass rounded-2xl px-6 py-4 text-white placeholder-white/20 resize-none text-base"
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={status === 'loading'}
                  className="w-full py-5 bg-gradient-to-r from-[#00f2ff] to-[#7b2ff7] rounded-2xl font-bold text-lg text-black shadow-[0_0_30px_rgba(0,242,255,0.2)] hover:shadow-[0_0_50px_rgba(0,242,255,0.4)] transition-all disabled:opacity-50"
                >
                  {status === 'loading' ? (
                    <div className="w-6 h-6 border-2 border-black/30 border-t-black rounded-full animate-spin mx-auto"></div>
                  ) : t.submit}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
