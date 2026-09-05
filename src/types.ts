export interface Project {
  id: string;
  title: string;
  category: 'clinica' | 'oficina' | 'saude' | 'arquitetura' | 'academia' | 'geral';
  categoryLabel: string;
  clientType: string;
  description: string;
  tags: string[];
  imageUrl: string;
  desktopPreviewUrl: string;
  liveUrlMock: string;
  features: string[];
  results: string;
  colorScheme: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  whatsapp?: string;
  businessType?: string;
  customBusinessType?: string;
  hasDomainOrSite?: string;
  message?: string;
}

export interface BenefitItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  iconName: 'ShieldCheck' | 'Clock' | 'Sparkles' | 'TrendingUp';
  highlight: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}
