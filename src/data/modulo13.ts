import type { ModuleData } from "@/types/scenario";

export const modulo13: ModuleData = {
  n: 13,
  eyebrow: "Módulo 13 · Aula 13 de 15",
  title: "Qualidade do Lucro e Sinais de Alerta",
  subtitle:
    "Nem todo lucro é igual: caixa, recorrência, accruals e sinais de alerta.",
  intro:
    "O Módulo 13 transforma o aluno em detetive. Ele aprende que **nem todo lucro é igual**: há lucro de alta qualidade (que vira caixa e se repete) e lucro de baixa qualidade (contábil, frágil, maquiado).",
  scenarios: [
    {
      id: "m13-c1",
      n: 1,
      title: "Crescimento artificial do lucro",
      difficulty: "intermediario",
      concept:
        "Lucro crescente não é sinônimo de resultado sustentável — o caixa revela a verdade.",
      context:
        "A **Fênix S.A.** reporta lucro crescente (5 → 8 → 12 em três anos) e a diretoria celebra. Mas o caixa operacional caiu (4 → 2 → 0). O aluno avalia se esse crescimento é sustentável.",
      displayTable: {
        columns: ["Métrica", "Ano 1", "Ano 2", "Ano 3"],
        rows: [
          ["Receita líquida", "100", "115", "130"],
          ["Lucro líquido", "5", "8", "12"],
          ["Caixa operacional (FCO)", "4", "2", "0"],
          ["Accruals (LL − FCO)", "1", "6", "12"],
          ["FCO ÷ lucro", "0,80", "0,25", "0,00"],
          ["Contas a receber", "20", "35", "55"],
          ["Estoques", "15", "22", "32"],
        ],
      },
      displayNote:
        "Em 2 anos: lucro +140% (5→12); receita +30% (100→130); recebíveis +175% (20→55); FCO 4 → 0.",
      steps: [
        {
          id: "m13-c1-e1",
          label: "Etapa 1 — O primeiro alerta",
          question:
            "O lucro da Fênix triplicou (5 → 12), mas o FCO caiu para zero. O que isso sugere?",
          points: 100,
          options: [
            {
              id: "c1e1-a",
              label:
                "O lucro pode ser de baixa qualidade: cresce no papel, mas não vira caixa.",
              correct: true,
              feedback: "Lucro sem caixa é a definição de resultado frágil.",
            },
            {
              id: "c1e1-b",
              label:
                "O lucro é de alta qualidade: crescer o lucro é o objetivo de qualquer empresa.",
              correct: false,
              feedback: "Crescer o lucro contábil não basta; ele precisa virar dinheiro.",
            },
            {
              id: "c1e1-c",
              label:
                "O caixa é irrelevante: o lucro contábil é a medida definitiva do desempenho.",
              correct: false,
              feedback: "O caixa é o teste de realidade do lucro reportado.",
            },
          ],
        },
        {
          id: "m13-c1-e2",
          label: "Etapa 2 — Onde o \"crescimento\" se apoia",
          question: "O que sustenta esse crescimento de lucro da Fênix?",
          points: 100,
          options: [
            {
              id: "c1e2-a",
              label:
                "Recebíveis e estoques crescendo muito mais rápido que a receita — lucro preso ou forçado.",
              correct: true,
              feedback:
                "Recebíveis +175% com receita +30% é um sinal clássico de receita \"esticada\".",
            },
            {
              id: "c1e2-b",
              label:
                "Geração de caixa robusta que acompanha o crescimento do lucro ano a ano.",
              correct: false,
              feedback: "Falso: o FCO foi de 4 a 0, na direção oposta ao lucro.",
            },
            {
              id: "c1e2-c",
              label:
                "Redução de dívida que liberou caixa para distribuir aos sócios da empresa.",
              correct: false,
              feedback: "Não há nada sobre dívida aqui; o problema é o lucro sem caixa.",
            },
          ],
        },
        {
          id: "m13-c1-e3",
          label: "Etapa 3 — Sustentável ou não",
          question: "O crescimento de lucro da Fênix é sustentável?",
          points: 100,
          options: [
            {
              id: "c1e3-a",
              label:
                "Não: lucro que não converte em caixa tende a reverter quando o \"truque\" se esgota.",
              correct: true,
              feedback: "Recebíveis e estoques não crescem para sempre; a conta chega.",
            },
            {
              id: "c1e3-b",
              label:
                "Sim: enquanto o lucro contábil sobe, a empresa está economicamente melhor.",
              correct: false,
              feedback: "Melhor no papel, não no caixa — e é o caixa que paga as contas.",
            },
            {
              id: "c1e3-c",
              label:
                "Depende: a sustentabilidade só pode ser avaliada pela margem, não pelo caixa.",
              correct: false,
              feedback: "A margem não vê a conversão em caixa, que é o ponto aqui.",
            },
          ],
        },
      ],
      resolution: {
        prompt: "O lucro da Fênix sob a lupa",
        columns: ["Ângulo", "O que mostra"],
        rows: [
          { tag: "A", cells: ["O que a diretoria vê", "Lucro 5 → 8 → 12 (crescimento de 140%)"] },
          { tag: "B", cells: ["O que o caixa revela", "FCO 4 → 0; recebíveis +175% vs receita +30%"] },
          { tag: "C", cells: ["Diagnóstico", "Crescimento artificial: lucro no papel, sem lastro em caixa"] },
        ],
        closing:
          "Lucro crescente engana. A pergunta de sustentabilidade é sempre **\"esse lucro virou caixa?\"**. Na Fênix, não — e isso é uma bandeira vermelha.",
        chart: {
          caption: "Lucro × FCO da Fênix",
          valueLabel: "R$ mi",
          data: [
            { name: "Lucro Ano 1", value: 5 },
            { name: "FCO Ano 1", value: 4 },
            { name: "Lucro Ano 3", value: 12 },
            { name: "FCO Ano 3", value: 0 },
          ],
        },
      },
    },
    {
      id: "m13-c2",
      n: 2,
      title: "Sinais de alerta",
      difficulty: "intermediario",
      concept:
        "Certos padrões nas demonstrações são red flags de risco contábil.",
      context:
        "O aluno percorre uma **checklist de sinais de alerta** nas demonstrações da Fênix. Cada sinal isolado pode ser ruído; juntos, formam um padrão.",
      steps: [
        {
          id: "m13-c2-e1",
          label: "Etapa 1 — Recebíveis contra receita",
          question:
            "Os recebíveis da Fênix cresceram +175% e a receita +30%. Que alerta é esse?",
          points: 100,
          options: [
            {
              id: "c2e1-a",
              label:
                "As vendas podem estar sendo reconhecidas sem se converter em recebimento — receita \"forçada\".",
              correct: true,
              feedback:
                "Vender muito mais \"no papel\" do que se recebe é um clássico red flag.",
            },
            {
              id: "c2e1-b",
              label:
                "A empresa está cobrando mais rápido, o que reduz o prazo médio de recebimento.",
              correct: false,
              feedback: "Cobrar mais rápido reduziria os recebíveis, não os inflaria.",
            },
            {
              id: "c2e1-c",
              label:
                "A empresa está vendendo à vista, o que elimina o risco de inadimplência futura.",
              correct: false,
              feedback: "Venda à vista reduziria os recebíveis; eles explodiram.",
            },
          ],
        },
        {
          id: "m13-c2-e2",
          label: "Etapa 2 — Estoques contra CMV",
          question: "Os estoques crescem mais rápido que o custo das vendas. O que isso pode indicar?",
          points: 100,
          options: [
            {
              id: "c2e2-a",
              label:
                "Encalhe ou obsolescência não baixada — estoque inflado que esconde perdas futuras.",
              correct: true,
              feedback:
                "Estoque que não gira e não é provisionado mascara prejuízo a caminho.",
            },
            {
              id: "c2e2-b",
              label:
                "Eficiência de compras que reduzirá o custo das vendas nos próximos períodos.",
              correct: false,
              feedback: "Estoque inchado não é eficiência; é capital (e risco) parado.",
            },
            {
              id: "c2e2-c",
              label:
                "Aumento de vendas que naturalmente exige mais estoque em proporção idêntica.",
              correct: false,
              feedback: "A proporção não é idêntica: o estoque cresce mais que as vendas.",
            },
          ],
        },
        {
          id: "m13-c2-e3",
          label: "Etapa 3 — \"Não recorrentes\" recorrentes",
          question: "A Fênix reporta um ganho \"não recorrente\" todos os anos. Que alerta é esse?",
          points: 100,
          options: [
            {
              id: "c2e3-a",
              label:
                "Se acontece todo ano, talvez não seja não recorrente — pode mascarar uma operação fraca.",
              correct: true,
              feedback:
                "O que se repete é recorrente; chamar de \"especial\" maquia o core.",
            },
            {
              id: "c2e3-b",
              label:
                "Se acontece todo ano, é parte recorrente e saudável do resultado operacional.",
              correct: false,
              feedback:
                "Ganho de venda de ativo não é resultado operacional, mesmo se repetido.",
            },
            {
              id: "c2e3-c",
              label:
                "Se acontece todo ano, não há o que analisar, pois o efeito se cancela no tempo.",
              correct: false,
              feedback: "Não se cancela: ele infla o lucro de cada ano artificialmente.",
            },
          ],
        },
      ],
      resolution: {
        prompt: "O painel de alertas da Fênix",
        columns: ["Sinal", "O que pode indicar"],
        rows: [
          { tag: "A", cells: ["Recebíveis ≫ receita", "Receita possivelmente forçada ou não recebida"] },
          { tag: "B", cells: ["Estoques ≫ CMV", "Encalhe ou obsolescência escondida"] },
          { tag: "C", cells: ["\"Não recorrentes\" todo ano", "Operação fraca maquiada por ganhos repetidos"] },
        ],
        closing:
          "Sinais de alerta raramente vêm sozinhos. Um pode ser ruído; vários juntos, na mesma direção, formam um **padrão** que exige ceticismo redobrado.",
      },
    },
    {
      id: "m13-c3",
      n: 3,
      title: "Earnings quality: lucro × caixa",
      difficulty: "avancado",
      concept:
        "A qualidade do lucro mede-se pela parcela que vira caixa; accruals altos sinalizam baixa qualidade.",
      context:
        "O aluno formaliza o conceito de **accruals** (lucro − caixa) e o usa para medir a qualidade do lucro da Fênix de forma objetiva.",
      displayFields: [
        { label: "Accruals", value: "Lucro líquido − Caixa operacional (FCO)" },
        { label: "Conversão de caixa", value: "FCO ÷ Lucro líquido" },
      ],
      steps: [
        {
          id: "m13-c3-e1",
          label: "Etapa 1 — O que são accruals",
          question:
            "A diferença entre o lucro e o caixa operacional (LL − FCO) chama-se accruals. O que ela representa?",
          points: 100,
          options: [
            {
              id: "c3e1-a",
              label:
                "A parte do lucro que ainda não virou caixa — competência além do caixa realizado.",
              correct: true,
              feedback:
                "É o lucro \"no papel\" que depende de estimativas e promessas de recebimento.",
            },
            {
              id: "c3e1-b",
              label:
                "A parte do caixa que ainda não virou lucro — caixa retido sem reconhecimento.",
              correct: false,
              feedback: "Invertido: accruals é o excesso do lucro sobre o caixa, não o contrário.",
            },
            {
              id: "c3e1-c",
              label: "A parte da dívida que ainda não foi paga aos credores no período.",
              correct: false,
              feedback: "Accruals nada têm a ver com dívida; é lucro menos caixa.",
            },
          ],
        },
        {
          id: "m13-c3-e2",
          label: "Etapa 2 — Accruals e qualidade",
          question:
            "Na Fênix, os accruals saltaram de 1 para 12 (todo o lucro). O que isso diz sobre a qualidade?",
          points: 100,
          options: [
            {
              id: "c3e2-a",
              label:
                "Qualidade baixa: quase todo o lucro é \"contábil\", sem respaldo de caixa.",
              correct: true,
              feedback: "No Ano 3, 100% do lucro é accrual e 0% é caixa.",
            },
            {
              id: "c3e2-b",
              label: "Qualidade alta: accruals altos mostram forte reconhecimento de receita.",
              correct: false,
              feedback: "Reconhecer muito sem receber é justamente o problema, não a virtude.",
            },
            {
              id: "c3e2-c",
              label: "Qualidade neutra: accruals não têm relação com a qualidade do lucro.",
              correct: false,
              feedback: "Accruals são o coração da medida de qualidade do lucro.",
            },
          ],
        },
        {
          id: "m13-c3-e3",
          label: "Etapa 3 — Por que accruals altos preocupam",
          question:
            "Por que um lucro feito quase só de accruals tende a decepcionar no futuro?",
          points: 100,
          options: [
            {
              id: "c3e3-a",
              label:
                "Porque accruals dependem de estimativas e tendem a reverter quando se ajustam à realidade.",
              correct: true,
              feedback: "Recebíveis viram perda, estoques viram baixa — a reversão chega.",
            },
            {
              id: "c3e3-b",
              label:
                "Porque accruals são sempre fraude, e fraudes são descobertas no período seguinte.",
              correct: false,
              feedback:
                "Accruals altos não são necessariamente fraude; são sinal de fragilidade.",
            },
            {
              id: "c3e3-c",
              label:
                "Porque accruals reduzem o lucro futuro por exigência das normas contábeis.",
              correct: false,
              feedback:
                "Não há regra que \"puna\"; o que ocorre é a reversão econômica natural.",
            },
          ],
        },
      ],
      resolution: {
        prompt: "A qualidade do lucro medida",
        columns: ["Métrica", "Fênix (Ano 1 → 3)"],
        rows: [
          { tag: "A", cells: ["Accruals (LL − FCO)", "1 → 6 → 12 (subindo sem parar)"] },
          { tag: "B", cells: ["Conversão FCO ÷ lucro", "0,80 → 0,25 → 0,00 (despencando)"] },
          { tag: "C", cells: ["Veredito", "Qualidade do lucro em queda livre — o caixa abandonou o lucro"] },
        ],
        closing:
          "Earnings quality não é opinião, é **medida**. Quanto mais o lucro depende de accruals (e menos de caixa), pior a qualidade — e maior a chance de reversão.",
        chart: {
          caption: "Accruals e conversão de caixa da Fênix",
          valueLabel: "índice didático",
          data: [
            { name: "Accruals A1", value: 1 },
            { name: "Accruals A3", value: 12 },
            { name: "Conversão A1", value: 80 },
            { name: "Conversão A3", value: 0 },
          ],
        },
      },
    },
    {
      id: "m13-c4",
      n: 4,
      title: "Resultados não recorrentes",
      difficulty: "super",
      concept:
        "Separar recorrente de não recorrente revela a operação real — e expõe a manipulação dos dois lados.",
      context:
        "O aluno normaliza o resultado da Fênix (Ano 3) removendo os não recorrentes — e descobre que a operação \"core\" é muito pior do que o lucro reportado.",
      displayTable: {
        columns: ["Componente do lucro", "R$ mi"],
        rows: [
          ["Lucro líquido reportado", "12"],
          ["(−) Ganho com venda de ativo (não recorrente)", "5"],
          ["(−) Reversão de provisão (não recorrente)", "3"],
          ["= Lucro recorrente (operação core)", "4"],
        ],
      },
      steps: [
        {
          id: "m13-c4-e1",
          label: "Etapa 1 — O que é não recorrente",
          question: "O que caracteriza um resultado verdadeiramente não recorrente?",
          points: 100,
          options: [
            {
              id: "c4e1-a",
              label: "Um evento incomum e não repetível, como a venda de uma planta industrial.",
              correct: true,
              feedback:
                "Não recorrente = fora do curso normal e improvável de se repetir.",
            },
            {
              id: "c4e1-b",
              label: "Uma despesa operacional rotineira, como o pagamento de salários do mês.",
              correct: false,
              feedback: "Salário é o exemplo máximo de item recorrente.",
            },
            {
              id: "c4e1-c",
              label: "Uma receita de vendas regular, gerada pela atividade principal da empresa.",
              correct: false,
              feedback: "A receita core é o oposto de não recorrente.",
            },
          ],
        },
        {
          id: "m13-c4-e2",
          label: "Etapa 2 — Normalizar o lucro",
          question:
            "O lucro da Fênix (12) inclui ganho de venda de ativo (5) e reversão de provisão (3). Qual o lucro recorrente?",
          points: 100,
          options: [
            {
              id: "c4e2-a",
              label:
                "R$ 4 mi: removem-se os R$ 8 mi de itens não recorrentes do lucro reportado.",
              correct: true,
              feedback:
                "12 − 5 − 3 = 4: a operação real é um terço do reportado.",
            },
            {
              id: "c4e2-b",
              label:
                "R$ 12 mi: todos os ganhos do período compõem o resultado recorrente da empresa.",
              correct: false,
              feedback: "Ganhos atípicos não são recorrentes; distorcem o core.",
            },
            {
              id: "c4e2-c",
              label:
                "R$ 20 mi: somam-se os itens não recorrentes ao lucro para achar o potencial.",
              correct: false,
              feedback: "Os não recorrentes se removem, não se somam.",
            },
          ],
        },
        {
          id: "m13-c4-e3",
          label: "Etapa 3 — A manipulação dos dois lados",
          question:
            "Empresas também classificam despesas normais como \"não recorrentes\". Por quê?",
          points: 100,
          options: [
            {
              id: "c4e3-a",
              label:
                "Para inflar o lucro recorrente, fazendo a operação parecer melhor do que é.",
              correct: true,
              feedback:
                "Se tiro despesas normais do \"core\", o core parece artificialmente forte.",
            },
            {
              id: "c4e3-b",
              label:
                "Para reduzir o lucro recorrente, pagando menos imposto sobre o resultado.",
              correct: false,
              feedback:
                "Reclassificar não muda o lucro total nem o imposto; muda só a aparência do core.",
            },
            {
              id: "c4e3-c",
              label:
                "Para cumprir uma exigência das normas, que obrigam a separar toda despesa especial.",
              correct: false,
              feedback:
                "Não há tal obrigação; a reclassificação aqui é discricionária e interessada.",
            },
          ],
        },
      ],
      resolution: {
        prompt: "A operação core da Fênix",
        columns: ["Camada", "Valor"],
        strengthHeader: "Leitura",
        rows: [
          {
            tag: "A",
            cells: ["Lucro reportado", "R$ 12 mi (impressiona na capa)"],
            strength: "fraco",
            strengthLabel: "capa",
          },
          {
            tag: "B",
            cells: ["Itens não recorrentes", "− venda de ativo 5 − reversão 3 = R$ 8 mi removidos"],
            strength: "parcial",
            strengthLabel: "ajuste",
          },
          {
            tag: "C",
            cells: ["Lucro recorrente", "R$ 4 mi — a operação real é um terço do reportado"],
            strength: "forte",
            strengthLabel: "core",
          },
        ],
        closing:
          "O resultado não recorrente é o disfarce favorito do lucro de baixa qualidade. Normalizar revela a operação como ela é. Na Fênix, o \"core\" é um terço do que a capa anuncia.",
        chart: {
          caption: "Lucro reportado ao recorrente",
          valueLabel: "R$ mi",
          data: [
            { name: "Reportado", value: 12 },
            { name: "Não recorrentes", value: 8 },
            { name: "Recorrente", value: 4 },
          ],
        },
      },
    },
  ],
};
