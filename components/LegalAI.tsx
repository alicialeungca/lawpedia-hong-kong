
import React, { useState, useRef, useEffect } from 'react';
import { askLegalAssistant } from '../services/geminiService';
import { ChatMessage } from '../types';

const LegalAI: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    const aiResponse = await askLegalAssistant(userMessage);
    
    setMessages(prev => [...prev, { role: 'model', text: aiResponse }]);
    setIsLoading(false);
  };

  return (
    <section id="ai-tutor" className="py-24 bg-stone-900 text-white overflow-hidden relative">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-20 right-20 w-96 h-96 bg-amber-600 rounded-full blur-[150px]"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-stone-500 rounded-full blur-[150px]"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 serif">Legal Literacy Assistant</h2>
          <p className="text-amber-200 text-lg">Instant, simple explanations for your legal questions.</p>
        </div>

        <div className="bg-stone-800/80 backdrop-blur-xl border border-stone-700 rounded-[2.5rem] overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.5)] flex flex-col h-[550px]">
          {/* Chat Window */}
          <div ref={scrollRef} className="flex-grow p-8 overflow-y-auto space-y-6 scrollbar-hide">
            {messages.length === 0 && (
              <div className="h-full flex flex-col items-center justify-center text-stone-400 space-y-6">
                <div className="w-16 h-16 bg-amber-800/30 text-amber-500 rounded-2xl flex items-center justify-center animate-pulse">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <div className="text-center">
                  <p className="font-bold text-lg text-stone-200">Hello! I'm Lawpedia's AI Assistant.</p>
                  <p className="text-sm">Try asking one of these frequently asked topics:</p>
                </div>
                <div className="flex flex-wrap justify-center gap-3">
                  {['Tenancy notice period', 'Min wage in HK', 'Defamation basics', 'Small Claims limit'].map(q => (
                    <button key={q} onClick={() => setInput(q)} className="px-5 py-2 bg-stone-700/50 hover:bg-amber-800 transition-colors border border-stone-600 rounded-full text-xs font-medium">
                      {q}
                    </button>
                  ))}
                </div>
              </div>
            )}
            
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] px-6 py-4 rounded-3xl ${
                  msg.role === 'user' 
                    ? 'bg-amber-800 text-white rounded-br-none shadow-lg' 
                    : 'bg-stone-700/80 text-stone-100 rounded-bl-none border border-stone-600'
                }`}>
                  <p className="text-sm leading-relaxed whitespace-pre-wrap">{msg.text}</p>
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-stone-700/80 px-6 py-4 rounded-3xl rounded-bl-none border border-stone-600">
                  <div className="flex space-x-2">
                    <div className="w-2 h-2 bg-amber-500 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-amber-500 rounded-full animate-bounce [animation-delay:-.3s]"></div>
                    <div className="w-2 h-2 bg-amber-500 rounded-full animate-bounce [animation-delay:-.5s]"></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Input Area */}
          <form onSubmit={handleSubmit} className="p-6 bg-stone-900/50 border-t border-stone-700">
            <div className="relative flex items-center">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about employment, consumer law, or courts..."
                className="w-full bg-stone-800/50 border border-stone-700 rounded-2xl pl-6 pr-16 py-4 text-white placeholder-stone-500 focus:outline-none focus:ring-2 focus:ring-amber-500/50 transition-all"
              />
              <button
                type="submit"
                disabled={isLoading}
                className="absolute right-2 p-3 bg-amber-800 hover:bg-amber-700 disabled:bg-stone-700 text-white rounded-xl transition-all"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
              </button>
            </div>
            <div className="mt-4 flex items-center justify-center gap-2 text-[10px] text-stone-500 font-bold uppercase tracking-widest">
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              Information for educational use only. Not legal advice.
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default LegalAI;
