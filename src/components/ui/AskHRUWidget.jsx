import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Bot } from 'lucide-react';
import { modalPanel } from '../../lib/motion';

export function AskHRUWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      text: 'Hey! I am the HRU Campus Assistant. Ask me anything about our studio degrees, ₹50 Cr seed tickets, hardware kits, or the admission challenge.',
    },
  ]);
  const [inputText, setInputText] = useState('');

  const quickPrompts = [
    'How does the ₹50 Cr seed fund work?',
    'What hardware do students get?',
    'Are test scores required?',
    'Tell me about campus housing',
  ];

  const knowledgeBase = {
    'seed': 'Every enrolled student team can pitch our Investment Committee monthly. We write direct ₹10 Lakhs to ₹1.5 Crore non-dilutive seed checks for student-founded ventures.',
    'hardware': 'Admitted fellows receive workstation-grade hardware kits and 24/7 unmetered shell access to our 512x H100 GPU cluster and robotics fab labs.',
    'test': 'No SAT or ACT required! We evaluate your raw signal: GitHub, Figma prototypes, film reels, or code submitted in our 48-Hour Asynchronous Challenge.',
    'housing': 'Our residential living towers feature private pod suites, acoustic sound-proofing, rooftop hydroponics, and collaborative floor lounges.',
    'default': 'HR University is designed from first principles for builders. All programs are studio-based with global exchange rotations in San Francisco, Tokyo, and Berlin.',
  };

  const handleSend = (textToSend) => {
    const query = textToSend || inputText;
    if (!query.trim()) return;

    const newMessages = [...messages, { sender: 'user', text: query }];
    setMessages(newMessages);
    if (!textToSend) setInputText('');

    setTimeout(() => {
      const lower = query.toLowerCase();
      let reply = knowledgeBase.default;
      if (lower.includes('seed') || lower.includes('fund') || lower.includes('invest')) reply = knowledgeBase.seed;
      else if (lower.includes('hardware') || lower.includes('gpu') || lower.includes('laptop')) reply = knowledgeBase.hardware;
      else if (lower.includes('test') || lower.includes('exam') || lower.includes('sat') || lower.includes('admit')) reply = knowledgeBase.test;
      else if (lower.includes('house') || lower.includes('hostel') || lower.includes('dorm')) reply = knowledgeBase.housing;

      setMessages((prev) => [...prev, { sender: 'bot', text: reply }]);
    }, 450);
  };

  return (
    <>
      {/* Floating Trigger Button */}
      <div className="fixed bottom-6 right-6 z-[9990]">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Ask HRU Assistant"
          className="relative w-14 h-14 rounded-full bg-hru-indigo text-white flex items-center justify-center shadow-indigo-glow hover:bg-hru-indigo-hover active:scale-95 transition-all group border border-white/20"
        >
          {isOpen ? (
            <X className="w-6 h-6 text-white" />
          ) : (
            <>
              <MessageSquare className="w-6 h-6" />
              <span className="absolute top-1 right-1 w-3.5 h-3.5 rounded-full bg-hru-gold border-2 border-[#0A0B1E]" />
            </>
          )}
        </button>
      </div>

      {/* Chat Window Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={modalPanel}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed bottom-24 right-4 sm:right-6 z-[9990] w-[calc(100vw-32px)] sm:w-96 rounded-3xl bg-[#12142B] border border-white/10 shadow-2xl flex flex-col overflow-hidden max-h-[560px]"
          >
            {/* Header */}
            <div className="p-4 bg-[#0A0B1E] border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-hru-indigo flex items-center justify-center text-white">
                  <Bot className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-sm text-white">Ask HRU Assistant</h4>
                  <p className="text-[10px] font-mono text-hru-gold flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-hru-gold animate-pulse" />
                    ONLINE // INSTANT ANSWERS
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="text-[#A4A8C4] hover:text-white p-1"
                aria-label="Close chat"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Messages Scroll Area */}
            <div className="flex-1 p-4 overflow-y-auto space-y-3 max-h-80">
              {messages.map((m, idx) => (
                <div
                  key={idx}
                  className={`flex gap-2.5 ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  {m.sender === 'bot' && (
                    <div className="w-7 h-7 rounded-lg bg-hru-indigo/30 text-hru-indigo border border-hru-indigo/40 flex items-center justify-center shrink-0 mt-0.5">
                      <Bot className="w-3.5 h-3.5" />
                    </div>
                  )}
                  <div
                    className={`p-3 rounded-2xl text-xs leading-relaxed max-w-[80%] ${
                      m.sender === 'user'
                        ? 'bg-hru-gold text-hru-midnight font-medium rounded-tr-none'
                        : 'bg-white/5 border border-white/10 text-white rounded-tl-none'
                    }`}
                  >
                    {m.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Suggested Prompts */}
            <div className="px-4 py-2 border-t border-white/5 flex gap-1.5 overflow-x-auto scrollbar-none">
              {quickPrompts.map((p, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => handleSend(p)}
                  className="whitespace-nowrap px-2.5 py-1 rounded-full bg-white/5 hover:bg-hru-indigo/20 border border-white/10 text-[10px] text-[#A4A8C4] hover:text-white transition-colors"
                >
                  {p}
                </button>
              ))}
            </div>

            {/* Input Form */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="p-3 bg-[#0A0B1E] border-t border-white/10 flex items-center gap-2"
            >
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Ask about programs, fees, campus..."
                className="flex-1 bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-xs text-white placeholder-[#A4A8C4] focus:outline-none focus:border-hru-gold transition-colors"
              />
              <button
                type="submit"
                aria-label="Send query"
                className="p-2 rounded-xl bg-hru-gold text-hru-midnight hover:bg-hru-gold-hover font-bold transition-colors"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default AskHRUWidget;
