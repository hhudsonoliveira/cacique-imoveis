# 📸 Guia de Imagens - Cacique Imóveis

Este guia detalha todas as imagens necessárias para o website, incluindo dimensões recomendadas, formatos e otimizações.

## 📋 Índice

1. [Logo e Branding](#logo-e-branding)
2. [Hero Section](#hero-section)
3. [Imóveis](#imóveis)
4. [Corretor](#corretor)
5. [Depoimentos](#depoimentos)
6. [Instagram Feed](#instagram-feed)
7. [Ícones PWA](#ícones-pwa)
8. [Open Graph](#open-graph)
9. [Ferramentas de Otimização](#ferramentas-de-otimização)

---

## 🎨 Logo e Branding

### Logo Principal
- **Arquivo:** `images/logo.png`
- **Dimensões:** 200x60px (aproximadamente)
- **Formato:** PNG com fundo transparente
- **Peso máximo:** 50KB
- **Uso:** Header do site, footer

### Logo Alternativo (Opcional)
- **Arquivo:** `images/logo-white.png`
- **Dimensões:** 200x60px
- **Formato:** PNG com fundo transparente
- **Uso:** Footer ou versões dark do site

### Favicon
- **Arquivo:** `images/favicon.ico`
- **Dimensões:** 32x32px
- **Formato:** ICO ou PNG
- **Peso máximo:** 10KB

---

## 🏡 Hero Section

### Background Hero
- **Arquivo:** `images/hero/hero-bg.jpg`
- **Dimensões:** 1920x1080px (Full HD)
- **Formato:** JPG otimizado
- **Peso máximo:** 300KB
- **Descrição:** Imagem de Salvador, bairro nobre, ou imóvel de destaque
- **Dica:** Use imagens com boa iluminação, preferência para horário dourado

### Background Hero Mobile (Opcional)
- **Arquivo:** `images/hero/hero-bg-mobile.jpg`
- **Dimensões:** 768x1024px
- **Formato:** JPG otimizado
- **Peso máximo:** 150KB

---

## 🏠 Imóveis

### Imóveis em Destaque

Você precisará de pelo menos **6 imagens** de imóveis para a seção de destaque:

#### Propriedade 1 - Casa Luxo Itapuã
- **Arquivo:** `images/properties/casa-itapua-1.jpg`
- **Dimensões:** 800x600px (proporção 4:3)
- **Formato:** JPG otimizado
- **Peso máximo:** 150KB por imagem

#### Propriedade 2 - Apartamento Piatã
- **Arquivo:** `images/properties/apto-piata-1.jpg`
- **Dimensões:** 800x600px
- **Formato:** JPG otimizado
- **Peso máximo:** 150KB

#### Propriedade 3 - Cobertura Patamares
- **Arquivo:** `images/properties/cobertura-patamares-1.jpg`
- **Dimensões:** 800x600px
- **Formato:** JPG otimizado
- **Peso máximo:** 150KB

#### Propriedade 4 - Casa Imbuí
- **Arquivo:** `images/properties/casa-imbui-1.jpg`
- **Dimensões:** 800x600px
- **Formato:** JPG otimizado
- **Peso máximo:** 150KB

#### Propriedade 5 - Apartamento Boca do Rio
- **Arquivo:** `images/properties/apto-boca-rio-1.jpg`
- **Dimensões:** 800x600px
- **Formato:** JPG otimizado
- **Peso máximo:** 150KB

#### Propriedade 6 - Casa Condomínio Lauro de Freitas
- **Arquivo:** `images/properties/casa-lauro-1.jpg`
- **Dimensões:** 800x600px
- **Formato:** JPG otimizado
- **Peso máximo:** 150KB

### Galeria de Imóveis (Múltiplas fotos por propriedade)

Para cada imóvel, é recomendado ter 5-10 fotos mostrando:
1. Fachada/Exterior
2. Sala de estar
3. Cozinha
4. Quarto principal
5. Banheiro
6. Área externa/Varanda
7. Vistas especiais

**Nomenclatura sugerida:**
```
images/properties/property-id/
  ├── 01-fachada.jpg
  ├── 02-sala.jpg
  ├── 03-cozinha.jpg
  ├── 04-quarto-principal.jpg
  ├── 05-banheiro.jpg
  └── 06-area-externa.jpg
```

### Placeholder (Imagem Padrão)
- **Arquivo:** `images/properties/placeholder.jpg`
- **Dimensões:** 800x600px
- **Formato:** JPG
- **Uso:** Quando não houver foto disponível
- **Sugestão:** Imagem com logo da Cacique e texto "Foto em breve"

---

## 👨‍💼 Corretor

### Foto do Corretor Caíque
- **Arquivo:** `images/caique-corretor.jpg`
- **Dimensões:** 400x400px (quadrada)
- **Formato:** JPG otimizado
- **Peso máximo:** 100KB
- **Descrição:** Foto profissional, fundo neutro, roupa formal
- **Dica:** Boa iluminação, sorriso natural, olhando para câmera

### Foto Alternativa (Ação)
- **Arquivo:** `images/caique-corretor-action.jpg`
- **Dimensões:** 800x600px
- **Formato:** JPG
- **Descrição:** Corretor em ação (mostrando imóvel, com cliente, etc.)

---

## 💬 Depoimentos

### Fotos de Clientes

Você precisará de pelo menos **3 fotos** de clientes para os depoimentos:

#### Cliente 1 - Maria Silva
- **Arquivo:** `images/testimonials/maria-silva.jpg`
- **Dimensões:** 100x100px (circular no CSS)
- **Formato:** JPG otimizado
- **Peso máximo:** 30KB

#### Cliente 2 - João Santos
- **Arquivo:** `images/testimonials/joao-santos.jpg`
- **Dimensões:** 100x100px
- **Formato:** JPG otimizado
- **Peso máximo:** 30KB

#### Cliente 3 - Ana Costa
- **Arquivo:** `images/testimonials/ana-costa.jpg`
- **Dimensões:** 100x100px
- **Formato:** JPG otimizado
- **Peso máximo:** 30KB

**Nota:** Se não tiver fotos reais de clientes, pode usar:
- Avatares genéricos
- Silhuetas
- Iniciais em círculos coloridos (gerado via CSS)
- Serviços como [UI Faces](https://uifaces.co/) ou [This Person Does Not Exist](https://thispersondoesnotexist.com/)

---

## 📱 Instagram Feed

### Posts do Instagram

Você precisará de **6 imagens** do feed do Instagram:

- **Arquivos:** `images/instagram/post-1.jpg` até `post-6.jpg`
- **Dimensões:** 400x400px (quadradas)
- **Formato:** JPG otimizado
- **Peso máximo:** 80KB cada
- **Descrição:** Screenshots reais dos posts do Instagram ou fotos usadas nas redes sociais

**Dica:** Baixe diretamente do seu perfil do Instagram usando:
- [DownloadGram](https://downloadgram.com/)
- [InstaDownloader](https://instadownloader.co/)

---

## 📲 Ícones PWA (Progressive Web App)

Para tornar o site instalável como app, você precisa de ícones em vários tamanhos:

### Lista Completa de Ícones

| Arquivo | Dimensões | Formato | Peso Máx |
|---------|-----------|---------|----------|
| `images/icon-72x72.png` | 72x72px | PNG | 10KB |
| `images/icon-96x96.png` | 96x96px | PNG | 15KB |
| `images/icon-128x128.png` | 128x128px | PNG | 20KB |
| `images/icon-144x144.png` | 144x144px | PNG | 25KB |
| `images/icon-152x152.png` | 152x152px | PNG | 30KB |
| `images/icon-192x192.png` | 192x192px | PNG | 40KB |
| `images/icon-384x384.png` | 384x384px | PNG | 60KB |
| `images/icon-512x512.png` | 512x512px | PNG | 80KB |

### Gerando Ícones PWA

**Método 1 - Ferramentas Online (Recomendado)**

Use o [PWA Asset Generator](https://www.pwabuilder.com/imageGenerator):
1. Faça upload de uma imagem do logo em alta resolução (1024x1024px)
2. Baixe o pacote completo de ícones
3. Extraia na pasta `images/`

**Método 2 - Photoshop/GIMP**
1. Abra seu logo em alta resolução
2. Redimensione para cada tamanho necessário
3. Exporte como PNG com transparência
4. Otimize com TinyPNG

---

## 🌐 Open Graph (Compartilhamento em Redes Sociais)

### Imagem OG Principal
- **Arquivo:** `images/og-image.jpg`
- **Dimensões:** 1200x630px
- **Formato:** JPG otimizado
- **Peso máximo:** 200KB
- **Descrição:** Imagem que aparece ao compartilhar o site no Facebook, WhatsApp, LinkedIn
- **Conteúdo sugerido:** Logo + Tagline + Imagem de destaque

### Imagem OG Mobile (Opcional)
- **Arquivo:** `images/og-image-square.jpg`
- **Dimensões:** 1080x1080px (quadrada)
- **Formato:** JPG
- **Uso:** Instagram, Pinterest

---

## 🎯 Screenshots (PWA)

### Screenshot Desktop
- **Arquivo:** `images/screenshot-desktop.png`
- **Dimensões:** 1920x1080px
- **Formato:** PNG
- **Descrição:** Print da homepage completa em desktop
- **Uso:** App stores, PWA preview

### Screenshot Mobile
- **Arquivo:** `images/screenshot-mobile.png`
- **Dimensões:** 540x720px
- **Formato:** PNG
- **Descrição:** Print da homepage em mobile
- **Uso:** Google Play, PWA install prompt

---

## 🎨 Ícones de Shortcuts (Opcional)

Para os atalhos do PWA definidos no manifest.json:

### Ícone Imóveis
- **Arquivo:** `images/shortcut-properties.png`
- **Dimensões:** 96x96px
- **Formato:** PNG
- **Descrição:** Ícone de casa/prédio

### Ícone Calculadora
- **Arquivo:** `images/shortcut-calculator.png`
- **Dimensões:** 96x96px
- **Formato:** PNG
- **Descrição:** Ícone de calculadora

### Ícone WhatsApp
- **Arquivo:** `images/shortcut-whatsapp.png`
- **Dimensões:** 96x96px
- **Formato:** PNG
- **Descrição:** Logo do WhatsApp oficial

---

## 🛠️ Ferramentas de Otimização

### Compressão de Imagens

#### Online (Gratuito)
- **[TinyPNG](https://tinypng.com/)** - Melhor para PNG e JPG
- **[Squoosh](https://squoosh.app/)** - Google, vários formatos
- **[Compressor.io](https://compressor.io/)** - Até 90% de compressão
- **[ImageOptim](https://imageoptim.com/)** - Mac only, batch processing

#### Ferramentas Desktop
- **[GIMP](https://www.gimp.org/)** - Gratuito, alternativa ao Photoshop
- **[XnConvert](https://www.xnview.com/en/xnconvert/)** - Batch processing
- **[IrfanView](https://www.irfanview.com/)** - Windows, rápido

### Conversão de Formatos Modernos

#### WebP (Recomendado para web)
```bash
# Usando cwebp (Google)
cwebp -q 80 input.jpg -o output.webp
```

#### AVIF (Próxima geração)
```bash
# Usando avifenc
avifenc --min 0 --max 63 input.jpg output.avif
```

### Geração em Lote

#### ImageMagick (Linha de comando)
```bash
# Redimensionar todas as imagens de uma pasta
mogrify -resize 800x600 -quality 85 *.jpg

# Converter todas para WebP
for file in *.jpg; do cwebp -q 80 "$file" -o "${file%.jpg}.webp"; done
```

---

## 📐 Dimensões Resumidas

| Tipo | Dimensão Recomendada | Formato | Peso Máx |
|------|---------------------|---------|----------|
| Logo | 200x60px | PNG | 50KB |
| Hero Desktop | 1920x1080px | JPG | 300KB |
| Imóvel | 800x600px | JPG | 150KB |
| Corretor | 400x400px | JPG | 100KB |
| Depoimento | 100x100px | JPG | 30KB |
| Instagram | 400x400px | JPG | 80KB |
| OG Image | 1200x630px | JPG | 200KB |
| PWA Icons | 72-512px | PNG | 10-80KB |

---

## ✅ Checklist de Imagens

Use este checklist para garantir que todas as imagens estão prontas:

### Essenciais (Obrigatórias)
- [ ] `images/logo.png` - Logo principal
- [ ] `images/favicon.ico` - Favicon
- [ ] `images/hero/hero-bg.jpg` - Background hero
- [ ] `images/caique-corretor.jpg` - Foto do corretor
- [ ] `images/og-image.jpg` - Open Graph
- [ ] Mínimo 6 fotos de imóveis em `images/properties/`

### Importantes
- [ ] Ícones PWA (72x72 até 512x512)
- [ ] 3 fotos de depoimentos
- [ ] 6 imagens do Instagram feed
- [ ] Placeholder para imóveis sem foto

### Opcionais
- [ ] Logo branco para dark mode
- [ ] Hero mobile otimizado
- [ ] Screenshots desktop/mobile
- [ ] Ícones de shortcuts
- [ ] Galeria completa por imóvel (5-10 fotos cada)

---

## 💡 Dicas Profissionais

### Fotografia de Imóveis

1. **Iluminação**
   - Fotografe durante o dia, com luz natural
   - Evite flash direto
   - Use horário dourado (perto do pôr do sol) para exteriores

2. **Composição**
   - Use regra dos terços
   - Mostre amplitude dos ambientes
   - Fotografe de cantos para maximizar espaço visível
   - Mantenha linhas verticais retas

3. **Equipamento**
   - Smartphone moderno é suficiente
   - Tripé ajuda a evitar fotos tremidas
   - Lente grande angular é ideal

4. **Pós-produção**
   - Ajuste balanço de branco
   - Aumente levemente saturação
   - Corrija perspectiva se necessário
   - Não exagere nos filtros

### Otimização para SEO

- Use nomes descritivos: `casa-3-quartos-itapua.jpg` em vez de `IMG_1234.jpg`
- Adicione alt text relevante em todas as imagens no HTML
- Mantenha peso total da página abaixo de 3MB
- Use lazy loading para imagens abaixo da dobra

### Performance

- Sirva imagens em formatos modernos (WebP) com fallback JPG
- Use `srcset` para responsive images
- Implemente lazy loading
- Configure cache headers no servidor
- Use CDN para servir imagens (Cloudflare, CloudFront, etc.)

---

## 🎬 Próximos Passos

1. **Organize sua pasta de imagens** seguindo a estrutura do guia
2. **Otimize todas as imagens** com as ferramentas sugeridas
3. **Teste o carregamento** em conexões lentas
4. **Valide com ferramentas** como Google PageSpeed Insights
5. **Monitore performance** após o lançamento

---

## 📞 Suporte

Se precisar de ajuda com as imagens ou tiver dúvidas:
- Consulte a documentação do projeto no [README.md](README.md)
- Entre em contato com o desenvolvedor

---

**Desenvolvido para Cacique Imóveis** 🏠

*Última atualização: Janeiro 2026*
