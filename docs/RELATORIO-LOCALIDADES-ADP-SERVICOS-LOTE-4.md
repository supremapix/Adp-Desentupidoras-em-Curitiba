# Relatório — Localidades RMC — Lote 4 (parcial)

Data: 2026-10-04. Nada foi publicado, o sitemap não foi enviado e a indexação não foi solicitada.

## Por que o lote tem 3 páginas, e não 6

Da fila verificada do lote 3, só três candidatas trazem utilidade própria além do nome: desambiguação real ou regra de acesso. Bugre (Balsa Nova), Bateias e São Silvestre (Campo Largo) são distritos verificados pelo IBGE, mas uma página para cada repetiria as de São Luiz do Purunã e Ferraria trocando só o nome. Ficam no hub até surgir informação própria (ex.: fonte municipal com particularidades de acesso).

## Páginas entregues (3, novas)

| URL | Base verificável | Utilidade própria |
|---|---|---|
| /local/cidade/sao-jose-dos-pinhais/borda-do-campo | Bairro com mapa municipal (sjp.pr.gov.br/mapas-do-municipio/borda-do-campo/) | Fecha o par de homônimos com o distrito Borda do Campo de Quatro Barras (links nos dois sentidos) |
| /local/cidade/sao-jose-dos-pinhais/area-institucional-aeroportuaria | Bairro com mapa municipal (sjp.pr.gov.br/mapas-do-municipio/aeroporto/) | Desfaz a confusão com Afonso Pena; orienta sobre autorização e horários em local com controle de entrada |
| /local/cidade/colombo/campestre | Bairro rural na página "Dados Gerais" de Colombo | Nomes parecidos (Campestre em Araucária, Campestre dos Paulas em Mandirituba); orientações para imóvel rural com fossa, sem abrir a tampa |

Também atualizado: links cruzados em Quatro Barras/Borda do Campo e em São José dos Pinhais/Afonso Pena.

## Sitemap

Antes: **120** URLs únicas. Depois: **123** URLs únicas.

```diff
+  <url>
+    <loc>https://adpservicos.app.br/local/cidade/sao-jose-dos-pinhais/borda-do-campo</loc>
+    <lastmod>2026-10-04</lastmod>
+    <changefreq>monthly</changefreq>
+    <priority>0.6</priority>
+  </url>
+  <url>
+    <loc>https://adpservicos.app.br/local/cidade/sao-jose-dos-pinhais/area-institucional-aeroportuaria</loc>
+    <lastmod>2026-10-04</lastmod>
+    <changefreq>monthly</changefreq>
+    <priority>0.6</priority>
+  </url>
+  <url>
+    <loc>https://adpservicos.app.br/local/cidade/colombo/campestre</loc>
+    <lastmod>2026-10-04</lastmod>
+    <changefreq>monthly</changefreq>
+    <priority>0.6</priority>
+  </url>
```

## Verificações

Resultados reais (preview Vite do AI Studio):

| Página | H1 | Canonical | JSON-LD | FAQPage = texto visível |
|---|---|---|---|---|
| sao-jose-dos-pinhais/borda-do-campo | "Desentupidora na Borda do Campo, São José dos Pinhais" | OK | WebSite+PlumbingService+BreadcrumbList+Service+FAQPage | OK |
| sao-jose-dos-pinhais/area-institucional-aeroportuaria | "Desentupidora na Área Institucional Aeroportuária, São José dos Pinhais" | OK | idem | OK |
| colombo/campestre | "Desentupidora no Campestre, Colombo" | OK | idem | OK |

- Links cruzados: Borda do Campo SJP ↔ Quatro Barras; Aeroportuária ↔ Afonso Pena (conferidos no HTML).
- Celular 360/390px: sem rolagem horizontal; H1 longo da Área Institucional Aeroportuária quebra em 4 linhas sem estourar.
- Console sem erros. Build, TypeScript e linter: **pendentes** (sem terminal).

## Fila restante

- Só no hub, por falta de utilidade própria: Bugre; Bateias e São Silvestre; os demais bairros e localidades inventariados.
- Inventários sem fonte conferível: Almirante Tamandaré, Campo Magro, Campina Grande do Sul, Fazenda Rio Grande (403), Tijucas do Sul, Itaperuçu (37 de 38 sem nome).
- Build, TypeScript, linter e 301 HTTP: pendentes (sem terminal; preview sem `server.ts`).
