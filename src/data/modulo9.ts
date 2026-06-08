import type { ModuleData } from '@/types/scenario';

const endividamentoAurora = {
  columns: ["Indice", "Calculo", "Valor"],
  rows: [
    ["Endividamento geral", "Passivo total / Ativo = 50 / 80", "62,5%"],
    ["Divida onerosa / PL", "35 / 30", "1,17"],
    ["Divida liquida / EBITDA", "29 / 9", "aprox. 3,2x"],
    ["Cobertura de juros (EBIT / juros)", "7 / 1,5", "aprox. 4,7x"],
    ["Cobertura por EBITDA", "9 / 1,5", "6,0x"],
  ],
};

const comparacaoCapital = {
  columns: ["Linha", "Empresa A (sem divida)", "Empresa B (alavancada)"],
  rows: [
    ["Ativo", "100", "100"],
    ["Capital proprio (PL)", "100", "40"],
    ["Divida (custo 10%)", "0", "60"],
    ["EBIT", "15", "15"],
    ["(-) Juros", "0", "(6)"],
    ["LAIR", "15", "9"],
    ["(-) IR (30%)", "(4,5)", "(2,7)"],
    ["Lucro liquido", "10,5", "6,3"],
    ["ROE", "10,5%", "15,75%"],
    ["Cobertura de juros", "-", "2,5x"],
  ],
};

export const modulo9: ModuleData = {
  n: 9,
  eyebrow: "Modulo 9 · Aula 9 de 15",
  title: "Analise de Endividamento e Estrutura de Capital",
  subtitle: "Alavancagem, risco financeiro, cobertura de juros e ponto otimo de endividamento.",
  intro:
    "O Modulo 9 ensina o aluno a ler o lado direito do balanco como um mapa de risco. Mede a alavancagem, descobre como a divida amplifica retorno e risco ao mesmo tempo, calcula a cobertura de juros e encara o debate: quando a divida e positiva?",
  scenarios: [
    {
      id: "m9-c1",
      n: 1,
      title: "Medindo a alavancagem",
      difficulty: "intermediario",
      concept:
        "Os indices de endividamento desenham o perfil de risco financeiro da empresa.",
      context:
        "O aluno calcula e interpreta os indices de endividamento da Aurora: endividamento geral 62,5%, divida/PL 1,17 e divida liquida/EBITDA aproximadamente 3,2x, sempre pela otica do risco.",
      displayFieldsCaption: "Indices de endividamento da Aurora",
      displayTable: endividamentoAurora,
      steps: [
        {
          id: "m9-c1-e1",
          label: "Etapa 1 — O endividamento geral",
          question: "O endividamento geral relaciona o capital de terceiros a qual base?",
          points: 100,
          options: [
            {
              id: "c1e1-a",
              label: "Ao ativo total, mostrando que fracao dos bens e financiada por terceiros.",
              correct: true,
              feedback: "Quanto da empresa pertence aos credores antes dos socios.",
            },
            {
              id: "c1e1-b",
              label: "Ao patrimonio liquido, mostrando o retorno gerado para os socios da empresa.",
              correct: false,
              feedback: "Isso se aproxima do ROE; nao e o endividamento geral.",
            },
            {
              id: "c1e1-c",
              label: "A receita liquida, mostrando quanto a empresa vende para cada real de divida.",
              correct: false,
              feedback: "Receita nao e a base do endividamento geral.",
            },
          ],
        },
        {
          id: "m9-c1-e2",
          label: "Etapa 2 — Divida liquida / EBITDA",
          question: "A divida liquida/EBITDA da Aurora e cerca de 3,2x. O que esse multiplo indica?",
          points: 100,
          options: [
            {
              id: "c1e2-a",
              label: "Quantos anos de geracao operacional seriam necessarios para quitar a divida liquida.",
              correct: true,
              feedback: "E a medida de alavancagem mais usada por bancos e analistas.",
            },
            {
              id: "c1e2-b",
              label: "Quantas vezes o lucro liquido cobre o pagamento dos juros da divida no ano.",
              correct: false,
              feedback: "Isso e a cobertura de juros, nao o multiplo de alavancagem.",
            },
            {
              id: "c1e2-c",
              label: "Qual a fracao do ativo total que esta financiada por capital de terceiros.",
              correct: false,
              feedback: "Isso e o endividamento geral, nao a divida/EBITDA.",
            },
          ],
        },
        {
          id: "m9-c1-e3",
          label: "Etapa 3 — A otica do risco",
          question: "Por que esses indices interessam a avaliacao do risco financeiro?",
          points: 100,
          options: [
            {
              id: "c1e3-a",
              label: "Porque mais divida significa mais compromissos fixos de juros, que nao dependem do resultado.",
              correct: true,
              feedback: "Juros sao pagos mesmo em ano ruim: dai o risco financeiro.",
            },
            {
              id: "c1e3-b",
              label: "Porque mais divida significa mais flexibilidade, ja que os juros se ajustam ao lucro do ano.",
              correct: false,
              feedback: "Juros nao se ajustam ao lucro; sao compromisso fixo.",
            },
            {
              id: "c1e3-c",
              label: "Porque mais divida significa menos risco, pois terceiros assumem o prejuizo da empresa.",
              correct: false,
              feedback: "Invertido: o risco do credor e menor, o do acionista e maior.",
            },
          ],
        },
      ],
      resolution: {
        prompt: "O endividamento da Aurora",
        columns: ["Indice", "Valor e leitura"],
        rows: [
          { tag: "A", cells: ["Endividamento geral", "50 / 80 = 62,5% (terceiros financiam a maioria do ativo)"] },
          { tag: "B", cells: ["Divida onerosa / PL", "35 / 30 = 1,17 (a divida onerosa supera o capital proprio)"] },
          { tag: "C", cells: ["Divida liquida / EBITDA", "29 / 9 = aprox. 3,2x (moderado-alto)"] },
        ],
        closing:
          "Os indices desenham o perfil de risco. A Aurora usa bastante capital de terceiros: nao e alarmante, mas pede acompanhar custo, prazo e cobertura de juros.",
        chart: {
          caption: "Perfil de endividamento da Aurora",
          valueLabel: "Valor",
          data: [
            { name: "Endiv. geral %", value: 62.5 },
            { name: "Divida/PL", value: 1.17 },
            { name: "DL/EBITDA", value: 3.2 },
          ],
        },
      },
    },
    {
      id: "m9-c2",
      n: 2,
      title: "A divida que amplifica",
      difficulty: "avancado",
      concept:
        "A alavancagem multiplica o ROE quando a operacao rende mais que o custo da divida, e multiplica a perda quando nao.",
      context:
        "Duas empresas com a mesma operacao, ativo 100 e EBIT 15, tem estruturas opostas. A diretoria da B, alavancada, comemora ROE de 15,75% contra 10,5% da A. O aluno investiga o preco desse ROE.",
      displayFieldsCaption: "Comparacao de estrutura de capital",
      displayTable: comparacaoCapital,
      displayNote: "Ano ruim: se o EBIT cai para 6, A ainda lucra e B fica com lucro zero.",
      steps: [
        {
          id: "m9-c2-e1",
          label: "Etapa 1 — Por que o ROE da B e maior",
          question: "A B e mais endividada, mas tem ROE maior (15,75% vs 10,5%). Por que?",
          points: 100,
          options: [
            {
              id: "c2e1-a",
              label: "Porque a operacao rende 15% e a divida custa 10%: o ganho da diferenca vai ao acionista.",
              correct: true,
              feedback: "Pegar dinheiro a 10% e aplicar a 15% deixa 5% de spread para o socio.",
            },
            {
              id: "c2e1-b",
              label: "Porque a operacao da B e mais eficiente e gera mais lucro operacional que a da A.",
              correct: false,
              feedback: "Falso: as duas tem o mesmo EBIT de 15; a operacao e identica.",
            },
            {
              id: "c2e1-c",
              label: "Porque a divida reduz tanto os impostos que o lucro liquido da B supera o da A.",
              correct: false,
              feedback: "Falso: o lucro liquido da B e menor; o ROE sobe por causa do PL menor.",
            },
          ],
        },
        {
          id: "m9-c2-e2",
          label: "Etapa 2 — O preco do ROE alto",
          question: "Esse ROE maior vem de graca? O que a B carrega que a A nao carrega?",
          points: 100,
          options: [
            {
              id: "c2e2-a",
              label: "Risco financeiro: juros fixos de R$ 6 mi que consomem a maior parte do EBIT em anos ruins.",
              correct: true,
              feedback: "A alavancagem traz retorno e risco no mesmo pacote.",
            },
            {
              id: "c2e2-b",
              label: "Risco operacional: custos de producao fixos que independem do volume de vendas.",
              correct: false,
              feedback: "Risco operacional e outra coisa; aqui as operacoes sao identicas.",
            },
            {
              id: "c2e2-c",
              label: "Nenhum risco adicional: a alavancagem aumenta o retorno sem qualquer contrapartida.",
              correct: false,
              feedback: "Nao existe retorno extra sem risco extra.",
            },
          ],
        },
        {
          id: "m9-c2-e3",
          label: "Etapa 3 — O ano ruim",
          question: "Se o EBIT das duas cair para R$ 6 mi, o que acontece?",
          points: 100,
          options: [
            {
              id: "c2e3-a",
              label: "A B fica com lucro zero (juros de 6 consomem todo o EBIT); a A ainda lucra.",
              correct: true,
              feedback: "A alavancagem que turbinava o ROE agora destroi o resultado da B.",
            },
            {
              id: "c2e3-b",
              label: "As duas mantem o lucro, pois a queda do EBIT afeta apenas a receita.",
              correct: false,
              feedback: "Queda do EBIT afeta diretamente o resultado de ambas.",
            },
            {
              id: "c2e3-c",
              label: "A A fica com lucro zero, pois empresas sem divida sofrem mais com a queda do EBIT.",
              correct: false,
              feedback: "Invertido: sem juros fixos, a A e mais resiliente.",
            },
          ],
        },
      ],
      resolution: {
        prompt: "A alavancagem dos dois lados",
        columns: ["Cenario", "Empresa A x Empresa B"],
        strengthHeader: "Resultado",
        rows: [
          {
            tag: "A",
            cells: ["Ano bom (EBIT 15)", "A: ROE 10,5% · B: ROE 15,75%"],
            strength: "forte",
            strengthLabel: "B ganha",
          },
          {
            tag: "B",
            cells: ["Ano ruim (EBIT 6)", "A: ROE aprox. 4% · B: ROE 0%"],
            strength: "fraco",
            strengthLabel: "B perde",
          },
          {
            tag: "C",
            cells: ["A licao", "Alavancagem amplia ganho e perda; ROE alto pode esconder risco"],
            strength: "parcial",
            strengthLabel: "trade-off",
          },
        ],
        closing:
          "A divida e uma alavanca: multiplica o retorno quando a operacao supera o custo da divida e multiplica a perda quando nao.",
        chart: {
          caption: "ROE em ano bom",
          valueLabel: "%",
          data: [
            { name: "A", value: 10.5 },
            { name: "B", value: 15.75 },
          ],
        },
      },
    },
    {
      id: "m9-c3",
      n: 3,
      title: "Cobertura de juros",
      difficulty: "intermediario",
      concept:
        "A cobertura mede quantas vezes o resultado cobre os juros: o teste de consigo pagar a divida.",
      context:
        "O aluno calcula e interpreta a cobertura de juros da Aurora: EBIT 7 dividido por juros 1,5, aproximadamente 4,7x; por EBITDA, 6,0x.",
      displayFieldsCaption: "Cobertura de juros da Aurora",
      displayTable: endividamentoAurora,
      steps: [
        {
          id: "m9-c3-e1",
          label: "Etapa 1 — O que a cobertura mede",
          question: "O indice de cobertura de juros (EBIT / juros) mede o que?",
          points: 100,
          options: [
            {
              id: "c3e1-a",
              label: "Quantas vezes o resultado operacional cobre as despesas de juros do periodo.",
              correct: true,
              feedback: "Mostra a folga, ou aperto, para honrar o servico da divida.",
            },
            {
              id: "c3e1-b",
              label: "Quantas vezes o patrimonio liquido cobre o total da divida onerosa da empresa.",
              correct: false,
              feedback: "Isso compara estoques, PL e divida, nao o fluxo de juros.",
            },
            {
              id: "c3e1-c",
              label: "Quantos anos de lucro seriam necessarios para quitar a divida da empresa.",
              correct: false,
              feedback: "Isso e a divida/EBITDA, nao a cobertura de juros.",
            },
          ],
        },
        {
          id: "m9-c3-e2",
          label: "Etapa 2 — Interpretar a cobertura da Aurora",
          question: "A cobertura da Aurora e cerca de 4,7x. Como ler?",
          points: 100,
          options: [
            {
              id: "c3e2-a",
              label: "O resultado operacional cobre os juros quase cinco vezes: folga confortavel.",
              correct: true,
              feedback: "Ha margem para um ano ruim sem comprometer o pagamento dos juros.",
            },
            {
              id: "c3e2-b",
              label: "O resultado operacional cobre os juros menos de uma vez: risco de nao pagar.",
              correct: false,
              feedback: "Falso: 4,7x e muito acima de 1; nao ha aperto.",
            },
            {
              id: "c3e2-c",
              label: "O resultado operacional e igual aos juros: a empresa opera no limite exato.",
              correct: false,
              feedback: "Falso: o EBIT e quase cinco vezes os juros.",
            },
          ],
        },
        {
          id: "m9-c3-e3",
          label: "Etapa 3 — EBIT ou EBITDA na conta",
          question: "Por que alguns analistas usam EBITDA / juros em vez de EBIT / juros?",
          points: 100,
          options: [
            {
              id: "c3e3-a",
              label: "Porque o EBITDA aproxima o caixa operacional, e juros se pagam com caixa, nao com lucro.",
              correct: true,
              feedback: "A depreciacao nao sai do caixa; soma-la de volta aproxima a capacidade real de pagar.",
            },
            {
              id: "c3e3-b",
              label: "Porque o EBITDA e sempre menor que o EBIT, tornando a cobertura mais conservadora.",
              correct: false,
              feedback: "Falso: o EBITDA e maior que o EBIT.",
            },
            {
              id: "c3e3-c",
              label: "Porque o EBIT inclui os juros, o que tornaria a conta da cobertura circular.",
              correct: false,
              feedback: "Falso: o EBIT e justamente antes dos juros.",
            },
          ],
        },
      ],
      resolution: {
        prompt: "A cobertura da Aurora",
        columns: ["Medida", "Valor e leitura"],
        rows: [
          { tag: "A", cells: ["Cobertura por EBIT", "7 / 1,5 = aprox. 4,7x (o operacional cobre bem os juros)"] },
          { tag: "B", cells: ["Cobertura por EBITDA", "9 / 1,5 = 6,0x (a geracao de caixa cobre com folga)"] },
          { tag: "C", cells: ["Leitura de risco", "Folga confortavel; mas cai rapido se o EBIT recuar"] },
        ],
        closing:
          "A cobertura e o teste de consigo pagar os juros. Quanto maior, mais folga; abaixo de cerca de 1,5 a 2x acende o sinal amarelo.",
        chart: {
          caption: "Cobertura de juros",
          valueLabel: "x",
          data: [
            { name: "EBIT/juros", value: 4.7 },
            { name: "EBITDA/juros", value: 6 },
          ],
        },
      },
    },
    {
      id: "m9-c4",
      n: 4,
      title: "Quando a divida e positiva?",
      difficulty: "super",
      concept:
        "A divida traz beneficios e custos; existe um ponto otimo que equilibra os dois.",
      context:
        "Um debate na diretoria da Aurora: devemos nos endividar mais ou menos? O aluno organiza os argumentos dos dois lados e chega ao conceito de ponto otimo sem cair em extremos.",
      steps: [
        {
          id: "m9-c4-e1",
          label: "Etapa 1 — A favor da divida",
          question: "Qual e um argumento legitimo a favor de usar divida?",
          points: 100,
          options: [
            {
              id: "c4e1-a",
              label: "Os juros sao dedutiveis do imposto, e a divida costuma custar menos que o capital proprio.",
              correct: true,
              feedback: "O beneficio fiscal e o menor custo tornam a divida atraente, ate certo ponto.",
            },
            {
              id: "c4e1-b",
              label: "A divida nao precisa ser paga, ao contrario do capital aportado pelos socios.",
              correct: false,
              feedback: "Invertido: a divida tem prazo e juros; o capital proprio e que e perpetuo.",
            },
            {
              id: "c4e1-c",
              label: "A divida elimina o risco, pois transfere todas as perdas para os credores.",
              correct: false,
              feedback: "A divida adiciona risco ao acionista, nao o elimina.",
            },
          ],
        },
        {
          id: "m9-c4-e2",
          label: "Etapa 2 — Contra o excesso de divida",
          question: "Qual e um argumento legitimo contra o excesso de divida?",
          points: 100,
          options: [
            {
              id: "c4e2-a",
              label: "Juros fixos e altos elevam o risco de insolvencia e reduzem a flexibilidade da empresa.",
              correct: true,
              feedback: "Divida demais aproxima a empresa da dificuldade financeira em qualquer tropeco.",
            },
            {
              id: "c4e2-b",
              label: "Juros fixos e altos aumentam o lucro operacional e, com ele, o valor da empresa.",
              correct: false,
              feedback: "Juros reduzem o lucro liquido; nao aumentam o operacional.",
            },
            {
              id: "c4e2-c",
              label: "Juros fixos e altos sao irrelevantes, pois a empresa pode rolar a divida para sempre.",
              correct: false,
              feedback: "Rolar divida depende de credito disponivel, que some justamente na crise.",
            },
          ],
        },
        {
          id: "m9-c4-e3",
          label: "Etapa 3 — O ponto otimo",
          question: "O que define o ponto otimo de endividamento?",
          points: 100,
          options: [
            {
              id: "c4e3-a",
              label: "O ponto em que o beneficio de mais divida iguala o custo do risco adicional que ela traz.",
              correct: true,
              feedback: "E um equilibrio na margem: ate ali a divida cria valor; alem, destroi.",
            },
            {
              id: "c4e3-b",
              label: "O ponto em que a divida e zero, pois qualquer endividamento destroi valor.",
              correct: false,
              partial: true,
              feedback: "Reduz risco, mas ignora beneficio fiscal e menor custo da divida. E uma resposta extrema.",
            },
            {
              id: "c4e3-c",
              label: "O ponto em que a divida e maxima, pois o beneficio fiscal cresce sem limite.",
              correct: false,
              feedback: "Extremo oposto: ignora o risco crescente de insolvencia.",
            },
          ],
        },
      ],
      resolution: {
        prompt: "O debate organizado",
        columns: ["Lado", "Argumentos"],
        rows: [
          { tag: "A", cells: ["A favor", "Beneficio fiscal dos juros; divida mais barata que equity; alavanca o ROE"] },
          { tag: "B", cells: ["Contra", "Risco de insolvencia; juros fixos; perda de flexibilidade; custos de dificuldade financeira"] },
          { tag: "C", cells: ["O equilibrio", "Existe um ponto otimo: divida suficiente para o beneficio, sem ameacar a solvencia"] },
        ],
        closing:
          "A divida nao e boa nem ruim em si: e uma ferramenta. O ponto otimo depende da estabilidade do setor e da previsibilidade da geracao de caixa.",
      },
    },
  ],
};
