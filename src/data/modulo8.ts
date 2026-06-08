import type { ModuleData } from '@/types/scenario';

const liquidezAurora = {
  columns: ["Indicador", "Formula", "Valor"],
  rows: [
    ["Liquidez corrente", "AC / PC = 38 / 25", "1,52"],
    ["Liquidez seca", "(AC - Estoques) / PC = (38 - 14) / 25", "0,96"],
    ["Liquidez imediata", "Caixa / PC = 6 / 25", "0,24"],
  ],
};

const ciclosAurora = {
  columns: ["Prazo medio", "Calculo", "Dias"],
  rows: [
    ["Estocagem (PME)", "Estoques / CMV x 360 = 14 / 33 x 360", "aprox. 153"],
    ["Recebimento (PMR)", "Recebiveis / Receita x 360 = 18 / 50 x 360", "aprox. 130"],
    ["Pagamento (PMP)", "Fornecedores / CMV x 360 = 12 / 33 x 360", "aprox. 131"],
    ["Ciclo operacional", "PME + PMR = 153 + 130", "aprox. 283"],
    ["Ciclo financeiro", "Ciclo operacional - PMP = 283 - 131", "aprox. 152"],
  ],
};

const crescimentoAurora = {
  columns: ["Indicador", "Hoje (Receita 50)", "Dobrando (Receita 100)"],
  rows: [
    ["NCG (cresce com as vendas)", "17", "aprox. 34"],
    ["CCL (cresce so com lucro retido)", "13", "aprox. 15"],
    ["Saldo de tesouraria (ST)", "-4", "aprox. -19"],
  ],
};

export const modulo8: ModuleData = {
  n: 8,
  eyebrow: "Modulo 8 · Aula 8 de 15",
  title: "Analise de Liquidez e Capital de Giro",
  subtitle: "Indices de liquidez, ciclos operacional e financeiro, solvencia de curto prazo e overtrading.",
  intro:
    "O Modulo 8 aprofunda a liquidez que o Modulo 4 apenas apresentou. O aluno le os indices de forma critica, descobre os ciclos operacional e financeiro e enfrenta o paradoxo que derruba empresas lucrativas: crescer e ficar sem caixa.",
  scenarios: [
    {
      id: "m8-c1",
      n: 1,
      title: "Indicadores de liquidez",
      difficulty: "intermediario",
      concept:
        "As tres liquidezes medem cobertura do curto prazo com graus crescentes de rigor.",
      context:
        "O aluno le as tres liquidezes da Aurora, corrente 1,52, seca 0,96 e imediata 0,24, e aprende a interpreta-las de forma critica: nao como notas, mas como sinais.",
      displayFieldsCaption: "Liquidez da Aurora",
      displayTable: liquidezAurora,
      steps: [
        {
          id: "m8-c1-e1",
          label: "Etapa 1 — Corrente contra seca",
          question: "A liquidez corrente e 1,52 e a seca e 0,96. O que a seca faz de diferente?",
          points: 100,
          options: [
            {
              id: "c1e1-a",
              label: "Exclui os estoques do numerador, pois sao o ativo circulante menos liquido.",
              correct: true,
              feedback: "A seca testa a cobertura sem depender da venda de estoque.",
            },
            {
              id: "c1e1-b",
              label: "Exclui as contas a receber do numerador, pois podem nao ser recebidas.",
              correct: false,
              feedback: "A seca mantem os recebiveis; quem ela tira sao os estoques.",
            },
            {
              id: "c1e1-c",
              label: "Exclui os emprestimos do denominador, pois sao dividas onerosas de curto prazo.",
              correct: false,
              feedback: "A seca mexe no numerador, ativos, nao no passivo circulante.",
            },
          ],
        },
        {
          id: "m8-c1-e2",
          label: "Etapa 2 — Interpretar a seca abaixo de 1",
          question: "A liquidez seca da Aurora e 0,96. O que isso significa?",
          points: 100,
          options: [
            {
              id: "c1e2-a",
              label: "Sem vender estoques, o circulante nao cobre integralmente o passivo de curto prazo.",
              correct: true,
              feedback: "Falta pouco, 0,04, mas ha dependencia de girar estoque para pagar.",
            },
            {
              id: "c1e2-b",
              label: "Mesmo sem vender estoques, o circulante cobre com folga o passivo de curto prazo.",
              correct: false,
              feedback: "Invertido: 0,96 e menor que 1, nao ha folga sem o estoque.",
            },
            {
              id: "c1e2-c",
              label: "A empresa esta insolvente, pois qualquer liquidez abaixo de 1 indica falencia.",
              correct: false,
              feedback: "Exagero: seca menor que 1 e alerta, nao falencia; a corrente ainda passa de 1.",
            },
          ],
        },
        {
          id: "m8-c1-e3",
          label: "Etapa 3 — O limite dos indices estaticos",
          question: "Qual a principal limitacao de avaliar a liquidez so por esses indices?",
          points: 100,
          options: [
            {
              id: "c1e3-a",
              label: "Sao uma foto numa data; nao mostram o ritmo de entrada e saida de caixa no tempo.",
              correct: true,
              feedback: "Por isso precisamos dos ciclos: o tempo entre pagar e receber.",
            },
            {
              id: "c1e3-b",
              label: "Sao um filme do periodo; nao mostram a posicao da empresa numa data especifica.",
              correct: false,
              feedback: "Invertido: os indices sao justamente uma foto, nao um filme.",
            },
            {
              id: "c1e3-c",
              label: "Sao irrelevantes na pratica, pois a liquidez nao afeta a solvencia da empresa.",
              correct: false,
              feedback: "A liquidez e central para a solvencia de curto prazo.",
            },
          ],
        },
      ],
      resolution: {
        prompt: "As tres liquidezes da Aurora",
        columns: ["Indice", "Leitura"],
        rows: [
          { tag: "A", cells: ["Corrente 1,52", "Cobre o curto prazo contando todo o circulante (otimista)"] },
          { tag: "B", cells: ["Seca 0,96", "Sem estoques, fica logo abaixo de 1 (dependencia)"] },
          { tag: "C", cells: ["Imediata 0,24", "So o caixa cobre 24% do passivo de curto prazo (severa)"] },
        ],
        closing:
          "A liquidez tem graus. A corrente e otimista; a imediata e severa. Lidas juntas, mostram o quanto a empresa depende de girar estoque e receber para pagar.",
        chart: {
          caption: "Indices de liquidez da Aurora",
          valueLabel: "Indice",
          data: [
            { name: "Corrente", value: 1.52 },
            { name: "Seca", value: 0.96 },
            { name: "Imediata", value: 0.24 },
          ],
        },
      },
    },
    {
      id: "m8-c2",
      n: 2,
      title: "Capital de giro e ciclos",
      difficulty: "intermediario",
      concept:
        "O ciclo financeiro e o buraco de tempo entre pagar e receber: a raiz da necessidade de capital de giro.",
      context:
        "O aluno calcula e interpreta os ciclos da Aurora, PME aprox. 153, PMR aprox. 130 e PMP aprox. 131, e entende por que um ciclo longo gera uma NCG alta.",
      displayFieldsCaption: "Ciclos da Aurora",
      displayTable: ciclosAurora,
      displayNote: "CCL = 13; NCG = 17; ST = -4.",
      steps: [
        {
          id: "m8-c2-e1",
          label: "Etapa 1 — O ciclo operacional",
          question: "O ciclo operacional soma quais prazos?",
          points: 100,
          options: [
            {
              id: "c2e1-a",
              label: "O prazo de estocagem mais o prazo de recebimento das vendas.",
              correct: true,
              feedback: "E o tempo total entre comprar o estoque e receber do cliente.",
            },
            {
              id: "c2e1-b",
              label: "O prazo de estocagem menos o prazo de pagamento aos fornecedores.",
              correct: false,
              feedback: "Essa subtracao comeca o ciclo financeiro, nao o operacional.",
            },
            {
              id: "c2e1-c",
              label: "O prazo de recebimento mais o prazo de pagamento aos fornecedores.",
              correct: false,
              feedback: "O ciclo operacional nao inclui o prazo de pagamento.",
            },
          ],
        },
        {
          id: "m8-c2-e2",
          label: "Etapa 2 — O ciclo financeiro",
          question: "O ciclo financeiro (de caixa) corresponde a que?",
          points: 100,
          options: [
            {
              id: "c2e2-a",
              label: "Ao ciclo operacional menos o prazo de pagamento aos fornecedores.",
              correct: true,
              feedback: "E o tempo em que a empresa fica sem o caixa, ja descontado o prazo do fornecedor.",
            },
            {
              id: "c2e2-b",
              label: "Ao ciclo operacional mais o prazo de pagamento aos fornecedores.",
              correct: false,
              feedback: "Invertido: o prazo de pagamento alivia, subtrai, nao soma.",
            },
            {
              id: "c2e2-c",
              label: "Ao prazo de estocagem menos o prazo de recebimento das vendas.",
              correct: false,
              feedback: "Essa conta nao tem significado de ciclo de caixa.",
            },
          ],
        },
        {
          id: "m8-c2-e3",
          label: "Etapa 3 — Ciclo e necessidade de giro",
          question: "O ciclo financeiro da Aurora e longo, cerca de 150 dias. Qual a consequencia?",
          points: 100,
          options: [
            {
              id: "c2e3-a",
              label: "Fica muitos dias sem o caixa das vendas: exige alta necessidade de capital de giro.",
              correct: true,
              feedback: "Quanto mais tempo entre pagar e receber, mais dinheiro preciso adiantar.",
            },
            {
              id: "c2e3-b",
              label: "Recebe antes de pagar: sobra caixa e a necessidade de capital de giro e negativa.",
              correct: false,
              feedback: "Esse e o caso de varejo a vista; nao o da Aurora, que vende a prazo.",
            },
            {
              id: "c2e3-c",
              label: "Tem ciclo neutro: o prazo de pagamento cobre todo o ciclo operacional.",
              correct: false,
              feedback: "Nao cobre: o PMP, 131, e bem menor que o ciclo operacional, 283.",
            },
          ],
        },
      ],
      resolution: {
        prompt: "Os ciclos da Aurora",
        columns: ["Medida", "Valor e leitura"],
        rows: [
          { tag: "A", cells: ["Ciclo operacional", "PME 153 + PMR 130 = aprox. 283 dias"] },
          { tag: "B", cells: ["Ciclo financeiro", "283 - PMP 131 = aprox. 152 dias sem o caixa das vendas"] },
          { tag: "C", cells: ["Efeito na NCG", "Ciclo longo implica NCG alta (R$ 17 mi): caixa preso no giro"] },
        ],
        closing:
          "O ciclo financeiro e o buraco de tempo entre pagar e receber. Quanto mais longo, mais caixa a operacao exige.",
        chart: {
          caption: "Prazos medios e ciclo financeiro",
          valueLabel: "Dias",
          data: [
            { name: "PME", value: 153 },
            { name: "PMR", value: 130 },
            { name: "PMP", value: 131 },
            { name: "Ciclo financeiro", value: 152 },
          ],
        },
      },
    },
    {
      id: "m8-c3",
      n: 3,
      title: "Solvencia de curto prazo",
      difficulty: "avancado",
      concept:
        "Solvencia de curto prazo nao e um numero: e indice + ciclo + qualidade dos ativos.",
      context:
        "O aluno integra liquidez e ciclos para um veredito de solvencia de curto prazo, indo alem do indice isolado.",
      displayFieldsCaption: "Liquidez e ciclos da Aurora",
      displayTable: liquidezAurora,
      displayNote: "Ciclo financeiro aproximado: 152 dias.",
      steps: [
        {
          id: "m8-c3-e1",
          label: "Etapa 1 — O que sustenta a solvencia",
          question: "Alem da liquidez corrente, o que mais pesa no julgamento da solvencia de curto prazo?",
          points: 100,
          options: [
            {
              id: "c3e1-a",
              label: "A qualidade e o prazo dos ativos circulantes: recebiveis bons e estoque que gira.",
              correct: true,
              feedback: "Um recebivel ruim ou estoque encalhado nao paga conta nenhuma.",
            },
            {
              id: "c3e1-b",
              label: "O valor historico do imobilizado e o montante do capital social integralizado.",
              correct: false,
              feedback: "Sao de longo prazo; nao cobrem obrigacoes do curto prazo.",
            },
            {
              id: "c3e1-c",
              label: "O lucro liquido do periodo e a margem operacional registrada na DRE.",
              correct: false,
              feedback: "Rentabilidade nao e solvencia: empresa lucrativa pode ficar sem caixa.",
            },
          ],
        },
        {
          id: "m8-c3-e2",
          label: "Etapa 2 — Mesmo indice, realidades diferentes",
          question: "Duas empresas tem liquidez corrente 1,5. Por que uma pode ser bem mais segura?",
          points: 100,
          options: [
            {
              id: "c3e2-a",
              label: "Porque a composicao importa: recebiveis e estoque de boa qualidade valem mais que o indice.",
              correct: true,
              feedback: "O mesmo 1,5 esconde realidades opostas conforme a qualidade dos ativos.",
            },
            {
              id: "c3e2-b",
              label: "Porque o indice basta: liquidez corrente igual significa risco de curto prazo igual.",
              correct: false,
              feedback: "O indice nao ve qualidade nem prazo dos ativos.",
            },
            {
              id: "c3e2-c",
              label: "Porque a mais lucrativa e sempre a mais solvente, independentemente do circulante.",
              correct: false,
              feedback: "Lucro nao garante caixa para o curto prazo.",
            },
          ],
        },
        {
          id: "m8-c3-e3",
          label: "Etapa 3 — Indice contra ciclo",
          question: "A Aurora tem liquidez corrente 1,52, mas ciclo financeiro de cerca de 150 dias. Como conciliar?",
          points: 100,
          options: [
            {
              id: "c3e3-a",
              label: "O indice e confortavel na foto, mas o ciclo longo pressiona o caixa no dia a dia.",
              correct: true,
              feedback: "Foto e filme sao complementares: um ve o saldo, o outro ve o tempo.",
            },
            {
              id: "c3e3-b",
              label: "O indice e o ciclo se contradizem, entao um dos calculos esta necessariamente errado.",
              correct: false,
              feedback: "Nao se contradizem; medem dimensoes diferentes da mesma realidade.",
            },
            {
              id: "c3e3-c",
              label: "O ciclo torna o indice irrelevante, pois so o tempo importa para a solvencia.",
              correct: false,
              feedback: "O indice continua util; o ciclo o complementa, nao o anula.",
            },
          ],
        },
      ],
      resolution: {
        prompt: "O veredito de solvencia da Aurora",
        columns: ["Lente", "Achado"],
        strengthHeader: "Leitura",
        rows: [
          {
            tag: "A",
            cells: ["Foto (indices)", "Corrente 1,52 / seca 0,96: cobre, com dependencia de estoque"],
            strength: "parcial",
            strengthLabel: "ok",
          },
          {
            tag: "B",
            cells: ["Dinamica (ciclo)", "Ciclo financeiro aprox. 150 dias: caixa preso por muito tempo"],
            strength: "fraco",
            strengthLabel: "alerta",
          },
          {
            tag: "C",
            cells: ["Veredito", "Solvente, mas vulneravel: depende de rolar divida e girar estoque"],
            strength: "parcial",
            strengthLabel: "nuance",
          },
        ],
        closing:
          "Solvencia de curto prazo e um conjunto: indice + ciclo + qualidade dos ativos. A Aurora passa na foto, mas a dinamica acende o alerta.",
      },
    },
    {
      id: "m8-c4",
      n: 4,
      title: "Crescimento e crise de caixa",
      difficulty: "super",
      concept: "Overtrading: empresa lucrativa que cresce rapido e quebra por falta de caixa.",
      context:
        "A Aurora decide dobrar a receita, de 50 para 100, mantendo margens e ciclos. A diretoria esta euforica. O aluno descobre por que crescer pode causar uma crise de caixa.",
      displayFieldsCaption: "Cenario de crescimento",
      displayTable: crescimentoAurora,
      steps: [
        {
          id: "m8-c4-e1",
          label: "Etapa 1 — O que acontece com a NCG ao crescer",
          question: "A Aurora dobra as vendas mantendo os ciclos. O que acontece com a necessidade de capital de giro?",
          points: 100,
          options: [
            {
              id: "c4e1-a",
              label: "A NCG cresce na mesma proporcao das vendas: de cerca de R$ 17 mi para R$ 34 mi.",
              correct: true,
              feedback: "Com ciclos constantes, mais vendas significam mais recebiveis e estoque.",
            },
            {
              id: "c4e1-b",
              label: "A NCG permanece estavel, pois depende dos prazos, nao do volume de vendas.",
              correct: false,
              feedback: "Depende dos dois: dobrar o volume com os mesmos prazos dobra a NCG.",
            },
            {
              id: "c4e1-c",
              label: "A NCG diminui, pois ganhos de escala reduzem a necessidade de capital de giro.",
              correct: false,
              feedback: "Escala nao encurta ciclo automaticamente; a NCG sobe, nao cai.",
            },
          ],
        },
        {
          id: "m8-c4-e2",
          label: "Etapa 2 — Por que o lucro nao salva",
          question: "A empresa segue lucrativa enquanto cresce. Por que isso nao evita a crise de caixa?",
          points: 100,
          options: [
            {
              id: "c4e2-a",
              label: "Porque o lucro vira recebivel e estoque antes de virar caixa: o giro consome o dinheiro.",
              correct: true,
              feedback: "Crescer com ciclo longo prende o lucro no capital de giro.",
            },
            {
              id: "c4e2-b",
              label: "Porque o lucro maior gera caixa imediato suficiente para bancar todo o crescimento.",
              correct: false,
              feedback: "O lucro nao vira caixa imediato; e justamente o que falta na crise.",
            },
            {
              id: "c4e2-c",
              label: "Porque o lucro contabil e ficticio e a empresa, na verdade, tem prejuizo ao crescer.",
              correct: false,
              feedback: "O lucro e real; o problema e a conversao em caixa.",
            },
          ],
        },
        {
          id: "m8-c4-e3",
          label: "Etapa 3 — A saida",
          question: "Para crescer sem quebrar, o que a Aurora deve fazer?",
          points: 100,
          options: [
            {
              id: "c4e3-a",
              label: "Encurtar o ciclo (receber antes, estocar menos) e travar financiamento de longo prazo.",
              correct: true,
              feedback: "Atacar a causa, ciclo, e casar o crescimento com funding adequado.",
            },
            {
              id: "c4e3-b",
              label: "Acelerar ainda mais as vendas, pois mais receita resolve a falta de caixa.",
              correct: false,
              feedback: "E a armadilha classica: mais vendas a prazo aprofundam o rombo de caixa.",
            },
            {
              id: "c4e3-c",
              label: "Cortar o lucro distribuido e parar de investir, ignorando o ciclo operacional.",
              correct: false,
              feedback: "Ajuda na margem, mas sem atacar o ciclo a NCG continua a sufocar o caixa.",
            },
          ],
        },
      ],
      resolution: {
        prompt: "O dilema do crescimento",
        columns: ["Situacao", "NCG · CCL · ST"],
        strengthHeader: "Leitura",
        rows: [
          {
            tag: "A",
            cells: ["Hoje (receita 50)", "17 · 13 · -4"],
            strength: "parcial",
            strengthLabel: "apertado",
          },
          {
            tag: "B",
            cells: ["Dobrando (receita 100)", "aprox. 34 · aprox. 15 · aprox. -19"],
            strength: "fraco",
            strengthLabel: "crise",
          },
          {
            tag: "C",
            cells: ["A licao", "Ciclo longo + sem funding de LP = overtrading"],
            strength: "forte",
            strengthLabel: "gestao",
          },
        ],
        closing:
          "Empresas lucrativas quebram por falta de caixa, nao de lucro. O crescimento multiplica a NCG; se o financiamento nao acompanha, o caixa colapsa.",
        chart: {
          caption: "Saldo de tesouraria antes e depois do crescimento",
          valueLabel: "R$ mi",
          data: [
            { name: "ST hoje", value: -4 },
            { name: "ST dobrando", value: -19 },
          ],
        },
      },
    },
  ],
};
