import React from 'react';
import { Benefits } from '../components/Benefits';
import { useNavigation } from '../context/NavigationContext';
import { 
  TrendingUp, 
  ArrowRight, 
  CheckCircle2, 
  XCircle, 
  ShieldCheck, 
  Zap, 
  Search, 
  MessageCircle, 
  Smartphone,
  Eye
} from 'lucide-react';

export const BenefitsPage: React.FC = () => {
  const { navigate } = useNavigation();

  const comparisonPoints = [
    {
      feature: 'Visibilidade no Google',
      socialMedia: 'Inexistente para quem pesquisa serviços na sua cidade',
      website: 'Aparece quando clientes buscam por seu serviço no Google',
      winner: 'website',
    },
    {
      feature: 'Disponibilidade do Negócio',
      socialMedia: 'Depende de você responder mensagens nas redes a tempo',
      website: 'Funciona 24 horas por dia com informações e botão WhatsApp',
      winner: 'website',
    },
    {
      feature: 'Sensação de Credibilidade',
      socialMedia: 'Passa sensação de perfil informal ou amador',
      website: 'Transmite autoridade imediata, segurança e solidez profissional',
      winner: 'website',
    },
    {
      feature: 'Propriedade da Plataforma',
      socialMedia: 'Sua conta pode ser bloqueada ou perder alcance a qualquer hora',
      website: 'O site e domínio são 100% seus e da sua empresa para sempre',
      winner: 'website',
    },
    {
      feature: 'Experiência no Celular',
      socialMedia: 'Informações misturadas com posts de concorrentes e distrações',
      website: 'Foco exclusivo nos seus serviços com botão de contato em 1 clique',
      winner: 'website',
    },
  ];

  return (
    <div className="pt-28 sm:pt-32 pb-20 space-y-16">
      {/* 1. Page Header Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-4">
          <TrendingUp className="w-3.5 h-3.5" />
          <span>Vantagens & Retorno do Investimento</span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight max-w-4xl mx-auto">
          Por que sua Empresa precisa de um <br />
          <span className="text-emerald-400">Site Profissional?</span>
        </h1>

        <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
          Mais de 85% dos consumidores brasileiros pesquisam no Google antes de contratar um serviço ou agendar uma visita. Se sua empresa não tem um site bem estruturado, seus clientes acabam indo direto para a concorrência.
        </p>

        {/* Quick Quick Stat Chips */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          <div className="px-4 py-2 rounded-xl bg-white/[0.04] border border-white/10 text-xs sm:text-sm text-slate-200 backdrop-blur-md flex items-center gap-2">
            <Search className="w-4 h-4 text-emerald-400" />
            <span>Mais visibilidade no Google Local</span>
          </div>
          <div className="px-4 py-2 rounded-xl bg-white/[0.04] border border-white/10 text-xs sm:text-sm text-slate-200 backdrop-blur-md flex items-center gap-2">
            <Smartphone className="w-4 h-4 text-emerald-400" />
            <span>100% responsivo para smartphones</span>
          </div>
          <div className="px-4 py-2 rounded-xl bg-white/[0.04] border border-white/10 text-xs sm:text-sm text-slate-200 backdrop-blur-md flex items-center gap-2">
            <Zap className="w-4 h-4 text-emerald-400" />
            <span>Entrega ágil em 7 dias úteis</span>
          </div>
        </div>
      </section>

      {/* 2. Componente de Benefícios Estruturado */}
      <Benefits onCtaClick={() => navigate('contato')} />

      {/* 3. Comparativo Detalhado: Rede Social vs. Site Próprio */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900/50 border border-white/10 rounded-3xl p-6 sm:p-10 backdrop-blur-xl">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Apenas Redes Sociais vs. Site Próprio
            </h2>
            <p className="mt-2 text-sm text-slate-400">
              Muitos empreendedores confiam apenas no Instagram. Veja a diferença prática entre depender de plataformas alheias e ter sua própria sede digital.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="py-3 px-4 text-xs font-bold uppercase tracking-wider text-slate-400 w-1/3">Critério</th>
                  <th className="py-3 px-4 text-xs font-bold uppercase tracking-wider text-rose-400 w-1/3 bg-rose-500/5 rounded-t-xl">
                    Apenas Redes Sociais
                  </th>
                  <th className="py-3 px-4 text-xs font-bold uppercase tracking-wider text-emerald-400 w-1/3 bg-emerald-500/10 rounded-t-xl">
                    Site Próprio (borgesgalvao.site)
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-sm">
                {comparisonPoints.map((pt, index) => (
                  <tr key={index} className="hover:bg-white/[0.02] transition-colors">
                    <td className="py-4 px-4 font-semibold text-white">
                      {pt.feature}
                    </td>
                    <td className="py-4 px-4 text-slate-400 bg-rose-500/5">
                      <div className="flex items-start gap-2">
                        <XCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                        <span>{pt.socialMedia}</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-emerald-300 font-medium bg-emerald-500/10">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{pt.website}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 4. Bottom Action Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-gradient-to-r from-emerald-900/40 via-slate-900/60 to-teal-900/40 border border-emerald-500/30 p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Quer ver esses benefícios aplicados ao seu negócio?
            </h3>
            <p className="text-sm text-slate-300">
              Solicite uma análise rápida e um orçamento sem compromisso. Responderemos hoje mesmo!
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={() => navigate('portfolio')}
              className="w-full sm:w-auto px-5 py-3 text-xs font-semibold text-slate-200 hover:text-white bg-white/[0.06] hover:bg-white/[0.1] border border-white/10 rounded-xl transition-all cursor-pointer flex items-center justify-center gap-2"
            >
              <Eye className="w-4 h-4 text-slate-400" />
              <span>Ver Projetos no Portfólio</span>
            </button>

            <button
              type="button"
              onClick={() => navigate('contato')}
              className="w-full sm:w-auto px-6 py-3 text-xs font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-xl shadow-lg shadow-emerald-500/20 transition-all cursor-pointer flex items-center justify-center gap-2"
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
