import React from 'react';
import { Hero } from '../components/Hero';
import { useNavigation } from '../context/NavigationContext';
import { 
  Sparkles, 
  ArrowRight, 
  ShieldCheck, 
  Layout, 
  Zap, 
  HelpCircle, 
  MessageCircle, 
  CheckCircle2,
  TrendingUp,
  Clock
} from 'lucide-react';

export const HomePage: React.FC = () => {
  const { navigate } = useNavigation();

  const explorePages = [
    {
      title: 'Benefícios Exclusivos',
      badge: 'Por que ter um site?',
      description: 'Entenda como um site profissional passa credibilidade instantânea, funciona 24h por dia e atrai clientes qualificados no Google.',
      icon: TrendingUp,
      route: 'beneficios',
      color: 'from-emerald-500/20 to-teal-500/5',
      borderColor: 'hover:border-emerald-500/50',
      iconColor: 'text-emerald-400',
      actionText: 'Explorar Vantagens',
    },
    {
      title: 'Portfólio de Projetos',
      badge: 'Modelos Reais',
      description: 'Veja demonstrações interativas de sites desenvolvidos para clínicas, oficinas mecânicas, psicólogos, arquitetos e outros segmentos.',
      icon: Layout,
      route: 'portfolio',
      color: 'from-cyan-500/20 to-blue-500/5',
      borderColor: 'hover:border-cyan-500/50',
      iconColor: 'text-cyan-400',
      actionText: 'Ver Portfólio',
    },
    {
      title: 'Como Funciona',
      badge: 'Pronto em 7 dias',
      description: 'Conheça nossa metodologia transparente em 4 etapas: desde a reunião de briefing até a entrega do seu site pronto e online.',
      icon: Clock,
      route: 'como-funciona',
      color: 'from-teal-500/20 to-emerald-500/5',
      borderColor: 'hover:border-teal-500/50',
      iconColor: 'text-teal-400',
      actionText: 'Conhecer Processo',
    },
    {
      title: 'Dúvidas Frequentes',
      badge: 'Perguntas e Respostas',
      description: 'Respostas diretas sobre prazos, custos, domínio, hospedagem, pagamentos e suporte contínuo para o seu projeto.',
      icon: HelpCircle,
      route: 'faq',
      color: 'from-amber-500/20 to-orange-500/5',
      borderColor: 'hover:border-amber-500/50',
      iconColor: 'text-amber-400',
      actionText: 'Tirar Dúvidas',
    },
  ];

  return (
    <div className="space-y-20 pb-16">
      {/* 1. Hero Principal */}
      <Hero onCtaClick={() => navigate('contato')} />

      {/* 2. Hub de Navegação das Páginas do Site */}
      <section id="hub-navegacao" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Navegação pelas Seções</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Conheça Cada Detalhe do Nosso Trabalho
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400">
            Acesse as páginas dedicadas para ver exemplos reais, entender nossos prazos e descobrir como ajudamos sua empresa a crescer.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {explorePages.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.route}
                onClick={() => navigate(item.route)}
                className={`group relative p-6 sm:p-8 rounded-2xl bg-gradient-to-br ${item.color} bg-slate-900/40 border border-white/10 ${item.borderColor} transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-emerald-500/10 cursor-pointer flex flex-col justify-between`}
              >
                <div>
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                      {item.badge}
                    </span>
                    <div className={`w-10 h-10 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center ${item.iconColor} group-hover:scale-110 transition-transform`}>
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-emerald-300 transition-colors mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/[0.08] flex items-center justify-between text-xs font-bold text-emerald-400 group-hover:text-emerald-300">
                  <span>{item.actionText}</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. Banner CTA de Destaque para Início */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-emerald-950/60 via-slate-900/80 to-teal-950/60 border border-emerald-500/30 p-8 sm:p-12 text-center backdrop-blur-xl">
          <div className="absolute inset-0 bg-emerald-500/5 pointer-events-none" />
          
          <div className="relative z-10 max-w-2xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold">
              <Zap className="w-3.5 h-3.5 fill-emerald-400" />
              <span>Atendimento Rápido • Sem Compromisso</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Pronto para colocar sua empresa no topo do Google?
            </h3>

            <p className="text-sm sm:text-base text-slate-300">
              Solicite uma proposta personalizada para o seu nicho. Criamos seu site completo com design moderno, alta velocidade e botão direto para o seu WhatsApp.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                type="button"
                onClick={() => navigate('contato')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 text-sm font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-xl shadow-lg shadow-emerald-500/25 transition-all cursor-pointer"
              >
                <span>Solicitar Orçamento Grátis</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="https://wa.me/5531992141182?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-slate-200 hover:text-white bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 rounded-xl transition-all"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>Conversar no WhatsApp</span>
              </a>
            </div>

            <div className="pt-2 flex flex-wrap items-center justify-center gap-4 text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                Entrega em 7 dias úteis
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                Garantia e suporte direto
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
