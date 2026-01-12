
import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, Loader2 } from 'lucide-react';
import { GoogleGenAI } from '@google/genai';

const ChatAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'assistant'; content: string }[]>([
    { role: 'assistant', content: "Welcome to John David & Associates. How can I assist you with our legal expertise today?" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: [...messages.map(m => `${m.role === 'user' ? 'User' : 'Assistant'}: ${m.content}`), `User: ${userMessage}`].join('\n'),
        config: {
          systemInstruction: `You are a sophisticated, professional legal assistant for "John David & Associates", a top-tier London law firm. 
          Your tone is formal, helpful, and concise. You provide information about the firm's services: Private Client, Corporate Law, Intellectual Property, Manufacturing, and International Disputes.
          Do not give actual legal advice, instead encourage the user to schedule a consultation with our solicitors. 
          The firm is located at 64 New Cavendish Street, London, W1G 8TB. 
          Main contact emails: info@johndavidandassociates.co.uk and john.david@johndavidandassociates.co.uk.`
        }
      });

      const assistantContent = response.text || "I apologize, I'm having trouble processing your request. Please contact us directly at info@johndavidandassociates.co.uk.";
      setMessages(prev => [...prev, { role: 'assistant', content: assistantContent }]);
    } catch (error) {
      console.error('Chat error:', error);
      setMessages(prev => [...prev, { role: 'assistant', content: "I encountered an error connecting to our legal brain. Please reach out to us via email or phone directly." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-[60]">
      {/* Trigger Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="w-16 h-16 bg-accent text-charcoal rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform duration-300"
        >
          <MessageSquare size={28} />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="w-80 md:w-96 h-[500px] bg-charcoal border border-white/10 rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-fade-in-up">
          {/* Header */}
          <div className="p-4 bg-slate flex justify-between items-center border-b border-white/5">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center">
                <Bot size={18} className="text-charcoal" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white">Firm Assistant</h4>
                <div className="flex items-center space-x-1">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                  <span className="text-[10px] text-gray-400 uppercase tracking-tighter">Online Now</span>
                </div>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white transition-colors">
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-3 rounded-xl text-sm leading-relaxed ${
                  m.role === 'user' 
                    ? 'bg-accent text-charcoal font-medium' 
                    : 'bg-white/5 text-gray-300 border border-white/5'
                }`}>
                  {m.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white/5 p-3 rounded-xl">
                  <Loader2 size={16} className="animate-spin text-accent" />
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-4 border-t border-white/5 bg-charcoal">
            <div className="relative">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="How can we assist you?"
                className="w-full bg-white/5 border border-white/10 rounded-lg py-3 px-4 text-sm text-white focus:outline-none focus:border-accent transition-colors pr-10"
              />
              <button
                onClick={handleSend}
                disabled={isLoading}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-accent transition-colors disabled:opacity-50"
              >
                <Send size={18} />
              </button>
            </div>
            <p className="text-[9px] text-gray-600 mt-2 text-center uppercase tracking-widest">
              Private & Secure Legal Portal
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatAssistant;
