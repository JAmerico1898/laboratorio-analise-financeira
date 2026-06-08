import type { ModuleData } from "@/types/scenario";

export const modulo15: ModuleData = {
  n: 15,
  eyebrow: "Módulo 15 · Aula 15 de 15",
  title: "Estudo de Caso Integrado e Revisão Geral",
  subtitle:
    "O Caso Meridiano: das demonstrações isoladas ao diagnóstico e à recomendação fundamentada.",
  intro:
    "O Módulo 15 consolida o curso inteiro em **um único estudo de caso**. Você recebe o dossiê da **Meridiano Indústria S.A.** e conduz uma análise financeira do começo ao fim, organizada em quatro Atos que culminam num relatório de análise financeira.",
  scenarios: [
    {
      id: "m15-c1",
      n: 1,
      title: "Leitura integrada das demonstrações",
      difficulty: "intermediario",
      concept:
        "Ler BP, DRE e DFC em conjunto revela o que cada uma esconde sozinha.",
      context:
        "A **Meridiano Indústria S.A.** é uma fabricante de bens de consumo. A receita cresceu, mas o lucro, o caixa e a estrutura de capital contam uma história diferente. Valores em R$ milhões; A2 é o ano atual e A1, o anterior.",
      displayFieldsCaption: "Dossiê Meridiano · destaques do Ato 1",
      displayTable: {
        columns: ["Indicador", "A2", "A1", "Leitura"],
        rows: [
          ["Receita líquida", "300", "250", "+20%"],
          ["EBIT", "36", "36", "0%"],
          ["Lucro líquido", "14", "17,5", "−20%"],
          ["Margem operacional", "12,0%", "14,4%", "Caindo"],
          ["Caixa operacional (FCO)", "(9)", "—", "Negativo apesar do lucro"],
          ["Caixa", "12", "20", "Caindo"],
          ["Dívida onerosa", "138", "105", "Subindo"],
        ],
      },
      displayNote:
        "DRE: a margem cai. DFC: o caixa operacional é negativo. BP: a dívida cresce para tapar o buraco.",
      steps: [
        {
          id: "m15-c1-e1",
          label: "Etapa 1 — Receita contra lucro (AH)",
          question:
            "A receita subiu +20% (250→300), mas o lucro caiu −20% (17,5→14). O que a análise horizontal revela?",
          points: 100,
          options: [
            {
              id: "c1e1-a",
              label:
                "Crescimento que não chega ao resultado: as margens se comprimiram no caminho.",
              correct: true,
              feedback:
                "MB 36,8%→34% e margem op 14,4%→12% explicam a queda.",
            },
            {
              id: "c1e1-b",
              label:
                "Crescimento saudável: receita e lucro evoluíram juntos no mesmo período.",
              correct: false,
              feedback:
                "Evoluíram em direções opostas — receita sobe, lucro cai.",
            },
            {
              id: "c1e1-c",
              label:
                "Erro de cálculo: receita maior sempre produz lucro maior na mesma proporção.",
              correct: false,
              feedback:
                "Não há proporção fixa; margem e despesas mudam o resultado.",
            },
          ],
        },
        {
          id: "m15-c1-e2",
          label: "Etapa 2 — O lucro contra o caixa (DFC)",
          question:
            "A Meridiano lucrou R$ 14 mi, mas o FCO foi negativo em R$ 9 mi. Qual é a leitura integrada?",
          points: 100,
          options: [
            {
              id: "c1e2-a",
              label:
                "O lucro não virou caixa: o capital de giro consumiu recursos e elevou os accruals.",
              correct: true,
              feedback:
                "A diferença LL − FCO é 23; recebíveis e estoques cresceram e prenderam caixa.",
            },
            {
              id: "c1e2-b",
              label:
                "O caixa operacional confirma o lucro e mostra forte conversão do resultado.",
              correct: false,
              feedback:
                "O FCO é negativo; portanto, contradiz a aparência positiva do lucro.",
            },
            {
              id: "c1e2-c",
              label:
                "A diferença é irrelevante, pois lucro e caixa medem exatamente a mesma coisa.",
              correct: false,
              feedback:
                "Lucro segue competência; caixa mostra a movimentação financeira efetiva.",
            },
          ],
        },
        {
          id: "m15-c1-e3",
          label: "Etapa 3 — O caixa contra o balanço (BP)",
          question:
            "Com FCO de −9, investimento de −18 e dividendos de −14, como a Meridiano financiou o período?",
          points: 100,
          options: [
            {
              id: "c1e3-a",
              label:
                "Com mais dívida: os empréstimos subiram de 105 para 138 e evitaram uma queda maior do caixa.",
              correct: true,
              feedback:
                "A captação líquida sustenta investimentos e dividendos enquanto a operação consome caixa.",
            },
            {
              id: "c1e3-b",
              label:
                "Com a geração operacional: o FCO positivo financiou investimentos e dividendos.",
              correct: false,
              feedback:
                "O FCO foi negativo em 9; a operação não financiou as saídas.",
            },
            {
              id: "c1e3-c",
              label:
                "Com redução do endividamento: a empresa pagou empréstimos e preservou o caixa.",
              correct: false,
              feedback:
                "O endividamento aumentou em 33 e o caixa caiu de 20 para 12.",
            },
          ],
        },
      ],
      resolution: {
        prompt: "A leitura integrada da Meridiano",
        columns: ["Demonstração", "O que revela"],
        rows: [
          {
            tag: "A",
            cells: [
              "DRE",
              "Receita +20%, mas EBIT 0% e lucro −20% (margens comprimem)",
            ],
          },
          {
            tag: "B",
            cells: [
              "DFC",
              "Lucro 14 versus FCO −9: diferença 23 (capital de giro consome caixa)",
            ],
          },
          {
            tag: "C",
            cells: [
              "BP",
              "Dívida 105 → 138 tapou o buraco (alavancagem subindo)",
            ],
          },
        ],
        closing:
          "Isoladas, as demonstrações enganam; **juntas, denunciam**. A DRE mostra a margem caindo; a DFC, o caixa sumindo; o BP, a dívida crescendo. Esta é a leitura integrada.",
      },
    },
    {
      id: "m15-c2",
      n: 2,
      title: "Riscos e oportunidades",
      difficulty: "intermediario",
      concept:
        "Toda empresa tem os dois lados; a análise separa o que anima do que preocupa.",
      context:
        "A demanda pelos produtos da Meridiano está aquecida, mas o crescimento exige uma leitura crítica. O Ato 2 separa a oportunidade comercial dos riscos financeiros e dos alertas de qualidade do lucro.",
      displayFieldsCaption: "Dossiê Meridiano · riscos e oportunidades",
      displayTable: {
        columns: ["Indicador", "A2", "A1", "Leitura"],
        rows: [
          ["Receita líquida", "300", "250", "+20%"],
          ["Liquidez seca", "0,78", "0,78", "Abaixo de 1"],
          ["Dívida líquida ÷ EBITDA", "2,52x", "1,77x", "Piorando"],
          ["Cobertura de juros (EBIT)", "2,25x", "3,27x", "Piorando"],
          ["Contas a receber", "75", "50", "+50%"],
          ["Ganho não recorrente", "4", "0", "Infla o lucro A2"],
          ["Accruals (LL − FCO)", "23", "—", "Altíssimo"],
        ],
      },
      steps: [
        {
          id: "m15-c2-e1",
          label: "Etapa 1 — A oportunidade",
          question: "Qual é a principal oportunidade no caso Meridiano?",
          points: 100,
          options: [
            {
              id: "c2e1-a",
              label:
                "A demanda: a receita cresce +20%, sinal de mercado aquecido para seus produtos.",
              correct: true,
              feedback:
                "Topo de linha crescendo é o ativo estratégico a preservar.",
            },
            {
              id: "c2e1-b",
              label:
                "A dívida: o aumento do endividamento mostra acesso fácil e barato a crédito.",
              correct: false,
              feedback:
                "Mais dívida aqui é risco, não oportunidade — os juros subiram.",
            },
            {
              id: "c2e1-c",
              label:
                "O dividendo: distribuir 100% do lucro atrai investidores em busca de renda.",
              correct: false,
              feedback:
                "Payout de 100% com caixa negativo é insustentável, não atrativo.",
            },
          ],
        },
        {
          id: "m15-c2-e2",
          label: "Etapa 2 — O risco central",
          question: "E o risco mais sério do caso?",
          points: 100,
          options: [
            {
              id: "c2e2-a",
              label:
                "A combinação margem caindo + caixa negativo + dívida subindo — deterioração financeira.",
              correct: true,
              feedback:
                "Os três se reforçam: menos margem, menos caixa, mais dívida.",
            },
            {
              id: "c2e2-b",
              label:
                "O crescimento da receita, que pressiona a empresa a investir mais do que deveria.",
              correct: false,
              feedback:
                "Crescer receita é a oportunidade, não o risco central.",
            },
            {
              id: "c2e2-c",
              label:
                "A liquidez corrente acima de 1, que prende capital desnecessário em ativos.",
              correct: false,
              feedback:
                "Liquidez 1,31 não é o risco; a seca (0,78) e o caixa, sim.",
            },
          ],
        },
        {
          id: "m15-c2-e3",
          label: "Etapa 3 — O alerta de qualidade do lucro",
          question:
            "Que sinal de alerta de qualidade do lucro aparece no caso?",
          points: 100,
          options: [
            {
              id: "c2e3-a",
              label:
                "Recebíveis +50% (vs receita +20%) e um ganho não recorrente inflando o lucro.",
              correct: true,
              feedback:
                "Recebíveis crescendo mais que a receita e lucro com item único: dois flags.",
            },
            {
              id: "c2e3-b",
              label:
                "Estoques estáveis e ausência de itens não recorrentes no resultado do ano.",
              correct: false,
              feedback:
                "Falso: estoques cresceram +33% e há ganho não recorrente de 4.",
            },
            {
              id: "c2e3-c",
              label:
                "FCO muito acima do lucro, indicando reconhecimento conservador de receita.",
              correct: false,
              feedback:
                "Invertido: o FCO está bem abaixo do lucro (negativo).",
            },
          ],
        },
      ],
      resolution: {
        prompt: "O balanço de riscos e oportunidades",
        columns: ["Eixo", "Achado"],
        strengthHeader: "Leitura",
        rows: [
          {
            tag: "A",
            cells: ["Oportunidade", "Receita +20% — demanda aquecida"],
            strength: "forte",
            strengthLabel: "positivo",
          },
          {
            tag: "B",
            cells: [
              "Risco",
              "Margem ↓, FCO negativo, dívida ↑, cobertura 2,25x",
            ],
            strength: "fraco",
            strengthLabel: "grave",
          },
          {
            tag: "C",
            cells: [
              "Qualidade",
              "Recebíveis +50%, ganho não recorrente 4 (core = 10)",
            ],
            strength: "fraco",
            strengthLabel: "alerta",
          },
        ],
        closing:
          "A Meridiano cresce, mas o crescimento está **destruindo, não criando**, saúde financeira. A oportunidade é real; os riscos, maiores.",
      },
    },
    {
      id: "m15-c3",
      n: 3,
      title: "Revisão geral: o diagnóstico integrado",
      difficulty: "avancado",
      concept:
        "Cruzar DuPont, endividamento e qualidade revela a verdade por trás do ROE.",
      context:
        "O ROE reportado da Meridiano ainda parece atraente. O Ato 3 revisa rentabilidade, recorrência e sustentabilidade para descobrir de onde esse retorno realmente vem.",
      displayFieldsCaption: "Dossiê Meridiano · diagnóstico integrado",
      displayTable: {
        columns: ["Indicador", "A2", "A1", "Tendência"],
        rows: [
          ["Margem líquida", "4,7%", "7,0%", "Caindo"],
          ["Giro do ativo", "1,07", "1,04", "Estável"],
          ["Alavancagem (Ativo ÷ PL)", "3,5", "3,0", "Subindo"],
          ["ROE reportado", "17,5%", "21,9%", "Caindo"],
          ["ROE recorrente", "12,5%", "21,9%", "Caindo forte"],
          ["Payout", "100%", "—", "Agressivo"],
          ["Caixa operacional (FCO)", "(9)", "—", "Negativo"],
        ],
      },
      displayNote:
        "DuPont A2: ML 4,7% × giro 1,07 × alavancagem 3,5 = 17,5%. O ROE é sustentado pela alavancagem.",
      steps: [
        {
          id: "m15-c3-e1",
          label: "Etapa 1 — O ROE enganoso (DuPont)",
          question:
            "O ROE da Meridiano é 17,5% — parece bom. O DuPont desfaz a ilusão. Como?",
          points: 100,
          options: [
            {
              id: "c3e1-a",
              label:
                "O ROE se sustenta na alavancagem crescente (3,0 → 3,5), não na eficiência operacional.",
              correct: true,
              feedback:
                "Margem e ROA caem; o ROE só não desaba porque a dívida subiu.",
            },
            {
              id: "c3e1-b",
              label:
                "O ROE se sustenta na margem, que cresceu e impulsionou o retorno do sócio.",
              correct: false,
              feedback:
                "Falso: a margem líquida caiu de 7% para 4,7%.",
            },
            {
              id: "c3e1-c",
              label:
                "O ROE se sustenta no giro, que disparou e multiplicou o retorno do ativo.",
              correct: false,
              feedback:
                "O giro ficou quase estável (1,04 → 1,07); não explica o ROE.",
            },
          ],
        },
        {
          id: "m15-c3-e2",
          label: "Etapa 2 — O ROE recorrente",
          question:
            "Removendo o ganho não recorrente, o lucro cai de 14 para 10. O que acontece com o ROE?",
          points: 100,
          options: [
            {
              id: "c3e2-a",
              label:
                "Cai para 12,5% — e, com margem e cobertura piorando, a tendência é de mais queda.",
              correct: true,
              feedback:
                "10 ÷ 80 = 12,5%: o retorno \"de verdade\" é bem menor que o de capa.",
            },
            {
              id: "c3e2-b",
              label:
                "Sobe para 21% — o lucro recorrente é sempre maior que o lucro reportado.",
              correct: false,
              feedback:
                "O recorrente é menor: removeu-se um ganho, não se adicionou.",
            },
            {
              id: "c3e2-c",
              label:
                "Não muda — itens não recorrentes não afetam o cálculo do ROE.",
              correct: false,
              feedback:
                "Afetam: o lucro muda, e o ROE é lucro sobre PL.",
            },
          ],
        },
        {
          id: "m15-c3-e3",
          label: "Etapa 3 — A sustentabilidade",
          question:
            "A Meridiano distribuiu 100% do lucro (payout 100%). Isso é sustentável aqui?",
          points: 100,
          options: [
            {
              id: "c3e3-a",
              label:
                "Não: distribuir tudo enquanto o FCO é negativo e a dívida sobe é insustentável.",
              correct: true,
              feedback:
                "Paga dividendos com dinheiro de empréstimo — corrói o capital.",
            },
            {
              id: "c3e3-b",
              label:
                "Sim: distribuir todo o lucro é sempre o uso mais eficiente do resultado.",
              correct: false,
              feedback:
                "Não há \"sempre\"; depende da geração de caixa, aqui negativa.",
            },
            {
              id: "c3e3-c",
              label:
                "Depende só do setor: o payout não tem relação com a geração de caixa.",
              correct: false,
              feedback:
                "Tem relação direta: paga-se dividendo com caixa, não com lucro contábil.",
            },
          ],
        },
      ],
      resolution: {
        prompt: "O diagnóstico integrado",
        columns: ["Lente", "Veredito"],
        rows: [
          {
            tag: "A",
            cells: [
              "DuPont",
              "ROE 17,5% sustentado por alavancagem 3,5 (não por eficiência)",
            ],
          },
          {
            tag: "B",
            cells: ["Recorrência", "ROE recorrente 12,5% e em queda"],
          },
          {
            tag: "C",
            cells: [
              "Sustentabilidade",
              "Payout 100% com FCO negativo e dívida ↑ = insustentável",
            ],
          },
        ],
        closing:
          "A revisão geral cruza tudo. O ROE de capa é uma **miragem**: vem de mais dívida e de um ganho único, não da operação. Por baixo, a empresa se enfraquece.",
        chart: {
          caption: "ROE reportado e recorrente da Meridiano",
          valueLabel: "ROE (%)",
          data: [
            { name: "ROE A1", value: 21.9 },
            { name: "ROE A2 reportado", value: 17.5 },
            { name: "ROE A2 recorrente", value: 12.5 },
          ],
        },
      },
    },
    {
      id: "m15-c4",
      n: 4,
      title: "Relatório final e recomendação",
      difficulty: "super",
      concept:
        "O analista converte o diagnóstico em recomendação fundamentada — que depende de quem pergunta.",
      context:
        "No último Ato, você transforma o dossiê e o diagnóstico acumulado em recomendações separadas para crédito e investimento, encerrando com a frase-síntese do relatório.",
      displayFieldsCaption: "Dossiê Meridiano · base para decisão",
      displayTable: {
        columns: ["Dimensão", "Evidência", "Implicação"],
        rows: [
          ["Crescimento", "Receita +20%", "Demanda aquecida"],
          ["Rentabilidade", "ROE recorrente 12,5%", "Retorno de capa inflado"],
          ["Caixa", "FCO (9)", "Operação consome caixa"],
          ["Crédito", "Cobertura 2,25x", "Capacidade de pagar deteriora"],
          ["Endividamento", "Dívida líquida/EBITDA 2,52x", "Risco crescente"],
          ["Distribuição", "Payout 100%", "Insustentável com FCO negativo"],
        ],
      },
      steps: [
        {
          id: "m15-c4-e1",
          label: "Etapa 1 — Recomendação de crédito",
          question:
            "Como analista de crédito (empréstimo de longo prazo), qual a recomendação?",
          points: 100,
          options: [
            {
              id: "c4e1-a",
              label:
                "Negar ou condicionar fortemente: cobertura caindo (2,25x), FCO negativo e dívida subindo.",
              correct: true,
              feedback:
                "A capacidade de pagar se deteriora justamente quando se pede mais dívida.",
            },
            {
              id: "c4e1-b",
              label:
                "Conceder sem ressalvas: a receita crescente garante o pagamento do empréstimo.",
              correct: false,
              feedback:
                "Receita não paga dívida; caixa paga — e o FCO é negativo.",
            },
            {
              id: "c4e1-c",
              label:
                "Conceder pelo ROE alto: 17,5% de retorno sinaliza folga para honrar a dívida.",
              correct: false,
              feedback:
                "O ROE é do sócio e está inflado por alavancagem e item único.",
            },
          ],
        },
        {
          id: "m15-c4-e2",
          label: "Etapa 2 — Recomendação de investimento",
          question: "Como analista de investimento, qual a recomendação?",
          points: 100,
          options: [
            {
              id: "c4e2-a",
              label:
                "Não investir agora: o retorno de capa esconde margem caindo, caixa negativo e lucro de baixa qualidade.",
              correct: true,
              feedback:
                "O ROE recorrente (12,5%) e a tendência negativa não compensam o risco.",
            },
            {
              id: "c4e2-b",
              label:
                "Investir pelo crescimento: receita +20% garante a valorização das ações.",
              correct: false,
              feedback:
                "Crescimento que não vira caixa nem lucro recorrente não cria valor.",
            },
            {
              id: "c4e2-c",
              label:
                "Investir pelo dividendo: o payout de 100% assegura renda alta e estável.",
              correct: false,
              feedback:
                "Dividendo pago com dívida não é estável; é uma bandeira vermelha.",
            },
          ],
        },
        {
          id: "m15-c4-e3",
          label: "Etapa 3 — A frase-síntese do relatório",
          question: "Qual a conclusão mais honesta para o relatório?",
          points: 100,
          options: [
            {
              id: "c4e3-a",
              label:
                "\"Crescimento de receita que não cria valor: margem, caixa e endividamento pioram.\"",
              correct: true,
              feedback:
                "Captura a tese central do caso sem exagero para nenhum lado.",
            },
            {
              id: "c4e3-b",
              label:
                "\"Empresa em franca expansão e plena saúde financeira, sem pontos de atenção.\"",
              correct: false,
              feedback:
                "Otimista demais: ignora caixa, margem e alavancagem.",
            },
            {
              id: "c4e3-c",
              label:
                "\"Empresa falida e sem operação, recomendada apenas para liquidação imediata.\"",
              correct: false,
              feedback:
                "Pessimista demais: a empresa opera, vende e gera EBIT.",
            },
          ],
        },
      ],
      resolution: {
        prompt: "A recomendação consolidada",
        columns: ["Decisor", "Recomendação"],
        strengthHeader: "Veredito",
        rows: [
          {
            tag: "A",
            cells: [
              "Crédito",
              "Negar / condicionar: capacidade de pagar deteriorando",
            ],
            strength: "fraco",
            strengthLabel: "não",
          },
          {
            tag: "B",
            cells: [
              "Investimento",
              "Não investir: retorno de capa, qualidade baixa",
            ],
            strength: "fraco",
            strengthLabel: "não",
          },
          {
            tag: "C",
            cells: [
              "Síntese",
              "Crescimento que não cria valor — monitorar margem e caixa",
            ],
            strength: "parcial",
            strengthLabel: "tese",
          },
        ],
        closing:
          "Este é o produto final do analista — e do curso. Um relatório que parte das demonstrações, atravessa todas as dimensões, separa risco de oportunidade e termina numa **recomendação clara**, ciente de para quem ela é dada. O aluno começou aprendendo quem lê as demonstrações e termina escrevendo um relatório que decide a partir delas.",
      },
    },
  ],
};
