import React, { useState } from 'react';
import { PROJECTS_DATA } from '../data/projectsData';
import { Project } from '../types';
import { Eye, ArrowUpRight, Sparkles } from 'lucide-react';

interface PortfolioProps {
  onSelectProject: (project: Project) => void;
  onCtaClick: () => void;
}

export const Portfolio: React.FC<PortfolioProps> = ({ onSelectProject, onCtaClick }) => {
  const [activeFilter, setActiveFilter] = useState<string>('todos');

  const filterOptions = [
    { id: 'todos', label: 'Todos os Projetos' },
    { id: 'clinica', label: 'Clínicas Odontológicas' },
    { id: 'oficina', label: 'Oficinas Mecânicas' },
    { id: 'saude', label: 'Psicologia & Nutrição' },
    { id: 'arquitetura', label: 'Arquitetura & Engenharia' },
    { id: 'academia', label: 'Academias & Studios' },
  ];

  const filteredProjects =
    activeFilter === 'todos'
      ? PROJECTS_DATA
      : PROJECTS_DATA.filter((p) => p.category === activeFilter);

  return (
    <section
      id="portfolio"
      className="py-20 md:py-28 bg-transparent text-slate-100 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider backdrop-blur-md">
            Portfólio de Alta Conversão
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white font-['Outfit',sans-serif]">
            Veja Exemplos de Sites Criados para{' '}
            <span className="text-emerald-400">Prestadores de Serviço</span>
          </h2>

          <p className="text-base text-slate-300">
            Cada projeto é planejado especificamente para o público do seu negócio, unindo design de alto padrão, velocidade de carregamento e foco absoluto na captação de clientes.
          </p>
        </div>

        {/* Filter Badges */}
        <div className="flex items-center justify-center flex-wrap gap-2.5 mb-12">
          {filterOptions.map((filter) => (
            <button
              key={filter.id}
              id={`portfolio-filter-${filter.id}`}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl transition-all duration-200 cursor-pointer backdrop-blur-md ${
                activeFilter === filter.id
                  ? 'bg-emerald-400 text-slate-950 font-bold shadow-lg shadow-emerald-500/25 scale-105'
                  : 'bg-white/[0.04] text-slate-300 hover:text-white hover:bg-white/[0.08] border border-white/10'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              id={`portfolio-card-${project.id}`}
              className="group bg-white/[0.04] hover:bg-white/[0.07] border border-white/10 hover:border-emerald-500/40 backdrop-blur-xl rounded-2xl overflow-hidden flex flex-col justify-between transition-all duration-300 shadow-2xl hover:shadow-emerald-500/10 transform hover:-translate-y-1.5"
            >
              {/* Card Image Area with Overlay */}
              <div className="relative h-56 sm:h-64 overflow-hidden bg-slate-900/60">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Category Badge */}
                <div className="absolute top-3 left-3 z-10">
                  <span className="px-3 py-1 text-[11px] font-bold bg-slate-950/70 backdrop-blur-md text-emerald-400 border border-white/15 rounded-lg shadow-md">
                    {project.categoryLabel}
                  </span>
                </div>

                {/* Hover Quick Action Overlay */}
                <div className="absolute inset-0 bg-slate-950/75 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                  <button
                    onClick={() => onSelectProject(project)}
                    className="inline-flex items-center gap-2 px-4 py-2.5 bg-emerald-400 text-slate-950 text-xs font-bold rounded-xl shadow-lg hover:bg-emerald-300 transition-colors cursor-pointer"
                  >
                    <Eye className="w-4 h-4" />
                    <span>Ver Projeto Completo</span>
                  </button>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
                    {project.clientType}
                  </span>
                  <h3 className="text-lg font-bold text-white group-hover:text-emerald-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 text-[11px] font-medium bg-white/[0.04] text-slate-300 border border-white/[0.08] backdrop-blur-sm rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action CTA Button on Card */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <button
                    id={`btn-view-project-${project.id}`}
                    onClick={() => onSelectProject(project)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-400 hover:text-emerald-300 transition-colors group-hover:underline cursor-pointer"
                  >
                    <span>Ver Projeto</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>

                  <span className="text-[11px] text-slate-400 font-medium">
                    100% Responsivo
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom Banner inside Portfolio */}
        <div className="mt-16 text-center bg-white/[0.03] border border-white/10 backdrop-blur-xl rounded-2xl p-8 max-w-4xl mx-auto space-y-4 shadow-2xl">
          <h3 className="text-lg sm:text-xl font-bold text-white">
            Não encontrou o modelo exato da sua área de atuação?
          </h3>
          <p className="text-sm text-slate-300 max-w-xl mx-auto">
            Nós desenhamos cada site do zero conforme a necessidade do seu negócio, seja você médico, advogado, encanador, eletricista, personal trainer ou consultor.
          </p>
          <button
            id="portfolio-custom-quote-btn"
            onClick={onCtaClick}
            className="inline-flex items-center gap-2 px-6 py-3 text-xs sm:text-sm font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-xl shadow-lg shadow-emerald-500/20 transition-all cursor-pointer"
          >
            <Sparkles className="w-4 h-4" />
            <span>Solicitar Projeto Personalizado</span>
          </button>
        </div>

      </div>
    </section>
  );
};
