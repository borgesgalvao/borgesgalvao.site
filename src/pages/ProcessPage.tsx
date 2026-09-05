import React from 'react';
import { Process } from '../components/Process';
import { useNavigation } from '../context/NavigationContext';
import { 
  Clock, 
  ArrowRight, 
  ShieldCheck, 
  Calendar, 
  Sparkles, 
  CheckCircle2, 
  FileCheck, 
  HeadphonesIcon,
  MessageCircle
} from 'lucide-react';

export const ProcessPage: React.FC = () => {
  const { navigate } = useNavigation();

  const guarantees = [
    {
      title: 'Prazo Rigoroso de 5 Dias',
      description: 'Metodologia testada e aprovada que evita enrolação e entrega seu site pronto para divulgar com máxima agilidade.',
      icon: Calendar,
      color: 'text-emerald-400',
    },
    {
      title: 'Aprovação Etapa por Etapa',
      description: 'Você valida o layout antes da programação final. Nada vai ao ar sem o seu aval e total satisfação.',
      icon: FileCheck,
      color: 'text-teal-400',
    },
    {
      title: 'Sem Custos Ocultos',
      description: 'Orçamento claro e fixo. Você sabe exatamente o valor do investimento desde o primeiro contato.',
      icon: ShieldCheck,
      color: 'text-cyan-400',
    },
    {
      title: 'Suporte Pós-Lançamento',
      description: 'Orientamos como usar seu site, configurar e-mails profissionais e testar todos os links e botões.',
      icon: HeadphonesIcon,
      color: 'text-amber-400',
    },
  ];

  return (
    <div className="pt-28 sm:pt-32 pb-20 space-y-16">
      {/* 1. Page Header Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-xs font-semibold uppercase tracking-wider mb-4">
          <Clock className="w-3.5 h-3.5" />
          <span>Metodologia Ágil e Transparente</span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight max-w-4xl mx-auto">
          Como desenvolvemos seu Site em <br />
          <span className="text-teal-400">5 Dias</span>
        </h1>

        <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
          Sem burocracia ou termos técnicos complicados. Criamos um processo fluido e prático para você focar em atender seus clientes enquanto nós cuidamos de toda a parte técnica.
        </p>
      </section>

      {/* 2. Componente de Processo Passo a Passo */}
      <Process onCtaClick={() => navigate('contato')} />

      {/* 3. Seção de Garantias e Compromissos */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900/50 border border-white/10 rounded-3xl p-6 sm:p-10 backdrop-blur-xl">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Garantias do Nosso Processo
            </h2>
            <p className="mt-2 text-sm text-slate-400">
              Trabalhamos com profissionalismo e clareza para que sua experiência seja tranquila do início ao fim.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {guarantees.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className={`w-10 h-10 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center ${item.color} mb-4`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Bottom Action Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-gradient-to-r from-teal-950/60 via-slate-900/70 to-emerald-950/60 border border-teal-500/30 p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Pronto para dar a largada no seu projeto?
            </h3>
            <p className="text-sm text-slate-300">
              Agende sua conversa inicial agora. Em menos de 20 minutos alinhamos todos os detalhes do seu site.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
            <a
              href="https://wa.me/5531992141182?text=Ol%C3%A1!%20Gostaria%20de%20iniciar%20a%20etapa%20de%20briefing%20do%20meu%20site."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-5 py-3 text-xs font-semibold text-slate-200 hover:text-white bg-white/[0.06] hover:bg-white/[0.1] border border-white/10 rounded-xl transition-all flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>Falar pelo WhatsApp</span>
            </a>

            <button
              type="button"
              onClick={() => navigate('contato')}
              className="w-full sm:w-auto px-6 py-3 text-xs font-bold text-slate-950 bg-teal-400 hover:bg-teal-300 rounded-xl shadow-lg shadow-teal-500/20 transition-all cursor-pointer flex items-center justify-center gap-2"
            >
              <span>Solicitar Orçamento</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
