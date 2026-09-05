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
  { label: 'Clínicas Odontológicas', icon: 'Smile' },
  { label: 'Oficinas Mecânicas & Auto Centers', icon: 'Wrench' },
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
    title: 'Site para Clínica Odontológica',
    category: 'clinica',
    categoryLabel: 'Saúde & Odontologia',
    clientType: 'Clínica OdontoPrime',
    description:
      'Landing page elegante e acolhedora desenvolvida para atrair pacientes particulares para implantes, ortodontia e estética dental. Botão de agendamento ágil no WhatsApp.',
    tags: ['Clínica Odontológica', 'Agendamento WhatsApp', 'Galeria de Casos', 'SEO Local'],
    imageUrl: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=900&q=80',
    desktopPreviewUrl: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1200&q=80',
    liveUrlMock: 'https://odontoprime.borgesgalvao.site',
    features: [
      'Integração direta com WhatsApp para agendamento instantâneo',
      'Seção detalhada de tratamentos com fotos e explicações didáticas',
      'Depoimentos em vídeo e avaliações 5 estrelas do Google Meu Negócio',
      'Carregamento ultra-rápido (< 1.2 segundos no 4G)',
    ],
    results: '+180% de novos contatos de pacientes no primeiro mês após a estreia.',
    colorScheme: 'from-cyan-900 to-blue-950',
  },
  {
    id: 'autocenter-porto',
    title: 'Site para Oficina Mecânica e Auto Center',
    category: 'oficina',
    categoryLabel: 'Automotivo',
    clientType: 'Porto Auto Center & Diagnóstico',
    description:
      'Estrutura focada em gerar orçamentos rápidos para manutenção preventiva, injeção eletrônica, freios e suspensão. Mapa interativo com rota direta pelo Waze/Google Maps.',
    tags: ['Oficina Mecânica', 'Orçamento Rápido', 'Rotas Waze / Maps', 'Lista de Serviços'],
    imageUrl: 'https://images.unsplash.com/photo-1613214149922-f1809c99b414?auto=format&fit=crop&w=900&q=80',
    desktopPreviewUrl: 'https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&w=1200&q=80',
    liveUrlMock: 'https://portoautocenter.borgesgalvao.site',
    features: [
      'Calculadora/Seletor rápido de tipo de serviço automotivo',
      'Botão de socorro/guincho com chamada de emergência direta',
      'Exibição de garantias de peças e certificações de mecânica',
      'Otimizado para pesquisas de emergência no celular',
    ],
    results: 'Média de 14 orçamentos recebidos por semana via WhatsApp.',
    colorScheme: 'from-amber-900 to-slate-950',
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
    id: 'apex-arquitetura',
    title: 'Site para Escritório de Arquitetura e Engenharia',
    category: 'arquitetura',
    categoryLabel: 'Arquitetura & Engenharia',
    clientType: 'Apex Arquitetura & Projetos Integrados',
    description:
      'Galeria visual sofisticada de projetos residenciais, comerciais e laudos de engenharia. Apresentação em alta definição com formulário de briefing de projeto.',
    tags: ['Arquitetura', 'Projetos 3D', 'Portfólio Interativo', 'Briefing Online'],
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80',
    desktopPreviewUrl: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
    liveUrlMock: 'https://apexarquitetura.borgesgalvao.site',
    features: [
      'Filtro de portfólio por tipo de projeto (Residencial, Comercial, Interiores)',
      'Formulário inteligente para recebimento de metragens e briefing',
      'Apresentação da equipe técnica de arquitetos e engenheiros civis',
      'Layout ultra clean valorizando as fotografias das obras',
    ],
    results: 'Atraiu 6 novos contratos de alto padrão nos primeiros 60 dias.',
    colorScheme: 'from-slate-900 to-zinc-950',
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
    title: 'Site para Nutricionista e Clínica Nutricional',
    category: 'saude',
    categoryLabel: 'Nutrição & Saúde',
    clientType: 'Dra. Camila Duarte - Nutrição Clínica e Esportiva',
    description:
      'Página leve com apresentação dos planos nutricionais, metodologia personalizada, calculadora de IMC integrada e depoimentos de evolução de pacientes.',
    tags: ['Nutrição', 'Planos Alimentares', 'Calculadora de Saúde', 'Bioimpedância'],
    imageUrl: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=900&q=80',
    desktopPreviewUrl: 'https://images.unsplash.com/photo-1505576399279-565b52d4ac71?auto=format&fit=crop&w=1200&q=80',
    liveUrlMock: 'https://camilanutricionista.borgesgalvao.site',
    features: [
      'Calculadora de IMC rápida para engajamento instantâneo do visitante',
      'Explicação dos métodos de acompanhamento e suporte via aplicativo',
      'Antes e depois com depoimentos e relatos de superação',
      'Integração direta com o WhatsApp para confirmação de horários',
    ],
    results: 'Aumento de 210% no número de consultas particulares agendadas.',
    colorScheme: 'from-emerald-950 to-green-950',
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
