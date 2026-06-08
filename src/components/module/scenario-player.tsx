"use client";

import { useMemo, useState } from "react";
import type { DecisionStep, Option, Scenario } from "@/types/scenario";
import type { Answer, CompletedScenario } from "@/types/results";
import { ScoreBar } from "./score-bar";
import { RichText } from "./rich-text";
import { ResolutionQuadro } from "./resolution-quadro";
import { ResultPanel } from "./result-panel";

const DIFFICULTY_LABEL: Record<string, string> = {
  intermediario: "Intermediário",
  avancado: "Avançado",
  super: "Super Desafio",
};

/** Seeded shuffle so the correct option isn't always in the same position. */
function seededShuffle<T>(arr: T[], seed: string): T[] {
  const copy = [...arr];
  let h = 0;
  for (let i = 0; i < seed.length; i++) h = (Math.imul(31, h) + seed.charCodeAt(i)) | 0;
  for (let i = copy.length - 1; i > 0; i--) {
    h = (Math.imul(h, 1664525) + 1013904223) | 0;
    const j = (h >>> 0) % (i + 1);
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function awardFor(option: Option, points: number): number {
  if (option.correct) return points;
  if (option.partial) return Math.round(points / 2);
  return 0;
}

const SEGMENTS = ["E1", "E2", "E3", "Resolução", "Resultado"];

interface ScenarioPlayerProps {
  scenario: Scenario;
  onFinish: (result: CompletedScenario) => void;
  onBack: () => void;
}

export function ScenarioPlayer({ scenario, onFinish, onBack }: ScenarioPlayerProps) {
  const [stepIndex, setStepIndex] = useState(0);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [showResolution, setShowResolution] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [fadeIn, setFadeIn] = useState(true);

  const maxScore = useMemo(
    () => scenario.steps.reduce((sum, s) => sum + s.points, 0),
    [scenario]
  );
  const score = answers.reduce((sum, a) => sum + a.award, 0);

  const currentStep = scenario.steps[stepIndex];
  const shuffled = useMemo(
    () => seededShuffle(currentStep.options, currentStep.id),
    [currentStep]
  );

  const position = showResult ? 4 : showResolution ? 3 : stepIndex;

  const triggerFade = (fn: () => void) => {
    setFadeIn(false);
    setTimeout(() => {
      fn();
      setFadeIn(true);
    }, 220);
  };

  function handleAnswer(option: Option, step: DecisionStep, idx: number) {
    const award = awardFor(option, step.points);
    const entry: Answer = {
      stepId: step.id,
      optionId: option.id,
      correct: option.correct,
      partial: !!option.partial,
      award,
    };
    const existing = answers.findIndex((a) => a.stepId === step.id);
    // Re-answering truncates subsequent answers (they followed from this choice).
    const next =
      existing >= 0 ? [...answers.slice(0, existing), entry] : [...answers, entry];
    setAnswers(next);
    setShowResolution(false);
    setShowResult(false);
    triggerFade(() => {
      if (idx < scenario.steps.length - 1) setStepIndex(idx + 1);
      else setShowResolution(true);
    });
  }

  function goBack() {
    if (showResult) {
      triggerFade(() => setShowResult(false));
      return;
    }
    if (showResolution) {
      triggerFade(() => setShowResolution(false));
      return;
    }
    if (stepIndex > 0) triggerFade(() => setStepIndex((i) => i - 1));
    else onBack();
  }

  function goToSegment(seg: number) {
    if (seg <= 2 && seg <= answers.length) {
      triggerFade(() => {
        setShowResult(false);
        setShowResolution(false);
        setStepIndex(seg);
      });
    } else if (seg === 3 && answers.length === scenario.steps.length) {
      triggerFade(() => {
        setShowResult(false);
        setShowResolution(true);
      });
    }
  }

  // Feedback banner from the step just before the current one.
  const prevStep = !showResolution && !showResult && stepIndex > 0 ? scenario.steps[stepIndex - 1] : null;
  const prevAnswer = prevStep ? answers.find((a) => a.stepId === prevStep.id) : null;
  const prevOption =
    prevStep && prevAnswer ? prevStep.options.find((o) => o.id === prevAnswer.optionId) : null;
  // On the resolution screen, surface the last decision's feedback.
  const lastStep = scenario.steps[scenario.steps.length - 1];
  const lastAnswer = answers.find((a) => a.stepId === lastStep.id);
  const lastOption = lastAnswer ? lastStep.options.find((o) => o.id === lastAnswer.optionId) : null;
  const bannerOption = showResolution ? lastOption : prevOption;

  // Revisit banner: current decision step already answered.
  const currentAnswer = answers.find((a) => a.stepId === currentStep.id);
  const currentChosen = currentAnswer
    ? currentStep.options.find((o) => o.id === currentAnswer.optionId)
    : null;

  return (
    <div className="relative min-h-screen overflow-hidden bg-surface px-4 font-sans text-on-surface antialiased">
      <div className="pointer-events-none fixed left-[-100px] top-[-200px] h-[500px] w-[500px] rounded-full bg-primary/5 blur-[120px]" />
      <div className="pointer-events-none fixed bottom-[-150px] right-[-80px] h-[400px] w-[400px] rounded-full bg-secondary/5 blur-[100px]" />

      <div
        className={`mx-auto max-w-[760px] pb-16 pt-28 transition-opacity duration-300 ${fadeIn ? "opacity-100" : "opacity-0"}`}
      >
        {/* Top bar */}
        <div className="mb-5 flex items-center justify-between gap-4">
          <div className="flex gap-2">
            <button
              onClick={onBack}
              className="cursor-pointer rounded-lg border border-outline-variant bg-transparent px-3.5 py-1.5 text-[13px] text-on-surface-variant transition-colors hover:bg-surface-container-low"
            >
              ← Cenários
            </button>
            {(stepIndex > 0 || showResolution || showResult) && (
              <button
                onClick={goBack}
                className="cursor-pointer rounded-lg border border-secondary/40 bg-transparent px-3.5 py-1.5 text-[13px] text-secondary transition-all hover:bg-secondary/10"
              >
                ← Etapa anterior
              </button>
            )}
          </div>
          <div className="text-right">
            <div className="text-[11px] uppercase tracking-wider text-outline">Pontuação</div>
            <div className="w-[170px]">
              <ScoreBar score={score} maxScore={maxScore} />
            </div>
          </div>
        </div>

        {/* Title + difficulty */}
        <div className="mb-3 flex flex-wrap items-center gap-2.5">
          <h2 className="m-0 font-heading text-2xl font-extrabold text-primary">{scenario.title}</h2>
          <span
            className={`rounded-md px-2.5 py-0.5 text-[11px] font-semibold ${
              scenario.difficulty === "super"
                ? "bg-tertiary-fixed text-on-tertiary-fixed"
                : "bg-secondary-container text-on-secondary-container"
            }`}
          >
            {DIFFICULTY_LABEL[scenario.difficulty]}
          </span>
        </div>

        {/* Progress segments */}
        <div className="mb-6 flex gap-1">
          {SEGMENTS.map((seg, i) => {
            const reachable = (i <= 2 && i <= answers.length) || (i === 3 && answers.length === scenario.steps.length);
            return (
              <div
                key={seg}
                onClick={() => reachable && goToSegment(i)}
                title={seg}
                className={`flex-1 rounded-sm transition-all ${
                  reachable ? "h-1.5 cursor-pointer opacity-100 hover:opacity-70" : "h-1 cursor-default opacity-50"
                } ${i < position ? "bg-secondary" : i === position ? "bg-amber-500" : "bg-surface-container-high"}`}
              />
            );
          })}
        </div>

        {/* Context panel */}
        <div className="mb-5 rounded-xl border border-outline-variant bg-surface-container-lowest p-6">
          <div className="mb-2 text-xs font-bold uppercase tracking-wider text-secondary">Contexto</div>
          <p className="m-0 text-[15px] leading-relaxed">
            <RichText text={scenario.context} />
          </p>

          {scenario.displayFields && scenario.displayFields.length > 0 && (
            <>
              {scenario.displayFieldsCaption && (
                <div className="mt-4 font-mono text-[11px] uppercase tracking-wider text-on-surface-variant">
                  {scenario.displayFieldsCaption}
                </div>
              )}
              <div className="mt-2 grid grid-cols-[repeat(auto-fit,minmax(120px,1fr))] gap-2">
                {scenario.displayFields.map((f) => (
                  <div key={f.label} className="rounded-lg bg-secondary/10 p-2 text-center">
                    <div className="text-[10px] uppercase tracking-wider text-on-surface-variant">{f.label}</div>
                    <div className="font-mono text-sm font-bold text-secondary">{f.value}</div>
                  </div>
                ))}
              </div>
            </>
          )}

          {scenario.displayTable && (
            <div className="mt-4 overflow-x-auto">
              <table className="w-full border-collapse overflow-hidden rounded-lg border border-outline-variant text-sm">
                <thead>
                  <tr>
                    {scenario.displayTable.columns.map((c) => (
                      <th key={c} className="bg-primary px-3 py-2 text-left text-xs font-semibold text-on-primary">
                        {c}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {scenario.displayTable.rows.map((row, ri) => (
                    <tr key={ri} className={ri % 2 === 1 ? "bg-surface-container-low" : "bg-surface-container-lowest"}>
                      {row.map((cell, ci) => (
                        <td
                          key={ci}
                          className={`px-3 py-2 align-top ${ci === 0 ? "font-mono font-bold text-secondary" : "text-on-surface-variant"}`}
                        >
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {scenario.displayNote && (
            <p className="mt-3 text-[13px] text-on-surface-variant">{scenario.displayNote}</p>
          )}
        </div>

        {/* Feedback banner from previous decision */}
        {bannerOption && (
          <div
            className={`mb-5 rounded-xl px-5 py-3.5 text-sm leading-relaxed ${
              bannerOption.correct
                ? "border border-emerald-200 bg-emerald-50"
                : bannerOption.partial
                  ? "border border-amber-200 bg-amber-50"
                  : "border border-red-200 bg-red-50"
            }`}
          >
            <span
              className={`font-bold ${
                bannerOption.correct ? "text-emerald-600" : bannerOption.partial ? "text-amber-600" : "text-red-600"
              }`}
            >
              {bannerOption.correct ? "Correto" : bannerOption.partial ? "Parcial" : "Reveja"} —{" "}
            </span>
            <RichText text={bannerOption.feedback} />
          </div>
        )}

        {/* Body */}
        {!showResolution && !showResult && (
          <div>
            {currentChosen && (
              <div className="mb-4 rounded-xl border border-dashed border-secondary/30 bg-surface-container-low px-5 py-3 text-[13px] leading-relaxed text-on-surface-variant">
                Sua resposta anterior: <strong className="text-secondary">{currentChosen.label}</strong> — mantenha ou
                escolha outra para recalcular a pontuação.
              </div>
            )}
            <p className="mb-1 font-mono text-[12px] uppercase tracking-wider text-on-surface-variant">
              {currentStep.label}
            </p>
            <h3 className="mb-4 font-heading text-lg font-bold text-primary">{currentStep.question}</h3>
            <div className="flex flex-col gap-2.5">
              {shuffled.map((opt) => {
                const wasSelected = currentAnswer?.optionId === opt.id;
                return (
                  <button
                    key={opt.id}
                    onClick={() => handleAnswer(opt, currentStep, stepIndex)}
                    className={`relative cursor-pointer rounded-xl border p-4 text-left text-[15px] font-medium leading-normal text-on-surface transition-all ${
                      wasSelected
                        ? "border-secondary bg-secondary/10"
                        : "border-outline-variant bg-surface-container-lowest hover:translate-x-1 hover:border-secondary/40 hover:bg-surface-container-low"
                    }`}
                  >
                    {wasSelected && (
                      <span className="absolute right-3 top-2 text-[11px] font-semibold text-secondary">
                        resposta atual
                      </span>
                    )}
                    {opt.label}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Resolution (Etapa 4 — expositiva) */}
        {showResolution && !showResult && (
          <div>
            <p className="mb-1 font-mono text-[12px] uppercase tracking-wider text-on-surface-variant">
              Etapa 4 — Resolução
            </p>
            <h3 className="mb-4 font-heading text-lg font-bold text-primary">
              <RichText text={scenario.resolution.prompt} />
            </h3>
            <ResolutionQuadro resolution={scenario.resolution} />
            <div className="mt-4 rounded-lg border-l-4 border-gold bg-gold-soft px-4 py-3 text-sm">
              <strong className="text-gold">Fechamento:</strong> {scenario.resolution.closing}
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <button
                onClick={goBack}
                className="cursor-pointer rounded-xl border border-outline-variant bg-surface-container-lowest px-6 py-3 text-sm font-semibold text-on-surface transition-all hover:bg-surface-container-low"
              >
                ← Etapa anterior
              </button>
              <button
                onClick={() => triggerFade(() => setShowResult(true))}
                className="cursor-pointer rounded-xl bg-primary px-6 py-3 text-sm font-bold text-on-primary transition-all hover:opacity-90"
              >
                Ver resultado →
              </button>
            </div>
          </div>
        )}

        {/* Result */}
        {showResult && (
          <div>
            <ResultPanel scenario={scenario} answers={answers} score={score} maxScore={maxScore} />
            <div className="mt-6 flex flex-wrap gap-3">
              <button
                onClick={() =>
                  triggerFade(() => {
                    setStepIndex(0);
                    setAnswers([]);
                    setShowResolution(false);
                    setShowResult(false);
                  })
                }
                className="cursor-pointer rounded-xl border border-outline-variant bg-surface-container-lowest px-6 py-3 text-sm font-semibold text-on-surface transition-all hover:bg-surface-container-low"
              >
                Refazer cenário
              </button>
              <button
                onClick={() => onFinish({ id: scenario.id, score, maxScore })}
                className="cursor-pointer rounded-xl bg-primary px-6 py-3 text-sm font-bold text-on-primary transition-all hover:opacity-90"
              >
                Concluir e voltar
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
