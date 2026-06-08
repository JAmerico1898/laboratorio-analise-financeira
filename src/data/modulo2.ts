import type { ModuleData } from "@/types/scenario";

export const modulo2: ModuleData = {
  "n": 2,
  "eyebrow": "Módulo 2 · Aula 2 de 15",
  "title": "Estrutura e Lógica das Demonstrações Financeiras",
  "subtitle": "O Módulo 2 ensina o aluno a \"ler o mapa\" antes de viajar: o que cada demonstração mostra, qual a lógica econômica por trás das contas e como as demonstrações se conectam num sistema único.",
  "intro": "O Módulo 2 ensina o aluno a \"ler o mapa\" antes de viajar: o que cada demonstração mostra, qual a lógica econômica por trás das contas e como as demonstrações se conectam num sistema único. O instrumento didático continua sendo a árvore de decisão — o aluno raciocina, escolhe e vê a consequência.",
  "scenarios": [
    {
      "id": "m2-c1",
      "n": 1,
      "title": "Cada demonstração no seu lugar",
      "difficulty": "intermediario",
      "concept": "o que cada demonstração mostra e a pergunta que cada uma responde.",
      "context": "A **Comercial Aurora S.A.** publica quatro demonstrações principais — Balanço Patrimonial, DRE, DFC e DMPL — além das Notas Explicativas. Cada uma responde a uma pergunta diferente. No papel de analista iniciante, o aluno associa cada pergunta à demonstração correta.",
      "displayTable": {
        "columns": [
          "Demonstração",
          "Pergunta que responde",
          "Recorte de tempo"
        ],
        "rows": [
          [
            "Balanço Patrimonial (BP)",
            "O que a empresa possui e deve?",
            "Instante (data)"
          ],
          [
            "Dem. do Resultado (DRE)",
            "A empresa deu lucro ou prejuízo?",
            "Período"
          ],
          [
            "Dem. dos Fluxos de Caixa (DFC)",
            "Por que o caixa mudou?",
            "Período"
          ],
          [
            "Dem. das Mutações do PL (DMPL)",
            "O que alterou o patrimônio líquido?",
            "Período"
          ]
        ]
      },
      "steps": [
        {
          "id": "m2-c1-e1",
          "label": "Etapa 1 — Posição num instante",
          "question": "Onde vejo, numa data específica, quanto a empresa possui e quanto deve?",
          "points": 100,
          "options": [
            {
              "id": "c1e1-a",
              "label": "No Balanço Patrimonial — retrato dos saldos de ativos, passivos e PL numa data.",
              "correct": true,
              "feedback": "É a única demonstração \"estática\", uma fotografia em um instante."
            },
            {
              "id": "c1e1-b",
              "label": "Na Demonstração do Resultado — fluxo de receitas e despesas ao longo do período.",
              "correct": false,
              "feedback": "A DRE cobre um período inteiro, não uma data; não mostra saldos patrimoniais."
            },
            {
              "id": "c1e1-c",
              "label": "Na Demonstração dos Fluxos de Caixa — fluxo de entradas e saídas ao longo do período.",
              "correct": false,
              "feedback": "A DFC cobre um período e trata só de caixa, não de todo o patrimônio."
            }
          ]
        },
        {
          "id": "m2-c1-e2",
          "label": "Etapa 2 — Resultado do período",
          "question": "Onde descubro se a empresa teve lucro ou prejuízo no ano?",
          "points": 100,
          "options": [
            {
              "id": "c1e2-a",
              "label": "Na Demonstração do Resultado — confronta receitas e despesas para apurar o lucro.",
              "correct": true,
              "feedback": "A DRE é, por definição, a demonstração do desempenho do período."
            },
            {
              "id": "c1e2-b",
              "label": "No Balanço Patrimonial — relaciona os saldos de bens, direitos e obrigações.",
              "correct": false,
              "feedback": "O BP mostra a posição, não o desempenho do período."
            },
            {
              "id": "c1e2-c",
              "label": "Nas Notas Explicativas — detalham critérios e composições das demais.",
              "correct": false,
              "feedback": "As Notas complementam; não apuram o resultado por si sós."
            }
          ]
        },
        {
          "id": "m2-c1-e3",
          "label": "Etapa 3 — Variação do caixa",
          "question": "Onde entendo por que o caixa aumentou ou diminuiu no ano?",
          "points": 100,
          "options": [
            {
              "id": "c1e3-a",
              "label": "Na Demonstração dos Fluxos de Caixa — separa o caixa em operacional, investimento e financiamento.",
              "correct": true,
              "feedback": "É a demonstração desenhada para explicar a variação do caixa."
            },
            {
              "id": "c1e3-b",
              "label": "Na Demonstração do Resultado — apura o lucro pelo regime de competência.",
              "correct": false,
              "feedback": "Lucro ≠ caixa: a DRE não acompanha a entrada e saída de dinheiro."
            },
            {
              "id": "c1e3-c",
              "label": "Na Demonstração das Mutações do PL — registra as variações das contas do PL.",
              "correct": false,
              "feedback": "A DMPL trata do patrimônio líquido, não do caixa."
            }
          ]
        }
      ],
      "resolution": {
        "prompt": "a pergunta de cada demonstração",
        "columns": [
          "Pergunta do usuário",
          "Demonstração que responde"
        ],
        "rows": [
          {
            "tag": "A",
            "cells": [
              "\"Qual o endividamento na data do balanço?\"",
              "Balanço Patrimonial"
            ]
          },
          {
            "tag": "B",
            "cells": [
              "\"A operação gerou caixa no ano?\"",
              "Dem. dos Fluxos de Caixa"
            ]
          },
          {
            "tag": "C",
            "cells": [
              "\"Houve distribuição de dividendos?\"",
              "Dem. das Mutações do PL"
            ]
          }
        ],
        "closing": "cada demonstração tem um foco. As **Notas Explicativas** atravessam todas elas, detalhando critérios e composições. Saber \"para onde olhar\" é o primeiro passo da análise."
      }
    },
    {
      "id": "m2-c2",
      "n": 2,
      "title": "A lógica econômica das contas",
      "difficulty": "intermediario",
      "concept": "todo fato econômico tem dupla face (origem e aplicação de recursos).",
      "context": "A **Comercial Aurora S.A.** realiza três operações simples. O aluno mapeia cada evento para seus efeitos — sem precisar do mecanismo formal de partidas dobradas, mas entendendo que **cada fato afeta duas coisas ao mesmo tempo**. *(Note como, em cada etapa, as três opções começam igual: o aluno decide pela essência.)*",
      "steps": [
        {
          "id": "m2-c2-e1",
          "label": "Etapa 1 — Venda a prazo de R$ 100 mil",
          "question": "A Aurora vende mercadorias por R$ 100 mil, para receber em 30 dias. Efeito imediato?",
          "points": 100,
          "options": [
            {
              "id": "c2e1-a",
              "label": "Reconhece receita na DRE e aumenta contas a receber no ativo, sem entrada de caixa.",
              "correct": true,
              "feedback": "Regime de competência: a receita é da venda, não do recebimento. O caixa só virá depois."
            },
            {
              "id": "c2e1-b",
              "label": "Reconhece receita na DRE e aumenta o caixa no ativo, pois a venda foi concretizada.",
              "correct": false,
              "feedback": "Confunde competência com caixa: nada entrou no caixa ainda."
            },
            {
              "id": "c2e1-c",
              "label": "Reconhece receita na DRE e aumenta o passivo, pois há valores a quitar com o cliente.",
              "correct": false,
              "feedback": "Inverte os polos: o cliente deve à empresa (ativo), não o contrário."
            }
          ]
        },
        {
          "id": "m2-c2-e2",
          "label": "Etapa 2 — Empréstimo bancário de R$ 200 mil",
          "question": "A Aurora capta R$ 200 mil de empréstimo no banco. Efeito imediato?",
          "points": 100,
          "options": [
            {
              "id": "c2e2-a",
              "label": "Aumenta o caixa no ativo e aumenta o passivo (empréstimos), sem afetar o resultado.",
              "correct": true,
              "feedback": "Captar dívida não é ganho: é uma origem de recurso de terceiros a devolver."
            },
            {
              "id": "c2e2-b",
              "label": "Aumenta o caixa no ativo e aumenta a receita na DRE, pois entrou dinheiro na empresa.",
              "correct": false,
              "feedback": "Entrada de caixa não é receita: empréstimo não gera resultado."
            },
            {
              "id": "c2e2-c",
              "label": "Aumenta o caixa no ativo e aumenta o patrimônio líquido, pois o dinheiro fica na empresa.",
              "correct": false,
              "feedback": "O recurso é de terceiros (passivo), não dos sócios (PL)."
            }
          ]
        },
        {
          "id": "m2-c2-e3",
          "label": "Etapa 3 — Pagamento de salários de R$ 50 mil, à vista",
          "question": "A Aurora paga R$ 50 mil de salários do mês, à vista. Efeito imediato?",
          "points": 100,
          "options": [
            {
              "id": "c2e3-a",
              "label": "Reconhece despesa na DRE e reduz o caixa no ativo, diminuindo o resultado.",
              "correct": true,
              "feedback": "Despesa incorrida e paga: consome resultado e consome caixa ao mesmo tempo."
            },
            {
              "id": "c2e3-b",
              "label": "Reconhece despesa na DRE e aumenta o passivo, pois salários são uma obrigação.",
              "correct": false,
              "feedback": "Seria assim se estivesse a pagar; como foi à vista, o passivo não cresce."
            },
            {
              "id": "c2e3-c",
              "label": "Reconhece despesa na DRE e reduz o patrimônio líquido diretamente, sem tocar no caixa.",
              "correct": false,
              "feedback": "A despesa reduz o PL via resultado, mas aqui o caixa também cai (foi pago)."
            }
          ]
        }
      ],
      "resolution": {
        "prompt": "o duplo efeito de cada evento",
        "columns": [
          "Evento",
          "As duas faces do fato"
        ],
        "rows": [
          {
            "tag": "A",
            "cells": [
              "Venda a prazo",
              "DRE (receita ↑) + BP (contas a receber ↑); caixa só depois"
            ]
          },
          {
            "tag": "B",
            "cells": [
              "Empréstimo bancário",
              "BP (caixa ↑ e dívida ↑) + DFC (financiamento); sem resultado"
            ]
          },
          {
            "tag": "C",
            "cells": [
              "Salários à vista",
              "DRE (despesa ↑) + BP/DFC (caixa ↓); resultado e caixa caem"
            ]
          }
        ],
        "closing": "todo fato econômico tem **dupla face** — uma origem e uma aplicação de recursos. Essa é a base intuitiva da partida dobrada, que estudaremos formalmente adiante."
      }
    },
    {
      "id": "m2-c3",
      "n": 3,
      "title": "O mesmo fato em vários lugares",
      "difficulty": "intermediario",
      "concept": "um único fato deixa \"rastros\" em mais de uma demonstração.",
      "context": "Alguns fatos econômicos aparecem **simultaneamente** em mais de uma demonstração. O aluno identifica esses cruzamentos — o primeiro passo para enxergar as demonstrações como um sistema. *(Em cada etapa, as três opções começam pela mesma demonstração; só o segundo rastro muda.)*",
      "steps": [
        {
          "id": "m2-c3-e1",
          "label": "Etapa 1 — Lucro líquido do exercício",
          "question": "Além da DRE, onde o lucro líquido do exercício deixa rastro?",
          "points": 100,
          "options": [
            {
              "id": "c3e1-a",
              "label": "Na DRE, como resultado final, e na DMPL, aumentando os lucros do patrimônio líquido.",
              "correct": true,
              "feedback": "O lucro retido transita pela DMPL e engorda o PL no Balanço."
            },
            {
              "id": "c3e1-b",
              "label": "Na DRE, como resultado final, e no passivo do BP, como uma obrigação a pagar.",
              "correct": false,
              "feedback": "Lucro é dos sócios (PL), não uma dívida da empresa."
            },
            {
              "id": "c3e1-c",
              "label": "Na DRE, como resultado final, e no ativo do BP, como uma conta a receber.",
              "correct": false,
              "feedback": "Lucro não é um direito a receber; ele compõe o patrimônio líquido."
            }
          ]
        },
        {
          "id": "m2-c3-e2",
          "label": "Etapa 2 — Depreciação do período",
          "question": "Além de ser despesa na DRE, onde a depreciação do ano deixa rastro?",
          "points": 100,
          "options": [
            {
              "id": "c3e2-a",
              "label": "Na DRE, como despesa, e no BP, reduzindo o imobilizado (depreciação acumulada).",
              "correct": true,
              "feedback": "É despesa que não consome caixa: desgasta o ativo ao longo do tempo."
            },
            {
              "id": "c3e2-b",
              "label": "Na DRE, como despesa, e no BP, aumentando o passivo de longo prazo.",
              "correct": false,
              "feedback": "Depreciação não cria dívida; ela reduz o ativo."
            },
            {
              "id": "c3e2-c",
              "label": "Na DRE, como despesa, e na DFC, como uma saída de caixa de investimento.",
              "correct": false,
              "feedback": "Depreciação é item \"não-caixa\": nenhum dinheiro sai por causa dela."
            }
          ]
        },
        {
          "id": "m2-c3-e3",
          "label": "Etapa 3 — Compra de equipamento à vista (R$ 80 mil)",
          "question": "Além de aumentar o imobilizado no BP, onde essa compra deixa rastro?",
          "points": 100,
          "options": [
            {
              "id": "c3e3-a",
              "label": "No BP, aumentando o imobilizado, e na DFC, como saída de caixa de investimento.",
              "correct": true,
              "feedback": "Comprar um bem durável é investimento; o gasto vira ativo, não despesa."
            },
            {
              "id": "c3e3-b",
              "label": "No BP, aumentando o imobilizado, e na DRE, como despesa integral do período.",
              "correct": false,
              "feedback": "O bem é capitalizado; vira despesa só aos poucos, via depreciação."
            },
            {
              "id": "c3e3-c",
              "label": "No BP, aumentando o imobilizado, e na DRE, como receita pela entrada do bem.",
              "correct": false,
              "feedback": "Adquirir um ativo nunca é receita; é troca de caixa por imobilizado."
            }
          ]
        }
      ],
      "resolution": {
        "prompt": "rastros cruzados",
        "columns": [
          "Fato",
          "Demonstrações conectadas"
        ],
        "rows": [
          {
            "tag": "A",
            "cells": [
              "Lucro líquido",
              "DRE → DMPL → BP (patrimônio líquido)"
            ]
          },
          {
            "tag": "B",
            "cells": [
              "Depreciação",
              "DRE (despesa) → BP (imobilizado líquido ↓); não-caixa na DFC"
            ]
          },
          {
            "tag": "C",
            "cells": [
              "Compra de equipamento",
              "BP (imobilizado ↑) → DFC (investimento ↓)"
            ]
          }
        ],
        "closing": "rastrear um fato em várias demonstrações revela que elas contam **a mesma história sob ângulos diferentes**. É a antessala da articulação contábil."
      }
    },
    {
      "id": "m2-c4",
      "n": 4,
      "title": "Conexões entre as demonstrações",
      "difficulty": "super",
      "concept": "a articulação — o resultado, o caixa e o patrimônio precisam \"fechar\" entre si.",
      "context": "As demonstrações não são independentes: formam um **sistema articulado**. A **Comercial Aurora** fechou o ano com lucro de R$ 4 mi, mas o caixa *caiu*. O aluno fecha as pontes que garantem a consistência do conjunto e entende por que lucro e caixa não são a mesma coisa.",
      "steps": [
        {
          "id": "m2-c4-e1",
          "label": "Etapa 1 — Ponte DRE → Balanço",
          "question": "Como o resultado apurado na DRE chega ao Balanço Patrimonial?",
          "points": 100,
          "options": [
            {
              "id": "c4e1-a",
              "label": "Pelo lucro líquido, que transita pela DMPL e aumenta os lucros acumulados no PL.",
              "correct": true,
              "feedback": "A DMPL é a \"ponte\": leva o resultado da DRE para o patrimônio no BP."
            },
            {
              "id": "c4e1-b",
              "label": "Pelo lucro líquido, que é lançado diretamente como caixa no ativo circulante do BP.",
              "correct": false,
              "feedback": "Lucro não é caixa; ele não entra como dinheiro no ativo."
            },
            {
              "id": "c4e1-c",
              "label": "Pelo lucro líquido, que é registrado como receita diferida no passivo do BP.",
              "correct": false,
              "feedback": "Lucro pertence aos sócios (PL), não é uma obrigação no passivo."
            }
          ]
        },
        {
          "id": "m2-c4-e2",
          "label": "Etapa 2 — Ponte DFC → Balanço",
          "question": "Como a Demonstração dos Fluxos de Caixa se conecta ao Balanço?",
          "points": 100,
          "options": [
            {
              "id": "c4e2-a",
              "label": "A variação de caixa da DFC explica a diferença entre o caixa inicial e o final no BP.",
              "correct": true,
              "feedback": "A DFC detalha por que o saldo de caixa do BP mudou de um ano para o outro."
            },
            {
              "id": "c4e2-b",
              "label": "A variação de caixa da DFC é somada ao patrimônio líquido inicial e final no BP.",
              "correct": false,
              "feedback": "A DFC fala de caixa, não de patrimônio líquido."
            },
            {
              "id": "c4e2-c",
              "label": "A variação de caixa da DFC corresponde ao lucro líquido apurado na DRE do período.",
              "correct": false,
              "feedback": "Justamente o ponto do cenário: variação de caixa ≠ lucro."
            }
          ]
        },
        {
          "id": "m2-c4-e3",
          "label": "Etapa 3 — Por que lucro ≠ caixa",
          "question": "A Aurora teve lucro de R$ 4 mi, mas o caixa caiu. Como isso é possível?",
          "points": 100,
          "options": [
            {
              "id": "c4e3-a",
              "label": "Pelo regime de competência: vendas a prazo e investimentos consomem caixa sem reduzir o lucro.",
              "correct": true,
              "feedback": "O lucro reconhece a venda; o caixa só entra quando o cliente paga. Capex também drena caixa."
            },
            {
              "id": "c4e3-b",
              "label": "Por erro de fechamento: um lucro positivo sempre deveria elevar o caixa no período.",
              "correct": false,
              "feedback": "É exatamente a confusão que o cenário desfaz: lucro e caixa andam separados."
            },
            {
              "id": "c4e3-c",
              "label": "Por dividendos pagos: distribuir lucro é a única causa de caixa cair com lucro positivo.",
              "correct": false,
              "feedback": "É uma causa possível, mas longe de ser a única (recebíveis, estoques, capex)."
            }
          ]
        }
      ],
      "resolution": {
        "prompt": "o sistema se fecha",
        "columns": [
          "Conexão",
          "Identidade que se verifica"
        ],
        "rows": [
          {
            "tag": "A",
            "cells": [
              "DRE → DMPL → BP",
              "Lucro líquido aumenta o PL (lucros acumulados)"
            ]
          },
          {
            "tag": "B",
            "cells": [
              "DFC → BP",
              "Variação de caixa = caixa final − caixa inicial"
            ]
          },
          {
            "tag": "C",
            "cells": [
              "DMPL → BP",
              "Saldo final do PL na DMPL = PL no BP de fechamento"
            ]
          }
        ],
        "closing": "as demonstrações formam um sistema articulado — resultado, caixa e patrimônio precisam \"fechar\" entre si. As **Notas Explicativas** amarram os detalhes que sustentam essas pontes."
      }
    }
  ]
};
