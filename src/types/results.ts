/* ═══════════════════════════════════════════════════════════════
   TIPOS — RESULTADOS (motor conceitual)
   ═══════════════════════════════════════════════════════════════ */

/** Resposta registrada em uma etapa de decisão */
export interface Answer {
  stepId: string;
  optionId: string;
  correct: boolean;
  partial: boolean;
  award: number; // pontos efetivamente ganhos na etapa
}

/** Cenário concluído com pontuação final */
export interface CompletedScenario {
  id: string;
  score: number;
  maxScore: number;
}
