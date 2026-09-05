import React, { useState } from 'react';
import { NavigationProvider, useNavigation } from './context/NavigationContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { ProjectModal } from './components/ProjectModal';
import { Project } from './types';

// Independent Pages
import { HomePage } from './pages/HomePage';
import { BenefitsPage } from './pages/BenefitsPage';
import { PortfolioPage } from './pages/PortfolioPage';
import { ProcessPage } from './pages/ProcessPage';
import { FAQPage } from './pages/FAQPage';
import { ContactPage } from './pages/ContactPage';

function MainApp() {
  const { currentPage, navigate } = useNavigation();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleSelectProject = (project: Project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  const handleRequestQuoteFromModal = (projectName: string) => {
    setSelectedProject(null);
    navigate('contato', projectName);
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

      {/* Global Header Navigation */}
      <Header />

      {/* Main Content: Independent Page Router */}
      <main id="main-content" className="flex-1 relative z-10 min-h-[75vh]">
        {currentPage === 'inicio' && <HomePage />}
        {currentPage === 'beneficios' && <BenefitsPage />}
        {currentPage === 'portfolio' && (
          <PortfolioPage onSelectProject={handleSelectProject} />
        )}
        {currentPage === 'como-funciona' && <ProcessPage />}
        {currentPage === 'faq' && <FAQPage />}
        {currentPage === 'contato' && <ContactPage />}
      </main>

      {/* Global Footer with Multi-Page Navigation */}
      <Footer />

      {/* Global Floating WhatsApp Contact */}
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

export default function App() {
  return (
    <NavigationProvider>
      <MainApp />
    </NavigationProvider>
  );
}
