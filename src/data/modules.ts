export type ModuleItem = {
  n: number;
  navLabel: string;
  cardLabel: string;
  description: string;
  icon: string;
  href: string;
};

export const MODULES: ModuleItem[] = [
  {
    n: 1,
    navLabel: "1. Introdução",
    cardLabel: "Introdução à Análise",
    description:
      "Fundamentos, objetivos e usuários da análise das demonstrações financeiras.",
    icon: "menu_book",
    href: "/modulos/1",
  },
  {
    n: 2,
    navLabel: "2. Estrutura",
    cardLabel: "Estrutura das Demonstrações",
    description:
      "Como as demonstrações se conectam: Balanço, DRE, DFC e DMPL em um todo coerente.",
    icon: "schema",
    href: "/modulos/2",
  },
  {
    n: 3,
    navLabel: "3. Princípios Contábeis",
    cardLabel: "Princípios Contábeis",
    description:
      "Regime de competência, princípios contábeis e qualidade da informação contábil.",
    icon: "rule",
    href: "/modulos/3",
  },
  {
    n: 4,
    navLabel: "4. Balanço Patrimonial",
    cardLabel: "Balanço Patrimonial",
    description:
      "Ativo, passivo e patrimônio líquido: leitura e interpretação do Balanço Patrimonial.",
    icon: "account_balance",
    href: "/modulos/4",
  },
  {
    n: 5,
    navLabel: "5. DRE",
    cardLabel: "Resultado (DRE)",
    description:
      "Receitas, custos, despesas e a formação do resultado do exercício na DRE.",
    icon: "receipt_long",
    href: "/modulos/5",
  },
  {
    n: 6,
    navLabel: "6. DFC",
    cardLabel: "Fluxos de Caixa (DFC)",
    description:
      "Fluxos operacionais, de investimento e financiamento e a geração de caixa.",
    icon: "payments",
    href: "/modulos/6",
  },
  {
    n: 7,
    navLabel: "7. Horizontal e Vertical",
    cardLabel: "Análise Horizontal e Vertical",
    description:
      "Evolução temporal e composição percentual das demonstrações financeiras.",
    icon: "table_chart",
    href: "/modulos/7",
  },
  {
    n: 8,
    navLabel: "8. Liquidez",
    cardLabel: "Liquidez e Capital de Giro",
    description:
      "Índices de liquidez, ciclo operacional e gestão do capital de giro.",
    icon: "water_drop",
    href: "/modulos/8",
  },
  {
    n: 9,
    navLabel: "9. Endividamento",
    cardLabel: "Endividamento e Estrutura de Capital",
    description:
      "Composição da dívida, alavancagem e estrutura de capital da empresa.",
    icon: "balance",
    href: "/modulos/9",
  },
  {
    n: 10,
    navLabel: "10. Rentabilidade",
    cardLabel: "Rentabilidade e Retorno",
    description:
      "Margens, ROA, ROE e a geração de retorno sobre o capital investido.",
    icon: "trending_up",
    href: "/modulos/10",
  },
  {
    n: 11,
    navLabel: "11. DuPont",
    cardLabel: "Modelo DuPont",
    description:
      "Análise integrada: decomposição do ROE e os direcionadores de retorno.",
    icon: "hub",
    href: "/modulos/11",
  },
  {
    n: 12,
    navLabel: "12. Benchmarking",
    cardLabel: "Comparativa e Benchmarking",
    description:
      "Comparação entre empresas, setores e benchmarks de mercado.",
    icon: "leaderboard",
    href: "/modulos/12",
  },
  {
    n: 13,
    navLabel: "13. Qualidade do Lucro",
    cardLabel: "Qualidade do Lucro e Sinais de Alerta",
    description:
      "Qualidade do lucro, red flags e detecção de manipulação contábil.",
    icon: "troubleshoot",
    href: "/modulos/13",
  },
  {
    n: 14,
    navLabel: "14. Tomada de Decisão",
    cardLabel: "Tomada de Decisão",
    description:
      "Da análise à decisão: crédito, investimento e avaliação de desempenho.",
    icon: "insights",
    href: "/modulos/14",
  },
  {
    n: 15,
    navLabel: "15. Estudo de Caso",
    cardLabel: "Estudo de Caso Integrado",
    description:
      "Aplicação completa: estudo de caso integrado e revisão geral do curso.",
    icon: "workspace_premium",
    href: "/modulos/15",
  },
];
