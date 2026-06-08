import type { ModuleData } from "@/types/scenario";

export const modulo11: ModuleData = {
  n: 11,
  eyebrow: "Módulo 11 · Aula 11 de 15",
  title: "Análise Integrada: Modelo DuPont",
  subtitle:
    "O DuPont como framework integrador: margem, giro, alavancagem e a decomposição estendida do ROE.",
  intro:
    "O Módulo 11 promove o DuPont de \"mais um índice\" a **framework integrador** da análise. O aluno aplica o modelo do zero, diagnostica qual **driver** explica o desempenho, compara várias empresas pela mesma lente e fecha com o **DuPont estendido de 5 fatores**.",
  scenarios: [
    {
      id: "m11-c1",
      n: 1,
      title: "Aplicação completa do DuPont",
      difficulty: "intermediario",
      concept:
        "O DuPont integra três demonstrações — cada fator vem de um lugar diferente.",
      context:
        "O aluno monta o ROE da Aurora do zero, puxando cada fator da demonstração certa. É a síntese de tudo: margem (DRE), giro (DRE + balanço) e alavancagem (balanço).",
      displayFieldsCaption: "Dados-base da Comercial Aurora S.A.",
      displayFields: [
        { label: "Lucro líquido", value: "R$ 4 mi" },
        { label: "Receita líquida", value: "R$ 50 mi" },
        { label: "Ativo total", value: "R$ 80 mi" },
        { label: "Patrimônio líquido", value: "R$ 30 mi" },
      ],
      displayNote:
        "ROE = Margem × Giro × Alavancagem = 8% × 0,625 × 2,67 = 13,3%.",
      steps: [
        {
          id: "m11-c1-e1",
          label: "Etapa 1 — De onde vem a margem",
          question: "Para montar o DuPont, de onde se extrai a margem líquida?",
          points: 100,
          options: [
            {
              id: "c1e1-a",
              label:
                "Da DRE: lucro líquido dividido pela receita líquida do período.",
              correct: true,
              feedback:
                "Margem é um indicador de fluxo, todo dentro da DRE.",
            },
            {
              id: "c1e1-b",
              label:
                "Do balanço: lucro líquido dividido pelo patrimônio líquido na data.",
              correct: false,
              feedback: "Isso é o ROE, não a margem.",
            },
            {
              id: "c1e1-c",
              label:
                "Do balanço: receita líquida dividida pelo ativo total na data.",
              correct: false,
              feedback: "Isso é o giro do ativo, não a margem.",
            },
          ],
        },
        {
          id: "m11-c1-e2",
          label: "Etapa 2 — De onde vem o giro",
          question: "E o giro do ativo, como se calcula?",
          points: 100,
          options: [
            {
              id: "c1e2-a",
              label:
                "Receita líquida da DRE dividida pelo ativo total do balanço.",
              correct: true,
              feedback:
                "Mistura um fluxo (receita) com um estoque (ativo) — a \"ponte\" entre as duas demonstrações.",
            },
            {
              id: "c1e2-b",
              label:
                "Lucro líquido da DRE dividido pelo ativo total do balanço.",
              correct: false,
              feedback: "Isso é o ROA, não o giro.",
            },
            {
              id: "c1e2-c",
              label:
                "Receita líquida da DRE dividida pelo patrimônio líquido do balanço.",
              correct: false,
              feedback: "A base do giro é o ativo total, não o PL.",
            },
          ],
        },
        {
          id: "m11-c1-e3",
          label: "Etapa 3 — De onde vem a alavancagem",
          question: "O multiplicador de alavancagem é…",
          points: 100,
          options: [
            {
              id: "c1e3-a",
              label:
                "O ativo total dividido pelo patrimônio líquido, ambos do balanço.",
              correct: true,
              feedback:
                "Mede quantas vezes o capital próprio \"comanda\" os ativos.",
            },
            {
              id: "c1e3-b",
              label:
                "O passivo total dividido pelo patrimônio líquido, ambos do balanço.",
              correct: false,
              feedback:
                "Isso é o grau de endividamento (terceiros/próprio); o multiplicador usa o ativo.",
            },
            {
              id: "c1e3-c",
              label: "O ativo total dividido pela receita líquida do período.",
              correct: false,
              feedback: "Isso é o inverso do giro, não a alavancagem.",
            },
          ],
        },
      ],
      resolution: {
        prompt: "O ROE montado",
        columns: ["Fator", "Origem e cálculo"],
        rows: [
          {
            tag: "A",
            cells: ["Margem (DRE)", "LL 4 ÷ Receita 50 = 8%"],
          },
          {
            tag: "B",
            cells: ["Giro (DRE ÷ balanço)", "Receita 50 ÷ Ativo 80 = 0,625"],
          },
          {
            tag: "C",
            cells: [
              "ROE (DuPont)",
              "8% × 0,625 × (Ativo 80 ÷ PL 30 = 2,67) = 13,3%",
            ],
          },
        ],
        closing:
          "O DuPont integra três demonstrações numa equação só. Cada fator vem de um lugar — e juntos explicam o retorno do sócio.",
        chart: {
          caption: "Composição do ROE DuPont da Aurora (índice didático)",
          valueLabel: "Fator",
          data: [
            { name: "Margem", value: 8 },
            { name: "Giro", value: 62.5 },
            { name: "Alavancagem", value: 267 },
          ],
        },
      },
    },
    {
      id: "m11-c2",
      n: 2,
      title: "Identificando os drivers",
      difficulty: "intermediario",
      concept:
        "O DuPont aponta qual fator puxa (ou trava) o desempenho — o driver.",
      context:
        "O ROE da Aurora (13,3%) está abaixo da média do setor (19,2%). O aluno compara fator a fator e diagnostica **onde** está a fraqueza.",
      displayFieldsCaption: "Benchmark de setor",
      displayTable: {
        columns: ["Fator", "Aurora", "Média do setor"],
        rows: [
          ["Margem líquida", "8%", "8%"],
          ["Giro do ativo", "0,625", "1,20"],
          ["Alavancagem", "2,67", "2,00"],
          ["ROE", "13,3%", "19,2%"],
        ],
      },
      steps: [
        {
          id: "m11-c2-e1",
          label: "Etapa 1 — Comparar fator a fator",
          question: "A Aurora tem giro 0,625 e o setor, 1,20. O que isso revela?",
          points: 100,
          options: [
            {
              id: "c2e1-a",
              label:
                "A Aurora gira o ativo bem menos que o setor — usa mais ativo para cada real de venda.",
              correct: true,
              feedback:
                "Ativo \"lento\": muito capital preso para o volume de vendas que gera.",
            },
            {
              id: "c2e1-b",
              label:
                "A Aurora gira o ativo bem mais que o setor — é mais eficiente no uso dos ativos.",
              correct: false,
              feedback: "Invertido: 0,625 é bem menor que 1,20.",
            },
            {
              id: "c2e1-c",
              label:
                "A Aurora gira o ativo igual ao setor — a diferença de ROE vem só da margem.",
              correct: false,
              feedback:
                "Os giros são bem diferentes; e a margem está igual à do setor.",
            },
          ],
        },
        {
          id: "m11-c2-e2",
          label: "Etapa 2 — Identificar o driver da fraqueza",
          question: "O ROE da Aurora está abaixo do setor. Qual o principal culpado?",
          points: 100,
          options: [
            {
              id: "c2e2-a",
              label:
                "O giro baixo: o ativo gira devagar, puxando o ROA e o ROE para baixo.",
              correct: true,
              feedback:
                "Margem em linha, alavancagem até maior — sobra o giro como vilão.",
            },
            {
              id: "c2e2-b",
              label:
                "A margem fraca: a Aurora vende com margem muito menor que a do setor.",
              correct: false,
              feedback: "Falso nos números: a margem é 8% nos dois (igual ao setor).",
            },
            {
              id: "c2e2-c",
              label:
                "A alavancagem baixa: a Aurora usa menos dívida que o setor para crescer.",
              correct: false,
              feedback:
                "Falso: a alavancagem da Aurora (2,67) é maior que a do setor (2,0).",
            },
          ],
        },
        {
          id: "m11-c2-e3",
          label: "Etapa 3 — A compensação",
          question: "Apesar do giro baixo, o ROE não despencou mais. O que segura?",
          points: 100,
          options: [
            {
              id: "c2e3-a",
              label:
                "A alavancagem maior (2,67 vs 2,0): a empresa usa mais dívida para sustentar o retorno.",
              correct: true,
              feedback:
                "Compensa a ineficiência operacional com estrutura de capital — ao custo de mais risco.",
            },
            {
              id: "c2e3-b",
              label:
                "A margem maior: a empresa vende com margem acima da do setor para compensar.",
              correct: false,
              feedback: "A margem é igual à do setor; não há margem extra para compensar.",
            },
            {
              id: "c2e3-c",
              label:
                "O giro maior: a empresa gira o ativo acima do setor em algumas linhas.",
              correct: false,
              feedback: "O giro é justamente a fraqueza; não há giro acima do setor.",
            },
          ],
        },
      ],
      resolution: {
        prompt: "O diagnóstico da Aurora",
        columns: ["Fator", "Diagnóstico (Aurora × setor)"],
        strengthHeader: "Leitura",
        rows: [
          {
            tag: "A",
            cells: ["Margem", "8% × 8% — em linha"],
            strength: "parcial",
            strengthLabel: "par",
          },
          {
            tag: "B",
            cells: ["Giro", "0,625 × 1,20 — ativo lento (ciclo longo, Aula 8)"],
            strength: "fraco",
            strengthLabel: "fraqueza",
          },
          {
            tag: "C",
            cells: ["Alavancagem", "2,67 × 2,0 — mais dívida segura o ROE"],
            strength: "parcial",
            strengthLabel: "risco",
          },
        ],
        closing:
          "O DuPont aponta o dedo. A Aurora não tem problema de margem — tem problema de **giro** e compensa com mais dívida. O driver a atacar é o giro.",
        chart: {
          caption: "Aurora × setor por fator DuPont",
          valueLabel: "índice didático",
          data: [
            { name: "Margem Aurora", value: 8 },
            { name: "Margem setor", value: 8 },
            { name: "Giro Aurora", value: 62.5 },
            { name: "Giro setor", value: 120 },
            { name: "ROE Aurora", value: 13.3 },
            { name: "ROE setor", value: 19.2 },
          ],
        },
      },
    },
    {
      id: "m11-c3",
      n: 3,
      title: "Diagnóstico comparativo",
      difficulty: "avancado",
      concept:
        "Comparar empresas pela margem, giro e alavancagem revela por que ROEs iguais escondem modelos diferentes.",
      context:
        "Três empresas do mesmo setor têm **ROE de 18%** cada. A diretoria de cada uma se acha a melhor. O aluno faz o diagnóstico comparativo.",
      displayTable: {
        columns: ["Empresa", "Margem", "Giro", "ROA", "Alav.", "ROE"],
        rows: [
          ["Varejão (giro)", "3%", "4,0", "12%", "1,5", "18%"],
          ["Premium (margem)", "12%", "1,0", "12%", "1,5", "18%"],
          ["Endividada (alavancagem)", "6%", "1,0", "6%", "3,0", "18%"],
        ],
      },
      steps: [
        {
          id: "m11-c3-e1",
          label: "Etapa 1 — Mesma chegada, caminhos diferentes",
          question:
            "Varejão (M 3%, G 4,0) e Premium (M 12%, G 1,0) têm o mesmo ROA de 12%. Como?",
          points: 100,
          options: [
            {
              id: "c3e1-a",
              label:
                "Caminhos opostos: o Varejão ganha no giro, a Premium ganha na margem.",
              correct: true,
              feedback:
                "3%×4,0 = 12% e 12%×1,0 = 12%: dois modelos de negócio, mesma eficiência de ativo.",
            },
            {
              id: "c3e1-b",
              label:
                "Caminhos iguais: as duas ganham na margem, com giros muito parecidos.",
              correct: false,
              feedback: "Os giros são opostos (4,0 vs 1,0), não parecidos.",
            },
            {
              id: "c3e1-c",
              label:
                "Coincidência: ROA igual com margem e giro diferentes é apenas acaso estatístico.",
              correct: false,
              feedback: "Não é acaso: é o trade-off margem × giro funcionando.",
            },
          ],
        },
        {
          id: "m11-c3-e2",
          label: "Etapa 2 — A terceira empresa",
          question:
            "A Endividada também tem ROE 18%, mas ROA de só 6%. O que sustenta o ROE dela?",
          points: 100,
          options: [
            {
              id: "c3e2-a",
              label:
                "A alavancagem alta (3,0): ela dobra um ROA fraco com muita dívida.",
              correct: true,
              feedback:
                "6% × 3,0 = 18%: o retorno vem da estrutura de capital, não da operação.",
            },
            {
              id: "c3e2-b",
              label:
                "A margem alta: ela vende com margem muito acima das outras duas empresas.",
              correct: false,
              feedback: "A margem dela (6%) não é a maior das três.",
            },
            {
              id: "c3e2-c",
              label:
                "O giro alto: ela gira o ativo muito acima das outras duas empresas.",
              correct: false,
              feedback:
                "O giro dela (1,0) é igual ao da Premium, bem abaixo do Varejão.",
            },
          ],
        },
        {
          id: "m11-c3-e3",
          label: "Etapa 3 — O diagnóstico de risco",
          question: "As três têm ROE 18%. Qual a leitura comparativa correta?",
          points: 100,
          options: [
            {
              id: "c3e3-a",
              label:
                "Varejão e Premium são igualmente eficientes (ROA 12%); a Endividada é mais arriscada.",
              correct: true,
              feedback:
                "Mesmo ROE, mas a Endividada depende de dívida para compensar metade da eficiência.",
            },
            {
              id: "c3e3-b",
              label:
                "A Endividada é a melhor, pois alcança o mesmo ROE com a maior alavancagem.",
              correct: false,
              feedback: "Maior alavancagem é mais risco, não mérito.",
            },
            {
              id: "c3e3-c",
              label:
                "As três são equivalentes, pois o ROE final de 18% é idêntico para todas.",
              correct: false,
              feedback: "ROE igual com ROA e alavancagem diferentes não é equivalência.",
            },
          ],
        },
      ],
      resolution: {
        prompt: "Três rotas para 18%",
        columns: ["Empresa", "Decomposição (M × G × A)"],
        strengthHeader: "Diagnóstico",
        rows: [
          {
            tag: "A",
            cells: ["Varejão", "3% × 4,0 × 1,5 = 18% (motor: giro)"],
            strength: "forte",
            strengthLabel: "eficiente",
          },
          {
            tag: "B",
            cells: ["Premium", "12% × 1,0 × 1,5 = 18% (motor: margem)"],
            strength: "forte",
            strengthLabel: "eficiente",
          },
          {
            tag: "C",
            cells: ["Endividada", "6% × 1,0 × 3,0 = 18% (motor: alavancagem)"],
            strength: "fraco",
            strengthLabel: "arriscada",
          },
        ],
        closing:
          "O mesmo ROE de 18% esconde três modelos. Margem e giro são **eficiência operacional** (ROA); a alavancagem é **estrutura de capital** (risco).",
        chart: {
          caption: "ROA e alavancagem por empresa",
          valueLabel: "índice didático",
          data: [
            { name: "ROA Varejão", value: 12 },
            { name: "ROA Premium", value: 12 },
            { name: "ROA Endividada", value: 6 },
            { name: "Alav. Varejão", value: 150 },
            { name: "Alav. Premium", value: 150 },
            { name: "Alav. Endividada", value: 300 },
          ],
        },
      },
    },
    {
      id: "m11-c4",
      n: 4,
      title: "Decomposição estendida do ROE",
      difficulty: "super",
      concept:
        "O DuPont de 5 fatores abre a margem líquida e revela onde a rentabilidade se perde.",
      context:
        "A margem líquida da Aurora é 8%, mas a operacional é 14%. Para onde foram os 6 pontos? O aluno usa o **DuPont estendido**.",
      displayTable: {
        columns: ["Fator", "Cálculo", "Valor"],
        rows: [
          ["Margem operacional", "EBIT ÷ Receita = 7 ÷ 50", "14%"],
          ["Carga de juros", "LAIR ÷ EBIT = 5,5 ÷ 7", "0,786"],
          ["Carga tributária", "LL ÷ LAIR = 4 ÷ 5,5", "0,727"],
          ["Giro do ativo", "Receita ÷ Ativo = 50 ÷ 80", "0,625"],
          ["Alavancagem", "Ativo ÷ PL = 80 ÷ 30", "2,67"],
          ["ROE", "produto dos cinco fatores", "13,3%"],
        ],
      },
      steps: [
        {
          id: "m11-c4-e1",
          label: "Etapa 1 — Os cinco fatores",
          question: "No DuPont estendido, quais três fatores substituem a margem líquida?",
          points: 100,
          options: [
            {
              id: "c4e1-a",
              label: "Margem operacional, carga de juros e carga tributária.",
              correct: true,
              feedback:
                "Abrem a margem líquida mostrando o efeito de operação, juros e impostos.",
            },
            {
              id: "c4e1-b",
              label: "Margem bruta, despesas de vendas e despesas administrativas.",
              correct: false,
              feedback: "São linhas da DRE, não os fatores do DuPont estendido.",
            },
            {
              id: "c4e1-c",
              label: "Giro, alavancagem e cobertura de juros da dívida onerosa.",
              correct: false,
              feedback:
                "Giro e alavancagem já são fatores do DuPont; não substituem a margem.",
            },
          ],
        },
        {
          id: "m11-c4-e2",
          label: "Etapa 2 — Para onde foi a margem",
          question:
            "A margem operacional é 14%, mas a líquida é 8%. O que consumiu os 6 pontos?",
          points: 100,
          options: [
            {
              id: "c4e2-a",
              label:
                "Os juros (carga 0,786) e os impostos (carga 0,727), aplicados depois do EBIT.",
              correct: true,
              feedback:
                "14% × 0,786 × 0,727 = 8%: a operação rende 14%, mas só 8% chega ao sócio.",
            },
            {
              id: "c4e2-b",
              label: "O custo das mercadorias vendidas, descontado logo no topo da DRE.",
              correct: false,
              feedback:
                "O CMV vem antes; ele já está embutido na margem operacional de 14%.",
            },
            {
              id: "c4e2-c",
              label:
                "As despesas de vendas e administrativas, já contidas na margem operacional.",
              correct: false,
              feedback: "Essas já foram descontadas para chegar aos 14%.",
            },
          ],
        },
        {
          id: "m11-c4-e3",
          label: "Etapa 3 — Ler a carga de juros",
          question: "A carga de juros da Aurora é 0,786. O que isso significa?",
          points: 100,
          options: [
            {
              id: "c4e3-a",
              label:
                "Após pagar os juros, sobram ~79% do resultado operacional (antes dos impostos).",
              correct: true,
              feedback:
                "É a fração do EBIT que sobrevive aos juros — quanto mais perto de 1, menos peso da dívida.",
            },
            {
              id: "c4e3-b",
              label:
                "Os juros consomem ~79% do resultado operacional da empresa no período.",
              correct: false,
              feedback:
                "Invertido: 0,786 é o que sobra, não o que é consumido (consome ~21%).",
            },
            {
              id: "c4e3-c",
              label:
                "A empresa paga 0,786 vez o resultado operacional em juros ao ano.",
              correct: false,
              feedback:
                "Não é um múltiplo de pagamento; é a fração do EBIT que resta.",
            },
          ],
        },
      ],
      resolution: {
        prompt: "O DuPont estendido da Aurora",
        columns: ["Bloco", "Decomposição"],
        rows: [
          {
            tag: "A",
            cells: ["Margem operacional", "EBIT 7 ÷ Receita 50 = 14%"],
          },
          {
            tag: "B",
            cells: [
              "Erosão (juros + impostos)",
              "× 0,786 (juros) × 0,727 (impostos) = margem líquida 8%",
            ],
          },
          {
            tag: "C",
            cells: [
              "ROE completo",
              "14% × 0,786 × 0,727 × 0,625 (giro) × 2,67 (alav.) = 13,3%",
            ],
          },
        ],
        closing:
          "O DuPont estendido mostra **onde** a rentabilidade se forma e se perde. A Aurora gera 14% de margem operacional, mas juros e impostos a reduzem a 8% de margem líquida.",
        chart: {
          caption: "Erosão da margem no DuPont estendido",
          valueLabel: "margem",
          data: [
            { name: "Margem operacional", value: 14 },
            { name: "Margem líquida", value: 8 },
            { name: "ROE", value: 13.3 },
          ],
        },
      },
    },
  ],
};
