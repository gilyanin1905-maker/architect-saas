
import React, { useState, useEffect, useRef, FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BotIcon, XIcon, MicIcon, MenuIcon, EditIcon, CopyIcon, ReplyIcon, CheckIcon, TrashIcon, ChevronDown } from './Icons';
import { Language } from '../types';
import { UI_TEXT } from '../constants';

// --- Types ---
interface Message {
  id: string;
  role: 'user' | 'assistant' | 'system';
  content: string;
  timestamp: number;
  status?: 'sent' | 'read';
  replyToId?: string; 
  isEdited?: boolean; 
}

interface ChatSession {
    id: string;
    title: string;
    messages: Message[];
    lastActive: number;
}

interface ChatInterfaceProps {
    isOpen: boolean;
    onClose: () => void;
    lang: Language;
    triggerMessage?: string | null;
}

// --- CONFIG ---
const API_URL = "https://openrouter.ai/api/v1/chat/completions";
const MODEL = "google/gemini-2.0-flash-001"; 
const API_KEY = "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"; 
const SITE_URL = "https://architect-saas.dev";
const SITE_NAME = "Architect SaaS";

const generateId = () => Math.random().toString(36).substr(2, 9);

const ChatInterface: React.FC<ChatInterfaceProps> = ({ isOpen, onClose, lang, triggerMessage }) => {
    const t = UI_TEXT[lang].robot;
    
    // State
    const [sessions, setSessions] = useState<ChatSession[]>([]);
    const [activeSessionId, setActiveSessionId] = useState<string | null>(null);
    const [inputValue, setInputValue] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [showScrollButton, setShowScrollButton] = useState(false);

    // Interaction State
    const [hoveredMessageId, setHoveredMessageId] = useState<string | null>(null);
    const [replyingToMessageId, setReplyingToMessageId] = useState<string | null>(null);
    const [editingMessageId, setEditingMessageId] = useState<string | null>(null);
    
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const messagesContainerRef = useRef<HTMLDivElement>(null);
    const textareaRef = useRef<HTMLTextAreaElement>(null);
    const triggerHandledRef = useRef<string | null>(null);

    // Initialize Chat
    useEffect(() => {
        if (sessions.length === 0) {
            createNewSession();
        }
    }, []);

    // Handle External Trigger (e.g., from Services section)
    useEffect(() => {
        if (triggerMessage && triggerMessage !== triggerHandledRef.current && activeSessionId) {
            // Send the trigger message as if typed by user
            setInputValue(triggerMessage);
            // We need a slight delay to allow state update or ensure session is ready
            setTimeout(() => {
                handleSendMessage(undefined, triggerMessage); // Pass explicit message
                triggerHandledRef.current = triggerMessage;
            }, 100);
        }
    }, [triggerMessage, activeSessionId]);

    // --- SCROLL LOGIC ---
    const scrollToBottom = (force = false) => {
        if (!messagesContainerRef.current) return;
        
        const { scrollTop, scrollHeight, clientHeight } = messagesContainerRef.current;
        // Check if user is near bottom (allow some buffer)
        const isNearBottom = scrollHeight - scrollTop - clientHeight < 150;

        if (force || isNearBottom) {
            // Using a small timeout ensures layout is fully recalculated before scrolling
            setTimeout(() => {
                messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
            }, 50);
        }
    };

    // Listen to scroll to toggle "Scroll Down" button
    useEffect(() => {
        const container = messagesContainerRef.current;
        if (!container) return;

        const handleScroll = () => {
            const { scrollTop, scrollHeight, clientHeight } = container;
            const isNearBottom = scrollHeight - scrollTop - clientHeight < 150;
            setShowScrollButton(!isNearBottom);
        };

        container.addEventListener('scroll', handleScroll);
        return () => container.removeEventListener('scroll', handleScroll);
    }, [activeSessionId, sessions]); // Re-bind when session changes to reset state

    // Auto-scroll on new messages
    useEffect(() => {
        scrollToBottom();
    }, [sessions, isTyping, replyingToMessageId, editingMessageId]);

    // Focus input on action
    useEffect(() => {
        if ((replyingToMessageId || editingMessageId) && textareaRef.current) {
            textareaRef.current.focus();
        }
    }, [replyingToMessageId, editingMessageId]);

    // Auto-resize textarea
    useEffect(() => {
        if (textareaRef.current) {
            textareaRef.current.style.height = 'auto';
            textareaRef.current.style.height = Math.min(textareaRef.current.scrollHeight, 120) + 'px';
        }
    }, [inputValue]);

    const activeSession = sessions.find(s => s.id === activeSessionId);
    const messages = activeSession ? activeSession.messages : [];
    
    // Helper: Find message by ID
    const getMessageById = (id: string) => messages.find(m => m.id === id);
    const replyContextMessage = replyingToMessageId ? getMessageById(replyingToMessageId) : null;

    // --- SESSION MANAGEMENT ---

    const createNewSession = () => {
        const newId = generateId();
        const initialMsg: Message = { 
            id: generateId(), 
            role: 'assistant', 
            content: t.initial, 
            timestamp: Date.now() 
        };
        
        const newSession: ChatSession = {
            id: newId,
            title: t.newChat,
            messages: [initialMsg],
            lastActive: Date.now()
        };

        setSessions(prev => [newSession, ...prev]);
        setActiveSessionId(newId);
        setIsSidebarOpen(false);
    };

    const deleteSession = (e: React.MouseEvent, sessionId: string) => {
        e.stopPropagation();
        const newSessions = sessions.filter(s => s.id !== sessionId);
        setSessions(newSessions);
        if (activeSessionId === sessionId) {
            if (newSessions.length > 0) {
                setActiveSessionId(newSessions[0].id);
            } else {
                createNewSession();
            }
        }
    };

    const formatTime = (timestamp: number) => {
        return new Date(timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    };

    const formatDate = (timestamp: number) => {
        return new Date(timestamp).toLocaleDateString(undefined, { weekday: 'long', month: 'short', day: 'numeric' });
    };

    const isNewDay = (current: number, prev: number) => {
        const d1 = new Date(current);
        const d2 = new Date(prev);
        return d1.toDateString() !== d2.toDateString();
    };

    // --- MESSAGE ACTIONS ---

    const handleCopy = (text: string) => {
        navigator.clipboard.writeText(text);
        setHoveredMessageId(null);
    };

    const handleDeleteMessage = (msgId: string) => {
        if (!activeSessionId) return;
        setSessions(prev => prev.map(s => {
            if (s.id === activeSessionId) {
                return { ...s, messages: s.messages.filter(m => m.id !== msgId) };
            }
            return s;
        }));
    };

    const startReply = (msg: Message) => {
        setReplyingToMessageId(msg.id);
        setEditingMessageId(null);
    };

    const startEdit = (msg: Message) => {
        setEditingMessageId(msg.id);
        setReplyingToMessageId(null);
        setInputValue(msg.content);
        if (textareaRef.current) textareaRef.current.style.height = 'auto'; 
    };

    const cancelAction = () => {
        setReplyingToMessageId(null);
        setEditingMessageId(null);
        setInputValue('');
        if (textareaRef.current) textareaRef.current.style.height = 'auto';
    };

    // Modified to accept an optional forced text (for triggers)
    const handleSendMessage = async (e?: FormEvent, forcedText?: string) => {
        e?.preventDefault();
        
        const textToUse = forcedText !== undefined ? forcedText : inputValue;
        if (!textToUse.trim() || !activeSessionId) return;
        
        const currentSessionId = activeSessionId;
        const text = textToUse.trim();
        
        // --- CASE 1: EDITING EXISTING MESSAGE ---
        if (editingMessageId && !forcedText) {
             setSessions(prev => prev.map(s => {
                if (s.id === currentSessionId) {
                    const msgIndex = s.messages.findIndex(m => m.id === editingMessageId);
                    if (msgIndex === -1) return s;

                    // Keep messages up to edited one
                    const newMessages = s.messages.slice(0, msgIndex + 1);
                    newMessages[msgIndex] = {
                        ...newMessages[msgIndex],
                        content: text,
                        isEdited: true
                    };

                    return { ...s, messages: newMessages, lastActive: Date.now() };
                }
                return s;
             }));
             
             setEditingMessageId(null);
             setInputValue('');
             setIsTyping(true);

             // Regenerate response from this point
             try {
                 const currentSession = sessions.find(s => s.id === currentSessionId);
                 if (!currentSession) return;
                 
                 const msgIndex = currentSession.messages.findIndex(m => m.id === editingMessageId);
                 const history = currentSession.messages.slice(0, msgIndex); 
                 const editedMsg: Message = { ...currentSession.messages[msgIndex], content: text };
                 const contextMessages = [...history, editedMsg].map(m => ({ role: m.role, content: m.content })).slice(-10);

                 await fetchAIResponse(contextMessages, currentSessionId);
             } catch (error) {
                 console.error(error);
             } finally {
                 setIsTyping(false);
             }
             return;
        }

        // --- CASE 2: NEW MESSAGE ---
        const userMsgId = generateId();
        const userMsg: Message = { 
            id: userMsgId, 
            role: 'user', 
            content: text, 
            timestamp: Date.now(),
            status: 'sent',
            replyToId: replyingToMessageId || undefined
        };

        // Optimistic Update
        setSessions(prev => prev.map(s => {
            if (s.id === currentSessionId) {
                const isFirstUserMsg = s.messages.length <= 1;
                const newTitle = isFirstUserMsg 
                    ? (text.length > 25 ? text.substring(0, 25) + '...' : text)
                    : s.title;
                
                return {
                    ...s,
                    title: newTitle,
                    messages: [...s.messages, userMsg],
                    lastActive: Date.now()
                };
            }
            return s;
        }));

        const replyContext = replyContextMessage ? `[Context: User replying to message "${replyContextMessage.content}"]\n\n` : '';
        const finalPrompt = replyContext + text;

        setInputValue('');
        setReplyingToMessageId(null);
        setIsTyping(true);
        if (textareaRef.current) textareaRef.current.style.height = 'auto';
        
        scrollToBottom(true);

        try {
            const history = sessions.find(s => s.id === currentSessionId)?.messages || [];
            // We use the original history but modify the last message content for the AI to include context if needed
            const contextMessages = [...history].map(m => ({ role: m.role, content: m.content })).slice(-10);
            
            // Add current message with context injection for the API
            contextMessages.push({ role: 'user', content: finalPrompt });

            await fetchAIResponse(contextMessages, currentSessionId);
        } catch (error) {
            console.error("Critical error in message handling:", error);
            // Fallback message handled in fetchAIResponse catch block
        } finally {
            setIsTyping(false);
            markAsRead(currentSessionId, userMsgId);
        }
    };

    const fetchAIResponse = async (messages: any[], sessionId: string) => {
        try {
            const response = await fetch(API_URL, {
                method: "POST",
                headers: {
                    "Authorization": `Bearer ${API_KEY}`,
                    "HTTP-Referer": SITE_URL,
                    "X-Title": SITE_NAME,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    "model": MODEL,
                    "messages": [
                        { "role": "system", "content": t.systemPrompt },
                        ...messages
                    ],
                    "temperature": 0.7,
                    "max_tokens": 1000
                })
            });

            if (!response.ok) {
                throw new Error(`API Error: ${response.statusText}`);
            }

            const data = await response.json();

            if (data.choices && data.choices[0]) {
                const aiText = data.choices[0].message.content;
                const aiMsg: Message = {
                    id: generateId(),
                    role: 'assistant',
                    content: aiText,
                    timestamp: Date.now()
                };

                setSessions(prev => prev.map(s => 
                    s.id === sessionId 
                    ? { ...s, messages: [...s.messages, aiMsg] }
                    : s
                ));
            } else {
                throw new Error("Invalid API response");
            }
        } catch (error) {
            console.warn("API Request Failed (likely due to invalid key or network issue). Falling back to offline mode.", error);
            
            // Fallback Simulation to prevent "Failed to fetch" crash
            setTimeout(() => {
                const fallbackMsg: Message = {
                    id: generateId(),
                    role: 'assistant',
                    content: "CONNECTION STATUS: OFFLINE. \n\nI am currently operating in a restricted demo environment. The OpenRouter API key may be invalid or restricted in this preview. I can still queue your requests locally, but I cannot generate live intelligence at this moment.",
                    timestamp: Date.now()
                };
                setSessions(prev => prev.map(s => 
                    s.id === sessionId 
                    ? { ...s, messages: [...s.messages, fallbackMsg] }
                    : s
                ));
            }, 1500);
        }
    };

    const markAsRead = (sessionId: string, msgId: string) => {
        setSessions(prev => prev.map(s => 
            s.id === sessionId 
            ? { 
                ...s, 
                messages: s.messages.map(m => m.id === msgId ? { ...m, status: 'read' } : m) 
              }
            : s
        ));
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSendMessage();
        }
        if (e.key === 'Escape') {
            cancelAction();
        }
    };

    // --- RENDER ---
    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[90] flex flex-col items-center justify-center"
            >
                {/* Backdrop */}
                <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />

                {/* Main Window */}
                <motion.div 
                    initial={{ scale: 0.95, opacity: 0, y: 20 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    exit={{ scale: 0.95, opacity: 0, y: 20 }}
                    className="relative w-full h-[100dvh] md:h-[85vh] md:max-w-6xl bg-[#0e1621] md:rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row border border-white/5"
                >
                    
                    {/* LEFT SIDEBAR (Sessions) */}
                    <div className={`
                        absolute inset-y-0 left-0 z-20 w-80 bg-[#17212b] border-r border-black/20 transform transition-transform duration-300
                        md:relative md:translate-x-0
                        ${isSidebarOpen ? 'translate-x-0 shadow-[10px_0_30px_rgba(0,0,0,0.5)]' : '-translate-x-full'}
                    `}>
                        {/* Sidebar Header */}
                        <div className="h-16 flex items-center justify-between px-4 border-b border-white/5 bg-[#17212b]">
                            <div className="flex items-center gap-2 text-white font-bold">
                                <MenuIcon className="w-5 h-5 text-white/50" />
                                <span>Architect AI</span>
                            </div>
                            <button onClick={() => setIsSidebarOpen(false)} className="md:hidden text-white/50">
                                <XIcon className="w-6 h-6" />
                            </button>
                        </div>

                        {/* Session List */}
                        <div className="overflow-y-auto h-[calc(100%-4rem)] p-2">
                            <button 
                                onClick={createNewSession}
                                className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-[#2b5278]/30 text-[#00f2ff] transition-all mb-4 group"
                            >
                                <div className="w-10 h-10 rounded-full bg-[#00f2ff]/10 flex items-center justify-center group-hover:bg-[#00f2ff] group-hover:text-black transition-colors">
                                    <span className="text-xl">+</span>
                                </div>
                                <span className="font-bold text-sm">{t.newChat}</span>
                            </button>

                            {sessions.map(session => (
                                <div
                                    key={session.id}
                                    className={`group w-full flex items-center gap-3 p-3 rounded-xl transition-all mb-1 text-left relative cursor-pointer
                                        ${session.id === activeSessionId ? 'bg-[#2b5278] text-white' : 'hover:bg-[#2b5278]/50 text-white/70'}
                                    `}
                                    onClick={() => {
                                        setActiveSessionId(session.id);
                                        setIsSidebarOpen(false);
                                    }}
                                >
                                    <div className={`w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center font-bold text-sm
                                        ${session.id === activeSessionId ? 'bg-[#5288c1] text-white' : 'bg-[#182533] text-white/40'}
                                    `}>
                                        {session.title.charAt(0).toUpperCase()}
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <div className="flex justify-between items-baseline">
                                            <span className="font-bold text-sm truncate pr-2">{session.title}</span>
                                            <span className="text-[10px] text-white/30 whitespace-nowrap">{formatTime(session.lastActive)}</span>
                                        </div>
                                        <div className="text-xs text-white/40 truncate">
                                            {session.messages[session.messages.length-1]?.content}
                                        </div>
                                    </div>
                                    
                                    {/* Delete Session Button (Hover) */}
                                    <button 
                                        onClick={(e) => deleteSession(e, session.id)}
                                        className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-white/30 hover:text-red-400 opacity-0 group-hover:opacity-100 transition-opacity bg-[#17212b] rounded-full shadow-md"
                                    >
                                        <TrashIcon width={14} height={14} />
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* RIGHT CHAT AREA */}
                    <div className="flex-1 flex flex-col bg-[#0e1621] relative w-full h-full">
                        
                        {/* Header */}
                        <div className="h-16 flex items-center justify-between px-4 md:px-6 bg-[#17212b] border-b border-black/20 z-10 shadow-md">
                            <div className="flex items-center gap-4">
                                <button onClick={() => setIsSidebarOpen(true)} className="md:hidden text-white/70">
                                    <MenuIcon />
                                </button>
                                <div className="flex flex-col">
                                    <h3 className="font-bold text-white flex items-center gap-2">
                                        Eva Architect
                                        <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse shadow-[0_0_8px_#60a5fa]"></span>
                                    </h3>
                                    <span className="text-xs text-[#00f2ff]">bot, online</span>
                                </div>
                            </div>
                            <button onClick={onClose} className="text-white/40 hover:text-white transition-colors">
                                <XIcon />
                            </button>
                        </div>

                        {/* Messages Area - Updated Layout for Bottom Alignment */}
                        <div 
                            ref={messagesContainerRef}
                            className="flex-1 overflow-y-auto bg-[#0e1621] relative scroll-smooth flex flex-col"
                        >
                             {/* Chat Background Pattern */}
                             <div className="absolute inset-0 opacity-[0.03] pointer-events-none sticky top-0" 
                                  style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '20px 20px', height: '100%' }}>
                             </div>

                             {/* Wrapper to push content to bottom */}
                             <div className="mt-auto p-4 md:p-6 w-full space-y-2">
                                 {messages.map((msg, index) => {
                                    const isUser = msg.role === 'user';
                                    const replyTo = msg.replyToId ? getMessageById(msg.replyToId) : undefined;
                                    
                                    // Date Separator Logic
                                    const prevMsg = messages[index - 1];
                                    const showDate = !prevMsg || isNewDay(msg.timestamp, prevMsg.timestamp);
                                    
                                    return (
                                        <React.Fragment key={msg.id}>
                                            {showDate && (
                                                <div className="flex justify-center my-6 sticky top-2 z-10">
                                                    <span className="bg-[#17212b]/80 text-white/40 text-[10px] px-3 py-1 rounded-full backdrop-blur-sm border border-white/5 font-mono uppercase tracking-widest shadow-sm">
                                                        {formatDate(msg.timestamp)}
                                                    </span>
                                                </div>
                                            )}

                                            <motion.div 
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                onMouseEnter={() => setHoveredMessageId(msg.id)}
                                                onMouseLeave={() => setHoveredMessageId(null)}
                                                className={`flex w-full group relative ${isUser ? 'justify-end' : 'justify-start'}`}
                                            >
                                                {/* Action Buttons (Hover) */}
                                                <div className={`absolute top-0 opacity-0 group-hover:opacity-100 transition-opacity flex gap-1 p-1 rounded-lg bg-[#17212b] border border-white/10 shadow-lg z-10
                                                    ${isUser ? 'right-full mr-2' : 'left-full ml-2'}
                                                `}>
                                                    <button onClick={() => startReply(msg)} className="p-1.5 text-white/60 hover:text-[#00f2ff] hover:bg-white/5 rounded" title="Reply">
                                                        <ReplyIcon width={14} height={14} />
                                                    </button>
                                                    <button onClick={() => handleCopy(msg.content)} className="p-1.5 text-white/60 hover:text-[#00f2ff] hover:bg-white/5 rounded" title="Copy">
                                                        <CopyIcon width={14} height={14} />
                                                    </button>
                                                    {isUser && (
                                                        <button onClick={() => startEdit(msg)} className="p-1.5 text-white/60 hover:text-[#00f2ff] hover:bg-white/5 rounded" title="Edit">
                                                            <EditIcon width={14} height={14} />
                                                        </button>
                                                    )}
                                                    <button onClick={() => handleDeleteMessage(msg.id)} className="p-1.5 text-white/60 hover:text-red-400 hover:bg-white/5 rounded" title="Delete">
                                                        <TrashIcon width={14} height={14} />
                                                    </button>
                                                </div>

                                                <div className={`relative max-w-[85%] md:max-w-[70%] min-w-[100px] shadow-sm rounded-2xl text-[15px] leading-relaxed break-words
                                                    ${isUser 
                                                        ? 'bg-[#2b5278] text-white rounded-br-none' 
                                                        : 'bg-[#182533] text-white rounded-bl-none'
                                                    }
                                                `}>
                                                    {/* Reply Context in Bubble */}
                                                    {replyTo ? (
                                                        <div 
                                                            className={`mb-1 mx-2 mt-2 p-2 border-l-2 text-xs truncate cursor-pointer rounded bg-black/10 hover:bg-black/20 transition-colors
                                                            ${isUser ? 'border-white/50 text-white/80' : 'border-[#00f2ff] text-[#00f2ff]'}
                                                        `}
                                                            onClick={() => {
                                                                // Optional: Scroll to message logic here
                                                            }}
                                                        >
                                                            <span className="font-bold block mb-0.5">{replyTo.role === 'user' ? 'You' : 'Eva'}</span>
                                                            <span className="opacity-70">{replyTo.content.substring(0, 50)}...</span>
                                                        </div>
                                                    ) : msg.replyToId && (
                                                        <div className="mb-1 mx-2 mt-2 p-2 border-l-2 border-white/20 text-xs italic opacity-50">
                                                            Message deleted
                                                        </div>
                                                    )}

                                                    <div className="px-4 py-2">
                                                        <div className="whitespace-pre-wrap font-sans">
                                                            {/* Simple Code Block Simulation */}
                                                            {msg.content.split('```').map((part, i) => {
                                                                if (i % 2 === 1) {
                                                                    return <div key={i} className="my-2 p-3 bg-black/30 rounded-lg text-xs font-mono overflow-x-auto border border-white/5 text-[#00f2ff] whitespace-pre">{part}</div>
                                                                }
                                                                return <span key={i}>{part}</span>
                                                            })}
                                                        </div>
                                                    </div>

                                                    <div className={`flex items-center justify-end gap-1 px-4 pb-2 text-[10px] ${isUser ? 'text-[#7faedb]' : 'text-[#6c7883]'}`}>
                                                        {msg.isEdited && <span className="opacity-70 mr-1">edited</span>}
                                                        <span>{formatTime(msg.timestamp)}</span>
                                                        {isUser && (
                                                            <span>
                                                                {msg.status === 'read' ? (
                                                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6L9 17l-5-5"/><path d="M20 12L9 23l-5-5"/></svg>
                                                                ) : (
                                                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6L9 17l-5-5"/></svg>
                                                                )}
                                                            </span>
                                                        )}
                                                    </div>
                                                </div>
                                            </motion.div>
                                        </React.Fragment>
                                    );
                                 })}
                                 
                                 {isTyping && (
                                     <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-start w-full">
                                         <div className="bg-[#182533] px-4 py-3 rounded-2xl rounded-bl-none flex gap-1.5 items-center">
                                             <div className="w-1.5 h-1.5 bg-white/50 rounded-full animate-bounce"></div>
                                             <div className="w-1.5 h-1.5 bg-white/50 rounded-full animate-bounce delay-100"></div>
                                             <div className="w-1.5 h-1.5 bg-white/50 rounded-full animate-bounce delay-200"></div>
                                         </div>
                                     </motion.div>
                                 )}
                                 <div ref={messagesEndRef} />
                             </div>
                        </div>

                        {/* Floating Scroll Down Button */}
                        <AnimatePresence>
                            {showScrollButton && (
                                <motion.button
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 10 }}
                                    onClick={() => scrollToBottom(true)}
                                    className="absolute bottom-24 right-6 p-3 bg-[#17212b] border border-black/20 rounded-full shadow-xl z-20 text-white/70 hover:text-[#00f2ff] hover:bg-[#232e3c] transition-colors"
                                >
                                    <ChevronDown />
                                </motion.button>
                            )}
                        </AnimatePresence>

                        {/* Input Area */}
                        <div className="bg-[#17212b] border-t border-black/20 relative z-30">
                            {/* Context Bar (Replying / Editing) */}
                            <AnimatePresence>
                                {(replyContextMessage || editingMessageId) && (
                                    <motion.div 
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        className="px-4 pt-2 flex items-center justify-between bg-[#0e1621] border-b border-white/5"
                                    >
                                        <div className="flex items-center gap-3 py-2 pl-2 overflow-hidden w-full">
                                            <div className="text-[#00f2ff] flex-shrink-0">
                                                {editingMessageId ? <EditIcon width={18} /> : <ReplyIcon width={18} />}
                                            </div>
                                            <div className="flex flex-col border-l-2 border-[#00f2ff] pl-2 overflow-hidden w-full">
                                                <span className="text-[#00f2ff] text-xs font-bold">
                                                    {editingMessageId ? 'Editing Message' : `Reply to ${replyContextMessage?.role === 'user' ? 'You' : 'Eva'}`}
                                                </span>
                                                <span className="text-white/50 text-xs truncate w-full pr-4">
                                                    {editingMessageId ? 'Edit to regenerate response' : replyContextMessage?.content}
                                                </span>
                                            </div>
                                        </div>
                                        <button onClick={cancelAction} className="p-2 hover:bg-white/5 rounded-full text-white/50 hover:text-white flex-shrink-0">
                                            <XIcon width={16} />
                                        </button>
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            <div className="p-3 md:p-4">
                                <form 
                                    onSubmit={(e) => handleSendMessage(e)}
                                    className="flex items-end gap-2 max-w-4xl mx-auto"
                                >
                                    <button type="button" className="p-3 text-white/40 hover:text-white/80 transition-colors">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 5v14"/><path d="M5 12h14"/></svg> 
                                    </button>

                                    <div className="flex-1 bg-[#0e1621] rounded-2xl min-h-[48px] flex items-center border border-black/20 focus-within:border-[#2b5278] transition-colors relative">
                                        <textarea
                                            ref={textareaRef}
                                            value={inputValue}
                                            onChange={(e) => setInputValue(e.target.value)}
                                            onKeyDown={handleKeyDown}
                                            placeholder={editingMessageId ? "Edit your message..." : t.placeholder}
                                            rows={1}
                                            className="w-full bg-transparent text-white px-4 py-3 max-h-32 resize-none focus:outline-none scrollbar-hide text-sm md:text-base leading-relaxed"
                                        />
                                    </div>

                                    {inputValue.trim() ? (
                                        <button 
                                            type="submit"
                                            className="p-3 bg-[#2b5278] text-white rounded-full hover:bg-[#366493] transition-colors shadow-lg flex-shrink-0 mb-0.5"
                                        >
                                            {editingMessageId ? <CheckIcon width={24} /> : (
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 2L11 13"/><path d="M22 2L15 22L11 13L2 9L22 2Z"/></svg>
                                            )}
                                        </button>
                                    ) : (
                                        <button type="button" className="p-3 text-white/40 hover:text-white/80 transition-colors mb-0.5">
                                            <MicIcon className="w-6 h-6" />
                                        </button>
                                    )}
                                </form>
                            </div>
                        </div>

                    </div>

                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

export default ChatInterface;
