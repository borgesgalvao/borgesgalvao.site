import React from 'react';
import { Portfolio } from '../components/Portfolio';
import { useNavigation } from '../context/NavigationContext';
import { Project } from '../types';
import { 
  Layout, 
  Sparkles, 
  ArrowRight, 
  Smartphone, 
  Zap, 
  CheckCircle2, 
  Shield 
} from 'lucide-react';

interface PortfolioPageProps {
  onSelectProject: (project: Project) => void;
}
export const PortfolioPage: React.FC<PortfolioPageProps> = ({ onSelectProject }) => {
  const { navigate } = useNavigation();

  return (
    <div className="pt-28 sm:pt-32 pb-20 space-y-16">
      {/* 1. Page Header Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4">
          <Layout className="w-3.5 h-3.5" />
          <span>Projetos Reais & Demonstrações Interativas</span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight max-w-4xl mx-auto">
          Sites desenvolvidos para <br />
          <span className="text-cyan-400">Gerar Resultados</span>
        </h1>

        <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
          Explore nossos projetos feitos sob medida para clínicas médicas e odontológicas, oficinas mecânicas, consultórios de psicologia, nutricionistas, escritórios de arquitetura e prestadores de serviço.
        </p>

        {/* Feature Badges */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/[0.04] border border-white/10 text-xs text-slate-300">
            <Smartphone className="w-3.5 h-3.5 text-cyan-400" />
            Visualização Desktop e Celular no Modal
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/[0.04] border border-white/10 text-xs text-slate-300">
            <Zap className="w-3.5 h-3.5 text-emerald-400" />
            Carregamento Ultrarrápido
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/[0.04] border border-white/10 text-xs text-slate-300">
            <CheckCircle2 className="w-3.5 h-3.5 text-teal-400" />
            Estrutura Focada em Conversão WhatsApp
          </span>
        </div>
      </section>

      {/* 2. Componente de Portfólio com Filtros e Grade */}
      <Portfolio
        onSelectProject={onSelectProject}
        onCtaClick={() => navigate('contato')}
      />

      {/* 3. Bottom Action Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-gradient-to-r from-cyan-950/50 via-slate-900/60 to-emerald-950/50 border border-cyan-500/30 p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Gostou de algum modelo ou tem uma ideia específica?
            </h3>
            <p className="text-sm text-slate-300">
              Adaptamos cores, estrutura e conteúdos exatamente de acordo com a sua identidade visual.
            </p>
          </div>

          <button
            type="button"
            onClick={() => navigate('contato')}
            className="w-full sm:w-auto px-8 py-3.5 text-xs uppercase tracking-wider font-bold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-xl shadow-lg shadow-cyan-500/20 transition-all cursor-pointer flex items-center justify-center gap-2 shrink-0"
          >
            <span>Pedir Proposta para Meu Site</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
};
