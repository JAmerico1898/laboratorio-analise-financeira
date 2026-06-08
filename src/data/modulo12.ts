import type { ModuleData } from "@/types/scenario";

export const modulo12: ModuleData = {
  n: 12,
  eyebrow: "Módulo 12 · Aula 12 de 15",
  title: "Análise Comparativa e Benchmarking",
  subtitle:
    "Comparar com criticidade: setor, contexto, ajustes necessários e séries no tempo.",
  intro:
    "Um número sozinho não diz nada — precisa de referência. O Módulo 12 ensina a comparar com **criticidade**: o setor como régua, por que indicadores iguais podem significar coisas opostas, e os limites da comparação.",
  scenarios: [
    {
      id: "m12-c1",
      n: 1,
      title: "O setor importa",
      difficulty: "intermediario",
      concept:
        "Um indicador não tem significado sem referência; o setor é a régua natural.",
      context:
        "A Aurora (atacado) tem giro de ativo de 0,625. Um colega olha e diz: \"que giro baixo, empresa ineficiente\". O aluno descobre por que essa conclusão é precipitada.",
      displayTable: {
        columns: ["Setor", "Giro do ativo típico", "Característica"],
        rows: [
          ["Atacado / distribuição (Aurora)", "~0,6", "Estoque grande, vendas a prazo, ciclo longo"],
          ["Supermercado / varejo", "~5,0", "Estoque gira rápido, muita venda à vista"],
          ["Indústria pesada", "~0,4", "Ativos imobilizados enormes"],
        ],
      },
      steps: [
        {
          id: "m12-c1-e1",
          label: "Etapa 1 — O indicador isolado",
          question: "O giro da Aurora é 0,625. Isso é bom ou ruim?",
          points: 100,
          options: [
            {
              id: "c1e1-a",
              label:
                "Depende: sem comparar com o setor, o número sozinho não diz se é bom ou ruim.",
              correct: true,
              feedback: "Um índice só vira informação quando ganha uma referência.",
            },
            {
              id: "c1e1-b",
              label:
                "É ruim: qualquer giro abaixo de 1,0 indica ineficiência no uso dos ativos.",
              correct: false,
              feedback: "Não existe um piso universal de giro; ele varia muito por setor.",
            },
            {
              id: "c1e1-c",
              label:
                "É bom: qualquer giro positivo indica que a empresa gera vendas com seus ativos.",
              correct: false,
              feedback:
                "Giro positivo é trivial; a questão é se está acima ou abaixo do esperado.",
            },
          ],
        },
        {
          id: "m12-c1-e2",
          label: "Etapa 2 — A referência certa",
          question: "Com quem a Aurora (atacado) deve ser comparada para julgar seu giro?",
          points: 100,
          options: [
            {
              id: "c1e2-a",
              label:
                "Com outras empresas de atacado, que têm modelo de negócio semelhante ao dela.",
              correct: true,
              feedback:
                "Comparáveis de verdade compartilham a estrutura de capital e operação.",
            },
            {
              id: "c1e2-b",
              label:
                "Com supermercados de varejo, que giram o estoque muito mais rápido que o atacado.",
              correct: false,
              feedback: "Modelos diferentes têm giros típicos diferentes; a comparação é injusta.",
            },
            {
              id: "c1e2-c",
              label:
                "Com a maior empresa do país, independentemente do setor em que ela atua.",
              correct: false,
              feedback: "Tamanho não é critério de comparabilidade; o setor é.",
            },
          ],
        },
        {
          id: "m12-c1-e3",
          label: "Etapa 3 — Por que o setor muda tudo",
          question:
            "Por que o mesmo nível de giro pode ser ótimo num setor e péssimo em outro?",
          points: 100,
          options: [
            {
              id: "c1e3-a",
              label:
                "Porque cada setor tem um modelo de capital e de operação diferente, com giro típico próprio.",
              correct: true,
              feedback:
                "Indústria pesada gira pouco; varejo gira muito — ambos podem ser saudáveis.",
            },
            {
              id: "c1e3-b",
              label:
                "Porque cada setor segue normas contábeis distintas, que mudam a fórmula do giro.",
              correct: false,
              feedback: "A fórmula do giro é a mesma; o que muda é o padrão de negócio.",
            },
            {
              id: "c1e3-c",
              label:
                "Porque o giro só faz sentido em setores de varejo, sendo irrelevante nos demais.",
              correct: false,
              feedback: "O giro é informativo em todos os setores, com referências próprias.",
            },
          ],
        },
      ],
      resolution: {
        prompt: "Giro típico por setor",
        columns: ["Setor", "Giro típico e por quê"],
        rows: [
          { tag: "A", cells: ["Atacado (Aurora)", "~0,6 — normal: estoque grande, vendas a prazo"] },
          { tag: "B", cells: ["Supermercado", "~5,0 — normal: estoque gira rápido, vendas à vista"] },
          { tag: "C", cells: ["Indústria pesada", "~0,4 — normal: ativos imobilizados enormes"] },
        ],
        closing:
          "O benchmarking dá sentido ao número. Um giro de 0,625 é fraco para um supermercado e normal para um atacadista. Comparar fora do setor é confundir laranjas com maçãs.",
        chart: {
          caption: "Giro típico por setor",
          valueLabel: "giro",
          data: [
            { name: "Atacado", value: 0.6 },
            { name: "Supermercado", value: 5.0 },
            { name: "Indústria pesada", value: 0.4 },
          ],
        },
      },
    },
    {
      id: "m12-c2",
      n: 2,
      title: "Indicadores iguais, significados diferentes",
      difficulty: "intermediario",
      concept:
        "O mesmo número pode ter significados opostos conforme o contexto.",
      context:
        "Duas empresas têm dívida líquida/EBITDA de **3,0x**. A diretoria diz que \"o risco é igual\". O aluno questiona — uma é uma **utility de energia** (caixa estável), a outra uma **produtora de commodity** (caixa volátil).",
      displayTable: {
        columns: ["Empresa", "Dívida líquida ÷ EBITDA", "EBITDA"],
        rows: [
          ["Energia (utility regulada)", "3,0x", "Estável e previsível"],
          ["Commodity (cíclica)", "3,0x", "Muito volátil"],
        ],
      },
      steps: [
        {
          id: "m12-c2-e1",
          label: "Etapa 1 — Mesmo número, contexto diferente",
          question:
            "As duas têm dívida/EBITDA de 3,0x. Por que o risco pode ser bem diferente?",
          points: 100,
          options: [
            {
              id: "c2e1-a",
              label:
                "Porque o EBITDA de uma é estável e o da outra é volátil — o mesmo 3,0x pesa diferente.",
              correct: true,
              feedback: "A dívida é igual; a capacidade de sustentá-la, não.",
            },
            {
              id: "c2e1-b",
              label:
                "Porque uma calcula o EBITDA de forma diferente da outra, mudando o índice.",
              correct: false,
              feedback: "O ponto não é o cálculo; é a estabilidade da geração de caixa.",
            },
            {
              id: "c2e1-c",
              label: "Porque 3,0x significa exatamente o mesmo risco para qualquer empresa.",
              correct: false,
              feedback:
                "É justamente o que o cenário desfaz: o contexto muda o significado.",
            },
          ],
        },
        {
          id: "m12-c2-e2",
          label: "Etapa 2 — Por que a estabilidade importa",
          question:
            "Por que a empresa de EBITDA estável (utility) suporta melhor a mesma dívida?",
          points: 100,
          options: [
            {
              id: "c2e2-a",
              label:
                "Porque a geração de caixa previsível garante o pagamento dos juros mesmo em anos difíceis.",
              correct: true,
              feedback: "Caixa estável é o melhor amigo de quem tem dívida.",
            },
            {
              id: "c2e2-b",
              label:
                "Porque a utility tem ativos maiores, que cobrem qualquer dívida em caso de falência.",
              correct: false,
              feedback:
                "A questão é pagar juros operando, não liquidar ativos na falência.",
            },
            {
              id: "c2e2-c",
              label:
                "Porque a utility paga juros menores, já que reguladores definem a taxa de dívida.",
              correct: false,
              feedback: "Reguladores não fixam a taxa da dívida da empresa.",
            },
          ],
        },
        {
          id: "m12-c2-e3",
          label: "Etapa 3 — A leitura crítica",
          question: "Qual a conclusão crítica sobre comparar indicadores iguais?",
          points: 100,
          options: [
            {
              id: "c2e3-a",
              label:
                "Indicadores iguais exigem contexto: setor, estabilidade e modelo mudam seu significado.",
              correct: true,
              feedback: "\"Igual em quê, e em que contexto?\" é a pergunta certa.",
            },
            {
              id: "c2e3-b",
              label:
                "Indicadores iguais dispensam contexto: o número final já resume todo o risco.",
              correct: false,
              feedback: "Nenhum índice resume sozinho o risco; o contexto é parte da análise.",
            },
            {
              id: "c2e3-c",
              label:
                "Indicadores iguais só podem ser comparados entre empresas do mesmo porte de receita.",
              correct: false,
              feedback:
                "Porte ajuda, mas não é o fator decisivo aqui — a estabilidade do caixa é.",
            },
          ],
        },
      ],
      resolution: {
        prompt: "O mesmo 3,0x, dois riscos",
        columns: ["Empresa", "Leitura do mesmo 3,0x"],
        strengthHeader: "Risco",
        rows: [
          {
            tag: "A",
            cells: ["Utility (EBITDA estável)", "Confortável — o caixa previsível paga os juros"],
            strength: "forte",
            strengthLabel: "baixo risco",
          },
          {
            tag: "B",
            cells: ["Commodity (EBITDA volátil)", "Arriscado — num ano ruim o EBITDA despenca"],
            strength: "fraco",
            strengthLabel: "alto risco",
          },
          {
            tag: "C",
            cells: ["A lição", "O número é o mesmo; o risco, não — o contexto decide"],
            strength: "parcial",
            strengthLabel: "nuance",
          },
        ],
        closing:
          "Indicadores iguais podem esconder realidades opostas. Comparar com criticidade é perguntar sempre **\"igual em quê, e em que contexto?\"**.",
      },
    },
    {
      id: "m12-c3",
      n: 3,
      title: "Ajustes necessários",
      difficulty: "avancado",
      concept:
        "Antes de comparar, normalizar — remover itens não recorrentes e harmonizar políticas contábeis.",
      context:
        "O aluno vai comparar a Aurora com a concorrente **Beta**. Mas a Aurora teve um ganho não recorrente, e a Beta usa métodos contábeis diferentes. Comparar agora seria injusto.",
      displayFieldsCaption: "Ajustes antes de comparar",
      displayFields: [
        {
          label: "Aurora",
          value: "lucro reportado 4 = lucro recorrente 3 + ganho não recorrente 1",
        },
        {
          label: "Beta",
          value: "usa método de estoque e de arrendamento diferentes da Aurora",
        },
      ],
      steps: [
        {
          id: "m12-c3-e1",
          label: "Etapa 1 — O item não recorrente",
          question:
            "A Aurora lucrou R$ 4 mi, mas R$ 1 mi veio de um evento único. Antes de comparar com a Beta, o que fazer?",
          points: 100,
          options: [
            {
              id: "c3e1-a",
              label:
                "Ajustar para o lucro recorrente (R$ 3 mi), removendo o efeito não repetível.",
              correct: true,
              feedback:
                "A comparação deve usar o desempenho sustentável, não um ganho de uma vez só.",
            },
            {
              id: "c3e1-b",
              label:
                "Comparar os R$ 4 mi diretamente, pois foi o lucro efetivamente realizado no ano.",
              correct: false,
              feedback: "Foi real, mas não se repete; distorce a comparação de desempenho.",
            },
            {
              id: "c3e1-c",
              label:
                "Somar o ganho também ao lucro da Beta, para igualar as duas bases de comparação.",
              correct: false,
              feedback: "Não se inventa um ganho na Beta; remove-se o da Aurora.",
            },
          ],
        },
        {
          id: "m12-c3-e2",
          label: "Etapa 2 — Políticas contábeis diferentes",
          question:
            "A Aurora e a Beta usam métodos de estoque diferentes. Como isso afeta a comparação?",
          points: 100,
          options: [
            {
              id: "c3e2-a",
              label:
                "Distorce indicadores como margem e giro; é preciso harmonizar antes de comparar.",
              correct: true,
              feedback:
                "Métodos distintos produzem CMV e estoques não comparáveis (Aula 3).",
            },
            {
              id: "c3e2-b",
              label:
                "Não afeta, pois o método de estoque só muda o balanço, nunca o resultado.",
              correct: false,
              feedback: "Muda o CMV (resultado) e o estoque (balanço) — afeta os dois.",
            },
            {
              id: "c3e2-c",
              label:
                "Favorece sempre a empresa que usa o método mais conservador de estoque.",
              correct: false,
              feedback: "Não há \"sempre\"; o efeito depende dos preços e do giro de cada uma.",
            },
          ],
        },
        {
          id: "m12-c3-e3",
          label: "Etapa 3 — O princípio do ajuste",
          question:
            "Qual o princípio geral ao comparar empresas com diferenças contábeis e itens únicos?",
          points: 100,
          options: [
            {
              id: "c3e3-a",
              label:
                "Trazer ambas a uma base comparável antes de calcular e confrontar os indicadores.",
              correct: true,
              feedback: "Normalizar é pré-requisito; sem isso, comparam-se artefatos contábeis.",
            },
            {
              id: "c3e3-b",
              label:
                "Confiar nos números publicados, pois as normas já garantem total comparabilidade.",
              correct: false,
              feedback:
                "As normas permitem escolhas (métodos), então a comparabilidade não é total.",
            },
            {
              id: "c3e3-c",
              label:
                "Escolher a empresa com os números mais simples, descartando a outra da análise.",
              correct: false,
              feedback: "Descartar não é analisar; o trabalho é justamente harmonizar.",
            },
          ],
        },
      ],
      resolution: {
        prompt: "Ajustar antes de comparar",
        columns: ["Ajuste", "O que fazer"],
        rows: [
          {
            tag: "A",
            cells: ["Itens não recorrentes", "Remover o ganho único: Aurora R$ 4 mi → recorrente R$ 3 mi"],
          },
          {
            tag: "B",
            cells: ["Políticas contábeis", "Harmonizar método de estoque/arrendamento entre Aurora e Beta"],
          },
          {
            tag: "C",
            cells: ["A regra", "Sem base comum, compara-se contabilidade, não desempenho"],
          },
        ],
        closing:
          "Comparar sem ajustar é comparar artefatos contábeis. Os ajustes transformam dois balanços em duas realidades confrontáveis.",
      },
    },
    {
      id: "m12-c4",
      n: 4,
      title: "Comparações intertemporais",
      difficulty: "super",
      concept:
        "Comparar uma empresa consigo mesma no tempo exige cuidado com inflação, mudanças estruturais e efeitos de base.",
      context:
        "A Aurora cresceu a receita de **R$ 40 mi (ano 1) para R$ 50 mi (ano 5)**. \"Crescemos 25%!\", comemora a diretoria. Mas em 4 anos a inflação acumulou ~25% — e a empresa adquiriu uma concorrente nesse intervalo.",
      displayTable: {
        columns: ["Métrica", "Ano 1", "Ano 5"],
        rows: [
          ["Receita (nominal)", "40", "50"],
          ["Crescimento nominal acumulado", "—", "+25%"],
          ["Inflação acumulada (4 anos)", "—", "~25%"],
          ["Crescimento real", "—", "~0%"],
        ],
      },
      displayNote:
        "Além disso: entre os anos 1 e 5 a Aurora adquiriu uma concorrente — parte do crescimento não vem do negócio original.",
      steps: [
        {
          id: "m12-c4-e1",
          label: "Etapa 1 — Nominal contra real",
          question:
            "A receita subiu +25% em 4 anos, com inflação acumulada de ~25%. O crescimento real foi?",
          points: 100,
          options: [
            {
              id: "c4e1-a",
              label:
                "Praticamente nulo: o aumento nominal apenas acompanhou a inflação do período.",
              correct: true,
              feedback: "Crescer em reais que valem menos não é crescer de verdade.",
            },
            {
              id: "c4e1-b",
              label: "De 25%: o crescimento nominal é o que importa para medir o desempenho real.",
              correct: false,
              feedback: "O nominal ignora a perda de poder de compra da moeda.",
            },
            {
              id: "c4e1-c",
              label:
                "De 50%: soma-se a inflação ao crescimento nominal para achar o ganho real.",
              correct: false,
              feedback: "Invertido: a inflação se desconta, não se soma, ao nominal.",
            },
          ],
        },
        {
          id: "m12-c4-e2",
          label: "Etapa 2 — Mudança estrutural",
          question:
            "Entre os anos 1 e 5, a Aurora comprou uma concorrente. Como isso afeta a comparação?",
          points: 100,
          options: [
            {
              id: "c4e2-a",
              label:
                "Quebra a comparação \"como antes\": parte do crescimento vem da aquisição, não do negócio original.",
              correct: true,
              feedback:
                "Comparar o ano 5 (com a adquirida) ao ano 1 (sem ela) mistura coisas distintas.",
            },
            {
              id: "c4e2-b",
              label:
                "Não afeta: aquisições são neutras para a análise da evolução da empresa.",
              correct: false,
              feedback: "Aquisições mudam o escopo do negócio comparado.",
            },
            {
              id: "c4e2-c",
              label:
                "Melhora a comparação: a aquisição torna os números dos dois anos mais parecidos.",
              correct: false,
              feedback: "É o oposto: ela torna os dois anos menos comparáveis.",
            },
          ],
        },
        {
          id: "m12-c4-e3",
          label: "Etapa 3 — Comparar no tempo com criticidade",
          question:
            "Qual o cuidado central ao comparar uma empresa consigo mesma ao longo dos anos?",
          points: 100,
          options: [
            {
              id: "c4e3-a",
              label:
                "Garantir que se compara o mesmo negócio, em moeda comparável e sob as mesmas normas.",
              correct: true,
              feedback:
                "Mesmo escopo, mesma moeda (real), mesma norma — as três condições.",
            },
            {
              id: "c4e3-b",
              label:
                "Usar sempre os valores nominais, pois eles refletem o que de fato entrou no caixa.",
              correct: false,
              feedback:
                "Valores nominais de anos distantes não são comparáveis sob inflação.",
            },
            {
              id: "c4e3-c",
              label:
                "Ignorar mudanças de norma contábil, pois elas não afetam séries históricas longas.",
              correct: false,
              feedback: "Mudanças de norma criam degraus artificiais nas séries.",
            },
          ],
        },
      ],
      resolution: {
        prompt: "A \"evolução\" da Aurora revisitada",
        columns: ["Camada", "O que revela"],
        rows: [
          { tag: "A", cells: ["Crescimento nominal", "+25% (R$ 40 → R$ 50 mi)"] },
          { tag: "B", cells: ["Ajuste pela inflação", "Inflação ~25% → crescimento real ~0%"] },
          { tag: "C", cells: ["Ajuste por escopo", "Parte do crescimento veio de aquisição, não do negócio original"] },
        ],
        closing:
          "Comparar no tempo é mais traiçoeiro do que parece. A pergunta certa é sempre: **\"comparo a mesma coisa, na mesma moeda, sob as mesmas regras?\"**.",
        chart: {
          caption: "Receita nominal × crescimento real",
          valueLabel: "índice",
          data: [
            { name: "Receita Ano 1", value: 40 },
            { name: "Receita Ano 5", value: 50 },
            { name: "Crescimento real", value: 0 },
          ],
        },
      },
    },
  ],
};
