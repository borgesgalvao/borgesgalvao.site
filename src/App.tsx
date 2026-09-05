import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Benefits } from './components/Benefits';
import { Portfolio } from './components/Portfolio';
import { Process } from './components/Process';
import { ContactSection } from './components/ContactSection';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { ProjectModal } from './components/ProjectModal';
import { Project } from './types';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [targetProjectQuote, setTargetProjectQuote] = useState<string>('');

  const scrollToContact = (projectName?: string) => {
    if (projectName) {
      setTargetProjectQuote(projectName);
    }
    const contactElem = document.getElementById('contato');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectProject = (project: Project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  const handleRequestQuoteFromModal = (projectName: string) => {
    scrollToContact(projectName);
  };

  return (
    <div className="min-h-screen bg-[#020617] text-slate-100 flex flex-col selection:bg-emerald-500 selection:text-slate-950 relative overflow-x-hidden">
      {/* Frosted Glass Ambient Lighting Backdrops */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[140px]" />
        <div className="absolute top-[28%] -right-40 w-[550px] h-[550px] bg-teal-500/10 rounded-full blur-[140px]" />
        <div className="absolute top-[60%] -left-32 w-[600px] h-[600px] bg-cyan-600/10 rounded-full blur-[150px]" />
        <div className="absolute -bottom-40 right-10 w-[700px] h-[700px] bg-emerald-600/10 rounded-full blur-[160px]" />
      </div>

      {/* 1. Header Navigation */}
      <Header onOpenContact={() => scrollToContact()} />

      {/* Main Content Area */}
      <main id="main-content" className="flex-1 relative z-10">
        {/* 1. Hero Section */}
        <Hero onCtaClick={() => scrollToContact()} />

        {/* 2. Seção de Benefícios */}
        <Benefits onCtaClick={() => scrollToContact()} />

        {/* 3. Portfólio de Projetos */}
        <Portfolio
          onSelectProject={handleSelectProject}
          onCtaClick={() => scrollToContact()}
        />

        {/* Processo de Trabalho / Como Funciona */}
        <Process onCtaClick={() => scrollToContact()} />

        {/* 4. Área de Contato & Orçamento */}
        <ContactSection initialProjectType={targetProjectQuote} />

        {/* Perguntas Frequentes */}
        <FAQ />
      </main>

      {/* 6. Footer com Otimização Semântica & SEO */}
      <Footer />

      {/* 5. Botão Flutuante do WhatsApp */}
      <FloatingWhatsApp />

      {/* Interactive Project Preview Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={handleCloseModal}
          onRequestQuote={handleRequestQuoteFromModal}
        />
      )}
    </div>
  );
}
