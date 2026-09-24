import { Project, BenefitItem, FAQItem } from '../types';

export const BENEFIT_ITEMS: BenefitItem[] = [
  {
    id: 'credibilidade',
    title: 'Credibilidade',
    tagline: 'Passe confiança profissional para quem busca seus serviços.',
    description:
      'Quando um cliente em potencial ouve falar de você, a primeira coisa que faz é pesquisar no Google ou Instagram. Um site moderno e bem estruturado transmite autoridade imediata e elimina a desconfiança.',
    iconName: 'ShieldCheck',
    highlight: '84% dos consumidores confiam mais em empresas com site próprio do que naquelas que têm apenas redes sociais.',
  },
  {
    id: 'visibilidade',
    title: 'Visibilidade 24/7',
    tagline: 'Seu negócio aberto e captando clientes no Google o tempo todo.',
    description:
      'Mesmo quando você estiver fora do horário de atendimento, o seu site continua trabalhando: explicando seus serviços, mostrando seus diferenciais e direcionando contatos prontos para o seu WhatsApp.',
    iconName: 'Clock',
    highlight: 'Apareça para quem pesquisa por serviços na sua cidade no exato momento da decisão.',
  },
  {
    id: 'diferencial',
    title: 'Diferencial Competitivo',
    tagline: 'Destaque-se da concorrência com uma presença digital impecável.',
    description:
      'Muitos concorrentes locais ainda têm sites lentos, desatualizados ou nem sequer possuem um. Com um site rápido, bonito e responsivo, você se posiciona como líder no seu segmento.',
    iconName: 'Sparkles',
    highlight: 'Design exclusivo criado para valorizar seu trabalho e justificar o valor dos seus serviços.',
  },
];

export const TARGET_NICHES = [
  { label: 'Clínicas Odontológicas & Médicas', icon: 'Smile' },
  { label: 'Estética de Unhas & Salões de Beleza', icon: 'Sparkles' },
  { label: 'Psicólogos & Terapeutas', icon: 'Brain' },
  { label: 'Nutricionistas & Clínicas de Saúde', icon: 'Apple' },
  { label: 'Arquitetos & Engenheiros', icon: 'Building2' },
  { label: 'Academias & Studios de Pilates', icon: 'Dumbbell' },
  { label: 'Advogados & Escritórios', icon: 'Scale' },
  { label: 'Contadores & Consultorias', icon: 'BarChart3' },
];

export const PROJECTS_DATA: Project[] = [
  {
    id: 'odonto-prime',
    title: 'Site para Nutricionista Clínica & Esportiva',
    category: 'saude',
    categoryLabel: 'Saúde & Nutrição',
    clientType: 'Dra. Emilly Juliana — CRN-9 38537',
    description:
      'Landing page elegante e persuasiva desenvolvida para captação de pacientes de emagrecimento saudável, performance esportiva e longevidade. Consultas online e presenciais com agendamento direto pelo WhatsApp.',
    tags: ['Nutrição Clínica & Esportiva', 'Emagrecimento Saudável', 'Consultas Online & Presenciais', 'Agendamento WhatsApp'],
    imageUrl: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=1200&q=80',
    desktopPreviewUrl: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=1200&q=80',
    liveUrlMock: 'https://emillybarreto.com',
    externalUrl: 'https://emillybarreto.com/',
    features: [
      'Estrutura com foco em conversão para agendamentos imediatos via WhatsApp',
      'Apresentação clara de planos nutricionais (Emagrecimento, Performance e Check-up)',
      'Seção de perguntas frequentes e quebra de objeções sobre consulta online',
      'Design sofisticado, 100% responsivo e carregamento ultra-rápido no smartphone',
    ],
    results: 'Captação ativa de pacientes em todo o Brasil e no exterior (EUA, Europa e Ásia).',
    colorScheme: 'from-emerald-950 to-stone-900',
  },
  {
    id: 'autocenter-porto',
    title: 'Site para Estética de Unhas & Nail Designer',
    category: 'estetica',
    categoryLabel: 'Beleza & Estética',
    clientType: 'Elydnara — Nail Designer',
    description:
      'Site sofisticado e acolhedor desenvolvido para salão de estética de unhas em João Monlevade - MG. Apresenta procedimentos de fibra de vidro, manicure russa, galeria de nail arts e agendamento online integrado ao WhatsApp.',
    tags: ['Estética de Unhas', 'Fibra de Vidro', 'Manicure Russa', 'Agendamento Online'],
    imageUrl: 'https://edynara.netlify.app/assets/gallery_do1w4v0eedb-DE4eTGCT.jpg',
    desktopPreviewUrl: 'https://edynara.netlify.app/assets/gallery_dai94juptyy-Cd3fSKf0.jpg',
    liveUrlMock: 'https://edynara.netlify.app',
    externalUrl: 'https://edynara.netlify.app/',
    features: [
      'Sistema intuitivo de agendamento online com escolha de serviços e horários',
      'Galeria visual com fotos reais de alongamentos e nail arts de alta precisão',
      'Informações completas sobre biossegurança, valores e dicas de cuidados',
      'Botão direto para contato no WhatsApp e política de reserva facilitada',
    ],
    results: 'Agenda com mais de 80% dos horários mensais reservados com antecedência e alta fidelização.',
    colorScheme: 'from-pink-950 via-rose-900 to-slate-950',
  },
  {
    id: 'apex-arquitetura',
    title: 'Site para Escritório de Arquitetura e Design',
    category: 'arquitetura',
    categoryLabel: 'Arquitetura & Design',
    clientType: 'Liselane Arquitetura e Design',
    description:
      'Escritório de arquitetura contemporânea e design de interiores liderado por Liselane em Contagem - MG. Portfólio exclusivo de projetos residenciais e corporativos de alto padrão, soluções sob medida e agendamento de reuniões online.',
    tags: ['Arquitetura Contemporânea', 'Design de Interiores', 'Alto Padrão', 'Portfólio Exclusivo'],
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    desktopPreviewUrl: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
    liveUrlMock: 'https://liselane.netlify.app',
    externalUrl: 'https://liselane.netlify.app/',
    features: [
      'Portfólio imersivo com fotos e fichas técnicas de projetos residenciais e corporativos',
      'Filtros dinâmicos por tipologia (Residencial, Interiores, Corporativo e Paisagismo)',
      'Sistema de agendamento de reuniões e briefing de projeto online',
      'Integração direta com WhatsApp para atendimento e consultoria sob medida',
    ],
    results: 'Atração contínua de clientes qualificados e fechamento de novos projetos residenciais e corporativos de alto padrão em MG.',
    colorScheme: 'from-[#2B2A28] via-[#1D1E1C] to-stone-950',
  },
  {
    id: 'psico-mariana',
    title: 'Site para Psicóloga e Terapeuta',
    category: 'saude',
    categoryLabel: 'Saúde Mental',
    clientType: 'Dra. Mariana Vaz - CRP 04/58291',
    description:
      'Design intimista, limpo e humanizado com foco em acolhimento e consultas presenciais e online (Telemedicina). Apresenta a abordagem clínica e esclarece dúvidas frequentes.',
    tags: ['Psicologia', 'Atendimento Online', 'FAQ Terapia', 'CRP Verificado'],
    imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=900&q=80',
    desktopPreviewUrl: 'https://images.unsplash.com/photo-1527689368864-3a821dbccc34?auto=format&fit=crop&w=1200&q=80',
    liveUrlMock: 'https://psicologamariana.borgesgalvao.site',
    features: [
      'Formulário discreto para agendamento de primeira sessão',
      'Artigos e pílulas informativas sobre ansiedade e carreira',
      'Avisos de sigilo ético e regras do Conselho de Psicologia',
      'Design em tons suaves e confortáveis aos olhos',
    ],
    results: 'Agenda com 90% das vagas mensais preenchidas organicamente.',
    colorScheme: 'from-emerald-900 to-teal-950',
  },
  {
    id: 'studio-move',
    title: 'Site para Academia e Studio de Pilates',
    category: 'academia',
    categoryLabel: 'Fitness & Bem-Estar',
    clientType: 'Move Studio Pilates & Funcional',
    description:
      'Visual enérgico com grade de modalidades, horários de aulas e agendamento de aula experimental gratuita em 1 clique pelo WhatsApp.',
    tags: ['Pilates & Fitness', 'Aula Experimental', 'Tabela de Horários', 'Planos Mensais'],
    imageUrl: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=900&q=80',
    desktopPreviewUrl: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80',
    liveUrlMock: 'https://movestudiopilates.borgesgalvao.site',
    features: [
      'Agendamento automático de aula experimental cortesia',
      'Tabela interativa de planos semestrais e anuais',
      'Vídeo de apresentação dos equipamentos e do espaço físico',
      'Botão WhatsApp com mensagem pré-formatada para matrícula',
    ],
    results: '+65 novas matrículas registradas nas primeiras 3 semanas.',
    colorScheme: 'from-indigo-900 to-slate-950',
  },
  {
    id: 'nutri-camila',
    title: 'Portal de Nutrição Saudável e Bem-Estar Pet',
    category: 'saude',
    categoryLabel: 'Nutrição & Saúde',
    clientType: 'Prato e Pata — Nutrição Humana & Animal',
    description:
      'Portal inovador de nutrição saudável integrada para tutores e pets. Traz guia alimentar interativo com busca de alimentos seguros e tóxicos para cães e gatos, receitas balanceadas, lojinha com curadoria de produtos recomendados e artigos com especialistas.',
    tags: ['Nutrição Humana & Pet', 'Guia Alimentar Interativo', 'Lojinha com Curadoria', 'Receitas Saudáveis'],
    imageUrl: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1200&q=80',
    desktopPreviewUrl: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1200&q=80',
    liveUrlMock: 'https://pratoepata.com',
    externalUrl: 'https://pratoepata.com/',
    features: [
      'Guia interativo com busca instantânea de alimentos seguros e tóxicos para cães e gatos',
      'Artigos aprofundados sobre superalimentos compartilháveis, batch cooking e microbiota',
      'Lojinha integrada com curadoria de suplementos, comedouros e produtos recomendados',
      'Layout responsivo, rápido e acolhedor com tipografia editorial e paleta orgânica',
    ],
    results: 'Comunidade ativa com milhares de tutores consultando receitas e guias de segurança nutricional.',
    colorScheme: 'from-[#35312C] via-[#8A5023] to-[#C87941]',
  },
];

export const WORK_PROCESS_STEPS = [
  {
    number: '01',
    title: 'Briefing & Estratégia',
    description: 'Entendemos seu modelo de serviço, seu público local e definimos a melhor estrutura de conversão.',
    icon: 'MessageSquareText',
  },
  {
    number: '02',
    title: 'Design Personalizado & Redação',
    description: 'Criamos um visual moderno e textos profissionais que transmitem total credibilidade ao visitante.',
    icon: 'Palette',
  },
  {
    number: '03',
    title: 'Desenvolvimento Rápido & SEO',
    description: 'Programamos o site com código limpo, ultra-rápido para celular e configurado para o Google.',
    icon: 'Code2',
  },
  {
    number: '04',
    title: 'Lançamento & Novos Clientes',
    description: 'Publicamos seu site com domínio profissional e botões de WhatsApp prontos para converter visitas em vendas.',
    icon: 'Rocket',
  },
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: 'Quanto tempo leva para o meu site ficar pronto?',
    answer:
      'Para a maioria dos prestadores de serviço e clínicas, entregamos a primeira versão em até 5 a 7 dias úteis após o recebimento das informações básicas.',
  },
  {
    question: 'Eu já preciso ter textos e fotos prontos?',
    answer:
      'Não se preocupe! Nós ajudamos você a organizar os textos ideais com técnicas de persuasão (copywriting) e selecionamos imagens profissionais de alta qualidade adequadas ao seu setor.',
  },
  {
    question: 'O site vai funcionar bem no celular e no WhatsApp?',
    answer:
      '100% sim! Mais de 80% das visitas de pequenos negócios vêm de smartphones. Por isso, todos os nossos sites são construídos com foco prioritário na experiência mobile e com botões inteligentes de WhatsApp.',
  },
  {
    question: 'O que está incluso no serviço da borgesgalvao.site?',
    answer:
      'Desenvolvimento completo do site, design responsivo, integração com WhatsApp, otimização de velocidade, SEO básico para o Google, configuração de domínio próprio e suporte pós-entrega.',
  },
  {
    question: 'Como funciona o pagamento do projeto?',
    answer:
      'Trabalhamos com condições facilitadas para pequenos empreendedores, incluindo parcelamento via cartão de crédito e desconto especial para pagamento via PIX.',
  },
];
