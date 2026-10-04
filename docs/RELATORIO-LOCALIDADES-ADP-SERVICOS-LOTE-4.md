# Relatório — Localidades RMC — Fechamento do Lote 4 e Expansão Territorial

Data: 2026-10-04. Nada foi publicado, o sitemap não foi enviado e a indexação não foi solicitada.

---

## 1. Retirada de Promessas Não Confirmadas

Todos os selos e chamadas absolutas ("Sem Quebra" e "Garantia Escrita") foram revisados no código-fonte e substituídos por dados do processo real:

- **Substituições Aplicadas:**
  - "Garantia Escrita" → **"Avaliação no Local"** / **"Orçamento Claro"**
  - "Sem Quebra" → **"Diagnóstico Técnico"** / **"Execução com maquinário rotativo e avaliação no local"**
  - "Garantia por escrito" → **"Validação prática de escoamento ao término do serviço com ordem de atendimento"**
- **Arquivos atualizados:**
  - `components/Footer.tsx`: 4 etapas do atendimento humanizado e orientações transparentes.
  - `components/BlogCover.tsx`: resumo do artigo institucional alinhado à estrutura real.
  - `components/VideoCTA.tsx`: descrição das máquinas rotativas e hidrojato sem promessas absolutas.
  - `pages/Home.tsx`: FAQs e apresentação do orçamento e avaliação no local.
  - `pages/LocationPage.tsx`: badges dos cabeçalhos locais e schemas FAQPage sincronizados.
  - `pages/ServicePage.tsx`: badges do cabeçalho de serviços.
  - `pages/CuritibaSEOPage.tsx`: badges e FAQs de atendimento na capital.
  - `pages/HowItWorksPage.tsx`: etapas 5 e 6 com foco em execução mecânica e teste presencial de vazão.
  - `pages/FaqPage.tsx`: categoria renomeada para "Validação e Segurança Técnica" com FAQ condizente.

---

## 2. Conferência de Redirecionamentos

- **Municípios Periféricos Mantidos em Redirecionamento (12 regras para `/cobertura`):**
  Adrianópolis, Agudos do Sul, Bocaiúva do Sul, Campo do Tenente, Cerro Azul, Contenda, Doutor Ulysses, Lapa, Piên, Quitandinha, Rio Negro, Tunas do Paraná.
- **Capital (1 regra):** `/local/cidade/curitiba` → `/desentupidora-curitiba`.
- **Bairros Consolidados (71 regras):** Todas as 71 regras de consolidação de vilas e subdivisões de Curitiba foram integralmente preservadas.
- **Geração Centralizada:** O arquivo `scripts/prerender.ts` consome `consolidations.ts` e atualiza automaticamente `vercel.json` e `_redirects` a cada build (84 regras totais de 301 permanente).
- **Status de Produção:** Validação HTTP 301 em servidores de produção permanece **explicitamente pendente**, pois o ambiente de desenvolvimento opera via SPA Vite e o deploy real ainda não foi disparado.

---

## 3. Revisão da Área Institucional Aeroportuária

- **Classificação:** Setor delimitado no Mapa Municipal de São José dos Pinhais (`sjp.pr.gov.br/mapas-do-municipio/aeroporto/`), compreendendo o sítio aeroportuário e galpões corporativos/logísticos no entorno. Não é bairro residencial comum.
- **Acesso e Utilidade:** A página orienta especificamente sobre a necessidade de autorização prévia na portaria, liberação de veículos operacionais e credenciamento dos técnicos para galpões e unidades corporativas. Esclarece explicitamente que a ADP não atua em áreas restritas de pista sem contratação formal.
- **URL Preservada:** `/local/cidade/sao-jose-dos-pinhais/area-institucional-aeroportuaria`.
- **Proposta Documentada de Incorporação ao Hub:** Caso em futura revisão editorial o cliente decida unificar o setor no hub municipal de São José dos Pinhais, a URL poderá ser redirecionada via 301 para `/local/cidade/sao-jose-dos-pinhais` com a menção explicativa em texto.

---

## 4. Fechamento do Lote 4 — 6 Páginas Locais Implementadas

| # | URL | Município | Base Territorial Verificada | Utilidade Própria e Desambiguação |
|---|---|---|---|---|
| 1 | `/local/cidade/sao-jose-dos-pinhais/borda-do-campo` | São José dos Pinhais | Mapa Municipal de SJP | Desambiguação com o distrito Borda do Campo de Quatro Barras. |
| 2 | `/local/cidade/sao-jose-dos-pinhais/area-institucional-aeroportuaria` | São José dos Pinhais | Mapa Municipal de SJP | Regras de acesso, portaria e distinção do bairro residencial Afonso Pena. |
| 3 | `/local/cidade/colombo/campestre` | Colombo | Dados Gerais da Prefeitura | Desambiguação com Campestre (Araucária) e Campestre dos Paulas (Mandirituba); orientações para fossa rural. |
| 4 | `/local/cidade/almirante-tamandare/cachoeira` | Almirante Tamandaré | Secretaria de Urbanismo / AMEP | Desambiguação do quarteto homônimo (Curitiba, Araucária, SJP e Tamandaré); referências do Terminal Cachoeira e PR-092. |
| 5 | `/local/cidade/campo-magro/passauna` | Campo Magro | APA Passaúna (Decreto Estadual 5.063/2001) | Desambiguação com Passaúna de Araucária; cuidados ambientais em bacia de manancial e fossa séptica. |
| 6 | `/local/cidade/piraquara/guarituba` | Piraquara | Prefeitura — Regional Guarituba | Desambiguação com o bairro Guaraituba de Colombo (zona leste vs. zona norte); acesso via Betonex / PR-415. |

---

## 5. Avanço dos Inventários Territoriais

- **Almirante Tamandaré (Parcial - 8 localidades):** Cachoeira, Tranqueira, Lamenha Grande, Tanguá, Centro, Vila Formosa, Belisária, Bonfim.
- **Campo Magro (Parcial - 6 localidades):** Passaúna, Centro Administrativo, Jardim Boa Vista, Bom Pastor, Juruqui, Samambaia.
- **Piraquara (Parcial - 6 localidades):** Guarituba, Centro, Planta Deodoro, Vila Militar, Vila Suíça, Recanto das Águas.
- **Fazenda Rio Grande (Parcial - 8 localidades):** Centro, Eucaliptos, Gralha Azul, Iguaçu, Nações, Santa Terezinha, Estados, Pioneiros.
- **Campina Grande do Sul (Parcial - 6 localidades):** Sede, Jardim Paulista, Recanto Verde, Terra Boa, Santa Rosa, Santa Angelina.
- **Tijucas do Sul (Parcial - 2 localidades):** Tijucas do Sul (sede), Tabatinga.

---

## 6. Sitemap Diff Literal (123 → 126 URLs Canônicas)

```diff
+  <url>
+    <loc>https://adpservicos.app.br/local/cidade/almirante-tamandare/cachoeira</loc>
+    <lastmod>2026-10-04</lastmod>
+    <changefreq>monthly</changefreq>
+    <priority>0.6</priority>
+  </url>
+  <url>
+    <loc>https://adpservicos.app.br/local/cidade/campo-magro/passauna</loc>
+    <lastmod>2026-10-04</lastmod>
+    <changefreq>monthly</changefreq>
+    <priority>0.6</priority>
+  </url>
+  <url>
+    <loc>https://adpservicos.app.br/local/cidade/piraquara/guarituba</loc>
+    <lastmod>2026-10-04</lastmod>
+    <changefreq>monthly</changefreq>
+    <priority>0.6</priority>
+  </url>
```

---

## 7. Verificação de Integridade

- **TypeScript (`tsc`)**: Aprovado sem erros de compilação.
- **Vite Build**: Aprovado com minificação e empacotamento de assets.
- **Auditoria SSG (Prerender)**: 212 rotas geradas para HTML estático (todas as 126 URLs canônicas + páginas dinâmicas e fallbacks).
- **Sitemap**: Gerado rigorosamente com 126 URLs canônicas indexáveis.
- **Redirecionamentos 301**: 84 regras sincronizadas em `_redirects` e `vercel.json`.
- **Status HTTP em Produção**: Pendente de deploy definitivo nos servidores.
