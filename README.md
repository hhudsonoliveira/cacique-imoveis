# 🏠 Cacique Imóveis - Website Oficial

> Seu imóvel dos sonhos em Salvador, Bahia. Especialistas em Minha Casa Minha Vida e financiamentos facilitados.

[![CRECI](https://img.shields.io/badge/CRECI-J--3248-orange)](https://www.crecisp.gov.br/)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)

## 📋 Sobre o Projeto

Website profissional e responsivo para a **Cacique Imóveis**, imobiliária especializada em compra, venda e aluguel de imóveis em Salvador e região metropolitana. O site apresenta um design moderno, otimizado para SEO e com foco em conversão de leads.

### ✨ Características Principais

- 🎨 **Design Moderno e Responsivo** - Mobile-first, adaptável a todos os dispositivos
- 🚀 **Performance Otimizada** - Carregamento rápido e experiência fluida
- 🔍 **SEO Avançado** - Meta tags, Schema.org, sitemap.xml
- ♿ **Acessibilidade** - Seguindo padrões WCAG 2.1 AA
- 📱 **PWA Ready** - Manifest.json configurado para Progressive Web App
- 💬 **Integração WhatsApp** - Contato direto via botão flutuante
- 📸 **Instagram Feed** - Integração com redes sociais
- 🧮 **Calculadora de Financiamento** - Simulação em tempo real
- ⭐ **Sistema de Favoritos** - LocalStorage para salvar imóveis
- 🎭 **Animações Suaves** - Intersection Observer API

## 🎯 Seções do Site

1. **Header** - Menu de navegação responsivo com logo
2. **Hero** - Banner principal com formulário de busca
3. **Badges de Confiança** - Credenciais e diferenciais
4. **Categorias** - Tipos de imóveis (Casas, Apartamentos, Terrenos, etc.)
5. **Imóveis em Destaque** - Carousel com propriedades principais
6. **Sobre o Corretor** - Apresentação do Caíque (CRECI/BA 23.247)
7. **Calculadora** - Simulador de financiamento habitacional
8. **Como Funciona** - Passo a passo do processo
9. **Regiões Atendidas** - Bairros e localidades em Salvador
10. **Depoimentos** - Testemunhos de clientes satisfeitos
11. **Instagram** - Feed de fotos das redes sociais
12. **FAQ** - Perguntas frequentes
13. **Contato** - Formulário e informações de contato
14. **Footer** - Links úteis e informações adicionais

## 🛠️ Tecnologias Utilizadas

### Frontend
- **HTML5** - Estrutura semântica
- **CSS3** - Estilização modular
  - CSS Custom Properties (Variáveis)
  - Flexbox & Grid Layout
  - Animações e Transições
- **JavaScript ES6+** - Funcionalidades interativas
  - Classes e Módulos
  - Intersection Observer API
  - LocalStorage API
  - Fetch API (preparado para backend)

### Ferramentas e Padrões
- **Mobile-First Design** - Responsividade prioritária
- **BEM Methodology** - Nomenclatura de classes CSS
- **Semantic HTML** - Acessibilidade e SEO
- **Schema.org** - Structured Data (JSON-LD)
- **Progressive Enhancement** - Funcionalidade básica sempre disponível

## 📁 Estrutura de Arquivos

```
cacique-imoveis/
│
├── index.html                  # Página principal
├── sitemap.xml                # Mapa do site para SEO
├── robots.txt                 # Instruções para crawlers
├── manifest.json              # Configuração PWA
├── README.md                  # Documentação (este arquivo)
│
├── css/                       # Estilos CSS
│   ├── reset.css             # Reset de estilos padrão
│   ├── variables.css         # Variáveis CSS (cores, fontes, etc.)
│   ├── base.css              # Estilos base e tipografia
│   ├── responsive.css        # Media queries e responsividade
│   ├── animations.css        # Animações e transições
│   │
│   ├── components/           # Componentes reutilizáveis
│   │   ├── buttons.css       # Estilos de botões
│   │   ├── cards.css         # Cards de imóveis e categorias
│   │   ├── forms.css         # Formulários e inputs
│   │   └── modal.css         # Janelas modais
│   │
│   └── sections/             # Seções específicas
│       ├── header.css        # Cabeçalho e navegação
│       ├── hero.css          # Banner principal
│       ├── properties.css    # Seção de imóveis
│       └── footer.css        # Rodapé
│
├── js/                       # Scripts JavaScript
│   ├── main.js               # Script principal e inicialização
│   ├── menu.js               # Menu hambúrguer mobile
│   ├── form-validation.js    # Validação de formulários
│   ├── calculator.js         # Calculadora de financiamento
│   ├── carousel.js           # Carrossel de imóveis
│   ├── filter.js             # Filtros de busca
│   ├── modal.js              # Gerenciamento de modais
│   ├── favorites.js          # Sistema de favoritos
│   └── animations.js         # Animações scroll-reveal
│
└── images/                   # Imagens e assets
    ├── logo.png              # Logo da empresa
    ├── hero/                 # Imagens do hero
    ├── properties/           # Fotos de imóveis
    ├── testimonials/         # Fotos de clientes
    ├── instagram/            # Feed do Instagram
    └── icons/                # Ícones PWA (72x72 até 512x512)
```

## 🚀 Como Usar

### Pré-requisitos

- Navegador moderno (Chrome, Firefox, Safari, Edge)
- Editor de código (recomendado: VS Code)
- Servidor local para desenvolvimento (Live Server, XAMPP, etc.)

### Instalação

1. **Clone ou baixe o projeto**
   ```bash
   git clone https://github.com/caciqueimoveis/website.git
   cd cacique-imoveis
   ```

2. **Abra com seu editor de código**
   ```bash
   code .
   ```

3. **Inicie um servidor local**

   Opção 1 - VS Code Live Server:
   - Instale a extensão "Live Server"
   - Clique com botão direito no `index.html`
   - Selecione "Open with Live Server"

   Opção 2 - Python:
   ```bash
   python -m http.server 8000
   ```

   Opção 3 - Node.js:
   ```bash
   npx http-server
   ```

4. **Acesse no navegador**
   ```
   http://localhost:8000 (ou a porta do seu servidor)
   ```

### Configuração

#### 1. Adicionar Imagens

Coloque suas imagens na pasta `images/` seguindo a estrutura:

```
images/
├── logo.png (recomendado: 200x60px, PNG transparente)
├── hero/hero-bg.jpg (1920x1080px, otimizada)
├── properties/
│   ├── property-1.jpg
│   ├── property-2.jpg
│   └── ... (800x600px, otimizadas)
└── icons/
    ├── icon-72x72.png
    ├── icon-192x192.png
    └── icon-512x512.png
```

**Dica:** Use ferramentas como [TinyPNG](https://tinypng.com/) para otimizar as imagens.

#### 2. Personalizar Cores (se necessário)

Edite o arquivo [css/variables.css](css/variables.css):

```css
:root {
    --laranja-primario: #FF6B35;  /* Cor principal */
    --azul-escuro: #1E3A8A;       /* Cor secundária */
    --marrom-bronze: #8B7355;     /* Cor de destaque */
}
```

#### 3. Atualizar Informações de Contato

No arquivo [index.html](index.html), atualize:

- Número do WhatsApp (linha ~50)
- Links de redes sociais (linha ~1400)
- Informações de CRECI
- Endereço da empresa

#### 4. Configurar Domínio

Atualize as URLs nos arquivos:
- `sitemap.xml` - URLs do site
- `manifest.json` - start_url e scope
- `index.html` - canonical URLs e Schema.org

## 📱 Funcionalidades JavaScript

### Calculadora de Financiamento

```javascript
// Uso da calculadora
const calculator = new FinancingCalculator();
calculator.calculate();
// Retorna: parcela mensal, valor total, status de aprovação
```

### Sistema de Favoritos

```javascript
// Gerenciar favoritos
const favorites = new FavoritesManager();
favorites.toggle(propertyId);
favorites.getAll();
```

### Validação de Formulários

```javascript
// Validar campos
const validator = new FormValidator();
validator.validateEmail(email);
validator.validatePhone(phone);
validator.validateForm(formElement);
```

### Máscaras de Input

- Telefone: `(71) 98304-0695`
- CPF: `000.000.000-00`
- Valores: `R$ 350.000,00`

## 🎨 Guia de Estilo

### Paleta de Cores

| Cor | Hex | Uso |
|-----|-----|-----|
| Laranja Primário | `#FF6B35` | Botões principais, CTAs, destaques |
| Azul Escuro | `#1E3A8A` | Títulos, textos importantes |
| Bronze | `#8B7355` | Elementos secundários, detalhes |
| Verde WhatsApp | `#25D366` | Botão WhatsApp |
| Cinza 800 | `#1F2937` | Texto principal |
| Cinza 600 | `#4B5563` | Texto secundário |
| Branco | `#FFFFFF` | Backgrounds, cards |

### Tipografia

- **Família Principal:** Poppins (Google Fonts)
  - Títulos: 600 (Semi-bold), 700 (Bold)

- **Família Secundária:** Inter (Google Fonts)
  - Corpo de texto: 400 (Regular), 500 (Medium)

### Espaçamentos

```css
--spacing-xs: 0.25rem;   /* 4px */
--spacing-sm: 0.5rem;    /* 8px */
--spacing-md: 1rem;      /* 16px */
--spacing-lg: 1.5rem;    /* 24px */
--spacing-xl: 2rem;      /* 32px */
--spacing-2xl: 3rem;     /* 48px */
--spacing-3xl: 4rem;     /* 64px */
```

## 🔧 Desenvolvimento

### Adicionar Novos Imóveis

1. Edite [index.html](index.html) na seção `#imoveis-destaque`
2. Copie a estrutura de um card existente:

```html
<div class="property-card">
    <div class="property-image">
        <img src="images/properties/imovel.jpg" alt="Descrição">
        <span class="property-badge">Destaque</span>
        <button class="favorite-btn" data-property-id="1">
            <i class="heart-icon"></i>
        </button>
    </div>
    <div class="property-content">
        <span class="property-type">Apartamento</span>
        <h3 class="property-title">Nome do Imóvel</h3>
        <p class="property-location">Bairro, Salvador - BA</p>
        <div class="property-features">
            <span><i>🛏️</i> 3 quartos</span>
            <span><i>🚿</i> 2 banheiros</span>
            <span><i>🚗</i> 1 vaga</span>
            <span><i>📐</i> 80m²</span>
        </div>
        <div class="property-footer">
            <div class="property-price">
                <span class="price-label">A partir de</span>
                <span class="price-value">R$ 350.000</span>
            </div>
            <a href="#" class="btn btn-primary btn-sm">Ver detalhes</a>
        </div>
    </div>
</div>
```

### Adicionar Nova Seção

1. Crie o HTML na estrutura semântica:
```html
<section id="nova-secao" class="section">
    <div class="container">
        <!-- Conteúdo -->
    </div>
</section>
```

2. Crie arquivo CSS em `css/sections/nova-secao.css`

3. Importe no `index.html`:
```html
<link rel="stylesheet" href="css/sections/nova-secao.css">
```

## 🌐 SEO e Performance

### Checklist SEO

- ✅ Meta tags otimizadas (title, description, keywords)
- ✅ Open Graph para redes sociais
- ✅ Schema.org (RealEstateAgent, Product)
- ✅ Sitemap.xml configurado
- ✅ Robots.txt configurado
- ✅ URLs amigáveis e canônicas
- ✅ Headings hierárquicos (H1 único, H2-H6)
- ✅ Alt text em todas as imagens
- ✅ Links internos e externos relevantes

### Otimização de Performance

- ✅ Imagens otimizadas e lazy loading
- ✅ CSS minificado (para produção)
- ✅ JavaScript assíncrono
- ✅ Fonts com display: swap
- ✅ Redução de HTTP requests
- ✅ Gzip/Brotli compression (servidor)
- ✅ Cache headers configurados (servidor)

### Ferramentas Recomendadas

- [Google PageSpeed Insights](https://pagespeed.web.dev/)
- [GTmetrix](https://gtmetrix.com/)
- [Google Search Console](https://search.google.com/search-console)
- [Schema Markup Validator](https://validator.schema.org/)

## 📦 Deploy (Publicação)

### Opção 1: Hospedagem Tradicional (cPanel/FTP)

1. Faça upload de todos os arquivos via FTP
2. Configure o domínio para apontar para a pasta raiz
3. Ative SSL/HTTPS no painel
4. Configure compressão Gzip
5. Teste todos os links e funcionalidades

### Opção 2: Netlify (Recomendado - Gratuito)

1. Crie conta em [Netlify](https://www.netlify.com/)
2. Conecte seu repositório Git ou faça upload manual
3. Configure domínio personalizado
4. SSL automático incluído
5. Deploy contínuo ativado

```bash
# Instalação do Netlify CLI
npm install -g netlify-cli

# Deploy
netlify deploy --prod
```

### Opção 3: Vercel (Gratuito)

1. Crie conta em [Vercel](https://vercel.com/)
2. Importe projeto do Git
3. Configure domínio
4. Deploy automático a cada commit

### Opção 4: GitHub Pages

1. Crie repositório no GitHub
2. Faça upload dos arquivos
3. Ative GitHub Pages nas configurações
4. Configure domínio personalizado (opcional)

## 🔒 Segurança

### Boas Práticas Implementadas

- ✅ Validação de formulários no client-side
- ✅ Sanitização de inputs
- ✅ Headers de segurança (configurar no servidor)
- ✅ HTTPS obrigatório
- ✅ Sem informações sensíveis no código
- ✅ Links externos com rel="noopener noreferrer"

### Configuração Servidor (Recomendado)

Adicione ao `.htaccess` (Apache) ou nginx.conf:

```apache
# .htaccess - Segurança

# Forçar HTTPS
RewriteEngine On
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

# Headers de Segurança
Header set X-Content-Type-Options "nosniff"
Header set X-Frame-Options "SAMEORIGIN"
Header set X-XSS-Protection "1; mode=block"
Header set Referrer-Policy "strict-origin-when-cross-origin"

# Compressão Gzip
<IfModule mod_deflate.c>
    AddOutputFilterByType DEFLATE text/html text/css text/javascript application/javascript application/json
</IfModule>

# Cache
<IfModule mod_expires.c>
    ExpiresActive On
    ExpiresByType image/jpg "access plus 1 year"
    ExpiresByType image/jpeg "access plus 1 year"
    ExpiresByType image/png "access plus 1 year"
    ExpiresByType text/css "access plus 1 month"
    ExpiresByType application/javascript "access plus 1 month"
</IfModule>
```

## 📊 Analytics e Monitoramento

### Google Analytics 4

Adicione antes do `</head>` no [index.html](index.html):

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### Facebook Pixel (Opcional)

```html
<!-- Facebook Pixel -->
<script>
  !function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', 'SEU_PIXEL_ID');
  fbq('track', 'PageView');
</script>
```

## 🐛 Resolução de Problemas

### Menu não abre no mobile

- Verifique se [js/menu.js](js/menu.js) está carregado
- Verifique console para erros JavaScript
- Teste em outro navegador

### Calculadora não funciona

- Verifique se [js/calculator.js](js/calculator.js) está importado
- Confira IDs dos elementos no HTML
- Verifique console para erros

### Imagens não aparecem

- Verifique caminhos relativos das imagens
- Confirme que arquivos existem na pasta `images/`
- Teste com imagens de exemplo primeiro

### Formulário não valida

- Verifique atributos `required` nos inputs
- Confirme que [js/form-validation.js](js/form-validation.js) está ativo
- Teste com diferentes tipos de entrada

## 🤝 Contribuindo

Contribuições são bem-vindas! Para mudanças importantes:

1. Fork o projeto
2. Crie uma branch (`git checkout -b feature/NovaFuncionalidade`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova funcionalidade'`)
4. Push para a branch (`git push origin feature/NovaFuncionalidade`)
5. Abra um Pull Request

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👥 Contato e Suporte

**Cacique Imóveis**
- 📱 WhatsApp: [(71) 98304-0695](https://wa.me/5571983040695)
- 📧 Email: contato@caciqueimoveis.com.br
- 📍 Endereço: Salvador, Bahia - Brasil
- 📸 Instagram: [@corretor.caique](https://instagram.com/corretor.caique) | [@cacique.imoveis](https://instagram.com/cacique.imoveis)
- 🏢 CRECI: J-3248
- 👨‍💼 Corretor: Caíque (CRECI/BA 23.247)

---

## 📚 Recursos Adicionais

### Documentação Útil

- [MDN Web Docs](https://developer.mozilla.org/)
- [CSS Tricks](https://css-tricks.com/)
- [Google Developers](https://developers.google.com/)
- [Can I Use](https://caniuse.com/) - Compatibilidade de browsers

### Inspiração e Referências

- [Awwwards](https://www.awwwards.com/) - Design de websites
- [Dribbble](https://dribbble.com/) - Design UI/UX
- [CodePen](https://codepen.io/) - Exemplos de código

---

<div align="center">

**Desenvolvido com ❤️ para Cacique Imóveis**

*Seu imóvel dos sonhos está aqui!* 🏠

[⬆ Voltar ao topo](#-cacique-imóveis---website-oficial)

</div>
