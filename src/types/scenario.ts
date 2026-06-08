/* ═══════════════════════════════════════════════════════════════
   TIPOS — CENÁRIOS (motor de avaliação conceitual, Aula 1)
   ═══════════════════════════════════════════════════════════════ */

export type Difficulty = "intermediario" | "avancado" | "super";

export interface Option {
  id: string;
  label: string;
  correct: boolean; // resposta plenamente correta da etapa
  partial?: boolean; // aceitável, porém incompleta → pontua 50%
  feedback: string; // o "why" mostrado ao escolher
}

export interface DecisionStep {
  id: string;
  label: string; // "Etapa 1 — A pergunta do investidor"
  question: string;
  options: Option[]; // 3 ramificações: 1 correta + 2 distratoras
  points: number; // padrão: 100
}

export type Strength = "forte" | "parcial" | "fraco";

export interface ResolutionRow {
  tag: "A" | "B" | "C";
  cells: string[]; // colunas textuais (sem o tag e sem o pill de força)
  strength?: Strength; // renderiza um pill colorido na coluna de força
  strengthLabel?: string; // texto do pill (ex.: "baixa"), se diferente da chave
}

export interface ResolutionChart {
  caption: string;
  valueLabel: string;
  data: { name: string; value: number }[];
}

export interface Resolution {
  prompt: string;
  columns: string[]; // cabeçalhos das colunas textuais
  strengthHeader?: string; // cabeçalho da coluna de força (se houver pills)
  rows: ResolutionRow[];
  closing: string;
  chart?: ResolutionChart;
}

export interface DisplayField {
  label: string;
  value: string;
}

export interface DisplayTable {
  columns: string[];
  rows: string[][];
}

export interface Scenario {
  id: string;
  n: number;
  title: string;
  difficulty: Difficulty;
  concept: string;
  context: string;
  displayFieldsCaption?: string;
  displayFields?: DisplayField[];
  displayTable?: DisplayTable;
  displayNote?: string;
  steps: DecisionStep[]; // 3 etapas de decisão
  resolution: Resolution; // Etapa 4 — expositiva, não pontua
}

export interface ModuleData {
  n: number;
  eyebrow: string;
  title: string;
  subtitle: string;
  intro: string;
  scenarios: Scenario[];
}
