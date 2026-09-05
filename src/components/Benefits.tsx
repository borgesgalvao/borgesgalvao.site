import React from 'react';
import { BENEFIT_ITEMS, TARGET_NICHES } from '../data/projectsData';
import {
  ShieldCheck,
  Clock,
  Sparkles,
  ArrowRight,
  Smile,
  Wrench,
  Brain,
  Apple,
  Building2,
  Dumbbell,
  Scale,
  BarChart3,
  CheckCircle,
} from 'lucide-react';

interface BenefitsProps {
  onCtaClick: () => void;
}

export const Benefits: React.FC<BenefitsProps> = ({ onCtaClick }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldCheck':
        return <ShieldCheck className="w-8 h-8 text-emerald-400" />;
      case 'Clock':
        return <Clock className="w-8 h-8 text-teal-400" />;
      case 'Sparkles':
        return <Sparkles className="w-8 h-8 text-cyan-400" />;
      default:
        return <ShieldCheck className="w-8 h-8 text-emerald-400" />;
    }
  };

  const getNicheIcon = (icon: string) => {
    switch (icon) {
      case 'Smile':
        return <Smile className="w-5 h-5 text-cyan-400" />;
      case 'Wrench':
        return <Wrench className="w-5 h-5 text-amber-400" />;
      case 'Brain':
        return <Brain className="w-5 h-5 text-emerald-400" />;
      case 'Apple':
        return <Apple className="w-5 h-5 text-rose-400" />;
      case 'Building2':
        return <Building2 className="w-5 h-5 text-indigo-400" />;
      case 'Dumbbell':
        return <Dumbbell className="w-5 h-5 text-teal-400" />;
      case 'Scale':
        return <Scale className="w-5 h-5 text-purple-400" />;
      case 'BarChart3':
        return <BarChart3 className="w-5 h-5 text-blue-400" />;
      default:
        return <Building2 className="w-5 h-5 text-emerald-400" />;
    }
  };

  return (
    <section id="beneficios" className="py-20 md:py-28 bg-transparent text-slate-100 relative overflow-hidden">
      {/* Decorative gradient overlay */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header & Empathetic Explanation */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider backdrop-blur-md">
            Por Que Sua Empresa Precisa de um Site?
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white font-['Outfit',sans-serif]">
            Hoje, quem procura pelo seu serviço{' '}
            <span className="text-emerald-400">começa pesquisando no Google</span>
          </h2>
          
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Seja para agendar uma consulta dentária, encontrar uma oficina mecânica de confiança ou contratar um arquiteto, as pessoas pesquisam antes de decidir. Se você não tem um site profissional, você simplesmente não existe para esses potenciais clientes — ou pior, eles acabam contratando seu concorrente.
          </p>
        </div>

        {/* The 3 Main Benefit Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {BENEFIT_ITEMS.map((item) => (
            <article
              key={item.id}
              id={`benefit-card-${item.id}`}
              className="group relative bg-white/[0.04] hover:bg-white/[0.07] border border-white/10 hover:border-emerald-500/40 backdrop-blur-xl rounded-2xl p-7 transition-all duration-300 flex flex-col justify-between shadow-2xl hover:shadow-emerald-500/10 transform hover:-translate-y-1"
            >
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-xl bg-slate-900/80 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-200 shadow-inner">
                  {getIcon(item.iconName)}
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-white group-hover:text-emerald-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm font-semibold text-emerald-400">
                    "{item.tagline}"
                  </p>
                  <p className="text-sm text-slate-300 leading-relaxed pt-1">
                    {item.description}
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex items-start gap-2 text-xs text-slate-400">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span className="leading-snug">{item.highlight}</span>
              </div>
            </article>
          ))}
        </div>

        {/* Target Audience / Niches Section */}
        <div className="bg-white/[0.03] border border-white/10 backdrop-blur-xl rounded-2xl p-6 sm:p-8 space-y-6 shadow-2xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-4">
            <div>
              <h4 className="text-lg font-bold text-white">
                Especialistas em Pequenos Negócios e Prestadores de Serviço
              </h4>
              <p className="text-xs sm:text-sm text-slate-400">
                Criamos estruturas personalizadas para o formato de atendimento do seu segmento:
              </p>
            </div>
            <button
              id="niche-cta-button"
              onClick={onCtaClick}
              className="self-start md:self-auto inline-flex items-center gap-2 text-xs font-bold text-emerald-400 hover:text-emerald-300 transition-colors cursor-pointer"
            >
              <span>Ver proposta para o meu nicho</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3.5">
            {TARGET_NICHES.map((niche) => (
              <div
                key={niche.label}
                className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/[0.08] hover:border-emerald-500/30 hover:bg-white/[0.06] backdrop-blur-md transition-all"
              >
                <div className="w-9 h-9 rounded-lg bg-slate-900/60 border border-white/10 flex items-center justify-center shrink-0">
                  {getNicheIcon(niche.icon)}
                </div>
                <span className="text-xs sm:text-sm font-semibold text-slate-200 leading-tight">
                  {niche.label}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
