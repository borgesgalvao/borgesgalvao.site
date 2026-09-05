import React from 'react';
import { ContactSection } from '../components/ContactSection';
import { useNavigation } from '../context/NavigationContext';
import { 
  MessageCircle, 
  Clock, 
  ShieldCheck, 
  Send, 
  CheckCircle2, 
  Phone, 
  Mail, 
  MapPin 
} from 'lucide-react';

export const ContactPage: React.FC = () => {
  const { targetProjectQuote } = useNavigation();

  return (
    <div className="pt-28 sm:pt-32 pb-20 space-y-16">
      {/* 1. Page Header Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-4">
          <Send className="w-3.5 h-3.5" />
          <span>Atendimento Ágil e Sem Compromisso</span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight max-w-4xl mx-auto">
          Solicite Seu <span className="text-emerald-400">Orçamento Personalizado</span>
        </h1>

        <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
          Preencha o formulário abaixo ou fale diretamente pelo WhatsApp. Em até 30 minutos em horário comercial retornamos com uma estimativa de investimento e prazo.
        </p>

        {/* Highlight trust factors */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm text-slate-300">
          <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.04] border border-white/10">
            <Clock className="w-4 h-4 text-emerald-400" />
            <span>Resposta em até 30 minutos</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.04] border border-white/10">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Sem compromisso de contratação</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.04] border border-white/10">
            <MapPin className="w-4 h-4 text-emerald-400" />
            <span>Atendimento em todo o Brasil</span>
          </div>
        </div>
      </section>

      {/* 2. Componente de Contato Principal */}
      <ContactSection initialProjectType={targetProjectQuote} />
    </div>
  );
};
