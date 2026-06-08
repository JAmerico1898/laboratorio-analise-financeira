import type { ModuleData } from '@/types/scenario';

const rentabilidadeAurora = {
  columns: ["Indicador", "Calculo", "Valor"],
  rows: [
    ["Margem liquida", "LL / Receita = 4 / 50", "8%"],
    ["Giro do ativo", "Receita / Ativo = 50 / 80", "0,625"],
    ["ROA", "LL / Ativo = 4 / 80", "5%"],
    ["Multiplicador de alavancagem", "Ativo / PL = 80 / 30", "2,67"],
    ["ROE", "LL / PL = 4 / 30", "13,3%"],
    ["DuPont", "8% x 0,625 x 2,67", "13,3%"],
  ],
};

const mesmoRoe = {
  columns: ["Fator", "Empresa Solida", "Empresa Alavancada"],
  rows: [
    ["Margem liquida", "10%", "5%"],
    ["Giro do ativo", "1,0", "1,0"],
    ["ROA (margem x giro)", "10%", "5%"],
    ["Multiplicador (Ativo / PL)", "1,5", "3,0"],
    ["ROE", "15%", "15%"],
  ],
};

const tradeoffMargemGiro = {
  columns: ["Modelo", "Margem", "Giro", "ROA"],
  rows: [
    ["Joalheria (margem alta, giro baixo)", "20%", "0,5", "10%"],
    ["Supermercado (margem baixa, giro alto)", "2%", "5,0", "10%"],
  ],
};

export const modulo10: ModuleData = {
  n: 10,
  eyebrow: "Modulo 10 · Aula 10 de 15",
  title: "Analise de Rentabilidade e Retorno",
  subtitle: "ROA, ROE, margem, giro, alavancagem e a decomposicao DuPont.",
  intro:
    "O Modulo 10 responde a pergunta que o investidor mais faz: vale a pena? O aluno aprende que rentabilidade e eficiencia, relaciona lucro com ativos e capital proprio, descobre que dois ROEs iguais podem esconder historias opostas e fecha com a formula DuPont.",
  scenarios: [
    {
      id: "m10-c1",
      n: 1,
      title: "Eficiencia economica",
      difficulty: "intermediario",
      concept: "Rentabilidade e eficiencia: lucro por real de capital, nao o tamanho do lucro.",
      context:
        "A Aurora lucrou R$ 4 mi. Mas isso e bom? Depende de quanto capital foi preciso para gerar esse lucro. O aluno aprende a ver o retorno como eficiencia, nao valor absoluto.",
      displayFieldsCaption: "Indicadores de rentabilidade da Aurora",
      displayTable: rentabilidadeAurora,
      steps: [
        {
          id: "m10-c1-e1",
          label: "Etapa 1 — Lucro absoluto nao basta",
          question: "A Aurora lucrou R$ 4 mi. Isso basta para dizer que ela e eficiente?",
          points: 100,
          options: [
            {
              id: "c1e1-a",
              label: "Nao: e preciso comparar o lucro ao capital empregado para gera-lo.",
              correct: true,
              feedback: "R$ 4 mi com R$ 30 mi de capital e diferente de R$ 4 mi com R$ 300 mi.",
            },
            {
              id: "c1e1-b",
              label: "Sim: um lucro positivo ja indica, por si so, eficiencia economica da empresa.",
              correct: false,
              feedback: "Lucrar nao diz se o capital foi bem usado.",
            },
            {
              id: "c1e1-c",
              label: "Nao: o lucro so faz sentido quando comparado a receita total do periodo.",
              correct: false,
              partial: true,
              feedback: "Isso e a margem: uma parte da historia, mas nao a eficiencia do capital.",
            },
          ],
        },
        {
          id: "m10-c1-e2",
          label: "Etapa 2 — O que e retorno",
          question: "O que um indice de retorno, como ROA ou ROE, expressa?",
          points: 100,
          options: [
            {
              id: "c1e2-a",
              label: "Quanto de lucro a empresa gera para cada real de capital aplicado.",
              correct: true,
              feedback: "E a eficiencia de transformar capital em resultado.",
            },
            {
              id: "c1e2-b",
              label: "Quanto de receita a empresa gera para cada real de lucro obtido.",
              correct: false,
              feedback: "Relacao invertida e sem sentido economico.",
            },
            {
              id: "c1e2-c",
              label: "Quanto de divida a empresa contrai para cada real de ativo total.",
              correct: false,
              feedback: "Isso e endividamento, nao retorno.",
            },
          ],
        },
        {
          id: "m10-c1-e3",
          label: "Etapa 3 — Por que a eficiencia importa",
          question: "Por que duas empresas com o mesmo lucro podem ter eficiencias muito diferentes?",
          points: 100,
          options: [
            {
              id: "c1e3-a",
              label: "Porque uma pode ter usado muito menos capital que a outra para gerar o mesmo lucro.",
              correct: true,
              feedback: "Menos capital para o mesmo lucro significa mais eficiencia, maior retorno.",
            },
            {
              id: "c1e3-b",
              label: "Porque uma pode ter vendido em um setor diferente da outra no mesmo periodo.",
              correct: false,
              feedback: "O setor influencia, mas nao e o que define eficiencia sobre o capital.",
            },
            {
              id: "c1e3-c",
              label: "Porque o lucro contabil e sempre diferente do lucro economico de cada empresa.",
              correct: false,
              feedback: "Nao e a questao aqui; o ponto e o capital empregado.",
            },
          ],
        },
      ],
      resolution: {
        prompt: "O lucro da Aurora em perspectiva",
        columns: ["Angulo", "Valor"],
        rows: [
          { tag: "A", cells: ["Lucro absoluto", "R$ 4 mi (sozinho, nao diz nada)"] },
          { tag: "B", cells: ["Sobre o ativo (ROA)", "4 / 80 = 5% (eficiencia de todos os ativos)"] },
          { tag: "C", cells: ["Sobre o PL (ROE)", "4 / 30 = 13,3% (retorno ao socio)"] },
        ],
        closing:
          "Rentabilidade e eficiencia, nao tamanho. O mesmo lucro vale mais ou menos conforme o capital que foi preciso para gera-lo.",
        chart: {
          caption: "ROA e ROE da Aurora",
          valueLabel: "%",
          data: [
            { name: "ROA", value: 5 },
            { name: "ROE", value: 13.3 },
          ],
        },
      },
    },
    {
      id: "m10-c2",
      n: 2,
      title: "Lucro, ativos e capital",
      difficulty: "intermediario",
      concept:
        "O ROA olha a empresa; o ROE olha o socio. A ponte e a alavancagem.",
      context:
        "A Aurora tem ROA de 5% e ROE de 13,3%. Por que o retorno do socio e tao maior que o retorno dos ativos? O aluno relaciona lucro, ativos e capital.",
      displayFieldsCaption: "Indicadores de rentabilidade da Aurora",
      displayTable: rentabilidadeAurora,
      steps: [
        {
          id: "m10-c2-e1",
          label: "Etapa 1 — A base do ROA",
          question: "O ROA mede o lucro sobre qual base?",
          points: 100,
          options: [
            {
              id: "c2e1-a",
              label: "Sobre o ativo total, refletindo a eficiencia de todos os recursos da empresa.",
              correct: true,
              feedback: "Olha o negocio como um todo, independentemente de como e financiado.",
            },
            {
              id: "c2e1-b",
              label: "Sobre o patrimonio liquido, refletindo o retorno do capital dos socios.",
              correct: false,
              feedback: "Essa e a base do ROE, nao do ROA.",
            },
            {
              id: "c2e1-c",
              label: "Sobre a divida onerosa, refletindo o custo do capital de terceiros.",
              correct: false,
              feedback: "Isso e o custo da divida, nao um indice de retorno.",
            },
          ],
        },
        {
          id: "m10-c2-e2",
          label: "Etapa 2 — A base do ROE",
          question: "E o ROE mede o lucro sobre qual base?",
          points: 100,
          options: [
            {
              id: "c2e2-a",
              label: "Sobre o patrimonio liquido, refletindo o retorno do capital dos socios.",
              correct: true,
              feedback: "E o numero que o acionista mais observa.",
            },
            {
              id: "c2e2-b",
              label: "Sobre o ativo total, refletindo a eficiencia de todos os recursos da empresa.",
              correct: false,
              feedback: "Essa e a base do ROA, nao do ROE.",
            },
            {
              id: "c2e2-c",
              label: "Sobre a receita liquida, refletindo a margem obtida nas vendas do periodo.",
              correct: false,
              feedback: "Isso e a margem, nao o retorno sobre o capital proprio.",
            },
          ],
        },
        {
          id: "m10-c2-e3",
          label: "Etapa 3 — Por que o ROE supera o ROA",
          question: "Na Aurora, o ROE (13,3%) e bem maior que o ROA (5%). O que explica?",
          points: 100,
          options: [
            {
              id: "c2e3-a",
              label: "A alavancagem: parte dos ativos e financiada por terceiros, multiplicando o retorno do socio.",
              correct: true,
              feedback: "O socio coloca R$ 30 mi e comanda R$ 80 mi de ativos.",
            },
            {
              id: "c2e3-b",
              label: "A margem: vender com margem alta faz o ROE superar o ROA da empresa.",
              correct: false,
              feedback: "A margem afeta ROA e ROE igualmente; nao cria o vao entre eles.",
            },
            {
              id: "c2e3-c",
              label: "O giro: girar o ativo muitas vezes faz o ROE superar o ROA da empresa.",
              correct: false,
              feedback: "O giro tambem afeta os dois igualmente; nao explica a diferenca.",
            },
          ],
        },
      ],
      resolution: {
        prompt: "Do ativo ao socio",
        columns: ["Elo", "Calculo"],
        rows: [
          { tag: "A", cells: ["ROA", "4 / 80 = 5% (retorno de todos os ativos)"] },
          { tag: "B", cells: ["Multiplicador", "Ativo / PL = 80 / 30 = 2,67 (alavancagem)"] },
          { tag: "C", cells: ["ROE", "ROA x multiplicador = 5% x 2,67 = 13,3%"] },
        ],
        closing:
          "O ROA olha a empresa; o ROE olha o socio. A ponte e a alavancagem, que multiplica retorno e risco.",
        chart: {
          caption: "Ponte ROA para ROE",
          valueLabel: "Valor",
          data: [
            { name: "ROA %", value: 5 },
            { name: "Multiplicador", value: 2.67 },
            { name: "ROE %", value: 13.3 },
          ],
        },
      },
    },
    {
      id: "m10-c3",
      n: 3,
      title: "Mesmo ROE, historias diferentes",
      difficulty: "avancado",
      concept:
        "Dois ROEs iguais podem ter qualidades opostas: um vindo de eficiencia, outro de alavancagem.",
      context:
        "Duas empresas tem ROE de 15%. A diretoria diz que sao igualmente boas. O aluno decompoe o retorno e descobre que nao.",
      displayFieldsCaption: "Comparacao mesmo ROE",
      displayTable: mesmoRoe,
      steps: [
        {
          id: "m10-c3-e1",
          label: "Etapa 1 — De onde vem cada ROE",
          question: "As duas tem ROE 15%. De onde vem o ROE de cada uma?",
          points: 100,
          options: [
            {
              id: "c3e1-a",
              label: "A Solida vem de ROA alto (10%); a Alavancada, de muita divida (multiplicador 3,0).",
              correct: true,
              feedback: "Mesma chegada, caminhos opostos: eficiencia versus alavancagem.",
            },
            {
              id: "c3e1-b",
              label: "A Solida vem de muita divida; a Alavancada, de eficiencia operacional alta.",
              correct: false,
              feedback: "Invertido: a Solida tem ROA alto e pouca divida.",
            },
            {
              id: "c3e1-c",
              label: "As duas vem da mesma fonte, ja que o ROE final e identico nas duas.",
              correct: false,
              feedback: "ROE igual nao implica fonte igual: e justamente o ponto do cenario.",
            },
          ],
        },
        {
          id: "m10-c3-e2",
          label: "Etapa 2 — Qual embute mais risco",
          question: "Qual das duas embute mais risco para alcancar o mesmo ROE?",
          points: 100,
          options: [
            {
              id: "c3e2-a",
              label: "A Alavancada: depende de divida alta, que amplia as perdas em anos ruins.",
              correct: true,
              feedback: "O multiplicador 3,0 e alavancagem pesada, como vimos na Aula 9.",
            },
            {
              id: "c3e2-b",
              label: "A Solida: depende de margem alta, que pode cair se a concorrencia apertar.",
              correct: false,
              feedback: "A Solida tem ROA alto e baixa divida: e a menos arriscada.",
            },
            {
              id: "c3e2-c",
              label: "Nenhuma: ROE igual significa risco igual, independentemente da estrutura.",
              correct: false,
              feedback: "ROE igual esconde riscos muito diferentes.",
            },
          ],
        },
        {
          id: "m10-c3-e3",
          label: "Etapa 3 — A interpretacao economica",
          question: "Qual a leitura economica correta dessa comparacao?",
          points: 100,
          options: [
            {
              id: "c3e3-a",
              label: "ROE igual nao significa qualidade igual: a fonte do retorno muda o risco e a sustentabilidade.",
              correct: true,
              feedback: "Eficiencia e mais sustentavel que alavancagem para gerar retorno.",
            },
            {
              id: "c3e3-b",
              label: "ROE igual significa qualidade igual: o mercado so enxerga o retorno final ao socio.",
              correct: false,
              feedback: "O mercado precifica tambem o risco da fonte do retorno.",
            },
            {
              id: "c3e3-c",
              label: "ROE igual favorece sempre a mais alavancada, pois ela usa menos capital proprio.",
              correct: false,
              feedback: "Menos capital proprio significa mais risco, nao vantagem automatica.",
            },
          ],
        },
      ],
      resolution: {
        prompt: "O mesmo 15%, duas historias",
        columns: ["Empresa", "Decomposicao do ROE"],
        strengthHeader: "Fonte",
        rows: [
          {
            tag: "A",
            cells: ["Solida", "ROA 10% x multiplicador 1,5 = 15%"],
            strength: "forte",
            strengthLabel: "eficiencia",
          },
          {
            tag: "B",
            cells: ["Alavancada", "ROA 5% x multiplicador 3,0 = 15%"],
            strength: "fraco",
            strengthLabel: "risco",
          },
          {
            tag: "C",
            cells: ["A licao", "O ROE nao se explica sozinho: e preciso saber de onde ele vem"],
            strength: "parcial",
            strengthLabel: "nuance",
          },
        ],
        closing:
          "Dois ROEs iguais podem ser realidades opostas. Decompor o retorno revela a historia por tras do numero.",
        chart: {
          caption: "Mesmo ROE, fontes diferentes",
          valueLabel: "%",
          data: [
            { name: "ROA Solida", value: 10 },
            { name: "ROA Alav.", value: 5 },
            { name: "ROE Solida", value: 15 },
            { name: "ROE Alav.", value: 15 },
          ],
        },
      },
    },
    {
      id: "m10-c4",
      n: 4,
      title: "A formula DuPont",
      difficulty: "super",
      concept:
        "ROE = Margem x Giro x Alavancagem. Decompor o retorno revela qual motor o impulsiona.",
      context:
        "O aluno decompoe o ROE da Aurora pela formula DuPont e entende o trade-off entre margem e giro que define os modelos de negocio.",
      displayFieldsCaption: "Trade-off margem x giro",
      displayTable: tradeoffMargemGiro,
      steps: [
        {
          id: "m10-c4-e1",
          label: "Etapa 1 — Os tres fatores",
          question: "A formula DuPont decompoe o ROE em quais tres fatores?",
          points: 100,
          options: [
            {
              id: "c4e1-a",
              label: "Margem liquida, giro do ativo e multiplicador de alavancagem (Ativo / PL).",
              correct: true,
              feedback: "Rentabilidade x eficiencia de ativos x estrutura de capital.",
            },
            {
              id: "c4e1-b",
              label: "Margem bruta, liquidez corrente e cobertura de juros da divida onerosa.",
              correct: false,
              feedback: "Mistura indicadores de aulas diferentes; nao e a DuPont.",
            },
            {
              id: "c4e1-c",
              label: "Receita, lucro operacional e patrimonio liquido do periodo analisado.",
              correct: false,
              feedback: "Sao componentes soltos, nao os tres fatores do DuPont.",
            },
          ],
        },
        {
          id: "m10-c4-e2",
          label: "Etapa 2 — O DuPont da Aurora",
          question: "O ROE da Aurora (13,3%) decompoe-se como?",
          points: 100,
          options: [
            {
              id: "c4e2-a",
              label: "Margem 8% x giro 0,625 x multiplicador 2,67 = 13,3%.",
              correct: true,
              feedback: "Cada fator no seu lugar: margem, giro e alavancagem.",
            },
            {
              id: "c4e2-b",
              label: "Margem 8% x giro 2,67 x multiplicador 0,625 = 13,3%.",
              correct: false,
              feedback: "Troca giro e multiplicador de lugar; o produto bate, mas os conceitos nao.",
            },
            {
              id: "c4e2-c",
              label: "Margem 13,3% x giro 1,0 x multiplicador 1,0 = 13,3%.",
              correct: false,
              feedback: "Colapsa tudo na margem; nao decompoe nada.",
            },
          ],
        },
        {
          id: "m10-c4-e3",
          label: "Etapa 3 — O trade-off margem x giro",
          question:
            "Uma joalheria tem margem 20% e giro 0,5; um supermercado, margem 2% e giro 5,0. O que isso mostra?",
          points: 100,
          options: [
            {
              id: "c4e3-a",
              label: "Modelos diferentes chegam ao mesmo ROA (10%): muita margem com pouco giro, ou o inverso.",
              correct: true,
              feedback: "20% x 0,5 = 10% e 2% x 5,0 = 10%: caminhos opostos, mesmo retorno do ativo.",
            },
            {
              id: "c4e3-b",
              label: "A joalheria e sempre mais rentavel, pois margem alta supera qualquer giro baixo.",
              correct: false,
              feedback: "Nao: o giro baixo derruba o ROA; aqui empatam em 10%.",
            },
            {
              id: "c4e3-c",
              label: "O supermercado e sempre mais rentavel, pois giro alto supera qualquer margem baixa.",
              correct: false,
              feedback: "Nao: a margem minima compensa so com giro altissimo; aqui empatam.",
            },
          ],
        },
      ],
      resolution: {
        prompt: "O ROE decomposto",
        columns: ["Visao", "Decomposicao"],
        rows: [
          {
            tag: "A",
            cells: ["DuPont da Aurora", "8% (margem) x 0,625 (giro) x 2,67 (alavancagem) = 13,3%"],
          },
          {
            tag: "B",
            cells: ["Trade-off margem x giro", "Joalheria 20% x 0,5 = 10% · Supermercado 2% x 5,0 = 10%"],
          },
          {
            tag: "C",
            cells: ["A licao", "O DuPont mostra de onde vem o retorno: margem, giro ou alavancagem"],
          },
        ],
        closing:
          "A formula DuPont abre o ROE em tres motores: margem, giro e alavancagem. Dois ROEs iguais podem ter motores diferentes.",
        chart: {
          caption: "DuPont da Aurora",
          valueLabel: "Valor",
          data: [
            { name: "Margem %", value: 8 },
            { name: "Giro", value: 0.625 },
            { name: "Multiplicador", value: 2.67 },
            { name: "ROE %", value: 13.3 },
          ],
        },
      },
    },
  ],
};
