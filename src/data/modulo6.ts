import type { ModuleData } from '@/types/scenario';

const dfcAurora = {
  columns: ["Demonstracao dos Fluxos de Caixa (metodo indireto)", "R$ mi"],
  rows: [
    ["Fluxo de Caixa Operacional (FCO)", "0,0"],
    ["Lucro liquido", "4,0"],
    ["(+) Depreciacao e amortizacao (nao-caixa)", "2,0"],
    ["(-) Aumento de contas a receber", "(6,0)"],
    ["(-) Aumento de estoques", "(4,0)"],
    ["(+) Aumento de fornecedores", "3,0"],
    ["(+) Aumento de salarios e impostos a pagar", "1,0"],
    ["Fluxo de Caixa de Investimento (FCI)", "(5,0)"],
    ["(-) Aquisicao de imobilizado (capex)", "(5,0)"],
    ["Fluxo de Caixa de Financiamento (FCF)", "1,0"],
    ["(+) Captacao de emprestimos", "2,0"],
    ["(-) Dividendos pagos", "(1,0)"],
    ["= Variacao liquida de caixa (0 - 5 + 1)", "(4,0)"],
    ["Caixa inicial", "10,0"],
    ["Caixa final", "6,0"],
  ],
};

const variacoesBalanco = {
  columns: ["Conta", "Inicio", "Fim", "Variacao"],
  rows: [
    ["Caixa", "10", "6", "-4"],
    ["Contas a receber", "12", "18", "+6"],
    ["Estoques", "10", "14", "+4"],
    ["Imobilizado liquido", "31", "34", "+3"],
    ["Fornecedores", "9", "12", "+3"],
    ["Salarios e impostos a pagar", "2", "3", "+1"],
    ["Emprestimos (CP + LP)", "33", "35", "+2"],
  ],
};

const serieQualidade = {
  columns: ["Ano", "Lucro liquido", "FCO", "FCO / Lucro"],
  rows: [
    ["Ano 1", "3,6", "3,4", "0,94"],
    ["Ano 2 (atual)", "4,0", "0,0", "0,00"],
    ["Ano 3", "4,4", "6,0", "1,36"],
  ],
};

export const modulo6: ModuleData = {
  n: 6,
  eyebrow: "Modulo 6 · Aula 6 de 15",
  title: "Demonstracao dos Fluxos de Caixa (DFC)",
  subtitle: "Lucro versus caixa, metodo indireto, tres fluxos e qualidade do lucro no tempo.",
  intro:
    "O Modulo 6 fecha o arco lucro versus caixa. O aluno descobre por que uma empresa lucrativa pode ficar com menos dinheiro, reconstrói o caixa operacional pelo metodo indireto, separa os tres fluxos e usa a DFC para julgar a qualidade do lucro.",
  scenarios: [
    {
      id: "m6-c1",
      n: 1,
      title: "Lucro positivo, caixa negativo",
      difficulty: "intermediario",
      concept: "Lucro (competencia) e caixa (regime de caixa) caminham separados.",
      context:
        "A Aurora lucrou R$ 4 mi no ano, mas o caixa caiu de R$ 10 mi para R$ 6 mi, ou -R$ 4 mi. A diretoria nao entende: como lucramos e ficamos com menos dinheiro? O aluno desfaz o paradoxo.",
      displayFieldsCaption: "DFC-base da Comercial Aurora S.A. (em R$ milhoes)",
      displayTable: dfcAurora,
      steps: [
        {
          id: "m6-c1-e1",
          label: "Etapa 1 — A raiz do paradoxo",
          question: "Como a Aurora pode ter lucro e, ao mesmo tempo, menos caixa?",
          points: 100,
          options: [
            {
              id: "c1e1-a",
              label: "Porque o lucro segue o regime de competencia, e nem toda venda virou dinheiro no caixa.",
              correct: true,
              feedback: "A venda a prazo gera lucro hoje, mas o caixa so entra quando o cliente paga.",
            },
            {
              id: "c1e1-b",
              label: "Porque houve erro na apuracao: um lucro positivo sempre eleva o caixa no periodo.",
              correct: false,
              feedback: "Nao ha erro; lucro e caixa divergirem e o funcionamento normal da contabilidade.",
            },
            {
              id: "c1e1-c",
              label: "Porque o lucro e ficticio e a empresa, na verdade, teve prejuizo no ano.",
              correct: false,
              feedback: "O lucro e real pela competencia; o problema e a conversao em caixa.",
            },
          ],
        },
        {
          id: "m6-c1-e2",
          label: "Etapa 2 — Onde o lucro ficou preso",
          question: "O lucro nao virou caixa principalmente porque...",
          points: 100,
          options: [
            {
              id: "c1e2-a",
              label: "As vendas a prazo e os estoques cresceram, prendendo o caixa no capital de giro.",
              correct: true,
              feedback: "Recebiveis (+6) e estoques (+4) consumiram R$ 10 mi de caixa no ano.",
            },
            {
              id: "c1e2-b",
              label: "A depreciacao consumiu o caixa que o lucro havia gerado ao longo do periodo.",
              correct: false,
              feedback: "Falso: a depreciacao e despesa nao-caixa; ela nao retira dinheiro do caixa.",
            },
            {
              id: "c1e2-c",
              label: "Os dividendos pagos superaram em muito o lucro liquido do ano da empresa.",
              correct: false,
              feedback: "Falso nos numeros: os dividendos foram R$ 1 mi, bem abaixo do lucro de R$ 4 mi.",
            },
          ],
        },
        {
          id: "m6-c1-e3",
          label: "Etapa 3 — Competencia contra caixa",
          question: "Qual frase descreve corretamente a relacao entre lucro e caixa?",
          points: 100,
          options: [
            {
              id: "c1e3-a",
              label: "O lucro mede o resultado pela competencia; o caixa mede o dinheiro que de fato circulou.",
              correct: true,
              feedback: "Sao duas reguas diferentes do mesmo periodo, dai poderem divergir.",
            },
            {
              id: "c1e3-b",
              label: "O lucro e o caixa medem a mesma coisa, apenas com nomes contabeis diferentes.",
              correct: false,
              feedback: "Nao medem: um e resultado economico, o outro e movimentacao de dinheiro.",
            },
            {
              id: "c1e3-c",
              label: "O caixa mede o resultado economico; o lucro mede apenas a posicao de tesouraria.",
              correct: false,
              feedback: "Esta invertido: o resultado economico e o lucro; o caixa e a tesouraria.",
            },
          ],
        },
      ],
      resolution: {
        prompt: "O ano da Aurora em tres numeros",
        columns: ["Regua", "Resultado"],
        rows: [
          { tag: "A", cells: ["Competencia (lucro)", "Lucro liquido +R$ 4 mi"] },
          { tag: "B", cells: ["Caixa (regime de caixa)", "Variacao de caixa -R$ 4 mi (10 -> 6)"] },
          {
            tag: "C",
            cells: ["A ponte entre eles", "Lucro preso em recebiveis (+6) e estoques (+4), mais capex e dividendos"],
          },
        ],
        closing:
          "Lucrar e gerar caixa sao coisas diferentes. A DFC e a demonstracao que explica o caminho de um ao outro.",
        chart: {
          caption: "Lucro versus variacao de caixa",
          valueLabel: "R$ mi",
          data: [
            { name: "Lucro liquido", value: 4 },
            { name: "Variacao caixa", value: -4 },
          ],
        },
      },
    },
    {
      id: "m6-c2",
      n: 2,
      title: "Reconstruindo o caixa",
      difficulty: "avancado",
      concept:
        "O metodo indireto reconstrói o caixa operacional a partir do lucro, ajustando itens nao-caixa e o giro.",
      context:
        "Com a DRE (lucro R$ 4 mi, D&A R$ 2 mi) e a variacao do balanco, o aluno monta o Fluxo de Caixa Operacional pelo metodo indireto, ajuste por ajuste.",
      displayFieldsCaption: "Variacoes do balanco (inicio -> fim do ano)",
      displayTable: variacoesBalanco,
      displayNote: "Imobilizado: +3 liquido = capex de 5 - depreciacao de 2.",
      steps: [
        {
          id: "m6-c2-e1",
          label: "Etapa 1 — Partida e primeiro ajuste",
          question: "O metodo indireto parte do lucro liquido (4). Qual o primeiro ajuste e por que?",
          points: 100,
          options: [
            {
              id: "c2e1-a",
              label: "Somar a depreciacao (R$ 2 mi), pois reduziu o lucro mas nao saiu do caixa.",
              correct: true,
              feedback: "E despesa nao-caixa: foi descontada na DRE sem que nenhum dinheiro saisse.",
            },
            {
              id: "c2e1-b",
              label: "Subtrair a depreciacao (R$ 2 mi), pois representa uma saida efetiva de caixa.",
              correct: false,
              feedback: "Falso: a depreciacao nao movimenta caixa; por isso e somada de volta.",
            },
            {
              id: "c2e1-c",
              label: "Ignorar a depreciacao, pois ela nao tem qualquer efeito sobre o lucro do periodo.",
              correct: false,
              feedback: "Falso: ela reduz o lucro; so nao reduz o caixa, dai o ajuste.",
            },
          ],
        },
        {
          id: "m6-c2-e2",
          label: "Etapa 2 — Recebiveis e estoques",
          question: "As contas a receber subiram R$ 6 mi e os estoques R$ 4 mi. Como entram no caixa operacional?",
          points: 100,
          options: [
            {
              id: "c2e2-a",
              label: "Como reducoes de caixa (-10 no total), pois vendas e compras prenderam dinheiro no giro.",
              correct: true,
              feedback: "Mais recebiveis = vendas ainda nao recebidas; mais estoque = caixa imobilizado.",
            },
            {
              id: "c2e2-b",
              label: "Como aumentos de caixa (+10 no total), pois representam mais ativos para a empresa.",
              correct: false,
              feedback: "Falso: crescer ativo de giro consome caixa, nao o gera.",
            },
            {
              id: "c2e2-c",
              label: "Como neutras ao caixa, pois variacoes de ativo circulante nao afetam o operacional.",
              correct: false,
              feedback: "Falso: o capital de giro e o coracao do fluxo operacional.",
            },
          ],
        },
        {
          id: "m6-c2-e3",
          label: "Etapa 3 — Fornecedores e contas a pagar",
          question: "Fornecedores subiram R$ 3 mi e contas a pagar R$ 1 mi. Como entram?",
          points: 100,
          options: [
            {
              id: "c2e3-a",
              label: "Como aumentos de caixa (+4 no total), pois adiar pagamentos preserva dinheiro no giro.",
              correct: true,
              feedback: "Comprar a prazo e pagar depois deixa o caixa na empresa por mais tempo.",
            },
            {
              id: "c2e3-b",
              label: "Como reducoes de caixa (-4 no total), pois a empresa passou a dever mais a terceiros.",
              correct: false,
              feedback: "Falso: dever mais a fornecedores, por ora, preserva caixa, nao o reduz.",
            },
            {
              id: "c2e3-c",
              label: "Como neutras ao caixa, pois passivos circulantes nao afetam o fluxo operacional.",
              correct: false,
              feedback: "Falso: o passivo operacional e parte central do ajuste de giro.",
            },
          ],
        },
      ],
      resolution: {
        prompt: "O FCO montado",
        columns: ["Bloco", "Calculo"],
        rows: [
          { tag: "A", cells: ["Partida + nao-caixa", "Lucro 4 + D&A 2 = 6"] },
          { tag: "B", cells: ["Variacao do giro", "- receb. 6 - estoq. 4 + fornec. 3 + a pagar 1 = -6"] },
          { tag: "C", cells: ["FCO", "6 - 6 = R$ 0 mi (a operacao nao gerou caixa)"] },
        ],
        closing:
          "O metodo indireto mostra, ajuste por ajuste, por que o lucro de R$ 4 mi nao virou caixa: o giro o absorveu inteiro. Reconstruir o caixa e entender a historia por tras do numero.",
        chart: {
          caption: "Reconstrucao do FCO",
          valueLabel: "R$ mi",
          data: [
            { name: "Lucro + D&A", value: 6 },
            { name: "Giro", value: -6 },
            { name: "FCO", value: 0 },
          ],
        },
      },
    },
    {
      id: "m6-c3",
      n: 3,
      title: "Os tres fluxos",
      difficulty: "intermediario",
      concept:
        "Operacional, investimento e financiamento: e como se avalia a capacidade de gerar caixa.",
      context:
        "A DFC se divide em tres blocos. O aluno classifica movimentos e avalia a saude da geracao de caixa da Aurora: FCO 0, FCI -5, FCF +1.",
      displayFieldsCaption: "DFC-base da Comercial Aurora S.A. (em R$ milhoes)",
      displayTable: dfcAurora,
      steps: [
        {
          id: "m6-c3-e1",
          label: "Etapa 1 — Classificar um movimento",
          question: "A compra de um equipamento por R$ 5 mi entra em qual fluxo?",
          points: 100,
          options: [
            {
              id: "c3e1-a",
              label: "No fluxo de investimento, pois e aplicacao em ativos de longo prazo da empresa.",
              correct: true,
              feedback: "Capex e o exemplo classico de saida no fluxo de investimento.",
            },
            {
              id: "c3e1-b",
              label: "No fluxo operacional, pois faz parte das atividades do dia a dia da empresa.",
              correct: false,
              feedback: "Comprar um bem duravel nao e atividade operacional corrente.",
            },
            {
              id: "c3e1-c",
              label: "No fluxo de financiamento, pois envolve a saida de recursos para terceiros.",
              correct: false,
              feedback: "Financiamento trata de divida e capital proprio, nao de compra de ativos.",
            },
          ],
        },
        {
          id: "m6-c3-e2",
          label: "Etapa 2 — Classificar outro movimento",
          question: "A captacao de um emprestimo de R$ 2 mi entra em qual fluxo?",
          points: 100,
          options: [
            {
              id: "c3e2-a",
              label: "No fluxo de financiamento, pois altera as fontes de recursos (divida) da empresa.",
              correct: true,
              feedback: "Captar e amortizar divida sao movimentos de financiamento.",
            },
            {
              id: "c3e2-b",
              label: "No fluxo de investimento, pois traz recursos para aplicar nos ativos da empresa.",
              correct: false,
              feedback: "Investimento e a aplicacao em ativos, nao a origem do dinheiro.",
            },
            {
              id: "c3e2-c",
              label: "No fluxo operacional, pois afeta o caixa disponivel para o dia a dia da empresa.",
              correct: false,
              feedback: "Emprestimo e fonte de financiamento, nao resultado da operacao.",
            },
          ],
        },
        {
          id: "m6-c3-e3",
          label: "Etapa 3 — Capacidade de gerar caixa",
          question: "FCO = 0, FCI = -5, FCF = +1. O que isso revela sobre a Aurora neste ano?",
          points: 100,
          options: [
            {
              id: "c3e3-a",
              label: "A operacao nao se sustentou sozinha; o investimento foi bancado por divida e por caixa.",
              correct: true,
              feedback: "Com FCO zero, o capex saiu da divida nova (+2) e do caixa acumulado (-4).",
            },
            {
              id: "c3e3-b",
              label: "A operacao gerou caixa de sobra, que financiou todo o investimento do periodo.",
              correct: false,
              feedback: "Falso: o FCO foi zero; nao havia sobra operacional para investir.",
            },
            {
              id: "c3e3-c",
              label: "A operacao foi irrelevante, pois so o fluxo de financiamento move o caixa da empresa.",
              correct: false,
              feedback: "A operacao e justamente o fluxo mais importante para a saude de longo prazo.",
            },
          ],
        },
      ],
      resolution: {
        prompt: "A estrutura do caixa da Aurora",
        columns: ["Fluxo", "Valor e leitura"],
        rows: [
          { tag: "A", cells: ["Operacional (FCO)", "R$ 0 mi: a operacao nao gerou caixa neste ano"] },
          { tag: "B", cells: ["Investimento (FCI)", "-R$ 5 mi: capex em imobilizado"] },
          { tag: "C", cells: ["Financiamento (FCF)", "+R$ 1 mi: captou 2, pagou 1 de dividendos"] },
        ],
        closing:
          "A saude de longo prazo esta no FCO. Um ano de FCO baixo pode ser crescimento; anos seguidos de FCO fraco sao alerta. A capacidade de gerar caixa mede-se, sobretudo, pela operacao.",
        chart: {
          caption: "Tres fluxos da DFC",
          valueLabel: "R$ mi",
          data: [
            { name: "FCO", value: 0 },
            { name: "FCI", value: -5 },
            { name: "FCF", value: 1 },
          ],
        },
      },
    },
    {
      id: "m6-c4",
      n: 4,
      title: "Qualidade do lucro no tempo",
      difficulty: "super",
      concept: "Lucro de qualidade e aquele que, ao longo do tempo, converge para o caixa.",
      context:
        "Olhar um unico ano nao basta. O aluno compara lucro e caixa operacional da Aurora ao longo de tres anos para julgar a qualidade do lucro.",
      displayFieldsCaption: "Serie de tres anos",
      displayTable: serieQualidade,
      displayNote: "Conversao de caixa = Caixa operacional / Lucro liquido.",
      steps: [
        {
          id: "m6-c4-e1",
          label: "Etapa 1 — A metrica de qualidade",
          question: "Que relacao resume a qualidade do lucro pela otica do caixa?",
          points: 100,
          options: [
            {
              id: "c4e1-a",
              label: "A razao entre o caixa operacional e o lucro: quanto mais perto de 1, melhor a qualidade.",
              correct: true,
              feedback: "Indica quanto do lucro reportado de fato virou dinheiro.",
            },
            {
              id: "c4e1-b",
              label: "A razao entre o lucro e a receita do periodo: quanto maior a margem, melhor a qualidade.",
              correct: false,
              feedback: "Isso e margem: mede rentabilidade, nao conversao em caixa.",
            },
            {
              id: "c4e1-c",
              label: "A razao entre o caixa final e o caixa inicial: quanto maior, melhor a qualidade.",
              correct: false,
              feedback: "Variacao de caixa total mistura investimento e financiamento; nao isola o lucro.",
            },
          ],
        },
        {
          id: "m6-c4-e2",
          label: "Etapa 2 — Lendo um ano isolado",
          question: "No Ano 2, a Aurora teve lucro 4 e FCO 0 (razao 0). Isso condena a qualidade do lucro?",
          points: 100,
          options: [
            {
              id: "c4e2-a",
              label: "Nao necessariamente: pode ser um ano de crescimento que prendeu caixa no giro.",
              correct: true,
              feedback: "Investir em recebiveis e estoque para crescer e normal e tende a reverter.",
            },
            {
              id: "c4e2-b",
              label: "Sim, sempre: um unico ano com FCO baixo ja prova que o lucro e de ma qualidade.",
              correct: false,
              feedback: "Um ano isolado nao conclui; e preciso ver a tendencia.",
            },
            {
              id: "c4e2-c",
              label: "Nao, jamais: a relacao entre lucro e caixa nao tem qualquer valor diagnostico.",
              correct: false,
              feedback: "Tem, e muito; o ponto e interpreta-la ao longo do tempo.",
            },
          ],
        },
        {
          id: "m6-c4-e3",
          label: "Etapa 3 — Lendo a tendencia",
          question: "Como distinguir um problema temporario de um problema cronico de qualidade?",
          points: 100,
          options: [
            {
              id: "c4e3-a",
              label: "Observando varios anos: se o caixa nunca alcanca o lucro, a divergencia e cronica.",
              correct: true,
              feedback: "A persistencia e o que separa crescimento saudavel de lucro inflado.",
            },
            {
              id: "c4e3-b",
              label: "Observando um trimestre: a divergencia de um periodo curto ja encerra o diagnostico.",
              correct: false,
              feedback: "Periodos curtos sao ruidosos; sazonalidade e giro distorcem.",
            },
            {
              id: "c4e3-c",
              label: "Observando so o ultimo ano: o historico anterior nao importa para a qualidade.",
              correct: false,
              feedback: "O historico e justamente o que revela se a divergencia reverte ou nao.",
            },
          ],
        },
      ],
      resolution: {
        prompt: "Tres anos da Aurora",
        columns: ["Ano", "Lucro · FCO · razao"],
        strengthHeader: "Leitura",
        rows: [
          {
            tag: "A",
            cells: ["Ano 1", "3,6 · 3,4 · 0,94"],
            strength: "forte",
            strengthLabel: "converge",
          },
          {
            tag: "B",
            cells: ["Ano 2", "4,0 · 0,0 · 0,00"],
            strength: "parcial",
            strengthLabel: "divergiu",
          },
          {
            tag: "C",
            cells: ["Ano 3", "4,4 · 6,0 · 1,36"],
            strength: "forte",
            strengthLabel: "reverteu",
          },
        ],
        closing:
          "Nos tres anos, o caixa acompanhou o lucro: a divergencia do Ano 2 foi temporaria, giro de crescimento, e reverteu no Ano 3. Lucro de qualidade converge para o caixa no tempo.",
        chart: {
          caption: "Lucro liquido e FCO ao longo de tres anos",
          valueLabel: "R$ mi",
          data: [
            { name: "Lucro A1", value: 3.6 },
            { name: "FCO A1", value: 3.4 },
            { name: "Lucro A2", value: 4 },
            { name: "FCO A2", value: 0 },
            { name: "Lucro A3", value: 4.4 },
            { name: "FCO A3", value: 6 },
          ],
        },
      },
    },
  ],
};
