import React, { useState, useEffect } from 'react';
import { Globe, Menu, X, ArrowRight, MessageCircle } from 'lucide-react';

interface HeaderProps {
  onOpenContact: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenContact }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Benefícios', href: '#beneficios' },
    { name: 'Portfólio', href: '#portfolio' },
    { name: 'Como Funciona', href: '#como-funciona' },
    { name: 'Perguntas Frequentes', href: '#faq' },
    { name: 'Contato', href: '#contato' },
  ];

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-950/70 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-black/40 py-3.5'
          : 'bg-slate-950/40 backdrop-blur-lg border-b border-white/[0.07] py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            id="brand-logo-link"
            href="#"
            className="flex items-center gap-2.5 group focus:outline-none focus:ring-2 focus:ring-emerald-500 rounded-lg p-1"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-white shadow-lg shadow-emerald-500/20 group-hover:scale-105 transition-transform duration-200 border border-white/20">
              <Globe className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-white flex items-center gap-0.5">
                borgesgalvao<span className="text-emerald-400 font-extrabold">.site</span>
              </span>
              <span className="text-[10px] uppercase font-semibold tracking-wider text-slate-400 -mt-1">
                Desenvolvimento Web
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav id="desktop-nav" className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                id={`nav-link-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                href={link.href}
                className="text-sm font-medium text-slate-300 hover:text-emerald-400 transition-colors duration-150"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              id="header-whatsapp-btn"
              href="https://wa.me/5531992141182?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20a%20cria%C3%A7%C3%A3o%20de%20um%20site%20para%20minha%20empresa."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-slate-300 hover:text-white bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 backdrop-blur-md rounded-xl transition-all"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>(31) 99214-1182</span>
            </a>

            <button
              id="header-cta-button"
              onClick={onOpenContact}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs uppercase tracking-wider font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 active:bg-emerald-500 rounded-xl shadow-lg shadow-emerald-500/25 transition-all duration-150 transform hover:-translate-y-0.5 cursor-pointer"
            >
              <span>Orçamento</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              id="mobile-menu-toggle"
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white hover:bg-white/[0.08] rounded-xl border border-white/10 transition-colors backdrop-blur-md"
              aria-label="Abrir menu principal"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div id="mobile-menu-dropdown" className="md:hidden bg-slate-950/90 backdrop-blur-2xl border-b border-white/10 px-4 pt-3 pb-6 space-y-3">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                id={`mobile-nav-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-xl text-base font-medium text-slate-200 hover:text-emerald-400 hover:bg-white/[0.08] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>
          <div className="pt-3 border-t border-white/10 flex flex-col gap-2.5">
            <a
              id="mobile-nav-whatsapp"
              href="https://wa.me/5531992141182?text=Ol%C3%A1!%20Vim%20pelo%20site%20borgesgalvao.site%20e%20gostaria%20de%20um%20or%C3%A7amento%20para%20minha%20empresa."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-2.5 text-sm font-semibold text-emerald-400 bg-white/[0.05] border border-white/10 backdrop-blur-md rounded-xl"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>Chamar no WhatsApp (31 99214-1182)</span>
            </a>
            <button
              id="mobile-nav-cta"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="flex items-center justify-center gap-2 w-full py-3 text-sm font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-xl shadow-lg shadow-emerald-500/20"
            >
              <span>Quero um orçamento sem compromisso</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
