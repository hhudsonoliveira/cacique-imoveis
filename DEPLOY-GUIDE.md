# 🚀 Guia de Deploy - Cacique Imóveis

Guia passo a passo para publicar seu site e colocá-lo no ar.

## 📋 Pré-requisitos

Antes de fazer o deploy, certifique-se de que:

- ✅ Todas as imagens foram adicionadas e otimizadas
- ✅ Informações de contato foram atualizadas no HTML
- ✅ Links de redes sociais estão corretos
- ✅ Site foi testado localmente em diferentes dispositivos
- ✅ Formulários foram testados
- ✅ Calculadora de financiamento está funcionando
- ✅ Todos os links internos funcionam corretamente

---

## 🌐 Opção 1: Netlify (Recomendado - Gratuito)

Netlify é perfeito para sites estáticos. Oferece:
- ✅ Deploy gratuito ilimitado
- ✅ SSL/HTTPS automático
- ✅ CDN global
- ✅ Deploy contínuo via Git
- ✅ Domínio personalizado grátis

### Passo a Passo

#### Método 1: Deploy via Interface (Mais Fácil)

1. **Acesse [netlify.com](https://www.netlify.com/)**
   - Crie uma conta gratuita (pode usar GitHub, GitLab ou email)

2. **Prepare seus arquivos**
   ```bash
   # Crie um arquivo ZIP com todo o projeto
   # OU use o próximo método com Git
   ```

3. **Faça upload**
   - Clique em "Add new site" → "Deploy manually"
   - Arraste a pasta do projeto para a área de upload
   - Aguarde o deploy (geralmente 1-2 minutos)

4. **Seu site está no ar!**
   - URL temporária: `https://random-name.netlify.app`
   - Pode ser acessado imediatamente

#### Método 2: Deploy via Git (Recomendado para Atualizações)

1. **Inicialize repositório Git**
   ```bash
   cd "c:\Users\HUDSON\Desktop\Projetos Sites\Cacique Imóveis"
   git init
   git add .
   git commit -m "Initial commit - Cacique Imóveis website"
   ```

2. **Crie repositório no GitHub**
   - Acesse [github.com](https://github.com) e faça login
   - Clique em "New repository"
   - Nome: `cacique-imoveis-website`
   - Deixe como público ou privado
   - NÃO adicione README, .gitignore ou LICENSE (já temos)
   - Clique em "Create repository"

3. **Conecte o repositório local ao GitHub**
   ```bash
   git remote add origin https://github.com/SEU-USUARIO/cacique-imoveis-website.git
   git branch -M main
   git push -u origin main
   ```

4. **Conecte Netlify ao GitHub**
   - No Netlify, clique em "Add new site" → "Import an existing project"
   - Escolha "GitHub"
   - Autorize o Netlify a acessar seus repositórios
   - Selecione o repositório `cacique-imoveis-website`

5. **Configure o deploy**
   - Build command: (deixe vazio para site estático)
   - Publish directory: `.` (diretório raiz)
   - Clique em "Deploy site"

6. **Atualizações automáticas**
   ```bash
   # Após fazer mudanças no código:
   git add .
   git commit -m "Descrição da mudança"
   git push
   # Site atualiza automaticamente em 1-2 minutos!
   ```

### Configurar Domínio Personalizado no Netlify

1. **No painel do Netlify**
   - Vá em "Domain settings"
   - Clique em "Add custom domain"
   - Digite: `www.caciqueimoveis.com.br`

2. **Configure seu domínio (se já tiver)**
   - Acesse o painel do seu provedor de domínio (Registro.br, GoDaddy, etc.)
   - Adicione os registros DNS:

   ```
   Tipo: CNAME
   Nome: www
   Valor: SEU-SITE.netlify.app

   Tipo: A
   Nome: @
   Valores: 75.2.60.5
   ```

3. **SSL/HTTPS**
   - Netlify ativa automaticamente em até 24h
   - Seu site terá cadeado verde 🔒

---

## 🔷 Opção 2: Vercel (Gratuito)

Vercel é outra excelente opção gratuita, similar ao Netlify.

### Passo a Passo

1. **Acesse [vercel.com](https://vercel.com/)**
   - Crie conta com GitHub, GitLab ou email

2. **Import Project**
   - Clique em "New Project"
   - Conecte seu repositório Git
   - Ou faça upload manual

3. **Deploy**
   - Framework Preset: "Other" (site estático)
   - Root Directory: `./`
   - Clique em "Deploy"

4. **Domínio personalizado**
   - Settings → Domains
   - Adicione seu domínio
   - Configure DNS similar ao Netlify

---

## 📄 Opção 3: GitHub Pages (Gratuito)

Ideal se você já usa GitHub.

### Passo a Passo

1. **Push para GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/SEU-USUARIO/cacique-imoveis.git
   git push -u origin main
   ```

2. **Ativar GitHub Pages**
   - Vá em Settings → Pages
   - Source: "Deploy from a branch"
   - Branch: `main` / `root`
   - Clique em "Save"

3. **Acesse seu site**
   - URL: `https://SEU-USUARIO.github.io/cacique-imoveis/`
   - Pode levar alguns minutos

4. **Domínio personalizado**
   - Em Settings → Pages → Custom domain
   - Digite: `www.caciqueimoveis.com.br`
   - Crie arquivo `CNAME` na raiz com o domínio

---

## 🏢 Opção 4: Hospedagem Tradicional (cPanel/FTP)

Para hospedagens compartilhadas convencionais.

### Passo a Passo

1. **Prepare os arquivos**
   - Certifique-se de que todas as imagens estão otimizadas
   - Verifique se todos os caminhos são relativos

2. **Conecte via FTP**
   - Use um cliente FTP: [FileZilla](https://filezilla-project.org/)
   - Host: ftp.seudominio.com.br
   - Usuário: fornecido pela hospedagem
   - Senha: fornecida pela hospedagem

3. **Faça upload**
   - Conecte-se ao servidor
   - Navegue até a pasta `public_html` ou `www`
   - Arraste todos os arquivos do projeto
   - Aguarde o upload completar

4. **Configure o domínio**
   - Já deve estar configurado pela hospedagem
   - Acesse: `https://www.caciqueimoveis.com.br`

5. **Ative SSL/HTTPS**
   - No cPanel, procure "SSL/TLS"
   - Ou "Let's Encrypt SSL"
   - Ative para seu domínio
   - Força HTTPS via `.htaccess`:

   ```apache
   # Adicione ao início do .htaccess
   RewriteEngine On
   RewriteCond %{HTTPS} off
   RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
   ```

---

## ⚙️ Configurações Pós-Deploy

Após publicar o site, faça estas configurações:

### 1. Atualizar URLs no Código

Edite os seguintes arquivos com seu domínio real:

#### [sitemap.xml](sitemap.xml)
```xml
<!-- Substitua todas as URLs -->
<loc>https://www.caciqueimoveis.com.br/</loc>
```

#### [robots.txt](robots.txt)
```txt
Sitemap: https://www.caciqueimoveis.com.br/sitemap.xml
```

#### [index.html](index.html)
```html
<!-- Tag canonical -->
<link rel="canonical" href="https://www.caciqueimoveis.com.br/">

<!-- Open Graph -->
<meta property="og:url" content="https://www.caciqueimoveis.com.br/">

<!-- Schema.org -->
"url": "https://www.caciqueimoveis.com.br"
```

### 2. Configurar Google Analytics

1. **Crie conta no Google Analytics**
   - Acesse [analytics.google.com](https://analytics.google.com)
   - Crie propriedade GA4
   - Copie o ID: `G-XXXXXXXXXX`

2. **Adicione ao site**
   - Edite [index.html](index.html)
   - Adicione antes do `</head>`:

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

### 3. Configurar Google Search Console

1. **Acesse [search.google.com/search-console](https://search.google.com/search-console)**
2. **Adicione propriedade**
   - Tipo: URL prefix
   - URL: `https://www.caciqueimoveis.com.br`
3. **Verifique propriedade**
   - Método 1: HTML tag (adicione meta tag no `<head>`)
   - Método 2: Arquivo HTML (faça upload do arquivo)
   - Método 3: Google Analytics (se já configurou)
4. **Envie sitemap**
   - Vá em Sitemaps
   - Adicione: `https://www.caciqueimoveis.com.br/sitemap.xml`

### 4. Teste de Performance

Execute testes para garantir boa performance:

1. **[Google PageSpeed Insights](https://pagespeed.web.dev/)**
   - Digite sua URL
   - Objetivo: 90+ no mobile e desktop
   - Siga sugestões de otimização

2. **[GTmetrix](https://gtmetrix.com/)**
   - Analise velocidade de carregamento
   - Verifique otimização de imagens

3. **[WebPageTest](https://www.webpagetest.org/)**
   - Teste de diferentes localizações
   - Analise waterfall de recursos

### 5. Configurar Email Profissional

Crie emails profissionais para o domínio:

- contato@caciqueimoveis.com.br
- vendas@caciqueimoveis.com.br
- caique@caciqueimoveis.com.br

**Opções:**
- **Google Workspace** (pago): Melhor integração, Gmail interface
- **Zoho Mail** (gratuito até 5 usuários): Boa opção gratuita
- **Email da hospedagem**: Geralmente incluído

### 6. Configurar Backup Automático

**Netlify/Vercel:** Backup automático via Git

**Hospedagem tradicional:**
```bash
# Script de backup semanal (Linux)
#!/bin/bash
DATE=$(date +%Y%m%d)
zip -r backup-$DATE.zip /caminho/public_html/
# Configure no cron para executar semanalmente
```

---

## 🔒 Segurança

### Headers de Segurança

Se usar hospedagem tradicional, adicione ao `.htaccess`:

```apache
# Headers de Segurança
<IfModule mod_headers.c>
    Header set X-Content-Type-Options "nosniff"
    Header set X-Frame-Options "SAMEORIGIN"
    Header set X-XSS-Protection "1; mode=block"
    Header set Referrer-Policy "strict-origin-when-cross-origin"
    Header set Permissions-Policy "geolocation=(), microphone=(), camera=()"
</IfModule>
```

### Força HTTPS

```apache
# Redirecionar HTTP para HTTPS
RewriteEngine On
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
```

---

## 📊 Monitoramento

### Ferramentas Recomendadas

1. **[UptimeRobot](https://uptimerobot.com/)** - Monitora se site está online
   - Gratuito para 50 monitores
   - Alerta por email se site cair

2. **Google Analytics** - Tráfego e comportamento dos usuários

3. **Google Search Console** - Performance em buscas

4. **[Hotjar](https://www.hotjar.com/)** - Heatmaps e gravações (opcional)

---

## ✅ Checklist Pré-Deploy

Use este checklist antes de publicar:

### Conteúdo
- [ ] Todas as informações de contato estão corretas
- [ ] Número de WhatsApp funciona
- [ ] Links de Instagram estão corretos
- [ ] CRECI está atualizado
- [ ] Imóveis em destaque adicionados

### Técnico
- [ ] Todas as imagens foram otimizadas
- [ ] Site testado em Chrome, Firefox, Safari
- [ ] Site testado em mobile (responsivo)
- [ ] Formulários funcionam e validam
- [ ] Calculadora funciona corretamente
- [ ] Todos os links internos funcionam
- [ ] Links externos abrem em nova aba
- [ ] Favicon aparece corretamente

### SEO
- [ ] Meta tags preenchidas (title, description)
- [ ] Schema.org configurado
- [ ] Sitemap.xml atualizado com URLs reais
- [ ] Robots.txt configurado
- [ ] Open Graph tags para redes sociais
- [ ] Textos alternativos (alt) em todas as imagens

### Performance
- [ ] Imagens otimizadas (máx 300KB cada)
- [ ] CSS minificado (para produção)
- [ ] JavaScript sem erros no console
- [ ] Carrega em menos de 3 segundos

### Legal
- [ ] Política de privacidade (se coletar dados)
- [ ] Termos de uso (opcional)
- [ ] LGPD compliance (se aplicável)

---

## 🚨 Resolução de Problemas

### Site não aparece após deploy

1. **Aguarde 5-15 minutos** - DNS pode levar tempo para propagar
2. **Limpe cache do navegador** - Ctrl+Shift+Del
3. **Verifique DNS** - Use [whatsmydns.net](https://www.whatsmydns.net/)
4. **Tente em modo anônimo** - Ctrl+Shift+N (Chrome)

### Imagens não aparecem

1. **Verifique caminhos** - Devem ser relativos: `images/logo.png`
2. **Case-sensitive** - Em servidores Linux, `Logo.png` ≠ `logo.png`
3. **Extensões corretas** - `.jpg` não é o mesmo que `.jpeg`

### SSL não funciona

1. **Aguarde 24h** - Certificado SSL pode demorar
2. **Verifique configuração** - Força HTTPS no `.htaccess` ou Netlify
3. **Domínio verificado** - Certifique-se que domínio está verificado

### Formulário não envia

- Site estático não processa formulários server-side
- Use serviços como:
  - [Formspree](https://formspree.io/)
  - [Netlify Forms](https://www.netlify.com/products/forms/)
  - [EmailJS](https://www.emailjs.com/)

---

## 📞 Suporte

### Documentação Útil

- **Netlify:** [docs.netlify.com](https://docs.netlify.com/)
- **Vercel:** [vercel.com/docs](https://vercel.com/docs)
- **GitHub Pages:** [docs.github.com/pages](https://docs.github.com/en/pages)

### Comunidades

- **Stack Overflow:** [stackoverflow.com](https://stackoverflow.com/)
- **Reddit r/webdev:** [reddit.com/r/webdev](https://www.reddit.com/r/webdev/)
- **Discord Web Dev:** Várias comunidades disponíveis

---

## 🎉 Próximos Passos Após Deploy

1. **Compartilhe nas redes sociais**
   - Anuncie o novo site no Instagram
   - Compartilhe no WhatsApp com clientes
   - Poste no Facebook

2. **Configure Google My Business**
   - Adicione o site ao perfil do negócio
   - Melhora SEO local

3. **Crie conteúdo regularmente**
   - Adicione novos imóveis
   - Atualize depoimentos
   - Publique artigos no blog (futuro)

4. **Monitore e otimize**
   - Acompanhe Google Analytics mensalmente
   - Ajuste baseado no comportamento dos usuários
   - A/B teste diferentes CTAs

5. **Marketing Digital**
   - Google Ads para palavras-chave locais
   - Facebook/Instagram Ads
   - SEO contínuo

---

## 🏆 Boas Práticas de Manutenção

### Atualizações Regulares

- **Semanalmente:** Adicione novos imóveis
- **Mensalmente:** Revise depoimentos e FAQ
- **Trimestralmente:** Atualize fotos e conteúdo
- **Anualmente:** Redesign parcial se necessário

### Backup

- **Automático via Git:** Faça commits regulares
- **Manual:** Backup mensal do servidor
- **Imagens:** Mantenha cópia local de todas as fotos

---

**Parabéns! Seu site está pronto para o mundo! 🚀**

[⬆ Voltar ao topo](#-guia-de-deploy---cacique-imóveis)
