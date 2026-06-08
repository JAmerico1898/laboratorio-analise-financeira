import type { ModuleData } from "@/types/scenario";

/* ═══════════════════════════════════════════════════════════════
   MÓDULO 1 — Introdução à Análise de Demonstrações Financeiras
   Aula 1 · motor de avaliação conceitual (sem cálculo de índices)
   ═══════════════════════════════════════════════════════════════ */

export const modulo1: ModuleData = {
  n: 1,
  eyebrow: "Módulo 1 · Aula 1 de 15",
  title: "Introdução à Análise de Demonstrações Financeiras",
  subtitle: "Quem usa a informação contábil, que decisões ela suporta e quais limites ela tem.",
  intro:
    "Antes de qualquer cálculo de índice, fixamos quem usa a informação contábil, que decisões ela suporta e onde estão seus limites. Em cada cenário você raciocina, escolhe e vê a consequência da escolha.",
  scenarios: [
    /* ─────────────── CENÁRIO 1 ─────────────── */
    {
      id: "m1-c1",
      n: 1,
      title: "O mesmo balanço, três decisões",
      difficulty: "intermediario",
      concept: "Usuários da informação contábil e a pergunta central de cada um.",
      context:
        "A **Comercial Aurora S.A.** divulgou suas demonstrações anuais. Três usuários recebem exatamente os mesmos números: um **investidor** avaliando comprar ações, um **banco** avaliando conceder um empréstimo e o **gestor** financeiro planejando o próximo ano. No papel de analista, você percorre a lógica de cada um e descobre por que a mesma informação leva a perguntas diferentes.",
      displayFieldsCaption: "Números mostrados ao aluno",
      displayFields: [
        { label: "Receita líquida", value: "R$ 50,0 mi" },
        { label: "Lucro líquido", value: "R$ 4,0 mi" },
        { label: "EBITDA", value: "R$ 9,0 mi" },
        { label: "Ativo total", value: "R$ 80,0 mi" },
        { label: "Patrimônio líquido", value: "R$ 30,0 mi" },
        { label: "Dívida onerosa total", value: "R$ 35,0 mi" },
        { label: "Caixa e equivalentes", value: "R$ 6,0 mi" },
      ],
      displayNote:
        "Referências derivadas (citadas na resolução): margem líquida 8%, ROE ≈ 13%, Dívida líquida/EBITDA ≈ 3,2x.",
      steps: [
        {
          id: "m1-c1-e1",
          label: "Etapa 1 — A pergunta do investidor (acionista)",
          question: "Qual é a pergunta central que orienta um investidor que pondera comprar ações?",
          points: 100,
          options: [
            {
              id: "c1e1-a",
              label: "“O lucro e o caixa gerados remuneram bem o capital próprio e tendem a crescer?”",
              correct: true,
              feedback:
                "O acionista é remunerado pelo resíduo (lucro/dividendos) e pela valorização — foco em rentabilidade e crescimento.",
            },
            {
              id: "c1e1-b",
              label: "“A empresa paga as parcelas do empréstimo nos próximos 12 meses?”",
              correct: false,
              feedback: "Essa é a preocupação do credor, não do sócio.",
            },
            {
              id: "c1e1-c",
              label: "“Como cortar o custo do setor de logística no próximo trimestre?”",
              correct: false,
              feedback: "Pergunta gerencial interna, fora do alcance do investidor externo.",
            },
          ],
        },
        {
          id: "m1-c1-e2",
          label: "Etapa 2 — A pergunta do banco (credor)",
          question: "O que o banco prioriza ao analisar as mesmas demonstrações?",
          points: 100,
          options: [
            {
              id: "c1e2-a",
              label: "Capacidade de pagamento: geração de caixa, liquidez e endividamento frente à dívida.",
              correct: true,
              feedback: "O credor quer receber principal e juros; não participa do lucro.",
            },
            {
              id: "c1e2-b",
              label: "O potencial de valorização das ações no longo prazo.",
              correct: false,
              feedback: "Interesse do acionista, não do credor.",
            },
            {
              id: "c1e2-c",
              label: "O mix de produtos mais rentável por linha.",
              correct: false,
              feedback: "Informação gerencial detalhada, indisponível e irrelevante para a decisão de crédito.",
            },
          ],
        },
        {
          id: "m1-c1-e3",
          label: "Etapa 3 — A pergunta do gestor (usuário interno)",
          question: "O gestor financeiro, ao planejar o ano seguinte, foca em quê?",
          points: 100,
          options: [
            {
              id: "c1e3-a",
              label: "Eficiência operacional, alocação de capital e correção de desvios.",
              correct: true,
              feedback: "Tem acesso a dados internos detalhados e decide sobre a operação.",
            },
            {
              id: "c1e3-b",
              label: "Apenas no preço-alvo da ação definido por analistas de mercado.",
              correct: false,
              feedback: "Perspectiva externa do investidor, não do gestor.",
            },
            {
              id: "c1e3-c",
              label: "Somente na checagem dos covenants exigidos pelos bancos.",
              correct: false,
              feedback: "Relevante, mas é o recorte do credor — não a visão gerencial ampla.",
            },
          ],
        },
      ],
      resolution: {
        prompt:
          "O índice **Dívida líquida/EBITDA ≈ 3,2x** é o mesmo para todos. Veja como cada usuário o interpreta:",
        columns: ["Usuário", "Leitura do mesmo indicador (≈ 3,2x)"],
        rows: [
          {
            tag: "A",
            cells: [
              "Investidor",
              "Endividamento moderado-alto, aceitável se o crescimento do lucro justificar a alavancagem. Foco em retorno.",
            ],
          },
          {
            tag: "B",
            cells: [
              "Banco",
              "Próximo do teto de conforto (3,0–3,5x); pede garantias e covenants. Foco em risco de inadimplência.",
            ],
          },
          {
            tag: "C",
            cells: [
              "Gestor",
              "Sinal para priorizar geração de caixa e adiar novos investimentos financiados por dívida. Foco em execução.",
            ],
          },
        ],
        closing:
          "A mesma demonstração, lida sob objetivos diferentes, produz decisões diferentes — sem que nenhuma esteja “errada”.",
        chart: {
          caption: "Tolerância à alavancagem de 3,2x por usuário (índice didático, 0–100)",
          valueLabel: "Conforto com 3,2x",
          data: [
            { name: "Investidor", value: 65 },
            { name: "Banco", value: 35 },
            { name: "Gestor", value: 50 },
          ],
        },
      },
    },

    /* ─────────────── CENÁRIO 2 ─────────────── */
    {
      id: "m1-c2",
      n: 2,
      title: "Quem usa a informação?",
      difficulty: "intermediario",
      concept: "Usuários internos × externos e contabilidade gerencial × financeira.",
      context:
        "Várias decisões giram em torno da Comercial Aurora. Sua tarefa é classificar cada uma **segundo o usuário da informação** — interno (gestão) ou externo (investidor, credor, fisco, fornecedor, regulador) — e reconhecer que o tipo de demonstração e o nível de detalhe mudam conforme o usuário.",
      steps: [
        {
          id: "m1-c2-e1",
          label: "Etapa 1 — Natureza do usuário",
          question:
            "“Definir o preço de venda de um novo produto a partir do custo unitário detalhado” pertence a qual usuário?",
          points: 100,
          options: [
            {
              id: "c2e1-a",
              label: "Usuário interno (gestão) — contabilidade gerencial.",
              correct: true,
              feedback: "Exige dados de custo unitário que não são publicados.",
            },
            {
              id: "c2e1-b",
              label: "Usuário externo (investidor).",
              correct: false,
              feedback: "O investidor não tem acesso ao custo unitário detalhado.",
            },
            {
              id: "c2e1-c",
              label: "Usuário externo (fisco).",
              correct: false,
              feedback: "O fisco se interessa por tributos, não pela política de preços interna.",
            },
          ],
        },
        {
          id: "m1-c2-e2",
          label: "Etapa 2 — Demonstração × usuário",
          question: "“Um fornecedor decide conceder prazo de 60 dias para a empresa.” Em que ele se apoia?",
          points: 100,
          options: [
            {
              id: "c2e2-a",
              label: "Demonstrações publicadas, com foco em liquidez de curto prazo.",
              correct: true,
              feedback: "Usuário externo com horizonte curto: quer saber se a empresa honra compras a prazo.",
            },
            {
              id: "c2e2-b",
              label: "Relatórios gerenciais internos de margem por produto.",
              correct: false,
              feedback: "Indisponíveis para o fornecedor.",
            },
            {
              id: "c2e2-c",
              label: "Projeção de fluxo de caixa de 10 anos.",
              correct: false,
              feedback: "Horizonte incompatível com crédito comercial de curto prazo.",
            },
          ],
        },
        {
          id: "m1-c2-e3",
          label: "Etapa 3 — Contabilidade financeira × gerencial",
          question: "“A diretoria avalia fechar uma unidade fabril deficitária.” Qual informação é decisiva?",
          points: 100,
          options: [
            {
              id: "c2e3-a",
              label: "Contabilidade gerencial: resultado por unidade e custos evitáveis.",
              correct: true,
              feedback: "Decisão interna que exige granularidade não fornecida pela contabilidade financeira.",
            },
            {
              id: "c2e3-b",
              label: "Apenas o lucro líquido consolidado publicado.",
              correct: false,
              feedback: "Agregado demais para isolar a unidade.",
            },
            {
              id: "c2e3-c",
              label: "Somente a nota explicativa de impostos diferidos.",
              correct: false,
              feedback: "Irrelevante para a decisão operacional.",
            },
          ],
        },
      ],
      resolution: {
        prompt: "Classifique cada decisão segundo o usuário e o tipo de informação:",
        columns: ["Decisão", "Usuário / tipo de informação"],
        rows: [
          {
            tag: "A",
            cells: [
              "O regulador exige índices mínimos de capital",
              "Externo (regulador) — contabilidade financeira padronizada",
            ],
          },
          {
            tag: "B",
            cells: [
              "O gerente de produção remaneja turnos para reduzir ociosidade",
              "Interno (gestão) — contabilidade gerencial",
            ],
          },
          {
            tag: "C",
            cells: [
              "O investidor compara o ROE da Aurora com o de concorrentes",
              "Externo (investidor) — contabilidade financeira comparável",
            ],
          },
        ],
        closing:
          "O usuário define a informação. Externos dependem de demonstrações padronizadas e públicas; internos usam relatórios gerenciais detalhados e confidenciais.",
      },
    },

    /* ─────────────── CENÁRIO 3 ─────────────── */
    {
      id: "m1-c3",
      n: 3,
      title: "O alcance da análise",
      difficulty: "intermediario",
      concept: "O que a análise financeira suporta — e onde precisa de outras fontes.",
      context:
        "Um colega afirma que “a análise de demonstrações financeiras responde qualquer pergunta sobre a empresa”. Você vai delimitar o que a análise **efetivamente suporta** e onde ela precisa ser complementada. Atenção: aqui algumas respostas certas são **“parcialmente”** — e o motor pontua isso.",
      steps: [
        {
          id: "m1-c3-e1",
          label: "Etapa 1 — Decisão de investimento",
          question: "“Devo comprar ações da Aurora?” — a análise financeira suporta essa decisão?",
          points: 100,
          options: [
            {
              id: "c3e1-a",
              label:
                "Parcialmente: dá rentabilidade, endividamento, crescimento e qualidade do lucro — mas precisa do preço de mercado e da perspectiva setorial.",
              correct: true,
              feedback: "Resposta mais correta e completa.",
            },
            {
              id: "c3e1-b",
              label: "Totalmente e de forma isolada.",
              correct: false,
              partial: true,
              feedback:
                "A análise não define o “preço justo” sem premissas adicionais. Defensável em parte, mas incompleta (pontua 50%).",
            },
            {
              id: "c3e1-c",
              label: "De forma alguma.",
              correct: false,
              feedback: "Ignoraria o principal insumo da decisão.",
            },
          ],
        },
        {
          id: "m1-c3-e2",
          label: "Etapa 2 — Decisão de crédito",
          question: "“Concedo o empréstimo?” — qual o papel da análise?",
          points: 100,
          options: [
            {
              id: "c3e2-a",
              label:
                "Central: avalia capacidade de pagamento e estrutura de capital, base para rating e precificação do risco.",
              correct: true,
              feedback: "É a função primária da análise para credores.",
            },
            {
              id: "c3e2-b",
              label: "Irrelevante.",
              correct: false,
              feedback: "Contradiz a função primária da análise.",
            },
            {
              id: "c3e2-c",
              label: "Substitui totalmente a análise de garantias e do setor.",
              correct: false,
              feedback: "Exagera o alcance da análise.",
            },
          ],
        },
        {
          id: "m1-c3-e3",
          label: "Etapa 3 — O limite da análise",
          question: "“A Aurora vai lançar um produto inovador que mudará o mercado?” — a análise responde?",
          points: 100,
          options: [
            {
              id: "c3e3-a",
              label:
                "Não diretamente: demonstrações são retrospectivas; o que é prospectivo/estratégico exige outras fontes.",
              correct: true,
              feedback: "Pesquisa de mercado, P&D e conversa com a gestão entram aqui.",
            },
            {
              id: "c3e3-b",
              label: "Sim, basta projetar o histórico.",
              correct: false,
              feedback: "Extrapolação ingênua do passado.",
            },
            {
              id: "c3e3-c",
              label: "Sim, lendo as notas explicativas.",
              correct: false,
              feedback: "Notas explicam o reportado; não preveem inovação futura.",
            },
          ],
        },
      ],
      resolution: {
        prompt: "Três perguntas, três alcances da análise financeira:",
        columns: ["Pergunta", "A análise financeira…"],
        strengthHeader: "Alcance",
        rows: [
          {
            tag: "A",
            cells: ["“A empresa é lucrativa e solvente hoje?”", "Responde diretamente"],
            strength: "forte",
          },
          {
            tag: "B",
            cells: ["“A ação está cara ou barata?”", "Apoia, mas exige preço + premissas"],
            strength: "parcial",
          },
          {
            tag: "C",
            cells: ["“A cultura retém talentos?”", "Não responde — fora do escopo"],
            strength: "fraco",
          },
        ],
        closing:
          "A análise é poderosa para o que é mensurável e passado; perde força no prospectivo e no qualitativo. Reconhecer esse limite é parte da boa análise.",
      },
    },

    /* ─────────────── CENÁRIO 4 ─────────────── */
    {
      id: "m1-c4",
      n: 4,
      title: "Armadilhas da informação contábil",
      difficulty: "super",
      concept:
        "Estimativas, julgamento e conservadorismo — por que dois lucros “iguais” têm qualidades diferentes.",
      context:
        "Três empresas do mesmo setor reportam lucros parecidos. Como analista, você precisa identificar onde **estimativas, julgamento e conservadorismo** distorcem a comparação. Os números *batem*; a **qualidade** deles, não.",
      displayFieldsCaption: "Números mostrados ao aluno",
      displayTable: {
        columns: ["Empresa", "Lucro líquido", "Sinal contábil observado"],
        rows: [
          ["X", "R$ 4,0 mi", "Alongou a vida útil dos equipamentos de 10 para 20 anos"],
          ["Y", "R$ 4,1 mi", "Reduziu a provisão para devedores duvidosos com inadimplência subindo"],
          ["Z", "R$ 3,8 mi", "Reconheceu impairment elevado e provisões robustas"],
        ],
      },
      steps: [
        {
          id: "m1-c4-e1",
          label: "Etapa 1 — Estimativas (Empresa X)",
          question:
            "A X alongou a vida útil dos equipamentos, reduzindo a depreciação anual. Como interpretar?",
          points: 100,
          options: [
            {
              id: "c4e1-a",
              label:
                "Mudança de estimativa que infla o lucro corrente; exige ceticismo e checagem da justificativa técnica.",
              correct: true,
              feedback: "Menos depreciação no ano → mais lucro, sem ganho operacional real.",
            },
            {
              id: "c4e1-b",
              label: "Ganho genuíno de eficiência operacional.",
              correct: false,
              feedback: "Confunde efeito contábil com desempenho real.",
            },
            {
              id: "c4e1-c",
              label: "Detalhe irrelevante para a análise.",
              correct: false,
              feedback: "Ignora um vetor central de gestão de resultado.",
            },
          ],
        },
        {
          id: "m1-c4-e2",
          label: "Etapa 2 — Julgamento (Empresa Y)",
          question:
            "A Y reduziu a provisão para devedores duvidosos mesmo com a inadimplência subindo. O que isso sugere?",
          points: 100,
          options: [
            {
              id: "c4e2-a",
              label: "Julgamento otimista que antecipa lucro e pode mascarar deterioração — bandeira amarela.",
              correct: true,
              feedback: "Menos provisão → mais lucro hoje, com risco de reversão futura.",
            },
            {
              id: "c4e2-b",
              label: "Gestão de crédito mais eficiente, sem ressalvas.",
              correct: false,
              feedback: "Leitura ingênua que ignora o contexto de inadimplência crescente.",
            },
            {
              id: "c4e2-c",
              label: "Erro que o auditor corrige automaticamente.",
              correct: false,
              feedback: "Não há automatismo; provisão é matéria de julgamento.",
            },
          ],
        },
        {
          id: "m1-c4-e3",
          label: "Etapa 3 — Conservadorismo (Empresa Z)",
          question:
            "A Z reconheceu impairment elevado e provisões robustas, deprimindo o lucro do ano. Como ler?",
          points: 100,
          options: [
            {
              id: "c4e3-a",
              label:
                "Conservadorismo: reduz o lucro hoje e “limpa” o balanço, criando base mais sólida adiante — não é necessariamente ruim.",
              correct: true,
              feedback: "Prudência pode aumentar a confiabilidade do resultado futuro.",
            },
            {
              id: "c4e3-b",
              label: "Sinal inequívoco de empresa em crise terminal.",
              correct: false,
              feedback: "Superinterpreta um lançamento prudente.",
            },
            {
              id: "c4e3-c",
              label: "Tentativa de inflar o lucro.",
              correct: false,
              feedback: "É o oposto: o conservadorismo reduz o lucro.",
            },
          ],
        },
      ],
      resolution: {
        prompt: "Mesmo lucro, qualidades diferentes:",
        columns: ["Empresa", "Qualidade do lucro reportado"],
        strengthHeader: "Qualidade",
        rows: [
          {
            tag: "A",
            cells: [
              "X — estimativa agressiva",
              "Lucro inflado por alongamento de vida útil; sustentabilidade duvidosa",
            ],
            strength: "fraco",
            strengthLabel: "baixa",
          },
          {
            tag: "B",
            cells: [
              "Y — julgamento otimista",
              "Lucro antecipado por subprovisão; risco de reversão",
            ],
            strength: "parcial",
            strengthLabel: "baixa-média",
          },
          {
            tag: "C",
            cells: [
              "Z — conservadora",
              "Lucro deprimido por prudência; base potencialmente mais confiável",
            ],
            strength: "forte",
            strengthLabel: "alta",
          },
        ],
        closing:
          "Lucros nominalmente iguais escondem qualidades distintas. A limitação central da informação contábil é ser produto de estimativas e julgamentos — por isso a análise é crítica, não leitura literal.",
        chart: {
          caption: "Qualidade do lucro por empresa (índice didático, 0–100)",
          valueLabel: "Qualidade do lucro",
          data: [
            { name: "Empresa X", value: 35 },
            { name: "Empresa Y", value: 55 },
            { name: "Empresa Z", value: 85 },
          ],
        },
      },
    },
  ],
};
