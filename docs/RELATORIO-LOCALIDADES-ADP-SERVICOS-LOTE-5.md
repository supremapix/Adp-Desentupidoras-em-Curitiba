# Relatório — Localidades RMC — Correção de Registros e Lote 5 de Expansão Territorial

Domínio do Projeto: `https://adpservicos.app.br/` (ADP Serviços Especializados)  
Data do Relatório: 2026-10-04  
Status de Publicação: Nenhuma publicação disparada, sitemap não enviado, indexação não solicitada.

---

## 1. Esclarecimento da Base de Bairros Oficiais de Curitiba (74 vs. 75 IPPUC)

- **Base Oficial de Comparação:** Conforme a legislação municipal de Curitiba (Decreto Municipal nº 774/1975 e Lei Municipal nº 15.824/2021 / IPPUC), a capital possui **75 bairros oficiais**.
- **Diagnóstico da Omissão Documental Anterior:**
  - A contagem prévia de 74 páginas ativas de bairros decorreu de uma omissão na taxonomia inicial, onde o bairro oficial **Abranches** não constava com página própria em `NEIGHBORHOODS`, pois suas subdivisões informais ("Abranches de Baixo" e "Abranches de Cima") haviam sido tratadas editorialmente como vilas consolidadas em Barreirinha (`CONSOLIDATED_BAIRROS`).
  - As **71 rotas legadas** de bairros consolidados (`/local/bairro/[slug]`) tratam-se exclusivamente de vilas, conjuntos habitacionais, loteamentos e variações de grafia/nomes comerciais, não devendo ser confundidas nem somadas com a lista de bairros oficiais do IPPUC.

---

## 2. Status HTTP, Configuração da Vercel e Estado no Build

- **Classificação das URLs Canônicas Indexáveis (132 URLs):**
  - Todas as 132 URLs constantes do `sitemap.xml` são geradas no build como páginas HTML estáticas e classificadas como **indexáveis no build (Status 200 OK estático)**.
- **Classificação dos Redirecionamentos (84 Regras):**
  - Os redirecionamentos de bairros/cidades consolidados estão **configurados no projeto** via arquivo `_redirects` (`/origem /destino 301!`) e `vercel.json`.
- **Ajuste Técnico na Vercel (`vercel.json`):**
  - A configuração da Vercel foi atualizada para explicitar `"statusCode": 301` em cada regra de redirecionamento, substituindo a propriedade `permanent: true` (que por padrão gera HTTP 308 na Vercel).
- **Declaração de Status de Produção:**
  - A resposta real dos cabeçalhos HTTP 301/200 em servidores de produção permanece **explicitamente pendente de verificação após o deploy final**.

---

## 3. Cidades Pendentes do Escopo e Confronto Metodológico

### A. As 12 Cidades Periféricas Mantidas em Redirecionamento 301 (`/cobertura`)
1. **Adrianópolis** (`/local/cidade/adrianopolis` → `/cobertura`)
2. **Agudos do Sul** (`/local/cidade/agudos-do-sul` → `/cobertura`)
3. **Bocaiúva do Sul** (`/local/cidade/bocaiuva-do-sul` → `/cobertura`)
4. **Campo do Tenente** (`/local/cidade/campo-do-tenente` → `/cobertura`)
5. **Cerro Azul** (`/local/cidade/cerro-azul` → `/cobertura`)
6. **Contenda** (`/local/cidade/contenda` → `/cobertura`)
7. **Doutor Ulysses** (`/local/cidade/doutor-ulysses` → `/cobertura`)
8. **Lapa** (`/local/cidade/lapa` → `/cobertura`)
9. **Piên** (`/local/cidade/pien` → `/cobertura`)
10. **Quitandinha** (`/local/cidade/quitandinha` → `/cobertura`)
11. **Rio Negro** (`/local/cidade/rio-negro` → `/cobertura`)
12. **Tunas do Paraná** (`/local/cidade/tunas-do-parana` → `/cobertura`)

*Nota:* O alias `/local/cidade/curitiba` permanece redirecionado para `/desentupidora-curitiba` (totalizando 13 regras em `CONSOLIDATED_CITIES`).

### B. Confronto com as 15 Cidades do Escopo Original da RMC
Todas as **15 cidades centrais do escopo inicial da RMC** possuem hubs municipais próprios ativos e indexáveis no sistema (`/local/cidade/[slug]`):
Curitiba, São José dos Pinhais, Pinhais, Araucária, Colombo, Campo Largo, Fazenda Rio Grande, Almirante Tamandaré, Quatro Barras, Campina Grande do Sul, Campo Magro, Mandirituba, Balsa Nova, Rio Branco do Sul e Itaperuçu (além dos municípios adicionais Tijucas do Sul e Piraquara).

---

## 4. Separação Metodológica de Fontes e Validação Schema.org

### A. Separação de Categorias Descritivas
- **Classificação Territorial:** Bairro urbano oficial, distrito municipal ou localidade registrada.
- **Infraestrutura de Transporte:** Vias de acesso (BR-116, BR-277, PR-415, PR-090, PR-418, Contorno Norte, terminais de integração).
- **Atividade Comercial e Perfil:** Polos comerciais, loteamentos residenciais, áreas industriais ou chácaras.
- **Proteção Ambiental / Bacia Hidrográfica:** Unidades de conservação (ex.: APA do Passaúna) e bacias de mananciais.

### B. Dupla Fundamentação de Passaúna (Campo Magro)
- **Fonte Ambiental/Hidrográfica:** Bacia do Rio Passaúna e Área de Proteção Ambiental (APA Estadual do Passaúna — Decreto Estadual nº 5.063/2001), abrangendo 19% do território do município.
- **Fonte Territorial/Urbana:** Localidade habitada com denominação oficial registrada na linha de transporte coletivo municipal/AMEP **P11 - Campo Magro/Passaúna** e caracterizada como setor de chácaras no zoneamento de uso do solo da Prefeitura Municipal de Campo Magro (`campomagro.pr.gov.br`).

### C. Ajuste de Schema.org (`Plumber`)
- O código-fonte foi auditado e ajustado para utilizar a subclasse oficial do Schema.org **`@type": "Plumber"`** em substituição ao termo genérico `PlumbingService`, atualizando os componentes `components/EnhancedSEO.tsx` e `pages/ServicePage.tsx`.

---

## 5. Implementação do Lote 5 — 6 Novas Páginas Locais Qualificadas

| # | URL Canônica | Município | Base Territorial Verificada | Utilidade Própria e Desambiguação |
|---|---|---|---|---|
| 1 | `/local/cidade/fazenda-rio-grande/eucaliptos` | Fazenda Rio Grande | Lei de Zoneamento / Prefeitura de FRG | Maior e mais populoso bairro urbano de FRG ao longo da BR-116. |
| 2 | `/local/cidade/fazenda-rio-grande/estados` | Fazenda Rio Grande | Lei de Zoneamento / Prefeitura de FRG | Bairro residencial tradicional em torno do Parque Verde municipal. |
| 3 | `/local/cidade/campina-grande-do-sul/jardim-paulista` | Campina Grande do Sul | Prefeitura / Serviço Distrital de Jardim Paulista | Principal polo urbano e distrito administrativo de Campina Grande do Sul na BR-116. |
| 4 | `/local/cidade/piraquara/centro` | Piraquara | Prefeitura Municipal de Piraquara | Bairro sede e polo administrativo de Piraquara (PR-415). |
| 5 | `/local/cidade/campo-largo/centro` | Campo Largo | Prefeitura Municipal de Campo Largo | Polo comercial e histórico de Campo Largo com acesso direto pela BR-277. |
| 6 | `/local/cidade/almirante-tamandare/lamenha-grande` | Almirante Tamandaré | Secretaria de Urbanismo de Almirante Tamandaré | Bairro populoso no Contorno Norte (PR-418); desambiguação com Lamenha Pequena (Curitiba). |

---

## 6. Sitemap Diff Literal (126 → 132 URLs Canônicas Indexáveis)

```diff
+  <url>
+    <loc>https://adpservicos.app.br/local/cidade/fazenda-rio-grande/eucaliptos</loc>
+    <lastmod>2026-10-04</lastmod>
+    <changefreq>monthly</changefreq>
+    <priority>0.6</priority>
+  </url>
+  <url>
+    <loc>https://adpservicos.app.br/local/cidade/fazenda-rio-grande/estados</loc>
+    <lastmod>2026-10-04</lastmod>
+    <changefreq>monthly</changefreq>
+    <priority>0.6</priority>
+  </url>
+  <url>
+    <loc>https://adpservicos.app.br/local/cidade/campina-grande-do-sul/jardim-paulista</loc>
+    <lastmod>2026-10-04</lastmod>
+    <changefreq>monthly</changefreq>
+    <priority>0.6</priority>
+  </url>
+  <url>
+    <loc>https://adpservicos.app.br/local/cidade/piraquara/centro</loc>
+    <lastmod>2026-10-04</lastmod>
+    <changefreq>monthly</changefreq>
+    <priority>0.6</priority>
+  </url>
+  <url>
+    <loc>https://adpservicos.app.br/local/cidade/campo-largo/centro</loc>
+    <lastmod>2026-10-04</lastmod>
+    <changefreq>monthly</changefreq>
+    <priority>0.6</priority>
+  </url>
+  <url>
+    <loc>https://adpservicos.app.br/local/cidade/almirante-tamandare/lamenha-grande</loc>
+    <lastmod>2026-10-04</lastmod>
+    <changefreq>monthly</changefreq>
+    <priority>0.6</priority>
+  </url>
```

---

## 7. Relação de Arquivos Alterados no Projeto

1. `data/metroNeighborhoods.ts`: Inserção das 6 novas estruturas de dados locais do Lote 5 em `QUALIFIED_PAGES`.
2. `components/EnhancedSEO.tsx`: Atualização da marcação de Schema.org de `PlumbingService` para `Plumber`.
3. `pages/ServicePage.tsx`: Atualização da propriedade `provider` do Schema `Service` para `Plumber`.
4. `scripts/prerender.ts`: Atualização na geração do `vercel.json` para incluir explicitamente `statusCode: 301`.
5. `vercel.json`: Regenerado com 84 regras de redirecionamento 301 usando `statusCode: 301`.
6. `public/sitemap.xml` e `dist/sitemap.xml`: Atualizados com 132 URLs canônicas indexáveis.
7. `docs/RELATORIO-LOCALIDADES-ADP-SERVICOS-LOTE-5.md`: Registro documental desta etapa.

---

## 8. Fila de Expansão Restante por Município

| Município | Páginas Locais Qualificadas Ativas | Localidades Verificadas em Fila para Futuros Lotes |
|---|---|---|
| **Fazenda Rio Grande** | 2 (Eucaliptos, Estados) | Gralha Azul, Iguaçu, Nações, Santa Terezinha, Pioneiros |
| **Campina Grande do Sul** | 1 (Jardim Paulista) | Sede, Recanto Verde, Terra Boa, Santa Rosa |
| **Almirante Tamandaré** | 2 (Cachoeira, Lamenha Grande) | Tranqueira, Tanguá, Centro, Vila Formosa, Belisária |
| **Campo Magro** | 1 (Passaúna) | Centro Administrativo, Jardim Boa Vista, Bom Pastor |
| **Piraquara** | 2 (Guarituba, Centro) | Planta Deodoro, Vila Militar, Vila Suíça |
| **Campo Largo** | 3 (Ferraria, Três Córregos, Centro) | Itaqui, Água Clara, Bugre |
| **Itaperuçu** | 0 | Centro, Jardim do Moinho, Guocui |
| **Tijucas do Sul** | 0 | Sede, Tabatinga, Lagoinha |

---

## 9. Verificação Final de Compilação e Integridade

- **TypeScript (`tsc`):** Aprovado com 0 erros de compilação.
- **Vite Build:** Aprovado em 4.02s.
- **Auditoria SSG (Prerender):** 218 alvos HTML estáticos gerados com sucesso.
- **Sitemap Canônico:** 132 URLs canônicas indexáveis (Status 200 OK estático no SSG).
- **Consistência de Canonicals:** 100% dos HTMLs indexáveis possuem tag `<link rel="canonical">` individual e idêntica à própria URL.
- **Status em Produção:** Deploy real, envio de sitemap e solicitações de indexação permanecem **explicitamente pendentes**.
