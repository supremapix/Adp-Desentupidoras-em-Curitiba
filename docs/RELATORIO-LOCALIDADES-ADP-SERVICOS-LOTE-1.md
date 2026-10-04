# Relatório — Localidades RMC — Lote 1

Data: 2026-10-04 · Domínio: https://adpservicos.app.br · Nada publicado; sitemap não enviado; indexação não solicitada.

## Páginas entregues (6, todas novas)

| # | Município | Localidade | URL | Diferencial verificável usado |
|---|---|---|---|---|
| 1 | Araucária | Cachoeira | /local/cidade/araucaria/cachoeira | Homônimo em São José dos Pinhais e Curitiba; bairro urbano no portal municipal |
| 2 | Araucária | Costeira | /local/cidade/araucaria/costeira | Homônimo em São José dos Pinhais; bairro urbano no portal municipal |
| 3 | São José dos Pinhais | Afonso Pena | /local/cidade/sao-jose-dos-pinhais/afonso-pena | O mapa municipal separa Afonso Pena da "Área Institucional Aeroportuária" |
| 4 | São José dos Pinhais | Cachoeira | /local/cidade/sao-jose-dos-pinhais/cachoeira | Homônimo em Araucária e Curitiba; mapa municipal próprio |
| 5 | Pinhais | Atuba | /local/cidade/pinhais/atuba | Homônimo em Curitiba e Colombo; pessoas residentes no Censo 2010 (GeoPinhais) |
| 6 | Pinhais | Weissópolis | /local/cidade/pinhais/weissopolis | Maior número de pessoas residentes entre os 15 bairros (Censo 2010, GeoPinhais) |

Páginas novas: 6 · Páginas existentes requalificadas: 0 (não havia páginas de bairro fora de Curitiba).
Hubs municipais atualizados (entregas adicionais): `/local/cidade/pinhais` (15), `/local/cidade/sao-jose-dos-pinhais` (41), `/local/cidade/araucaria` (40), `/local/cidade/colombo` (42).

## Conteúdo de cada página

- Topo com trilha (Início › Cobertura › Município › Bairro), H1 "Desentupidora no/na {bairro}, {município}", WhatsApp e telefone.
- "Sobre o atendimento": texto próprio, ficha de fatos com link para a fonte municipal e desambiguação de homônimos com links para as páginas existentes.
- Declaração de cobertura condicionada: base no CIC, sem filial; data, horário e condições confirmados no contato.
- Serviços (links para as 6 páginas de serviço), diferença entre entupimento, vazamento e baixa pressão, o que informar, fotos seguras, condomínio e acesso, etapas e aprovação do orçamento.
- FAQ específica (3 perguntas); o FAQPage reproduz exatamente o texto visível. As respostas ficam no HTML mesmo quando recolhidas.
- Lateral: contato e lista de bairros do mesmo município com página.

Fica de fora, de propósito: idade de imóveis, risco de enchente, perfil econômico, frequência de problemas, prazo de chegada, plantão 24h, "sem quebra", garantias e equipamentos específicos.

## SEO técnico

- `<title>` e meta description próprios; canonical `https://adpservicos.app.br/local/cidade/{cidade}/{bairro}`.
- JSON-LD por página: BreadcrumbList, Service (provider → `#organization`, areaServed = Place do bairro contido na City) e FAQPage. O WebSite e a Organization/PlumbingService globais vêm do `EnhancedSEO` (endereço só da sede real).
- Pré-renderização: rotas adicionadas em `scripts/prerender.ts` (`isIndexable: true`, `lastmod` da própria página).
- Localidade sem página (ex.: `/local/cidade/colombo/centro`) → componente 404 com `noindex, follow`.

## Sitemap (`public/sitemap.xml`)

- Antes: **97** URLs únicas (cópia em `docs/sitemap-antes-lote-1.xml`).
- Depois do lote 1: **103** URLs únicas.
- Diff literal (adição antes de `</urlset>`, demais linhas inalteradas):

```diff
+  <url>
+    <loc>https://adpservicos.app.br/local/cidade/pinhais/atuba</loc>
+    <lastmod>2026-10-04</lastmod>
+    <changefreq>monthly</changefreq>
+    <priority>0.6</priority>
+  </url>
+  <url>
+    <loc>https://adpservicos.app.br/local/cidade/pinhais/weissopolis</loc>
+    <lastmod>2026-10-04</lastmod>
+    <changefreq>monthly</changefreq>
+    <priority>0.6</priority>
+  </url>
+  <url>
+    <loc>https://adpservicos.app.br/local/cidade/sao-jose-dos-pinhais/afonso-pena</loc>
+    <lastmod>2026-10-04</lastmod>
+    <changefreq>monthly</changefreq>
+    <priority>0.6</priority>
+  </url>
+  <url>
+    <loc>https://adpservicos.app.br/local/cidade/sao-jose-dos-pinhais/cachoeira</loc>
+    <lastmod>2026-10-04</lastmod>
+    <changefreq>monthly</changefreq>
+    <priority>0.6</priority>
+  </url>
+  <url>
+    <loc>https://adpservicos.app.br/local/cidade/araucaria/cachoeira</loc>
+    <lastmod>2026-10-04</lastmod>
+    <changefreq>monthly</changefreq>
+    <priority>0.6</priority>
+  </url>
+  <url>
+    <loc>https://adpservicos.app.br/local/cidade/araucaria/costeira</loc>
+    <lastmod>2026-10-04</lastmod>
+    <changefreq>monthly</changefreq>
+    <priority>0.6</priority>
+  </url>
```

## Verificações realizadas (resultados reais)

Ambiente: servidor de desenvolvimento do Google AI Studio (Vite), Chrome.

| Verificação | Resultado |
|---|---|
| Rotas diretas das 6 páginas | OK — H1 correto em todas |
| Canonical | OK — igual à URL própria em todas |
| JSON-LD | OK — WebSite, PlumbingService (sede), BreadcrumbList, Service, FAQPage; JSON válido |
| FAQPage × texto visível | OK — todas as perguntas e respostas presentes no texto da página |
| Hubs municipais | OK — Pinhais 15, São José dos Pinhais 41, Araucária 40, Colombo 42 itens; links só para páginas existentes |
| Localidade sem página | OK — 404 com `noindex, follow` |
| Celular (390px) | OK — sem rolagem horizontal (`scrollWidth = clientWidth = 375`) |
| Console | Sem erros |
| Sintaxe dos arquivos novos | OK (esbuild) |

## Não executado — limitações

- **`npm run build`, `tsc --noEmit` e linter:** o editor do AI Studio não oferece terminal, e o repositório não estava disponível fora dele. Rodar antes de publicar: `npm run build` (inclui a pré-renderização) e conferir o `dist/sitemap.xml` gerado.
- **HTML pré-renderizado:** não pude conferir o HTML final do SSG pelo mesmo motivo. As páginas usam o mesmo `EnhancedSEO`/Helmet das demais rotas já pré-renderizadas.
- **Observação de teste:** em aba de fundo, o Helmet só aplica title, canonical e JSON-LD depois do primeiro quadro renderizado (usa `requestAnimationFrame`). Isso afeta o teste, não o HTML pré-renderizado.
- **`lastmod` das rotas antigas:** o gerador usa a data do build para todas as rotas sem `lastmod` próprio. As novas rotas já usam data própria. Ajustar as antigas fica como pendência.
