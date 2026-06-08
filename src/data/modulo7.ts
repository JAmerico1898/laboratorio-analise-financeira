import type { ModuleData } from '@/types/scenario';

const dreComparativa = {
  columns: ["Conta", "Ano 1", "AV", "Ano 2", "AV", "AH"],
  rows: [
    ["Receita liquida", "40,0", "100%", "50,0", "100%", "+25%"],
    ["(-) CMV", "(25,6)", "64%", "(33,0)", "66%", "+29%"],
    ["= Lucro bruto", "14,4", "36%", "17,0", "34%", "+18%"],
    ["(-) Despesas com vendas", "(4,0)", "10%", "(5,0)", "10%", "+25%"],
    ["(-) Despesas administrativas", "(2,8)", "7%", "(3,0)", "6%", "+7%"],
    ["= EBITDA", "7,6", "19%", "9,0", "18%", "+18%"],
    ["(-) Depreciacao e amortizacao", "(1,6)", "4%", "(2,0)", "4%", "+25%"],
    ["= Lucro operacional (EBIT)", "6,0", "15%", "7,0", "14%", "+17%"],
    ["(-) Resultado financeiro", "(1,2)", "3%", "(1,5)", "3%", "+25%"],
    ["(-) IR e CSLL", "(1,2)", "3%", "(1,5)", "3%", "+25%"],
    ["= Lucro liquido", "3,6", "9%", "4,0", "8%", "+11%"],
  ],
};

const tendenciaTresAnos = {
  columns: ["Indicador (% da receita)", "Ano 1", "Ano 2", "Ano 3"],
  rows: [
    ["CMV / Receita", "64%", "66%", "67%"],
    ["Margem bruta", "36%", "34%", "33%"],
  ],
};

export const modulo7: ModuleData = {
  n: 7,
  eyebrow: "Modulo 7 · Aula 7 de 15",
  title: "Analise Horizontal e Vertical",
  subtitle: "Duas lentes complementares: composicao e crescimento das demonstracoes financeiras.",
  intro:
    "O Modulo 7 ensina duas lentes que todo analista usa antes de qualquer indice: a vertical, que mostra a composicao, e a horizontal, que mostra o crescimento. O fio condutor e distinguir crescimento de composicao: uma conta pode crescer em valor e, ao mesmo tempo, perder peso.",
  scenarios: [
    {
      id: "m7-c1",
      n: 1,
      title: "Analise vertical: a composicao",
      difficulty: "intermediario",
      concept: "A AV mostra o peso de cada conta no todo: a estrutura, nao o crescimento.",
      context:
        "O aluno olha a DRE da Aurora em percentual da receita e aprende a ler a fotografia da estrutura: como cada real de receita e repartido entre custos, despesas e lucro.",
      displayFieldsCaption: "DRE comparativa da Comercial Aurora S.A.",
      displayTable: dreComparativa,
      displayNote: "AV = conta / receita liquida. AH = (Ano 2 / Ano 1) - 1.",
      steps: [
        {
          id: "m7-c1-e1",
          label: "Etapa 1 — O que a AV mede",
          question: "A analise vertical expressa cada conta como percentual de uma base. O que ela revela?",
          points: 100,
          options: [
            {
              id: "c1e1-a",
              label: "A composicao: o peso de cada conta dentro do todo, numa mesma data ou periodo.",
              correct: true,
              feedback: "E a estrutura: como o bolo da receita e fatiado.",
            },
            {
              id: "c1e1-b",
              label: "O crescimento: a variacao de cada conta de um periodo para o outro.",
              correct: false,
              feedback: "Isso e a analise horizontal, nao a vertical.",
            },
            {
              id: "c1e1-c",
              label: "A liquidez: a capacidade de a empresa honrar suas obrigacoes de curto prazo.",
              correct: false,
              feedback: "Liquidez e outro tema; a AV trata de composicao.",
            },
          ],
        },
        {
          id: "m7-c1-e2",
          label: "Etapa 2 — A base correta",
          question: "Na analise vertical da DRE, qual e a base (100%) dos percentuais?",
          points: 100,
          options: [
            {
              id: "c1e2-a",
              label: "A receita liquida, sobre a qual se medem custos, despesas e o lucro.",
              correct: true,
              feedback: "Na DRE, tudo e lido como fracao da receita.",
            },
            {
              id: "c1e2-b",
              label: "O lucro liquido, sobre o qual se medem as receitas e os custos do periodo.",
              correct: false,
              feedback: "Invertido: o lucro e o resultado, nao a base de comparacao.",
            },
            {
              id: "c1e2-c",
              label: "O ativo total, sobre o qual se medem as contas patrimoniais da empresa.",
              correct: false,
              feedback: "Essa e a base da AV do Balanco, nao da DRE.",
            },
          ],
        },
        {
          id: "m7-c1-e3",
          label: "Etapa 3 — Lendo uma mudanca de composicao",
          question: "O CMV passou de 64% para 66% da receita. O que isso indica, isoladamente?",
          points: 100,
          options: [
            {
              id: "c1e3-a",
              label: "O custo do produto ganhou peso na receita: pressao de custo ou preco menor.",
              correct: true,
              feedback: "Sobra menos por real vendido: a margem bruta cede.",
            },
            {
              id: "c1e3-b",
              label: "O custo do produto perdeu peso na receita: ganho de eficiencia na producao.",
              correct: false,
              feedback: "Invertido: 64% para 66% e ganho de peso, nao perda.",
            },
            {
              id: "c1e3-c",
              label: "O custo do produto nao mudou, pois variacoes em pontos percentuais sao irrelevantes.",
              correct: false,
              feedback: "2 p.p. de CMV e material: vale 2% da receita inteira.",
            },
          ],
        },
      ],
      resolution: {
        prompt: "A composicao da DRE da Aurora",
        columns: ["Conta", "Mudanca de peso (Ano 1 -> Ano 2)"],
        rows: [
          { tag: "A", cells: ["Lucro bruto", "36% -> 34% (perdeu 2 p.p.: espelho do CMV)"] },
          { tag: "B", cells: ["Despesa administrativa", "7% -> 6% (perdeu 1 p.p.: diluicao)"] },
          { tag: "C", cells: ["Lucro liquido", "9% -> 8% (perdeu 1 p.p.: saldo das pressoes)"] },
        ],
        closing:
          "A AV e a fotografia da estrutura. Mostra como cada real de receita e repartido e como essa reparticao muda no tempo.",
        chart: {
          caption: "Pesos na receita: Ano 1 versus Ano 2",
          valueLabel: "% da receita",
          data: [
            { name: "CMV A1", value: 64 },
            { name: "CMV A2", value: 66 },
            { name: "Lucro bruto A1", value: 36 },
            { name: "Lucro bruto A2", value: 34 },
          ],
        },
      },
    },
    {
      id: "m7-c2",
      n: 2,
      title: "Analise horizontal: o crescimento",
      difficulty: "intermediario",
      concept: "A AH mostra a variacao de cada conta entre periodos: o crescimento, nao a composicao.",
      context:
        "O aluno olha a DRE da Aurora ano contra ano e descobre o ponto mais sutil da aula: uma conta pode crescer em valor (AH positiva) e, mesmo assim, perder peso (AV negativa).",
      displayFieldsCaption: "DRE comparativa da Comercial Aurora S.A.",
      displayTable: dreComparativa,
      steps: [
        {
          id: "m7-c2-e1",
          label: "Etapa 1 — O que a AH mede",
          question: "A analise horizontal compara cada conta entre periodos. O que ela revela?",
          points: 100,
          options: [
            {
              id: "c2e1-a",
              label: "O crescimento: a variacao de cada conta de um periodo para o outro.",
              correct: true,
              feedback: "E o filme da evolucao, conta a conta.",
            },
            {
              id: "c2e1-b",
              label: "A composicao: o peso de cada conta dentro do todo, numa mesma data.",
              correct: false,
              feedback: "Isso e a analise vertical, nao a horizontal.",
            },
            {
              id: "c2e1-c",
              label: "A rentabilidade: o retorno gerado sobre o capital investido pelos socios.",
              correct: false,
              feedback: "Rentabilidade e outro tema; a AH trata de variacao no tempo.",
            },
          ],
        },
        {
          id: "m7-c2-e2",
          label: "Etapa 2 — Crescimento contra composicao",
          question: "A despesa administrativa cresceu +7% (AH), mas seu peso caiu de 7% para 6% (AV). Como pode?",
          points: 100,
          options: [
            {
              id: "c2e2-a",
              label: "Porque cresceu menos que a receita (+25%): em valor sobe, em peso cai.",
              correct: true,
              feedback: "O denominador, receita, cresceu mais rapido que a conta; dai a diluicao.",
            },
            {
              id: "c2e2-b",
              label: "Porque ha um erro de calculo: uma AH positiva implica, sempre, uma AV positiva.",
              correct: false,
              feedback: "Nao ha tal regra: crescer e diluir ao mesmo tempo e comum.",
            },
            {
              id: "c2e2-c",
              label: "Porque AH e AV medem a mesma coisa, entao uma contradiz a outra por engano.",
              correct: false,
              feedback: "Medem coisas diferentes: variacao no tempo versus peso na estrutura.",
            },
          ],
        },
        {
          id: "m7-c2-e3",
          label: "Etapa 3 — Crescimento desigual",
          question: "A receita cresceu +25% e o CMV +29%. O que essa diferenca sinaliza?",
          points: 100,
          options: [
            {
              id: "c2e3-a",
              label: "O custo cresceu mais rapido que a receita: dai a margem bruta encolher.",
              correct: true,
              feedback: "Quando o custo corre na frente da receita, a margem cede.",
            },
            {
              id: "c2e3-b",
              label: "O custo cresceu mais devagar que a receita: dai a margem bruta aumentar.",
              correct: false,
              feedback: "Invertido: +29% e maior que +25%, nao menor.",
            },
            {
              id: "c2e3-c",
              label: "O custo e a receita cresceram juntos: dai a margem bruta ficar estavel.",
              correct: false,
              feedback: "Nao cresceram juntos: ha 4 p.p. de diferenca de ritmo.",
            },
          ],
        },
      ],
      resolution: {
        prompt: "O crescimento da DRE da Aurora",
        columns: ["Conta", "AH e leitura"],
        rows: [
          { tag: "A", cells: ["Receita", "+25% (40 -> 50): a referencia de ritmo"] },
          { tag: "B", cells: ["CMV", "+29%: correu a frente da receita (pressao)"] },
          { tag: "C", cells: ["Despesa administrativa", "+7%: ficou atras da receita (diluiu)"] },
        ],
        closing:
          "A AH e o filme do crescimento. Comparada a receita, mostra quais contas correram a frente e quais ficaram atras.",
        chart: {
          caption: "AH das principais contas",
          valueLabel: "%",
          data: [
            { name: "Receita", value: 25 },
            { name: "CMV", value: 29 },
            { name: "Desp. admin.", value: 7 },
            { name: "Lucro liquido", value: 11 },
          ],
        },
      },
    },
    {
      id: "m7-c3",
      n: 3,
      title: "Tendencias e mudancas estruturais",
      difficulty: "avancado",
      concept:
        "Combinar AH e AV ao longo de periodos para separar tendencia estrutural de flutuacao pontual.",
      context:
        "O aluno usa as duas lentes ao longo de tres anos para distinguir uma mudanca estrutural de um solucao de um unico periodo.",
      displayFieldsCaption: "Tendencia de tres anos",
      displayTable: tendenciaTresAnos,
      steps: [
        {
          id: "m7-c3-e1",
          label: "Etapa 1 — Pontual ou estrutural?",
          question: "O CMV subiu de 64% para 66% da receita em um ano. Como saber se e tendencia ou fato isolado?",
          points: 100,
          options: [
            {
              id: "c3e1-a",
              label: "Observando varios periodos: se o peso sobe de forma persistente, e mudanca estrutural.",
              correct: true,
              feedback: "Um ponto e ruido; tres pontos na mesma direcao formam tendencia.",
            },
            {
              id: "c3e1-b",
              label: "Observando um unico ano: a variacao de um periodo ja confirma a mudanca estrutural.",
              correct: false,
              feedback: "Um ano isolado pode ser sazonalidade ou evento pontual.",
            },
            {
              id: "c3e1-c",
              label: "Observando so a receita: o crescimento das vendas basta para concluir sobre o custo.",
              correct: false,
              feedback: "A receita sozinha nao diz nada sobre o comportamento do custo.",
            },
          ],
        },
        {
          id: "m7-c3-e2",
          label: "Etapa 2 — Combinar as duas lentes",
          question: "Para identificar uma mudanca estrutural, como AH e AV trabalham juntas?",
          points: 100,
          options: [
            {
              id: "c3e2-a",
              label: "A AH mostra o que cresceu; a AV mostra se esse crescimento mudou a estrutura.",
              correct: true,
              feedback: "Uma ve o ritmo, a outra o peso: juntas revelam a mudanca estrutural.",
            },
            {
              id: "c3e2-b",
              label: "A AH substitui a AV, pois o crescimento ja contem toda a informacao de composicao.",
              correct: false,
              feedback: "Nao substitui: crescer nao diz, sozinho, se a estrutura mudou.",
            },
            {
              id: "c3e2-c",
              label: "A AV substitui a AH, pois a composicao ja contem toda a informacao de crescimento.",
              correct: false,
              feedback: "Nao substitui: o peso de um ano nao revela a variacao no tempo.",
            },
          ],
        },
        {
          id: "m7-c3-e3",
          label: "Etapa 3 — Reconhecer a mudanca estrutural",
          question: "A margem bruta cai ha tres anos (36% -> 34% -> 33%) e o CMV/receita sobe. Que achado e esse?",
          points: 100,
          options: [
            {
              id: "c3e3-a",
              label: "Uma mudanca estrutural na rentabilidade: o modelo de custo da empresa se deteriorou.",
              correct: true,
              feedback: "A persistencia na mesma direcao caracteriza estrutura, nao acaso.",
            },
            {
              id: "c3e3-b",
              label: "Uma flutuacao pontual e reversivel: bastara um ano melhor para retornar ao padrao.",
              correct: false,
              feedback: "Tres anos na mesma direcao contrariam a ideia de pontual.",
            },
            {
              id: "c3e3-c",
              label: "Um efeito puramente contabil: nao ha impacto economico real sobre a empresa.",
              correct: false,
              feedback: "Margem que cede tem impacto economico claro: menos resultado por venda.",
            },
          ],
        },
      ],
      resolution: {
        prompt: "A tendencia da Aurora",
        columns: ["Lente", "Tres anos"],
        rows: [
          { tag: "A", cells: ["Peso do CMV (AV)", "64% -> 66% -> 67% (sobe: estrutural)"] },
          { tag: "B", cells: ["Margem bruta (AV)", "36% -> 34% -> 33% (cai de forma persistente)"] },
          { tag: "C", cells: ["Diagnostico", "Mudanca estrutural de rentabilidade a monitorar: nao flutuacao"] },
        ],
        closing:
          "Uma variacao isolada e ruido; uma tendencia persistente e estrutura. Cruzar AH e AV ao longo de periodos separa o achado relevante do acaso.",
        chart: {
          caption: "CMV e margem bruta em tres anos",
          valueLabel: "% da receita",
          data: [
            { name: "CMV A1", value: 64 },
            { name: "CMV A2", value: 66 },
            { name: "CMV A3", value: 67 },
            { name: "MB A1", value: 36 },
            { name: "MB A2", value: 34 },
            { name: "MB A3", value: 33 },
          ],
        },
      },
    },
    {
      id: "m7-c4",
      n: 4,
      title: "Leitura dinamica: os achados",
      difficulty: "super",
      concept:
        "Transformar AH e AV numa narrativa: destacar o achado principal, ligar a causa, separar sinal de ruido.",
      context:
        "O aluno recebe os resultados da AH e da AV da Aurora e precisa contar a historia: qual e o achado principal, qual o secundario e como nao se afogar em numeros.",
      displayFieldsCaption: "DRE comparativa da Comercial Aurora S.A.",
      displayTable: dreComparativa,
      steps: [
        {
          id: "m7-c4-e1",
          label: "Etapa 1 — O achado principal",
          question: "Reunindo AH e AV, qual e o principal achado sobre a Aurora?",
          points: 100,
          options: [
            {
              id: "c4e1-a",
              label: "Cresceu 25%, mas com margem menor: o custo do produto subiu mais que a receita.",
              correct: true,
              feedback: "E o achado material que conecta crescimento e composicao.",
            },
            {
              id: "c4e1-b",
              label: "Cresceu 25% de forma plenamente saudavel, pois todas as contas subiram juntas.",
              correct: false,
              feedback: "Falso: a margem bruta caiu; nao foi crescimento saudavel.",
            },
            {
              id: "c4e1-c",
              label: "Encolheu no periodo, pois a margem liquida caiu de 9% para 8% da receita.",
              correct: false,
              feedback: "Falso: a empresa cresceu; a margem caiu, mas receita e lucro subiram.",
            },
          ],
        },
        {
          id: "m7-c4-e2",
          label: "Etapa 2 — O achado secundario",
          question: "Qual achado secundario suaviza o quadro?",
          points: 100,
          options: [
            {
              id: "c4e2-a",
              label: "As despesas administrativas diluiram (7% -> 6%): houve ganho de escala parcial.",
              correct: true,
              feedback: "Parte da pressao do custo foi compensada pela diluicao da despesa fixa.",
            },
            {
              id: "c4e2-b",
              label: "As despesas administrativas inflaram (6% -> 7%): a estrutura ficou mais pesada.",
              correct: false,
              feedback: "Invertido: o peso caiu de 7% para 6%, nao o contrario.",
            },
            {
              id: "c4e2-c",
              label: "As despesas administrativas sumiram da DRE: deixaram de existir no periodo.",
              correct: false,
              feedback: "Elas continuam, apenas com peso menor.",
            },
          ],
        },
        {
          id: "m7-c4-e3",
          label: "Etapa 3 — Separar sinal de ruido",
          question: "Como evitar que a leitura dinamica vire uma lista de numeros sem sentido?",
          points: 100,
          options: [
            {
              id: "c4e3-a",
              label: "Destacando poucos achados materiais e ligando-os a uma causa economica plausivel.",
              correct: true,
              feedback: "Analise e hierarquia: o que importa, por que importa, o que fazer.",
            },
            {
              id: "c4e3-b",
              label: "Listando todas as variacoes de todas as contas, da maior para a menor, sem hierarquia.",
              correct: false,
              feedback: "Vira ruido: muitos numeros, nenhuma conclusao.",
            },
            {
              id: "c4e3-c",
              label: "Relatando apenas a conta que mais variou, ignorando o contexto das demais contas.",
              correct: false,
              feedback: "Estreito demais: o maior numero nem sempre e o achado mais relevante.",
            },
          ],
        },
      ],
      resolution: {
        prompt: "A historia da Aurora em tres frases",
        columns: ["Achado", "Sintese"],
        strengthHeader: "Leitura",
        rows: [
          {
            tag: "A",
            cells: ["Principal", "Crescimento de 25% com margem bruta caindo (CMV correu a frente)"],
            strength: "fraco",
            strengthLabel: "alerta",
          },
          {
            tag: "B",
            cells: ["Secundario", "Diluicao da despesa administrativa (ganho de escala parcial)"],
            strength: "forte",
            strengthLabel: "positivo",
          },
          {
            tag: "C",
            cells: ["Veredito dinamico", "Crescimento real, porem de menor qualidade: monitorar o custo"],
            strength: "parcial",
            strengthLabel: "nuance",
          },
        ],
        closing:
          "A leitura dinamica transforma numeros em narrativa. O bom analista destaca o que importa, conecta AH e AV e aponta a causa provavel.",
      },
    },
  ],
};
