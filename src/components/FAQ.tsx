import React, { useState } from 'react';
import { FAQ_ITEMS } from '../data/projectsData';
import { ChevronDown, MessageCircle } from 'lucide-react';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-transparent text-slate-100 border-b border-white/10 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Header */}
        <div className="text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider backdrop-blur-md">
            Dúvidas Comuns
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white font-['Outfit',sans-serif]">
            Perguntas Frequentes
          </h2>

          <p className="text-base text-slate-300">
            Tudo o que você precisa saber sobre a criação do seu novo site.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                id={`faq-item-${index}`}
                className={`border rounded-2xl overflow-hidden backdrop-blur-xl transition-all duration-200 ${
                  isOpen
                    ? 'bg-white/[0.07] border-emerald-500/40 shadow-xl shadow-emerald-500/5'
                    : 'bg-white/[0.04] hover:bg-white/[0.06] border-white/10'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-bold text-white pr-2">
                    {item.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen
                        ? 'rotate-180 bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                        : 'bg-slate-900/60 text-slate-400 border border-white/10'
                    }`}
                  >
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-sm text-slate-300 leading-relaxed border-t border-white/10 pt-4">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Direct WhatsApp Prompt */}
        <div className="mt-12 text-center p-6 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-xl shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="text-sm font-bold text-white">Ficou com alguma dúvida específica?</h4>
            <p className="text-xs text-slate-400">Nossa equipe atende você no WhatsApp sem nenhum compromisso.</p>
          </div>
          <a
            href="https://wa.me/5531992141182?text=Ol%C3%A1!%20Tenho%20uma%20d%C3%BAvida%20sobre%20a%20cria%C3%A7%C3%A3o%20de%20sites."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 text-xs font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-xl shadow-lg shadow-emerald-500/20 transition-all shrink-0 cursor-pointer"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Tirar Dúvidas no WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};
