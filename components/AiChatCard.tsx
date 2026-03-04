import React, { useState, useRef, useEffect } from 'react';

type MessageRole = 'user' | 'ai';
interface ChatMessage { role: MessageRole; text: string; }

export const AiChatCard: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'ai', text: "Hi, I am Jonathan's AI assistant. I can answer questions about his DevOps and AI experience." }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages, isTyping]);

  const handleSend = async (text: string = input) => {
    const userMessage = text.trim();
    if (!userMessage || isTyping) return;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsTyping(true);
    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userMessage }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setMessages(prev => [...prev, { role: 'ai', text: data.text || "I'm not sure about that." }]);
    } catch (e) {
      console.error("Failed to fetch from /api/chat:", e);
      setMessages(prev => [...prev, { role: 'ai', text: "Connectivity issue. Please try again." }]);
    } finally { setIsTyping(false); }
  };

  return (
    <div className="glass rounded-[2rem] p-6 md:p-8 flex flex-col h-full relative overflow-hidden group bg-white dark:bg-[#0c1a10] shadow-sm hover:shadow-xl transition-all duration-300">
      <div className="flex items-center justify-between mb-6 shrink-0">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-forest/5 dark:bg-emerald-500/10 flex items-center justify-center text-forest dark:text-emerald-400 border border-forest/10 dark:border-emerald-500/20">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
          </div>
          <div>
            <h3 className="font-bold text-forest dark:text-white text-[15px] font-display">Ask me anything</h3>
            <p className="text-[10px] text-forest/40 dark:text-emerald-300/40 font-mono uppercase tracking-[0.15em] mt-1">Jonathan's Digital Twin</p>
          </div>
        </div>
      </div>

      <div ref={scrollRef} className="flex-1 min-h-0 overflow-y-auto mb-6 space-y-4 pr-3">
        {messages.map((m, i) => (
          <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[85%] rounded-2xl px-5 py-3 text-[12px] leading-relaxed shadow-sm ${m.role === 'user' ? 'bg-forest dark:bg-emerald-600 text-white' : 'bg-forest/5 dark:bg-[#0f2415]/80 text-forest dark:text-emerald-100/80 border border-forest/10 dark:border-emerald-500/10'
              }`}>
              {m.text}
            </div>
          </div>
        ))}
      </div>

      <div className="shrink-0">
        <div className="relative group/input">
          <input
            type="text" value={input} onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Query system knowledge..." disabled={isTyping}
            className="w-full bg-white/50 dark:bg-[#0c1a10]/60 border border-forest/10 dark:border-emerald-500/10 rounded-2xl px-6 py-4 text-[13px] text-forest dark:text-white focus:ring-2 focus:ring-forest-accent/20 transition-all placeholder:text-forest/20"
          />
          <button onClick={() => handleSend()} disabled={!input.trim() || isTyping} className="absolute right-2 top-1/2 -translate-y-1/2 p-2.5 bg-forest dark:bg-emerald-600 text-white rounded-xl">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 12h14M12 5l7 7-7 7" /></svg>
          </button>
        </div>
      </div>
    </div>
  );
};
