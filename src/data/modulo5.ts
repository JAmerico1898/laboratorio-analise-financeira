import type { ModuleData } from '@/types/scenario';

const dreAurora = {
  columns: ["Demonstracao do Resultado", "R$ mi", "% Receita"],
  rows: [
    ["Receita liquida", "50,0", "100%"],
    ["(-) Custo das mercadorias vendidas (CMV)", "(33,0)", "66%"],
    ["= Lucro bruto", "17,0", "34%"],
    ["(-) Despesas com vendas", "(5,0)", "10%"],
    ["(-) Despesas administrativas", "(3,0)", "6%"],
    ["= EBITDA", "9,0", "18%"],
    ["(-) Depreciacao e amortizacao", "(2,0)", "4%"],
    ["= Lucro operacional (EBIT)", "7,0", "14%"],
    ["(-) Resultado financeiro liquido", "(1,5)", "3%"],
    ["(-) IR e CSLL", "(1,5)", "3%"],
    ["= Lucro liquido", "4,0", "8%"],
  ],
};

const casoDoisAnos = {
  columns: ["Indicador", "Ano 1", "Ano 2", "Variacao"],
  rows: [
    ["Receita liquida", "40,0", "50,0", "+25%"],
    ["Lucro bruto (margem)", "14,4 (36%)", "17,0 (34%)", "-2 p.p."],
    ["Lucro liquido (margem)", "3,6 (9%)", "4,0 (8%)", "-1 p.p."],
  ],
};

export const modulo5: ModuleData = {
  n: 5,
  eyebrow: "Modulo 5 · Aula 5 de 15",
  title: "Analise da Demonstracao do Resultado (DRE)",
  subtitle: "Formacao do lucro, margens, lucro absoluto versus rentabilidade e EBITDA recorrente.",
  intro:
    "Se o Modulo 4 leu a posicao pelo Balanco, o Modulo 5 le o desempenho pela DRE. O aluno percorre a cascata da receita ao lucro liquido, calcula e interpreta margens, e descobre que lucro maior nem sempre e desempenho melhor.",
  scenarios: [
    {
      id: "m5-c1",
      n: 1,
      title: "A formacao do lucro",
      difficulty: "intermediario",
      concept:
        "A DRE e uma cascata: cada nivel subtrai um tipo de gasto e revela onde o lucro se forma.",
      context:
        "O aluno percorre a DRE-base da Aurora, de cima para baixo, entendendo o que cada subtracao representa: da receita ao lucro liquido.",
      displayFieldsCaption: "DRE simplificada da Comercial Aurora S.A. (em R$ milhoes)",
      displayTable: dreAurora,
      steps: [
        {
          id: "m5-c1-e1",
          label: "Etapa 1 — Chegando ao lucro bruto",
          question: "O lucro bruto da Aurora (R$ 17 mi) resulta de qual subtracao?",
          points: 100,
          options: [
            {
              id: "c1e1-a",
              label: "Receita liquida menos o custo das mercadorias vendidas (CMV).",
              correct: true,
              feedback: "O lucro bruto isola a margem sobre o que foi vendido, antes de qualquer despesa.",
            },
            {
              id: "c1e1-b",
              label: "Receita liquida menos todas as despesas operacionais do periodo.",
              correct: false,
              feedback: "Isso leva ao lucro operacional (EBIT), nao ao lucro bruto.",
            },
            {
              id: "c1e1-c",
              label: "Receita liquida menos os impostos sobre o lucro do periodo.",
              correct: false,
              feedback: "Os impostos entram la embaixo, perto do lucro liquido.",
            },
          ],
        },
        {
          id: "m5-c1-e2",
          label: "Etapa 2 — Do lucro bruto ao operacional",
          question: "Entre o lucro bruto (17) e o lucro operacional/EBIT (7), o que foi subtraido?",
          points: 100,
          options: [
            {
              id: "c1e2-a",
              label: "As despesas de vender e administrar, mais a depreciacao e amortizacao.",
              correct: true,
              feedback: "Sao os gastos de operar o negocio, fora o custo direto do produto.",
            },
            {
              id: "c1e2-b",
              label: "As despesas financeiras com os juros da divida onerosa da empresa.",
              correct: false,
              feedback: "Os juros vem depois do EBIT, ja no resultado financeiro.",
            },
            {
              id: "c1e2-c",
              label: "Os impostos sobre o lucro e a distribuicao aos acionistas da empresa.",
              correct: false,
              feedback: "Impostos vem depois; distribuicao de lucro nem passa pela DRE.",
            },
          ],
        },
        {
          id: "m5-c1-e3",
          label: "Etapa 3 — Do operacional ao liquido",
          question: "Do lucro operacional (7) ao lucro liquido (4), o que entra na conta?",
          points: 100,
          options: [
            {
              id: "c1e3-a",
              label: "O resultado financeiro (juros) e os impostos sobre o lucro do periodo.",
              correct: true,
              feedback: "Sao os dois ultimos degraus da cascata, fora da operacao.",
            },
            {
              id: "c1e3-b",
              label: "O custo das mercadorias vendidas e as despesas com a forca de vendas.",
              correct: false,
              feedback: "Esses ja foram subtraidos la em cima; nao entram de novo.",
            },
            {
              id: "c1e3-c",
              label: "As receitas de vendas e os abatimentos concedidos sobre o faturamento.",
              correct: false,
              feedback: "A receita esta no topo da DRE; nao reaparece perto do lucro liquido.",
            },
          ],
        },
      ],
      resolution: {
        prompt: "A cascata da DRE",
        columns: ["Degrau", "Conta"],
        rows: [
          { tag: "A", cells: ["Receita -> Lucro bruto", "50 - 33 (CMV) = 17"] },
          { tag: "B", cells: ["Lucro bruto -> EBIT", "17 - 8 (desp. op.) - 2 (D&A) = 7"] },
          { tag: "C", cells: ["EBIT -> Lucro liquido", "7 - 1,5 (financeiro) - 1,5 (impostos) = 4"] },
        ],
        closing:
          "A DRE e uma cascata. Cada degrau isola um tipo de gasto e mostra onde o lucro se forma e onde ele vaza.",
        chart: {
          caption: "Cascata simplificada da DRE",
          valueLabel: "R$ mi",
          data: [
            { name: "Receita", value: 50 },
            { name: "Lucro bruto", value: 17 },
            { name: "EBITDA", value: 9 },
            { name: "EBIT", value: 7 },
            { name: "Lucro liquido", value: 4 },
          ],
        },
      },
    },
    {
      id: "m5-c2",
      n: 2,
      title: "As margens",
      difficulty: "intermediario",
      concept: "Margem mede quanto de cada real de receita sobra em cada nivel da DRE.",
      context:
        "O aluno interpreta as margens da Aurora: bruta 34%, EBITDA 18%, operacional 14% e liquida 8%, descobrindo que cada uma responde a uma pergunta diferente.",
      displayFieldsCaption: "DRE simplificada da Comercial Aurora S.A. (em R$ milhoes)",
      displayTable: dreAurora,
      displayNote:
        "Margens: bruta = 34%; EBITDA = 18%; operacional = 14%; liquida = 8%.",
      steps: [
        {
          id: "m5-c2-e1",
          label: "Etapa 1 — O que a margem bruta revela",
          question: "A margem bruta da Aurora e 34%. O que ela mede?",
          points: 100,
          options: [
            {
              id: "c2e1-a",
              label: "Quanto sobra da receita apos o custo do produto, antes das demais despesas.",
              correct: true,
              feedback: "Mede a eficiencia na producao ou compra do que se vende.",
            },
            {
              id: "c2e1-b",
              label: "Quanto sobra da receita apos todas as despesas e os impostos do periodo.",
              correct: false,
              feedback: "Isso e a margem liquida, nao a bruta.",
            },
            {
              id: "c2e1-c",
              label: "Quanto sobra da receita apos os juros da divida onerosa da empresa.",
              correct: false,
              feedback: "Os juros nem entram no calculo da margem bruta.",
            },
          ],
        },
        {
          id: "m5-c2-e2",
          label: "Etapa 2 — Operacional contra liquida",
          question: "A margem operacional e 14% e a liquida e 8%. O que explica a diferenca de 6 pontos?",
          points: 100,
          options: [
            {
              id: "c2e2-a",
              label: "O resultado financeiro e os impostos, que incidem depois do lucro operacional.",
              correct: true,
              feedback: "Sao os dois degraus entre o EBIT e o lucro liquido.",
            },
            {
              id: "c2e2-b",
              label: "O custo das mercadorias vendidas, que reduz a receita logo no inicio da DRE.",
              correct: false,
              feedback: "O CMV ja esta embutido bem antes do lucro operacional.",
            },
            {
              id: "c2e2-c",
              label: "As despesas de vendas e administrativas, ja contidas no lucro operacional.",
              correct: false,
              feedback: "Essas ja foram descontadas para chegar ao EBIT; nao explicam o vao.",
            },
          ],
        },
        {
          id: "m5-c2-e3",
          label: "Etapa 3 — Qual margem para qual pergunta",
          question: "Para avaliar a eficiencia da operacao, isolando como a empresa se financia, qual margem usar?",
          points: 100,
          options: [
            {
              id: "c2e3-a",
              label: "A margem operacional (ou EBITDA), que independe da estrutura de financiamento.",
              correct: true,
              feedback: "Antes dos juros, ela compara operacoes mesmo com dividas diferentes.",
            },
            {
              id: "c2e3-b",
              label: "A margem liquida, que ja embute os juros da divida e a carga tributaria.",
              correct: false,
              feedback: "Ela mistura operacao e financiamento: nao isola a eficiencia operacional.",
            },
            {
              id: "c2e3-c",
              label: "A margem bruta, que considera apenas o custo direto do produto vendido.",
              correct: false,
              feedback: "E estreita demais: ignora as despesas de operar o negocio.",
            },
          ],
        },
      ],
      resolution: {
        prompt: "O que cada margem conta",
        columns: ["Margem", "Pergunta que responde"],
        rows: [
          { tag: "A", cells: ["Bruta (34%)", "Eficiencia na producao/compra do que se vende"] },
          { tag: "B", cells: ["Operacional / EBITDA (14% / 18%)", "Eficiencia da operacao, antes de financiamento e impostos"] },
          { tag: "C", cells: ["Liquida (8%)", "O que sobra para os socios, depois de tudo"] },
        ],
        closing:
          "Cada margem responde a uma pergunta diferente. Lidas juntas, mostram onde o resultado se forma e onde ele se perde.",
        chart: {
          caption: "Margens da Aurora",
          valueLabel: "%",
          data: [
            { name: "Bruta", value: 34 },
            { name: "EBITDA", value: 18 },
            { name: "Operacional", value: 14 },
            { name: "Liquida", value: 8 },
          ],
        },
      },
    },
    {
      id: "m5-c3",
      n: 3,
      title: "Lucro sobe, margem cai",
      difficulty: "avancado",
      concept:
        "Lucro maior em reais pode esconder deterioracao da rentabilidade. Lucro contabil versus desempenho economico.",
      context:
        "A Aurora cresceu a receita de R$ 40 mi para R$ 50 mi e o lucro de R$ 3,6 mi para R$ 4,0 mi. A diretoria comemora o lucro recorde. O aluno olha as margens antes de aplaudir.",
      displayFieldsCaption: "Caso de dois anos",
      displayTable: casoDoisAnos,
      displayNote:
        "O lucro liquido cresceu +11%, de 3,6 para 4,0, mas as margens cairam: lucro maior, eficiencia menor.",
      steps: [
        {
          id: "m5-c3-e1",
          label: "Etapa 1 — O primeiro olhar",
          question: "O lucro subiu de 3,6 para 4,0 mi. Antes de comemorar, o que checar?",
          points: 100,
          options: [
            {
              id: "c3e1-a",
              label: "Se a margem acompanhou o crescimento ou se ela encolheu no caminho.",
              correct: true,
              feedback: "Lucro absoluto cresce com volume; a margem revela se a empresa ficou melhor.",
            },
            {
              id: "c3e1-b",
              label: "Se o lucro foi maior que o do principal concorrente do setor naquele ano.",
              correct: false,
              feedback: "Comparar vem depois; primeiro, entender a propria rentabilidade.",
            },
            {
              id: "c3e1-c",
              label: "Se o lucro foi divulgado dentro do prazo exigido pela autoridade reguladora.",
              correct: false,
              feedback: "O prazo nao diz nada sobre a qualidade do crescimento.",
            },
          ],
        },
        {
          id: "m5-c3-e2",
          label: "Etapa 2 — A constatacao",
          question: "A margem liquida caiu de 9% para 8% e a bruta de 36% para 34%. O que isso indica?",
          points: 100,
          options: [
            {
              id: "c3e2-a",
              label: "A empresa cresceu vendendo mais barato ou com custo maior: a eficiencia caiu.",
              correct: true,
              feedback: "Mais receita, menos margem: o crescimento veio as custas da rentabilidade.",
            },
            {
              id: "c3e2-b",
              label: "A empresa cresceu de forma saudavel, pois o lucro absoluto de fato aumentou.",
              correct: false,
              feedback: "O lucro subiu, mas a margem caindo desmente o crescimento saudavel.",
            },
            {
              id: "c3e2-c",
              label: "A empresa manteve a eficiencia, pois margem e lucro sao a mesma informacao.",
              correct: false,
              feedback: "Nao sao: lucro e valor absoluto; margem e rentabilidade relativa.",
            },
          ],
        },
        {
          id: "m5-c3-e3",
          label: "Etapa 3 — Lucro contabil x desempenho economico",
          question: "Por que o lucro recorde pode mascarar um desempenho economico pior?",
          points: 100,
          options: [
            {
              id: "c3e3-a",
              label: "Porque crescer com margem menor pode destruir valor se nao cobrir o custo do capital.",
              correct: true,
              feedback: "Mais lucro contabil nao garante retorno acima do custo do capital empregado.",
            },
            {
              id: "c3e3-b",
              label: "Porque o lucro contabil e sempre irreal e nunca reflete a operacao da empresa.",
              correct: false,
              feedback: "Exagero: o lucro contabil e util; o ponto e complementa-lo com a margem.",
            },
            {
              id: "c3e3-c",
              label: "Porque margem decrescente significa, necessariamente, prejuizo no ano seguinte.",
              correct: false,
              feedback: "Nao ha necessariamente: margem menor e alerta, nao sentenca de prejuizo.",
            },
          ],
        },
      ],
      resolution: {
        prompt: "Dois anos, duas leituras",
        columns: ["Leitura", "O que enxerga"],
        strengthHeader: "Forca",
        rows: [
          {
            tag: "A",
            cells: ["De capa", "Lucro recorde: +11% (3,6 -> 4,0)"],
            strength: "fraco",
            strengthLabel: "ingenua",
          },
          {
            tag: "B",
            cells: ["De margem", "Liquida 9% -> 8%; bruta 36% -> 34% (eficiencia caiu)"],
            strength: "forte",
            strengthLabel: "critica",
          },
          {
            tag: "C",
            cells: ["Economica", "Crescer com margem menor: criou ou destruiu valor?"],
            strength: "forte",
            strengthLabel: "profunda",
          },
        ],
        closing:
          "Lucro maior em reais nao significa empresa melhor. A margem mostra a qualidade do crescimento, e o desempenho economico vai alem do lucro contabil.",
        chart: {
          caption: "Margens no caso de dois anos",
          valueLabel: "%",
          data: [
            { name: "Bruta Ano 1", value: 36 },
            { name: "Bruta Ano 2", value: 34 },
            { name: "Liquida Ano 1", value: 9 },
            { name: "Liquida Ano 2", value: 8 },
          ],
        },
      },
    },
    {
      id: "m5-c4",
      n: 4,
      title: "EBITDA e resultados recorrentes",
      difficulty: "super",
      concept:
        "O EBITDA aproxima a geracao operacional, mas ignora capex, juros e impostos; e precisa ser ajustado por itens nao recorrentes.",
      context:
        "A Aurora reporta EBITDA de R$ 9 mi. Um analista quer usa-lo para avaliar a geracao da operacao, mas descobre que, dentro desse valor, ha um ganho nao recorrente de R$ 1,5 mi por reversao de provisao. O aluno entende o que o EBITDA inclui, ignora e como ajusta-lo.",
      displayFieldsCaption: "EBITDA reportado e ajuste",
      displayFields: [
        { label: "EBITDA reportado", value: "R$ 9,0 mi" },
        { label: "Ganho nao recorrente", value: "R$ 1,5 mi" },
        { label: "EBITDA recorrente", value: "R$ 7,5 mi" },
      ],
      steps: [
        {
          id: "m5-c4-e1",
          label: "Etapa 1 — O que o EBITDA mede",
          question: "O EBITDA da Aurora e R$ 9 mi. O que ele busca aproximar?",
          points: 100,
          options: [
            {
              id: "c4e1-a",
              label: "A geracao de caixa da operacao, antes de juros, impostos, depreciacao e amortizacao.",
              correct: true,
              feedback: "E um proxy de quanto a operacao gera, isolando financiamento e itens nao-caixa.",
            },
            {
              id: "c4e1-b",
              label: "O lucro final disponivel aos socios, depois de juros, impostos e investimentos.",
              correct: false,
              feedback: "Isso e o lucro liquido, e nem desconta capex; o EBITDA vem bem antes.",
            },
            {
              id: "c4e1-c",
              label: "O total de dinheiro que efetivamente entrou no caixa da empresa no periodo.",
              correct: false,
              feedback: "EBITDA nao e caixa: ignora capex e variacoes de capital de giro.",
            },
          ],
        },
        {
          id: "m5-c4-e2",
          label: "Etapa 2 — O que o EBITDA ignora",
          question: "Por que o EBITDA pode superestimar a real geracao de caixa?",
          points: 100,
          options: [
            {
              id: "c4e2-a",
              label: "Porque ignora juros, impostos e, sobretudo, os investimentos (capex) que a operacao exige.",
              correct: true,
              feedback: "Uma empresa com EBITDA alto e capex pesado pode gerar pouco caixa livre.",
            },
            {
              id: "c4e2-b",
              label: "Porque inclui a depreciacao, que seria uma saida de caixa recorrente da empresa.",
              correct: false,
              feedback: "Falso: a depreciacao e justamente somada de volta; e nao e saida de caixa.",
            },
            {
              id: "c4e2-c",
              label: "Porque desconta os juros duas vezes, inflando de forma artificial o resultado.",
              correct: false,
              feedback: "Falso: o EBITDA nao desconta juros nenhuma vez, ele vem antes deles.",
            },
          ],
        },
        {
          id: "m5-c4-e3",
          label: "Etapa 3 — Resultado recorrente",
          question: "O EBITDA de R$ 9 mi inclui um ganho nao recorrente de R$ 1,5 mi. Como trata-lo?",
          points: 100,
          options: [
            {
              id: "c4e3-a",
              label: "Exclui-lo para achar o EBITDA recorrente de R$ 7,5 mi, base para projetar o futuro.",
              correct: true,
              feedback: "A projecao deve usar o que se repete, nao um ganho de uma vez so.",
            },
            {
              id: "c4e3-b",
              label: "Mante-lo no EBITDA, pois todo ganho do periodo compoe a geracao operacional.",
              correct: false,
              feedback: "Ganho nao recorrente nao e operacional nem se repete; distorce a projecao.",
            },
            {
              id: "c4e3-c",
              label: "Soma-lo de novo no proximo ano, pois o efeito do ganho tende a se repetir.",
              correct: false,
              feedback: "Por definicao, um item nao recorrente nao se repete no ano seguinte.",
            },
          ],
        },
      ],
      resolution: {
        prompt: "O EBITDA sob tres olhares",
        columns: ["Olhar", "Valor / leitura"],
        rows: [
          { tag: "A", cells: ["EBITDA reportado", "R$ 9 mi (inclui R$ 1,5 mi nao recorrente)"] },
          { tag: "B", cells: ["EBITDA recorrente", "R$ 7,5 mi: base honesta para projecao"] },
          { tag: "C", cells: ["Limite do EBITDA", "Ignora capex, juros e impostos: nao e o caixa da empresa"] },
        ],
        closing:
          "O EBITDA e otimo para comparar operacoes, mas nao e caixa nem lucro. Ajusta-lo por itens nao recorrentes e lembrar do que ele ignora separa o uso ingenuo do uso critico.",
        chart: {
          caption: "EBITDA reportado versus recorrente",
          valueLabel: "R$ mi",
          data: [
            { name: "Reportado", value: 9 },
            { name: "Recorrente", value: 7.5 },
            { name: "Nao recorrente", value: 1.5 },
          ],
        },
      },
    },
  ],
};
