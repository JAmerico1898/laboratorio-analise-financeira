import type { ModuleData } from '@/types/scenario';

const balancoAurora = {
  columns: ["Ativo", "R$ mi", "Passivo + Patrimonio Liquido", "R$ mi"],
  rows: [
    ["Ativo Circulante", "38", "Passivo Circulante", "25"],
    ["Caixa e equivalentes", "6", "Fornecedores", "12"],
    ["Contas a receber (clientes)", "18", "Emprestimos de curto prazo", "10"],
    ["Estoques", "14", "Salarios e impostos a pagar", "3"],
    ["Ativo Nao Circulante", "42", "Passivo Nao Circulante", "25"],
    ["Realizavel a longo prazo", "4", "Emprestimos de longo prazo", "25"],
    ["Imobilizado", "34", "Patrimonio Liquido", "30"],
    ["Intangivel", "4", "Capital social (20) + Reservas (10)", "30"],
    ["Total do Ativo", "80", "Total do Passivo + PL", "80"],
  ],
};

export const modulo4: ModuleData = {
  n: 4,
  eyebrow: "Modulo 4 · Aula 4 de 15",
  title: "Leitura e Interpretacao do Balanco Patrimonial",
  subtitle: "Capital de giro, liquidez basica, estrutura de capital e leitura integrada do balanco.",
  intro:
    "O Modulo 4 e o primeiro em que o aluno le um balanco real simplificado e extrai conclusoes financeiras. O calculo reaparece de forma leve e didatica: capital de giro, liquidez basica e estrutura de capital. Todo o modulo usa um unico balanco-base da Comercial Aurora S.A.",
  scenarios: [
    {
      id: "m4-c1",
      n: 1,
      title: "Forcas e fragilidades",
      difficulty: "intermediario",
      concept: "Ler o balanco separando pontos fortes de fragilidades, sem rotulos simplistas.",
      context:
        "O aluno faz uma analise dirigida do balanco-base da Aurora: olha cada bloco e julga o que sustenta a empresa e o que merece atencao. As distratoras exigem conferir os numeros na tabela do balanco-base.",
      displayFieldsCaption: "Balanco Patrimonial simplificado da Comercial Aurora S.A. (em R$ milhoes)",
      displayTable: balancoAurora,
      displayNote:
        "Referencias: CCL = 38 - 25 = R$ 13 mi; liquidez corrente = 1,52; liquidez seca = 0,96; capital de terceiros/ativo = 62,5%.",
      steps: [
        {
          id: "m4-c1-e1",
          label: "Etapa 1 — Identificar um ponto forte",
          question: "Olhando a estrutura, qual destes e um ponto forte da Aurora?",
          points: 100,
          options: [
            {
              id: "c1e1-a",
              label: "O capital de giro e positivo: o ativo circulante (38) supera o passivo circulante (25).",
              correct: true,
              feedback: "CCL de R$ 13 mi indica folga de recursos de longo prazo financiando o circulante.",
            },
            {
              id: "c1e1-b",
              label: "A liquidez seca e confortavel: mesmo sem estoques, o circulante cobre o passivo de curto prazo.",
              correct: false,
              feedback: "Falso pelos numeros: a seca e 0,96, menor que 1, ou seja, nao cobre sem os estoques.",
            },
            {
              id: "c1e1-c",
              label: "A divida e toda de curto prazo, o que reduz bastante o custo financeiro da empresa.",
              correct: false,
              feedback: "Falso: a maior parte da divida, 25 de 35, e de longo prazo; e curto prazo nao e forca.",
            },
          ],
        },
        {
          id: "m4-c1-e2",
          label: "Etapa 2 — Identificar uma fragilidade",
          question: "E qual destes e uma fragilidade a investigar?",
          points: 100,
          options: [
            {
              id: "c1e2-a",
              label: "A liquidez seca e 0,96: sem vender estoques, o circulante nao cobre o curto prazo.",
              correct: true,
              feedback: "A empresa depende de girar estoque para honrar obrigacoes imediatas.",
            },
            {
              id: "c1e2-b",
              label: "O patrimonio liquido (30) supera a divida onerosa (35), elevando o risco financeiro.",
              correct: false,
              feedback: "Falso nos numeros: 30 e menor que 35; e PL maior reduziria risco, nao o contrario.",
            },
            {
              id: "c1e2-c",
              label: "Os estoques (14) sao a maior conta do ativo, travando a geracao de caixa imediata.",
              correct: false,
              feedback: "Falso: imobilizado (34) e recebiveis (18) sao maiores que os estoques.",
            },
          ],
        },
        {
          id: "m4-c1-e3",
          label: "Etapa 3 — Sintese da posicao",
          question: "Qual sintese descreve melhor a posicao financeira da Aurora?",
          points: 100,
          options: [
            {
              id: "c1e3-a",
              label: "Solvente no longo prazo, mas com liquidez de curto prazo apertada: atencao ao caixa.",
              correct: true,
              feedback: "Equilibrio: ha solidez patrimonial, porem o curto prazo pede vigilancia.",
            },
            {
              id: "c1e3-b",
              label: "Financeiramente fragil em tudo, com risco elevado de insolvencia no curto prazo.",
              correct: false,
              feedback: "Exagero pessimista: o CCL e positivo e a liquidez corrente passa de 1.",
            },
            {
              id: "c1e3-c",
              label: "Sem nenhum ponto de atencao, com folga de liquidez e endividamento muito baixo.",
              correct: false,
              feedback: "Exagero otimista: a seca menor que 1 e o endividamento de 62,5% pedem cautela.",
            },
          ],
        },
      ],
      resolution: {
        prompt: "O retrato em tres linhas",
        columns: ["Dimensao", "Leitura"],
        rows: [
          { tag: "A", cells: ["Ponto forte", "Capital de giro positivo (CCL = R$ 13 mi)"] },
          { tag: "B", cells: ["Fragilidade", "Liquidez seca 0,96 (< 1): depende de vender estoque"] },
          { tag: "C", cells: ["Veredito", "Solvente, mas com folga de caixa apertada"] },
        ],
        closing:
          "Ler um balanco e equilibrar forcas e fragilidades, nao rotular a empresa de boa ou ruim por um unico numero.",
        chart: {
          caption: "Liquidez basica da Aurora",
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
      id: "m4-c2",
      n: 2,
      title: "Estrutura de ativos e financiamento",
      difficulty: "intermediario",
      concept:
        "Onde o dinheiro esta aplicado (ativo) versus de onde ele veio (passivo + PL), e o casamento de prazos.",
      context:
        "O aluno olha os dois lados do balanco: a esquerda, a aplicacao de recursos; a direita, a origem deles. E confronta o principio do casamento de prazos.",
      displayFieldsCaption: "Balanco Patrimonial simplificado da Comercial Aurora S.A. (em R$ milhoes)",
      displayTable: balancoAurora,
      steps: [
        {
          id: "m4-c2-e1",
          label: "Etapa 1 — O que o lado direito mostra",
          question: "O lado direito do balanco (passivo + PL) responde a qual pergunta?",
          points: 100,
          options: [
            {
              id: "c2e1-a",
              label: "De onde vieram os recursos: capital proprio (socios) e de terceiros (credores).",
              correct: true,
              feedback: "O passivo + PL e a origem dos recursos que financiam a empresa.",
            },
            {
              id: "c2e1-b",
              label: "Onde os recursos foram aplicados: em ativos circulantes e nao circulantes.",
              correct: false,
              feedback: "Essa e a leitura do lado esquerdo, o ativo, nao do direito.",
            },
            {
              id: "c2e1-c",
              label: "Quanto a empresa lucrou e gastou ao longo do periodo analisado.",
              correct: false,
              feedback: "Isso e a DRE; o balanco mostra posicao, nao desempenho.",
            },
          ],
        },
        {
          id: "m4-c2-e2",
          label: "Etapa 2 — Casamento de prazos",
          question: "O imobilizado (R$ 34 mi) e um ativo de longo prazo. Como deve ser financiado, idealmente?",
          points: 100,
          options: [
            {
              id: "c2e2-a",
              label: "Por fontes de longo prazo: capital proprio ou divida de longo prazo.",
              correct: true,
              feedback: "Casar prazos evita pagar um ativo de longa maturacao com divida que vence logo.",
            },
            {
              id: "c2e2-b",
              label: "Por fontes de curto prazo: fornecedores e emprestimos de curto prazo.",
              correct: false,
              feedback: "Financiar o permanente com o curto prazo gera risco de rolagem e liquidez.",
            },
            {
              id: "c2e2-c",
              label: "Por qualquer fonte disponivel, pois a origem do recurso e indiferente ao prazo.",
              correct: false,
              feedback: "A origem importa: o descasamento de prazos e uma fonte classica de crise.",
            },
          ],
        },
        {
          id: "m4-c2-e3",
          label: "Etapa 3 — Grau de endividamento",
          question: "O capital de terceiros (R$ 50 mi) sobre o ativo (R$ 80 mi) da 62,5%. Como ler?",
          points: 100,
          options: [
            {
              id: "c2e3-a",
              label: "A maior parte do ativo e financiada por terceiros; convem checar custo e prazo da divida.",
              correct: true,
              feedback: "Endividamento nao e ruim por si so, mas exige analisar condicoes e capacidade de pagar.",
            },
            {
              id: "c2e3-b",
              label: "A maior parte do ativo e financiada pelos socios, o que indica baixo risco financeiro.",
              correct: false,
              feedback: "Falso: 62,5% e de terceiros, nao de capital proprio, que e 37,5%.",
            },
            {
              id: "c2e3-c",
              label: "O indice nao tem leitura possivel sem antes comparar com o lucro liquido do periodo.",
              correct: false,
              feedback: "A estrutura de capital ja tem leitura propria, independente do resultado.",
            },
          ],
        },
      ],
      resolution: {
        prompt: "Os dois lados do balanco",
        columns: ["Visao", "Composicao"],
        rows: [
          { tag: "A", cells: ["Aplicacao (ativo)", "47,5% circulante (38) + 52,5% nao circulante (42)"] },
          { tag: "B", cells: ["Origem (passivo + PL)", "62,5% de terceiros (50) + 37,5% proprio (30)"] },
          { tag: "C", cells: ["Casamento de prazos", "Imobilizado (LP) coberto por PL + divida de LP: prazos casados"] },
        ],
        closing:
          "A estrutura do balanco conta de onde veio e onde esta o dinheiro. O casamento de prazos evita financiar o longo prazo com o curto.",
        chart: {
          caption: "Origem dos recursos sobre o ativo total",
          valueLabel: "% do ativo",
          data: [
            { name: "Terceiros", value: 62.5 },
            { name: "Proprio", value: 37.5 },
          ],
        },
      },
    },
    {
      id: "m4-c3",
      n: 3,
      title: "Operacional vs financeiro",
      difficulty: "avancado",
      concept:
        "Separar o que e da operacao do que e financeiro: base da NCG e da divida liquida.",
      context:
        "Nem todo passivo cobra juros; nem todo ativo serve a operacao. O aluno reclassifica as contas do balanco-base em operacionais e financeiras, passo essencial da analise moderna.",
      displayFieldsCaption: "Balanco Patrimonial simplificado da Comercial Aurora S.A. (em R$ milhoes)",
      displayTable: balancoAurora,
      steps: [
        {
          id: "m4-c3-e1",
          label: "Etapa 1 — Classificar um passivo",
          question: "A conta Fornecedores (R$ 12 mi) e um passivo de que tipo?",
          points: 100,
          options: [
            {
              id: "c3e1-a",
              label: "Operacional: surge da compra a prazo, faz parte do ciclo e nao cobra juros explicitos.",
              correct: true,
              feedback: "E financiamento espontaneo da operacao, nao divida bancaria.",
            },
            {
              id: "c3e1-b",
              label: "Financeiro: e uma divida onerosa que cobra juros e compoe a estrutura de capital.",
              correct: false,
              feedback: "Fornecedor nao cobra juros explicitos; quem e onerosa sao os emprestimos.",
            },
            {
              id: "c3e1-c",
              label: "Nao circulante: vence no longo prazo e financia os ativos permanentes da empresa.",
              correct: false,
              feedback: "Fornecedores sao curto prazo e ligados ao giro, nao ao permanente.",
            },
          ],
        },
        {
          id: "m4-c3-e2",
          label: "Etapa 2 — Classificar um ativo",
          question: "E o Caixa e equivalentes (R$ 6 mi), como classifica-lo?",
          points: 100,
          options: [
            {
              id: "c3e2-a",
              label: "Financeiro: e reserva de liquidez, abatida da divida bruta para achar a divida liquida.",
              correct: true,
              feedback: "Caixa nao gira a operacao; ele neutraliza parte da divida onerosa.",
            },
            {
              id: "c3e2-b",
              label: "Operacional: e insumo direto do ciclo, como os estoques e as contas a receber.",
              correct: false,
              feedback: "Recebiveis e estoques sao operacionais; o caixa e tratado como financeiro.",
            },
            {
              id: "c3e2-c",
              label: "Permanente: e aplicacao de longo prazo que nao se converte em caixa rapidamente.",
              correct: false,
              feedback: "E o oposto: o caixa e o ativo mais liquido que existe.",
            },
          ],
        },
        {
          id: "m4-c3-e3",
          label: "Etapa 3 — Por que separar",
          question: "Por que separar contas operacionais das financeiras importa para a analise?",
          points: 100,
          options: [
            {
              id: "c3e3-a",
              label: "Para isolar a necessidade de capital de giro e medir a divida liquida da empresa.",
              correct: true,
              feedback: "Sao duas medidas centrais: quanto a operacao trava de caixa e o endividamento real.",
            },
            {
              id: "c3e3-b",
              label: "Para somar tudo num unico total e simplificar a leitura do balanco patrimonial.",
              correct: false,
              feedback: "E o oposto: a separacao acrescenta informacao, nao simplifica por agregacao.",
            },
            {
              id: "c3e3-c",
              label: "Para cumprir uma exigencia fiscal, sem efeito sobre a interpretacao financeira.",
              correct: false,
              feedback: "Nao e tema fiscal; e uma escolha analitica com forte efeito interpretativo.",
            },
          ],
        },
      ],
      resolution: {
        prompt: "Reclassificando o balanco da Aurora",
        columns: ["Recorte", "Calculo e leitura"],
        rows: [
          { tag: "A", cells: ["Operacional", "(18 + 14) - (12 + 3) = NCG de R$ 17 mi"] },
          { tag: "B", cells: ["Financeiro", "35 - 6 = divida liquida de R$ 29 mi"] },
          {
            tag: "C",
            cells: ["Por que importa", "NCG mostra o caixa preso na operacao; divida liquida, o endividamento real"],
          },
        ],
        closing:
          "A mesma linha do balanco ganha significado diferente conforme seja operacional ou financeira. Essa separacao e a base da analise financeira moderna.",
        chart: {
          caption: "NCG e divida liquida",
          valueLabel: "R$ mi",
          data: [
            { name: "NCG", value: 17 },
            { name: "Divida liquida", value: 29 },
          ],
        },
      },
    },
    {
      id: "m4-c4",
      n: 4,
      title: "Giro, capital e liquidez",
      difficulty: "super",
      concept: "Integrar CCL, NCG, liquidez e estrutura de capital numa leitura unica.",
      context:
        "O aluno fecha o modulo amarrando os indicadores basicos do balanco-base da Aurora e descobre que eles conversam entre si.",
      displayFieldsCaption: "Balanco Patrimonial simplificado da Comercial Aurora S.A. (em R$ milhoes)",
      displayTable: balancoAurora,
      displayNote:
        "Formulas: CCL = 13; NCG = 17; Saldo de Tesouraria = -4; Liquidez Corrente = 1,52; Liquidez Seca = 0,96; Liquidez Imediata = 0,24.",
      steps: [
        {
          id: "m4-c4-e1",
          label: "Etapa 1 — Capital de giro",
          question: "O CCL da Aurora e 38 - 25 = R$ 13 mi. O que esse valor positivo indica?",
          points: 100,
          options: [
            {
              id: "c4e1-a",
              label: "Ha recursos de longo prazo financiando o circulante: uma situacao confortavel.",
              correct: true,
              feedback: "CCL positivo significa que o curto prazo nao esta sustentando o ativo de longo prazo.",
            },
            {
              id: "c4e1-b",
              label: "Ha escassez de recursos de longo prazo, com o circulante financiando o permanente.",
              correct: false,
              feedback: "Isso seria um CCL negativo; aqui ele e positivo.",
            },
            {
              id: "c4e1-c",
              label: "Nao ha informacao util, pois CCL positivo ou negativo e indiferente a analise.",
              correct: false,
              feedback: "O sinal do CCL e um dos primeiros diagnosticos de equilibrio financeiro.",
            },
          ],
        },
        {
          id: "m4-c4-e2",
          label: "Etapa 2 — CCL contra NCG",
          question: "O CCL e R$ 13 mi e a NCG e R$ 17 mi. O que essa diferenca revela?",
          points: 100,
          options: [
            {
              id: "c4e2-a",
              label: "A NCG supera o CCL: a operacao exige mais giro do que as fontes de longo prazo cobrem.",
              correct: true,
              feedback: "Saldo de tesouraria negativo, -R$ 4 mi: o vao e coberto por divida de curto prazo.",
            },
            {
              id: "c4e2-b",
              label: "O CCL supera a NCG: sobra caixa de longo prazo apos financiar toda a operacao.",
              correct: false,
              feedback: "Falso nos numeros: 13 e menor que 17, nao maior.",
            },
            {
              id: "c4e2-c",
              label: "CCL e NCG sao a mesma coisa medida de duas formas, entao a diferenca e nula.",
              correct: false,
              feedback: "Sao conceitos distintos: um e estrutura, o outro e demanda da operacao.",
            },
          ],
        },
        {
          id: "m4-c4-e3",
          label: "Etapa 3 — Liquidez",
          question: "A liquidez corrente e 1,52 e a seca e 0,96. Qual a leitura conjunta?",
          points: 100,
          options: [
            {
              id: "c4e3-a",
              label: "A empresa cobre o curto prazo, mas depende de vender estoques para conseguir isso.",
              correct: true,
              feedback: "Corrente maior que 1 da conforto; seca menor que 1 mostra a dependencia do estoque.",
            },
            {
              id: "c4e3-b",
              label: "A empresa cobre o curto prazo com folga, mesmo sem contar com os estoques.",
              correct: false,
              feedback: "Falso: sem estoques, seca 0,96, ela fica ligeiramente abaixo de 1.",
            },
            {
              id: "c4e3-c",
              label: "A empresa nao cobre o curto prazo de forma alguma, indicando insolvencia iminente.",
              correct: false,
              feedback: "Falso: a liquidez corrente de 1,52 mostra cobertura, ainda que dependente.",
            },
          ],
        },
      ],
      resolution: {
        prompt: "O balanco em quatro indicadores",
        columns: ["Dimensao", "Numeros"],
        rows: [
          {
            tag: "A",
            cells: ["Capital de giro", "CCL R$ 13 mi vs NCG R$ 17 mi -> saldo de tesouraria -R$ 4 mi"],
          },
          {
            tag: "B",
            cells: ["Liquidez", "Corrente 1,52 · Seca 0,96 · Imediata 0,24"],
          },
          {
            tag: "C",
            cells: ["Estrutura de capital", "Terceiros 62,5% x proprio 37,5% · divida liquida R$ 29 mi"],
          },
        ],
        closing:
          "Os indicadores se sustentam mutuamente. A Aurora e solvente e tem CCL positivo, mas a operacao consome mais giro do que o CCL cobre e a liquidez seca e apertada. Nenhum indice isolado conta a historia toda.",
        chart: {
          caption: "CCL, NCG e saldo de tesouraria",
          valueLabel: "R$ mi",
          data: [
            { name: "CCL", value: 13 },
            { name: "NCG", value: 17 },
            { name: "Saldo tesouraria", value: -4 },
          ],
        },
      },
    },
  ],
};
