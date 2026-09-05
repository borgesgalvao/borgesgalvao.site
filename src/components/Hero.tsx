import React from 'react';
import { ArrowRight, CheckCircle2, Zap, Shield, Sparkles, Star, TrendingUp, Smartphone, MousePointerClick } from 'lucide-react';

interface HeroProps {
  onCtaClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onCtaClick }) => {
  return (
    <section
      id="hero-section"
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-transparent text-white"
    >
      {/* Background Subtle Grid Texture */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#334155_1px,transparent_1px),linear-gradient(to_bottom,#334155_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20 pointer-events-none" />
      
      {/* Ambient Lighting Accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-72 h-72 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Main Hero Content (Left 7 Cols) */}
          <div className="lg:col-span-7 space-y-7 text-center lg:text-left">
            
            {/* Top Brand Micro Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.05] border border-white/10 backdrop-blur-md shadow-lg shadow-black/20">
              <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-semibold text-slate-300">
                Agência <strong className="text-white font-bold">borgesgalvao.site</strong> para Micro e Pequenas Empresas
              </span>
            </div>

            {/* Main Conversion H1 */}
            <h1
              id="hero-main-title"
              className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl/tight font-extrabold tracking-tight text-white font-['Outfit',sans-serif] text-center"
            >
              Transformando
              <br />
              visitantes em cliente com um
              <br />
              <span className="whitespace-nowrap text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-200 underline decoration-emerald-500/40 decoration-wavy decoration-2">
                Site Profissional.
              </span>
            </h1>

            {/* Inviting Subtitle */}
            <p
              id="hero-subtitle"
              className="text-base sm:text-lg md:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0"
            >
              Desenvolvemos sites rápidos, bonitos e focados no resultado para sua clínica, escritório ou negócio local.
            </p>

            {/* Bullet Proof Points */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-y-2.5 gap-x-6 text-xs sm:text-sm text-slate-300 font-medium">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/[0.03] border border-white/[0.07] backdrop-blur-md">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>100% adaptado para celular</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/[0.03] border border-white/[0.07] backdrop-blur-md">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Botão WhatsApp integrado</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/[0.03] border border-white/[0.07] backdrop-blur-md">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Otimizado para o Google</span>
              </div>
            </div>

            {/* CTAs Group */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                id="hero-cta-button"
                onClick={onCtaClick}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 text-base font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 active:bg-emerald-500 rounded-xl shadow-xl shadow-emerald-500/25 hover:shadow-emerald-500/40 transition-all duration-200 transform hover:-translate-y-0.5 cursor-pointer"
              >
                <span>Quero um orçamento sem compromisso</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <a
                id="hero-view-portfolio-btn"
                href="#portfolio"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 text-sm font-semibold text-slate-200 hover:text-white bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 backdrop-blur-md rounded-xl transition-all"
              >
                <MousePointerClick className="w-4 h-4 text-slate-400" />
                <span>Ver projetos reais</span>
              </a>
            </div>

            {/* Social Trust Metrics */}
            <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-center lg:justify-start gap-3">
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-sm sm:text-base font-bold shadow-lg shadow-emerald-500/10 backdrop-blur-md">
                <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-400 animate-ping shrink-0" />
                <Zap className="w-4 h-4 text-emerald-400 shrink-0 fill-emerald-400/20" />
                <span className="tracking-wide">Seu site pronto em 7 dias!</span>
              </div>
            </div>

          </div>

          {/* Right Visual Element (Device Mockup / Interactive Feature Card - Right 5 Cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Floating Highlight Badge 1 */}
              <div className="absolute -top-4 -left-4 z-20 bg-slate-900/80 border border-emerald-500/40 rounded-xl p-3 shadow-2xl backdrop-blur-xl hidden sm:flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-500/30">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold">Resultado</div>
                  <div className="text-xs font-bold text-white">+180% de contatos no WhatsApp</div>
                </div>
              </div>

              {/* Floating Highlight Badge 2 */}
              <div className="absolute -bottom-5 -right-3 z-20 bg-slate-900/80 border border-white/15 rounded-xl p-3 shadow-2xl backdrop-blur-xl hidden sm:flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-teal-500/20 text-teal-400 flex items-center justify-center border border-teal-500/30">
                  <Smartphone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold">Responsivo</div>
                  <div className="text-xs font-bold text-emerald-400">100% Otimizado no Celular</div>
                </div>
              </div>

              {/* Browser Mockup Window */}
              <div className="bg-white/[0.04] border border-white/15 rounded-2xl shadow-2xl backdrop-blur-xl overflow-hidden">
                {/* Browser Header Bar */}
                <div className="bg-slate-950/80 px-4 py-3 border-b border-white/10 flex items-center gap-2 backdrop-blur-md">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                    <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  </div>
                  <div className="flex-1 mx-2">
                    <div className="bg-white/[0.05] border border-white/10 text-[11px] text-slate-300 px-3 py-1 rounded-md text-center flex items-center justify-center gap-1.5 truncate">
                      <Shield className="w-3 h-3 text-emerald-400 shrink-0" />
                      <span>https://sua-empresa.com.br</span>
                    </div>
                  </div>
                </div>

                {/* Simulated Live Business Site Preview */}
                <div className="p-4 sm:p-5 bg-gradient-to-br from-slate-950/60 via-slate-900/60 to-slate-950/80 space-y-4">
                  {/* Mock Site Mini Header */}
                  <div className="flex items-center justify-between pb-3 border-b border-white/10">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-lg bg-emerald-500 flex items-center justify-center font-bold text-slate-950 text-xs">
                        CP
                      </div>
                      <span className="text-xs font-bold text-slate-200">Clínica OdontoPrime</span>
                    </div>
                    <span className="px-2.5 py-1 text-[10px] font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 rounded-md backdrop-blur-sm">
                      Agendar Consulta
                    </span>
                  </div>

                  {/* Mock Hero Visual */}
                  <div className="relative rounded-xl overflow-hidden h-40 bg-slate-900 border border-white/10">
                    <img
                      src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=600&q=80"
                      alt="Exemplo de site para clínica desenvolvido pela borgesgalvao.site"
                      className="w-full h-full object-cover object-center"
                      loading="eager"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent flex flex-col justify-end p-3">
                      <span className="text-[10px] font-semibold text-emerald-400 uppercase tracking-wider">
                        Especialistas em Implantes & Estética
                      </span>
                      <p className="text-xs font-bold text-white leading-tight">
                        Recupere a confiança do seu sorriso com atendimento humanizado
                      </p>
                    </div>
                  </div>

                  {/* Mock Conversion Metrics Row */}
                  <div className="grid grid-cols-3 gap-2 text-center">
                    <div className="bg-white/[0.04] border border-white/10 p-2 rounded-lg backdrop-blur-sm">
                      <div className="text-xs font-extrabold text-emerald-400">&lt; 1.0s</div>
                      <div className="text-[10px] text-slate-400">Carregamento</div>
                    </div>
                    <div className="bg-white/[0.04] border border-white/10 p-2 rounded-lg backdrop-blur-sm">
                      <div className="text-xs font-extrabold text-teal-400">100/100</div>
                      <div className="text-[10px] text-slate-400">Google Score</div>
                    </div>
                    <div className="bg-white/[0.04] border border-white/10 p-2 rounded-lg backdrop-blur-sm">
                      <div className="text-xs font-extrabold text-cyan-400">24h/7d</div>
                      <div className="text-[10px] text-slate-400">WhatsApp On</div>
                    </div>
                  </div>

                  {/* Mock CTA Button */}
                  <div className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs py-2 px-3 rounded-lg text-center flex items-center justify-center gap-1.5 shadow-lg shadow-emerald-500/25">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Falar Direto no WhatsApp da Recepção</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
