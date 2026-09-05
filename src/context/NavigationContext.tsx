import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

export type PageRoute = 'inicio' | 'beneficios' | 'portfolio' | 'como-funciona' | 'faq' | 'contato';

interface NavigationContextType {
  currentPage: PageRoute;
  navigate: (page: PageRoute | string, projectQuote?: string) => void;
  targetProjectQuote: string;
  setTargetProjectQuote: (val: string) => void;
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

function normalizeRoute(pathOrHash: string): PageRoute {
  // Clean query params or hash prefixes
  const clean = pathOrHash
    .replace(/^#\/?/, '')
    .replace(/^\//, '')
    .split('?')[0]
    .trim()
    .toLowerCase();

  switch (clean) {
    case 'beneficios':
      return 'beneficios';
    case 'portfolio':
    case 'projetos':
      return 'portfolio';
    case 'como-funciona':
    case 'processo':
      return 'como-funciona';
    case 'faq':
    case 'perguntas-frequentes':
    case 'duvidas':
      return 'faq';
    case 'contato':
    case 'orcamento':
      return 'contato';
    case 'inicio':
    case 'home':
    case '':
    default:
      return 'inicio';
  }
}

function getPathForRoute(route: PageRoute): string {
  if (route === 'inicio') return '/';
  return `/${route}`;
}

const pageTitles: Record<PageRoute, string> = {
  inicio: 'borgesgalvao.site | Criação de Sites Profissionais para Pequenas Empresas',
  beneficios: 'Benefícios | borgesgalvao.site - Por que Sua Empresa Precisa de um Site',
  portfolio: 'Portfólio | borgesgalvao.site - Modelos e Exemplos de Sites Reais',
  'como-funciona': 'Como Funciona | borgesgalvao.site - Seu Site no Ar em 5 Dias',
  faq: 'Perguntas Frequentes | borgesgalvao.site - Dúvidas sobre Criação de Sites',
  contato: 'Solicitar Orçamento | borgesgalvao.site - Contato e Proposta Rápida',
};

export const NavigationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentPage, setCurrentPage] = useState<PageRoute>(() => {
    // Check initial URL (pathname first, then hash)
    if (typeof window !== 'undefined') {
      const pathRoute = normalizeRoute(window.location.pathname);
      if (pathRoute !== 'inicio') return pathRoute;
      if (window.location.hash) {
        return normalizeRoute(window.location.hash);
      }
    }
    return 'inicio';
  });

  const [targetProjectQuote, setTargetProjectQuote] = useState<string>('');

  const navigate = useCallback((page: PageRoute | string, projectQuote?: string) => {
    const route = normalizeRoute(page);
    setCurrentPage(route);

    if (projectQuote !== undefined) {
      setTargetProjectQuote(projectQuote);
    }

    if (typeof window !== 'undefined') {
      const targetPath = getPathForRoute(route);
      try {
        window.history.pushState({ page: route }, '', targetPath);
      } catch {
        // Fallback for strict iframe environments
        window.location.hash = route === 'inicio' ? '' : `#${route}`;
      }
      // Scroll smoothly to top of the newly loaded page
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      // Update document title for accessibility and SEO
      if (pageTitles[route]) {
        document.title = pageTitles[route];
      }
    }
  }, []);

  // Listen to browser Back/Forward buttons
  useEffect(() => {
    const handlePopState = () => {
      const route = normalizeRoute(window.location.pathname !== '/' ? window.location.pathname : window.location.hash);
      setCurrentPage(route);
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      if (pageTitles[route]) {
        document.title = pageTitles[route];
      }
    };

    window.addEventListener('popstate', handlePopState);
    window.addEventListener('hashchange', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
      window.removeEventListener('hashchange', handlePopState);
    };
  }, []);

  // Update initial title
  useEffect(() => {
    if (pageTitles[currentPage]) {
      document.title = pageTitles[currentPage];
    }
  }, [currentPage]);

  return (
    <NavigationContext.Provider
      value={{
        currentPage,
        navigate,
        targetProjectQuote,
        setTargetProjectQuote,
      }}
    >
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigation = () => {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error('useNavigation must be used within a NavigationProvider');
  }
  return context;
};
