
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from '@google/genai';
import { Message } from './types';
import { BIO_SUMMARY, COMPETITIONS, HERO_STATS, PROJECTS, SKILL_CATEGORIES } from './constants';

const ChatBot: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: "Access granted. I am the Gemini Security Assistant. How can I help you explore this profile?" }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || loading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      const systemPrompt = `
        Identity: You are a high-performance AI assistant for a 10th-grade standout in Cybersecurity.
        Data Context: 
        Bio: ${BIO_SUMMARY}
        Stats: ${JSON.stringify(HERO_STATS)}
        UIL Record: ${JSON.stringify(COMPETITIONS)}
        Major Projects: ${JSON.stringify(PROJECTS)}
        Skills: ${JSON.stringify(SKILL_CATEGORIES)}
        
        Guidelines:
        1. Professional but technically savvy tone.
        2. Focus on the 5.18 GPA, Class Rank #6, and UIL State Finalist status.
        3. Mention the 50% completion of the associate's degree when relevant.
        4. Be brief. High efficiency responses only.
      `;

      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: [...messages, { role: 'user', text: userMsg }].map(m => ({
          role: m.role,
          parts: [{ text: m.text }]
        })),
        config: {
          systemInstruction: systemPrompt,
          temperature: 0.6,
        }
      });

      setMessages(prev => [...prev, { role: 'model', text: response.text || "Decryption failed. Please restate your query." }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'model', text: "Connection error. Secure channel offline." }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-[450px]">
      <div 
        ref={scrollRef}
        className="flex-grow overflow-y-auto space-y-6 mb-6 scrollbar-hide pr-2 font-mono text-[13px]"
      >
        {messages.map((m, i) => (
          <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[85%] p-4 rounded-2xl ${
              m.role === 'user' 
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/10' 
                : 'bg-slate-950/50 text-slate-300 border border-white/5'
            }`}>
              <span className="text-[10px] font-black opacity-50 block mb-1 uppercase tracking-widest">
                {m.role === 'user' ? 'Visitor' : 'System'}
              </span>
              {m.text}
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex justify-start">
            <div className="bg-slate-950/50 p-4 rounded-2xl border border-white/5 animate-pulse text-blue-500">
              <span className="text-[10px] font-black opacity-50 block mb-1 uppercase">System</span>
              Processing...
            </div>
          </div>
        )}
      </div>

      <div className="relative">
        <div className="absolute inset-0 bg-blue-500/10 blur-xl opacity-0 focus-within:opacity-100 transition-opacity rounded-xl"></div>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          placeholder="Enter command..."
          className="relative w-full bg-slate-950 border border-white/10 rounded-xl px-5 py-4 text-sm font-mono focus:outline-none focus:border-blue-500/50 transition-all pr-14 placeholder:text-slate-700"
        />
        <button 
          onClick={handleSend}
          disabled={loading}
          className="absolute right-3 top-3 bottom-3 aspect-square bg-blue-600 rounded-lg flex items-center justify-center hover:bg-blue-500 transition-all active:scale-90"
        >
          <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ChatBot;
