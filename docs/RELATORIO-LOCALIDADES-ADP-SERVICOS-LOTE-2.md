# Relatório — Localidades RMC — Lote 2

Data: 2026-10-04 · Prioridade seguida: Colombo (município sem páginas de bairro e com inventário completo), depois homônimos que fecham a desambiguação do lote 1.

## Páginas entregues (6, todas novas)

| # | Município | Localidade | URL | Diferencial verificável usado |
|---|---|---|---|---|
| 1 | Colombo | Atuba | /local/cidade/colombo/atuba | Completa o trio de homônimos (Curitiba, Pinhais, Colombo) |
| 2 | Colombo | Palmital | /local/cidade/colombo/palmital | Bairro urbano em Colombo; nome também usado por localidade de Araucária |
| 3 | Colombo | Rio Verde | /local/cidade/colombo/rio-verde | Bairro urbano em Colombo; nome também usado por localidade de Araucária |
| 4 | São José dos Pinhais | Costeira | /local/cidade/sao-jose-dos-pinhais/costeira | Par de homônimos com a Costeira de Araucária (lote 1) |
| 5 | Araucária | Boqueirão | /local/cidade/araucaria/boqueirao | Homônimo do Boqueirão de Curitiba |
| 6 | Pinhais | Centro | /local/cidade/pinhais/centro | "Centro" existe em todos os municípios; pessoas residentes no Censo 2010 (GeoPinhais) |

Também nesta etapa: links cruzados atualizados nas páginas do lote 1 (Atuba/Pinhais → Atuba/Colombo; Costeira/Araucária → Costeira/SJP).

## Sitemap

- Antes do lote 2: 103 URLs únicas · Depois: **109 URLs únicas** (sem duplicatas).
- Diff literal (adição antes de `</urlset>`):

```diff
+  <url>
+    <loc>https://adpservicos.app.br/local/cidade/colombo/atuba</loc>
+    <lastmod>2026-10-04</lastmod>
+    <changefreq>monthly</changefreq>
+    <priority>0.6</priority>
+  </url>
+  <url>
+    <loc>https://adpservicos.app.br/local/cidade/colombo/palmital</loc>
+    <lastmod>2026-10-04</lastmod>
+    <changefreq>monthly</changefreq>
+    <priority>0.6</priority>
+  </url>
+  <url>
+    <loc>https://adpservicos.app.br/local/cidade/colombo/rio-verde</loc>
+    <lastmod>2026-10-04</lastmod>
+    <changefreq>monthly</changefreq>
+    <priority>0.6</priority>
+  </url>
+  <url>
+    <loc>https://adpservicos.app.br/local/cidade/sao-jose-dos-pinhais/costeira</loc>
+    <lastmod>2026-10-04</lastmod>
+    <changefreq>monthly</changefreq>
+    <priority>0.6</priority>
+  </url>
+  <url>
+    <loc>https://adpservicos.app.br/local/cidade/araucaria/boqueirao</loc>
+    <lastmod>2026-10-04</lastmod>
+    <changefreq>monthly</changefreq>
+    <priority>0.6</priority>
+  </url>
+  <url>
+    <loc>https://adpservicos.app.br/local/cidade/pinhais/centro</loc>
+    <lastmod>2026-10-04</lastmod>
+    <changefreq>monthly</changefreq>
+    <priority>0.6</priority>
+  </url>
```

## Verificações (resultados reais)

| Página | Title | Canonical | JSON-LD | FAQPage = texto visível |
|---|---|---|---|---|
| colombo/atuba | OK | OK | WebSite+PlumbingService+BreadcrumbList+Service+FAQPage | OK |
| colombo/palmital | OK | OK | idem | OK |
| colombo/rio-verde | OK | OK | idem | OK |
| sao-jose-dos-pinhais/costeira | OK | OK | idem | OK |
| araucaria/boqueirao | OK | OK | idem | OK |
| pinhais/centro | OK | OK | idem | OK |
| colombo/centro (sem página) | 404 `noindex, follow` | — | — | — |

Hub de Colombo: 42 itens, com links somente para atuba, palmital e rio-verde. Build, TypeScript e linter não foram executados (mesma limitação do lote 1).

## Por que parei no lote 2 — fila restante

As 126 localidades verificadas restantes já aparecem nos hubs. Não criei mais páginas porque, para elas, não encontrei diferencial verificável além de nome, classificação e fonte. Produzir mais páginas agora seria trocar o nome geográfico, o que o escopo proíbe.

**Próxima fila (candidatas com diferencial possível, a confirmar):**

1. Pinhais — demais 11 bairros: o mapa do Censo 2010 do GeoPinhais traz pessoas residentes e domicílios por bairro (dado já verificado). Viável como lote 3, com o cuidado de não repetir textos.
2. São José dos Pinhais — Centro e Área Institucional Aeroportuária (par de desambiguação com Afonso Pena).
3. Colombo/Araucária — Campestre (homônimo entre os dois municípios; em Araucária a classificação é só "localidade").
4. Araucária — Guajuvira: só após fonte municipal sobre o status de subprefeitura (hoje a informação vem só da Wikipédia).

**Pendências que bloqueiam municípios inteiros:**

- Inventário pendente em 11 municípios (Almirante Tamandaré, Campo Largo, Campo Magro, Fazenda Rio Grande, Quatro Barras, Campina Grande do Sul, Mandirituba, Balsa Nova, Rio Branco do Sul, Itaperuçu, Tijucas do Sul). Pistas registradas no inventário (Lei 54/1994 de Fazenda Rio Grande, mapa da Câmara de Campo Largo).
- 5 desses municípios estão com 301 para `/cobertura`. Antes de criar hubs ou bairros, o proprietário precisa decidir se a cobertura declarada agora substitui a consolidação anterior.
- Rodar `npm run build`, `tsc` e linter fora do AI Studio antes de publicar.
