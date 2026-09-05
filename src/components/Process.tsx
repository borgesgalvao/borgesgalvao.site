import React from 'react';
import { WORK_PROCESS_STEPS } from '../data/projectsData';
import { MessageSquareText, Palette, Code2, Rocket } from 'lucide-react';

interface ProcessProps {
  onCtaClick: () => void;
}

export const Process: React.FC<ProcessProps> = ({ onCtaClick }) => {
  const getStepIcon = (icon: string) => {
    switch (icon) {
      case 'MessageSquareText':
        return <MessageSquareText className="w-6 h-6 text-emerald-400" />;
      case 'Palette':
        return <Palette className="w-6 h-6 text-teal-400" />;
      case 'Code2':
        return <Code2 className="w-6 h-6 text-cyan-400" />;
      case 'Rocket':
        return <Rocket className="w-6 h-6 text-emerald-400" />;
      default:
        return <Rocket className="w-6 h-6 text-emerald-400" />;
    }
  };

  return (
    <section
      id="como-funciona"
      className="py-20 bg-transparent text-slate-100 border-t border-b border-white/10 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider backdrop-blur-md">
            Processo Simples & Sem Burocracia
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white font-['Outfit',sans-serif]">
            Como Funciona a Criação do Seu Site na{' '}
            <span className="text-emerald-400">borgesgalvao.site</span>
          </h2>

          <p className="text-base text-slate-300">
            Você cuida do seu negócio enquanto nós cuidamos de toda a parte técnica, design, textos e configurações.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {WORK_PROCESS_STEPS.map((step, idx) => (
            <div
              key={step.number}
              id={`process-step-${step.number}`}
              className="bg-white/[0.04] hover:bg-white/[0.07] border border-white/10 hover:border-emerald-500/40 backdrop-blur-xl rounded-2xl p-6 relative flex flex-col justify-between transition-all duration-300 shadow-2xl hover:shadow-emerald-500/10 transform hover:-translate-y-1"
            >
              <div>
                {/* Step Number & Icon */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-slate-900/70 border border-white/10 flex items-center justify-center shadow-inner">
                    {getStepIcon(step.icon)}
                  </div>
                  <span className="text-2xl font-black text-slate-600 font-['Outfit',sans-serif]">
                    {step.number}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white mb-2">
                  {step.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-white/10 text-[11px] font-semibold text-emerald-400 flex items-center gap-1">
                <span>Passo {idx + 1} de 4</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
