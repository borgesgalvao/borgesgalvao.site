import React from 'react';
import { Globe, MessageCircle, Mail, MapPin, Heart, Shield, CheckCircle } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const seoKeywords = [
    'criação de sites para pequenas empresas',
    'desenvolvimento de site para prestadores de serviço',
    'site para clínicas',
    'site para oficinas',
    'site para arquitetos',
    'criar site profissional',
    'agência de criação de sites',
  ];

  return (
    <footer id="main-footer" className="bg-slate-950/90 text-slate-300 border-t border-white/10 text-xs sm:text-sm backdrop-blur-xl relative overflow-hidden">
      {/* Subtle bottom glow */}
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* Top Footer with SEO Keywords Cloud & Core Value */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Col 1: Brand & Bio (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <a href="#" className="flex items-center gap-2.5 group inline-block">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-white shadow-lg shadow-emerald-500/20">
                <Globe className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white font-['Outfit',sans-serif]">
                borgesgalvao<span className="text-emerald-400 font-extrabold">.site</span>
              </span>
            </a>
            
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
              Agência especializada em criação de sites profissionais, rápidos e de alta conversão para micro e pequenas empresas prestadoras de serviço em todo o Brasil.
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs text-emerald-400 font-semibold">
              <CheckCircle className="w-4 h-4 text-emerald-400" />
              <span>Projetos 100% responsivos e com SEO local</span>
            </div>
          </div>

          {/* Col 2: Fast Navigation (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Navegação
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#hero-section" className="text-slate-400 hover:text-emerald-400 transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#beneficios" className="text-slate-400 hover:text-emerald-400 transition-colors">
                  Por que ter um Site?
                </a>
              </li>
              <li>
                <a href="#portfolio" className="text-slate-400 hover:text-emerald-400 transition-colors">
                  Exemplos de Projetos
                </a>
              </li>
              <li>
                <a href="#como-funciona" className="text-slate-400 hover:text-emerald-400 transition-colors">
                  Como Funciona
                </a>
              </li>
              <li>
                <a href="#faq" className="text-slate-400 hover:text-emerald-400 transition-colors">
                  Perguntas Frequentes
                </a>
              </li>
              <li>
                <a href="#contato" className="text-slate-400 hover:text-emerald-400 transition-colors">
                  Solicitar Orçamento
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Segmentos Atendidos (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Segmentos em Destaque
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-400">
              <li>• Site para Clínicas Odontológicas e Médicas</li>
              <li>• Site para Oficinas Mecânicas e Auto Centers</li>
              <li>• Site para Psicólogos e Terapeutas</li>
              <li>• Site para Nutricionistas e Especialistas</li>
              <li>• Site para Arquitetos e Escritórios de Engenharia</li>
              <li>• Site para Academias e Studios de Pilates</li>
            </ul>
          </div>

          {/* Col 4: Contact & WhatsApp (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Contato Direto
            </h4>
            <div className="space-y-2 text-xs">
              <a
                href="https://wa.me/5531992141182"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-300 hover:text-emerald-400 transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>WhatsApp: (31) 99214-1182</span>
              </a>
              <div className="flex items-center gap-2 text-slate-400">
                <Mail className="w-4 h-4 text-slate-500 shrink-0" />
                <span>contato@borgesgalvao.site</span>
              </div>
              <div className="flex items-center gap-2 text-slate-400">
                <MapPin className="w-4 h-4 text-slate-500 shrink-0" />
                <span>Atendimento em todo o Brasil</span>
              </div>
            </div>
          </div>

        </div>

        {/* SEO Keywords Tag Cloud */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold mb-2">
            Especialidades & SEO:
          </div>
          <div className="flex flex-wrap gap-2">
            {seoKeywords.map((kw, i) => (
              <span
                key={i}
                className="text-[11px] text-slate-300 bg-white/[0.04] border border-white/10 px-2.5 py-1 rounded-lg backdrop-blur-sm"
              >
                {kw}
              </span>
            ))}
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 bg-slate-950/70 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {currentYear} <strong>borgesgalvao.site</strong> — Todos os direitos reservados.
          </div>
          <div className="flex items-center gap-4">
            <span className="hover:text-slate-300">Termos de Serviço</span>
            <span>•</span>
            <span className="hover:text-slate-300">Política de Privacidade</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
