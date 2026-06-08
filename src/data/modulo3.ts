import type { ModuleData } from '@/types/scenario';

export const modulo3: ModuleData = {
  n: 3,
  eyebrow: "Modulo 3 · Aula 3 de 15",
  title: "Principios Contabeis e Qualidade da Informacao",
  subtitle: "Ceticismo profissional: lucro verdadeiro, qualidade da informacao, estimativas e comparabilidade.",
  intro:
    "O Modulo 3 forma o ceticismo profissional do aluno. Os numeros podem estar corretos segundo as normas e ainda assim enganar, porque dependem de principios, estimativas e julgamentos. O aluno aprende a perguntar se o numero e confiavel, comparavel e recorrente antes de tirar qualquer conclusao.",
  scenarios: [
    {
      id: "m3-c1",
      n: 1,
      title: "Lucro verdadeiro, leitura enganosa",
      difficulty: "intermediario",
      concept:
        "Um lucro correto pelas normas pode nao representar a capacidade sustentavel de gerar resultado.",
      context:
        "A Comercial Aurora S.A. anuncia lucro recorde de R$ 12 mi contra R$ 4 mi no ano anterior. Os numeros estao corretos segundo as normas. Ainda assim, o analista desconfia. O aluno descobre por que um lucro verdadeiro pode enganar e como o regime de competencia se separa do caixa.",
      displayFieldsCaption: "displayFields",
      displayFields: [
        { label: "Lucro liquido — ano atual", value: "R$ 12,0 mi" },
        { label: "Lucro liquido — ano anterior", value: "R$ 4,0 mi" },
        { label: "Ganho com venda de imovel (nao-recorrente)", value: "R$ 9,0 mi" },
        { label: "Lucro operacional recorrente", value: "R$ 3,0 mi" },
        { label: "Caixa gerado pelas operacoes", value: "R$ 2,0 mi" },
      ],
      steps: [
        {
          id: "m3-c1-e1",
          label: "Etapa 1 — O primeiro olhar critico",
          question: "Diante do lucro recorde, o que o analista checa antes de comemorar?",
          points: 100,
          options: [
            {
              id: "c1e1-a",
              label: "Se o lucro e recorrente ou veio de um evento unico, como a venda de um ativo.",
              correct: true,
              feedback: "A recorrencia e a chave: lucros de eventos unicos nao se repetem no futuro.",
            },
            {
              id: "c1e1-b",
              label: "Se o lucro foi maior que o do principal concorrente do setor naquele ano.",
              correct: false,
              feedback: "Comparar e util depois; primeiro e preciso entender a natureza do proprio lucro.",
            },
            {
              id: "c1e1-c",
              label: "Se o lucro foi divulgado dentro do prazo regulatorio exigido pela autoridade.",
              correct: false,
              feedback: "O prazo importa, mas nao diz nada sobre a qualidade do resultado.",
            },
          ],
        },
        {
          id: "m3-c1-e2",
          label: "Etapa 2 — Isolando o nao-recorrente",
          question: "Descobre-se que R$ 9 mi vieram da venda de um imovel. Como tratar esse valor?",
          points: 100,
          options: [
            {
              id: "c1e2-a",
              label: "Separa-lo como nao-recorrente; o lucro sustentavel e de apenas R$ 3 mi.",
              correct: true,
              feedback: "O recorrente, na verdade, caiu de R$ 4 mi para R$ 3 mi: o oposto da boa noticia.",
            },
            {
              id: "c1e2-b",
              label: "Mante-lo no lucro principal; afinal, foi um ganho real que entrou no resultado.",
              correct: false,
              feedback: "Foi real, mas nao se repete; mante-lo distorce a leitura da capacidade futura.",
            },
            {
              id: "c1e2-c",
              label: "Soma-lo ao proximo exercicio, pois o efeito do imovel se repetira no futuro.",
              correct: false,
              feedback: "Venda de ativo e evento unico; nao ha efeito recorrente a projetar.",
            },
          ],
        },
        {
          id: "m3-c1-e3",
          label: "Etapa 3 — Lucro contra caixa",
          question: "O lucro foi R$ 12 mi, mas o caixa das operacoes foi so R$ 2 mi. O que isso sinaliza?",
          points: 100,
          options: [
            {
              id: "c1e3-a",
              label: "Que parte do lucro nao virou caixa; e preciso checar a qualidade do resultado.",
              correct: true,
              feedback: "Regime de competencia: lucro e caixa caminham separados. A diferenca e uma bandeira.",
            },
            {
              id: "c1e3-b",
              label: "Que houve erro de calculo, pois lucro e caixa operacional deveriam coincidir.",
              correct: false,
              feedback: "Nao ha erro: competencia nao e caixa; esse e o funcionamento normal da contabilidade.",
            },
            {
              id: "c1e3-c",
              label: "Que o caixa e irrelevante, pois o lucro e a medida definitiva de desempenho.",
              correct: false,
              feedback: "O caixa e justamente o teste de realidade do lucro reportado.",
            },
          ],
        },
      ],
      resolution: {
        prompt: "O mesmo lucro, tres leituras",
        columns: ["Leitura", "O que ela enxerga"],
        strengthHeader: "Veredito",
        rows: [
          {
            tag: "A",
            cells: ["Lucro recorde de R$ 12 mi!", "Toma o numero de capa pelo valor de face"],
            strength: "fraco",
            strengthLabel: "ingenua",
          },
          {
            tag: "B",
            cells: ["O recorrente caiu de R$ 4 para R$ 3 mi", "Isola o evento nao-recorrente"],
            strength: "forte",
            strengthLabel: "critica",
          },
          {
            tag: "C",
            cells: ["Lucro R$ 12 mi, caixa R$ 2 mi", "Confronta resultado e geracao de caixa"],
            strength: "forte",
            strengthLabel: "qualidade",
          },
        ],
        closing:
          "O lucro pode ser verdadeiro, correto pelas normas, e ainda enganoso, por nao representar a capacidade sustentavel de gerar resultado. Analisar e ir alem do numero de capa.",
        chart: {
          caption: "Lucro de capa, lucro recorrente e caixa operacional",
          valueLabel: "R$ mi",
          data: [
            { name: "Lucro de capa", value: 12 },
            { name: "Lucro recorrente", value: 3 },
            { name: "Caixa operacional", value: 2 },
          ],
        },
      },
    },
    {
      id: "m3-c2",
      n: 2,
      title: "As caracteristicas qualitativas",
      difficulty: "intermediario",
      concept: "O que torna a informacao util e os trade-offs entre essas qualidades.",
      context:
        "A Estrutura Conceitual define as caracteristicas que tornam a informacao contabil util: as fundamentais, relevancia e representacao fidedigna, e as de melhoria, comparabilidade, verificabilidade, tempestividade e compreensibilidade. O aluno aplica essas qualidades a situacoes reais e percebe que, as vezes, elas competem entre si.",
      steps: [
        {
          id: "m3-c2-e1",
          label: "Etapa 1 — Um trade-off real",
          question: "A empresa pode divulgar cedo, mas com estimativas ainda imprecisas. Que tensao e essa?",
          points: 100,
          options: [
            {
              id: "c2e1-a",
              label: "Tempestividade contra representacao fidedigna: divulgar cedo pode reduzir a precisao.",
              correct: true,
              feedback: "Esperar melhora a fidedignidade, mas a informacao tardia perde relevancia.",
            },
            {
              id: "c2e1-b",
              label: "Comparabilidade contra compreensibilidade: o numero fica dificil de comparar e ler.",
              correct: false,
              feedback: "Nao e o conflito do caso: aqui a questao e prazo contra precisao.",
            },
            {
              id: "c2e1-c",
              label: "Verificabilidade contra relevancia: a informacao deixa de poder ser checada.",
              correct: false,
              feedback: "Divulgar cedo nao impede a checagem; o que muda e a precisao da estimativa.",
            },
          ],
        },
        {
          id: "m3-c2-e2",
          label: "Etapa 2 — As fundamentais",
          question: "Duas caracteristicas sao fundamentais na estrutura conceitual. Quais?",
          points: 100,
          options: [
            {
              id: "c2e2-a",
              label: "Relevancia e representacao fidedigna — sem elas, a informacao nao e util.",
              correct: true,
              feedback: "Sao o piso: uma informacao irrelevante ou infiel nao serve, por melhor que seja o resto.",
            },
            {
              id: "c2e2-b",
              label: "Comparabilidade e consistencia — garantem analise entre empresas e periodos.",
              correct: false,
              feedback: "Importantes, mas sao de melhoria: aprimoram informacao que ja e util.",
            },
            {
              id: "c2e2-c",
              label: "Tempestividade e verificabilidade — asseguram rapidez e checagem dos numeros.",
              correct: false,
              feedback: "Tambem de melhoria; nao substituem relevancia nem fidedignidade.",
            },
          ],
        },
        {
          id: "m3-c2-e3",
          label: "Etapa 3 — Qual qualidade falhou?",
          question: "Uma nota e tao tecnica e detalhada que o usuario comum nao a entende. O que falha?",
          points: 100,
          options: [
            {
              id: "c2e3-a",
              label: "Compreensibilidade — a informacao existe, mas nao e assimilavel pelo usuario.",
              correct: true,
              feedback: "Informacao que ninguem entende nao cumpre seu papel de comunicar.",
            },
            {
              id: "c2e3-b",
              label: "Relevancia — a informacao nao influencia nenhuma decisao economica do usuario.",
              correct: false,
              feedback: "A informacao ate e relevante; o problema e a forma incompreensivel.",
            },
            {
              id: "c2e3-c",
              label: "Verificabilidade — a informacao nao pode ser confirmada por terceiros independentes.",
              correct: false,
              feedback: "Ela pode ate ser verificavel; o que falha e a clareza para o leitor.",
            },
          ],
        },
      ],
      resolution: {
        prompt: "Tres situacoes, tres qualidades",
        columns: ["Situacao", "Qualidade comprometida"],
        rows: [
          {
            tag: "A",
            cells: ["A empresa atrasa o balanco para caprichar nos numeros", "Tempestividade: informacao tardia perde relevancia"],
          },
          {
            tag: "B",
            cells: ["Duas empresas usam metodos diferentes e ninguem consegue compara-las", "Comparabilidade"],
          },
          {
            tag: "C",
            cells: ["Relatorio claro, porem baseado em premissas que ninguem pode checar", "Verificabilidade"],
          },
        ],
        closing:
          "A informacao util equilibra caracteristicas que as vezes competem. Reconhecer o trade-off e qual qualidade esta em jogo e parte da visao critica.",
      },
    },
    {
      id: "m3-c3",
      n: 3,
      title: "Estimativas e julgamentos",
      difficulty: "avancado",
      concept: "Boa parte dos numeros nao e fato, e sim estimativa; e o julgamento pode ser usado.",
      context:
        "Muitos numeros contabeis dependem de estimativa: vida util, provisoes, perdas esperadas, valor justo, impairment. O aluno desenvolve ceticismo sobre onde o julgamento entra e como pequenas escolhas, somadas, mudam o lucro.",
      steps: [
        {
          id: "m3-c3-e1",
          label: "Etapa 1 — Fato ou estimativa?",
          question: "Qual destes numeros e, em essencia, uma estimativa, e nao um fato observado?",
          points: 100,
          options: [
            {
              id: "c3e1-a",
              label: "A provisao para creditos duvidosos, baseada na perda esperada dos recebiveis.",
              correct: true,
              feedback: "Ninguem observa a perda futura; ela e estimada por julgamento.",
            },
            {
              id: "c3e1-b",
              label: "O saldo bancario conciliado com o extrato da conta corrente da empresa.",
              correct: false,
              feedback: "E um fato verificavel: confere com o extrato do banco.",
            },
            {
              id: "c3e1-c",
              label: "O valor nominal de uma duplicata efetivamente recebida no periodo.",
              correct: false,
              feedback: "E um fato consumado: o dinheiro entrou no valor registrado.",
            },
          ],
        },
        {
          id: "m3-c3-e2",
          label: "Etapa 2 — Estimativa, erro ou pratica?",
          question:
            "A empresa alterou a vida util das maquinas de 10 para 15 anos, com laudo tecnico. Como classificar?",
          points: 100,
          options: [
            {
              id: "c3e2-a",
              label: "Mudanca de estimativa, aplicada de forma prospectiva, valendo a partir de agora.",
              correct: true,
              feedback: "Nova informacao ajusta a estimativa; nao se reabrem os anos passados.",
            },
            {
              id: "c3e2-b",
              label: "Correcao de erro, exigindo a reapresentacao dos resultados de anos anteriores.",
              correct: false,
              feedback: "Nao houve erro; havia uma estimativa que foi atualizada.",
            },
            {
              id: "c3e2-c",
              label: "Mudanca de pratica contabil, exigindo a aprovacao previa do orgao regulador.",
              correct: false,
              feedback: "Vida util e estimativa, nao politica contabil; nao ha aprovacao previa.",
            },
          ],
        },
        {
          id: "m3-c3-e3",
          label: "Etapa 3 — O padrao suspeito",
          question:
            "A gestao escolheu premissas no limite otimista em varias estimativas ao mesmo tempo. O que suspeitar?",
          points: 100,
          options: [
            {
              id: "c3e3-a",
              label: "Gerenciamento de resultado: pequenos otimismos somados inflam o lucro de forma sutil.",
              correct: true,
              feedback: "Cada escolha parece defensavel; o padrao sistematico e o que acende o alerta.",
            },
            {
              id: "c3e3-b",
              label: "Conservadorismo excessivo: as premissas reduzem o lucro alem do necessario.",
              correct: false,
              feedback: "E o oposto: premissas otimistas elevam o lucro, nao o reduzem.",
            },
            {
              id: "c3e3-c",
              label: "Mero acaso estatistico: estimativas isoladas nao revelam padrao de intencao.",
              correct: false,
              feedback: "Justamente o ponto: nao sao isoladas, todas pendem para o mesmo lado.",
            },
          ],
        },
      ],
      resolution: {
        prompt: "A mesma carteira, tres lucros",
        columns: ["Premissa de perda", "Provisao", "Efeito no lucro"],
        rows: [
          {
            tag: "A",
            cells: ["2% (otimista)", "R$ 2 mi", "Lucro maior"],
          },
          {
            tag: "B",
            cells: ["5% (base)", "R$ 5 mi", "Lucro intermediario"],
          },
          {
            tag: "C",
            cells: ["9% (conservadora)", "R$ 9 mi", "Lucro menor"],
          },
        ],
        closing:
          "A mesma carteira produz lucros diferentes so pela estimativa escolhida. Por isso o analista questiona as premissas, nao apenas le o resultado pronto.",
        chart: {
          caption: "Provisao sobre carteira de recebiveis de R$ 100 mi",
          valueLabel: "R$ mi",
          data: [
            { name: "2% otimista", value: 2 },
            { name: "5% base", value: 5 },
            { name: "9% conservadora", value: 9 },
          ],
        },
      },
    },
    {
      id: "m3-c4",
      n: 4,
      title: "Comparabilidade e consistencia",
      difficulty: "super",
      concept:
        "Comparar entre empresas exige metodos comparaveis; comparar ao longo do tempo exige consistencia.",
      context:
        "Duas concorrentes do mesmo setor, Alfa e Beta, reportam lucros parecidos. Mas avaliam estoque por metodos diferentes e uma delas mudou de metodo entre dois anos. O aluno desfaz as armadilhas de comparabilidade e consistencia antes de comparar qualquer indice.",
      displayFieldsCaption: "displayFields",
      displayTable: {
        columns: ["Empresa", "Metodo de estoque", "Observacao"],
        rows: [
          ["Alfa", "PEPS (FIFO)", "Mesmo metodo nos dois anos"],
          ["Beta", "Custo medio -> PEPS", "Trocou de metodo do ano 1 para o ano 2"],
        ],
      },
      steps: [
        {
          id: "m3-c4-e1",
          label: "Etapa 1 — Comparar entre empresas",
          question: "Alfa usa PEPS e Beta usa custo medio. O que isso compromete na comparacao direta?",
          points: 100,
          options: [
            {
              id: "c4e1-a",
              label: "A comparabilidade: metodos diferentes produzem CMV e estoques nao comparaveis.",
              correct: true,
              feedback: "Os numeros medem coisas calculadas de formas distintas; o igual e ilusorio.",
            },
            {
              id: "c4e1-b",
              label: "A relevancia: os numeros deixam de influenciar qualquer decisao do investidor.",
              correct: false,
              feedback: "Os numeros sao relevantes; o problema e coloca-los lado a lado sem ajuste.",
            },
            {
              id: "c4e1-c",
              label: "A tempestividade: a informacao chega tarde demais para ser util na comparacao.",
              correct: false,
              feedback: "O prazo nao e a questao; e a base de calculo diferente entre as empresas.",
            },
          ],
        },
        {
          id: "m3-c4-e2",
          label: "Etapa 2 — Comparar ao longo do tempo",
          question: "Beta trocou de custo medio para PEPS de um ano para o outro. Qual principio foi afetado?",
          points: 100,
          options: [
            {
              id: "c4e2-a",
              label: "A consistencia: mudar de metodo entre periodos quebra a comparacao ao longo do tempo.",
              correct: true,
              feedback: "A serie historica da propria Beta deixa de ser comparavel consigo mesma.",
            },
            {
              id: "c4e2-b",
              label: "A competencia: a troca antecipa receitas para um periodo ao qual nao pertencem.",
              correct: false,
              feedback: "Trocar metodo de estoque nao desloca receitas no tempo.",
            },
            {
              id: "c4e2-c",
              label: "A entidade: a troca mistura o patrimonio da empresa com o dos seus socios.",
              correct: false,
              feedback: "Nada aqui confunde empresa e socios; o tema e consistencia temporal.",
            },
          ],
        },
        {
          id: "m3-c4-e3",
          label: "Etapa 3 — Como comparar com justica",
          question: "Para comparar Alfa e Beta de forma justa, o que o analista deve fazer?",
          points: 100,
          options: [
            {
              id: "c4e3-a",
              label: "Ajustar os numeros a uma base comum antes de comparar os indicadores.",
              correct: true,
              feedback: "As notas explicativas revelam os metodos; com elas da para reconciliar as bases.",
            },
            {
              id: "c4e3-b",
              label: "Comparar os indicadores diretamente, pois pequenas diferencas se compensam.",
              correct: false,
              feedback: "As diferencas de metodo nao se compensam; elas enviesam a comparacao.",
            },
            {
              id: "c4e3-c",
              label: "Descartar a empresa que usa o metodo menos popular no mercado.",
              correct: false,
              feedback: "Popularidade nao e criterio; o metodo pode ser perfeitamente valido.",
            },
          ],
        },
      ],
      resolution: {
        prompt: "Comparar com cuidado",
        columns: ["Comparacao", "Veredito"],
        strengthHeader: "Validade",
        rows: [
          {
            tag: "A",
            cells: ["Alfa (PEPS) x Beta (medio), sem ajuste", "Metodos diferentes"],
            strength: "fraco",
            strengthLabel: "invalida",
          },
          {
            tag: "B",
            cells: ["Beta ano 1 x Beta ano 2 (mudou de metodo)", "Quebra de consistencia"],
            strength: "fraco",
            strengthLabel: "invalida",
          },
          {
            tag: "C",
            cells: ["Ambas ajustadas a mesma base, depois comparadas", "Base comum"],
            strength: "forte",
            strengthLabel: "valida",
          },
        ],
        closing:
          "Comparabilidade entre empresas e consistencia ao longo do tempo sao pre-condicoes da analise. Sem elas, indices parecidos podem ser incomparaveis. As notas explicativas revelam os metodos adotados: leitura obrigatoria antes de comparar.",
      },
    },
  ],
};
