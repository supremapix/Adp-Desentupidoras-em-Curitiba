# Base territorial — ADP Serviços Especializados (adpservicos.app.br)

Data: 2026-10-04 · Execução: inventário e lote 1 de páginas de bairros da RMC.

## 1. Estado inicial do projeto (antes desta execução)

| Item | Situação encontrada |
|---|---|
| Rotas | `/`, `/desentupidora-curitiba`, `/local/:type/:slug` (`cidade` e `bairro`), `/servicos/:slug`, `/como-funciona`, `/cobertura`, `/duvidas`, `/mapa-do-site`, `/suprema-sites`, `*` (404) |
| Dados municipais | `constants.ts` → `CITIES` (29 municípios), `NEIGHBORHOODS` (bairros de Curitiba, lista única, sem vínculo com município) |
| Cidades indexáveis | `consolidations.ts` → `CONFIRMED_METROPOLITAN_CITIES` (11): São José dos Pinhais, Pinhais, Araucária, Colombo, Campo Largo, Fazenda Rio Grande, Almirante Tamandaré, Piraquara, Quatro Barras, Campina Grande do Sul, Campo Magro |
| Cidades consolidadas (301 → `/cobertura`) | 17 municípios, entre eles **Mandirituba, Balsa Nova, Rio Branco do Sul, Itaperuçu e Tijucas do Sul** (do escopo desta tarefa) |
| Páginas de bairros fora de Curitiba | **Nenhuma.** `/local/bairro/:slug` atende apenas bairros de Curitiba (slug global, sem município) |
| Sitemap | `public/sitemap.xml` com **97 URLs únicas**; no build, `scripts/prerender.ts` gera `dist/sitemap.xml` a partir de `getAllRoutes()` |
| Renderização | SPA React + Vite com pré-renderização SSG (`scripts/prerender.ts`, `renderToString` + Helmet) e servidor Express (`server.ts`) com mapa de 301 |
| Schemas | `EnhancedSEO.tsx` emite WebSite + Organization (`#organization`) e aceita `schemaData` adicional por página |
| Sede | Rua Luiz Maltaca, 36, CIC, Curitiba (única sede declarada; mantida) |

Cópia do sitemap anterior: `docs/sitemap-antes-lote-1.xml` (97 URLs).

## 2. Cobertura comercial — correspondência com este domínio

- O solicitante declarou cobertura regional da operação ADP nas 15 cidades do escopo.
- Este domínio já declara a mesma operação (marca ADP Desentupidora, telefone (41) 3345-1194, base no CIC) e atende 10 das 15 cidades com páginas municipais indexáveis.
- **Divergência registrada:** 5 cidades do escopo (Mandirituba, Balsa Nova, Rio Branco do Sul, Itaperuçu, Tijucas do Sul) foram consolidadas anteriormente com 301 para `/cobertura`, com a justificativa de distância da sede. A declaração atual de cobertura contradiz essa decisão. **Nesta execução não removi esses redirecionamentos** (o escopo proíbe alterar slugs/redirecionamentos em massa e reverter a consolidação é decisão comercial). Pendente de confirmação do proprietário.
- Fontes cartográficas comprovam território, não disponibilidade. Todas as páginas novas usam linguagem condicionada: "data, horário e condições são confirmados no contato", sem prazo de chegada, sem plantão por município e sem filial.

## 3. Arquitetura adotada

- Padrão existente preservado: municípios continuam em `/local/cidade/{cidade}` (hub).
- Bairros de cidades da RMC: **`/local/cidade/{cidade}/{bairro}`** — aninhado para desambiguar homônimos (há "Atuba" em Curitiba, Pinhais e Colombo; "Cachoeira" em Curitiba, Araucária e São José dos Pinhais; "Costeira" em Araucária e São José dos Pinhais).
- O padrão sugerido `/cidades/...` não foi adotado porque o projeto já possui equivalente.
- Nenhum slug existente foi alterado, nenhuma página removida, nenhum redirecionamento criado.

## 4. Resultado desta execução

- Lote 1: 6 páginas (Araucária ×2, São José dos Pinhais ×2, Pinhais ×2). Ver `RELATORIO-LOCALIDADES-ADP-SERVICOS-LOTE-1.md`.
- Lote 2: 6 páginas (Colombo ×3, São José dos Pinhais, Araucária, Pinhais). Ver `RELATORIO-LOCALIDADES-ADP-SERVICOS-LOTE-2.md`.
- Lote 3: 5 páginas municipais reativadas (Mandirituba, Balsa Nova, Rio Branco do Sul, Itaperuçu, Tijucas do Sul — redirecionamentos 301 removidos só para elas) + 6 páginas de distrito. Ver `RELATORIO-LOCALIDADES-ADP-SERVICOS-LOTE-3.md`.
- Lote 4 (parcial): 3 páginas. Ver `RELATORIO-LOCALIDADES-ADP-SERVICOS-LOTE-4.md`.
- Sitemap: 97 → 109 (lotes 1–2) → 120 (lote 3) → 123 URLs únicas (lote 4).
- Expansão **não concluída**: 6 municípios sem inventário conferível e vários parciais (ver `INVENTARIO-BAIRROS-CIDADES-ADP-SERVICOS.md`).

## 5. Arquivos criados/alterados

| Arquivo | Alteração |
|---|---|
| `data/metroNeighborhoods.ts` | **Novo.** Inventário (Pinhais, São José dos Pinhais, Araucária, Colombo) + conteúdo das páginas qualificadas |
| `pages/MetroNeighborhoodPage.tsx` | **Novo.** Página de bairro da RMC (layout atual: topo escuro, faixa, seções editoriais, lateral de contato) |
| `components/CityNeighborhoodsHub.tsx` | **Novo.** Lista de bairros no hub municipal; só cria link para páginas implementadas |
| `App.tsx` | Rota `/local/cidade/:city/:bairro` |
| `pages/LocationPage.tsx` | Insere o hub de bairros nas páginas de cidade (`isCity`) |
| `scripts/prerender.ts` | Pré-renderiza as páginas qualificadas e usa `lastmod` próprio por rota |
| `public/sitemap.xml` | +6 URLs (lastmod 2026-10-04) |
| `docs/*` | Esta base, inventário, relatório do lote 1 e cópia do sitemap anterior |
