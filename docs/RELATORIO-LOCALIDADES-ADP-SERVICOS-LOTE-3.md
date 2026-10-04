# Relatório — Localidades RMC — Lote 3

Data: 2026-10-04. Nada foi publicado, o sitemap não foi enviado e a indexação não foi solicitada.
Preservados: as 12 páginas dos lotes 1 e 2, os 4 hubs, as correções do rodapé e as 109 URLs anteriores.

## 1. Correção do controle da fila

| Município | Inventariadas | Com página | Restantes | Conferência nominal |
|---|---|---|---|---|
| Pinhais | 15 | 3 (Atuba, Weissópolis, Centro) | **12** | Alphaville Graciosa, Alto Tarumã, Emiliano Perneta, Estância Pinhais, Jardim Amélia, Jardim Cláudia, Jardim Karla, Maria Antonieta, Parque das Águas, Parque das Nascentes, Pineville, Vargem Grande. Nenhuma outra página existente encontrada no código. |
| Colombo | 42 | 3 (Atuba, Palmital, Rio Verde) | **39** | Os 42 nomes estão listados um a um na página municipal (22 urbanos + 20 rurais), conferidos contra `data/metroNeighborhoods.ts`. A completude se apoia nos nomes listados, não só na frase "42 bairros". A página não cita norma de delimitação; se surgir lei de abairramento divergente, a lista deve ser revista. |

**Dado territorial × utilidade comercial.** A população do Censo 2010 (GeoPinhais) é um dado territorial verificado, mas não torna uma página de serviço exclusiva ou atual. Ela continua como ficha de fato nas páginas de Pinhais e não será usada sozinha para justificar páginas novas. Os outros 12 bairros de Pinhais seguem só no hub.

## 2. Reativação das 5 páginas municipais

| URL | Antes | Agora |
|---|---|---|
| /local/cidade/mandirituba | 301 → /cobertura | Página municipal indexável + hub (2 distritos/6 localidades) + 1 página de distrito |
| /local/cidade/balsa-nova | 301 → /cobertura | Página municipal indexável + hub (2 distritos além da sede, 2 bairros, 1 localidade) + 1 página de distrito |
| /local/cidade/rio-branco-do-sul | 301 → /cobertura | Página municipal indexável + hub (distrito Açungui) + 1 página de distrito |
| /local/cidade/itaperucu | 301 → /cobertura | Página municipal indexável + hub (1 bairro identificado de 38 declarados) |
| /local/cidade/tijucas-do-sul | 301 → /cobertura | Página municipal indexável, ainda sem hub (nenhuma localidade verificada dentro do município) |

As URLs foram reaproveitadas, sem slug novo.

Conteúdo das páginas municipais reativadas: perfil novo `METROPOLITAN_SCHEDULED` em `LocationPage.tsx`, com texto de **atendimento programado**:

- equipes saem da base no CIC; o município não tem filial;
- data, horário e deslocamento são confirmados no contato;
- não há promessa de emergência nem de prazo;
- FAQ própria sobre agendamento, urgência, o que informar e orçamento.

O perfil genérico anterior falava em "atendimento emergencial" e "caminhões combinados" e não foi aplicado a essas cidades.

### Onde os redirecionamentos existiam e o que mudou

| Camada | Tipo | Alteração |
|---|---|---|
| `consolidations.ts` → `CONSOLIDATED_CITIES` | Fonte única das regras | Removidas só as 5 entradas; as cidades foram adicionadas a `CONFIRMED_METROPOLITAN_CITIES` |
| `server.ts` (Express) | **301 HTTP real** (`getAllRedirectRules`) | Sem edição; deixa de redirecionar por consumir a lista acima |
| `LocationPage.tsx` → `getConsolidation` + `<Navigate>` | **Encaminhamento SPA** (no navegador, não é HTTP) | Sem edição; deixa de encaminhar pelo mesmo motivo |
| `vercel.json` → `redirects` | 301 na Vercel | 89 → 84 regras (as 5 cidades removidas); as demais preservadas |
| `_redirects` (raiz) e `dist/_redirects` | 301 Netlify/Cloudflare | **Gerados no build** por `scripts/prerender.ts` a partir de `consolidations.ts`. O editor do AI Studio não abre o `_redirects` da raiz, então ele só será atualizado no próximo `npm run build` |
| `public/_redirects` | Só fallback 404 | Sem alteração |
| `public/.htaccess` | Reescrita para `.html` e 404 | Não contém as 5 cidades; sem alteração |
| `scripts/prerender.ts` | SSG | As 5 cidades passam a ser pré-renderizadas como indexáveis (loop de `CONFIRMED_METROPOLITAN_CITIES`) e saem do loop de fallback `noindex` |
| `CoveragePage.tsx` | Texto | "Mandirituba" removida da lista de "municípios sob consulta de rota" |

Os demais 12 redirecionamentos de cidades e os 71 de bairros foram preservados. Exemplo conferido: `/local/cidade/lapa` continua encaminhando para `/cobertura`.

**Não declaro alteração em produção.** O preview do AI Studio roda `vite` direto (sem `server.ts`), então só pude conferir o encaminhamento SPA. Os 301 HTTP do Express, da Vercel e do `_redirects` só mudam depois de build e deploy.

## 3. Inventários — situação após a pesquisa

| Município | Situação | Fontes |
|---|---|---|
| Quatro Barras | Parcial: distrito Borda do Campo (IBGE); bairros Santa Luzia, Borda do Campo, Pinheirinho, Florestal, Menino Deus, Maria José e localidades Granja das Acácias, Bosque Mehry citados no Plano Diretor | LC 39/2023 (art. 66); IBGE DTB |
| Balsa Nova | Parcial: distritos Bugre e São Luiz do Purunã; bairros Jardim Serrinha, São Caetano; localidade Tamanduá | Diagnóstico do Plano Diretor (site da Prefeitura); IBGE DTB |
| Rio Branco do Sul | Parcial: distrito Açungui | IBGE DTB; PLC 02/2024 (Câmara). Citado no PLC, mas não incluído: "bairro Tacaniça dos Falcões" (projeto de lei, sem confirmação de aprovação) |
| Mandirituba | Parcial: distrito Areia Branca do(s) Assis; localidades Lagoinha, Espigão das Antas, Tronco, Campestre dos Paulas, Avencal (endereços de unidades de saúde; a fonte não classifica) | IBGE DTB; PDF municipal de unidades de saúde |
| Campo Largo | Parcial: distritos Bateias, Ferraria, São Silvestre, Três Córregos; 42 localidades da legenda "Localidades" do mapa de Macrozoneamento (2016) | IBGE DTB; mapa da Revisão do Plano Diretor (SAPL da Câmara) |
| Itaperuçu | Parcial: a Prefeitura declara 38 bairros sem listá-los; identificado só Butieirinho | Página "Sobre o Município"; IBGE DTB (só distrito sede) |
| Tijucas do Sul | Sem localidades verificadas. O "povoado de Lagoinha" aparece só como referência de limite e pode estar fora do município, por isso não foi incluído | Página "Localização"; IBGE DTB (só distrito sede) |
| Almirante Tamandaré | Sem lista. IBGE: só distrito sede. A página de Urbanismo cita só "Cachoeira" como endereço do órgão; insuficiente para inventário | IBGE DTB; tamandare.pr.gov.br/urbanismo |
| Campo Magro | Sem lista. IBGE: só distrito sede; página legislativa municipal sem relação de bairros | IBGE DTB; campomagro.pr.gov.br |
| Campina Grande do Sul | Sem lista. IBGE: só distrito sede | IBGE DTB |
| Fazenda Rio Grande | Sem lista. A Lei 54/1994 ("divisão urbana em bairros") e a página "Dados Cartográficos" retornaram **403** (fontes inacessíveis); não usei outros meios para contornar | IBGE DTB (só distrito sede) |

Hubs só foram exibidos quando há ao menos uma localidade verificada (não há hub vazio).

## 4. Páginas entregues no Lote 3 (6, todas novas)

| # | URL | Base verificável | Utilidade própria |
|---|---|---|---|
| 1 | /local/cidade/quatro-barras/borda-do-campo | Distrito (IBGE) + Plano Diretor | Desambiguação com o bairro Borda do Campo de SJP; como passar endereço em área de distrito |
| 2 | /local/cidade/balsa-nova/sao-luiz-do-puruna | Distrito (IBGE + diagnóstico municipal) | Agendamento por distância; chácara com fossa (o que informar, sem abrir a tampa) |
| 3 | /local/cidade/rio-branco-do-sul/acungui | Distrito (IBGE) + PLC municipal | Desambiguação com Floresta do Açungui (Campo Largo); agendamento |
| 4 | /local/cidade/mandirituba/areia-branca-dos-assis | Distrito (IBGE, Lei Estadual 5.532/1967) | Duas grafias oficiais ("do"/"dos Assis"); o que fazer enquanto espera |
| 5 | /local/cidade/campo-largo/ferraria | Distrito (IBGE, Decreto-lei 7.573/1938) | Diferença entre distrito e bairro; orçamento só após a avaliação |
| 6 | /local/cidade/campo-largo/tres-corregos | Distrito (IBGE) + localidade no mapa municipal | Imóvel rural: banheiro externo, fossa, caixa d'água, acesso por estrada de terra |

Cada página tem a mesma estrutura dos lotes anteriores: trilha, ficha com fontes, cobertura condicionada, serviços, diferença entre entupimento, vazamento e baixa pressão, o que informar, fotos seguras, condomínio e acesso, etapas e orçamento, FAQ específica. As orientações repetidas valem para qualquer imóvel. O que muda de página para página é a parte apoiada na classificação e nas fontes de cada localidade.

## 5. Arquivos alterados

`data/metroNeighborhoods.ts` (6 inventários parciais, campo `prep`, `extraSources`, 6 páginas) · `pages/MetroNeighborhoodPage.tsx` (preposição do H1) · `components/CityNeighborhoodsHub.tsx` (grupo "Distritos", título e aviso de lista parcial, fontes adicionais) · `pages/LocationPage.tsx` (perfil `METROPOLITAN_SCHEDULED`) · `consolidations.ts` · `vercel.json` · `pages/CoveragePage.tsx` · `public/sitemap.xml` · `docs/*`.

## 6. Sitemap

Antes do lote 3: **109** URLs únicas. Depois: **120** URLs únicas (+5 cidades reativadas, +6 páginas de distrito; sem duplicatas).

```diff
+  <url>
+    <loc>https://adpservicos.app.br/local/cidade/mandirituba</loc>
+    <lastmod>2026-10-04</lastmod>
+    <changefreq>monthly</changefreq>
+    <priority>0.9</priority>
+  </url>
+  <url>
+    <loc>https://adpservicos.app.br/local/cidade/balsa-nova</loc>
+    <lastmod>2026-10-04</lastmod>
+    <changefreq>monthly</changefreq>
+    <priority>0.9</priority>
+  </url>
+  <url>
+    <loc>https://adpservicos.app.br/local/cidade/rio-branco-do-sul</loc>
+    <lastmod>2026-10-04</lastmod>
+    <changefreq>monthly</changefreq>
+    <priority>0.9</priority>
+  </url>
+  <url>
+    <loc>https://adpservicos.app.br/local/cidade/itaperucu</loc>
+    <lastmod>2026-10-04</lastmod>
+    <changefreq>monthly</changefreq>
+    <priority>0.9</priority>
+  </url>
+  <url>
+    <loc>https://adpservicos.app.br/local/cidade/tijucas-do-sul</loc>
+    <lastmod>2026-10-04</lastmod>
+    <changefreq>monthly</changefreq>
+    <priority>0.9</priority>
+  </url>
+  <url>
+    <loc>https://adpservicos.app.br/local/cidade/quatro-barras/borda-do-campo</loc>
+    <lastmod>2026-10-04</lastmod>
+    <changefreq>monthly</changefreq>
+    <priority>0.6</priority>
+  </url>
+  <url>
+    <loc>https://adpservicos.app.br/local/cidade/balsa-nova/sao-luiz-do-puruna</loc>
+    <lastmod>2026-10-04</lastmod>
+    <changefreq>monthly</changefreq>
+    <priority>0.6</priority>
+  </url>
+  <url>
+    <loc>https://adpservicos.app.br/local/cidade/rio-branco-do-sul/acungui</loc>
+    <lastmod>2026-10-04</lastmod>
+    <changefreq>monthly</changefreq>
+    <priority>0.6</priority>
+  </url>
+  <url>
+    <loc>https://adpservicos.app.br/local/cidade/mandirituba/areia-branca-dos-assis</loc>
+    <lastmod>2026-10-04</lastmod>
+    <changefreq>monthly</changefreq>
+    <priority>0.6</priority>
+  </url>
+  <url>
+    <loc>https://adpservicos.app.br/local/cidade/campo-largo/ferraria</loc>
+    <lastmod>2026-10-04</lastmod>
+    <changefreq>monthly</changefreq>
+    <priority>0.6</priority>
+  </url>
+  <url>
+    <loc>https://adpservicos.app.br/local/cidade/campo-largo/tres-corregos</loc>
+    <lastmod>2026-10-04</lastmod>
+    <changefreq>monthly</changefreq>
+    <priority>0.6</priority>
+  </url>
```

## 7. Verificações (resultados reais, preview Vite do AI Studio)

| Verificação | Resultado |
|---|---|
| 5 cidades reativadas | Renderizam sem encaminhamento; H1 e título corretos; canonical próprio; `index, follow`; perfil "Atendimento Programado" aplicado; hub com links só para páginas existentes (Tijucas do Sul sem hub) |
| Cidade ainda consolidada (`/local/cidade/lapa`) | Continua encaminhando para `/cobertura` (SPA) |
| 6 páginas do lote 3 | H1 com preposição correta; canonical OK; JSON-LD WebSite+PlumbingService+BreadcrumbList+Service+FAQPage; FAQPage = texto visível em todas |
| Hub de Campo Largo | 46 itens em 2 grupos (Distritos / Outras localidades); links para ferraria e tres-corregos |
| Celular (360 e 390px) | Sem rolagem horizontal. Observação antiga: em 360px o nome "ADP DESENTUPIDORA" do cabeçalho fica cortado |
| Console | Sem erros |
| Sintaxe dos arquivos novos/alterados | OK (esbuild) |
| **Build, TypeScript, linter** | **Pendentes**: sem terminal no AI Studio |
| **301 HTTP (Express/Vercel/_redirects)** | **Pendente**: só verificável após build e deploy |

## 8. Pendências e fila restante

1. Rodar `npm run build` (regenera `_redirects`, `vercel.json` e `dist/sitemap.xml`), `tsc --noEmit` e o linter; conferir que as 5 cidades saíram de `_redirects`.
2. **Selos globais sem confirmação:** os topos das páginas de cidade e bairro de Curitiba mostram "Garantia Escrita" e "Sem Quebra", e a lateral cita "máquinas rotativas". Isso também aparece nas cidades reativadas. Confirmar com o proprietário ou trocar.
3. Inventários sem fonte conferível: Almirante Tamandaré, Campo Magro, Campina Grande do Sul, Fazenda Rio Grande (fontes com 403), Tijucas do Sul e Itaperuçu (37 dos 38 bairros sem nome publicado).
4. Fila com base verificável e utilidade própria possível:
   - Balsa Nova/Bugre (distrito);
   - Campo Largo/Bateias e São Silvestre (distritos);
   - São José dos Pinhais/Borda do Campo (fecha o par com Quatro Barras);
   - São José dos Pinhais/Área Institucional Aeroportuária (par com Afonso Pena);
   - Campestre (Colombo × Araucária).
5. Só no hub, por falta de utilidade própria além do nome: os demais 12 bairros de Pinhais, 39 de Colombo, 38 de São José dos Pinhais, 37 de Araucária, as localidades de Campo Largo e Mandirituba, e os bairros citados no Plano Diretor de Quatro Barras.
