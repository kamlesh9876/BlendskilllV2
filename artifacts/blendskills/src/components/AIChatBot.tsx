import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, X, Send, Sparkles, User, RefreshCw, ChevronRight, PhoneCall, Minimize2 } from 'lucide-react';
import { Link } from 'wouter';

interface Message {
  id: string;
  sender: 'user' | 'bot';
  text: string;
  time: string;
}

const QUICK_PROMPTS = [
  'What services do you offer?',
  'Show me your case studies',
  'How can AI help my business?',
  'Where are your offices located?',
  'How do I get a free quote?',
];

export default function AIChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome-1',
      sender: 'bot',
      text: 'Hello! 👋 I am the **BlendSkills AI Assistant**.\n\nI can answer anything about our software engineering, AI automation, performance marketing, case studies, or contact details!\n\nHow can I assist your business today?',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen, isLoading]);

  const handleSend = async (textToSend?: string) => {
    const query = textToSend || input;
    if (!query.trim() || isLoading) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      sender: 'user',
      text: query.trim(),
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInput('');
    setIsLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: query,
          history: messages.slice(-6), // context window
        }),
      });

      if (res.ok) {
        const data = await res.json();
        const botReply: Message = {
          id: (Date.now() + 1).toString(),
          sender: 'bot',
          text: data.reply || 'Thank you for your message! Our team at info@blendskills.co.in will be happy to assist.',
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        };
        setMessages((prev) => [...prev, botReply]);
      } else {
        throw new Error('Server error');
      }
    } catch (err) {
      // Fallback client response
      const fallbackMsg: Message = {
        id: (Date.now() + 1).toString(),
        sender: 'bot',
        text: `BlendSkills offers **Custom App Development**, **AI & Automation**, and **Performance Marketing**.\n\nYou can contact us directly at **info@blendskills.co.in** or call **+91 85308 19966** for a free strategy call!`,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, fallbackMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleQuickPrompt = (prompt: string) => {
    handleSend(prompt);
  };

  const handleClear = () => {
    setMessages([
      {
        id: Date.now().toString(),
        sender: 'bot',
        text: 'Chat history cleared. How else can I help you today?',
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      },
    ]);
  };

  // Helper to format text with bolding and linebreaks nicely
  const formatMessageText = (text: string) => {
    const lines = text.split('\n');
    return lines.map((line, idx) => {
      // Parse bold **text**
      const parts = line.split(/(\*\*.*?\*\*)/g);
      return (
        <p key={idx} className={line === '' ? 'h-2' : 'mb-1 last:mb-0'}>
          {parts.map((part, pIdx) => {
            if (part.startsWith('**') && part.endsWith('**')) {
              return <strong key={pIdx} className="font-semibold">{part.slice(2, -2)}</strong>;
            }
            return part;
          })}
        </p>
      );
    });
  };

  return (
    <>
      {/* Floating Toggle Button */}
      <div className="fixed bottom-6 right-6 z-[1200]">
        <AnimatePresence>
          {!isOpen && (
            <motion.button
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(true)}
              className="group relative flex items-center gap-3 px-5 py-3.5 rounded-full bg-gradient-to-r from-[#0066cc] via-indigo-600 to-teal-500 text-white shadow-2xl hover:shadow-cyan-500/40 border border-white/20 transition-all duration-300 cursor-pointer"
              aria-label="Open AI Assistant"
            >
              {/* Background ambient glow */}
              <span className="absolute inset-0 rounded-full bg-cyan-400/30 blur-md group-hover:blur-lg transition-all duration-300 -z-10" />

              {/* Glowing Pulse */}
              <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-cyan-400 border-2 border-slate-900" />
              </span>

              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">
                <Bot size={20} className="text-white group-hover:rotate-12 transition-transform duration-300" />
              </div>
              <div className="text-left hidden sm:block">
                <span className="block text-xs font-medium text-cyan-200 uppercase tracking-wider leading-none">Ask AI</span>
                <span className="block text-sm font-bold text-white mt-0.5">BlendSkills Bot</span>
              </div>
            </motion.button>
          )}
        </AnimatePresence>
      </div>

      {/* Chat Window Dialog */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.92 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed bottom-6 right-4 sm:right-6 z-[1200] w-[calc(100vw-2rem)] sm:w-[410px] h-[580px] max-h-[85vh] bg-slate-900/95 backdrop-blur-2xl rounded-3xl border border-white/15 shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="p-4 sm:p-5 bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 border-b border-white/10 flex items-center justify-between text-white">
              <div className="flex items-center gap-3">
                <div className="relative w-10 h-10 rounded-2xl bg-gradient-to-br from-[#0066cc] to-cyan-500 p-0.5 shadow-md flex items-center justify-center text-white">
                  <Bot size={22} />
                  <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-400 border-2 border-slate-900 rounded-full" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-display font-bold text-base text-white">BlendSkills AI</h3>
                    <span className="px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 font-mono text-[10px] uppercase tracking-wider font-semibold border border-cyan-500/30">
                      24/7 Live
                    </span>
                  </div>
                  <p className="text-xs text-slate-300">Instant company knowledge & quotes</p>
                </div>
              </div>

              <div className="flex items-center gap-1">
                <button
                  onClick={handleClear}
                  title="Clear conversation"
                  className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
                >
                  <RefreshCw size={16} />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  title="Close chat"
                  className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
                >
                  <Minimize2 size={18} />
                </button>
              </div>
            </div>

            {/* Messages Area */}
            <div className="flex-1 p-4 overflow-y-auto space-y-4 text-xs sm:text-sm custom-scrollbar bg-gradient-to-b from-slate-900 via-slate-900/90 to-slate-950">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex gap-3 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  {msg.sender === 'bot' && (
                    <div className="w-8 h-8 rounded-xl bg-[#0066cc]/20 border border-[#0066cc]/40 flex items-center justify-center text-[#0066cc] shrink-0 mt-1">
                      <Sparkles size={16} />
                    </div>
                  )}

                  <div
                    className={`max-w-[82%] rounded-2xl p-3.5 shadow-sm text-slate-100 ${
                      msg.sender === 'user'
                        ? 'bg-[#0066cc] text-white rounded-tr-none'
                        : 'bg-slate-800/90 border border-white/10 rounded-tl-none'
                    }`}
                  >
                    <div className="leading-relaxed whitespace-pre-wrap">{formatMessageText(msg.text)}</div>
                    <span
                      className={`block text-[10px] mt-1.5 font-mono ${
                        msg.sender === 'user' ? 'text-blue-200 text-right' : 'text-slate-400'
                      }`}
                    >
                      {msg.time}
                    </span>
                  </div>

                  {msg.sender === 'user' && (
                    <div className="w-8 h-8 rounded-xl bg-slate-700 border border-white/10 flex items-center justify-center text-slate-200 shrink-0 mt-1">
                      <User size={16} />
                    </div>
                  )}
                </div>
              ))}

              {/* Typing indicator */}
              {isLoading && (
                <div className="flex gap-3 justify-start">
                  <div className="w-8 h-8 rounded-xl bg-[#0066cc]/20 border border-[#0066cc]/40 flex items-center justify-center text-[#0066cc] shrink-0">
                    <Sparkles size={16} className="animate-spin" />
                  </div>
                  <div className="bg-slate-800/90 border border-white/10 rounded-2xl rounded-tl-none p-3.5 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-bounce" />
                    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-bounce [animation-delay:0.2s]" />
                    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-bounce [animation-delay:0.4s]" />
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Quick Prompt Chips */}
            <div className="p-2.5 bg-slate-950/80 border-t border-white/10 overflow-x-auto flex gap-2 no-scrollbar" role="list" aria-label="Quick conversation starters">
              {QUICK_PROMPTS.map((prompt, i) => (
                <button
                  key={i}
                  disabled={isLoading}
                  onClick={() => handleQuickPrompt(prompt)}
                  className="px-3 py-1.5 rounded-full bg-slate-800 hover:bg-[#0066cc]/30 border border-white/10 hover:border-[#0066cc]/50 text-slate-300 hover:text-cyan-300 text-xs font-medium whitespace-nowrap transition-all duration-200 shrink-0 flex items-center gap-1 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-900"
                  role="listitem"
                  aria-label={`Ask: ${prompt}`}
                >
                  <span>{prompt}</span>
                  <ChevronRight size={12} />
                </button>
              ))}
            </div>

            {/* Consultation Banner Inside Chat */}
            <div className="px-4 py-2 bg-gradient-to-r from-indigo-900/40 to-slate-900 border-t border-white/5 flex items-center justify-between text-xs text-slate-300">
              <span>Need a custom solution proposal?</span>
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="text-cyan-400 hover:text-cyan-300 font-bold underline flex items-center gap-1"
              >
                <PhoneCall size={12} /> Book Call
              </Link>
            </div>

            {/* Input Form */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="p-3 bg-slate-950 border-t border-white/10 flex items-center gap-2"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask anything about BlendSkills..."
                disabled={isLoading}
                className="flex-1 bg-slate-900 text-white text-xs sm:text-sm placeholder-slate-400 px-4 py-2.5 rounded-xl border border-white/10 focus:outline-none focus:border-[#0066cc] focus:ring-1 focus:ring-[#0066cc]"
              />
              <button
                type="submit"
                disabled={!input.trim() || isLoading}
                className="p-2.5 rounded-xl bg-[#0066cc] text-white hover:bg-blue-600 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                aria-label="Send message"
              >
                <Send size={18} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
