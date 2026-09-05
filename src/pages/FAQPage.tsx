import React from 'react';
import { FAQ } from '../components/FAQ';
import { useNavigation } from '../context/NavigationContext';
import { 
  HelpCircle, 
  MessageCircle, 
  ArrowRight, 
  Clock, 
  ShieldCheck, 
  CreditCard,
  PhoneCall
} from 'lucide-react';

export const FAQPage: React.FC = () => {
  const { navigate } = useNavigation();

  return (
    <div className="pt-28 sm:pt-32 pb-20 space-y-16">
      {/* 1. Page Header Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-4">
          <HelpCircle className="w-3.5 h-3.5" />
          <span>Central de Ajuda e Esclarecimentos</span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight max-w-4xl mx-auto">
          Perguntas frequentes sobre <br />
          <span className="text-amber-400">Criação de Sites</span>
        </h1>

        <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
          Tire suas dúvidas sobre prazos de entrega, pagamentos, domínio, hospedagem e manutenção. Acreditamos em transparência total desde o primeiro momento.
        </p>
      </section>

      {/* 2. Componente de Perguntas Frequentes (FAQ) */}
      <FAQ />

      {/* 3. Caixa de Dúvida Personalizada / WhatsApp Direto */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-10 rounded-3xl bg-slate-900/60 border border-white/10 backdrop-blur-xl flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-wider">
              <PhoneCall className="w-3.5 h-3.5" />
              <span>Atendimento Direto com o Especialista</span>
            </div>
            <h3 className="text-xl font-bold text-white">
              Sua dúvida não está listada aqui?
            </h3>
            <p className="text-sm text-slate-300 max-w-md">
              Mande uma mensagem agora no WhatsApp. Respondemos rapidamente e explicamos qualquer ponto técnico sem complicação.
            </p>
          </div>

          <a
            href="https://wa.me/5531992141182?text=Ol%C3%A1!%20Estive%20olhando%20a%20p%C3%A1gina%20de%20d%C3%BAvidas%20e%20gostaria%20de%20perguntar%20algo%20espec%C3%ADfico."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 py-3.5 text-xs font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-xl shadow-lg shadow-emerald-500/25 transition-all flex items-center justify-center gap-2 shrink-0 cursor-pointer"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Perguntar no WhatsApp</span>
          </a>
        </div>
      </section>

      {/* 4. Bottom Action Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-gradient-to-r from-amber-950/40 via-slate-900/70 to-emerald-950/40 border border-amber-500/30 p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Pronto para colocar sua empresa no digital?
            </h3>
            <p className="text-sm text-slate-300">
              Receba uma proposta detalhada com prazos e valores para o seu segmento.
            </p>
          </div>

          <button
            type="button"
            onClick={() => navigate('contato')}
            className="w-full sm:w-auto px-8 py-3.5 text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-xl shadow-lg shadow-amber-500/20 transition-all cursor-pointer flex items-center justify-center gap-2 shrink-0"
          >
            <span>Pedir Orçamento Agora</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
};
