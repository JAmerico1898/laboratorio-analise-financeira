import type { ModuleData } from "@/types/scenario";

export const modulo14: ModuleData = {
  n: 14,
  eyebrow: "Módulo 14 · Aula 14 de 15",
  title: "Análise Financeira para Tomada de Decisão",
  subtitle:
    "Da análise à decisão: crédito, investimento, desempenho e a ótica de cada usuário.",
  intro:
    "O Módulo 14 coloca o aluno na cadeira do decisor. Toda a caixa de ferramentas do curso — liquidez, endividamento, rentabilidade, qualidade do lucro — é convocada para tomar **decisões reais**.",
  scenarios: [
    {
      id: "m14-c1",
      n: 1,
      title: "Decisão de crédito",
      difficulty: "intermediario",
      concept:
        "O analista de crédito avalia a capacidade de pagar — não a rentabilidade.",
      context:
        "Você é analista de crédito de um banco. A **Comercial Aurora** pede um empréstimo de R$ 10 mi para capital de giro. Use o painel dela para decidir.",
      displayTable: {
        columns: ["Dimensão", "Indicador", "Leitura"],
        rows: [
          ["Liquidez", "Corrente 1,52 · Seca 0,96", "Cobre, mas depende de estoque (apertada)"],
          ["Endividamento", "Dív. líq./EBITDA 3,2x · Cobertura 4,7x", "Moderado, mas bem coberto"],
          ["Rentabilidade", "ROE 13,3% · ROA 5% · giro 0,625", "Modesta, limitada pelo giro"],
          ["Qualidade do lucro", "FCO converge ao lucro no tempo", "Lucro honesto, lastreado em caixa"],
        ],
      },
      steps: [
        {
          id: "m14-c1-e1",
          label: "Etapa 1 — O foco do crédito",
          question: "Como analista de crédito, qual é a sua pergunta central sobre a Aurora?",
          points: 100,
          options: [
            {
              id: "c1e1-a",
              label:
                "A empresa gera caixa suficiente para honrar os juros e o principal do empréstimo?",
              correct: true,
              feedback:
                "O credor é remunerado por juros; o que importa é receber de volta.",
            },
            {
              id: "c1e1-b",
              label:
                "A empresa oferece o maior retorno possível sobre o capital dos seus sócios?",
              correct: false,
              feedback: "Isso é a pergunta do investidor (ROE), não do credor.",
            },
            {
              id: "c1e1-c",
              label:
                "A empresa tem a maior margem de lucro entre todas as concorrentes do setor?",
              correct: false,
              feedback:
                "Margem alta é boa, mas não é o critério direto da capacidade de pagar.",
            },
          ],
        },
        {
          id: "m14-c1-e2",
          label: "Etapa 2 — O indicador-chave",
          question: "Qual indicador é o mais direto para julgar a capacidade de pagar os juros?",
          points: 100,
          options: [
            {
              id: "c1e2-a",
              label:
                "A cobertura de juros (4,7x): o resultado operacional cobre bem o serviço da dívida.",
              correct: true,
              feedback: "Mede diretamente quantas vezes o EBIT paga os juros.",
            },
            {
              id: "c1e2-b",
              label:
                "A margem líquida (8%): mostra quanto sobra de cada real de receita vendida.",
              correct: false,
              feedback: "É relevante, mas não mede a folga para pagar os juros.",
            },
            {
              id: "c1e2-c",
              label:
                "O ROE (13,3%): mostra o retorno gerado sobre o capital próprio dos sócios.",
              correct: false,
              feedback: "É a métrica do acionista, não do credor.",
            },
          ],
        },
        {
          id: "m14-c1-e3",
          label: "Etapa 3 — A decisão",
          question:
            "Com cobertura 4,7x, mas liquidez seca abaixo de 1 e giro lento, qual a decisão equilibrada?",
          points: 100,
          options: [
            {
              id: "c1e3-a",
              label:
                "Conceder com condições: garantias e covenants que monitorem o capital de giro.",
              correct: true,
              feedback: "A capacidade existe; as fraquezas pedem proteção, não recusa.",
            },
            {
              id: "c1e3-b",
              label:
                "Negar de imediato: qualquer liquidez seca abaixo de 1 inviabiliza o crédito.",
              correct: false,
              feedback:
                "Rígido demais: a cobertura e a qualidade do caixa compensam o ponto fraco.",
            },
            {
              id: "c1e3-c",
              label:
                "Conceder sem ressalvas: a cobertura confortável basta, dispensando garantias.",
              correct: false,
              feedback: "Frouxo demais: ignora o giro lento e a liquidez apertada.",
            },
          ],
        },
      ],
      resolution: {
        prompt: "O parecer de crédito",
        columns: ["Eixo", "Avaliação"],
        rows: [
          { tag: "A", cells: ["A favor", "Cobertura 4,7x e lucro que converte em caixa no tempo"] },
          { tag: "B", cells: ["Atenção", "Liquidez seca < 1 e giro lento pressionam o curto prazo"] },
          { tag: "C", cells: ["Decisão", "Conceder com covenants de capital de giro e acompanhamento"] },
        ],
        closing:
          "O analista de crédito não busca o sim ou o não fácil — busca **proteger o principal**. A Aurora é financiável, desde que monitorada onde é fraca: o giro.",
      },
    },
    {
      id: "m14-c2",
      n: 2,
      title: "Decisão de investimento",
      difficulty: "intermediario",
      concept:
        "O investidor busca retorno sustentável — e a qualidade do lucro pesa mais que o lucro de capa.",
      context:
        "Você é analista de um fundo e deve escolher entre investir na **Aurora** (sólida, crescimento modesto) ou na **Fênix** (lucro crescendo rápido). Qual recomendar?",
      displayTable: {
        columns: ["Empresa", "Indicador", "Leitura"],
        rows: [
          ["Fênix", "+140% (5 → 12 em 2 anos)", "Espetacular na capa"],
          ["Fênix", "FCO 4 → 0 · accruals 1 → 12", "Baixíssima: lucro sem caixa"],
          ["Aurora", "ROE 13,3% · FCO converge ao lucro", "Retorno modesto, mas lastreado em caixa"],
        ],
      },
      steps: [
        {
          id: "m14-c2-e1",
          label: "Etapa 1 — O foco do investimento",
          question: "Como analista de investimento, qual é a sua pergunta central?",
          points: 100,
          options: [
            {
              id: "c2e1-a",
              label:
                "A empresa gera retorno sustentável e de qualidade para remunerar o meu capital?",
              correct: true,
              feedback:
                "O acionista quer retorno que se repita e cresça, não um lance único.",
            },
            {
              id: "c2e1-b",
              label:
                "A empresa consegue pagar as parcelas do empréstimo nos próximos doze meses?",
              correct: false,
              feedback: "Essa é a ótica do credor, não do investidor.",
            },
            {
              id: "c2e1-c",
              label:
                "A empresa tem o menor endividamento possível entre as opções disponíveis?",
              correct: false,
              feedback: "Dívida baixa não é o objetivo; retorno sustentável é.",
            },
          ],
        },
        {
          id: "m14-c2-e2",
          label: "Etapa 2 — A armadilha do lucro de capa",
          question:
            "A Fênix tem lucro crescendo +140%; a Aurora, modesto. Por que não escolher a Fênix de imediato?",
          points: 100,
          options: [
            {
              id: "c2e2-a",
              label:
                "Porque o lucro da Fênix não vira caixa (accruals altos) — crescimento de baixa qualidade.",
              correct: true,
              feedback: "Lucro espetacular sem caixa tende a reverter (Aula 13).",
            },
            {
              id: "c2e2-b",
              label:
                "Porque a Fênix tem margem menor, e a margem é o único critério de investimento.",
              correct: false,
              feedback:
                "A margem não é o único critério; a qualidade do lucro é decisiva aqui.",
            },
            {
              id: "c2e2-c",
              label:
                "Porque a Fênix é maior, e empresas maiores sempre rendem menos aos acionistas.",
              correct: false,
              feedback: "Tamanho não determina retorno; o problema da Fênix é a qualidade.",
            },
          ],
        },
        {
          id: "m14-c2-e3",
          label: "Etapa 3 — A recomendação",
          question: "Integrando rentabilidade e qualidade, qual a recomendação mais defensável?",
          points: 100,
          options: [
            {
              id: "c2e3-a",
              label:
                "Preferir a Aurora: retorno menor, porém sustentável e respaldado em caixa.",
              correct: true,
              feedback: "Retorno honesto e repetível vence crescimento sem lastro.",
            },
            {
              id: "c2e3-b",
              label:
                "Preferir a Fênix: o maior crescimento de lucro garante o maior retorno futuro.",
              correct: false,
              feedback: "Cai na armadilha: o crescimento da Fênix é artificial.",
            },
            {
              id: "c2e3-c",
              label:
                "Rejeitar as duas: nenhuma empresa com dívida é um bom investimento de ações.",
              correct: false,
              feedback: "Dívida moderada não desqualifica um investimento.",
            },
          ],
        },
      ],
      resolution: {
        prompt: "O parecer de investimento",
        columns: ["Empresa", "Leitura do investidor"],
        strengthHeader: "Decisão",
        rows: [
          {
            tag: "A",
            cells: ["Fênix (capa)", "Lucro +140%, mas FCO → 0 e accruals explodindo"],
            strength: "fraco",
            strengthLabel: "armadilha",
          },
          {
            tag: "B",
            cells: ["Aurora (substância)", "ROE 13,3% modesto, mas lucro que converte em caixa"],
            strength: "forte",
            strengthLabel: "sólida",
          },
          {
            tag: "C",
            cells: ["Recomendação", "Investir na Aurora; a Fênix é uma armadilha de crescimento"],
            strength: "parcial",
            strengthLabel: "decisão",
          },
        ],
        closing:
          "O investidor experiente desconfia do lucro espetacular. Retorno **sustentável e de qualidade** vence crescimento sem caixa.",
        chart: {
          caption: "Fênix × Aurora: retorno e qualidade",
          valueLabel: "índice didático",
          data: [
            { name: "Fênix lucro", value: 140 },
            { name: "Fênix caixa", value: 0 },
            { name: "Aurora ROE", value: 13.3 },
            { name: "Aurora qualidade", value: 80 },
          ],
        },
      },
    },
    {
      id: "m14-c3",
      n: 3,
      title: "Avaliação integrada de desempenho",
      difficulty: "avancado",
      concept:
        "Avaliar desempenho exige integrar múltiplas dimensões num quadro coerente — nenhuma sozinha decide.",
      context:
        "A diretoria da Aurora pede um \"boletim\" de desempenho. O aluno monta um **scorecard** integrando liquidez, rentabilidade, endividamento, qualidade do lucro e crescimento.",
      steps: [
        {
          id: "m14-c3-e1",
          label: "Etapa 1 — Por que integrar",
          question:
            "Por que avaliar desempenho exige integrar várias dimensões, em vez de olhar um índice só?",
          points: 100,
          options: [
            {
              id: "c3e1-a",
              label:
                "Porque cada dimensão revela um aspecto; juntas evitam conclusões enganosas de um número isolado.",
              correct: true,
              feedback: "Um índice ótimo pode esconder uma fraqueza grave em outra dimensão.",
            },
            {
              id: "c3e1-b",
              label:
                "Porque um único índice bem escolhido já resume todo o desempenho da empresa.",
              correct: false,
              feedback: "Nenhum índice resume tudo; o curso inteiro mostrou os limites de cada um.",
            },
            {
              id: "c3e1-c",
              label:
                "Porque mais índices sempre significam uma análise automaticamente mais correta.",
              correct: false,
              feedback: "O que importa é a coerência do conjunto, não a quantidade de índices.",
            },
          ],
        },
        {
          id: "m14-c3-e2",
          label: "Etapa 2 — Força e fraqueza",
          question: "No scorecard da Aurora, qual é o par força/fraqueza mais marcante?",
          points: 100,
          options: [
            {
              id: "c3e2-a",
              label:
                "Força na qualidade do lucro (caixa converge); fraqueza no giro (ativo lento, ciclo longo).",
              correct: true,
              feedback:
                "Resume o curso: lucro honesto, mas ineficiência operacional no uso do ativo.",
            },
            {
              id: "c3e2-b",
              label:
                "Força no giro do ativo (gira rápido); fraqueza na qualidade do lucro (não vira caixa).",
              correct: false,
              feedback: "Invertido: o giro é a fraqueza e a qualidade do lucro é a força.",
            },
            {
              id: "c3e2-c",
              label:
                "Força na liquidez folgada; fraqueza na cobertura de juros, baixa demais.",
              correct: false,
              feedback: "Falso: a liquidez é apertada e a cobertura (4,7x) é confortável.",
            },
          ],
        },
        {
          id: "m14-c3-e3",
          label: "Etapa 3 — A síntese",
          question: "Como sintetizar o desempenho da Aurora sem distorcer?",
          points: 100,
          options: [
            {
              id: "c3e3-a",
              label:
                "Empresa sólida e de lucro honesto, mas operacionalmente ineficiente no uso do ativo.",
              correct: true,
              feedback:
                "Síntese equilibrada: reconhece o forte e o fraco sem exagero.",
            },
            {
              id: "c3e3-b",
              label:
                "Empresa excelente em todas as dimensões, sem nenhum ponto que mereça atenção.",
              correct: false,
              feedback: "Otimista demais: ignora giro, liquidez e crescimento fracos.",
            },
            {
              id: "c3e3-c",
              label:
                "Empresa em crise generalizada, frágil em liquidez, lucro, caixa e rentabilidade.",
              correct: false,
              feedback: "Pessimista demais: o lucro é honesto e a dívida, coberta.",
            },
          ],
        },
      ],
      resolution: {
        prompt: "O boletim da Aurora",
        columns: ["Bloco", "Dimensões"],
        rows: [
          { tag: "A", cells: ["Pontos fortes", "Qualidade do lucro (caixa converge) e cobertura de juros confortável"] },
          { tag: "B", cells: ["Pontos fracos", "Giro baixo, liquidez seca apertada, crescimento real fraco"] },
          { tag: "C", cells: ["Síntese", "Sólida e honesta, mas ineficiente — o desafio central é o giro"] },
        ],
        closing:
          "Avaliar desempenho é tecer dimensões num quadro coerente. A Aurora é sólida e honesta, com um problema claro e endereçável: a **eficiência do ativo**.",
      },
    },
    {
      id: "m14-c4",
      n: 4,
      title: "Crédito × investimento",
      difficulty: "super",
      concept:
        "A mesma empresa, vista para crédito e para investimento, pesa as dimensões de formas diferentes — fechando o arco da Aula 1.",
      context:
        "Dois analistas olham a **mesma Aurora**: um banco (crédito) e um fundo (investimento). Por que podem chegar a vereditos diferentes? O aluno integra tudo e entende as duas óticas.",
      steps: [
        {
          id: "m14-c4-e1",
          label: "Etapa 1 — O que o crédito prioriza",
          question: "Diante da mesma Aurora, o que o analista de crédito prioriza?",
          points: 100,
          options: [
            {
              id: "c4e1-a",
              label:
                "A proteção do principal: capacidade de pagar, cobertura e estabilidade do caixa.",
              correct: true,
              feedback:
                "O credor olha o downside — quer receber de volta, não lucrar com a alta.",
            },
            {
              id: "c4e1-b",
              label:
                "O potencial de valorização: crescimento do lucro e expansão das margens futuras.",
              correct: false,
              feedback: "Isso é o upside, foco do investidor, não do credor.",
            },
            {
              id: "c4e1-c",
              label:
                "A diversificação da carteira: o peso da Aurora no portfólio total do investidor.",
              correct: false,
              feedback: "É uma preocupação de portfólio, não a do analista de crédito.",
            },
          ],
        },
        {
          id: "m14-c4-e2",
          label: "Etapa 2 — O que o investimento prioriza",
          question: "E o analista de investimento, o que prioriza na mesma Aurora?",
          points: 100,
          options: [
            {
              id: "c4e2-a",
              label:
                "O potencial de retorno sustentável: rentabilidade, qualidade do lucro e crescimento.",
              correct: true,
              feedback:
                "O sócio é remunerado pelo resultado e pela valorização — olha o upside.",
            },
            {
              id: "c4e2-b",
              label:
                "A garantia de pagamento: cobertura de juros e covenants que protejam o credor.",
              correct: false,
              feedback: "Essa é a ótica do crédito, não do investidor.",
            },
            {
              id: "c4e2-c",
              label:
                "O prazo de vencimento da dívida: quando o principal será devolvido ao banco.",
              correct: false,
              feedback: "Preocupação do credor; o acionista não tem principal a receber.",
            },
          ],
        },
        {
          id: "m14-c4-e3",
          label: "Etapa 3 — A mesma empresa, dois vereditos",
          question:
            "Como a mesma Aurora pode receber \"sim\" do crédito e um \"talvez\" do investimento?",
          points: 100,
          options: [
            {
              id: "c4e3-a",
              label:
                "Porque ela paga bem suas dívidas (ótimo para o credor), mas rende pouco (morno para o sócio).",
              correct: true,
              feedback: "As mesmas demonstrações respondem a perguntas diferentes.",
            },
            {
              id: "c4e3-b",
              label:
                "Porque um dos dois analistas errou: a mesma empresa deve receber o mesmo veredito.",
              correct: false,
              feedback:
                "Não há erro: óticas diferentes geram decisões diferentes, ambas corretas.",
            },
            {
              id: "c4e3-c",
              label:
                "Porque o crédito e o investimento usam demonstrações financeiras completamente diferentes.",
              correct: false,
              feedback: "As demonstrações são as mesmas; o que muda é o objetivo de quem lê.",
            },
          ],
        },
      ],
      resolution: {
        prompt: "A mesma Aurora, duas decisões",
        columns: ["Decisor", "Veredito e por quê"],
        rows: [
          { tag: "A", cells: ["Crédito (banco)", "Paga bem (cobertura 4,7x, caixa honesto) → aprovar com covenants"] },
          { tag: "B", cells: ["Investimento (fundo)", "Rende pouco (ROE 13,3%, giro lento, crescimento fraco) → morno / passar"] },
          { tag: "C", cells: ["A lição", "As mesmas demonstrações, sob objetivos diferentes, geram decisões diferentes"] },
        ],
        closing:
          "A análise não dá uma resposta única — dá a **resposta certa para a pergunta de cada decisor**. Crédito e investimento olham a mesma empresa e, com razão, decidem diferente.",
      },
    },
  ],
};
