/**
 * Arquivo de Configuração de Exemplo - Cacique Imóveis
 *
 * INSTRUÇÕES:
 * 1. Copie este arquivo e renomeie para 'config.js'
 * 2. Atualize os valores com suas informações reais
 * 3. Adicione 'config.js' ao .gitignore para não versionar dados sensíveis
 * 4. Importe este arquivo no seu main.js quando necessário
 *
 * IMPORTANTE: Nunca commite o arquivo config.js com dados reais!
 */

const CONFIG = {
  // Informações da Empresa
  company: {
    name: 'Cacique Imóveis',
    legalName: 'Cacique Imóveis Ltda',
    creci: 'J-3248',
    cnpj: '00.000.000/0001-00', // Adicione seu CNPJ real
    foundedYear: 2020,

    // Endereço
    address: {
      street: 'Rua Exemplo, 123',
      neighborhood: 'Bairro',
      city: 'Salvador',
      state: 'BA',
      zipCode: '40000-000',
      country: 'Brasil'
    }
  },

  // Corretor Principal
  broker: {
    name: 'Caíque',
    fullName: 'Caíque Silva Santos', // Nome completo
    creci: 'CRECI/BA 23.247',
    bio: 'Especialista em imóveis residenciais e Minha Casa Minha Vida',
    photo: '/images/caique-corretor.jpg'
  },

  // Contato
  contact: {
    phone: '71983040695', // Apenas números
    phoneFormatted: '(71) 98304-0695',
    whatsapp: '5571983040695', // Com código do país
    email: 'contato@caciqueimoveis.com.br',
    emailSales: 'vendas@caciqueimoveis.com.br',
    emailSupport: 'suporte@caciqueimoveis.com.br'
  },

  // Redes Sociais
  social: {
    instagram: {
      broker: 'corretor.caique',
      company: 'cacique.imoveis',
      brokerUrl: 'https://instagram.com/corretor.caique',
      companyUrl: 'https://instagram.com/cacique.imoveis'
    },
    facebook: 'caciqueimoveis', // Adicione se tiver
    linkedin: 'caciqueimoveis', // Adicione se tiver
    youtube: '', // Adicione se tiver
    tiktok: '' // Adicione se tiver
  },

  // Configurações do Site
  site: {
    url: 'https://www.caciqueimoveis.com.br',
    title: 'Cacique Imóveis - Seu Imóvel dos Sonhos em Salvador',
    description: 'Encontre o imóvel perfeito em Salvador, Bahia. Especialistas em Minha Casa Minha Vida e financiamentos facilitados.',
    keywords: 'imóveis salvador, casas bahia, apartamentos salvador, imobiliária salvador, minha casa minha vida',
    language: 'pt-BR',
    theme: {
      primaryColor: '#FF6B35',
      secondaryColor: '#1E3A8A',
      accentColor: '#8B7355'
    }
  },

  // Google Analytics
  analytics: {
    enabled: false, // Ative quando tiver o ID
    googleAnalyticsId: 'G-XXXXXXXXXX', // Substitua pelo seu ID
    googleTagManagerId: '', // GTM-XXXXXXX
    facebookPixelId: '', // Se usar Facebook Ads
    googleAdsConversionId: '' // Se usar Google Ads
  },

  // APIs e Integrações
  apis: {
    // API de imóveis (se integrar com sistema externo)
    properties: {
      enabled: false,
      endpoint: 'https://api.exemplo.com/properties',
      apiKey: '' // Sua chave de API
    },

    // API de CEP (Brasil)
    cep: {
      enabled: true,
      endpoint: 'https://viacep.com.br/ws/'
    },

    // Google Maps (se adicionar mapas)
    googleMaps: {
      enabled: false,
      apiKey: '' // Sua chave do Google Maps
    },

    // Email Service (se usar serviço de email)
    email: {
      enabled: false,
      service: 'sendgrid', // ou 'mailgun', 'ses', etc.
      apiKey: ''
    }
  },

  // Configurações de Financiamento
  financing: {
    defaultRate: 9, // Taxa de juros anual padrão (%)
    minDownPayment: 1000, // Entrada mínima (R$)
    minDownPaymentPercent: 20, // Entrada mínima em %
    maxYears: 35, // Prazo máximo em anos
    incomeMultiplier: 0.3 // Parcela não pode ultrapassar 30% da renda
  },

  // Recursos do Site
  features: {
    favorites: true, // Sistema de favoritos
    calculator: true, // Calculadora de financiamento
    propertyComparison: false, // Comparação de imóveis (futuro)
    virtualTour: false, // Tour virtual (futuro)
    chat: false, // Chat online (futuro)
    newsletter: false, // Newsletter (futuro)
    blog: false, // Blog de imóveis (futuro)
    testimonials: true, // Depoimentos
    faq: true // Perguntas frequentes
  },

  // Limites e Paginação
  limits: {
    featuredProperties: 6, // Imóveis em destaque na home
    propertiesPerPage: 12, // Imóveis por página na listagem
    testimonialsPerPage: 3, // Depoimentos por página
    maxFavorites: 50, // Máximo de favoritos por usuário
    searchHistoryLimit: 10 // Histórico de buscas
  },

  // Regiões Atendidas
  regions: [
    'Itapuã',
    'Piatã',
    'Patamares',
    'Imbuí',
    'Boca do Rio',
    'Costa Azul',
    'Armação',
    'Pituba',
    'Brotas',
    'Cabula',
    'Lauro de Freitas',
    'Camaçari'
  ],

  // Tipos de Imóveis
  propertyTypes: [
    { id: 'casa', name: 'Casas', icon: '🏡' },
    { id: 'apartamento', name: 'Apartamentos', icon: '🏢' },
    { id: 'terreno', name: 'Terrenos', icon: '🏞️' },
    { id: 'comercial', name: 'Comercial', icon: '🏪' },
    { id: 'rural', name: 'Rural', icon: '🌾' },
    { id: 'lancamento', name: 'Lançamentos', icon: '🆕' }
  ],

  // Filtros de Busca
  filters: {
    priceRanges: [
      { label: 'Até R$ 150.000', min: 0, max: 150000 },
      { label: 'R$ 150.000 - R$ 300.000', min: 150000, max: 300000 },
      { label: 'R$ 300.000 - R$ 500.000', min: 300000, max: 500000 },
      { label: 'R$ 500.000 - R$ 1.000.000', min: 500000, max: 1000000 },
      { label: 'Acima de R$ 1.000.000', min: 1000000, max: Infinity }
    ],
    bedrooms: [1, 2, 3, 4, '5+'],
    bathrooms: [1, 2, 3, '4+'],
    parkingSpaces: [0, 1, 2, 3, '4+']
  },

  // Desenvolvimento e Debug
  development: {
    debug: false, // Ativa logs no console
    mockData: false, // Usa dados fictícios para testes
    disableAnalytics: true, // Desativa analytics em desenvolvimento
    apiTimeout: 10000 // Timeout para chamadas de API (ms)
  },

  // SEO
  seo: {
    siteName: 'Cacique Imóveis',
    defaultImage: '/images/og-image.jpg', // Open Graph image
    twitterHandle: '@caciqueimoveis', // Se tiver Twitter
    author: 'Cacique Imóveis',
    locale: 'pt_BR'
  },

  // Legal
  legal: {
    termsUrl: '/termos-de-uso.html',
    privacyUrl: '/politica-privacidade.html',
    cookiePolicy: true,
    gdprCompliant: true,
    lgpdCompliant: true // Lei Geral de Proteção de Dados (Brasil)
  }
};

// Exportar configuração
if (typeof module !== 'undefined' && module.exports) {
  module.exports = CONFIG;
}

// Disponibilizar globalmente no navegador
if (typeof window !== 'undefined') {
  window.CACIQUE_CONFIG = CONFIG;
}
