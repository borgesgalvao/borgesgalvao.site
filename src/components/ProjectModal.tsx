import React, { useState } from 'react';
import { Project } from '../types';
import { X, Check, Smartphone, Monitor, ArrowRight, MessageCircle, Star } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onRequestQuote: (projectName: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onRequestQuote,
}) => {
  const [deviceView, setDeviceView] = useState<'desktop' | 'mobile'>('desktop');

  if (!project) return null;

  return (
    <div
      id="project-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-slate-950/80 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
    >
      <div
        id="project-modal-container"
        className="relative w-full max-w-4xl bg-slate-900/90 border border-white/20 backdrop-blur-2xl rounded-2xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col text-slate-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-white/10 bg-slate-950/80 backdrop-blur-md">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-1 text-xs font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 rounded-lg">
              {project.categoryLabel}
            </span>
            <h3 className="text-base sm:text-lg font-bold text-white truncate max-w-md">
              {project.title}
            </h3>
          </div>
          <button
            id="close-project-modal-btn"
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors cursor-pointer"
            aria-label="Fechar detalhes do projeto"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="overflow-y-auto p-5 sm:p-6 space-y-6">
          
          {/* Device Mockup Toolbar & Preview */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <span className="font-semibold text-slate-200">{project.clientType}</span>
                <span>•</span>
                <span className="text-emerald-400 font-mono text-[11px]">{project.liveUrlMock}</span>
              </div>

              {/* View Switcher */}
              <div className="flex items-center bg-slate-950/80 border border-white/10 rounded-lg p-1 backdrop-blur-sm">
                <button
                  onClick={() => setDeviceView('desktop')}
                  className={`flex items-center gap-1.5 px-3 py-1 text-xs font-semibold rounded-md transition-all ${
                    deviceView === 'desktop'
                      ? 'bg-white/10 text-white shadow-sm'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <Monitor className="w-3.5 h-3.5" />
                  <span>Desktop</span>
                </button>
                <button
                  onClick={() => setDeviceView('mobile')}
                  className={`flex items-center gap-1.5 px-3 py-1 text-xs font-semibold rounded-md transition-all ${
                    deviceView === 'mobile'
                      ? 'bg-white/10 text-white shadow-sm'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <Smartphone className="w-3.5 h-3.5" />
                  <span>Mobile</span>
                </button>
              </div>
            </div>

            {/* Interactive Device Screen Frame */}
            <div className="bg-slate-950/60 border border-white/10 rounded-xl p-3 sm:p-4 flex items-center justify-center min-h-[260px] sm:min-h-[340px]">
              {deviceView === 'desktop' ? (
                <div className="w-full rounded-lg overflow-hidden border border-white/10 shadow-2xl bg-slate-900 group relative">
                  <img
                    src={project.desktopPreviewUrl || project.imageUrl}
                    alt={project.title}
                    className="w-full h-64 sm:h-80 object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent flex items-end p-4">
                    <span className="text-xs font-medium text-slate-300">
                      Layout 100% responsivo projetado com foco em alta conversão
                    </span>
                  </div>
                </div>
              ) : (
                <div className="w-64 rounded-2xl overflow-hidden border-4 border-slate-700 shadow-2xl bg-slate-900 relative">
                  <div className="bg-slate-800 text-center py-1 text-[10px] text-slate-400 border-b border-slate-700">
                    4G • 100%
                  </div>
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-80 object-cover object-top"
                  />
                </div>
              )}
            </div>
          </div>

          {/* Project Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Left: Description & Tags */}
            <div className="space-y-4">
              <div>
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                  Sobre o Projeto
                </h4>
                <p className="text-sm text-slate-200 leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                  Tecnologias & Recursos
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-xs bg-white/[0.04] border border-white/10 text-slate-300 rounded-lg font-medium backdrop-blur-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Implemented Features & Result */}
            <div className="space-y-4">
              <div>
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                  Principais Implementações
                </h4>
                <ul className="space-y-2">
                  {project.features.map((feat, index) => (
                    <li key={index} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-3.5 bg-emerald-950/40 border border-emerald-500/30 rounded-xl backdrop-blur-sm">
                <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-400 mb-1">
                  <Star className="w-3.5 h-3.5 fill-emerald-400 text-emerald-400" />
                  <span>Resultado Real do Cliente:</span>
                </div>
                <p className="text-xs text-slate-200 font-medium">
                  {project.results}
                </p>
              </div>
            </div>

          </div>

        </div>

        {/* Modal Footer CTAs */}
        <div className="px-5 py-4 border-t border-white/10 bg-slate-950/80 backdrop-blur-md flex flex-col sm:flex-row items-center justify-between gap-3">
          <a
            href={`https://wa.me/5531992141182?text=Ol%C3%A1!%20Gostei%20do%20projeto%20${encodeURIComponent(project.title)}%20e%20gostaria%20de%20um%20or%C3%A7amento%20similar.`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-emerald-400 bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 rounded-xl transition-all"
          >
            <MessageCircle className="w-4 h-4 text-emerald-400" />
            <span>Falar no WhatsApp sobre este modelo</span>
          </a>

          <button
            onClick={() => {
              onClose();
              onRequestQuote(project.title);
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 text-xs font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-xl shadow-lg shadow-emerald-500/25 transition-all cursor-pointer"
          >
            <span>Quero um site profissional como este</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
