
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BLOG_DATA, UI_TEXT } from '../constants';
import { Language } from '../types';
import { XIcon } from './Icons';

interface BlogModalProps {
    isOpen: boolean;
    onClose: () => void;
    lang: Language;
}

const BlogModal: React.FC<BlogModalProps> = ({ isOpen, onClose, lang }) => {
    const posts = BLOG_DATA[lang];

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/80 backdrop-blur-md z-[200]"
                        onClick={onClose}
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, y: 50 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.8, y: 50 }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        className="fixed inset-0 pointer-events-none flex items-center justify-center z-[201] p-4 md:p-10"
                    >
                        <div 
                            className="pointer-events-auto w-full max-w-4xl h-[80vh] bg-[#050816] [.light_&]:bg-white border border-white/10 rounded-[40px] shadow-2xl overflow-hidden flex flex-col relative"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Header */}
                            <div className="flex justify-between items-center p-8 border-b border-white/5 bg-[#050816] [.light_&]:bg-white z-20">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-[#7b2ff7] flex items-center justify-center text-white">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5"/><path d="M8.5 8.5v.01"/><path d="M16 12v.01"/><path d="M12 16v.01"/></svg>
                                    </div>
                                    <div>
                                        <h3 className="font-display font-bold text-2xl text-white [.light_&]:text-black">Architect <span className="text-[#7b2ff7]">Feed</span></h3>
                                        <p className="text-white/40 text-xs uppercase tracking-widest">Latest updates & insights</p>
                                    </div>
                                </div>
                                <button 
                                    onClick={onClose}
                                    className="w-12 h-12 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors text-white [.light_&]:text-black"
                                >
                                    <XIcon />
                                </button>
                            </div>

                            {/* Feed Content */}
                            <div className="flex-1 overflow-y-auto p-8 space-y-4 md:space-y-6">
                                {posts.map((post) => (
                                    <motion.article 
                                        key={post.id}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        whileHover={{ scale: 1.01 }}
                                        className="group relative overflow-hidden rounded-2xl bg-white/5 [.light_&]:bg-black/5 border border-white/5 hover:border-[#7b2ff7]/30 transition-all p-6 md:p-8 cursor-pointer"
                                    >
                                        <div className="absolute top-0 right-0 p-6 opacity-50 group-hover:opacity-100 transition-opacity">
                                             <svg className="w-6 h-6 text-white/20 group-hover:text-[#7b2ff7] -rotate-45" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                                        </div>

                                        <div className="flex gap-4 items-center mb-4 text-xs font-mono">
                                            <span className="text-[#00f2ff] font-bold">{post.date}</span>
                                            <span className="px-2 py-0.5 rounded border border-white/10 text-white/40">{post.tag}</span>
                                            <span className="text-white/30">{post.readTime} read</span>
                                        </div>
                                        
                                        <h4 className="text-xl md:text-2xl font-bold text-white [.light_&]:text-black mb-3 group-hover:text-[#7b2ff7] transition-colors">{post.title}</h4>
                                        <p className="text-white/60 [.light_&]:text-black/60 leading-relaxed max-w-2xl">{post.excerpt}</p>
                                    </motion.article>
                                ))}
                                
                                <div className="p-8 text-center border-t border-white/5 mt-8">
                                    <p className="text-white/30 text-sm">End of feed. Stay tuned for more.</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default BlogModal;
