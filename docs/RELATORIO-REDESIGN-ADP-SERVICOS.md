# Relatório de Redesign e Auditoria Técnica — ADP Serviços Especializados

**Projeto**: ADP Desentupidora e Serviços Hidráulicos  
**Domínio**: https://adpservicos.app.br/  
**Etapa**: Redesign Responsivo Completo — Desktop e Celular + Integração de Mídia e Acessibilidade Sênior  

---

## 1. Dire direção Visual e Paleta de Cores
- **Paleta Inspirada na Logo e Identidade Institucional**:
  - **Cor Principal**: Azul Corporativo Sólido (`#1E40AF` / `bg-blue-700`) — transmite confiança, precisão e autoridade técnica.
  - **Cor de Destaque / Ação Imediata**: Verde Esmeralda (`#15803d` / `bg-emerald-600` e `#25D366`) — prioriza chamadas de WhatsApp e atendimento humanizado.
  - **Neutros de Apoio**: Azul Ardósia Escuro (`#0F172A` / `slate-900`) para seções de destaque e fundos limpos em Cinza Claro (`#F8FAFC` / `slate-50`).
- **Disciplina Visual**: Sem gradientes artificiais exagerados, sem efeitos de brilho em neon ou elementos decorativos flutuantes ("AI slop"). Foco em diagramação editorial limpa, blocos estruturados e legibilidade de alto contraste.

---

## 2. Arquivos Alterados
1. `components/BlogCover.tsx` — Mapeamento canônico das 10 capas 16:9 utilizando os nomes de arquivos reais confirmados pelo servidor do cliente, sobreposição de logo CSS e grades editoriais.
2. `components/Header.tsx` — Menu mobile com navegação focada em idosos, botões de toque generosos (≥ 56px), controle de tamanho de texto e acesso direto à central.
3. `components/Footer.tsx` — Seção de acolhimento humanizado para idosos e aposentados (4 passos claros), dados institucionais, endereço no CIC e mapa do site.
4. `pages/Home.tsx` — Reestruturação da página inicial com capas 16:9, sintomas reconhecíveis, serviços validados e guias técnicos.
5. `pages/ServicePage.tsx` — Páginas de serviços (esgoto, fossa, caça vazamento, hidrojateamento, caixa d'água, vídeo inspeção) enriquecidas com capas 16:9 e transparência de preços.
6. `pages/CuritibaSEOPage.tsx` — Guia principal da capital com logística a partir do CIC e seções de bairro.
7. `pages/CoveragePage.tsx` — Cobertura territorial validada (74 bairros de Curitiba e 11 municípios metropolitanos principais).
8. `pages/HowItWorksPage.tsx` — Metodologia passo a passo com imagens técnicas e diretrizes de orçamento no local.
9. `pages/LocationPage.tsx` — Páginas territoriais por bairro e cidade com perfis adaptados (condomínios, industrial, comercial) e sem duplicação de sedes.

---

## 3. Imagens Utilizadas e Origem
- **Origem**: Servidor de Imagens do Cliente (`https://img.supremasite.com.br/adp/`).
- **Nomes de Arquivos Confirmados**:
  - `blog-preco-servico-desentupidora-curitiba-16-9.jpg`
  - `blog-hidrojateamento-desentupimento-sem-quebrar-16-9.jpg`
  - `blog-caca-vazamento-ultrassom-curitiba-16-9.jpg`
  - `06-manutencao-hidraulica-e-preventiva-cic-curitiba.jpg`
  - `05-limpeza-de-caixa-dagua-e-reservatorios-cic-curitiba.jpg`
  - `01-desentupimento-de-pias-e-ralos-cic-curitiba.jpg`
  - `02-desentupimento-de-vasos-sanitarios-cic-curitiba.jpg`
  - `adp-site2-vasos-sanitarios-1080x1080-v2.jpg`
  - `blog-chegada-40-minutos-desentupidora-rapida-curitiba-16-9.jpg`
  - `adp-site2-hero-curitiba-2200x1000-v2.jpg`
- **Regras Aplicadas**:
  - Proporção 16:9 (1280x720) com `width="1280"` e `height="720"`.
  - Atributos `loading="lazy"` e `decoding="async"`.
  - Alt semântico obrigatório associando CIC + Curitiba + palavra-chave.
  - Sobreposição da logo padrão `adp-logo-padrao-120x120.png` via classe CSS `.logo-overlay` (20px de margem no canto inferior direito).

---

## 4. Preservação de URLs, SEO e Estrutura
- **Quantidade de URLs Preservadas**: **97 URLs canônicas indexáveis** validadas e testadas no `sitemap.xml`.
- **Redirecionamentos 301**: **89 regras permanentes** aplicadas no `_redirects` e `vercel.json` para consolidação de bairros secundários.
- **Metadados e Schemas**: Preservação estrita de `Service`, `WebPage`, `BreadcrumbList` e `FAQPage` estruturados em JSON-LD, mantendo a sede em Curitiba (CIC) e evitando declarações falsas de filiais em outros municípios.

---

## 5. Testes Realizados e Validação Técnica
- **Compilação e Build (`npm run build`)**: Concluído com sucesso, gerando os 188 arquivos estáticos e atualizando `sitemap.xml`, `_redirects` e `vercel.json`.
- **Validação de Tipos (`npm run lint`)**: Executado sem nenhum erro de TypeScript.
- **Responsividade e Acessibilidade**: Testado em viewport móvel e desktop, garantindo áreas de toque confortáveis (≥ 48px), contraste adequado para leitura sênior e ausência de transbordamento horizontal.
