import type { Scenario } from "@/types/scenario";
import type { Answer } from "@/types/results";
import { ScoreBar } from "./score-bar";
import { ResolutionQuadro } from "./resolution-quadro";

function selo(pct: number): { label: string; tone: string } {
  if (pct >= 100) return { label: "Olho clínico de analista", tone: "text-emerald-600" };
  if (pct >= 80) return { label: "Bom olho crítico", tone: "text-emerald-600" };
  if (pct >= 50) return { label: "Analista em formação", tone: "text-amber-600" };
  return { label: "Releia o conceito e tente de novo", tone: "text-red-600" };
}

interface ResultPanelProps {
  scenario: Scenario;
  answers: Answer[];
  score: number;
  maxScore: number;
}

export function ResultPanel({ scenario, answers, score, maxScore }: ResultPanelProps) {
  const pct = maxScore > 0 ? (score / maxScore) * 100 : 0;
  const badge = selo(pct);

  return (
    <div className="space-y-6">
      {/* Score header */}
      <div className="rounded-xl border border-outline-variant bg-surface-container-lowest p-6">
        <div className="text-xs font-bold uppercase tracking-wider text-secondary">Resultado do cenário</div>
        <div className="mt-2 flex flex-wrap items-baseline gap-3">
          <span className="font-heading text-4xl font-extrabold text-primary">
            {score}
            <span className="text-xl text-on-surface-variant">/{maxScore}</span>
          </span>
          <span className={`font-heading text-lg font-bold ${badge.tone}`}>{badge.label}</span>
        </div>
        <div className="mt-4 max-w-sm">
          <ScoreBar score={score} maxScore={maxScore} />
        </div>
      </div>

      {/* Didactic explanation */}
      <div className="rounded-xl border border-outline-variant bg-surface-container-lowest p-6">
        <h3 className="m-0 mb-4 font-heading text-lg font-bold text-primary">Explicação didática</h3>
        <ul className="m-0 flex list-none flex-col gap-3 p-0">
          {scenario.steps.map((step) => {
            const ans = answers.find((a) => a.stepId === step.id);
            const correctOpt = step.options.find((o) => o.correct);
            const icon = ans?.correct ? "✓" : ans?.partial ? "◐" : "✕";
            const iconTone = ans?.correct ? "text-emerald-600" : ans?.partial ? "text-amber-600" : "text-red-600";
            return (
              <li key={step.id} className="flex gap-3">
                <span className={`mt-0.5 font-bold ${iconTone}`}>{icon}</span>
                <div>
                  <div className="text-[13px] font-mono uppercase tracking-wider text-on-surface-variant">
                    {step.label}
                  </div>
                  <div className="text-[15px] font-semibold text-on-surface">{correctOpt?.label}</div>
                  <div className="text-sm text-on-surface-variant">{correctOpt?.feedback}</div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Counterfactual */}
      <div className="rounded-xl border border-outline-variant bg-surface-container-lowest p-6">
        <h3 className="m-0 mb-2 font-heading text-lg font-bold text-primary">Contrafactual</h3>
        <p className="mt-0 mb-4 text-sm text-on-surface-variant">
          E se você tivesse escolhido a opção de outro usuário? Veja a consequência de cada desvio:
        </p>
        <ul className="m-0 flex list-none flex-col gap-3 p-0">
          {scenario.steps.map((step) => {
            const ans = answers.find((a) => a.stepId === step.id);
            const distractor =
              step.options.find((o) => o.id !== ans?.optionId && !o.correct) ??
              step.options.find((o) => !o.correct);
            if (!distractor) return null;
            return (
              <li key={step.id} className="rounded-lg bg-surface-container-low px-4 py-3">
                <div className="text-[13px] font-semibold text-on-surface">
                  Escolher “{distractor.label}”
                </div>
                <div className="mt-1 text-sm text-on-surface-variant">→ {distractor.feedback}</div>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Resolution quadro (recap) */}
      <div className="rounded-xl border border-outline-variant bg-surface-container-lowest p-6">
        <h3 className="m-0 mb-4 font-heading text-lg font-bold text-primary">Quadro de resolução</h3>
        <ResolutionQuadro resolution={scenario.resolution} />
        <div className="mt-4 rounded-lg border-l-4 border-gold bg-gold-soft px-4 py-3 text-sm">
          <strong className="text-gold">Fechamento:</strong> {scenario.resolution.closing}
        </div>
      </div>
    </div>
  );
}
