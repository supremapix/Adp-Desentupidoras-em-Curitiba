# Inventário de bairros e localidades — cidades próximas a Curitiba

Data da pesquisa: 2026-10-04. Dados estruturados em `data/metroNeighborhoods.ts`.

Legenda de status editorial: **Página** = página própria implementada · **Hub** = listada no hub municipal sem página própria (ainda) · **Pendente** = inventário não concluído.

## Resumo por município (atualizado no lote 4)

| # | Município | Página municipal | Inventário | Fontes | Localidades | Com página | Só no hub |
|---|---|---|---|---|---|---|---|
| 1 | Pinhais | /local/cidade/pinhais | **Completo** | GeoPinhais (shapefile) | 15 | 3 | 12 |
| 2 | Colombo | /local/cidade/colombo | **Completo** (42 nomes listados um a um) | Prefeitura — Dados Gerais | 42 | 4 | 38 |
| 3 | São José dos Pinhais | /local/cidade/sao-jose-dos-pinhais | Parcial | Prefeitura — Mapas do Município | 41 | 5 | 36 |
| 4 | Araucária | /local/cidade/araucaria | Parcial | Prefeitura — Qual o seu bairro? | 40 | 3 | 37 |
| 5 | Campo Largo | /local/cidade/campo-largo | Parcial | IBGE DTB + mapa da Revisão do Plano Diretor | 46 (4 distritos + 42 localidades) | 2 | 44 |
| 6 | Quatro Barras | /local/cidade/quatro-barras | Parcial | Plano Diretor LC 39/2023 + IBGE DTB | 8 | 1 | 7 |
| 7 | Balsa Nova | /local/cidade/balsa-nova (reativada) | Parcial | Diagnóstico do Plano Diretor + IBGE DTB | 5 | 1 | 4 |
| 8 | Mandirituba | /local/cidade/mandirituba (reativada) | Parcial | IBGE DTB + PDF municipal de unidades de saúde | 6 | 1 | 5 |
| 9 | Rio Branco do Sul | /local/cidade/rio-branco-do-sul (reativada) | Parcial | IBGE DTB + PLC 02/2024 | 1 | 1 | 0 |
| 10 | Itaperuçu | /local/cidade/itaperucu (reativada) | Parcial (1 de 38 declarados) | Prefeitura — Sobre o Município + IBGE | 1 | 0 | 1 |
| 11 | Tijucas do Sul | /local/cidade/tijucas-do-sul (reativada) | Sem localidade verificada | Prefeitura — Localização + IBGE | 0 | 0 | 0 |
| 12 | Almirante Tamandaré | /local/cidade/almirante-tamandare | Sem lista | IBGE (só sede) | 0 | 0 | 0 |
| 13 | Campo Magro | /local/cidade/campo-magro | Sem lista | IBGE (só sede) | 0 | 0 | 0 |
| 14 | Campina Grande do Sul | /local/cidade/campina-grande-do-sul | Sem lista | IBGE (só sede) | 0 | 0 | 0 |
| 15 | Fazenda Rio Grande | /local/cidade/fazenda-rio-grande | Sem lista (fontes com 403) | IBGE (só sede) | 0 | 0 | 0 |

**Total: 205 localidades verificadas, 21 páginas de localidade.** A expansão **não está concluída**.

Critérios: "completo" = a fonte permite conferir todos os nomes; "parcial" = a fonte lista nomes, mas não o total ou a norma. Distritos vêm da Divisão Territorial Brasileira do IBGE (https://biblioteca.ibge.gov.br/visualizacao/dtb/parana/{município}.pdf). "Localidade" é usada quando a fonte não classifica o nome. Bairro, distrito e localidade nunca foram tratados como equivalentes.

**Dado territorial × utilidade comercial:** população do Censo, classificação ou fonte, sozinhas, não justificam página própria. Uma página só é criada quando há utilidade para quem vai pedir o serviço (desambiguação, regra de acesso, particularidade documentada do tipo de área).

Detalhes das pesquisas e fontes inacessíveis dos municípios 5 a 15: ver `RELATORIO-LOCALIDADES-ADP-SERVICOS-LOTE-3.md`, seção 3.

---|---|---|---|---|---|---|
| 1 | Pinhais | `/local/cidade/pinhais` | **Completo** | GeoPinhais — shapefile "Bairros" | 15 | 3 |
| 2 | São José dos Pinhais | `/local/cidade/sao-jose-dos-pinhais` | Parcial | Prefeitura — "Mapas do Município" | 41 | 3 |
| 3 | Araucária | `/local/cidade/araucaria` | Parcial | Prefeitura — "Qual o seu bairro?" | 40 (18 urbanos + 22 outras) | 3 |
| 4 | Colombo | `/local/cidade/colombo` | **Completo** | Prefeitura — "Dados Gerais" | 42 (22 urbanos + 20 rurais) | 3 |
| 5 | Almirante Tamandaré | `/local/cidade/almirante-tamandare` | Pendente | Nenhuma lista municipal localizada | — | 0 |
| 6 | Campo Largo | `/local/cidade/campo-largo` | Pendente | Pista: mapa anexo em documento da Câmara (SAPL) — não conferido | — | 0 |
| 7 | Campo Magro | `/local/cidade/campo-magro` | Pendente | Nenhuma lista municipal localizada (leis de logradouro citam bairros isolados, não servem como inventário) | — | 0 |
| 8 | Fazenda Rio Grande | `/local/cidade/fazenda-rio-grande` | Pendente | Pista: Lei Ordinária 54/1994 ("divisão urbana em bairros") — texto não acessado (403) | — | 0 |
| 9 | Quatro Barras | `/local/cidade/quatro-barras` | Pendente | Lei 1.567/2023 consultada: trata só do perímetro urbano, **não** define bairros | — | 0 |
| 10 | Campina Grande do Sul | `/local/cidade/campina-grande-do-sul` | Pendente | Nenhuma lista municipal localizada | — | 0 |
| 11 | Mandirituba | 301 → `/cobertura` | Pendente | — | — | 0 |
| 12 | Balsa Nova | 301 → `/cobertura` | Pendente | — | — | 0 |
| 13 | Rio Branco do Sul | 301 → `/cobertura` | Pendente | — | — | 0 |
| 14 | Itaperuçu | 301 → `/cobertura` | Pendente | — | — | 0 |
| 15 | Tijucas do Sul | 301 → `/cobertura` | Pendente | — | — | 0 |

---

## 1. Pinhais — completo (15)

- **Fonte:** GeoPinhais, área de downloads → "Bairros" (shapefile `BAIRROS.rar`, atualizado em 04/06/2012). https://geo.pinhais.pr.gov.br/geo/nav/page.aspx?page=download
- **Evidência consultada:** arquivo baixado e lido; campo `BAIRRO` com 15 registros. Conferido também o mapa "População IBGE 2010" (https://geo.pinhais.pr.gov.br/geo/download/Populacao_IBGE_2010.pdf), que traz "Pessoas residentes" por bairro.
- **Classificação:** bairro (todos).

| Bairro (nome na camada) | Slug | Status | URL |
|---|---|---|---|
| Alphaville Graciosa | alphaville-graciosa | Hub | — |
| Alto Tarumã (ALTO TARUMA) | alto-taruma | Hub | — |
| Atuba | atuba | **Página** (lote 1) | /local/cidade/pinhais/atuba |
| Centro | centro | **Página** (lote 2) | /local/cidade/pinhais/centro |
| Emiliano Perneta | emiliano-perneta | Hub | — |
| Estância Pinhais | estancia-pinhais | Hub | — |
| Jardim Amélia | jardim-amelia | Hub | — |
| Jardim Cláudia | jardim-claudia | Hub | — |
| Jardim Karla | jardim-karla | Hub | — |
| Maria Antonieta | maria-antonieta | Hub | — |
| Parque das Águas | parque-das-aguas | Hub | — |
| Parque das Nascentes | parque-das-nascentes | Hub | — |
| Pineville | pineville | Hub | — |
| Vargem Grande | vargem-grande | Hub | — |
| Weissópolis (WEISSOPOLIS) | weissopolis | **Página** (lote 1) | /local/cidade/pinhais/weissopolis |

Observação: a página da Wikipédia também diz "15 bairros", mas não foi usada como fonte.

## 2. São José dos Pinhais — parcial (41)

- **Fonte:** Prefeitura de São José dos Pinhais — "Mapas do Município". https://www.sjp.pr.gov.br/mapas-do-municipio/
- **Evidência consultada:** índice com 41 mapas individuais de bairros (cada um com URL própria, ex.: `/mapas-do-municipio/afonso-pena/`). A página não declara total nem norma.
- **Divergência registrada:** a Wikipédia cita 42 bairros e inclui "Murici Urbano", que não aparece no índice municipal. Não incluído.
- **Alias:** "Área Institucional Aeroportuária" (URL municipal `/aeroporto/`) — bairro distinto de Afonso Pena.

Páginas: **Afonso Pena** (lote 1) · **Cachoeira** (lote 1) · **Costeira** (lote 2). Demais 38 no hub: Academia, Águas Belas, Área Institucional Aeroportuária, Aristocrata, Arujá, Aviação, Barro Preto, Bom Jesus, Boneca do Iguaçu, Borda do Campo, Campina do Taquaral, Campo Largo da Roseira, Centro, Cidade Jardim, Colônia Rio Grande, Contenda, Cristal, Cruzeiro, Del Rey, Dom Rodrigo, Guatupê, Iná, Ipê, Itália, Jurema, Miringuava, Ouro Fino, Parque da Fonte, Pedro Moro, Quissisana, Rio Pequeno, Roseira de São Sebastião, Santo Antônio, São Cristóvão, São Domingos, São Marcos, São Pedro, Zacarias.

## 3. Araucária — parcial (40)

- **Fonte:** Prefeitura de Araucária — portal "Qual o seu bairro?". https://bairros.araucaria.pr.gov.br/
- **Evidência consultada:** 18 nomes sob o título "Bairros Urbanos" e 22 nomes em um segundo grupo sem rótulo. Como o segundo grupo não tem classificação explícita, foi registrado como **"localidade"** (não como bairro rural, nem como distrito).
- **Divergências registradas:** a Wikipédia lista dezenas de localidades rurais adicionais (ex.: Fazendinha, Lavra, Tietê) e diz que Guajuvira tem "status de subprefeitura". Nada disso foi incorporado sem fonte municipal.

Bairros urbanos (18): Barigui, **Boqueirão** (Página, lote 2), **Cachoeira** (Página, lote 1), Campina da Barra, Capela Velha, Centro, Chapada, **Costeira** (Página, lote 1), Estação, Fazenda Velha, Iguaçu, Passaúna, Porto das Laranjeiras, Sabiá, São Miguel, Thomaz Coelho, Tindiquera, Vila Nova.

Outras localidades (22, Hub): Bela Vista, Boa Vista, Botiatuva, Campestre, Campina das Pedras, Campina dos Martins, Capinzal, Capoeira Grande, Colônia Cristina, Colônia Ipiranga, Colônia Melado, Espigão Alto, Faxinal, Formigueiro, Guajuvira, Lagoa Grande, Mato Dentro, Onças, Palmital, Rio Abaixinho, Rio Verde, Roça Nova.

## 4. Colombo — completo (42)

- **Fonte:** Prefeitura de Colombo — "Dados Gerais". https://prefeitura.colombo.pr.gov.br/dados-gerais-colombo/
- **Evidência consultada:** texto "Colombo possui atualmente 42 bairros e mais de 200 loteamentos", com 22 bairros urbanos e 20 rurais listados (42 nomes conferidos).
- **Alias:** "Embú" (grafia da fonte) → slug `embu`.
- Os "mais de 200 loteamentos" **não** foram tratados como bairros.

Bairros urbanos (22): Arruda, **Atuba** (Página, lote 2), Campo Pequeno, Canguiri, Centro, Das Graças, Embu, Fátima, Guaraituba, Guarani, Maracanã, Mauá, Monza, Osasco, **Palmital** (Página, lote 2), Paloma, Rincão, **Rio Verde** (Página, lote 2), Roça Grande, Santa Terezinha, São Dimas, São Gabriel.

Bairros rurais (20, Hub): Águas Fervidas, Bacaetava, Boicininga, Butiatumirim, Campestre, Capivari, Colônia Antonio Prado, Colônia Faria, Gabirobal, Imbuial, Itajacuru, Morro Grande, Poço Negro, Ribeirão das Onças, Roseira, Santa Gema, São João, Sapopema, Serrinha, Uvaranal.

## 5. Homônimos desambiguados

| Nome | Ocorrências verificadas |
|---|---|
| Atuba | Curitiba (`/local/bairro/atuba`), Pinhais, Colombo |
| Cachoeira | Curitiba (`/local/bairro/cachoeira`), Araucária, São José dos Pinhais |
| Costeira | Araucária, São José dos Pinhais |
| Boqueirão | Curitiba (`/local/bairro/boqueirao`), Araucária |
| Palmital | Colombo (bairro urbano), Araucária (localidade) |
| Rio Verde | Colombo (bairro urbano), Araucária (localidade) |
| Campestre | Colombo (bairro rural), Araucária (localidade) |
| Centro | todos os municípios inventariados |

## 6. Decisões de hub (sem página própria nesta execução)

Todas as localidades verificadas aparecem no hub do seu município. Não criei páginas para as demais porque, hoje, a única informação verificável que as diferencia é nome, classificação e fonte. Uma página só com isso seria a troca do nome geográfico, o que o escopo proíbe. As páginas criadas se apoiam em diferenciais verificáveis: desambiguação de homônimos, dado censitário municipal e distinções do próprio mapa municipal (Afonso Pena × Área Institucional Aeroportuária).
